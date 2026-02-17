import { Node, Project, SyntaxKind } from "ts-morph";
import fs from "node:fs";
import path from "node:path";

const SRC_GLOB = "src/components/**/*.{ts,tsx}";
const OUTPUT_FILE = "docs/components.manifest.json";
const INCLUDE_ICONS = process.env.MANIFEST_INCLUDE_ICONS === "true";

function isIconComponentName(componentName) {
  return componentName.endsWith("Icon");
}

function readPackageImportPath() {
  const packageJsonPath = path.resolve("package.json");

  if (!fs.existsSync(packageJsonPath)) {
    return "@components/ui";
  }

  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    return process.env.COMPONENT_PACKAGE_IMPORT_PATH || packageJson.name || "@components/ui";
  } catch {
    return process.env.COMPONENT_PACKAGE_IMPORT_PATH || "@components/ui";
  }
}

function findPropsDeclaration(sf, componentName) {
  const propsName = `${componentName}Props`;
  const exported = sf.getExportedDeclarations();

  const decl =
    exported.get(propsName)?.[0] ||
    sf.getInterface(propsName) ||
    sf.getTypeAlias(propsName);
  if (!decl) {
    return null;
  }

  if (Node.isInterfaceDeclaration(decl)) {
    return decl;
  }

  if (Node.isTypeAliasDeclaration(decl)) {
    return decl;
  }

  return null;
}

function getJsDocText(node) {
  const docs = node.getJsDocs?.() ?? [];
  const text = docs
    .map((d) => d.getDescription().trim())
    .filter(Boolean)
    .join("\n\n");

  return text || undefined;
}

function getDefaultTag(node) {
  const doc = node.getJsDocs?.()?.[0];
  if (!doc) {
    return undefined;
  }

  const tag = doc.getTags().find((t) => t.getTagName() === "default");
  const value = tag?.getCommentText()?.trim();

  return value || undefined;
}

function isDeclarationFromReactTypes(declaration) {
  const sourceFilePath = declaration.getSourceFile().getFilePath();
  return sourceFilePath.includes("/node_modules/@types/react/");
}

function extractPropsFromInterfaceOrType(propsDecl) {
  if (!propsDecl) {
    return [];
  }

  if (!Node.isInterfaceDeclaration(propsDecl) && !Node.isTypeAliasDeclaration(propsDecl)) {
    return [];
  }

  const propsType = propsDecl.getType();
  const properties = propsType.getProperties();

  return properties.map((propertySymbol) => {
    const declarations = propertySymbol.getDeclarations();
    const allDeclarationsFromReactTypes =
      declarations.length > 0 && declarations.every((decl) => isDeclarationFromReactTypes(decl));

    if (allDeclarationsFromReactTypes) {
      return null;
    }

    const firstDeclaration = declarations[0] ?? propsDecl;
    const type = propertySymbol.getTypeAtLocation(firstDeclaration).getText(propsDecl);
    const name = propertySymbol.getName();

    const hasQuestionToken = declarations.some(
      (decl) =>
        (Node.isPropertySignature(decl) ||
          Node.isPropertyDeclaration(decl) ||
          Node.isParameterDeclaration(decl)) &&
        decl.hasQuestionToken?.(),
    );

    const required = !hasQuestionToken && !type.includes("undefined");

    let description;
    let defaultValue;

    for (const decl of declarations) {
      if (!description) {
        description = getJsDocText(decl);
      }

      if (!defaultValue) {
        defaultValue = getDefaultTag(decl);
      }
    }

    return {
      name,
      type,
      required,
      default: defaultValue,
      description,
    };
  }).filter(Boolean);
}

function detectComposes(sf) {
  const importedNames = new Set();

  for (const imp of sf.getImportDeclarations()) {
    for (const named of imp.getNamedImports()) {
      importedNames.add(named.getName());
    }
  }

  const composes = [];
  const jsxSelfClosing = sf.getDescendantsOfKind(SyntaxKind.JsxSelfClosingElement);
  const jsxOpening = sf.getDescendantsOfKind(SyntaxKind.JsxOpeningElement);

  const usedInJsx = new Set();
  for (const element of jsxSelfClosing) {
    usedInJsx.add(element.getTagNameNode().getText());
  }
  for (const element of jsxOpening) {
    usedInJsx.add(element.getTagNameNode().getText());
  }

  for (const name of importedNames) {
    if (usedInJsx.has(name)) {
      composes.push(name);
    }
  }

  return composes.filter((name) => /^[A-Z]/.test(name));
}

function isProbablyReactComponent(decl) {
  function isWrappedReactComponentInitializer(initializer) {
    if (!initializer) {
      return false;
    }

    if (Node.isArrowFunction(initializer) || Node.isFunctionExpression(initializer)) {
      return true;
    }

    if (!Node.isCallExpression(initializer)) {
      return false;
    }

    const expressionText = initializer.getExpression().getText();
    const isKnownWrapper =
      expressionText === "forwardRef" ||
      expressionText === "memo" ||
      expressionText.endsWith(".forwardRef") ||
      expressionText.endsWith(".memo");

    if (!isKnownWrapper) {
      return false;
    }

    const firstArg = initializer.getArguments()[0];
    return isWrappedReactComponentInitializer(firstArg);
  }

  if (Node.isFunctionDeclaration(decl)) {
    const name = decl.getName();
    return !!name && /^[A-Z]/.test(name);
  }

  if (Node.isVariableDeclaration(decl)) {
    const name = decl.getName();
    if (!/^[A-Z]/.test(name)) {
      return false;
    }

    const initializer = decl.getInitializer();
    return isWrappedReactComponentInitializer(initializer);
  }

  return false;
}

function main() {
  const packageImportPath = readPackageImportPath();

  const project = new Project({
    tsConfigFilePath: path.resolve("tsconfig.json"),
    skipAddingFilesFromTsConfig: false,
  });

  project.addSourceFilesAtPaths(SRC_GLOB);

  const components = [];

  for (const sourceFile of project.getSourceFiles()) {
    const exported = sourceFile.getExportedDeclarations();
    const composes = detectComposes(sourceFile);

    for (const [exportName, declarations] of exported) {
      if (exportName === "default") {
        continue;
      }

      const declaration = declarations[0];

      if (!declaration || !isProbablyReactComponent(declaration)) {
        continue;
      }

      const componentName = exportName;
      if (!INCLUDE_ICONS && isIconComponentName(componentName)) {
        continue;
      }

      const propsDeclaration = findPropsDeclaration(sourceFile, componentName);
      const summary =
        getJsDocText(declaration) ||
        (propsDeclaration ? getJsDocText(propsDeclaration) : undefined);
      const props = extractPropsFromInterfaceOrType(propsDeclaration);

      components.push({
        name: componentName,
        summary,
        import: {
          from: packageImportPath,
          named: componentName,
        },
        props,
        composes: composes.length ? composes : undefined,
        examples: [],
      });
    }
  }

  const byName = new Map();
  for (const component of components) {
    if (!byName.has(component.name)) {
      byName.set(component.name, component);
    }
  }

  const manifest = {
    components: Array.from(byName.values()).sort((a, b) =>
      a.name.localeCompare(b.name),
    ),
  };

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2), "utf-8");

  console.log(
    `Wrote ${OUTPUT_FILE} with ${manifest.components.length} components. Import path: ${packageImportPath}`,
  );
}

main();

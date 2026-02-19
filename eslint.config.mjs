import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import storybook from "eslint-plugin-storybook";
import eslintConfigPrettier from "eslint-config-prettier";

// Optional (TypeScript):
import tseslint from "typescript-eslint";

export default defineConfig([
  // Ignore patterns (relative to project root)
  {
    ignores: ["storybook-static/**", "registry/**", "dist/**", "node_modules/**, *.min.js"],
  },

  // Base JS recommended
  js.configs.recommended,

  // Optional TypeScript recommended (remove if not using TS)
  ...tseslint.configs.recommended,

  // React recommended (flat) + React 17+ JSX runtime
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],

  // JSX a11y recommended (flat)
  jsxA11y.flatConfigs.recommended,

  // Import rules recommended (flat)
  importPlugin.flatConfigs.recommended,

  // Storybook rules recommended (flat)
  ...storybook.configs["flat/recommended"],

  // Your project defaults / overrides
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      // Important for flat config: register the plugin objects
      "react-hooks": reactHooks,

      // Optional: if you want to use the react-refresh plugin for Fast Refresh support
      "react-refresh": reactRefresh,
    },
    rules: {
      // Hooks rules (this approach works reliably with flat config)
      ...reactHooks.configs.recommended.rules,

      // Common React tweaks (optional)
      "react/prop-types": "off", // if you use TS or prefer not using prop-types
    },
    // React settings (important for some rules to work correctly)
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json"
        }
      }
    },
  },

  // Prettier should be last to override other formatting rules
  eslintConfigPrettier,
]);

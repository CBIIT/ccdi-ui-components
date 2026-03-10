#!/usr/bin/env node
/**
 * Rewrites all registry JSON files under registry/ to use a versioned base URL.
 * Usage: REGISTRY_VERSION=v1.0.0 node scripts/rewrite-registry-base.mjs
 * If REGISTRY_VERSION is unset, no changes are made.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const registryDir = join(__dirname, "..", "registry");
const baseUrl = "https://cbiit.github.io/ccdi-ui-components/r";
const version = process.env.REGISTRY_VERSION;

if (!version) {
  process.exit(0);
}

const versionedBase = `${baseUrl}/${version}`;
const versionedBaseWithTrailing = versionedBase.endsWith("/") ? versionedBase : `${versionedBase}/`;
const baseWithTrailing = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

async function main() {
  const files = await readdir(registryDir);
  const jsonFiles = files.filter((f) => f.endsWith(".json"));
  let count = 0;
  for (const file of jsonFiles) {
    const path = join(registryDir, file);
    let content = await readFile(path, "utf-8");
    const next = content.replace(new RegExp(escapeRe(baseWithTrailing), "g"), versionedBaseWithTrailing);
    if (next !== content) {
      await writeFile(path, next);
      count++;
    }
  }
  if (count > 0) {
    console.log(`Rewrote base URL to ${versionedBaseWithTrailing} in ${count} file(s).`);
  }
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

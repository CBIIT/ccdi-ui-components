// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url"
import type { StorybookConfig } from "@storybook/react-vite"
import { resolve, dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-onboarding", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    // Support deployment to a subpath (e.g. /v1.0.0/) for versioned Storybook
    const base = process.env.STORYBOOK_BASE_PATH
    if (base !== undefined && base !== "") {
      config.base = base
    }
    // Configure Vite to resolve aliases for @
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": resolve(__dirname, "../src"),
      }
    }

    // Configure Vite to ignore "use client" warnings
    if (config.build) {
      config.build.rollupOptions = {
        ...config.build.rollupOptions,
        onwarn(warning, warn) {
          // Ignore "use client" warnings
          if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
            return
          }
          // Ignore sourcemap warnings for "use client"
          if (warning.message && warning.message.includes('"use client"')) {
            return
          }
          // Ignore sourcemap resolution errors
          if (warning.message && warning.message.includes("Can't resolve original location")) {
            return
          }
          // Ignore sourcemap errors
          if (warning.code === "SOURCEMAP_ERROR") {
            return
          }
          warn(warning)
        },
      }
    }

    return config
  },
}
export default config

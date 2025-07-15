import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";

export default defineConfig([
  // Base JS config
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      js,
      react: pluginReact,
      security: pluginSecurity,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      "security/detect-eval-with-expression": "error",
    },
  },

  // Node.js support
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Mocha test support
  {
    files: ["tests/**/*.{js,mjs}"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
]);

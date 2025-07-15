import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS config
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, // browser globals (like window, document)
      },
    },
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // Node.js support (e.g., process.env)
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node, // adds process, __dirname, etc.
      },
    },
  },

  // Mocha test globals (describe, it, after)
  {
    files: ["tests/**/*.{js,mjs}"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },

  // // React plugin (includes JSX rules)
  // {
  //   files: ["**/*.{js,jsx}"],
  //   plugins: {
  //     react: pluginReact,
  //   },
  //   settings: {
  //     react: {
  //       version: "detect", // to silence the React version warning
  //     },
  //   },
  //   rules: {
  //     ...pluginReact.configs.recommended.rules,
  //   },
  // },
]);

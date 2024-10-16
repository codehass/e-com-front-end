import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { parse } from "postcss";


export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "plugin:prettier/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json"
    },
  }
];
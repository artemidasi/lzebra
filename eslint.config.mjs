import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import _import from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/node_modules/"],
  },
  ...fixupConfigRules(
    compat.extends(
      "plugin:react/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:import/typescript",
      "plugin:prettier/recommended",
    )
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      "simple-import-sort": simpleImportSort,
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 12,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/ban-ts-ignore": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],

      "react/react-in-jsx-scope": "off",
      "react/prop-types": 0,
      "no-console": 2,
      "import/first": "error",
      "import/newline-after-import": "warn",
      "import/no-duplicates": "error",
      "simple-import-sort/exports": "warn",

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^(next|react)"],
            ["^"],
            ["^public"],
            ["^(store|reducers)"],
            ["^hooks"],
            ["^components"],
            ["^shared"],
            ["^data"],
            ["^constants"],
            ["^utils"],
            ["^types"],
            ["^@styles"],
            ["^@ui-kit"],
            ["^\\."],
            ["\\.css$", "\\.scss$"],
          ],
        },
      ],
    },
  },
];

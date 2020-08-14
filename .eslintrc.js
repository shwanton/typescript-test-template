module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    indent: "off",
    "@typescript-eslint/indent": "off",
    "no-shadow": ["error", { builtinGlobals: false, hoist: "functions" }],
    "no-unused-vars": "off",
    "simple-import-sort/sort": "error",
    "sort-imports": "off",
  },
  overrides: [
    {
      files: ["*.js"],
    },
    {
      parser: "@typescript-eslint/parser",
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint"],
    },
    {
      parser: "@typescript-eslint/parser",
      files: ["**/*.test.ts", "**/*.test.tsx"],
      plugins: ["@typescript-eslint", "jest"],
    },
  ],
};

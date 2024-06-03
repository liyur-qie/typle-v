module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "plugin:vue/essential",
  ],
  rules: {
    "no-console": "error",
    camelcase: ["error", { properties: "never" }],
    semi: ["error", "always"],
  },
};
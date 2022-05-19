module.exports = {
  plugins: ["prettier"],
  env: {
    node: true,
    jest: true,
    mocha: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    // specifying a module sourcetype prevent eslint from marking import statements as errors
    sourceType: "module",
  },
  extends: [
    // use the recommended rule set for both plain javascript and vue
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier/vue",
  ],
  rules: {
    // we should always disable console logs and debugging in production
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prefer-const": "error",
    "no-var": "error",
    eqeqeq: "error",
    "no-shadow": "error",
    "no-undef-init": "error",
    "no-duplicate-imports": "error",
    "no-return-await": "error",
    "prettier/prettier": "error",
  },
  globals: {
    Cypress: true,
    cy: true,
  },
};

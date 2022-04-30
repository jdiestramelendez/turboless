module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": [
    "plugin:you-dont-need-lodash-underscore/compatible",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:security/recommended"
  ],
  "plugins": [
    "@typescript-eslint",
    "jest",
    "security",
    "node"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/semi": "warn",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-namespace": "warn",
    "security/detect-object-injection": "warn",
    "no-var": "error",
    "no-console": "warn",
    "camelcase": "off",
    "curly": "warn",
    "eqeqeq": "warn",
    "no-throw-literal": "warn",
    "semi": "off",
    "no-empty": "warn",
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "no-use-before-define": "off"
  },
  "ignorePatterns": [
    "./package.json",
    "./package-lock.json"
  ]
}

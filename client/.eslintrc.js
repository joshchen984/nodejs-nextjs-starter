const path = require('path');
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-typescript', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: path.join(__dirname, 'tsconfig.json'),
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
  },
  ignorePatterns: ['.eslintrc.js'],
};

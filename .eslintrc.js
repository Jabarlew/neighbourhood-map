'use strict';

module.exports = {
  root: true,
  extends: 'airbnb',
  parserOptions: { sourceType: 'script' },
  env: { es6: true },
  globals: {
    google: false,
  },
  rules: {
    strict: ['error', 'global'],
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      parser: 'babel-eslint',
      parserOptions: {
        sourceType: 'module',
      },
      env: {
        browser: true,
      },
      rules: {
        'import/prefer-default-export': 0,
        'react/jsx-filename-extension': 0,
      },
    },
  ],
};

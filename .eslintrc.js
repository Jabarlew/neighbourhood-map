'use strict';

module.exports = {
  root: true,
  extends: 'airbnb',
  parserOptions: { sourceType: 'script' },
  env: { es6: true },
  rules: {
    strict: ['error', 'global'],
  },
  globals: { google: false },
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

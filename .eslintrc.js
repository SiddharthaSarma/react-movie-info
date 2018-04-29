module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/no-did-mount-set-state': 0,
    'jsx-a11y/anchor-is-valid': 0,
    "indent": [2, 2]
  },
};

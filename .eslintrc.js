module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off'
  },
  env: {
    browser: true,
  },
};

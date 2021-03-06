module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: { sourceType: 'module' },
  // required to lint *.vue files
  plugins: [ 'html' ],
  // check if imports actually resolve
  settings: {
    'import/resolver': { webpack: { config: 'build/webpack.base.conf.js' } }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'linebreak-style': 0,
    'import/extensions': [ 0, 'always', { js: 'never', vue: 'never' } ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};

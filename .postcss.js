
const plugins = ([
  'postcss-devtools',
  'postcss-import',
  'precss',
  'stylelint',
  'rucksack-css',
  'postcss-cssnext',
  'postcss-browser-reporter',
  'postcss-reporter'
]).filter((plugin) => {
  if (process.env.NODE_ENV !== 'build') return true;
  return (plugin !== 'postcss-devtools')
    && (plugin !== 'postcss-browser-reporter')
    && (plugin !== 'postcss-reporter');
});

module.exports = {
  parser: 'sugarss',
  use: plugins,
  'postcss-cssnext': {
    autoprefixer: {
      browsers: [
        'last 2 versions',
        'Explorer >= 9',
        'Android >= 4',
        'iOS >= 8'
      ]
    }
  }
};

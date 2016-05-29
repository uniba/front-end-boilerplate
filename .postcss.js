
const plugins = ([
  'postcss-devtools',
  'precss',
  'rucksack-css',
  'postcss-cssnext',
  'postcss-browser-reporter',
  'postcss-reporter'
]).filter((plugin) => {
  return (plugin !== 'postcss-devtools' && process.env.NODE_ENV === 'production');
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

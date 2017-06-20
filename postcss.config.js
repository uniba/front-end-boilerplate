
module.exports = {
  plugins: {
    'postcss-devtools': {},
    'postcss-import': {},
    'stylelint': {},
    'postcss-cssnext': {},
    'postcss-browser-reporter': {},
    'postcss-reporter': {},
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
  }
};

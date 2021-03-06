
const resolve = require('path').resolve;
const webpack = require('webpack');
const cssnext = require('postcss-cssnext');

module.exports = {

  context: resolve('./src'),

  entry: {
    app: './javascripts/app.js'
  },

  resolve: {
    modules: [
      './node_modules'
    ],
    alias: {
    }
  },

  output: {
    path: resolve('./build'),
    filename: 'javascripts/[name].js'
  },

  devServer: {
    contentBase: resolve('./build')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        enforce: 'pre',
        loaders: ['eslint-loader'] // https://github.com/MoOx/eslint-loader#options
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        include: /(node_modules)/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\/stylesheets\/.*\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\/javascripts\/.*\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

};

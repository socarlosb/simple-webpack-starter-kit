const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

var isProd = process.env.NODE_ENV === 'production' // true or false
var cssDev = ['style-loader', 'css-loader', 'sass-loader']
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',

  use: [{
    loader: 'css-loader',
    options: {
      // sourceMap: true
    }
  }, {
    loader: 'sass-loader',
    options: {
      // sourceMap: true
    }
  }],
  publicPath: '/dist'
})
var cssConfig = isProd ? cssProd : cssDev

module.exports = {
  devtool: "source-map",
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          "presets": [
            ["env", {
              "modules": false
            }]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          'file-loader?name=img/[name].[ext]',
          'image-webpack-loader'
        ]
      },

    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    // compress: true,
    stats: "errors-only",
    open: true,
    hot: true
  },
  plugins: [
    // extractPlugin,
    new ExtractTextPlugin({
      filename: 'css/styles.css',
      disable: !isProd,
      allChunks: true
    }),
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new Webpack.NamedModulesPlugin(),
    new Webpack.HotModuleReplacementPlugin()
  ]
};

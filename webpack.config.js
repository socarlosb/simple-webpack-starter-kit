const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const extractPlugin = new ExtractTextPlugin({
//   filename: 'main.css'
// });

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION ? ['./src/index.js'] : [
  './src/index.js',
  'webpack/hot/dev-server',
  'webpack-dev-server/client?http://localhost:8080'
];

const extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

const plugins = PRODUCTION ? [
  new UglifyJsPlugin(),
  extractPlugin
] : [
  new webpack.HotModuleReplacementPlugin()
];

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION),
  })
);

const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';

const cssLoader = PRODUCTION ?
  extractPlugin.extract({
    use: ['css-loader', 'sass-loader']
  }) : ['style-loader', 'css-loader?localIdentName=' + cssIdentifier];

module.exports = {
  devtool: 'source-map',
  entry: entry,
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: "babel-loader"
    }],
    loaders: [{
      test: /\.(jpg|png|gif)$/,
      exclude: /node_modules/,
      loaders: ["url-loader?limit=10000&name=images/[name].[ext]"]
    }],
    loaders: [{
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: cssLoader
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
};

var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION ? ['./src/index.js'] : [
  './src/index.js',
  'webpack/hot/dev-server',
  'webpack-dev-server/client?http://localhost:8080'
];

const plugins = PRODUCTION ? [
  new UglifyJsPlugin({
    uglifyOptions: {
      mangle: false,
      output: {
        comments: true
      },
      warnings: true
    }
  })
] : [new webpack.HotModuleReplacementPlugin()];

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION),
  })
);
module.exports = {
  devtool: 'source-map',
  entry: entry,
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }],
    loaders: [{
      test: /\.(jpg|png|gif)$/,
      exclude: /node_modules/,
      loader: ["url-loader?limit=10000&name=images/[name].[ext]"]
    }],
    loaders: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: ['style-loader', 'css-loader']
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
};

var path = require('path');
var webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION ? ['./src/index.js'] : [
  './src/index.js',
  'webpack/hot/dev-server',
  'webpack-dev-server/client?http://localhost:8080'
];

const plugins = PRODUCTION ? [] : [new webpack.HotModuleReplacementPlugin()];

module.exports = {
  entry: [
    './src/index.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  plugins: plugins,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  }
};

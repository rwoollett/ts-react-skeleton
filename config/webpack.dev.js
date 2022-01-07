const path = require('path');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const env = require('../env');

const devConfig = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    host: env.devServer.host || 'localhost',
    port: env.devServer.port || 3000,
    hot: true,
    proxy: {
        '/api': {
        target: 'http://localhost:8081',
        secure: false
        }
    },
    historyApiFallback: {
      disableDotRule: true,
      index: '/index.html',
    },
  },
  module: {
  },
  plugins: [
  ]
};

module.exports = merge(commonConfig, devConfig);


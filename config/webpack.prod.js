const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    sourceMapFilename: "[name]-[contenthash].map",
    chunkFilename: '[id].[chunkhash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // cacheGroups: {
      //   defaultVendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10,
      //     reuseExistingChunk: true
      //   }
      // },
    },
  },
  module: {
  },
  plugins: [
   //new BundleAnalyzerPlugin()
   new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
   }),
   new webpack.optimize.AggressiveMergingPlugin()
  ]

}

module.exports = merge(commonConfig, prodConfig);



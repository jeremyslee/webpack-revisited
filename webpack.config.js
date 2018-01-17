const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  module: {
    rules: [
      /* 
      // Adds CSS to the DOM by injecting a <style> tag
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
      */
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otff)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};

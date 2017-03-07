const path = require('path');
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist/'),
    filename: 'app.js',
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};

module.exports = config;

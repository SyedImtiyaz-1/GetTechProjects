const path = require('path');

module.exports = {
  mode: 'development', // Set to 'development' or 'production'
  entry: {
    login: './src/login.js',
    payment: './src/payment.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

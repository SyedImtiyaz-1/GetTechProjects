const path = require('path');

module.exports = {
  mode: 'development', // Set to 'development' or 'production'
  entry: {
    Log In: './src/Log In.js',
    payment: './src/payment.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

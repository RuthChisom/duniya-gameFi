const path = require('path');

module.exports = {
  mode: 'development',
  entry: './webflow.js', // Replace with the entry point of your JavaScript code
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Replace with the output directory path
  },
};
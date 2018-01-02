'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: _path2.default.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.js$/, include: _path2.default.resolve(__dirname, 'src'), use: 'babel-loader' }]
  }
};


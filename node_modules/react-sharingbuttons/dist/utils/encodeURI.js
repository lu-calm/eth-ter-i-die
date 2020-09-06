'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (string) {
  if (typeof string === 'undefined') {
    return '';
  }

  return encodeURIComponent(string);
};
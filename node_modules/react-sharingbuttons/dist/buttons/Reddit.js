'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SharingButton = require('../components/SharingButton');

var _SharingButton2 = _interopRequireDefault(_SharingButton);

var _Reddit = require('../icons/Reddit');

var _Reddit2 = _interopRequireDefault(_Reddit);

var _encodeURI = require('../utils/encodeURI');

var _encodeURI2 = _interopRequireDefault(_encodeURI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Reddit = function Reddit(props) {
  var text = props.text || 'Reddit';
  var url = (0, _encodeURI2.default)(props.url);
  var fullUrl = 'https://reddit.com/submit/?url=' + url;

  return _react2.default.createElement(_SharingButton2.default, {
    type: 'reddit',
    onClick: props.onClick,
    icon: _Reddit2.default,
    text: text,
    fullUrl: fullUrl
  });
};

Reddit.propTypes = {
  text: _propTypes2.default.string,
  url: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

exports.default = Reddit;
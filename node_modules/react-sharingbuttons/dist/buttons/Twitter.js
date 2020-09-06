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

var _Twitter = require('../icons/Twitter');

var _Twitter2 = _interopRequireDefault(_Twitter);

var _encodeURI = require('../utils/encodeURI');

var _encodeURI2 = _interopRequireDefault(_encodeURI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Twitter = function Twitter(props) {
  var text = props.text || 'Twitter';
  var url = (0, _encodeURI2.default)(props.url);
  var shareText = (0, _encodeURI2.default)(props.shareText);
  var fullUrl = 'https://twitter.com/intent/tweet/?text=' + shareText + '&url=' + url;

  return _react2.default.createElement(_SharingButton2.default, {
    type: 'twitter',
    onClick: props.onClick,
    icon: _Twitter2.default,
    text: text,
    fullUrl: fullUrl
  });
};

Twitter.propTypes = {
  text: _propTypes2.default.string,
  shareText: _propTypes2.default.string,
  url: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

exports.default = Twitter;
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

var _Facebook = require('../icons/Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

var _encodeURI = require('../utils/encodeURI');

var _encodeURI2 = _interopRequireDefault(_encodeURI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Facebook = function Facebook(props) {
  var text = props.text || 'Facebook';
  var url = (0, _encodeURI2.default)(props.url);
  var fullUrl = 'https://facebook.com/sharer/sharer.php?u=' + url;

  return _react2.default.createElement(_SharingButton2.default, {
    type: 'facebook',
    onClick: props.onClick,
    icon: _Facebook2.default,
    text: text,
    fullUrl: fullUrl
  });
};

Facebook.propTypes = {
  text: _propTypes2.default.string,
  url: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

exports.default = Facebook;
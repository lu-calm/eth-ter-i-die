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

var _Pinterest = require('../icons/Pinterest');

var _Pinterest2 = _interopRequireDefault(_Pinterest);

var _encodeURI = require('../utils/encodeURI');

var _encodeURI2 = _interopRequireDefault(_encodeURI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pinterest = function Pinterest(props) {
  var text = props.text || 'Pinterest';
  var url = (0, _encodeURI2.default)(props.url);
  var shareText = (0, _encodeURI2.default)(props.shareText);
  var mediaSrc = (0, _encodeURI2.default)(props.mediaSrc);
  var fullUrl = 'https://pinterest.com/pin/create/button/?url=' + url + '&media=' + mediaSrc + '&description=' + shareText;

  return _react2.default.createElement(_SharingButton2.default, {
    type: 'pinterest',
    onClick: props.onClick,
    icon: _Pinterest2.default,
    text: text,
    fullUrl: fullUrl
  });
};

Pinterest.propTypes = {
  text: _propTypes2.default.string,
  url: _propTypes2.default.string,
  shareText: _propTypes2.default.string,
  mediaSrc: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

exports.default = Pinterest;
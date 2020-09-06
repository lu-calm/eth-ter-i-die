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

var _Email = require('../icons/Email');

var _Email2 = _interopRequireDefault(_Email);

var _encodeURI = require('../utils/encodeURI');

var _encodeURI2 = _interopRequireDefault(_encodeURI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Email = function Email(props) {
  var text = props.text || 'Email';
  var url = (0, _encodeURI2.default)(props.url);
  var subject = (0, _encodeURI2.default)(props.subject);
  var fullUrl = 'mailto:?subject=' + subject + '&body=' + url;

  return _react2.default.createElement(_SharingButton2.default, {
    type: 'email',
    onClick: props.onClick,
    icon: _Email2.default,
    text: text,
    fullUrl: fullUrl
  });
};

Email.propTypes = {
  text: _propTypes2.default.string,
  url: _propTypes2.default.string,
  subject: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

exports.default = Email;
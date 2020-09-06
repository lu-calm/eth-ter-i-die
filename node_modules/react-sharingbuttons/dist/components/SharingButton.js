'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SharingButton = function SharingButton(props) {
  return _react2.default.createElement(
    'a',
    {
      className: 'react-sharing-button__link react-sharing-button--' + props.type,
      href: props.fullUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      onClick: props.onClick
    },
    props.icon({ className: 'react-sharing-button__icon' }),
    _react2.default.createElement(
      'span',
      { className: 'react-sharing-button__text' },
      props.text
    )
  );
};

SharingButton.propTypes = {
  type: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.func.isRequired,
  text: _propTypes2.default.string.isRequired,
  fullUrl: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func
};

exports.default = SharingButton;
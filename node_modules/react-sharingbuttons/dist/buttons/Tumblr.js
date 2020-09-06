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

var _Tumblr = require('../icons/Tumblr');

var _Tumblr2 = _interopRequireDefault(_Tumblr);

var _encodeURI = require('../utils/encodeURI');

var _encodeURI2 = _interopRequireDefault(_encodeURI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tumblr = function Tumblr(props) {
  var text = props.text || 'Tumblr';
  var url = (0, _encodeURI2.default)(props.url);
  var title = (0, _encodeURI2.default)(props.title);
  var caption = (0, _encodeURI2.default)(props.caption);
  var content = (0, _encodeURI2.default)(props.content);
  var baseUrl = 'https://www.tumblr.com/widgets/share/tool?posttype=link';
  var fullUrl = baseUrl + '&title=' + title + '&caption=' + caption + '&content=' + content + '&canonicalUrl=' + url + '&shareSource=tumblr_share_button';

  return _react2.default.createElement(_SharingButton2.default, {
    type: 'tumblr',
    onClick: props.onClick,
    icon: _Tumblr2.default,
    text: text,
    fullUrl: fullUrl
  });
};

Tumblr.propTypes = {
  text: _propTypes2.default.string,
  url: _propTypes2.default.string,
  title: _propTypes2.default.string,
  caption: _propTypes2.default.string,
  content: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

exports.default = Tumblr;
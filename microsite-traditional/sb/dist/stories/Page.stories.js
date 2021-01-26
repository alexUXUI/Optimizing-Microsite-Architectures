"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggedOut = exports.LoggedIn = exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var _Page = require("./Page");

var HeaderStories = _interopRequireWildcard(require("./Header.stories"));

var _default = {
  title: 'Example/Page',
  component: _Page.Page
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Page.Page, args);
};

var LoggedIn = Template.bind({});
exports.LoggedIn = LoggedIn;
LoggedIn.args = (0, _objectSpread2.default)({}, HeaderStories.LoggedIn.args);
var LoggedOut = Template.bind({});
exports.LoggedOut = LoggedOut;
LoggedOut.args = (0, _objectSpread2.default)({}, HeaderStories.LoggedOut.args);
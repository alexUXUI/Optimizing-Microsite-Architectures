"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var ButtonStyles = {
  fontFamily: "Nunito Sans",
  fontWeight: 700,
  border: 0,
  borderRadius: "3em",
  cursor: "pointer",
  display: "inline-block",
  lineHeight: 1
};
var PrimaryStyles = {
  color: "white",
  backgroundColor: "#1ea7fd"
};
var SecondaryStles = {
  color: "#333",
  backgroundColor: "transparent",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"
};
var Small = {
  fontSize: "12px",
  padding: "10px 16px"
};
var Large = {
  fontSize: "16px",
  padding: "12px 24px"
};

var Button = function Button(_ref) {
  var primary = _ref.primary,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      label = _ref.label,
      props = (0, _objectWithoutProperties2.default)(_ref, ["primary", "backgroundColor", "size", "label"]);
  var mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  var primaryStyles = primary ? PrimaryStyles : {};
  var secondaryStyles = !primary ? SecondaryStles : {};
  var btnSize = size === "large" ? Large : Small;
  var styles = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, ButtonStyles), primaryStyles), secondaryStyles), btnSize);
  return /*#__PURE__*/_react.default.createElement("button", Object.assign({
    style: (0, _objectSpread2.default)({}, styles),
    type: "button",
    className: ["storybook-button", "storybook-button--".concat(size), mode].join(" ")
  }, props), label);
};

exports.Button = Button;
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined
};
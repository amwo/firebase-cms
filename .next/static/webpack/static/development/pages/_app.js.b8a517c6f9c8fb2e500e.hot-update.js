webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/button/index.js":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./components/button/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/am/Projects/firebase-cms/components/button/index.js";




var Button =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Button, _Component);

  function Button(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Button);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Button).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Button, [{
    key: "render",
    value: function render() {
      switch (this.props.type) {
        case 'icon':
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.icon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          }, this.props.src ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            src: this.props.src,
            width: "",
            height: "",
            alt: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          }) : 'T');

        case 'add':
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.add,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          }, this.props.src ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            src: this.props.src,
            width: "",
            height: "",
            alt: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          }) : 'T');

        default:
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.r,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }, this.props.title);
      }
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=_app.js.b8a517c6f9c8fb2e500e.hot-update.js.map
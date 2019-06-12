webpackHotUpdate("static/development/pages/settings.js",{

/***/ "./components/input/index.js":
/*!***********************************!*\
  !*** ./components/input/index.js ***!
  \***********************************/
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
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/default */ "./layouts/default/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-zero/react */ "./node_modules/redux-zero/react/index.js");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_zero_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _states_fn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../states/fn */ "./states/fn.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ "./components/input/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/Users/am/Projects/firebase-cms/components/input/index.js";








var mapToProps = function mapToProps(_ref) {
  var s = _ref.s,
      d = _ref.d;
  return {
    s: s,
    d: d
  };
};

var Input =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Input, _Component);

  function Input(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Input);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Input).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Input, [{
    key: "render",
    value: function render() {
      if (this.props.type === 'text' || this.props.type === 'email' || this.props.type === 'password') {
        switch (this.props.size) {
          case 's':
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
              className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.s,
              type: this.props.type,
              value: this.props.value,
              placeholder: this.props.placeholder,
              onchange: this.props.onchange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            });
            break;

          default:
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
              className: this.props.form === 'cap' ? _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.cap : this.props.form === 'lid' ? _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.lid : _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.r,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
              className: this.props.invert ? _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.textDark : _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.textLight,
              type: this.props.type === 'password' ? 'password' : this.props.type === 'email' ? 'email' : 'text',
              value: this.props.value,
              placeholder: this.props.placeholder,
              onKeyDown: this.props.onKeyDown,
              onChange: this.props.onChange,
              autoFocus: this.props.autoFocus,
              readOnly: this.props.readOnly,
              autoComplete: this.props.autoComplete,
              disabled: this.props.disabled,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            }), this.props.loading ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
              className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.btSpinner,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            }) : this.props.lastIcon ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
              className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.lastIcon,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
              src: this.props.lastIcon,
              width: "12",
              height: "",
              alt: "Icon",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            })) : null);
            return;
        }
      }
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_zero_react__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapToProps, _states_fn__WEBPACK_IMPORTED_MODULE_9__["default"])(Input));

/***/ })

})
//# sourceMappingURL=settings.js.34bba1c2af6a042b3392.hot-update.js.map
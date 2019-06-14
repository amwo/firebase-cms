webpackHotUpdate("static/development/pages/page.js",{

/***/ "./pages/page/index.js":
/*!*****************************!*\
  !*** ./pages/page/index.js ***!
  \*****************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/default */ "./layouts/default/index.js");
/* harmony import */ var _components_h1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/h1 */ "./components/h1/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/logo.png */ "./assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _widgets_postEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widgets/postEditor */ "./widgets/postEditor/index.js");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-zero/react */ "./node_modules/redux-zero/react/index.js");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_zero_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _states_fn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../states/fn */ "./states/fn.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.css */ "./pages/page/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _layouts_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layouts/page */ "./layouts/page/index.js");





var _jsxFileName = "/Users/am/Projects/firebase-cms/pages/page/index.js";












var mapToProps = function mapToProps(_ref) {
  var s = _ref.s,
      d = _ref.d,
      f = _ref.f;
  return {
    s: s,
    d: d,
    f: f
  };
};

var Page =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Page, _Component);

  function Page(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Page).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.visibilityNav(true);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layouts_page__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: this.props.router.query.title.charAt(0).toUpperCase() + this.props.router.query.title.slice(1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "page"));
    }
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(Object(redux_zero_react__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapToProps, _states_fn__WEBPACK_IMPORTED_MODULE_12__["default"])(Page)));

/***/ })

})
//# sourceMappingURL=page.js.4bb997d1fe834792837f.hot-update.js.map
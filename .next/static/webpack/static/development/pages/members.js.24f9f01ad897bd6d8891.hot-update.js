webpackHotUpdate("static/development/pages/members.js",{

/***/ "./pages/members/index.js":
/*!********************************!*\
  !*** ./pages/members/index.js ***!
  \********************************/
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
/* harmony import */ var _layouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/page */ "./layouts/page/index.js");
/* harmony import */ var _layouts_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/content */ "./layouts/content/index.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/input */ "./components/input/index.js");
/* harmony import */ var _components_div__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/div */ "./components/div/index.js");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-zero/react */ "./node_modules/redux-zero/react/index.js");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_zero_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _states_fn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../states/fn */ "./states/fn.js");





var _jsxFileName = "/Users/am/Projects/firebase-cms/pages/members/index.js";









var mapToProps = function mapToProps(_ref) {
  var s = _ref.s,
      d = _ref.d;
  return {
    s: s,
    d: d
  };
};

var Members =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Members, _Component);

  function Members(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Members);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Members).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Members, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.visibilityNav(false);
      this.props.fetchMember();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layouts_page__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Members",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layouts_content__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Brands page can manage your brand assets on this project."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_9__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })));
    }
  }]);

  return Members;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_zero_react__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapToProps, _states_fn__WEBPACK_IMPORTED_MODULE_11__["default"])(Members));

/***/ })

})
//# sourceMappingURL=members.js.24f9f01ad897bd6d8891.hot-update.js.map
webpackHotUpdate("static/development/pages/post.js",{

/***/ "./widgets/navigations/index.js":
/*!**************************************!*\
  !*** ./widgets/navigations/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/article */ "./components/article/index.js");
/* harmony import */ var _assets_icons_icon_back_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/icons/icon-back.svg */ "./assets/icons/icon-back.svg");
/* harmony import */ var _assets_icons_icon_back_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_back_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_icons_icon_brands_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/icons/icon-brands.svg */ "./assets/icons/icon-brands.svg");
/* harmony import */ var _assets_icons_icon_brands_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_brands_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_icons_icon_dashboard_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/icons/icon-dashboard.svg */ "./assets/icons/icon-dashboard.svg");
/* harmony import */ var _assets_icons_icon_dashboard_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_dashboard_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/icons/icon-down-arrow.svg */ "./assets/icons/icon-down-arrow.svg");
/* harmony import */ var _assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_icons_icon_members_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/icons/icon-members.svg */ "./assets/icons/icon-members.svg");
/* harmony import */ var _assets_icons_icon_members_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_members_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/icons/icon-settings.svg */ "./assets/icons/icon-settings.svg");
/* harmony import */ var _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/logo.png */ "./assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/select */ "./components/select/index.js");
/* harmony import */ var _components_h3__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/h3 */ "./components/h3/index.js");
/* harmony import */ var _components_div__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/div */ "./components/div/index.js");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/switch */ "./components/switch/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! redux-zero/react */ "./node_modules/redux-zero/react/index.js");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(redux_zero_react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _states_fn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../states/fn */ "./states/fn.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./style.css */ "./widgets/navigations/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _widgets_projectNavigation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../widgets/projectNavigation */ "./widgets/projectNavigation/index.js");







var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/navigations/index.js";





















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

var Navigations =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navigations, _Component);

  function Navigations(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigations);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigations).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "back", function () {
      next_link__WEBPACK_IMPORTED_MODULE_20___default.a.push("/");

      _this.closePostView();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "open", function () {
      _this.setState({
        header: !_this.state.header
      });
    });

    _this.open = _this.open.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.back = _this.back.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      header: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigations, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.postProps,
        style: this.props.s.visibilities.props ? {
          left: 0
        } : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.propsInner,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_18__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_16__["default"], {
        type: "list",
        size: "m",
        value: "News",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_18__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_17__["default"], {
        title: "Index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_switch__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_17__["default"], {
        title: "AMP",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_switch__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_17__["default"], {
        title: "Publish",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_switch__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.components,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_18__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_17__["default"], {
        title: "Components",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.componentSearch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        value: "",
        placeholder: "Search Component",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.componentItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), this.props.s.visibilities.props ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.back,
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.prevButton,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        style: this.state.header ? {
          transform: 'rotate(180deg)'
        } : {
          transform: 'rotate(0)'
        },
        src: _assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
        width: "14",
        height: "",
        alt: "Down Arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })) : null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.header ? "".concat(_style_css__WEBPACK_IMPORTED_MODULE_23___default.a.cover, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_23___default.a.on) : "".concat(_style_css__WEBPACK_IMPORTED_MODULE_23___default.a.cover),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.header,
        style: this.state.header ? {
          height: 280
        } : {
          height: 95
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.down,
        onClick: this.open,
        style: this.state.header ? {
          border: '1px solid #ebebeb'
        } : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        style: this.state.header ? {
          transform: 'rotate(180deg)'
        } : {
          transform: 'rotate(0)'
        },
        src: _assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
        width: "10",
        height: "",
        alt: "Down Arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
        width: "90",
        height: "auto",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, this.props.f.settings.title ? this.props.f.settings.title : 'Title'), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.tokyoislands.jp",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "https://www.tokyoislands.jp")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
        href: "/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), "Settings"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
        href: "/brands",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_brands_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), "Brands"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
        href: "/members",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_members_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      })), "Members")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.navs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.nav,
        style: this.props.s.visibilities.nav ? {
          left: '-240px'
        } : {
          left: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.firstNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.current,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_dashboard_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), "Dashboard")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_projectNavigation__WEBPACK_IMPORTED_MODULE_24__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.nav,
        style: this.props.s.visibilities.nav ? {
          left: 0
        } : {
          left: '240px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.secondNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.secondNavHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_20___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.back,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_back_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_23___default.a.articleItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_8__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }))))))));
    }
  }]);

  return Navigations;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_zero_react__WEBPACK_IMPORTED_MODULE_21__["connect"])(mapToProps, _states_fn__WEBPACK_IMPORTED_MODULE_22__["default"])(Navigations));

/***/ })

})
//# sourceMappingURL=post.js.aaff6ef35ef27dd12acd.hot-update.js.map
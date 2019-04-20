webpackHotUpdate("static/development/pages/news.js",{

/***/ "./widgets/postEditor/index.js":
/*!*************************************!*\
  !*** ./widgets/postEditor/index.js ***!
  \*************************************/
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
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-zero/react */ "./node_modules/redux-zero/react/index.js");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_zero_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _states_fn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../states/fn */ "./states/fn.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ "./widgets/postEditor/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! draft-js-export-html */ "./node_modules/draft-js-export-html/lib/main.js");
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(draft_js_export_html__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_div__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/div */ "./components/div/index.js");
/* harmony import */ var _components_h1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/h1 */ "./components/h1/index.js");
/* harmony import */ var _components_h3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/h3 */ "./components/h3/index.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/select */ "./components/select/index.js");
/* harmony import */ var _widgets_category__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../widgets/category */ "./widgets/category/index.js");
/* harmony import */ var _widgets_tags__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../widgets/tags */ "./widgets/tags/index.js");
/* harmony import */ var _widgets_thumbnailDnD__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../widgets/thumbnailDnD */ "./widgets/thumbnailDnD/index.js");
/* harmony import */ var _widgets_postAvatar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../widgets/postAvatar */ "./widgets/postAvatar/index.js");
/* harmony import */ var _widgets_tools__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../widgets/tools */ "./widgets/tools/index.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");







var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/postEditor/index.js";


















var mapToProps = function mapToProps(_ref) {
  var s = _ref.s,
      d = _ref.d;
  return {
    s: s,
    d: d
  };
};

var hasCommandModifier = draft_js__WEBPACK_IMPORTED_MODULE_11__["KeyBindingUtil"].hasCommandModifier;

var PostEditor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostEditor, _Component);

  function PostEditor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostEditor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostEditor).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "convertFromRaw", function () {
      var raw = Object(draft_js__WEBPACK_IMPORTED_MODULE_11__["convertToRaw"])(_this.contentState);
      var html = Object(draft_js_export_html__WEBPACK_IMPORTED_MODULE_12__["stateToHTML"])(_this.contentState); //console.log(contentState)
      //console.log(raw)

      console.log(html);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "wrapper", function (contentBlock) {
      var type = contentBlock.getType();

      if (type === 'unstyled') {
        return {
          component: _widgets_tools__WEBPACK_IMPORTED_MODULE_21__["default"],
          editable: true,
          props: {
            foo: 'bar'
          }
        };
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "titleKeyDown", function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();

        _this.refs['content'].focus();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "styling", function (content) {
      var type = content.getType(); //console.log(type)

      switch (type) {
        case 'unstyled':
          return 'editor-content-p';
          break;

        default:
          return null;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "focus", function (e) {});

    _this.styling = _this.styling.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));

    _this.onChange = function (editorState) {
      return _this.setState({
        editorState: editorState
      });
    };

    _this.focus = _this.focus.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleKeyCommand = _this.handleKeyCommand.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.convertFromRaw = _this.convertFromRaw.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.titleKeyDown = _this.titleKeyDown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.wrapper = _this.wrapper.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.blockRenderMap = immutable__WEBPACK_IMPORTED_MODULE_22__["default"].Map({
      'header-two': {
        element: 'h2'
      },
      'unstyled': {
        element: 'div'
      }
    });
    _this.state = {
      editorState: draft_js__WEBPACK_IMPORTED_MODULE_11__["EditorState"].createEmpty()
    };
    _this.editorState = _this.state.editorState;
    _this.contentState = _this.editorState.getCurrentContent();
    _this.selectionState = _this.editorState.getSelection();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostEditor, [{
    key: "handleKeyCommand",
    value: function handleKeyCommand(command, editorState) {
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_11__["RichUtils"].handleKeyCommand(editorState, command);

      if (newState) {
        this.onChange(newState);
        return 'handled';
      }

      return 'not-handled';
    }
  }, {
    key: "render",
    value: function render() {
      var e = this.state.editorState;
      console.log(c.getBlockMap());
      console.log(this.contentState.getBlockMap());
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_16__["default"], {
        type: "list",
        size: "m",
        value: "News",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        ref: "title",
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,
        placeholder: "Title",
        onKeyDown: this.titleKeyDown,
        contentEditable: true,
        suppressContentEditableWarning: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Oshima Island\u2019s Perfect Guide -Must-see spots, Activities, Accommodation and Access"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.avatarWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.editor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_11__["Editor"], {
        ref: "content",
        editorState: this.state.editorState,
        handleKeyCommand: this.handleKeyCommand,
        onChange: this.onChange,
        placeholder: "Edit",
        blockRenderMap: this.blockRenderMap,
        blockRendererFn: this.wrapper,
        blockStyleFn: this.styling,
        onFocus: this.focus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.convertFromRaw,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "Convert from Raw"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.right,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_thumbnailDnD__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "Author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_postAvatar__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "Category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_category__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "Tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_tags__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "State",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }))));
    }
  }]);

  return PostEditor;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_zero_react__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapToProps, _states_fn__WEBPACK_IMPORTED_MODULE_9__["default"])(PostEditor));

/***/ })

})
//# sourceMappingURL=news.js.2445662c3146a6ed2918.hot-update.js.map
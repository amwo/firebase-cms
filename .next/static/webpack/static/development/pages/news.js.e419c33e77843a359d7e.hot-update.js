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
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _widgets_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/category */ "./widgets/category/index.js");
/* harmony import */ var _components_div__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/div */ "./components/div/index.js");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/input */ "./components/input/index.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _components_h3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/h3 */ "./components/h3/index.js");
/* harmony import */ var _widgets_postAvatar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../widgets/postAvatar */ "./widgets/postAvatar/index.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/select */ "./components/select/index.js");
/* harmony import */ var _widgets_tags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../widgets/tags */ "./widgets/tags/index.js");
/* harmony import */ var _widgets_thumbnailDnD__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../widgets/thumbnailDnD */ "./widgets/thumbnailDnD/index.js");
/* harmony import */ var _widgets_tools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../widgets/tools */ "./widgets/tools/index.js");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux-zero/react */ "./node_modules/redux-zero/react/index.js");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(redux_zero_react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _states_fn__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../states/fn */ "./states/fn.js");
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! draft-js-export-html */ "./node_modules/draft-js-export-html/lib/main.js");
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(draft_js_export_html__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./style.css */ "./widgets/postEditor/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_22__);







var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/postEditor/index.js";


















var mapToProps = function mapToProps(_ref) {
  var s = _ref.s,
      d = _ref.d;
  return {
    s: s,
    d: d
  };
};

var hasCommandModifier = draft_js__WEBPACK_IMPORTED_MODULE_8__["KeyBindingUtil"].hasCommandModifier;

var PostEditor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostEditor, _Component);

  function PostEditor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostEditor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostEditor).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleTab", function () {
      _this.setState({
        tab: 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (editorState) {
      _this.setState({
        editorState: editorState
      });

      var selectionState = editorState.getSelection();
      var anchorKey = selectionState.getAnchorKey();
      var currentContent = editorState.getCurrentContent();
      var currentContentBlock = currentContent.getBlockForKey(anchorKey);
      var start = selectionState.getStartOffset();
      var end = selectionState.getEndOffset();
      var focus = selectionState.getHasFocus();
      var selectedText = currentContentBlock.getText().slice(start, end);

      _this.setState({
        currentKey: anchorKey,
        focus: focus
      }); //console.log(currentContent)
      //console.log(currentContentBlock.getText())
      //console.log(anchorKey)
      //console.log(selectedText)
      //console.log()

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addImageBlock", function () {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addCodeBlock", function () {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addTableBlock", function () {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addUlBlock", function () {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addOlBlock", function () {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addMediaBlock", function () {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "dndImages", function () {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "convertFromRaw", function () {
      var raw = Object(draft_js__WEBPACK_IMPORTED_MODULE_8__["convertToRaw"])(_this.state.editorState.getCurrentContent());
      var html = Object(draft_js_export_html__WEBPACK_IMPORTED_MODULE_21__["stateToHTML"])(_this.state.editorState.getCurrentContent()); //console.log(raw)
      //console.log(html)
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "wrapper", function (contentBlock) {
      var type = contentBlock.getType();

      if (type === 'unstyled') {
        return {
          component: _widgets_tools__WEBPACK_IMPORTED_MODULE_18__["default"],
          props: {
            currentKey: _this.state.currentKey,
            focus: _this.state.focus
          },
          editable: true
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

    _this.styling = _this.styling.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleKeyCommand = _this.handleKeyCommand.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.convertFromRaw = _this.convertFromRaw.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.titleKeyDown = _this.titleKeyDown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.wrapper = _this.wrapper.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.addImageBlock = _this.addImageBlock.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.addCodeBlock = _this.addCodeBlock.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.addTableBlock = _this.addTableBlock.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.addUlBlock = _this.addUlBlock.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.addOlBlock = _this.addOlBlock.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.addMediaBlock = _this.addMediaBlock.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.dndImages = _this.dndImages.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.toggleTab = _this.toggleTab.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.blockRenderMap = immutable__WEBPACK_IMPORTED_MODULE_12__["default"].Map({
      'header-two': {
        element: 'h2'
      },
      'unstyled': {
        element: 'div'
      }
    });
    _this.state = {
      editorState: draft_js__WEBPACK_IMPORTED_MODULE_8__["EditorState"].createEmpty(),
      currentKey: '',
      focus: false,
      tab: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostEditor, [{
    key: "handleKeyCommand",
    value: function handleKeyCommand(command, editorState) {
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_8__["RichUtils"].handleKeyCommand(editorState, command);

      if (newState) {
        this.onChange(newState);
        return 'handled';
      }

      return 'not-handled';
    }
  }, {
    key: "render",
    value: function render() {
      //console.log(this.selectionState)
      //console.log(this.currentContentBlock.text)
      //console.log(this.contentState.getBlockMap().length)
      //console.log(this.contentState.getFirstBlock().getText())
      //console.log(this.contentState.getLastBlock().getText())
      //console.log(this.contentState.createFromBlockArray)
      //console.log(this.editorState.currentContent)
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.center,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.centerWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.tab,
        style: this.state.tab === 1 ? {
          left: '-100%'
        } : {
          left: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_15__["default"], {
        type: "list",
        size: "m",
        value: "News",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        ref: "title",
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.title,
        placeholder: "Title",
        onKeyDown: this.titleKeyDown,
        contentEditable: true,
        suppressContentEditableWarning: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.avatarWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.editor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_8__["Editor"], {
        ref: "content",
        editorState: this.state.editorState,
        handleKeyCommand: this.handleKeyCommand,
        placeholder: "Write your story...",
        blockRenderMap: this.blockRenderMap,
        blockRendererFn: this.wrapper,
        blockStyleFn: this.styling,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.convertFromRaw,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Convert from Raw"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.tab,
        style: this.state.tab === 0 ? {
          left: '100%'
        } : {
          left: 0,
          background: '#eee'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "hodsa")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.tabControll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        onClick: this.toggleTab,
        style: this.state.tab === 1 ? {
          background: '#eee'
        } : {
          background: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Emotional"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        onClick: this.toggleTab,
        style: this.state.tab === 0 ? {
          background: '#eee',
          color: '#ccc'
        } : {
          background: '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "Statics")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_22___default.a.right,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_postAvatar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_category__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "Tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_tags__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "State",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }))));
    }
  }]);

  return PostEditor;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); //<ThumbnailDnD />


/* harmony default export */ __webpack_exports__["default"] = (Object(redux_zero_react__WEBPACK_IMPORTED_MODULE_19__["connect"])(mapToProps, _states_fn__WEBPACK_IMPORTED_MODULE_20__["default"])(PostEditor));

/***/ })

})
//# sourceMappingURL=news.js.e419c33e77843a359d7e.hot-update.js.map
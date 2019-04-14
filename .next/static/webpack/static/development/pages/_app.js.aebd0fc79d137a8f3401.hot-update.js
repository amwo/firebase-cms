webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./states/store.js":
/*!*************************!*\
  !*** ./states/store.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_zero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-zero */ "./node_modules/redux-zero/dist/redux-zero.js");
/* harmony import */ var redux_zero__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_zero__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");



var user = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().currentUser;
var i = {
  s: {
    login: "".concat(user ? true : false),
    page: {},
    current: {
      project: '',
      user: ''
    }
  },
  d: []
};
var store = redux_zero__WEBPACK_IMPORTED_MODULE_0___default()(i);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

})
//# sourceMappingURL=_app.js.aebd0fc79d137a8f3401.hot-update.js.map
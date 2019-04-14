webpackHotUpdate("static/development/pages/login.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "./states/fn.js":
/*!**********************!*\
  !*** ./states/fn.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");



var fn = function fn(store) {
  return {
    increment: function increment(state) {
      return {
        count: state.count + 1
      };
    },
    decrement: function decrement(state) {
      return {
        count: state.count - 1
      };
    },
    emailAuthentication: function emailAuthentication(s, email, password) {
      firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    },
    auth: function auth(state) {
      return {};
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (fn);

/***/ })

})
//# sourceMappingURL=login.js.24345c8568c05633ae27.hot-update.js.map
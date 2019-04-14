webpackHotUpdate("static/development/pages/login.js",{

/***/ "./states/fn.js":
/*!**********************!*\
  !*** ./states/fn.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");






var fn = function fn(store) {
  return Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
    isUserEmail: function isUserEmail(states, email) {
      var db = firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore();
      store.setState(function (states) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states, {
          s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states.s, {
            page: {
              emailLoading: true,
              PasswordLoading: false,
              email: '',
              password: ''
            }
          })
        });
      });
      db.collection('tokyoislands').doc('people').collection('users').where('email', '==', email).get().then(function (query) {
        store.setState(function (states) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states, {
            s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states.s, {
              page: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states.s.page, {
                emailLoading: false,
                email: query.docs[0].data().email,
                password: ''
              })
            })
          });
        });
      }).catch(function (err) {
        store.setState(function (states) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states, {
            s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states.s, {
              page: {}
            })
          });
        });
        console.log(err);
      });
    },
    auth: function auth(states, email, password) {
      console.log('hel');
      store.setState(function (states) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states, {
          s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states.s, {
            page: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states.s.page, {
              passwordLoading: true
            })
          })
        });
      });
      firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.auth().signInWithEmailAndPassword(email, password).catch(function (err) {
        if (err) {
          store.setState(function (states) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states, {
              s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states.s, {
                page: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states.s.page, {
                  PasswordLoading: false
                })
              })
            });
          });
          return false;
        }

        store.setState(function (states) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states, {
            s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, states.s, {
              login: true,
              page: {}
            })
          });
        });
      });
    }
  }, "auth", function auth(state) {
    return {};
  });
};

/* harmony default export */ __webpack_exports__["default"] = (fn);

/***/ })

})
//# sourceMappingURL=login.js.f15342a12f9fc94d976f.hot-update.js.map
webpackHotUpdate("static/development/pages/login.js",{

/***/ "./states/fn.js":
/*!**********************!*\
  !*** ./states/fn.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _conf_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../conf/firebase */ "./conf/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);







var db = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore();


var fn = function fn(store) {
  return {
    init: function init(store) {
      firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          var loginUserId = "";
          var usersData = {};
          db.collection('tokyoislands').doc('people').collection('users').where("admin", "==", true).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              if (doc.id === user.uid) {
                loginUserId = doc.id;
              }

              usersData[doc.id] = doc.data();
            });
            console.log();
            store.setState(function (states) {
              return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states, {
                s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s, {
                  login: true,
                  current: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s.current, {
                    user: loginUserId
                  })
                }),
                d: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a.apply(Object, [{}, usersData].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(states.d)))
              });
            });
          }).catch(function (error) {
            console.log("Error getting documents: ", error);
          });
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/login');
        }
      });
    },
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
    visibilityNav: function visibilityNav(states, bool) {
      store.setState(function (states) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states, {
          s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s, {
            visibilities: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s.visibilities, {
              nav: bool
            })
          })
        });
      });
    },
    isUserEmail: function isUserEmail(states, email) {
      var db = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.firestore();
      store.setState(function (states) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states, {
          s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s, {
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
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states, {
            s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s, {
              page: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s.page, {
                emailLoading: false,
                email: query.docs[0].data().email,
                password: ''
              })
            })
          });
        });
      }).catch(function (err) {
        store.setState(function (states) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states, {
            s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s, {
              page: {}
            })
          });
        });
        console.log(err);
      });
    },
    auth: function auth(states, email, password) {
      store.setState(function (states) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states, {
          s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s, {
            page: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s.page, {
              passwordLoading: true
            })
          })
        });
      });
      firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth().signInWithEmailAndPassword(email, password).catch(function (err) {
        if (err.code) {
          store.setState(function (states) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states, {
              s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s, {
                page: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s.page, {
                  PasswordLoading: false
                })
              })
            });
          });
          return;
        } else {
          store.setState(function (states) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states, {
              s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, states.s, {
                login: true,
                page: {}
              })
            });
          });
        }
      });
      var user = firebase_app__WEBPACK_IMPORTED_MODULE_3___default.a.auth().currentUser;
      console.log(user.uid);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (fn);

/***/ })

})
//# sourceMappingURL=login.js.b6de24edc9b29f03ae4d.hot-update.js.map
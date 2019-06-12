webpackHotUpdate("static/development/pages/members.js",{

/***/ "./states/fn.js":
/*!**********************!*\
  !*** ./states/fn.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _conf_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../conf/firebase */ "./conf/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);





var db = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();


var fn = function fn(store) {
  return {
    signOut: function signOut(store) {
      firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().signOut().then(function () {
        store.setState(function (states) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
            s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s, {
              login: false,
              current: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.current, {
                user: ''
              })
            })
          });
        });
      }).catch(function (err) {
        console.log(err);
      });
    },
    fetchMembers: function fetchMembers(store) {
      console.log('hoge');
    },
    init: function init(store) {
      firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().onAuthStateChanged(function (user) {
        if (user) {
          var loginUserId = "";
          var usersData = {}; // User Request

          db.collection('tokyoislands').doc('people').collection('users').where("admin", "==", true).get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              if (doc.id === user.uid) {
                loginUserId = doc.id;
              }

              usersData[doc.id] = doc.data();
            }); // Set store

            store.setState(function (states) {
              return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
                s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s, {
                  login: true,
                  visibilities: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.visibilities, {
                    loading: false
                  }),
                  current: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.current, {
                    user: loginUserId
                  })
                }),
                d: usersData
              });
            });
            db.collection('tokyoislands').doc('settings').get().then(function (doc) {
              if (doc.exists) {
                console.log(doc.data());
                store.setState(function (states) {
                  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
                    f: {
                      settings: doc.data()
                    }
                  });
                });
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(next_router__WEBPACK_IMPORTED_MODULE_5___default.a.route);
              } else {
                console.log("No such document on Settings!");
              }
            }).catch(function (error) {
              console.log("Error getting documents: ", error);
            });
          }).catch(function (error) {
            console.log("Error getting documents: ", error);
          });
        } else {
          store.setState(function (states) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
              s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s, {
                visibilities: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.visibilities, {
                  loading: false
                })
              })
            });
          });
          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login');
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
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
          s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s, {
            visibilities: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.visibilities, {
              nav: bool
            })
          })
        });
      });
    },
    isUserEmail: function isUserEmail(states, email) {
      var db = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();
      store.setState(function (states) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
          s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s, {
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
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
            s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s, {
              page: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.page, {
                emailLoading: false,
                email: query.docs[0].data().email,
                password: ''
              })
            })
          });
        });
      }).catch(function (err) {
        store.setState(function (states) {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
            s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s, {
              page: {}
            })
          });
        });
        console.log(err);
      });
    },
    auth: function auth(states, email, password) {
      store.setState(function (states) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
          s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s, {
            visibilities: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.visibilities, {
              loading: false
            }),
            page: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.page, {
              passwordLoading: true
            })
          })
        });
      });
      firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().signInWithEmailAndPassword(email, password).catch(function (err) {
        if (err.code) {
          store.setState(function (states) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
              s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s, {
                err: {
                  code: err.code,
                  message: err.message
                },
                visibilities: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.visibilities, {
                  loading: false
                }),
                page: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.page, {
                  PasswordLoading: false
                })
              })
            });
          });
          return;
        } else {
          store.setState(function (states) {
            return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
              s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s, {
                err: {
                  code: '',
                  message: ''
                },
                visibilities: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.visibilities, {
                  loading: false
                }),
                login: true,
                page: {}
              })
            });
          });
        }
      });
      var user = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().currentUser;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (fn);

/***/ })

})
//# sourceMappingURL=members.js.cf23c51126a91e1dc997.hot-update.js.map
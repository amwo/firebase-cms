webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");




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
    isUserEmail: function isUserEmail(states, email) {
      var db = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();
      db.collection('tokyoislands').doc('people').collection('users').where('email', '==', email).get().then(function (doc) {
        console.log(doc.exist);

        if (doc.exist) {
          console.log(doc.data());
        } else {
          console.log('no doc');
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    emailAuthentication: function emailAuthentication(states, email, password) {
      firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        console.log(error);
      }); //store.setState(states => ({
      //    s: {
      //        ...states.s,
      //        login: true
      //    },
      //}))
    },
    auth: function auth(state) {
      return {};
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (fn);

/***/ })

})
//# sourceMappingURL=index.js.b852fc74707f9467584d.hot-update.js.map
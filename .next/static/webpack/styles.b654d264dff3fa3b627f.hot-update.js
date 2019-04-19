webpackHotUpdate("styles",{

/***/ "./widgets/tools/style.css":
/*!*********************************!*\
  !*** ./widgets/tools/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"r":"_3PGg9k8r_wIWj0vAohOU6a","edit":"_2m33cAWwaQaG3QsruGyuTb","toolbox":"_3cmbyWdFAHkR0-yjMKwIlo"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1555685456429");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.b654d264dff3fa3b627f.hot-update.js.map
webpackHotUpdate("styles",{

/***/ "./widgets/header/style.css":
/*!**********************************!*\
  !*** ./widgets/header/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"r":"_1LgiD2nXic45SPrGOSSdE","wrap":"_3GeAj4Xkb1QCpbV5MQrddQ","account":"_1N_gYToUWnVe_gOR2WQLxV"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1555819949776");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.3717c2b66c3007fa1142.hot-update.js.map
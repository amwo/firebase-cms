webpackHotUpdate("styles",{

/***/ "./widgets/navigations/style.css":
/*!***************************************!*\
  !*** ./widgets/navigations/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"HcgH0inGRklwKQm0xtqrf","url":"_3rN1fY8PhGg7BAwN2FZsXG","down":"_1rfLRABX-h7FUOtUAZiBCA","navs":"_3z53nFlALWb5uqTa0jdy_z","nav":"_1Qwf8bvg_kUhZ9twBTlJ1o","firstNav":"EDZYQgBPSTivbuGIiSk0c"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1555163896792");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.1ea32dd9bef3a18b8d36.hot-update.js.map
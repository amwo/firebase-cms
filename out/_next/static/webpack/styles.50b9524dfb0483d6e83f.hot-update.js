webpackHotUpdate("styles",{

/***/ "":
false,

/***/ "./layouts/page/style.css":
/*!********************************!*\
  !*** ./layouts/page/style.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"r":"cTMl4qNa9uFSZksfIjjPg","cat":"_2HqO7xyIbOUkWlF3UZxKN3","in":"_33-Ilm1pM-QHhqukpQe3Rj"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1560525917404");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.50b9524dfb0483d6e83f.hot-update.js.map
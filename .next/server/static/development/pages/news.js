module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/avatar-sample.jpg":
/*!**********************************!*\
  !*** ./assets/avatar-sample.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/2wCEAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRQBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAHgAeAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APPvijbi+0vw2NPn+16jq+kQ3M9hcKqzRzhCJ1JIUHLAkDHc4+XaB8pXeuaqnmeHZmMUNpO8scbyCJT94AEkgMAAMd85619KX/xGt2F5J/Y5Sztk3WdtCUZoo1jUFUOFznazYyTlsc8V4F4x+I+h+M9MuFgtriF0mWSMyRgYyeSMEjkZ7815lKhaKcip1Y+1bprRly/8eaXJotvFpFk1rM6GPyXcMI1BAHI68IPzPWuat5HkuNzvvyAS23d1/u+prPjmjv8AUbi6AIjbcUT+6vO3Pv7VoI4BG/lScso7gdh/n1r0aaSQklHY0jc7ISu4qm3JCtgY9OO+cVY0bR7/AMQ3cVnp9tJd3cnG2MZyfT2Ucf5ximd0pTcSplbeQSegHyg+oz/IV9//ALLf7OcXhHwtaa1q9sp1e9UTMki8xKeVX2wP1rDG4n2MdNz08BhfrE/edktz578B/si+ONZ1OG41G2iEH3XUsB8ucbRn8/1619FW/wCwvpR0+Jre9uIJguGEgVvTOG25HT8vSvprTrNLbYiLgDoPSutsEDIoI69q8eGMnNpN2PZeCpU76XPiX4h/su/8IV4TudRsg1+9od6whWJACMeBuyPmOevX0ya+fdO/sbxPby6XfabDJM7OFiaILInGQAykFunKnnuCSdp/VzV9EivrR43QMrqQQRnNfmJ+158OLj4NeOrbXLDcumXswZjzhW7jr+IPXivYoY1qSpz6nj4nArldSn0KGiPpvh/Rnghja2FpG7lbZiN6Dd84JzuyGbr3J6Uy2tLS28WaFrFldO9zOWtTaXMLeeA6s4IwG+UBTnk7RnHAAHM32pN4o0ua9troWd7GPNkwNokIGSpPUBiOR0znjB4zvij4qsdU06x1nRL6XTdamhZWS3kMcrBgoKvj7p9x1GcZGKmvDmlaOx4r5qbs9mXdTebxV4u1GdpI7ZomS1itk2OkqPjDq3oxyykeq+4PA6RPf+FfFl7Bov2yS+eaWG3eyc+cDyNy49uT7V6T8E44NettVgewsb/TY7eBWQ26tIsrMzBCCACA4lOCDztxkYNX/iJ4ci8P+MfD2t6JFFpV4LlIktTGI9wwPQc/KHyeoA4AxWMLpXZhKonNxSL8F/qVz4O17T/EFtdWt5p8QuJHupHabcWL7ihAKk5J6+4Feaf8JDY/9BG8/wC+n/8Aiq9D+JDeIdPtdb1dJJRa3H+iXJnLFlg8xArDngjLKCOSC3tXkH9oQf8AQRl/76k/wqoyjKKcldihGT1jsbep+NbXTJBbBT3ZSRgHkDj1Hb8q818a2llaRLNbR7JLlzOVChQmcnAGO24io49ZuPEGtTzRRt9ndY2aLhtnzIp2H0ye2AcDNa/xEsWmTTpBE0VrKSRkY5GAQPbkVq5rnUTphDl1RzmlK0NlHJIcbiWAz24H+NatkpublSRlQMnP6fTvWTcTqZYogflBycceldDpOIIy6rhpTtTvjkDIrovY6bdD1P4AeCo/G/xf0a2njJ0+yb7Xcq44cIRhcdMFgOPTNfqPo1wHgUBNqqMYHavg39j/AElI9Tu7qRlMjt5YY4BwCTj8zX3Jolz5car6Njd7etfK46pKpiGui0PrsFTjSw67vU6i1CiQE8jPSt+zZoyMH5TiuaikDxB42DDOM9a17fWbWJB9puI4MdTKwUfma44aM6qiujoZJQID9MV82ftl/D2Hx38HNdjMe64tomuITjkMozX0Db63peoQDydTs5COCEnQ4/I1w3xftVu/BOqxhlaI2zj5TnPFb1JTi1PsclPlleHc/If4ZeIUMsMUoBRx9nmEnIz0Oc/n+JpfHGnT7hb6fbyXM0B2yGFN3lDICMfQHg5PArifD139j128tix/1jcjjkMa9v8ADl6gle8muEg8y23EsqsGkQfL19s8d+fSvqaiduZHyc/h9Di/Aepa38PvEOmvaeTbNcyRW9w12v7opu+84BGcckHr1HSvcvjNpnh2TRfDWqavLd2Gsx30EC6rbMyrEA2WJGcDjdjv39a830PzvFXiKztJI7eO1d5Gt2O0tGSvyM+DheT/ABDlnXvir3xhuvFOrXup6XdrHrtq8hZLyG3G1GDASJGydFAjIOcn72T6YKo07SOCVFznGSepT8calfpfL4UGs3mo2cqhJp7idpPmYh05P3sLzyTnpxg1zv8AwrJP+gy3/fk/41uanqeg63oc+raVPBHq1yFNrYtmF4ZIyoZRuO2Q7XAwBj72CcVyf27xl/z7v/37i/wqV2RorxVjjNJ0y60bWr+MRiJoo/LVJRkKzhecYPC53H021PqmovqeJ5pCxQBU7c4xn9K6n4prZaX8cNe05Hk+zCQRTyvj5Sq9COAVLorE88Yx6HidZ1KLUbyae3iEEGAdg6buMn8cfzqsPUdWMajW6T+86Zw5JuHYy4MNqKknCL3NdPZuZHQrksOFUVytxiCdcHI6DB9P/r11OhkyXdmApkaZgoUdfeumTsrmsFdpH0x+z34a8HzeH5tR8Y61NZW7St5X+ltbouMnKhCGJ6+v6V3Nl4f8H3uum98MfEvVbgLJuNtNNIRlTjG4hW64HOas/Bn9n0z6fHqE9t5qT2sltKkh4McikMo7gEMeldpp/wADZPCul3thBeXN9HdyJLK92RIyld2ApKjaPnbpyc4JIwB8pVrczk4zd/wPr6WHtyqUVZHrvwj8SS64sdiGMrxgZkJyWwMVB8X/ALEY3stTuGs4dxImRipHY9Ki+AWjPpHiFonbcdmT7V3XxT+GS+OI5k2lznGzJBOOeCMf/XrkVKbipJ6nY3FT5XsfNXwpb4DaTrk3nzz6re2oMk15dec0Kgg5LEHYAMHqAflPpX0FdWmg6l4T1CTwyxfT5IHKLFMzxgnPRWJ29egxXH/DT9nrQ/Cfi+fXEtFTVJUeKSSaSQthyS+AxIBOTyuOCQDg4r2C18CadoHh+e10q0itLd8kxQrtTJ6kCumblKPutv1OLkVOWqS7WPws1NZNH8aalG+Q0V5LG4+jkH+teoeF7+PUbKWwkYOSvybsn5SOf0Jrz34pAx/FTxcmNm3WbsbfT9+wrS0LUmtTE6kiRRnHtivrlrFN9j5J/FJeZ6v4Akf4f/Eq3sp0jjtLyIxpNJjavPykN1G4qww3OdvbAGv46+JF1qVv4l0yOK3Hllood0If7QwnXDQyZyrAKFwM7g7jAIrmrm4s/Fnh6YXESC7giLRXTyMpiY4wNoPzDIHGDjk89Kq/C/Q9Xtn097/Tzf2zEeXLhsRRhyxk3cjj72DyQ/HtyT108zjklCXO9zoPB2uad4J+HHjDT9VtfNOuaYIrZVRHljk2uDlh1UM+eefl45JrxP8As+w/vT/9+m/xr0Px/AdI8dRCcTmCZhPMs04YsTkqwxyvPU5BPHpln/25pn/PD/yZb/GqX7vpe5EZdWcZ8Y5YZPGmsX1rOt1Fe3Ek63CE/vFLsVznnOD3rjEnaO3UnOC3447/ANa0fEMJa8yJjOhGMlduKq3VgY7WNe4B3dsegrelBQiorodbbneXczldrhYnP3t5HHbpivXPgvYpqvxH0K1YB4o1Ltx6df59PpXkaKLdGHON4f8ADpXa+D/FF14S1jStdtMebbyBihPEgx8yn6g/5wKdWLlBxj1Rvh5xhUjKWyZ+w/gG3gtvDsESFVCoOelVvFWs2NjZSKz/ALxuAq8kn0ryn4O/GjT/AB74Oj1C0Lo6jZcQhcmJx1U/55GK6PdHqc0jzodzf6s9196+KlLkl7O2p+ge5Nc6ejOw+FCGbWXvFQoqfKQec817FqF0bRPtCRGXI3bV6mvGPh5Lf6EZvNhF1DITtePqMdMj/CvVLSa51qGNmm+yxJjMa43EehPau2FSKjyo4KsNeZ7GbH4msNUmWWFl5P3WGCPY10ovoGstiH+GvMvG2gz6ZqC3+nxr5X/LSJOM+496xPiT8Rpfhz8KvEviW52wf2bp8s8YmOPMl24jT/gTlV/GuanWnzuDWrNKsKbpqaeiPyG+Ms8Go/Gnx9c2jLLbS6/fvC6HIZTcuVI/DFc+L/EqtE2CcAAetULAvJcM5JZydxJPJNbei+GjcXIYkGMNuAz1PpX2iSSt2PhHeTujs/D815qF9YwlX8yKMSebGeI4g+53I7gDccZHfPevTLLxTHoCSWbLLY6UoZ45Z0ZLksVyQygEbgQecgAEVznhq4ufC1s2sWnlSrG6i7knUFssQNq+inpj1A9a6PVfFMt7eaLf2ekjztRLXHlxp8+4NtcNj7y/KGBPQHr1Ncc91c5at+axz/hjR59TN9rl3Yyzaff2srhb1d5kVWBQAqcjDJySefToQnlaX/0L9p/37lrV0L4l3Fyl9YSxw2Flc6gI7e4l+aGFUOZEGSflcADaOFy2CBgL0/8Aa2nf9Bfw9/37H/xVDTvsZ7P3kfNuqTZhVVjKFHILNnqD2zVJZ3nmkDcqdwU/yrQsL86lZkXas7r8xYZb06k9ffnvS2a277wMCXaTtPJA9jXoKNmdUb2sYMluWHA+UKcn15//AF1q6QRdWCWmAXjkGM9eM/41FdjZKlsuG2YVm/2up/Ac10HgTSDNePOQNvRd3Td6/h1/KnKyVy4xbdkeofszfFKT4a+OHtbiQjSb8+TOrngNk4Yj8x+NfZ3iCK6ubGfUfDs6tfbRLCkrFon4+6Rnj8MV+cviaxm0DTIr+NsStOApwQM5ORj6Afga+rf2XfjTFrVpFpmoSmOdQEQSHv2Ge9fNZhhfe9vH5n0uAxXK1Skd1o37RPjXTGNvc2GkR3ERxJBLmNwcdShbPQZyGxgjrXofhX4teO/Ed0sFrfafDJM3y2lrCszkdCQcEIPdjgZ712mm+DvDfi4RS3NlC8q85ZVPPrgivQPDvhDRPDCk2NtHCWwzbEC59zgV5aq/3T7x47BRoWWHXP8AeiVNKmtbe0mvbuW5nEYWd3OFc9ztGAPwAr4H/wCCjP7RNtqoh+GWhXAkWKVLnWZIz8u4cxQcdcHDsOxCc5BA9+/bA/aJu/hx8OtVPh1411U7beK5cblhdzjcoPDMBkgHjjnPQ/llplrceIr28mubhpruVzM9zcEuZHbJLOTknJySevf1r0suwyqTdeWy/M+AzCvKK9lazf5Gfp0RaY45IOeK7jRYkuI8LznqByR7/T3/AMnkY7Y2EkkrgLGjhGTPKk9Pr/8AW7101rdLYQR3iOpycEA/e55/n/nv9JJNHgwt1PTdDgeGMWbLHJBdgbkIyBghhn1GQDxzn8aT4gWl1b6jamMQxvd/aYQyNIxSN4yN+EDYUfvCcD+96AjmovGRkhWWBmiuIDuLDOc4549xz+H57QlTXNOt1slilvXyzS3ACBH3bvlPAHvx3x0NYODetjKpD3k1qYmrywf2dpOm+ZPeXVvvjIUlrdpmY7FUEf3dy89jxjmqf/CP6t/0Ly/9+D/jXS6JolrpGsC5BfZpqlyZ1DI8hifbjbkZJHXqMj1re/4WNJ/z7Qfm/wD8RQkjC8lsjb8Qfs+x6faqJblriGHbO6QwojmI/eKsFDNj0bIry/xv8Pk8F6g720pnt7qHfaz8YK9h/L8/rX3N4x0SOy1OwlDD7MZGh2n+BHGCp+jYP0Jr5x+Mdlb2/gpLWbJvNP1E20Lk9QylgAOmNuBn2Ffd43B0lScoq1jyVVqUMX7O907fifMMFpteWSX7saliT3PTH+frXZ6XINPtrYkhFYbmLDndxj37jj29q5jxBAbUoiHAb73PTkE/y/SrCaoZbq3g/hjlHLfXvzjpivjaiPpKejsXfibqc90ml2WeYYjNInq7/wD1gKu/BjxYvhzxDbNIf3SuA4cDG3PIP+e9c74pk+2am8zBo5G6B+jD0B9hio/DOm3V5qsUdrIEkbjIUM2OhG3+L6VzTpKVLlkbQqONXmifq/4PiRfD8Gt6XfOsDxhijnfGOOcZ5/WujsfHJ1OKeEygyRoSyoMAj/Jr5k+E3wz8VXPhY6ZqHxL1S20tYxLaQaZGsEyjGDtkySMZwRgjn8us+GNjeeFfF3iLQ5dWv9bszaw3Al1KXzpFZ2kHDnqP3a/ia+QnQsnyzufXQqSduaNjyv8AbRtJdU8HwRQEsI5/OdR3P+Sa+MdLvpdOn/cAu7psKE4KnORg+nU4PFfop8Q/CJ8R2zx3C70I6f1r5/1z9l2GZJruFphtPMKqMt64J+o/I17+US5l7CK8zyszwzm1WTPme/jeW4VHRUcYZsMDk9zx71cSx+zsuHMYyDgDIJ+ntUvinSU8PeIrywjMnkwuqgyfKwOBnIwMc5/Ku2+Fml6Jr+oOmvXkNvFGgWJJ2CqSe/v9PU19MqUqk1A+bWjZ7J+yd8NLHxd4htL24n+1XBume4EiHciKASSTxzkjj1HI6V9peOPhp4U+LTLZ6poiXFysPlRXcB8qaFOcfOOwzkAgjPavmn9nPV/Dnwp07xBNca/ZPc3H7q1iluFAQMwB5LZPr68GvonQPjd4JtEFuNfh8wkea+4Aysffsv0/pX12FpUo4flq2uZSTb90+dfiF+ztdfA3UUv7qa417wlI+6O4C5e1cZ2LMBwwHbGAT6dDy/8AwmPhb+6P/Bb/APZV956Z4k8N/ELRrqxSS31TT5k8qYRt5ikHsSvQ9/UcVlf8KM+H3/QDj/7+zf8AxVfO4rJVVqc9KVl6mck27s+O/iN4j8U2VgWute0i6BYZS3HmMhHKnhR346fWvB/HGp614hlvL+8uGnEZ8xWWNYkcNtzx15Kfp717P4j8K/Et7R7fVfDhs4EPJt9u0f8AAt+O36V4f8Qra8+zN9tu1R0CxrACMt17j0A/lXr4pNxaTbXzM6iTmptK55vqLyXexVDbyDgnv0OP5fpU9rpsslyLjcFTq27oPf8Ap+FMBjKKDwyDIB54roLO8iutHmiicNcxL5iFerZJBGMZPUe2K+YqQZ2xkifXbe2vdPiNuR5qqFlifnJHf2PU59S3HzGtv4N+DZNZ1+ALK9ujy7I7gD/VSgZXn3J964WzuXQts+gGeh9PcV738HdMW50CPVpOPst4jq3csWiBz7YYH86z9i5RcY9mdFKSc02fUfwnlN1p1i1xCRcLLJBdQSYHlzgEsAPRgA4zzhgTznHQaEjXl5r15FsMUt+1vAcZKJEojcDj/nor1i+GI5LfxS7KcW80MVxwMfvtsiyH8tv6V2nhhEbSLYAEswMzEptyzksTj1JY18hOFrn10ZLQztU05La1eSUE7VLHNWLbwkG0+GCQASD72Ofm6tj8c1cvwb/V7S0TO1X81zxwF5/U4H411Gn2yiNvmPoNxr7bhrB/u6mIfXRfqeRmFd3jD5nw5+09+zpeag0viPR4wLq2jY3EJXHmxjJyO2Rk/Ud+AD8pDT72xu5LaZJbO4jfbJC4K7T7q3Q1+uXjPSYLvQdWjZFZWtZB09VOa8J8QfDrRvFvhfw3cahpdrc3N3cLG8rxjzAohdioY8jLKOlfRVsC5PmjueJKKm7o+HoGuVjULJNIBydvy/pmtvT7+6tMeWTFF33R45+o4r6rl/Z80i41ny7GxjjtoUWLGMqzclj9Rnb/AMBrvrD9mzwy9souYdrY25X5R+IrOnltWb6GMmodT5H8GfEjUvBepx3VnNdW24jMlpOyMB145wfdWBBBOB3r0r/hqTxD/wBBrXv++4//AImuo8f/ALK32ZzLotyzo5bcpjyoxyPYdPYZx6Vwf/DNXiD0P/fEf/xdEsLXovkEpN6pn2n4uvoZ9FuQyhx5bHbxjJFfmn8VvPk8W39vI58uGRioH93t/Sv0X8Sf8gO5/wCuZ/ka/O/4s/8AI7ap9B/SvZzNKNNWOVau7PPJIxEnmAdDkEVThvzZXcci9SDxngir9x/x6j61hT/62Ovkpo1TOklSOKeExjCynIHXg819Mfs/aat5pNpYbmCzPbvIBjjayNn/AL5Vvxx14r5lk+/Y/wC6P5Cvqf8AZt/1tj/1yT/0CtsFFSxEUzeOkWz6I0m0b+0NIuHkJKROswGMmQPsP659K7UXMGnxbI1VAB0AwK5PTv8AWwf9d5v/AErNbep9f++v518TmEFTrzhHZN/mfTYZucVct+Hl8+e6vWUkyfu0H+yOv6/yrq7dTHbFtpDAbs9c8+1c14W/5B8X1k/9CNdZD/x6v/urX6plNKNLA0lHsn9+p4OKm5VpX7nP+KpFPh7USPveQ5OO/BFebXlotlpXhKMn91BdPLIVznC28p59sgCvQvE//IA1L/r3auG1v/kC6X9Jv/RElenJGMWaFpcQaXAvmyDzDyWxkljySB3J5Nbem6xLJIGjiWNRxulw7/X0H05rj9X+/af9dP8A2U10WjfdH++f5iuqglYxq6HdWF/NdyDzJmZT1Gdob8B+FaWxfRqw9H++n+9XQVdSEb7GSnJH/9k="

/***/ }),

/***/ "./assets/icons/icon-add.svg":
/*!***********************************!*\
  !*** ./assets/icons/icon-add.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTQgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29ucy1hZGQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbnMtYWRkIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTYiIHg9IjYiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjE0IiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTciIHg9IjAiIHk9IjYiIHdpZHRoPSIxNCIgaGVpZ2h0PSIyIiByeD0iMSI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./assets/icons/icon-back.svg":
/*!************************************!*\
  !*** ./assets/icons/icon-back.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjlweCIgaGVpZ2h0PSI2OXB4IiB2aWV3Qm94PSIwIDAgNjkgNjkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjEgKDM5MDEyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY19iYWNrPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBpZD0iLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMjguMDAwMDAwLCAtNTIuMDAwMDAwKSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2U9IiM5Nzk3OTciPgogICAgICAgICAgICA8ZyBpZD0iaWNfYmFjayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAzMC4wMDAwMDAsIDU0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tMTcuNDkxMjg5NCwxOC41ODIwMTI5IEMtMTcuNDkxMjg5NCwxOC41ODIwMTI5IC0xNy4zNjk0ODE3LDE4LjY4MzcyMjcgLTE3LjIyMDUxMDgsMTguODA4MTEzNyBMMTUuNjA2MTAwNCw0Ni4yMTg0MTgzIEMxNS45MDU0NDk3LDQ2LjQ2ODM3NTggMTYuMzc5MzU5Nyw0Ni40NTk4MTIzIDE2LjY1OTI5MzQsNDYuMjA0MTQ1MiBMNDcuMDg2MDQwMiwxOC40MTQ5OTczIiBpZD0iUGF0aC00LUNvcHktMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuNzk3Mzc1LCAzMi40MDc5OTIpIHNjYWxlKC0xLCAtMSkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTQuNzk3Mzc1LCAtMzIuNDA3OTkyKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMi4wMTU0NTUwMywzNCBMNjQuNzI0MTE5NywzNCIgaWQ9IlBhdGgtNSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "./assets/icons/icon-brands.svg":
/*!**************************************!*\
  !*** ./assets/icons/icon-brands.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDlweCIgaGVpZ2h0PSI3MXB4IiB2aWV3Qm94PSIwIDAgNDkgNzEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjEgKDM5MDEyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY19mbGFnPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KICAgICAgICA8ZyBpZD0iLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMzguMDAwMDAwLCAtNjQwLjAwMDAwMCkiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlPSIjOTc5Nzk3Ij4KICAgICAgICAgICAgPGcgaWQ9ImljX2ZsYWciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNDAuMDAwMDAwLCA2NDIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMzQiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLDAgTDEsNjcgTDEsMCBaIiBpZD0iUGF0aC0yNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLDAgQzEsMCAtMC45ODA4MjM0ODksMyAxNC4wMDAwMDAyLDMgQzI4Ljk4MDgyMzksMyA0NSwwIDQ1LDAgTDQ1LDI0IEM0NSwyNCAyMC4zNTY5NTY3LDI3IDE0LjAwMDAwMDIsMjcgQzcuNjQzMDQzNywyNyAxLDI0IDEsMjQiIGlkPSJQYXRoLTI1Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./assets/icons/icon-dashboard.svg":
/*!*****************************************!*\
  !*** ./assets/icons/icon-dashboard.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTRweCIgaGVpZ2h0PSI0OXB4IiB2aWV3Qm94PSIwIDAgNTQgNDkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjEgKDM5MDEyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY19hbGxfbWVudTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSItIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDc1LjAwMDAwMCwgLTIwOS4wMDAwMDApIiBmaWxsPSIjOTc5Nzk3Ij4KICAgICAgICAgICAgPGcgaWQ9ImljX2FsbF9tZW51IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzUuMDAwMDAwLCAyMDkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0LUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcuMDAwMDAwLCA0LjUwMDAwMCkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjcuMDAwMDAwLCAtNC41MDAwMDApIHRyYW5zbGF0ZSgyMi41MDAwMDAsIC0yMi41MDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwiIGN4PSI0LjUiIGN5PSI0LjcxNDI4NTcxIiByeD0iNC41IiByeT0iNC43MTQyODU3MSI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbCIgY3g9IjQuNSIgY3k9IjI3IiByeD0iNC41IiByeT0iNC43MTQyODU3MSI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbCIgY3g9IjQuNSIgY3k9IjQ5LjI4NTcxNDMiIHJ4PSI0LjUiIHJ5PSI0LjcxNDI4NTcxIj48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNC1Db3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3LjAwMDAwMCwgMjQuNTAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC0yNy4wMDAwMDAsIC0yNC41MDAwMDApIHRyYW5zbGF0ZSgyMi41MDAwMDAsIC0yLjUwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbCIgY3g9IjQuNSIgY3k9IjQuNzE0Mjg1NzEiIHJ4PSI0LjUiIHJ5PSI0LjcxNDI4NTcxIj48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsIiBjeD0iNC41IiBjeT0iMjciIHJ4PSI0LjUiIHJ5PSI0LjcxNDI4NTcxIj48L2VsbGlwc2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsIiBjeD0iNC41IiBjeT0iNDkuMjg1NzE0MyIgcng9IjQuNSIgcnk9IjQuNzE0Mjg1NzEiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTE0LUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcuMDAwMDAwLCA0NC41MDAwMDApIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTI3LjAwMDAwMCwgLTQ0LjUwMDAwMCkgdHJhbnNsYXRlKDIyLjUwMDAwMCwgMTcuNTAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsIiBjeD0iNC41IiBjeT0iNC43MTQyODU3MSIgcng9IjQuNSIgcnk9IjQuNzE0Mjg1NzEiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwiIGN4PSI0LjUiIGN5PSIyNyIgcng9IjQuNSIgcnk9IjQuNzE0Mjg1NzEiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwiIGN4PSI0LjUiIGN5PSI0OS4yODU3MTQzIiByeD0iNC41IiByeT0iNC43MTQyODU3MSI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/icon-down-arrow.svg":
/*!******************************************!*\
  !*** ./assets/icons/icon-down-arrow.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjlweCIgaGVpZ2h0PSIzM3B4IiB2aWV3Qm94PSIwIDAgNjkgMzMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjEgKDM5MDEyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY19kb3duX2Fycm93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KICAgICAgICA8ZyBpZD0iLSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2OC4wMDAwMDAsIC03MC4wMDAwMDApIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS13aWR0aD0iNCI+CiAgICAgICAgICAgIDxnIGlkPSJpY19kb3duX2Fycm93IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NzAuMDAwMDAwLCA3Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLDAuMTY3MzAwOTgxIEMwLDAuMTY3MzAwOTgxIDAuMTIyNjA0OTU2LDAuMjY5MTg0NDk1IDAuMjcyNTUwODE4LDAuMzkzNzg4MDMzIEwzMy4zMjc3MzI1LDI3Ljg2MjMxOTMgQzMzLjYyMTQ2NywyOC4xMDY0MDk3IDM0LjA5MjMzODcsMjguMDkyNzI5MyAzNC4zNzQxMDQ2LDI3LjgzNjYyNTQgTDY1LDAiIGlkPSJQYXRoLTQiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/icon-members.svg":
/*!***************************************!*\
  !*** ./assets/icons/icon-members.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTdweCIgaGVpZ2h0PSI3MHB4IiB2aWV3Qm94PSIwIDAgNTcgNzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjEgKDM5MDEyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY191c2VyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ii0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04OTMuMDAwMDAwLCAtMzQ1LjAwMDAwMCkiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlPSIjOTc5Nzk3Ij4KICAgICAgICAgICAgPGcgaWQ9ImljX3VzZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg5My4wMDAwMDAsIDM0Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xNyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTgtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQuMjUwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxsaXBzZSBpZD0iT3ZhbC0zLUNvcHkiIGN4PSIxNC4yNSIgY3k9IjE0LjM3NjQ3OTMiIHJ4PSIxNC4yNSIgcnk9IjE0LjM3NjQ3OTMiPjwvZWxsaXBzZT4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIsMzAuNDUzNTkyNyBDMiwyOS45MDAwODA5IDIuNDU0MzgxMTIsMjkuNDQ2MDA1OSAzLjAwNDI4ODgzLDI5LjQ0NjAwNTkgTDUzLjk5NTcxMTIsMjkuNDQ2MDA1OSBDNTQuNTQ5MzEyMiwyOS40NDYwMDU5IDU1LDI5Ljg5NzMxODMgNTUsMzAuNDUzNTkyNyBMNTUsNTUuODA1MjgzIEM1NSw1Ni43NTY1NDcxIDU0LjIxOTIzMjgsNTguMTA4ODQ1MiA1My40MjU5MzczLDU4LjU0NzMxNiBMNTMuMzE0Nzk5Myw1OC42MTM1MjQ2IEM1My4yNDMwNzQ3LDU4LjY1OTQ1OTcgNTMuMDg0NTY0NCw1OC43NTcwNzExIDUyLjg0Mzk2NjksNTguODk4OTk0MSBDNTIuNDMxMjU2Nyw1OS4xNDI0NDI0IDUxLjk0NTcwMDksNTkuNDE1NTkwNSA1MS4zOTIwMjg1LDU5LjcxMTA4NDkgQzQ5Ljc5ODg0NTksNjAuNTYxMzY1MSA0Ny45ODg2NzA3LDYxLjQxMzc5ODEgNDUuOTk5ODMsNjIuMjA5ODgzMiBDNDAuMzM0MzA0Niw2NC40Nzc2NTY1IDM0LjM5NzQ4NTIsNjUuODM1NTg2NSAyOC41LDY1LjgzNTU4NjUgQzIyLjYwMjYwMSw2NS44MzU1ODY1IDE2LjY2NDAyNjgsNjQuNDc2NzMzNCAxMC45OTU1NzMsNjIuMjA3NDAyNCBDOS4wMDU2NjcwMiw2MS40MTA3NTU3IDcuMTk0MzUyNzksNjAuNTU3NzE2NiA1LjYwMDAzMjk3LDU5LjcwNjgyNjUgQzUuMDQ1OTU2NTgsNTkuNDExMTE1NCA0LjU2MDAyNDcyLDU5LjEzNzc2NDcgNC4xNDY5NzU2OCw1OC44OTQxMzI4IEMzLjkwNjE2ODQsNTguNzUyMDk1NiAzLjc0NzUwMzkyLDU4LjY1NDM5ODggMy42NzU2ODk5Myw1OC42MDg0MTI0IEwzLjU4NzI3OTgsNTguNTU0OTY3IEMyLjc3ODg4OTAzLDU4LjA5NDM2MDYgMiw1Ni43NDgzMjc5IDIsNTUuODA1MjgzIEwyLDMwLjQ1MzU5MjcgWiIgaWQ9IlJlY3RhbmdsZS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC41MDAwMDAsIDQ3LjY0MDc5Nikgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtMjguNTAwMDAwLCAtNDcuNjQwNzk2KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./assets/icons/icon-settings.svg":
/*!****************************************!*\
  !*** ./assets/icons/icon-settings.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjBweCIgaGVpZ2h0PSI2MHB4IiB2aWV3Qm94PSIwIDAgNjAgNjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjEgKDM5MDEyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY19zZXR0aW5nPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ii0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTczLjAwMDAwMCwgLTUwMC4wMDAwMDApIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS13aWR0aD0iNCI+CiAgICAgICAgICAgIDxnIGlkPSJpY19zZXR0aW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTc1LjAwMDAwMCwgNTAyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBvbHlnb24iIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIgcG9pbnRzPSIyOCAwIDQ3Ljc5ODk4OTkgOC4yMDEwMTAxMyA1NiAyOCA0Ny43OTg5ODk5IDQ3Ljc5ODk4OTkgMjggNTYgOC4yMDEwMTAxMyA0Ny43OTg5ODk5IDAgMjggOC4yMDEwMTAxMyA4LjIwMTAxMDEzIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTYiIGN4PSIyOCIgY3k9IjI4IiByPSIxMCI+PC9jaXJjbGU+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./assets/logo.png":
/*!*************************!*\
  !*** ./assets/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-fab2a6150e606f8e9b90c7c728d562e9.png";

/***/ }),

/***/ "./components/article/index.js":
/*!*************************************!*\
  !*** ./components/article/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./components/article/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/am/Projects/firebase-cms/components/article/index.js";





var Article =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Article, _Component);

  function Article(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Article);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Article).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Article, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("article", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.s,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/news?id=".concat(this.props.id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.wrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.thumb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.cnt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Kozushima Island\u2019s Perfect Guide: Must-see spots, Activities, Accommodation and Access"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "April 13, 2019"))))));
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./components/article/style.css":
/*!**************************************!*\
  !*** ./components/article/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"s": "bhBNARE4gzEDfvy3RCitJ",
	"thumb": "_2HGth3f5DAHRdlmg1f69vj",
	"wrap": "PZOYipKHBxSt4HAvZd_O4",
	"cnt": "T5AlzWuJyYZMnUhDaa7rP",
	"date": "_35hzdoREhJaVONU5oZUOWf"
};

/***/ }),

/***/ "./components/button/index.js":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./components/button/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/icon-add.svg */ "./assets/icons/icon-add.svg");
/* harmony import */ var _assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/am/Projects/firebase-cms/components/button/index.js";





var Button =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Button, _Component);

  function Button(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Button);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Button).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Button, [{
    key: "render",
    value: function render() {
      switch (this.props.type) {
        case 'icon':
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.icon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          }, this.props.src ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            src: this.props.src,
            width: "",
            height: "",
            alt: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          }) : 'T');

        case 'add':
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.add,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            src: _assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
            width: "20",
            height: "",
            alt: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }));

        case 'section':
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.section,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.current,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          }, "Content"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          }, "List"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.line,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          })));

        default:
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.r,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, this.props.title);
      }
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/button/style.css":
/*!*************************************!*\
  !*** ./components/button/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"icon": "KbxF-DI7GNsNnr_PUPcmG",
	"add": "_3-3JGVsUzQR3p4IYTB2ULd",
	"section": "_27oSIUwljnFV4Kds-_abFi",
	"line": "_1rDnxGMre9BrMqJpL5dHPM",
	"current": "kTJXpIfbnfdzV6WLGqaj6"
};

/***/ }),

/***/ "./components/div/index.js":
/*!*********************************!*\
  !*** ./components/div/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./components/div/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/am/Projects/firebase-cms/components/div/index.js";




var Div =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Div, _Component);

  function Div(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Div);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Div).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Div, [{
    key: "render",
    value: function render() {
      switch (this.props.type) {
        case 'm':
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.m,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          }, this.props.children);

        case 's':
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.s,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          }, this.props.children);

        default:
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.d,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            },
            __self: this
          }, this.props.children);
      }
    }
  }]);

  return Div;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Div);

/***/ }),

/***/ "./components/div/style.css":
/*!**********************************!*\
  !*** ./components/div/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"m": "-izmBDnT7D-u-Zc2GNdk9",
	"s": "_2HqbaHb5S6_07ig4H3YXiO"
};

/***/ }),

/***/ "./components/h1/index.js":
/*!********************************!*\
  !*** ./components/h1/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./components/h1/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/am/Projects/firebase-cms/components/h1/index.js";




var H1 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(H1, _Component);

  function H1(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, H1);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(H1).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(H1, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, this.props.title);
    }
  }]);

  return H1;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (H1);

/***/ }),

/***/ "./components/h1/style.css":
/*!*********************************!*\
  !*** ./components/h1/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"r": "_3hA9XgZCLracD7O5eAD80g"
};

/***/ }),

/***/ "./components/h3/index.js":
/*!********************************!*\
  !*** ./components/h3/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./components/h3/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/am/Projects/firebase-cms/components/h3/index.js";




var H3 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(H3, _Component);

  function H3(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, H3);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(H3).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(H3, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, this.props.title);
    }
  }]);

  return H3;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (H3);

/***/ }),

/***/ "./components/h3/style.css":
/*!*********************************!*\
  !*** ./components/h3/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"r": "_3RYosxiwLHYd0mYidsvjhb"
};

/***/ }),

/***/ "./components/select/index.js":
/*!************************************!*\
  !*** ./components/select/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./components/select/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/icon-down-arrow.svg */ "./assets/icons/icon-down-arrow.svg");
/* harmony import */ var _assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/am/Projects/firebase-cms/components/select/index.js";





var Select =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Select, _Component);

  function Select(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Select);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Select).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Select, [{
    key: "render",
    value: function render() {
      switch (this.props.type) {
        case 'list':
          switch (this.props.size) {
            case 'l':
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
                className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.listL,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
                className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.value,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              }, this.props.value, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
                src: _assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
                width: "11",
                height: "auto",
                alt: "icon",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: this
              }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
                className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.list,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              }))));

            case 'm':
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
                className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.listM,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
                className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.value,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                },
                __self: this
              }, this.props.value, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
                src: _assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
                width: "9",
                height: "auto",
                alt: "icon",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                },
                __self: this
              }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
                className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.list,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: this
              }))));

            case 's':
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                },
                __self: this
              }, this.props.value), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                },
                __self: this
              }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                },
                __self: this
              }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                },
                __self: this
              }))));

            default:
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                },
                __self: this
              }, "default");
          }

        default:
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, "default");
      }
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./components/select/style.css":
/*!*************************************!*\
  !*** ./components/select/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"listL": "ZJ6xtRIyw6fnlvqKXyDnP",
	"value": "_3oEgqe0kPLlm-iUVBIJXZD",
	"list": "_2DZsZ10xlyBtLahKRTdWJz",
	"listM": "_1Y1x-eAXBDgomewKlEiB_"
};

/***/ }),

/***/ "./conf/firebase.js":
/*!**************************!*\
  !*** ./conf/firebase.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);

var conf = {
  apiKey: "AIzaSyAyQI-VFBf2kO9cI53Z-AMt9K_p3Q5keqw",
  authDomain: "tokyoislands-2f2e6.firebaseapp.com",
  databaseURL: "https://tokyoislands-2f2e6.firebaseio.com",
  projectId: "tokyoislands-2f2e6",
  storageBucket: "tokyoislands-2f2e6.appspot.com",
  messagingSenderId: "720287797198"
};
/* harmony default export */ __webpack_exports__["default"] = (!firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length ? firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(conf) : firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app());

/***/ }),

/***/ "./layouts/default/index.js":
/*!**********************************!*\
  !*** ./layouts/default/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _widgets_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/header */ "./widgets/header/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./layouts/default/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _widgets_navigations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/navigations */ "./widgets/navigations/index.js");





var _jsxFileName = "/Users/am/Projects/firebase-cms/layouts/default/index.js";






var Default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Default, _Component);

  function Default(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Default);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Default).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_widgets_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.in,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("aside", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_widgets_navigations__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, this.props.children))));
    }
  }]);

  return Default;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Default);

/***/ }),

/***/ "./layouts/default/style.css":
/*!***********************************!*\
  !*** ./layouts/default/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"r": "_1WUXR3m6J34Ib6Vw0ZpEzu",
	"container": "_1-fvxZCkP7w4EyFFsCNc0x",
	"in": "wcdVsCXpNrzZN4Bggl-ED"
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/news/index.js":
/*!*****************************!*\
  !*** ./pages/news/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-zero/react */ "redux-zero/react");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_zero_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _states_fn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../states/fn */ "./states/fn.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "./pages/news/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/logo.png */ "./assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _widgets_postEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../widgets/postEditor */ "./widgets/postEditor/index.js");
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layouts/default */ "./layouts/default/index.js");
/* harmony import */ var _components_h1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/h1 */ "./components/h1/index.js");





var _jsxFileName = "/Users/am/Projects/firebase-cms/pages/news/index.js";











var mapToProps = function mapToProps(_ref) {
  var s = _ref.s,
      d = _ref.d;
  return {
    s: s,
    d: d
  };
};

var News =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(News, _Component);

  function News(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, News);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(News).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(News, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.visibilityNav(true);
    }
  }, {
    key: "render",
    value: function render() {
      //console.log(this.props.router.query)
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_widgets_postEditor__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(redux_zero_react__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapToProps, _states_fn__WEBPACK_IMPORTED_MODULE_7__["default"])(News)));

/***/ }),

/***/ "./pages/news/style.css":
/*!******************************!*\
  !*** ./pages/news/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./states/fn.js":
/*!**********************!*\
  !*** ./states/fn.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _conf_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../conf/firebase */ "./conf/firebase.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);





var db = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.firestore();


var fn = function fn(store) {
  return {
    init: function init(store) {
      firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().onAuthStateChanged(function (user) {
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
            store.setState(function (states) {
              return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states, {
                s: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s, {
                  login: true,
                  current: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, states.s.current, {
                    user: loginUserId
                  })
                }),
                d: usersData
              });
            });
          }).catch(function (error) {
            console.log("Error getting documents: ", error);
          });
        } else {
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
                login: true,
                page: {}
              })
            });
          });
        }
      });
      var user = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth().currentUser;
      console.log(user.uid);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (fn);

/***/ }),

/***/ "./widgets/account/index.js":
/*!**********************************!*\
  !*** ./widgets/account/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./widgets/account/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-zero/react */ "redux-zero/react");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_zero_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _states_fn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../states/fn */ "./states/fn.js");







var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/account/index.js";






var mapToProps = function mapToProps(_ref) {
  var s = _ref.s,
      d = _ref.d;
  return {
    s: s,
    d: d
  };
};

var Account =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Account, _Component);

  function Account(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Account);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Account).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "on", function () {
      _this.setState({
        visibility: !_this.state.visibility
      });
    });

    _this.on = _this.on.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      visibility: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Account, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, this.props.s.current.user ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        onClick: this.on,
        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.thumbnail,
        src: this.props.d[this.props.s.current.user].thumbnail,
        width: "33",
        height: "33",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.list,
        style: this.state.visibility ? {
          display: 'block'
        } : {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Profile"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Logout"))));
    }
  }]);

  return Account;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_zero_react__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapToProps, _states_fn__WEBPACK_IMPORTED_MODULE_10__["default"])(Account));

/***/ }),

/***/ "./widgets/account/style.css":
/*!***********************************!*\
  !*** ./widgets/account/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"r": "_3CIZS8iu0Bx7dnsP1ll3HH",
	"thumbnail": "xoVgL-5qlEZQ5EJwukVwE",
	"list": "_2Y6aHxaGynDxC4RlV42ORN"
};

/***/ }),

/***/ "./widgets/category/index.js":
/*!***********************************!*\
  !*** ./widgets/category/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./widgets/category/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/button */ "./components/button/index.js");





var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/category/index.js";





var Category =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Category, _Component);

  function Category(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Category);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Category).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Category, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "radio",
        id: "test1",
        name: "radio-group",
        defaultChecked: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "test1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Apple")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "radio",
        id: "test2",
        name: "radio-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "test2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Peach")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "radio",
        id: "test3",
        name: "radio-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        htmlFor: "test3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Orange")));
    }
  }]);

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./widgets/category/style.css":
/*!************************************!*\
  !*** ./widgets/category/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"r": "_3oK7LIYJ1jrOMJfJdouhyk"
};

/***/ }),

/***/ "./widgets/header/index.js":
/*!*********************************!*\
  !*** ./widgets/header/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./widgets/header/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/button */ "./components/button/index.js");
/* harmony import */ var _widgets_account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/account */ "./widgets/account/index.js");





var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/header/index.js";






var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.account,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_widgets_account__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./widgets/header/style.css":
/*!**********************************!*\
  !*** ./widgets/header/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"r": "_1LgiD2nXic45SPrGOSSdE",
	"wrap": "_3GeAj4Xkb1QCpbV5MQrddQ",
	"account": "_1N_gYToUWnVe_gOR2WQLxV"
};

/***/ }),

/***/ "./widgets/navigations/index.js":
/*!**************************************!*\
  !*** ./widgets/navigations/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/logo.png */ "./assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "./widgets/navigations/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux-zero/react */ "redux-zero/react");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux_zero_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _states_fn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../states/fn */ "./states/fn.js");
/* harmony import */ var _assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/icons/icon-down-arrow.svg */ "./assets/icons/icon-down-arrow.svg");
/* harmony import */ var _assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/icons/icon-settings.svg */ "./assets/icons/icon-settings.svg");
/* harmony import */ var _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_icons_icon_members_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/icons/icon-members.svg */ "./assets/icons/icon-members.svg");
/* harmony import */ var _assets_icons_icon_members_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_members_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_icons_icon_brands_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/icons/icon-brands.svg */ "./assets/icons/icon-brands.svg");
/* harmony import */ var _assets_icons_icon_brands_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_brands_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_icons_icon_dashboard_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/icons/icon-dashboard.svg */ "./assets/icons/icon-dashboard.svg");
/* harmony import */ var _assets_icons_icon_dashboard_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_dashboard_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_icons_icon_back_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/icons/icon-back.svg */ "./assets/icons/icon-back.svg");
/* harmony import */ var _assets_icons_icon_back_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_back_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_article__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/article */ "./components/article/index.js");







var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/navigations/index.js";















var mapToProps = function mapToProps(_ref) {
  var s = _ref.s,
      d = _ref.d;
  return {
    s: s,
    d: d
  };
};

var Navigations =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navigations, _Component);

  function Navigations(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigations);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigations).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "open", function () {
      _this.setState({
        header: !_this.state.header
      });
    });

    _this.open = _this.open.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      header: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigations, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: this.state.header ? "".concat(_style_css__WEBPACK_IMPORTED_MODULE_9___default.a.cover, " ").concat(_style_css__WEBPACK_IMPORTED_MODULE_9___default.a.on) : "".concat(_style_css__WEBPACK_IMPORTED_MODULE_9___default.a.cover),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.header,
        style: this.state.header ? {
          height: 280
        } : {
          height: 95
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.down,
        onClick: this.open,
        style: this.state.header ? {
          border: '1px solid #ebebeb'
        } : null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        style: this.state.header ? {
          transform: 'rotate(180deg)'
        } : {
          transform: 'rotate(0)'
        },
        src: _assets_icons_icon_down_arrow_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
        width: "10",
        height: "",
        alt: "Down Arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        width: "90",
        height: "auto",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Tokyo Islands"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "https://www.tokyoislands.jp")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), "Settings"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_brands_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), "Brand Assets")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_members_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), "Members"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.navs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "in",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.nav,
        style: this.props.s.visibilities.nav ? {
          left: '-240px'
        } : {
          left: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.firstNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.current,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_dashboard_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), "Dashboard")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.hr,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Posts")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/news",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), "News"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      })), "Blog"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.hr,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Statics")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), "Islands")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), "Activities")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), "Accommodations")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })), "Restaurants")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), "Pages"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.hr,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Management")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), "Contact")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_settings_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })), "Ship Booking"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.nav,
        style: this.props.s.visibilities.nav ? {
          left: 0
        } : {
          left: '240px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.secondNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.secondNavHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.back,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_back_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
        width: "",
        height: "15",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_9___default.a.articleItems,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_article__WEBPACK_IMPORTED_MODULE_19__["default"], {
        href: '/post',
        id: "124",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      })))))));
    }
  }]);

  return Navigations;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_zero_react__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapToProps, _states_fn__WEBPACK_IMPORTED_MODULE_12__["default"])(Navigations));

/***/ }),

/***/ "./widgets/navigations/style.css":
/*!***************************************!*\
  !*** ./widgets/navigations/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"header": "HcgH0inGRklwKQm0xtqrf",
	"url": "_3rN1fY8PhGg7BAwN2FZsXG",
	"down": "_1rfLRABX-h7FUOtUAZiBCA",
	"navs": "_3z53nFlALWb5uqTa0jdy_z",
	"nav": "_1Qwf8bvg_kUhZ9twBTlJ1o",
	"firstNav": "EDZYQgBPSTivbuGIiSk0c",
	"current": "_2oZRDDo3pWnFesGZK7kz_Z",
	"hr": "_1E3ZoqUc4JzNNT0br4RsUt",
	"cover": "_2pqCbi5zE-z6pj97UfvPJV",
	"on": "_3vRp6kDQrWIsqTs433Ewph",
	"fadeIn": "_3ctygxGSuJf79N1f-OAcV7",
	"articleItems": "_3yV2NcDY9KqNbDTgypM9c8",
	"secondNavHeader": "_2O-DWl5_jaGTmJtaVgMZU",
	"back": "_2znBXLzPYXyA3GtbnjD1n3"
};

/***/ }),

/***/ "./widgets/postAvatar/index.js":
/*!*************************************!*\
  !*** ./widgets/postAvatar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./widgets/postAvatar/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/button */ "./components/button/index.js");
/* harmony import */ var _assets_avatar_sample_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/avatar-sample.jpg */ "./assets/avatar-sample.jpg");
/* harmony import */ var _assets_avatar_sample_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_avatar_sample_jpg__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/postAvatar/index.js";






var PostAvatar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PostAvatar, _Component);

  function PostAvatar(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostAvatar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostAvatar).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostAvatar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.thumb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _assets_avatar_sample_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        width: "38",
        height: "",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.nickname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Atsushi Mori"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Writer")));
    }
  }]);

  return PostAvatar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PostAvatar);

/***/ }),

/***/ "./widgets/postAvatar/style.css":
/*!**************************************!*\
  !*** ./widgets/postAvatar/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"r": "ma0lpT2tAdMt1g72MvrV0",
	"thumb": "_13LdkZE1VOYLPyrDRJ913g",
	"info": "_3jYhw6HiFF0VHPxjLbvVMP",
	"nickname": "_37ru7gbHU2oP9Zh1t-D7f9",
	"title": "_2u61rg1mL46f8owGUunxdp"
};

/***/ }),

/***/ "./widgets/postEditor/index.js":
/*!*************************************!*\
  !*** ./widgets/postEditor/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-zero/react */ "redux-zero/react");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_zero_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _states_fn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../states/fn */ "./states/fn.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ "./widgets/postEditor/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! draft-js-export-html */ "draft-js-export-html");
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(draft_js_export_html__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_div__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/div */ "./components/div/index.js");
/* harmony import */ var _components_h1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/h1 */ "./components/h1/index.js");
/* harmony import */ var _components_h3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/h3 */ "./components/h3/index.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/select */ "./components/select/index.js");
/* harmony import */ var _widgets_category__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../widgets/category */ "./widgets/category/index.js");
/* harmony import */ var _widgets_tags__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../widgets/tags */ "./widgets/tags/index.js");
/* harmony import */ var _widgets_thumbnailDnD__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../widgets/thumbnailDnD */ "./widgets/thumbnailDnD/index.js");
/* harmony import */ var _widgets_postAvatar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../widgets/postAvatar */ "./widgets/postAvatar/index.js");
/* harmony import */ var _widgets_tools__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../widgets/tools */ "./widgets/tools/index.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_22__);







var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/postEditor/index.js";


















var mapToProps = function mapToProps(_ref) {
  var s = _ref.s,
      d = _ref.d;
  return {
    s: s,
    d: d
  };
};

var hasCommandModifier = draft_js__WEBPACK_IMPORTED_MODULE_11__["KeyBindingUtil"].hasCommandModifier;

var PostEditor =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PostEditor, _Component);

  function PostEditor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostEditor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PostEditor).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "convertFromRaw", function () {
      var raw = Object(draft_js__WEBPACK_IMPORTED_MODULE_11__["convertToRaw"])(_this.contentState);
      var html = Object(draft_js_export_html__WEBPACK_IMPORTED_MODULE_12__["stateToHTML"])(_this.contentState); //console.log(contentState)
      //console.log(raw)
      //console.log(html)
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getMouseSelection", function (e) {
      console.log('hell');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "wrapper", function (contentBlock) {
      var type = contentBlock.getType();

      if (type === 'unstyled') {
        return {
          component: _widgets_tools__WEBPACK_IMPORTED_MODULE_21__["default"],
          editable: true
        };
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "titleKeyDown", function (e) {
      if (e.keyCode === 13) {
        e.preventDefault();

        _this.refs['content'].focus();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "styling", function (content) {
      var type = content.getType(); //console.log(type)

      switch (type) {
        case 'unstyled':
          return 'editor-content-p';
          break;

        default:
          return null;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "focus", function (e) {});

    _this.styling = _this.styling.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));

    _this.onChange = function (editorState) {
      return _this.setState({
        editorState: editorState
      });
    };

    _this.focus = _this.focus.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleKeyCommand = _this.handleKeyCommand.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.convertFromRaw = _this.convertFromRaw.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.titleKeyDown = _this.titleKeyDown.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.wrapper = _this.wrapper.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.getMouseSelection = _this.getMouseSelection.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.blockRenderMap = immutable__WEBPACK_IMPORTED_MODULE_22___default.a.Map({
      'header-two': {
        element: 'h2'
      },
      'unstyled': {
        element: 'div'
      }
    });
    _this.state = {
      editorState: draft_js__WEBPACK_IMPORTED_MODULE_11__["EditorState"].createEmpty()
    };
    _this.editorState = _this.state.editorState;
    _this.contentState = _this.editorState.getCurrentContent();
    _this.selectionState = _this.editorState.getSelection();
    _this.currentContentBlock = _this.contentState.getBlockForKey(_this.selectionState.getAnchorKey());
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PostEditor, [{
    key: "handleKeyCommand",
    value: function handleKeyCommand(command, editorState) {
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_11__["RichUtils"].handleKeyCommand(editorState, command);

      if (newState) {
        this.onChange(newState);
        return 'handled';
      }

      return 'not-handled';
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.selectionState); //console.log(this.currentContentBlock.text)
      //console.log(this.contentState.getBlockMap().length)
      //console.log(this.contentState.getFirstBlock().getText())
      //console.log(this.contentState.getLastBlock().getText())
      //console.log(this.contentState.createFromBlockArray)
      //console.log(this.editorState.currentContent)

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.center,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.type,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_select__WEBPACK_IMPORTED_MODULE_16__["default"], {
        type: "list",
        size: "m",
        value: "News",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        ref: "title",
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.title,
        placeholder: "Title",
        onKeyDown: this.titleKeyDown,
        contentEditable: true,
        suppressContentEditableWarning: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Oshima Island\u2019s Perfect Guide -Must-see spots, Activities, Accommodation and Access"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.avatarWrap,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.editor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_11__["Editor"], {
        ref: "content",
        editorState: this.state.editorState,
        handleKeyCommand: this.handleKeyCommand,
        placeholder: "Edit",
        blockRenderMap: this.blockRenderMap,
        blockRendererFn: this.wrapper,
        blockStyleFn: this.styling,
        onFocus: this.focus,
        onChange: this.onChange,
        onBlur: this.getMouseSelection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.convertFromRaw,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Convert from Raw"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_10___default.a.right,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_thumbnailDnD__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "Author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_postAvatar__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "Category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_category__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "Tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widgets_tags__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_h3__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: "State",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_div__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }))));
    }
  }]);

  return PostEditor;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_zero_react__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapToProps, _states_fn__WEBPACK_IMPORTED_MODULE_9__["default"])(PostEditor));

/***/ }),

/***/ "./widgets/postEditor/style.css":
/*!**************************************!*\
  !*** ./widgets/postEditor/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"r": "_12k0_tOACRHfePevuuKwt8",
	"center": "_2PoVmP5_uxnQJ8S8OX4NsY",
	"type": "_2x4F0Lp0sE6KQNRzk9_EhZ",
	"right": "_1EiFMitZ2qqL40yUOTmIzv",
	"left": "_1tCRNqOkQu018i5wOYz4e6",
	"default": "_1hGTfy0_AzpXpHYHuSRoHT",
	"typeWrap": "_1kOBB3NKSc-DkxRk17puL3",
	"content": "_3fKJVJiArLfO9g4fVe1Dg2",
	"title": "zYN5lX3_EmQShnKdw5lE6",
	"editor": "_1zN6QslMF_35cn6zr0wVRt",
	"avatarWrap": "_36lm4CEn58AGrlEvwwf1qj"
};

/***/ }),

/***/ "./widgets/tags/index.js":
/*!*******************************!*\
  !*** ./widgets/tags/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./widgets/tags/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/button */ "./components/button/index.js");
/* harmony import */ var _assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/icons/icon-add.svg */ "./assets/icons/icon-add.svg");
/* harmony import */ var _assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/tags/index.js";






var Tags =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Tags, _Component);

  function Tags(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tags);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Tags).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleInputChange", function (e) {
      _this.setState({
        input: e.target.value
      });
    });

    _this.handleInputChange = _this.handleInputChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      input: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tags, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.input,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleInputChange,
        placeholder: "Add tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_8___default.a.result,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Funny", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        width: "10",
        height: "",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Thinking", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        width: "10",
        height: "",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Goods", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        width: "10",
        height: "",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Interesting", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        width: "10",
        height: "",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Javascript", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        width: "10",
        height: "",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Rust", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_icons_icon_add_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
        width: "10",
        height: "",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }))))));
    }
  }]);

  return Tags;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "./widgets/tags/style.css":
/*!********************************!*\
  !*** ./widgets/tags/style.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"input": "lDNQk5N0xPjqoK0oXiVxn",
	"result": "_1K7V1OvAfd_C32ny2bFe9"
};

/***/ }),

/***/ "./widgets/thumbnailDnD/index.js":
/*!***************************************!*\
  !*** ./widgets/thumbnailDnD/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./widgets/thumbnailDnD/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-zero/react */ "redux-zero/react");
/* harmony import */ var redux_zero_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_zero_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _states_fn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../states/fn */ "./states/fn.js");





var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/thumbnailDnD/index.js";






var mapToProps = function mapToProps(_ref) {
  var s = _ref.s,
      d = _ref.d;
  return {
    s: s,
    d: d
  };
};

var ThumbnailDnD =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ThumbnailDnD, _Component);

  function ThumbnailDnD(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ThumbnailDnD);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ThumbnailDnD).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ThumbnailDnD, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_6___default.a.dnd,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }));
    }
  }]);

  return ThumbnailDnD;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_zero_react__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapToProps, _states_fn__WEBPACK_IMPORTED_MODULE_8__["default"])(ThumbnailDnD));

/***/ }),

/***/ "./widgets/thumbnailDnD/style.css":
/*!****************************************!*\
  !*** ./widgets/thumbnailDnD/style.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"r": "MH-Q9plm_gN1o2btx1rgV"
};

/***/ }),

/***/ "./widgets/tools/index.js":
/*!********************************!*\
  !*** ./widgets/tools/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./widgets/tools/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/button */ "./components/button/index.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/am/Projects/firebase-cms/widgets/tools/index.js";






var Tools =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Tools, _Component);

  function Tools(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Tools);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Tools).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Tools, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.r,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorBlock"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _style_css__WEBPACK_IMPORTED_MODULE_7___default.a.toolbox,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        contentEditable: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "I"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        contentEditable: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "B")));
    }
  }]);

  return Tools;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tools);

/***/ }),

/***/ "./widgets/tools/style.css":
/*!*********************************!*\
  !*** ./widgets/tools/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"r": "_3PGg9k8r_wIWj0vAohOU6a",
	"edit": "_2m33cAWwaQaG3QsruGyuTb",
	"toolbox": "_3cmbyWdFAHkR0-yjMKwIlo"
};

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/news/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/am/Projects/firebase-cms/pages/news/index.js */"./pages/news/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "draft-js":
/*!***************************!*\
  !*** external "draft-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "draft-js-export-html":
/*!***************************************!*\
  !*** external "draft-js-export-html" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux-zero/react":
/*!***********************************!*\
  !*** external "redux-zero/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-zero/react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=news.js.map
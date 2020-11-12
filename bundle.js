/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n\tmargin: 2rem;\n\tfont-family: sans-serif;\n}\n\n#canvas {\n\tmax-width: 100%;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;CACC,YAAY;CACZ,uBAAuB;AACxB;;AAEA;CACC,eAAe;AAChB","sourcesContent":["body {\n\tmargin: 2rem;\n\tfont-family: sans-serif;\n}\n\n#canvas {\n\tmax-width: 100%;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/common/utils.ts":
/*!*****************************!*\
  !*** ./src/common/utils.ts ***!
  \*****************************/
/*! namespace exports */
/*! export drawBox [provided] [no usage info] [missing usage info prevents renaming] */
/*! export drawImageFromVideo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export drawLine [provided] [no usage info] [missing usage info prevents renaming] */
/*! export logUnless [provided] [no usage info] [missing usage info prevents renaming] */
/*! export logw [provided] [no usage info] [missing usage info prevents renaming] */
/*! export requestAnimationFrameAuto [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setIntervalWithCheck [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sleep [provided] [no usage info] [missing usage info prevents renaming] */
/*! export throwOnNull [provided] [no usage info] [missing usage info prevents renaming] */
/*! export trace [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwOnNull": () => /* binding */ throwOnNull,
/* harmony export */   "logUnless": () => /* binding */ logUnless,
/* harmony export */   "trace": () => /* binding */ trace,
/* harmony export */   "sleep": () => /* binding */ sleep,
/* harmony export */   "requestAnimationFrameAuto": () => /* binding */ requestAnimationFrameAuto,
/* harmony export */   "setIntervalWithCheck": () => /* binding */ setIntervalWithCheck,
/* harmony export */   "logw": () => /* binding */ logw,
/* harmony export */   "drawLine": () => /* binding */ drawLine,
/* harmony export */   "drawImageFromVideo": () => /* binding */ drawImageFromVideo,
/* harmony export */   "drawBox": () => /* binding */ drawBox
/* harmony export */ });
var throwOnNull = function (val) {
    if (val)
        return val;
    throw "NULL_FOUND";
};
var logUnless = function (filters) { return function (val) {
    if (filters.indexOf(val) == -1)
        return;
    console.log(val);
}; };
var trace = function (label) { return function (val) {
    console.log(label, val);
    return val;
}; };
var sleep = function (ms) { return function (val) { return new Promise(function (resolve) { return setTimeout(function () { return resolve(val); }, ms); }); }; };
/** Calls the tick function like setInterval but with requestAnimationFrame and check if it wants to continue */
var requestAnimationFrameAuto = function (tick) {
    var autoTick = function (time) {
        var result = tick(time);
        if (result === false)
            return;
        requestAnimationFrame(autoTick);
    };
    requestAnimationFrame(autoTick);
};
var setIntervalWithCheck = function (callback, timeout) {
    var intervalId = setInterval(function () {
        var result = callback();
        if (result === false) {
            clearTimeout(intervalId);
        }
    }, timeout);
};
var logw = function (label) {
    var ele = document.getElementById("text");
    var num = parseInt(ele.dataset.num);
    ele.textContent = num + " " + label;
};
var drawLine = function (canvas, begin, end, color) {
    canvas.beginPath();
    canvas.moveTo(begin.x, begin.y);
    canvas.lineTo(end.x, end.y);
    canvas.lineWidth = 4;
    canvas.strokeStyle = color;
    canvas.stroke();
};
/** Draws an image frame from video element into canvas and sets width and height of canvas from video */
var drawImageFromVideo = function (canvas, canvasElement, videoElement) {
    canvasElement.height = videoElement.videoHeight;
    canvasElement.width = videoElement.videoWidth;
    canvas.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
};
var drawBox = function (canvas, location, lineColor) {
    var topLeftCorner = location.topLeftCorner, topRightCorner = location.topRightCorner, bottomLeftCorner = location.bottomLeftCorner, bottomRightCorner = location.bottomRightCorner;
    drawLine(canvas, topLeftCorner, topRightCorner, lineColor);
    drawLine(canvas, topRightCorner, bottomRightCorner, lineColor);
    drawLine(canvas, bottomRightCorner, bottomLeftCorner, lineColor);
    drawLine(canvas, bottomLeftCorner, topLeftCorner, lineColor);
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mqr_mqr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mqr/mqr */ "./src/mqr/mqr.ts");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
;

var canvasElement = document.getElementById("canvas");
var messageElement = document.getElementById("text");
(0,_mqr_mqr__WEBPACK_IMPORTED_MODULE_0__.qrScanner)({ current: canvasElement })
    .then(function (s) {
    return s.start();
})
    .then(function (code) {
    messageElement.innerText = code.data;
})
    .catch(function (err) {
    messageElement.textContent = JSON.stringify(err);
});


/***/ }),

/***/ "./src/mqr/mqr.ts":
/*!************************!*\
  !*** ./src/mqr/mqr.ts ***!
  \************************/
/*! namespace exports */
/*! export qrScanner [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qrScanner": () => /* binding */ qrScanner
/* harmony export */ });
/* harmony import */ var _mqr_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/mqr/video */ "./src/mqr/video.ts");
/* harmony import */ var _mqr_scanner_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mqr/scanner-engine */ "./src/mqr/scanner-engine.ts");
/* harmony import */ var _mqr_scanner_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mqr/scanner-control */ "./src/mqr/scanner-control.ts");
;


var qrScanner = function (canvasElement) {
    if (!canvasElement || !canvasElement.current)
        return;
    var videoElement = document.createElement("video");
    var canvas = canvasElement.current.getContext("2d", { alpha: false });
    var scanner = new _mqr_scanner_engine__WEBPACK_IMPORTED_MODULE_1__.QrScannerEngine();
    return (0,_mqr_video__WEBPACK_IMPORTED_MODULE_0__.getVideoWithStream)(videoElement)
        .then(function (videoElement) { return new _mqr_scanner_control__WEBPACK_IMPORTED_MODULE_2__.QrScannerControl(videoElement, canvasElement, canvas, scanner); });
};


/***/ }),

/***/ "./src/mqr/scanner-control.ts":
/*!************************************!*\
  !*** ./src/mqr/scanner-control.ts ***!
  \************************************/
/*! namespace exports */
/*! export QrScannerControl [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScannerControl": () => /* binding */ QrScannerControl
/* harmony export */ });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common/utils */ "./src/common/utils.ts");
;
var QrScannerControl = /** @class */ (function () {
    function QrScannerControl(videoElement, canvasElement, canvas, scannerEngine) {
        this.videoElement = videoElement;
        this.canvasElement = canvasElement;
        this.canvas = canvas;
        this.scannerEngine = scannerEngine;
    }
    QrScannerControl.prototype.start = function () {
        var _this = this;
        this.playing = true;
        return new Promise(function (resolve) {
            _this.onScanSuccess = resolve;
            var scanTick = _this.scanTick.bind(_this);
            var drawTick = _this.drawTick.bind(_this);
            (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.setIntervalWithCheck)(scanTick, 330);
            (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.requestAnimationFrameAuto)(drawTick);
        });
    };
    QrScannerControl.prototype.stop = function () {
        this.playing = false;
    };
    QrScannerControl.prototype.scanTick = function () {
        var _this = this;
        if (this.videoElement.readyState !== this.videoElement.HAVE_ENOUGH_DATA)
            return;
        if (!this.canvasElement.current) {
            console.log("canvasElement is null man");
            return;
        }
        var imageData = this.canvas.getImageData(0, 0, this.canvasElement.current.width, this.canvasElement.current.height);
        this.scannerEngine.scanQRCode(imageData)
            .then(function (code) {
            _this.playing = false;
            _this.onScanSuccess(code);
        });
        return this.playing;
    };
    QrScannerControl.prototype.drawTick = function () {
        if (!this.canvasElement.current) {
            console.log("canvasElement is null man");
            return;
        }
        (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.logw)("drawTick");
        (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.drawImageFromVideo)(this.canvas, this.canvasElement.current, this.videoElement);
        return this.playing;
    };
    QrScannerControl.prototype.outlineQRCode = function (code) {
        (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.drawBox)(this.canvas, code.location, "#FF3B58");
    };
    return QrScannerControl;
}());



/***/ }),

/***/ "./src/mqr/scanner-engine.ts":
/*!***********************************!*\
  !*** ./src/mqr/scanner-engine.ts ***!
  \***********************************/
/*! namespace exports */
/*! export QrScannerEngine [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScannerEngine": () => /* binding */ QrScannerEngine
/* harmony export */ });
/* harmony import */ var worker_loader_filename_qr_worker_js_worker_mqr_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! worker-loader?filename=qr-worker.js!@/worker/mqr-worker */ "./node_modules/worker-loader/dist/cjs.js?filename=qr-worker.js!./src/worker/mqr-worker.ts");
;
var QrScannerEngine = /** @class */ (function () {
    function QrScannerEngine() {
        this.worker = new worker_loader_filename_qr_worker_js_worker_mqr_worker__WEBPACK_IMPORTED_MODULE_0__.default();
        var onSuccess = this.messageListener.bind(this);
        this.worker.addEventListener("message", onSuccess);
    }
    QrScannerEngine.prototype.scanQRCodeCallback = function (imageData, onSuccess) {
        this.onSuccess = onSuccess;
        this.worker.postMessage({
            type: "scan_qrcode",
            body: imageData,
        });
    };
    QrScannerEngine.prototype.scanQRCode = function (imageData) {
        var _this = this;
        return new Promise(function (resolve) { return _this.scanQRCodeCallback(imageData, resolve); });
    };
    QrScannerEngine.prototype.messageListener = function (event) {
        var _a = event.data, type = _a.type, body = _a.body;
        if (type != "scan_qrcode")
            return;
        if (body == null)
            return;
        this.onSuccess(body);
    };
    return QrScannerEngine;
}());



/***/ }),

/***/ "./src/mqr/video.ts":
/*!**************************!*\
  !*** ./src/mqr/video.ts ***!
  \**************************/
/*! namespace exports */
/*! export getVideoWithStream [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVideoWithStream": () => /* binding */ getVideoWithStream
/* harmony export */ });
var getVideoWithStream = function (videoElement) {
    var constraints = {
        video: {
            facingMode: "environment",
        }
    };
    return navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
        videoElement.srcObject = stream;
        videoElement.setAttribute("playsinline", "true");
        videoElement.play();
        return videoElement;
    })
        .catch(function (err) {
        console.error("err in getVideoWithStream", err);
        throw "CAM_ERROR";
    });
};


/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js?filename=qr-worker.js!./src/worker/mqr-worker.ts":
/*!*************************************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js?filename=qr-worker.js!./src/worker/mqr-worker.ts ***!
  \*************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return new Worker(__webpack_require__.p + "qr-worker.js");
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tcXIvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vbXFyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tcXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9tcXIvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9tcXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXFyLy4vc3JjL2NvbW1vbi91dGlscy50cyIsIndlYnBhY2s6Ly9tcXIvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9tcXIvLi9zcmMvbXFyL21xci50cyIsIndlYnBhY2s6Ly9tcXIvLi9zcmMvbXFyL3NjYW5uZXItY29udHJvbC50cyIsIndlYnBhY2s6Ly9tcXIvLi9zcmMvbXFyL3NjYW5uZXItZW5naW5lLnRzIiwid2VicGFjazovL21xci8uL3NyYy9tcXIvdmlkZW8udHMiLCJ3ZWJwYWNrOi8vbXFyLy4vc3JjL3dvcmtlci9tcXItd29ya2VyLnRzIiwid2VicGFjazovL21xci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXFyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXFyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxDQUFzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGlCQUFpQiw0QkFBNEIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLGVBQWUsK0VBQStFLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLDRCQUE0QixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsMkJBQTJCO0FBQzdaO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3QyxnRkFBZ0YsZUFBZSxlQUFlLGdCQUFnQixvQkFB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Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7VUNmQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcblxcdG1hcmdpbjogMnJlbTtcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NhbnZhcyB7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxZQUFZO0NBQ1osdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRtYXJnaW46IDJyZW07XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbiNjYW52YXMge1xcblxcdG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBQb2ludCwgQm94LCBGcmFtZVJlcXVlc3RDYWxsYmFja1dpdGhDaGVjayB9IGZyb20gXCIuL3V0aWxzLmRcIlxuXG5leHBvcnQgY29uc3QgdGhyb3dPbk51bGwgPSB2YWwgPT4ge1xuXHRpZih2YWwpIHJldHVybiB2YWw7XG5cdHRocm93IFwiTlVMTF9GT1VORFwiO1xufVxuXG5leHBvcnQgY29uc3QgbG9nVW5sZXNzID0gZmlsdGVycyA9PiB2YWwgPT4ge1xuXHRpZiggZmlsdGVycy5pbmRleE9mKHZhbCkgPT0gLTEgKVxuXHRcdHJldHVybjtcblxuXHRjb25zb2xlLmxvZyh2YWwpO1xufVxuXG5leHBvcnQgY29uc3QgdHJhY2UgPSBsYWJlbCA9PiB2YWwgPT4ge1xuXHRjb25zb2xlLmxvZyhsYWJlbCwgdmFsKTtcblx0cmV0dXJuIHZhbFxufVxuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSA8VCA9IGFueT4obXMpID0+ICh2YWw6IFQpOiBQcm9taXNlPFQ+ID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHZhbCksIG1zKSlcblxuLyoqIENhbGxzIHRoZSB0aWNrIGZ1bmN0aW9uIGxpa2Ugc2V0SW50ZXJ2YWwgYnV0IHdpdGggcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGFuZCBjaGVjayBpZiBpdCB3YW50cyB0byBjb250aW51ZSAqL1xuZXhwb3J0IGNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZUF1dG8gPSAodGljazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2tXaXRoQ2hlY2spID0+IHtcblx0Y29uc3QgYXV0b1RpY2sgPSAodGltZTogbnVtYmVyKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gdGljayh0aW1lKTtcblx0XHRpZihyZXN1bHQgPT09IGZhbHNlKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF1dG9UaWNrKTtcblx0fVxuXG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShhdXRvVGljayk7XG59XG5cbmV4cG9ydCBjb25zdCBzZXRJbnRlcnZhbFdpdGhDaGVjayA9IChjYWxsYmFjaywgdGltZW91dCkgPT4ge1xuXHRjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKCk7XG5cdFx0aWYocmVzdWx0ID09PSBmYWxzZSkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KGludGVydmFsSWQpO1xuXHRcdH1cblxuXHR9LCB0aW1lb3V0KTtcbn1cblxuXG5leHBvcnQgY29uc3QgbG9ndyA9IGxhYmVsID0+IHtcblx0Y29uc3QgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0XCIpO1xuXHRjb25zdCBudW06IG51bWJlciA9IHBhcnNlSW50KGVsZS5kYXRhc2V0Lm51bSk7XG5cdGVsZS50ZXh0Q29udGVudCA9IG51bSArIFwiIFwiICsgbGFiZWxcbn1cblxuXG5leHBvcnQgY29uc3QgZHJhd0xpbmUgPSAoY2FudmFzOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGJlZ2luOiBQb2ludCwgZW5kOiBQb2ludCwgY29sb3I6IHN0cmluZykgPT4ge1xuXHRjYW52YXMuYmVnaW5QYXRoKCk7XG5cdGNhbnZhcy5tb3ZlVG8oYmVnaW4ueCwgYmVnaW4ueSk7XG5cdGNhbnZhcy5saW5lVG8oZW5kLngsIGVuZC55KTtcblx0Y2FudmFzLmxpbmVXaWR0aCA9IDQ7XG5cdGNhbnZhcy5zdHJva2VTdHlsZSA9IGNvbG9yO1xuXHRjYW52YXMuc3Ryb2tlKCk7XG59XG5cbi8qKiBEcmF3cyBhbiBpbWFnZSBmcmFtZSBmcm9tIHZpZGVvIGVsZW1lbnQgaW50byBjYW52YXMgYW5kIHNldHMgd2lkdGggYW5kIGhlaWdodCBvZiBjYW52YXMgZnJvbSB2aWRlbyAqL1xuZXhwb3J0IGNvbnN0IGRyYXdJbWFnZUZyb21WaWRlbyA9IChjYW52YXM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIHZpZGVvRWxlbWVudDogSFRNTFZpZGVvRWxlbWVudCkgPT4ge1xuXHRjYW52YXNFbGVtZW50LmhlaWdodCA9IHZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcblx0Y2FudmFzRWxlbWVudC53aWR0aCA9IHZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuXHRjYW52YXMuZHJhd0ltYWdlKHZpZGVvRWxlbWVudCwgMCwgMCwgY2FudmFzRWxlbWVudC53aWR0aCwgY2FudmFzRWxlbWVudC5oZWlnaHQpO1xufVxuXG5leHBvcnQgY29uc3QgZHJhd0JveCA9IChjYW52YXM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgbG9jYXRpb246IEJveCwgbGluZUNvbG9yOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgeyB0b3BMZWZ0Q29ybmVyLCB0b3BSaWdodENvcm5lciwgYm90dG9tTGVmdENvcm5lciwgYm90dG9tUmlnaHRDb3JuZXIgfSA9IGxvY2F0aW9uO1xuXG5cdGRyYXdMaW5lKGNhbnZhcywgdG9wTGVmdENvcm5lciwgdG9wUmlnaHRDb3JuZXIsIGxpbmVDb2xvcik7XG5cdGRyYXdMaW5lKGNhbnZhcywgdG9wUmlnaHRDb3JuZXIsIGJvdHRvbVJpZ2h0Q29ybmVyLCBsaW5lQ29sb3IpO1xuXHRkcmF3TGluZShjYW52YXMsIGJvdHRvbVJpZ2h0Q29ybmVyLCBib3R0b21MZWZ0Q29ybmVyLCBsaW5lQ29sb3IpO1xuXHRkcmF3TGluZShjYW52YXMsIGJvdHRvbUxlZnRDb3JuZXIsIHRvcExlZnRDb3JuZXIsIGxpbmVDb2xvcik7XG59XG5cblxuXG4iLCJpbXBvcnQgeyBxclNjYW5uZXIgfSBmcm9tIFwiQC9tcXIvbXFyXCJcbmltcG9ydCBcIi4vbWFpbi5jc3NcIlxuXG5jb25zdCBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5jb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dFwiKTtcblxuXG5xclNjYW5uZXIoeyBjdXJyZW50OiBjYW52YXNFbGVtZW50IH0pXG5cdC50aGVuKChzKSA9PiB7XG5cdFx0cmV0dXJuIHMuc3RhcnQoKTtcblx0fSlcblx0LnRoZW4oY29kZSA9PiB7XG5cdFx0bWVzc2FnZUVsZW1lbnQuaW5uZXJUZXh0ID0gY29kZS5kYXRhO1xuXHR9KVxuXHQuY2F0Y2goZXJyID0+IHtcblx0XHRtZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGVycik7XG5cdH0pXG5cblxuXG4iLCJpbXBvcnQgeyBDYW52YXNFbGVtZW50UmVmIH0gZnJvbSBcIi4vbXFyLmRcIlxuaW1wb3J0IHsgZ2V0VmlkZW9XaXRoU3RyZWFtIH0gZnJvbSBcIkAvbXFyL3ZpZGVvXCJcbmltcG9ydCB7IFFyU2Nhbm5lckVuZ2luZSB9IGZyb20gXCJAL21xci9zY2FubmVyLWVuZ2luZVwiXG5pbXBvcnQgeyBRclNjYW5uZXJDb250cm9sIH0gZnJvbSBcIkAvbXFyL3NjYW5uZXItY29udHJvbFwiXG5cblxuZXhwb3J0IGNvbnN0IHFyU2Nhbm5lciA9IChjYW52YXNFbGVtZW50OiBDYW52YXNFbGVtZW50UmVmKSA9PiB7XG5cdGlmKCFjYW52YXNFbGVtZW50IHx8ICFjYW52YXNFbGVtZW50LmN1cnJlbnQpXG5cdFx0cmV0dXJuO1xuXG5cdGNvbnN0IHZpZGVvRWxlbWVudDogSFRNTFZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcblx0Y29uc3QgY2FudmFzOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXNFbGVtZW50LmN1cnJlbnQuZ2V0Q29udGV4dChcIjJkXCIsIHsgYWxwaGE6IGZhbHNlIH0pO1xuXHRjb25zdCBzY2FubmVyID0gbmV3IFFyU2Nhbm5lckVuZ2luZSgpO1xuXG5cdHJldHVybiBnZXRWaWRlb1dpdGhTdHJlYW0odmlkZW9FbGVtZW50KVxuXHRcdC50aGVuKHZpZGVvRWxlbWVudCA9PiBuZXcgUXJTY2FubmVyQ29udHJvbChcblx0XHRcdHZpZGVvRWxlbWVudCxcblx0XHRcdGNhbnZhc0VsZW1lbnQsXG5cdFx0XHRjYW52YXMsXG5cdFx0XHRzY2FubmVyXG5cdFx0KSlcbn1cblxuXG5leHBvcnQgeyBPblNjYW5TdWNjZXNzLCBDYW52YXNFbGVtZW50UmVmIH0gZnJvbSBcIi4vbXFyLmRcIlxuIiwiaW1wb3J0IHsgUVJDb2RlIH0gZnJvbSBcImpzcXJcIlxuaW1wb3J0IHsgUXJTY2FubmVyRW5naW5lIH0gZnJvbSBcIi4vc2Nhbm5lci1lbmdpbmVcIlxuaW1wb3J0IHsgbG9ndywgc2V0SW50ZXJ2YWxXaXRoQ2hlY2ssIHJlcXVlc3RBbmltYXRpb25GcmFtZUF1dG8sIGRyYXdCb3gsIGRyYXdJbWFnZUZyb21WaWRlbyB9IGZyb20gXCJAL2NvbW1vbi91dGlsc1wiXG5pbXBvcnQgeyBPblNjYW5TdWNjZXNzLCBDYW52YXNFbGVtZW50UmVmIH0gZnJvbSBcIkAvbXFyL21xclwiXG5cblxuZXhwb3J0IGNsYXNzIFFyU2Nhbm5lckNvbnRyb2wge1xuXHRwbGF5aW5nOiBib29sZWFuO1xuXHRvblNjYW5TdWNjZXNzOiBPblNjYW5TdWNjZXNzO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyB2aWRlb0VsZW1lbnQ6IEhUTUxWaWRlb0VsZW1lbnQsXG5cdFx0cHVibGljIGNhbnZhc0VsZW1lbnQ6IENhbnZhc0VsZW1lbnRSZWYsXG5cdFx0cHVibGljIGNhbnZhczogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuXHRcdHB1YmxpYyBzY2FubmVyRW5naW5lOiBRclNjYW5uZXJFbmdpbmUsXG5cdCkge31cblxuXHRzdGFydCgpOiBQcm9taXNlPFFSQ29kZT4ge1xuXHRcdHRoaXMucGxheWluZyA9IHRydWU7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdHRoaXMub25TY2FuU3VjY2VzcyA9IHJlc29sdmU7XG5cdFx0XHRjb25zdCBzY2FuVGljayA9IHRoaXMuc2NhblRpY2suYmluZCh0aGlzKTtcblx0XHRcdGNvbnN0IGRyYXdUaWNrID0gdGhpcy5kcmF3VGljay5iaW5kKHRoaXMpO1xuXG5cdFx0XHRzZXRJbnRlcnZhbFdpdGhDaGVjayhzY2FuVGljaywgMzMwKTtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUF1dG8oZHJhd1RpY2spO1xuXHRcdH0pXG5cdH1cblxuXHRzdG9wKCkge1xuXHRcdHRoaXMucGxheWluZyA9IGZhbHNlO1xuXHR9XG5cblx0c2NhblRpY2soKSB7XG5cdFx0aWYodGhpcy52aWRlb0VsZW1lbnQucmVhZHlTdGF0ZSAhPT0gdGhpcy52aWRlb0VsZW1lbnQuSEFWRV9FTk9VR0hfREFUQSlcblx0XHRcdHJldHVybjtcblx0XHRpZighdGhpcy5jYW52YXNFbGVtZW50LmN1cnJlbnQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiY2FudmFzRWxlbWVudCBpcyBudWxsIG1hblwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpbWFnZURhdGEgPSB0aGlzLmNhbnZhcy5nZXRJbWFnZURhdGEoXG5cdFx0XHQwLCAwLFxuXHRcdFx0dGhpcy5jYW52YXNFbGVtZW50LmN1cnJlbnQud2lkdGgsIHRoaXMuY2FudmFzRWxlbWVudC5jdXJyZW50LmhlaWdodFxuXHRcdCk7XG5cblx0XHR0aGlzLnNjYW5uZXJFbmdpbmUuc2NhblFSQ29kZShpbWFnZURhdGEpXG5cdFx0XHQudGhlbihjb2RlID0+IHtcblx0XHRcdFx0dGhpcy5wbGF5aW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMub25TY2FuU3VjY2Vzcyhjb2RlKTtcblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMucGxheWluZztcblx0fVxuXG5cdGRyYXdUaWNrKCkge1xuXHRcdGlmKCF0aGlzLmNhbnZhc0VsZW1lbnQuY3VycmVudCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJjYW52YXNFbGVtZW50IGlzIG51bGwgbWFuXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxvZ3coXCJkcmF3VGlja1wiKTtcblx0XHRkcmF3SW1hZ2VGcm9tVmlkZW8odGhpcy5jYW52YXMsIHRoaXMuY2FudmFzRWxlbWVudC5jdXJyZW50LCB0aGlzLnZpZGVvRWxlbWVudCk7XG5cblx0XHRyZXR1cm4gdGhpcy5wbGF5aW5nO1xuXHR9XG5cblx0cHJpdmF0ZSBvdXRsaW5lUVJDb2RlKGNvZGU6IFFSQ29kZSkge1xuXHRcdGRyYXdCb3godGhpcy5jYW52YXMsIGNvZGUubG9jYXRpb24sIFwiI0ZGM0I1OFwiKTtcblx0fVxuXG59XG5cblxuIiwiaW1wb3J0IHsgUVJDb2RlIH0gZnJvbSBcImpzcXJcIlxuaW1wb3J0IHsgT25TY2FuU3VjY2VzcyB9IGZyb20gXCJAL21xci9tcXJcIlxuaW1wb3J0IFFSQ29kZVdvcmtlciBmcm9tIFwid29ya2VyLWxvYWRlcj9maWxlbmFtZT1xci13b3JrZXIuanMhQC93b3JrZXIvbXFyLXdvcmtlclwiXG5cblxuZXhwb3J0IGNsYXNzIFFyU2Nhbm5lckVuZ2luZSB7XG5cdHdvcmtlcjogV29ya2VyO1xuXHRvblN1Y2Nlc3M6IE9uU2NhblN1Y2Nlc3M7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy53b3JrZXIgPSBuZXcgUVJDb2RlV29ya2VyKCk7XG5cblx0XHRjb25zdCBvblN1Y2Nlc3MgPSB0aGlzLm1lc3NhZ2VMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMud29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uU3VjY2Vzcyk7XG5cdH1cblxuXG5cdHNjYW5RUkNvZGVDYWxsYmFjayhpbWFnZURhdGE6IEltYWdlRGF0YSwgb25TdWNjZXNzOiBPblNjYW5TdWNjZXNzKSB7XG5cdFx0dGhpcy5vblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0dGhpcy53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0dHlwZTogXCJzY2FuX3FyY29kZVwiLFxuXHRcdFx0Ym9keTogaW1hZ2VEYXRhLFxuXHRcdH0pO1xuXHR9XG5cblx0c2NhblFSQ29kZShpbWFnZURhdGE6IEltYWdlRGF0YSk6IFByb21pc2U8UVJDb2RlPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5zY2FuUVJDb2RlQ2FsbGJhY2soaW1hZ2VEYXRhLCByZXNvbHZlKSlcblx0fVxuXG5cdG1lc3NhZ2VMaXN0ZW5lcihldmVudDogTWVzc2FnZUV2ZW50KSB7XG5cdFx0Y29uc3QgeyB0eXBlLCBib2R5IH0gPSBldmVudC5kYXRhO1xuXHRcdGlmKHR5cGUgIT0gXCJzY2FuX3FyY29kZVwiKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0aWYoYm9keSA9PSBudWxsKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy5vblN1Y2Nlc3MoYm9keSk7XG5cdH1cbn1cblxuXG4iLCJcbmV4cG9ydCBjb25zdCBnZXRWaWRlb1dpdGhTdHJlYW0gPSAodmlkZW9FbGVtZW50OiBIVE1MVmlkZW9FbGVtZW50KTogUHJvbWlzZTxIVE1MVmlkZW9FbGVtZW50PiA9PiB7XG5cdGNvbnN0IGNvbnN0cmFpbnRzOiBNZWRpYVN0cmVhbUNvbnN0cmFpbnRzID0ge1xuXHRcdHZpZGVvOiB7XG5cdFx0XHRmYWNpbmdNb2RlOiBcImVudmlyb25tZW50XCIsXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKVxuXHRcdC50aGVuKHN0cmVhbSA9PiB7XG5cdFx0XHR2aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuXHRcdFx0dmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZShcInBsYXlzaW5saW5lXCIsIFwidHJ1ZVwiKTtcblx0XHRcdHZpZGVvRWxlbWVudC5wbGF5KCk7XG5cblx0XHRcdHJldHVybiB2aWRlb0VsZW1lbnQ7XG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnIgaW4gZ2V0VmlkZW9XaXRoU3RyZWFtXCIsIGVycik7XG5cdFx0XHR0aHJvdyBcIkNBTV9FUlJPUlwiO1xuXHRcdH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInFyLXdvcmtlci5qc1wiKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
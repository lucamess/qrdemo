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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tcXIvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vbXFyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tcXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9tcXIvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9tcXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXFyLy4vc3JjL2NvbW1vbi91dGlscy50cyIsIndlYnBhY2s6Ly9tcXIvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9tcXIvLi9zcmMvbXFyL21xci50cyIsIndlYnBhY2s6Ly9tcXIvLi9zcmMvbXFyL3NjYW5uZXItY29udHJvbC50cyIsIndlYnBhY2s6Ly9tcXIvLi9zcmMvbXFyL3NjYW5uZXItZW5naW5lLnRzIiwid2VicGFjazovL21xci8uL3NyYy9tcXIvdmlkZW8udHMiLCJ3ZWJwYWNrOi8vbXFyLy4vc3JjL3dvcmtlci9tcXItd29ya2VyLnRzIiwid2VicGFjazovL21xci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXFyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbXFyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxDQUFzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGlCQUFpQiw0QkFBNEIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLGVBQWUsK0VBQStFLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLDRCQUE0QixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsMkJBQTJCO0FBQzdaO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3QyxnRkFBZ0YsZUFBZSxlQUFlLGdCQUFnQixvQkFB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O1dBQ0E7V0FDQSxrQzs7OztVQ2ZBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuXFx0bWFyZ2luOiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY2FudmFzIHtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLFlBQVk7Q0FDWix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcblxcdG1hcmdpbjogMnJlbTtcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NhbnZhcyB7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFBvaW50LCBCb3gsIEZyYW1lUmVxdWVzdENhbGxiYWNrV2l0aENoZWNrIH0gZnJvbSBcIi4vdXRpbHMuZFwiXG5cbmV4cG9ydCBjb25zdCB0aHJvd09uTnVsbCA9IHZhbCA9PiB7XG5cdGlmKHZhbCkgcmV0dXJuIHZhbDtcblx0dGhyb3cgXCJOVUxMX0ZPVU5EXCI7XG59XG5cbmV4cG9ydCBjb25zdCBsb2dVbmxlc3MgPSBmaWx0ZXJzID0+IHZhbCA9PiB7XG5cdGlmKCBmaWx0ZXJzLmluZGV4T2YodmFsKSA9PSAtMSApXG5cdFx0cmV0dXJuO1xuXG5cdGNvbnNvbGUubG9nKHZhbCk7XG59XG5cbmV4cG9ydCBjb25zdCB0cmFjZSA9IGxhYmVsID0+IHZhbCA9PiB7XG5cdGNvbnNvbGUubG9nKGxhYmVsLCB2YWwpO1xuXHRyZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBjb25zdCBzbGVlcCA9IDxUID0gYW55PihtcykgPT4gKHZhbDogVCk6IFByb21pc2U8VD4gPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUodmFsKSwgbXMpKVxuXG4vKiogQ2FsbHMgdGhlIHRpY2sgZnVuY3Rpb24gbGlrZSBzZXRJbnRlcnZhbCBidXQgd2l0aCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgYW5kIGNoZWNrIGlmIGl0IHdhbnRzIHRvIGNvbnRpbnVlICovXG5leHBvcnQgY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lQXV0byA9ICh0aWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFja1dpdGhDaGVjaykgPT4ge1xuXHRjb25zdCBhdXRvVGljayA9ICh0aW1lOiBudW1iZXIpID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSB0aWNrKHRpbWUpO1xuXHRcdGlmKHJlc3VsdCA9PT0gZmFsc2UpXG5cdFx0XHRyZXR1cm47XG5cblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1RpY2spO1xuXHR9XG5cblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGF1dG9UaWNrKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNldEludGVydmFsV2l0aENoZWNrID0gKGNhbGxiYWNrLCB0aW1lb3V0KSA9PiB7XG5cdGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gY2FsbGJhY2soKTtcblx0XHRpZihyZXN1bHQgPT09IGZhbHNlKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoaW50ZXJ2YWxJZCk7XG5cdFx0fVxuXG5cdH0sIHRpbWVvdXQpO1xufVxuXG5cbmV4cG9ydCBjb25zdCBkcmF3TGluZSA9IChjYW52YXM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgYmVnaW46IFBvaW50LCBlbmQ6IFBvaW50LCBjb2xvcjogc3RyaW5nKSA9PiB7XG5cdGNhbnZhcy5iZWdpblBhdGgoKTtcblx0Y2FudmFzLm1vdmVUbyhiZWdpbi54LCBiZWdpbi55KTtcblx0Y2FudmFzLmxpbmVUbyhlbmQueCwgZW5kLnkpO1xuXHRjYW52YXMubGluZVdpZHRoID0gNDtcblx0Y2FudmFzLnN0cm9rZVN0eWxlID0gY29sb3I7XG5cdGNhbnZhcy5zdHJva2UoKTtcbn1cblxuLyoqIERyYXdzIGFuIGltYWdlIGZyYW1lIGZyb20gdmlkZW8gZWxlbWVudCBpbnRvIGNhbnZhcyBhbmQgc2V0cyB3aWR0aCBhbmQgaGVpZ2h0IG9mIGNhbnZhcyBmcm9tIHZpZGVvICovXG5leHBvcnQgY29uc3QgZHJhd0ltYWdlRnJvbVZpZGVvID0gKGNhbnZhczogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCwgdmlkZW9FbGVtZW50OiBIVE1MVmlkZW9FbGVtZW50KSA9PiB7XG5cdGNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gdmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuXHRjYW52YXNFbGVtZW50LndpZHRoID0gdmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XG5cdGNhbnZhcy5kcmF3SW1hZ2UodmlkZW9FbGVtZW50LCAwLCAwLCBjYW52YXNFbGVtZW50LndpZHRoLCBjYW52YXNFbGVtZW50LmhlaWdodCk7XG59XG5cbmV4cG9ydCBjb25zdCBkcmF3Qm94ID0gKGNhbnZhczogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBsb2NhdGlvbjogQm94LCBsaW5lQ29sb3I6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7IHRvcExlZnRDb3JuZXIsIHRvcFJpZ2h0Q29ybmVyLCBib3R0b21MZWZ0Q29ybmVyLCBib3R0b21SaWdodENvcm5lciB9ID0gbG9jYXRpb247XG5cblx0ZHJhd0xpbmUoY2FudmFzLCB0b3BMZWZ0Q29ybmVyLCB0b3BSaWdodENvcm5lciwgbGluZUNvbG9yKTtcblx0ZHJhd0xpbmUoY2FudmFzLCB0b3BSaWdodENvcm5lciwgYm90dG9tUmlnaHRDb3JuZXIsIGxpbmVDb2xvcik7XG5cdGRyYXdMaW5lKGNhbnZhcywgYm90dG9tUmlnaHRDb3JuZXIsIGJvdHRvbUxlZnRDb3JuZXIsIGxpbmVDb2xvcik7XG5cdGRyYXdMaW5lKGNhbnZhcywgYm90dG9tTGVmdENvcm5lciwgdG9wTGVmdENvcm5lciwgbGluZUNvbG9yKTtcbn1cblxuXG5cbiIsImltcG9ydCB7IHFyU2Nhbm5lciB9IGZyb20gXCJAL21xci9tcXJcIlxuaW1wb3J0IFwiLi9tYWluLmNzc1wiXG5cbmNvbnN0IGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbmNvbnN0IG1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0XCIpO1xuXG5cbnFyU2Nhbm5lcih7IGN1cnJlbnQ6IGNhbnZhc0VsZW1lbnQgfSlcblx0LnRoZW4oKHMpID0+IHtcblx0XHRyZXR1cm4gcy5zdGFydCgpO1xuXHR9KVxuXHQudGhlbihjb2RlID0+IHtcblx0XHRtZXNzYWdlRWxlbWVudC5pbm5lclRleHQgPSBjb2RlLmRhdGE7XG5cdH0pXG5cdC5jYXRjaChlcnIgPT4ge1xuXHRcdG1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoZXJyKTtcblx0fSlcblxuXG5cbiIsImltcG9ydCB7IENhbnZhc0VsZW1lbnRSZWYgfSBmcm9tIFwiLi9tcXIuZFwiXG5pbXBvcnQgeyBnZXRWaWRlb1dpdGhTdHJlYW0gfSBmcm9tIFwiQC9tcXIvdmlkZW9cIlxuaW1wb3J0IHsgUXJTY2FubmVyRW5naW5lIH0gZnJvbSBcIkAvbXFyL3NjYW5uZXItZW5naW5lXCJcbmltcG9ydCB7IFFyU2Nhbm5lckNvbnRyb2wgfSBmcm9tIFwiQC9tcXIvc2Nhbm5lci1jb250cm9sXCJcblxuXG5leHBvcnQgY29uc3QgcXJTY2FubmVyID0gKGNhbnZhc0VsZW1lbnQ6IENhbnZhc0VsZW1lbnRSZWYpID0+IHtcblx0aWYoIWNhbnZhc0VsZW1lbnQgfHwgIWNhbnZhc0VsZW1lbnQuY3VycmVudClcblx0XHRyZXR1cm47XG5cblx0Y29uc3QgdmlkZW9FbGVtZW50OiBIVE1MVmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xuXHRjb25zdCBjYW52YXM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhc0VsZW1lbnQuY3VycmVudC5nZXRDb250ZXh0KFwiMmRcIiwgeyBhbHBoYTogZmFsc2UgfSk7XG5cdGNvbnN0IHNjYW5uZXIgPSBuZXcgUXJTY2FubmVyRW5naW5lKCk7XG5cblx0cmV0dXJuIGdldFZpZGVvV2l0aFN0cmVhbSh2aWRlb0VsZW1lbnQpXG5cdFx0LnRoZW4odmlkZW9FbGVtZW50ID0+IG5ldyBRclNjYW5uZXJDb250cm9sKFxuXHRcdFx0dmlkZW9FbGVtZW50LFxuXHRcdFx0Y2FudmFzRWxlbWVudCxcblx0XHRcdGNhbnZhcyxcblx0XHRcdHNjYW5uZXJcblx0XHQpKVxufVxuXG5cbmV4cG9ydCB7IE9uU2NhblN1Y2Nlc3MsIENhbnZhc0VsZW1lbnRSZWYgfSBmcm9tIFwiLi9tcXIuZFwiXG4iLCJpbXBvcnQgeyBRUkNvZGUgfSBmcm9tIFwianNxclwiXG5pbXBvcnQgeyBRclNjYW5uZXJFbmdpbmUgfSBmcm9tIFwiLi9zY2FubmVyLWVuZ2luZVwiXG5pbXBvcnQgeyBzZXRJbnRlcnZhbFdpdGhDaGVjaywgcmVxdWVzdEFuaW1hdGlvbkZyYW1lQXV0bywgZHJhd0JveCwgZHJhd0ltYWdlRnJvbVZpZGVvIH0gZnJvbSBcIkAvY29tbW9uL3V0aWxzXCJcbmltcG9ydCB7IE9uU2NhblN1Y2Nlc3MsIENhbnZhc0VsZW1lbnRSZWYgfSBmcm9tIFwiQC9tcXIvbXFyXCJcblxuXG5leHBvcnQgY2xhc3MgUXJTY2FubmVyQ29udHJvbCB7XG5cdHBsYXlpbmc6IGJvb2xlYW47XG5cdG9uU2NhblN1Y2Nlc3M6IE9uU2NhblN1Y2Nlc3M7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHZpZGVvRWxlbWVudDogSFRNTFZpZGVvRWxlbWVudCxcblx0XHRwdWJsaWMgY2FudmFzRWxlbWVudDogQ2FudmFzRWxlbWVudFJlZixcblx0XHRwdWJsaWMgY2FudmFzOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG5cdFx0cHVibGljIHNjYW5uZXJFbmdpbmU6IFFyU2Nhbm5lckVuZ2luZSxcblx0KSB7fVxuXG5cdHN0YXJ0KCk6IFByb21pc2U8UVJDb2RlPiB7XG5cdFx0dGhpcy5wbGF5aW5nID0gdHJ1ZTtcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0dGhpcy5vblNjYW5TdWNjZXNzID0gcmVzb2x2ZTtcblx0XHRcdGNvbnN0IHNjYW5UaWNrID0gdGhpcy5zY2FuVGljay5iaW5kKHRoaXMpO1xuXHRcdFx0Y29uc3QgZHJhd1RpY2sgPSB0aGlzLmRyYXdUaWNrLmJpbmQodGhpcyk7XG5cblx0XHRcdHNldEludGVydmFsV2l0aENoZWNrKHNjYW5UaWNrLCAzMzApO1xuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lQXV0byhkcmF3VGljayk7XG5cdFx0fSlcblx0fVxuXG5cdHN0b3AoKSB7XG5cdFx0dGhpcy5wbGF5aW5nID0gZmFsc2U7XG5cdH1cblxuXHRwcml2YXRlIHNjYW5UaWNrKCkge1xuXHRcdGlmKHRoaXMudmlkZW9FbGVtZW50LnJlYWR5U3RhdGUgIT09IHRoaXMudmlkZW9FbGVtZW50LkhBVkVfRU5PVUdIX0RBVEEpXG5cdFx0XHRyZXR1cm47XG5cdFx0aWYoIXRoaXMuY2FudmFzRWxlbWVudC5jdXJyZW50KSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImNhbnZhc0VsZW1lbnQgaXMgbnVsbCBtYW5cIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW1hZ2VEYXRhID0gdGhpcy5jYW52YXMuZ2V0SW1hZ2VEYXRhKFxuXHRcdFx0MCwgMCxcblx0XHRcdHRoaXMuY2FudmFzRWxlbWVudC5jdXJyZW50LndpZHRoLCB0aGlzLmNhbnZhc0VsZW1lbnQuY3VycmVudC5oZWlnaHRcblx0XHQpO1xuXG5cdFx0dGhpcy5zY2FubmVyRW5naW5lLnNjYW5RUkNvZGUoaW1hZ2VEYXRhKVxuXHRcdFx0LnRoZW4oY29kZSA9PiB7XG5cdFx0XHRcdHRoaXMucGxheWluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLm9uU2NhblN1Y2Nlc3MoY29kZSk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLnBsYXlpbmc7XG5cdH1cblxuXHRwcml2YXRlIGRyYXdUaWNrKCkge1xuXHRcdGlmKCF0aGlzLmNhbnZhc0VsZW1lbnQuY3VycmVudCkge1xuXHRcdFx0Y29uc29sZS5sb2coXCJjYW52YXNFbGVtZW50IGlzIG51bGwgbWFuXCIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGRyYXdJbWFnZUZyb21WaWRlbyh0aGlzLmNhbnZhcywgdGhpcy5jYW52YXNFbGVtZW50LmN1cnJlbnQsIHRoaXMudmlkZW9FbGVtZW50KTtcblx0XHRyZXR1cm4gdGhpcy5wbGF5aW5nO1xuXHR9XG5cblx0cHJpdmF0ZSBvdXRsaW5lUVJDb2RlKGNvZGU6IFFSQ29kZSkge1xuXHRcdGRyYXdCb3godGhpcy5jYW52YXMsIGNvZGUubG9jYXRpb24sIFwiI0ZGM0I1OFwiKTtcblx0fVxuXG59XG5cblxuIiwiaW1wb3J0IHsgUVJDb2RlIH0gZnJvbSBcImpzcXJcIlxuaW1wb3J0IHsgT25TY2FuU3VjY2VzcyB9IGZyb20gXCJAL21xci9tcXJcIlxuaW1wb3J0IFFSQ29kZVdvcmtlciBmcm9tIFwid29ya2VyLWxvYWRlcj9maWxlbmFtZT1xci13b3JrZXIuanMhQC93b3JrZXIvbXFyLXdvcmtlclwiXG5cblxuZXhwb3J0IGNsYXNzIFFyU2Nhbm5lckVuZ2luZSB7XG5cdHdvcmtlcjogV29ya2VyO1xuXHRvblN1Y2Nlc3M6IE9uU2NhblN1Y2Nlc3M7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy53b3JrZXIgPSBuZXcgUVJDb2RlV29ya2VyKCk7XG5cblx0XHRjb25zdCBvblN1Y2Nlc3MgPSB0aGlzLm1lc3NhZ2VMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMud29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uU3VjY2Vzcyk7XG5cdH1cblxuXG5cdHNjYW5RUkNvZGVDYWxsYmFjayhpbWFnZURhdGE6IEltYWdlRGF0YSwgb25TdWNjZXNzOiBPblNjYW5TdWNjZXNzKSB7XG5cdFx0dGhpcy5vblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0dGhpcy53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuXHRcdFx0dHlwZTogXCJzY2FuX3FyY29kZVwiLFxuXHRcdFx0Ym9keTogaW1hZ2VEYXRhLFxuXHRcdH0pO1xuXHR9XG5cblx0c2NhblFSQ29kZShpbWFnZURhdGE6IEltYWdlRGF0YSk6IFByb21pc2U8UVJDb2RlPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gdGhpcy5zY2FuUVJDb2RlQ2FsbGJhY2soaW1hZ2VEYXRhLCByZXNvbHZlKSlcblx0fVxuXG5cdG1lc3NhZ2VMaXN0ZW5lcihldmVudDogTWVzc2FnZUV2ZW50KSB7XG5cdFx0Y29uc3QgeyB0eXBlLCBib2R5IH0gPSBldmVudC5kYXRhO1xuXHRcdGlmKHR5cGUgIT0gXCJzY2FuX3FyY29kZVwiKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0aWYoYm9keSA9PSBudWxsKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0dGhpcy5vblN1Y2Nlc3MoYm9keSk7XG5cdH1cbn1cblxuXG4iLCJcbmV4cG9ydCBjb25zdCBnZXRWaWRlb1dpdGhTdHJlYW0gPSAodmlkZW9FbGVtZW50OiBIVE1MVmlkZW9FbGVtZW50KTogUHJvbWlzZTxIVE1MVmlkZW9FbGVtZW50PiA9PiB7XG5cdGNvbnN0IGNvbnN0cmFpbnRzOiBNZWRpYVN0cmVhbUNvbnN0cmFpbnRzID0ge1xuXHRcdHZpZGVvOiB7XG5cdFx0XHRmYWNpbmdNb2RlOiBcImVudmlyb25tZW50XCIsXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKVxuXHRcdC50aGVuKHN0cmVhbSA9PiB7XG5cdFx0XHR2aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuXHRcdFx0dmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZShcInBsYXlzaW5saW5lXCIsIFwidHJ1ZVwiKTtcblx0XHRcdHZpZGVvRWxlbWVudC5wbGF5KCk7XG5cblx0XHRcdHJldHVybiB2aWRlb0VsZW1lbnQ7XG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJlcnIgaW4gZ2V0VmlkZW9XaXRoU3RyZWFtXCIsIGVycik7XG5cdFx0XHR0aHJvdyBcIkNBTV9FUlJPUlwiO1xuXHRcdH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInFyLXdvcmtlci5qc1wiKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
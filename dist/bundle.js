/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/utils */ "./src/common/utils.ts");
;

var canvasElement = document.getElementById("canvas");
var messageElement = document.getElementById("text");
var startScan = function (starter) { return starter()
    .then(function (code) {
    console.log(code.data);
})
    .then((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.sleep)(3000))
    // eslint-disable-next-line
    .then(function () { return startScan(starter); }); };
(0,_mqr_mqr__WEBPACK_IMPORTED_MODULE_0__.qrScanner)(canvasElement)
    .then(function (s) {
    return s.start();
})
    .then(function (code) {
    messageElement.innerText = code.data;
})
    .catch(function (err) { return console.error(err); });


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
    var videoElement = document.createElement("video");
    var canvas = canvasElement.getContext("2d", { alpha: false });
    var scanner = (0,_mqr_scanner_engine__WEBPACK_IMPORTED_MODULE_1__.createScannerEngine)();
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
    function QrScannerControl(videoElement, canvasElement, canvas, scanner) {
        this.videoElement = videoElement;
        this.canvasElement = canvasElement;
        this.canvas = canvas;
        this.scanner = scanner;
    }
    QrScannerControl.prototype.start = function () {
        var _this = this;
        this.playing = true;
        return new Promise(function (resolve) {
            _this.onScanSuccess = resolve;
            (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.setIntervalWithCheck)(_this.scanTick.bind(_this), 200);
            (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.requestAnimationFrameAuto)(_this.drawTick.bind(_this));
        });
    };
    QrScannerControl.prototype.stop = function () {
        this.playing = false;
    };
    QrScannerControl.prototype.scanTick = function () {
        var _this = this;
        if (this.videoElement.readyState !== this.videoElement.HAVE_ENOUGH_DATA)
            return;
        var imageData = this.canvas.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.scanner(imageData)
            .then(function (code) {
            _this.playing = false;
            _this.outlineQRCode(code);
            _this.onScanSuccess(code);
        });
        return this.playing;
    };
    QrScannerControl.prototype.drawTick = function () {
        (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.drawImageFromVideo)(this.canvas, this.canvasElement, this.videoElement);
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
/*! export createScannerEngine [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createScannerEngine": () => /* binding */ createScannerEngine
/* harmony export */ });
/* harmony import */ var worker_loader_filename_qr_worker_js_worker_mqr_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! worker-loader?filename=qr-worker.js!@/worker/mqr-worker */ "./node_modules/worker-loader/dist/cjs.js?filename=qr-worker.js!./src/worker/mqr-worker.ts");
;
var QRCodeScannerEngine = /** @class */ (function () {
    function QRCodeScannerEngine() {
        this.worker = new worker_loader_filename_qr_worker_js_worker_mqr_worker__WEBPACK_IMPORTED_MODULE_0__.default();
        var onSuccess = this.messageListener.bind(this);
        this.worker.addEventListener("message", onSuccess);
    }
    QRCodeScannerEngine.prototype.scanQRCode = function (imageData, onSuccess) {
        this.onSuccess = onSuccess;
        this.worker.postMessage({
            type: "scan_qrcode",
            body: imageData,
        });
    };
    QRCodeScannerEngine.prototype.messageListener = function (event) {
        var _a = event.data, type = _a.type, body = _a.body;
        if (type != "scan_qrcode")
            return;
        if (body == null)
            return;
        this.onSuccess(body);
    };
    return QRCodeScannerEngine;
}());
var createScannerEngine = function () {
    var engine = new QRCodeScannerEngine();
    return function (imageData) { return new Promise(function (resolve) {
        engine.scanQRCode(imageData, resolve);
    }); };
};


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
/******/ 			// no module.id needed
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tcXIvLi9zcmMvY29tbW9uL3V0aWxzLnRzIiwid2VicGFjazovL21xci8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL21xci8uL3NyYy9tcXIvbXFyLnRzIiwid2VicGFjazovL21xci8uL3NyYy9tcXIvc2Nhbm5lci1jb250cm9sLnRzIiwid2VicGFjazovL21xci8uL3NyYy9tcXIvc2Nhbm5lci1lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vbXFyLy4vc3JjL21xci92aWRlby50cyIsIndlYnBhY2s6Ly9tcXIvLi9zcmMvd29ya2VyL21xci13b3JrZXIudHMiLCJ3ZWJwYWNrOi8vbXFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21xci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXFyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXFyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXFyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXFyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21xci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU0sV0FBVyxHQUFHLGFBQUc7SUFDN0IsSUFBRyxHQUFHO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFDbkIsTUFBTSxZQUFZLENBQUM7QUFDcEIsQ0FBQztBQUVNLElBQU0sU0FBUyxHQUFHLGlCQUFPLElBQUksb0JBQUc7SUFDdEMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixPQUFPO0lBRVIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FB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cEIsT0FBTyxZQUFZLENBQUM7SUFDckIsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRCw2QkFBZSxzQ0FBVztBQUMxQixvQkFBb0IscUJBQXVCO0FBQzNDOzs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7O1VDZkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9pbnQsIEJveCwgRnJhbWVSZXF1ZXN0Q2FsbGJhY2tXaXRoQ2hlY2sgfSBmcm9tIFwiLi91dGlscy5kXCJcblxuZXhwb3J0IGNvbnN0IHRocm93T25OdWxsID0gdmFsID0+IHtcblx0aWYodmFsKSByZXR1cm4gdmFsO1xuXHR0aHJvdyBcIk5VTExfRk9VTkRcIjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ1VubGVzcyA9IGZpbHRlcnMgPT4gdmFsID0+IHtcblx0aWYoIGZpbHRlcnMuaW5kZXhPZih2YWwpID09IC0xIClcblx0XHRyZXR1cm47XG5cblx0Y29uc29sZS5sb2codmFsKTtcbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNlID0gbGFiZWwgPT4gdmFsID0+IHtcblx0Y29uc29sZS5sb2cobGFiZWwsIHZhbCk7XG5cdHJldHVybiB2YWxcbn1cblxuZXhwb3J0IGNvbnN0IHNsZWVwID0gPFQgPSBhbnk+KG1zKSA9PiAodmFsOiBUKTogUHJvbWlzZTxUPiA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSh2YWwpLCBtcykpXG5cbi8qKiBDYWxscyB0aGUgdGljayBmdW5jdGlvbiBsaWtlIHNldEludGVydmFsIGJ1dCB3aXRoIHJlcXVlc3RBbmltYXRpb25GcmFtZSBhbmQgY2hlY2sgaWYgaXQgd2FudHMgdG8gY29udGludWUgKi9cbmV4cG9ydCBjb25zdCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVBdXRvID0gKHRpY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrV2l0aENoZWNrKSA9PiB7XG5cdGNvbnN0IGF1dG9UaWNrID0gKHRpbWU6IG51bWJlcikgPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9IHRpY2sodGltZSk7XG5cdFx0aWYocmVzdWx0ID09PSBmYWxzZSlcblx0XHRcdHJldHVybjtcblxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhdXRvVGljayk7XG5cdH1cblxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYXV0b1RpY2spO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0SW50ZXJ2YWxXaXRoQ2hlY2sgPSAoY2FsbGJhY2ssIHRpbWVvdXQpID0+IHtcblx0Y29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSBjYWxsYmFjaygpO1xuXHRcdGlmKHJlc3VsdCA9PT0gZmFsc2UpIHtcblx0XHRcdGNsZWFyVGltZW91dChpbnRlcnZhbElkKTtcblx0XHR9XG5cblx0fSwgdGltZW91dCk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGRyYXdMaW5lID0gKGNhbnZhczogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBiZWdpbjogUG9pbnQsIGVuZDogUG9pbnQsIGNvbG9yOiBzdHJpbmcpID0+IHtcblx0Y2FudmFzLmJlZ2luUGF0aCgpO1xuXHRjYW52YXMubW92ZVRvKGJlZ2luLngsIGJlZ2luLnkpO1xuXHRjYW52YXMubGluZVRvKGVuZC54LCBlbmQueSk7XG5cdGNhbnZhcy5saW5lV2lkdGggPSA0O1xuXHRjYW52YXMuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcblx0Y2FudmFzLnN0cm9rZSgpO1xufVxuXG4vKiogRHJhd3MgYW4gaW1hZ2UgZnJhbWUgZnJvbSB2aWRlbyBlbGVtZW50IGludG8gY2FudmFzIGFuZCBzZXRzIHdpZHRoIGFuZCBoZWlnaHQgb2YgY2FudmFzIGZyb20gdmlkZW8gKi9cbmV4cG9ydCBjb25zdCBkcmF3SW1hZ2VGcm9tVmlkZW8gPSAoY2FudmFzOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LCB2aWRlb0VsZW1lbnQ6IEhUTUxWaWRlb0VsZW1lbnQpID0+IHtcblx0Y2FudmFzRWxlbWVudC5oZWlnaHQgPSB2aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7XG5cdGNhbnZhc0VsZW1lbnQud2lkdGggPSB2aWRlb0VsZW1lbnQudmlkZW9XaWR0aDtcblx0Y2FudmFzLmRyYXdJbWFnZSh2aWRlb0VsZW1lbnQsIDAsIDAsIGNhbnZhc0VsZW1lbnQud2lkdGgsIGNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyYXdCb3ggPSAoY2FudmFzOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGxvY2F0aW9uOiBCb3gsIGxpbmVDb2xvcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHsgdG9wTGVmdENvcm5lciwgdG9wUmlnaHRDb3JuZXIsIGJvdHRvbUxlZnRDb3JuZXIsIGJvdHRvbVJpZ2h0Q29ybmVyIH0gPSBsb2NhdGlvbjtcblxuXHRkcmF3TGluZShjYW52YXMsIHRvcExlZnRDb3JuZXIsIHRvcFJpZ2h0Q29ybmVyLCBsaW5lQ29sb3IpO1xuXHRkcmF3TGluZShjYW52YXMsIHRvcFJpZ2h0Q29ybmVyLCBib3R0b21SaWdodENvcm5lciwgbGluZUNvbG9yKTtcblx0ZHJhd0xpbmUoY2FudmFzLCBib3R0b21SaWdodENvcm5lciwgYm90dG9tTGVmdENvcm5lciwgbGluZUNvbG9yKTtcblx0ZHJhd0xpbmUoY2FudmFzLCBib3R0b21MZWZ0Q29ybmVyLCB0b3BMZWZ0Q29ybmVyLCBsaW5lQ29sb3IpO1xufVxuXG5cblxuIiwiaW1wb3J0IHsgcXJTY2FubmVyLCBTY2FuU3RhcnRlciB9IGZyb20gXCJAL21xci9tcXJcIlxuaW1wb3J0IHsgc2xlZXAgfSBmcm9tIFwiQC9jb21tb24vdXRpbHNcIlxuXG5jb25zdCBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5jb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dFwiKTtcblxuY29uc3Qgc3RhcnRTY2FuID0gKHN0YXJ0ZXI6IFNjYW5TdGFydGVyKSA9PiBzdGFydGVyKClcblx0LnRoZW4oY29kZSA9PiB7XG5cdFx0Y29uc29sZS5sb2coY29kZS5kYXRhKTtcblx0fSlcblx0LnRoZW4oc2xlZXAoMzAwMCkpXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHQudGhlbigoKSA9PiBzdGFydFNjYW4oc3RhcnRlcikpXG5cbnFyU2Nhbm5lcihjYW52YXNFbGVtZW50KVxuXHQudGhlbigocykgPT4ge1xuXHRcdHJldHVybiBzLnN0YXJ0KCk7XG5cdH0pXG5cdC50aGVuKGNvZGUgPT4ge1xuXHRcdG1lc3NhZ2VFbGVtZW50LmlubmVyVGV4dCA9IGNvZGUuZGF0YTtcblx0fSlcblx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXG5cblxuXG4iLCJpbXBvcnQgeyBnZXRWaWRlb1dpdGhTdHJlYW0gfSBmcm9tIFwiQC9tcXIvdmlkZW9cIlxuaW1wb3J0IHsgY3JlYXRlU2Nhbm5lckVuZ2luZSwgU2Nhbm5lciB9IGZyb20gXCJAL21xci9zY2FubmVyLWVuZ2luZVwiXG5pbXBvcnQgeyBRclNjYW5uZXJDb250cm9sIH0gZnJvbSBcIkAvbXFyL3NjYW5uZXItY29udHJvbFwiXG5cblxuZXhwb3J0IGNvbnN0IHFyU2Nhbm5lciA9IChjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCkgPT4ge1xuXHRjb25zdCB2aWRlb0VsZW1lbnQ6IEhUTUxWaWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIik7XG5cdGNvbnN0IGNhbnZhczogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIiwgeyBhbHBoYTogZmFsc2UgfSk7XG5cdGNvbnN0IHNjYW5uZXI6IFNjYW5uZXIgPSBjcmVhdGVTY2FubmVyRW5naW5lKCk7XG5cblx0cmV0dXJuIGdldFZpZGVvV2l0aFN0cmVhbSh2aWRlb0VsZW1lbnQpXG5cdFx0LnRoZW4odmlkZW9FbGVtZW50ID0+IG5ldyBRclNjYW5uZXJDb250cm9sKFxuXHRcdFx0dmlkZW9FbGVtZW50LFxuXHRcdFx0Y2FudmFzRWxlbWVudCxcblx0XHRcdGNhbnZhcyxcblx0XHRcdHNjYW5uZXJcblx0XHQpKVxuXG59XG5cblxuZXhwb3J0IHsgT25TY2FuU3VjY2VzcywgU2NhblN0YXJ0ZXIgfSBmcm9tIFwiLi9tcXIuZFwiXG4iLCJpbXBvcnQgeyBRUkNvZGUgfSBmcm9tIFwianNxclwiXG5pbXBvcnQgeyBTY2FubmVyIH0gZnJvbSBcIi4vc2Nhbm5lci1lbmdpbmVcIlxuaW1wb3J0IHsgc2V0SW50ZXJ2YWxXaXRoQ2hlY2ssIHJlcXVlc3RBbmltYXRpb25GcmFtZUF1dG8sIGRyYXdCb3gsIGRyYXdJbWFnZUZyb21WaWRlbyB9IGZyb20gXCJAL2NvbW1vbi91dGlsc1wiXG5pbXBvcnQgeyBPblNjYW5TdWNjZXNzIH0gZnJvbSBcIkAvbXFyL21xclwiXG5cblxuZXhwb3J0IGNsYXNzIFFyU2Nhbm5lckNvbnRyb2wge1xuXHRwbGF5aW5nOiBib29sZWFuO1xuXHRvblNjYW5TdWNjZXNzOiBPblNjYW5TdWNjZXNzO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyB2aWRlb0VsZW1lbnQ6IEhUTUxWaWRlb0VsZW1lbnQsXG5cdFx0cHVibGljIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LFxuXHRcdHB1YmxpYyBjYW52YXM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcblx0XHRwdWJsaWMgc2Nhbm5lcjogU2Nhbm5lcixcblx0KSB7fVxuXG5cdHN0YXJ0KCk6IFByb21pc2U8UVJDb2RlPiB7XG5cdFx0dGhpcy5wbGF5aW5nID0gdHJ1ZTtcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0dGhpcy5vblNjYW5TdWNjZXNzID0gcmVzb2x2ZTtcblx0XHRcdHNldEludGVydmFsV2l0aENoZWNrKHRoaXMuc2NhblRpY2suYmluZCh0aGlzKSwgMjAwKTtcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZUF1dG8odGhpcy5kcmF3VGljay5iaW5kKHRoaXMpKTtcblx0XHR9KVxuXHR9XG5cblx0c3RvcCgpIHtcblx0XHR0aGlzLnBsYXlpbmcgPSBmYWxzZTtcblx0fVxuXG5cdHNjYW5UaWNrKCkge1xuXHRcdGlmKHRoaXMudmlkZW9FbGVtZW50LnJlYWR5U3RhdGUgIT09IHRoaXMudmlkZW9FbGVtZW50LkhBVkVfRU5PVUdIX0RBVEEpXG5cdFx0XHRyZXR1cm47XG5cblx0XHRjb25zdCBpbWFnZURhdGEgPSB0aGlzLmNhbnZhcy5nZXRJbWFnZURhdGEoXG5cdFx0XHQwLCAwLFxuXHRcdFx0dGhpcy5jYW52YXNFbGVtZW50LndpZHRoLCB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0XG5cdFx0KTtcblxuXHRcdHRoaXMuc2Nhbm5lcihpbWFnZURhdGEpXG5cdFx0XHQudGhlbihjb2RlID0+IHtcblx0XHRcdFx0dGhpcy5wbGF5aW5nID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMub3V0bGluZVFSQ29kZShjb2RlKTtcblx0XHRcdFx0dGhpcy5vblNjYW5TdWNjZXNzKGNvZGUpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcy5wbGF5aW5nO1xuXHR9XG5cblx0ZHJhd1RpY2soKSB7XG5cdFx0ZHJhd0ltYWdlRnJvbVZpZGVvKHRoaXMuY2FudmFzLCB0aGlzLmNhbnZhc0VsZW1lbnQsIHRoaXMudmlkZW9FbGVtZW50KTtcblx0XHRyZXR1cm4gdGhpcy5wbGF5aW5nO1xuXHR9XG5cblx0b3V0bGluZVFSQ29kZShjb2RlOiBRUkNvZGUpIHtcblx0XHRkcmF3Qm94KHRoaXMuY2FudmFzLCBjb2RlLmxvY2F0aW9uLCBcIiNGRjNCNThcIik7XG5cdH1cblxufVxuXG5cbiIsImltcG9ydCB7IFFSQ29kZSB9IGZyb20gXCJqc3FyXCJcbmltcG9ydCBRUkNvZGVXb3JrZXIgZnJvbSBcIndvcmtlci1sb2FkZXI/ZmlsZW5hbWU9cXItd29ya2VyLmpzIUAvd29ya2VyL21xci13b3JrZXJcIlxuaW1wb3J0IHsgT25TY2FuU3VjY2VzcyB9IGZyb20gXCJAL21xci9tcXJcIlxuXG5cbmNsYXNzIFFSQ29kZVNjYW5uZXJFbmdpbmUge1xuXHR3b3JrZXI6IFdvcmtlcjtcblx0b25TdWNjZXNzOiBPblNjYW5TdWNjZXNzO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMud29ya2VyID0gbmV3IFFSQ29kZVdvcmtlcigpO1xuXG5cdFx0Y29uc3Qgb25TdWNjZXNzID0gdGhpcy5tZXNzYWdlTGlzdGVuZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLndvcmtlci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvblN1Y2Nlc3MpO1xuXHR9XG5cblxuXHRzY2FuUVJDb2RlKGltYWdlRGF0YTogSW1hZ2VEYXRhLCBvblN1Y2Nlc3M6IE9uU2NhblN1Y2Nlc3MpIHtcblx0XHR0aGlzLm9uU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHR0aGlzLndvcmtlci5wb3N0TWVzc2FnZSh7XG5cdFx0XHR0eXBlOiBcInNjYW5fcXJjb2RlXCIsXG5cdFx0XHRib2R5OiBpbWFnZURhdGEsXG5cdFx0fSk7XG5cdH1cblxuXHRtZXNzYWdlTGlzdGVuZXIoZXZlbnQ6IE1lc3NhZ2VFdmVudCkge1xuXHRcdGNvbnN0IHsgdHlwZSwgYm9keSB9ID0gZXZlbnQuZGF0YTtcblx0XHRpZih0eXBlICE9IFwic2Nhbl9xcmNvZGVcIilcblx0XHRcdHJldHVybjtcblxuXHRcdGlmKGJvZHkgPT0gbnVsbClcblx0XHRcdHJldHVybjtcblxuXHRcdHRoaXMub25TdWNjZXNzKGJvZHkpO1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTY2FubmVyRW5naW5lID0gKCkgPT4ge1xuXHRjb25zdCBlbmdpbmUgPSBuZXcgUVJDb2RlU2Nhbm5lckVuZ2luZSgpO1xuXHRyZXR1cm4gKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogUHJvbWlzZTxRUkNvZGU+ID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0ZW5naW5lLnNjYW5RUkNvZGUoaW1hZ2VEYXRhLCByZXNvbHZlKTtcblx0fSk7XG59XG5cblxuZXhwb3J0IHsgU2Nhbm5lciB9IGZyb20gXCIuL3NjYW5uZXItZW5naW5lLmRcIlxuXG5cbiIsIlxuZXhwb3J0IGNvbnN0IGdldFZpZGVvV2l0aFN0cmVhbSA9ICh2aWRlb0VsZW1lbnQ6IEhUTUxWaWRlb0VsZW1lbnQpOiBQcm9taXNlPEhUTUxWaWRlb0VsZW1lbnQ+ID0+IHtcblx0Y29uc3QgY29uc3RyYWludHM6IE1lZGlhU3RyZWFtQ29uc3RyYWludHMgPSB7XG5cdFx0dmlkZW86IHtcblx0XHRcdGZhY2luZ01vZGU6IFwiZW52aXJvbm1lbnRcIixcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpXG5cdFx0LnRoZW4oc3RyZWFtID0+IHtcblx0XHRcdHZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBzdHJlYW07XG5cdFx0XHR2aWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKFwicGxheXNpbmxpbmVcIiwgXCJ0cnVlXCIpO1xuXHRcdFx0dmlkZW9FbGVtZW50LnBsYXkoKTtcblxuXHRcdFx0cmV0dXJuIHZpZGVvRWxlbWVudDtcblx0XHR9KVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJxci13b3JrZXIuanNcIik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=
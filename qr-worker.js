/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/jsqr/dist/jsQR.js":
/*!****************************************!*\
  !*** ./node_modules/jsqr/dist/jsQR.js ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, top-level-this-exports */
/*! CommonJS bailout: this is used directly at 10:40-44 */
/*! CommonJS bailout: module.exports is used directly at 3:2-16 */
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_568__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_568__);
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
/******/ 	__nested_webpack_require_568__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_568__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_568__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_568__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_568__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_568__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_568__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_568__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_568__(__nested_webpack_require_568__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_2845__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix = /** @class */ (function () {
    function BitMatrix(data, width) {
        this.width = width;
        this.height = data.length / width;
        this.data = data;
    }
    BitMatrix.createEmpty = function (width, height) {
        return new BitMatrix(new Uint8ClampedArray(width * height), width);
    };
    BitMatrix.prototype.get = function (x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return false;
        }
        return !!this.data[y * this.width + x];
    };
    BitMatrix.prototype.set = function (x, y, v) {
        this.data[y * this.width + x] = v ? 1 : 0;
    };
    BitMatrix.prototype.setRegion = function (left, top, width, height, v) {
        for (var y = top; y < top + height; y++) {
            for (var x = left; x < left + width; x++) {
                this.set(x, y, !!v);
            }
        }
    };
    return BitMatrix;
}());
exports.BitMatrix = BitMatrix;


/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_3952__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenericGFPoly_1 = __nested_webpack_require_3952__(2);
function addOrSubtractGF(a, b) {
    return a ^ b; // tslint:disable-line:no-bitwise
}
exports.addOrSubtractGF = addOrSubtractGF;
var GenericGF = /** @class */ (function () {
    function GenericGF(primitive, size, genBase) {
        this.primitive = primitive;
        this.size = size;
        this.generatorBase = genBase;
        this.expTable = new Array(this.size);
        this.logTable = new Array(this.size);
        var x = 1;
        for (var i = 0; i < this.size; i++) {
            this.expTable[i] = x;
            x = x * 2;
            if (x >= this.size) {
                x = (x ^ this.primitive) & (this.size - 1); // tslint:disable-line:no-bitwise
            }
        }
        for (var i = 0; i < this.size - 1; i++) {
            this.logTable[this.expTable[i]] = i;
        }
        this.zero = new GenericGFPoly_1.default(this, Uint8ClampedArray.from([0]));
        this.one = new GenericGFPoly_1.default(this, Uint8ClampedArray.from([1]));
    }
    GenericGF.prototype.multiply = function (a, b) {
        if (a === 0 || b === 0) {
            return 0;
        }
        return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
    };
    GenericGF.prototype.inverse = function (a) {
        if (a === 0) {
            throw new Error("Can't invert 0");
        }
        return this.expTable[this.size - this.logTable[a] - 1];
    };
    GenericGF.prototype.buildMonomial = function (degree, coefficient) {
        if (degree < 0) {
            throw new Error("Invalid monomial degree less than 0");
        }
        if (coefficient === 0) {
            return this.zero;
        }
        var coefficients = new Uint8ClampedArray(degree + 1);
        coefficients[0] = coefficient;
        return new GenericGFPoly_1.default(this, coefficients);
    };
    GenericGF.prototype.log = function (a) {
        if (a === 0) {
            throw new Error("Can't take log(0)");
        }
        return this.logTable[a];
    };
    GenericGF.prototype.exp = function (a) {
        return this.expTable[a];
    };
    return GenericGF;
}());
exports.default = GenericGF;


/***/ }),
/* 2 */
/***/ (function(module, exports, __nested_webpack_require_6272__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenericGF_1 = __nested_webpack_require_6272__(1);
var GenericGFPoly = /** @class */ (function () {
    function GenericGFPoly(field, coefficients) {
        if (coefficients.length === 0) {
            throw new Error("No coefficients.");
        }
        this.field = field;
        var coefficientsLength = coefficients.length;
        if (coefficientsLength > 1 && coefficients[0] === 0) {
            // Leading term must be non-zero for anything except the constant polynomial "0"
            var firstNonZero = 1;
            while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
                firstNonZero++;
            }
            if (firstNonZero === coefficientsLength) {
                this.coefficients = field.zero.coefficients;
            }
            else {
                this.coefficients = new Uint8ClampedArray(coefficientsLength - firstNonZero);
                for (var i = 0; i < this.coefficients.length; i++) {
                    this.coefficients[i] = coefficients[firstNonZero + i];
                }
            }
        }
        else {
            this.coefficients = coefficients;
        }
    }
    GenericGFPoly.prototype.degree = function () {
        return this.coefficients.length - 1;
    };
    GenericGFPoly.prototype.isZero = function () {
        return this.coefficients[0] === 0;
    };
    GenericGFPoly.prototype.getCoefficient = function (degree) {
        return this.coefficients[this.coefficients.length - 1 - degree];
    };
    GenericGFPoly.prototype.addOrSubtract = function (other) {
        var _a;
        if (this.isZero()) {
            return other;
        }
        if (other.isZero()) {
            return this;
        }
        var smallerCoefficients = this.coefficients;
        var largerCoefficients = other.coefficients;
        if (smallerCoefficients.length > largerCoefficients.length) {
            _a = [largerCoefficients, smallerCoefficients], smallerCoefficients = _a[0], largerCoefficients = _a[1];
        }
        var sumDiff = new Uint8ClampedArray(largerCoefficients.length);
        var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
        for (var i = 0; i < lengthDiff; i++) {
            sumDiff[i] = largerCoefficients[i];
        }
        for (var i = lengthDiff; i < largerCoefficients.length; i++) {
            sumDiff[i] = GenericGF_1.addOrSubtractGF(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
        }
        return new GenericGFPoly(this.field, sumDiff);
    };
    GenericGFPoly.prototype.multiply = function (scalar) {
        if (scalar === 0) {
            return this.field.zero;
        }
        if (scalar === 1) {
            return this;
        }
        var size = this.coefficients.length;
        var product = new Uint8ClampedArray(size);
        for (var i = 0; i < size; i++) {
            product[i] = this.field.multiply(this.coefficients[i], scalar);
        }
        return new GenericGFPoly(this.field, product);
    };
    GenericGFPoly.prototype.multiplyPoly = function (other) {
        if (this.isZero() || other.isZero()) {
            return this.field.zero;
        }
        var aCoefficients = this.coefficients;
        var aLength = aCoefficients.length;
        var bCoefficients = other.coefficients;
        var bLength = bCoefficients.length;
        var product = new Uint8ClampedArray(aLength + bLength - 1);
        for (var i = 0; i < aLength; i++) {
            var aCoeff = aCoefficients[i];
            for (var j = 0; j < bLength; j++) {
                product[i + j] = GenericGF_1.addOrSubtractGF(product[i + j], this.field.multiply(aCoeff, bCoefficients[j]));
            }
        }
        return new GenericGFPoly(this.field, product);
    };
    GenericGFPoly.prototype.multiplyByMonomial = function (degree, coefficient) {
        if (degree < 0) {
            throw new Error("Invalid degree less than 0");
        }
        if (coefficient === 0) {
            return this.field.zero;
        }
        var size = this.coefficients.length;
        var product = new Uint8ClampedArray(size + degree);
        for (var i = 0; i < size; i++) {
            product[i] = this.field.multiply(this.coefficients[i], coefficient);
        }
        return new GenericGFPoly(this.field, product);
    };
    GenericGFPoly.prototype.evaluateAt = function (a) {
        var result = 0;
        if (a === 0) {
            // Just return the x^0 coefficient
            return this.getCoefficient(0);
        }
        var size = this.coefficients.length;
        if (a === 1) {
            // Just the sum of the coefficients
            this.coefficients.forEach(function (coefficient) {
                result = GenericGF_1.addOrSubtractGF(result, coefficient);
            });
            return result;
        }
        result = this.coefficients[0];
        for (var i = 1; i < size; i++) {
            result = GenericGF_1.addOrSubtractGF(this.field.multiply(a, result), this.coefficients[i]);
        }
        return result;
    };
    return GenericGFPoly;
}());
exports.default = GenericGFPoly;


/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_11547__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binarizer_1 = __nested_webpack_require_11547__(4);
var decoder_1 = __nested_webpack_require_11547__(5);
var extractor_1 = __nested_webpack_require_11547__(11);
var locator_1 = __nested_webpack_require_11547__(12);
function scan(matrix) {
    var locations = locator_1.locate(matrix);
    if (!locations) {
        return null;
    }
    for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
        var location_1 = locations_1[_i];
        var extracted = extractor_1.extract(matrix, location_1);
        var decoded = decoder_1.decode(extracted.matrix);
        if (decoded) {
            return {
                binaryData: decoded.bytes,
                data: decoded.text,
                chunks: decoded.chunks,
                location: {
                    topRightCorner: extracted.mappingFunction(location_1.dimension, 0),
                    topLeftCorner: extracted.mappingFunction(0, 0),
                    bottomRightCorner: extracted.mappingFunction(location_1.dimension, location_1.dimension),
                    bottomLeftCorner: extracted.mappingFunction(0, location_1.dimension),
                    topRightFinderPattern: location_1.topRight,
                    topLeftFinderPattern: location_1.topLeft,
                    bottomLeftFinderPattern: location_1.bottomLeft,
                    bottomRightAlignmentPattern: location_1.alignmentPattern,
                },
            };
        }
    }
    return null;
}
var defaultOptions = {
    inversionAttempts: "attemptBoth",
};
function jsQR(data, width, height, providedOptions) {
    if (providedOptions === void 0) { providedOptions = {}; }
    var options = defaultOptions;
    Object.keys(options || {}).forEach(function (opt) {
        options[opt] = providedOptions[opt] || options[opt];
    });
    var shouldInvert = options.inversionAttempts === "attemptBoth" || options.inversionAttempts === "invertFirst";
    var tryInvertedFirst = options.inversionAttempts === "onlyInvert" || options.inversionAttempts === "invertFirst";
    var _a = binarizer_1.binarize(data, width, height, shouldInvert), binarized = _a.binarized, inverted = _a.inverted;
    var result = scan(tryInvertedFirst ? inverted : binarized);
    if (!result && (options.inversionAttempts === "attemptBoth" || options.inversionAttempts === "invertFirst")) {
        result = scan(tryInvertedFirst ? binarized : inverted);
    }
    return result;
}
jsQR.default = jsQR;
exports.default = jsQR;


/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_14126__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix_1 = __nested_webpack_require_14126__(0);
var REGION_SIZE = 8;
var MIN_DYNAMIC_RANGE = 24;
function numBetween(value, min, max) {
    return value < min ? min : value > max ? max : value;
}
// Like BitMatrix but accepts arbitry Uint8 values
var Matrix = /** @class */ (function () {
    function Matrix(width, height) {
        this.width = width;
        this.data = new Uint8ClampedArray(width * height);
    }
    Matrix.prototype.get = function (x, y) {
        return this.data[y * this.width + x];
    };
    Matrix.prototype.set = function (x, y, value) {
        this.data[y * this.width + x] = value;
    };
    return Matrix;
}());
function binarize(data, width, height, returnInverted) {
    if (data.length !== width * height * 4) {
        throw new Error("Malformed data passed to binarizer.");
    }
    // Convert image to greyscale
    var greyscalePixels = new Matrix(width, height);
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var r = data[((y * width + x) * 4) + 0];
            var g = data[((y * width + x) * 4) + 1];
            var b = data[((y * width + x) * 4) + 2];
            greyscalePixels.set(x, y, 0.2126 * r + 0.7152 * g + 0.0722 * b);
        }
    }
    var horizontalRegionCount = Math.ceil(width / REGION_SIZE);
    var verticalRegionCount = Math.ceil(height / REGION_SIZE);
    var blackPoints = new Matrix(horizontalRegionCount, verticalRegionCount);
    for (var verticalRegion = 0; verticalRegion < verticalRegionCount; verticalRegion++) {
        for (var hortizontalRegion = 0; hortizontalRegion < horizontalRegionCount; hortizontalRegion++) {
            var sum = 0;
            var min = Infinity;
            var max = 0;
            for (var y = 0; y < REGION_SIZE; y++) {
                for (var x = 0; x < REGION_SIZE; x++) {
                    var pixelLumosity = greyscalePixels.get(hortizontalRegion * REGION_SIZE + x, verticalRegion * REGION_SIZE + y);
                    sum += pixelLumosity;
                    min = Math.min(min, pixelLumosity);
                    max = Math.max(max, pixelLumosity);
                }
            }
            var average = sum / (Math.pow(REGION_SIZE, 2));
            if (max - min <= MIN_DYNAMIC_RANGE) {
                // If variation within the block is low, assume this is a block with only light or only
                // dark pixels. In that case we do not want to use the average, as it would divide this
                // low contrast area into black and white pixels, essentially creating data out of noise.
                //
                // Default the blackpoint for these blocks to be half the min - effectively white them out
                average = min / 2;
                if (verticalRegion > 0 && hortizontalRegion > 0) {
                    // Correct the "white background" assumption for blocks that have neighbors by comparing
                    // the pixels in this block to the previously calculated black points. This is based on
                    // the fact that dark barcode symbology is always surrounded by some amount of light
                    // background for which reasonable black point estimates were made. The bp estimated at
                    // the boundaries is used for the interior.
                    // The (min < bp) is arbitrary but works better than other heuristics that were tried.
                    var averageNeighborBlackPoint = (blackPoints.get(hortizontalRegion, verticalRegion - 1) +
                        (2 * blackPoints.get(hortizontalRegion - 1, verticalRegion)) +
                        blackPoints.get(hortizontalRegion - 1, verticalRegion - 1)) / 4;
                    if (min < averageNeighborBlackPoint) {
                        average = averageNeighborBlackPoint;
                    }
                }
            }
            blackPoints.set(hortizontalRegion, verticalRegion, average);
        }
    }
    var binarized = BitMatrix_1.BitMatrix.createEmpty(width, height);
    var inverted = null;
    if (returnInverted) {
        inverted = BitMatrix_1.BitMatrix.createEmpty(width, height);
    }
    for (var verticalRegion = 0; verticalRegion < verticalRegionCount; verticalRegion++) {
        for (var hortizontalRegion = 0; hortizontalRegion < horizontalRegionCount; hortizontalRegion++) {
            var left = numBetween(hortizontalRegion, 2, horizontalRegionCount - 3);
            var top_1 = numBetween(verticalRegion, 2, verticalRegionCount - 3);
            var sum = 0;
            for (var xRegion = -2; xRegion <= 2; xRegion++) {
                for (var yRegion = -2; yRegion <= 2; yRegion++) {
                    sum += blackPoints.get(left + xRegion, top_1 + yRegion);
                }
            }
            var threshold = sum / 25;
            for (var xRegion = 0; xRegion < REGION_SIZE; xRegion++) {
                for (var yRegion = 0; yRegion < REGION_SIZE; yRegion++) {
                    var x = hortizontalRegion * REGION_SIZE + xRegion;
                    var y = verticalRegion * REGION_SIZE + yRegion;
                    var lum = greyscalePixels.get(x, y);
                    binarized.set(x, y, lum <= threshold);
                    if (returnInverted) {
                        inverted.set(x, y, !(lum <= threshold));
                    }
                }
            }
        }
    }
    if (returnInverted) {
        return { binarized: binarized, inverted: inverted };
    }
    return { binarized: binarized };
}
exports.binarize = binarize;


/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_19822__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix_1 = __nested_webpack_require_19822__(0);
var decodeData_1 = __nested_webpack_require_19822__(6);
var reedsolomon_1 = __nested_webpack_require_19822__(9);
var version_1 = __nested_webpack_require_19822__(10);
// tslint:disable:no-bitwise
function numBitsDiffering(x, y) {
    var z = x ^ y;
    var bitCount = 0;
    while (z) {
        bitCount++;
        z &= z - 1;
    }
    return bitCount;
}
function pushBit(bit, byte) {
    return (byte << 1) | bit;
}
// tslint:enable:no-bitwise
var FORMAT_INFO_TABLE = [
    { bits: 0x5412, formatInfo: { errorCorrectionLevel: 1, dataMask: 0 } },
    { bits: 0x5125, formatInfo: { errorCorrectionLevel: 1, dataMask: 1 } },
    { bits: 0x5E7C, formatInfo: { errorCorrectionLevel: 1, dataMask: 2 } },
    { bits: 0x5B4B, formatInfo: { errorCorrectionLevel: 1, dataMask: 3 } },
    { bits: 0x45F9, formatInfo: { errorCorrectionLevel: 1, dataMask: 4 } },
    { bits: 0x40CE, formatInfo: { errorCorrectionLevel: 1, dataMask: 5 } },
    { bits: 0x4F97, formatInfo: { errorCorrectionLevel: 1, dataMask: 6 } },
    { bits: 0x4AA0, formatInfo: { errorCorrectionLevel: 1, dataMask: 7 } },
    { bits: 0x77C4, formatInfo: { errorCorrectionLevel: 0, dataMask: 0 } },
    { bits: 0x72F3, formatInfo: { errorCorrectionLevel: 0, dataMask: 1 } },
    { bits: 0x7DAA, formatInfo: { errorCorrectionLevel: 0, dataMask: 2 } },
    { bits: 0x789D, formatInfo: { errorCorrectionLevel: 0, dataMask: 3 } },
    { bits: 0x662F, formatInfo: { errorCorrectionLevel: 0, dataMask: 4 } },
    { bits: 0x6318, formatInfo: { errorCorrectionLevel: 0, dataMask: 5 } },
    { bits: 0x6C41, formatInfo: { errorCorrectionLevel: 0, dataMask: 6 } },
    { bits: 0x6976, formatInfo: { errorCorrectionLevel: 0, dataMask: 7 } },
    { bits: 0x1689, formatInfo: { errorCorrectionLevel: 3, dataMask: 0 } },
    { bits: 0x13BE, formatInfo: { errorCorrectionLevel: 3, dataMask: 1 } },
    { bits: 0x1CE7, formatInfo: { errorCorrectionLevel: 3, dataMask: 2 } },
    { bits: 0x19D0, formatInfo: { errorCorrectionLevel: 3, dataMask: 3 } },
    { bits: 0x0762, formatInfo: { errorCorrectionLevel: 3, dataMask: 4 } },
    { bits: 0x0255, formatInfo: { errorCorrectionLevel: 3, dataMask: 5 } },
    { bits: 0x0D0C, formatInfo: { errorCorrectionLevel: 3, dataMask: 6 } },
    { bits: 0x083B, formatInfo: { errorCorrectionLevel: 3, dataMask: 7 } },
    { bits: 0x355F, formatInfo: { errorCorrectionLevel: 2, dataMask: 0 } },
    { bits: 0x3068, formatInfo: { errorCorrectionLevel: 2, dataMask: 1 } },
    { bits: 0x3F31, formatInfo: { errorCorrectionLevel: 2, dataMask: 2 } },
    { bits: 0x3A06, formatInfo: { errorCorrectionLevel: 2, dataMask: 3 } },
    { bits: 0x24B4, formatInfo: { errorCorrectionLevel: 2, dataMask: 4 } },
    { bits: 0x2183, formatInfo: { errorCorrectionLevel: 2, dataMask: 5 } },
    { bits: 0x2EDA, formatInfo: { errorCorrectionLevel: 2, dataMask: 6 } },
    { bits: 0x2BED, formatInfo: { errorCorrectionLevel: 2, dataMask: 7 } },
];
var DATA_MASKS = [
    function (p) { return ((p.y + p.x) % 2) === 0; },
    function (p) { return (p.y % 2) === 0; },
    function (p) { return p.x % 3 === 0; },
    function (p) { return (p.y + p.x) % 3 === 0; },
    function (p) { return (Math.floor(p.y / 2) + Math.floor(p.x / 3)) % 2 === 0; },
    function (p) { return ((p.x * p.y) % 2) + ((p.x * p.y) % 3) === 0; },
    function (p) { return ((((p.y * p.x) % 2) + (p.y * p.x) % 3) % 2) === 0; },
    function (p) { return ((((p.y + p.x) % 2) + (p.y * p.x) % 3) % 2) === 0; },
];
function buildFunctionPatternMask(version) {
    var dimension = 17 + 4 * version.versionNumber;
    var matrix = BitMatrix_1.BitMatrix.createEmpty(dimension, dimension);
    matrix.setRegion(0, 0, 9, 9, true); // Top left finder pattern + separator + format
    matrix.setRegion(dimension - 8, 0, 8, 9, true); // Top right finder pattern + separator + format
    matrix.setRegion(0, dimension - 8, 9, 8, true); // Bottom left finder pattern + separator + format
    // Alignment patterns
    for (var _i = 0, _a = version.alignmentPatternCenters; _i < _a.length; _i++) {
        var x = _a[_i];
        for (var _b = 0, _c = version.alignmentPatternCenters; _b < _c.length; _b++) {
            var y = _c[_b];
            if (!(x === 6 && y === 6 || x === 6 && y === dimension - 7 || x === dimension - 7 && y === 6)) {
                matrix.setRegion(x - 2, y - 2, 5, 5, true);
            }
        }
    }
    matrix.setRegion(6, 9, 1, dimension - 17, true); // Vertical timing pattern
    matrix.setRegion(9, 6, dimension - 17, 1, true); // Horizontal timing pattern
    if (version.versionNumber > 6) {
        matrix.setRegion(dimension - 11, 0, 3, 6, true); // Version info, top right
        matrix.setRegion(0, dimension - 11, 6, 3, true); // Version info, bottom left
    }
    return matrix;
}
function readCodewords(matrix, version, formatInfo) {
    var dataMask = DATA_MASKS[formatInfo.dataMask];
    var dimension = matrix.height;
    var functionPatternMask = buildFunctionPatternMask(version);
    var codewords = [];
    var currentByte = 0;
    var bitsRead = 0;
    // Read columns in pairs, from right to left
    var readingUp = true;
    for (var columnIndex = dimension - 1; columnIndex > 0; columnIndex -= 2) {
        if (columnIndex === 6) { // Skip whole column with vertical alignment pattern;
            columnIndex--;
        }
        for (var i = 0; i < dimension; i++) {
            var y = readingUp ? dimension - 1 - i : i;
            for (var columnOffset = 0; columnOffset < 2; columnOffset++) {
                var x = columnIndex - columnOffset;
                if (!functionPatternMask.get(x, y)) {
                    bitsRead++;
                    var bit = matrix.get(x, y);
                    if (dataMask({ y: y, x: x })) {
                        bit = !bit;
                    }
                    currentByte = pushBit(bit, currentByte);
                    if (bitsRead === 8) { // Whole bytes
                        codewords.push(currentByte);
                        bitsRead = 0;
                        currentByte = 0;
                    }
                }
            }
        }
        readingUp = !readingUp;
    }
    return codewords;
}
function readVersion(matrix) {
    var dimension = matrix.height;
    var provisionalVersion = Math.floor((dimension - 17) / 4);
    if (provisionalVersion <= 6) { // 6 and under dont have version info in the QR code
        return version_1.VERSIONS[provisionalVersion - 1];
    }
    var topRightVersionBits = 0;
    for (var y = 5; y >= 0; y--) {
        for (var x = dimension - 9; x >= dimension - 11; x--) {
            topRightVersionBits = pushBit(matrix.get(x, y), topRightVersionBits);
        }
    }
    var bottomLeftVersionBits = 0;
    for (var x = 5; x >= 0; x--) {
        for (var y = dimension - 9; y >= dimension - 11; y--) {
            bottomLeftVersionBits = pushBit(matrix.get(x, y), bottomLeftVersionBits);
        }
    }
    var bestDifference = Infinity;
    var bestVersion;
    for (var _i = 0, VERSIONS_1 = version_1.VERSIONS; _i < VERSIONS_1.length; _i++) {
        var version = VERSIONS_1[_i];
        if (version.infoBits === topRightVersionBits || version.infoBits === bottomLeftVersionBits) {
            return version;
        }
        var difference = numBitsDiffering(topRightVersionBits, version.infoBits);
        if (difference < bestDifference) {
            bestVersion = version;
            bestDifference = difference;
        }
        difference = numBitsDiffering(bottomLeftVersionBits, version.infoBits);
        if (difference < bestDifference) {
            bestVersion = version;
            bestDifference = difference;
        }
    }
    // We can tolerate up to 3 bits of error since no two version info codewords will
    // differ in less than 8 bits.
    if (bestDifference <= 3) {
        return bestVersion;
    }
}
function readFormatInformation(matrix) {
    var topLeftFormatInfoBits = 0;
    for (var x = 0; x <= 8; x++) {
        if (x !== 6) { // Skip timing pattern bit
            topLeftFormatInfoBits = pushBit(matrix.get(x, 8), topLeftFormatInfoBits);
        }
    }
    for (var y = 7; y >= 0; y--) {
        if (y !== 6) { // Skip timing pattern bit
            topLeftFormatInfoBits = pushBit(matrix.get(8, y), topLeftFormatInfoBits);
        }
    }
    var dimension = matrix.height;
    var topRightBottomRightFormatInfoBits = 0;
    for (var y = dimension - 1; y >= dimension - 7; y--) { // bottom left
        topRightBottomRightFormatInfoBits = pushBit(matrix.get(8, y), topRightBottomRightFormatInfoBits);
    }
    for (var x = dimension - 8; x < dimension; x++) { // top right
        topRightBottomRightFormatInfoBits = pushBit(matrix.get(x, 8), topRightBottomRightFormatInfoBits);
    }
    var bestDifference = Infinity;
    var bestFormatInfo = null;
    for (var _i = 0, FORMAT_INFO_TABLE_1 = FORMAT_INFO_TABLE; _i < FORMAT_INFO_TABLE_1.length; _i++) {
        var _a = FORMAT_INFO_TABLE_1[_i], bits = _a.bits, formatInfo = _a.formatInfo;
        if (bits === topLeftFormatInfoBits || bits === topRightBottomRightFormatInfoBits) {
            return formatInfo;
        }
        var difference = numBitsDiffering(topLeftFormatInfoBits, bits);
        if (difference < bestDifference) {
            bestFormatInfo = formatInfo;
            bestDifference = difference;
        }
        if (topLeftFormatInfoBits !== topRightBottomRightFormatInfoBits) { // also try the other option
            difference = numBitsDiffering(topRightBottomRightFormatInfoBits, bits);
            if (difference < bestDifference) {
                bestFormatInfo = formatInfo;
                bestDifference = difference;
            }
        }
    }
    // Hamming distance of the 32 masked codes is 7, by construction, so <= 3 bits differing means we found a match
    if (bestDifference <= 3) {
        return bestFormatInfo;
    }
    return null;
}
function getDataBlocks(codewords, version, ecLevel) {
    var ecInfo = version.errorCorrectionLevels[ecLevel];
    var dataBlocks = [];
    var totalCodewords = 0;
    ecInfo.ecBlocks.forEach(function (block) {
        for (var i = 0; i < block.numBlocks; i++) {
            dataBlocks.push({ numDataCodewords: block.dataCodewordsPerBlock, codewords: [] });
            totalCodewords += block.dataCodewordsPerBlock + ecInfo.ecCodewordsPerBlock;
        }
    });
    // In some cases the QR code will be malformed enough that we pull off more or less than we should.
    // If we pull off less there's nothing we can do.
    // If we pull off more we can safely truncate
    if (codewords.length < totalCodewords) {
        return null;
    }
    codewords = codewords.slice(0, totalCodewords);
    var shortBlockSize = ecInfo.ecBlocks[0].dataCodewordsPerBlock;
    // Pull codewords to fill the blocks up to the minimum size
    for (var i = 0; i < shortBlockSize; i++) {
        for (var _i = 0, dataBlocks_1 = dataBlocks; _i < dataBlocks_1.length; _i++) {
            var dataBlock = dataBlocks_1[_i];
            dataBlock.codewords.push(codewords.shift());
        }
    }
    // If there are any large blocks, pull codewords to fill the last element of those
    if (ecInfo.ecBlocks.length > 1) {
        var smallBlockCount = ecInfo.ecBlocks[0].numBlocks;
        var largeBlockCount = ecInfo.ecBlocks[1].numBlocks;
        for (var i = 0; i < largeBlockCount; i++) {
            dataBlocks[smallBlockCount + i].codewords.push(codewords.shift());
        }
    }
    // Add the rest of the codewords to the blocks. These are the error correction codewords.
    while (codewords.length > 0) {
        for (var _a = 0, dataBlocks_2 = dataBlocks; _a < dataBlocks_2.length; _a++) {
            var dataBlock = dataBlocks_2[_a];
            dataBlock.codewords.push(codewords.shift());
        }
    }
    return dataBlocks;
}
function decodeMatrix(matrix) {
    var version = readVersion(matrix);
    if (!version) {
        return null;
    }
    var formatInfo = readFormatInformation(matrix);
    if (!formatInfo) {
        return null;
    }
    var codewords = readCodewords(matrix, version, formatInfo);
    var dataBlocks = getDataBlocks(codewords, version, formatInfo.errorCorrectionLevel);
    if (!dataBlocks) {
        return null;
    }
    // Count total number of data bytes
    var totalBytes = dataBlocks.reduce(function (a, b) { return a + b.numDataCodewords; }, 0);
    var resultBytes = new Uint8ClampedArray(totalBytes);
    var resultIndex = 0;
    for (var _i = 0, dataBlocks_3 = dataBlocks; _i < dataBlocks_3.length; _i++) {
        var dataBlock = dataBlocks_3[_i];
        var correctedBytes = reedsolomon_1.decode(dataBlock.codewords, dataBlock.codewords.length - dataBlock.numDataCodewords);
        if (!correctedBytes) {
            return null;
        }
        for (var i = 0; i < dataBlock.numDataCodewords; i++) {
            resultBytes[resultIndex++] = correctedBytes[i];
        }
    }
    try {
        return decodeData_1.decode(resultBytes, version.versionNumber);
    }
    catch (_a) {
        return null;
    }
}
function decode(matrix) {
    if (matrix == null) {
        return null;
    }
    var result = decodeMatrix(matrix);
    if (result) {
        return result;
    }
    // Decoding didn't work, try mirroring the QR across the topLeft -> bottomRight line.
    for (var x = 0; x < matrix.width; x++) {
        for (var y = x + 1; y < matrix.height; y++) {
            if (matrix.get(x, y) !== matrix.get(y, x)) {
                matrix.set(x, y, !matrix.get(x, y));
                matrix.set(y, x, !matrix.get(y, x));
            }
        }
    }
    return decodeMatrix(matrix);
}
exports.decode = decode;


/***/ }),
/* 6 */
/***/ (function(module, exports, __nested_webpack_require_33633__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-bitwise
var BitStream_1 = __nested_webpack_require_33633__(7);
var shiftJISTable_1 = __nested_webpack_require_33633__(8);
var Mode;
(function (Mode) {
    Mode["Numeric"] = "numeric";
    Mode["Alphanumeric"] = "alphanumeric";
    Mode["Byte"] = "byte";
    Mode["Kanji"] = "kanji";
    Mode["ECI"] = "eci";
})(Mode = exports.Mode || (exports.Mode = {}));
var ModeByte;
(function (ModeByte) {
    ModeByte[ModeByte["Terminator"] = 0] = "Terminator";
    ModeByte[ModeByte["Numeric"] = 1] = "Numeric";
    ModeByte[ModeByte["Alphanumeric"] = 2] = "Alphanumeric";
    ModeByte[ModeByte["Byte"] = 4] = "Byte";
    ModeByte[ModeByte["Kanji"] = 8] = "Kanji";
    ModeByte[ModeByte["ECI"] = 7] = "ECI";
    // StructuredAppend = 0x3,
    // FNC1FirstPosition = 0x5,
    // FNC1SecondPosition = 0x9,
})(ModeByte || (ModeByte = {}));
function decodeNumeric(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [10, 12, 14][size];
    var length = stream.readBits(characterCountSize);
    // Read digits in groups of 3
    while (length >= 3) {
        var num = stream.readBits(10);
        if (num >= 1000) {
            throw new Error("Invalid numeric value above 999");
        }
        var a = Math.floor(num / 100);
        var b = Math.floor(num / 10) % 10;
        var c = num % 10;
        bytes.push(48 + a, 48 + b, 48 + c);
        text += a.toString() + b.toString() + c.toString();
        length -= 3;
    }
    // If the number of digits aren't a multiple of 3, the remaining digits are special cased.
    if (length === 2) {
        var num = stream.readBits(7);
        if (num >= 100) {
            throw new Error("Invalid numeric value above 99");
        }
        var a = Math.floor(num / 10);
        var b = num % 10;
        bytes.push(48 + a, 48 + b);
        text += a.toString() + b.toString();
    }
    else if (length === 1) {
        var num = stream.readBits(4);
        if (num >= 10) {
            throw new Error("Invalid numeric value above 9");
        }
        bytes.push(48 + num);
        text += num.toString();
    }
    return { bytes: bytes, text: text };
}
var AlphanumericCharacterCodes = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    " ", "$", "%", "*", "+", "-", ".", "/", ":",
];
function decodeAlphanumeric(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [9, 11, 13][size];
    var length = stream.readBits(characterCountSize);
    while (length >= 2) {
        var v = stream.readBits(11);
        var a = Math.floor(v / 45);
        var b = v % 45;
        bytes.push(AlphanumericCharacterCodes[a].charCodeAt(0), AlphanumericCharacterCodes[b].charCodeAt(0));
        text += AlphanumericCharacterCodes[a] + AlphanumericCharacterCodes[b];
        length -= 2;
    }
    if (length === 1) {
        var a = stream.readBits(6);
        bytes.push(AlphanumericCharacterCodes[a].charCodeAt(0));
        text += AlphanumericCharacterCodes[a];
    }
    return { bytes: bytes, text: text };
}
function decodeByte(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [8, 16, 16][size];
    var length = stream.readBits(characterCountSize);
    for (var i = 0; i < length; i++) {
        var b = stream.readBits(8);
        bytes.push(b);
    }
    try {
        text += decodeURIComponent(bytes.map(function (b) { return "%" + ("0" + b.toString(16)).substr(-2); }).join(""));
    }
    catch (_a) {
        // failed to decode
    }
    return { bytes: bytes, text: text };
}
function decodeKanji(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [8, 10, 12][size];
    var length = stream.readBits(characterCountSize);
    for (var i = 0; i < length; i++) {
        var k = stream.readBits(13);
        var c = (Math.floor(k / 0xC0) << 8) | (k % 0xC0);
        if (c < 0x1F00) {
            c += 0x8140;
        }
        else {
            c += 0xC140;
        }
        bytes.push(c >> 8, c & 0xFF);
        text += String.fromCharCode(shiftJISTable_1.shiftJISTable[c]);
    }
    return { bytes: bytes, text: text };
}
function decode(data, version) {
    var _a, _b, _c, _d;
    var stream = new BitStream_1.BitStream(data);
    // There are 3 'sizes' based on the version. 1-9 is small (0), 10-26 is medium (1) and 27-40 is large (2).
    var size = version <= 9 ? 0 : version <= 26 ? 1 : 2;
    var result = {
        text: "",
        bytes: [],
        chunks: [],
    };
    while (stream.available() >= 4) {
        var mode = stream.readBits(4);
        if (mode === ModeByte.Terminator) {
            return result;
        }
        else if (mode === ModeByte.ECI) {
            if (stream.readBits(1) === 0) {
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: stream.readBits(7),
                });
            }
            else if (stream.readBits(1) === 0) {
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: stream.readBits(14),
                });
            }
            else if (stream.readBits(1) === 0) {
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: stream.readBits(21),
                });
            }
            else {
                // ECI data seems corrupted
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: -1,
                });
            }
        }
        else if (mode === ModeByte.Numeric) {
            var numericResult = decodeNumeric(stream, size);
            result.text += numericResult.text;
            (_a = result.bytes).push.apply(_a, numericResult.bytes);
            result.chunks.push({
                type: Mode.Numeric,
                text: numericResult.text,
            });
        }
        else if (mode === ModeByte.Alphanumeric) {
            var alphanumericResult = decodeAlphanumeric(stream, size);
            result.text += alphanumericResult.text;
            (_b = result.bytes).push.apply(_b, alphanumericResult.bytes);
            result.chunks.push({
                type: Mode.Alphanumeric,
                text: alphanumericResult.text,
            });
        }
        else if (mode === ModeByte.Byte) {
            var byteResult = decodeByte(stream, size);
            result.text += byteResult.text;
            (_c = result.bytes).push.apply(_c, byteResult.bytes);
            result.chunks.push({
                type: Mode.Byte,
                bytes: byteResult.bytes,
                text: byteResult.text,
            });
        }
        else if (mode === ModeByte.Kanji) {
            var kanjiResult = decodeKanji(stream, size);
            result.text += kanjiResult.text;
            (_d = result.bytes).push.apply(_d, kanjiResult.bytes);
            result.chunks.push({
                type: Mode.Kanji,
                bytes: kanjiResult.bytes,
                text: kanjiResult.text,
            });
        }
    }
    // If there is no data left, or the remaining bits are all 0, then that counts as a termination marker
    if (stream.available() === 0 || stream.readBits(stream.available()) === 0) {
        return result;
    }
}
exports.decode = decode;


/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_41225__) {

"use strict";

// tslint:disable:no-bitwise
Object.defineProperty(exports, "__esModule", { value: true });
var BitStream = /** @class */ (function () {
    function BitStream(bytes) {
        this.byteOffset = 0;
        this.bitOffset = 0;
        this.bytes = bytes;
    }
    BitStream.prototype.readBits = function (numBits) {
        if (numBits < 1 || numBits > 32 || numBits > this.available()) {
            throw new Error("Cannot read " + numBits.toString() + " bits");
        }
        var result = 0;
        // First, read remainder from current byte
        if (this.bitOffset > 0) {
            var bitsLeft = 8 - this.bitOffset;
            var toRead = numBits < bitsLeft ? numBits : bitsLeft;
            var bitsToNotRead = bitsLeft - toRead;
            var mask = (0xFF >> (8 - toRead)) << bitsToNotRead;
            result = (this.bytes[this.byteOffset] & mask) >> bitsToNotRead;
            numBits -= toRead;
            this.bitOffset += toRead;
            if (this.bitOffset === 8) {
                this.bitOffset = 0;
                this.byteOffset++;
            }
        }
        // Next read whole bytes
        if (numBits > 0) {
            while (numBits >= 8) {
                result = (result << 8) | (this.bytes[this.byteOffset] & 0xFF);
                this.byteOffset++;
                numBits -= 8;
            }
            // Finally read a partial byte
            if (numBits > 0) {
                var bitsToNotRead = 8 - numBits;
                var mask = (0xFF >> bitsToNotRead) << bitsToNotRead;
                result = (result << numBits) | ((this.bytes[this.byteOffset] & mask) >> bitsToNotRead);
                this.bitOffset += numBits;
            }
        }
        return result;
    };
    BitStream.prototype.available = function () {
        return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
    };
    return BitStream;
}());
exports.BitStream = BitStream;


/***/ }),
/* 8 */
/***/ (function(module, exports, __nested_webpack_require_43246__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftJISTable = {
    0x20: 0x0020,
    0x21: 0x0021,
    0x22: 0x0022,
    0x23: 0x0023,
    0x24: 0x0024,
    0x25: 0x0025,
    0x26: 0x0026,
    0x27: 0x0027,
    0x28: 0x0028,
    0x29: 0x0029,
    0x2A: 0x002A,
    0x2B: 0x002B,
    0x2C: 0x002C,
    0x2D: 0x002D,
    0x2E: 0x002E,
    0x2F: 0x002F,
    0x30: 0x0030,
    0x31: 0x0031,
    0x32: 0x0032,
    0x33: 0x0033,
    0x34: 0x0034,
    0x35: 0x0035,
    0x36: 0x0036,
    0x37: 0x0037,
    0x38: 0x0038,
    0x39: 0x0039,
    0x3A: 0x003A,
    0x3B: 0x003B,
    0x3C: 0x003C,
    0x3D: 0x003D,
    0x3E: 0x003E,
    0x3F: 0x003F,
    0x40: 0x0040,
    0x41: 0x0041,
    0x42: 0x0042,
    0x43: 0x0043,
    0x44: 0x0044,
    0x45: 0x0045,
    0x46: 0x0046,
    0x47: 0x0047,
    0x48: 0x0048,
    0x49: 0x0049,
    0x4A: 0x004A,
    0x4B: 0x004B,
    0x4C: 0x004C,
    0x4D: 0x004D,
    0x4E: 0x004E,
    0x4F: 0x004F,
    0x50: 0x0050,
    0x51: 0x0051,
    0x52: 0x0052,
    0x53: 0x0053,
    0x54: 0x0054,
    0x55: 0x0055,
    0x56: 0x0056,
    0x57: 0x0057,
    0x58: 0x0058,
    0x59: 0x0059,
    0x5A: 0x005A,
    0x5B: 0x005B,
    0x5C: 0x00A5,
    0x5D: 0x005D,
    0x5E: 0x005E,
    0x5F: 0x005F,
    0x60: 0x0060,
    0x61: 0x0061,
    0x62: 0x0062,
    0x63: 0x0063,
    0x64: 0x0064,
    0x65: 0x0065,
    0x66: 0x0066,
    0x67: 0x0067,
    0x68: 0x0068,
    0x69: 0x0069,
    0x6A: 0x006A,
    0x6B: 0x006B,
    0x6C: 0x006C,
    0x6D: 0x006D,
    0x6E: 0x006E,
    0x6F: 0x006F,
    0x70: 0x0070,
    0x71: 0x0071,
    0x72: 0x0072,
    0x73: 0x0073,
    0x74: 0x0074,
    0x75: 0x0075,
    0x76: 0x0076,
    0x77: 0x0077,
    0x78: 0x0078,
    0x79: 0x0079,
    0x7A: 0x007A,
    0x7B: 0x007B,
    0x7C: 0x007C,
    0x7D: 0x007D,
    0x7E: 0x203E,
    0x8140: 0x3000,
    0x8141: 0x3001,
    0x8142: 0x3002,
    0x8143: 0xFF0C,
    0x8144: 0xFF0E,
    0x8145: 0x30FB,
    0x8146: 0xFF1A,
    0x8147: 0xFF1B,
    0x8148: 0xFF1F,
    0x8149: 0xFF01,
    0x814A: 0x309B,
    0x814B: 0x309C,
    0x814C: 0x00B4,
    0x814D: 0xFF40,
    0x814E: 0x00A8,
    0x814F: 0xFF3E,
    0x8150: 0xFFE3,
    0x8151: 0xFF3F,
    0x8152: 0x30FD,
    0x8153: 0x30FE,
    0x8154: 0x309D,
    0x8155: 0x309E,
    0x8156: 0x3003,
    0x8157: 0x4EDD,
    0x8158: 0x3005,
    0x8159: 0x3006,
    0x815A: 0x3007,
    0x815B: 0x30FC,
    0x815C: 0x2015,
    0x815D: 0x2010,
    0x815E: 0xFF0F,
    0x815F: 0x005C,
    0x8160: 0x301C,
    0x8161: 0x2016,
    0x8162: 0xFF5C,
    0x8163: 0x2026,
    0x8164: 0x2025,
    0x8165: 0x2018,
    0x8166: 0x2019,
    0x8167: 0x201C,
    0x8168: 0x201D,
    0x8169: 0xFF08,
    0x816A: 0xFF09,
    0x816B: 0x3014,
    0x816C: 0x3015,
    0x816D: 0xFF3B,
    0x816E: 0xFF3D,
    0x816F: 0xFF5B,
    0x8170: 0xFF5D,
    0x8171: 0x3008,
    0x8172: 0x3009,
    0x8173: 0x300A,
    0x8174: 0x300B,
    0x8175: 0x300C,
    0x8176: 0x300D,
    0x8177: 0x300E,
    0x8178: 0x300F,
    0x8179: 0x3010,
    0x817A: 0x3011,
    0x817B: 0xFF0B,
    0x817C: 0x2212,
    0x817D: 0x00B1,
    0x817E: 0x00D7,
    0x8180: 0x00F7,
    0x8181: 0xFF1D,
    0x8182: 0x2260,
    0x8183: 0xFF1C,
    0x8184: 0xFF1E,
    0x8185: 0x2266,
    0x8186: 0x2267,
    0x8187: 0x221E,
    0x8188: 0x2234,
    0x8189: 0x2642,
    0x818A: 0x2640,
    0x818B: 0x00B0,
    0x818C: 0x2032,
    0x818D: 0x2033,
    0x818E: 0x2103,
    0x818F: 0xFFE5,
    0x8190: 0xFF04,
    0x8191: 0x00A2,
    0x8192: 0x00A3,
    0x8193: 0xFF05,
    0x8194: 0xFF03,
    0x8195: 0xFF06,
    0x8196: 0xFF0A,
    0x8197: 0xFF20,
    0x8198: 0x00A7,
    0x8199: 0x2606,
    0x819A: 0x2605,
    0x819B: 0x25CB,
    0x819C: 0x25CF,
    0x819D: 0x25CE,
    0x819E: 0x25C7,
    0x819F: 0x25C6,
    0x81A0: 0x25A1,
    0x81A1: 0x25A0,
    0x81A2: 0x25B3,
    0x81A3: 0x25B2,
    0x81A4: 0x25BD,
    0x81A5: 0x25BC,
    0x81A6: 0x203B,
    0x81A7: 0x3012,
    0x81A8: 0x2192,
    0x81A9: 0x2190,
    0x81AA: 0x2191,
    0x81AB: 0x2193,
    0x81AC: 0x3013,
    0x81B8: 0x2208,
    0x81B9: 0x220B,
    0x81BA: 0x2286,
    0x81BB: 0x2287,
    0x81BC: 0x2282,
    0x81BD: 0x2283,
    0x81BE: 0x222A,
    0x81BF: 0x2229,
    0x81C8: 0x2227,
    0x81C9: 0x2228,
    0x81CA: 0x00AC,
    0x81CB: 0x21D2,
    0x81CC: 0x21D4,
    0x81CD: 0x2200,
    0x81CE: 0x2203,
    0x81DA: 0x2220,
    0x81DB: 0x22A5,
    0x81DC: 0x2312,
    0x81DD: 0x2202,
    0x81DE: 0x2207,
    0x81DF: 0x2261,
    0x81E0: 0x2252,
    0x81E1: 0x226A,
    0x81E2: 0x226B,
    0x81E3: 0x221A,
    0x81E4: 0x223D,
    0x81E5: 0x221D,
    0x81E6: 0x2235,
    0x81E7: 0x222B,
    0x81E8: 0x222C,
    0x81F0: 0x212B,
    0x81F1: 0x2030,
    0x81F2: 0x266F,
    0x81F3: 0x266D,
    0x81F4: 0x266A,
    0x81F5: 0x2020,
    0x81F6: 0x2021,
    0x81F7: 0x00B6,
    0x81FC: 0x25EF,
    0x824F: 0xFF10,
    0x8250: 0xFF11,
    0x8251: 0xFF12,
    0x8252: 0xFF13,
    0x8253: 0xFF14,
    0x8254: 0xFF15,
    0x8255: 0xFF16,
    0x8256: 0xFF17,
    0x8257: 0xFF18,
    0x8258: 0xFF19,
    0x8260: 0xFF21,
    0x8261: 0xFF22,
    0x8262: 0xFF23,
    0x8263: 0xFF24,
    0x8264: 0xFF25,
    0x8265: 0xFF26,
    0x8266: 0xFF27,
    0x8267: 0xFF28,
    0x8268: 0xFF29,
    0x8269: 0xFF2A,
    0x826A: 0xFF2B,
    0x826B: 0xFF2C,
    0x826C: 0xFF2D,
    0x826D: 0xFF2E,
    0x826E: 0xFF2F,
    0x826F: 0xFF30,
    0x8270: 0xFF31,
    0x8271: 0xFF32,
    0x8272: 0xFF33,
    0x8273: 0xFF34,
    0x8274: 0xFF35,
    0x8275: 0xFF36,
    0x8276: 0xFF37,
    0x8277: 0xFF38,
    0x8278: 0xFF39,
    0x8279: 0xFF3A,
    0x8281: 0xFF41,
    0x8282: 0xFF42,
    0x8283: 0xFF43,
    0x8284: 0xFF44,
    0x8285: 0xFF45,
    0x8286: 0xFF46,
    0x8287: 0xFF47,
    0x8288: 0xFF48,
    0x8289: 0xFF49,
    0x828A: 0xFF4A,
    0x828B: 0xFF4B,
    0x828C: 0xFF4C,
    0x828D: 0xFF4D,
    0x828E: 0xFF4E,
    0x828F: 0xFF4F,
    0x8290: 0xFF50,
    0x8291: 0xFF51,
    0x8292: 0xFF52,
    0x8293: 0xFF53,
    0x8294: 0xFF54,
    0x8295: 0xFF55,
    0x8296: 0xFF56,
    0x8297: 0xFF57,
    0x8298: 0xFF58,
    0x8299: 0xFF59,
    0x829A: 0xFF5A,
    0x829F: 0x3041,
    0x82A0: 0x3042,
    0x82A1: 0x3043,
    0x82A2: 0x3044,
    0x82A3: 0x3045,
    0x82A4: 0x3046,
    0x82A5: 0x3047,
    0x82A6: 0x3048,
    0x82A7: 0x3049,
    0x82A8: 0x304A,
    0x82A9: 0x304B,
    0x82AA: 0x304C,
    0x82AB: 0x304D,
    0x82AC: 0x304E,
    0x82AD: 0x304F,
    0x82AE: 0x3050,
    0x82AF: 0x3051,
    0x82B0: 0x3052,
    0x82B1: 0x3053,
    0x82B2: 0x3054,
    0x82B3: 0x3055,
    0x82B4: 0x3056,
    0x82B5: 0x3057,
    0x82B6: 0x3058,
    0x82B7: 0x3059,
    0x82B8: 0x305A,
    0x82B9: 0x305B,
    0x82BA: 0x305C,
    0x82BB: 0x305D,
    0x82BC: 0x305E,
    0x82BD: 0x305F,
    0x82BE: 0x3060,
    0x82BF: 0x3061,
    0x82C0: 0x3062,
    0x82C1: 0x3063,
    0x82C2: 0x3064,
    0x82C3: 0x3065,
    0x82C4: 0x3066,
    0x82C5: 0x3067,
    0x82C6: 0x3068,
    0x82C7: 0x3069,
    0x82C8: 0x306A,
    0x82C9: 0x306B,
    0x82CA: 0x306C,
    0x82CB: 0x306D,
    0x82CC: 0x306E,
    0x82CD: 0x306F,
    0x82CE: 0x3070,
    0x82CF: 0x3071,
    0x82D0: 0x3072,
    0x82D1: 0x3073,
    0x82D2: 0x3074,
    0x82D3: 0x3075,
    0x82D4: 0x3076,
    0x82D5: 0x3077,
    0x82D6: 0x3078,
    0x82D7: 0x3079,
    0x82D8: 0x307A,
    0x82D9: 0x307B,
    0x82DA: 0x307C,
    0x82DB: 0x307D,
    0x82DC: 0x307E,
    0x82DD: 0x307F,
    0x82DE: 0x3080,
    0x82DF: 0x3081,
    0x82E0: 0x3082,
    0x82E1: 0x3083,
    0x82E2: 0x3084,
    0x82E3: 0x3085,
    0x82E4: 0x3086,
    0x82E5: 0x3087,
    0x82E6: 0x3088,
    0x82E7: 0x3089,
    0x82E8: 0x308A,
    0x82E9: 0x308B,
    0x82EA: 0x308C,
    0x82EB: 0x308D,
    0x82EC: 0x308E,
    0x82ED: 0x308F,
    0x82EE: 0x3090,
    0x82EF: 0x3091,
    0x82F0: 0x3092,
    0x82F1: 0x3093,
    0x8340: 0x30A1,
    0x8341: 0x30A2,
    0x8342: 0x30A3,
    0x8343: 0x30A4,
    0x8344: 0x30A5,
    0x8345: 0x30A6,
    0x8346: 0x30A7,
    0x8347: 0x30A8,
    0x8348: 0x30A9,
    0x8349: 0x30AA,
    0x834A: 0x30AB,
    0x834B: 0x30AC,
    0x834C: 0x30AD,
    0x834D: 0x30AE,
    0x834E: 0x30AF,
    0x834F: 0x30B0,
    0x8350: 0x30B1,
    0x8351: 0x30B2,
    0x8352: 0x30B3,
    0x8353: 0x30B4,
    0x8354: 0x30B5,
    0x8355: 0x30B6,
    0x8356: 0x30B7,
    0x8357: 0x30B8,
    0x8358: 0x30B9,
    0x8359: 0x30BA,
    0x835A: 0x30BB,
    0x835B: 0x30BC,
    0x835C: 0x30BD,
    0x835D: 0x30BE,
    0x835E: 0x30BF,
    0x835F: 0x30C0,
    0x8360: 0x30C1,
    0x8361: 0x30C2,
    0x8362: 0x30C3,
    0x8363: 0x30C4,
    0x8364: 0x30C5,
    0x8365: 0x30C6,
    0x8366: 0x30C7,
    0x8367: 0x30C8,
    0x8368: 0x30C9,
    0x8369: 0x30CA,
    0x836A: 0x30CB,
    0x836B: 0x30CC,
    0x836C: 0x30CD,
    0x836D: 0x30CE,
    0x836E: 0x30CF,
    0x836F: 0x30D0,
    0x8370: 0x30D1,
    0x8371: 0x30D2,
    0x8372: 0x30D3,
    0x8373: 0x30D4,
    0x8374: 0x30D5,
    0x8375: 0x30D6,
    0x8376: 0x30D7,
    0x8377: 0x30D8,
    0x8378: 0x30D9,
    0x8379: 0x30DA,
    0x837A: 0x30DB,
    0x837B: 0x30DC,
    0x837C: 0x30DD,
    0x837D: 0x30DE,
    0x837E: 0x30DF,
    0x8380: 0x30E0,
    0x8381: 0x30E1,
    0x8382: 0x30E2,
    0x8383: 0x30E3,
    0x8384: 0x30E4,
    0x8385: 0x30E5,
    0x8386: 0x30E6,
    0x8387: 0x30E7,
    0x8388: 0x30E8,
    0x8389: 0x30E9,
    0x838A: 0x30EA,
    0x838B: 0x30EB,
    0x838C: 0x30EC,
    0x838D: 0x30ED,
    0x838E: 0x30EE,
    0x838F: 0x30EF,
    0x8390: 0x30F0,
    0x8391: 0x30F1,
    0x8392: 0x30F2,
    0x8393: 0x30F3,
    0x8394: 0x30F4,
    0x8395: 0x30F5,
    0x8396: 0x30F6,
    0x839F: 0x0391,
    0x83A0: 0x0392,
    0x83A1: 0x0393,
    0x83A2: 0x0394,
    0x83A3: 0x0395,
    0x83A4: 0x0396,
    0x83A5: 0x0397,
    0x83A6: 0x0398,
    0x83A7: 0x0399,
    0x83A8: 0x039A,
    0x83A9: 0x039B,
    0x83AA: 0x039C,
    0x83AB: 0x039D,
    0x83AC: 0x039E,
    0x83AD: 0x039F,
    0x83AE: 0x03A0,
    0x83AF: 0x03A1,
    0x83B0: 0x03A3,
    0x83B1: 0x03A4,
    0x83B2: 0x03A5,
    0x83B3: 0x03A6,
    0x83B4: 0x03A7,
    0x83B5: 0x03A8,
    0x83B6: 0x03A9,
    0x83BF: 0x03B1,
    0x83C0: 0x03B2,
    0x83C1: 0x03B3,
    0x83C2: 0x03B4,
    0x83C3: 0x03B5,
    0x83C4: 0x03B6,
    0x83C5: 0x03B7,
    0x83C6: 0x03B8,
    0x83C7: 0x03B9,
    0x83C8: 0x03BA,
    0x83C9: 0x03BB,
    0x83CA: 0x03BC,
    0x83CB: 0x03BD,
    0x83CC: 0x03BE,
    0x83CD: 0x03BF,
    0x83CE: 0x03C0,
    0x83CF: 0x03C1,
    0x83D0: 0x03C3,
    0x83D1: 0x03C4,
    0x83D2: 0x03C5,
    0x83D3: 0x03C6,
    0x83D4: 0x03C7,
    0x83D5: 0x03C8,
    0x83D6: 0x03C9,
    0x8440: 0x0410,
    0x8441: 0x0411,
    0x8442: 0x0412,
    0x8443: 0x0413,
    0x8444: 0x0414,
    0x8445: 0x0415,
    0x8446: 0x0401,
    0x8447: 0x0416,
    0x8448: 0x0417,
    0x8449: 0x0418,
    0x844A: 0x0419,
    0x844B: 0x041A,
    0x844C: 0x041B,
    0x844D: 0x041C,
    0x844E: 0x041D,
    0x844F: 0x041E,
    0x8450: 0x041F,
    0x8451: 0x0420,
    0x8452: 0x0421,
    0x8453: 0x0422,
    0x8454: 0x0423,
    0x8455: 0x0424,
    0x8456: 0x0425,
    0x8457: 0x0426,
    0x8458: 0x0427,
    0x8459: 0x0428,
    0x845A: 0x0429,
    0x845B: 0x042A,
    0x845C: 0x042B,
    0x845D: 0x042C,
    0x845E: 0x042D,
    0x845F: 0x042E,
    0x8460: 0x042F,
    0x8470: 0x0430,
    0x8471: 0x0431,
    0x8472: 0x0432,
    0x8473: 0x0433,
    0x8474: 0x0434,
    0x8475: 0x0435,
    0x8476: 0x0451,
    0x8477: 0x0436,
    0x8478: 0x0437,
    0x8479: 0x0438,
    0x847A: 0x0439,
    0x847B: 0x043A,
    0x847C: 0x043B,
    0x847D: 0x043C,
    0x847E: 0x043D,
    0x8480: 0x043E,
    0x8481: 0x043F,
    0x8482: 0x0440,
    0x8483: 0x0441,
    0x8484: 0x0442,
    0x8485: 0x0443,
    0x8486: 0x0444,
    0x8487: 0x0445,
    0x8488: 0x0446,
    0x8489: 0x0447,
    0x848A: 0x0448,
    0x848B: 0x0449,
    0x848C: 0x044A,
    0x848D: 0x044B,
    0x848E: 0x044C,
    0x848F: 0x044D,
    0x8490: 0x044E,
    0x8491: 0x044F,
    0x849F: 0x2500,
    0x84A0: 0x2502,
    0x84A1: 0x250C,
    0x84A2: 0x2510,
    0x84A3: 0x2518,
    0x84A4: 0x2514,
    0x84A5: 0x251C,
    0x84A6: 0x252C,
    0x84A7: 0x2524,
    0x84A8: 0x2534,
    0x84A9: 0x253C,
    0x84AA: 0x2501,
    0x84AB: 0x2503,
    0x84AC: 0x250F,
    0x84AD: 0x2513,
    0x84AE: 0x251B,
    0x84AF: 0x2517,
    0x84B0: 0x2523,
    0x84B1: 0x2533,
    0x84B2: 0x252B,
    0x84B3: 0x253B,
    0x84B4: 0x254B,
    0x84B5: 0x2520,
    0x84B6: 0x252F,
    0x84B7: 0x2528,
    0x84B8: 0x2537,
    0x84B9: 0x253F,
    0x84BA: 0x251D,
    0x84BB: 0x2530,
    0x84BC: 0x2525,
    0x84BD: 0x2538,
    0x84BE: 0x2542,
    0x889F: 0x4E9C,
    0x88A0: 0x5516,
    0x88A1: 0x5A03,
    0x88A2: 0x963F,
    0x88A3: 0x54C0,
    0x88A4: 0x611B,
    0x88A5: 0x6328,
    0x88A6: 0x59F6,
    0x88A7: 0x9022,
    0x88A8: 0x8475,
    0x88A9: 0x831C,
    0x88AA: 0x7A50,
    0x88AB: 0x60AA,
    0x88AC: 0x63E1,
    0x88AD: 0x6E25,
    0x88AE: 0x65ED,
    0x88AF: 0x8466,
    0x88B0: 0x82A6,
    0x88B1: 0x9BF5,
    0x88B2: 0x6893,
    0x88B3: 0x5727,
    0x88B4: 0x65A1,
    0x88B5: 0x6271,
    0x88B6: 0x5B9B,
    0x88B7: 0x59D0,
    0x88B8: 0x867B,
    0x88B9: 0x98F4,
    0x88BA: 0x7D62,
    0x88BB: 0x7DBE,
    0x88BC: 0x9B8E,
    0x88BD: 0x6216,
    0x88BE: 0x7C9F,
    0x88BF: 0x88B7,
    0x88C0: 0x5B89,
    0x88C1: 0x5EB5,
    0x88C2: 0x6309,
    0x88C3: 0x6697,
    0x88C4: 0x6848,
    0x88C5: 0x95C7,
    0x88C6: 0x978D,
    0x88C7: 0x674F,
    0x88C8: 0x4EE5,
    0x88C9: 0x4F0A,
    0x88CA: 0x4F4D,
    0x88CB: 0x4F9D,
    0x88CC: 0x5049,
    0x88CD: 0x56F2,
    0x88CE: 0x5937,
    0x88CF: 0x59D4,
    0x88D0: 0x5A01,
    0x88D1: 0x5C09,
    0x88D2: 0x60DF,
    0x88D3: 0x610F,
    0x88D4: 0x6170,
    0x88D5: 0x6613,
    0x88D6: 0x6905,
    0x88D7: 0x70BA,
    0x88D8: 0x754F,
    0x88D9: 0x7570,
    0x88DA: 0x79FB,
    0x88DB: 0x7DAD,
    0x88DC: 0x7DEF,
    0x88DD: 0x80C3,
    0x88DE: 0x840E,
    0x88DF: 0x8863,
    0x88E0: 0x8B02,
    0x88E1: 0x9055,
    0x88E2: 0x907A,
    0x88E3: 0x533B,
    0x88E4: 0x4E95,
    0x88E5: 0x4EA5,
    0x88E6: 0x57DF,
    0x88E7: 0x80B2,
    0x88E8: 0x90C1,
    0x88E9: 0x78EF,
    0x88EA: 0x4E00,
    0x88EB: 0x58F1,
    0x88EC: 0x6EA2,
    0x88ED: 0x9038,
    0x88EE: 0x7A32,
    0x88EF: 0x8328,
    0x88F0: 0x828B,
    0x88F1: 0x9C2F,
    0x88F2: 0x5141,
    0x88F3: 0x5370,
    0x88F4: 0x54BD,
    0x88F5: 0x54E1,
    0x88F6: 0x56E0,
    0x88F7: 0x59FB,
    0x88F8: 0x5F15,
    0x88F9: 0x98F2,
    0x88FA: 0x6DEB,
    0x88FB: 0x80E4,
    0x88FC: 0x852D,
    0x8940: 0x9662,
    0x8941: 0x9670,
    0x8942: 0x96A0,
    0x8943: 0x97FB,
    0x8944: 0x540B,
    0x8945: 0x53F3,
    0x8946: 0x5B87,
    0x8947: 0x70CF,
    0x8948: 0x7FBD,
    0x8949: 0x8FC2,
    0x894A: 0x96E8,
    0x894B: 0x536F,
    0x894C: 0x9D5C,
    0x894D: 0x7ABA,
    0x894E: 0x4E11,
    0x894F: 0x7893,
    0x8950: 0x81FC,
    0x8951: 0x6E26,
    0x8952: 0x5618,
    0x8953: 0x5504,
    0x8954: 0x6B1D,
    0x8955: 0x851A,
    0x8956: 0x9C3B,
    0x8957: 0x59E5,
    0x8958: 0x53A9,
    0x8959: 0x6D66,
    0x895A: 0x74DC,
    0x895B: 0x958F,
    0x895C: 0x5642,
    0x895D: 0x4E91,
    0x895E: 0x904B,
    0x895F: 0x96F2,
    0x8960: 0x834F,
    0x8961: 0x990C,
    0x8962: 0x53E1,
    0x8963: 0x55B6,
    0x8964: 0x5B30,
    0x8965: 0x5F71,
    0x8966: 0x6620,
    0x8967: 0x66F3,
    0x8968: 0x6804,
    0x8969: 0x6C38,
    0x896A: 0x6CF3,
    0x896B: 0x6D29,
    0x896C: 0x745B,
    0x896D: 0x76C8,
    0x896E: 0x7A4E,
    0x896F: 0x9834,
    0x8970: 0x82F1,
    0x8971: 0x885B,
    0x8972: 0x8A60,
    0x8973: 0x92ED,
    0x8974: 0x6DB2,
    0x8975: 0x75AB,
    0x8976: 0x76CA,
    0x8977: 0x99C5,
    0x8978: 0x60A6,
    0x8979: 0x8B01,
    0x897A: 0x8D8A,
    0x897B: 0x95B2,
    0x897C: 0x698E,
    0x897D: 0x53AD,
    0x897E: 0x5186,
    0x8980: 0x5712,
    0x8981: 0x5830,
    0x8982: 0x5944,
    0x8983: 0x5BB4,
    0x8984: 0x5EF6,
    0x8985: 0x6028,
    0x8986: 0x63A9,
    0x8987: 0x63F4,
    0x8988: 0x6CBF,
    0x8989: 0x6F14,
    0x898A: 0x708E,
    0x898B: 0x7114,
    0x898C: 0x7159,
    0x898D: 0x71D5,
    0x898E: 0x733F,
    0x898F: 0x7E01,
    0x8990: 0x8276,
    0x8991: 0x82D1,
    0x8992: 0x8597,
    0x8993: 0x9060,
    0x8994: 0x925B,
    0x8995: 0x9D1B,
    0x8996: 0x5869,
    0x8997: 0x65BC,
    0x8998: 0x6C5A,
    0x8999: 0x7525,
    0x899A: 0x51F9,
    0x899B: 0x592E,
    0x899C: 0x5965,
    0x899D: 0x5F80,
    0x899E: 0x5FDC,
    0x899F: 0x62BC,
    0x89A0: 0x65FA,
    0x89A1: 0x6A2A,
    0x89A2: 0x6B27,
    0x89A3: 0x6BB4,
    0x89A4: 0x738B,
    0x89A5: 0x7FC1,
    0x89A6: 0x8956,
    0x89A7: 0x9D2C,
    0x89A8: 0x9D0E,
    0x89A9: 0x9EC4,
    0x89AA: 0x5CA1,
    0x89AB: 0x6C96,
    0x89AC: 0x837B,
    0x89AD: 0x5104,
    0x89AE: 0x5C4B,
    0x89AF: 0x61B6,
    0x89B0: 0x81C6,
    0x89B1: 0x6876,
    0x89B2: 0x7261,
    0x89B3: 0x4E59,
    0x89B4: 0x4FFA,
    0x89B5: 0x5378,
    0x89B6: 0x6069,
    0x89B7: 0x6E29,
    0x89B8: 0x7A4F,
    0x89B9: 0x97F3,
    0x89BA: 0x4E0B,
    0x89BB: 0x5316,
    0x89BC: 0x4EEE,
    0x89BD: 0x4F55,
    0x89BE: 0x4F3D,
    0x89BF: 0x4FA1,
    0x89C0: 0x4F73,
    0x89C1: 0x52A0,
    0x89C2: 0x53EF,
    0x89C3: 0x5609,
    0x89C4: 0x590F,
    0x89C5: 0x5AC1,
    0x89C6: 0x5BB6,
    0x89C7: 0x5BE1,
    0x89C8: 0x79D1,
    0x89C9: 0x6687,
    0x89CA: 0x679C,
    0x89CB: 0x67B6,
    0x89CC: 0x6B4C,
    0x89CD: 0x6CB3,
    0x89CE: 0x706B,
    0x89CF: 0x73C2,
    0x89D0: 0x798D,
    0x89D1: 0x79BE,
    0x89D2: 0x7A3C,
    0x89D3: 0x7B87,
    0x89D4: 0x82B1,
    0x89D5: 0x82DB,
    0x89D6: 0x8304,
    0x89D7: 0x8377,
    0x89D8: 0x83EF,
    0x89D9: 0x83D3,
    0x89DA: 0x8766,
    0x89DB: 0x8AB2,
    0x89DC: 0x5629,
    0x89DD: 0x8CA8,
    0x89DE: 0x8FE6,
    0x89DF: 0x904E,
    0x89E0: 0x971E,
    0x89E1: 0x868A,
    0x89E2: 0x4FC4,
    0x89E3: 0x5CE8,
    0x89E4: 0x6211,
    0x89E5: 0x7259,
    0x89E6: 0x753B,
    0x89E7: 0x81E5,
    0x89E8: 0x82BD,
    0x89E9: 0x86FE,
    0x89EA: 0x8CC0,
    0x89EB: 0x96C5,
    0x89EC: 0x9913,
    0x89ED: 0x99D5,
    0x89EE: 0x4ECB,
    0x89EF: 0x4F1A,
    0x89F0: 0x89E3,
    0x89F1: 0x56DE,
    0x89F2: 0x584A,
    0x89F3: 0x58CA,
    0x89F4: 0x5EFB,
    0x89F5: 0x5FEB,
    0x89F6: 0x602A,
    0x89F7: 0x6094,
    0x89F8: 0x6062,
    0x89F9: 0x61D0,
    0x89FA: 0x6212,
    0x89FB: 0x62D0,
    0x89FC: 0x6539,
    0x8A40: 0x9B41,
    0x8A41: 0x6666,
    0x8A42: 0x68B0,
    0x8A43: 0x6D77,
    0x8A44: 0x7070,
    0x8A45: 0x754C,
    0x8A46: 0x7686,
    0x8A47: 0x7D75,
    0x8A48: 0x82A5,
    0x8A49: 0x87F9,
    0x8A4A: 0x958B,
    0x8A4B: 0x968E,
    0x8A4C: 0x8C9D,
    0x8A4D: 0x51F1,
    0x8A4E: 0x52BE,
    0x8A4F: 0x5916,
    0x8A50: 0x54B3,
    0x8A51: 0x5BB3,
    0x8A52: 0x5D16,
    0x8A53: 0x6168,
    0x8A54: 0x6982,
    0x8A55: 0x6DAF,
    0x8A56: 0x788D,
    0x8A57: 0x84CB,
    0x8A58: 0x8857,
    0x8A59: 0x8A72,
    0x8A5A: 0x93A7,
    0x8A5B: 0x9AB8,
    0x8A5C: 0x6D6C,
    0x8A5D: 0x99A8,
    0x8A5E: 0x86D9,
    0x8A5F: 0x57A3,
    0x8A60: 0x67FF,
    0x8A61: 0x86CE,
    0x8A62: 0x920E,
    0x8A63: 0x5283,
    0x8A64: 0x5687,
    0x8A65: 0x5404,
    0x8A66: 0x5ED3,
    0x8A67: 0x62E1,
    0x8A68: 0x64B9,
    0x8A69: 0x683C,
    0x8A6A: 0x6838,
    0x8A6B: 0x6BBB,
    0x8A6C: 0x7372,
    0x8A6D: 0x78BA,
    0x8A6E: 0x7A6B,
    0x8A6F: 0x899A,
    0x8A70: 0x89D2,
    0x8A71: 0x8D6B,
    0x8A72: 0x8F03,
    0x8A73: 0x90ED,
    0x8A74: 0x95A3,
    0x8A75: 0x9694,
    0x8A76: 0x9769,
    0x8A77: 0x5B66,
    0x8A78: 0x5CB3,
    0x8A79: 0x697D,
    0x8A7A: 0x984D,
    0x8A7B: 0x984E,
    0x8A7C: 0x639B,
    0x8A7D: 0x7B20,
    0x8A7E: 0x6A2B,
    0x8A80: 0x6A7F,
    0x8A81: 0x68B6,
    0x8A82: 0x9C0D,
    0x8A83: 0x6F5F,
    0x8A84: 0x5272,
    0x8A85: 0x559D,
    0x8A86: 0x6070,
    0x8A87: 0x62EC,
    0x8A88: 0x6D3B,
    0x8A89: 0x6E07,
    0x8A8A: 0x6ED1,
    0x8A8B: 0x845B,
    0x8A8C: 0x8910,
    0x8A8D: 0x8F44,
    0x8A8E: 0x4E14,
    0x8A8F: 0x9C39,
    0x8A90: 0x53F6,
    0x8A91: 0x691B,
    0x8A92: 0x6A3A,
    0x8A93: 0x9784,
    0x8A94: 0x682A,
    0x8A95: 0x515C,
    0x8A96: 0x7AC3,
    0x8A97: 0x84B2,
    0x8A98: 0x91DC,
    0x8A99: 0x938C,
    0x8A9A: 0x565B,
    0x8A9B: 0x9D28,
    0x8A9C: 0x6822,
    0x8A9D: 0x8305,
    0x8A9E: 0x8431,
    0x8A9F: 0x7CA5,
    0x8AA0: 0x5208,
    0x8AA1: 0x82C5,
    0x8AA2: 0x74E6,
    0x8AA3: 0x4E7E,
    0x8AA4: 0x4F83,
    0x8AA5: 0x51A0,
    0x8AA6: 0x5BD2,
    0x8AA7: 0x520A,
    0x8AA8: 0x52D8,
    0x8AA9: 0x52E7,
    0x8AAA: 0x5DFB,
    0x8AAB: 0x559A,
    0x8AAC: 0x582A,
    0x8AAD: 0x59E6,
    0x8AAE: 0x5B8C,
    0x8AAF: 0x5B98,
    0x8AB0: 0x5BDB,
    0x8AB1: 0x5E72,
    0x8AB2: 0x5E79,
    0x8AB3: 0x60A3,
    0x8AB4: 0x611F,
    0x8AB5: 0x6163,
    0x8AB6: 0x61BE,
    0x8AB7: 0x63DB,
    0x8AB8: 0x6562,
    0x8AB9: 0x67D1,
    0x8ABA: 0x6853,
    0x8ABB: 0x68FA,
    0x8ABC: 0x6B3E,
    0x8ABD: 0x6B53,
    0x8ABE: 0x6C57,
    0x8ABF: 0x6F22,
    0x8AC0: 0x6F97,
    0x8AC1: 0x6F45,
    0x8AC2: 0x74B0,
    0x8AC3: 0x7518,
    0x8AC4: 0x76E3,
    0x8AC5: 0x770B,
    0x8AC6: 0x7AFF,
    0x8AC7: 0x7BA1,
    0x8AC8: 0x7C21,
    0x8AC9: 0x7DE9,
    0x8ACA: 0x7F36,
    0x8ACB: 0x7FF0,
    0x8ACC: 0x809D,
    0x8ACD: 0x8266,
    0x8ACE: 0x839E,
    0x8ACF: 0x89B3,
    0x8AD0: 0x8ACC,
    0x8AD1: 0x8CAB,
    0x8AD2: 0x9084,
    0x8AD3: 0x9451,
    0x8AD4: 0x9593,
    0x8AD5: 0x9591,
    0x8AD6: 0x95A2,
    0x8AD7: 0x9665,
    0x8AD8: 0x97D3,
    0x8AD9: 0x9928,
    0x8ADA: 0x8218,
    0x8ADB: 0x4E38,
    0x8ADC: 0x542B,
    0x8ADD: 0x5CB8,
    0x8ADE: 0x5DCC,
    0x8ADF: 0x73A9,
    0x8AE0: 0x764C,
    0x8AE1: 0x773C,
    0x8AE2: 0x5CA9,
    0x8AE3: 0x7FEB,
    0x8AE4: 0x8D0B,
    0x8AE5: 0x96C1,
    0x8AE6: 0x9811,
    0x8AE7: 0x9854,
    0x8AE8: 0x9858,
    0x8AE9: 0x4F01,
    0x8AEA: 0x4F0E,
    0x8AEB: 0x5371,
    0x8AEC: 0x559C,
    0x8AED: 0x5668,
    0x8AEE: 0x57FA,
    0x8AEF: 0x5947,
    0x8AF0: 0x5B09,
    0x8AF1: 0x5BC4,
    0x8AF2: 0x5C90,
    0x8AF3: 0x5E0C,
    0x8AF4: 0x5E7E,
    0x8AF5: 0x5FCC,
    0x8AF6: 0x63EE,
    0x8AF7: 0x673A,
    0x8AF8: 0x65D7,
    0x8AF9: 0x65E2,
    0x8AFA: 0x671F,
    0x8AFB: 0x68CB,
    0x8AFC: 0x68C4,
    0x8B40: 0x6A5F,
    0x8B41: 0x5E30,
    0x8B42: 0x6BC5,
    0x8B43: 0x6C17,
    0x8B44: 0x6C7D,
    0x8B45: 0x757F,
    0x8B46: 0x7948,
    0x8B47: 0x5B63,
    0x8B48: 0x7A00,
    0x8B49: 0x7D00,
    0x8B4A: 0x5FBD,
    0x8B4B: 0x898F,
    0x8B4C: 0x8A18,
    0x8B4D: 0x8CB4,
    0x8B4E: 0x8D77,
    0x8B4F: 0x8ECC,
    0x8B50: 0x8F1D,
    0x8B51: 0x98E2,
    0x8B52: 0x9A0E,
    0x8B53: 0x9B3C,
    0x8B54: 0x4E80,
    0x8B55: 0x507D,
    0x8B56: 0x5100,
    0x8B57: 0x5993,
    0x8B58: 0x5B9C,
    0x8B59: 0x622F,
    0x8B5A: 0x6280,
    0x8B5B: 0x64EC,
    0x8B5C: 0x6B3A,
    0x8B5D: 0x72A0,
    0x8B5E: 0x7591,
    0x8B5F: 0x7947,
    0x8B60: 0x7FA9,
    0x8B61: 0x87FB,
    0x8B62: 0x8ABC,
    0x8B63: 0x8B70,
    0x8B64: 0x63AC,
    0x8B65: 0x83CA,
    0x8B66: 0x97A0,
    0x8B67: 0x5409,
    0x8B68: 0x5403,
    0x8B69: 0x55AB,
    0x8B6A: 0x6854,
    0x8B6B: 0x6A58,
    0x8B6C: 0x8A70,
    0x8B6D: 0x7827,
    0x8B6E: 0x6775,
    0x8B6F: 0x9ECD,
    0x8B70: 0x5374,
    0x8B71: 0x5BA2,
    0x8B72: 0x811A,
    0x8B73: 0x8650,
    0x8B74: 0x9006,
    0x8B75: 0x4E18,
    0x8B76: 0x4E45,
    0x8B77: 0x4EC7,
    0x8B78: 0x4F11,
    0x8B79: 0x53CA,
    0x8B7A: 0x5438,
    0x8B7B: 0x5BAE,
    0x8B7C: 0x5F13,
    0x8B7D: 0x6025,
    0x8B7E: 0x6551,
    0x8B80: 0x673D,
    0x8B81: 0x6C42,
    0x8B82: 0x6C72,
    0x8B83: 0x6CE3,
    0x8B84: 0x7078,
    0x8B85: 0x7403,
    0x8B86: 0x7A76,
    0x8B87: 0x7AAE,
    0x8B88: 0x7B08,
    0x8B89: 0x7D1A,
    0x8B8A: 0x7CFE,
    0x8B8B: 0x7D66,
    0x8B8C: 0x65E7,
    0x8B8D: 0x725B,
    0x8B8E: 0x53BB,
    0x8B8F: 0x5C45,
    0x8B90: 0x5DE8,
    0x8B91: 0x62D2,
    0x8B92: 0x62E0,
    0x8B93: 0x6319,
    0x8B94: 0x6E20,
    0x8B95: 0x865A,
    0x8B96: 0x8A31,
    0x8B97: 0x8DDD,
    0x8B98: 0x92F8,
    0x8B99: 0x6F01,
    0x8B9A: 0x79A6,
    0x8B9B: 0x9B5A,
    0x8B9C: 0x4EA8,
    0x8B9D: 0x4EAB,
    0x8B9E: 0x4EAC,
    0x8B9F: 0x4F9B,
    0x8BA0: 0x4FA0,
    0x8BA1: 0x50D1,
    0x8BA2: 0x5147,
    0x8BA3: 0x7AF6,
    0x8BA4: 0x5171,
    0x8BA5: 0x51F6,
    0x8BA6: 0x5354,
    0x8BA7: 0x5321,
    0x8BA8: 0x537F,
    0x8BA9: 0x53EB,
    0x8BAA: 0x55AC,
    0x8BAB: 0x5883,
    0x8BAC: 0x5CE1,
    0x8BAD: 0x5F37,
    0x8BAE: 0x5F4A,
    0x8BAF: 0x602F,
    0x8BB0: 0x6050,
    0x8BB1: 0x606D,
    0x8BB2: 0x631F,
    0x8BB3: 0x6559,
    0x8BB4: 0x6A4B,
    0x8BB5: 0x6CC1,
    0x8BB6: 0x72C2,
    0x8BB7: 0x72ED,
    0x8BB8: 0x77EF,
    0x8BB9: 0x80F8,
    0x8BBA: 0x8105,
    0x8BBB: 0x8208,
    0x8BBC: 0x854E,
    0x8BBD: 0x90F7,
    0x8BBE: 0x93E1,
    0x8BBF: 0x97FF,
    0x8BC0: 0x9957,
    0x8BC1: 0x9A5A,
    0x8BC2: 0x4EF0,
    0x8BC3: 0x51DD,
    0x8BC4: 0x5C2D,
    0x8BC5: 0x6681,
    0x8BC6: 0x696D,
    0x8BC7: 0x5C40,
    0x8BC8: 0x66F2,
    0x8BC9: 0x6975,
    0x8BCA: 0x7389,
    0x8BCB: 0x6850,
    0x8BCC: 0x7C81,
    0x8BCD: 0x50C5,
    0x8BCE: 0x52E4,
    0x8BCF: 0x5747,
    0x8BD0: 0x5DFE,
    0x8BD1: 0x9326,
    0x8BD2: 0x65A4,
    0x8BD3: 0x6B23,
    0x8BD4: 0x6B3D,
    0x8BD5: 0x7434,
    0x8BD6: 0x7981,
    0x8BD7: 0x79BD,
    0x8BD8: 0x7B4B,
    0x8BD9: 0x7DCA,
    0x8BDA: 0x82B9,
    0x8BDB: 0x83CC,
    0x8BDC: 0x887F,
    0x8BDD: 0x895F,
    0x8BDE: 0x8B39,
    0x8BDF: 0x8FD1,
    0x8BE0: 0x91D1,
    0x8BE1: 0x541F,
    0x8BE2: 0x9280,
    0x8BE3: 0x4E5D,
    0x8BE4: 0x5036,
    0x8BE5: 0x53E5,
    0x8BE6: 0x533A,
    0x8BE7: 0x72D7,
    0x8BE8: 0x7396,
    0x8BE9: 0x77E9,
    0x8BEA: 0x82E6,
    0x8BEB: 0x8EAF,
    0x8BEC: 0x99C6,
    0x8BED: 0x99C8,
    0x8BEE: 0x99D2,
    0x8BEF: 0x5177,
    0x8BF0: 0x611A,
    0x8BF1: 0x865E,
    0x8BF2: 0x55B0,
    0x8BF3: 0x7A7A,
    0x8BF4: 0x5076,
    0x8BF5: 0x5BD3,
    0x8BF6: 0x9047,
    0x8BF7: 0x9685,
    0x8BF8: 0x4E32,
    0x8BF9: 0x6ADB,
    0x8BFA: 0x91E7,
    0x8BFB: 0x5C51,
    0x8BFC: 0x5C48,
    0x8C40: 0x6398,
    0x8C41: 0x7A9F,
    0x8C42: 0x6C93,
    0x8C43: 0x9774,
    0x8C44: 0x8F61,
    0x8C45: 0x7AAA,
    0x8C46: 0x718A,
    0x8C47: 0x9688,
    0x8C48: 0x7C82,
    0x8C49: 0x6817,
    0x8C4A: 0x7E70,
    0x8C4B: 0x6851,
    0x8C4C: 0x936C,
    0x8C4D: 0x52F2,
    0x8C4E: 0x541B,
    0x8C4F: 0x85AB,
    0x8C50: 0x8A13,
    0x8C51: 0x7FA4,
    0x8C52: 0x8ECD,
    0x8C53: 0x90E1,
    0x8C54: 0x5366,
    0x8C55: 0x8888,
    0x8C56: 0x7941,
    0x8C57: 0x4FC2,
    0x8C58: 0x50BE,
    0x8C59: 0x5211,
    0x8C5A: 0x5144,
    0x8C5B: 0x5553,
    0x8C5C: 0x572D,
    0x8C5D: 0x73EA,
    0x8C5E: 0x578B,
    0x8C5F: 0x5951,
    0x8C60: 0x5F62,
    0x8C61: 0x5F84,
    0x8C62: 0x6075,
    0x8C63: 0x6176,
    0x8C64: 0x6167,
    0x8C65: 0x61A9,
    0x8C66: 0x63B2,
    0x8C67: 0x643A,
    0x8C68: 0x656C,
    0x8C69: 0x666F,
    0x8C6A: 0x6842,
    0x8C6B: 0x6E13,
    0x8C6C: 0x7566,
    0x8C6D: 0x7A3D,
    0x8C6E: 0x7CFB,
    0x8C6F: 0x7D4C,
    0x8C70: 0x7D99,
    0x8C71: 0x7E4B,
    0x8C72: 0x7F6B,
    0x8C73: 0x830E,
    0x8C74: 0x834A,
    0x8C75: 0x86CD,
    0x8C76: 0x8A08,
    0x8C77: 0x8A63,
    0x8C78: 0x8B66,
    0x8C79: 0x8EFD,
    0x8C7A: 0x981A,
    0x8C7B: 0x9D8F,
    0x8C7C: 0x82B8,
    0x8C7D: 0x8FCE,
    0x8C7E: 0x9BE8,
    0x8C80: 0x5287,
    0x8C81: 0x621F,
    0x8C82: 0x6483,
    0x8C83: 0x6FC0,
    0x8C84: 0x9699,
    0x8C85: 0x6841,
    0x8C86: 0x5091,
    0x8C87: 0x6B20,
    0x8C88: 0x6C7A,
    0x8C89: 0x6F54,
    0x8C8A: 0x7A74,
    0x8C8B: 0x7D50,
    0x8C8C: 0x8840,
    0x8C8D: 0x8A23,
    0x8C8E: 0x6708,
    0x8C8F: 0x4EF6,
    0x8C90: 0x5039,
    0x8C91: 0x5026,
    0x8C92: 0x5065,
    0x8C93: 0x517C,
    0x8C94: 0x5238,
    0x8C95: 0x5263,
    0x8C96: 0x55A7,
    0x8C97: 0x570F,
    0x8C98: 0x5805,
    0x8C99: 0x5ACC,
    0x8C9A: 0x5EFA,
    0x8C9B: 0x61B2,
    0x8C9C: 0x61F8,
    0x8C9D: 0x62F3,
    0x8C9E: 0x6372,
    0x8C9F: 0x691C,
    0x8CA0: 0x6A29,
    0x8CA1: 0x727D,
    0x8CA2: 0x72AC,
    0x8CA3: 0x732E,
    0x8CA4: 0x7814,
    0x8CA5: 0x786F,
    0x8CA6: 0x7D79,
    0x8CA7: 0x770C,
    0x8CA8: 0x80A9,
    0x8CA9: 0x898B,
    0x8CAA: 0x8B19,
    0x8CAB: 0x8CE2,
    0x8CAC: 0x8ED2,
    0x8CAD: 0x9063,
    0x8CAE: 0x9375,
    0x8CAF: 0x967A,
    0x8CB0: 0x9855,
    0x8CB1: 0x9A13,
    0x8CB2: 0x9E78,
    0x8CB3: 0x5143,
    0x8CB4: 0x539F,
    0x8CB5: 0x53B3,
    0x8CB6: 0x5E7B,
    0x8CB7: 0x5F26,
    0x8CB8: 0x6E1B,
    0x8CB9: 0x6E90,
    0x8CBA: 0x7384,
    0x8CBB: 0x73FE,
    0x8CBC: 0x7D43,
    0x8CBD: 0x8237,
    0x8CBE: 0x8A00,
    0x8CBF: 0x8AFA,
    0x8CC0: 0x9650,
    0x8CC1: 0x4E4E,
    0x8CC2: 0x500B,
    0x8CC3: 0x53E4,
    0x8CC4: 0x547C,
    0x8CC5: 0x56FA,
    0x8CC6: 0x59D1,
    0x8CC7: 0x5B64,
    0x8CC8: 0x5DF1,
    0x8CC9: 0x5EAB,
    0x8CCA: 0x5F27,
    0x8CCB: 0x6238,
    0x8CCC: 0x6545,
    0x8CCD: 0x67AF,
    0x8CCE: 0x6E56,
    0x8CCF: 0x72D0,
    0x8CD0: 0x7CCA,
    0x8CD1: 0x88B4,
    0x8CD2: 0x80A1,
    0x8CD3: 0x80E1,
    0x8CD4: 0x83F0,
    0x8CD5: 0x864E,
    0x8CD6: 0x8A87,
    0x8CD7: 0x8DE8,
    0x8CD8: 0x9237,
    0x8CD9: 0x96C7,
    0x8CDA: 0x9867,
    0x8CDB: 0x9F13,
    0x8CDC: 0x4E94,
    0x8CDD: 0x4E92,
    0x8CDE: 0x4F0D,
    0x8CDF: 0x5348,
    0x8CE0: 0x5449,
    0x8CE1: 0x543E,
    0x8CE2: 0x5A2F,
    0x8CE3: 0x5F8C,
    0x8CE4: 0x5FA1,
    0x8CE5: 0x609F,
    0x8CE6: 0x68A7,
    0x8CE7: 0x6A8E,
    0x8CE8: 0x745A,
    0x8CE9: 0x7881,
    0x8CEA: 0x8A9E,
    0x8CEB: 0x8AA4,
    0x8CEC: 0x8B77,
    0x8CED: 0x9190,
    0x8CEE: 0x4E5E,
    0x8CEF: 0x9BC9,
    0x8CF0: 0x4EA4,
    0x8CF1: 0x4F7C,
    0x8CF2: 0x4FAF,
    0x8CF3: 0x5019,
    0x8CF4: 0x5016,
    0x8CF5: 0x5149,
    0x8CF6: 0x516C,
    0x8CF7: 0x529F,
    0x8CF8: 0x52B9,
    0x8CF9: 0x52FE,
    0x8CFA: 0x539A,
    0x8CFB: 0x53E3,
    0x8CFC: 0x5411,
    0x8D40: 0x540E,
    0x8D41: 0x5589,
    0x8D42: 0x5751,
    0x8D43: 0x57A2,
    0x8D44: 0x597D,
    0x8D45: 0x5B54,
    0x8D46: 0x5B5D,
    0x8D47: 0x5B8F,
    0x8D48: 0x5DE5,
    0x8D49: 0x5DE7,
    0x8D4A: 0x5DF7,
    0x8D4B: 0x5E78,
    0x8D4C: 0x5E83,
    0x8D4D: 0x5E9A,
    0x8D4E: 0x5EB7,
    0x8D4F: 0x5F18,
    0x8D50: 0x6052,
    0x8D51: 0x614C,
    0x8D52: 0x6297,
    0x8D53: 0x62D8,
    0x8D54: 0x63A7,
    0x8D55: 0x653B,
    0x8D56: 0x6602,
    0x8D57: 0x6643,
    0x8D58: 0x66F4,
    0x8D59: 0x676D,
    0x8D5A: 0x6821,
    0x8D5B: 0x6897,
    0x8D5C: 0x69CB,
    0x8D5D: 0x6C5F,
    0x8D5E: 0x6D2A,
    0x8D5F: 0x6D69,
    0x8D60: 0x6E2F,
    0x8D61: 0x6E9D,
    0x8D62: 0x7532,
    0x8D63: 0x7687,
    0x8D64: 0x786C,
    0x8D65: 0x7A3F,
    0x8D66: 0x7CE0,
    0x8D67: 0x7D05,
    0x8D68: 0x7D18,
    0x8D69: 0x7D5E,
    0x8D6A: 0x7DB1,
    0x8D6B: 0x8015,
    0x8D6C: 0x8003,
    0x8D6D: 0x80AF,
    0x8D6E: 0x80B1,
    0x8D6F: 0x8154,
    0x8D70: 0x818F,
    0x8D71: 0x822A,
    0x8D72: 0x8352,
    0x8D73: 0x884C,
    0x8D74: 0x8861,
    0x8D75: 0x8B1B,
    0x8D76: 0x8CA2,
    0x8D77: 0x8CFC,
    0x8D78: 0x90CA,
    0x8D79: 0x9175,
    0x8D7A: 0x9271,
    0x8D7B: 0x783F,
    0x8D7C: 0x92FC,
    0x8D7D: 0x95A4,
    0x8D7E: 0x964D,
    0x8D80: 0x9805,
    0x8D81: 0x9999,
    0x8D82: 0x9AD8,
    0x8D83: 0x9D3B,
    0x8D84: 0x525B,
    0x8D85: 0x52AB,
    0x8D86: 0x53F7,
    0x8D87: 0x5408,
    0x8D88: 0x58D5,
    0x8D89: 0x62F7,
    0x8D8A: 0x6FE0,
    0x8D8B: 0x8C6A,
    0x8D8C: 0x8F5F,
    0x8D8D: 0x9EB9,
    0x8D8E: 0x514B,
    0x8D8F: 0x523B,
    0x8D90: 0x544A,
    0x8D91: 0x56FD,
    0x8D92: 0x7A40,
    0x8D93: 0x9177,
    0x8D94: 0x9D60,
    0x8D95: 0x9ED2,
    0x8D96: 0x7344,
    0x8D97: 0x6F09,
    0x8D98: 0x8170,
    0x8D99: 0x7511,
    0x8D9A: 0x5FFD,
    0x8D9B: 0x60DA,
    0x8D9C: 0x9AA8,
    0x8D9D: 0x72DB,
    0x8D9E: 0x8FBC,
    0x8D9F: 0x6B64,
    0x8DA0: 0x9803,
    0x8DA1: 0x4ECA,
    0x8DA2: 0x56F0,
    0x8DA3: 0x5764,
    0x8DA4: 0x58BE,
    0x8DA5: 0x5A5A,
    0x8DA6: 0x6068,
    0x8DA7: 0x61C7,
    0x8DA8: 0x660F,
    0x8DA9: 0x6606,
    0x8DAA: 0x6839,
    0x8DAB: 0x68B1,
    0x8DAC: 0x6DF7,
    0x8DAD: 0x75D5,
    0x8DAE: 0x7D3A,
    0x8DAF: 0x826E,
    0x8DB0: 0x9B42,
    0x8DB1: 0x4E9B,
    0x8DB2: 0x4F50,
    0x8DB3: 0x53C9,
    0x8DB4: 0x5506,
    0x8DB5: 0x5D6F,
    0x8DB6: 0x5DE6,
    0x8DB7: 0x5DEE,
    0x8DB8: 0x67FB,
    0x8DB9: 0x6C99,
    0x8DBA: 0x7473,
    0x8DBB: 0x7802,
    0x8DBC: 0x8A50,
    0x8DBD: 0x9396,
    0x8DBE: 0x88DF,
    0x8DBF: 0x5750,
    0x8DC0: 0x5EA7,
    0x8DC1: 0x632B,
    0x8DC2: 0x50B5,
    0x8DC3: 0x50AC,
    0x8DC4: 0x518D,
    0x8DC5: 0x6700,
    0x8DC6: 0x54C9,
    0x8DC7: 0x585E,
    0x8DC8: 0x59BB,
    0x8DC9: 0x5BB0,
    0x8DCA: 0x5F69,
    0x8DCB: 0x624D,
    0x8DCC: 0x63A1,
    0x8DCD: 0x683D,
    0x8DCE: 0x6B73,
    0x8DCF: 0x6E08,
    0x8DD0: 0x707D,
    0x8DD1: 0x91C7,
    0x8DD2: 0x7280,
    0x8DD3: 0x7815,
    0x8DD4: 0x7826,
    0x8DD5: 0x796D,
    0x8DD6: 0x658E,
    0x8DD7: 0x7D30,
    0x8DD8: 0x83DC,
    0x8DD9: 0x88C1,
    0x8DDA: 0x8F09,
    0x8DDB: 0x969B,
    0x8DDC: 0x5264,
    0x8DDD: 0x5728,
    0x8DDE: 0x6750,
    0x8DDF: 0x7F6A,
    0x8DE0: 0x8CA1,
    0x8DE1: 0x51B4,
    0x8DE2: 0x5742,
    0x8DE3: 0x962A,
    0x8DE4: 0x583A,
    0x8DE5: 0x698A,
    0x8DE6: 0x80B4,
    0x8DE7: 0x54B2,
    0x8DE8: 0x5D0E,
    0x8DE9: 0x57FC,
    0x8DEA: 0x7895,
    0x8DEB: 0x9DFA,
    0x8DEC: 0x4F5C,
    0x8DED: 0x524A,
    0x8DEE: 0x548B,
    0x8DEF: 0x643E,
    0x8DF0: 0x6628,
    0x8DF1: 0x6714,
    0x8DF2: 0x67F5,
    0x8DF3: 0x7A84,
    0x8DF4: 0x7B56,
    0x8DF5: 0x7D22,
    0x8DF6: 0x932F,
    0x8DF7: 0x685C,
    0x8DF8: 0x9BAD,
    0x8DF9: 0x7B39,
    0x8DFA: 0x5319,
    0x8DFB: 0x518A,
    0x8DFC: 0x5237,
    0x8E40: 0x5BDF,
    0x8E41: 0x62F6,
    0x8E42: 0x64AE,
    0x8E43: 0x64E6,
    0x8E44: 0x672D,
    0x8E45: 0x6BBA,
    0x8E46: 0x85A9,
    0x8E47: 0x96D1,
    0x8E48: 0x7690,
    0x8E49: 0x9BD6,
    0x8E4A: 0x634C,
    0x8E4B: 0x9306,
    0x8E4C: 0x9BAB,
    0x8E4D: 0x76BF,
    0x8E4E: 0x6652,
    0x8E4F: 0x4E09,
    0x8E50: 0x5098,
    0x8E51: 0x53C2,
    0x8E52: 0x5C71,
    0x8E53: 0x60E8,
    0x8E54: 0x6492,
    0x8E55: 0x6563,
    0x8E56: 0x685F,
    0x8E57: 0x71E6,
    0x8E58: 0x73CA,
    0x8E59: 0x7523,
    0x8E5A: 0x7B97,
    0x8E5B: 0x7E82,
    0x8E5C: 0x8695,
    0x8E5D: 0x8B83,
    0x8E5E: 0x8CDB,
    0x8E5F: 0x9178,
    0x8E60: 0x9910,
    0x8E61: 0x65AC,
    0x8E62: 0x66AB,
    0x8E63: 0x6B8B,
    0x8E64: 0x4ED5,
    0x8E65: 0x4ED4,
    0x8E66: 0x4F3A,
    0x8E67: 0x4F7F,
    0x8E68: 0x523A,
    0x8E69: 0x53F8,
    0x8E6A: 0x53F2,
    0x8E6B: 0x55E3,
    0x8E6C: 0x56DB,
    0x8E6D: 0x58EB,
    0x8E6E: 0x59CB,
    0x8E6F: 0x59C9,
    0x8E70: 0x59FF,
    0x8E71: 0x5B50,
    0x8E72: 0x5C4D,
    0x8E73: 0x5E02,
    0x8E74: 0x5E2B,
    0x8E75: 0x5FD7,
    0x8E76: 0x601D,
    0x8E77: 0x6307,
    0x8E78: 0x652F,
    0x8E79: 0x5B5C,
    0x8E7A: 0x65AF,
    0x8E7B: 0x65BD,
    0x8E7C: 0x65E8,
    0x8E7D: 0x679D,
    0x8E7E: 0x6B62,
    0x8E80: 0x6B7B,
    0x8E81: 0x6C0F,
    0x8E82: 0x7345,
    0x8E83: 0x7949,
    0x8E84: 0x79C1,
    0x8E85: 0x7CF8,
    0x8E86: 0x7D19,
    0x8E87: 0x7D2B,
    0x8E88: 0x80A2,
    0x8E89: 0x8102,
    0x8E8A: 0x81F3,
    0x8E8B: 0x8996,
    0x8E8C: 0x8A5E,
    0x8E8D: 0x8A69,
    0x8E8E: 0x8A66,
    0x8E8F: 0x8A8C,
    0x8E90: 0x8AEE,
    0x8E91: 0x8CC7,
    0x8E92: 0x8CDC,
    0x8E93: 0x96CC,
    0x8E94: 0x98FC,
    0x8E95: 0x6B6F,
    0x8E96: 0x4E8B,
    0x8E97: 0x4F3C,
    0x8E98: 0x4F8D,
    0x8E99: 0x5150,
    0x8E9A: 0x5B57,
    0x8E9B: 0x5BFA,
    0x8E9C: 0x6148,
    0x8E9D: 0x6301,
    0x8E9E: 0x6642,
    0x8E9F: 0x6B21,
    0x8EA0: 0x6ECB,
    0x8EA1: 0x6CBB,
    0x8EA2: 0x723E,
    0x8EA3: 0x74BD,
    0x8EA4: 0x75D4,
    0x8EA5: 0x78C1,
    0x8EA6: 0x793A,
    0x8EA7: 0x800C,
    0x8EA8: 0x8033,
    0x8EA9: 0x81EA,
    0x8EAA: 0x8494,
    0x8EAB: 0x8F9E,
    0x8EAC: 0x6C50,
    0x8EAD: 0x9E7F,
    0x8EAE: 0x5F0F,
    0x8EAF: 0x8B58,
    0x8EB0: 0x9D2B,
    0x8EB1: 0x7AFA,
    0x8EB2: 0x8EF8,
    0x8EB3: 0x5B8D,
    0x8EB4: 0x96EB,
    0x8EB5: 0x4E03,
    0x8EB6: 0x53F1,
    0x8EB7: 0x57F7,
    0x8EB8: 0x5931,
    0x8EB9: 0x5AC9,
    0x8EBA: 0x5BA4,
    0x8EBB: 0x6089,
    0x8EBC: 0x6E7F,
    0x8EBD: 0x6F06,
    0x8EBE: 0x75BE,
    0x8EBF: 0x8CEA,
    0x8EC0: 0x5B9F,
    0x8EC1: 0x8500,
    0x8EC2: 0x7BE0,
    0x8EC3: 0x5072,
    0x8EC4: 0x67F4,
    0x8EC5: 0x829D,
    0x8EC6: 0x5C61,
    0x8EC7: 0x854A,
    0x8EC8: 0x7E1E,
    0x8EC9: 0x820E,
    0x8ECA: 0x5199,
    0x8ECB: 0x5C04,
    0x8ECC: 0x6368,
    0x8ECD: 0x8D66,
    0x8ECE: 0x659C,
    0x8ECF: 0x716E,
    0x8ED0: 0x793E,
    0x8ED1: 0x7D17,
    0x8ED2: 0x8005,
    0x8ED3: 0x8B1D,
    0x8ED4: 0x8ECA,
    0x8ED5: 0x906E,
    0x8ED6: 0x86C7,
    0x8ED7: 0x90AA,
    0x8ED8: 0x501F,
    0x8ED9: 0x52FA,
    0x8EDA: 0x5C3A,
    0x8EDB: 0x6753,
    0x8EDC: 0x707C,
    0x8EDD: 0x7235,
    0x8EDE: 0x914C,
    0x8EDF: 0x91C8,
    0x8EE0: 0x932B,
    0x8EE1: 0x82E5,
    0x8EE2: 0x5BC2,
    0x8EE3: 0x5F31,
    0x8EE4: 0x60F9,
    0x8EE5: 0x4E3B,
    0x8EE6: 0x53D6,
    0x8EE7: 0x5B88,
    0x8EE8: 0x624B,
    0x8EE9: 0x6731,
    0x8EEA: 0x6B8A,
    0x8EEB: 0x72E9,
    0x8EEC: 0x73E0,
    0x8EED: 0x7A2E,
    0x8EEE: 0x816B,
    0x8EEF: 0x8DA3,
    0x8EF0: 0x9152,
    0x8EF1: 0x9996,
    0x8EF2: 0x5112,
    0x8EF3: 0x53D7,
    0x8EF4: 0x546A,
    0x8EF5: 0x5BFF,
    0x8EF6: 0x6388,
    0x8EF7: 0x6A39,
    0x8EF8: 0x7DAC,
    0x8EF9: 0x9700,
    0x8EFA: 0x56DA,
    0x8EFB: 0x53CE,
    0x8EFC: 0x5468,
    0x8F40: 0x5B97,
    0x8F41: 0x5C31,
    0x8F42: 0x5DDE,
    0x8F43: 0x4FEE,
    0x8F44: 0x6101,
    0x8F45: 0x62FE,
    0x8F46: 0x6D32,
    0x8F47: 0x79C0,
    0x8F48: 0x79CB,
    0x8F49: 0x7D42,
    0x8F4A: 0x7E4D,
    0x8F4B: 0x7FD2,
    0x8F4C: 0x81ED,
    0x8F4D: 0x821F,
    0x8F4E: 0x8490,
    0x8F4F: 0x8846,
    0x8F50: 0x8972,
    0x8F51: 0x8B90,
    0x8F52: 0x8E74,
    0x8F53: 0x8F2F,
    0x8F54: 0x9031,
    0x8F55: 0x914B,
    0x8F56: 0x916C,
    0x8F57: 0x96C6,
    0x8F58: 0x919C,
    0x8F59: 0x4EC0,
    0x8F5A: 0x4F4F,
    0x8F5B: 0x5145,
    0x8F5C: 0x5341,
    0x8F5D: 0x5F93,
    0x8F5E: 0x620E,
    0x8F5F: 0x67D4,
    0x8F60: 0x6C41,
    0x8F61: 0x6E0B,
    0x8F62: 0x7363,
    0x8F63: 0x7E26,
    0x8F64: 0x91CD,
    0x8F65: 0x9283,
    0x8F66: 0x53D4,
    0x8F67: 0x5919,
    0x8F68: 0x5BBF,
    0x8F69: 0x6DD1,
    0x8F6A: 0x795D,
    0x8F6B: 0x7E2E,
    0x8F6C: 0x7C9B,
    0x8F6D: 0x587E,
    0x8F6E: 0x719F,
    0x8F6F: 0x51FA,
    0x8F70: 0x8853,
    0x8F71: 0x8FF0,
    0x8F72: 0x4FCA,
    0x8F73: 0x5CFB,
    0x8F74: 0x6625,
    0x8F75: 0x77AC,
    0x8F76: 0x7AE3,
    0x8F77: 0x821C,
    0x8F78: 0x99FF,
    0x8F79: 0x51C6,
    0x8F7A: 0x5FAA,
    0x8F7B: 0x65EC,
    0x8F7C: 0x696F,
    0x8F7D: 0x6B89,
    0x8F7E: 0x6DF3,
    0x8F80: 0x6E96,
    0x8F81: 0x6F64,
    0x8F82: 0x76FE,
    0x8F83: 0x7D14,
    0x8F84: 0x5DE1,
    0x8F85: 0x9075,
    0x8F86: 0x9187,
    0x8F87: 0x9806,
    0x8F88: 0x51E6,
    0x8F89: 0x521D,
    0x8F8A: 0x6240,
    0x8F8B: 0x6691,
    0x8F8C: 0x66D9,
    0x8F8D: 0x6E1A,
    0x8F8E: 0x5EB6,
    0x8F8F: 0x7DD2,
    0x8F90: 0x7F72,
    0x8F91: 0x66F8,
    0x8F92: 0x85AF,
    0x8F93: 0x85F7,
    0x8F94: 0x8AF8,
    0x8F95: 0x52A9,
    0x8F96: 0x53D9,
    0x8F97: 0x5973,
    0x8F98: 0x5E8F,
    0x8F99: 0x5F90,
    0x8F9A: 0x6055,
    0x8F9B: 0x92E4,
    0x8F9C: 0x9664,
    0x8F9D: 0x50B7,
    0x8F9E: 0x511F,
    0x8F9F: 0x52DD,
    0x8FA0: 0x5320,
    0x8FA1: 0x5347,
    0x8FA2: 0x53EC,
    0x8FA3: 0x54E8,
    0x8FA4: 0x5546,
    0x8FA5: 0x5531,
    0x8FA6: 0x5617,
    0x8FA7: 0x5968,
    0x8FA8: 0x59BE,
    0x8FA9: 0x5A3C,
    0x8FAA: 0x5BB5,
    0x8FAB: 0x5C06,
    0x8FAC: 0x5C0F,
    0x8FAD: 0x5C11,
    0x8FAE: 0x5C1A,
    0x8FAF: 0x5E84,
    0x8FB0: 0x5E8A,
    0x8FB1: 0x5EE0,
    0x8FB2: 0x5F70,
    0x8FB3: 0x627F,
    0x8FB4: 0x6284,
    0x8FB5: 0x62DB,
    0x8FB6: 0x638C,
    0x8FB7: 0x6377,
    0x8FB8: 0x6607,
    0x8FB9: 0x660C,
    0x8FBA: 0x662D,
    0x8FBB: 0x6676,
    0x8FBC: 0x677E,
    0x8FBD: 0x68A2,
    0x8FBE: 0x6A1F,
    0x8FBF: 0x6A35,
    0x8FC0: 0x6CBC,
    0x8FC1: 0x6D88,
    0x8FC2: 0x6E09,
    0x8FC3: 0x6E58,
    0x8FC4: 0x713C,
    0x8FC5: 0x7126,
    0x8FC6: 0x7167,
    0x8FC7: 0x75C7,
    0x8FC8: 0x7701,
    0x8FC9: 0x785D,
    0x8FCA: 0x7901,
    0x8FCB: 0x7965,
    0x8FCC: 0x79F0,
    0x8FCD: 0x7AE0,
    0x8FCE: 0x7B11,
    0x8FCF: 0x7CA7,
    0x8FD0: 0x7D39,
    0x8FD1: 0x8096,
    0x8FD2: 0x83D6,
    0x8FD3: 0x848B,
    0x8FD4: 0x8549,
    0x8FD5: 0x885D,
    0x8FD6: 0x88F3,
    0x8FD7: 0x8A1F,
    0x8FD8: 0x8A3C,
    0x8FD9: 0x8A54,
    0x8FDA: 0x8A73,
    0x8FDB: 0x8C61,
    0x8FDC: 0x8CDE,
    0x8FDD: 0x91A4,
    0x8FDE: 0x9266,
    0x8FDF: 0x937E,
    0x8FE0: 0x9418,
    0x8FE1: 0x969C,
    0x8FE2: 0x9798,
    0x8FE3: 0x4E0A,
    0x8FE4: 0x4E08,
    0x8FE5: 0x4E1E,
    0x8FE6: 0x4E57,
    0x8FE7: 0x5197,
    0x8FE8: 0x5270,
    0x8FE9: 0x57CE,
    0x8FEA: 0x5834,
    0x8FEB: 0x58CC,
    0x8FEC: 0x5B22,
    0x8FED: 0x5E38,
    0x8FEE: 0x60C5,
    0x8FEF: 0x64FE,
    0x8FF0: 0x6761,
    0x8FF1: 0x6756,
    0x8FF2: 0x6D44,
    0x8FF3: 0x72B6,
    0x8FF4: 0x7573,
    0x8FF5: 0x7A63,
    0x8FF6: 0x84B8,
    0x8FF7: 0x8B72,
    0x8FF8: 0x91B8,
    0x8FF9: 0x9320,
    0x8FFA: 0x5631,
    0x8FFB: 0x57F4,
    0x8FFC: 0x98FE,
    0x9040: 0x62ED,
    0x9041: 0x690D,
    0x9042: 0x6B96,
    0x9043: 0x71ED,
    0x9044: 0x7E54,
    0x9045: 0x8077,
    0x9046: 0x8272,
    0x9047: 0x89E6,
    0x9048: 0x98DF,
    0x9049: 0x8755,
    0x904A: 0x8FB1,
    0x904B: 0x5C3B,
    0x904C: 0x4F38,
    0x904D: 0x4FE1,
    0x904E: 0x4FB5,
    0x904F: 0x5507,
    0x9050: 0x5A20,
    0x9051: 0x5BDD,
    0x9052: 0x5BE9,
    0x9053: 0x5FC3,
    0x9054: 0x614E,
    0x9055: 0x632F,
    0x9056: 0x65B0,
    0x9057: 0x664B,
    0x9058: 0x68EE,
    0x9059: 0x699B,
    0x905A: 0x6D78,
    0x905B: 0x6DF1,
    0x905C: 0x7533,
    0x905D: 0x75B9,
    0x905E: 0x771F,
    0x905F: 0x795E,
    0x9060: 0x79E6,
    0x9061: 0x7D33,
    0x9062: 0x81E3,
    0x9063: 0x82AF,
    0x9064: 0x85AA,
    0x9065: 0x89AA,
    0x9066: 0x8A3A,
    0x9067: 0x8EAB,
    0x9068: 0x8F9B,
    0x9069: 0x9032,
    0x906A: 0x91DD,
    0x906B: 0x9707,
    0x906C: 0x4EBA,
    0x906D: 0x4EC1,
    0x906E: 0x5203,
    0x906F: 0x5875,
    0x9070: 0x58EC,
    0x9071: 0x5C0B,
    0x9072: 0x751A,
    0x9073: 0x5C3D,
    0x9074: 0x814E,
    0x9075: 0x8A0A,
    0x9076: 0x8FC5,
    0x9077: 0x9663,
    0x9078: 0x976D,
    0x9079: 0x7B25,
    0x907A: 0x8ACF,
    0x907B: 0x9808,
    0x907C: 0x9162,
    0x907D: 0x56F3,
    0x907E: 0x53A8,
    0x9080: 0x9017,
    0x9081: 0x5439,
    0x9082: 0x5782,
    0x9083: 0x5E25,
    0x9084: 0x63A8,
    0x9085: 0x6C34,
    0x9086: 0x708A,
    0x9087: 0x7761,
    0x9088: 0x7C8B,
    0x9089: 0x7FE0,
    0x908A: 0x8870,
    0x908B: 0x9042,
    0x908C: 0x9154,
    0x908D: 0x9310,
    0x908E: 0x9318,
    0x908F: 0x968F,
    0x9090: 0x745E,
    0x9091: 0x9AC4,
    0x9092: 0x5D07,
    0x9093: 0x5D69,
    0x9094: 0x6570,
    0x9095: 0x67A2,
    0x9096: 0x8DA8,
    0x9097: 0x96DB,
    0x9098: 0x636E,
    0x9099: 0x6749,
    0x909A: 0x6919,
    0x909B: 0x83C5,
    0x909C: 0x9817,
    0x909D: 0x96C0,
    0x909E: 0x88FE,
    0x909F: 0x6F84,
    0x90A0: 0x647A,
    0x90A1: 0x5BF8,
    0x90A2: 0x4E16,
    0x90A3: 0x702C,
    0x90A4: 0x755D,
    0x90A5: 0x662F,
    0x90A6: 0x51C4,
    0x90A7: 0x5236,
    0x90A8: 0x52E2,
    0x90A9: 0x59D3,
    0x90AA: 0x5F81,
    0x90AB: 0x6027,
    0x90AC: 0x6210,
    0x90AD: 0x653F,
    0x90AE: 0x6574,
    0x90AF: 0x661F,
    0x90B0: 0x6674,
    0x90B1: 0x68F2,
    0x90B2: 0x6816,
    0x90B3: 0x6B63,
    0x90B4: 0x6E05,
    0x90B5: 0x7272,
    0x90B6: 0x751F,
    0x90B7: 0x76DB,
    0x90B8: 0x7CBE,
    0x90B9: 0x8056,
    0x90BA: 0x58F0,
    0x90BB: 0x88FD,
    0x90BC: 0x897F,
    0x90BD: 0x8AA0,
    0x90BE: 0x8A93,
    0x90BF: 0x8ACB,
    0x90C0: 0x901D,
    0x90C1: 0x9192,
    0x90C2: 0x9752,
    0x90C3: 0x9759,
    0x90C4: 0x6589,
    0x90C5: 0x7A0E,
    0x90C6: 0x8106,
    0x90C7: 0x96BB,
    0x90C8: 0x5E2D,
    0x90C9: 0x60DC,
    0x90CA: 0x621A,
    0x90CB: 0x65A5,
    0x90CC: 0x6614,
    0x90CD: 0x6790,
    0x90CE: 0x77F3,
    0x90CF: 0x7A4D,
    0x90D0: 0x7C4D,
    0x90D1: 0x7E3E,
    0x90D2: 0x810A,
    0x90D3: 0x8CAC,
    0x90D4: 0x8D64,
    0x90D5: 0x8DE1,
    0x90D6: 0x8E5F,
    0x90D7: 0x78A9,
    0x90D8: 0x5207,
    0x90D9: 0x62D9,
    0x90DA: 0x63A5,
    0x90DB: 0x6442,
    0x90DC: 0x6298,
    0x90DD: 0x8A2D,
    0x90DE: 0x7A83,
    0x90DF: 0x7BC0,
    0x90E0: 0x8AAC,
    0x90E1: 0x96EA,
    0x90E2: 0x7D76,
    0x90E3: 0x820C,
    0x90E4: 0x8749,
    0x90E5: 0x4ED9,
    0x90E6: 0x5148,
    0x90E7: 0x5343,
    0x90E8: 0x5360,
    0x90E9: 0x5BA3,
    0x90EA: 0x5C02,
    0x90EB: 0x5C16,
    0x90EC: 0x5DDD,
    0x90ED: 0x6226,
    0x90EE: 0x6247,
    0x90EF: 0x64B0,
    0x90F0: 0x6813,
    0x90F1: 0x6834,
    0x90F2: 0x6CC9,
    0x90F3: 0x6D45,
    0x90F4: 0x6D17,
    0x90F5: 0x67D3,
    0x90F6: 0x6F5C,
    0x90F7: 0x714E,
    0x90F8: 0x717D,
    0x90F9: 0x65CB,
    0x90FA: 0x7A7F,
    0x90FB: 0x7BAD,
    0x90FC: 0x7DDA,
    0x9140: 0x7E4A,
    0x9141: 0x7FA8,
    0x9142: 0x817A,
    0x9143: 0x821B,
    0x9144: 0x8239,
    0x9145: 0x85A6,
    0x9146: 0x8A6E,
    0x9147: 0x8CCE,
    0x9148: 0x8DF5,
    0x9149: 0x9078,
    0x914A: 0x9077,
    0x914B: 0x92AD,
    0x914C: 0x9291,
    0x914D: 0x9583,
    0x914E: 0x9BAE,
    0x914F: 0x524D,
    0x9150: 0x5584,
    0x9151: 0x6F38,
    0x9152: 0x7136,
    0x9153: 0x5168,
    0x9154: 0x7985,
    0x9155: 0x7E55,
    0x9156: 0x81B3,
    0x9157: 0x7CCE,
    0x9158: 0x564C,
    0x9159: 0x5851,
    0x915A: 0x5CA8,
    0x915B: 0x63AA,
    0x915C: 0x66FE,
    0x915D: 0x66FD,
    0x915E: 0x695A,
    0x915F: 0x72D9,
    0x9160: 0x758F,
    0x9161: 0x758E,
    0x9162: 0x790E,
    0x9163: 0x7956,
    0x9164: 0x79DF,
    0x9165: 0x7C97,
    0x9166: 0x7D20,
    0x9167: 0x7D44,
    0x9168: 0x8607,
    0x9169: 0x8A34,
    0x916A: 0x963B,
    0x916B: 0x9061,
    0x916C: 0x9F20,
    0x916D: 0x50E7,
    0x916E: 0x5275,
    0x916F: 0x53CC,
    0x9170: 0x53E2,
    0x9171: 0x5009,
    0x9172: 0x55AA,
    0x9173: 0x58EE,
    0x9174: 0x594F,
    0x9175: 0x723D,
    0x9176: 0x5B8B,
    0x9177: 0x5C64,
    0x9178: 0x531D,
    0x9179: 0x60E3,
    0x917A: 0x60F3,
    0x917B: 0x635C,
    0x917C: 0x6383,
    0x917D: 0x633F,
    0x917E: 0x63BB,
    0x9180: 0x64CD,
    0x9181: 0x65E9,
    0x9182: 0x66F9,
    0x9183: 0x5DE3,
    0x9184: 0x69CD,
    0x9185: 0x69FD,
    0x9186: 0x6F15,
    0x9187: 0x71E5,
    0x9188: 0x4E89,
    0x9189: 0x75E9,
    0x918A: 0x76F8,
    0x918B: 0x7A93,
    0x918C: 0x7CDF,
    0x918D: 0x7DCF,
    0x918E: 0x7D9C,
    0x918F: 0x8061,
    0x9190: 0x8349,
    0x9191: 0x8358,
    0x9192: 0x846C,
    0x9193: 0x84BC,
    0x9194: 0x85FB,
    0x9195: 0x88C5,
    0x9196: 0x8D70,
    0x9197: 0x9001,
    0x9198: 0x906D,
    0x9199: 0x9397,
    0x919A: 0x971C,
    0x919B: 0x9A12,
    0x919C: 0x50CF,
    0x919D: 0x5897,
    0x919E: 0x618E,
    0x919F: 0x81D3,
    0x91A0: 0x8535,
    0x91A1: 0x8D08,
    0x91A2: 0x9020,
    0x91A3: 0x4FC3,
    0x91A4: 0x5074,
    0x91A5: 0x5247,
    0x91A6: 0x5373,
    0x91A7: 0x606F,
    0x91A8: 0x6349,
    0x91A9: 0x675F,
    0x91AA: 0x6E2C,
    0x91AB: 0x8DB3,
    0x91AC: 0x901F,
    0x91AD: 0x4FD7,
    0x91AE: 0x5C5E,
    0x91AF: 0x8CCA,
    0x91B0: 0x65CF,
    0x91B1: 0x7D9A,
    0x91B2: 0x5352,
    0x91B3: 0x8896,
    0x91B4: 0x5176,
    0x91B5: 0x63C3,
    0x91B6: 0x5B58,
    0x91B7: 0x5B6B,
    0x91B8: 0x5C0A,
    0x91B9: 0x640D,
    0x91BA: 0x6751,
    0x91BB: 0x905C,
    0x91BC: 0x4ED6,
    0x91BD: 0x591A,
    0x91BE: 0x592A,
    0x91BF: 0x6C70,
    0x91C0: 0x8A51,
    0x91C1: 0x553E,
    0x91C2: 0x5815,
    0x91C3: 0x59A5,
    0x91C4: 0x60F0,
    0x91C5: 0x6253,
    0x91C6: 0x67C1,
    0x91C7: 0x8235,
    0x91C8: 0x6955,
    0x91C9: 0x9640,
    0x91CA: 0x99C4,
    0x91CB: 0x9A28,
    0x91CC: 0x4F53,
    0x91CD: 0x5806,
    0x91CE: 0x5BFE,
    0x91CF: 0x8010,
    0x91D0: 0x5CB1,
    0x91D1: 0x5E2F,
    0x91D2: 0x5F85,
    0x91D3: 0x6020,
    0x91D4: 0x614B,
    0x91D5: 0x6234,
    0x91D6: 0x66FF,
    0x91D7: 0x6CF0,
    0x91D8: 0x6EDE,
    0x91D9: 0x80CE,
    0x91DA: 0x817F,
    0x91DB: 0x82D4,
    0x91DC: 0x888B,
    0x91DD: 0x8CB8,
    0x91DE: 0x9000,
    0x91DF: 0x902E,
    0x91E0: 0x968A,
    0x91E1: 0x9EDB,
    0x91E2: 0x9BDB,
    0x91E3: 0x4EE3,
    0x91E4: 0x53F0,
    0x91E5: 0x5927,
    0x91E6: 0x7B2C,
    0x91E7: 0x918D,
    0x91E8: 0x984C,
    0x91E9: 0x9DF9,
    0x91EA: 0x6EDD,
    0x91EB: 0x7027,
    0x91EC: 0x5353,
    0x91ED: 0x5544,
    0x91EE: 0x5B85,
    0x91EF: 0x6258,
    0x91F0: 0x629E,
    0x91F1: 0x62D3,
    0x91F2: 0x6CA2,
    0x91F3: 0x6FEF,
    0x91F4: 0x7422,
    0x91F5: 0x8A17,
    0x91F6: 0x9438,
    0x91F7: 0x6FC1,
    0x91F8: 0x8AFE,
    0x91F9: 0x8338,
    0x91FA: 0x51E7,
    0x91FB: 0x86F8,
    0x91FC: 0x53EA,
    0x9240: 0x53E9,
    0x9241: 0x4F46,
    0x9242: 0x9054,
    0x9243: 0x8FB0,
    0x9244: 0x596A,
    0x9245: 0x8131,
    0x9246: 0x5DFD,
    0x9247: 0x7AEA,
    0x9248: 0x8FBF,
    0x9249: 0x68DA,
    0x924A: 0x8C37,
    0x924B: 0x72F8,
    0x924C: 0x9C48,
    0x924D: 0x6A3D,
    0x924E: 0x8AB0,
    0x924F: 0x4E39,
    0x9250: 0x5358,
    0x9251: 0x5606,
    0x9252: 0x5766,
    0x9253: 0x62C5,
    0x9254: 0x63A2,
    0x9255: 0x65E6,
    0x9256: 0x6B4E,
    0x9257: 0x6DE1,
    0x9258: 0x6E5B,
    0x9259: 0x70AD,
    0x925A: 0x77ED,
    0x925B: 0x7AEF,
    0x925C: 0x7BAA,
    0x925D: 0x7DBB,
    0x925E: 0x803D,
    0x925F: 0x80C6,
    0x9260: 0x86CB,
    0x9261: 0x8A95,
    0x9262: 0x935B,
    0x9263: 0x56E3,
    0x9264: 0x58C7,
    0x9265: 0x5F3E,
    0x9266: 0x65AD,
    0x9267: 0x6696,
    0x9268: 0x6A80,
    0x9269: 0x6BB5,
    0x926A: 0x7537,
    0x926B: 0x8AC7,
    0x926C: 0x5024,
    0x926D: 0x77E5,
    0x926E: 0x5730,
    0x926F: 0x5F1B,
    0x9270: 0x6065,
    0x9271: 0x667A,
    0x9272: 0x6C60,
    0x9273: 0x75F4,
    0x9274: 0x7A1A,
    0x9275: 0x7F6E,
    0x9276: 0x81F4,
    0x9277: 0x8718,
    0x9278: 0x9045,
    0x9279: 0x99B3,
    0x927A: 0x7BC9,
    0x927B: 0x755C,
    0x927C: 0x7AF9,
    0x927D: 0x7B51,
    0x927E: 0x84C4,
    0x9280: 0x9010,
    0x9281: 0x79E9,
    0x9282: 0x7A92,
    0x9283: 0x8336,
    0x9284: 0x5AE1,
    0x9285: 0x7740,
    0x9286: 0x4E2D,
    0x9287: 0x4EF2,
    0x9288: 0x5B99,
    0x9289: 0x5FE0,
    0x928A: 0x62BD,
    0x928B: 0x663C,
    0x928C: 0x67F1,
    0x928D: 0x6CE8,
    0x928E: 0x866B,
    0x928F: 0x8877,
    0x9290: 0x8A3B,
    0x9291: 0x914E,
    0x9292: 0x92F3,
    0x9293: 0x99D0,
    0x9294: 0x6A17,
    0x9295: 0x7026,
    0x9296: 0x732A,
    0x9297: 0x82E7,
    0x9298: 0x8457,
    0x9299: 0x8CAF,
    0x929A: 0x4E01,
    0x929B: 0x5146,
    0x929C: 0x51CB,
    0x929D: 0x558B,
    0x929E: 0x5BF5,
    0x929F: 0x5E16,
    0x92A0: 0x5E33,
    0x92A1: 0x5E81,
    0x92A2: 0x5F14,
    0x92A3: 0x5F35,
    0x92A4: 0x5F6B,
    0x92A5: 0x5FB4,
    0x92A6: 0x61F2,
    0x92A7: 0x6311,
    0x92A8: 0x66A2,
    0x92A9: 0x671D,
    0x92AA: 0x6F6E,
    0x92AB: 0x7252,
    0x92AC: 0x753A,
    0x92AD: 0x773A,
    0x92AE: 0x8074,
    0x92AF: 0x8139,
    0x92B0: 0x8178,
    0x92B1: 0x8776,
    0x92B2: 0x8ABF,
    0x92B3: 0x8ADC,
    0x92B4: 0x8D85,
    0x92B5: 0x8DF3,
    0x92B6: 0x929A,
    0x92B7: 0x9577,
    0x92B8: 0x9802,
    0x92B9: 0x9CE5,
    0x92BA: 0x52C5,
    0x92BB: 0x6357,
    0x92BC: 0x76F4,
    0x92BD: 0x6715,
    0x92BE: 0x6C88,
    0x92BF: 0x73CD,
    0x92C0: 0x8CC3,
    0x92C1: 0x93AE,
    0x92C2: 0x9673,
    0x92C3: 0x6D25,
    0x92C4: 0x589C,
    0x92C5: 0x690E,
    0x92C6: 0x69CC,
    0x92C7: 0x8FFD,
    0x92C8: 0x939A,
    0x92C9: 0x75DB,
    0x92CA: 0x901A,
    0x92CB: 0x585A,
    0x92CC: 0x6802,
    0x92CD: 0x63B4,
    0x92CE: 0x69FB,
    0x92CF: 0x4F43,
    0x92D0: 0x6F2C,
    0x92D1: 0x67D8,
    0x92D2: 0x8FBB,
    0x92D3: 0x8526,
    0x92D4: 0x7DB4,
    0x92D5: 0x9354,
    0x92D6: 0x693F,
    0x92D7: 0x6F70,
    0x92D8: 0x576A,
    0x92D9: 0x58F7,
    0x92DA: 0x5B2C,
    0x92DB: 0x7D2C,
    0x92DC: 0x722A,
    0x92DD: 0x540A,
    0x92DE: 0x91E3,
    0x92DF: 0x9DB4,
    0x92E0: 0x4EAD,
    0x92E1: 0x4F4E,
    0x92E2: 0x505C,
    0x92E3: 0x5075,
    0x92E4: 0x5243,
    0x92E5: 0x8C9E,
    0x92E6: 0x5448,
    0x92E7: 0x5824,
    0x92E8: 0x5B9A,
    0x92E9: 0x5E1D,
    0x92EA: 0x5E95,
    0x92EB: 0x5EAD,
    0x92EC: 0x5EF7,
    0x92ED: 0x5F1F,
    0x92EE: 0x608C,
    0x92EF: 0x62B5,
    0x92F0: 0x633A,
    0x92F1: 0x63D0,
    0x92F2: 0x68AF,
    0x92F3: 0x6C40,
    0x92F4: 0x7887,
    0x92F5: 0x798E,
    0x92F6: 0x7A0B,
    0x92F7: 0x7DE0,
    0x92F8: 0x8247,
    0x92F9: 0x8A02,
    0x92FA: 0x8AE6,
    0x92FB: 0x8E44,
    0x92FC: 0x9013,
    0x9340: 0x90B8,
    0x9341: 0x912D,
    0x9342: 0x91D8,
    0x9343: 0x9F0E,
    0x9344: 0x6CE5,
    0x9345: 0x6458,
    0x9346: 0x64E2,
    0x9347: 0x6575,
    0x9348: 0x6EF4,
    0x9349: 0x7684,
    0x934A: 0x7B1B,
    0x934B: 0x9069,
    0x934C: 0x93D1,
    0x934D: 0x6EBA,
    0x934E: 0x54F2,
    0x934F: 0x5FB9,
    0x9350: 0x64A4,
    0x9351: 0x8F4D,
    0x9352: 0x8FED,
    0x9353: 0x9244,
    0x9354: 0x5178,
    0x9355: 0x586B,
    0x9356: 0x5929,
    0x9357: 0x5C55,
    0x9358: 0x5E97,
    0x9359: 0x6DFB,
    0x935A: 0x7E8F,
    0x935B: 0x751C,
    0x935C: 0x8CBC,
    0x935D: 0x8EE2,
    0x935E: 0x985B,
    0x935F: 0x70B9,
    0x9360: 0x4F1D,
    0x9361: 0x6BBF,
    0x9362: 0x6FB1,
    0x9363: 0x7530,
    0x9364: 0x96FB,
    0x9365: 0x514E,
    0x9366: 0x5410,
    0x9367: 0x5835,
    0x9368: 0x5857,
    0x9369: 0x59AC,
    0x936A: 0x5C60,
    0x936B: 0x5F92,
    0x936C: 0x6597,
    0x936D: 0x675C,
    0x936E: 0x6E21,
    0x936F: 0x767B,
    0x9370: 0x83DF,
    0x9371: 0x8CED,
    0x9372: 0x9014,
    0x9373: 0x90FD,
    0x9374: 0x934D,
    0x9375: 0x7825,
    0x9376: 0x783A,
    0x9377: 0x52AA,
    0x9378: 0x5EA6,
    0x9379: 0x571F,
    0x937A: 0x5974,
    0x937B: 0x6012,
    0x937C: 0x5012,
    0x937D: 0x515A,
    0x937E: 0x51AC,
    0x9380: 0x51CD,
    0x9381: 0x5200,
    0x9382: 0x5510,
    0x9383: 0x5854,
    0x9384: 0x5858,
    0x9385: 0x5957,
    0x9386: 0x5B95,
    0x9387: 0x5CF6,
    0x9388: 0x5D8B,
    0x9389: 0x60BC,
    0x938A: 0x6295,
    0x938B: 0x642D,
    0x938C: 0x6771,
    0x938D: 0x6843,
    0x938E: 0x68BC,
    0x938F: 0x68DF,
    0x9390: 0x76D7,
    0x9391: 0x6DD8,
    0x9392: 0x6E6F,
    0x9393: 0x6D9B,
    0x9394: 0x706F,
    0x9395: 0x71C8,
    0x9396: 0x5F53,
    0x9397: 0x75D8,
    0x9398: 0x7977,
    0x9399: 0x7B49,
    0x939A: 0x7B54,
    0x939B: 0x7B52,
    0x939C: 0x7CD6,
    0x939D: 0x7D71,
    0x939E: 0x5230,
    0x939F: 0x8463,
    0x93A0: 0x8569,
    0x93A1: 0x85E4,
    0x93A2: 0x8A0E,
    0x93A3: 0x8B04,
    0x93A4: 0x8C46,
    0x93A5: 0x8E0F,
    0x93A6: 0x9003,
    0x93A7: 0x900F,
    0x93A8: 0x9419,
    0x93A9: 0x9676,
    0x93AA: 0x982D,
    0x93AB: 0x9A30,
    0x93AC: 0x95D8,
    0x93AD: 0x50CD,
    0x93AE: 0x52D5,
    0x93AF: 0x540C,
    0x93B0: 0x5802,
    0x93B1: 0x5C0E,
    0x93B2: 0x61A7,
    0x93B3: 0x649E,
    0x93B4: 0x6D1E,
    0x93B5: 0x77B3,
    0x93B6: 0x7AE5,
    0x93B7: 0x80F4,
    0x93B8: 0x8404,
    0x93B9: 0x9053,
    0x93BA: 0x9285,
    0x93BB: 0x5CE0,
    0x93BC: 0x9D07,
    0x93BD: 0x533F,
    0x93BE: 0x5F97,
    0x93BF: 0x5FB3,
    0x93C0: 0x6D9C,
    0x93C1: 0x7279,
    0x93C2: 0x7763,
    0x93C3: 0x79BF,
    0x93C4: 0x7BE4,
    0x93C5: 0x6BD2,
    0x93C6: 0x72EC,
    0x93C7: 0x8AAD,
    0x93C8: 0x6803,
    0x93C9: 0x6A61,
    0x93CA: 0x51F8,
    0x93CB: 0x7A81,
    0x93CC: 0x6934,
    0x93CD: 0x5C4A,
    0x93CE: 0x9CF6,
    0x93CF: 0x82EB,
    0x93D0: 0x5BC5,
    0x93D1: 0x9149,
    0x93D2: 0x701E,
    0x93D3: 0x5678,
    0x93D4: 0x5C6F,
    0x93D5: 0x60C7,
    0x93D6: 0x6566,
    0x93D7: 0x6C8C,
    0x93D8: 0x8C5A,
    0x93D9: 0x9041,
    0x93DA: 0x9813,
    0x93DB: 0x5451,
    0x93DC: 0x66C7,
    0x93DD: 0x920D,
    0x93DE: 0x5948,
    0x93DF: 0x90A3,
    0x93E0: 0x5185,
    0x93E1: 0x4E4D,
    0x93E2: 0x51EA,
    0x93E3: 0x8599,
    0x93E4: 0x8B0E,
    0x93E5: 0x7058,
    0x93E6: 0x637A,
    0x93E7: 0x934B,
    0x93E8: 0x6962,
    0x93E9: 0x99B4,
    0x93EA: 0x7E04,
    0x93EB: 0x7577,
    0x93EC: 0x5357,
    0x93ED: 0x6960,
    0x93EE: 0x8EDF,
    0x93EF: 0x96E3,
    0x93F0: 0x6C5D,
    0x93F1: 0x4E8C,
    0x93F2: 0x5C3C,
    0x93F3: 0x5F10,
    0x93F4: 0x8FE9,
    0x93F5: 0x5302,
    0x93F6: 0x8CD1,
    0x93F7: 0x8089,
    0x93F8: 0x8679,
    0x93F9: 0x5EFF,
    0x93FA: 0x65E5,
    0x93FB: 0x4E73,
    0x93FC: 0x5165,
    0x9440: 0x5982,
    0x9441: 0x5C3F,
    0x9442: 0x97EE,
    0x9443: 0x4EFB,
    0x9444: 0x598A,
    0x9445: 0x5FCD,
    0x9446: 0x8A8D,
    0x9447: 0x6FE1,
    0x9448: 0x79B0,
    0x9449: 0x7962,
    0x944A: 0x5BE7,
    0x944B: 0x8471,
    0x944C: 0x732B,
    0x944D: 0x71B1,
    0x944E: 0x5E74,
    0x944F: 0x5FF5,
    0x9450: 0x637B,
    0x9451: 0x649A,
    0x9452: 0x71C3,
    0x9453: 0x7C98,
    0x9454: 0x4E43,
    0x9455: 0x5EFC,
    0x9456: 0x4E4B,
    0x9457: 0x57DC,
    0x9458: 0x56A2,
    0x9459: 0x60A9,
    0x945A: 0x6FC3,
    0x945B: 0x7D0D,
    0x945C: 0x80FD,
    0x945D: 0x8133,
    0x945E: 0x81BF,
    0x945F: 0x8FB2,
    0x9460: 0x8997,
    0x9461: 0x86A4,
    0x9462: 0x5DF4,
    0x9463: 0x628A,
    0x9464: 0x64AD,
    0x9465: 0x8987,
    0x9466: 0x6777,
    0x9467: 0x6CE2,
    0x9468: 0x6D3E,
    0x9469: 0x7436,
    0x946A: 0x7834,
    0x946B: 0x5A46,
    0x946C: 0x7F75,
    0x946D: 0x82AD,
    0x946E: 0x99AC,
    0x946F: 0x4FF3,
    0x9470: 0x5EC3,
    0x9471: 0x62DD,
    0x9472: 0x6392,
    0x9473: 0x6557,
    0x9474: 0x676F,
    0x9475: 0x76C3,
    0x9476: 0x724C,
    0x9477: 0x80CC,
    0x9478: 0x80BA,
    0x9479: 0x8F29,
    0x947A: 0x914D,
    0x947B: 0x500D,
    0x947C: 0x57F9,
    0x947D: 0x5A92,
    0x947E: 0x6885,
    0x9480: 0x6973,
    0x9481: 0x7164,
    0x9482: 0x72FD,
    0x9483: 0x8CB7,
    0x9484: 0x58F2,
    0x9485: 0x8CE0,
    0x9486: 0x966A,
    0x9487: 0x9019,
    0x9488: 0x877F,
    0x9489: 0x79E4,
    0x948A: 0x77E7,
    0x948B: 0x8429,
    0x948C: 0x4F2F,
    0x948D: 0x5265,
    0x948E: 0x535A,
    0x948F: 0x62CD,
    0x9490: 0x67CF,
    0x9491: 0x6CCA,
    0x9492: 0x767D,
    0x9493: 0x7B94,
    0x9494: 0x7C95,
    0x9495: 0x8236,
    0x9496: 0x8584,
    0x9497: 0x8FEB,
    0x9498: 0x66DD,
    0x9499: 0x6F20,
    0x949A: 0x7206,
    0x949B: 0x7E1B,
    0x949C: 0x83AB,
    0x949D: 0x99C1,
    0x949E: 0x9EA6,
    0x949F: 0x51FD,
    0x94A0: 0x7BB1,
    0x94A1: 0x7872,
    0x94A2: 0x7BB8,
    0x94A3: 0x8087,
    0x94A4: 0x7B48,
    0x94A5: 0x6AE8,
    0x94A6: 0x5E61,
    0x94A7: 0x808C,
    0x94A8: 0x7551,
    0x94A9: 0x7560,
    0x94AA: 0x516B,
    0x94AB: 0x9262,
    0x94AC: 0x6E8C,
    0x94AD: 0x767A,
    0x94AE: 0x9197,
    0x94AF: 0x9AEA,
    0x94B0: 0x4F10,
    0x94B1: 0x7F70,
    0x94B2: 0x629C,
    0x94B3: 0x7B4F,
    0x94B4: 0x95A5,
    0x94B5: 0x9CE9,
    0x94B6: 0x567A,
    0x94B7: 0x5859,
    0x94B8: 0x86E4,
    0x94B9: 0x96BC,
    0x94BA: 0x4F34,
    0x94BB: 0x5224,
    0x94BC: 0x534A,
    0x94BD: 0x53CD,
    0x94BE: 0x53DB,
    0x94BF: 0x5E06,
    0x94C0: 0x642C,
    0x94C1: 0x6591,
    0x94C2: 0x677F,
    0x94C3: 0x6C3E,
    0x94C4: 0x6C4E,
    0x94C5: 0x7248,
    0x94C6: 0x72AF,
    0x94C7: 0x73ED,
    0x94C8: 0x7554,
    0x94C9: 0x7E41,
    0x94CA: 0x822C,
    0x94CB: 0x85E9,
    0x94CC: 0x8CA9,
    0x94CD: 0x7BC4,
    0x94CE: 0x91C6,
    0x94CF: 0x7169,
    0x94D0: 0x9812,
    0x94D1: 0x98EF,
    0x94D2: 0x633D,
    0x94D3: 0x6669,
    0x94D4: 0x756A,
    0x94D5: 0x76E4,
    0x94D6: 0x78D0,
    0x94D7: 0x8543,
    0x94D8: 0x86EE,
    0x94D9: 0x532A,
    0x94DA: 0x5351,
    0x94DB: 0x5426,
    0x94DC: 0x5983,
    0x94DD: 0x5E87,
    0x94DE: 0x5F7C,
    0x94DF: 0x60B2,
    0x94E0: 0x6249,
    0x94E1: 0x6279,
    0x94E2: 0x62AB,
    0x94E3: 0x6590,
    0x94E4: 0x6BD4,
    0x94E5: 0x6CCC,
    0x94E6: 0x75B2,
    0x94E7: 0x76AE,
    0x94E8: 0x7891,
    0x94E9: 0x79D8,
    0x94EA: 0x7DCB,
    0x94EB: 0x7F77,
    0x94EC: 0x80A5,
    0x94ED: 0x88AB,
    0x94EE: 0x8AB9,
    0x94EF: 0x8CBB,
    0x94F0: 0x907F,
    0x94F1: 0x975E,
    0x94F2: 0x98DB,
    0x94F3: 0x6A0B,
    0x94F4: 0x7C38,
    0x94F5: 0x5099,
    0x94F6: 0x5C3E,
    0x94F7: 0x5FAE,
    0x94F8: 0x6787,
    0x94F9: 0x6BD8,
    0x94FA: 0x7435,
    0x94FB: 0x7709,
    0x94FC: 0x7F8E,
    0x9540: 0x9F3B,
    0x9541: 0x67CA,
    0x9542: 0x7A17,
    0x9543: 0x5339,
    0x9544: 0x758B,
    0x9545: 0x9AED,
    0x9546: 0x5F66,
    0x9547: 0x819D,
    0x9548: 0x83F1,
    0x9549: 0x8098,
    0x954A: 0x5F3C,
    0x954B: 0x5FC5,
    0x954C: 0x7562,
    0x954D: 0x7B46,
    0x954E: 0x903C,
    0x954F: 0x6867,
    0x9550: 0x59EB,
    0x9551: 0x5A9B,
    0x9552: 0x7D10,
    0x9553: 0x767E,
    0x9554: 0x8B2C,
    0x9555: 0x4FF5,
    0x9556: 0x5F6A,
    0x9557: 0x6A19,
    0x9558: 0x6C37,
    0x9559: 0x6F02,
    0x955A: 0x74E2,
    0x955B: 0x7968,
    0x955C: 0x8868,
    0x955D: 0x8A55,
    0x955E: 0x8C79,
    0x955F: 0x5EDF,
    0x9560: 0x63CF,
    0x9561: 0x75C5,
    0x9562: 0x79D2,
    0x9563: 0x82D7,
    0x9564: 0x9328,
    0x9565: 0x92F2,
    0x9566: 0x849C,
    0x9567: 0x86ED,
    0x9568: 0x9C2D,
    0x9569: 0x54C1,
    0x956A: 0x5F6C,
    0x956B: 0x658C,
    0x956C: 0x6D5C,
    0x956D: 0x7015,
    0x956E: 0x8CA7,
    0x956F: 0x8CD3,
    0x9570: 0x983B,
    0x9571: 0x654F,
    0x9572: 0x74F6,
    0x9573: 0x4E0D,
    0x9574: 0x4ED8,
    0x9575: 0x57E0,
    0x9576: 0x592B,
    0x9577: 0x5A66,
    0x9578: 0x5BCC,
    0x9579: 0x51A8,
    0x957A: 0x5E03,
    0x957B: 0x5E9C,
    0x957C: 0x6016,
    0x957D: 0x6276,
    0x957E: 0x6577,
    0x9580: 0x65A7,
    0x9581: 0x666E,
    0x9582: 0x6D6E,
    0x9583: 0x7236,
    0x9584: 0x7B26,
    0x9585: 0x8150,
    0x9586: 0x819A,
    0x9587: 0x8299,
    0x9588: 0x8B5C,
    0x9589: 0x8CA0,
    0x958A: 0x8CE6,
    0x958B: 0x8D74,
    0x958C: 0x961C,
    0x958D: 0x9644,
    0x958E: 0x4FAE,
    0x958F: 0x64AB,
    0x9590: 0x6B66,
    0x9591: 0x821E,
    0x9592: 0x8461,
    0x9593: 0x856A,
    0x9594: 0x90E8,
    0x9595: 0x5C01,
    0x9596: 0x6953,
    0x9597: 0x98A8,
    0x9598: 0x847A,
    0x9599: 0x8557,
    0x959A: 0x4F0F,
    0x959B: 0x526F,
    0x959C: 0x5FA9,
    0x959D: 0x5E45,
    0x959E: 0x670D,
    0x959F: 0x798F,
    0x95A0: 0x8179,
    0x95A1: 0x8907,
    0x95A2: 0x8986,
    0x95A3: 0x6DF5,
    0x95A4: 0x5F17,
    0x95A5: 0x6255,
    0x95A6: 0x6CB8,
    0x95A7: 0x4ECF,
    0x95A8: 0x7269,
    0x95A9: 0x9B92,
    0x95AA: 0x5206,
    0x95AB: 0x543B,
    0x95AC: 0x5674,
    0x95AD: 0x58B3,
    0x95AE: 0x61A4,
    0x95AF: 0x626E,
    0x95B0: 0x711A,
    0x95B1: 0x596E,
    0x95B2: 0x7C89,
    0x95B3: 0x7CDE,
    0x95B4: 0x7D1B,
    0x95B5: 0x96F0,
    0x95B6: 0x6587,
    0x95B7: 0x805E,
    0x95B8: 0x4E19,
    0x95B9: 0x4F75,
    0x95BA: 0x5175,
    0x95BB: 0x5840,
    0x95BC: 0x5E63,
    0x95BD: 0x5E73,
    0x95BE: 0x5F0A,
    0x95BF: 0x67C4,
    0x95C0: 0x4E26,
    0x95C1: 0x853D,
    0x95C2: 0x9589,
    0x95C3: 0x965B,
    0x95C4: 0x7C73,
    0x95C5: 0x9801,
    0x95C6: 0x50FB,
    0x95C7: 0x58C1,
    0x95C8: 0x7656,
    0x95C9: 0x78A7,
    0x95CA: 0x5225,
    0x95CB: 0x77A5,
    0x95CC: 0x8511,
    0x95CD: 0x7B86,
    0x95CE: 0x504F,
    0x95CF: 0x5909,
    0x95D0: 0x7247,
    0x95D1: 0x7BC7,
    0x95D2: 0x7DE8,
    0x95D3: 0x8FBA,
    0x95D4: 0x8FD4,
    0x95D5: 0x904D,
    0x95D6: 0x4FBF,
    0x95D7: 0x52C9,
    0x95D8: 0x5A29,
    0x95D9: 0x5F01,
    0x95DA: 0x97AD,
    0x95DB: 0x4FDD,
    0x95DC: 0x8217,
    0x95DD: 0x92EA,
    0x95DE: 0x5703,
    0x95DF: 0x6355,
    0x95E0: 0x6B69,
    0x95E1: 0x752B,
    0x95E2: 0x88DC,
    0x95E3: 0x8F14,
    0x95E4: 0x7A42,
    0x95E5: 0x52DF,
    0x95E6: 0x5893,
    0x95E7: 0x6155,
    0x95E8: 0x620A,
    0x95E9: 0x66AE,
    0x95EA: 0x6BCD,
    0x95EB: 0x7C3F,
    0x95EC: 0x83E9,
    0x95ED: 0x5023,
    0x95EE: 0x4FF8,
    0x95EF: 0x5305,
    0x95F0: 0x5446,
    0x95F1: 0x5831,
    0x95F2: 0x5949,
    0x95F3: 0x5B9D,
    0x95F4: 0x5CF0,
    0x95F5: 0x5CEF,
    0x95F6: 0x5D29,
    0x95F7: 0x5E96,
    0x95F8: 0x62B1,
    0x95F9: 0x6367,
    0x95FA: 0x653E,
    0x95FB: 0x65B9,
    0x95FC: 0x670B,
    0x9640: 0x6CD5,
    0x9641: 0x6CE1,
    0x9642: 0x70F9,
    0x9643: 0x7832,
    0x9644: 0x7E2B,
    0x9645: 0x80DE,
    0x9646: 0x82B3,
    0x9647: 0x840C,
    0x9648: 0x84EC,
    0x9649: 0x8702,
    0x964A: 0x8912,
    0x964B: 0x8A2A,
    0x964C: 0x8C4A,
    0x964D: 0x90A6,
    0x964E: 0x92D2,
    0x964F: 0x98FD,
    0x9650: 0x9CF3,
    0x9651: 0x9D6C,
    0x9652: 0x4E4F,
    0x9653: 0x4EA1,
    0x9654: 0x508D,
    0x9655: 0x5256,
    0x9656: 0x574A,
    0x9657: 0x59A8,
    0x9658: 0x5E3D,
    0x9659: 0x5FD8,
    0x965A: 0x5FD9,
    0x965B: 0x623F,
    0x965C: 0x66B4,
    0x965D: 0x671B,
    0x965E: 0x67D0,
    0x965F: 0x68D2,
    0x9660: 0x5192,
    0x9661: 0x7D21,
    0x9662: 0x80AA,
    0x9663: 0x81A8,
    0x9664: 0x8B00,
    0x9665: 0x8C8C,
    0x9666: 0x8CBF,
    0x9667: 0x927E,
    0x9668: 0x9632,
    0x9669: 0x5420,
    0x966A: 0x982C,
    0x966B: 0x5317,
    0x966C: 0x50D5,
    0x966D: 0x535C,
    0x966E: 0x58A8,
    0x966F: 0x64B2,
    0x9670: 0x6734,
    0x9671: 0x7267,
    0x9672: 0x7766,
    0x9673: 0x7A46,
    0x9674: 0x91E6,
    0x9675: 0x52C3,
    0x9676: 0x6CA1,
    0x9677: 0x6B86,
    0x9678: 0x5800,
    0x9679: 0x5E4C,
    0x967A: 0x5954,
    0x967B: 0x672C,
    0x967C: 0x7FFB,
    0x967D: 0x51E1,
    0x967E: 0x76C6,
    0x9680: 0x6469,
    0x9681: 0x78E8,
    0x9682: 0x9B54,
    0x9683: 0x9EBB,
    0x9684: 0x57CB,
    0x9685: 0x59B9,
    0x9686: 0x6627,
    0x9687: 0x679A,
    0x9688: 0x6BCE,
    0x9689: 0x54E9,
    0x968A: 0x69D9,
    0x968B: 0x5E55,
    0x968C: 0x819C,
    0x968D: 0x6795,
    0x968E: 0x9BAA,
    0x968F: 0x67FE,
    0x9690: 0x9C52,
    0x9691: 0x685D,
    0x9692: 0x4EA6,
    0x9693: 0x4FE3,
    0x9694: 0x53C8,
    0x9695: 0x62B9,
    0x9696: 0x672B,
    0x9697: 0x6CAB,
    0x9698: 0x8FC4,
    0x9699: 0x4FAD,
    0x969A: 0x7E6D,
    0x969B: 0x9EBF,
    0x969C: 0x4E07,
    0x969D: 0x6162,
    0x969E: 0x6E80,
    0x969F: 0x6F2B,
    0x96A0: 0x8513,
    0x96A1: 0x5473,
    0x96A2: 0x672A,
    0x96A3: 0x9B45,
    0x96A4: 0x5DF3,
    0x96A5: 0x7B95,
    0x96A6: 0x5CAC,
    0x96A7: 0x5BC6,
    0x96A8: 0x871C,
    0x96A9: 0x6E4A,
    0x96AA: 0x84D1,
    0x96AB: 0x7A14,
    0x96AC: 0x8108,
    0x96AD: 0x5999,
    0x96AE: 0x7C8D,
    0x96AF: 0x6C11,
    0x96B0: 0x7720,
    0x96B1: 0x52D9,
    0x96B2: 0x5922,
    0x96B3: 0x7121,
    0x96B4: 0x725F,
    0x96B5: 0x77DB,
    0x96B6: 0x9727,
    0x96B7: 0x9D61,
    0x96B8: 0x690B,
    0x96B9: 0x5A7F,
    0x96BA: 0x5A18,
    0x96BB: 0x51A5,
    0x96BC: 0x540D,
    0x96BD: 0x547D,
    0x96BE: 0x660E,
    0x96BF: 0x76DF,
    0x96C0: 0x8FF7,
    0x96C1: 0x9298,
    0x96C2: 0x9CF4,
    0x96C3: 0x59EA,
    0x96C4: 0x725D,
    0x96C5: 0x6EC5,
    0x96C6: 0x514D,
    0x96C7: 0x68C9,
    0x96C8: 0x7DBF,
    0x96C9: 0x7DEC,
    0x96CA: 0x9762,
    0x96CB: 0x9EBA,
    0x96CC: 0x6478,
    0x96CD: 0x6A21,
    0x96CE: 0x8302,
    0x96CF: 0x5984,
    0x96D0: 0x5B5F,
    0x96D1: 0x6BDB,
    0x96D2: 0x731B,
    0x96D3: 0x76F2,
    0x96D4: 0x7DB2,
    0x96D5: 0x8017,
    0x96D6: 0x8499,
    0x96D7: 0x5132,
    0x96D8: 0x6728,
    0x96D9: 0x9ED9,
    0x96DA: 0x76EE,
    0x96DB: 0x6762,
    0x96DC: 0x52FF,
    0x96DD: 0x9905,
    0x96DE: 0x5C24,
    0x96DF: 0x623B,
    0x96E0: 0x7C7E,
    0x96E1: 0x8CB0,
    0x96E2: 0x554F,
    0x96E3: 0x60B6,
    0x96E4: 0x7D0B,
    0x96E5: 0x9580,
    0x96E6: 0x5301,
    0x96E7: 0x4E5F,
    0x96E8: 0x51B6,
    0x96E9: 0x591C,
    0x96EA: 0x723A,
    0x96EB: 0x8036,
    0x96EC: 0x91CE,
    0x96ED: 0x5F25,
    0x96EE: 0x77E2,
    0x96EF: 0x5384,
    0x96F0: 0x5F79,
    0x96F1: 0x7D04,
    0x96F2: 0x85AC,
    0x96F3: 0x8A33,
    0x96F4: 0x8E8D,
    0x96F5: 0x9756,
    0x96F6: 0x67F3,
    0x96F7: 0x85AE,
    0x96F8: 0x9453,
    0x96F9: 0x6109,
    0x96FA: 0x6108,
    0x96FB: 0x6CB9,
    0x96FC: 0x7652,
    0x9740: 0x8AED,
    0x9741: 0x8F38,
    0x9742: 0x552F,
    0x9743: 0x4F51,
    0x9744: 0x512A,
    0x9745: 0x52C7,
    0x9746: 0x53CB,
    0x9747: 0x5BA5,
    0x9748: 0x5E7D,
    0x9749: 0x60A0,
    0x974A: 0x6182,
    0x974B: 0x63D6,
    0x974C: 0x6709,
    0x974D: 0x67DA,
    0x974E: 0x6E67,
    0x974F: 0x6D8C,
    0x9750: 0x7336,
    0x9751: 0x7337,
    0x9752: 0x7531,
    0x9753: 0x7950,
    0x9754: 0x88D5,
    0x9755: 0x8A98,
    0x9756: 0x904A,
    0x9757: 0x9091,
    0x9758: 0x90F5,
    0x9759: 0x96C4,
    0x975A: 0x878D,
    0x975B: 0x5915,
    0x975C: 0x4E88,
    0x975D: 0x4F59,
    0x975E: 0x4E0E,
    0x975F: 0x8A89,
    0x9760: 0x8F3F,
    0x9761: 0x9810,
    0x9762: 0x50AD,
    0x9763: 0x5E7C,
    0x9764: 0x5996,
    0x9765: 0x5BB9,
    0x9766: 0x5EB8,
    0x9767: 0x63DA,
    0x9768: 0x63FA,
    0x9769: 0x64C1,
    0x976A: 0x66DC,
    0x976B: 0x694A,
    0x976C: 0x69D8,
    0x976D: 0x6D0B,
    0x976E: 0x6EB6,
    0x976F: 0x7194,
    0x9770: 0x7528,
    0x9771: 0x7AAF,
    0x9772: 0x7F8A,
    0x9773: 0x8000,
    0x9774: 0x8449,
    0x9775: 0x84C9,
    0x9776: 0x8981,
    0x9777: 0x8B21,
    0x9778: 0x8E0A,
    0x9779: 0x9065,
    0x977A: 0x967D,
    0x977B: 0x990A,
    0x977C: 0x617E,
    0x977D: 0x6291,
    0x977E: 0x6B32,
    0x9780: 0x6C83,
    0x9781: 0x6D74,
    0x9782: 0x7FCC,
    0x9783: 0x7FFC,
    0x9784: 0x6DC0,
    0x9785: 0x7F85,
    0x9786: 0x87BA,
    0x9787: 0x88F8,
    0x9788: 0x6765,
    0x9789: 0x83B1,
    0x978A: 0x983C,
    0x978B: 0x96F7,
    0x978C: 0x6D1B,
    0x978D: 0x7D61,
    0x978E: 0x843D,
    0x978F: 0x916A,
    0x9790: 0x4E71,
    0x9791: 0x5375,
    0x9792: 0x5D50,
    0x9793: 0x6B04,
    0x9794: 0x6FEB,
    0x9795: 0x85CD,
    0x9796: 0x862D,
    0x9797: 0x89A7,
    0x9798: 0x5229,
    0x9799: 0x540F,
    0x979A: 0x5C65,
    0x979B: 0x674E,
    0x979C: 0x68A8,
    0x979D: 0x7406,
    0x979E: 0x7483,
    0x979F: 0x75E2,
    0x97A0: 0x88CF,
    0x97A1: 0x88E1,
    0x97A2: 0x91CC,
    0x97A3: 0x96E2,
    0x97A4: 0x9678,
    0x97A5: 0x5F8B,
    0x97A6: 0x7387,
    0x97A7: 0x7ACB,
    0x97A8: 0x844E,
    0x97A9: 0x63A0,
    0x97AA: 0x7565,
    0x97AB: 0x5289,
    0x97AC: 0x6D41,
    0x97AD: 0x6E9C,
    0x97AE: 0x7409,
    0x97AF: 0x7559,
    0x97B0: 0x786B,
    0x97B1: 0x7C92,
    0x97B2: 0x9686,
    0x97B3: 0x7ADC,
    0x97B4: 0x9F8D,
    0x97B5: 0x4FB6,
    0x97B6: 0x616E,
    0x97B7: 0x65C5,
    0x97B8: 0x865C,
    0x97B9: 0x4E86,
    0x97BA: 0x4EAE,
    0x97BB: 0x50DA,
    0x97BC: 0x4E21,
    0x97BD: 0x51CC,
    0x97BE: 0x5BEE,
    0x97BF: 0x6599,
    0x97C0: 0x6881,
    0x97C1: 0x6DBC,
    0x97C2: 0x731F,
    0x97C3: 0x7642,
    0x97C4: 0x77AD,
    0x97C5: 0x7A1C,
    0x97C6: 0x7CE7,
    0x97C7: 0x826F,
    0x97C8: 0x8AD2,
    0x97C9: 0x907C,
    0x97CA: 0x91CF,
    0x97CB: 0x9675,
    0x97CC: 0x9818,
    0x97CD: 0x529B,
    0x97CE: 0x7DD1,
    0x97CF: 0x502B,
    0x97D0: 0x5398,
    0x97D1: 0x6797,
    0x97D2: 0x6DCB,
    0x97D3: 0x71D0,
    0x97D4: 0x7433,
    0x97D5: 0x81E8,
    0x97D6: 0x8F2A,
    0x97D7: 0x96A3,
    0x97D8: 0x9C57,
    0x97D9: 0x9E9F,
    0x97DA: 0x7460,
    0x97DB: 0x5841,
    0x97DC: 0x6D99,
    0x97DD: 0x7D2F,
    0x97DE: 0x985E,
    0x97DF: 0x4EE4,
    0x97E0: 0x4F36,
    0x97E1: 0x4F8B,
    0x97E2: 0x51B7,
    0x97E3: 0x52B1,
    0x97E4: 0x5DBA,
    0x97E5: 0x601C,
    0x97E6: 0x73B2,
    0x97E7: 0x793C,
    0x97E8: 0x82D3,
    0x97E9: 0x9234,
    0x97EA: 0x96B7,
    0x97EB: 0x96F6,
    0x97EC: 0x970A,
    0x97ED: 0x9E97,
    0x97EE: 0x9F62,
    0x97EF: 0x66A6,
    0x97F0: 0x6B74,
    0x97F1: 0x5217,
    0x97F2: 0x52A3,
    0x97F3: 0x70C8,
    0x97F4: 0x88C2,
    0x97F5: 0x5EC9,
    0x97F6: 0x604B,
    0x97F7: 0x6190,
    0x97F8: 0x6F23,
    0x97F9: 0x7149,
    0x97FA: 0x7C3E,
    0x97FB: 0x7DF4,
    0x97FC: 0x806F,
    0x9840: 0x84EE,
    0x9841: 0x9023,
    0x9842: 0x932C,
    0x9843: 0x5442,
    0x9844: 0x9B6F,
    0x9845: 0x6AD3,
    0x9846: 0x7089,
    0x9847: 0x8CC2,
    0x9848: 0x8DEF,
    0x9849: 0x9732,
    0x984A: 0x52B4,
    0x984B: 0x5A41,
    0x984C: 0x5ECA,
    0x984D: 0x5F04,
    0x984E: 0x6717,
    0x984F: 0x697C,
    0x9850: 0x6994,
    0x9851: 0x6D6A,
    0x9852: 0x6F0F,
    0x9853: 0x7262,
    0x9854: 0x72FC,
    0x9855: 0x7BED,
    0x9856: 0x8001,
    0x9857: 0x807E,
    0x9858: 0x874B,
    0x9859: 0x90CE,
    0x985A: 0x516D,
    0x985B: 0x9E93,
    0x985C: 0x7984,
    0x985D: 0x808B,
    0x985E: 0x9332,
    0x985F: 0x8AD6,
    0x9860: 0x502D,
    0x9861: 0x548C,
    0x9862: 0x8A71,
    0x9863: 0x6B6A,
    0x9864: 0x8CC4,
    0x9865: 0x8107,
    0x9866: 0x60D1,
    0x9867: 0x67A0,
    0x9868: 0x9DF2,
    0x9869: 0x4E99,
    0x986A: 0x4E98,
    0x986B: 0x9C10,
    0x986C: 0x8A6B,
    0x986D: 0x85C1,
    0x986E: 0x8568,
    0x986F: 0x6900,
    0x9870: 0x6E7E,
    0x9871: 0x7897,
    0x9872: 0x8155,
    0x989F: 0x5F0C,
    0x98A0: 0x4E10,
    0x98A1: 0x4E15,
    0x98A2: 0x4E2A,
    0x98A3: 0x4E31,
    0x98A4: 0x4E36,
    0x98A5: 0x4E3C,
    0x98A6: 0x4E3F,
    0x98A7: 0x4E42,
    0x98A8: 0x4E56,
    0x98A9: 0x4E58,
    0x98AA: 0x4E82,
    0x98AB: 0x4E85,
    0x98AC: 0x8C6B,
    0x98AD: 0x4E8A,
    0x98AE: 0x8212,
    0x98AF: 0x5F0D,
    0x98B0: 0x4E8E,
    0x98B1: 0x4E9E,
    0x98B2: 0x4E9F,
    0x98B3: 0x4EA0,
    0x98B4: 0x4EA2,
    0x98B5: 0x4EB0,
    0x98B6: 0x4EB3,
    0x98B7: 0x4EB6,
    0x98B8: 0x4ECE,
    0x98B9: 0x4ECD,
    0x98BA: 0x4EC4,
    0x98BB: 0x4EC6,
    0x98BC: 0x4EC2,
    0x98BD: 0x4ED7,
    0x98BE: 0x4EDE,
    0x98BF: 0x4EED,
    0x98C0: 0x4EDF,
    0x98C1: 0x4EF7,
    0x98C2: 0x4F09,
    0x98C3: 0x4F5A,
    0x98C4: 0x4F30,
    0x98C5: 0x4F5B,
    0x98C6: 0x4F5D,
    0x98C7: 0x4F57,
    0x98C8: 0x4F47,
    0x98C9: 0x4F76,
    0x98CA: 0x4F88,
    0x98CB: 0x4F8F,
    0x98CC: 0x4F98,
    0x98CD: 0x4F7B,
    0x98CE: 0x4F69,
    0x98CF: 0x4F70,
    0x98D0: 0x4F91,
    0x98D1: 0x4F6F,
    0x98D2: 0x4F86,
    0x98D3: 0x4F96,
    0x98D4: 0x5118,
    0x98D5: 0x4FD4,
    0x98D6: 0x4FDF,
    0x98D7: 0x4FCE,
    0x98D8: 0x4FD8,
    0x98D9: 0x4FDB,
    0x98DA: 0x4FD1,
    0x98DB: 0x4FDA,
    0x98DC: 0x4FD0,
    0x98DD: 0x4FE4,
    0x98DE: 0x4FE5,
    0x98DF: 0x501A,
    0x98E0: 0x5028,
    0x98E1: 0x5014,
    0x98E2: 0x502A,
    0x98E3: 0x5025,
    0x98E4: 0x5005,
    0x98E5: 0x4F1C,
    0x98E6: 0x4FF6,
    0x98E7: 0x5021,
    0x98E8: 0x5029,
    0x98E9: 0x502C,
    0x98EA: 0x4FFE,
    0x98EB: 0x4FEF,
    0x98EC: 0x5011,
    0x98ED: 0x5006,
    0x98EE: 0x5043,
    0x98EF: 0x5047,
    0x98F0: 0x6703,
    0x98F1: 0x5055,
    0x98F2: 0x5050,
    0x98F3: 0x5048,
    0x98F4: 0x505A,
    0x98F5: 0x5056,
    0x98F6: 0x506C,
    0x98F7: 0x5078,
    0x98F8: 0x5080,
    0x98F9: 0x509A,
    0x98FA: 0x5085,
    0x98FB: 0x50B4,
    0x98FC: 0x50B2,
    0x9940: 0x50C9,
    0x9941: 0x50CA,
    0x9942: 0x50B3,
    0x9943: 0x50C2,
    0x9944: 0x50D6,
    0x9945: 0x50DE,
    0x9946: 0x50E5,
    0x9947: 0x50ED,
    0x9948: 0x50E3,
    0x9949: 0x50EE,
    0x994A: 0x50F9,
    0x994B: 0x50F5,
    0x994C: 0x5109,
    0x994D: 0x5101,
    0x994E: 0x5102,
    0x994F: 0x5116,
    0x9950: 0x5115,
    0x9951: 0x5114,
    0x9952: 0x511A,
    0x9953: 0x5121,
    0x9954: 0x513A,
    0x9955: 0x5137,
    0x9956: 0x513C,
    0x9957: 0x513B,
    0x9958: 0x513F,
    0x9959: 0x5140,
    0x995A: 0x5152,
    0x995B: 0x514C,
    0x995C: 0x5154,
    0x995D: 0x5162,
    0x995E: 0x7AF8,
    0x995F: 0x5169,
    0x9960: 0x516A,
    0x9961: 0x516E,
    0x9962: 0x5180,
    0x9963: 0x5182,
    0x9964: 0x56D8,
    0x9965: 0x518C,
    0x9966: 0x5189,
    0x9967: 0x518F,
    0x9968: 0x5191,
    0x9969: 0x5193,
    0x996A: 0x5195,
    0x996B: 0x5196,
    0x996C: 0x51A4,
    0x996D: 0x51A6,
    0x996E: 0x51A2,
    0x996F: 0x51A9,
    0x9970: 0x51AA,
    0x9971: 0x51AB,
    0x9972: 0x51B3,
    0x9973: 0x51B1,
    0x9974: 0x51B2,
    0x9975: 0x51B0,
    0x9976: 0x51B5,
    0x9977: 0x51BD,
    0x9978: 0x51C5,
    0x9979: 0x51C9,
    0x997A: 0x51DB,
    0x997B: 0x51E0,
    0x997C: 0x8655,
    0x997D: 0x51E9,
    0x997E: 0x51ED,
    0x9980: 0x51F0,
    0x9981: 0x51F5,
    0x9982: 0x51FE,
    0x9983: 0x5204,
    0x9984: 0x520B,
    0x9985: 0x5214,
    0x9986: 0x520E,
    0x9987: 0x5227,
    0x9988: 0x522A,
    0x9989: 0x522E,
    0x998A: 0x5233,
    0x998B: 0x5239,
    0x998C: 0x524F,
    0x998D: 0x5244,
    0x998E: 0x524B,
    0x998F: 0x524C,
    0x9990: 0x525E,
    0x9991: 0x5254,
    0x9992: 0x526A,
    0x9993: 0x5274,
    0x9994: 0x5269,
    0x9995: 0x5273,
    0x9996: 0x527F,
    0x9997: 0x527D,
    0x9998: 0x528D,
    0x9999: 0x5294,
    0x999A: 0x5292,
    0x999B: 0x5271,
    0x999C: 0x5288,
    0x999D: 0x5291,
    0x999E: 0x8FA8,
    0x999F: 0x8FA7,
    0x99A0: 0x52AC,
    0x99A1: 0x52AD,
    0x99A2: 0x52BC,
    0x99A3: 0x52B5,
    0x99A4: 0x52C1,
    0x99A5: 0x52CD,
    0x99A6: 0x52D7,
    0x99A7: 0x52DE,
    0x99A8: 0x52E3,
    0x99A9: 0x52E6,
    0x99AA: 0x98ED,
    0x99AB: 0x52E0,
    0x99AC: 0x52F3,
    0x99AD: 0x52F5,
    0x99AE: 0x52F8,
    0x99AF: 0x52F9,
    0x99B0: 0x5306,
    0x99B1: 0x5308,
    0x99B2: 0x7538,
    0x99B3: 0x530D,
    0x99B4: 0x5310,
    0x99B5: 0x530F,
    0x99B6: 0x5315,
    0x99B7: 0x531A,
    0x99B8: 0x5323,
    0x99B9: 0x532F,
    0x99BA: 0x5331,
    0x99BB: 0x5333,
    0x99BC: 0x5338,
    0x99BD: 0x5340,
    0x99BE: 0x5346,
    0x99BF: 0x5345,
    0x99C0: 0x4E17,
    0x99C1: 0x5349,
    0x99C2: 0x534D,
    0x99C3: 0x51D6,
    0x99C4: 0x535E,
    0x99C5: 0x5369,
    0x99C6: 0x536E,
    0x99C7: 0x5918,
    0x99C8: 0x537B,
    0x99C9: 0x5377,
    0x99CA: 0x5382,
    0x99CB: 0x5396,
    0x99CC: 0x53A0,
    0x99CD: 0x53A6,
    0x99CE: 0x53A5,
    0x99CF: 0x53AE,
    0x99D0: 0x53B0,
    0x99D1: 0x53B6,
    0x99D2: 0x53C3,
    0x99D3: 0x7C12,
    0x99D4: 0x96D9,
    0x99D5: 0x53DF,
    0x99D6: 0x66FC,
    0x99D7: 0x71EE,
    0x99D8: 0x53EE,
    0x99D9: 0x53E8,
    0x99DA: 0x53ED,
    0x99DB: 0x53FA,
    0x99DC: 0x5401,
    0x99DD: 0x543D,
    0x99DE: 0x5440,
    0x99DF: 0x542C,
    0x99E0: 0x542D,
    0x99E1: 0x543C,
    0x99E2: 0x542E,
    0x99E3: 0x5436,
    0x99E4: 0x5429,
    0x99E5: 0x541D,
    0x99E6: 0x544E,
    0x99E7: 0x548F,
    0x99E8: 0x5475,
    0x99E9: 0x548E,
    0x99EA: 0x545F,
    0x99EB: 0x5471,
    0x99EC: 0x5477,
    0x99ED: 0x5470,
    0x99EE: 0x5492,
    0x99EF: 0x547B,
    0x99F0: 0x5480,
    0x99F1: 0x5476,
    0x99F2: 0x5484,
    0x99F3: 0x5490,
    0x99F4: 0x5486,
    0x99F5: 0x54C7,
    0x99F6: 0x54A2,
    0x99F7: 0x54B8,
    0x99F8: 0x54A5,
    0x99F9: 0x54AC,
    0x99FA: 0x54C4,
    0x99FB: 0x54C8,
    0x99FC: 0x54A8,
    0x9A40: 0x54AB,
    0x9A41: 0x54C2,
    0x9A42: 0x54A4,
    0x9A43: 0x54BE,
    0x9A44: 0x54BC,
    0x9A45: 0x54D8,
    0x9A46: 0x54E5,
    0x9A47: 0x54E6,
    0x9A48: 0x550F,
    0x9A49: 0x5514,
    0x9A4A: 0x54FD,
    0x9A4B: 0x54EE,
    0x9A4C: 0x54ED,
    0x9A4D: 0x54FA,
    0x9A4E: 0x54E2,
    0x9A4F: 0x5539,
    0x9A50: 0x5540,
    0x9A51: 0x5563,
    0x9A52: 0x554C,
    0x9A53: 0x552E,
    0x9A54: 0x555C,
    0x9A55: 0x5545,
    0x9A56: 0x5556,
    0x9A57: 0x5557,
    0x9A58: 0x5538,
    0x9A59: 0x5533,
    0x9A5A: 0x555D,
    0x9A5B: 0x5599,
    0x9A5C: 0x5580,
    0x9A5D: 0x54AF,
    0x9A5E: 0x558A,
    0x9A5F: 0x559F,
    0x9A60: 0x557B,
    0x9A61: 0x557E,
    0x9A62: 0x5598,
    0x9A63: 0x559E,
    0x9A64: 0x55AE,
    0x9A65: 0x557C,
    0x9A66: 0x5583,
    0x9A67: 0x55A9,
    0x9A68: 0x5587,
    0x9A69: 0x55A8,
    0x9A6A: 0x55DA,
    0x9A6B: 0x55C5,
    0x9A6C: 0x55DF,
    0x9A6D: 0x55C4,
    0x9A6E: 0x55DC,
    0x9A6F: 0x55E4,
    0x9A70: 0x55D4,
    0x9A71: 0x5614,
    0x9A72: 0x55F7,
    0x9A73: 0x5616,
    0x9A74: 0x55FE,
    0x9A75: 0x55FD,
    0x9A76: 0x561B,
    0x9A77: 0x55F9,
    0x9A78: 0x564E,
    0x9A79: 0x5650,
    0x9A7A: 0x71DF,
    0x9A7B: 0x5634,
    0x9A7C: 0x5636,
    0x9A7D: 0x5632,
    0x9A7E: 0x5638,
    0x9A80: 0x566B,
    0x9A81: 0x5664,
    0x9A82: 0x562F,
    0x9A83: 0x566C,
    0x9A84: 0x566A,
    0x9A85: 0x5686,
    0x9A86: 0x5680,
    0x9A87: 0x568A,
    0x9A88: 0x56A0,
    0x9A89: 0x5694,
    0x9A8A: 0x568F,
    0x9A8B: 0x56A5,
    0x9A8C: 0x56AE,
    0x9A8D: 0x56B6,
    0x9A8E: 0x56B4,
    0x9A8F: 0x56C2,
    0x9A90: 0x56BC,
    0x9A91: 0x56C1,
    0x9A92: 0x56C3,
    0x9A93: 0x56C0,
    0x9A94: 0x56C8,
    0x9A95: 0x56CE,
    0x9A96: 0x56D1,
    0x9A97: 0x56D3,
    0x9A98: 0x56D7,
    0x9A99: 0x56EE,
    0x9A9A: 0x56F9,
    0x9A9B: 0x5700,
    0x9A9C: 0x56FF,
    0x9A9D: 0x5704,
    0x9A9E: 0x5709,
    0x9A9F: 0x5708,
    0x9AA0: 0x570B,
    0x9AA1: 0x570D,
    0x9AA2: 0x5713,
    0x9AA3: 0x5718,
    0x9AA4: 0x5716,
    0x9AA5: 0x55C7,
    0x9AA6: 0x571C,
    0x9AA7: 0x5726,
    0x9AA8: 0x5737,
    0x9AA9: 0x5738,
    0x9AAA: 0x574E,
    0x9AAB: 0x573B,
    0x9AAC: 0x5740,
    0x9AAD: 0x574F,
    0x9AAE: 0x5769,
    0x9AAF: 0x57C0,
    0x9AB0: 0x5788,
    0x9AB1: 0x5761,
    0x9AB2: 0x577F,
    0x9AB3: 0x5789,
    0x9AB4: 0x5793,
    0x9AB5: 0x57A0,
    0x9AB6: 0x57B3,
    0x9AB7: 0x57A4,
    0x9AB8: 0x57AA,
    0x9AB9: 0x57B0,
    0x9ABA: 0x57C3,
    0x9ABB: 0x57C6,
    0x9ABC: 0x57D4,
    0x9ABD: 0x57D2,
    0x9ABE: 0x57D3,
    0x9ABF: 0x580A,
    0x9AC0: 0x57D6,
    0x9AC1: 0x57E3,
    0x9AC2: 0x580B,
    0x9AC3: 0x5819,
    0x9AC4: 0x581D,
    0x9AC5: 0x5872,
    0x9AC6: 0x5821,
    0x9AC7: 0x5862,
    0x9AC8: 0x584B,
    0x9AC9: 0x5870,
    0x9ACA: 0x6BC0,
    0x9ACB: 0x5852,
    0x9ACC: 0x583D,
    0x9ACD: 0x5879,
    0x9ACE: 0x5885,
    0x9ACF: 0x58B9,
    0x9AD0: 0x589F,
    0x9AD1: 0x58AB,
    0x9AD2: 0x58BA,
    0x9AD3: 0x58DE,
    0x9AD4: 0x58BB,
    0x9AD5: 0x58B8,
    0x9AD6: 0x58AE,
    0x9AD7: 0x58C5,
    0x9AD8: 0x58D3,
    0x9AD9: 0x58D1,
    0x9ADA: 0x58D7,
    0x9ADB: 0x58D9,
    0x9ADC: 0x58D8,
    0x9ADD: 0x58E5,
    0x9ADE: 0x58DC,
    0x9ADF: 0x58E4,
    0x9AE0: 0x58DF,
    0x9AE1: 0x58EF,
    0x9AE2: 0x58FA,
    0x9AE3: 0x58F9,
    0x9AE4: 0x58FB,
    0x9AE5: 0x58FC,
    0x9AE6: 0x58FD,
    0x9AE7: 0x5902,
    0x9AE8: 0x590A,
    0x9AE9: 0x5910,
    0x9AEA: 0x591B,
    0x9AEB: 0x68A6,
    0x9AEC: 0x5925,
    0x9AED: 0x592C,
    0x9AEE: 0x592D,
    0x9AEF: 0x5932,
    0x9AF0: 0x5938,
    0x9AF1: 0x593E,
    0x9AF2: 0x7AD2,
    0x9AF3: 0x5955,
    0x9AF4: 0x5950,
    0x9AF5: 0x594E,
    0x9AF6: 0x595A,
    0x9AF7: 0x5958,
    0x9AF8: 0x5962,
    0x9AF9: 0x5960,
    0x9AFA: 0x5967,
    0x9AFB: 0x596C,
    0x9AFC: 0x5969,
    0x9B40: 0x5978,
    0x9B41: 0x5981,
    0x9B42: 0x599D,
    0x9B43: 0x4F5E,
    0x9B44: 0x4FAB,
    0x9B45: 0x59A3,
    0x9B46: 0x59B2,
    0x9B47: 0x59C6,
    0x9B48: 0x59E8,
    0x9B49: 0x59DC,
    0x9B4A: 0x598D,
    0x9B4B: 0x59D9,
    0x9B4C: 0x59DA,
    0x9B4D: 0x5A25,
    0x9B4E: 0x5A1F,
    0x9B4F: 0x5A11,
    0x9B50: 0x5A1C,
    0x9B51: 0x5A09,
    0x9B52: 0x5A1A,
    0x9B53: 0x5A40,
    0x9B54: 0x5A6C,
    0x9B55: 0x5A49,
    0x9B56: 0x5A35,
    0x9B57: 0x5A36,
    0x9B58: 0x5A62,
    0x9B59: 0x5A6A,
    0x9B5A: 0x5A9A,
    0x9B5B: 0x5ABC,
    0x9B5C: 0x5ABE,
    0x9B5D: 0x5ACB,
    0x9B5E: 0x5AC2,
    0x9B5F: 0x5ABD,
    0x9B60: 0x5AE3,
    0x9B61: 0x5AD7,
    0x9B62: 0x5AE6,
    0x9B63: 0x5AE9,
    0x9B64: 0x5AD6,
    0x9B65: 0x5AFA,
    0x9B66: 0x5AFB,
    0x9B67: 0x5B0C,
    0x9B68: 0x5B0B,
    0x9B69: 0x5B16,
    0x9B6A: 0x5B32,
    0x9B6B: 0x5AD0,
    0x9B6C: 0x5B2A,
    0x9B6D: 0x5B36,
    0x9B6E: 0x5B3E,
    0x9B6F: 0x5B43,
    0x9B70: 0x5B45,
    0x9B71: 0x5B40,
    0x9B72: 0x5B51,
    0x9B73: 0x5B55,
    0x9B74: 0x5B5A,
    0x9B75: 0x5B5B,
    0x9B76: 0x5B65,
    0x9B77: 0x5B69,
    0x9B78: 0x5B70,
    0x9B79: 0x5B73,
    0x9B7A: 0x5B75,
    0x9B7B: 0x5B78,
    0x9B7C: 0x6588,
    0x9B7D: 0x5B7A,
    0x9B7E: 0x5B80,
    0x9B80: 0x5B83,
    0x9B81: 0x5BA6,
    0x9B82: 0x5BB8,
    0x9B83: 0x5BC3,
    0x9B84: 0x5BC7,
    0x9B85: 0x5BC9,
    0x9B86: 0x5BD4,
    0x9B87: 0x5BD0,
    0x9B88: 0x5BE4,
    0x9B89: 0x5BE6,
    0x9B8A: 0x5BE2,
    0x9B8B: 0x5BDE,
    0x9B8C: 0x5BE5,
    0x9B8D: 0x5BEB,
    0x9B8E: 0x5BF0,
    0x9B8F: 0x5BF6,
    0x9B90: 0x5BF3,
    0x9B91: 0x5C05,
    0x9B92: 0x5C07,
    0x9B93: 0x5C08,
    0x9B94: 0x5C0D,
    0x9B95: 0x5C13,
    0x9B96: 0x5C20,
    0x9B97: 0x5C22,
    0x9B98: 0x5C28,
    0x9B99: 0x5C38,
    0x9B9A: 0x5C39,
    0x9B9B: 0x5C41,
    0x9B9C: 0x5C46,
    0x9B9D: 0x5C4E,
    0x9B9E: 0x5C53,
    0x9B9F: 0x5C50,
    0x9BA0: 0x5C4F,
    0x9BA1: 0x5B71,
    0x9BA2: 0x5C6C,
    0x9BA3: 0x5C6E,
    0x9BA4: 0x4E62,
    0x9BA5: 0x5C76,
    0x9BA6: 0x5C79,
    0x9BA7: 0x5C8C,
    0x9BA8: 0x5C91,
    0x9BA9: 0x5C94,
    0x9BAA: 0x599B,
    0x9BAB: 0x5CAB,
    0x9BAC: 0x5CBB,
    0x9BAD: 0x5CB6,
    0x9BAE: 0x5CBC,
    0x9BAF: 0x5CB7,
    0x9BB0: 0x5CC5,
    0x9BB1: 0x5CBE,
    0x9BB2: 0x5CC7,
    0x9BB3: 0x5CD9,
    0x9BB4: 0x5CE9,
    0x9BB5: 0x5CFD,
    0x9BB6: 0x5CFA,
    0x9BB7: 0x5CED,
    0x9BB8: 0x5D8C,
    0x9BB9: 0x5CEA,
    0x9BBA: 0x5D0B,
    0x9BBB: 0x5D15,
    0x9BBC: 0x5D17,
    0x9BBD: 0x5D5C,
    0x9BBE: 0x5D1F,
    0x9BBF: 0x5D1B,
    0x9BC0: 0x5D11,
    0x9BC1: 0x5D14,
    0x9BC2: 0x5D22,
    0x9BC3: 0x5D1A,
    0x9BC4: 0x5D19,
    0x9BC5: 0x5D18,
    0x9BC6: 0x5D4C,
    0x9BC7: 0x5D52,
    0x9BC8: 0x5D4E,
    0x9BC9: 0x5D4B,
    0x9BCA: 0x5D6C,
    0x9BCB: 0x5D73,
    0x9BCC: 0x5D76,
    0x9BCD: 0x5D87,
    0x9BCE: 0x5D84,
    0x9BCF: 0x5D82,
    0x9BD0: 0x5DA2,
    0x9BD1: 0x5D9D,
    0x9BD2: 0x5DAC,
    0x9BD3: 0x5DAE,
    0x9BD4: 0x5DBD,
    0x9BD5: 0x5D90,
    0x9BD6: 0x5DB7,
    0x9BD7: 0x5DBC,
    0x9BD8: 0x5DC9,
    0x9BD9: 0x5DCD,
    0x9BDA: 0x5DD3,
    0x9BDB: 0x5DD2,
    0x9BDC: 0x5DD6,
    0x9BDD: 0x5DDB,
    0x9BDE: 0x5DEB,
    0x9BDF: 0x5DF2,
    0x9BE0: 0x5DF5,
    0x9BE1: 0x5E0B,
    0x9BE2: 0x5E1A,
    0x9BE3: 0x5E19,
    0x9BE4: 0x5E11,
    0x9BE5: 0x5E1B,
    0x9BE6: 0x5E36,
    0x9BE7: 0x5E37,
    0x9BE8: 0x5E44,
    0x9BE9: 0x5E43,
    0x9BEA: 0x5E40,
    0x9BEB: 0x5E4E,
    0x9BEC: 0x5E57,
    0x9BED: 0x5E54,
    0x9BEE: 0x5E5F,
    0x9BEF: 0x5E62,
    0x9BF0: 0x5E64,
    0x9BF1: 0x5E47,
    0x9BF2: 0x5E75,
    0x9BF3: 0x5E76,
    0x9BF4: 0x5E7A,
    0x9BF5: 0x9EBC,
    0x9BF6: 0x5E7F,
    0x9BF7: 0x5EA0,
    0x9BF8: 0x5EC1,
    0x9BF9: 0x5EC2,
    0x9BFA: 0x5EC8,
    0x9BFB: 0x5ED0,
    0x9BFC: 0x5ECF,
    0x9C40: 0x5ED6,
    0x9C41: 0x5EE3,
    0x9C42: 0x5EDD,
    0x9C43: 0x5EDA,
    0x9C44: 0x5EDB,
    0x9C45: 0x5EE2,
    0x9C46: 0x5EE1,
    0x9C47: 0x5EE8,
    0x9C48: 0x5EE9,
    0x9C49: 0x5EEC,
    0x9C4A: 0x5EF1,
    0x9C4B: 0x5EF3,
    0x9C4C: 0x5EF0,
    0x9C4D: 0x5EF4,
    0x9C4E: 0x5EF8,
    0x9C4F: 0x5EFE,
    0x9C50: 0x5F03,
    0x9C51: 0x5F09,
    0x9C52: 0x5F5D,
    0x9C53: 0x5F5C,
    0x9C54: 0x5F0B,
    0x9C55: 0x5F11,
    0x9C56: 0x5F16,
    0x9C57: 0x5F29,
    0x9C58: 0x5F2D,
    0x9C59: 0x5F38,
    0x9C5A: 0x5F41,
    0x9C5B: 0x5F48,
    0x9C5C: 0x5F4C,
    0x9C5D: 0x5F4E,
    0x9C5E: 0x5F2F,
    0x9C5F: 0x5F51,
    0x9C60: 0x5F56,
    0x9C61: 0x5F57,
    0x9C62: 0x5F59,
    0x9C63: 0x5F61,
    0x9C64: 0x5F6D,
    0x9C65: 0x5F73,
    0x9C66: 0x5F77,
    0x9C67: 0x5F83,
    0x9C68: 0x5F82,
    0x9C69: 0x5F7F,
    0x9C6A: 0x5F8A,
    0x9C6B: 0x5F88,
    0x9C6C: 0x5F91,
    0x9C6D: 0x5F87,
    0x9C6E: 0x5F9E,
    0x9C6F: 0x5F99,
    0x9C70: 0x5F98,
    0x9C71: 0x5FA0,
    0x9C72: 0x5FA8,
    0x9C73: 0x5FAD,
    0x9C74: 0x5FBC,
    0x9C75: 0x5FD6,
    0x9C76: 0x5FFB,
    0x9C77: 0x5FE4,
    0x9C78: 0x5FF8,
    0x9C79: 0x5FF1,
    0x9C7A: 0x5FDD,
    0x9C7B: 0x60B3,
    0x9C7C: 0x5FFF,
    0x9C7D: 0x6021,
    0x9C7E: 0x6060,
    0x9C80: 0x6019,
    0x9C81: 0x6010,
    0x9C82: 0x6029,
    0x9C83: 0x600E,
    0x9C84: 0x6031,
    0x9C85: 0x601B,
    0x9C86: 0x6015,
    0x9C87: 0x602B,
    0x9C88: 0x6026,
    0x9C89: 0x600F,
    0x9C8A: 0x603A,
    0x9C8B: 0x605A,
    0x9C8C: 0x6041,
    0x9C8D: 0x606A,
    0x9C8E: 0x6077,
    0x9C8F: 0x605F,
    0x9C90: 0x604A,
    0x9C91: 0x6046,
    0x9C92: 0x604D,
    0x9C93: 0x6063,
    0x9C94: 0x6043,
    0x9C95: 0x6064,
    0x9C96: 0x6042,
    0x9C97: 0x606C,
    0x9C98: 0x606B,
    0x9C99: 0x6059,
    0x9C9A: 0x6081,
    0x9C9B: 0x608D,
    0x9C9C: 0x60E7,
    0x9C9D: 0x6083,
    0x9C9E: 0x609A,
    0x9C9F: 0x6084,
    0x9CA0: 0x609B,
    0x9CA1: 0x6096,
    0x9CA2: 0x6097,
    0x9CA3: 0x6092,
    0x9CA4: 0x60A7,
    0x9CA5: 0x608B,
    0x9CA6: 0x60E1,
    0x9CA7: 0x60B8,
    0x9CA8: 0x60E0,
    0x9CA9: 0x60D3,
    0x9CAA: 0x60B4,
    0x9CAB: 0x5FF0,
    0x9CAC: 0x60BD,
    0x9CAD: 0x60C6,
    0x9CAE: 0x60B5,
    0x9CAF: 0x60D8,
    0x9CB0: 0x614D,
    0x9CB1: 0x6115,
    0x9CB2: 0x6106,
    0x9CB3: 0x60F6,
    0x9CB4: 0x60F7,
    0x9CB5: 0x6100,
    0x9CB6: 0x60F4,
    0x9CB7: 0x60FA,
    0x9CB8: 0x6103,
    0x9CB9: 0x6121,
    0x9CBA: 0x60FB,
    0x9CBB: 0x60F1,
    0x9CBC: 0x610D,
    0x9CBD: 0x610E,
    0x9CBE: 0x6147,
    0x9CBF: 0x613E,
    0x9CC0: 0x6128,
    0x9CC1: 0x6127,
    0x9CC2: 0x614A,
    0x9CC3: 0x613F,
    0x9CC4: 0x613C,
    0x9CC5: 0x612C,
    0x9CC6: 0x6134,
    0x9CC7: 0x613D,
    0x9CC8: 0x6142,
    0x9CC9: 0x6144,
    0x9CCA: 0x6173,
    0x9CCB: 0x6177,
    0x9CCC: 0x6158,
    0x9CCD: 0x6159,
    0x9CCE: 0x615A,
    0x9CCF: 0x616B,
    0x9CD0: 0x6174,
    0x9CD1: 0x616F,
    0x9CD2: 0x6165,
    0x9CD3: 0x6171,
    0x9CD4: 0x615F,
    0x9CD5: 0x615D,
    0x9CD6: 0x6153,
    0x9CD7: 0x6175,
    0x9CD8: 0x6199,
    0x9CD9: 0x6196,
    0x9CDA: 0x6187,
    0x9CDB: 0x61AC,
    0x9CDC: 0x6194,
    0x9CDD: 0x619A,
    0x9CDE: 0x618A,
    0x9CDF: 0x6191,
    0x9CE0: 0x61AB,
    0x9CE1: 0x61AE,
    0x9CE2: 0x61CC,
    0x9CE3: 0x61CA,
    0x9CE4: 0x61C9,
    0x9CE5: 0x61F7,
    0x9CE6: 0x61C8,
    0x9CE7: 0x61C3,
    0x9CE8: 0x61C6,
    0x9CE9: 0x61BA,
    0x9CEA: 0x61CB,
    0x9CEB: 0x7F79,
    0x9CEC: 0x61CD,
    0x9CED: 0x61E6,
    0x9CEE: 0x61E3,
    0x9CEF: 0x61F6,
    0x9CF0: 0x61FA,
    0x9CF1: 0x61F4,
    0x9CF2: 0x61FF,
    0x9CF3: 0x61FD,
    0x9CF4: 0x61FC,
    0x9CF5: 0x61FE,
    0x9CF6: 0x6200,
    0x9CF7: 0x6208,
    0x9CF8: 0x6209,
    0x9CF9: 0x620D,
    0x9CFA: 0x620C,
    0x9CFB: 0x6214,
    0x9CFC: 0x621B,
    0x9D40: 0x621E,
    0x9D41: 0x6221,
    0x9D42: 0x622A,
    0x9D43: 0x622E,
    0x9D44: 0x6230,
    0x9D45: 0x6232,
    0x9D46: 0x6233,
    0x9D47: 0x6241,
    0x9D48: 0x624E,
    0x9D49: 0x625E,
    0x9D4A: 0x6263,
    0x9D4B: 0x625B,
    0x9D4C: 0x6260,
    0x9D4D: 0x6268,
    0x9D4E: 0x627C,
    0x9D4F: 0x6282,
    0x9D50: 0x6289,
    0x9D51: 0x627E,
    0x9D52: 0x6292,
    0x9D53: 0x6293,
    0x9D54: 0x6296,
    0x9D55: 0x62D4,
    0x9D56: 0x6283,
    0x9D57: 0x6294,
    0x9D58: 0x62D7,
    0x9D59: 0x62D1,
    0x9D5A: 0x62BB,
    0x9D5B: 0x62CF,
    0x9D5C: 0x62FF,
    0x9D5D: 0x62C6,
    0x9D5E: 0x64D4,
    0x9D5F: 0x62C8,
    0x9D60: 0x62DC,
    0x9D61: 0x62CC,
    0x9D62: 0x62CA,
    0x9D63: 0x62C2,
    0x9D64: 0x62C7,
    0x9D65: 0x629B,
    0x9D66: 0x62C9,
    0x9D67: 0x630C,
    0x9D68: 0x62EE,
    0x9D69: 0x62F1,
    0x9D6A: 0x6327,
    0x9D6B: 0x6302,
    0x9D6C: 0x6308,
    0x9D6D: 0x62EF,
    0x9D6E: 0x62F5,
    0x9D6F: 0x6350,
    0x9D70: 0x633E,
    0x9D71: 0x634D,
    0x9D72: 0x641C,
    0x9D73: 0x634F,
    0x9D74: 0x6396,
    0x9D75: 0x638E,
    0x9D76: 0x6380,
    0x9D77: 0x63AB,
    0x9D78: 0x6376,
    0x9D79: 0x63A3,
    0x9D7A: 0x638F,
    0x9D7B: 0x6389,
    0x9D7C: 0x639F,
    0x9D7D: 0x63B5,
    0x9D7E: 0x636B,
    0x9D80: 0x6369,
    0x9D81: 0x63BE,
    0x9D82: 0x63E9,
    0x9D83: 0x63C0,
    0x9D84: 0x63C6,
    0x9D85: 0x63E3,
    0x9D86: 0x63C9,
    0x9D87: 0x63D2,
    0x9D88: 0x63F6,
    0x9D89: 0x63C4,
    0x9D8A: 0x6416,
    0x9D8B: 0x6434,
    0x9D8C: 0x6406,
    0x9D8D: 0x6413,
    0x9D8E: 0x6426,
    0x9D8F: 0x6436,
    0x9D90: 0x651D,
    0x9D91: 0x6417,
    0x9D92: 0x6428,
    0x9D93: 0x640F,
    0x9D94: 0x6467,
    0x9D95: 0x646F,
    0x9D96: 0x6476,
    0x9D97: 0x644E,
    0x9D98: 0x652A,
    0x9D99: 0x6495,
    0x9D9A: 0x6493,
    0x9D9B: 0x64A5,
    0x9D9C: 0x64A9,
    0x9D9D: 0x6488,
    0x9D9E: 0x64BC,
    0x9D9F: 0x64DA,
    0x9DA0: 0x64D2,
    0x9DA1: 0x64C5,
    0x9DA2: 0x64C7,
    0x9DA3: 0x64BB,
    0x9DA4: 0x64D8,
    0x9DA5: 0x64C2,
    0x9DA6: 0x64F1,
    0x9DA7: 0x64E7,
    0x9DA8: 0x8209,
    0x9DA9: 0x64E0,
    0x9DAA: 0x64E1,
    0x9DAB: 0x62AC,
    0x9DAC: 0x64E3,
    0x9DAD: 0x64EF,
    0x9DAE: 0x652C,
    0x9DAF: 0x64F6,
    0x9DB0: 0x64F4,
    0x9DB1: 0x64F2,
    0x9DB2: 0x64FA,
    0x9DB3: 0x6500,
    0x9DB4: 0x64FD,
    0x9DB5: 0x6518,
    0x9DB6: 0x651C,
    0x9DB7: 0x6505,
    0x9DB8: 0x6524,
    0x9DB9: 0x6523,
    0x9DBA: 0x652B,
    0x9DBB: 0x6534,
    0x9DBC: 0x6535,
    0x9DBD: 0x6537,
    0x9DBE: 0x6536,
    0x9DBF: 0x6538,
    0x9DC0: 0x754B,
    0x9DC1: 0x6548,
    0x9DC2: 0x6556,
    0x9DC3: 0x6555,
    0x9DC4: 0x654D,
    0x9DC5: 0x6558,
    0x9DC6: 0x655E,
    0x9DC7: 0x655D,
    0x9DC8: 0x6572,
    0x9DC9: 0x6578,
    0x9DCA: 0x6582,
    0x9DCB: 0x6583,
    0x9DCC: 0x8B8A,
    0x9DCD: 0x659B,
    0x9DCE: 0x659F,
    0x9DCF: 0x65AB,
    0x9DD0: 0x65B7,
    0x9DD1: 0x65C3,
    0x9DD2: 0x65C6,
    0x9DD3: 0x65C1,
    0x9DD4: 0x65C4,
    0x9DD5: 0x65CC,
    0x9DD6: 0x65D2,
    0x9DD7: 0x65DB,
    0x9DD8: 0x65D9,
    0x9DD9: 0x65E0,
    0x9DDA: 0x65E1,
    0x9DDB: 0x65F1,
    0x9DDC: 0x6772,
    0x9DDD: 0x660A,
    0x9DDE: 0x6603,
    0x9DDF: 0x65FB,
    0x9DE0: 0x6773,
    0x9DE1: 0x6635,
    0x9DE2: 0x6636,
    0x9DE3: 0x6634,
    0x9DE4: 0x661C,
    0x9DE5: 0x664F,
    0x9DE6: 0x6644,
    0x9DE7: 0x6649,
    0x9DE8: 0x6641,
    0x9DE9: 0x665E,
    0x9DEA: 0x665D,
    0x9DEB: 0x6664,
    0x9DEC: 0x6667,
    0x9DED: 0x6668,
    0x9DEE: 0x665F,
    0x9DEF: 0x6662,
    0x9DF0: 0x6670,
    0x9DF1: 0x6683,
    0x9DF2: 0x6688,
    0x9DF3: 0x668E,
    0x9DF4: 0x6689,
    0x9DF5: 0x6684,
    0x9DF6: 0x6698,
    0x9DF7: 0x669D,
    0x9DF8: 0x66C1,
    0x9DF9: 0x66B9,
    0x9DFA: 0x66C9,
    0x9DFB: 0x66BE,
    0x9DFC: 0x66BC,
    0x9E40: 0x66C4,
    0x9E41: 0x66B8,
    0x9E42: 0x66D6,
    0x9E43: 0x66DA,
    0x9E44: 0x66E0,
    0x9E45: 0x663F,
    0x9E46: 0x66E6,
    0x9E47: 0x66E9,
    0x9E48: 0x66F0,
    0x9E49: 0x66F5,
    0x9E4A: 0x66F7,
    0x9E4B: 0x670F,
    0x9E4C: 0x6716,
    0x9E4D: 0x671E,
    0x9E4E: 0x6726,
    0x9E4F: 0x6727,
    0x9E50: 0x9738,
    0x9E51: 0x672E,
    0x9E52: 0x673F,
    0x9E53: 0x6736,
    0x9E54: 0x6741,
    0x9E55: 0x6738,
    0x9E56: 0x6737,
    0x9E57: 0x6746,
    0x9E58: 0x675E,
    0x9E59: 0x6760,
    0x9E5A: 0x6759,
    0x9E5B: 0x6763,
    0x9E5C: 0x6764,
    0x9E5D: 0x6789,
    0x9E5E: 0x6770,
    0x9E5F: 0x67A9,
    0x9E60: 0x677C,
    0x9E61: 0x676A,
    0x9E62: 0x678C,
    0x9E63: 0x678B,
    0x9E64: 0x67A6,
    0x9E65: 0x67A1,
    0x9E66: 0x6785,
    0x9E67: 0x67B7,
    0x9E68: 0x67EF,
    0x9E69: 0x67B4,
    0x9E6A: 0x67EC,
    0x9E6B: 0x67B3,
    0x9E6C: 0x67E9,
    0x9E6D: 0x67B8,
    0x9E6E: 0x67E4,
    0x9E6F: 0x67DE,
    0x9E70: 0x67DD,
    0x9E71: 0x67E2,
    0x9E72: 0x67EE,
    0x9E73: 0x67B9,
    0x9E74: 0x67CE,
    0x9E75: 0x67C6,
    0x9E76: 0x67E7,
    0x9E77: 0x6A9C,
    0x9E78: 0x681E,
    0x9E79: 0x6846,
    0x9E7A: 0x6829,
    0x9E7B: 0x6840,
    0x9E7C: 0x684D,
    0x9E7D: 0x6832,
    0x9E7E: 0x684E,
    0x9E80: 0x68B3,
    0x9E81: 0x682B,
    0x9E82: 0x6859,
    0x9E83: 0x6863,
    0x9E84: 0x6877,
    0x9E85: 0x687F,
    0x9E86: 0x689F,
    0x9E87: 0x688F,
    0x9E88: 0x68AD,
    0x9E89: 0x6894,
    0x9E8A: 0x689D,
    0x9E8B: 0x689B,
    0x9E8C: 0x6883,
    0x9E8D: 0x6AAE,
    0x9E8E: 0x68B9,
    0x9E8F: 0x6874,
    0x9E90: 0x68B5,
    0x9E91: 0x68A0,
    0x9E92: 0x68BA,
    0x9E93: 0x690F,
    0x9E94: 0x688D,
    0x9E95: 0x687E,
    0x9E96: 0x6901,
    0x9E97: 0x68CA,
    0x9E98: 0x6908,
    0x9E99: 0x68D8,
    0x9E9A: 0x6922,
    0x9E9B: 0x6926,
    0x9E9C: 0x68E1,
    0x9E9D: 0x690C,
    0x9E9E: 0x68CD,
    0x9E9F: 0x68D4,
    0x9EA0: 0x68E7,
    0x9EA1: 0x68D5,
    0x9EA2: 0x6936,
    0x9EA3: 0x6912,
    0x9EA4: 0x6904,
    0x9EA5: 0x68D7,
    0x9EA6: 0x68E3,
    0x9EA7: 0x6925,
    0x9EA8: 0x68F9,
    0x9EA9: 0x68E0,
    0x9EAA: 0x68EF,
    0x9EAB: 0x6928,
    0x9EAC: 0x692A,
    0x9EAD: 0x691A,
    0x9EAE: 0x6923,
    0x9EAF: 0x6921,
    0x9EB0: 0x68C6,
    0x9EB1: 0x6979,
    0x9EB2: 0x6977,
    0x9EB3: 0x695C,
    0x9EB4: 0x6978,
    0x9EB5: 0x696B,
    0x9EB6: 0x6954,
    0x9EB7: 0x697E,
    0x9EB8: 0x696E,
    0x9EB9: 0x6939,
    0x9EBA: 0x6974,
    0x9EBB: 0x693D,
    0x9EBC: 0x6959,
    0x9EBD: 0x6930,
    0x9EBE: 0x6961,
    0x9EBF: 0x695E,
    0x9EC0: 0x695D,
    0x9EC1: 0x6981,
    0x9EC2: 0x696A,
    0x9EC3: 0x69B2,
    0x9EC4: 0x69AE,
    0x9EC5: 0x69D0,
    0x9EC6: 0x69BF,
    0x9EC7: 0x69C1,
    0x9EC8: 0x69D3,
    0x9EC9: 0x69BE,
    0x9ECA: 0x69CE,
    0x9ECB: 0x5BE8,
    0x9ECC: 0x69CA,
    0x9ECD: 0x69DD,
    0x9ECE: 0x69BB,
    0x9ECF: 0x69C3,
    0x9ED0: 0x69A7,
    0x9ED1: 0x6A2E,
    0x9ED2: 0x6991,
    0x9ED3: 0x69A0,
    0x9ED4: 0x699C,
    0x9ED5: 0x6995,
    0x9ED6: 0x69B4,
    0x9ED7: 0x69DE,
    0x9ED8: 0x69E8,
    0x9ED9: 0x6A02,
    0x9EDA: 0x6A1B,
    0x9EDB: 0x69FF,
    0x9EDC: 0x6B0A,
    0x9EDD: 0x69F9,
    0x9EDE: 0x69F2,
    0x9EDF: 0x69E7,
    0x9EE0: 0x6A05,
    0x9EE1: 0x69B1,
    0x9EE2: 0x6A1E,
    0x9EE3: 0x69ED,
    0x9EE4: 0x6A14,
    0x9EE5: 0x69EB,
    0x9EE6: 0x6A0A,
    0x9EE7: 0x6A12,
    0x9EE8: 0x6AC1,
    0x9EE9: 0x6A23,
    0x9EEA: 0x6A13,
    0x9EEB: 0x6A44,
    0x9EEC: 0x6A0C,
    0x9EED: 0x6A72,
    0x9EEE: 0x6A36,
    0x9EEF: 0x6A78,
    0x9EF0: 0x6A47,
    0x9EF1: 0x6A62,
    0x9EF2: 0x6A59,
    0x9EF3: 0x6A66,
    0x9EF4: 0x6A48,
    0x9EF5: 0x6A38,
    0x9EF6: 0x6A22,
    0x9EF7: 0x6A90,
    0x9EF8: 0x6A8D,
    0x9EF9: 0x6AA0,
    0x9EFA: 0x6A84,
    0x9EFB: 0x6AA2,
    0x9EFC: 0x6AA3,
    0x9F40: 0x6A97,
    0x9F41: 0x8617,
    0x9F42: 0x6ABB,
    0x9F43: 0x6AC3,
    0x9F44: 0x6AC2,
    0x9F45: 0x6AB8,
    0x9F46: 0x6AB3,
    0x9F47: 0x6AAC,
    0x9F48: 0x6ADE,
    0x9F49: 0x6AD1,
    0x9F4A: 0x6ADF,
    0x9F4B: 0x6AAA,
    0x9F4C: 0x6ADA,
    0x9F4D: 0x6AEA,
    0x9F4E: 0x6AFB,
    0x9F4F: 0x6B05,
    0x9F50: 0x8616,
    0x9F51: 0x6AFA,
    0x9F52: 0x6B12,
    0x9F53: 0x6B16,
    0x9F54: 0x9B31,
    0x9F55: 0x6B1F,
    0x9F56: 0x6B38,
    0x9F57: 0x6B37,
    0x9F58: 0x76DC,
    0x9F59: 0x6B39,
    0x9F5A: 0x98EE,
    0x9F5B: 0x6B47,
    0x9F5C: 0x6B43,
    0x9F5D: 0x6B49,
    0x9F5E: 0x6B50,
    0x9F5F: 0x6B59,
    0x9F60: 0x6B54,
    0x9F61: 0x6B5B,
    0x9F62: 0x6B5F,
    0x9F63: 0x6B61,
    0x9F64: 0x6B78,
    0x9F65: 0x6B79,
    0x9F66: 0x6B7F,
    0x9F67: 0x6B80,
    0x9F68: 0x6B84,
    0x9F69: 0x6B83,
    0x9F6A: 0x6B8D,
    0x9F6B: 0x6B98,
    0x9F6C: 0x6B95,
    0x9F6D: 0x6B9E,
    0x9F6E: 0x6BA4,
    0x9F6F: 0x6BAA,
    0x9F70: 0x6BAB,
    0x9F71: 0x6BAF,
    0x9F72: 0x6BB2,
    0x9F73: 0x6BB1,
    0x9F74: 0x6BB3,
    0x9F75: 0x6BB7,
    0x9F76: 0x6BBC,
    0x9F77: 0x6BC6,
    0x9F78: 0x6BCB,
    0x9F79: 0x6BD3,
    0x9F7A: 0x6BDF,
    0x9F7B: 0x6BEC,
    0x9F7C: 0x6BEB,
    0x9F7D: 0x6BF3,
    0x9F7E: 0x6BEF,
    0x9F80: 0x9EBE,
    0x9F81: 0x6C08,
    0x9F82: 0x6C13,
    0x9F83: 0x6C14,
    0x9F84: 0x6C1B,
    0x9F85: 0x6C24,
    0x9F86: 0x6C23,
    0x9F87: 0x6C5E,
    0x9F88: 0x6C55,
    0x9F89: 0x6C62,
    0x9F8A: 0x6C6A,
    0x9F8B: 0x6C82,
    0x9F8C: 0x6C8D,
    0x9F8D: 0x6C9A,
    0x9F8E: 0x6C81,
    0x9F8F: 0x6C9B,
    0x9F90: 0x6C7E,
    0x9F91: 0x6C68,
    0x9F92: 0x6C73,
    0x9F93: 0x6C92,
    0x9F94: 0x6C90,
    0x9F95: 0x6CC4,
    0x9F96: 0x6CF1,
    0x9F97: 0x6CD3,
    0x9F98: 0x6CBD,
    0x9F99: 0x6CD7,
    0x9F9A: 0x6CC5,
    0x9F9B: 0x6CDD,
    0x9F9C: 0x6CAE,
    0x9F9D: 0x6CB1,
    0x9F9E: 0x6CBE,
    0x9F9F: 0x6CBA,
    0x9FA0: 0x6CDB,
    0x9FA1: 0x6CEF,
    0x9FA2: 0x6CD9,
    0x9FA3: 0x6CEA,
    0x9FA4: 0x6D1F,
    0x9FA5: 0x884D,
    0x9FA6: 0x6D36,
    0x9FA7: 0x6D2B,
    0x9FA8: 0x6D3D,
    0x9FA9: 0x6D38,
    0x9FAA: 0x6D19,
    0x9FAB: 0x6D35,
    0x9FAC: 0x6D33,
    0x9FAD: 0x6D12,
    0x9FAE: 0x6D0C,
    0x9FAF: 0x6D63,
    0x9FB0: 0x6D93,
    0x9FB1: 0x6D64,
    0x9FB2: 0x6D5A,
    0x9FB3: 0x6D79,
    0x9FB4: 0x6D59,
    0x9FB5: 0x6D8E,
    0x9FB6: 0x6D95,
    0x9FB7: 0x6FE4,
    0x9FB8: 0x6D85,
    0x9FB9: 0x6DF9,
    0x9FBA: 0x6E15,
    0x9FBB: 0x6E0A,
    0x9FBC: 0x6DB5,
    0x9FBD: 0x6DC7,
    0x9FBE: 0x6DE6,
    0x9FBF: 0x6DB8,
    0x9FC0: 0x6DC6,
    0x9FC1: 0x6DEC,
    0x9FC2: 0x6DDE,
    0x9FC3: 0x6DCC,
    0x9FC4: 0x6DE8,
    0x9FC5: 0x6DD2,
    0x9FC6: 0x6DC5,
    0x9FC7: 0x6DFA,
    0x9FC8: 0x6DD9,
    0x9FC9: 0x6DE4,
    0x9FCA: 0x6DD5,
    0x9FCB: 0x6DEA,
    0x9FCC: 0x6DEE,
    0x9FCD: 0x6E2D,
    0x9FCE: 0x6E6E,
    0x9FCF: 0x6E2E,
    0x9FD0: 0x6E19,
    0x9FD1: 0x6E72,
    0x9FD2: 0x6E5F,
    0x9FD3: 0x6E3E,
    0x9FD4: 0x6E23,
    0x9FD5: 0x6E6B,
    0x9FD6: 0x6E2B,
    0x9FD7: 0x6E76,
    0x9FD8: 0x6E4D,
    0x9FD9: 0x6E1F,
    0x9FDA: 0x6E43,
    0x9FDB: 0x6E3A,
    0x9FDC: 0x6E4E,
    0x9FDD: 0x6E24,
    0x9FDE: 0x6EFF,
    0x9FDF: 0x6E1D,
    0x9FE0: 0x6E38,
    0x9FE1: 0x6E82,
    0x9FE2: 0x6EAA,
    0x9FE3: 0x6E98,
    0x9FE4: 0x6EC9,
    0x9FE5: 0x6EB7,
    0x9FE6: 0x6ED3,
    0x9FE7: 0x6EBD,
    0x9FE8: 0x6EAF,
    0x9FE9: 0x6EC4,
    0x9FEA: 0x6EB2,
    0x9FEB: 0x6ED4,
    0x9FEC: 0x6ED5,
    0x9FED: 0x6E8F,
    0x9FEE: 0x6EA5,
    0x9FEF: 0x6EC2,
    0x9FF0: 0x6E9F,
    0x9FF1: 0x6F41,
    0x9FF2: 0x6F11,
    0x9FF3: 0x704C,
    0x9FF4: 0x6EEC,
    0x9FF5: 0x6EF8,
    0x9FF6: 0x6EFE,
    0x9FF7: 0x6F3F,
    0x9FF8: 0x6EF2,
    0x9FF9: 0x6F31,
    0x9FFA: 0x6EEF,
    0x9FFB: 0x6F32,
    0x9FFC: 0x6ECC,
    0xA1: 0xFF61,
    0xA2: 0xFF62,
    0xA3: 0xFF63,
    0xA4: 0xFF64,
    0xA5: 0xFF65,
    0xA6: 0xFF66,
    0xA7: 0xFF67,
    0xA8: 0xFF68,
    0xA9: 0xFF69,
    0xAA: 0xFF6A,
    0xAB: 0xFF6B,
    0xAC: 0xFF6C,
    0xAD: 0xFF6D,
    0xAE: 0xFF6E,
    0xAF: 0xFF6F,
    0xB0: 0xFF70,
    0xB1: 0xFF71,
    0xB2: 0xFF72,
    0xB3: 0xFF73,
    0xB4: 0xFF74,
    0xB5: 0xFF75,
    0xB6: 0xFF76,
    0xB7: 0xFF77,
    0xB8: 0xFF78,
    0xB9: 0xFF79,
    0xBA: 0xFF7A,
    0xBB: 0xFF7B,
    0xBC: 0xFF7C,
    0xBD: 0xFF7D,
    0xBE: 0xFF7E,
    0xBF: 0xFF7F,
    0xC0: 0xFF80,
    0xC1: 0xFF81,
    0xC2: 0xFF82,
    0xC3: 0xFF83,
    0xC4: 0xFF84,
    0xC5: 0xFF85,
    0xC6: 0xFF86,
    0xC7: 0xFF87,
    0xC8: 0xFF88,
    0xC9: 0xFF89,
    0xCA: 0xFF8A,
    0xCB: 0xFF8B,
    0xCC: 0xFF8C,
    0xCD: 0xFF8D,
    0xCE: 0xFF8E,
    0xCF: 0xFF8F,
    0xD0: 0xFF90,
    0xD1: 0xFF91,
    0xD2: 0xFF92,
    0xD3: 0xFF93,
    0xD4: 0xFF94,
    0xD5: 0xFF95,
    0xD6: 0xFF96,
    0xD7: 0xFF97,
    0xD8: 0xFF98,
    0xD9: 0xFF99,
    0xDA: 0xFF9A,
    0xDB: 0xFF9B,
    0xDC: 0xFF9C,
    0xDD: 0xFF9D,
    0xDE: 0xFF9E,
    0xDF: 0xFF9F,
    0xE040: 0x6F3E,
    0xE041: 0x6F13,
    0xE042: 0x6EF7,
    0xE043: 0x6F86,
    0xE044: 0x6F7A,
    0xE045: 0x6F78,
    0xE046: 0x6F81,
    0xE047: 0x6F80,
    0xE048: 0x6F6F,
    0xE049: 0x6F5B,
    0xE04A: 0x6FF3,
    0xE04B: 0x6F6D,
    0xE04C: 0x6F82,
    0xE04D: 0x6F7C,
    0xE04E: 0x6F58,
    0xE04F: 0x6F8E,
    0xE050: 0x6F91,
    0xE051: 0x6FC2,
    0xE052: 0x6F66,
    0xE053: 0x6FB3,
    0xE054: 0x6FA3,
    0xE055: 0x6FA1,
    0xE056: 0x6FA4,
    0xE057: 0x6FB9,
    0xE058: 0x6FC6,
    0xE059: 0x6FAA,
    0xE05A: 0x6FDF,
    0xE05B: 0x6FD5,
    0xE05C: 0x6FEC,
    0xE05D: 0x6FD4,
    0xE05E: 0x6FD8,
    0xE05F: 0x6FF1,
    0xE060: 0x6FEE,
    0xE061: 0x6FDB,
    0xE062: 0x7009,
    0xE063: 0x700B,
    0xE064: 0x6FFA,
    0xE065: 0x7011,
    0xE066: 0x7001,
    0xE067: 0x700F,
    0xE068: 0x6FFE,
    0xE069: 0x701B,
    0xE06A: 0x701A,
    0xE06B: 0x6F74,
    0xE06C: 0x701D,
    0xE06D: 0x7018,
    0xE06E: 0x701F,
    0xE06F: 0x7030,
    0xE070: 0x703E,
    0xE071: 0x7032,
    0xE072: 0x7051,
    0xE073: 0x7063,
    0xE074: 0x7099,
    0xE075: 0x7092,
    0xE076: 0x70AF,
    0xE077: 0x70F1,
    0xE078: 0x70AC,
    0xE079: 0x70B8,
    0xE07A: 0x70B3,
    0xE07B: 0x70AE,
    0xE07C: 0x70DF,
    0xE07D: 0x70CB,
    0xE07E: 0x70DD,
    0xE080: 0x70D9,
    0xE081: 0x7109,
    0xE082: 0x70FD,
    0xE083: 0x711C,
    0xE084: 0x7119,
    0xE085: 0x7165,
    0xE086: 0x7155,
    0xE087: 0x7188,
    0xE088: 0x7166,
    0xE089: 0x7162,
    0xE08A: 0x714C,
    0xE08B: 0x7156,
    0xE08C: 0x716C,
    0xE08D: 0x718F,
    0xE08E: 0x71FB,
    0xE08F: 0x7184,
    0xE090: 0x7195,
    0xE091: 0x71A8,
    0xE092: 0x71AC,
    0xE093: 0x71D7,
    0xE094: 0x71B9,
    0xE095: 0x71BE,
    0xE096: 0x71D2,
    0xE097: 0x71C9,
    0xE098: 0x71D4,
    0xE099: 0x71CE,
    0xE09A: 0x71E0,
    0xE09B: 0x71EC,
    0xE09C: 0x71E7,
    0xE09D: 0x71F5,
    0xE09E: 0x71FC,
    0xE09F: 0x71F9,
    0xE0A0: 0x71FF,
    0xE0A1: 0x720D,
    0xE0A2: 0x7210,
    0xE0A3: 0x721B,
    0xE0A4: 0x7228,
    0xE0A5: 0x722D,
    0xE0A6: 0x722C,
    0xE0A7: 0x7230,
    0xE0A8: 0x7232,
    0xE0A9: 0x723B,
    0xE0AA: 0x723C,
    0xE0AB: 0x723F,
    0xE0AC: 0x7240,
    0xE0AD: 0x7246,
    0xE0AE: 0x724B,
    0xE0AF: 0x7258,
    0xE0B0: 0x7274,
    0xE0B1: 0x727E,
    0xE0B2: 0x7282,
    0xE0B3: 0x7281,
    0xE0B4: 0x7287,
    0xE0B5: 0x7292,
    0xE0B6: 0x7296,
    0xE0B7: 0x72A2,
    0xE0B8: 0x72A7,
    0xE0B9: 0x72B9,
    0xE0BA: 0x72B2,
    0xE0BB: 0x72C3,
    0xE0BC: 0x72C6,
    0xE0BD: 0x72C4,
    0xE0BE: 0x72CE,
    0xE0BF: 0x72D2,
    0xE0C0: 0x72E2,
    0xE0C1: 0x72E0,
    0xE0C2: 0x72E1,
    0xE0C3: 0x72F9,
    0xE0C4: 0x72F7,
    0xE0C5: 0x500F,
    0xE0C6: 0x7317,
    0xE0C7: 0x730A,
    0xE0C8: 0x731C,
    0xE0C9: 0x7316,
    0xE0CA: 0x731D,
    0xE0CB: 0x7334,
    0xE0CC: 0x732F,
    0xE0CD: 0x7329,
    0xE0CE: 0x7325,
    0xE0CF: 0x733E,
    0xE0D0: 0x734E,
    0xE0D1: 0x734F,
    0xE0D2: 0x9ED8,
    0xE0D3: 0x7357,
    0xE0D4: 0x736A,
    0xE0D5: 0x7368,
    0xE0D6: 0x7370,
    0xE0D7: 0x7378,
    0xE0D8: 0x7375,
    0xE0D9: 0x737B,
    0xE0DA: 0x737A,
    0xE0DB: 0x73C8,
    0xE0DC: 0x73B3,
    0xE0DD: 0x73CE,
    0xE0DE: 0x73BB,
    0xE0DF: 0x73C0,
    0xE0E0: 0x73E5,
    0xE0E1: 0x73EE,
    0xE0E2: 0x73DE,
    0xE0E3: 0x74A2,
    0xE0E4: 0x7405,
    0xE0E5: 0x746F,
    0xE0E6: 0x7425,
    0xE0E7: 0x73F8,
    0xE0E8: 0x7432,
    0xE0E9: 0x743A,
    0xE0EA: 0x7455,
    0xE0EB: 0x743F,
    0xE0EC: 0x745F,
    0xE0ED: 0x7459,
    0xE0EE: 0x7441,
    0xE0EF: 0x745C,
    0xE0F0: 0x7469,
    0xE0F1: 0x7470,
    0xE0F2: 0x7463,
    0xE0F3: 0x746A,
    0xE0F4: 0x7476,
    0xE0F5: 0x747E,
    0xE0F6: 0x748B,
    0xE0F7: 0x749E,
    0xE0F8: 0x74A7,
    0xE0F9: 0x74CA,
    0xE0FA: 0x74CF,
    0xE0FB: 0x74D4,
    0xE0FC: 0x73F1,
    0xE140: 0x74E0,
    0xE141: 0x74E3,
    0xE142: 0x74E7,
    0xE143: 0x74E9,
    0xE144: 0x74EE,
    0xE145: 0x74F2,
    0xE146: 0x74F0,
    0xE147: 0x74F1,
    0xE148: 0x74F8,
    0xE149: 0x74F7,
    0xE14A: 0x7504,
    0xE14B: 0x7503,
    0xE14C: 0x7505,
    0xE14D: 0x750C,
    0xE14E: 0x750E,
    0xE14F: 0x750D,
    0xE150: 0x7515,
    0xE151: 0x7513,
    0xE152: 0x751E,
    0xE153: 0x7526,
    0xE154: 0x752C,
    0xE155: 0x753C,
    0xE156: 0x7544,
    0xE157: 0x754D,
    0xE158: 0x754A,
    0xE159: 0x7549,
    0xE15A: 0x755B,
    0xE15B: 0x7546,
    0xE15C: 0x755A,
    0xE15D: 0x7569,
    0xE15E: 0x7564,
    0xE15F: 0x7567,
    0xE160: 0x756B,
    0xE161: 0x756D,
    0xE162: 0x7578,
    0xE163: 0x7576,
    0xE164: 0x7586,
    0xE165: 0x7587,
    0xE166: 0x7574,
    0xE167: 0x758A,
    0xE168: 0x7589,
    0xE169: 0x7582,
    0xE16A: 0x7594,
    0xE16B: 0x759A,
    0xE16C: 0x759D,
    0xE16D: 0x75A5,
    0xE16E: 0x75A3,
    0xE16F: 0x75C2,
    0xE170: 0x75B3,
    0xE171: 0x75C3,
    0xE172: 0x75B5,
    0xE173: 0x75BD,
    0xE174: 0x75B8,
    0xE175: 0x75BC,
    0xE176: 0x75B1,
    0xE177: 0x75CD,
    0xE178: 0x75CA,
    0xE179: 0x75D2,
    0xE17A: 0x75D9,
    0xE17B: 0x75E3,
    0xE17C: 0x75DE,
    0xE17D: 0x75FE,
    0xE17E: 0x75FF,
    0xE180: 0x75FC,
    0xE181: 0x7601,
    0xE182: 0x75F0,
    0xE183: 0x75FA,
    0xE184: 0x75F2,
    0xE185: 0x75F3,
    0xE186: 0x760B,
    0xE187: 0x760D,
    0xE188: 0x7609,
    0xE189: 0x761F,
    0xE18A: 0x7627,
    0xE18B: 0x7620,
    0xE18C: 0x7621,
    0xE18D: 0x7622,
    0xE18E: 0x7624,
    0xE18F: 0x7634,
    0xE190: 0x7630,
    0xE191: 0x763B,
    0xE192: 0x7647,
    0xE193: 0x7648,
    0xE194: 0x7646,
    0xE195: 0x765C,
    0xE196: 0x7658,
    0xE197: 0x7661,
    0xE198: 0x7662,
    0xE199: 0x7668,
    0xE19A: 0x7669,
    0xE19B: 0x766A,
    0xE19C: 0x7667,
    0xE19D: 0x766C,
    0xE19E: 0x7670,
    0xE19F: 0x7672,
    0xE1A0: 0x7676,
    0xE1A1: 0x7678,
    0xE1A2: 0x767C,
    0xE1A3: 0x7680,
    0xE1A4: 0x7683,
    0xE1A5: 0x7688,
    0xE1A6: 0x768B,
    0xE1A7: 0x768E,
    0xE1A8: 0x7696,
    0xE1A9: 0x7693,
    0xE1AA: 0x7699,
    0xE1AB: 0x769A,
    0xE1AC: 0x76B0,
    0xE1AD: 0x76B4,
    0xE1AE: 0x76B8,
    0xE1AF: 0x76B9,
    0xE1B0: 0x76BA,
    0xE1B1: 0x76C2,
    0xE1B2: 0x76CD,
    0xE1B3: 0x76D6,
    0xE1B4: 0x76D2,
    0xE1B5: 0x76DE,
    0xE1B6: 0x76E1,
    0xE1B7: 0x76E5,
    0xE1B8: 0x76E7,
    0xE1B9: 0x76EA,
    0xE1BA: 0x862F,
    0xE1BB: 0x76FB,
    0xE1BC: 0x7708,
    0xE1BD: 0x7707,
    0xE1BE: 0x7704,
    0xE1BF: 0x7729,
    0xE1C0: 0x7724,
    0xE1C1: 0x771E,
    0xE1C2: 0x7725,
    0xE1C3: 0x7726,
    0xE1C4: 0x771B,
    0xE1C5: 0x7737,
    0xE1C6: 0x7738,
    0xE1C7: 0x7747,
    0xE1C8: 0x775A,
    0xE1C9: 0x7768,
    0xE1CA: 0x776B,
    0xE1CB: 0x775B,
    0xE1CC: 0x7765,
    0xE1CD: 0x777F,
    0xE1CE: 0x777E,
    0xE1CF: 0x7779,
    0xE1D0: 0x778E,
    0xE1D1: 0x778B,
    0xE1D2: 0x7791,
    0xE1D3: 0x77A0,
    0xE1D4: 0x779E,
    0xE1D5: 0x77B0,
    0xE1D6: 0x77B6,
    0xE1D7: 0x77B9,
    0xE1D8: 0x77BF,
    0xE1D9: 0x77BC,
    0xE1DA: 0x77BD,
    0xE1DB: 0x77BB,
    0xE1DC: 0x77C7,
    0xE1DD: 0x77CD,
    0xE1DE: 0x77D7,
    0xE1DF: 0x77DA,
    0xE1E0: 0x77DC,
    0xE1E1: 0x77E3,
    0xE1E2: 0x77EE,
    0xE1E3: 0x77FC,
    0xE1E4: 0x780C,
    0xE1E5: 0x7812,
    0xE1E6: 0x7926,
    0xE1E7: 0x7820,
    0xE1E8: 0x792A,
    0xE1E9: 0x7845,
    0xE1EA: 0x788E,
    0xE1EB: 0x7874,
    0xE1EC: 0x7886,
    0xE1ED: 0x787C,
    0xE1EE: 0x789A,
    0xE1EF: 0x788C,
    0xE1F0: 0x78A3,
    0xE1F1: 0x78B5,
    0xE1F2: 0x78AA,
    0xE1F3: 0x78AF,
    0xE1F4: 0x78D1,
    0xE1F5: 0x78C6,
    0xE1F6: 0x78CB,
    0xE1F7: 0x78D4,
    0xE1F8: 0x78BE,
    0xE1F9: 0x78BC,
    0xE1FA: 0x78C5,
    0xE1FB: 0x78CA,
    0xE1FC: 0x78EC,
    0xE240: 0x78E7,
    0xE241: 0x78DA,
    0xE242: 0x78FD,
    0xE243: 0x78F4,
    0xE244: 0x7907,
    0xE245: 0x7912,
    0xE246: 0x7911,
    0xE247: 0x7919,
    0xE248: 0x792C,
    0xE249: 0x792B,
    0xE24A: 0x7940,
    0xE24B: 0x7960,
    0xE24C: 0x7957,
    0xE24D: 0x795F,
    0xE24E: 0x795A,
    0xE24F: 0x7955,
    0xE250: 0x7953,
    0xE251: 0x797A,
    0xE252: 0x797F,
    0xE253: 0x798A,
    0xE254: 0x799D,
    0xE255: 0x79A7,
    0xE256: 0x9F4B,
    0xE257: 0x79AA,
    0xE258: 0x79AE,
    0xE259: 0x79B3,
    0xE25A: 0x79B9,
    0xE25B: 0x79BA,
    0xE25C: 0x79C9,
    0xE25D: 0x79D5,
    0xE25E: 0x79E7,
    0xE25F: 0x79EC,
    0xE260: 0x79E1,
    0xE261: 0x79E3,
    0xE262: 0x7A08,
    0xE263: 0x7A0D,
    0xE264: 0x7A18,
    0xE265: 0x7A19,
    0xE266: 0x7A20,
    0xE267: 0x7A1F,
    0xE268: 0x7980,
    0xE269: 0x7A31,
    0xE26A: 0x7A3B,
    0xE26B: 0x7A3E,
    0xE26C: 0x7A37,
    0xE26D: 0x7A43,
    0xE26E: 0x7A57,
    0xE26F: 0x7A49,
    0xE270: 0x7A61,
    0xE271: 0x7A62,
    0xE272: 0x7A69,
    0xE273: 0x9F9D,
    0xE274: 0x7A70,
    0xE275: 0x7A79,
    0xE276: 0x7A7D,
    0xE277: 0x7A88,
    0xE278: 0x7A97,
    0xE279: 0x7A95,
    0xE27A: 0x7A98,
    0xE27B: 0x7A96,
    0xE27C: 0x7AA9,
    0xE27D: 0x7AC8,
    0xE27E: 0x7AB0,
    0xE280: 0x7AB6,
    0xE281: 0x7AC5,
    0xE282: 0x7AC4,
    0xE283: 0x7ABF,
    0xE284: 0x9083,
    0xE285: 0x7AC7,
    0xE286: 0x7ACA,
    0xE287: 0x7ACD,
    0xE288: 0x7ACF,
    0xE289: 0x7AD5,
    0xE28A: 0x7AD3,
    0xE28B: 0x7AD9,
    0xE28C: 0x7ADA,
    0xE28D: 0x7ADD,
    0xE28E: 0x7AE1,
    0xE28F: 0x7AE2,
    0xE290: 0x7AE6,
    0xE291: 0x7AED,
    0xE292: 0x7AF0,
    0xE293: 0x7B02,
    0xE294: 0x7B0F,
    0xE295: 0x7B0A,
    0xE296: 0x7B06,
    0xE297: 0x7B33,
    0xE298: 0x7B18,
    0xE299: 0x7B19,
    0xE29A: 0x7B1E,
    0xE29B: 0x7B35,
    0xE29C: 0x7B28,
    0xE29D: 0x7B36,
    0xE29E: 0x7B50,
    0xE29F: 0x7B7A,
    0xE2A0: 0x7B04,
    0xE2A1: 0x7B4D,
    0xE2A2: 0x7B0B,
    0xE2A3: 0x7B4C,
    0xE2A4: 0x7B45,
    0xE2A5: 0x7B75,
    0xE2A6: 0x7B65,
    0xE2A7: 0x7B74,
    0xE2A8: 0x7B67,
    0xE2A9: 0x7B70,
    0xE2AA: 0x7B71,
    0xE2AB: 0x7B6C,
    0xE2AC: 0x7B6E,
    0xE2AD: 0x7B9D,
    0xE2AE: 0x7B98,
    0xE2AF: 0x7B9F,
    0xE2B0: 0x7B8D,
    0xE2B1: 0x7B9C,
    0xE2B2: 0x7B9A,
    0xE2B3: 0x7B8B,
    0xE2B4: 0x7B92,
    0xE2B5: 0x7B8F,
    0xE2B6: 0x7B5D,
    0xE2B7: 0x7B99,
    0xE2B8: 0x7BCB,
    0xE2B9: 0x7BC1,
    0xE2BA: 0x7BCC,
    0xE2BB: 0x7BCF,
    0xE2BC: 0x7BB4,
    0xE2BD: 0x7BC6,
    0xE2BE: 0x7BDD,
    0xE2BF: 0x7BE9,
    0xE2C0: 0x7C11,
    0xE2C1: 0x7C14,
    0xE2C2: 0x7BE6,
    0xE2C3: 0x7BE5,
    0xE2C4: 0x7C60,
    0xE2C5: 0x7C00,
    0xE2C6: 0x7C07,
    0xE2C7: 0x7C13,
    0xE2C8: 0x7BF3,
    0xE2C9: 0x7BF7,
    0xE2CA: 0x7C17,
    0xE2CB: 0x7C0D,
    0xE2CC: 0x7BF6,
    0xE2CD: 0x7C23,
    0xE2CE: 0x7C27,
    0xE2CF: 0x7C2A,
    0xE2D0: 0x7C1F,
    0xE2D1: 0x7C37,
    0xE2D2: 0x7C2B,
    0xE2D3: 0x7C3D,
    0xE2D4: 0x7C4C,
    0xE2D5: 0x7C43,
    0xE2D6: 0x7C54,
    0xE2D7: 0x7C4F,
    0xE2D8: 0x7C40,
    0xE2D9: 0x7C50,
    0xE2DA: 0x7C58,
    0xE2DB: 0x7C5F,
    0xE2DC: 0x7C64,
    0xE2DD: 0x7C56,
    0xE2DE: 0x7C65,
    0xE2DF: 0x7C6C,
    0xE2E0: 0x7C75,
    0xE2E1: 0x7C83,
    0xE2E2: 0x7C90,
    0xE2E3: 0x7CA4,
    0xE2E4: 0x7CAD,
    0xE2E5: 0x7CA2,
    0xE2E6: 0x7CAB,
    0xE2E7: 0x7CA1,
    0xE2E8: 0x7CA8,
    0xE2E9: 0x7CB3,
    0xE2EA: 0x7CB2,
    0xE2EB: 0x7CB1,
    0xE2EC: 0x7CAE,
    0xE2ED: 0x7CB9,
    0xE2EE: 0x7CBD,
    0xE2EF: 0x7CC0,
    0xE2F0: 0x7CC5,
    0xE2F1: 0x7CC2,
    0xE2F2: 0x7CD8,
    0xE2F3: 0x7CD2,
    0xE2F4: 0x7CDC,
    0xE2F5: 0x7CE2,
    0xE2F6: 0x9B3B,
    0xE2F7: 0x7CEF,
    0xE2F8: 0x7CF2,
    0xE2F9: 0x7CF4,
    0xE2FA: 0x7CF6,
    0xE2FB: 0x7CFA,
    0xE2FC: 0x7D06,
    0xE340: 0x7D02,
    0xE341: 0x7D1C,
    0xE342: 0x7D15,
    0xE343: 0x7D0A,
    0xE344: 0x7D45,
    0xE345: 0x7D4B,
    0xE346: 0x7D2E,
    0xE347: 0x7D32,
    0xE348: 0x7D3F,
    0xE349: 0x7D35,
    0xE34A: 0x7D46,
    0xE34B: 0x7D73,
    0xE34C: 0x7D56,
    0xE34D: 0x7D4E,
    0xE34E: 0x7D72,
    0xE34F: 0x7D68,
    0xE350: 0x7D6E,
    0xE351: 0x7D4F,
    0xE352: 0x7D63,
    0xE353: 0x7D93,
    0xE354: 0x7D89,
    0xE355: 0x7D5B,
    0xE356: 0x7D8F,
    0xE357: 0x7D7D,
    0xE358: 0x7D9B,
    0xE359: 0x7DBA,
    0xE35A: 0x7DAE,
    0xE35B: 0x7DA3,
    0xE35C: 0x7DB5,
    0xE35D: 0x7DC7,
    0xE35E: 0x7DBD,
    0xE35F: 0x7DAB,
    0xE360: 0x7E3D,
    0xE361: 0x7DA2,
    0xE362: 0x7DAF,
    0xE363: 0x7DDC,
    0xE364: 0x7DB8,
    0xE365: 0x7D9F,
    0xE366: 0x7DB0,
    0xE367: 0x7DD8,
    0xE368: 0x7DDD,
    0xE369: 0x7DE4,
    0xE36A: 0x7DDE,
    0xE36B: 0x7DFB,
    0xE36C: 0x7DF2,
    0xE36D: 0x7DE1,
    0xE36E: 0x7E05,
    0xE36F: 0x7E0A,
    0xE370: 0x7E23,
    0xE371: 0x7E21,
    0xE372: 0x7E12,
    0xE373: 0x7E31,
    0xE374: 0x7E1F,
    0xE375: 0x7E09,
    0xE376: 0x7E0B,
    0xE377: 0x7E22,
    0xE378: 0x7E46,
    0xE379: 0x7E66,
    0xE37A: 0x7E3B,
    0xE37B: 0x7E35,
    0xE37C: 0x7E39,
    0xE37D: 0x7E43,
    0xE37E: 0x7E37,
    0xE380: 0x7E32,
    0xE381: 0x7E3A,
    0xE382: 0x7E67,
    0xE383: 0x7E5D,
    0xE384: 0x7E56,
    0xE385: 0x7E5E,
    0xE386: 0x7E59,
    0xE387: 0x7E5A,
    0xE388: 0x7E79,
    0xE389: 0x7E6A,
    0xE38A: 0x7E69,
    0xE38B: 0x7E7C,
    0xE38C: 0x7E7B,
    0xE38D: 0x7E83,
    0xE38E: 0x7DD5,
    0xE38F: 0x7E7D,
    0xE390: 0x8FAE,
    0xE391: 0x7E7F,
    0xE392: 0x7E88,
    0xE393: 0x7E89,
    0xE394: 0x7E8C,
    0xE395: 0x7E92,
    0xE396: 0x7E90,
    0xE397: 0x7E93,
    0xE398: 0x7E94,
    0xE399: 0x7E96,
    0xE39A: 0x7E8E,
    0xE39B: 0x7E9B,
    0xE39C: 0x7E9C,
    0xE39D: 0x7F38,
    0xE39E: 0x7F3A,
    0xE39F: 0x7F45,
    0xE3A0: 0x7F4C,
    0xE3A1: 0x7F4D,
    0xE3A2: 0x7F4E,
    0xE3A3: 0x7F50,
    0xE3A4: 0x7F51,
    0xE3A5: 0x7F55,
    0xE3A6: 0x7F54,
    0xE3A7: 0x7F58,
    0xE3A8: 0x7F5F,
    0xE3A9: 0x7F60,
    0xE3AA: 0x7F68,
    0xE3AB: 0x7F69,
    0xE3AC: 0x7F67,
    0xE3AD: 0x7F78,
    0xE3AE: 0x7F82,
    0xE3AF: 0x7F86,
    0xE3B0: 0x7F83,
    0xE3B1: 0x7F88,
    0xE3B2: 0x7F87,
    0xE3B3: 0x7F8C,
    0xE3B4: 0x7F94,
    0xE3B5: 0x7F9E,
    0xE3B6: 0x7F9D,
    0xE3B7: 0x7F9A,
    0xE3B8: 0x7FA3,
    0xE3B9: 0x7FAF,
    0xE3BA: 0x7FB2,
    0xE3BB: 0x7FB9,
    0xE3BC: 0x7FAE,
    0xE3BD: 0x7FB6,
    0xE3BE: 0x7FB8,
    0xE3BF: 0x8B71,
    0xE3C0: 0x7FC5,
    0xE3C1: 0x7FC6,
    0xE3C2: 0x7FCA,
    0xE3C3: 0x7FD5,
    0xE3C4: 0x7FD4,
    0xE3C5: 0x7FE1,
    0xE3C6: 0x7FE6,
    0xE3C7: 0x7FE9,
    0xE3C8: 0x7FF3,
    0xE3C9: 0x7FF9,
    0xE3CA: 0x98DC,
    0xE3CB: 0x8006,
    0xE3CC: 0x8004,
    0xE3CD: 0x800B,
    0xE3CE: 0x8012,
    0xE3CF: 0x8018,
    0xE3D0: 0x8019,
    0xE3D1: 0x801C,
    0xE3D2: 0x8021,
    0xE3D3: 0x8028,
    0xE3D4: 0x803F,
    0xE3D5: 0x803B,
    0xE3D6: 0x804A,
    0xE3D7: 0x8046,
    0xE3D8: 0x8052,
    0xE3D9: 0x8058,
    0xE3DA: 0x805A,
    0xE3DB: 0x805F,
    0xE3DC: 0x8062,
    0xE3DD: 0x8068,
    0xE3DE: 0x8073,
    0xE3DF: 0x8072,
    0xE3E0: 0x8070,
    0xE3E1: 0x8076,
    0xE3E2: 0x8079,
    0xE3E3: 0x807D,
    0xE3E4: 0x807F,
    0xE3E5: 0x8084,
    0xE3E6: 0x8086,
    0xE3E7: 0x8085,
    0xE3E8: 0x809B,
    0xE3E9: 0x8093,
    0xE3EA: 0x809A,
    0xE3EB: 0x80AD,
    0xE3EC: 0x5190,
    0xE3ED: 0x80AC,
    0xE3EE: 0x80DB,
    0xE3EF: 0x80E5,
    0xE3F0: 0x80D9,
    0xE3F1: 0x80DD,
    0xE3F2: 0x80C4,
    0xE3F3: 0x80DA,
    0xE3F4: 0x80D6,
    0xE3F5: 0x8109,
    0xE3F6: 0x80EF,
    0xE3F7: 0x80F1,
    0xE3F8: 0x811B,
    0xE3F9: 0x8129,
    0xE3FA: 0x8123,
    0xE3FB: 0x812F,
    0xE3FC: 0x814B,
    0xE440: 0x968B,
    0xE441: 0x8146,
    0xE442: 0x813E,
    0xE443: 0x8153,
    0xE444: 0x8151,
    0xE445: 0x80FC,
    0xE446: 0x8171,
    0xE447: 0x816E,
    0xE448: 0x8165,
    0xE449: 0x8166,
    0xE44A: 0x8174,
    0xE44B: 0x8183,
    0xE44C: 0x8188,
    0xE44D: 0x818A,
    0xE44E: 0x8180,
    0xE44F: 0x8182,
    0xE450: 0x81A0,
    0xE451: 0x8195,
    0xE452: 0x81A4,
    0xE453: 0x81A3,
    0xE454: 0x815F,
    0xE455: 0x8193,
    0xE456: 0x81A9,
    0xE457: 0x81B0,
    0xE458: 0x81B5,
    0xE459: 0x81BE,
    0xE45A: 0x81B8,
    0xE45B: 0x81BD,
    0xE45C: 0x81C0,
    0xE45D: 0x81C2,
    0xE45E: 0x81BA,
    0xE45F: 0x81C9,
    0xE460: 0x81CD,
    0xE461: 0x81D1,
    0xE462: 0x81D9,
    0xE463: 0x81D8,
    0xE464: 0x81C8,
    0xE465: 0x81DA,
    0xE466: 0x81DF,
    0xE467: 0x81E0,
    0xE468: 0x81E7,
    0xE469: 0x81FA,
    0xE46A: 0x81FB,
    0xE46B: 0x81FE,
    0xE46C: 0x8201,
    0xE46D: 0x8202,
    0xE46E: 0x8205,
    0xE46F: 0x8207,
    0xE470: 0x820A,
    0xE471: 0x820D,
    0xE472: 0x8210,
    0xE473: 0x8216,
    0xE474: 0x8229,
    0xE475: 0x822B,
    0xE476: 0x8238,
    0xE477: 0x8233,
    0xE478: 0x8240,
    0xE479: 0x8259,
    0xE47A: 0x8258,
    0xE47B: 0x825D,
    0xE47C: 0x825A,
    0xE47D: 0x825F,
    0xE47E: 0x8264,
    0xE480: 0x8262,
    0xE481: 0x8268,
    0xE482: 0x826A,
    0xE483: 0x826B,
    0xE484: 0x822E,
    0xE485: 0x8271,
    0xE486: 0x8277,
    0xE487: 0x8278,
    0xE488: 0x827E,
    0xE489: 0x828D,
    0xE48A: 0x8292,
    0xE48B: 0x82AB,
    0xE48C: 0x829F,
    0xE48D: 0x82BB,
    0xE48E: 0x82AC,
    0xE48F: 0x82E1,
    0xE490: 0x82E3,
    0xE491: 0x82DF,
    0xE492: 0x82D2,
    0xE493: 0x82F4,
    0xE494: 0x82F3,
    0xE495: 0x82FA,
    0xE496: 0x8393,
    0xE497: 0x8303,
    0xE498: 0x82FB,
    0xE499: 0x82F9,
    0xE49A: 0x82DE,
    0xE49B: 0x8306,
    0xE49C: 0x82DC,
    0xE49D: 0x8309,
    0xE49E: 0x82D9,
    0xE49F: 0x8335,
    0xE4A0: 0x8334,
    0xE4A1: 0x8316,
    0xE4A2: 0x8332,
    0xE4A3: 0x8331,
    0xE4A4: 0x8340,
    0xE4A5: 0x8339,
    0xE4A6: 0x8350,
    0xE4A7: 0x8345,
    0xE4A8: 0x832F,
    0xE4A9: 0x832B,
    0xE4AA: 0x8317,
    0xE4AB: 0x8318,
    0xE4AC: 0x8385,
    0xE4AD: 0x839A,
    0xE4AE: 0x83AA,
    0xE4AF: 0x839F,
    0xE4B0: 0x83A2,
    0xE4B1: 0x8396,
    0xE4B2: 0x8323,
    0xE4B3: 0x838E,
    0xE4B4: 0x8387,
    0xE4B5: 0x838A,
    0xE4B6: 0x837C,
    0xE4B7: 0x83B5,
    0xE4B8: 0x8373,
    0xE4B9: 0x8375,
    0xE4BA: 0x83A0,
    0xE4BB: 0x8389,
    0xE4BC: 0x83A8,
    0xE4BD: 0x83F4,
    0xE4BE: 0x8413,
    0xE4BF: 0x83EB,
    0xE4C0: 0x83CE,
    0xE4C1: 0x83FD,
    0xE4C2: 0x8403,
    0xE4C3: 0x83D8,
    0xE4C4: 0x840B,
    0xE4C5: 0x83C1,
    0xE4C6: 0x83F7,
    0xE4C7: 0x8407,
    0xE4C8: 0x83E0,
    0xE4C9: 0x83F2,
    0xE4CA: 0x840D,
    0xE4CB: 0x8422,
    0xE4CC: 0x8420,
    0xE4CD: 0x83BD,
    0xE4CE: 0x8438,
    0xE4CF: 0x8506,
    0xE4D0: 0x83FB,
    0xE4D1: 0x846D,
    0xE4D2: 0x842A,
    0xE4D3: 0x843C,
    0xE4D4: 0x855A,
    0xE4D5: 0x8484,
    0xE4D6: 0x8477,
    0xE4D7: 0x846B,
    0xE4D8: 0x84AD,
    0xE4D9: 0x846E,
    0xE4DA: 0x8482,
    0xE4DB: 0x8469,
    0xE4DC: 0x8446,
    0xE4DD: 0x842C,
    0xE4DE: 0x846F,
    0xE4DF: 0x8479,
    0xE4E0: 0x8435,
    0xE4E1: 0x84CA,
    0xE4E2: 0x8462,
    0xE4E3: 0x84B9,
    0xE4E4: 0x84BF,
    0xE4E5: 0x849F,
    0xE4E6: 0x84D9,
    0xE4E7: 0x84CD,
    0xE4E8: 0x84BB,
    0xE4E9: 0x84DA,
    0xE4EA: 0x84D0,
    0xE4EB: 0x84C1,
    0xE4EC: 0x84C6,
    0xE4ED: 0x84D6,
    0xE4EE: 0x84A1,
    0xE4EF: 0x8521,
    0xE4F0: 0x84FF,
    0xE4F1: 0x84F4,
    0xE4F2: 0x8517,
    0xE4F3: 0x8518,
    0xE4F4: 0x852C,
    0xE4F5: 0x851F,
    0xE4F6: 0x8515,
    0xE4F7: 0x8514,
    0xE4F8: 0x84FC,
    0xE4F9: 0x8540,
    0xE4FA: 0x8563,
    0xE4FB: 0x8558,
    0xE4FC: 0x8548,
    0xE540: 0x8541,
    0xE541: 0x8602,
    0xE542: 0x854B,
    0xE543: 0x8555,
    0xE544: 0x8580,
    0xE545: 0x85A4,
    0xE546: 0x8588,
    0xE547: 0x8591,
    0xE548: 0x858A,
    0xE549: 0x85A8,
    0xE54A: 0x856D,
    0xE54B: 0x8594,
    0xE54C: 0x859B,
    0xE54D: 0x85EA,
    0xE54E: 0x8587,
    0xE54F: 0x859C,
    0xE550: 0x8577,
    0xE551: 0x857E,
    0xE552: 0x8590,
    0xE553: 0x85C9,
    0xE554: 0x85BA,
    0xE555: 0x85CF,
    0xE556: 0x85B9,
    0xE557: 0x85D0,
    0xE558: 0x85D5,
    0xE559: 0x85DD,
    0xE55A: 0x85E5,
    0xE55B: 0x85DC,
    0xE55C: 0x85F9,
    0xE55D: 0x860A,
    0xE55E: 0x8613,
    0xE55F: 0x860B,
    0xE560: 0x85FE,
    0xE561: 0x85FA,
    0xE562: 0x8606,
    0xE563: 0x8622,
    0xE564: 0x861A,
    0xE565: 0x8630,
    0xE566: 0x863F,
    0xE567: 0x864D,
    0xE568: 0x4E55,
    0xE569: 0x8654,
    0xE56A: 0x865F,
    0xE56B: 0x8667,
    0xE56C: 0x8671,
    0xE56D: 0x8693,
    0xE56E: 0x86A3,
    0xE56F: 0x86A9,
    0xE570: 0x86AA,
    0xE571: 0x868B,
    0xE572: 0x868C,
    0xE573: 0x86B6,
    0xE574: 0x86AF,
    0xE575: 0x86C4,
    0xE576: 0x86C6,
    0xE577: 0x86B0,
    0xE578: 0x86C9,
    0xE579: 0x8823,
    0xE57A: 0x86AB,
    0xE57B: 0x86D4,
    0xE57C: 0x86DE,
    0xE57D: 0x86E9,
    0xE57E: 0x86EC,
    0xE580: 0x86DF,
    0xE581: 0x86DB,
    0xE582: 0x86EF,
    0xE583: 0x8712,
    0xE584: 0x8706,
    0xE585: 0x8708,
    0xE586: 0x8700,
    0xE587: 0x8703,
    0xE588: 0x86FB,
    0xE589: 0x8711,
    0xE58A: 0x8709,
    0xE58B: 0x870D,
    0xE58C: 0x86F9,
    0xE58D: 0x870A,
    0xE58E: 0x8734,
    0xE58F: 0x873F,
    0xE590: 0x8737,
    0xE591: 0x873B,
    0xE592: 0x8725,
    0xE593: 0x8729,
    0xE594: 0x871A,
    0xE595: 0x8760,
    0xE596: 0x875F,
    0xE597: 0x8778,
    0xE598: 0x874C,
    0xE599: 0x874E,
    0xE59A: 0x8774,
    0xE59B: 0x8757,
    0xE59C: 0x8768,
    0xE59D: 0x876E,
    0xE59E: 0x8759,
    0xE59F: 0x8753,
    0xE5A0: 0x8763,
    0xE5A1: 0x876A,
    0xE5A2: 0x8805,
    0xE5A3: 0x87A2,
    0xE5A4: 0x879F,
    0xE5A5: 0x8782,
    0xE5A6: 0x87AF,
    0xE5A7: 0x87CB,
    0xE5A8: 0x87BD,
    0xE5A9: 0x87C0,
    0xE5AA: 0x87D0,
    0xE5AB: 0x96D6,
    0xE5AC: 0x87AB,
    0xE5AD: 0x87C4,
    0xE5AE: 0x87B3,
    0xE5AF: 0x87C7,
    0xE5B0: 0x87C6,
    0xE5B1: 0x87BB,
    0xE5B2: 0x87EF,
    0xE5B3: 0x87F2,
    0xE5B4: 0x87E0,
    0xE5B5: 0x880F,
    0xE5B6: 0x880D,
    0xE5B7: 0x87FE,
    0xE5B8: 0x87F6,
    0xE5B9: 0x87F7,
    0xE5BA: 0x880E,
    0xE5BB: 0x87D2,
    0xE5BC: 0x8811,
    0xE5BD: 0x8816,
    0xE5BE: 0x8815,
    0xE5BF: 0x8822,
    0xE5C0: 0x8821,
    0xE5C1: 0x8831,
    0xE5C2: 0x8836,
    0xE5C3: 0x8839,
    0xE5C4: 0x8827,
    0xE5C5: 0x883B,
    0xE5C6: 0x8844,
    0xE5C7: 0x8842,
    0xE5C8: 0x8852,
    0xE5C9: 0x8859,
    0xE5CA: 0x885E,
    0xE5CB: 0x8862,
    0xE5CC: 0x886B,
    0xE5CD: 0x8881,
    0xE5CE: 0x887E,
    0xE5CF: 0x889E,
    0xE5D0: 0x8875,
    0xE5D1: 0x887D,
    0xE5D2: 0x88B5,
    0xE5D3: 0x8872,
    0xE5D4: 0x8882,
    0xE5D5: 0x8897,
    0xE5D6: 0x8892,
    0xE5D7: 0x88AE,
    0xE5D8: 0x8899,
    0xE5D9: 0x88A2,
    0xE5DA: 0x888D,
    0xE5DB: 0x88A4,
    0xE5DC: 0x88B0,
    0xE5DD: 0x88BF,
    0xE5DE: 0x88B1,
    0xE5DF: 0x88C3,
    0xE5E0: 0x88C4,
    0xE5E1: 0x88D4,
    0xE5E2: 0x88D8,
    0xE5E3: 0x88D9,
    0xE5E4: 0x88DD,
    0xE5E5: 0x88F9,
    0xE5E6: 0x8902,
    0xE5E7: 0x88FC,
    0xE5E8: 0x88F4,
    0xE5E9: 0x88E8,
    0xE5EA: 0x88F2,
    0xE5EB: 0x8904,
    0xE5EC: 0x890C,
    0xE5ED: 0x890A,
    0xE5EE: 0x8913,
    0xE5EF: 0x8943,
    0xE5F0: 0x891E,
    0xE5F1: 0x8925,
    0xE5F2: 0x892A,
    0xE5F3: 0x892B,
    0xE5F4: 0x8941,
    0xE5F5: 0x8944,
    0xE5F6: 0x893B,
    0xE5F7: 0x8936,
    0xE5F8: 0x8938,
    0xE5F9: 0x894C,
    0xE5FA: 0x891D,
    0xE5FB: 0x8960,
    0xE5FC: 0x895E,
    0xE640: 0x8966,
    0xE641: 0x8964,
    0xE642: 0x896D,
    0xE643: 0x896A,
    0xE644: 0x896F,
    0xE645: 0x8974,
    0xE646: 0x8977,
    0xE647: 0x897E,
    0xE648: 0x8983,
    0xE649: 0x8988,
    0xE64A: 0x898A,
    0xE64B: 0x8993,
    0xE64C: 0x8998,
    0xE64D: 0x89A1,
    0xE64E: 0x89A9,
    0xE64F: 0x89A6,
    0xE650: 0x89AC,
    0xE651: 0x89AF,
    0xE652: 0x89B2,
    0xE653: 0x89BA,
    0xE654: 0x89BD,
    0xE655: 0x89BF,
    0xE656: 0x89C0,
    0xE657: 0x89DA,
    0xE658: 0x89DC,
    0xE659: 0x89DD,
    0xE65A: 0x89E7,
    0xE65B: 0x89F4,
    0xE65C: 0x89F8,
    0xE65D: 0x8A03,
    0xE65E: 0x8A16,
    0xE65F: 0x8A10,
    0xE660: 0x8A0C,
    0xE661: 0x8A1B,
    0xE662: 0x8A1D,
    0xE663: 0x8A25,
    0xE664: 0x8A36,
    0xE665: 0x8A41,
    0xE666: 0x8A5B,
    0xE667: 0x8A52,
    0xE668: 0x8A46,
    0xE669: 0x8A48,
    0xE66A: 0x8A7C,
    0xE66B: 0x8A6D,
    0xE66C: 0x8A6C,
    0xE66D: 0x8A62,
    0xE66E: 0x8A85,
    0xE66F: 0x8A82,
    0xE670: 0x8A84,
    0xE671: 0x8AA8,
    0xE672: 0x8AA1,
    0xE673: 0x8A91,
    0xE674: 0x8AA5,
    0xE675: 0x8AA6,
    0xE676: 0x8A9A,
    0xE677: 0x8AA3,
    0xE678: 0x8AC4,
    0xE679: 0x8ACD,
    0xE67A: 0x8AC2,
    0xE67B: 0x8ADA,
    0xE67C: 0x8AEB,
    0xE67D: 0x8AF3,
    0xE67E: 0x8AE7,
    0xE680: 0x8AE4,
    0xE681: 0x8AF1,
    0xE682: 0x8B14,
    0xE683: 0x8AE0,
    0xE684: 0x8AE2,
    0xE685: 0x8AF7,
    0xE686: 0x8ADE,
    0xE687: 0x8ADB,
    0xE688: 0x8B0C,
    0xE689: 0x8B07,
    0xE68A: 0x8B1A,
    0xE68B: 0x8AE1,
    0xE68C: 0x8B16,
    0xE68D: 0x8B10,
    0xE68E: 0x8B17,
    0xE68F: 0x8B20,
    0xE690: 0x8B33,
    0xE691: 0x97AB,
    0xE692: 0x8B26,
    0xE693: 0x8B2B,
    0xE694: 0x8B3E,
    0xE695: 0x8B28,
    0xE696: 0x8B41,
    0xE697: 0x8B4C,
    0xE698: 0x8B4F,
    0xE699: 0x8B4E,
    0xE69A: 0x8B49,
    0xE69B: 0x8B56,
    0xE69C: 0x8B5B,
    0xE69D: 0x8B5A,
    0xE69E: 0x8B6B,
    0xE69F: 0x8B5F,
    0xE6A0: 0x8B6C,
    0xE6A1: 0x8B6F,
    0xE6A2: 0x8B74,
    0xE6A3: 0x8B7D,
    0xE6A4: 0x8B80,
    0xE6A5: 0x8B8C,
    0xE6A6: 0x8B8E,
    0xE6A7: 0x8B92,
    0xE6A8: 0x8B93,
    0xE6A9: 0x8B96,
    0xE6AA: 0x8B99,
    0xE6AB: 0x8B9A,
    0xE6AC: 0x8C3A,
    0xE6AD: 0x8C41,
    0xE6AE: 0x8C3F,
    0xE6AF: 0x8C48,
    0xE6B0: 0x8C4C,
    0xE6B1: 0x8C4E,
    0xE6B2: 0x8C50,
    0xE6B3: 0x8C55,
    0xE6B4: 0x8C62,
    0xE6B5: 0x8C6C,
    0xE6B6: 0x8C78,
    0xE6B7: 0x8C7A,
    0xE6B8: 0x8C82,
    0xE6B9: 0x8C89,
    0xE6BA: 0x8C85,
    0xE6BB: 0x8C8A,
    0xE6BC: 0x8C8D,
    0xE6BD: 0x8C8E,
    0xE6BE: 0x8C94,
    0xE6BF: 0x8C7C,
    0xE6C0: 0x8C98,
    0xE6C1: 0x621D,
    0xE6C2: 0x8CAD,
    0xE6C3: 0x8CAA,
    0xE6C4: 0x8CBD,
    0xE6C5: 0x8CB2,
    0xE6C6: 0x8CB3,
    0xE6C7: 0x8CAE,
    0xE6C8: 0x8CB6,
    0xE6C9: 0x8CC8,
    0xE6CA: 0x8CC1,
    0xE6CB: 0x8CE4,
    0xE6CC: 0x8CE3,
    0xE6CD: 0x8CDA,
    0xE6CE: 0x8CFD,
    0xE6CF: 0x8CFA,
    0xE6D0: 0x8CFB,
    0xE6D1: 0x8D04,
    0xE6D2: 0x8D05,
    0xE6D3: 0x8D0A,
    0xE6D4: 0x8D07,
    0xE6D5: 0x8D0F,
    0xE6D6: 0x8D0D,
    0xE6D7: 0x8D10,
    0xE6D8: 0x9F4E,
    0xE6D9: 0x8D13,
    0xE6DA: 0x8CCD,
    0xE6DB: 0x8D14,
    0xE6DC: 0x8D16,
    0xE6DD: 0x8D67,
    0xE6DE: 0x8D6D,
    0xE6DF: 0x8D71,
    0xE6E0: 0x8D73,
    0xE6E1: 0x8D81,
    0xE6E2: 0x8D99,
    0xE6E3: 0x8DC2,
    0xE6E4: 0x8DBE,
    0xE6E5: 0x8DBA,
    0xE6E6: 0x8DCF,
    0xE6E7: 0x8DDA,
    0xE6E8: 0x8DD6,
    0xE6E9: 0x8DCC,
    0xE6EA: 0x8DDB,
    0xE6EB: 0x8DCB,
    0xE6EC: 0x8DEA,
    0xE6ED: 0x8DEB,
    0xE6EE: 0x8DDF,
    0xE6EF: 0x8DE3,
    0xE6F0: 0x8DFC,
    0xE6F1: 0x8E08,
    0xE6F2: 0x8E09,
    0xE6F3: 0x8DFF,
    0xE6F4: 0x8E1D,
    0xE6F5: 0x8E1E,
    0xE6F6: 0x8E10,
    0xE6F7: 0x8E1F,
    0xE6F8: 0x8E42,
    0xE6F9: 0x8E35,
    0xE6FA: 0x8E30,
    0xE6FB: 0x8E34,
    0xE6FC: 0x8E4A,
    0xE740: 0x8E47,
    0xE741: 0x8E49,
    0xE742: 0x8E4C,
    0xE743: 0x8E50,
    0xE744: 0x8E48,
    0xE745: 0x8E59,
    0xE746: 0x8E64,
    0xE747: 0x8E60,
    0xE748: 0x8E2A,
    0xE749: 0x8E63,
    0xE74A: 0x8E55,
    0xE74B: 0x8E76,
    0xE74C: 0x8E72,
    0xE74D: 0x8E7C,
    0xE74E: 0x8E81,
    0xE74F: 0x8E87,
    0xE750: 0x8E85,
    0xE751: 0x8E84,
    0xE752: 0x8E8B,
    0xE753: 0x8E8A,
    0xE754: 0x8E93,
    0xE755: 0x8E91,
    0xE756: 0x8E94,
    0xE757: 0x8E99,
    0xE758: 0x8EAA,
    0xE759: 0x8EA1,
    0xE75A: 0x8EAC,
    0xE75B: 0x8EB0,
    0xE75C: 0x8EC6,
    0xE75D: 0x8EB1,
    0xE75E: 0x8EBE,
    0xE75F: 0x8EC5,
    0xE760: 0x8EC8,
    0xE761: 0x8ECB,
    0xE762: 0x8EDB,
    0xE763: 0x8EE3,
    0xE764: 0x8EFC,
    0xE765: 0x8EFB,
    0xE766: 0x8EEB,
    0xE767: 0x8EFE,
    0xE768: 0x8F0A,
    0xE769: 0x8F05,
    0xE76A: 0x8F15,
    0xE76B: 0x8F12,
    0xE76C: 0x8F19,
    0xE76D: 0x8F13,
    0xE76E: 0x8F1C,
    0xE76F: 0x8F1F,
    0xE770: 0x8F1B,
    0xE771: 0x8F0C,
    0xE772: 0x8F26,
    0xE773: 0x8F33,
    0xE774: 0x8F3B,
    0xE775: 0x8F39,
    0xE776: 0x8F45,
    0xE777: 0x8F42,
    0xE778: 0x8F3E,
    0xE779: 0x8F4C,
    0xE77A: 0x8F49,
    0xE77B: 0x8F46,
    0xE77C: 0x8F4E,
    0xE77D: 0x8F57,
    0xE77E: 0x8F5C,
    0xE780: 0x8F62,
    0xE781: 0x8F63,
    0xE782: 0x8F64,
    0xE783: 0x8F9C,
    0xE784: 0x8F9F,
    0xE785: 0x8FA3,
    0xE786: 0x8FAD,
    0xE787: 0x8FAF,
    0xE788: 0x8FB7,
    0xE789: 0x8FDA,
    0xE78A: 0x8FE5,
    0xE78B: 0x8FE2,
    0xE78C: 0x8FEA,
    0xE78D: 0x8FEF,
    0xE78E: 0x9087,
    0xE78F: 0x8FF4,
    0xE790: 0x9005,
    0xE791: 0x8FF9,
    0xE792: 0x8FFA,
    0xE793: 0x9011,
    0xE794: 0x9015,
    0xE795: 0x9021,
    0xE796: 0x900D,
    0xE797: 0x901E,
    0xE798: 0x9016,
    0xE799: 0x900B,
    0xE79A: 0x9027,
    0xE79B: 0x9036,
    0xE79C: 0x9035,
    0xE79D: 0x9039,
    0xE79E: 0x8FF8,
    0xE79F: 0x904F,
    0xE7A0: 0x9050,
    0xE7A1: 0x9051,
    0xE7A2: 0x9052,
    0xE7A3: 0x900E,
    0xE7A4: 0x9049,
    0xE7A5: 0x903E,
    0xE7A6: 0x9056,
    0xE7A7: 0x9058,
    0xE7A8: 0x905E,
    0xE7A9: 0x9068,
    0xE7AA: 0x906F,
    0xE7AB: 0x9076,
    0xE7AC: 0x96A8,
    0xE7AD: 0x9072,
    0xE7AE: 0x9082,
    0xE7AF: 0x907D,
    0xE7B0: 0x9081,
    0xE7B1: 0x9080,
    0xE7B2: 0x908A,
    0xE7B3: 0x9089,
    0xE7B4: 0x908F,
    0xE7B5: 0x90A8,
    0xE7B6: 0x90AF,
    0xE7B7: 0x90B1,
    0xE7B8: 0x90B5,
    0xE7B9: 0x90E2,
    0xE7BA: 0x90E4,
    0xE7BB: 0x6248,
    0xE7BC: 0x90DB,
    0xE7BD: 0x9102,
    0xE7BE: 0x9112,
    0xE7BF: 0x9119,
    0xE7C0: 0x9132,
    0xE7C1: 0x9130,
    0xE7C2: 0x914A,
    0xE7C3: 0x9156,
    0xE7C4: 0x9158,
    0xE7C5: 0x9163,
    0xE7C6: 0x9165,
    0xE7C7: 0x9169,
    0xE7C8: 0x9173,
    0xE7C9: 0x9172,
    0xE7CA: 0x918B,
    0xE7CB: 0x9189,
    0xE7CC: 0x9182,
    0xE7CD: 0x91A2,
    0xE7CE: 0x91AB,
    0xE7CF: 0x91AF,
    0xE7D0: 0x91AA,
    0xE7D1: 0x91B5,
    0xE7D2: 0x91B4,
    0xE7D3: 0x91BA,
    0xE7D4: 0x91C0,
    0xE7D5: 0x91C1,
    0xE7D6: 0x91C9,
    0xE7D7: 0x91CB,
    0xE7D8: 0x91D0,
    0xE7D9: 0x91D6,
    0xE7DA: 0x91DF,
    0xE7DB: 0x91E1,
    0xE7DC: 0x91DB,
    0xE7DD: 0x91FC,
    0xE7DE: 0x91F5,
    0xE7DF: 0x91F6,
    0xE7E0: 0x921E,
    0xE7E1: 0x91FF,
    0xE7E2: 0x9214,
    0xE7E3: 0x922C,
    0xE7E4: 0x9215,
    0xE7E5: 0x9211,
    0xE7E6: 0x925E,
    0xE7E7: 0x9257,
    0xE7E8: 0x9245,
    0xE7E9: 0x9249,
    0xE7EA: 0x9264,
    0xE7EB: 0x9248,
    0xE7EC: 0x9295,
    0xE7ED: 0x923F,
    0xE7EE: 0x924B,
    0xE7EF: 0x9250,
    0xE7F0: 0x929C,
    0xE7F1: 0x9296,
    0xE7F2: 0x9293,
    0xE7F3: 0x929B,
    0xE7F4: 0x925A,
    0xE7F5: 0x92CF,
    0xE7F6: 0x92B9,
    0xE7F7: 0x92B7,
    0xE7F8: 0x92E9,
    0xE7F9: 0x930F,
    0xE7FA: 0x92FA,
    0xE7FB: 0x9344,
    0xE7FC: 0x932E,
    0xE840: 0x9319,
    0xE841: 0x9322,
    0xE842: 0x931A,
    0xE843: 0x9323,
    0xE844: 0x933A,
    0xE845: 0x9335,
    0xE846: 0x933B,
    0xE847: 0x935C,
    0xE848: 0x9360,
    0xE849: 0x937C,
    0xE84A: 0x936E,
    0xE84B: 0x9356,
    0xE84C: 0x93B0,
    0xE84D: 0x93AC,
    0xE84E: 0x93AD,
    0xE84F: 0x9394,
    0xE850: 0x93B9,
    0xE851: 0x93D6,
    0xE852: 0x93D7,
    0xE853: 0x93E8,
    0xE854: 0x93E5,
    0xE855: 0x93D8,
    0xE856: 0x93C3,
    0xE857: 0x93DD,
    0xE858: 0x93D0,
    0xE859: 0x93C8,
    0xE85A: 0x93E4,
    0xE85B: 0x941A,
    0xE85C: 0x9414,
    0xE85D: 0x9413,
    0xE85E: 0x9403,
    0xE85F: 0x9407,
    0xE860: 0x9410,
    0xE861: 0x9436,
    0xE862: 0x942B,
    0xE863: 0x9435,
    0xE864: 0x9421,
    0xE865: 0x943A,
    0xE866: 0x9441,
    0xE867: 0x9452,
    0xE868: 0x9444,
    0xE869: 0x945B,
    0xE86A: 0x9460,
    0xE86B: 0x9462,
    0xE86C: 0x945E,
    0xE86D: 0x946A,
    0xE86E: 0x9229,
    0xE86F: 0x9470,
    0xE870: 0x9475,
    0xE871: 0x9477,
    0xE872: 0x947D,
    0xE873: 0x945A,
    0xE874: 0x947C,
    0xE875: 0x947E,
    0xE876: 0x9481,
    0xE877: 0x947F,
    0xE878: 0x9582,
    0xE879: 0x9587,
    0xE87A: 0x958A,
    0xE87B: 0x9594,
    0xE87C: 0x9596,
    0xE87D: 0x9598,
    0xE87E: 0x9599,
    0xE880: 0x95A0,
    0xE881: 0x95A8,
    0xE882: 0x95A7,
    0xE883: 0x95AD,
    0xE884: 0x95BC,
    0xE885: 0x95BB,
    0xE886: 0x95B9,
    0xE887: 0x95BE,
    0xE888: 0x95CA,
    0xE889: 0x6FF6,
    0xE88A: 0x95C3,
    0xE88B: 0x95CD,
    0xE88C: 0x95CC,
    0xE88D: 0x95D5,
    0xE88E: 0x95D4,
    0xE88F: 0x95D6,
    0xE890: 0x95DC,
    0xE891: 0x95E1,
    0xE892: 0x95E5,
    0xE893: 0x95E2,
    0xE894: 0x9621,
    0xE895: 0x9628,
    0xE896: 0x962E,
    0xE897: 0x962F,
    0xE898: 0x9642,
    0xE899: 0x964C,
    0xE89A: 0x964F,
    0xE89B: 0x964B,
    0xE89C: 0x9677,
    0xE89D: 0x965C,
    0xE89E: 0x965E,
    0xE89F: 0x965D,
    0xE8A0: 0x965F,
    0xE8A1: 0x9666,
    0xE8A2: 0x9672,
    0xE8A3: 0x966C,
    0xE8A4: 0x968D,
    0xE8A5: 0x9698,
    0xE8A6: 0x9695,
    0xE8A7: 0x9697,
    0xE8A8: 0x96AA,
    0xE8A9: 0x96A7,
    0xE8AA: 0x96B1,
    0xE8AB: 0x96B2,
    0xE8AC: 0x96B0,
    0xE8AD: 0x96B4,
    0xE8AE: 0x96B6,
    0xE8AF: 0x96B8,
    0xE8B0: 0x96B9,
    0xE8B1: 0x96CE,
    0xE8B2: 0x96CB,
    0xE8B3: 0x96C9,
    0xE8B4: 0x96CD,
    0xE8B5: 0x894D,
    0xE8B6: 0x96DC,
    0xE8B7: 0x970D,
    0xE8B8: 0x96D5,
    0xE8B9: 0x96F9,
    0xE8BA: 0x9704,
    0xE8BB: 0x9706,
    0xE8BC: 0x9708,
    0xE8BD: 0x9713,
    0xE8BE: 0x970E,
    0xE8BF: 0x9711,
    0xE8C0: 0x970F,
    0xE8C1: 0x9716,
    0xE8C2: 0x9719,
    0xE8C3: 0x9724,
    0xE8C4: 0x972A,
    0xE8C5: 0x9730,
    0xE8C6: 0x9739,
    0xE8C7: 0x973D,
    0xE8C8: 0x973E,
    0xE8C9: 0x9744,
    0xE8CA: 0x9746,
    0xE8CB: 0x9748,
    0xE8CC: 0x9742,
    0xE8CD: 0x9749,
    0xE8CE: 0x975C,
    0xE8CF: 0x9760,
    0xE8D0: 0x9764,
    0xE8D1: 0x9766,
    0xE8D2: 0x9768,
    0xE8D3: 0x52D2,
    0xE8D4: 0x976B,
    0xE8D5: 0x9771,
    0xE8D6: 0x9779,
    0xE8D7: 0x9785,
    0xE8D8: 0x977C,
    0xE8D9: 0x9781,
    0xE8DA: 0x977A,
    0xE8DB: 0x9786,
    0xE8DC: 0x978B,
    0xE8DD: 0x978F,
    0xE8DE: 0x9790,
    0xE8DF: 0x979C,
    0xE8E0: 0x97A8,
    0xE8E1: 0x97A6,
    0xE8E2: 0x97A3,
    0xE8E3: 0x97B3,
    0xE8E4: 0x97B4,
    0xE8E5: 0x97C3,
    0xE8E6: 0x97C6,
    0xE8E7: 0x97C8,
    0xE8E8: 0x97CB,
    0xE8E9: 0x97DC,
    0xE8EA: 0x97ED,
    0xE8EB: 0x9F4F,
    0xE8EC: 0x97F2,
    0xE8ED: 0x7ADF,
    0xE8EE: 0x97F6,
    0xE8EF: 0x97F5,
    0xE8F0: 0x980F,
    0xE8F1: 0x980C,
    0xE8F2: 0x9838,
    0xE8F3: 0x9824,
    0xE8F4: 0x9821,
    0xE8F5: 0x9837,
    0xE8F6: 0x983D,
    0xE8F7: 0x9846,
    0xE8F8: 0x984F,
    0xE8F9: 0x984B,
    0xE8FA: 0x986B,
    0xE8FB: 0x986F,
    0xE8FC: 0x9870,
    0xE940: 0x9871,
    0xE941: 0x9874,
    0xE942: 0x9873,
    0xE943: 0x98AA,
    0xE944: 0x98AF,
    0xE945: 0x98B1,
    0xE946: 0x98B6,
    0xE947: 0x98C4,
    0xE948: 0x98C3,
    0xE949: 0x98C6,
    0xE94A: 0x98E9,
    0xE94B: 0x98EB,
    0xE94C: 0x9903,
    0xE94D: 0x9909,
    0xE94E: 0x9912,
    0xE94F: 0x9914,
    0xE950: 0x9918,
    0xE951: 0x9921,
    0xE952: 0x991D,
    0xE953: 0x991E,
    0xE954: 0x9924,
    0xE955: 0x9920,
    0xE956: 0x992C,
    0xE957: 0x992E,
    0xE958: 0x993D,
    0xE959: 0x993E,
    0xE95A: 0x9942,
    0xE95B: 0x9949,
    0xE95C: 0x9945,
    0xE95D: 0x9950,
    0xE95E: 0x994B,
    0xE95F: 0x9951,
    0xE960: 0x9952,
    0xE961: 0x994C,
    0xE962: 0x9955,
    0xE963: 0x9997,
    0xE964: 0x9998,
    0xE965: 0x99A5,
    0xE966: 0x99AD,
    0xE967: 0x99AE,
    0xE968: 0x99BC,
    0xE969: 0x99DF,
    0xE96A: 0x99DB,
    0xE96B: 0x99DD,
    0xE96C: 0x99D8,
    0xE96D: 0x99D1,
    0xE96E: 0x99ED,
    0xE96F: 0x99EE,
    0xE970: 0x99F1,
    0xE971: 0x99F2,
    0xE972: 0x99FB,
    0xE973: 0x99F8,
    0xE974: 0x9A01,
    0xE975: 0x9A0F,
    0xE976: 0x9A05,
    0xE977: 0x99E2,
    0xE978: 0x9A19,
    0xE979: 0x9A2B,
    0xE97A: 0x9A37,
    0xE97B: 0x9A45,
    0xE97C: 0x9A42,
    0xE97D: 0x9A40,
    0xE97E: 0x9A43,
    0xE980: 0x9A3E,
    0xE981: 0x9A55,
    0xE982: 0x9A4D,
    0xE983: 0x9A5B,
    0xE984: 0x9A57,
    0xE985: 0x9A5F,
    0xE986: 0x9A62,
    0xE987: 0x9A65,
    0xE988: 0x9A64,
    0xE989: 0x9A69,
    0xE98A: 0x9A6B,
    0xE98B: 0x9A6A,
    0xE98C: 0x9AAD,
    0xE98D: 0x9AB0,
    0xE98E: 0x9ABC,
    0xE98F: 0x9AC0,
    0xE990: 0x9ACF,
    0xE991: 0x9AD1,
    0xE992: 0x9AD3,
    0xE993: 0x9AD4,
    0xE994: 0x9ADE,
    0xE995: 0x9ADF,
    0xE996: 0x9AE2,
    0xE997: 0x9AE3,
    0xE998: 0x9AE6,
    0xE999: 0x9AEF,
    0xE99A: 0x9AEB,
    0xE99B: 0x9AEE,
    0xE99C: 0x9AF4,
    0xE99D: 0x9AF1,
    0xE99E: 0x9AF7,
    0xE99F: 0x9AFB,
    0xE9A0: 0x9B06,
    0xE9A1: 0x9B18,
    0xE9A2: 0x9B1A,
    0xE9A3: 0x9B1F,
    0xE9A4: 0x9B22,
    0xE9A5: 0x9B23,
    0xE9A6: 0x9B25,
    0xE9A7: 0x9B27,
    0xE9A8: 0x9B28,
    0xE9A9: 0x9B29,
    0xE9AA: 0x9B2A,
    0xE9AB: 0x9B2E,
    0xE9AC: 0x9B2F,
    0xE9AD: 0x9B32,
    0xE9AE: 0x9B44,
    0xE9AF: 0x9B43,
    0xE9B0: 0x9B4F,
    0xE9B1: 0x9B4D,
    0xE9B2: 0x9B4E,
    0xE9B3: 0x9B51,
    0xE9B4: 0x9B58,
    0xE9B5: 0x9B74,
    0xE9B6: 0x9B93,
    0xE9B7: 0x9B83,
    0xE9B8: 0x9B91,
    0xE9B9: 0x9B96,
    0xE9BA: 0x9B97,
    0xE9BB: 0x9B9F,
    0xE9BC: 0x9BA0,
    0xE9BD: 0x9BA8,
    0xE9BE: 0x9BB4,
    0xE9BF: 0x9BC0,
    0xE9C0: 0x9BCA,
    0xE9C1: 0x9BB9,
    0xE9C2: 0x9BC6,
    0xE9C3: 0x9BCF,
    0xE9C4: 0x9BD1,
    0xE9C5: 0x9BD2,
    0xE9C6: 0x9BE3,
    0xE9C7: 0x9BE2,
    0xE9C8: 0x9BE4,
    0xE9C9: 0x9BD4,
    0xE9CA: 0x9BE1,
    0xE9CB: 0x9C3A,
    0xE9CC: 0x9BF2,
    0xE9CD: 0x9BF1,
    0xE9CE: 0x9BF0,
    0xE9CF: 0x9C15,
    0xE9D0: 0x9C14,
    0xE9D1: 0x9C09,
    0xE9D2: 0x9C13,
    0xE9D3: 0x9C0C,
    0xE9D4: 0x9C06,
    0xE9D5: 0x9C08,
    0xE9D6: 0x9C12,
    0xE9D7: 0x9C0A,
    0xE9D8: 0x9C04,
    0xE9D9: 0x9C2E,
    0xE9DA: 0x9C1B,
    0xE9DB: 0x9C25,
    0xE9DC: 0x9C24,
    0xE9DD: 0x9C21,
    0xE9DE: 0x9C30,
    0xE9DF: 0x9C47,
    0xE9E0: 0x9C32,
    0xE9E1: 0x9C46,
    0xE9E2: 0x9C3E,
    0xE9E3: 0x9C5A,
    0xE9E4: 0x9C60,
    0xE9E5: 0x9C67,
    0xE9E6: 0x9C76,
    0xE9E7: 0x9C78,
    0xE9E8: 0x9CE7,
    0xE9E9: 0x9CEC,
    0xE9EA: 0x9CF0,
    0xE9EB: 0x9D09,
    0xE9EC: 0x9D08,
    0xE9ED: 0x9CEB,
    0xE9EE: 0x9D03,
    0xE9EF: 0x9D06,
    0xE9F0: 0x9D2A,
    0xE9F1: 0x9D26,
    0xE9F2: 0x9DAF,
    0xE9F3: 0x9D23,
    0xE9F4: 0x9D1F,
    0xE9F5: 0x9D44,
    0xE9F6: 0x9D15,
    0xE9F7: 0x9D12,
    0xE9F8: 0x9D41,
    0xE9F9: 0x9D3F,
    0xE9FA: 0x9D3E,
    0xE9FB: 0x9D46,
    0xE9FC: 0x9D48,
    0xEA40: 0x9D5D,
    0xEA41: 0x9D5E,
    0xEA42: 0x9D64,
    0xEA43: 0x9D51,
    0xEA44: 0x9D50,
    0xEA45: 0x9D59,
    0xEA46: 0x9D72,
    0xEA47: 0x9D89,
    0xEA48: 0x9D87,
    0xEA49: 0x9DAB,
    0xEA4A: 0x9D6F,
    0xEA4B: 0x9D7A,
    0xEA4C: 0x9D9A,
    0xEA4D: 0x9DA4,
    0xEA4E: 0x9DA9,
    0xEA4F: 0x9DB2,
    0xEA50: 0x9DC4,
    0xEA51: 0x9DC1,
    0xEA52: 0x9DBB,
    0xEA53: 0x9DB8,
    0xEA54: 0x9DBA,
    0xEA55: 0x9DC6,
    0xEA56: 0x9DCF,
    0xEA57: 0x9DC2,
    0xEA58: 0x9DD9,
    0xEA59: 0x9DD3,
    0xEA5A: 0x9DF8,
    0xEA5B: 0x9DE6,
    0xEA5C: 0x9DED,
    0xEA5D: 0x9DEF,
    0xEA5E: 0x9DFD,
    0xEA5F: 0x9E1A,
    0xEA60: 0x9E1B,
    0xEA61: 0x9E1E,
    0xEA62: 0x9E75,
    0xEA63: 0x9E79,
    0xEA64: 0x9E7D,
    0xEA65: 0x9E81,
    0xEA66: 0x9E88,
    0xEA67: 0x9E8B,
    0xEA68: 0x9E8C,
    0xEA69: 0x9E92,
    0xEA6A: 0x9E95,
    0xEA6B: 0x9E91,
    0xEA6C: 0x9E9D,
    0xEA6D: 0x9EA5,
    0xEA6E: 0x9EA9,
    0xEA6F: 0x9EB8,
    0xEA70: 0x9EAA,
    0xEA71: 0x9EAD,
    0xEA72: 0x9761,
    0xEA73: 0x9ECC,
    0xEA74: 0x9ECE,
    0xEA75: 0x9ECF,
    0xEA76: 0x9ED0,
    0xEA77: 0x9ED4,
    0xEA78: 0x9EDC,
    0xEA79: 0x9EDE,
    0xEA7A: 0x9EDD,
    0xEA7B: 0x9EE0,
    0xEA7C: 0x9EE5,
    0xEA7D: 0x9EE8,
    0xEA7E: 0x9EEF,
    0xEA80: 0x9EF4,
    0xEA81: 0x9EF6,
    0xEA82: 0x9EF7,
    0xEA83: 0x9EF9,
    0xEA84: 0x9EFB,
    0xEA85: 0x9EFC,
    0xEA86: 0x9EFD,
    0xEA87: 0x9F07,
    0xEA88: 0x9F08,
    0xEA89: 0x76B7,
    0xEA8A: 0x9F15,
    0xEA8B: 0x9F21,
    0xEA8C: 0x9F2C,
    0xEA8D: 0x9F3E,
    0xEA8E: 0x9F4A,
    0xEA8F: 0x9F52,
    0xEA90: 0x9F54,
    0xEA91: 0x9F63,
    0xEA92: 0x9F5F,
    0xEA93: 0x9F60,
    0xEA94: 0x9F61,
    0xEA95: 0x9F66,
    0xEA96: 0x9F67,
    0xEA97: 0x9F6C,
    0xEA98: 0x9F6A,
    0xEA99: 0x9F77,
    0xEA9A: 0x9F72,
    0xEA9B: 0x9F76,
    0xEA9C: 0x9F95,
    0xEA9D: 0x9F9C,
    0xEA9E: 0x9FA0,
    0xEA9F: 0x582F,
    0xEAA0: 0x69C7,
    0xEAA1: 0x9059,
    0xEAA2: 0x7464,
    0xEAA3: 0x51DC,
    0xEAA4: 0x7199,
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __nested_webpack_require_183854__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenericGF_1 = __nested_webpack_require_183854__(1);
var GenericGFPoly_1 = __nested_webpack_require_183854__(2);
function runEuclideanAlgorithm(field, a, b, R) {
    var _a;
    // Assume a's degree is >= b's
    if (a.degree() < b.degree()) {
        _a = [b, a], a = _a[0], b = _a[1];
    }
    var rLast = a;
    var r = b;
    var tLast = field.zero;
    var t = field.one;
    // Run Euclidean algorithm until r's degree is less than R/2
    while (r.degree() >= R / 2) {
        var rLastLast = rLast;
        var tLastLast = tLast;
        rLast = r;
        tLast = t;
        // Divide rLastLast by rLast, with quotient in q and remainder in r
        if (rLast.isZero()) {
            // Euclidean algorithm already terminated?
            return null;
        }
        r = rLastLast;
        var q = field.zero;
        var denominatorLeadingTerm = rLast.getCoefficient(rLast.degree());
        var dltInverse = field.inverse(denominatorLeadingTerm);
        while (r.degree() >= rLast.degree() && !r.isZero()) {
            var degreeDiff = r.degree() - rLast.degree();
            var scale = field.multiply(r.getCoefficient(r.degree()), dltInverse);
            q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
            r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
        }
        t = q.multiplyPoly(tLast).addOrSubtract(tLastLast);
        if (r.degree() >= rLast.degree()) {
            return null;
        }
    }
    var sigmaTildeAtZero = t.getCoefficient(0);
    if (sigmaTildeAtZero === 0) {
        return null;
    }
    var inverse = field.inverse(sigmaTildeAtZero);
    return [t.multiply(inverse), r.multiply(inverse)];
}
function findErrorLocations(field, errorLocator) {
    // This is a direct application of Chien's search
    var numErrors = errorLocator.degree();
    if (numErrors === 1) {
        return [errorLocator.getCoefficient(1)];
    }
    var result = new Array(numErrors);
    var errorCount = 0;
    for (var i = 1; i < field.size && errorCount < numErrors; i++) {
        if (errorLocator.evaluateAt(i) === 0) {
            result[errorCount] = field.inverse(i);
            errorCount++;
        }
    }
    if (errorCount !== numErrors) {
        return null;
    }
    return result;
}
function findErrorMagnitudes(field, errorEvaluator, errorLocations) {
    // This is directly applying Forney's Formula
    var s = errorLocations.length;
    var result = new Array(s);
    for (var i = 0; i < s; i++) {
        var xiInverse = field.inverse(errorLocations[i]);
        var denominator = 1;
        for (var j = 0; j < s; j++) {
            if (i !== j) {
                denominator = field.multiply(denominator, GenericGF_1.addOrSubtractGF(1, field.multiply(errorLocations[j], xiInverse)));
            }
        }
        result[i] = field.multiply(errorEvaluator.evaluateAt(xiInverse), field.inverse(denominator));
        if (field.generatorBase !== 0) {
            result[i] = field.multiply(result[i], xiInverse);
        }
    }
    return result;
}
function decode(bytes, twoS) {
    var outputBytes = new Uint8ClampedArray(bytes.length);
    outputBytes.set(bytes);
    var field = new GenericGF_1.default(0x011D, 256, 0); // x^8 + x^4 + x^3 + x^2 + 1
    var poly = new GenericGFPoly_1.default(field, outputBytes);
    var syndromeCoefficients = new Uint8ClampedArray(twoS);
    var error = false;
    for (var s = 0; s < twoS; s++) {
        var evaluation = poly.evaluateAt(field.exp(s + field.generatorBase));
        syndromeCoefficients[syndromeCoefficients.length - 1 - s] = evaluation;
        if (evaluation !== 0) {
            error = true;
        }
    }
    if (!error) {
        return outputBytes;
    }
    var syndrome = new GenericGFPoly_1.default(field, syndromeCoefficients);
    var sigmaOmega = runEuclideanAlgorithm(field, field.buildMonomial(twoS, 1), syndrome, twoS);
    if (sigmaOmega === null) {
        return null;
    }
    var errorLocations = findErrorLocations(field, sigmaOmega[0]);
    if (errorLocations == null) {
        return null;
    }
    var errorMagnitudes = findErrorMagnitudes(field, sigmaOmega[1], errorLocations);
    for (var i = 0; i < errorLocations.length; i++) {
        var position = outputBytes.length - 1 - field.log(errorLocations[i]);
        if (position < 0) {
            return null;
        }
        outputBytes[position] = GenericGF_1.addOrSubtractGF(outputBytes[position], errorMagnitudes[i]);
    }
    return outputBytes;
}
exports.decode = decode;


/***/ }),
/* 10 */
/***/ (function(module, exports, __nested_webpack_require_188508__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSIONS = [
    {
        infoBits: null,
        versionNumber: 1,
        alignmentPatternCenters: [],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 7,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 19 }],
            },
            {
                ecCodewordsPerBlock: 10,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 16 }],
            },
            {
                ecCodewordsPerBlock: 13,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 13 }],
            },
            {
                ecCodewordsPerBlock: 17,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 9 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 2,
        alignmentPatternCenters: [6, 18],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 10,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 34 }],
            },
            {
                ecCodewordsPerBlock: 16,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 28 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 22 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 16 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 3,
        alignmentPatternCenters: [6, 22],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 15,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 55 }],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 44 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 17 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 13 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 4,
        alignmentPatternCenters: [6, 26],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 80 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 32 }],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 24 }],
            },
            {
                ecCodewordsPerBlock: 16,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 9 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 5,
        alignmentPatternCenters: [6, 30],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 108 }],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 43 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 15 },
                    { numBlocks: 2, dataCodewordsPerBlock: 16 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 11 },
                    { numBlocks: 2, dataCodewordsPerBlock: 12 },
                ],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 6,
        alignmentPatternCenters: [6, 34],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 68 }],
            },
            {
                ecCodewordsPerBlock: 16,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 27 }],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 19 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 15 }],
            },
        ],
    },
    {
        infoBits: 0x07C94,
        versionNumber: 7,
        alignmentPatternCenters: [6, 22, 38],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 78 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 31 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 4, dataCodewordsPerBlock: 15 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 13 },
                    { numBlocks: 1, dataCodewordsPerBlock: 14 },
                ],
            },
        ],
    },
    {
        infoBits: 0x085BC,
        versionNumber: 8,
        alignmentPatternCenters: [6, 24, 42],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 97 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 38 },
                    { numBlocks: 2, dataCodewordsPerBlock: 39 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 18 },
                    { numBlocks: 2, dataCodewordsPerBlock: 19 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 14 },
                    { numBlocks: 2, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x09A99,
        versionNumber: 9,
        alignmentPatternCenters: [6, 26, 46],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 116 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 36 },
                    { numBlocks: 2, dataCodewordsPerBlock: 37 },
                ],
            },
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 16 },
                    { numBlocks: 4, dataCodewordsPerBlock: 17 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 12 },
                    { numBlocks: 4, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0A4D3,
        versionNumber: 10,
        alignmentPatternCenters: [6, 28, 50],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 68 },
                    { numBlocks: 2, dataCodewordsPerBlock: 69 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 43 },
                    { numBlocks: 1, dataCodewordsPerBlock: 44 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 19 },
                    { numBlocks: 2, dataCodewordsPerBlock: 20 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 15 },
                    { numBlocks: 2, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0BBF6,
        versionNumber: 11,
        alignmentPatternCenters: [6, 30, 54],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 81 }],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 50 },
                    { numBlocks: 4, dataCodewordsPerBlock: 51 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 22 },
                    { numBlocks: 4, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 12 },
                    { numBlocks: 8, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0C762,
        versionNumber: 12,
        alignmentPatternCenters: [6, 32, 58],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 92 },
                    { numBlocks: 2, dataCodewordsPerBlock: 93 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 36 },
                    { numBlocks: 2, dataCodewordsPerBlock: 37 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 20 },
                    { numBlocks: 6, dataCodewordsPerBlock: 21 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 14 },
                    { numBlocks: 4, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0D847,
        versionNumber: 13,
        alignmentPatternCenters: [6, 34, 62],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 107 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 37 },
                    { numBlocks: 1, dataCodewordsPerBlock: 38 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 20 },
                    { numBlocks: 4, dataCodewordsPerBlock: 21 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 11 },
                    { numBlocks: 4, dataCodewordsPerBlock: 12 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0E60D,
        versionNumber: 14,
        alignmentPatternCenters: [6, 26, 46, 66],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 115 },
                    { numBlocks: 1, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 40 },
                    { numBlocks: 5, dataCodewordsPerBlock: 41 },
                ],
            },
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 16 },
                    { numBlocks: 5, dataCodewordsPerBlock: 17 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 12 },
                    { numBlocks: 5, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0F928,
        versionNumber: 15,
        alignmentPatternCenters: [6, 26, 48, 70],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 87 },
                    { numBlocks: 1, dataCodewordsPerBlock: 88 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 41 },
                    { numBlocks: 5, dataCodewordsPerBlock: 42 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 24 },
                    { numBlocks: 7, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 12 },
                    { numBlocks: 7, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x10B78,
        versionNumber: 16,
        alignmentPatternCenters: [6, 26, 50, 74],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 98 },
                    { numBlocks: 1, dataCodewordsPerBlock: 99 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 45 },
                    { numBlocks: 3, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 19 },
                    { numBlocks: 2, dataCodewordsPerBlock: 20 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 15 },
                    { numBlocks: 13, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1145D,
        versionNumber: 17,
        alignmentPatternCenters: [6, 30, 54, 78],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 107 },
                    { numBlocks: 5, dataCodewordsPerBlock: 108 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 46 },
                    { numBlocks: 1, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 22 },
                    { numBlocks: 15, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 17, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x12A17,
        versionNumber: 18,
        alignmentPatternCenters: [6, 30, 56, 82],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 120 },
                    { numBlocks: 1, dataCodewordsPerBlock: 121 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 9, dataCodewordsPerBlock: 43 },
                    { numBlocks: 4, dataCodewordsPerBlock: 44 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 22 },
                    { numBlocks: 1, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 19, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x13532,
        versionNumber: 19,
        alignmentPatternCenters: [6, 30, 58, 86],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 113 },
                    { numBlocks: 4, dataCodewordsPerBlock: 114 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 44 },
                    { numBlocks: 11, dataCodewordsPerBlock: 45 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 21 },
                    { numBlocks: 4, dataCodewordsPerBlock: 22 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 9, dataCodewordsPerBlock: 13 },
                    { numBlocks: 16, dataCodewordsPerBlock: 14 },
                ],
            },
        ],
    },
    {
        infoBits: 0x149A6,
        versionNumber: 20,
        alignmentPatternCenters: [6, 34, 62, 90],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 107 },
                    { numBlocks: 5, dataCodewordsPerBlock: 108 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 41 },
                    { numBlocks: 13, dataCodewordsPerBlock: 42 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 24 },
                    { numBlocks: 5, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 15 },
                    { numBlocks: 10, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x15683,
        versionNumber: 21,
        alignmentPatternCenters: [6, 28, 50, 72, 94],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 116 },
                    { numBlocks: 4, dataCodewordsPerBlock: 117 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 42 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 22 },
                    { numBlocks: 6, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 16 },
                    { numBlocks: 6, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x168C9,
        versionNumber: 22,
        alignmentPatternCenters: [6, 26, 50, 74, 98],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 111 },
                    { numBlocks: 7, dataCodewordsPerBlock: 112 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 46 }],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 24 },
                    { numBlocks: 16, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 34, dataCodewordsPerBlock: 13 }],
            },
        ],
    },
    {
        infoBits: 0x177EC,
        versionNumber: 23,
        alignmentPatternCenters: [6, 30, 54, 74, 102],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 121 },
                    { numBlocks: 5, dataCodewordsPerBlock: 122 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 47 },
                    { numBlocks: 14, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 16, dataCodewordsPerBlock: 15 },
                    { numBlocks: 14, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x18EC4,
        versionNumber: 24,
        alignmentPatternCenters: [6, 28, 54, 80, 106],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 117 },
                    { numBlocks: 4, dataCodewordsPerBlock: 118 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 45 },
                    { numBlocks: 14, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 24 },
                    { numBlocks: 16, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 30, dataCodewordsPerBlock: 16 },
                    { numBlocks: 2, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x191E1,
        versionNumber: 25,
        alignmentPatternCenters: [6, 32, 58, 84, 110],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 106 },
                    { numBlocks: 4, dataCodewordsPerBlock: 107 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 47 },
                    { numBlocks: 13, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 24 },
                    { numBlocks: 22, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 15 },
                    { numBlocks: 13, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1AFAB,
        versionNumber: 26,
        alignmentPatternCenters: [6, 30, 58, 86, 114],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 114 },
                    { numBlocks: 2, dataCodewordsPerBlock: 115 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 46 },
                    { numBlocks: 4, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 28, dataCodewordsPerBlock: 22 },
                    { numBlocks: 6, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 33, dataCodewordsPerBlock: 16 },
                    { numBlocks: 4, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1B08E,
        versionNumber: 27,
        alignmentPatternCenters: [6, 34, 62, 90, 118],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 122 },
                    { numBlocks: 4, dataCodewordsPerBlock: 123 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 45 },
                    { numBlocks: 3, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 23 },
                    { numBlocks: 26, dataCodewordsPerBlock: 24 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 15 },
                    { numBlocks: 28, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1CC1A,
        versionNumber: 28,
        alignmentPatternCenters: [6, 26, 50, 74, 98, 122],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 117 },
                    { numBlocks: 10, dataCodewordsPerBlock: 118 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 45 },
                    { numBlocks: 23, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 24 },
                    { numBlocks: 31, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 15 },
                    { numBlocks: 31, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1D33F,
        versionNumber: 29,
        alignmentPatternCenters: [6, 30, 54, 78, 102, 126],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 116 },
                    { numBlocks: 7, dataCodewordsPerBlock: 117 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 21, dataCodewordsPerBlock: 45 },
                    { numBlocks: 7, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 23 },
                    { numBlocks: 37, dataCodewordsPerBlock: 24 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 15 },
                    { numBlocks: 26, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1ED75,
        versionNumber: 30,
        alignmentPatternCenters: [6, 26, 52, 78, 104, 130],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 115 },
                    { numBlocks: 10, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 47 },
                    { numBlocks: 10, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 24 },
                    { numBlocks: 25, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 23, dataCodewordsPerBlock: 15 },
                    { numBlocks: 25, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1F250,
        versionNumber: 31,
        alignmentPatternCenters: [6, 30, 56, 82, 108, 134],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 115 },
                    { numBlocks: 3, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 46 },
                    { numBlocks: 29, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 42, dataCodewordsPerBlock: 24 },
                    { numBlocks: 1, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 23, dataCodewordsPerBlock: 15 },
                    { numBlocks: 28, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x209D5,
        versionNumber: 32,
        alignmentPatternCenters: [6, 34, 60, 86, 112, 138],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 115 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 46 },
                    { numBlocks: 23, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 24 },
                    { numBlocks: 35, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 15 },
                    { numBlocks: 35, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x216F0,
        versionNumber: 33,
        alignmentPatternCenters: [6, 30, 58, 86, 114, 142],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 115 },
                    { numBlocks: 1, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 14, dataCodewordsPerBlock: 46 },
                    { numBlocks: 21, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 29, dataCodewordsPerBlock: 24 },
                    { numBlocks: 19, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 15 },
                    { numBlocks: 46, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x228BA,
        versionNumber: 34,
        alignmentPatternCenters: [6, 34, 62, 90, 118, 146],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 115 },
                    { numBlocks: 6, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 14, dataCodewordsPerBlock: 46 },
                    { numBlocks: 23, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 44, dataCodewordsPerBlock: 24 },
                    { numBlocks: 7, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 59, dataCodewordsPerBlock: 16 },
                    { numBlocks: 1, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x2379F,
        versionNumber: 35,
        alignmentPatternCenters: [6, 30, 54, 78, 102, 126, 150],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 121 },
                    { numBlocks: 7, dataCodewordsPerBlock: 122 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 47 },
                    { numBlocks: 26, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 39, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 15 },
                    { numBlocks: 41, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x24B0B,
        versionNumber: 36,
        alignmentPatternCenters: [6, 24, 50, 76, 102, 128, 154],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 121 },
                    { numBlocks: 14, dataCodewordsPerBlock: 122 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 47 },
                    { numBlocks: 34, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 46, dataCodewordsPerBlock: 24 },
                    { numBlocks: 10, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 15 },
                    { numBlocks: 64, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x2542E,
        versionNumber: 37,
        alignmentPatternCenters: [6, 28, 54, 80, 106, 132, 158],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 122 },
                    { numBlocks: 4, dataCodewordsPerBlock: 123 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 29, dataCodewordsPerBlock: 46 },
                    { numBlocks: 14, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 49, dataCodewordsPerBlock: 24 },
                    { numBlocks: 10, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 24, dataCodewordsPerBlock: 15 },
                    { numBlocks: 46, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x26A64,
        versionNumber: 38,
        alignmentPatternCenters: [6, 32, 58, 84, 110, 136, 162],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 122 },
                    { numBlocks: 18, dataCodewordsPerBlock: 123 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 46 },
                    { numBlocks: 32, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 48, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 42, dataCodewordsPerBlock: 15 },
                    { numBlocks: 32, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x27541,
        versionNumber: 39,
        alignmentPatternCenters: [6, 26, 54, 82, 110, 138, 166],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 20, dataCodewordsPerBlock: 117 },
                    { numBlocks: 4, dataCodewordsPerBlock: 118 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 40, dataCodewordsPerBlock: 47 },
                    { numBlocks: 7, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 43, dataCodewordsPerBlock: 24 },
                    { numBlocks: 22, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 15 },
                    { numBlocks: 67, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x28C69,
        versionNumber: 40,
        alignmentPatternCenters: [6, 30, 58, 86, 114, 142, 170],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 118 },
                    { numBlocks: 6, dataCodewordsPerBlock: 119 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 18, dataCodewordsPerBlock: 47 },
                    { numBlocks: 31, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 34, dataCodewordsPerBlock: 24 },
                    { numBlocks: 34, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 20, dataCodewordsPerBlock: 15 },
                    { numBlocks: 61, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
];


/***/ }),
/* 11 */
/***/ (function(module, exports, __nested_webpack_require_231577__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix_1 = __nested_webpack_require_231577__(0);
function squareToQuadrilateral(p1, p2, p3, p4) {
    var dx3 = p1.x - p2.x + p3.x - p4.x;
    var dy3 = p1.y - p2.y + p3.y - p4.y;
    if (dx3 === 0 && dy3 === 0) { // Affine
        return {
            a11: p2.x - p1.x,
            a12: p2.y - p1.y,
            a13: 0,
            a21: p3.x - p2.x,
            a22: p3.y - p2.y,
            a23: 0,
            a31: p1.x,
            a32: p1.y,
            a33: 1,
        };
    }
    else {
        var dx1 = p2.x - p3.x;
        var dx2 = p4.x - p3.x;
        var dy1 = p2.y - p3.y;
        var dy2 = p4.y - p3.y;
        var denominator = dx1 * dy2 - dx2 * dy1;
        var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
        var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
        return {
            a11: p2.x - p1.x + a13 * p2.x,
            a12: p2.y - p1.y + a13 * p2.y,
            a13: a13,
            a21: p4.x - p1.x + a23 * p4.x,
            a22: p4.y - p1.y + a23 * p4.y,
            a23: a23,
            a31: p1.x,
            a32: p1.y,
            a33: 1,
        };
    }
}
function quadrilateralToSquare(p1, p2, p3, p4) {
    // Here, the adjoint serves as the inverse:
    var sToQ = squareToQuadrilateral(p1, p2, p3, p4);
    return {
        a11: sToQ.a22 * sToQ.a33 - sToQ.a23 * sToQ.a32,
        a12: sToQ.a13 * sToQ.a32 - sToQ.a12 * sToQ.a33,
        a13: sToQ.a12 * sToQ.a23 - sToQ.a13 * sToQ.a22,
        a21: sToQ.a23 * sToQ.a31 - sToQ.a21 * sToQ.a33,
        a22: sToQ.a11 * sToQ.a33 - sToQ.a13 * sToQ.a31,
        a23: sToQ.a13 * sToQ.a21 - sToQ.a11 * sToQ.a23,
        a31: sToQ.a21 * sToQ.a32 - sToQ.a22 * sToQ.a31,
        a32: sToQ.a12 * sToQ.a31 - sToQ.a11 * sToQ.a32,
        a33: sToQ.a11 * sToQ.a22 - sToQ.a12 * sToQ.a21,
    };
}
function times(a, b) {
    return {
        a11: a.a11 * b.a11 + a.a21 * b.a12 + a.a31 * b.a13,
        a12: a.a12 * b.a11 + a.a22 * b.a12 + a.a32 * b.a13,
        a13: a.a13 * b.a11 + a.a23 * b.a12 + a.a33 * b.a13,
        a21: a.a11 * b.a21 + a.a21 * b.a22 + a.a31 * b.a23,
        a22: a.a12 * b.a21 + a.a22 * b.a22 + a.a32 * b.a23,
        a23: a.a13 * b.a21 + a.a23 * b.a22 + a.a33 * b.a23,
        a31: a.a11 * b.a31 + a.a21 * b.a32 + a.a31 * b.a33,
        a32: a.a12 * b.a31 + a.a22 * b.a32 + a.a32 * b.a33,
        a33: a.a13 * b.a31 + a.a23 * b.a32 + a.a33 * b.a33,
    };
}
function extract(image, location) {
    var qToS = quadrilateralToSquare({ x: 3.5, y: 3.5 }, { x: location.dimension - 3.5, y: 3.5 }, { x: location.dimension - 6.5, y: location.dimension - 6.5 }, { x: 3.5, y: location.dimension - 3.5 });
    var sToQ = squareToQuadrilateral(location.topLeft, location.topRight, location.alignmentPattern, location.bottomLeft);
    var transform = times(sToQ, qToS);
    var matrix = BitMatrix_1.BitMatrix.createEmpty(location.dimension, location.dimension);
    var mappingFunction = function (x, y) {
        var denominator = transform.a13 * x + transform.a23 * y + transform.a33;
        return {
            x: (transform.a11 * x + transform.a21 * y + transform.a31) / denominator,
            y: (transform.a12 * x + transform.a22 * y + transform.a32) / denominator,
        };
    };
    for (var y = 0; y < location.dimension; y++) {
        for (var x = 0; x < location.dimension; x++) {
            var xValue = x + 0.5;
            var yValue = y + 0.5;
            var sourcePixel = mappingFunction(xValue, yValue);
            matrix.set(x, y, image.get(Math.floor(sourcePixel.x), Math.floor(sourcePixel.y)));
        }
    }
    return {
        matrix: matrix,
        mappingFunction: mappingFunction,
    };
}
exports.extract = extract;


/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_235375__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MAX_FINDERPATTERNS_TO_SEARCH = 4;
var MIN_QUAD_RATIO = 0.5;
var MAX_QUAD_RATIO = 1.5;
var distance = function (a, b) { return Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)); };
function sum(values) {
    return values.reduce(function (a, b) { return a + b; });
}
// Takes three finder patterns and organizes them into topLeft, topRight, etc
function reorderFinderPatterns(pattern1, pattern2, pattern3) {
    var _a, _b, _c, _d;
    // Find distances between pattern centers
    var oneTwoDistance = distance(pattern1, pattern2);
    var twoThreeDistance = distance(pattern2, pattern3);
    var oneThreeDistance = distance(pattern1, pattern3);
    var bottomLeft;
    var topLeft;
    var topRight;
    // Assume one closest to other two is B; A and C will just be guesses at first
    if (twoThreeDistance >= oneTwoDistance && twoThreeDistance >= oneThreeDistance) {
        _a = [pattern2, pattern1, pattern3], bottomLeft = _a[0], topLeft = _a[1], topRight = _a[2];
    }
    else if (oneThreeDistance >= twoThreeDistance && oneThreeDistance >= oneTwoDistance) {
        _b = [pattern1, pattern2, pattern3], bottomLeft = _b[0], topLeft = _b[1], topRight = _b[2];
    }
    else {
        _c = [pattern1, pattern3, pattern2], bottomLeft = _c[0], topLeft = _c[1], topRight = _c[2];
    }
    // Use cross product to figure out whether bottomLeft (A) and topRight (C) are correct or flipped in relation to topLeft (B)
    // This asks whether BC x BA has a positive z component, which is the arrangement we want. If it's negative, then
    // we've got it flipped around and should swap topRight and bottomLeft.
    if (((topRight.x - topLeft.x) * (bottomLeft.y - topLeft.y)) - ((topRight.y - topLeft.y) * (bottomLeft.x - topLeft.x)) < 0) {
        _d = [topRight, bottomLeft], bottomLeft = _d[0], topRight = _d[1];
    }
    return { bottomLeft: bottomLeft, topLeft: topLeft, topRight: topRight };
}
// Computes the dimension (number of modules on a side) of the QR Code based on the position of the finder patterns
function computeDimension(topLeft, topRight, bottomLeft, matrix) {
    var moduleSize = (sum(countBlackWhiteRun(topLeft, bottomLeft, matrix, 5)) / 7 + // Divide by 7 since the ratio is 1:1:3:1:1
        sum(countBlackWhiteRun(topLeft, topRight, matrix, 5)) / 7 +
        sum(countBlackWhiteRun(bottomLeft, topLeft, matrix, 5)) / 7 +
        sum(countBlackWhiteRun(topRight, topLeft, matrix, 5)) / 7) / 4;
    if (moduleSize < 1) {
        throw new Error("Invalid module size");
    }
    var topDimension = Math.round(distance(topLeft, topRight) / moduleSize);
    var sideDimension = Math.round(distance(topLeft, bottomLeft) / moduleSize);
    var dimension = Math.floor((topDimension + sideDimension) / 2) + 7;
    switch (dimension % 4) {
        case 0:
            dimension++;
            break;
        case 2:
            dimension--;
            break;
    }
    return { dimension: dimension, moduleSize: moduleSize };
}
// Takes an origin point and an end point and counts the sizes of the black white run from the origin towards the end point.
// Returns an array of elements, representing the pixel size of the black white run.
// Uses a variant of http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
function countBlackWhiteRunTowardsPoint(origin, end, matrix, length) {
    var switchPoints = [{ x: Math.floor(origin.x), y: Math.floor(origin.y) }];
    var steep = Math.abs(end.y - origin.y) > Math.abs(end.x - origin.x);
    var fromX;
    var fromY;
    var toX;
    var toY;
    if (steep) {
        fromX = Math.floor(origin.y);
        fromY = Math.floor(origin.x);
        toX = Math.floor(end.y);
        toY = Math.floor(end.x);
    }
    else {
        fromX = Math.floor(origin.x);
        fromY = Math.floor(origin.y);
        toX = Math.floor(end.x);
        toY = Math.floor(end.y);
    }
    var dx = Math.abs(toX - fromX);
    var dy = Math.abs(toY - fromY);
    var error = Math.floor(-dx / 2);
    var xStep = fromX < toX ? 1 : -1;
    var yStep = fromY < toY ? 1 : -1;
    var currentPixel = true;
    // Loop up until x == toX, but not beyond
    for (var x = fromX, y = fromY; x !== toX + xStep; x += xStep) {
        // Does current pixel mean we have moved white to black or vice versa?
        // Scanning black in state 0,2 and white in state 1, so if we find the wrong
        // color, advance to next state or end if we are in state 2 already
        var realX = steep ? y : x;
        var realY = steep ? x : y;
        if (matrix.get(realX, realY) !== currentPixel) {
            currentPixel = !currentPixel;
            switchPoints.push({ x: realX, y: realY });
            if (switchPoints.length === length + 1) {
                break;
            }
        }
        error += dy;
        if (error > 0) {
            if (y === toY) {
                break;
            }
            y += yStep;
            error -= dx;
        }
    }
    var distances = [];
    for (var i = 0; i < length; i++) {
        if (switchPoints[i] && switchPoints[i + 1]) {
            distances.push(distance(switchPoints[i], switchPoints[i + 1]));
        }
        else {
            distances.push(0);
        }
    }
    return distances;
}
// Takes an origin point and an end point and counts the sizes of the black white run in the origin point
// along the line that intersects with the end point. Returns an array of elements, representing the pixel sizes
// of the black white run. Takes a length which represents the number of switches from black to white to look for.
function countBlackWhiteRun(origin, end, matrix, length) {
    var _a;
    var rise = end.y - origin.y;
    var run = end.x - origin.x;
    var towardsEnd = countBlackWhiteRunTowardsPoint(origin, end, matrix, Math.ceil(length / 2));
    var awayFromEnd = countBlackWhiteRunTowardsPoint(origin, { x: origin.x - run, y: origin.y - rise }, matrix, Math.ceil(length / 2));
    var middleValue = towardsEnd.shift() + awayFromEnd.shift() - 1; // Substract one so we don't double count a pixel
    return (_a = awayFromEnd.concat(middleValue)).concat.apply(_a, towardsEnd);
}
// Takes in a black white run and an array of expected ratios. Returns the average size of the run as well as the "error" -
// that is the amount the run diverges from the expected ratio
function scoreBlackWhiteRun(sequence, ratios) {
    var averageSize = sum(sequence) / sum(ratios);
    var error = 0;
    ratios.forEach(function (ratio, i) {
        error += Math.pow((sequence[i] - ratio * averageSize), 2);
    });
    return { averageSize: averageSize, error: error };
}
// Takes an X,Y point and an array of sizes and scores the point against those ratios.
// For example for a finder pattern takes the ratio list of 1:1:3:1:1 and checks horizontal, vertical and diagonal ratios
// against that.
function scorePattern(point, ratios, matrix) {
    try {
        var horizontalRun = countBlackWhiteRun(point, { x: -1, y: point.y }, matrix, ratios.length);
        var verticalRun = countBlackWhiteRun(point, { x: point.x, y: -1 }, matrix, ratios.length);
        var topLeftPoint = {
            x: Math.max(0, point.x - point.y) - 1,
            y: Math.max(0, point.y - point.x) - 1,
        };
        var topLeftBottomRightRun = countBlackWhiteRun(point, topLeftPoint, matrix, ratios.length);
        var bottomLeftPoint = {
            x: Math.min(matrix.width, point.x + point.y) + 1,
            y: Math.min(matrix.height, point.y + point.x) + 1,
        };
        var bottomLeftTopRightRun = countBlackWhiteRun(point, bottomLeftPoint, matrix, ratios.length);
        var horzError = scoreBlackWhiteRun(horizontalRun, ratios);
        var vertError = scoreBlackWhiteRun(verticalRun, ratios);
        var diagDownError = scoreBlackWhiteRun(topLeftBottomRightRun, ratios);
        var diagUpError = scoreBlackWhiteRun(bottomLeftTopRightRun, ratios);
        var ratioError = Math.sqrt(horzError.error * horzError.error +
            vertError.error * vertError.error +
            diagDownError.error * diagDownError.error +
            diagUpError.error * diagUpError.error);
        var avgSize = (horzError.averageSize + vertError.averageSize + diagDownError.averageSize + diagUpError.averageSize) / 4;
        var sizeError = (Math.pow((horzError.averageSize - avgSize), 2) +
            Math.pow((vertError.averageSize - avgSize), 2) +
            Math.pow((diagDownError.averageSize - avgSize), 2) +
            Math.pow((diagUpError.averageSize - avgSize), 2)) / avgSize;
        return ratioError + sizeError;
    }
    catch (_a) {
        return Infinity;
    }
}
function recenterLocation(matrix, p) {
    var leftX = Math.round(p.x);
    while (matrix.get(leftX, Math.round(p.y))) {
        leftX--;
    }
    var rightX = Math.round(p.x);
    while (matrix.get(rightX, Math.round(p.y))) {
        rightX++;
    }
    var x = (leftX + rightX) / 2;
    var topY = Math.round(p.y);
    while (matrix.get(Math.round(x), topY)) {
        topY--;
    }
    var bottomY = Math.round(p.y);
    while (matrix.get(Math.round(x), bottomY)) {
        bottomY++;
    }
    var y = (topY + bottomY) / 2;
    return { x: x, y: y };
}
function locate(matrix) {
    var finderPatternQuads = [];
    var activeFinderPatternQuads = [];
    var alignmentPatternQuads = [];
    var activeAlignmentPatternQuads = [];
    var _loop_1 = function (y) {
        var length_1 = 0;
        var lastBit = false;
        var scans = [0, 0, 0, 0, 0];
        var _loop_2 = function (x) {
            var v = matrix.get(x, y);
            if (v === lastBit) {
                length_1++;
            }
            else {
                scans = [scans[1], scans[2], scans[3], scans[4], length_1];
                length_1 = 1;
                lastBit = v;
                // Do the last 5 color changes ~ match the expected ratio for a finder pattern? 1:1:3:1:1 of b:w:b:w:b
                var averageFinderPatternBlocksize = sum(scans) / 7;
                var validFinderPattern = Math.abs(scans[0] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    Math.abs(scans[1] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    Math.abs(scans[2] - 3 * averageFinderPatternBlocksize) < 3 * averageFinderPatternBlocksize &&
                    Math.abs(scans[3] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    Math.abs(scans[4] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    !v; // And make sure the current pixel is white since finder patterns are bordered in white
                // Do the last 3 color changes ~ match the expected ratio for an alignment pattern? 1:1:1 of w:b:w
                var averageAlignmentPatternBlocksize = sum(scans.slice(-3)) / 3;
                var validAlignmentPattern = Math.abs(scans[2] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize &&
                    Math.abs(scans[3] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize &&
                    Math.abs(scans[4] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize &&
                    v; // Is the current pixel black since alignment patterns are bordered in black
                if (validFinderPattern) {
                    // Compute the start and end x values of the large center black square
                    var endX_1 = x - scans[3] - scans[4];
                    var startX_1 = endX_1 - scans[2];
                    var line = { startX: startX_1, endX: endX_1, y: y };
                    // Is there a quad directly above the current spot? If so, extend it with the new line. Otherwise, create a new quad with
                    // that line as the starting point.
                    var matchingQuads = activeFinderPatternQuads.filter(function (q) {
                        return (startX_1 >= q.bottom.startX && startX_1 <= q.bottom.endX) ||
                            (endX_1 >= q.bottom.startX && startX_1 <= q.bottom.endX) ||
                            (startX_1 <= q.bottom.startX && endX_1 >= q.bottom.endX && ((scans[2] / (q.bottom.endX - q.bottom.startX)) < MAX_QUAD_RATIO &&
                                (scans[2] / (q.bottom.endX - q.bottom.startX)) > MIN_QUAD_RATIO));
                    });
                    if (matchingQuads.length > 0) {
                        matchingQuads[0].bottom = line;
                    }
                    else {
                        activeFinderPatternQuads.push({ top: line, bottom: line });
                    }
                }
                if (validAlignmentPattern) {
                    // Compute the start and end x values of the center black square
                    var endX_2 = x - scans[4];
                    var startX_2 = endX_2 - scans[3];
                    var line = { startX: startX_2, y: y, endX: endX_2 };
                    // Is there a quad directly above the current spot? If so, extend it with the new line. Otherwise, create a new quad with
                    // that line as the starting point.
                    var matchingQuads = activeAlignmentPatternQuads.filter(function (q) {
                        return (startX_2 >= q.bottom.startX && startX_2 <= q.bottom.endX) ||
                            (endX_2 >= q.bottom.startX && startX_2 <= q.bottom.endX) ||
                            (startX_2 <= q.bottom.startX && endX_2 >= q.bottom.endX && ((scans[2] / (q.bottom.endX - q.bottom.startX)) < MAX_QUAD_RATIO &&
                                (scans[2] / (q.bottom.endX - q.bottom.startX)) > MIN_QUAD_RATIO));
                    });
                    if (matchingQuads.length > 0) {
                        matchingQuads[0].bottom = line;
                    }
                    else {
                        activeAlignmentPatternQuads.push({ top: line, bottom: line });
                    }
                }
            }
        };
        for (var x = -1; x <= matrix.width; x++) {
            _loop_2(x);
        }
        finderPatternQuads.push.apply(finderPatternQuads, activeFinderPatternQuads.filter(function (q) { return q.bottom.y !== y && q.bottom.y - q.top.y >= 2; }));
        activeFinderPatternQuads = activeFinderPatternQuads.filter(function (q) { return q.bottom.y === y; });
        alignmentPatternQuads.push.apply(alignmentPatternQuads, activeAlignmentPatternQuads.filter(function (q) { return q.bottom.y !== y; }));
        activeAlignmentPatternQuads = activeAlignmentPatternQuads.filter(function (q) { return q.bottom.y === y; });
    };
    for (var y = 0; y <= matrix.height; y++) {
        _loop_1(y);
    }
    finderPatternQuads.push.apply(finderPatternQuads, activeFinderPatternQuads.filter(function (q) { return q.bottom.y - q.top.y >= 2; }));
    alignmentPatternQuads.push.apply(alignmentPatternQuads, activeAlignmentPatternQuads);
    var finderPatternGroups = finderPatternQuads
        .filter(function (q) { return q.bottom.y - q.top.y >= 2; }) // All quads must be at least 2px tall since the center square is larger than a block
        .map(function (q) {
        var x = (q.top.startX + q.top.endX + q.bottom.startX + q.bottom.endX) / 4;
        var y = (q.top.y + q.bottom.y + 1) / 2;
        if (!matrix.get(Math.round(x), Math.round(y))) {
            return;
        }
        var lengths = [q.top.endX - q.top.startX, q.bottom.endX - q.bottom.startX, q.bottom.y - q.top.y + 1];
        var size = sum(lengths) / lengths.length;
        var score = scorePattern({ x: Math.round(x), y: Math.round(y) }, [1, 1, 3, 1, 1], matrix);
        return { score: score, x: x, y: y, size: size };
    })
        .filter(function (q) { return !!q; }) // Filter out any rejected quads from above
        .sort(function (a, b) { return a.score - b.score; })
        // Now take the top finder pattern options and try to find 2 other options with a similar size.
        .map(function (point, i, finderPatterns) {
        if (i > MAX_FINDERPATTERNS_TO_SEARCH) {
            return null;
        }
        var otherPoints = finderPatterns
            .filter(function (p, ii) { return i !== ii; })
            .map(function (p) { return ({ x: p.x, y: p.y, score: p.score + (Math.pow((p.size - point.size), 2)) / point.size, size: p.size }); })
            .sort(function (a, b) { return a.score - b.score; });
        if (otherPoints.length < 2) {
            return null;
        }
        var score = point.score + otherPoints[0].score + otherPoints[1].score;
        return { points: [point].concat(otherPoints.slice(0, 2)), score: score };
    })
        .filter(function (q) { return !!q; }) // Filter out any rejected finder patterns from above
        .sort(function (a, b) { return a.score - b.score; });
    if (finderPatternGroups.length === 0) {
        return null;
    }
    var _a = reorderFinderPatterns(finderPatternGroups[0].points[0], finderPatternGroups[0].points[1], finderPatternGroups[0].points[2]), topRight = _a.topRight, topLeft = _a.topLeft, bottomLeft = _a.bottomLeft;
    var alignment = findAlignmentPattern(matrix, alignmentPatternQuads, topRight, topLeft, bottomLeft);
    var result = [];
    if (alignment) {
        result.push({
            alignmentPattern: { x: alignment.alignmentPattern.x, y: alignment.alignmentPattern.y },
            bottomLeft: { x: bottomLeft.x, y: bottomLeft.y },
            dimension: alignment.dimension,
            topLeft: { x: topLeft.x, y: topLeft.y },
            topRight: { x: topRight.x, y: topRight.y },
        });
    }
    // We normally use the center of the quads as the location of the tracking points, which is optimal for most cases and will account
    // for a skew in the image. However, In some cases, a slight skew might not be real and instead be caused by image compression
    // errors and/or low resolution. For those cases, we'd be better off centering the point exactly in the middle of the black area. We
    // compute and return the location data for the naively centered points as it is little additional work and allows for multiple
    // attempts at decoding harder images.
    var midTopRight = recenterLocation(matrix, topRight);
    var midTopLeft = recenterLocation(matrix, topLeft);
    var midBottomLeft = recenterLocation(matrix, bottomLeft);
    var centeredAlignment = findAlignmentPattern(matrix, alignmentPatternQuads, midTopRight, midTopLeft, midBottomLeft);
    if (centeredAlignment) {
        result.push({
            alignmentPattern: { x: centeredAlignment.alignmentPattern.x, y: centeredAlignment.alignmentPattern.y },
            bottomLeft: { x: midBottomLeft.x, y: midBottomLeft.y },
            topLeft: { x: midTopLeft.x, y: midTopLeft.y },
            topRight: { x: midTopRight.x, y: midTopRight.y },
            dimension: centeredAlignment.dimension,
        });
    }
    if (result.length === 0) {
        return null;
    }
    return result;
}
exports.locate = locate;
function findAlignmentPattern(matrix, alignmentPatternQuads, topRight, topLeft, bottomLeft) {
    var _a;
    // Now that we've found the three finder patterns we can determine the blockSize and the size of the QR code.
    // We'll use these to help find the alignment pattern but also later when we do the extraction.
    var dimension;
    var moduleSize;
    try {
        (_a = computeDimension(topLeft, topRight, bottomLeft, matrix), dimension = _a.dimension, moduleSize = _a.moduleSize);
    }
    catch (e) {
        return null;
    }
    // Now find the alignment pattern
    var bottomRightFinderPattern = {
        x: topRight.x - topLeft.x + bottomLeft.x,
        y: topRight.y - topLeft.y + bottomLeft.y,
    };
    var modulesBetweenFinderPatterns = ((distance(topLeft, bottomLeft) + distance(topLeft, topRight)) / 2 / moduleSize);
    var correctionToTopLeft = 1 - (3 / modulesBetweenFinderPatterns);
    var expectedAlignmentPattern = {
        x: topLeft.x + correctionToTopLeft * (bottomRightFinderPattern.x - topLeft.x),
        y: topLeft.y + correctionToTopLeft * (bottomRightFinderPattern.y - topLeft.y),
    };
    var alignmentPatterns = alignmentPatternQuads
        .map(function (q) {
        var x = (q.top.startX + q.top.endX + q.bottom.startX + q.bottom.endX) / 4;
        var y = (q.top.y + q.bottom.y + 1) / 2;
        if (!matrix.get(Math.floor(x), Math.floor(y))) {
            return;
        }
        var lengths = [q.top.endX - q.top.startX, q.bottom.endX - q.bottom.startX, (q.bottom.y - q.top.y + 1)];
        var size = sum(lengths) / lengths.length;
        var sizeScore = scorePattern({ x: Math.floor(x), y: Math.floor(y) }, [1, 1, 1], matrix);
        var score = sizeScore + distance({ x: x, y: y }, expectedAlignmentPattern);
        return { x: x, y: y, score: score };
    })
        .filter(function (v) { return !!v; })
        .sort(function (a, b) { return a.score - b.score; });
    // If there are less than 15 modules between finder patterns it's a version 1 QR code and as such has no alignmemnt pattern
    // so we can only use our best guess.
    var alignmentPattern = modulesBetweenFinderPatterns >= 15 && alignmentPatterns.length ? alignmentPatterns[0] : expectedAlignmentPattern;
    return { alignmentPattern: alignmentPattern, dimension: dimension };
}


/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./node_modules/ts-loader/index.js!./src/worker/mqr-worker.ts":
/*!********************************************************************!*\
  !*** ./node_modules/ts-loader/index.js!./src/worker/mqr-worker.ts ***!
  \********************************************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsqr */ "./node_modules/jsqr/dist/jsQR.js");
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsqr__WEBPACK_IMPORTED_MODULE_0__);
;
var ctx = self;
var mapFunctionWithType = function (data, mapping) {
    var type = data.type, body = data.body;
    var fn = mapping[type];
    var rawResult = fn(body);
    return {
        type: type,
        body: rawResult
    };
};
var functionMapperCreator = function (mapping) { return function (event) {
    var result = mapFunctionWithType(event.data, mapping);
    ctx.postMessage(result);
}; };
var scanQRCode = function (imageData) {
    var code = jsqr__WEBPACK_IMPORTED_MODULE_0___default()(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert",
    });
    return code;
};
ctx.onmessage = functionMapperCreator({
    "scan_qrcode": scanQRCode
});


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./node_modules/ts-loader/index.js!./src/worker/mqr-worker.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tcXIvLi9ub2RlX21vZHVsZXMvanNxci9kaXN0L2pzUVIuanMiLCJ3ZWJwYWNrOi8vbXFyLy4vc3JjL3dvcmtlci9tcXItd29ya2VyLnRzIiwid2VicGFjazovL21xci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXFyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tcXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBS3FCO0FBQzNCLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLDhCQUFtQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsOEJBQW1CO0FBQzdCO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QjtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0IsZUFBZSw4QkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QjtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RCxXQUFXLDhCQUFtQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsOEJBQW1CLGlDQUFpQywrREFBK0Q7QUFDN0g7QUFDQTtBQUNBLFVBQVUsOEJBQW1CO0FBQzdCO0FBQ0E7QUFDQSxpQkFBaUIsOEJBQW1CLENBQUMsOEJBQW1CO0FBQ3hELFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsK0JBQW1COztBQUVwRDs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0MsOEJBQThCLGtCQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsK0JBQW1COztBQUVwRDs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RCxzQkFBc0IsK0JBQW1CO0FBQ3pDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87QUFDUDtBQUNBLGlDQUFpQywrQkFBbUI7O0FBRXBEOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQiwrQkFBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhCQUE4QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0EsZ0NBQWdDLCtCQUErQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87QUFDUDtBQUNBLGlDQUFpQyxnQ0FBbUI7O0FBRXBEOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixnQ0FBbUI7QUFDckMsZ0JBQWdCLGdDQUFtQjtBQUNuQyxrQkFBa0IsZ0NBQW1CO0FBQ3JDLGdCQUFnQixnQ0FBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5QkFBeUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBLGlDQUFpQyxnQ0FBbUI7O0FBRXBEOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixnQ0FBbUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxzQ0FBc0M7QUFDdEUsdUNBQXVDLDJDQUEyQztBQUNsRjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0NBQXNDO0FBQ3RFLHVDQUF1QywyQ0FBMkM7QUFDbEY7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQsc0NBQXNDLGNBQWM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsdUJBQXVCO0FBQ3hELHFDQUFxQyx1QkFBdUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBLGlDQUFpQyxnQ0FBbUI7O0FBRXBEOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVELGtCQUFrQixnQ0FBbUI7QUFDckMsbUJBQW1CLGdDQUFtQjtBQUN0QyxvQkFBb0IsZ0NBQW1CO0FBQ3ZDLGdCQUFnQixnQ0FBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUUsS0FBSyw0QkFBNEIsdUNBQXVDLEVBQUU7QUFDMUU7QUFDQTtBQUNBLGtCQUFrQixnQ0FBZ0MsRUFBRTtBQUNwRCxrQkFBa0Isd0JBQXdCLEVBQUU7QUFDNUMsa0JBQWtCLHNCQUFzQixFQUFFO0FBQzFDLGtCQUFrQiw4QkFBOEIsRUFBRTtBQUNsRCxrQkFBa0IsOERBQThELEVBQUU7QUFDbEYsa0JBQWtCLG9EQUFvRCxFQUFFO0FBQ3hFLGtCQUFrQiwwREFBMEQsRUFBRTtBQUM5RSxrQkFBa0IsMERBQTBELEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsbURBQW1EO0FBQ25ELG1EQUFtRDtBQUNuRDtBQUNBLDBEQUEwRCxnQkFBZ0I7QUFDMUU7QUFDQSw4REFBOEQsZ0JBQWdCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxvREFBb0Q7QUFDcEQ7QUFDQSx3REFBd0Q7QUFDeEQsd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpQkFBaUI7QUFDMUQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSx1QkFBdUIsZUFBZTtBQUN0QztBQUNBLHNDQUFzQyxrQkFBa0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsYUFBYTtBQUMvQztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQixtQ0FBbUMscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0IsbUNBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELHdCQUF3QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0Isc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9CQUFvQixPQUFPO0FBQzFEO0FBQ0E7QUFDQSwrQkFBK0IsZUFBZSxPQUFPO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGlDQUFpQztBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1Qyw2QkFBNkIsK0RBQStEO0FBQzVGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QyxtREFBbUQsMEJBQTBCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsMEJBQTBCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCwrQkFBK0IsRUFBRTtBQUN6RjtBQUNBO0FBQ0EsK0NBQStDLDBCQUEwQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckMsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBLGlDQUFpQyxnQ0FBbUI7O0FBRXBEOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esa0JBQWtCLGdDQUFtQjtBQUNyQyxzQkFBc0IsZ0NBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyQ0FBMkM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsZ0RBQWdELEVBQUU7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBLGlDQUFpQyxnQ0FBbUI7O0FBRXBEOztBQUVBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBLE9BQU87QUFDUDtBQUNBLGlDQUFpQyxnQ0FBbUI7O0FBRXBEOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RCxrQkFBa0IsaUNBQW1CO0FBQ3JDLHNCQUFzQixpQ0FBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBDQUEwQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7O0FBRUEsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0Qix5Q0FBeUM7QUFDckUsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0Qix5Q0FBeUM7QUFDckUsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDJDQUEyQztBQUN2RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBMEM7QUFDdEUsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMENBQTBDO0FBQ3RFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkNBQTJDO0FBQ3ZFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUEwQztBQUN0RSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQ0FBMkM7QUFDdkUsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLDJDQUEyQztBQUN2RSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0QkFBNEIsMkNBQTJDO0FBQ3ZFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QiwyQ0FBMkM7QUFDdkUsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQTRDO0FBQ2pFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRCxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsNENBQTRDO0FBQ2pFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDRDQUE0QztBQUNqRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUE0QztBQUNqRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRDQUE0QztBQUN4RSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBNEM7QUFDakUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUE0QztBQUNqRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQTRDO0FBQ2pFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDRDQUE0QztBQUNqRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9ELHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBMEM7QUFDL0QscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUE0QztBQUNqRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiw0Q0FBNEM7QUFDakU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBNEM7QUFDakUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwwQ0FBMEM7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUE0QztBQUNqRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBMkM7QUFDaEUscUJBQXFCLDJDQUEyQztBQUNoRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQTJDO0FBQ2hFLHFCQUFxQiwyQ0FBMkM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJDQUEyQztBQUNoRSxxQkFBcUIsMkNBQTJDO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDs7QUFFQSw4Q0FBOEMsY0FBYztBQUM1RCxrQkFBa0IsaUNBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGlCQUFpQixHQUFHLHNDQUFzQyxHQUFHLDJEQUEyRCxHQUFHLHNDQUFzQztBQUN2TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0MsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBLGlDQUFpQyxpQ0FBbUI7O0FBRXBEOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1RUFBdUU7QUFDdkc7QUFDQSwwQ0FBMEMsY0FBYyxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1EQUFtRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbUJBQW1CO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHFCQUFxQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCx3Q0FBd0M7QUFDdEcsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELG9CQUFvQjtBQUMzRSxxREFBcUQsb0JBQW9CO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsMEJBQTBCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCwwQkFBMEI7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQSx3R0FBd0csc0RBQXNELEVBQUU7QUFDaEssaUZBQWlGLHlCQUF5QixFQUFFO0FBQzVHLGlIQUFpSCx5QkFBeUIsRUFBRTtBQUM1SSx1RkFBdUYseUJBQXlCLEVBQUU7QUFDbEg7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxvR0FBb0csa0NBQWtDLEVBQUU7QUFDeEk7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0MsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHFDQUFxQztBQUN2RSxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMLDhCQUE4QixZQUFZLEVBQUU7QUFDNUMsK0JBQStCLDBCQUEwQixFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN6RCwrQkFBK0IsVUFBVSxtR0FBbUcsRUFBRSxFQUFFO0FBQ2hKLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsOEJBQThCLFlBQVksRUFBRTtBQUM1QywrQkFBK0IsMEJBQTBCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtRUFBbUU7QUFDbEcseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBLHNCQUFzQiw2QkFBNkI7QUFDbkQsdUJBQXVCLCtCQUErQjtBQUN0RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG1GQUFtRjtBQUNsSCx5QkFBeUIseUNBQXlDO0FBQ2xFLHNCQUFzQixtQ0FBbUM7QUFDekQsdUJBQXVCLHFDQUFxQztBQUM1RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUNBQXFDO0FBQzNFLDBDQUEwQyxhQUFhO0FBQ3ZELGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsOEJBQThCLFlBQVksRUFBRTtBQUM1QywrQkFBK0IsMEJBQTBCLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbjNURCxDQUFtQztBQUduQyxJQUFNLEdBQUcsR0FBVyxJQUFXLENBQUM7QUFFaEMsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLElBQW1CLEVBQUUsT0FBd0I7SUFDakUsUUFBSSxHQUFXLElBQUksS0FBZixFQUFFLElBQUksR0FBSyxJQUFJLEtBQVQsQ0FBVTtJQUM1QixJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTNCLE9BQU87UUFDTixJQUFJO1FBQ0osSUFBSSxFQUFFLFNBQVM7S0FDZixDQUFDO0FBQ0gsQ0FBQztBQUVELElBQU0scUJBQXFCLEdBQUcsVUFBQyxPQUF3QixJQUFLLHNCQUFLO0lBQ2hFLElBQU0sTUFBTSxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QixDQUFDLEVBSDJELENBRzNEO0FBRUQsSUFBTSxVQUFVLEdBQUcsVUFBQyxTQUFvQjtJQUN2QyxJQUFNLElBQUksR0FBRywyQ0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ3BFLGlCQUFpQixFQUFFLFlBQVk7S0FDL0IsQ0FBQyxDQUFDO0lBRUgsT0FBTyxJQUFJO0FBQ1osQ0FBQztBQUVELEdBQUcsQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUM7SUFDckMsYUFBYSxFQUFFLFVBQVU7Q0FDekIsQ0FBQzs7Ozs7OztVQy9CRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJxci13b3JrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJqc1FSXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImpzUVJcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEJpdE1hdHJpeCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaXRNYXRyaXgoZGF0YSwgd2lkdGgpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGRhdGEubGVuZ3RoIC8gd2lkdGg7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIEJpdE1hdHJpeC5jcmVhdGVFbXB0eSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiBuZXcgQml0TWF0cml4KG5ldyBVaW50OENsYW1wZWRBcnJheSh3aWR0aCAqIGhlaWdodCksIHdpZHRoKTtcbiAgICB9O1xuICAgIEJpdE1hdHJpeC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPCAwIHx8IHggPj0gdGhpcy53aWR0aCB8fCB5IDwgMCB8fCB5ID49IHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhdGhpcy5kYXRhW3kgKiB0aGlzLndpZHRoICsgeF07XG4gICAgfTtcbiAgICBCaXRNYXRyaXgucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh4LCB5LCB2KSB7XG4gICAgICAgIHRoaXMuZGF0YVt5ICogdGhpcy53aWR0aCArIHhdID0gdiA/IDEgOiAwO1xuICAgIH07XG4gICAgQml0TWF0cml4LnByb3RvdHlwZS5zZXRSZWdpb24gPSBmdW5jdGlvbiAobGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCB2KSB7XG4gICAgICAgIGZvciAodmFyIHkgPSB0b3A7IHkgPCB0b3AgKyBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgeCA9IGxlZnQ7IHggPCBsZWZ0ICsgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHgsIHksICEhdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBCaXRNYXRyaXg7XG59KCkpO1xuZXhwb3J0cy5CaXRNYXRyaXggPSBCaXRNYXRyaXg7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR2VuZXJpY0dGUG9seV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbmZ1bmN0aW9uIGFkZE9yU3VidHJhY3RHRihhLCBiKSB7XG4gICAgcmV0dXJuIGEgXiBiOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWJpdHdpc2Vcbn1cbmV4cG9ydHMuYWRkT3JTdWJ0cmFjdEdGID0gYWRkT3JTdWJ0cmFjdEdGO1xudmFyIEdlbmVyaWNHRiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHZW5lcmljR0YocHJpbWl0aXZlLCBzaXplLCBnZW5CYXNlKSB7XG4gICAgICAgIHRoaXMucHJpbWl0aXZlID0gcHJpbWl0aXZlO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmdlbmVyYXRvckJhc2UgPSBnZW5CYXNlO1xuICAgICAgICB0aGlzLmV4cFRhYmxlID0gbmV3IEFycmF5KHRoaXMuc2l6ZSk7XG4gICAgICAgIHRoaXMubG9nVGFibGUgPSBuZXcgQXJyYXkodGhpcy5zaXplKTtcbiAgICAgICAgdmFyIHggPSAxO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmV4cFRhYmxlW2ldID0geDtcbiAgICAgICAgICAgIHggPSB4ICogMjtcbiAgICAgICAgICAgIGlmICh4ID49IHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIHggPSAoeCBeIHRoaXMucHJpbWl0aXZlKSAmICh0aGlzLnNpemUgLSAxKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNpemUgLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubG9nVGFibGVbdGhpcy5leHBUYWJsZVtpXV0gPSBpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuemVybyA9IG5ldyBHZW5lcmljR0ZQb2x5XzEuZGVmYXVsdCh0aGlzLCBVaW50OENsYW1wZWRBcnJheS5mcm9tKFswXSkpO1xuICAgICAgICB0aGlzLm9uZSA9IG5ldyBHZW5lcmljR0ZQb2x5XzEuZGVmYXVsdCh0aGlzLCBVaW50OENsYW1wZWRBcnJheS5mcm9tKFsxXSkpO1xuICAgIH1cbiAgICBHZW5lcmljR0YucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGEgPT09IDAgfHwgYiA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwVGFibGVbKHRoaXMubG9nVGFibGVbYV0gKyB0aGlzLmxvZ1RhYmxlW2JdKSAlICh0aGlzLnNpemUgLSAxKV07XG4gICAgfTtcbiAgICBHZW5lcmljR0YucHJvdG90eXBlLmludmVyc2UgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICBpZiAoYSA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaW52ZXJ0IDBcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwVGFibGVbdGhpcy5zaXplIC0gdGhpcy5sb2dUYWJsZVthXSAtIDFdO1xuICAgIH07XG4gICAgR2VuZXJpY0dGLnByb3RvdHlwZS5idWlsZE1vbm9taWFsID0gZnVuY3Rpb24gKGRlZ3JlZSwgY29lZmZpY2llbnQpIHtcbiAgICAgICAgaWYgKGRlZ3JlZSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbW9ub21pYWwgZGVncmVlIGxlc3MgdGhhbiAwXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2VmZmljaWVudCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuemVybztcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29lZmZpY2llbnRzID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGRlZ3JlZSArIDEpO1xuICAgICAgICBjb2VmZmljaWVudHNbMF0gPSBjb2VmZmljaWVudDtcbiAgICAgICAgcmV0dXJuIG5ldyBHZW5lcmljR0ZQb2x5XzEuZGVmYXVsdCh0aGlzLCBjb2VmZmljaWVudHMpO1xuICAgIH07XG4gICAgR2VuZXJpY0dGLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICBpZiAoYSA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgdGFrZSBsb2coMClcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubG9nVGFibGVbYV07XG4gICAgfTtcbiAgICBHZW5lcmljR0YucHJvdG90eXBlLmV4cCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4cFRhYmxlW2FdO1xuICAgIH07XG4gICAgcmV0dXJuIEdlbmVyaWNHRjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHZW5lcmljR0Y7XG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgR2VuZXJpY0dGXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIEdlbmVyaWNHRlBvbHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gR2VuZXJpY0dGUG9seShmaWVsZCwgY29lZmZpY2llbnRzKSB7XG4gICAgICAgIGlmIChjb2VmZmljaWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjb2VmZmljaWVudHMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICAgICAgdmFyIGNvZWZmaWNpZW50c0xlbmd0aCA9IGNvZWZmaWNpZW50cy5sZW5ndGg7XG4gICAgICAgIGlmIChjb2VmZmljaWVudHNMZW5ndGggPiAxICYmIGNvZWZmaWNpZW50c1swXSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gTGVhZGluZyB0ZXJtIG11c3QgYmUgbm9uLXplcm8gZm9yIGFueXRoaW5nIGV4Y2VwdCB0aGUgY29uc3RhbnQgcG9seW5vbWlhbCBcIjBcIlxuICAgICAgICAgICAgdmFyIGZpcnN0Tm9uWmVybyA9IDE7XG4gICAgICAgICAgICB3aGlsZSAoZmlyc3ROb25aZXJvIDwgY29lZmZpY2llbnRzTGVuZ3RoICYmIGNvZWZmaWNpZW50c1tmaXJzdE5vblplcm9dID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZmlyc3ROb25aZXJvKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlyc3ROb25aZXJvID09PSBjb2VmZmljaWVudHNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvZWZmaWNpZW50cyA9IGZpZWxkLnplcm8uY29lZmZpY2llbnRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2VmZmljaWVudHMgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoY29lZmZpY2llbnRzTGVuZ3RoIC0gZmlyc3ROb25aZXJvKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29lZmZpY2llbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29lZmZpY2llbnRzW2ldID0gY29lZmZpY2llbnRzW2ZpcnN0Tm9uWmVybyArIGldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29lZmZpY2llbnRzID0gY29lZmZpY2llbnRzO1xuICAgICAgICB9XG4gICAgfVxuICAgIEdlbmVyaWNHRlBvbHkucHJvdG90eXBlLmRlZ3JlZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29lZmZpY2llbnRzLmxlbmd0aCAtIDE7XG4gICAgfTtcbiAgICBHZW5lcmljR0ZQb2x5LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZWZmaWNpZW50c1swXSA9PT0gMDtcbiAgICB9O1xuICAgIEdlbmVyaWNHRlBvbHkucHJvdG90eXBlLmdldENvZWZmaWNpZW50ID0gZnVuY3Rpb24gKGRlZ3JlZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2VmZmljaWVudHNbdGhpcy5jb2VmZmljaWVudHMubGVuZ3RoIC0gMSAtIGRlZ3JlZV07XG4gICAgfTtcbiAgICBHZW5lcmljR0ZQb2x5LnByb3RvdHlwZS5hZGRPclN1YnRyYWN0ID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvdGhlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3RoZXIuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzbWFsbGVyQ29lZmZpY2llbnRzID0gdGhpcy5jb2VmZmljaWVudHM7XG4gICAgICAgIHZhciBsYXJnZXJDb2VmZmljaWVudHMgPSBvdGhlci5jb2VmZmljaWVudHM7XG4gICAgICAgIGlmIChzbWFsbGVyQ29lZmZpY2llbnRzLmxlbmd0aCA+IGxhcmdlckNvZWZmaWNpZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIF9hID0gW2xhcmdlckNvZWZmaWNpZW50cywgc21hbGxlckNvZWZmaWNpZW50c10sIHNtYWxsZXJDb2VmZmljaWVudHMgPSBfYVswXSwgbGFyZ2VyQ29lZmZpY2llbnRzID0gX2FbMV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1bURpZmYgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkobGFyZ2VyQ29lZmZpY2llbnRzLmxlbmd0aCk7XG4gICAgICAgIHZhciBsZW5ndGhEaWZmID0gbGFyZ2VyQ29lZmZpY2llbnRzLmxlbmd0aCAtIHNtYWxsZXJDb2VmZmljaWVudHMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aERpZmY7IGkrKykge1xuICAgICAgICAgICAgc3VtRGlmZltpXSA9IGxhcmdlckNvZWZmaWNpZW50c1tpXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gbGVuZ3RoRGlmZjsgaSA8IGxhcmdlckNvZWZmaWNpZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3VtRGlmZltpXSA9IEdlbmVyaWNHRl8xLmFkZE9yU3VidHJhY3RHRihzbWFsbGVyQ29lZmZpY2llbnRzW2kgLSBsZW5ndGhEaWZmXSwgbGFyZ2VyQ29lZmZpY2llbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEdlbmVyaWNHRlBvbHkodGhpcy5maWVsZCwgc3VtRGlmZik7XG4gICAgfTtcbiAgICBHZW5lcmljR0ZQb2x5LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChzY2FsYXIpIHtcbiAgICAgICAgaWYgKHNjYWxhciA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQuemVybztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NhbGFyID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuY29lZmZpY2llbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIHByb2R1Y3QgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoc2l6ZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBwcm9kdWN0W2ldID0gdGhpcy5maWVsZC5tdWx0aXBseSh0aGlzLmNvZWZmaWNpZW50c1tpXSwgc2NhbGFyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEdlbmVyaWNHRlBvbHkodGhpcy5maWVsZCwgcHJvZHVjdCk7XG4gICAgfTtcbiAgICBHZW5lcmljR0ZQb2x5LnByb3RvdHlwZS5tdWx0aXBseVBvbHkgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNaZXJvKCkgfHwgb3RoZXIuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpZWxkLnplcm87XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFDb2VmZmljaWVudHMgPSB0aGlzLmNvZWZmaWNpZW50cztcbiAgICAgICAgdmFyIGFMZW5ndGggPSBhQ29lZmZpY2llbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIGJDb2VmZmljaWVudHMgPSBvdGhlci5jb2VmZmljaWVudHM7XG4gICAgICAgIHZhciBiTGVuZ3RoID0gYkNvZWZmaWNpZW50cy5sZW5ndGg7XG4gICAgICAgIHZhciBwcm9kdWN0ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGFMZW5ndGggKyBiTGVuZ3RoIC0gMSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYUNvZWZmID0gYUNvZWZmaWNpZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYkxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFtpICsgal0gPSBHZW5lcmljR0ZfMS5hZGRPclN1YnRyYWN0R0YocHJvZHVjdFtpICsgal0sIHRoaXMuZmllbGQubXVsdGlwbHkoYUNvZWZmLCBiQ29lZmZpY2llbnRzW2pdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBHZW5lcmljR0ZQb2x5KHRoaXMuZmllbGQsIHByb2R1Y3QpO1xuICAgIH07XG4gICAgR2VuZXJpY0dGUG9seS5wcm90b3R5cGUubXVsdGlwbHlCeU1vbm9taWFsID0gZnVuY3Rpb24gKGRlZ3JlZSwgY29lZmZpY2llbnQpIHtcbiAgICAgICAgaWYgKGRlZ3JlZSA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGVncmVlIGxlc3MgdGhhbiAwXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2VmZmljaWVudCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQuemVybztcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuY29lZmZpY2llbnRzLmxlbmd0aDtcbiAgICAgICAgdmFyIHByb2R1Y3QgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoc2l6ZSArIGRlZ3JlZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBwcm9kdWN0W2ldID0gdGhpcy5maWVsZC5tdWx0aXBseSh0aGlzLmNvZWZmaWNpZW50c1tpXSwgY29lZmZpY2llbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgR2VuZXJpY0dGUG9seSh0aGlzLmZpZWxkLCBwcm9kdWN0KTtcbiAgICB9O1xuICAgIEdlbmVyaWNHRlBvbHkucHJvdG90eXBlLmV2YWx1YXRlQXQgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgaWYgKGEgPT09IDApIHtcbiAgICAgICAgICAgIC8vIEp1c3QgcmV0dXJuIHRoZSB4XjAgY29lZmZpY2llbnRcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvZWZmaWNpZW50KDApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzaXplID0gdGhpcy5jb2VmZmljaWVudHMubGVuZ3RoO1xuICAgICAgICBpZiAoYSA9PT0gMSkge1xuICAgICAgICAgICAgLy8gSnVzdCB0aGUgc3VtIG9mIHRoZSBjb2VmZmljaWVudHNcbiAgICAgICAgICAgIHRoaXMuY29lZmZpY2llbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvZWZmaWNpZW50KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gR2VuZXJpY0dGXzEuYWRkT3JTdWJ0cmFjdEdGKHJlc3VsdCwgY29lZmZpY2llbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuY29lZmZpY2llbnRzWzBdO1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gR2VuZXJpY0dGXzEuYWRkT3JTdWJ0cmFjdEdGKHRoaXMuZmllbGQubXVsdGlwbHkoYSwgcmVzdWx0KSwgdGhpcy5jb2VmZmljaWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gR2VuZXJpY0dGUG9seTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHZW5lcmljR0ZQb2x5O1xuXG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJpbmFyaXplcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBkZWNvZGVyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIGV4dHJhY3Rvcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG52YXIgbG9jYXRvcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5mdW5jdGlvbiBzY2FuKG1hdHJpeCkge1xuICAgIHZhciBsb2NhdGlvbnMgPSBsb2NhdG9yXzEubG9jYXRlKG1hdHJpeCk7XG4gICAgaWYgKCFsb2NhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZvciAodmFyIF9pID0gMCwgbG9jYXRpb25zXzEgPSBsb2NhdGlvbnM7IF9pIDwgbG9jYXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBsb2NhdGlvbl8xID0gbG9jYXRpb25zXzFbX2ldO1xuICAgICAgICB2YXIgZXh0cmFjdGVkID0gZXh0cmFjdG9yXzEuZXh0cmFjdChtYXRyaXgsIGxvY2F0aW9uXzEpO1xuICAgICAgICB2YXIgZGVjb2RlZCA9IGRlY29kZXJfMS5kZWNvZGUoZXh0cmFjdGVkLm1hdHJpeCk7XG4gICAgICAgIGlmIChkZWNvZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJpbmFyeURhdGE6IGRlY29kZWQuYnl0ZXMsXG4gICAgICAgICAgICAgICAgZGF0YTogZGVjb2RlZC50ZXh0LFxuICAgICAgICAgICAgICAgIGNodW5rczogZGVjb2RlZC5jaHVua3MsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgdG9wUmlnaHRDb3JuZXI6IGV4dHJhY3RlZC5tYXBwaW5nRnVuY3Rpb24obG9jYXRpb25fMS5kaW1lbnNpb24sIDApLFxuICAgICAgICAgICAgICAgICAgICB0b3BMZWZ0Q29ybmVyOiBleHRyYWN0ZWQubWFwcGluZ0Z1bmN0aW9uKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICBib3R0b21SaWdodENvcm5lcjogZXh0cmFjdGVkLm1hcHBpbmdGdW5jdGlvbihsb2NhdGlvbl8xLmRpbWVuc2lvbiwgbG9jYXRpb25fMS5kaW1lbnNpb24pLFxuICAgICAgICAgICAgICAgICAgICBib3R0b21MZWZ0Q29ybmVyOiBleHRyYWN0ZWQubWFwcGluZ0Z1bmN0aW9uKDAsIGxvY2F0aW9uXzEuZGltZW5zaW9uKSxcbiAgICAgICAgICAgICAgICAgICAgdG9wUmlnaHRGaW5kZXJQYXR0ZXJuOiBsb2NhdGlvbl8xLnRvcFJpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0b3BMZWZ0RmluZGVyUGF0dGVybjogbG9jYXRpb25fMS50b3BMZWZ0LFxuICAgICAgICAgICAgICAgICAgICBib3R0b21MZWZ0RmluZGVyUGF0dGVybjogbG9jYXRpb25fMS5ib3R0b21MZWZ0LFxuICAgICAgICAgICAgICAgICAgICBib3R0b21SaWdodEFsaWdubWVudFBhdHRlcm46IGxvY2F0aW9uXzEuYWxpZ25tZW50UGF0dGVybixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBpbnZlcnNpb25BdHRlbXB0czogXCJhdHRlbXB0Qm90aFwiLFxufTtcbmZ1bmN0aW9uIGpzUVIoZGF0YSwgd2lkdGgsIGhlaWdodCwgcHJvdmlkZWRPcHRpb25zKSB7XG4gICAgaWYgKHByb3ZpZGVkT3B0aW9ucyA9PT0gdm9pZCAwKSB7IHByb3ZpZGVkT3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICBPYmplY3Qua2V5cyhvcHRpb25zIHx8IHt9KS5mb3JFYWNoKGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgb3B0aW9uc1tvcHRdID0gcHJvdmlkZWRPcHRpb25zW29wdF0gfHwgb3B0aW9uc1tvcHRdO1xuICAgIH0pO1xuICAgIHZhciBzaG91bGRJbnZlcnQgPSBvcHRpb25zLmludmVyc2lvbkF0dGVtcHRzID09PSBcImF0dGVtcHRCb3RoXCIgfHwgb3B0aW9ucy5pbnZlcnNpb25BdHRlbXB0cyA9PT0gXCJpbnZlcnRGaXJzdFwiO1xuICAgIHZhciB0cnlJbnZlcnRlZEZpcnN0ID0gb3B0aW9ucy5pbnZlcnNpb25BdHRlbXB0cyA9PT0gXCJvbmx5SW52ZXJ0XCIgfHwgb3B0aW9ucy5pbnZlcnNpb25BdHRlbXB0cyA9PT0gXCJpbnZlcnRGaXJzdFwiO1xuICAgIHZhciBfYSA9IGJpbmFyaXplcl8xLmJpbmFyaXplKGRhdGEsIHdpZHRoLCBoZWlnaHQsIHNob3VsZEludmVydCksIGJpbmFyaXplZCA9IF9hLmJpbmFyaXplZCwgaW52ZXJ0ZWQgPSBfYS5pbnZlcnRlZDtcbiAgICB2YXIgcmVzdWx0ID0gc2Nhbih0cnlJbnZlcnRlZEZpcnN0ID8gaW52ZXJ0ZWQgOiBiaW5hcml6ZWQpO1xuICAgIGlmICghcmVzdWx0ICYmIChvcHRpb25zLmludmVyc2lvbkF0dGVtcHRzID09PSBcImF0dGVtcHRCb3RoXCIgfHwgb3B0aW9ucy5pbnZlcnNpb25BdHRlbXB0cyA9PT0gXCJpbnZlcnRGaXJzdFwiKSkge1xuICAgICAgICByZXN1bHQgPSBzY2FuKHRyeUludmVydGVkRmlyc3QgPyBiaW5hcml6ZWQgOiBpbnZlcnRlZCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5qc1FSLmRlZmF1bHQgPSBqc1FSO1xuZXhwb3J0cy5kZWZhdWx0ID0ganNRUjtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBCaXRNYXRyaXhfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgUkVHSU9OX1NJWkUgPSA4O1xudmFyIE1JTl9EWU5BTUlDX1JBTkdFID0gMjQ7XG5mdW5jdGlvbiBudW1CZXR3ZWVuKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiB2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWU7XG59XG4vLyBMaWtlIEJpdE1hdHJpeCBidXQgYWNjZXB0cyBhcmJpdHJ5IFVpbnQ4IHZhbHVlc1xudmFyIE1hdHJpeCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNYXRyaXgod2lkdGgsIGhlaWdodCkge1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBVaW50OENsYW1wZWRBcnJheSh3aWR0aCAqIGhlaWdodCk7XG4gICAgfVxuICAgIE1hdHJpeC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt5ICogdGhpcy53aWR0aCArIHhdO1xuICAgIH07XG4gICAgTWF0cml4LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoeCwgeSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRhW3kgKiB0aGlzLndpZHRoICsgeF0gPSB2YWx1ZTtcbiAgICB9O1xuICAgIHJldHVybiBNYXRyaXg7XG59KCkpO1xuZnVuY3Rpb24gYmluYXJpemUoZGF0YSwgd2lkdGgsIGhlaWdodCwgcmV0dXJuSW52ZXJ0ZWQpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggIT09IHdpZHRoICogaGVpZ2h0ICogNCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWxmb3JtZWQgZGF0YSBwYXNzZWQgdG8gYmluYXJpemVyLlwiKTtcbiAgICB9XG4gICAgLy8gQ29udmVydCBpbWFnZSB0byBncmV5c2NhbGVcbiAgICB2YXIgZ3JleXNjYWxlUGl4ZWxzID0gbmV3IE1hdHJpeCh3aWR0aCwgaGVpZ2h0KTtcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICAgICAgdmFyIHIgPSBkYXRhWygoeSAqIHdpZHRoICsgeCkgKiA0KSArIDBdO1xuICAgICAgICAgICAgdmFyIGcgPSBkYXRhWygoeSAqIHdpZHRoICsgeCkgKiA0KSArIDFdO1xuICAgICAgICAgICAgdmFyIGIgPSBkYXRhWygoeSAqIHdpZHRoICsgeCkgKiA0KSArIDJdO1xuICAgICAgICAgICAgZ3JleXNjYWxlUGl4ZWxzLnNldCh4LCB5LCAwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBob3Jpem9udGFsUmVnaW9uQ291bnQgPSBNYXRoLmNlaWwod2lkdGggLyBSRUdJT05fU0laRSk7XG4gICAgdmFyIHZlcnRpY2FsUmVnaW9uQ291bnQgPSBNYXRoLmNlaWwoaGVpZ2h0IC8gUkVHSU9OX1NJWkUpO1xuICAgIHZhciBibGFja1BvaW50cyA9IG5ldyBNYXRyaXgoaG9yaXpvbnRhbFJlZ2lvbkNvdW50LCB2ZXJ0aWNhbFJlZ2lvbkNvdW50KTtcbiAgICBmb3IgKHZhciB2ZXJ0aWNhbFJlZ2lvbiA9IDA7IHZlcnRpY2FsUmVnaW9uIDwgdmVydGljYWxSZWdpb25Db3VudDsgdmVydGljYWxSZWdpb24rKykge1xuICAgICAgICBmb3IgKHZhciBob3J0aXpvbnRhbFJlZ2lvbiA9IDA7IGhvcnRpem9udGFsUmVnaW9uIDwgaG9yaXpvbnRhbFJlZ2lvbkNvdW50OyBob3J0aXpvbnRhbFJlZ2lvbisrKSB7XG4gICAgICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgICAgIHZhciBtaW4gPSBJbmZpbml0eTtcbiAgICAgICAgICAgIHZhciBtYXggPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBSRUdJT05fU0laRTsgeSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBSRUdJT05fU0laRTsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwaXhlbEx1bW9zaXR5ID0gZ3JleXNjYWxlUGl4ZWxzLmdldChob3J0aXpvbnRhbFJlZ2lvbiAqIFJFR0lPTl9TSVpFICsgeCwgdmVydGljYWxSZWdpb24gKiBSRUdJT05fU0laRSArIHkpO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gcGl4ZWxMdW1vc2l0eTtcbiAgICAgICAgICAgICAgICAgICAgbWluID0gTWF0aC5taW4obWluLCBwaXhlbEx1bW9zaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCBwaXhlbEx1bW9zaXR5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYXZlcmFnZSA9IHN1bSAvIChNYXRoLnBvdyhSRUdJT05fU0laRSwgMikpO1xuICAgICAgICAgICAgaWYgKG1heCAtIG1pbiA8PSBNSU5fRFlOQU1JQ19SQU5HRSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHZhcmlhdGlvbiB3aXRoaW4gdGhlIGJsb2NrIGlzIGxvdywgYXNzdW1lIHRoaXMgaXMgYSBibG9jayB3aXRoIG9ubHkgbGlnaHQgb3Igb25seVxuICAgICAgICAgICAgICAgIC8vIGRhcmsgcGl4ZWxzLiBJbiB0aGF0IGNhc2Ugd2UgZG8gbm90IHdhbnQgdG8gdXNlIHRoZSBhdmVyYWdlLCBhcyBpdCB3b3VsZCBkaXZpZGUgdGhpc1xuICAgICAgICAgICAgICAgIC8vIGxvdyBjb250cmFzdCBhcmVhIGludG8gYmxhY2sgYW5kIHdoaXRlIHBpeGVscywgZXNzZW50aWFsbHkgY3JlYXRpbmcgZGF0YSBvdXQgb2Ygbm9pc2UuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IHRoZSBibGFja3BvaW50IGZvciB0aGVzZSBibG9ja3MgdG8gYmUgaGFsZiB0aGUgbWluIC0gZWZmZWN0aXZlbHkgd2hpdGUgdGhlbSBvdXRcbiAgICAgICAgICAgICAgICBhdmVyYWdlID0gbWluIC8gMjtcbiAgICAgICAgICAgICAgICBpZiAodmVydGljYWxSZWdpb24gPiAwICYmIGhvcnRpem9udGFsUmVnaW9uID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb3JyZWN0IHRoZSBcIndoaXRlIGJhY2tncm91bmRcIiBhc3N1bXB0aW9uIGZvciBibG9ja3MgdGhhdCBoYXZlIG5laWdoYm9ycyBieSBjb21wYXJpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHBpeGVscyBpbiB0aGlzIGJsb2NrIHRvIHRoZSBwcmV2aW91c2x5IGNhbGN1bGF0ZWQgYmxhY2sgcG9pbnRzLiBUaGlzIGlzIGJhc2VkIG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBmYWN0IHRoYXQgZGFyayBiYXJjb2RlIHN5bWJvbG9neSBpcyBhbHdheXMgc3Vycm91bmRlZCBieSBzb21lIGFtb3VudCBvZiBsaWdodFxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kIGZvciB3aGljaCByZWFzb25hYmxlIGJsYWNrIHBvaW50IGVzdGltYXRlcyB3ZXJlIG1hZGUuIFRoZSBicCBlc3RpbWF0ZWQgYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGJvdW5kYXJpZXMgaXMgdXNlZCBmb3IgdGhlIGludGVyaW9yLlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgKG1pbiA8IGJwKSBpcyBhcmJpdHJhcnkgYnV0IHdvcmtzIGJldHRlciB0aGFuIG90aGVyIGhldXJpc3RpY3MgdGhhdCB3ZXJlIHRyaWVkLlxuICAgICAgICAgICAgICAgICAgICB2YXIgYXZlcmFnZU5laWdoYm9yQmxhY2tQb2ludCA9IChibGFja1BvaW50cy5nZXQoaG9ydGl6b250YWxSZWdpb24sIHZlcnRpY2FsUmVnaW9uIC0gMSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKDIgKiBibGFja1BvaW50cy5nZXQoaG9ydGl6b250YWxSZWdpb24gLSAxLCB2ZXJ0aWNhbFJlZ2lvbikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsYWNrUG9pbnRzLmdldChob3J0aXpvbnRhbFJlZ2lvbiAtIDEsIHZlcnRpY2FsUmVnaW9uIC0gMSkpIC8gNDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbiA8IGF2ZXJhZ2VOZWlnaGJvckJsYWNrUG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2ZXJhZ2UgPSBhdmVyYWdlTmVpZ2hib3JCbGFja1BvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmxhY2tQb2ludHMuc2V0KGhvcnRpem9udGFsUmVnaW9uLCB2ZXJ0aWNhbFJlZ2lvbiwgYXZlcmFnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGJpbmFyaXplZCA9IEJpdE1hdHJpeF8xLkJpdE1hdHJpeC5jcmVhdGVFbXB0eSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB2YXIgaW52ZXJ0ZWQgPSBudWxsO1xuICAgIGlmIChyZXR1cm5JbnZlcnRlZCkge1xuICAgICAgICBpbnZlcnRlZCA9IEJpdE1hdHJpeF8xLkJpdE1hdHJpeC5jcmVhdGVFbXB0eSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gICAgZm9yICh2YXIgdmVydGljYWxSZWdpb24gPSAwOyB2ZXJ0aWNhbFJlZ2lvbiA8IHZlcnRpY2FsUmVnaW9uQ291bnQ7IHZlcnRpY2FsUmVnaW9uKyspIHtcbiAgICAgICAgZm9yICh2YXIgaG9ydGl6b250YWxSZWdpb24gPSAwOyBob3J0aXpvbnRhbFJlZ2lvbiA8IGhvcml6b250YWxSZWdpb25Db3VudDsgaG9ydGl6b250YWxSZWdpb24rKykge1xuICAgICAgICAgICAgdmFyIGxlZnQgPSBudW1CZXR3ZWVuKGhvcnRpem9udGFsUmVnaW9uLCAyLCBob3Jpem9udGFsUmVnaW9uQ291bnQgLSAzKTtcbiAgICAgICAgICAgIHZhciB0b3BfMSA9IG51bUJldHdlZW4odmVydGljYWxSZWdpb24sIDIsIHZlcnRpY2FsUmVnaW9uQ291bnQgLSAzKTtcbiAgICAgICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgeFJlZ2lvbiA9IC0yOyB4UmVnaW9uIDw9IDI7IHhSZWdpb24rKykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHlSZWdpb24gPSAtMjsgeVJlZ2lvbiA8PSAyOyB5UmVnaW9uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtICs9IGJsYWNrUG9pbnRzLmdldChsZWZ0ICsgeFJlZ2lvbiwgdG9wXzEgKyB5UmVnaW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGhyZXNob2xkID0gc3VtIC8gMjU7XG4gICAgICAgICAgICBmb3IgKHZhciB4UmVnaW9uID0gMDsgeFJlZ2lvbiA8IFJFR0lPTl9TSVpFOyB4UmVnaW9uKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB5UmVnaW9uID0gMDsgeVJlZ2lvbiA8IFJFR0lPTl9TSVpFOyB5UmVnaW9uKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBob3J0aXpvbnRhbFJlZ2lvbiAqIFJFR0lPTl9TSVpFICsgeFJlZ2lvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSB2ZXJ0aWNhbFJlZ2lvbiAqIFJFR0lPTl9TSVpFICsgeVJlZ2lvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGx1bSA9IGdyZXlzY2FsZVBpeGVscy5nZXQoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGJpbmFyaXplZC5zZXQoeCwgeSwgbHVtIDw9IHRocmVzaG9sZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5JbnZlcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZXJ0ZWQuc2V0KHgsIHksICEobHVtIDw9IHRocmVzaG9sZCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChyZXR1cm5JbnZlcnRlZCkge1xuICAgICAgICByZXR1cm4geyBiaW5hcml6ZWQ6IGJpbmFyaXplZCwgaW52ZXJ0ZWQ6IGludmVydGVkIH07XG4gICAgfVxuICAgIHJldHVybiB7IGJpbmFyaXplZDogYmluYXJpemVkIH07XG59XG5leHBvcnRzLmJpbmFyaXplID0gYmluYXJpemU7XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQml0TWF0cml4XzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIGRlY29kZURhdGFfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgcmVlZHNvbG9tb25fMSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgdmVyc2lvbl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlXG5mdW5jdGlvbiBudW1CaXRzRGlmZmVyaW5nKHgsIHkpIHtcbiAgICB2YXIgeiA9IHggXiB5O1xuICAgIHZhciBiaXRDb3VudCA9IDA7XG4gICAgd2hpbGUgKHopIHtcbiAgICAgICAgYml0Q291bnQrKztcbiAgICAgICAgeiAmPSB6IC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGJpdENvdW50O1xufVxuZnVuY3Rpb24gcHVzaEJpdChiaXQsIGJ5dGUpIHtcbiAgICByZXR1cm4gKGJ5dGUgPDwgMSkgfCBiaXQ7XG59XG4vLyB0c2xpbnQ6ZW5hYmxlOm5vLWJpdHdpc2VcbnZhciBGT1JNQVRfSU5GT19UQUJMRSA9IFtcbiAgICB7IGJpdHM6IDB4NTQxMiwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMSwgZGF0YU1hc2s6IDAgfSB9LFxuICAgIHsgYml0czogMHg1MTI1LCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAxLCBkYXRhTWFzazogMSB9IH0sXG4gICAgeyBiaXRzOiAweDVFN0MsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDEsIGRhdGFNYXNrOiAyIH0gfSxcbiAgICB7IGJpdHM6IDB4NUI0QiwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMSwgZGF0YU1hc2s6IDMgfSB9LFxuICAgIHsgYml0czogMHg0NUY5LCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAxLCBkYXRhTWFzazogNCB9IH0sXG4gICAgeyBiaXRzOiAweDQwQ0UsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDEsIGRhdGFNYXNrOiA1IH0gfSxcbiAgICB7IGJpdHM6IDB4NEY5NywgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMSwgZGF0YU1hc2s6IDYgfSB9LFxuICAgIHsgYml0czogMHg0QUEwLCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAxLCBkYXRhTWFzazogNyB9IH0sXG4gICAgeyBiaXRzOiAweDc3QzQsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDAsIGRhdGFNYXNrOiAwIH0gfSxcbiAgICB7IGJpdHM6IDB4NzJGMywgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMCwgZGF0YU1hc2s6IDEgfSB9LFxuICAgIHsgYml0czogMHg3REFBLCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAwLCBkYXRhTWFzazogMiB9IH0sXG4gICAgeyBiaXRzOiAweDc4OUQsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDAsIGRhdGFNYXNrOiAzIH0gfSxcbiAgICB7IGJpdHM6IDB4NjYyRiwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMCwgZGF0YU1hc2s6IDQgfSB9LFxuICAgIHsgYml0czogMHg2MzE4LCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAwLCBkYXRhTWFzazogNSB9IH0sXG4gICAgeyBiaXRzOiAweDZDNDEsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDAsIGRhdGFNYXNrOiA2IH0gfSxcbiAgICB7IGJpdHM6IDB4Njk3NiwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMCwgZGF0YU1hc2s6IDcgfSB9LFxuICAgIHsgYml0czogMHgxNjg5LCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAzLCBkYXRhTWFzazogMCB9IH0sXG4gICAgeyBiaXRzOiAweDEzQkUsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDMsIGRhdGFNYXNrOiAxIH0gfSxcbiAgICB7IGJpdHM6IDB4MUNFNywgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMywgZGF0YU1hc2s6IDIgfSB9LFxuICAgIHsgYml0czogMHgxOUQwLCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAzLCBkYXRhTWFzazogMyB9IH0sXG4gICAgeyBiaXRzOiAweDA3NjIsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDMsIGRhdGFNYXNrOiA0IH0gfSxcbiAgICB7IGJpdHM6IDB4MDI1NSwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMywgZGF0YU1hc2s6IDUgfSB9LFxuICAgIHsgYml0czogMHgwRDBDLCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAzLCBkYXRhTWFzazogNiB9IH0sXG4gICAgeyBiaXRzOiAweDA4M0IsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDMsIGRhdGFNYXNrOiA3IH0gfSxcbiAgICB7IGJpdHM6IDB4MzU1RiwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMiwgZGF0YU1hc2s6IDAgfSB9LFxuICAgIHsgYml0czogMHgzMDY4LCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAyLCBkYXRhTWFzazogMSB9IH0sXG4gICAgeyBiaXRzOiAweDNGMzEsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDIsIGRhdGFNYXNrOiAyIH0gfSxcbiAgICB7IGJpdHM6IDB4M0EwNiwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMiwgZGF0YU1hc2s6IDMgfSB9LFxuICAgIHsgYml0czogMHgyNEI0LCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAyLCBkYXRhTWFzazogNCB9IH0sXG4gICAgeyBiaXRzOiAweDIxODMsIGZvcm1hdEluZm86IHsgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IDIsIGRhdGFNYXNrOiA1IH0gfSxcbiAgICB7IGJpdHM6IDB4MkVEQSwgZm9ybWF0SW5mbzogeyBlcnJvckNvcnJlY3Rpb25MZXZlbDogMiwgZGF0YU1hc2s6IDYgfSB9LFxuICAgIHsgYml0czogMHgyQkVELCBmb3JtYXRJbmZvOiB7IGVycm9yQ29ycmVjdGlvbkxldmVsOiAyLCBkYXRhTWFzazogNyB9IH0sXG5dO1xudmFyIERBVEFfTUFTS1MgPSBbXG4gICAgZnVuY3Rpb24gKHApIHsgcmV0dXJuICgocC55ICsgcC54KSAlIDIpID09PSAwOyB9LFxuICAgIGZ1bmN0aW9uIChwKSB7IHJldHVybiAocC55ICUgMikgPT09IDA7IH0sXG4gICAgZnVuY3Rpb24gKHApIHsgcmV0dXJuIHAueCAlIDMgPT09IDA7IH0sXG4gICAgZnVuY3Rpb24gKHApIHsgcmV0dXJuIChwLnkgKyBwLngpICUgMyA9PT0gMDsgfSxcbiAgICBmdW5jdGlvbiAocCkgeyByZXR1cm4gKE1hdGguZmxvb3IocC55IC8gMikgKyBNYXRoLmZsb29yKHAueCAvIDMpKSAlIDIgPT09IDA7IH0sXG4gICAgZnVuY3Rpb24gKHApIHsgcmV0dXJuICgocC54ICogcC55KSAlIDIpICsgKChwLnggKiBwLnkpICUgMykgPT09IDA7IH0sXG4gICAgZnVuY3Rpb24gKHApIHsgcmV0dXJuICgoKChwLnkgKiBwLngpICUgMikgKyAocC55ICogcC54KSAlIDMpICUgMikgPT09IDA7IH0sXG4gICAgZnVuY3Rpb24gKHApIHsgcmV0dXJuICgoKChwLnkgKyBwLngpICUgMikgKyAocC55ICogcC54KSAlIDMpICUgMikgPT09IDA7IH0sXG5dO1xuZnVuY3Rpb24gYnVpbGRGdW5jdGlvblBhdHRlcm5NYXNrKHZlcnNpb24pIHtcbiAgICB2YXIgZGltZW5zaW9uID0gMTcgKyA0ICogdmVyc2lvbi52ZXJzaW9uTnVtYmVyO1xuICAgIHZhciBtYXRyaXggPSBCaXRNYXRyaXhfMS5CaXRNYXRyaXguY3JlYXRlRW1wdHkoZGltZW5zaW9uLCBkaW1lbnNpb24pO1xuICAgIG1hdHJpeC5zZXRSZWdpb24oMCwgMCwgOSwgOSwgdHJ1ZSk7IC8vIFRvcCBsZWZ0IGZpbmRlciBwYXR0ZXJuICsgc2VwYXJhdG9yICsgZm9ybWF0XG4gICAgbWF0cml4LnNldFJlZ2lvbihkaW1lbnNpb24gLSA4LCAwLCA4LCA5LCB0cnVlKTsgLy8gVG9wIHJpZ2h0IGZpbmRlciBwYXR0ZXJuICsgc2VwYXJhdG9yICsgZm9ybWF0XG4gICAgbWF0cml4LnNldFJlZ2lvbigwLCBkaW1lbnNpb24gLSA4LCA5LCA4LCB0cnVlKTsgLy8gQm90dG9tIGxlZnQgZmluZGVyIHBhdHRlcm4gKyBzZXBhcmF0b3IgKyBmb3JtYXRcbiAgICAvLyBBbGlnbm1lbnQgcGF0dGVybnNcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdmVyc2lvbi5hbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHggPSBfYVtfaV07XG4gICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSB2ZXJzaW9uLmFsaWdubWVudFBhdHRlcm5DZW50ZXJzOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xuICAgICAgICAgICAgdmFyIHkgPSBfY1tfYl07XG4gICAgICAgICAgICBpZiAoISh4ID09PSA2ICYmIHkgPT09IDYgfHwgeCA9PT0gNiAmJiB5ID09PSBkaW1lbnNpb24gLSA3IHx8IHggPT09IGRpbWVuc2lvbiAtIDcgJiYgeSA9PT0gNikpIHtcbiAgICAgICAgICAgICAgICBtYXRyaXguc2V0UmVnaW9uKHggLSAyLCB5IC0gMiwgNSwgNSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWF0cml4LnNldFJlZ2lvbig2LCA5LCAxLCBkaW1lbnNpb24gLSAxNywgdHJ1ZSk7IC8vIFZlcnRpY2FsIHRpbWluZyBwYXR0ZXJuXG4gICAgbWF0cml4LnNldFJlZ2lvbig5LCA2LCBkaW1lbnNpb24gLSAxNywgMSwgdHJ1ZSk7IC8vIEhvcml6b250YWwgdGltaW5nIHBhdHRlcm5cbiAgICBpZiAodmVyc2lvbi52ZXJzaW9uTnVtYmVyID4gNikge1xuICAgICAgICBtYXRyaXguc2V0UmVnaW9uKGRpbWVuc2lvbiAtIDExLCAwLCAzLCA2LCB0cnVlKTsgLy8gVmVyc2lvbiBpbmZvLCB0b3AgcmlnaHRcbiAgICAgICAgbWF0cml4LnNldFJlZ2lvbigwLCBkaW1lbnNpb24gLSAxMSwgNiwgMywgdHJ1ZSk7IC8vIFZlcnNpb24gaW5mbywgYm90dG9tIGxlZnRcbiAgICB9XG4gICAgcmV0dXJuIG1hdHJpeDtcbn1cbmZ1bmN0aW9uIHJlYWRDb2Rld29yZHMobWF0cml4LCB2ZXJzaW9uLCBmb3JtYXRJbmZvKSB7XG4gICAgdmFyIGRhdGFNYXNrID0gREFUQV9NQVNLU1tmb3JtYXRJbmZvLmRhdGFNYXNrXTtcbiAgICB2YXIgZGltZW5zaW9uID0gbWF0cml4LmhlaWdodDtcbiAgICB2YXIgZnVuY3Rpb25QYXR0ZXJuTWFzayA9IGJ1aWxkRnVuY3Rpb25QYXR0ZXJuTWFzayh2ZXJzaW9uKTtcbiAgICB2YXIgY29kZXdvcmRzID0gW107XG4gICAgdmFyIGN1cnJlbnRCeXRlID0gMDtcbiAgICB2YXIgYml0c1JlYWQgPSAwO1xuICAgIC8vIFJlYWQgY29sdW1ucyBpbiBwYWlycywgZnJvbSByaWdodCB0byBsZWZ0XG4gICAgdmFyIHJlYWRpbmdVcCA9IHRydWU7XG4gICAgZm9yICh2YXIgY29sdW1uSW5kZXggPSBkaW1lbnNpb24gLSAxOyBjb2x1bW5JbmRleCA+IDA7IGNvbHVtbkluZGV4IC09IDIpIHtcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4ID09PSA2KSB7IC8vIFNraXAgd2hvbGUgY29sdW1uIHdpdGggdmVydGljYWwgYWxpZ25tZW50IHBhdHRlcm47XG4gICAgICAgICAgICBjb2x1bW5JbmRleC0tO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGltZW5zaW9uOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB5ID0gcmVhZGluZ1VwID8gZGltZW5zaW9uIC0gMSAtIGkgOiBpO1xuICAgICAgICAgICAgZm9yICh2YXIgY29sdW1uT2Zmc2V0ID0gMDsgY29sdW1uT2Zmc2V0IDwgMjsgY29sdW1uT2Zmc2V0KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGNvbHVtbkluZGV4IC0gY29sdW1uT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmICghZnVuY3Rpb25QYXR0ZXJuTWFzay5nZXQoeCwgeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYml0c1JlYWQrKztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJpdCA9IG1hdHJpeC5nZXQoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTWFzayh7IHk6IHksIHg6IHggfSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpdCA9ICFiaXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJ5dGUgPSBwdXNoQml0KGJpdCwgY3VycmVudEJ5dGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYml0c1JlYWQgPT09IDgpIHsgLy8gV2hvbGUgYnl0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGV3b3Jkcy5wdXNoKGN1cnJlbnRCeXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpdHNSZWFkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCeXRlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWFkaW5nVXAgPSAhcmVhZGluZ1VwO1xuICAgIH1cbiAgICByZXR1cm4gY29kZXdvcmRzO1xufVxuZnVuY3Rpb24gcmVhZFZlcnNpb24obWF0cml4KSB7XG4gICAgdmFyIGRpbWVuc2lvbiA9IG1hdHJpeC5oZWlnaHQ7XG4gICAgdmFyIHByb3Zpc2lvbmFsVmVyc2lvbiA9IE1hdGguZmxvb3IoKGRpbWVuc2lvbiAtIDE3KSAvIDQpO1xuICAgIGlmIChwcm92aXNpb25hbFZlcnNpb24gPD0gNikgeyAvLyA2IGFuZCB1bmRlciBkb250IGhhdmUgdmVyc2lvbiBpbmZvIGluIHRoZSBRUiBjb2RlXG4gICAgICAgIHJldHVybiB2ZXJzaW9uXzEuVkVSU0lPTlNbcHJvdmlzaW9uYWxWZXJzaW9uIC0gMV07XG4gICAgfVxuICAgIHZhciB0b3BSaWdodFZlcnNpb25CaXRzID0gMDtcbiAgICBmb3IgKHZhciB5ID0gNTsgeSA+PSAwOyB5LS0pIHtcbiAgICAgICAgZm9yICh2YXIgeCA9IGRpbWVuc2lvbiAtIDk7IHggPj0gZGltZW5zaW9uIC0gMTE7IHgtLSkge1xuICAgICAgICAgICAgdG9wUmlnaHRWZXJzaW9uQml0cyA9IHB1c2hCaXQobWF0cml4LmdldCh4LCB5KSwgdG9wUmlnaHRWZXJzaW9uQml0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGJvdHRvbUxlZnRWZXJzaW9uQml0cyA9IDA7XG4gICAgZm9yICh2YXIgeCA9IDU7IHggPj0gMDsgeC0tKSB7XG4gICAgICAgIGZvciAodmFyIHkgPSBkaW1lbnNpb24gLSA5OyB5ID49IGRpbWVuc2lvbiAtIDExOyB5LS0pIHtcbiAgICAgICAgICAgIGJvdHRvbUxlZnRWZXJzaW9uQml0cyA9IHB1c2hCaXQobWF0cml4LmdldCh4LCB5KSwgYm90dG9tTGVmdFZlcnNpb25CaXRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgYmVzdERpZmZlcmVuY2UgPSBJbmZpbml0eTtcbiAgICB2YXIgYmVzdFZlcnNpb247XG4gICAgZm9yICh2YXIgX2kgPSAwLCBWRVJTSU9OU18xID0gdmVyc2lvbl8xLlZFUlNJT05TOyBfaSA8IFZFUlNJT05TXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gVkVSU0lPTlNfMVtfaV07XG4gICAgICAgIGlmICh2ZXJzaW9uLmluZm9CaXRzID09PSB0b3BSaWdodFZlcnNpb25CaXRzIHx8IHZlcnNpb24uaW5mb0JpdHMgPT09IGJvdHRvbUxlZnRWZXJzaW9uQml0cykge1xuICAgICAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSBudW1CaXRzRGlmZmVyaW5nKHRvcFJpZ2h0VmVyc2lvbkJpdHMsIHZlcnNpb24uaW5mb0JpdHMpO1xuICAgICAgICBpZiAoZGlmZmVyZW5jZSA8IGJlc3REaWZmZXJlbmNlKSB7XG4gICAgICAgICAgICBiZXN0VmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgICAgICBiZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG4gICAgICAgIH1cbiAgICAgICAgZGlmZmVyZW5jZSA9IG51bUJpdHNEaWZmZXJpbmcoYm90dG9tTGVmdFZlcnNpb25CaXRzLCB2ZXJzaW9uLmluZm9CaXRzKTtcbiAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCBiZXN0RGlmZmVyZW5jZSkge1xuICAgICAgICAgICAgYmVzdFZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICAgICAgYmVzdERpZmZlcmVuY2UgPSBkaWZmZXJlbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFdlIGNhbiB0b2xlcmF0ZSB1cCB0byAzIGJpdHMgb2YgZXJyb3Igc2luY2Ugbm8gdHdvIHZlcnNpb24gaW5mbyBjb2Rld29yZHMgd2lsbFxuICAgIC8vIGRpZmZlciBpbiBsZXNzIHRoYW4gOCBiaXRzLlxuICAgIGlmIChiZXN0RGlmZmVyZW5jZSA8PSAzKSB7XG4gICAgICAgIHJldHVybiBiZXN0VmVyc2lvbjtcbiAgICB9XG59XG5mdW5jdGlvbiByZWFkRm9ybWF0SW5mb3JtYXRpb24obWF0cml4KSB7XG4gICAgdmFyIHRvcExlZnRGb3JtYXRJbmZvQml0cyA9IDA7XG4gICAgZm9yICh2YXIgeCA9IDA7IHggPD0gODsgeCsrKSB7XG4gICAgICAgIGlmICh4ICE9PSA2KSB7IC8vIFNraXAgdGltaW5nIHBhdHRlcm4gYml0XG4gICAgICAgICAgICB0b3BMZWZ0Rm9ybWF0SW5mb0JpdHMgPSBwdXNoQml0KG1hdHJpeC5nZXQoeCwgOCksIHRvcExlZnRGb3JtYXRJbmZvQml0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgeSA9IDc7IHkgPj0gMDsgeS0tKSB7XG4gICAgICAgIGlmICh5ICE9PSA2KSB7IC8vIFNraXAgdGltaW5nIHBhdHRlcm4gYml0XG4gICAgICAgICAgICB0b3BMZWZ0Rm9ybWF0SW5mb0JpdHMgPSBwdXNoQml0KG1hdHJpeC5nZXQoOCwgeSksIHRvcExlZnRGb3JtYXRJbmZvQml0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGRpbWVuc2lvbiA9IG1hdHJpeC5oZWlnaHQ7XG4gICAgdmFyIHRvcFJpZ2h0Qm90dG9tUmlnaHRGb3JtYXRJbmZvQml0cyA9IDA7XG4gICAgZm9yICh2YXIgeSA9IGRpbWVuc2lvbiAtIDE7IHkgPj0gZGltZW5zaW9uIC0gNzsgeS0tKSB7IC8vIGJvdHRvbSBsZWZ0XG4gICAgICAgIHRvcFJpZ2h0Qm90dG9tUmlnaHRGb3JtYXRJbmZvQml0cyA9IHB1c2hCaXQobWF0cml4LmdldCg4LCB5KSwgdG9wUmlnaHRCb3R0b21SaWdodEZvcm1hdEluZm9CaXRzKTtcbiAgICB9XG4gICAgZm9yICh2YXIgeCA9IGRpbWVuc2lvbiAtIDg7IHggPCBkaW1lbnNpb247IHgrKykgeyAvLyB0b3AgcmlnaHRcbiAgICAgICAgdG9wUmlnaHRCb3R0b21SaWdodEZvcm1hdEluZm9CaXRzID0gcHVzaEJpdChtYXRyaXguZ2V0KHgsIDgpLCB0b3BSaWdodEJvdHRvbVJpZ2h0Rm9ybWF0SW5mb0JpdHMpO1xuICAgIH1cbiAgICB2YXIgYmVzdERpZmZlcmVuY2UgPSBJbmZpbml0eTtcbiAgICB2YXIgYmVzdEZvcm1hdEluZm8gPSBudWxsO1xuICAgIGZvciAodmFyIF9pID0gMCwgRk9STUFUX0lORk9fVEFCTEVfMSA9IEZPUk1BVF9JTkZPX1RBQkxFOyBfaSA8IEZPUk1BVF9JTkZPX1RBQkxFXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBfYSA9IEZPUk1BVF9JTkZPX1RBQkxFXzFbX2ldLCBiaXRzID0gX2EuYml0cywgZm9ybWF0SW5mbyA9IF9hLmZvcm1hdEluZm87XG4gICAgICAgIGlmIChiaXRzID09PSB0b3BMZWZ0Rm9ybWF0SW5mb0JpdHMgfHwgYml0cyA9PT0gdG9wUmlnaHRCb3R0b21SaWdodEZvcm1hdEluZm9CaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0SW5mbztcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IG51bUJpdHNEaWZmZXJpbmcodG9wTGVmdEZvcm1hdEluZm9CaXRzLCBiaXRzKTtcbiAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCBiZXN0RGlmZmVyZW5jZSkge1xuICAgICAgICAgICAgYmVzdEZvcm1hdEluZm8gPSBmb3JtYXRJbmZvO1xuICAgICAgICAgICAgYmVzdERpZmZlcmVuY2UgPSBkaWZmZXJlbmNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3BMZWZ0Rm9ybWF0SW5mb0JpdHMgIT09IHRvcFJpZ2h0Qm90dG9tUmlnaHRGb3JtYXRJbmZvQml0cykgeyAvLyBhbHNvIHRyeSB0aGUgb3RoZXIgb3B0aW9uXG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gbnVtQml0c0RpZmZlcmluZyh0b3BSaWdodEJvdHRvbVJpZ2h0Rm9ybWF0SW5mb0JpdHMsIGJpdHMpO1xuICAgICAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCBiZXN0RGlmZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIGJlc3RGb3JtYXRJbmZvID0gZm9ybWF0SW5mbztcbiAgICAgICAgICAgICAgICBiZXN0RGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFtbWluZyBkaXN0YW5jZSBvZiB0aGUgMzIgbWFza2VkIGNvZGVzIGlzIDcsIGJ5IGNvbnN0cnVjdGlvbiwgc28gPD0gMyBiaXRzIGRpZmZlcmluZyBtZWFucyB3ZSBmb3VuZCBhIG1hdGNoXG4gICAgaWYgKGJlc3REaWZmZXJlbmNlIDw9IDMpIHtcbiAgICAgICAgcmV0dXJuIGJlc3RGb3JtYXRJbmZvO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldERhdGFCbG9ja3MoY29kZXdvcmRzLCB2ZXJzaW9uLCBlY0xldmVsKSB7XG4gICAgdmFyIGVjSW5mbyA9IHZlcnNpb24uZXJyb3JDb3JyZWN0aW9uTGV2ZWxzW2VjTGV2ZWxdO1xuICAgIHZhciBkYXRhQmxvY2tzID0gW107XG4gICAgdmFyIHRvdGFsQ29kZXdvcmRzID0gMDtcbiAgICBlY0luZm8uZWNCbG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYmxvY2spIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9jay5udW1CbG9ja3M7IGkrKykge1xuICAgICAgICAgICAgZGF0YUJsb2Nrcy5wdXNoKHsgbnVtRGF0YUNvZGV3b3JkczogYmxvY2suZGF0YUNvZGV3b3Jkc1BlckJsb2NrLCBjb2Rld29yZHM6IFtdIH0pO1xuICAgICAgICAgICAgdG90YWxDb2Rld29yZHMgKz0gYmxvY2suZGF0YUNvZGV3b3Jkc1BlckJsb2NrICsgZWNJbmZvLmVjQ29kZXdvcmRzUGVyQmxvY2s7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBJbiBzb21lIGNhc2VzIHRoZSBRUiBjb2RlIHdpbGwgYmUgbWFsZm9ybWVkIGVub3VnaCB0aGF0IHdlIHB1bGwgb2ZmIG1vcmUgb3IgbGVzcyB0aGFuIHdlIHNob3VsZC5cbiAgICAvLyBJZiB3ZSBwdWxsIG9mZiBsZXNzIHRoZXJlJ3Mgbm90aGluZyB3ZSBjYW4gZG8uXG4gICAgLy8gSWYgd2UgcHVsbCBvZmYgbW9yZSB3ZSBjYW4gc2FmZWx5IHRydW5jYXRlXG4gICAgaWYgKGNvZGV3b3Jkcy5sZW5ndGggPCB0b3RhbENvZGV3b3Jkcykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29kZXdvcmRzID0gY29kZXdvcmRzLnNsaWNlKDAsIHRvdGFsQ29kZXdvcmRzKTtcbiAgICB2YXIgc2hvcnRCbG9ja1NpemUgPSBlY0luZm8uZWNCbG9ja3NbMF0uZGF0YUNvZGV3b3Jkc1BlckJsb2NrO1xuICAgIC8vIFB1bGwgY29kZXdvcmRzIHRvIGZpbGwgdGhlIGJsb2NrcyB1cCB0byB0aGUgbWluaW11bSBzaXplXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaG9ydEJsb2NrU2l6ZTsgaSsrKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgZGF0YUJsb2Nrc18xID0gZGF0YUJsb2NrczsgX2kgPCBkYXRhQmxvY2tzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgZGF0YUJsb2NrID0gZGF0YUJsb2Nrc18xW19pXTtcbiAgICAgICAgICAgIGRhdGFCbG9jay5jb2Rld29yZHMucHVzaChjb2Rld29yZHMuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUgYXJlIGFueSBsYXJnZSBibG9ja3MsIHB1bGwgY29kZXdvcmRzIHRvIGZpbGwgdGhlIGxhc3QgZWxlbWVudCBvZiB0aG9zZVxuICAgIGlmIChlY0luZm8uZWNCbG9ja3MubGVuZ3RoID4gMSkge1xuICAgICAgICB2YXIgc21hbGxCbG9ja0NvdW50ID0gZWNJbmZvLmVjQmxvY2tzWzBdLm51bUJsb2NrcztcbiAgICAgICAgdmFyIGxhcmdlQmxvY2tDb3VudCA9IGVjSW5mby5lY0Jsb2Nrc1sxXS5udW1CbG9ja3M7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFyZ2VCbG9ja0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFCbG9ja3Nbc21hbGxCbG9ja0NvdW50ICsgaV0uY29kZXdvcmRzLnB1c2goY29kZXdvcmRzLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgcmVzdCBvZiB0aGUgY29kZXdvcmRzIHRvIHRoZSBibG9ja3MuIFRoZXNlIGFyZSB0aGUgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMuXG4gICAgd2hpbGUgKGNvZGV3b3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIF9hID0gMCwgZGF0YUJsb2Nrc18yID0gZGF0YUJsb2NrczsgX2EgPCBkYXRhQmxvY2tzXzIubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICB2YXIgZGF0YUJsb2NrID0gZGF0YUJsb2Nrc18yW19hXTtcbiAgICAgICAgICAgIGRhdGFCbG9jay5jb2Rld29yZHMucHVzaChjb2Rld29yZHMuc2hpZnQoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGFCbG9ja3M7XG59XG5mdW5jdGlvbiBkZWNvZGVNYXRyaXgobWF0cml4KSB7XG4gICAgdmFyIHZlcnNpb24gPSByZWFkVmVyc2lvbihtYXRyaXgpO1xuICAgIGlmICghdmVyc2lvbikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGZvcm1hdEluZm8gPSByZWFkRm9ybWF0SW5mb3JtYXRpb24obWF0cml4KTtcbiAgICBpZiAoIWZvcm1hdEluZm8pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBjb2Rld29yZHMgPSByZWFkQ29kZXdvcmRzKG1hdHJpeCwgdmVyc2lvbiwgZm9ybWF0SW5mbyk7XG4gICAgdmFyIGRhdGFCbG9ja3MgPSBnZXREYXRhQmxvY2tzKGNvZGV3b3JkcywgdmVyc2lvbiwgZm9ybWF0SW5mby5lcnJvckNvcnJlY3Rpb25MZXZlbCk7XG4gICAgaWYgKCFkYXRhQmxvY2tzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBDb3VudCB0b3RhbCBudW1iZXIgb2YgZGF0YSBieXRlc1xuICAgIHZhciB0b3RhbEJ5dGVzID0gZGF0YUJsb2Nrcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgKyBiLm51bURhdGFDb2Rld29yZHM7IH0sIDApO1xuICAgIHZhciByZXN1bHRCeXRlcyA9IG5ldyBVaW50OENsYW1wZWRBcnJheSh0b3RhbEJ5dGVzKTtcbiAgICB2YXIgcmVzdWx0SW5kZXggPSAwO1xuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YUJsb2Nrc18zID0gZGF0YUJsb2NrczsgX2kgPCBkYXRhQmxvY2tzXzMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBkYXRhQmxvY2sgPSBkYXRhQmxvY2tzXzNbX2ldO1xuICAgICAgICB2YXIgY29ycmVjdGVkQnl0ZXMgPSByZWVkc29sb21vbl8xLmRlY29kZShkYXRhQmxvY2suY29kZXdvcmRzLCBkYXRhQmxvY2suY29kZXdvcmRzLmxlbmd0aCAtIGRhdGFCbG9jay5udW1EYXRhQ29kZXdvcmRzKTtcbiAgICAgICAgaWYgKCFjb3JyZWN0ZWRCeXRlcykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhQmxvY2subnVtRGF0YUNvZGV3b3JkczsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRCeXRlc1tyZXN1bHRJbmRleCsrXSA9IGNvcnJlY3RlZEJ5dGVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVEYXRhXzEuZGVjb2RlKHJlc3VsdEJ5dGVzLCB2ZXJzaW9uLnZlcnNpb25OdW1iZXIpO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZnVuY3Rpb24gZGVjb2RlKG1hdHJpeCkge1xuICAgIGlmIChtYXRyaXggPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGRlY29kZU1hdHJpeChtYXRyaXgpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gRGVjb2RpbmcgZGlkbid0IHdvcmssIHRyeSBtaXJyb3JpbmcgdGhlIFFSIGFjcm9zcyB0aGUgdG9wTGVmdCAtPiBib3R0b21SaWdodCBsaW5lLlxuICAgIGZvciAodmFyIHggPSAwOyB4IDwgbWF0cml4LndpZHRoOyB4KyspIHtcbiAgICAgICAgZm9yICh2YXIgeSA9IHggKyAxOyB5IDwgbWF0cml4LmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgICBpZiAobWF0cml4LmdldCh4LCB5KSAhPT0gbWF0cml4LmdldCh5LCB4KSkge1xuICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoeCwgeSwgIW1hdHJpeC5nZXQoeCwgeSkpO1xuICAgICAgICAgICAgICAgIG1hdHJpeC5zZXQoeSwgeCwgIW1hdHJpeC5nZXQoeSwgeCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVNYXRyaXgobWF0cml4KTtcbn1cbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZVxudmFyIEJpdFN0cmVhbV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBzaGlmdEpJU1RhYmxlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIE1vZGU7XG4oZnVuY3Rpb24gKE1vZGUpIHtcbiAgICBNb2RlW1wiTnVtZXJpY1wiXSA9IFwibnVtZXJpY1wiO1xuICAgIE1vZGVbXCJBbHBoYW51bWVyaWNcIl0gPSBcImFscGhhbnVtZXJpY1wiO1xuICAgIE1vZGVbXCJCeXRlXCJdID0gXCJieXRlXCI7XG4gICAgTW9kZVtcIkthbmppXCJdID0gXCJrYW5qaVwiO1xuICAgIE1vZGVbXCJFQ0lcIl0gPSBcImVjaVwiO1xufSkoTW9kZSA9IGV4cG9ydHMuTW9kZSB8fCAoZXhwb3J0cy5Nb2RlID0ge30pKTtcbnZhciBNb2RlQnl0ZTtcbihmdW5jdGlvbiAoTW9kZUJ5dGUpIHtcbiAgICBNb2RlQnl0ZVtNb2RlQnl0ZVtcIlRlcm1pbmF0b3JcIl0gPSAwXSA9IFwiVGVybWluYXRvclwiO1xuICAgIE1vZGVCeXRlW01vZGVCeXRlW1wiTnVtZXJpY1wiXSA9IDFdID0gXCJOdW1lcmljXCI7XG4gICAgTW9kZUJ5dGVbTW9kZUJ5dGVbXCJBbHBoYW51bWVyaWNcIl0gPSAyXSA9IFwiQWxwaGFudW1lcmljXCI7XG4gICAgTW9kZUJ5dGVbTW9kZUJ5dGVbXCJCeXRlXCJdID0gNF0gPSBcIkJ5dGVcIjtcbiAgICBNb2RlQnl0ZVtNb2RlQnl0ZVtcIkthbmppXCJdID0gOF0gPSBcIkthbmppXCI7XG4gICAgTW9kZUJ5dGVbTW9kZUJ5dGVbXCJFQ0lcIl0gPSA3XSA9IFwiRUNJXCI7XG4gICAgLy8gU3RydWN0dXJlZEFwcGVuZCA9IDB4MyxcbiAgICAvLyBGTkMxRmlyc3RQb3NpdGlvbiA9IDB4NSxcbiAgICAvLyBGTkMxU2Vjb25kUG9zaXRpb24gPSAweDksXG59KShNb2RlQnl0ZSB8fCAoTW9kZUJ5dGUgPSB7fSkpO1xuZnVuY3Rpb24gZGVjb2RlTnVtZXJpYyhzdHJlYW0sIHNpemUpIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICB2YXIgdGV4dCA9IFwiXCI7XG4gICAgdmFyIGNoYXJhY3RlckNvdW50U2l6ZSA9IFsxMCwgMTIsIDE0XVtzaXplXTtcbiAgICB2YXIgbGVuZ3RoID0gc3RyZWFtLnJlYWRCaXRzKGNoYXJhY3RlckNvdW50U2l6ZSk7XG4gICAgLy8gUmVhZCBkaWdpdHMgaW4gZ3JvdXBzIG9mIDNcbiAgICB3aGlsZSAobGVuZ3RoID49IDMpIHtcbiAgICAgICAgdmFyIG51bSA9IHN0cmVhbS5yZWFkQml0cygxMCk7XG4gICAgICAgIGlmIChudW0gPj0gMTAwMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBudW1lcmljIHZhbHVlIGFib3ZlIDk5OVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IE1hdGguZmxvb3IobnVtIC8gMTAwKTtcbiAgICAgICAgdmFyIGIgPSBNYXRoLmZsb29yKG51bSAvIDEwKSAlIDEwO1xuICAgICAgICB2YXIgYyA9IG51bSAlIDEwO1xuICAgICAgICBieXRlcy5wdXNoKDQ4ICsgYSwgNDggKyBiLCA0OCArIGMpO1xuICAgICAgICB0ZXh0ICs9IGEudG9TdHJpbmcoKSArIGIudG9TdHJpbmcoKSArIGMudG9TdHJpbmcoKTtcbiAgICAgICAgbGVuZ3RoIC09IDM7XG4gICAgfVxuICAgIC8vIElmIHRoZSBudW1iZXIgb2YgZGlnaXRzIGFyZW4ndCBhIG11bHRpcGxlIG9mIDMsIHRoZSByZW1haW5pbmcgZGlnaXRzIGFyZSBzcGVjaWFsIGNhc2VkLlxuICAgIGlmIChsZW5ndGggPT09IDIpIHtcbiAgICAgICAgdmFyIG51bSA9IHN0cmVhbS5yZWFkQml0cyg3KTtcbiAgICAgICAgaWYgKG51bSA+PSAxMDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbnVtZXJpYyB2YWx1ZSBhYm92ZSA5OVwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IE1hdGguZmxvb3IobnVtIC8gMTApO1xuICAgICAgICB2YXIgYiA9IG51bSAlIDEwO1xuICAgICAgICBieXRlcy5wdXNoKDQ4ICsgYSwgNDggKyBiKTtcbiAgICAgICAgdGV4dCArPSBhLnRvU3RyaW5nKCkgKyBiLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgICAgICB2YXIgbnVtID0gc3RyZWFtLnJlYWRCaXRzKDQpO1xuICAgICAgICBpZiAobnVtID49IDEwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG51bWVyaWMgdmFsdWUgYWJvdmUgOVwiKTtcbiAgICAgICAgfVxuICAgICAgICBieXRlcy5wdXNoKDQ4ICsgbnVtKTtcbiAgICAgICAgdGV4dCArPSBudW0udG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgYnl0ZXM6IGJ5dGVzLCB0ZXh0OiB0ZXh0IH07XG59XG52YXIgQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXMgPSBbXG4gICAgXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIixcbiAgICBcIjlcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIiwgXCJHXCIsIFwiSFwiLFxuICAgIFwiSVwiLCBcIkpcIiwgXCJLXCIsIFwiTFwiLCBcIk1cIiwgXCJOXCIsIFwiT1wiLCBcIlBcIiwgXCJRXCIsXG4gICAgXCJSXCIsIFwiU1wiLCBcIlRcIiwgXCJVXCIsIFwiVlwiLCBcIldcIiwgXCJYXCIsIFwiWVwiLCBcIlpcIixcbiAgICBcIiBcIiwgXCIkXCIsIFwiJVwiLCBcIipcIiwgXCIrXCIsIFwiLVwiLCBcIi5cIiwgXCIvXCIsIFwiOlwiLFxuXTtcbmZ1bmN0aW9uIGRlY29kZUFscGhhbnVtZXJpYyhzdHJlYW0sIHNpemUpIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICB2YXIgdGV4dCA9IFwiXCI7XG4gICAgdmFyIGNoYXJhY3RlckNvdW50U2l6ZSA9IFs5LCAxMSwgMTNdW3NpemVdO1xuICAgIHZhciBsZW5ndGggPSBzdHJlYW0ucmVhZEJpdHMoY2hhcmFjdGVyQ291bnRTaXplKTtcbiAgICB3aGlsZSAobGVuZ3RoID49IDIpIHtcbiAgICAgICAgdmFyIHYgPSBzdHJlYW0ucmVhZEJpdHMoMTEpO1xuICAgICAgICB2YXIgYSA9IE1hdGguZmxvb3IodiAvIDQ1KTtcbiAgICAgICAgdmFyIGIgPSB2ICUgNDU7XG4gICAgICAgIGJ5dGVzLnB1c2goQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXNbYV0uY2hhckNvZGVBdCgwKSwgQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXNbYl0uY2hhckNvZGVBdCgwKSk7XG4gICAgICAgIHRleHQgKz0gQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXNbYV0gKyBBbHBoYW51bWVyaWNDaGFyYWN0ZXJDb2Rlc1tiXTtcbiAgICAgICAgbGVuZ3RoIC09IDI7XG4gICAgfVxuICAgIGlmIChsZW5ndGggPT09IDEpIHtcbiAgICAgICAgdmFyIGEgPSBzdHJlYW0ucmVhZEJpdHMoNik7XG4gICAgICAgIGJ5dGVzLnB1c2goQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXNbYV0uY2hhckNvZGVBdCgwKSk7XG4gICAgICAgIHRleHQgKz0gQWxwaGFudW1lcmljQ2hhcmFjdGVyQ29kZXNbYV07XG4gICAgfVxuICAgIHJldHVybiB7IGJ5dGVzOiBieXRlcywgdGV4dDogdGV4dCB9O1xufVxuZnVuY3Rpb24gZGVjb2RlQnl0ZShzdHJlYW0sIHNpemUpIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICB2YXIgdGV4dCA9IFwiXCI7XG4gICAgdmFyIGNoYXJhY3RlckNvdW50U2l6ZSA9IFs4LCAxNiwgMTZdW3NpemVdO1xuICAgIHZhciBsZW5ndGggPSBzdHJlYW0ucmVhZEJpdHMoY2hhcmFjdGVyQ291bnRTaXplKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBiID0gc3RyZWFtLnJlYWRCaXRzKDgpO1xuICAgICAgICBieXRlcy5wdXNoKGIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB0ZXh0ICs9IGRlY29kZVVSSUNvbXBvbmVudChieXRlcy5tYXAoZnVuY3Rpb24gKGIpIHsgcmV0dXJuIFwiJVwiICsgKFwiMFwiICsgYi50b1N0cmluZygxNikpLnN1YnN0cigtMik7IH0pLmpvaW4oXCJcIikpO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgLy8gZmFpbGVkIHRvIGRlY29kZVxuICAgIH1cbiAgICByZXR1cm4geyBieXRlczogYnl0ZXMsIHRleHQ6IHRleHQgfTtcbn1cbmZ1bmN0aW9uIGRlY29kZUthbmppKHN0cmVhbSwgc2l6ZSkge1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIHZhciB0ZXh0ID0gXCJcIjtcbiAgICB2YXIgY2hhcmFjdGVyQ291bnRTaXplID0gWzgsIDEwLCAxMl1bc2l6ZV07XG4gICAgdmFyIGxlbmd0aCA9IHN0cmVhbS5yZWFkQml0cyhjaGFyYWN0ZXJDb3VudFNpemUpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGsgPSBzdHJlYW0ucmVhZEJpdHMoMTMpO1xuICAgICAgICB2YXIgYyA9IChNYXRoLmZsb29yKGsgLyAweEMwKSA8PCA4KSB8IChrICUgMHhDMCk7XG4gICAgICAgIGlmIChjIDwgMHgxRjAwKSB7XG4gICAgICAgICAgICBjICs9IDB4ODE0MDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGMgKz0gMHhDMTQwO1xuICAgICAgICB9XG4gICAgICAgIGJ5dGVzLnB1c2goYyA+PiA4LCBjICYgMHhGRik7XG4gICAgICAgIHRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShzaGlmdEpJU1RhYmxlXzEuc2hpZnRKSVNUYWJsZVtjXSk7XG4gICAgfVxuICAgIHJldHVybiB7IGJ5dGVzOiBieXRlcywgdGV4dDogdGV4dCB9O1xufVxuZnVuY3Rpb24gZGVjb2RlKGRhdGEsIHZlcnNpb24pIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgdmFyIHN0cmVhbSA9IG5ldyBCaXRTdHJlYW1fMS5CaXRTdHJlYW0oZGF0YSk7XG4gICAgLy8gVGhlcmUgYXJlIDMgJ3NpemVzJyBiYXNlZCBvbiB0aGUgdmVyc2lvbi4gMS05IGlzIHNtYWxsICgwKSwgMTAtMjYgaXMgbWVkaXVtICgxKSBhbmQgMjctNDAgaXMgbGFyZ2UgKDIpLlxuICAgIHZhciBzaXplID0gdmVyc2lvbiA8PSA5ID8gMCA6IHZlcnNpb24gPD0gMjYgPyAxIDogMjtcbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICBieXRlczogW10sXG4gICAgICAgIGNodW5rczogW10sXG4gICAgfTtcbiAgICB3aGlsZSAoc3RyZWFtLmF2YWlsYWJsZSgpID49IDQpIHtcbiAgICAgICAgdmFyIG1vZGUgPSBzdHJlYW0ucmVhZEJpdHMoNCk7XG4gICAgICAgIGlmIChtb2RlID09PSBNb2RlQnl0ZS5UZXJtaW5hdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGUgPT09IE1vZGVCeXRlLkVDSSkge1xuICAgICAgICAgICAgaWYgKHN0cmVhbS5yZWFkQml0cygxKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jaHVua3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1vZGUuRUNJLFxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50TnVtYmVyOiBzdHJlYW0ucmVhZEJpdHMoNyksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdHJlYW0ucmVhZEJpdHMoMSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuY2h1bmtzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBNb2RlLkVDSSxcbiAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudE51bWJlcjogc3RyZWFtLnJlYWRCaXRzKDE0KSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHN0cmVhbS5yZWFkQml0cygxKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5jaHVua3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE1vZGUuRUNJLFxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50TnVtYmVyOiBzdHJlYW0ucmVhZEJpdHMoMjEpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRUNJIGRhdGEgc2VlbXMgY29ycnVwdGVkXG4gICAgICAgICAgICAgICAgcmVzdWx0LmNodW5rcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTW9kZS5FQ0ksXG4gICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnROdW1iZXI6IC0xLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGUgPT09IE1vZGVCeXRlLk51bWVyaWMpIHtcbiAgICAgICAgICAgIHZhciBudW1lcmljUmVzdWx0ID0gZGVjb2RlTnVtZXJpYyhzdHJlYW0sIHNpemUpO1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gbnVtZXJpY1Jlc3VsdC50ZXh0O1xuICAgICAgICAgICAgKF9hID0gcmVzdWx0LmJ5dGVzKS5wdXNoLmFwcGx5KF9hLCBudW1lcmljUmVzdWx0LmJ5dGVzKTtcbiAgICAgICAgICAgIHJlc3VsdC5jaHVua3MucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTW9kZS5OdW1lcmljLFxuICAgICAgICAgICAgICAgIHRleHQ6IG51bWVyaWNSZXN1bHQudGV4dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1vZGUgPT09IE1vZGVCeXRlLkFscGhhbnVtZXJpYykge1xuICAgICAgICAgICAgdmFyIGFscGhhbnVtZXJpY1Jlc3VsdCA9IGRlY29kZUFscGhhbnVtZXJpYyhzdHJlYW0sIHNpemUpO1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gYWxwaGFudW1lcmljUmVzdWx0LnRleHQ7XG4gICAgICAgICAgICAoX2IgPSByZXN1bHQuYnl0ZXMpLnB1c2guYXBwbHkoX2IsIGFscGhhbnVtZXJpY1Jlc3VsdC5ieXRlcyk7XG4gICAgICAgICAgICByZXN1bHQuY2h1bmtzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE1vZGUuQWxwaGFudW1lcmljLFxuICAgICAgICAgICAgICAgIHRleHQ6IGFscGhhbnVtZXJpY1Jlc3VsdC50ZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gTW9kZUJ5dGUuQnl0ZSkge1xuICAgICAgICAgICAgdmFyIGJ5dGVSZXN1bHQgPSBkZWNvZGVCeXRlKHN0cmVhbSwgc2l6ZSk7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBieXRlUmVzdWx0LnRleHQ7XG4gICAgICAgICAgICAoX2MgPSByZXN1bHQuYnl0ZXMpLnB1c2guYXBwbHkoX2MsIGJ5dGVSZXN1bHQuYnl0ZXMpO1xuICAgICAgICAgICAgcmVzdWx0LmNodW5rcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBNb2RlLkJ5dGUsXG4gICAgICAgICAgICAgICAgYnl0ZXM6IGJ5dGVSZXN1bHQuYnl0ZXMsXG4gICAgICAgICAgICAgICAgdGV4dDogYnl0ZVJlc3VsdC50ZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gTW9kZUJ5dGUuS2FuamkpIHtcbiAgICAgICAgICAgIHZhciBrYW5qaVJlc3VsdCA9IGRlY29kZUthbmppKHN0cmVhbSwgc2l6ZSk7XG4gICAgICAgICAgICByZXN1bHQudGV4dCArPSBrYW5qaVJlc3VsdC50ZXh0O1xuICAgICAgICAgICAgKF9kID0gcmVzdWx0LmJ5dGVzKS5wdXNoLmFwcGx5KF9kLCBrYW5qaVJlc3VsdC5ieXRlcyk7XG4gICAgICAgICAgICByZXN1bHQuY2h1bmtzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IE1vZGUuS2FuamksXG4gICAgICAgICAgICAgICAgYnl0ZXM6IGthbmppUmVzdWx0LmJ5dGVzLFxuICAgICAgICAgICAgICAgIHRleHQ6IGthbmppUmVzdWx0LnRleHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSBpcyBubyBkYXRhIGxlZnQsIG9yIHRoZSByZW1haW5pbmcgYml0cyBhcmUgYWxsIDAsIHRoZW4gdGhhdCBjb3VudHMgYXMgYSB0ZXJtaW5hdGlvbiBtYXJrZXJcbiAgICBpZiAoc3RyZWFtLmF2YWlsYWJsZSgpID09PSAwIHx8IHN0cmVhbS5yZWFkQml0cyhzdHJlYW0uYXZhaWxhYmxlKCkpID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQml0U3RyZWFtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJpdFN0cmVhbShieXRlcykge1xuICAgICAgICB0aGlzLmJ5dGVPZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmJpdE9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMuYnl0ZXMgPSBieXRlcztcbiAgICB9XG4gICAgQml0U3RyZWFtLnByb3RvdHlwZS5yZWFkQml0cyA9IGZ1bmN0aW9uIChudW1CaXRzKSB7XG4gICAgICAgIGlmIChudW1CaXRzIDwgMSB8fCBudW1CaXRzID4gMzIgfHwgbnVtQml0cyA+IHRoaXMuYXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZWFkIFwiICsgbnVtQml0cy50b1N0cmluZygpICsgXCIgYml0c1wiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgLy8gRmlyc3QsIHJlYWQgcmVtYWluZGVyIGZyb20gY3VycmVudCBieXRlXG4gICAgICAgIGlmICh0aGlzLmJpdE9mZnNldCA+IDApIHtcbiAgICAgICAgICAgIHZhciBiaXRzTGVmdCA9IDggLSB0aGlzLmJpdE9mZnNldDtcbiAgICAgICAgICAgIHZhciB0b1JlYWQgPSBudW1CaXRzIDwgYml0c0xlZnQgPyBudW1CaXRzIDogYml0c0xlZnQ7XG4gICAgICAgICAgICB2YXIgYml0c1RvTm90UmVhZCA9IGJpdHNMZWZ0IC0gdG9SZWFkO1xuICAgICAgICAgICAgdmFyIG1hc2sgPSAoMHhGRiA+PiAoOCAtIHRvUmVhZCkpIDw8IGJpdHNUb05vdFJlYWQ7XG4gICAgICAgICAgICByZXN1bHQgPSAodGhpcy5ieXRlc1t0aGlzLmJ5dGVPZmZzZXRdICYgbWFzaykgPj4gYml0c1RvTm90UmVhZDtcbiAgICAgICAgICAgIG51bUJpdHMgLT0gdG9SZWFkO1xuICAgICAgICAgICAgdGhpcy5iaXRPZmZzZXQgKz0gdG9SZWFkO1xuICAgICAgICAgICAgaWYgKHRoaXMuYml0T2Zmc2V0ID09PSA4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iaXRPZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZU9mZnNldCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE5leHQgcmVhZCB3aG9sZSBieXRlc1xuICAgICAgICBpZiAobnVtQml0cyA+IDApIHtcbiAgICAgICAgICAgIHdoaWxlIChudW1CaXRzID49IDgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAocmVzdWx0IDw8IDgpIHwgKHRoaXMuYnl0ZXNbdGhpcy5ieXRlT2Zmc2V0XSAmIDB4RkYpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZU9mZnNldCsrO1xuICAgICAgICAgICAgICAgIG51bUJpdHMgLT0gODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZpbmFsbHkgcmVhZCBhIHBhcnRpYWwgYnl0ZVxuICAgICAgICAgICAgaWYgKG51bUJpdHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJpdHNUb05vdFJlYWQgPSA4IC0gbnVtQml0cztcbiAgICAgICAgICAgICAgICB2YXIgbWFzayA9ICgweEZGID4+IGJpdHNUb05vdFJlYWQpIDw8IGJpdHNUb05vdFJlYWQ7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gKHJlc3VsdCA8PCBudW1CaXRzKSB8ICgodGhpcy5ieXRlc1t0aGlzLmJ5dGVPZmZzZXRdICYgbWFzaykgPj4gYml0c1RvTm90UmVhZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iaXRPZmZzZXQgKz0gbnVtQml0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQml0U3RyZWFtLnByb3RvdHlwZS5hdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiA4ICogKHRoaXMuYnl0ZXMubGVuZ3RoIC0gdGhpcy5ieXRlT2Zmc2V0KSAtIHRoaXMuYml0T2Zmc2V0O1xuICAgIH07XG4gICAgcmV0dXJuIEJpdFN0cmVhbTtcbn0oKSk7XG5leHBvcnRzLkJpdFN0cmVhbSA9IEJpdFN0cmVhbTtcblxuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2hpZnRKSVNUYWJsZSA9IHtcbiAgICAweDIwOiAweDAwMjAsXG4gICAgMHgyMTogMHgwMDIxLFxuICAgIDB4MjI6IDB4MDAyMixcbiAgICAweDIzOiAweDAwMjMsXG4gICAgMHgyNDogMHgwMDI0LFxuICAgIDB4MjU6IDB4MDAyNSxcbiAgICAweDI2OiAweDAwMjYsXG4gICAgMHgyNzogMHgwMDI3LFxuICAgIDB4Mjg6IDB4MDAyOCxcbiAgICAweDI5OiAweDAwMjksXG4gICAgMHgyQTogMHgwMDJBLFxuICAgIDB4MkI6IDB4MDAyQixcbiAgICAweDJDOiAweDAwMkMsXG4gICAgMHgyRDogMHgwMDJELFxuICAgIDB4MkU6IDB4MDAyRSxcbiAgICAweDJGOiAweDAwMkYsXG4gICAgMHgzMDogMHgwMDMwLFxuICAgIDB4MzE6IDB4MDAzMSxcbiAgICAweDMyOiAweDAwMzIsXG4gICAgMHgzMzogMHgwMDMzLFxuICAgIDB4MzQ6IDB4MDAzNCxcbiAgICAweDM1OiAweDAwMzUsXG4gICAgMHgzNjogMHgwMDM2LFxuICAgIDB4Mzc6IDB4MDAzNyxcbiAgICAweDM4OiAweDAwMzgsXG4gICAgMHgzOTogMHgwMDM5LFxuICAgIDB4M0E6IDB4MDAzQSxcbiAgICAweDNCOiAweDAwM0IsXG4gICAgMHgzQzogMHgwMDNDLFxuICAgIDB4M0Q6IDB4MDAzRCxcbiAgICAweDNFOiAweDAwM0UsXG4gICAgMHgzRjogMHgwMDNGLFxuICAgIDB4NDA6IDB4MDA0MCxcbiAgICAweDQxOiAweDAwNDEsXG4gICAgMHg0MjogMHgwMDQyLFxuICAgIDB4NDM6IDB4MDA0MyxcbiAgICAweDQ0OiAweDAwNDQsXG4gICAgMHg0NTogMHgwMDQ1LFxuICAgIDB4NDY6IDB4MDA0NixcbiAgICAweDQ3OiAweDAwNDcsXG4gICAgMHg0ODogMHgwMDQ4LFxuICAgIDB4NDk6IDB4MDA0OSxcbiAgICAweDRBOiAweDAwNEEsXG4gICAgMHg0QjogMHgwMDRCLFxuICAgIDB4NEM6IDB4MDA0QyxcbiAgICAweDREOiAweDAwNEQsXG4gICAgMHg0RTogMHgwMDRFLFxuICAgIDB4NEY6IDB4MDA0RixcbiAgICAweDUwOiAweDAwNTAsXG4gICAgMHg1MTogMHgwMDUxLFxuICAgIDB4NTI6IDB4MDA1MixcbiAgICAweDUzOiAweDAwNTMsXG4gICAgMHg1NDogMHgwMDU0LFxuICAgIDB4NTU6IDB4MDA1NSxcbiAgICAweDU2OiAweDAwNTYsXG4gICAgMHg1NzogMHgwMDU3LFxuICAgIDB4NTg6IDB4MDA1OCxcbiAgICAweDU5OiAweDAwNTksXG4gICAgMHg1QTogMHgwMDVBLFxuICAgIDB4NUI6IDB4MDA1QixcbiAgICAweDVDOiAweDAwQTUsXG4gICAgMHg1RDogMHgwMDVELFxuICAgIDB4NUU6IDB4MDA1RSxcbiAgICAweDVGOiAweDAwNUYsXG4gICAgMHg2MDogMHgwMDYwLFxuICAgIDB4NjE6IDB4MDA2MSxcbiAgICAweDYyOiAweDAwNjIsXG4gICAgMHg2MzogMHgwMDYzLFxuICAgIDB4NjQ6IDB4MDA2NCxcbiAgICAweDY1OiAweDAwNjUsXG4gICAgMHg2NjogMHgwMDY2LFxuICAgIDB4Njc6IDB4MDA2NyxcbiAgICAweDY4OiAweDAwNjgsXG4gICAgMHg2OTogMHgwMDY5LFxuICAgIDB4NkE6IDB4MDA2QSxcbiAgICAweDZCOiAweDAwNkIsXG4gICAgMHg2QzogMHgwMDZDLFxuICAgIDB4NkQ6IDB4MDA2RCxcbiAgICAweDZFOiAweDAwNkUsXG4gICAgMHg2RjogMHgwMDZGLFxuICAgIDB4NzA6IDB4MDA3MCxcbiAgICAweDcxOiAweDAwNzEsXG4gICAgMHg3MjogMHgwMDcyLFxuICAgIDB4NzM6IDB4MDA3MyxcbiAgICAweDc0OiAweDAwNzQsXG4gICAgMHg3NTogMHgwMDc1LFxuICAgIDB4NzY6IDB4MDA3NixcbiAgICAweDc3OiAweDAwNzcsXG4gICAgMHg3ODogMHgwMDc4LFxuICAgIDB4Nzk6IDB4MDA3OSxcbiAgICAweDdBOiAweDAwN0EsXG4gICAgMHg3QjogMHgwMDdCLFxuICAgIDB4N0M6IDB4MDA3QyxcbiAgICAweDdEOiAweDAwN0QsXG4gICAgMHg3RTogMHgyMDNFLFxuICAgIDB4ODE0MDogMHgzMDAwLFxuICAgIDB4ODE0MTogMHgzMDAxLFxuICAgIDB4ODE0MjogMHgzMDAyLFxuICAgIDB4ODE0MzogMHhGRjBDLFxuICAgIDB4ODE0NDogMHhGRjBFLFxuICAgIDB4ODE0NTogMHgzMEZCLFxuICAgIDB4ODE0NjogMHhGRjFBLFxuICAgIDB4ODE0NzogMHhGRjFCLFxuICAgIDB4ODE0ODogMHhGRjFGLFxuICAgIDB4ODE0OTogMHhGRjAxLFxuICAgIDB4ODE0QTogMHgzMDlCLFxuICAgIDB4ODE0QjogMHgzMDlDLFxuICAgIDB4ODE0QzogMHgwMEI0LFxuICAgIDB4ODE0RDogMHhGRjQwLFxuICAgIDB4ODE0RTogMHgwMEE4LFxuICAgIDB4ODE0RjogMHhGRjNFLFxuICAgIDB4ODE1MDogMHhGRkUzLFxuICAgIDB4ODE1MTogMHhGRjNGLFxuICAgIDB4ODE1MjogMHgzMEZELFxuICAgIDB4ODE1MzogMHgzMEZFLFxuICAgIDB4ODE1NDogMHgzMDlELFxuICAgIDB4ODE1NTogMHgzMDlFLFxuICAgIDB4ODE1NjogMHgzMDAzLFxuICAgIDB4ODE1NzogMHg0RURELFxuICAgIDB4ODE1ODogMHgzMDA1LFxuICAgIDB4ODE1OTogMHgzMDA2LFxuICAgIDB4ODE1QTogMHgzMDA3LFxuICAgIDB4ODE1QjogMHgzMEZDLFxuICAgIDB4ODE1QzogMHgyMDE1LFxuICAgIDB4ODE1RDogMHgyMDEwLFxuICAgIDB4ODE1RTogMHhGRjBGLFxuICAgIDB4ODE1RjogMHgwMDVDLFxuICAgIDB4ODE2MDogMHgzMDFDLFxuICAgIDB4ODE2MTogMHgyMDE2LFxuICAgIDB4ODE2MjogMHhGRjVDLFxuICAgIDB4ODE2MzogMHgyMDI2LFxuICAgIDB4ODE2NDogMHgyMDI1LFxuICAgIDB4ODE2NTogMHgyMDE4LFxuICAgIDB4ODE2NjogMHgyMDE5LFxuICAgIDB4ODE2NzogMHgyMDFDLFxuICAgIDB4ODE2ODogMHgyMDFELFxuICAgIDB4ODE2OTogMHhGRjA4LFxuICAgIDB4ODE2QTogMHhGRjA5LFxuICAgIDB4ODE2QjogMHgzMDE0LFxuICAgIDB4ODE2QzogMHgzMDE1LFxuICAgIDB4ODE2RDogMHhGRjNCLFxuICAgIDB4ODE2RTogMHhGRjNELFxuICAgIDB4ODE2RjogMHhGRjVCLFxuICAgIDB4ODE3MDogMHhGRjVELFxuICAgIDB4ODE3MTogMHgzMDA4LFxuICAgIDB4ODE3MjogMHgzMDA5LFxuICAgIDB4ODE3MzogMHgzMDBBLFxuICAgIDB4ODE3NDogMHgzMDBCLFxuICAgIDB4ODE3NTogMHgzMDBDLFxuICAgIDB4ODE3NjogMHgzMDBELFxuICAgIDB4ODE3NzogMHgzMDBFLFxuICAgIDB4ODE3ODogMHgzMDBGLFxuICAgIDB4ODE3OTogMHgzMDEwLFxuICAgIDB4ODE3QTogMHgzMDExLFxuICAgIDB4ODE3QjogMHhGRjBCLFxuICAgIDB4ODE3QzogMHgyMjEyLFxuICAgIDB4ODE3RDogMHgwMEIxLFxuICAgIDB4ODE3RTogMHgwMEQ3LFxuICAgIDB4ODE4MDogMHgwMEY3LFxuICAgIDB4ODE4MTogMHhGRjFELFxuICAgIDB4ODE4MjogMHgyMjYwLFxuICAgIDB4ODE4MzogMHhGRjFDLFxuICAgIDB4ODE4NDogMHhGRjFFLFxuICAgIDB4ODE4NTogMHgyMjY2LFxuICAgIDB4ODE4NjogMHgyMjY3LFxuICAgIDB4ODE4NzogMHgyMjFFLFxuICAgIDB4ODE4ODogMHgyMjM0LFxuICAgIDB4ODE4OTogMHgyNjQyLFxuICAgIDB4ODE4QTogMHgyNjQwLFxuICAgIDB4ODE4QjogMHgwMEIwLFxuICAgIDB4ODE4QzogMHgyMDMyLFxuICAgIDB4ODE4RDogMHgyMDMzLFxuICAgIDB4ODE4RTogMHgyMTAzLFxuICAgIDB4ODE4RjogMHhGRkU1LFxuICAgIDB4ODE5MDogMHhGRjA0LFxuICAgIDB4ODE5MTogMHgwMEEyLFxuICAgIDB4ODE5MjogMHgwMEEzLFxuICAgIDB4ODE5MzogMHhGRjA1LFxuICAgIDB4ODE5NDogMHhGRjAzLFxuICAgIDB4ODE5NTogMHhGRjA2LFxuICAgIDB4ODE5NjogMHhGRjBBLFxuICAgIDB4ODE5NzogMHhGRjIwLFxuICAgIDB4ODE5ODogMHgwMEE3LFxuICAgIDB4ODE5OTogMHgyNjA2LFxuICAgIDB4ODE5QTogMHgyNjA1LFxuICAgIDB4ODE5QjogMHgyNUNCLFxuICAgIDB4ODE5QzogMHgyNUNGLFxuICAgIDB4ODE5RDogMHgyNUNFLFxuICAgIDB4ODE5RTogMHgyNUM3LFxuICAgIDB4ODE5RjogMHgyNUM2LFxuICAgIDB4ODFBMDogMHgyNUExLFxuICAgIDB4ODFBMTogMHgyNUEwLFxuICAgIDB4ODFBMjogMHgyNUIzLFxuICAgIDB4ODFBMzogMHgyNUIyLFxuICAgIDB4ODFBNDogMHgyNUJELFxuICAgIDB4ODFBNTogMHgyNUJDLFxuICAgIDB4ODFBNjogMHgyMDNCLFxuICAgIDB4ODFBNzogMHgzMDEyLFxuICAgIDB4ODFBODogMHgyMTkyLFxuICAgIDB4ODFBOTogMHgyMTkwLFxuICAgIDB4ODFBQTogMHgyMTkxLFxuICAgIDB4ODFBQjogMHgyMTkzLFxuICAgIDB4ODFBQzogMHgzMDEzLFxuICAgIDB4ODFCODogMHgyMjA4LFxuICAgIDB4ODFCOTogMHgyMjBCLFxuICAgIDB4ODFCQTogMHgyMjg2LFxuICAgIDB4ODFCQjogMHgyMjg3LFxuICAgIDB4ODFCQzogMHgyMjgyLFxuICAgIDB4ODFCRDogMHgyMjgzLFxuICAgIDB4ODFCRTogMHgyMjJBLFxuICAgIDB4ODFCRjogMHgyMjI5LFxuICAgIDB4ODFDODogMHgyMjI3LFxuICAgIDB4ODFDOTogMHgyMjI4LFxuICAgIDB4ODFDQTogMHgwMEFDLFxuICAgIDB4ODFDQjogMHgyMUQyLFxuICAgIDB4ODFDQzogMHgyMUQ0LFxuICAgIDB4ODFDRDogMHgyMjAwLFxuICAgIDB4ODFDRTogMHgyMjAzLFxuICAgIDB4ODFEQTogMHgyMjIwLFxuICAgIDB4ODFEQjogMHgyMkE1LFxuICAgIDB4ODFEQzogMHgyMzEyLFxuICAgIDB4ODFERDogMHgyMjAyLFxuICAgIDB4ODFERTogMHgyMjA3LFxuICAgIDB4ODFERjogMHgyMjYxLFxuICAgIDB4ODFFMDogMHgyMjUyLFxuICAgIDB4ODFFMTogMHgyMjZBLFxuICAgIDB4ODFFMjogMHgyMjZCLFxuICAgIDB4ODFFMzogMHgyMjFBLFxuICAgIDB4ODFFNDogMHgyMjNELFxuICAgIDB4ODFFNTogMHgyMjFELFxuICAgIDB4ODFFNjogMHgyMjM1LFxuICAgIDB4ODFFNzogMHgyMjJCLFxuICAgIDB4ODFFODogMHgyMjJDLFxuICAgIDB4ODFGMDogMHgyMTJCLFxuICAgIDB4ODFGMTogMHgyMDMwLFxuICAgIDB4ODFGMjogMHgyNjZGLFxuICAgIDB4ODFGMzogMHgyNjZELFxuICAgIDB4ODFGNDogMHgyNjZBLFxuICAgIDB4ODFGNTogMHgyMDIwLFxuICAgIDB4ODFGNjogMHgyMDIxLFxuICAgIDB4ODFGNzogMHgwMEI2LFxuICAgIDB4ODFGQzogMHgyNUVGLFxuICAgIDB4ODI0RjogMHhGRjEwLFxuICAgIDB4ODI1MDogMHhGRjExLFxuICAgIDB4ODI1MTogMHhGRjEyLFxuICAgIDB4ODI1MjogMHhGRjEzLFxuICAgIDB4ODI1MzogMHhGRjE0LFxuICAgIDB4ODI1NDogMHhGRjE1LFxuICAgIDB4ODI1NTogMHhGRjE2LFxuICAgIDB4ODI1NjogMHhGRjE3LFxuICAgIDB4ODI1NzogMHhGRjE4LFxuICAgIDB4ODI1ODogMHhGRjE5LFxuICAgIDB4ODI2MDogMHhGRjIxLFxuICAgIDB4ODI2MTogMHhGRjIyLFxuICAgIDB4ODI2MjogMHhGRjIzLFxuICAgIDB4ODI2MzogMHhGRjI0LFxuICAgIDB4ODI2NDogMHhGRjI1LFxuICAgIDB4ODI2NTogMHhGRjI2LFxuICAgIDB4ODI2NjogMHhGRjI3LFxuICAgIDB4ODI2NzogMHhGRjI4LFxuICAgIDB4ODI2ODogMHhGRjI5LFxuICAgIDB4ODI2OTogMHhGRjJBLFxuICAgIDB4ODI2QTogMHhGRjJCLFxuICAgIDB4ODI2QjogMHhGRjJDLFxuICAgIDB4ODI2QzogMHhGRjJELFxuICAgIDB4ODI2RDogMHhGRjJFLFxuICAgIDB4ODI2RTogMHhGRjJGLFxuICAgIDB4ODI2RjogMHhGRjMwLFxuICAgIDB4ODI3MDogMHhGRjMxLFxuICAgIDB4ODI3MTogMHhGRjMyLFxuICAgIDB4ODI3MjogMHhGRjMzLFxuICAgIDB4ODI3MzogMHhGRjM0LFxuICAgIDB4ODI3NDogMHhGRjM1LFxuICAgIDB4ODI3NTogMHhGRjM2LFxuICAgIDB4ODI3NjogMHhGRjM3LFxuICAgIDB4ODI3NzogMHhGRjM4LFxuICAgIDB4ODI3ODogMHhGRjM5LFxuICAgIDB4ODI3OTogMHhGRjNBLFxuICAgIDB4ODI4MTogMHhGRjQxLFxuICAgIDB4ODI4MjogMHhGRjQyLFxuICAgIDB4ODI4MzogMHhGRjQzLFxuICAgIDB4ODI4NDogMHhGRjQ0LFxuICAgIDB4ODI4NTogMHhGRjQ1LFxuICAgIDB4ODI4NjogMHhGRjQ2LFxuICAgIDB4ODI4NzogMHhGRjQ3LFxuICAgIDB4ODI4ODogMHhGRjQ4LFxuICAgIDB4ODI4OTogMHhGRjQ5LFxuICAgIDB4ODI4QTogMHhGRjRBLFxuICAgIDB4ODI4QjogMHhGRjRCLFxuICAgIDB4ODI4QzogMHhGRjRDLFxuICAgIDB4ODI4RDogMHhGRjRELFxuICAgIDB4ODI4RTogMHhGRjRFLFxuICAgIDB4ODI4RjogMHhGRjRGLFxuICAgIDB4ODI5MDogMHhGRjUwLFxuICAgIDB4ODI5MTogMHhGRjUxLFxuICAgIDB4ODI5MjogMHhGRjUyLFxuICAgIDB4ODI5MzogMHhGRjUzLFxuICAgIDB4ODI5NDogMHhGRjU0LFxuICAgIDB4ODI5NTogMHhGRjU1LFxuICAgIDB4ODI5NjogMHhGRjU2LFxuICAgIDB4ODI5NzogMHhGRjU3LFxuICAgIDB4ODI5ODogMHhGRjU4LFxuICAgIDB4ODI5OTogMHhGRjU5LFxuICAgIDB4ODI5QTogMHhGRjVBLFxuICAgIDB4ODI5RjogMHgzMDQxLFxuICAgIDB4ODJBMDogMHgzMDQyLFxuICAgIDB4ODJBMTogMHgzMDQzLFxuICAgIDB4ODJBMjogMHgzMDQ0LFxuICAgIDB4ODJBMzogMHgzMDQ1LFxuICAgIDB4ODJBNDogMHgzMDQ2LFxuICAgIDB4ODJBNTogMHgzMDQ3LFxuICAgIDB4ODJBNjogMHgzMDQ4LFxuICAgIDB4ODJBNzogMHgzMDQ5LFxuICAgIDB4ODJBODogMHgzMDRBLFxuICAgIDB4ODJBOTogMHgzMDRCLFxuICAgIDB4ODJBQTogMHgzMDRDLFxuICAgIDB4ODJBQjogMHgzMDRELFxuICAgIDB4ODJBQzogMHgzMDRFLFxuICAgIDB4ODJBRDogMHgzMDRGLFxuICAgIDB4ODJBRTogMHgzMDUwLFxuICAgIDB4ODJBRjogMHgzMDUxLFxuICAgIDB4ODJCMDogMHgzMDUyLFxuICAgIDB4ODJCMTogMHgzMDUzLFxuICAgIDB4ODJCMjogMHgzMDU0LFxuICAgIDB4ODJCMzogMHgzMDU1LFxuICAgIDB4ODJCNDogMHgzMDU2LFxuICAgIDB4ODJCNTogMHgzMDU3LFxuICAgIDB4ODJCNjogMHgzMDU4LFxuICAgIDB4ODJCNzogMHgzMDU5LFxuICAgIDB4ODJCODogMHgzMDVBLFxuICAgIDB4ODJCOTogMHgzMDVCLFxuICAgIDB4ODJCQTogMHgzMDVDLFxuICAgIDB4ODJCQjogMHgzMDVELFxuICAgIDB4ODJCQzogMHgzMDVFLFxuICAgIDB4ODJCRDogMHgzMDVGLFxuICAgIDB4ODJCRTogMHgzMDYwLFxuICAgIDB4ODJCRjogMHgzMDYxLFxuICAgIDB4ODJDMDogMHgzMDYyLFxuICAgIDB4ODJDMTogMHgzMDYzLFxuICAgIDB4ODJDMjogMHgzMDY0LFxuICAgIDB4ODJDMzogMHgzMDY1LFxuICAgIDB4ODJDNDogMHgzMDY2LFxuICAgIDB4ODJDNTogMHgzMDY3LFxuICAgIDB4ODJDNjogMHgzMDY4LFxuICAgIDB4ODJDNzogMHgzMDY5LFxuICAgIDB4ODJDODogMHgzMDZBLFxuICAgIDB4ODJDOTogMHgzMDZCLFxuICAgIDB4ODJDQTogMHgzMDZDLFxuICAgIDB4ODJDQjogMHgzMDZELFxuICAgIDB4ODJDQzogMHgzMDZFLFxuICAgIDB4ODJDRDogMHgzMDZGLFxuICAgIDB4ODJDRTogMHgzMDcwLFxuICAgIDB4ODJDRjogMHgzMDcxLFxuICAgIDB4ODJEMDogMHgzMDcyLFxuICAgIDB4ODJEMTogMHgzMDczLFxuICAgIDB4ODJEMjogMHgzMDc0LFxuICAgIDB4ODJEMzogMHgzMDc1LFxuICAgIDB4ODJENDogMHgzMDc2LFxuICAgIDB4ODJENTogMHgzMDc3LFxuICAgIDB4ODJENjogMHgzMDc4LFxuICAgIDB4ODJENzogMHgzMDc5LFxuICAgIDB4ODJEODogMHgzMDdBLFxuICAgIDB4ODJEOTogMHgzMDdCLFxuICAgIDB4ODJEQTogMHgzMDdDLFxuICAgIDB4ODJEQjogMHgzMDdELFxuICAgIDB4ODJEQzogMHgzMDdFLFxuICAgIDB4ODJERDogMHgzMDdGLFxuICAgIDB4ODJERTogMHgzMDgwLFxuICAgIDB4ODJERjogMHgzMDgxLFxuICAgIDB4ODJFMDogMHgzMDgyLFxuICAgIDB4ODJFMTogMHgzMDgzLFxuICAgIDB4ODJFMjogMHgzMDg0LFxuICAgIDB4ODJFMzogMHgzMDg1LFxuICAgIDB4ODJFNDogMHgzMDg2LFxuICAgIDB4ODJFNTogMHgzMDg3LFxuICAgIDB4ODJFNjogMHgzMDg4LFxuICAgIDB4ODJFNzogMHgzMDg5LFxuICAgIDB4ODJFODogMHgzMDhBLFxuICAgIDB4ODJFOTogMHgzMDhCLFxuICAgIDB4ODJFQTogMHgzMDhDLFxuICAgIDB4ODJFQjogMHgzMDhELFxuICAgIDB4ODJFQzogMHgzMDhFLFxuICAgIDB4ODJFRDogMHgzMDhGLFxuICAgIDB4ODJFRTogMHgzMDkwLFxuICAgIDB4ODJFRjogMHgzMDkxLFxuICAgIDB4ODJGMDogMHgzMDkyLFxuICAgIDB4ODJGMTogMHgzMDkzLFxuICAgIDB4ODM0MDogMHgzMEExLFxuICAgIDB4ODM0MTogMHgzMEEyLFxuICAgIDB4ODM0MjogMHgzMEEzLFxuICAgIDB4ODM0MzogMHgzMEE0LFxuICAgIDB4ODM0NDogMHgzMEE1LFxuICAgIDB4ODM0NTogMHgzMEE2LFxuICAgIDB4ODM0NjogMHgzMEE3LFxuICAgIDB4ODM0NzogMHgzMEE4LFxuICAgIDB4ODM0ODogMHgzMEE5LFxuICAgIDB4ODM0OTogMHgzMEFBLFxuICAgIDB4ODM0QTogMHgzMEFCLFxuICAgIDB4ODM0QjogMHgzMEFDLFxuICAgIDB4ODM0QzogMHgzMEFELFxuICAgIDB4ODM0RDogMHgzMEFFLFxuICAgIDB4ODM0RTogMHgzMEFGLFxuICAgIDB4ODM0RjogMHgzMEIwLFxuICAgIDB4ODM1MDogMHgzMEIxLFxuICAgIDB4ODM1MTogMHgzMEIyLFxuICAgIDB4ODM1MjogMHgzMEIzLFxuICAgIDB4ODM1MzogMHgzMEI0LFxuICAgIDB4ODM1NDogMHgzMEI1LFxuICAgIDB4ODM1NTogMHgzMEI2LFxuICAgIDB4ODM1NjogMHgzMEI3LFxuICAgIDB4ODM1NzogMHgzMEI4LFxuICAgIDB4ODM1ODogMHgzMEI5LFxuICAgIDB4ODM1OTogMHgzMEJBLFxuICAgIDB4ODM1QTogMHgzMEJCLFxuICAgIDB4ODM1QjogMHgzMEJDLFxuICAgIDB4ODM1QzogMHgzMEJELFxuICAgIDB4ODM1RDogMHgzMEJFLFxuICAgIDB4ODM1RTogMHgzMEJGLFxuICAgIDB4ODM1RjogMHgzMEMwLFxuICAgIDB4ODM2MDogMHgzMEMxLFxuICAgIDB4ODM2MTogMHgzMEMyLFxuICAgIDB4ODM2MjogMHgzMEMzLFxuICAgIDB4ODM2MzogMHgzMEM0LFxuICAgIDB4ODM2NDogMHgzMEM1LFxuICAgIDB4ODM2NTogMHgzMEM2LFxuICAgIDB4ODM2NjogMHgzMEM3LFxuICAgIDB4ODM2NzogMHgzMEM4LFxuICAgIDB4ODM2ODogMHgzMEM5LFxuICAgIDB4ODM2OTogMHgzMENBLFxuICAgIDB4ODM2QTogMHgzMENCLFxuICAgIDB4ODM2QjogMHgzMENDLFxuICAgIDB4ODM2QzogMHgzMENELFxuICAgIDB4ODM2RDogMHgzMENFLFxuICAgIDB4ODM2RTogMHgzMENGLFxuICAgIDB4ODM2RjogMHgzMEQwLFxuICAgIDB4ODM3MDogMHgzMEQxLFxuICAgIDB4ODM3MTogMHgzMEQyLFxuICAgIDB4ODM3MjogMHgzMEQzLFxuICAgIDB4ODM3MzogMHgzMEQ0LFxuICAgIDB4ODM3NDogMHgzMEQ1LFxuICAgIDB4ODM3NTogMHgzMEQ2LFxuICAgIDB4ODM3NjogMHgzMEQ3LFxuICAgIDB4ODM3NzogMHgzMEQ4LFxuICAgIDB4ODM3ODogMHgzMEQ5LFxuICAgIDB4ODM3OTogMHgzMERBLFxuICAgIDB4ODM3QTogMHgzMERCLFxuICAgIDB4ODM3QjogMHgzMERDLFxuICAgIDB4ODM3QzogMHgzMERELFxuICAgIDB4ODM3RDogMHgzMERFLFxuICAgIDB4ODM3RTogMHgzMERGLFxuICAgIDB4ODM4MDogMHgzMEUwLFxuICAgIDB4ODM4MTogMHgzMEUxLFxuICAgIDB4ODM4MjogMHgzMEUyLFxuICAgIDB4ODM4MzogMHgzMEUzLFxuICAgIDB4ODM4NDogMHgzMEU0LFxuICAgIDB4ODM4NTogMHgzMEU1LFxuICAgIDB4ODM4NjogMHgzMEU2LFxuICAgIDB4ODM4NzogMHgzMEU3LFxuICAgIDB4ODM4ODogMHgzMEU4LFxuICAgIDB4ODM4OTogMHgzMEU5LFxuICAgIDB4ODM4QTogMHgzMEVBLFxuICAgIDB4ODM4QjogMHgzMEVCLFxuICAgIDB4ODM4QzogMHgzMEVDLFxuICAgIDB4ODM4RDogMHgzMEVELFxuICAgIDB4ODM4RTogMHgzMEVFLFxuICAgIDB4ODM4RjogMHgzMEVGLFxuICAgIDB4ODM5MDogMHgzMEYwLFxuICAgIDB4ODM5MTogMHgzMEYxLFxuICAgIDB4ODM5MjogMHgzMEYyLFxuICAgIDB4ODM5MzogMHgzMEYzLFxuICAgIDB4ODM5NDogMHgzMEY0LFxuICAgIDB4ODM5NTogMHgzMEY1LFxuICAgIDB4ODM5NjogMHgzMEY2LFxuICAgIDB4ODM5RjogMHgwMzkxLFxuICAgIDB4ODNBMDogMHgwMzkyLFxuICAgIDB4ODNBMTogMHgwMzkzLFxuICAgIDB4ODNBMjogMHgwMzk0LFxuICAgIDB4ODNBMzogMHgwMzk1LFxuICAgIDB4ODNBNDogMHgwMzk2LFxuICAgIDB4ODNBNTogMHgwMzk3LFxuICAgIDB4ODNBNjogMHgwMzk4LFxuICAgIDB4ODNBNzogMHgwMzk5LFxuICAgIDB4ODNBODogMHgwMzlBLFxuICAgIDB4ODNBOTogMHgwMzlCLFxuICAgIDB4ODNBQTogMHgwMzlDLFxuICAgIDB4ODNBQjogMHgwMzlELFxuICAgIDB4ODNBQzogMHgwMzlFLFxuICAgIDB4ODNBRDogMHgwMzlGLFxuICAgIDB4ODNBRTogMHgwM0EwLFxuICAgIDB4ODNBRjogMHgwM0ExLFxuICAgIDB4ODNCMDogMHgwM0EzLFxuICAgIDB4ODNCMTogMHgwM0E0LFxuICAgIDB4ODNCMjogMHgwM0E1LFxuICAgIDB4ODNCMzogMHgwM0E2LFxuICAgIDB4ODNCNDogMHgwM0E3LFxuICAgIDB4ODNCNTogMHgwM0E4LFxuICAgIDB4ODNCNjogMHgwM0E5LFxuICAgIDB4ODNCRjogMHgwM0IxLFxuICAgIDB4ODNDMDogMHgwM0IyLFxuICAgIDB4ODNDMTogMHgwM0IzLFxuICAgIDB4ODNDMjogMHgwM0I0LFxuICAgIDB4ODNDMzogMHgwM0I1LFxuICAgIDB4ODNDNDogMHgwM0I2LFxuICAgIDB4ODNDNTogMHgwM0I3LFxuICAgIDB4ODNDNjogMHgwM0I4LFxuICAgIDB4ODNDNzogMHgwM0I5LFxuICAgIDB4ODNDODogMHgwM0JBLFxuICAgIDB4ODNDOTogMHgwM0JCLFxuICAgIDB4ODNDQTogMHgwM0JDLFxuICAgIDB4ODNDQjogMHgwM0JELFxuICAgIDB4ODNDQzogMHgwM0JFLFxuICAgIDB4ODNDRDogMHgwM0JGLFxuICAgIDB4ODNDRTogMHgwM0MwLFxuICAgIDB4ODNDRjogMHgwM0MxLFxuICAgIDB4ODNEMDogMHgwM0MzLFxuICAgIDB4ODNEMTogMHgwM0M0LFxuICAgIDB4ODNEMjogMHgwM0M1LFxuICAgIDB4ODNEMzogMHgwM0M2LFxuICAgIDB4ODNENDogMHgwM0M3LFxuICAgIDB4ODNENTogMHgwM0M4LFxuICAgIDB4ODNENjogMHgwM0M5LFxuICAgIDB4ODQ0MDogMHgwNDEwLFxuICAgIDB4ODQ0MTogMHgwNDExLFxuICAgIDB4ODQ0MjogMHgwNDEyLFxuICAgIDB4ODQ0MzogMHgwNDEzLFxuICAgIDB4ODQ0NDogMHgwNDE0LFxuICAgIDB4ODQ0NTogMHgwNDE1LFxuICAgIDB4ODQ0NjogMHgwNDAxLFxuICAgIDB4ODQ0NzogMHgwNDE2LFxuICAgIDB4ODQ0ODogMHgwNDE3LFxuICAgIDB4ODQ0OTogMHgwNDE4LFxuICAgIDB4ODQ0QTogMHgwNDE5LFxuICAgIDB4ODQ0QjogMHgwNDFBLFxuICAgIDB4ODQ0QzogMHgwNDFCLFxuICAgIDB4ODQ0RDogMHgwNDFDLFxuICAgIDB4ODQ0RTogMHgwNDFELFxuICAgIDB4ODQ0RjogMHgwNDFFLFxuICAgIDB4ODQ1MDogMHgwNDFGLFxuICAgIDB4ODQ1MTogMHgwNDIwLFxuICAgIDB4ODQ1MjogMHgwNDIxLFxuICAgIDB4ODQ1MzogMHgwNDIyLFxuICAgIDB4ODQ1NDogMHgwNDIzLFxuICAgIDB4ODQ1NTogMHgwNDI0LFxuICAgIDB4ODQ1NjogMHgwNDI1LFxuICAgIDB4ODQ1NzogMHgwNDI2LFxuICAgIDB4ODQ1ODogMHgwNDI3LFxuICAgIDB4ODQ1OTogMHgwNDI4LFxuICAgIDB4ODQ1QTogMHgwNDI5LFxuICAgIDB4ODQ1QjogMHgwNDJBLFxuICAgIDB4ODQ1QzogMHgwNDJCLFxuICAgIDB4ODQ1RDogMHgwNDJDLFxuICAgIDB4ODQ1RTogMHgwNDJELFxuICAgIDB4ODQ1RjogMHgwNDJFLFxuICAgIDB4ODQ2MDogMHgwNDJGLFxuICAgIDB4ODQ3MDogMHgwNDMwLFxuICAgIDB4ODQ3MTogMHgwNDMxLFxuICAgIDB4ODQ3MjogMHgwNDMyLFxuICAgIDB4ODQ3MzogMHgwNDMzLFxuICAgIDB4ODQ3NDogMHgwNDM0LFxuICAgIDB4ODQ3NTogMHgwNDM1LFxuICAgIDB4ODQ3NjogMHgwNDUxLFxuICAgIDB4ODQ3NzogMHgwNDM2LFxuICAgIDB4ODQ3ODogMHgwNDM3LFxuICAgIDB4ODQ3OTogMHgwNDM4LFxuICAgIDB4ODQ3QTogMHgwNDM5LFxuICAgIDB4ODQ3QjogMHgwNDNBLFxuICAgIDB4ODQ3QzogMHgwNDNCLFxuICAgIDB4ODQ3RDogMHgwNDNDLFxuICAgIDB4ODQ3RTogMHgwNDNELFxuICAgIDB4ODQ4MDogMHgwNDNFLFxuICAgIDB4ODQ4MTogMHgwNDNGLFxuICAgIDB4ODQ4MjogMHgwNDQwLFxuICAgIDB4ODQ4MzogMHgwNDQxLFxuICAgIDB4ODQ4NDogMHgwNDQyLFxuICAgIDB4ODQ4NTogMHgwNDQzLFxuICAgIDB4ODQ4NjogMHgwNDQ0LFxuICAgIDB4ODQ4NzogMHgwNDQ1LFxuICAgIDB4ODQ4ODogMHgwNDQ2LFxuICAgIDB4ODQ4OTogMHgwNDQ3LFxuICAgIDB4ODQ4QTogMHgwNDQ4LFxuICAgIDB4ODQ4QjogMHgwNDQ5LFxuICAgIDB4ODQ4QzogMHgwNDRBLFxuICAgIDB4ODQ4RDogMHgwNDRCLFxuICAgIDB4ODQ4RTogMHgwNDRDLFxuICAgIDB4ODQ4RjogMHgwNDRELFxuICAgIDB4ODQ5MDogMHgwNDRFLFxuICAgIDB4ODQ5MTogMHgwNDRGLFxuICAgIDB4ODQ5RjogMHgyNTAwLFxuICAgIDB4ODRBMDogMHgyNTAyLFxuICAgIDB4ODRBMTogMHgyNTBDLFxuICAgIDB4ODRBMjogMHgyNTEwLFxuICAgIDB4ODRBMzogMHgyNTE4LFxuICAgIDB4ODRBNDogMHgyNTE0LFxuICAgIDB4ODRBNTogMHgyNTFDLFxuICAgIDB4ODRBNjogMHgyNTJDLFxuICAgIDB4ODRBNzogMHgyNTI0LFxuICAgIDB4ODRBODogMHgyNTM0LFxuICAgIDB4ODRBOTogMHgyNTNDLFxuICAgIDB4ODRBQTogMHgyNTAxLFxuICAgIDB4ODRBQjogMHgyNTAzLFxuICAgIDB4ODRBQzogMHgyNTBGLFxuICAgIDB4ODRBRDogMHgyNTEzLFxuICAgIDB4ODRBRTogMHgyNTFCLFxuICAgIDB4ODRBRjogMHgyNTE3LFxuICAgIDB4ODRCMDogMHgyNTIzLFxuICAgIDB4ODRCMTogMHgyNTMzLFxuICAgIDB4ODRCMjogMHgyNTJCLFxuICAgIDB4ODRCMzogMHgyNTNCLFxuICAgIDB4ODRCNDogMHgyNTRCLFxuICAgIDB4ODRCNTogMHgyNTIwLFxuICAgIDB4ODRCNjogMHgyNTJGLFxuICAgIDB4ODRCNzogMHgyNTI4LFxuICAgIDB4ODRCODogMHgyNTM3LFxuICAgIDB4ODRCOTogMHgyNTNGLFxuICAgIDB4ODRCQTogMHgyNTFELFxuICAgIDB4ODRCQjogMHgyNTMwLFxuICAgIDB4ODRCQzogMHgyNTI1LFxuICAgIDB4ODRCRDogMHgyNTM4LFxuICAgIDB4ODRCRTogMHgyNTQyLFxuICAgIDB4ODg5RjogMHg0RTlDLFxuICAgIDB4ODhBMDogMHg1NTE2LFxuICAgIDB4ODhBMTogMHg1QTAzLFxuICAgIDB4ODhBMjogMHg5NjNGLFxuICAgIDB4ODhBMzogMHg1NEMwLFxuICAgIDB4ODhBNDogMHg2MTFCLFxuICAgIDB4ODhBNTogMHg2MzI4LFxuICAgIDB4ODhBNjogMHg1OUY2LFxuICAgIDB4ODhBNzogMHg5MDIyLFxuICAgIDB4ODhBODogMHg4NDc1LFxuICAgIDB4ODhBOTogMHg4MzFDLFxuICAgIDB4ODhBQTogMHg3QTUwLFxuICAgIDB4ODhBQjogMHg2MEFBLFxuICAgIDB4ODhBQzogMHg2M0UxLFxuICAgIDB4ODhBRDogMHg2RTI1LFxuICAgIDB4ODhBRTogMHg2NUVELFxuICAgIDB4ODhBRjogMHg4NDY2LFxuICAgIDB4ODhCMDogMHg4MkE2LFxuICAgIDB4ODhCMTogMHg5QkY1LFxuICAgIDB4ODhCMjogMHg2ODkzLFxuICAgIDB4ODhCMzogMHg1NzI3LFxuICAgIDB4ODhCNDogMHg2NUExLFxuICAgIDB4ODhCNTogMHg2MjcxLFxuICAgIDB4ODhCNjogMHg1QjlCLFxuICAgIDB4ODhCNzogMHg1OUQwLFxuICAgIDB4ODhCODogMHg4NjdCLFxuICAgIDB4ODhCOTogMHg5OEY0LFxuICAgIDB4ODhCQTogMHg3RDYyLFxuICAgIDB4ODhCQjogMHg3REJFLFxuICAgIDB4ODhCQzogMHg5QjhFLFxuICAgIDB4ODhCRDogMHg2MjE2LFxuICAgIDB4ODhCRTogMHg3QzlGLFxuICAgIDB4ODhCRjogMHg4OEI3LFxuICAgIDB4ODhDMDogMHg1Qjg5LFxuICAgIDB4ODhDMTogMHg1RUI1LFxuICAgIDB4ODhDMjogMHg2MzA5LFxuICAgIDB4ODhDMzogMHg2Njk3LFxuICAgIDB4ODhDNDogMHg2ODQ4LFxuICAgIDB4ODhDNTogMHg5NUM3LFxuICAgIDB4ODhDNjogMHg5NzhELFxuICAgIDB4ODhDNzogMHg2NzRGLFxuICAgIDB4ODhDODogMHg0RUU1LFxuICAgIDB4ODhDOTogMHg0RjBBLFxuICAgIDB4ODhDQTogMHg0RjRELFxuICAgIDB4ODhDQjogMHg0RjlELFxuICAgIDB4ODhDQzogMHg1MDQ5LFxuICAgIDB4ODhDRDogMHg1NkYyLFxuICAgIDB4ODhDRTogMHg1OTM3LFxuICAgIDB4ODhDRjogMHg1OUQ0LFxuICAgIDB4ODhEMDogMHg1QTAxLFxuICAgIDB4ODhEMTogMHg1QzA5LFxuICAgIDB4ODhEMjogMHg2MERGLFxuICAgIDB4ODhEMzogMHg2MTBGLFxuICAgIDB4ODhENDogMHg2MTcwLFxuICAgIDB4ODhENTogMHg2NjEzLFxuICAgIDB4ODhENjogMHg2OTA1LFxuICAgIDB4ODhENzogMHg3MEJBLFxuICAgIDB4ODhEODogMHg3NTRGLFxuICAgIDB4ODhEOTogMHg3NTcwLFxuICAgIDB4ODhEQTogMHg3OUZCLFxuICAgIDB4ODhEQjogMHg3REFELFxuICAgIDB4ODhEQzogMHg3REVGLFxuICAgIDB4ODhERDogMHg4MEMzLFxuICAgIDB4ODhERTogMHg4NDBFLFxuICAgIDB4ODhERjogMHg4ODYzLFxuICAgIDB4ODhFMDogMHg4QjAyLFxuICAgIDB4ODhFMTogMHg5MDU1LFxuICAgIDB4ODhFMjogMHg5MDdBLFxuICAgIDB4ODhFMzogMHg1MzNCLFxuICAgIDB4ODhFNDogMHg0RTk1LFxuICAgIDB4ODhFNTogMHg0RUE1LFxuICAgIDB4ODhFNjogMHg1N0RGLFxuICAgIDB4ODhFNzogMHg4MEIyLFxuICAgIDB4ODhFODogMHg5MEMxLFxuICAgIDB4ODhFOTogMHg3OEVGLFxuICAgIDB4ODhFQTogMHg0RTAwLFxuICAgIDB4ODhFQjogMHg1OEYxLFxuICAgIDB4ODhFQzogMHg2RUEyLFxuICAgIDB4ODhFRDogMHg5MDM4LFxuICAgIDB4ODhFRTogMHg3QTMyLFxuICAgIDB4ODhFRjogMHg4MzI4LFxuICAgIDB4ODhGMDogMHg4MjhCLFxuICAgIDB4ODhGMTogMHg5QzJGLFxuICAgIDB4ODhGMjogMHg1MTQxLFxuICAgIDB4ODhGMzogMHg1MzcwLFxuICAgIDB4ODhGNDogMHg1NEJELFxuICAgIDB4ODhGNTogMHg1NEUxLFxuICAgIDB4ODhGNjogMHg1NkUwLFxuICAgIDB4ODhGNzogMHg1OUZCLFxuICAgIDB4ODhGODogMHg1RjE1LFxuICAgIDB4ODhGOTogMHg5OEYyLFxuICAgIDB4ODhGQTogMHg2REVCLFxuICAgIDB4ODhGQjogMHg4MEU0LFxuICAgIDB4ODhGQzogMHg4NTJELFxuICAgIDB4ODk0MDogMHg5NjYyLFxuICAgIDB4ODk0MTogMHg5NjcwLFxuICAgIDB4ODk0MjogMHg5NkEwLFxuICAgIDB4ODk0MzogMHg5N0ZCLFxuICAgIDB4ODk0NDogMHg1NDBCLFxuICAgIDB4ODk0NTogMHg1M0YzLFxuICAgIDB4ODk0NjogMHg1Qjg3LFxuICAgIDB4ODk0NzogMHg3MENGLFxuICAgIDB4ODk0ODogMHg3RkJELFxuICAgIDB4ODk0OTogMHg4RkMyLFxuICAgIDB4ODk0QTogMHg5NkU4LFxuICAgIDB4ODk0QjogMHg1MzZGLFxuICAgIDB4ODk0QzogMHg5RDVDLFxuICAgIDB4ODk0RDogMHg3QUJBLFxuICAgIDB4ODk0RTogMHg0RTExLFxuICAgIDB4ODk0RjogMHg3ODkzLFxuICAgIDB4ODk1MDogMHg4MUZDLFxuICAgIDB4ODk1MTogMHg2RTI2LFxuICAgIDB4ODk1MjogMHg1NjE4LFxuICAgIDB4ODk1MzogMHg1NTA0LFxuICAgIDB4ODk1NDogMHg2QjFELFxuICAgIDB4ODk1NTogMHg4NTFBLFxuICAgIDB4ODk1NjogMHg5QzNCLFxuICAgIDB4ODk1NzogMHg1OUU1LFxuICAgIDB4ODk1ODogMHg1M0E5LFxuICAgIDB4ODk1OTogMHg2RDY2LFxuICAgIDB4ODk1QTogMHg3NERDLFxuICAgIDB4ODk1QjogMHg5NThGLFxuICAgIDB4ODk1QzogMHg1NjQyLFxuICAgIDB4ODk1RDogMHg0RTkxLFxuICAgIDB4ODk1RTogMHg5MDRCLFxuICAgIDB4ODk1RjogMHg5NkYyLFxuICAgIDB4ODk2MDogMHg4MzRGLFxuICAgIDB4ODk2MTogMHg5OTBDLFxuICAgIDB4ODk2MjogMHg1M0UxLFxuICAgIDB4ODk2MzogMHg1NUI2LFxuICAgIDB4ODk2NDogMHg1QjMwLFxuICAgIDB4ODk2NTogMHg1RjcxLFxuICAgIDB4ODk2NjogMHg2NjIwLFxuICAgIDB4ODk2NzogMHg2NkYzLFxuICAgIDB4ODk2ODogMHg2ODA0LFxuICAgIDB4ODk2OTogMHg2QzM4LFxuICAgIDB4ODk2QTogMHg2Q0YzLFxuICAgIDB4ODk2QjogMHg2RDI5LFxuICAgIDB4ODk2QzogMHg3NDVCLFxuICAgIDB4ODk2RDogMHg3NkM4LFxuICAgIDB4ODk2RTogMHg3QTRFLFxuICAgIDB4ODk2RjogMHg5ODM0LFxuICAgIDB4ODk3MDogMHg4MkYxLFxuICAgIDB4ODk3MTogMHg4ODVCLFxuICAgIDB4ODk3MjogMHg4QTYwLFxuICAgIDB4ODk3MzogMHg5MkVELFxuICAgIDB4ODk3NDogMHg2REIyLFxuICAgIDB4ODk3NTogMHg3NUFCLFxuICAgIDB4ODk3NjogMHg3NkNBLFxuICAgIDB4ODk3NzogMHg5OUM1LFxuICAgIDB4ODk3ODogMHg2MEE2LFxuICAgIDB4ODk3OTogMHg4QjAxLFxuICAgIDB4ODk3QTogMHg4RDhBLFxuICAgIDB4ODk3QjogMHg5NUIyLFxuICAgIDB4ODk3QzogMHg2OThFLFxuICAgIDB4ODk3RDogMHg1M0FELFxuICAgIDB4ODk3RTogMHg1MTg2LFxuICAgIDB4ODk4MDogMHg1NzEyLFxuICAgIDB4ODk4MTogMHg1ODMwLFxuICAgIDB4ODk4MjogMHg1OTQ0LFxuICAgIDB4ODk4MzogMHg1QkI0LFxuICAgIDB4ODk4NDogMHg1RUY2LFxuICAgIDB4ODk4NTogMHg2MDI4LFxuICAgIDB4ODk4NjogMHg2M0E5LFxuICAgIDB4ODk4NzogMHg2M0Y0LFxuICAgIDB4ODk4ODogMHg2Q0JGLFxuICAgIDB4ODk4OTogMHg2RjE0LFxuICAgIDB4ODk4QTogMHg3MDhFLFxuICAgIDB4ODk4QjogMHg3MTE0LFxuICAgIDB4ODk4QzogMHg3MTU5LFxuICAgIDB4ODk4RDogMHg3MUQ1LFxuICAgIDB4ODk4RTogMHg3MzNGLFxuICAgIDB4ODk4RjogMHg3RTAxLFxuICAgIDB4ODk5MDogMHg4Mjc2LFxuICAgIDB4ODk5MTogMHg4MkQxLFxuICAgIDB4ODk5MjogMHg4NTk3LFxuICAgIDB4ODk5MzogMHg5MDYwLFxuICAgIDB4ODk5NDogMHg5MjVCLFxuICAgIDB4ODk5NTogMHg5RDFCLFxuICAgIDB4ODk5NjogMHg1ODY5LFxuICAgIDB4ODk5NzogMHg2NUJDLFxuICAgIDB4ODk5ODogMHg2QzVBLFxuICAgIDB4ODk5OTogMHg3NTI1LFxuICAgIDB4ODk5QTogMHg1MUY5LFxuICAgIDB4ODk5QjogMHg1OTJFLFxuICAgIDB4ODk5QzogMHg1OTY1LFxuICAgIDB4ODk5RDogMHg1RjgwLFxuICAgIDB4ODk5RTogMHg1RkRDLFxuICAgIDB4ODk5RjogMHg2MkJDLFxuICAgIDB4ODlBMDogMHg2NUZBLFxuICAgIDB4ODlBMTogMHg2QTJBLFxuICAgIDB4ODlBMjogMHg2QjI3LFxuICAgIDB4ODlBMzogMHg2QkI0LFxuICAgIDB4ODlBNDogMHg3MzhCLFxuICAgIDB4ODlBNTogMHg3RkMxLFxuICAgIDB4ODlBNjogMHg4OTU2LFxuICAgIDB4ODlBNzogMHg5RDJDLFxuICAgIDB4ODlBODogMHg5RDBFLFxuICAgIDB4ODlBOTogMHg5RUM0LFxuICAgIDB4ODlBQTogMHg1Q0ExLFxuICAgIDB4ODlBQjogMHg2Qzk2LFxuICAgIDB4ODlBQzogMHg4MzdCLFxuICAgIDB4ODlBRDogMHg1MTA0LFxuICAgIDB4ODlBRTogMHg1QzRCLFxuICAgIDB4ODlBRjogMHg2MUI2LFxuICAgIDB4ODlCMDogMHg4MUM2LFxuICAgIDB4ODlCMTogMHg2ODc2LFxuICAgIDB4ODlCMjogMHg3MjYxLFxuICAgIDB4ODlCMzogMHg0RTU5LFxuICAgIDB4ODlCNDogMHg0RkZBLFxuICAgIDB4ODlCNTogMHg1Mzc4LFxuICAgIDB4ODlCNjogMHg2MDY5LFxuICAgIDB4ODlCNzogMHg2RTI5LFxuICAgIDB4ODlCODogMHg3QTRGLFxuICAgIDB4ODlCOTogMHg5N0YzLFxuICAgIDB4ODlCQTogMHg0RTBCLFxuICAgIDB4ODlCQjogMHg1MzE2LFxuICAgIDB4ODlCQzogMHg0RUVFLFxuICAgIDB4ODlCRDogMHg0RjU1LFxuICAgIDB4ODlCRTogMHg0RjNELFxuICAgIDB4ODlCRjogMHg0RkExLFxuICAgIDB4ODlDMDogMHg0RjczLFxuICAgIDB4ODlDMTogMHg1MkEwLFxuICAgIDB4ODlDMjogMHg1M0VGLFxuICAgIDB4ODlDMzogMHg1NjA5LFxuICAgIDB4ODlDNDogMHg1OTBGLFxuICAgIDB4ODlDNTogMHg1QUMxLFxuICAgIDB4ODlDNjogMHg1QkI2LFxuICAgIDB4ODlDNzogMHg1QkUxLFxuICAgIDB4ODlDODogMHg3OUQxLFxuICAgIDB4ODlDOTogMHg2Njg3LFxuICAgIDB4ODlDQTogMHg2NzlDLFxuICAgIDB4ODlDQjogMHg2N0I2LFxuICAgIDB4ODlDQzogMHg2QjRDLFxuICAgIDB4ODlDRDogMHg2Q0IzLFxuICAgIDB4ODlDRTogMHg3MDZCLFxuICAgIDB4ODlDRjogMHg3M0MyLFxuICAgIDB4ODlEMDogMHg3OThELFxuICAgIDB4ODlEMTogMHg3OUJFLFxuICAgIDB4ODlEMjogMHg3QTNDLFxuICAgIDB4ODlEMzogMHg3Qjg3LFxuICAgIDB4ODlENDogMHg4MkIxLFxuICAgIDB4ODlENTogMHg4MkRCLFxuICAgIDB4ODlENjogMHg4MzA0LFxuICAgIDB4ODlENzogMHg4Mzc3LFxuICAgIDB4ODlEODogMHg4M0VGLFxuICAgIDB4ODlEOTogMHg4M0QzLFxuICAgIDB4ODlEQTogMHg4NzY2LFxuICAgIDB4ODlEQjogMHg4QUIyLFxuICAgIDB4ODlEQzogMHg1NjI5LFxuICAgIDB4ODlERDogMHg4Q0E4LFxuICAgIDB4ODlERTogMHg4RkU2LFxuICAgIDB4ODlERjogMHg5MDRFLFxuICAgIDB4ODlFMDogMHg5NzFFLFxuICAgIDB4ODlFMTogMHg4NjhBLFxuICAgIDB4ODlFMjogMHg0RkM0LFxuICAgIDB4ODlFMzogMHg1Q0U4LFxuICAgIDB4ODlFNDogMHg2MjExLFxuICAgIDB4ODlFNTogMHg3MjU5LFxuICAgIDB4ODlFNjogMHg3NTNCLFxuICAgIDB4ODlFNzogMHg4MUU1LFxuICAgIDB4ODlFODogMHg4MkJELFxuICAgIDB4ODlFOTogMHg4NkZFLFxuICAgIDB4ODlFQTogMHg4Q0MwLFxuICAgIDB4ODlFQjogMHg5NkM1LFxuICAgIDB4ODlFQzogMHg5OTEzLFxuICAgIDB4ODlFRDogMHg5OUQ1LFxuICAgIDB4ODlFRTogMHg0RUNCLFxuICAgIDB4ODlFRjogMHg0RjFBLFxuICAgIDB4ODlGMDogMHg4OUUzLFxuICAgIDB4ODlGMTogMHg1NkRFLFxuICAgIDB4ODlGMjogMHg1ODRBLFxuICAgIDB4ODlGMzogMHg1OENBLFxuICAgIDB4ODlGNDogMHg1RUZCLFxuICAgIDB4ODlGNTogMHg1RkVCLFxuICAgIDB4ODlGNjogMHg2MDJBLFxuICAgIDB4ODlGNzogMHg2MDk0LFxuICAgIDB4ODlGODogMHg2MDYyLFxuICAgIDB4ODlGOTogMHg2MUQwLFxuICAgIDB4ODlGQTogMHg2MjEyLFxuICAgIDB4ODlGQjogMHg2MkQwLFxuICAgIDB4ODlGQzogMHg2NTM5LFxuICAgIDB4OEE0MDogMHg5QjQxLFxuICAgIDB4OEE0MTogMHg2NjY2LFxuICAgIDB4OEE0MjogMHg2OEIwLFxuICAgIDB4OEE0MzogMHg2RDc3LFxuICAgIDB4OEE0NDogMHg3MDcwLFxuICAgIDB4OEE0NTogMHg3NTRDLFxuICAgIDB4OEE0NjogMHg3Njg2LFxuICAgIDB4OEE0NzogMHg3RDc1LFxuICAgIDB4OEE0ODogMHg4MkE1LFxuICAgIDB4OEE0OTogMHg4N0Y5LFxuICAgIDB4OEE0QTogMHg5NThCLFxuICAgIDB4OEE0QjogMHg5NjhFLFxuICAgIDB4OEE0QzogMHg4QzlELFxuICAgIDB4OEE0RDogMHg1MUYxLFxuICAgIDB4OEE0RTogMHg1MkJFLFxuICAgIDB4OEE0RjogMHg1OTE2LFxuICAgIDB4OEE1MDogMHg1NEIzLFxuICAgIDB4OEE1MTogMHg1QkIzLFxuICAgIDB4OEE1MjogMHg1RDE2LFxuICAgIDB4OEE1MzogMHg2MTY4LFxuICAgIDB4OEE1NDogMHg2OTgyLFxuICAgIDB4OEE1NTogMHg2REFGLFxuICAgIDB4OEE1NjogMHg3ODhELFxuICAgIDB4OEE1NzogMHg4NENCLFxuICAgIDB4OEE1ODogMHg4ODU3LFxuICAgIDB4OEE1OTogMHg4QTcyLFxuICAgIDB4OEE1QTogMHg5M0E3LFxuICAgIDB4OEE1QjogMHg5QUI4LFxuICAgIDB4OEE1QzogMHg2RDZDLFxuICAgIDB4OEE1RDogMHg5OUE4LFxuICAgIDB4OEE1RTogMHg4NkQ5LFxuICAgIDB4OEE1RjogMHg1N0EzLFxuICAgIDB4OEE2MDogMHg2N0ZGLFxuICAgIDB4OEE2MTogMHg4NkNFLFxuICAgIDB4OEE2MjogMHg5MjBFLFxuICAgIDB4OEE2MzogMHg1MjgzLFxuICAgIDB4OEE2NDogMHg1Njg3LFxuICAgIDB4OEE2NTogMHg1NDA0LFxuICAgIDB4OEE2NjogMHg1RUQzLFxuICAgIDB4OEE2NzogMHg2MkUxLFxuICAgIDB4OEE2ODogMHg2NEI5LFxuICAgIDB4OEE2OTogMHg2ODNDLFxuICAgIDB4OEE2QTogMHg2ODM4LFxuICAgIDB4OEE2QjogMHg2QkJCLFxuICAgIDB4OEE2QzogMHg3MzcyLFxuICAgIDB4OEE2RDogMHg3OEJBLFxuICAgIDB4OEE2RTogMHg3QTZCLFxuICAgIDB4OEE2RjogMHg4OTlBLFxuICAgIDB4OEE3MDogMHg4OUQyLFxuICAgIDB4OEE3MTogMHg4RDZCLFxuICAgIDB4OEE3MjogMHg4RjAzLFxuICAgIDB4OEE3MzogMHg5MEVELFxuICAgIDB4OEE3NDogMHg5NUEzLFxuICAgIDB4OEE3NTogMHg5Njk0LFxuICAgIDB4OEE3NjogMHg5NzY5LFxuICAgIDB4OEE3NzogMHg1QjY2LFxuICAgIDB4OEE3ODogMHg1Q0IzLFxuICAgIDB4OEE3OTogMHg2OTdELFxuICAgIDB4OEE3QTogMHg5ODRELFxuICAgIDB4OEE3QjogMHg5ODRFLFxuICAgIDB4OEE3QzogMHg2MzlCLFxuICAgIDB4OEE3RDogMHg3QjIwLFxuICAgIDB4OEE3RTogMHg2QTJCLFxuICAgIDB4OEE4MDogMHg2QTdGLFxuICAgIDB4OEE4MTogMHg2OEI2LFxuICAgIDB4OEE4MjogMHg5QzBELFxuICAgIDB4OEE4MzogMHg2RjVGLFxuICAgIDB4OEE4NDogMHg1MjcyLFxuICAgIDB4OEE4NTogMHg1NTlELFxuICAgIDB4OEE4NjogMHg2MDcwLFxuICAgIDB4OEE4NzogMHg2MkVDLFxuICAgIDB4OEE4ODogMHg2RDNCLFxuICAgIDB4OEE4OTogMHg2RTA3LFxuICAgIDB4OEE4QTogMHg2RUQxLFxuICAgIDB4OEE4QjogMHg4NDVCLFxuICAgIDB4OEE4QzogMHg4OTEwLFxuICAgIDB4OEE4RDogMHg4RjQ0LFxuICAgIDB4OEE4RTogMHg0RTE0LFxuICAgIDB4OEE4RjogMHg5QzM5LFxuICAgIDB4OEE5MDogMHg1M0Y2LFxuICAgIDB4OEE5MTogMHg2OTFCLFxuICAgIDB4OEE5MjogMHg2QTNBLFxuICAgIDB4OEE5MzogMHg5Nzg0LFxuICAgIDB4OEE5NDogMHg2ODJBLFxuICAgIDB4OEE5NTogMHg1MTVDLFxuICAgIDB4OEE5NjogMHg3QUMzLFxuICAgIDB4OEE5NzogMHg4NEIyLFxuICAgIDB4OEE5ODogMHg5MURDLFxuICAgIDB4OEE5OTogMHg5MzhDLFxuICAgIDB4OEE5QTogMHg1NjVCLFxuICAgIDB4OEE5QjogMHg5RDI4LFxuICAgIDB4OEE5QzogMHg2ODIyLFxuICAgIDB4OEE5RDogMHg4MzA1LFxuICAgIDB4OEE5RTogMHg4NDMxLFxuICAgIDB4OEE5RjogMHg3Q0E1LFxuICAgIDB4OEFBMDogMHg1MjA4LFxuICAgIDB4OEFBMTogMHg4MkM1LFxuICAgIDB4OEFBMjogMHg3NEU2LFxuICAgIDB4OEFBMzogMHg0RTdFLFxuICAgIDB4OEFBNDogMHg0RjgzLFxuICAgIDB4OEFBNTogMHg1MUEwLFxuICAgIDB4OEFBNjogMHg1QkQyLFxuICAgIDB4OEFBNzogMHg1MjBBLFxuICAgIDB4OEFBODogMHg1MkQ4LFxuICAgIDB4OEFBOTogMHg1MkU3LFxuICAgIDB4OEFBQTogMHg1REZCLFxuICAgIDB4OEFBQjogMHg1NTlBLFxuICAgIDB4OEFBQzogMHg1ODJBLFxuICAgIDB4OEFBRDogMHg1OUU2LFxuICAgIDB4OEFBRTogMHg1QjhDLFxuICAgIDB4OEFBRjogMHg1Qjk4LFxuICAgIDB4OEFCMDogMHg1QkRCLFxuICAgIDB4OEFCMTogMHg1RTcyLFxuICAgIDB4OEFCMjogMHg1RTc5LFxuICAgIDB4OEFCMzogMHg2MEEzLFxuICAgIDB4OEFCNDogMHg2MTFGLFxuICAgIDB4OEFCNTogMHg2MTYzLFxuICAgIDB4OEFCNjogMHg2MUJFLFxuICAgIDB4OEFCNzogMHg2M0RCLFxuICAgIDB4OEFCODogMHg2NTYyLFxuICAgIDB4OEFCOTogMHg2N0QxLFxuICAgIDB4OEFCQTogMHg2ODUzLFxuICAgIDB4OEFCQjogMHg2OEZBLFxuICAgIDB4OEFCQzogMHg2QjNFLFxuICAgIDB4OEFCRDogMHg2QjUzLFxuICAgIDB4OEFCRTogMHg2QzU3LFxuICAgIDB4OEFCRjogMHg2RjIyLFxuICAgIDB4OEFDMDogMHg2Rjk3LFxuICAgIDB4OEFDMTogMHg2RjQ1LFxuICAgIDB4OEFDMjogMHg3NEIwLFxuICAgIDB4OEFDMzogMHg3NTE4LFxuICAgIDB4OEFDNDogMHg3NkUzLFxuICAgIDB4OEFDNTogMHg3NzBCLFxuICAgIDB4OEFDNjogMHg3QUZGLFxuICAgIDB4OEFDNzogMHg3QkExLFxuICAgIDB4OEFDODogMHg3QzIxLFxuICAgIDB4OEFDOTogMHg3REU5LFxuICAgIDB4OEFDQTogMHg3RjM2LFxuICAgIDB4OEFDQjogMHg3RkYwLFxuICAgIDB4OEFDQzogMHg4MDlELFxuICAgIDB4OEFDRDogMHg4MjY2LFxuICAgIDB4OEFDRTogMHg4MzlFLFxuICAgIDB4OEFDRjogMHg4OUIzLFxuICAgIDB4OEFEMDogMHg4QUNDLFxuICAgIDB4OEFEMTogMHg4Q0FCLFxuICAgIDB4OEFEMjogMHg5MDg0LFxuICAgIDB4OEFEMzogMHg5NDUxLFxuICAgIDB4OEFENDogMHg5NTkzLFxuICAgIDB4OEFENTogMHg5NTkxLFxuICAgIDB4OEFENjogMHg5NUEyLFxuICAgIDB4OEFENzogMHg5NjY1LFxuICAgIDB4OEFEODogMHg5N0QzLFxuICAgIDB4OEFEOTogMHg5OTI4LFxuICAgIDB4OEFEQTogMHg4MjE4LFxuICAgIDB4OEFEQjogMHg0RTM4LFxuICAgIDB4OEFEQzogMHg1NDJCLFxuICAgIDB4OEFERDogMHg1Q0I4LFxuICAgIDB4OEFERTogMHg1RENDLFxuICAgIDB4OEFERjogMHg3M0E5LFxuICAgIDB4OEFFMDogMHg3NjRDLFxuICAgIDB4OEFFMTogMHg3NzNDLFxuICAgIDB4OEFFMjogMHg1Q0E5LFxuICAgIDB4OEFFMzogMHg3RkVCLFxuICAgIDB4OEFFNDogMHg4RDBCLFxuICAgIDB4OEFFNTogMHg5NkMxLFxuICAgIDB4OEFFNjogMHg5ODExLFxuICAgIDB4OEFFNzogMHg5ODU0LFxuICAgIDB4OEFFODogMHg5ODU4LFxuICAgIDB4OEFFOTogMHg0RjAxLFxuICAgIDB4OEFFQTogMHg0RjBFLFxuICAgIDB4OEFFQjogMHg1MzcxLFxuICAgIDB4OEFFQzogMHg1NTlDLFxuICAgIDB4OEFFRDogMHg1NjY4LFxuICAgIDB4OEFFRTogMHg1N0ZBLFxuICAgIDB4OEFFRjogMHg1OTQ3LFxuICAgIDB4OEFGMDogMHg1QjA5LFxuICAgIDB4OEFGMTogMHg1QkM0LFxuICAgIDB4OEFGMjogMHg1QzkwLFxuICAgIDB4OEFGMzogMHg1RTBDLFxuICAgIDB4OEFGNDogMHg1RTdFLFxuICAgIDB4OEFGNTogMHg1RkNDLFxuICAgIDB4OEFGNjogMHg2M0VFLFxuICAgIDB4OEFGNzogMHg2NzNBLFxuICAgIDB4OEFGODogMHg2NUQ3LFxuICAgIDB4OEFGOTogMHg2NUUyLFxuICAgIDB4OEFGQTogMHg2NzFGLFxuICAgIDB4OEFGQjogMHg2OENCLFxuICAgIDB4OEFGQzogMHg2OEM0LFxuICAgIDB4OEI0MDogMHg2QTVGLFxuICAgIDB4OEI0MTogMHg1RTMwLFxuICAgIDB4OEI0MjogMHg2QkM1LFxuICAgIDB4OEI0MzogMHg2QzE3LFxuICAgIDB4OEI0NDogMHg2QzdELFxuICAgIDB4OEI0NTogMHg3NTdGLFxuICAgIDB4OEI0NjogMHg3OTQ4LFxuICAgIDB4OEI0NzogMHg1QjYzLFxuICAgIDB4OEI0ODogMHg3QTAwLFxuICAgIDB4OEI0OTogMHg3RDAwLFxuICAgIDB4OEI0QTogMHg1RkJELFxuICAgIDB4OEI0QjogMHg4OThGLFxuICAgIDB4OEI0QzogMHg4QTE4LFxuICAgIDB4OEI0RDogMHg4Q0I0LFxuICAgIDB4OEI0RTogMHg4RDc3LFxuICAgIDB4OEI0RjogMHg4RUNDLFxuICAgIDB4OEI1MDogMHg4RjFELFxuICAgIDB4OEI1MTogMHg5OEUyLFxuICAgIDB4OEI1MjogMHg5QTBFLFxuICAgIDB4OEI1MzogMHg5QjNDLFxuICAgIDB4OEI1NDogMHg0RTgwLFxuICAgIDB4OEI1NTogMHg1MDdELFxuICAgIDB4OEI1NjogMHg1MTAwLFxuICAgIDB4OEI1NzogMHg1OTkzLFxuICAgIDB4OEI1ODogMHg1QjlDLFxuICAgIDB4OEI1OTogMHg2MjJGLFxuICAgIDB4OEI1QTogMHg2MjgwLFxuICAgIDB4OEI1QjogMHg2NEVDLFxuICAgIDB4OEI1QzogMHg2QjNBLFxuICAgIDB4OEI1RDogMHg3MkEwLFxuICAgIDB4OEI1RTogMHg3NTkxLFxuICAgIDB4OEI1RjogMHg3OTQ3LFxuICAgIDB4OEI2MDogMHg3RkE5LFxuICAgIDB4OEI2MTogMHg4N0ZCLFxuICAgIDB4OEI2MjogMHg4QUJDLFxuICAgIDB4OEI2MzogMHg4QjcwLFxuICAgIDB4OEI2NDogMHg2M0FDLFxuICAgIDB4OEI2NTogMHg4M0NBLFxuICAgIDB4OEI2NjogMHg5N0EwLFxuICAgIDB4OEI2NzogMHg1NDA5LFxuICAgIDB4OEI2ODogMHg1NDAzLFxuICAgIDB4OEI2OTogMHg1NUFCLFxuICAgIDB4OEI2QTogMHg2ODU0LFxuICAgIDB4OEI2QjogMHg2QTU4LFxuICAgIDB4OEI2QzogMHg4QTcwLFxuICAgIDB4OEI2RDogMHg3ODI3LFxuICAgIDB4OEI2RTogMHg2Nzc1LFxuICAgIDB4OEI2RjogMHg5RUNELFxuICAgIDB4OEI3MDogMHg1Mzc0LFxuICAgIDB4OEI3MTogMHg1QkEyLFxuICAgIDB4OEI3MjogMHg4MTFBLFxuICAgIDB4OEI3MzogMHg4NjUwLFxuICAgIDB4OEI3NDogMHg5MDA2LFxuICAgIDB4OEI3NTogMHg0RTE4LFxuICAgIDB4OEI3NjogMHg0RTQ1LFxuICAgIDB4OEI3NzogMHg0RUM3LFxuICAgIDB4OEI3ODogMHg0RjExLFxuICAgIDB4OEI3OTogMHg1M0NBLFxuICAgIDB4OEI3QTogMHg1NDM4LFxuICAgIDB4OEI3QjogMHg1QkFFLFxuICAgIDB4OEI3QzogMHg1RjEzLFxuICAgIDB4OEI3RDogMHg2MDI1LFxuICAgIDB4OEI3RTogMHg2NTUxLFxuICAgIDB4OEI4MDogMHg2NzNELFxuICAgIDB4OEI4MTogMHg2QzQyLFxuICAgIDB4OEI4MjogMHg2QzcyLFxuICAgIDB4OEI4MzogMHg2Q0UzLFxuICAgIDB4OEI4NDogMHg3MDc4LFxuICAgIDB4OEI4NTogMHg3NDAzLFxuICAgIDB4OEI4NjogMHg3QTc2LFxuICAgIDB4OEI4NzogMHg3QUFFLFxuICAgIDB4OEI4ODogMHg3QjA4LFxuICAgIDB4OEI4OTogMHg3RDFBLFxuICAgIDB4OEI4QTogMHg3Q0ZFLFxuICAgIDB4OEI4QjogMHg3RDY2LFxuICAgIDB4OEI4QzogMHg2NUU3LFxuICAgIDB4OEI4RDogMHg3MjVCLFxuICAgIDB4OEI4RTogMHg1M0JCLFxuICAgIDB4OEI4RjogMHg1QzQ1LFxuICAgIDB4OEI5MDogMHg1REU4LFxuICAgIDB4OEI5MTogMHg2MkQyLFxuICAgIDB4OEI5MjogMHg2MkUwLFxuICAgIDB4OEI5MzogMHg2MzE5LFxuICAgIDB4OEI5NDogMHg2RTIwLFxuICAgIDB4OEI5NTogMHg4NjVBLFxuICAgIDB4OEI5NjogMHg4QTMxLFxuICAgIDB4OEI5NzogMHg4RERELFxuICAgIDB4OEI5ODogMHg5MkY4LFxuICAgIDB4OEI5OTogMHg2RjAxLFxuICAgIDB4OEI5QTogMHg3OUE2LFxuICAgIDB4OEI5QjogMHg5QjVBLFxuICAgIDB4OEI5QzogMHg0RUE4LFxuICAgIDB4OEI5RDogMHg0RUFCLFxuICAgIDB4OEI5RTogMHg0RUFDLFxuICAgIDB4OEI5RjogMHg0RjlCLFxuICAgIDB4OEJBMDogMHg0RkEwLFxuICAgIDB4OEJBMTogMHg1MEQxLFxuICAgIDB4OEJBMjogMHg1MTQ3LFxuICAgIDB4OEJBMzogMHg3QUY2LFxuICAgIDB4OEJBNDogMHg1MTcxLFxuICAgIDB4OEJBNTogMHg1MUY2LFxuICAgIDB4OEJBNjogMHg1MzU0LFxuICAgIDB4OEJBNzogMHg1MzIxLFxuICAgIDB4OEJBODogMHg1MzdGLFxuICAgIDB4OEJBOTogMHg1M0VCLFxuICAgIDB4OEJBQTogMHg1NUFDLFxuICAgIDB4OEJBQjogMHg1ODgzLFxuICAgIDB4OEJBQzogMHg1Q0UxLFxuICAgIDB4OEJBRDogMHg1RjM3LFxuICAgIDB4OEJBRTogMHg1RjRBLFxuICAgIDB4OEJBRjogMHg2MDJGLFxuICAgIDB4OEJCMDogMHg2MDUwLFxuICAgIDB4OEJCMTogMHg2MDZELFxuICAgIDB4OEJCMjogMHg2MzFGLFxuICAgIDB4OEJCMzogMHg2NTU5LFxuICAgIDB4OEJCNDogMHg2QTRCLFxuICAgIDB4OEJCNTogMHg2Q0MxLFxuICAgIDB4OEJCNjogMHg3MkMyLFxuICAgIDB4OEJCNzogMHg3MkVELFxuICAgIDB4OEJCODogMHg3N0VGLFxuICAgIDB4OEJCOTogMHg4MEY4LFxuICAgIDB4OEJCQTogMHg4MTA1LFxuICAgIDB4OEJCQjogMHg4MjA4LFxuICAgIDB4OEJCQzogMHg4NTRFLFxuICAgIDB4OEJCRDogMHg5MEY3LFxuICAgIDB4OEJCRTogMHg5M0UxLFxuICAgIDB4OEJCRjogMHg5N0ZGLFxuICAgIDB4OEJDMDogMHg5OTU3LFxuICAgIDB4OEJDMTogMHg5QTVBLFxuICAgIDB4OEJDMjogMHg0RUYwLFxuICAgIDB4OEJDMzogMHg1MURELFxuICAgIDB4OEJDNDogMHg1QzJELFxuICAgIDB4OEJDNTogMHg2NjgxLFxuICAgIDB4OEJDNjogMHg2OTZELFxuICAgIDB4OEJDNzogMHg1QzQwLFxuICAgIDB4OEJDODogMHg2NkYyLFxuICAgIDB4OEJDOTogMHg2OTc1LFxuICAgIDB4OEJDQTogMHg3Mzg5LFxuICAgIDB4OEJDQjogMHg2ODUwLFxuICAgIDB4OEJDQzogMHg3QzgxLFxuICAgIDB4OEJDRDogMHg1MEM1LFxuICAgIDB4OEJDRTogMHg1MkU0LFxuICAgIDB4OEJDRjogMHg1NzQ3LFxuICAgIDB4OEJEMDogMHg1REZFLFxuICAgIDB4OEJEMTogMHg5MzI2LFxuICAgIDB4OEJEMjogMHg2NUE0LFxuICAgIDB4OEJEMzogMHg2QjIzLFxuICAgIDB4OEJENDogMHg2QjNELFxuICAgIDB4OEJENTogMHg3NDM0LFxuICAgIDB4OEJENjogMHg3OTgxLFxuICAgIDB4OEJENzogMHg3OUJELFxuICAgIDB4OEJEODogMHg3QjRCLFxuICAgIDB4OEJEOTogMHg3RENBLFxuICAgIDB4OEJEQTogMHg4MkI5LFxuICAgIDB4OEJEQjogMHg4M0NDLFxuICAgIDB4OEJEQzogMHg4ODdGLFxuICAgIDB4OEJERDogMHg4OTVGLFxuICAgIDB4OEJERTogMHg4QjM5LFxuICAgIDB4OEJERjogMHg4RkQxLFxuICAgIDB4OEJFMDogMHg5MUQxLFxuICAgIDB4OEJFMTogMHg1NDFGLFxuICAgIDB4OEJFMjogMHg5MjgwLFxuICAgIDB4OEJFMzogMHg0RTVELFxuICAgIDB4OEJFNDogMHg1MDM2LFxuICAgIDB4OEJFNTogMHg1M0U1LFxuICAgIDB4OEJFNjogMHg1MzNBLFxuICAgIDB4OEJFNzogMHg3MkQ3LFxuICAgIDB4OEJFODogMHg3Mzk2LFxuICAgIDB4OEJFOTogMHg3N0U5LFxuICAgIDB4OEJFQTogMHg4MkU2LFxuICAgIDB4OEJFQjogMHg4RUFGLFxuICAgIDB4OEJFQzogMHg5OUM2LFxuICAgIDB4OEJFRDogMHg5OUM4LFxuICAgIDB4OEJFRTogMHg5OUQyLFxuICAgIDB4OEJFRjogMHg1MTc3LFxuICAgIDB4OEJGMDogMHg2MTFBLFxuICAgIDB4OEJGMTogMHg4NjVFLFxuICAgIDB4OEJGMjogMHg1NUIwLFxuICAgIDB4OEJGMzogMHg3QTdBLFxuICAgIDB4OEJGNDogMHg1MDc2LFxuICAgIDB4OEJGNTogMHg1QkQzLFxuICAgIDB4OEJGNjogMHg5MDQ3LFxuICAgIDB4OEJGNzogMHg5Njg1LFxuICAgIDB4OEJGODogMHg0RTMyLFxuICAgIDB4OEJGOTogMHg2QURCLFxuICAgIDB4OEJGQTogMHg5MUU3LFxuICAgIDB4OEJGQjogMHg1QzUxLFxuICAgIDB4OEJGQzogMHg1QzQ4LFxuICAgIDB4OEM0MDogMHg2Mzk4LFxuICAgIDB4OEM0MTogMHg3QTlGLFxuICAgIDB4OEM0MjogMHg2QzkzLFxuICAgIDB4OEM0MzogMHg5Nzc0LFxuICAgIDB4OEM0NDogMHg4RjYxLFxuICAgIDB4OEM0NTogMHg3QUFBLFxuICAgIDB4OEM0NjogMHg3MThBLFxuICAgIDB4OEM0NzogMHg5Njg4LFxuICAgIDB4OEM0ODogMHg3QzgyLFxuICAgIDB4OEM0OTogMHg2ODE3LFxuICAgIDB4OEM0QTogMHg3RTcwLFxuICAgIDB4OEM0QjogMHg2ODUxLFxuICAgIDB4OEM0QzogMHg5MzZDLFxuICAgIDB4OEM0RDogMHg1MkYyLFxuICAgIDB4OEM0RTogMHg1NDFCLFxuICAgIDB4OEM0RjogMHg4NUFCLFxuICAgIDB4OEM1MDogMHg4QTEzLFxuICAgIDB4OEM1MTogMHg3RkE0LFxuICAgIDB4OEM1MjogMHg4RUNELFxuICAgIDB4OEM1MzogMHg5MEUxLFxuICAgIDB4OEM1NDogMHg1MzY2LFxuICAgIDB4OEM1NTogMHg4ODg4LFxuICAgIDB4OEM1NjogMHg3OTQxLFxuICAgIDB4OEM1NzogMHg0RkMyLFxuICAgIDB4OEM1ODogMHg1MEJFLFxuICAgIDB4OEM1OTogMHg1MjExLFxuICAgIDB4OEM1QTogMHg1MTQ0LFxuICAgIDB4OEM1QjogMHg1NTUzLFxuICAgIDB4OEM1QzogMHg1NzJELFxuICAgIDB4OEM1RDogMHg3M0VBLFxuICAgIDB4OEM1RTogMHg1NzhCLFxuICAgIDB4OEM1RjogMHg1OTUxLFxuICAgIDB4OEM2MDogMHg1RjYyLFxuICAgIDB4OEM2MTogMHg1Rjg0LFxuICAgIDB4OEM2MjogMHg2MDc1LFxuICAgIDB4OEM2MzogMHg2MTc2LFxuICAgIDB4OEM2NDogMHg2MTY3LFxuICAgIDB4OEM2NTogMHg2MUE5LFxuICAgIDB4OEM2NjogMHg2M0IyLFxuICAgIDB4OEM2NzogMHg2NDNBLFxuICAgIDB4OEM2ODogMHg2NTZDLFxuICAgIDB4OEM2OTogMHg2NjZGLFxuICAgIDB4OEM2QTogMHg2ODQyLFxuICAgIDB4OEM2QjogMHg2RTEzLFxuICAgIDB4OEM2QzogMHg3NTY2LFxuICAgIDB4OEM2RDogMHg3QTNELFxuICAgIDB4OEM2RTogMHg3Q0ZCLFxuICAgIDB4OEM2RjogMHg3RDRDLFxuICAgIDB4OEM3MDogMHg3RDk5LFxuICAgIDB4OEM3MTogMHg3RTRCLFxuICAgIDB4OEM3MjogMHg3RjZCLFxuICAgIDB4OEM3MzogMHg4MzBFLFxuICAgIDB4OEM3NDogMHg4MzRBLFxuICAgIDB4OEM3NTogMHg4NkNELFxuICAgIDB4OEM3NjogMHg4QTA4LFxuICAgIDB4OEM3NzogMHg4QTYzLFxuICAgIDB4OEM3ODogMHg4QjY2LFxuICAgIDB4OEM3OTogMHg4RUZELFxuICAgIDB4OEM3QTogMHg5ODFBLFxuICAgIDB4OEM3QjogMHg5RDhGLFxuICAgIDB4OEM3QzogMHg4MkI4LFxuICAgIDB4OEM3RDogMHg4RkNFLFxuICAgIDB4OEM3RTogMHg5QkU4LFxuICAgIDB4OEM4MDogMHg1Mjg3LFxuICAgIDB4OEM4MTogMHg2MjFGLFxuICAgIDB4OEM4MjogMHg2NDgzLFxuICAgIDB4OEM4MzogMHg2RkMwLFxuICAgIDB4OEM4NDogMHg5Njk5LFxuICAgIDB4OEM4NTogMHg2ODQxLFxuICAgIDB4OEM4NjogMHg1MDkxLFxuICAgIDB4OEM4NzogMHg2QjIwLFxuICAgIDB4OEM4ODogMHg2QzdBLFxuICAgIDB4OEM4OTogMHg2RjU0LFxuICAgIDB4OEM4QTogMHg3QTc0LFxuICAgIDB4OEM4QjogMHg3RDUwLFxuICAgIDB4OEM4QzogMHg4ODQwLFxuICAgIDB4OEM4RDogMHg4QTIzLFxuICAgIDB4OEM4RTogMHg2NzA4LFxuICAgIDB4OEM4RjogMHg0RUY2LFxuICAgIDB4OEM5MDogMHg1MDM5LFxuICAgIDB4OEM5MTogMHg1MDI2LFxuICAgIDB4OEM5MjogMHg1MDY1LFxuICAgIDB4OEM5MzogMHg1MTdDLFxuICAgIDB4OEM5NDogMHg1MjM4LFxuICAgIDB4OEM5NTogMHg1MjYzLFxuICAgIDB4OEM5NjogMHg1NUE3LFxuICAgIDB4OEM5NzogMHg1NzBGLFxuICAgIDB4OEM5ODogMHg1ODA1LFxuICAgIDB4OEM5OTogMHg1QUNDLFxuICAgIDB4OEM5QTogMHg1RUZBLFxuICAgIDB4OEM5QjogMHg2MUIyLFxuICAgIDB4OEM5QzogMHg2MUY4LFxuICAgIDB4OEM5RDogMHg2MkYzLFxuICAgIDB4OEM5RTogMHg2MzcyLFxuICAgIDB4OEM5RjogMHg2OTFDLFxuICAgIDB4OENBMDogMHg2QTI5LFxuICAgIDB4OENBMTogMHg3MjdELFxuICAgIDB4OENBMjogMHg3MkFDLFxuICAgIDB4OENBMzogMHg3MzJFLFxuICAgIDB4OENBNDogMHg3ODE0LFxuICAgIDB4OENBNTogMHg3ODZGLFxuICAgIDB4OENBNjogMHg3RDc5LFxuICAgIDB4OENBNzogMHg3NzBDLFxuICAgIDB4OENBODogMHg4MEE5LFxuICAgIDB4OENBOTogMHg4OThCLFxuICAgIDB4OENBQTogMHg4QjE5LFxuICAgIDB4OENBQjogMHg4Q0UyLFxuICAgIDB4OENBQzogMHg4RUQyLFxuICAgIDB4OENBRDogMHg5MDYzLFxuICAgIDB4OENBRTogMHg5Mzc1LFxuICAgIDB4OENBRjogMHg5NjdBLFxuICAgIDB4OENCMDogMHg5ODU1LFxuICAgIDB4OENCMTogMHg5QTEzLFxuICAgIDB4OENCMjogMHg5RTc4LFxuICAgIDB4OENCMzogMHg1MTQzLFxuICAgIDB4OENCNDogMHg1MzlGLFxuICAgIDB4OENCNTogMHg1M0IzLFxuICAgIDB4OENCNjogMHg1RTdCLFxuICAgIDB4OENCNzogMHg1RjI2LFxuICAgIDB4OENCODogMHg2RTFCLFxuICAgIDB4OENCOTogMHg2RTkwLFxuICAgIDB4OENCQTogMHg3Mzg0LFxuICAgIDB4OENCQjogMHg3M0ZFLFxuICAgIDB4OENCQzogMHg3RDQzLFxuICAgIDB4OENCRDogMHg4MjM3LFxuICAgIDB4OENCRTogMHg4QTAwLFxuICAgIDB4OENCRjogMHg4QUZBLFxuICAgIDB4OENDMDogMHg5NjUwLFxuICAgIDB4OENDMTogMHg0RTRFLFxuICAgIDB4OENDMjogMHg1MDBCLFxuICAgIDB4OENDMzogMHg1M0U0LFxuICAgIDB4OENDNDogMHg1NDdDLFxuICAgIDB4OENDNTogMHg1NkZBLFxuICAgIDB4OENDNjogMHg1OUQxLFxuICAgIDB4OENDNzogMHg1QjY0LFxuICAgIDB4OENDODogMHg1REYxLFxuICAgIDB4OENDOTogMHg1RUFCLFxuICAgIDB4OENDQTogMHg1RjI3LFxuICAgIDB4OENDQjogMHg2MjM4LFxuICAgIDB4OENDQzogMHg2NTQ1LFxuICAgIDB4OENDRDogMHg2N0FGLFxuICAgIDB4OENDRTogMHg2RTU2LFxuICAgIDB4OENDRjogMHg3MkQwLFxuICAgIDB4OENEMDogMHg3Q0NBLFxuICAgIDB4OENEMTogMHg4OEI0LFxuICAgIDB4OENEMjogMHg4MEExLFxuICAgIDB4OENEMzogMHg4MEUxLFxuICAgIDB4OENENDogMHg4M0YwLFxuICAgIDB4OENENTogMHg4NjRFLFxuICAgIDB4OENENjogMHg4QTg3LFxuICAgIDB4OENENzogMHg4REU4LFxuICAgIDB4OENEODogMHg5MjM3LFxuICAgIDB4OENEOTogMHg5NkM3LFxuICAgIDB4OENEQTogMHg5ODY3LFxuICAgIDB4OENEQjogMHg5RjEzLFxuICAgIDB4OENEQzogMHg0RTk0LFxuICAgIDB4OENERDogMHg0RTkyLFxuICAgIDB4OENERTogMHg0RjBELFxuICAgIDB4OENERjogMHg1MzQ4LFxuICAgIDB4OENFMDogMHg1NDQ5LFxuICAgIDB4OENFMTogMHg1NDNFLFxuICAgIDB4OENFMjogMHg1QTJGLFxuICAgIDB4OENFMzogMHg1RjhDLFxuICAgIDB4OENFNDogMHg1RkExLFxuICAgIDB4OENFNTogMHg2MDlGLFxuICAgIDB4OENFNjogMHg2OEE3LFxuICAgIDB4OENFNzogMHg2QThFLFxuICAgIDB4OENFODogMHg3NDVBLFxuICAgIDB4OENFOTogMHg3ODgxLFxuICAgIDB4OENFQTogMHg4QTlFLFxuICAgIDB4OENFQjogMHg4QUE0LFxuICAgIDB4OENFQzogMHg4Qjc3LFxuICAgIDB4OENFRDogMHg5MTkwLFxuICAgIDB4OENFRTogMHg0RTVFLFxuICAgIDB4OENFRjogMHg5QkM5LFxuICAgIDB4OENGMDogMHg0RUE0LFxuICAgIDB4OENGMTogMHg0RjdDLFxuICAgIDB4OENGMjogMHg0RkFGLFxuICAgIDB4OENGMzogMHg1MDE5LFxuICAgIDB4OENGNDogMHg1MDE2LFxuICAgIDB4OENGNTogMHg1MTQ5LFxuICAgIDB4OENGNjogMHg1MTZDLFxuICAgIDB4OENGNzogMHg1MjlGLFxuICAgIDB4OENGODogMHg1MkI5LFxuICAgIDB4OENGOTogMHg1MkZFLFxuICAgIDB4OENGQTogMHg1MzlBLFxuICAgIDB4OENGQjogMHg1M0UzLFxuICAgIDB4OENGQzogMHg1NDExLFxuICAgIDB4OEQ0MDogMHg1NDBFLFxuICAgIDB4OEQ0MTogMHg1NTg5LFxuICAgIDB4OEQ0MjogMHg1NzUxLFxuICAgIDB4OEQ0MzogMHg1N0EyLFxuICAgIDB4OEQ0NDogMHg1OTdELFxuICAgIDB4OEQ0NTogMHg1QjU0LFxuICAgIDB4OEQ0NjogMHg1QjVELFxuICAgIDB4OEQ0NzogMHg1QjhGLFxuICAgIDB4OEQ0ODogMHg1REU1LFxuICAgIDB4OEQ0OTogMHg1REU3LFxuICAgIDB4OEQ0QTogMHg1REY3LFxuICAgIDB4OEQ0QjogMHg1RTc4LFxuICAgIDB4OEQ0QzogMHg1RTgzLFxuICAgIDB4OEQ0RDogMHg1RTlBLFxuICAgIDB4OEQ0RTogMHg1RUI3LFxuICAgIDB4OEQ0RjogMHg1RjE4LFxuICAgIDB4OEQ1MDogMHg2MDUyLFxuICAgIDB4OEQ1MTogMHg2MTRDLFxuICAgIDB4OEQ1MjogMHg2Mjk3LFxuICAgIDB4OEQ1MzogMHg2MkQ4LFxuICAgIDB4OEQ1NDogMHg2M0E3LFxuICAgIDB4OEQ1NTogMHg2NTNCLFxuICAgIDB4OEQ1NjogMHg2NjAyLFxuICAgIDB4OEQ1NzogMHg2NjQzLFxuICAgIDB4OEQ1ODogMHg2NkY0LFxuICAgIDB4OEQ1OTogMHg2NzZELFxuICAgIDB4OEQ1QTogMHg2ODIxLFxuICAgIDB4OEQ1QjogMHg2ODk3LFxuICAgIDB4OEQ1QzogMHg2OUNCLFxuICAgIDB4OEQ1RDogMHg2QzVGLFxuICAgIDB4OEQ1RTogMHg2RDJBLFxuICAgIDB4OEQ1RjogMHg2RDY5LFxuICAgIDB4OEQ2MDogMHg2RTJGLFxuICAgIDB4OEQ2MTogMHg2RTlELFxuICAgIDB4OEQ2MjogMHg3NTMyLFxuICAgIDB4OEQ2MzogMHg3Njg3LFxuICAgIDB4OEQ2NDogMHg3ODZDLFxuICAgIDB4OEQ2NTogMHg3QTNGLFxuICAgIDB4OEQ2NjogMHg3Q0UwLFxuICAgIDB4OEQ2NzogMHg3RDA1LFxuICAgIDB4OEQ2ODogMHg3RDE4LFxuICAgIDB4OEQ2OTogMHg3RDVFLFxuICAgIDB4OEQ2QTogMHg3REIxLFxuICAgIDB4OEQ2QjogMHg4MDE1LFxuICAgIDB4OEQ2QzogMHg4MDAzLFxuICAgIDB4OEQ2RDogMHg4MEFGLFxuICAgIDB4OEQ2RTogMHg4MEIxLFxuICAgIDB4OEQ2RjogMHg4MTU0LFxuICAgIDB4OEQ3MDogMHg4MThGLFxuICAgIDB4OEQ3MTogMHg4MjJBLFxuICAgIDB4OEQ3MjogMHg4MzUyLFxuICAgIDB4OEQ3MzogMHg4ODRDLFxuICAgIDB4OEQ3NDogMHg4ODYxLFxuICAgIDB4OEQ3NTogMHg4QjFCLFxuICAgIDB4OEQ3NjogMHg4Q0EyLFxuICAgIDB4OEQ3NzogMHg4Q0ZDLFxuICAgIDB4OEQ3ODogMHg5MENBLFxuICAgIDB4OEQ3OTogMHg5MTc1LFxuICAgIDB4OEQ3QTogMHg5MjcxLFxuICAgIDB4OEQ3QjogMHg3ODNGLFxuICAgIDB4OEQ3QzogMHg5MkZDLFxuICAgIDB4OEQ3RDogMHg5NUE0LFxuICAgIDB4OEQ3RTogMHg5NjRELFxuICAgIDB4OEQ4MDogMHg5ODA1LFxuICAgIDB4OEQ4MTogMHg5OTk5LFxuICAgIDB4OEQ4MjogMHg5QUQ4LFxuICAgIDB4OEQ4MzogMHg5RDNCLFxuICAgIDB4OEQ4NDogMHg1MjVCLFxuICAgIDB4OEQ4NTogMHg1MkFCLFxuICAgIDB4OEQ4NjogMHg1M0Y3LFxuICAgIDB4OEQ4NzogMHg1NDA4LFxuICAgIDB4OEQ4ODogMHg1OEQ1LFxuICAgIDB4OEQ4OTogMHg2MkY3LFxuICAgIDB4OEQ4QTogMHg2RkUwLFxuICAgIDB4OEQ4QjogMHg4QzZBLFxuICAgIDB4OEQ4QzogMHg4RjVGLFxuICAgIDB4OEQ4RDogMHg5RUI5LFxuICAgIDB4OEQ4RTogMHg1MTRCLFxuICAgIDB4OEQ4RjogMHg1MjNCLFxuICAgIDB4OEQ5MDogMHg1NDRBLFxuICAgIDB4OEQ5MTogMHg1NkZELFxuICAgIDB4OEQ5MjogMHg3QTQwLFxuICAgIDB4OEQ5MzogMHg5MTc3LFxuICAgIDB4OEQ5NDogMHg5RDYwLFxuICAgIDB4OEQ5NTogMHg5RUQyLFxuICAgIDB4OEQ5NjogMHg3MzQ0LFxuICAgIDB4OEQ5NzogMHg2RjA5LFxuICAgIDB4OEQ5ODogMHg4MTcwLFxuICAgIDB4OEQ5OTogMHg3NTExLFxuICAgIDB4OEQ5QTogMHg1RkZELFxuICAgIDB4OEQ5QjogMHg2MERBLFxuICAgIDB4OEQ5QzogMHg5QUE4LFxuICAgIDB4OEQ5RDogMHg3MkRCLFxuICAgIDB4OEQ5RTogMHg4RkJDLFxuICAgIDB4OEQ5RjogMHg2QjY0LFxuICAgIDB4OERBMDogMHg5ODAzLFxuICAgIDB4OERBMTogMHg0RUNBLFxuICAgIDB4OERBMjogMHg1NkYwLFxuICAgIDB4OERBMzogMHg1NzY0LFxuICAgIDB4OERBNDogMHg1OEJFLFxuICAgIDB4OERBNTogMHg1QTVBLFxuICAgIDB4OERBNjogMHg2MDY4LFxuICAgIDB4OERBNzogMHg2MUM3LFxuICAgIDB4OERBODogMHg2NjBGLFxuICAgIDB4OERBOTogMHg2NjA2LFxuICAgIDB4OERBQTogMHg2ODM5LFxuICAgIDB4OERBQjogMHg2OEIxLFxuICAgIDB4OERBQzogMHg2REY3LFxuICAgIDB4OERBRDogMHg3NUQ1LFxuICAgIDB4OERBRTogMHg3RDNBLFxuICAgIDB4OERBRjogMHg4MjZFLFxuICAgIDB4OERCMDogMHg5QjQyLFxuICAgIDB4OERCMTogMHg0RTlCLFxuICAgIDB4OERCMjogMHg0RjUwLFxuICAgIDB4OERCMzogMHg1M0M5LFxuICAgIDB4OERCNDogMHg1NTA2LFxuICAgIDB4OERCNTogMHg1RDZGLFxuICAgIDB4OERCNjogMHg1REU2LFxuICAgIDB4OERCNzogMHg1REVFLFxuICAgIDB4OERCODogMHg2N0ZCLFxuICAgIDB4OERCOTogMHg2Qzk5LFxuICAgIDB4OERCQTogMHg3NDczLFxuICAgIDB4OERCQjogMHg3ODAyLFxuICAgIDB4OERCQzogMHg4QTUwLFxuICAgIDB4OERCRDogMHg5Mzk2LFxuICAgIDB4OERCRTogMHg4OERGLFxuICAgIDB4OERCRjogMHg1NzUwLFxuICAgIDB4OERDMDogMHg1RUE3LFxuICAgIDB4OERDMTogMHg2MzJCLFxuICAgIDB4OERDMjogMHg1MEI1LFxuICAgIDB4OERDMzogMHg1MEFDLFxuICAgIDB4OERDNDogMHg1MThELFxuICAgIDB4OERDNTogMHg2NzAwLFxuICAgIDB4OERDNjogMHg1NEM5LFxuICAgIDB4OERDNzogMHg1ODVFLFxuICAgIDB4OERDODogMHg1OUJCLFxuICAgIDB4OERDOTogMHg1QkIwLFxuICAgIDB4OERDQTogMHg1RjY5LFxuICAgIDB4OERDQjogMHg2MjRELFxuICAgIDB4OERDQzogMHg2M0ExLFxuICAgIDB4OERDRDogMHg2ODNELFxuICAgIDB4OERDRTogMHg2QjczLFxuICAgIDB4OERDRjogMHg2RTA4LFxuICAgIDB4OEREMDogMHg3MDdELFxuICAgIDB4OEREMTogMHg5MUM3LFxuICAgIDB4OEREMjogMHg3MjgwLFxuICAgIDB4OEREMzogMHg3ODE1LFxuICAgIDB4OERENDogMHg3ODI2LFxuICAgIDB4OERENTogMHg3OTZELFxuICAgIDB4OERENjogMHg2NThFLFxuICAgIDB4OERENzogMHg3RDMwLFxuICAgIDB4OEREODogMHg4M0RDLFxuICAgIDB4OEREOTogMHg4OEMxLFxuICAgIDB4OEREQTogMHg4RjA5LFxuICAgIDB4OEREQjogMHg5NjlCLFxuICAgIDB4OEREQzogMHg1MjY0LFxuICAgIDB4OERERDogMHg1NzI4LFxuICAgIDB4OERERTogMHg2NzUwLFxuICAgIDB4OERERjogMHg3RjZBLFxuICAgIDB4OERFMDogMHg4Q0ExLFxuICAgIDB4OERFMTogMHg1MUI0LFxuICAgIDB4OERFMjogMHg1NzQyLFxuICAgIDB4OERFMzogMHg5NjJBLFxuICAgIDB4OERFNDogMHg1ODNBLFxuICAgIDB4OERFNTogMHg2OThBLFxuICAgIDB4OERFNjogMHg4MEI0LFxuICAgIDB4OERFNzogMHg1NEIyLFxuICAgIDB4OERFODogMHg1RDBFLFxuICAgIDB4OERFOTogMHg1N0ZDLFxuICAgIDB4OERFQTogMHg3ODk1LFxuICAgIDB4OERFQjogMHg5REZBLFxuICAgIDB4OERFQzogMHg0RjVDLFxuICAgIDB4OERFRDogMHg1MjRBLFxuICAgIDB4OERFRTogMHg1NDhCLFxuICAgIDB4OERFRjogMHg2NDNFLFxuICAgIDB4OERGMDogMHg2NjI4LFxuICAgIDB4OERGMTogMHg2NzE0LFxuICAgIDB4OERGMjogMHg2N0Y1LFxuICAgIDB4OERGMzogMHg3QTg0LFxuICAgIDB4OERGNDogMHg3QjU2LFxuICAgIDB4OERGNTogMHg3RDIyLFxuICAgIDB4OERGNjogMHg5MzJGLFxuICAgIDB4OERGNzogMHg2ODVDLFxuICAgIDB4OERGODogMHg5QkFELFxuICAgIDB4OERGOTogMHg3QjM5LFxuICAgIDB4OERGQTogMHg1MzE5LFxuICAgIDB4OERGQjogMHg1MThBLFxuICAgIDB4OERGQzogMHg1MjM3LFxuICAgIDB4OEU0MDogMHg1QkRGLFxuICAgIDB4OEU0MTogMHg2MkY2LFxuICAgIDB4OEU0MjogMHg2NEFFLFxuICAgIDB4OEU0MzogMHg2NEU2LFxuICAgIDB4OEU0NDogMHg2NzJELFxuICAgIDB4OEU0NTogMHg2QkJBLFxuICAgIDB4OEU0NjogMHg4NUE5LFxuICAgIDB4OEU0NzogMHg5NkQxLFxuICAgIDB4OEU0ODogMHg3NjkwLFxuICAgIDB4OEU0OTogMHg5QkQ2LFxuICAgIDB4OEU0QTogMHg2MzRDLFxuICAgIDB4OEU0QjogMHg5MzA2LFxuICAgIDB4OEU0QzogMHg5QkFCLFxuICAgIDB4OEU0RDogMHg3NkJGLFxuICAgIDB4OEU0RTogMHg2NjUyLFxuICAgIDB4OEU0RjogMHg0RTA5LFxuICAgIDB4OEU1MDogMHg1MDk4LFxuICAgIDB4OEU1MTogMHg1M0MyLFxuICAgIDB4OEU1MjogMHg1QzcxLFxuICAgIDB4OEU1MzogMHg2MEU4LFxuICAgIDB4OEU1NDogMHg2NDkyLFxuICAgIDB4OEU1NTogMHg2NTYzLFxuICAgIDB4OEU1NjogMHg2ODVGLFxuICAgIDB4OEU1NzogMHg3MUU2LFxuICAgIDB4OEU1ODogMHg3M0NBLFxuICAgIDB4OEU1OTogMHg3NTIzLFxuICAgIDB4OEU1QTogMHg3Qjk3LFxuICAgIDB4OEU1QjogMHg3RTgyLFxuICAgIDB4OEU1QzogMHg4Njk1LFxuICAgIDB4OEU1RDogMHg4QjgzLFxuICAgIDB4OEU1RTogMHg4Q0RCLFxuICAgIDB4OEU1RjogMHg5MTc4LFxuICAgIDB4OEU2MDogMHg5OTEwLFxuICAgIDB4OEU2MTogMHg2NUFDLFxuICAgIDB4OEU2MjogMHg2NkFCLFxuICAgIDB4OEU2MzogMHg2QjhCLFxuICAgIDB4OEU2NDogMHg0RUQ1LFxuICAgIDB4OEU2NTogMHg0RUQ0LFxuICAgIDB4OEU2NjogMHg0RjNBLFxuICAgIDB4OEU2NzogMHg0RjdGLFxuICAgIDB4OEU2ODogMHg1MjNBLFxuICAgIDB4OEU2OTogMHg1M0Y4LFxuICAgIDB4OEU2QTogMHg1M0YyLFxuICAgIDB4OEU2QjogMHg1NUUzLFxuICAgIDB4OEU2QzogMHg1NkRCLFxuICAgIDB4OEU2RDogMHg1OEVCLFxuICAgIDB4OEU2RTogMHg1OUNCLFxuICAgIDB4OEU2RjogMHg1OUM5LFxuICAgIDB4OEU3MDogMHg1OUZGLFxuICAgIDB4OEU3MTogMHg1QjUwLFxuICAgIDB4OEU3MjogMHg1QzRELFxuICAgIDB4OEU3MzogMHg1RTAyLFxuICAgIDB4OEU3NDogMHg1RTJCLFxuICAgIDB4OEU3NTogMHg1RkQ3LFxuICAgIDB4OEU3NjogMHg2MDFELFxuICAgIDB4OEU3NzogMHg2MzA3LFxuICAgIDB4OEU3ODogMHg2NTJGLFxuICAgIDB4OEU3OTogMHg1QjVDLFxuICAgIDB4OEU3QTogMHg2NUFGLFxuICAgIDB4OEU3QjogMHg2NUJELFxuICAgIDB4OEU3QzogMHg2NUU4LFxuICAgIDB4OEU3RDogMHg2NzlELFxuICAgIDB4OEU3RTogMHg2QjYyLFxuICAgIDB4OEU4MDogMHg2QjdCLFxuICAgIDB4OEU4MTogMHg2QzBGLFxuICAgIDB4OEU4MjogMHg3MzQ1LFxuICAgIDB4OEU4MzogMHg3OTQ5LFxuICAgIDB4OEU4NDogMHg3OUMxLFxuICAgIDB4OEU4NTogMHg3Q0Y4LFxuICAgIDB4OEU4NjogMHg3RDE5LFxuICAgIDB4OEU4NzogMHg3RDJCLFxuICAgIDB4OEU4ODogMHg4MEEyLFxuICAgIDB4OEU4OTogMHg4MTAyLFxuICAgIDB4OEU4QTogMHg4MUYzLFxuICAgIDB4OEU4QjogMHg4OTk2LFxuICAgIDB4OEU4QzogMHg4QTVFLFxuICAgIDB4OEU4RDogMHg4QTY5LFxuICAgIDB4OEU4RTogMHg4QTY2LFxuICAgIDB4OEU4RjogMHg4QThDLFxuICAgIDB4OEU5MDogMHg4QUVFLFxuICAgIDB4OEU5MTogMHg4Q0M3LFxuICAgIDB4OEU5MjogMHg4Q0RDLFxuICAgIDB4OEU5MzogMHg5NkNDLFxuICAgIDB4OEU5NDogMHg5OEZDLFxuICAgIDB4OEU5NTogMHg2QjZGLFxuICAgIDB4OEU5NjogMHg0RThCLFxuICAgIDB4OEU5NzogMHg0RjNDLFxuICAgIDB4OEU5ODogMHg0RjhELFxuICAgIDB4OEU5OTogMHg1MTUwLFxuICAgIDB4OEU5QTogMHg1QjU3LFxuICAgIDB4OEU5QjogMHg1QkZBLFxuICAgIDB4OEU5QzogMHg2MTQ4LFxuICAgIDB4OEU5RDogMHg2MzAxLFxuICAgIDB4OEU5RTogMHg2NjQyLFxuICAgIDB4OEU5RjogMHg2QjIxLFxuICAgIDB4OEVBMDogMHg2RUNCLFxuICAgIDB4OEVBMTogMHg2Q0JCLFxuICAgIDB4OEVBMjogMHg3MjNFLFxuICAgIDB4OEVBMzogMHg3NEJELFxuICAgIDB4OEVBNDogMHg3NUQ0LFxuICAgIDB4OEVBNTogMHg3OEMxLFxuICAgIDB4OEVBNjogMHg3OTNBLFxuICAgIDB4OEVBNzogMHg4MDBDLFxuICAgIDB4OEVBODogMHg4MDMzLFxuICAgIDB4OEVBOTogMHg4MUVBLFxuICAgIDB4OEVBQTogMHg4NDk0LFxuICAgIDB4OEVBQjogMHg4RjlFLFxuICAgIDB4OEVBQzogMHg2QzUwLFxuICAgIDB4OEVBRDogMHg5RTdGLFxuICAgIDB4OEVBRTogMHg1RjBGLFxuICAgIDB4OEVBRjogMHg4QjU4LFxuICAgIDB4OEVCMDogMHg5RDJCLFxuICAgIDB4OEVCMTogMHg3QUZBLFxuICAgIDB4OEVCMjogMHg4RUY4LFxuICAgIDB4OEVCMzogMHg1QjhELFxuICAgIDB4OEVCNDogMHg5NkVCLFxuICAgIDB4OEVCNTogMHg0RTAzLFxuICAgIDB4OEVCNjogMHg1M0YxLFxuICAgIDB4OEVCNzogMHg1N0Y3LFxuICAgIDB4OEVCODogMHg1OTMxLFxuICAgIDB4OEVCOTogMHg1QUM5LFxuICAgIDB4OEVCQTogMHg1QkE0LFxuICAgIDB4OEVCQjogMHg2MDg5LFxuICAgIDB4OEVCQzogMHg2RTdGLFxuICAgIDB4OEVCRDogMHg2RjA2LFxuICAgIDB4OEVCRTogMHg3NUJFLFxuICAgIDB4OEVCRjogMHg4Q0VBLFxuICAgIDB4OEVDMDogMHg1QjlGLFxuICAgIDB4OEVDMTogMHg4NTAwLFxuICAgIDB4OEVDMjogMHg3QkUwLFxuICAgIDB4OEVDMzogMHg1MDcyLFxuICAgIDB4OEVDNDogMHg2N0Y0LFxuICAgIDB4OEVDNTogMHg4MjlELFxuICAgIDB4OEVDNjogMHg1QzYxLFxuICAgIDB4OEVDNzogMHg4NTRBLFxuICAgIDB4OEVDODogMHg3RTFFLFxuICAgIDB4OEVDOTogMHg4MjBFLFxuICAgIDB4OEVDQTogMHg1MTk5LFxuICAgIDB4OEVDQjogMHg1QzA0LFxuICAgIDB4OEVDQzogMHg2MzY4LFxuICAgIDB4OEVDRDogMHg4RDY2LFxuICAgIDB4OEVDRTogMHg2NTlDLFxuICAgIDB4OEVDRjogMHg3MTZFLFxuICAgIDB4OEVEMDogMHg3OTNFLFxuICAgIDB4OEVEMTogMHg3RDE3LFxuICAgIDB4OEVEMjogMHg4MDA1LFxuICAgIDB4OEVEMzogMHg4QjFELFxuICAgIDB4OEVENDogMHg4RUNBLFxuICAgIDB4OEVENTogMHg5MDZFLFxuICAgIDB4OEVENjogMHg4NkM3LFxuICAgIDB4OEVENzogMHg5MEFBLFxuICAgIDB4OEVEODogMHg1MDFGLFxuICAgIDB4OEVEOTogMHg1MkZBLFxuICAgIDB4OEVEQTogMHg1QzNBLFxuICAgIDB4OEVEQjogMHg2NzUzLFxuICAgIDB4OEVEQzogMHg3MDdDLFxuICAgIDB4OEVERDogMHg3MjM1LFxuICAgIDB4OEVERTogMHg5MTRDLFxuICAgIDB4OEVERjogMHg5MUM4LFxuICAgIDB4OEVFMDogMHg5MzJCLFxuICAgIDB4OEVFMTogMHg4MkU1LFxuICAgIDB4OEVFMjogMHg1QkMyLFxuICAgIDB4OEVFMzogMHg1RjMxLFxuICAgIDB4OEVFNDogMHg2MEY5LFxuICAgIDB4OEVFNTogMHg0RTNCLFxuICAgIDB4OEVFNjogMHg1M0Q2LFxuICAgIDB4OEVFNzogMHg1Qjg4LFxuICAgIDB4OEVFODogMHg2MjRCLFxuICAgIDB4OEVFOTogMHg2NzMxLFxuICAgIDB4OEVFQTogMHg2QjhBLFxuICAgIDB4OEVFQjogMHg3MkU5LFxuICAgIDB4OEVFQzogMHg3M0UwLFxuICAgIDB4OEVFRDogMHg3QTJFLFxuICAgIDB4OEVFRTogMHg4MTZCLFxuICAgIDB4OEVFRjogMHg4REEzLFxuICAgIDB4OEVGMDogMHg5MTUyLFxuICAgIDB4OEVGMTogMHg5OTk2LFxuICAgIDB4OEVGMjogMHg1MTEyLFxuICAgIDB4OEVGMzogMHg1M0Q3LFxuICAgIDB4OEVGNDogMHg1NDZBLFxuICAgIDB4OEVGNTogMHg1QkZGLFxuICAgIDB4OEVGNjogMHg2Mzg4LFxuICAgIDB4OEVGNzogMHg2QTM5LFxuICAgIDB4OEVGODogMHg3REFDLFxuICAgIDB4OEVGOTogMHg5NzAwLFxuICAgIDB4OEVGQTogMHg1NkRBLFxuICAgIDB4OEVGQjogMHg1M0NFLFxuICAgIDB4OEVGQzogMHg1NDY4LFxuICAgIDB4OEY0MDogMHg1Qjk3LFxuICAgIDB4OEY0MTogMHg1QzMxLFxuICAgIDB4OEY0MjogMHg1RERFLFxuICAgIDB4OEY0MzogMHg0RkVFLFxuICAgIDB4OEY0NDogMHg2MTAxLFxuICAgIDB4OEY0NTogMHg2MkZFLFxuICAgIDB4OEY0NjogMHg2RDMyLFxuICAgIDB4OEY0NzogMHg3OUMwLFxuICAgIDB4OEY0ODogMHg3OUNCLFxuICAgIDB4OEY0OTogMHg3RDQyLFxuICAgIDB4OEY0QTogMHg3RTRELFxuICAgIDB4OEY0QjogMHg3RkQyLFxuICAgIDB4OEY0QzogMHg4MUVELFxuICAgIDB4OEY0RDogMHg4MjFGLFxuICAgIDB4OEY0RTogMHg4NDkwLFxuICAgIDB4OEY0RjogMHg4ODQ2LFxuICAgIDB4OEY1MDogMHg4OTcyLFxuICAgIDB4OEY1MTogMHg4QjkwLFxuICAgIDB4OEY1MjogMHg4RTc0LFxuICAgIDB4OEY1MzogMHg4RjJGLFxuICAgIDB4OEY1NDogMHg5MDMxLFxuICAgIDB4OEY1NTogMHg5MTRCLFxuICAgIDB4OEY1NjogMHg5MTZDLFxuICAgIDB4OEY1NzogMHg5NkM2LFxuICAgIDB4OEY1ODogMHg5MTlDLFxuICAgIDB4OEY1OTogMHg0RUMwLFxuICAgIDB4OEY1QTogMHg0RjRGLFxuICAgIDB4OEY1QjogMHg1MTQ1LFxuICAgIDB4OEY1QzogMHg1MzQxLFxuICAgIDB4OEY1RDogMHg1RjkzLFxuICAgIDB4OEY1RTogMHg2MjBFLFxuICAgIDB4OEY1RjogMHg2N0Q0LFxuICAgIDB4OEY2MDogMHg2QzQxLFxuICAgIDB4OEY2MTogMHg2RTBCLFxuICAgIDB4OEY2MjogMHg3MzYzLFxuICAgIDB4OEY2MzogMHg3RTI2LFxuICAgIDB4OEY2NDogMHg5MUNELFxuICAgIDB4OEY2NTogMHg5MjgzLFxuICAgIDB4OEY2NjogMHg1M0Q0LFxuICAgIDB4OEY2NzogMHg1OTE5LFxuICAgIDB4OEY2ODogMHg1QkJGLFxuICAgIDB4OEY2OTogMHg2REQxLFxuICAgIDB4OEY2QTogMHg3OTVELFxuICAgIDB4OEY2QjogMHg3RTJFLFxuICAgIDB4OEY2QzogMHg3QzlCLFxuICAgIDB4OEY2RDogMHg1ODdFLFxuICAgIDB4OEY2RTogMHg3MTlGLFxuICAgIDB4OEY2RjogMHg1MUZBLFxuICAgIDB4OEY3MDogMHg4ODUzLFxuICAgIDB4OEY3MTogMHg4RkYwLFxuICAgIDB4OEY3MjogMHg0RkNBLFxuICAgIDB4OEY3MzogMHg1Q0ZCLFxuICAgIDB4OEY3NDogMHg2NjI1LFxuICAgIDB4OEY3NTogMHg3N0FDLFxuICAgIDB4OEY3NjogMHg3QUUzLFxuICAgIDB4OEY3NzogMHg4MjFDLFxuICAgIDB4OEY3ODogMHg5OUZGLFxuICAgIDB4OEY3OTogMHg1MUM2LFxuICAgIDB4OEY3QTogMHg1RkFBLFxuICAgIDB4OEY3QjogMHg2NUVDLFxuICAgIDB4OEY3QzogMHg2OTZGLFxuICAgIDB4OEY3RDogMHg2Qjg5LFxuICAgIDB4OEY3RTogMHg2REYzLFxuICAgIDB4OEY4MDogMHg2RTk2LFxuICAgIDB4OEY4MTogMHg2RjY0LFxuICAgIDB4OEY4MjogMHg3NkZFLFxuICAgIDB4OEY4MzogMHg3RDE0LFxuICAgIDB4OEY4NDogMHg1REUxLFxuICAgIDB4OEY4NTogMHg5MDc1LFxuICAgIDB4OEY4NjogMHg5MTg3LFxuICAgIDB4OEY4NzogMHg5ODA2LFxuICAgIDB4OEY4ODogMHg1MUU2LFxuICAgIDB4OEY4OTogMHg1MjFELFxuICAgIDB4OEY4QTogMHg2MjQwLFxuICAgIDB4OEY4QjogMHg2NjkxLFxuICAgIDB4OEY4QzogMHg2NkQ5LFxuICAgIDB4OEY4RDogMHg2RTFBLFxuICAgIDB4OEY4RTogMHg1RUI2LFxuICAgIDB4OEY4RjogMHg3REQyLFxuICAgIDB4OEY5MDogMHg3RjcyLFxuICAgIDB4OEY5MTogMHg2NkY4LFxuICAgIDB4OEY5MjogMHg4NUFGLFxuICAgIDB4OEY5MzogMHg4NUY3LFxuICAgIDB4OEY5NDogMHg4QUY4LFxuICAgIDB4OEY5NTogMHg1MkE5LFxuICAgIDB4OEY5NjogMHg1M0Q5LFxuICAgIDB4OEY5NzogMHg1OTczLFxuICAgIDB4OEY5ODogMHg1RThGLFxuICAgIDB4OEY5OTogMHg1RjkwLFxuICAgIDB4OEY5QTogMHg2MDU1LFxuICAgIDB4OEY5QjogMHg5MkU0LFxuICAgIDB4OEY5QzogMHg5NjY0LFxuICAgIDB4OEY5RDogMHg1MEI3LFxuICAgIDB4OEY5RTogMHg1MTFGLFxuICAgIDB4OEY5RjogMHg1MkRELFxuICAgIDB4OEZBMDogMHg1MzIwLFxuICAgIDB4OEZBMTogMHg1MzQ3LFxuICAgIDB4OEZBMjogMHg1M0VDLFxuICAgIDB4OEZBMzogMHg1NEU4LFxuICAgIDB4OEZBNDogMHg1NTQ2LFxuICAgIDB4OEZBNTogMHg1NTMxLFxuICAgIDB4OEZBNjogMHg1NjE3LFxuICAgIDB4OEZBNzogMHg1OTY4LFxuICAgIDB4OEZBODogMHg1OUJFLFxuICAgIDB4OEZBOTogMHg1QTNDLFxuICAgIDB4OEZBQTogMHg1QkI1LFxuICAgIDB4OEZBQjogMHg1QzA2LFxuICAgIDB4OEZBQzogMHg1QzBGLFxuICAgIDB4OEZBRDogMHg1QzExLFxuICAgIDB4OEZBRTogMHg1QzFBLFxuICAgIDB4OEZBRjogMHg1RTg0LFxuICAgIDB4OEZCMDogMHg1RThBLFxuICAgIDB4OEZCMTogMHg1RUUwLFxuICAgIDB4OEZCMjogMHg1RjcwLFxuICAgIDB4OEZCMzogMHg2MjdGLFxuICAgIDB4OEZCNDogMHg2Mjg0LFxuICAgIDB4OEZCNTogMHg2MkRCLFxuICAgIDB4OEZCNjogMHg2MzhDLFxuICAgIDB4OEZCNzogMHg2Mzc3LFxuICAgIDB4OEZCODogMHg2NjA3LFxuICAgIDB4OEZCOTogMHg2NjBDLFxuICAgIDB4OEZCQTogMHg2NjJELFxuICAgIDB4OEZCQjogMHg2Njc2LFxuICAgIDB4OEZCQzogMHg2NzdFLFxuICAgIDB4OEZCRDogMHg2OEEyLFxuICAgIDB4OEZCRTogMHg2QTFGLFxuICAgIDB4OEZCRjogMHg2QTM1LFxuICAgIDB4OEZDMDogMHg2Q0JDLFxuICAgIDB4OEZDMTogMHg2RDg4LFxuICAgIDB4OEZDMjogMHg2RTA5LFxuICAgIDB4OEZDMzogMHg2RTU4LFxuICAgIDB4OEZDNDogMHg3MTNDLFxuICAgIDB4OEZDNTogMHg3MTI2LFxuICAgIDB4OEZDNjogMHg3MTY3LFxuICAgIDB4OEZDNzogMHg3NUM3LFxuICAgIDB4OEZDODogMHg3NzAxLFxuICAgIDB4OEZDOTogMHg3ODVELFxuICAgIDB4OEZDQTogMHg3OTAxLFxuICAgIDB4OEZDQjogMHg3OTY1LFxuICAgIDB4OEZDQzogMHg3OUYwLFxuICAgIDB4OEZDRDogMHg3QUUwLFxuICAgIDB4OEZDRTogMHg3QjExLFxuICAgIDB4OEZDRjogMHg3Q0E3LFxuICAgIDB4OEZEMDogMHg3RDM5LFxuICAgIDB4OEZEMTogMHg4MDk2LFxuICAgIDB4OEZEMjogMHg4M0Q2LFxuICAgIDB4OEZEMzogMHg4NDhCLFxuICAgIDB4OEZENDogMHg4NTQ5LFxuICAgIDB4OEZENTogMHg4ODVELFxuICAgIDB4OEZENjogMHg4OEYzLFxuICAgIDB4OEZENzogMHg4QTFGLFxuICAgIDB4OEZEODogMHg4QTNDLFxuICAgIDB4OEZEOTogMHg4QTU0LFxuICAgIDB4OEZEQTogMHg4QTczLFxuICAgIDB4OEZEQjogMHg4QzYxLFxuICAgIDB4OEZEQzogMHg4Q0RFLFxuICAgIDB4OEZERDogMHg5MUE0LFxuICAgIDB4OEZERTogMHg5MjY2LFxuICAgIDB4OEZERjogMHg5MzdFLFxuICAgIDB4OEZFMDogMHg5NDE4LFxuICAgIDB4OEZFMTogMHg5NjlDLFxuICAgIDB4OEZFMjogMHg5Nzk4LFxuICAgIDB4OEZFMzogMHg0RTBBLFxuICAgIDB4OEZFNDogMHg0RTA4LFxuICAgIDB4OEZFNTogMHg0RTFFLFxuICAgIDB4OEZFNjogMHg0RTU3LFxuICAgIDB4OEZFNzogMHg1MTk3LFxuICAgIDB4OEZFODogMHg1MjcwLFxuICAgIDB4OEZFOTogMHg1N0NFLFxuICAgIDB4OEZFQTogMHg1ODM0LFxuICAgIDB4OEZFQjogMHg1OENDLFxuICAgIDB4OEZFQzogMHg1QjIyLFxuICAgIDB4OEZFRDogMHg1RTM4LFxuICAgIDB4OEZFRTogMHg2MEM1LFxuICAgIDB4OEZFRjogMHg2NEZFLFxuICAgIDB4OEZGMDogMHg2NzYxLFxuICAgIDB4OEZGMTogMHg2NzU2LFxuICAgIDB4OEZGMjogMHg2RDQ0LFxuICAgIDB4OEZGMzogMHg3MkI2LFxuICAgIDB4OEZGNDogMHg3NTczLFxuICAgIDB4OEZGNTogMHg3QTYzLFxuICAgIDB4OEZGNjogMHg4NEI4LFxuICAgIDB4OEZGNzogMHg4QjcyLFxuICAgIDB4OEZGODogMHg5MUI4LFxuICAgIDB4OEZGOTogMHg5MzIwLFxuICAgIDB4OEZGQTogMHg1NjMxLFxuICAgIDB4OEZGQjogMHg1N0Y0LFxuICAgIDB4OEZGQzogMHg5OEZFLFxuICAgIDB4OTA0MDogMHg2MkVELFxuICAgIDB4OTA0MTogMHg2OTBELFxuICAgIDB4OTA0MjogMHg2Qjk2LFxuICAgIDB4OTA0MzogMHg3MUVELFxuICAgIDB4OTA0NDogMHg3RTU0LFxuICAgIDB4OTA0NTogMHg4MDc3LFxuICAgIDB4OTA0NjogMHg4MjcyLFxuICAgIDB4OTA0NzogMHg4OUU2LFxuICAgIDB4OTA0ODogMHg5OERGLFxuICAgIDB4OTA0OTogMHg4NzU1LFxuICAgIDB4OTA0QTogMHg4RkIxLFxuICAgIDB4OTA0QjogMHg1QzNCLFxuICAgIDB4OTA0QzogMHg0RjM4LFxuICAgIDB4OTA0RDogMHg0RkUxLFxuICAgIDB4OTA0RTogMHg0RkI1LFxuICAgIDB4OTA0RjogMHg1NTA3LFxuICAgIDB4OTA1MDogMHg1QTIwLFxuICAgIDB4OTA1MTogMHg1QkRELFxuICAgIDB4OTA1MjogMHg1QkU5LFxuICAgIDB4OTA1MzogMHg1RkMzLFxuICAgIDB4OTA1NDogMHg2MTRFLFxuICAgIDB4OTA1NTogMHg2MzJGLFxuICAgIDB4OTA1NjogMHg2NUIwLFxuICAgIDB4OTA1NzogMHg2NjRCLFxuICAgIDB4OTA1ODogMHg2OEVFLFxuICAgIDB4OTA1OTogMHg2OTlCLFxuICAgIDB4OTA1QTogMHg2RDc4LFxuICAgIDB4OTA1QjogMHg2REYxLFxuICAgIDB4OTA1QzogMHg3NTMzLFxuICAgIDB4OTA1RDogMHg3NUI5LFxuICAgIDB4OTA1RTogMHg3NzFGLFxuICAgIDB4OTA1RjogMHg3OTVFLFxuICAgIDB4OTA2MDogMHg3OUU2LFxuICAgIDB4OTA2MTogMHg3RDMzLFxuICAgIDB4OTA2MjogMHg4MUUzLFxuICAgIDB4OTA2MzogMHg4MkFGLFxuICAgIDB4OTA2NDogMHg4NUFBLFxuICAgIDB4OTA2NTogMHg4OUFBLFxuICAgIDB4OTA2NjogMHg4QTNBLFxuICAgIDB4OTA2NzogMHg4RUFCLFxuICAgIDB4OTA2ODogMHg4RjlCLFxuICAgIDB4OTA2OTogMHg5MDMyLFxuICAgIDB4OTA2QTogMHg5MURELFxuICAgIDB4OTA2QjogMHg5NzA3LFxuICAgIDB4OTA2QzogMHg0RUJBLFxuICAgIDB4OTA2RDogMHg0RUMxLFxuICAgIDB4OTA2RTogMHg1MjAzLFxuICAgIDB4OTA2RjogMHg1ODc1LFxuICAgIDB4OTA3MDogMHg1OEVDLFxuICAgIDB4OTA3MTogMHg1QzBCLFxuICAgIDB4OTA3MjogMHg3NTFBLFxuICAgIDB4OTA3MzogMHg1QzNELFxuICAgIDB4OTA3NDogMHg4MTRFLFxuICAgIDB4OTA3NTogMHg4QTBBLFxuICAgIDB4OTA3NjogMHg4RkM1LFxuICAgIDB4OTA3NzogMHg5NjYzLFxuICAgIDB4OTA3ODogMHg5NzZELFxuICAgIDB4OTA3OTogMHg3QjI1LFxuICAgIDB4OTA3QTogMHg4QUNGLFxuICAgIDB4OTA3QjogMHg5ODA4LFxuICAgIDB4OTA3QzogMHg5MTYyLFxuICAgIDB4OTA3RDogMHg1NkYzLFxuICAgIDB4OTA3RTogMHg1M0E4LFxuICAgIDB4OTA4MDogMHg5MDE3LFxuICAgIDB4OTA4MTogMHg1NDM5LFxuICAgIDB4OTA4MjogMHg1NzgyLFxuICAgIDB4OTA4MzogMHg1RTI1LFxuICAgIDB4OTA4NDogMHg2M0E4LFxuICAgIDB4OTA4NTogMHg2QzM0LFxuICAgIDB4OTA4NjogMHg3MDhBLFxuICAgIDB4OTA4NzogMHg3NzYxLFxuICAgIDB4OTA4ODogMHg3QzhCLFxuICAgIDB4OTA4OTogMHg3RkUwLFxuICAgIDB4OTA4QTogMHg4ODcwLFxuICAgIDB4OTA4QjogMHg5MDQyLFxuICAgIDB4OTA4QzogMHg5MTU0LFxuICAgIDB4OTA4RDogMHg5MzEwLFxuICAgIDB4OTA4RTogMHg5MzE4LFxuICAgIDB4OTA4RjogMHg5NjhGLFxuICAgIDB4OTA5MDogMHg3NDVFLFxuICAgIDB4OTA5MTogMHg5QUM0LFxuICAgIDB4OTA5MjogMHg1RDA3LFxuICAgIDB4OTA5MzogMHg1RDY5LFxuICAgIDB4OTA5NDogMHg2NTcwLFxuICAgIDB4OTA5NTogMHg2N0EyLFxuICAgIDB4OTA5NjogMHg4REE4LFxuICAgIDB4OTA5NzogMHg5NkRCLFxuICAgIDB4OTA5ODogMHg2MzZFLFxuICAgIDB4OTA5OTogMHg2NzQ5LFxuICAgIDB4OTA5QTogMHg2OTE5LFxuICAgIDB4OTA5QjogMHg4M0M1LFxuICAgIDB4OTA5QzogMHg5ODE3LFxuICAgIDB4OTA5RDogMHg5NkMwLFxuICAgIDB4OTA5RTogMHg4OEZFLFxuICAgIDB4OTA5RjogMHg2Rjg0LFxuICAgIDB4OTBBMDogMHg2NDdBLFxuICAgIDB4OTBBMTogMHg1QkY4LFxuICAgIDB4OTBBMjogMHg0RTE2LFxuICAgIDB4OTBBMzogMHg3MDJDLFxuICAgIDB4OTBBNDogMHg3NTVELFxuICAgIDB4OTBBNTogMHg2NjJGLFxuICAgIDB4OTBBNjogMHg1MUM0LFxuICAgIDB4OTBBNzogMHg1MjM2LFxuICAgIDB4OTBBODogMHg1MkUyLFxuICAgIDB4OTBBOTogMHg1OUQzLFxuICAgIDB4OTBBQTogMHg1RjgxLFxuICAgIDB4OTBBQjogMHg2MDI3LFxuICAgIDB4OTBBQzogMHg2MjEwLFxuICAgIDB4OTBBRDogMHg2NTNGLFxuICAgIDB4OTBBRTogMHg2NTc0LFxuICAgIDB4OTBBRjogMHg2NjFGLFxuICAgIDB4OTBCMDogMHg2Njc0LFxuICAgIDB4OTBCMTogMHg2OEYyLFxuICAgIDB4OTBCMjogMHg2ODE2LFxuICAgIDB4OTBCMzogMHg2QjYzLFxuICAgIDB4OTBCNDogMHg2RTA1LFxuICAgIDB4OTBCNTogMHg3MjcyLFxuICAgIDB4OTBCNjogMHg3NTFGLFxuICAgIDB4OTBCNzogMHg3NkRCLFxuICAgIDB4OTBCODogMHg3Q0JFLFxuICAgIDB4OTBCOTogMHg4MDU2LFxuICAgIDB4OTBCQTogMHg1OEYwLFxuICAgIDB4OTBCQjogMHg4OEZELFxuICAgIDB4OTBCQzogMHg4OTdGLFxuICAgIDB4OTBCRDogMHg4QUEwLFxuICAgIDB4OTBCRTogMHg4QTkzLFxuICAgIDB4OTBCRjogMHg4QUNCLFxuICAgIDB4OTBDMDogMHg5MDFELFxuICAgIDB4OTBDMTogMHg5MTkyLFxuICAgIDB4OTBDMjogMHg5NzUyLFxuICAgIDB4OTBDMzogMHg5NzU5LFxuICAgIDB4OTBDNDogMHg2NTg5LFxuICAgIDB4OTBDNTogMHg3QTBFLFxuICAgIDB4OTBDNjogMHg4MTA2LFxuICAgIDB4OTBDNzogMHg5NkJCLFxuICAgIDB4OTBDODogMHg1RTJELFxuICAgIDB4OTBDOTogMHg2MERDLFxuICAgIDB4OTBDQTogMHg2MjFBLFxuICAgIDB4OTBDQjogMHg2NUE1LFxuICAgIDB4OTBDQzogMHg2NjE0LFxuICAgIDB4OTBDRDogMHg2NzkwLFxuICAgIDB4OTBDRTogMHg3N0YzLFxuICAgIDB4OTBDRjogMHg3QTRELFxuICAgIDB4OTBEMDogMHg3QzRELFxuICAgIDB4OTBEMTogMHg3RTNFLFxuICAgIDB4OTBEMjogMHg4MTBBLFxuICAgIDB4OTBEMzogMHg4Q0FDLFxuICAgIDB4OTBENDogMHg4RDY0LFxuICAgIDB4OTBENTogMHg4REUxLFxuICAgIDB4OTBENjogMHg4RTVGLFxuICAgIDB4OTBENzogMHg3OEE5LFxuICAgIDB4OTBEODogMHg1MjA3LFxuICAgIDB4OTBEOTogMHg2MkQ5LFxuICAgIDB4OTBEQTogMHg2M0E1LFxuICAgIDB4OTBEQjogMHg2NDQyLFxuICAgIDB4OTBEQzogMHg2Mjk4LFxuICAgIDB4OTBERDogMHg4QTJELFxuICAgIDB4OTBERTogMHg3QTgzLFxuICAgIDB4OTBERjogMHg3QkMwLFxuICAgIDB4OTBFMDogMHg4QUFDLFxuICAgIDB4OTBFMTogMHg5NkVBLFxuICAgIDB4OTBFMjogMHg3RDc2LFxuICAgIDB4OTBFMzogMHg4MjBDLFxuICAgIDB4OTBFNDogMHg4NzQ5LFxuICAgIDB4OTBFNTogMHg0RUQ5LFxuICAgIDB4OTBFNjogMHg1MTQ4LFxuICAgIDB4OTBFNzogMHg1MzQzLFxuICAgIDB4OTBFODogMHg1MzYwLFxuICAgIDB4OTBFOTogMHg1QkEzLFxuICAgIDB4OTBFQTogMHg1QzAyLFxuICAgIDB4OTBFQjogMHg1QzE2LFxuICAgIDB4OTBFQzogMHg1RERELFxuICAgIDB4OTBFRDogMHg2MjI2LFxuICAgIDB4OTBFRTogMHg2MjQ3LFxuICAgIDB4OTBFRjogMHg2NEIwLFxuICAgIDB4OTBGMDogMHg2ODEzLFxuICAgIDB4OTBGMTogMHg2ODM0LFxuICAgIDB4OTBGMjogMHg2Q0M5LFxuICAgIDB4OTBGMzogMHg2RDQ1LFxuICAgIDB4OTBGNDogMHg2RDE3LFxuICAgIDB4OTBGNTogMHg2N0QzLFxuICAgIDB4OTBGNjogMHg2RjVDLFxuICAgIDB4OTBGNzogMHg3MTRFLFxuICAgIDB4OTBGODogMHg3MTdELFxuICAgIDB4OTBGOTogMHg2NUNCLFxuICAgIDB4OTBGQTogMHg3QTdGLFxuICAgIDB4OTBGQjogMHg3QkFELFxuICAgIDB4OTBGQzogMHg3RERBLFxuICAgIDB4OTE0MDogMHg3RTRBLFxuICAgIDB4OTE0MTogMHg3RkE4LFxuICAgIDB4OTE0MjogMHg4MTdBLFxuICAgIDB4OTE0MzogMHg4MjFCLFxuICAgIDB4OTE0NDogMHg4MjM5LFxuICAgIDB4OTE0NTogMHg4NUE2LFxuICAgIDB4OTE0NjogMHg4QTZFLFxuICAgIDB4OTE0NzogMHg4Q0NFLFxuICAgIDB4OTE0ODogMHg4REY1LFxuICAgIDB4OTE0OTogMHg5MDc4LFxuICAgIDB4OTE0QTogMHg5MDc3LFxuICAgIDB4OTE0QjogMHg5MkFELFxuICAgIDB4OTE0QzogMHg5MjkxLFxuICAgIDB4OTE0RDogMHg5NTgzLFxuICAgIDB4OTE0RTogMHg5QkFFLFxuICAgIDB4OTE0RjogMHg1MjRELFxuICAgIDB4OTE1MDogMHg1NTg0LFxuICAgIDB4OTE1MTogMHg2RjM4LFxuICAgIDB4OTE1MjogMHg3MTM2LFxuICAgIDB4OTE1MzogMHg1MTY4LFxuICAgIDB4OTE1NDogMHg3OTg1LFxuICAgIDB4OTE1NTogMHg3RTU1LFxuICAgIDB4OTE1NjogMHg4MUIzLFxuICAgIDB4OTE1NzogMHg3Q0NFLFxuICAgIDB4OTE1ODogMHg1NjRDLFxuICAgIDB4OTE1OTogMHg1ODUxLFxuICAgIDB4OTE1QTogMHg1Q0E4LFxuICAgIDB4OTE1QjogMHg2M0FBLFxuICAgIDB4OTE1QzogMHg2NkZFLFxuICAgIDB4OTE1RDogMHg2NkZELFxuICAgIDB4OTE1RTogMHg2OTVBLFxuICAgIDB4OTE1RjogMHg3MkQ5LFxuICAgIDB4OTE2MDogMHg3NThGLFxuICAgIDB4OTE2MTogMHg3NThFLFxuICAgIDB4OTE2MjogMHg3OTBFLFxuICAgIDB4OTE2MzogMHg3OTU2LFxuICAgIDB4OTE2NDogMHg3OURGLFxuICAgIDB4OTE2NTogMHg3Qzk3LFxuICAgIDB4OTE2NjogMHg3RDIwLFxuICAgIDB4OTE2NzogMHg3RDQ0LFxuICAgIDB4OTE2ODogMHg4NjA3LFxuICAgIDB4OTE2OTogMHg4QTM0LFxuICAgIDB4OTE2QTogMHg5NjNCLFxuICAgIDB4OTE2QjogMHg5MDYxLFxuICAgIDB4OTE2QzogMHg5RjIwLFxuICAgIDB4OTE2RDogMHg1MEU3LFxuICAgIDB4OTE2RTogMHg1Mjc1LFxuICAgIDB4OTE2RjogMHg1M0NDLFxuICAgIDB4OTE3MDogMHg1M0UyLFxuICAgIDB4OTE3MTogMHg1MDA5LFxuICAgIDB4OTE3MjogMHg1NUFBLFxuICAgIDB4OTE3MzogMHg1OEVFLFxuICAgIDB4OTE3NDogMHg1OTRGLFxuICAgIDB4OTE3NTogMHg3MjNELFxuICAgIDB4OTE3NjogMHg1QjhCLFxuICAgIDB4OTE3NzogMHg1QzY0LFxuICAgIDB4OTE3ODogMHg1MzFELFxuICAgIDB4OTE3OTogMHg2MEUzLFxuICAgIDB4OTE3QTogMHg2MEYzLFxuICAgIDB4OTE3QjogMHg2MzVDLFxuICAgIDB4OTE3QzogMHg2MzgzLFxuICAgIDB4OTE3RDogMHg2MzNGLFxuICAgIDB4OTE3RTogMHg2M0JCLFxuICAgIDB4OTE4MDogMHg2NENELFxuICAgIDB4OTE4MTogMHg2NUU5LFxuICAgIDB4OTE4MjogMHg2NkY5LFxuICAgIDB4OTE4MzogMHg1REUzLFxuICAgIDB4OTE4NDogMHg2OUNELFxuICAgIDB4OTE4NTogMHg2OUZELFxuICAgIDB4OTE4NjogMHg2RjE1LFxuICAgIDB4OTE4NzogMHg3MUU1LFxuICAgIDB4OTE4ODogMHg0RTg5LFxuICAgIDB4OTE4OTogMHg3NUU5LFxuICAgIDB4OTE4QTogMHg3NkY4LFxuICAgIDB4OTE4QjogMHg3QTkzLFxuICAgIDB4OTE4QzogMHg3Q0RGLFxuICAgIDB4OTE4RDogMHg3RENGLFxuICAgIDB4OTE4RTogMHg3RDlDLFxuICAgIDB4OTE4RjogMHg4MDYxLFxuICAgIDB4OTE5MDogMHg4MzQ5LFxuICAgIDB4OTE5MTogMHg4MzU4LFxuICAgIDB4OTE5MjogMHg4NDZDLFxuICAgIDB4OTE5MzogMHg4NEJDLFxuICAgIDB4OTE5NDogMHg4NUZCLFxuICAgIDB4OTE5NTogMHg4OEM1LFxuICAgIDB4OTE5NjogMHg4RDcwLFxuICAgIDB4OTE5NzogMHg5MDAxLFxuICAgIDB4OTE5ODogMHg5MDZELFxuICAgIDB4OTE5OTogMHg5Mzk3LFxuICAgIDB4OTE5QTogMHg5NzFDLFxuICAgIDB4OTE5QjogMHg5QTEyLFxuICAgIDB4OTE5QzogMHg1MENGLFxuICAgIDB4OTE5RDogMHg1ODk3LFxuICAgIDB4OTE5RTogMHg2MThFLFxuICAgIDB4OTE5RjogMHg4MUQzLFxuICAgIDB4OTFBMDogMHg4NTM1LFxuICAgIDB4OTFBMTogMHg4RDA4LFxuICAgIDB4OTFBMjogMHg5MDIwLFxuICAgIDB4OTFBMzogMHg0RkMzLFxuICAgIDB4OTFBNDogMHg1MDc0LFxuICAgIDB4OTFBNTogMHg1MjQ3LFxuICAgIDB4OTFBNjogMHg1MzczLFxuICAgIDB4OTFBNzogMHg2MDZGLFxuICAgIDB4OTFBODogMHg2MzQ5LFxuICAgIDB4OTFBOTogMHg2NzVGLFxuICAgIDB4OTFBQTogMHg2RTJDLFxuICAgIDB4OTFBQjogMHg4REIzLFxuICAgIDB4OTFBQzogMHg5MDFGLFxuICAgIDB4OTFBRDogMHg0RkQ3LFxuICAgIDB4OTFBRTogMHg1QzVFLFxuICAgIDB4OTFBRjogMHg4Q0NBLFxuICAgIDB4OTFCMDogMHg2NUNGLFxuICAgIDB4OTFCMTogMHg3RDlBLFxuICAgIDB4OTFCMjogMHg1MzUyLFxuICAgIDB4OTFCMzogMHg4ODk2LFxuICAgIDB4OTFCNDogMHg1MTc2LFxuICAgIDB4OTFCNTogMHg2M0MzLFxuICAgIDB4OTFCNjogMHg1QjU4LFxuICAgIDB4OTFCNzogMHg1QjZCLFxuICAgIDB4OTFCODogMHg1QzBBLFxuICAgIDB4OTFCOTogMHg2NDBELFxuICAgIDB4OTFCQTogMHg2NzUxLFxuICAgIDB4OTFCQjogMHg5MDVDLFxuICAgIDB4OTFCQzogMHg0RUQ2LFxuICAgIDB4OTFCRDogMHg1OTFBLFxuICAgIDB4OTFCRTogMHg1OTJBLFxuICAgIDB4OTFCRjogMHg2QzcwLFxuICAgIDB4OTFDMDogMHg4QTUxLFxuICAgIDB4OTFDMTogMHg1NTNFLFxuICAgIDB4OTFDMjogMHg1ODE1LFxuICAgIDB4OTFDMzogMHg1OUE1LFxuICAgIDB4OTFDNDogMHg2MEYwLFxuICAgIDB4OTFDNTogMHg2MjUzLFxuICAgIDB4OTFDNjogMHg2N0MxLFxuICAgIDB4OTFDNzogMHg4MjM1LFxuICAgIDB4OTFDODogMHg2OTU1LFxuICAgIDB4OTFDOTogMHg5NjQwLFxuICAgIDB4OTFDQTogMHg5OUM0LFxuICAgIDB4OTFDQjogMHg5QTI4LFxuICAgIDB4OTFDQzogMHg0RjUzLFxuICAgIDB4OTFDRDogMHg1ODA2LFxuICAgIDB4OTFDRTogMHg1QkZFLFxuICAgIDB4OTFDRjogMHg4MDEwLFxuICAgIDB4OTFEMDogMHg1Q0IxLFxuICAgIDB4OTFEMTogMHg1RTJGLFxuICAgIDB4OTFEMjogMHg1Rjg1LFxuICAgIDB4OTFEMzogMHg2MDIwLFxuICAgIDB4OTFENDogMHg2MTRCLFxuICAgIDB4OTFENTogMHg2MjM0LFxuICAgIDB4OTFENjogMHg2NkZGLFxuICAgIDB4OTFENzogMHg2Q0YwLFxuICAgIDB4OTFEODogMHg2RURFLFxuICAgIDB4OTFEOTogMHg4MENFLFxuICAgIDB4OTFEQTogMHg4MTdGLFxuICAgIDB4OTFEQjogMHg4MkQ0LFxuICAgIDB4OTFEQzogMHg4ODhCLFxuICAgIDB4OTFERDogMHg4Q0I4LFxuICAgIDB4OTFERTogMHg5MDAwLFxuICAgIDB4OTFERjogMHg5MDJFLFxuICAgIDB4OTFFMDogMHg5NjhBLFxuICAgIDB4OTFFMTogMHg5RURCLFxuICAgIDB4OTFFMjogMHg5QkRCLFxuICAgIDB4OTFFMzogMHg0RUUzLFxuICAgIDB4OTFFNDogMHg1M0YwLFxuICAgIDB4OTFFNTogMHg1OTI3LFxuICAgIDB4OTFFNjogMHg3QjJDLFxuICAgIDB4OTFFNzogMHg5MThELFxuICAgIDB4OTFFODogMHg5ODRDLFxuICAgIDB4OTFFOTogMHg5REY5LFxuICAgIDB4OTFFQTogMHg2RURELFxuICAgIDB4OTFFQjogMHg3MDI3LFxuICAgIDB4OTFFQzogMHg1MzUzLFxuICAgIDB4OTFFRDogMHg1NTQ0LFxuICAgIDB4OTFFRTogMHg1Qjg1LFxuICAgIDB4OTFFRjogMHg2MjU4LFxuICAgIDB4OTFGMDogMHg2MjlFLFxuICAgIDB4OTFGMTogMHg2MkQzLFxuICAgIDB4OTFGMjogMHg2Q0EyLFxuICAgIDB4OTFGMzogMHg2RkVGLFxuICAgIDB4OTFGNDogMHg3NDIyLFxuICAgIDB4OTFGNTogMHg4QTE3LFxuICAgIDB4OTFGNjogMHg5NDM4LFxuICAgIDB4OTFGNzogMHg2RkMxLFxuICAgIDB4OTFGODogMHg4QUZFLFxuICAgIDB4OTFGOTogMHg4MzM4LFxuICAgIDB4OTFGQTogMHg1MUU3LFxuICAgIDB4OTFGQjogMHg4NkY4LFxuICAgIDB4OTFGQzogMHg1M0VBLFxuICAgIDB4OTI0MDogMHg1M0U5LFxuICAgIDB4OTI0MTogMHg0RjQ2LFxuICAgIDB4OTI0MjogMHg5MDU0LFxuICAgIDB4OTI0MzogMHg4RkIwLFxuICAgIDB4OTI0NDogMHg1OTZBLFxuICAgIDB4OTI0NTogMHg4MTMxLFxuICAgIDB4OTI0NjogMHg1REZELFxuICAgIDB4OTI0NzogMHg3QUVBLFxuICAgIDB4OTI0ODogMHg4RkJGLFxuICAgIDB4OTI0OTogMHg2OERBLFxuICAgIDB4OTI0QTogMHg4QzM3LFxuICAgIDB4OTI0QjogMHg3MkY4LFxuICAgIDB4OTI0QzogMHg5QzQ4LFxuICAgIDB4OTI0RDogMHg2QTNELFxuICAgIDB4OTI0RTogMHg4QUIwLFxuICAgIDB4OTI0RjogMHg0RTM5LFxuICAgIDB4OTI1MDogMHg1MzU4LFxuICAgIDB4OTI1MTogMHg1NjA2LFxuICAgIDB4OTI1MjogMHg1NzY2LFxuICAgIDB4OTI1MzogMHg2MkM1LFxuICAgIDB4OTI1NDogMHg2M0EyLFxuICAgIDB4OTI1NTogMHg2NUU2LFxuICAgIDB4OTI1NjogMHg2QjRFLFxuICAgIDB4OTI1NzogMHg2REUxLFxuICAgIDB4OTI1ODogMHg2RTVCLFxuICAgIDB4OTI1OTogMHg3MEFELFxuICAgIDB4OTI1QTogMHg3N0VELFxuICAgIDB4OTI1QjogMHg3QUVGLFxuICAgIDB4OTI1QzogMHg3QkFBLFxuICAgIDB4OTI1RDogMHg3REJCLFxuICAgIDB4OTI1RTogMHg4MDNELFxuICAgIDB4OTI1RjogMHg4MEM2LFxuICAgIDB4OTI2MDogMHg4NkNCLFxuICAgIDB4OTI2MTogMHg4QTk1LFxuICAgIDB4OTI2MjogMHg5MzVCLFxuICAgIDB4OTI2MzogMHg1NkUzLFxuICAgIDB4OTI2NDogMHg1OEM3LFxuICAgIDB4OTI2NTogMHg1RjNFLFxuICAgIDB4OTI2NjogMHg2NUFELFxuICAgIDB4OTI2NzogMHg2Njk2LFxuICAgIDB4OTI2ODogMHg2QTgwLFxuICAgIDB4OTI2OTogMHg2QkI1LFxuICAgIDB4OTI2QTogMHg3NTM3LFxuICAgIDB4OTI2QjogMHg4QUM3LFxuICAgIDB4OTI2QzogMHg1MDI0LFxuICAgIDB4OTI2RDogMHg3N0U1LFxuICAgIDB4OTI2RTogMHg1NzMwLFxuICAgIDB4OTI2RjogMHg1RjFCLFxuICAgIDB4OTI3MDogMHg2MDY1LFxuICAgIDB4OTI3MTogMHg2NjdBLFxuICAgIDB4OTI3MjogMHg2QzYwLFxuICAgIDB4OTI3MzogMHg3NUY0LFxuICAgIDB4OTI3NDogMHg3QTFBLFxuICAgIDB4OTI3NTogMHg3RjZFLFxuICAgIDB4OTI3NjogMHg4MUY0LFxuICAgIDB4OTI3NzogMHg4NzE4LFxuICAgIDB4OTI3ODogMHg5MDQ1LFxuICAgIDB4OTI3OTogMHg5OUIzLFxuICAgIDB4OTI3QTogMHg3QkM5LFxuICAgIDB4OTI3QjogMHg3NTVDLFxuICAgIDB4OTI3QzogMHg3QUY5LFxuICAgIDB4OTI3RDogMHg3QjUxLFxuICAgIDB4OTI3RTogMHg4NEM0LFxuICAgIDB4OTI4MDogMHg5MDEwLFxuICAgIDB4OTI4MTogMHg3OUU5LFxuICAgIDB4OTI4MjogMHg3QTkyLFxuICAgIDB4OTI4MzogMHg4MzM2LFxuICAgIDB4OTI4NDogMHg1QUUxLFxuICAgIDB4OTI4NTogMHg3NzQwLFxuICAgIDB4OTI4NjogMHg0RTJELFxuICAgIDB4OTI4NzogMHg0RUYyLFxuICAgIDB4OTI4ODogMHg1Qjk5LFxuICAgIDB4OTI4OTogMHg1RkUwLFxuICAgIDB4OTI4QTogMHg2MkJELFxuICAgIDB4OTI4QjogMHg2NjNDLFxuICAgIDB4OTI4QzogMHg2N0YxLFxuICAgIDB4OTI4RDogMHg2Q0U4LFxuICAgIDB4OTI4RTogMHg4NjZCLFxuICAgIDB4OTI4RjogMHg4ODc3LFxuICAgIDB4OTI5MDogMHg4QTNCLFxuICAgIDB4OTI5MTogMHg5MTRFLFxuICAgIDB4OTI5MjogMHg5MkYzLFxuICAgIDB4OTI5MzogMHg5OUQwLFxuICAgIDB4OTI5NDogMHg2QTE3LFxuICAgIDB4OTI5NTogMHg3MDI2LFxuICAgIDB4OTI5NjogMHg3MzJBLFxuICAgIDB4OTI5NzogMHg4MkU3LFxuICAgIDB4OTI5ODogMHg4NDU3LFxuICAgIDB4OTI5OTogMHg4Q0FGLFxuICAgIDB4OTI5QTogMHg0RTAxLFxuICAgIDB4OTI5QjogMHg1MTQ2LFxuICAgIDB4OTI5QzogMHg1MUNCLFxuICAgIDB4OTI5RDogMHg1NThCLFxuICAgIDB4OTI5RTogMHg1QkY1LFxuICAgIDB4OTI5RjogMHg1RTE2LFxuICAgIDB4OTJBMDogMHg1RTMzLFxuICAgIDB4OTJBMTogMHg1RTgxLFxuICAgIDB4OTJBMjogMHg1RjE0LFxuICAgIDB4OTJBMzogMHg1RjM1LFxuICAgIDB4OTJBNDogMHg1RjZCLFxuICAgIDB4OTJBNTogMHg1RkI0LFxuICAgIDB4OTJBNjogMHg2MUYyLFxuICAgIDB4OTJBNzogMHg2MzExLFxuICAgIDB4OTJBODogMHg2NkEyLFxuICAgIDB4OTJBOTogMHg2NzFELFxuICAgIDB4OTJBQTogMHg2RjZFLFxuICAgIDB4OTJBQjogMHg3MjUyLFxuICAgIDB4OTJBQzogMHg3NTNBLFxuICAgIDB4OTJBRDogMHg3NzNBLFxuICAgIDB4OTJBRTogMHg4MDc0LFxuICAgIDB4OTJBRjogMHg4MTM5LFxuICAgIDB4OTJCMDogMHg4MTc4LFxuICAgIDB4OTJCMTogMHg4Nzc2LFxuICAgIDB4OTJCMjogMHg4QUJGLFxuICAgIDB4OTJCMzogMHg4QURDLFxuICAgIDB4OTJCNDogMHg4RDg1LFxuICAgIDB4OTJCNTogMHg4REYzLFxuICAgIDB4OTJCNjogMHg5MjlBLFxuICAgIDB4OTJCNzogMHg5NTc3LFxuICAgIDB4OTJCODogMHg5ODAyLFxuICAgIDB4OTJCOTogMHg5Q0U1LFxuICAgIDB4OTJCQTogMHg1MkM1LFxuICAgIDB4OTJCQjogMHg2MzU3LFxuICAgIDB4OTJCQzogMHg3NkY0LFxuICAgIDB4OTJCRDogMHg2NzE1LFxuICAgIDB4OTJCRTogMHg2Qzg4LFxuICAgIDB4OTJCRjogMHg3M0NELFxuICAgIDB4OTJDMDogMHg4Q0MzLFxuICAgIDB4OTJDMTogMHg5M0FFLFxuICAgIDB4OTJDMjogMHg5NjczLFxuICAgIDB4OTJDMzogMHg2RDI1LFxuICAgIDB4OTJDNDogMHg1ODlDLFxuICAgIDB4OTJDNTogMHg2OTBFLFxuICAgIDB4OTJDNjogMHg2OUNDLFxuICAgIDB4OTJDNzogMHg4RkZELFxuICAgIDB4OTJDODogMHg5MzlBLFxuICAgIDB4OTJDOTogMHg3NURCLFxuICAgIDB4OTJDQTogMHg5MDFBLFxuICAgIDB4OTJDQjogMHg1ODVBLFxuICAgIDB4OTJDQzogMHg2ODAyLFxuICAgIDB4OTJDRDogMHg2M0I0LFxuICAgIDB4OTJDRTogMHg2OUZCLFxuICAgIDB4OTJDRjogMHg0RjQzLFxuICAgIDB4OTJEMDogMHg2RjJDLFxuICAgIDB4OTJEMTogMHg2N0Q4LFxuICAgIDB4OTJEMjogMHg4RkJCLFxuICAgIDB4OTJEMzogMHg4NTI2LFxuICAgIDB4OTJENDogMHg3REI0LFxuICAgIDB4OTJENTogMHg5MzU0LFxuICAgIDB4OTJENjogMHg2OTNGLFxuICAgIDB4OTJENzogMHg2RjcwLFxuICAgIDB4OTJEODogMHg1NzZBLFxuICAgIDB4OTJEOTogMHg1OEY3LFxuICAgIDB4OTJEQTogMHg1QjJDLFxuICAgIDB4OTJEQjogMHg3RDJDLFxuICAgIDB4OTJEQzogMHg3MjJBLFxuICAgIDB4OTJERDogMHg1NDBBLFxuICAgIDB4OTJERTogMHg5MUUzLFxuICAgIDB4OTJERjogMHg5REI0LFxuICAgIDB4OTJFMDogMHg0RUFELFxuICAgIDB4OTJFMTogMHg0RjRFLFxuICAgIDB4OTJFMjogMHg1MDVDLFxuICAgIDB4OTJFMzogMHg1MDc1LFxuICAgIDB4OTJFNDogMHg1MjQzLFxuICAgIDB4OTJFNTogMHg4QzlFLFxuICAgIDB4OTJFNjogMHg1NDQ4LFxuICAgIDB4OTJFNzogMHg1ODI0LFxuICAgIDB4OTJFODogMHg1QjlBLFxuICAgIDB4OTJFOTogMHg1RTFELFxuICAgIDB4OTJFQTogMHg1RTk1LFxuICAgIDB4OTJFQjogMHg1RUFELFxuICAgIDB4OTJFQzogMHg1RUY3LFxuICAgIDB4OTJFRDogMHg1RjFGLFxuICAgIDB4OTJFRTogMHg2MDhDLFxuICAgIDB4OTJFRjogMHg2MkI1LFxuICAgIDB4OTJGMDogMHg2MzNBLFxuICAgIDB4OTJGMTogMHg2M0QwLFxuICAgIDB4OTJGMjogMHg2OEFGLFxuICAgIDB4OTJGMzogMHg2QzQwLFxuICAgIDB4OTJGNDogMHg3ODg3LFxuICAgIDB4OTJGNTogMHg3OThFLFxuICAgIDB4OTJGNjogMHg3QTBCLFxuICAgIDB4OTJGNzogMHg3REUwLFxuICAgIDB4OTJGODogMHg4MjQ3LFxuICAgIDB4OTJGOTogMHg4QTAyLFxuICAgIDB4OTJGQTogMHg4QUU2LFxuICAgIDB4OTJGQjogMHg4RTQ0LFxuICAgIDB4OTJGQzogMHg5MDEzLFxuICAgIDB4OTM0MDogMHg5MEI4LFxuICAgIDB4OTM0MTogMHg5MTJELFxuICAgIDB4OTM0MjogMHg5MUQ4LFxuICAgIDB4OTM0MzogMHg5RjBFLFxuICAgIDB4OTM0NDogMHg2Q0U1LFxuICAgIDB4OTM0NTogMHg2NDU4LFxuICAgIDB4OTM0NjogMHg2NEUyLFxuICAgIDB4OTM0NzogMHg2NTc1LFxuICAgIDB4OTM0ODogMHg2RUY0LFxuICAgIDB4OTM0OTogMHg3Njg0LFxuICAgIDB4OTM0QTogMHg3QjFCLFxuICAgIDB4OTM0QjogMHg5MDY5LFxuICAgIDB4OTM0QzogMHg5M0QxLFxuICAgIDB4OTM0RDogMHg2RUJBLFxuICAgIDB4OTM0RTogMHg1NEYyLFxuICAgIDB4OTM0RjogMHg1RkI5LFxuICAgIDB4OTM1MDogMHg2NEE0LFxuICAgIDB4OTM1MTogMHg4RjRELFxuICAgIDB4OTM1MjogMHg4RkVELFxuICAgIDB4OTM1MzogMHg5MjQ0LFxuICAgIDB4OTM1NDogMHg1MTc4LFxuICAgIDB4OTM1NTogMHg1ODZCLFxuICAgIDB4OTM1NjogMHg1OTI5LFxuICAgIDB4OTM1NzogMHg1QzU1LFxuICAgIDB4OTM1ODogMHg1RTk3LFxuICAgIDB4OTM1OTogMHg2REZCLFxuICAgIDB4OTM1QTogMHg3RThGLFxuICAgIDB4OTM1QjogMHg3NTFDLFxuICAgIDB4OTM1QzogMHg4Q0JDLFxuICAgIDB4OTM1RDogMHg4RUUyLFxuICAgIDB4OTM1RTogMHg5ODVCLFxuICAgIDB4OTM1RjogMHg3MEI5LFxuICAgIDB4OTM2MDogMHg0RjFELFxuICAgIDB4OTM2MTogMHg2QkJGLFxuICAgIDB4OTM2MjogMHg2RkIxLFxuICAgIDB4OTM2MzogMHg3NTMwLFxuICAgIDB4OTM2NDogMHg5NkZCLFxuICAgIDB4OTM2NTogMHg1MTRFLFxuICAgIDB4OTM2NjogMHg1NDEwLFxuICAgIDB4OTM2NzogMHg1ODM1LFxuICAgIDB4OTM2ODogMHg1ODU3LFxuICAgIDB4OTM2OTogMHg1OUFDLFxuICAgIDB4OTM2QTogMHg1QzYwLFxuICAgIDB4OTM2QjogMHg1RjkyLFxuICAgIDB4OTM2QzogMHg2NTk3LFxuICAgIDB4OTM2RDogMHg2NzVDLFxuICAgIDB4OTM2RTogMHg2RTIxLFxuICAgIDB4OTM2RjogMHg3NjdCLFxuICAgIDB4OTM3MDogMHg4M0RGLFxuICAgIDB4OTM3MTogMHg4Q0VELFxuICAgIDB4OTM3MjogMHg5MDE0LFxuICAgIDB4OTM3MzogMHg5MEZELFxuICAgIDB4OTM3NDogMHg5MzRELFxuICAgIDB4OTM3NTogMHg3ODI1LFxuICAgIDB4OTM3NjogMHg3ODNBLFxuICAgIDB4OTM3NzogMHg1MkFBLFxuICAgIDB4OTM3ODogMHg1RUE2LFxuICAgIDB4OTM3OTogMHg1NzFGLFxuICAgIDB4OTM3QTogMHg1OTc0LFxuICAgIDB4OTM3QjogMHg2MDEyLFxuICAgIDB4OTM3QzogMHg1MDEyLFxuICAgIDB4OTM3RDogMHg1MTVBLFxuICAgIDB4OTM3RTogMHg1MUFDLFxuICAgIDB4OTM4MDogMHg1MUNELFxuICAgIDB4OTM4MTogMHg1MjAwLFxuICAgIDB4OTM4MjogMHg1NTEwLFxuICAgIDB4OTM4MzogMHg1ODU0LFxuICAgIDB4OTM4NDogMHg1ODU4LFxuICAgIDB4OTM4NTogMHg1OTU3LFxuICAgIDB4OTM4NjogMHg1Qjk1LFxuICAgIDB4OTM4NzogMHg1Q0Y2LFxuICAgIDB4OTM4ODogMHg1RDhCLFxuICAgIDB4OTM4OTogMHg2MEJDLFxuICAgIDB4OTM4QTogMHg2Mjk1LFxuICAgIDB4OTM4QjogMHg2NDJELFxuICAgIDB4OTM4QzogMHg2NzcxLFxuICAgIDB4OTM4RDogMHg2ODQzLFxuICAgIDB4OTM4RTogMHg2OEJDLFxuICAgIDB4OTM4RjogMHg2OERGLFxuICAgIDB4OTM5MDogMHg3NkQ3LFxuICAgIDB4OTM5MTogMHg2REQ4LFxuICAgIDB4OTM5MjogMHg2RTZGLFxuICAgIDB4OTM5MzogMHg2RDlCLFxuICAgIDB4OTM5NDogMHg3MDZGLFxuICAgIDB4OTM5NTogMHg3MUM4LFxuICAgIDB4OTM5NjogMHg1RjUzLFxuICAgIDB4OTM5NzogMHg3NUQ4LFxuICAgIDB4OTM5ODogMHg3OTc3LFxuICAgIDB4OTM5OTogMHg3QjQ5LFxuICAgIDB4OTM5QTogMHg3QjU0LFxuICAgIDB4OTM5QjogMHg3QjUyLFxuICAgIDB4OTM5QzogMHg3Q0Q2LFxuICAgIDB4OTM5RDogMHg3RDcxLFxuICAgIDB4OTM5RTogMHg1MjMwLFxuICAgIDB4OTM5RjogMHg4NDYzLFxuICAgIDB4OTNBMDogMHg4NTY5LFxuICAgIDB4OTNBMTogMHg4NUU0LFxuICAgIDB4OTNBMjogMHg4QTBFLFxuICAgIDB4OTNBMzogMHg4QjA0LFxuICAgIDB4OTNBNDogMHg4QzQ2LFxuICAgIDB4OTNBNTogMHg4RTBGLFxuICAgIDB4OTNBNjogMHg5MDAzLFxuICAgIDB4OTNBNzogMHg5MDBGLFxuICAgIDB4OTNBODogMHg5NDE5LFxuICAgIDB4OTNBOTogMHg5Njc2LFxuICAgIDB4OTNBQTogMHg5ODJELFxuICAgIDB4OTNBQjogMHg5QTMwLFxuICAgIDB4OTNBQzogMHg5NUQ4LFxuICAgIDB4OTNBRDogMHg1MENELFxuICAgIDB4OTNBRTogMHg1MkQ1LFxuICAgIDB4OTNBRjogMHg1NDBDLFxuICAgIDB4OTNCMDogMHg1ODAyLFxuICAgIDB4OTNCMTogMHg1QzBFLFxuICAgIDB4OTNCMjogMHg2MUE3LFxuICAgIDB4OTNCMzogMHg2NDlFLFxuICAgIDB4OTNCNDogMHg2RDFFLFxuICAgIDB4OTNCNTogMHg3N0IzLFxuICAgIDB4OTNCNjogMHg3QUU1LFxuICAgIDB4OTNCNzogMHg4MEY0LFxuICAgIDB4OTNCODogMHg4NDA0LFxuICAgIDB4OTNCOTogMHg5MDUzLFxuICAgIDB4OTNCQTogMHg5Mjg1LFxuICAgIDB4OTNCQjogMHg1Q0UwLFxuICAgIDB4OTNCQzogMHg5RDA3LFxuICAgIDB4OTNCRDogMHg1MzNGLFxuICAgIDB4OTNCRTogMHg1Rjk3LFxuICAgIDB4OTNCRjogMHg1RkIzLFxuICAgIDB4OTNDMDogMHg2RDlDLFxuICAgIDB4OTNDMTogMHg3Mjc5LFxuICAgIDB4OTNDMjogMHg3NzYzLFxuICAgIDB4OTNDMzogMHg3OUJGLFxuICAgIDB4OTNDNDogMHg3QkU0LFxuICAgIDB4OTNDNTogMHg2QkQyLFxuICAgIDB4OTNDNjogMHg3MkVDLFxuICAgIDB4OTNDNzogMHg4QUFELFxuICAgIDB4OTNDODogMHg2ODAzLFxuICAgIDB4OTNDOTogMHg2QTYxLFxuICAgIDB4OTNDQTogMHg1MUY4LFxuICAgIDB4OTNDQjogMHg3QTgxLFxuICAgIDB4OTNDQzogMHg2OTM0LFxuICAgIDB4OTNDRDogMHg1QzRBLFxuICAgIDB4OTNDRTogMHg5Q0Y2LFxuICAgIDB4OTNDRjogMHg4MkVCLFxuICAgIDB4OTNEMDogMHg1QkM1LFxuICAgIDB4OTNEMTogMHg5MTQ5LFxuICAgIDB4OTNEMjogMHg3MDFFLFxuICAgIDB4OTNEMzogMHg1Njc4LFxuICAgIDB4OTNENDogMHg1QzZGLFxuICAgIDB4OTNENTogMHg2MEM3LFxuICAgIDB4OTNENjogMHg2NTY2LFxuICAgIDB4OTNENzogMHg2QzhDLFxuICAgIDB4OTNEODogMHg4QzVBLFxuICAgIDB4OTNEOTogMHg5MDQxLFxuICAgIDB4OTNEQTogMHg5ODEzLFxuICAgIDB4OTNEQjogMHg1NDUxLFxuICAgIDB4OTNEQzogMHg2NkM3LFxuICAgIDB4OTNERDogMHg5MjBELFxuICAgIDB4OTNERTogMHg1OTQ4LFxuICAgIDB4OTNERjogMHg5MEEzLFxuICAgIDB4OTNFMDogMHg1MTg1LFxuICAgIDB4OTNFMTogMHg0RTRELFxuICAgIDB4OTNFMjogMHg1MUVBLFxuICAgIDB4OTNFMzogMHg4NTk5LFxuICAgIDB4OTNFNDogMHg4QjBFLFxuICAgIDB4OTNFNTogMHg3MDU4LFxuICAgIDB4OTNFNjogMHg2MzdBLFxuICAgIDB4OTNFNzogMHg5MzRCLFxuICAgIDB4OTNFODogMHg2OTYyLFxuICAgIDB4OTNFOTogMHg5OUI0LFxuICAgIDB4OTNFQTogMHg3RTA0LFxuICAgIDB4OTNFQjogMHg3NTc3LFxuICAgIDB4OTNFQzogMHg1MzU3LFxuICAgIDB4OTNFRDogMHg2OTYwLFxuICAgIDB4OTNFRTogMHg4RURGLFxuICAgIDB4OTNFRjogMHg5NkUzLFxuICAgIDB4OTNGMDogMHg2QzVELFxuICAgIDB4OTNGMTogMHg0RThDLFxuICAgIDB4OTNGMjogMHg1QzNDLFxuICAgIDB4OTNGMzogMHg1RjEwLFxuICAgIDB4OTNGNDogMHg4RkU5LFxuICAgIDB4OTNGNTogMHg1MzAyLFxuICAgIDB4OTNGNjogMHg4Q0QxLFxuICAgIDB4OTNGNzogMHg4MDg5LFxuICAgIDB4OTNGODogMHg4Njc5LFxuICAgIDB4OTNGOTogMHg1RUZGLFxuICAgIDB4OTNGQTogMHg2NUU1LFxuICAgIDB4OTNGQjogMHg0RTczLFxuICAgIDB4OTNGQzogMHg1MTY1LFxuICAgIDB4OTQ0MDogMHg1OTgyLFxuICAgIDB4OTQ0MTogMHg1QzNGLFxuICAgIDB4OTQ0MjogMHg5N0VFLFxuICAgIDB4OTQ0MzogMHg0RUZCLFxuICAgIDB4OTQ0NDogMHg1OThBLFxuICAgIDB4OTQ0NTogMHg1RkNELFxuICAgIDB4OTQ0NjogMHg4QThELFxuICAgIDB4OTQ0NzogMHg2RkUxLFxuICAgIDB4OTQ0ODogMHg3OUIwLFxuICAgIDB4OTQ0OTogMHg3OTYyLFxuICAgIDB4OTQ0QTogMHg1QkU3LFxuICAgIDB4OTQ0QjogMHg4NDcxLFxuICAgIDB4OTQ0QzogMHg3MzJCLFxuICAgIDB4OTQ0RDogMHg3MUIxLFxuICAgIDB4OTQ0RTogMHg1RTc0LFxuICAgIDB4OTQ0RjogMHg1RkY1LFxuICAgIDB4OTQ1MDogMHg2MzdCLFxuICAgIDB4OTQ1MTogMHg2NDlBLFxuICAgIDB4OTQ1MjogMHg3MUMzLFxuICAgIDB4OTQ1MzogMHg3Qzk4LFxuICAgIDB4OTQ1NDogMHg0RTQzLFxuICAgIDB4OTQ1NTogMHg1RUZDLFxuICAgIDB4OTQ1NjogMHg0RTRCLFxuICAgIDB4OTQ1NzogMHg1N0RDLFxuICAgIDB4OTQ1ODogMHg1NkEyLFxuICAgIDB4OTQ1OTogMHg2MEE5LFxuICAgIDB4OTQ1QTogMHg2RkMzLFxuICAgIDB4OTQ1QjogMHg3RDBELFxuICAgIDB4OTQ1QzogMHg4MEZELFxuICAgIDB4OTQ1RDogMHg4MTMzLFxuICAgIDB4OTQ1RTogMHg4MUJGLFxuICAgIDB4OTQ1RjogMHg4RkIyLFxuICAgIDB4OTQ2MDogMHg4OTk3LFxuICAgIDB4OTQ2MTogMHg4NkE0LFxuICAgIDB4OTQ2MjogMHg1REY0LFxuICAgIDB4OTQ2MzogMHg2MjhBLFxuICAgIDB4OTQ2NDogMHg2NEFELFxuICAgIDB4OTQ2NTogMHg4OTg3LFxuICAgIDB4OTQ2NjogMHg2Nzc3LFxuICAgIDB4OTQ2NzogMHg2Q0UyLFxuICAgIDB4OTQ2ODogMHg2RDNFLFxuICAgIDB4OTQ2OTogMHg3NDM2LFxuICAgIDB4OTQ2QTogMHg3ODM0LFxuICAgIDB4OTQ2QjogMHg1QTQ2LFxuICAgIDB4OTQ2QzogMHg3Rjc1LFxuICAgIDB4OTQ2RDogMHg4MkFELFxuICAgIDB4OTQ2RTogMHg5OUFDLFxuICAgIDB4OTQ2RjogMHg0RkYzLFxuICAgIDB4OTQ3MDogMHg1RUMzLFxuICAgIDB4OTQ3MTogMHg2MkRELFxuICAgIDB4OTQ3MjogMHg2MzkyLFxuICAgIDB4OTQ3MzogMHg2NTU3LFxuICAgIDB4OTQ3NDogMHg2NzZGLFxuICAgIDB4OTQ3NTogMHg3NkMzLFxuICAgIDB4OTQ3NjogMHg3MjRDLFxuICAgIDB4OTQ3NzogMHg4MENDLFxuICAgIDB4OTQ3ODogMHg4MEJBLFxuICAgIDB4OTQ3OTogMHg4RjI5LFxuICAgIDB4OTQ3QTogMHg5MTRELFxuICAgIDB4OTQ3QjogMHg1MDBELFxuICAgIDB4OTQ3QzogMHg1N0Y5LFxuICAgIDB4OTQ3RDogMHg1QTkyLFxuICAgIDB4OTQ3RTogMHg2ODg1LFxuICAgIDB4OTQ4MDogMHg2OTczLFxuICAgIDB4OTQ4MTogMHg3MTY0LFxuICAgIDB4OTQ4MjogMHg3MkZELFxuICAgIDB4OTQ4MzogMHg4Q0I3LFxuICAgIDB4OTQ4NDogMHg1OEYyLFxuICAgIDB4OTQ4NTogMHg4Q0UwLFxuICAgIDB4OTQ4NjogMHg5NjZBLFxuICAgIDB4OTQ4NzogMHg5MDE5LFxuICAgIDB4OTQ4ODogMHg4NzdGLFxuICAgIDB4OTQ4OTogMHg3OUU0LFxuICAgIDB4OTQ4QTogMHg3N0U3LFxuICAgIDB4OTQ4QjogMHg4NDI5LFxuICAgIDB4OTQ4QzogMHg0RjJGLFxuICAgIDB4OTQ4RDogMHg1MjY1LFxuICAgIDB4OTQ4RTogMHg1MzVBLFxuICAgIDB4OTQ4RjogMHg2MkNELFxuICAgIDB4OTQ5MDogMHg2N0NGLFxuICAgIDB4OTQ5MTogMHg2Q0NBLFxuICAgIDB4OTQ5MjogMHg3NjdELFxuICAgIDB4OTQ5MzogMHg3Qjk0LFxuICAgIDB4OTQ5NDogMHg3Qzk1LFxuICAgIDB4OTQ5NTogMHg4MjM2LFxuICAgIDB4OTQ5NjogMHg4NTg0LFxuICAgIDB4OTQ5NzogMHg4RkVCLFxuICAgIDB4OTQ5ODogMHg2NkRELFxuICAgIDB4OTQ5OTogMHg2RjIwLFxuICAgIDB4OTQ5QTogMHg3MjA2LFxuICAgIDB4OTQ5QjogMHg3RTFCLFxuICAgIDB4OTQ5QzogMHg4M0FCLFxuICAgIDB4OTQ5RDogMHg5OUMxLFxuICAgIDB4OTQ5RTogMHg5RUE2LFxuICAgIDB4OTQ5RjogMHg1MUZELFxuICAgIDB4OTRBMDogMHg3QkIxLFxuICAgIDB4OTRBMTogMHg3ODcyLFxuICAgIDB4OTRBMjogMHg3QkI4LFxuICAgIDB4OTRBMzogMHg4MDg3LFxuICAgIDB4OTRBNDogMHg3QjQ4LFxuICAgIDB4OTRBNTogMHg2QUU4LFxuICAgIDB4OTRBNjogMHg1RTYxLFxuICAgIDB4OTRBNzogMHg4MDhDLFxuICAgIDB4OTRBODogMHg3NTUxLFxuICAgIDB4OTRBOTogMHg3NTYwLFxuICAgIDB4OTRBQTogMHg1MTZCLFxuICAgIDB4OTRBQjogMHg5MjYyLFxuICAgIDB4OTRBQzogMHg2RThDLFxuICAgIDB4OTRBRDogMHg3NjdBLFxuICAgIDB4OTRBRTogMHg5MTk3LFxuICAgIDB4OTRBRjogMHg5QUVBLFxuICAgIDB4OTRCMDogMHg0RjEwLFxuICAgIDB4OTRCMTogMHg3RjcwLFxuICAgIDB4OTRCMjogMHg2MjlDLFxuICAgIDB4OTRCMzogMHg3QjRGLFxuICAgIDB4OTRCNDogMHg5NUE1LFxuICAgIDB4OTRCNTogMHg5Q0U5LFxuICAgIDB4OTRCNjogMHg1NjdBLFxuICAgIDB4OTRCNzogMHg1ODU5LFxuICAgIDB4OTRCODogMHg4NkU0LFxuICAgIDB4OTRCOTogMHg5NkJDLFxuICAgIDB4OTRCQTogMHg0RjM0LFxuICAgIDB4OTRCQjogMHg1MjI0LFxuICAgIDB4OTRCQzogMHg1MzRBLFxuICAgIDB4OTRCRDogMHg1M0NELFxuICAgIDB4OTRCRTogMHg1M0RCLFxuICAgIDB4OTRCRjogMHg1RTA2LFxuICAgIDB4OTRDMDogMHg2NDJDLFxuICAgIDB4OTRDMTogMHg2NTkxLFxuICAgIDB4OTRDMjogMHg2NzdGLFxuICAgIDB4OTRDMzogMHg2QzNFLFxuICAgIDB4OTRDNDogMHg2QzRFLFxuICAgIDB4OTRDNTogMHg3MjQ4LFxuICAgIDB4OTRDNjogMHg3MkFGLFxuICAgIDB4OTRDNzogMHg3M0VELFxuICAgIDB4OTRDODogMHg3NTU0LFxuICAgIDB4OTRDOTogMHg3RTQxLFxuICAgIDB4OTRDQTogMHg4MjJDLFxuICAgIDB4OTRDQjogMHg4NUU5LFxuICAgIDB4OTRDQzogMHg4Q0E5LFxuICAgIDB4OTRDRDogMHg3QkM0LFxuICAgIDB4OTRDRTogMHg5MUM2LFxuICAgIDB4OTRDRjogMHg3MTY5LFxuICAgIDB4OTREMDogMHg5ODEyLFxuICAgIDB4OTREMTogMHg5OEVGLFxuICAgIDB4OTREMjogMHg2MzNELFxuICAgIDB4OTREMzogMHg2NjY5LFxuICAgIDB4OTRENDogMHg3NTZBLFxuICAgIDB4OTRENTogMHg3NkU0LFxuICAgIDB4OTRENjogMHg3OEQwLFxuICAgIDB4OTRENzogMHg4NTQzLFxuICAgIDB4OTREODogMHg4NkVFLFxuICAgIDB4OTREOTogMHg1MzJBLFxuICAgIDB4OTREQTogMHg1MzUxLFxuICAgIDB4OTREQjogMHg1NDI2LFxuICAgIDB4OTREQzogMHg1OTgzLFxuICAgIDB4OTRERDogMHg1RTg3LFxuICAgIDB4OTRERTogMHg1RjdDLFxuICAgIDB4OTRERjogMHg2MEIyLFxuICAgIDB4OTRFMDogMHg2MjQ5LFxuICAgIDB4OTRFMTogMHg2Mjc5LFxuICAgIDB4OTRFMjogMHg2MkFCLFxuICAgIDB4OTRFMzogMHg2NTkwLFxuICAgIDB4OTRFNDogMHg2QkQ0LFxuICAgIDB4OTRFNTogMHg2Q0NDLFxuICAgIDB4OTRFNjogMHg3NUIyLFxuICAgIDB4OTRFNzogMHg3NkFFLFxuICAgIDB4OTRFODogMHg3ODkxLFxuICAgIDB4OTRFOTogMHg3OUQ4LFxuICAgIDB4OTRFQTogMHg3RENCLFxuICAgIDB4OTRFQjogMHg3Rjc3LFxuICAgIDB4OTRFQzogMHg4MEE1LFxuICAgIDB4OTRFRDogMHg4OEFCLFxuICAgIDB4OTRFRTogMHg4QUI5LFxuICAgIDB4OTRFRjogMHg4Q0JCLFxuICAgIDB4OTRGMDogMHg5MDdGLFxuICAgIDB4OTRGMTogMHg5NzVFLFxuICAgIDB4OTRGMjogMHg5OERCLFxuICAgIDB4OTRGMzogMHg2QTBCLFxuICAgIDB4OTRGNDogMHg3QzM4LFxuICAgIDB4OTRGNTogMHg1MDk5LFxuICAgIDB4OTRGNjogMHg1QzNFLFxuICAgIDB4OTRGNzogMHg1RkFFLFxuICAgIDB4OTRGODogMHg2Nzg3LFxuICAgIDB4OTRGOTogMHg2QkQ4LFxuICAgIDB4OTRGQTogMHg3NDM1LFxuICAgIDB4OTRGQjogMHg3NzA5LFxuICAgIDB4OTRGQzogMHg3RjhFLFxuICAgIDB4OTU0MDogMHg5RjNCLFxuICAgIDB4OTU0MTogMHg2N0NBLFxuICAgIDB4OTU0MjogMHg3QTE3LFxuICAgIDB4OTU0MzogMHg1MzM5LFxuICAgIDB4OTU0NDogMHg3NThCLFxuICAgIDB4OTU0NTogMHg5QUVELFxuICAgIDB4OTU0NjogMHg1RjY2LFxuICAgIDB4OTU0NzogMHg4MTlELFxuICAgIDB4OTU0ODogMHg4M0YxLFxuICAgIDB4OTU0OTogMHg4MDk4LFxuICAgIDB4OTU0QTogMHg1RjNDLFxuICAgIDB4OTU0QjogMHg1RkM1LFxuICAgIDB4OTU0QzogMHg3NTYyLFxuICAgIDB4OTU0RDogMHg3QjQ2LFxuICAgIDB4OTU0RTogMHg5MDNDLFxuICAgIDB4OTU0RjogMHg2ODY3LFxuICAgIDB4OTU1MDogMHg1OUVCLFxuICAgIDB4OTU1MTogMHg1QTlCLFxuICAgIDB4OTU1MjogMHg3RDEwLFxuICAgIDB4OTU1MzogMHg3NjdFLFxuICAgIDB4OTU1NDogMHg4QjJDLFxuICAgIDB4OTU1NTogMHg0RkY1LFxuICAgIDB4OTU1NjogMHg1RjZBLFxuICAgIDB4OTU1NzogMHg2QTE5LFxuICAgIDB4OTU1ODogMHg2QzM3LFxuICAgIDB4OTU1OTogMHg2RjAyLFxuICAgIDB4OTU1QTogMHg3NEUyLFxuICAgIDB4OTU1QjogMHg3OTY4LFxuICAgIDB4OTU1QzogMHg4ODY4LFxuICAgIDB4OTU1RDogMHg4QTU1LFxuICAgIDB4OTU1RTogMHg4Qzc5LFxuICAgIDB4OTU1RjogMHg1RURGLFxuICAgIDB4OTU2MDogMHg2M0NGLFxuICAgIDB4OTU2MTogMHg3NUM1LFxuICAgIDB4OTU2MjogMHg3OUQyLFxuICAgIDB4OTU2MzogMHg4MkQ3LFxuICAgIDB4OTU2NDogMHg5MzI4LFxuICAgIDB4OTU2NTogMHg5MkYyLFxuICAgIDB4OTU2NjogMHg4NDlDLFxuICAgIDB4OTU2NzogMHg4NkVELFxuICAgIDB4OTU2ODogMHg5QzJELFxuICAgIDB4OTU2OTogMHg1NEMxLFxuICAgIDB4OTU2QTogMHg1RjZDLFxuICAgIDB4OTU2QjogMHg2NThDLFxuICAgIDB4OTU2QzogMHg2RDVDLFxuICAgIDB4OTU2RDogMHg3MDE1LFxuICAgIDB4OTU2RTogMHg4Q0E3LFxuICAgIDB4OTU2RjogMHg4Q0QzLFxuICAgIDB4OTU3MDogMHg5ODNCLFxuICAgIDB4OTU3MTogMHg2NTRGLFxuICAgIDB4OTU3MjogMHg3NEY2LFxuICAgIDB4OTU3MzogMHg0RTBELFxuICAgIDB4OTU3NDogMHg0RUQ4LFxuICAgIDB4OTU3NTogMHg1N0UwLFxuICAgIDB4OTU3NjogMHg1OTJCLFxuICAgIDB4OTU3NzogMHg1QTY2LFxuICAgIDB4OTU3ODogMHg1QkNDLFxuICAgIDB4OTU3OTogMHg1MUE4LFxuICAgIDB4OTU3QTogMHg1RTAzLFxuICAgIDB4OTU3QjogMHg1RTlDLFxuICAgIDB4OTU3QzogMHg2MDE2LFxuICAgIDB4OTU3RDogMHg2Mjc2LFxuICAgIDB4OTU3RTogMHg2NTc3LFxuICAgIDB4OTU4MDogMHg2NUE3LFxuICAgIDB4OTU4MTogMHg2NjZFLFxuICAgIDB4OTU4MjogMHg2RDZFLFxuICAgIDB4OTU4MzogMHg3MjM2LFxuICAgIDB4OTU4NDogMHg3QjI2LFxuICAgIDB4OTU4NTogMHg4MTUwLFxuICAgIDB4OTU4NjogMHg4MTlBLFxuICAgIDB4OTU4NzogMHg4Mjk5LFxuICAgIDB4OTU4ODogMHg4QjVDLFxuICAgIDB4OTU4OTogMHg4Q0EwLFxuICAgIDB4OTU4QTogMHg4Q0U2LFxuICAgIDB4OTU4QjogMHg4RDc0LFxuICAgIDB4OTU4QzogMHg5NjFDLFxuICAgIDB4OTU4RDogMHg5NjQ0LFxuICAgIDB4OTU4RTogMHg0RkFFLFxuICAgIDB4OTU4RjogMHg2NEFCLFxuICAgIDB4OTU5MDogMHg2QjY2LFxuICAgIDB4OTU5MTogMHg4MjFFLFxuICAgIDB4OTU5MjogMHg4NDYxLFxuICAgIDB4OTU5MzogMHg4NTZBLFxuICAgIDB4OTU5NDogMHg5MEU4LFxuICAgIDB4OTU5NTogMHg1QzAxLFxuICAgIDB4OTU5NjogMHg2OTUzLFxuICAgIDB4OTU5NzogMHg5OEE4LFxuICAgIDB4OTU5ODogMHg4NDdBLFxuICAgIDB4OTU5OTogMHg4NTU3LFxuICAgIDB4OTU5QTogMHg0RjBGLFxuICAgIDB4OTU5QjogMHg1MjZGLFxuICAgIDB4OTU5QzogMHg1RkE5LFxuICAgIDB4OTU5RDogMHg1RTQ1LFxuICAgIDB4OTU5RTogMHg2NzBELFxuICAgIDB4OTU5RjogMHg3OThGLFxuICAgIDB4OTVBMDogMHg4MTc5LFxuICAgIDB4OTVBMTogMHg4OTA3LFxuICAgIDB4OTVBMjogMHg4OTg2LFxuICAgIDB4OTVBMzogMHg2REY1LFxuICAgIDB4OTVBNDogMHg1RjE3LFxuICAgIDB4OTVBNTogMHg2MjU1LFxuICAgIDB4OTVBNjogMHg2Q0I4LFxuICAgIDB4OTVBNzogMHg0RUNGLFxuICAgIDB4OTVBODogMHg3MjY5LFxuICAgIDB4OTVBOTogMHg5QjkyLFxuICAgIDB4OTVBQTogMHg1MjA2LFxuICAgIDB4OTVBQjogMHg1NDNCLFxuICAgIDB4OTVBQzogMHg1Njc0LFxuICAgIDB4OTVBRDogMHg1OEIzLFxuICAgIDB4OTVBRTogMHg2MUE0LFxuICAgIDB4OTVBRjogMHg2MjZFLFxuICAgIDB4OTVCMDogMHg3MTFBLFxuICAgIDB4OTVCMTogMHg1OTZFLFxuICAgIDB4OTVCMjogMHg3Qzg5LFxuICAgIDB4OTVCMzogMHg3Q0RFLFxuICAgIDB4OTVCNDogMHg3RDFCLFxuICAgIDB4OTVCNTogMHg5NkYwLFxuICAgIDB4OTVCNjogMHg2NTg3LFxuICAgIDB4OTVCNzogMHg4MDVFLFxuICAgIDB4OTVCODogMHg0RTE5LFxuICAgIDB4OTVCOTogMHg0Rjc1LFxuICAgIDB4OTVCQTogMHg1MTc1LFxuICAgIDB4OTVCQjogMHg1ODQwLFxuICAgIDB4OTVCQzogMHg1RTYzLFxuICAgIDB4OTVCRDogMHg1RTczLFxuICAgIDB4OTVCRTogMHg1RjBBLFxuICAgIDB4OTVCRjogMHg2N0M0LFxuICAgIDB4OTVDMDogMHg0RTI2LFxuICAgIDB4OTVDMTogMHg4NTNELFxuICAgIDB4OTVDMjogMHg5NTg5LFxuICAgIDB4OTVDMzogMHg5NjVCLFxuICAgIDB4OTVDNDogMHg3QzczLFxuICAgIDB4OTVDNTogMHg5ODAxLFxuICAgIDB4OTVDNjogMHg1MEZCLFxuICAgIDB4OTVDNzogMHg1OEMxLFxuICAgIDB4OTVDODogMHg3NjU2LFxuICAgIDB4OTVDOTogMHg3OEE3LFxuICAgIDB4OTVDQTogMHg1MjI1LFxuICAgIDB4OTVDQjogMHg3N0E1LFxuICAgIDB4OTVDQzogMHg4NTExLFxuICAgIDB4OTVDRDogMHg3Qjg2LFxuICAgIDB4OTVDRTogMHg1MDRGLFxuICAgIDB4OTVDRjogMHg1OTA5LFxuICAgIDB4OTVEMDogMHg3MjQ3LFxuICAgIDB4OTVEMTogMHg3QkM3LFxuICAgIDB4OTVEMjogMHg3REU4LFxuICAgIDB4OTVEMzogMHg4RkJBLFxuICAgIDB4OTVENDogMHg4RkQ0LFxuICAgIDB4OTVENTogMHg5MDRELFxuICAgIDB4OTVENjogMHg0RkJGLFxuICAgIDB4OTVENzogMHg1MkM5LFxuICAgIDB4OTVEODogMHg1QTI5LFxuICAgIDB4OTVEOTogMHg1RjAxLFxuICAgIDB4OTVEQTogMHg5N0FELFxuICAgIDB4OTVEQjogMHg0RkRELFxuICAgIDB4OTVEQzogMHg4MjE3LFxuICAgIDB4OTVERDogMHg5MkVBLFxuICAgIDB4OTVERTogMHg1NzAzLFxuICAgIDB4OTVERjogMHg2MzU1LFxuICAgIDB4OTVFMDogMHg2QjY5LFxuICAgIDB4OTVFMTogMHg3NTJCLFxuICAgIDB4OTVFMjogMHg4OERDLFxuICAgIDB4OTVFMzogMHg4RjE0LFxuICAgIDB4OTVFNDogMHg3QTQyLFxuICAgIDB4OTVFNTogMHg1MkRGLFxuICAgIDB4OTVFNjogMHg1ODkzLFxuICAgIDB4OTVFNzogMHg2MTU1LFxuICAgIDB4OTVFODogMHg2MjBBLFxuICAgIDB4OTVFOTogMHg2NkFFLFxuICAgIDB4OTVFQTogMHg2QkNELFxuICAgIDB4OTVFQjogMHg3QzNGLFxuICAgIDB4OTVFQzogMHg4M0U5LFxuICAgIDB4OTVFRDogMHg1MDIzLFxuICAgIDB4OTVFRTogMHg0RkY4LFxuICAgIDB4OTVFRjogMHg1MzA1LFxuICAgIDB4OTVGMDogMHg1NDQ2LFxuICAgIDB4OTVGMTogMHg1ODMxLFxuICAgIDB4OTVGMjogMHg1OTQ5LFxuICAgIDB4OTVGMzogMHg1QjlELFxuICAgIDB4OTVGNDogMHg1Q0YwLFxuICAgIDB4OTVGNTogMHg1Q0VGLFxuICAgIDB4OTVGNjogMHg1RDI5LFxuICAgIDB4OTVGNzogMHg1RTk2LFxuICAgIDB4OTVGODogMHg2MkIxLFxuICAgIDB4OTVGOTogMHg2MzY3LFxuICAgIDB4OTVGQTogMHg2NTNFLFxuICAgIDB4OTVGQjogMHg2NUI5LFxuICAgIDB4OTVGQzogMHg2NzBCLFxuICAgIDB4OTY0MDogMHg2Q0Q1LFxuICAgIDB4OTY0MTogMHg2Q0UxLFxuICAgIDB4OTY0MjogMHg3MEY5LFxuICAgIDB4OTY0MzogMHg3ODMyLFxuICAgIDB4OTY0NDogMHg3RTJCLFxuICAgIDB4OTY0NTogMHg4MERFLFxuICAgIDB4OTY0NjogMHg4MkIzLFxuICAgIDB4OTY0NzogMHg4NDBDLFxuICAgIDB4OTY0ODogMHg4NEVDLFxuICAgIDB4OTY0OTogMHg4NzAyLFxuICAgIDB4OTY0QTogMHg4OTEyLFxuICAgIDB4OTY0QjogMHg4QTJBLFxuICAgIDB4OTY0QzogMHg4QzRBLFxuICAgIDB4OTY0RDogMHg5MEE2LFxuICAgIDB4OTY0RTogMHg5MkQyLFxuICAgIDB4OTY0RjogMHg5OEZELFxuICAgIDB4OTY1MDogMHg5Q0YzLFxuICAgIDB4OTY1MTogMHg5RDZDLFxuICAgIDB4OTY1MjogMHg0RTRGLFxuICAgIDB4OTY1MzogMHg0RUExLFxuICAgIDB4OTY1NDogMHg1MDhELFxuICAgIDB4OTY1NTogMHg1MjU2LFxuICAgIDB4OTY1NjogMHg1NzRBLFxuICAgIDB4OTY1NzogMHg1OUE4LFxuICAgIDB4OTY1ODogMHg1RTNELFxuICAgIDB4OTY1OTogMHg1RkQ4LFxuICAgIDB4OTY1QTogMHg1RkQ5LFxuICAgIDB4OTY1QjogMHg2MjNGLFxuICAgIDB4OTY1QzogMHg2NkI0LFxuICAgIDB4OTY1RDogMHg2NzFCLFxuICAgIDB4OTY1RTogMHg2N0QwLFxuICAgIDB4OTY1RjogMHg2OEQyLFxuICAgIDB4OTY2MDogMHg1MTkyLFxuICAgIDB4OTY2MTogMHg3RDIxLFxuICAgIDB4OTY2MjogMHg4MEFBLFxuICAgIDB4OTY2MzogMHg4MUE4LFxuICAgIDB4OTY2NDogMHg4QjAwLFxuICAgIDB4OTY2NTogMHg4QzhDLFxuICAgIDB4OTY2NjogMHg4Q0JGLFxuICAgIDB4OTY2NzogMHg5MjdFLFxuICAgIDB4OTY2ODogMHg5NjMyLFxuICAgIDB4OTY2OTogMHg1NDIwLFxuICAgIDB4OTY2QTogMHg5ODJDLFxuICAgIDB4OTY2QjogMHg1MzE3LFxuICAgIDB4OTY2QzogMHg1MEQ1LFxuICAgIDB4OTY2RDogMHg1MzVDLFxuICAgIDB4OTY2RTogMHg1OEE4LFxuICAgIDB4OTY2RjogMHg2NEIyLFxuICAgIDB4OTY3MDogMHg2NzM0LFxuICAgIDB4OTY3MTogMHg3MjY3LFxuICAgIDB4OTY3MjogMHg3NzY2LFxuICAgIDB4OTY3MzogMHg3QTQ2LFxuICAgIDB4OTY3NDogMHg5MUU2LFxuICAgIDB4OTY3NTogMHg1MkMzLFxuICAgIDB4OTY3NjogMHg2Q0ExLFxuICAgIDB4OTY3NzogMHg2Qjg2LFxuICAgIDB4OTY3ODogMHg1ODAwLFxuICAgIDB4OTY3OTogMHg1RTRDLFxuICAgIDB4OTY3QTogMHg1OTU0LFxuICAgIDB4OTY3QjogMHg2NzJDLFxuICAgIDB4OTY3QzogMHg3RkZCLFxuICAgIDB4OTY3RDogMHg1MUUxLFxuICAgIDB4OTY3RTogMHg3NkM2LFxuICAgIDB4OTY4MDogMHg2NDY5LFxuICAgIDB4OTY4MTogMHg3OEU4LFxuICAgIDB4OTY4MjogMHg5QjU0LFxuICAgIDB4OTY4MzogMHg5RUJCLFxuICAgIDB4OTY4NDogMHg1N0NCLFxuICAgIDB4OTY4NTogMHg1OUI5LFxuICAgIDB4OTY4NjogMHg2NjI3LFxuICAgIDB4OTY4NzogMHg2NzlBLFxuICAgIDB4OTY4ODogMHg2QkNFLFxuICAgIDB4OTY4OTogMHg1NEU5LFxuICAgIDB4OTY4QTogMHg2OUQ5LFxuICAgIDB4OTY4QjogMHg1RTU1LFxuICAgIDB4OTY4QzogMHg4MTlDLFxuICAgIDB4OTY4RDogMHg2Nzk1LFxuICAgIDB4OTY4RTogMHg5QkFBLFxuICAgIDB4OTY4RjogMHg2N0ZFLFxuICAgIDB4OTY5MDogMHg5QzUyLFxuICAgIDB4OTY5MTogMHg2ODVELFxuICAgIDB4OTY5MjogMHg0RUE2LFxuICAgIDB4OTY5MzogMHg0RkUzLFxuICAgIDB4OTY5NDogMHg1M0M4LFxuICAgIDB4OTY5NTogMHg2MkI5LFxuICAgIDB4OTY5NjogMHg2NzJCLFxuICAgIDB4OTY5NzogMHg2Q0FCLFxuICAgIDB4OTY5ODogMHg4RkM0LFxuICAgIDB4OTY5OTogMHg0RkFELFxuICAgIDB4OTY5QTogMHg3RTZELFxuICAgIDB4OTY5QjogMHg5RUJGLFxuICAgIDB4OTY5QzogMHg0RTA3LFxuICAgIDB4OTY5RDogMHg2MTYyLFxuICAgIDB4OTY5RTogMHg2RTgwLFxuICAgIDB4OTY5RjogMHg2RjJCLFxuICAgIDB4OTZBMDogMHg4NTEzLFxuICAgIDB4OTZBMTogMHg1NDczLFxuICAgIDB4OTZBMjogMHg2NzJBLFxuICAgIDB4OTZBMzogMHg5QjQ1LFxuICAgIDB4OTZBNDogMHg1REYzLFxuICAgIDB4OTZBNTogMHg3Qjk1LFxuICAgIDB4OTZBNjogMHg1Q0FDLFxuICAgIDB4OTZBNzogMHg1QkM2LFxuICAgIDB4OTZBODogMHg4NzFDLFxuICAgIDB4OTZBOTogMHg2RTRBLFxuICAgIDB4OTZBQTogMHg4NEQxLFxuICAgIDB4OTZBQjogMHg3QTE0LFxuICAgIDB4OTZBQzogMHg4MTA4LFxuICAgIDB4OTZBRDogMHg1OTk5LFxuICAgIDB4OTZBRTogMHg3QzhELFxuICAgIDB4OTZBRjogMHg2QzExLFxuICAgIDB4OTZCMDogMHg3NzIwLFxuICAgIDB4OTZCMTogMHg1MkQ5LFxuICAgIDB4OTZCMjogMHg1OTIyLFxuICAgIDB4OTZCMzogMHg3MTIxLFxuICAgIDB4OTZCNDogMHg3MjVGLFxuICAgIDB4OTZCNTogMHg3N0RCLFxuICAgIDB4OTZCNjogMHg5NzI3LFxuICAgIDB4OTZCNzogMHg5RDYxLFxuICAgIDB4OTZCODogMHg2OTBCLFxuICAgIDB4OTZCOTogMHg1QTdGLFxuICAgIDB4OTZCQTogMHg1QTE4LFxuICAgIDB4OTZCQjogMHg1MUE1LFxuICAgIDB4OTZCQzogMHg1NDBELFxuICAgIDB4OTZCRDogMHg1NDdELFxuICAgIDB4OTZCRTogMHg2NjBFLFxuICAgIDB4OTZCRjogMHg3NkRGLFxuICAgIDB4OTZDMDogMHg4RkY3LFxuICAgIDB4OTZDMTogMHg5Mjk4LFxuICAgIDB4OTZDMjogMHg5Q0Y0LFxuICAgIDB4OTZDMzogMHg1OUVBLFxuICAgIDB4OTZDNDogMHg3MjVELFxuICAgIDB4OTZDNTogMHg2RUM1LFxuICAgIDB4OTZDNjogMHg1MTRELFxuICAgIDB4OTZDNzogMHg2OEM5LFxuICAgIDB4OTZDODogMHg3REJGLFxuICAgIDB4OTZDOTogMHg3REVDLFxuICAgIDB4OTZDQTogMHg5NzYyLFxuICAgIDB4OTZDQjogMHg5RUJBLFxuICAgIDB4OTZDQzogMHg2NDc4LFxuICAgIDB4OTZDRDogMHg2QTIxLFxuICAgIDB4OTZDRTogMHg4MzAyLFxuICAgIDB4OTZDRjogMHg1OTg0LFxuICAgIDB4OTZEMDogMHg1QjVGLFxuICAgIDB4OTZEMTogMHg2QkRCLFxuICAgIDB4OTZEMjogMHg3MzFCLFxuICAgIDB4OTZEMzogMHg3NkYyLFxuICAgIDB4OTZENDogMHg3REIyLFxuICAgIDB4OTZENTogMHg4MDE3LFxuICAgIDB4OTZENjogMHg4NDk5LFxuICAgIDB4OTZENzogMHg1MTMyLFxuICAgIDB4OTZEODogMHg2NzI4LFxuICAgIDB4OTZEOTogMHg5RUQ5LFxuICAgIDB4OTZEQTogMHg3NkVFLFxuICAgIDB4OTZEQjogMHg2NzYyLFxuICAgIDB4OTZEQzogMHg1MkZGLFxuICAgIDB4OTZERDogMHg5OTA1LFxuICAgIDB4OTZERTogMHg1QzI0LFxuICAgIDB4OTZERjogMHg2MjNCLFxuICAgIDB4OTZFMDogMHg3QzdFLFxuICAgIDB4OTZFMTogMHg4Q0IwLFxuICAgIDB4OTZFMjogMHg1NTRGLFxuICAgIDB4OTZFMzogMHg2MEI2LFxuICAgIDB4OTZFNDogMHg3RDBCLFxuICAgIDB4OTZFNTogMHg5NTgwLFxuICAgIDB4OTZFNjogMHg1MzAxLFxuICAgIDB4OTZFNzogMHg0RTVGLFxuICAgIDB4OTZFODogMHg1MUI2LFxuICAgIDB4OTZFOTogMHg1OTFDLFxuICAgIDB4OTZFQTogMHg3MjNBLFxuICAgIDB4OTZFQjogMHg4MDM2LFxuICAgIDB4OTZFQzogMHg5MUNFLFxuICAgIDB4OTZFRDogMHg1RjI1LFxuICAgIDB4OTZFRTogMHg3N0UyLFxuICAgIDB4OTZFRjogMHg1Mzg0LFxuICAgIDB4OTZGMDogMHg1Rjc5LFxuICAgIDB4OTZGMTogMHg3RDA0LFxuICAgIDB4OTZGMjogMHg4NUFDLFxuICAgIDB4OTZGMzogMHg4QTMzLFxuICAgIDB4OTZGNDogMHg4RThELFxuICAgIDB4OTZGNTogMHg5NzU2LFxuICAgIDB4OTZGNjogMHg2N0YzLFxuICAgIDB4OTZGNzogMHg4NUFFLFxuICAgIDB4OTZGODogMHg5NDUzLFxuICAgIDB4OTZGOTogMHg2MTA5LFxuICAgIDB4OTZGQTogMHg2MTA4LFxuICAgIDB4OTZGQjogMHg2Q0I5LFxuICAgIDB4OTZGQzogMHg3NjUyLFxuICAgIDB4OTc0MDogMHg4QUVELFxuICAgIDB4OTc0MTogMHg4RjM4LFxuICAgIDB4OTc0MjogMHg1NTJGLFxuICAgIDB4OTc0MzogMHg0RjUxLFxuICAgIDB4OTc0NDogMHg1MTJBLFxuICAgIDB4OTc0NTogMHg1MkM3LFxuICAgIDB4OTc0NjogMHg1M0NCLFxuICAgIDB4OTc0NzogMHg1QkE1LFxuICAgIDB4OTc0ODogMHg1RTdELFxuICAgIDB4OTc0OTogMHg2MEEwLFxuICAgIDB4OTc0QTogMHg2MTgyLFxuICAgIDB4OTc0QjogMHg2M0Q2LFxuICAgIDB4OTc0QzogMHg2NzA5LFxuICAgIDB4OTc0RDogMHg2N0RBLFxuICAgIDB4OTc0RTogMHg2RTY3LFxuICAgIDB4OTc0RjogMHg2RDhDLFxuICAgIDB4OTc1MDogMHg3MzM2LFxuICAgIDB4OTc1MTogMHg3MzM3LFxuICAgIDB4OTc1MjogMHg3NTMxLFxuICAgIDB4OTc1MzogMHg3OTUwLFxuICAgIDB4OTc1NDogMHg4OEQ1LFxuICAgIDB4OTc1NTogMHg4QTk4LFxuICAgIDB4OTc1NjogMHg5MDRBLFxuICAgIDB4OTc1NzogMHg5MDkxLFxuICAgIDB4OTc1ODogMHg5MEY1LFxuICAgIDB4OTc1OTogMHg5NkM0LFxuICAgIDB4OTc1QTogMHg4NzhELFxuICAgIDB4OTc1QjogMHg1OTE1LFxuICAgIDB4OTc1QzogMHg0RTg4LFxuICAgIDB4OTc1RDogMHg0RjU5LFxuICAgIDB4OTc1RTogMHg0RTBFLFxuICAgIDB4OTc1RjogMHg4QTg5LFxuICAgIDB4OTc2MDogMHg4RjNGLFxuICAgIDB4OTc2MTogMHg5ODEwLFxuICAgIDB4OTc2MjogMHg1MEFELFxuICAgIDB4OTc2MzogMHg1RTdDLFxuICAgIDB4OTc2NDogMHg1OTk2LFxuICAgIDB4OTc2NTogMHg1QkI5LFxuICAgIDB4OTc2NjogMHg1RUI4LFxuICAgIDB4OTc2NzogMHg2M0RBLFxuICAgIDB4OTc2ODogMHg2M0ZBLFxuICAgIDB4OTc2OTogMHg2NEMxLFxuICAgIDB4OTc2QTogMHg2NkRDLFxuICAgIDB4OTc2QjogMHg2OTRBLFxuICAgIDB4OTc2QzogMHg2OUQ4LFxuICAgIDB4OTc2RDogMHg2RDBCLFxuICAgIDB4OTc2RTogMHg2RUI2LFxuICAgIDB4OTc2RjogMHg3MTk0LFxuICAgIDB4OTc3MDogMHg3NTI4LFxuICAgIDB4OTc3MTogMHg3QUFGLFxuICAgIDB4OTc3MjogMHg3RjhBLFxuICAgIDB4OTc3MzogMHg4MDAwLFxuICAgIDB4OTc3NDogMHg4NDQ5LFxuICAgIDB4OTc3NTogMHg4NEM5LFxuICAgIDB4OTc3NjogMHg4OTgxLFxuICAgIDB4OTc3NzogMHg4QjIxLFxuICAgIDB4OTc3ODogMHg4RTBBLFxuICAgIDB4OTc3OTogMHg5MDY1LFxuICAgIDB4OTc3QTogMHg5NjdELFxuICAgIDB4OTc3QjogMHg5OTBBLFxuICAgIDB4OTc3QzogMHg2MTdFLFxuICAgIDB4OTc3RDogMHg2MjkxLFxuICAgIDB4OTc3RTogMHg2QjMyLFxuICAgIDB4OTc4MDogMHg2QzgzLFxuICAgIDB4OTc4MTogMHg2RDc0LFxuICAgIDB4OTc4MjogMHg3RkNDLFxuICAgIDB4OTc4MzogMHg3RkZDLFxuICAgIDB4OTc4NDogMHg2REMwLFxuICAgIDB4OTc4NTogMHg3Rjg1LFxuICAgIDB4OTc4NjogMHg4N0JBLFxuICAgIDB4OTc4NzogMHg4OEY4LFxuICAgIDB4OTc4ODogMHg2NzY1LFxuICAgIDB4OTc4OTogMHg4M0IxLFxuICAgIDB4OTc4QTogMHg5ODNDLFxuICAgIDB4OTc4QjogMHg5NkY3LFxuICAgIDB4OTc4QzogMHg2RDFCLFxuICAgIDB4OTc4RDogMHg3RDYxLFxuICAgIDB4OTc4RTogMHg4NDNELFxuICAgIDB4OTc4RjogMHg5MTZBLFxuICAgIDB4OTc5MDogMHg0RTcxLFxuICAgIDB4OTc5MTogMHg1Mzc1LFxuICAgIDB4OTc5MjogMHg1RDUwLFxuICAgIDB4OTc5MzogMHg2QjA0LFxuICAgIDB4OTc5NDogMHg2RkVCLFxuICAgIDB4OTc5NTogMHg4NUNELFxuICAgIDB4OTc5NjogMHg4NjJELFxuICAgIDB4OTc5NzogMHg4OUE3LFxuICAgIDB4OTc5ODogMHg1MjI5LFxuICAgIDB4OTc5OTogMHg1NDBGLFxuICAgIDB4OTc5QTogMHg1QzY1LFxuICAgIDB4OTc5QjogMHg2NzRFLFxuICAgIDB4OTc5QzogMHg2OEE4LFxuICAgIDB4OTc5RDogMHg3NDA2LFxuICAgIDB4OTc5RTogMHg3NDgzLFxuICAgIDB4OTc5RjogMHg3NUUyLFxuICAgIDB4OTdBMDogMHg4OENGLFxuICAgIDB4OTdBMTogMHg4OEUxLFxuICAgIDB4OTdBMjogMHg5MUNDLFxuICAgIDB4OTdBMzogMHg5NkUyLFxuICAgIDB4OTdBNDogMHg5Njc4LFxuICAgIDB4OTdBNTogMHg1RjhCLFxuICAgIDB4OTdBNjogMHg3Mzg3LFxuICAgIDB4OTdBNzogMHg3QUNCLFxuICAgIDB4OTdBODogMHg4NDRFLFxuICAgIDB4OTdBOTogMHg2M0EwLFxuICAgIDB4OTdBQTogMHg3NTY1LFxuICAgIDB4OTdBQjogMHg1Mjg5LFxuICAgIDB4OTdBQzogMHg2RDQxLFxuICAgIDB4OTdBRDogMHg2RTlDLFxuICAgIDB4OTdBRTogMHg3NDA5LFxuICAgIDB4OTdBRjogMHg3NTU5LFxuICAgIDB4OTdCMDogMHg3ODZCLFxuICAgIDB4OTdCMTogMHg3QzkyLFxuICAgIDB4OTdCMjogMHg5Njg2LFxuICAgIDB4OTdCMzogMHg3QURDLFxuICAgIDB4OTdCNDogMHg5RjhELFxuICAgIDB4OTdCNTogMHg0RkI2LFxuICAgIDB4OTdCNjogMHg2MTZFLFxuICAgIDB4OTdCNzogMHg2NUM1LFxuICAgIDB4OTdCODogMHg4NjVDLFxuICAgIDB4OTdCOTogMHg0RTg2LFxuICAgIDB4OTdCQTogMHg0RUFFLFxuICAgIDB4OTdCQjogMHg1MERBLFxuICAgIDB4OTdCQzogMHg0RTIxLFxuICAgIDB4OTdCRDogMHg1MUNDLFxuICAgIDB4OTdCRTogMHg1QkVFLFxuICAgIDB4OTdCRjogMHg2NTk5LFxuICAgIDB4OTdDMDogMHg2ODgxLFxuICAgIDB4OTdDMTogMHg2REJDLFxuICAgIDB4OTdDMjogMHg3MzFGLFxuICAgIDB4OTdDMzogMHg3NjQyLFxuICAgIDB4OTdDNDogMHg3N0FELFxuICAgIDB4OTdDNTogMHg3QTFDLFxuICAgIDB4OTdDNjogMHg3Q0U3LFxuICAgIDB4OTdDNzogMHg4MjZGLFxuICAgIDB4OTdDODogMHg4QUQyLFxuICAgIDB4OTdDOTogMHg5MDdDLFxuICAgIDB4OTdDQTogMHg5MUNGLFxuICAgIDB4OTdDQjogMHg5Njc1LFxuICAgIDB4OTdDQzogMHg5ODE4LFxuICAgIDB4OTdDRDogMHg1MjlCLFxuICAgIDB4OTdDRTogMHg3REQxLFxuICAgIDB4OTdDRjogMHg1MDJCLFxuICAgIDB4OTdEMDogMHg1Mzk4LFxuICAgIDB4OTdEMTogMHg2Nzk3LFxuICAgIDB4OTdEMjogMHg2RENCLFxuICAgIDB4OTdEMzogMHg3MUQwLFxuICAgIDB4OTdENDogMHg3NDMzLFxuICAgIDB4OTdENTogMHg4MUU4LFxuICAgIDB4OTdENjogMHg4RjJBLFxuICAgIDB4OTdENzogMHg5NkEzLFxuICAgIDB4OTdEODogMHg5QzU3LFxuICAgIDB4OTdEOTogMHg5RTlGLFxuICAgIDB4OTdEQTogMHg3NDYwLFxuICAgIDB4OTdEQjogMHg1ODQxLFxuICAgIDB4OTdEQzogMHg2RDk5LFxuICAgIDB4OTdERDogMHg3RDJGLFxuICAgIDB4OTdERTogMHg5ODVFLFxuICAgIDB4OTdERjogMHg0RUU0LFxuICAgIDB4OTdFMDogMHg0RjM2LFxuICAgIDB4OTdFMTogMHg0RjhCLFxuICAgIDB4OTdFMjogMHg1MUI3LFxuICAgIDB4OTdFMzogMHg1MkIxLFxuICAgIDB4OTdFNDogMHg1REJBLFxuICAgIDB4OTdFNTogMHg2MDFDLFxuICAgIDB4OTdFNjogMHg3M0IyLFxuICAgIDB4OTdFNzogMHg3OTNDLFxuICAgIDB4OTdFODogMHg4MkQzLFxuICAgIDB4OTdFOTogMHg5MjM0LFxuICAgIDB4OTdFQTogMHg5NkI3LFxuICAgIDB4OTdFQjogMHg5NkY2LFxuICAgIDB4OTdFQzogMHg5NzBBLFxuICAgIDB4OTdFRDogMHg5RTk3LFxuICAgIDB4OTdFRTogMHg5RjYyLFxuICAgIDB4OTdFRjogMHg2NkE2LFxuICAgIDB4OTdGMDogMHg2Qjc0LFxuICAgIDB4OTdGMTogMHg1MjE3LFxuICAgIDB4OTdGMjogMHg1MkEzLFxuICAgIDB4OTdGMzogMHg3MEM4LFxuICAgIDB4OTdGNDogMHg4OEMyLFxuICAgIDB4OTdGNTogMHg1RUM5LFxuICAgIDB4OTdGNjogMHg2MDRCLFxuICAgIDB4OTdGNzogMHg2MTkwLFxuICAgIDB4OTdGODogMHg2RjIzLFxuICAgIDB4OTdGOTogMHg3MTQ5LFxuICAgIDB4OTdGQTogMHg3QzNFLFxuICAgIDB4OTdGQjogMHg3REY0LFxuICAgIDB4OTdGQzogMHg4MDZGLFxuICAgIDB4OTg0MDogMHg4NEVFLFxuICAgIDB4OTg0MTogMHg5MDIzLFxuICAgIDB4OTg0MjogMHg5MzJDLFxuICAgIDB4OTg0MzogMHg1NDQyLFxuICAgIDB4OTg0NDogMHg5QjZGLFxuICAgIDB4OTg0NTogMHg2QUQzLFxuICAgIDB4OTg0NjogMHg3MDg5LFxuICAgIDB4OTg0NzogMHg4Q0MyLFxuICAgIDB4OTg0ODogMHg4REVGLFxuICAgIDB4OTg0OTogMHg5NzMyLFxuICAgIDB4OTg0QTogMHg1MkI0LFxuICAgIDB4OTg0QjogMHg1QTQxLFxuICAgIDB4OTg0QzogMHg1RUNBLFxuICAgIDB4OTg0RDogMHg1RjA0LFxuICAgIDB4OTg0RTogMHg2NzE3LFxuICAgIDB4OTg0RjogMHg2OTdDLFxuICAgIDB4OTg1MDogMHg2OTk0LFxuICAgIDB4OTg1MTogMHg2RDZBLFxuICAgIDB4OTg1MjogMHg2RjBGLFxuICAgIDB4OTg1MzogMHg3MjYyLFxuICAgIDB4OTg1NDogMHg3MkZDLFxuICAgIDB4OTg1NTogMHg3QkVELFxuICAgIDB4OTg1NjogMHg4MDAxLFxuICAgIDB4OTg1NzogMHg4MDdFLFxuICAgIDB4OTg1ODogMHg4NzRCLFxuICAgIDB4OTg1OTogMHg5MENFLFxuICAgIDB4OTg1QTogMHg1MTZELFxuICAgIDB4OTg1QjogMHg5RTkzLFxuICAgIDB4OTg1QzogMHg3OTg0LFxuICAgIDB4OTg1RDogMHg4MDhCLFxuICAgIDB4OTg1RTogMHg5MzMyLFxuICAgIDB4OTg1RjogMHg4QUQ2LFxuICAgIDB4OTg2MDogMHg1MDJELFxuICAgIDB4OTg2MTogMHg1NDhDLFxuICAgIDB4OTg2MjogMHg4QTcxLFxuICAgIDB4OTg2MzogMHg2QjZBLFxuICAgIDB4OTg2NDogMHg4Q0M0LFxuICAgIDB4OTg2NTogMHg4MTA3LFxuICAgIDB4OTg2NjogMHg2MEQxLFxuICAgIDB4OTg2NzogMHg2N0EwLFxuICAgIDB4OTg2ODogMHg5REYyLFxuICAgIDB4OTg2OTogMHg0RTk5LFxuICAgIDB4OTg2QTogMHg0RTk4LFxuICAgIDB4OTg2QjogMHg5QzEwLFxuICAgIDB4OTg2QzogMHg4QTZCLFxuICAgIDB4OTg2RDogMHg4NUMxLFxuICAgIDB4OTg2RTogMHg4NTY4LFxuICAgIDB4OTg2RjogMHg2OTAwLFxuICAgIDB4OTg3MDogMHg2RTdFLFxuICAgIDB4OTg3MTogMHg3ODk3LFxuICAgIDB4OTg3MjogMHg4MTU1LFxuICAgIDB4OTg5RjogMHg1RjBDLFxuICAgIDB4OThBMDogMHg0RTEwLFxuICAgIDB4OThBMTogMHg0RTE1LFxuICAgIDB4OThBMjogMHg0RTJBLFxuICAgIDB4OThBMzogMHg0RTMxLFxuICAgIDB4OThBNDogMHg0RTM2LFxuICAgIDB4OThBNTogMHg0RTNDLFxuICAgIDB4OThBNjogMHg0RTNGLFxuICAgIDB4OThBNzogMHg0RTQyLFxuICAgIDB4OThBODogMHg0RTU2LFxuICAgIDB4OThBOTogMHg0RTU4LFxuICAgIDB4OThBQTogMHg0RTgyLFxuICAgIDB4OThBQjogMHg0RTg1LFxuICAgIDB4OThBQzogMHg4QzZCLFxuICAgIDB4OThBRDogMHg0RThBLFxuICAgIDB4OThBRTogMHg4MjEyLFxuICAgIDB4OThBRjogMHg1RjBELFxuICAgIDB4OThCMDogMHg0RThFLFxuICAgIDB4OThCMTogMHg0RTlFLFxuICAgIDB4OThCMjogMHg0RTlGLFxuICAgIDB4OThCMzogMHg0RUEwLFxuICAgIDB4OThCNDogMHg0RUEyLFxuICAgIDB4OThCNTogMHg0RUIwLFxuICAgIDB4OThCNjogMHg0RUIzLFxuICAgIDB4OThCNzogMHg0RUI2LFxuICAgIDB4OThCODogMHg0RUNFLFxuICAgIDB4OThCOTogMHg0RUNELFxuICAgIDB4OThCQTogMHg0RUM0LFxuICAgIDB4OThCQjogMHg0RUM2LFxuICAgIDB4OThCQzogMHg0RUMyLFxuICAgIDB4OThCRDogMHg0RUQ3LFxuICAgIDB4OThCRTogMHg0RURFLFxuICAgIDB4OThCRjogMHg0RUVELFxuICAgIDB4OThDMDogMHg0RURGLFxuICAgIDB4OThDMTogMHg0RUY3LFxuICAgIDB4OThDMjogMHg0RjA5LFxuICAgIDB4OThDMzogMHg0RjVBLFxuICAgIDB4OThDNDogMHg0RjMwLFxuICAgIDB4OThDNTogMHg0RjVCLFxuICAgIDB4OThDNjogMHg0RjVELFxuICAgIDB4OThDNzogMHg0RjU3LFxuICAgIDB4OThDODogMHg0RjQ3LFxuICAgIDB4OThDOTogMHg0Rjc2LFxuICAgIDB4OThDQTogMHg0Rjg4LFxuICAgIDB4OThDQjogMHg0RjhGLFxuICAgIDB4OThDQzogMHg0Rjk4LFxuICAgIDB4OThDRDogMHg0RjdCLFxuICAgIDB4OThDRTogMHg0RjY5LFxuICAgIDB4OThDRjogMHg0RjcwLFxuICAgIDB4OThEMDogMHg0RjkxLFxuICAgIDB4OThEMTogMHg0RjZGLFxuICAgIDB4OThEMjogMHg0Rjg2LFxuICAgIDB4OThEMzogMHg0Rjk2LFxuICAgIDB4OThENDogMHg1MTE4LFxuICAgIDB4OThENTogMHg0RkQ0LFxuICAgIDB4OThENjogMHg0RkRGLFxuICAgIDB4OThENzogMHg0RkNFLFxuICAgIDB4OThEODogMHg0RkQ4LFxuICAgIDB4OThEOTogMHg0RkRCLFxuICAgIDB4OThEQTogMHg0RkQxLFxuICAgIDB4OThEQjogMHg0RkRBLFxuICAgIDB4OThEQzogMHg0RkQwLFxuICAgIDB4OThERDogMHg0RkU0LFxuICAgIDB4OThERTogMHg0RkU1LFxuICAgIDB4OThERjogMHg1MDFBLFxuICAgIDB4OThFMDogMHg1MDI4LFxuICAgIDB4OThFMTogMHg1MDE0LFxuICAgIDB4OThFMjogMHg1MDJBLFxuICAgIDB4OThFMzogMHg1MDI1LFxuICAgIDB4OThFNDogMHg1MDA1LFxuICAgIDB4OThFNTogMHg0RjFDLFxuICAgIDB4OThFNjogMHg0RkY2LFxuICAgIDB4OThFNzogMHg1MDIxLFxuICAgIDB4OThFODogMHg1MDI5LFxuICAgIDB4OThFOTogMHg1MDJDLFxuICAgIDB4OThFQTogMHg0RkZFLFxuICAgIDB4OThFQjogMHg0RkVGLFxuICAgIDB4OThFQzogMHg1MDExLFxuICAgIDB4OThFRDogMHg1MDA2LFxuICAgIDB4OThFRTogMHg1MDQzLFxuICAgIDB4OThFRjogMHg1MDQ3LFxuICAgIDB4OThGMDogMHg2NzAzLFxuICAgIDB4OThGMTogMHg1MDU1LFxuICAgIDB4OThGMjogMHg1MDUwLFxuICAgIDB4OThGMzogMHg1MDQ4LFxuICAgIDB4OThGNDogMHg1MDVBLFxuICAgIDB4OThGNTogMHg1MDU2LFxuICAgIDB4OThGNjogMHg1MDZDLFxuICAgIDB4OThGNzogMHg1MDc4LFxuICAgIDB4OThGODogMHg1MDgwLFxuICAgIDB4OThGOTogMHg1MDlBLFxuICAgIDB4OThGQTogMHg1MDg1LFxuICAgIDB4OThGQjogMHg1MEI0LFxuICAgIDB4OThGQzogMHg1MEIyLFxuICAgIDB4OTk0MDogMHg1MEM5LFxuICAgIDB4OTk0MTogMHg1MENBLFxuICAgIDB4OTk0MjogMHg1MEIzLFxuICAgIDB4OTk0MzogMHg1MEMyLFxuICAgIDB4OTk0NDogMHg1MEQ2LFxuICAgIDB4OTk0NTogMHg1MERFLFxuICAgIDB4OTk0NjogMHg1MEU1LFxuICAgIDB4OTk0NzogMHg1MEVELFxuICAgIDB4OTk0ODogMHg1MEUzLFxuICAgIDB4OTk0OTogMHg1MEVFLFxuICAgIDB4OTk0QTogMHg1MEY5LFxuICAgIDB4OTk0QjogMHg1MEY1LFxuICAgIDB4OTk0QzogMHg1MTA5LFxuICAgIDB4OTk0RDogMHg1MTAxLFxuICAgIDB4OTk0RTogMHg1MTAyLFxuICAgIDB4OTk0RjogMHg1MTE2LFxuICAgIDB4OTk1MDogMHg1MTE1LFxuICAgIDB4OTk1MTogMHg1MTE0LFxuICAgIDB4OTk1MjogMHg1MTFBLFxuICAgIDB4OTk1MzogMHg1MTIxLFxuICAgIDB4OTk1NDogMHg1MTNBLFxuICAgIDB4OTk1NTogMHg1MTM3LFxuICAgIDB4OTk1NjogMHg1MTNDLFxuICAgIDB4OTk1NzogMHg1MTNCLFxuICAgIDB4OTk1ODogMHg1MTNGLFxuICAgIDB4OTk1OTogMHg1MTQwLFxuICAgIDB4OTk1QTogMHg1MTUyLFxuICAgIDB4OTk1QjogMHg1MTRDLFxuICAgIDB4OTk1QzogMHg1MTU0LFxuICAgIDB4OTk1RDogMHg1MTYyLFxuICAgIDB4OTk1RTogMHg3QUY4LFxuICAgIDB4OTk1RjogMHg1MTY5LFxuICAgIDB4OTk2MDogMHg1MTZBLFxuICAgIDB4OTk2MTogMHg1MTZFLFxuICAgIDB4OTk2MjogMHg1MTgwLFxuICAgIDB4OTk2MzogMHg1MTgyLFxuICAgIDB4OTk2NDogMHg1NkQ4LFxuICAgIDB4OTk2NTogMHg1MThDLFxuICAgIDB4OTk2NjogMHg1MTg5LFxuICAgIDB4OTk2NzogMHg1MThGLFxuICAgIDB4OTk2ODogMHg1MTkxLFxuICAgIDB4OTk2OTogMHg1MTkzLFxuICAgIDB4OTk2QTogMHg1MTk1LFxuICAgIDB4OTk2QjogMHg1MTk2LFxuICAgIDB4OTk2QzogMHg1MUE0LFxuICAgIDB4OTk2RDogMHg1MUE2LFxuICAgIDB4OTk2RTogMHg1MUEyLFxuICAgIDB4OTk2RjogMHg1MUE5LFxuICAgIDB4OTk3MDogMHg1MUFBLFxuICAgIDB4OTk3MTogMHg1MUFCLFxuICAgIDB4OTk3MjogMHg1MUIzLFxuICAgIDB4OTk3MzogMHg1MUIxLFxuICAgIDB4OTk3NDogMHg1MUIyLFxuICAgIDB4OTk3NTogMHg1MUIwLFxuICAgIDB4OTk3NjogMHg1MUI1LFxuICAgIDB4OTk3NzogMHg1MUJELFxuICAgIDB4OTk3ODogMHg1MUM1LFxuICAgIDB4OTk3OTogMHg1MUM5LFxuICAgIDB4OTk3QTogMHg1MURCLFxuICAgIDB4OTk3QjogMHg1MUUwLFxuICAgIDB4OTk3QzogMHg4NjU1LFxuICAgIDB4OTk3RDogMHg1MUU5LFxuICAgIDB4OTk3RTogMHg1MUVELFxuICAgIDB4OTk4MDogMHg1MUYwLFxuICAgIDB4OTk4MTogMHg1MUY1LFxuICAgIDB4OTk4MjogMHg1MUZFLFxuICAgIDB4OTk4MzogMHg1MjA0LFxuICAgIDB4OTk4NDogMHg1MjBCLFxuICAgIDB4OTk4NTogMHg1MjE0LFxuICAgIDB4OTk4NjogMHg1MjBFLFxuICAgIDB4OTk4NzogMHg1MjI3LFxuICAgIDB4OTk4ODogMHg1MjJBLFxuICAgIDB4OTk4OTogMHg1MjJFLFxuICAgIDB4OTk4QTogMHg1MjMzLFxuICAgIDB4OTk4QjogMHg1MjM5LFxuICAgIDB4OTk4QzogMHg1MjRGLFxuICAgIDB4OTk4RDogMHg1MjQ0LFxuICAgIDB4OTk4RTogMHg1MjRCLFxuICAgIDB4OTk4RjogMHg1MjRDLFxuICAgIDB4OTk5MDogMHg1MjVFLFxuICAgIDB4OTk5MTogMHg1MjU0LFxuICAgIDB4OTk5MjogMHg1MjZBLFxuICAgIDB4OTk5MzogMHg1Mjc0LFxuICAgIDB4OTk5NDogMHg1MjY5LFxuICAgIDB4OTk5NTogMHg1MjczLFxuICAgIDB4OTk5NjogMHg1MjdGLFxuICAgIDB4OTk5NzogMHg1MjdELFxuICAgIDB4OTk5ODogMHg1MjhELFxuICAgIDB4OTk5OTogMHg1Mjk0LFxuICAgIDB4OTk5QTogMHg1MjkyLFxuICAgIDB4OTk5QjogMHg1MjcxLFxuICAgIDB4OTk5QzogMHg1Mjg4LFxuICAgIDB4OTk5RDogMHg1MjkxLFxuICAgIDB4OTk5RTogMHg4RkE4LFxuICAgIDB4OTk5RjogMHg4RkE3LFxuICAgIDB4OTlBMDogMHg1MkFDLFxuICAgIDB4OTlBMTogMHg1MkFELFxuICAgIDB4OTlBMjogMHg1MkJDLFxuICAgIDB4OTlBMzogMHg1MkI1LFxuICAgIDB4OTlBNDogMHg1MkMxLFxuICAgIDB4OTlBNTogMHg1MkNELFxuICAgIDB4OTlBNjogMHg1MkQ3LFxuICAgIDB4OTlBNzogMHg1MkRFLFxuICAgIDB4OTlBODogMHg1MkUzLFxuICAgIDB4OTlBOTogMHg1MkU2LFxuICAgIDB4OTlBQTogMHg5OEVELFxuICAgIDB4OTlBQjogMHg1MkUwLFxuICAgIDB4OTlBQzogMHg1MkYzLFxuICAgIDB4OTlBRDogMHg1MkY1LFxuICAgIDB4OTlBRTogMHg1MkY4LFxuICAgIDB4OTlBRjogMHg1MkY5LFxuICAgIDB4OTlCMDogMHg1MzA2LFxuICAgIDB4OTlCMTogMHg1MzA4LFxuICAgIDB4OTlCMjogMHg3NTM4LFxuICAgIDB4OTlCMzogMHg1MzBELFxuICAgIDB4OTlCNDogMHg1MzEwLFxuICAgIDB4OTlCNTogMHg1MzBGLFxuICAgIDB4OTlCNjogMHg1MzE1LFxuICAgIDB4OTlCNzogMHg1MzFBLFxuICAgIDB4OTlCODogMHg1MzIzLFxuICAgIDB4OTlCOTogMHg1MzJGLFxuICAgIDB4OTlCQTogMHg1MzMxLFxuICAgIDB4OTlCQjogMHg1MzMzLFxuICAgIDB4OTlCQzogMHg1MzM4LFxuICAgIDB4OTlCRDogMHg1MzQwLFxuICAgIDB4OTlCRTogMHg1MzQ2LFxuICAgIDB4OTlCRjogMHg1MzQ1LFxuICAgIDB4OTlDMDogMHg0RTE3LFxuICAgIDB4OTlDMTogMHg1MzQ5LFxuICAgIDB4OTlDMjogMHg1MzRELFxuICAgIDB4OTlDMzogMHg1MUQ2LFxuICAgIDB4OTlDNDogMHg1MzVFLFxuICAgIDB4OTlDNTogMHg1MzY5LFxuICAgIDB4OTlDNjogMHg1MzZFLFxuICAgIDB4OTlDNzogMHg1OTE4LFxuICAgIDB4OTlDODogMHg1MzdCLFxuICAgIDB4OTlDOTogMHg1Mzc3LFxuICAgIDB4OTlDQTogMHg1MzgyLFxuICAgIDB4OTlDQjogMHg1Mzk2LFxuICAgIDB4OTlDQzogMHg1M0EwLFxuICAgIDB4OTlDRDogMHg1M0E2LFxuICAgIDB4OTlDRTogMHg1M0E1LFxuICAgIDB4OTlDRjogMHg1M0FFLFxuICAgIDB4OTlEMDogMHg1M0IwLFxuICAgIDB4OTlEMTogMHg1M0I2LFxuICAgIDB4OTlEMjogMHg1M0MzLFxuICAgIDB4OTlEMzogMHg3QzEyLFxuICAgIDB4OTlENDogMHg5NkQ5LFxuICAgIDB4OTlENTogMHg1M0RGLFxuICAgIDB4OTlENjogMHg2NkZDLFxuICAgIDB4OTlENzogMHg3MUVFLFxuICAgIDB4OTlEODogMHg1M0VFLFxuICAgIDB4OTlEOTogMHg1M0U4LFxuICAgIDB4OTlEQTogMHg1M0VELFxuICAgIDB4OTlEQjogMHg1M0ZBLFxuICAgIDB4OTlEQzogMHg1NDAxLFxuICAgIDB4OTlERDogMHg1NDNELFxuICAgIDB4OTlERTogMHg1NDQwLFxuICAgIDB4OTlERjogMHg1NDJDLFxuICAgIDB4OTlFMDogMHg1NDJELFxuICAgIDB4OTlFMTogMHg1NDNDLFxuICAgIDB4OTlFMjogMHg1NDJFLFxuICAgIDB4OTlFMzogMHg1NDM2LFxuICAgIDB4OTlFNDogMHg1NDI5LFxuICAgIDB4OTlFNTogMHg1NDFELFxuICAgIDB4OTlFNjogMHg1NDRFLFxuICAgIDB4OTlFNzogMHg1NDhGLFxuICAgIDB4OTlFODogMHg1NDc1LFxuICAgIDB4OTlFOTogMHg1NDhFLFxuICAgIDB4OTlFQTogMHg1NDVGLFxuICAgIDB4OTlFQjogMHg1NDcxLFxuICAgIDB4OTlFQzogMHg1NDc3LFxuICAgIDB4OTlFRDogMHg1NDcwLFxuICAgIDB4OTlFRTogMHg1NDkyLFxuICAgIDB4OTlFRjogMHg1NDdCLFxuICAgIDB4OTlGMDogMHg1NDgwLFxuICAgIDB4OTlGMTogMHg1NDc2LFxuICAgIDB4OTlGMjogMHg1NDg0LFxuICAgIDB4OTlGMzogMHg1NDkwLFxuICAgIDB4OTlGNDogMHg1NDg2LFxuICAgIDB4OTlGNTogMHg1NEM3LFxuICAgIDB4OTlGNjogMHg1NEEyLFxuICAgIDB4OTlGNzogMHg1NEI4LFxuICAgIDB4OTlGODogMHg1NEE1LFxuICAgIDB4OTlGOTogMHg1NEFDLFxuICAgIDB4OTlGQTogMHg1NEM0LFxuICAgIDB4OTlGQjogMHg1NEM4LFxuICAgIDB4OTlGQzogMHg1NEE4LFxuICAgIDB4OUE0MDogMHg1NEFCLFxuICAgIDB4OUE0MTogMHg1NEMyLFxuICAgIDB4OUE0MjogMHg1NEE0LFxuICAgIDB4OUE0MzogMHg1NEJFLFxuICAgIDB4OUE0NDogMHg1NEJDLFxuICAgIDB4OUE0NTogMHg1NEQ4LFxuICAgIDB4OUE0NjogMHg1NEU1LFxuICAgIDB4OUE0NzogMHg1NEU2LFxuICAgIDB4OUE0ODogMHg1NTBGLFxuICAgIDB4OUE0OTogMHg1NTE0LFxuICAgIDB4OUE0QTogMHg1NEZELFxuICAgIDB4OUE0QjogMHg1NEVFLFxuICAgIDB4OUE0QzogMHg1NEVELFxuICAgIDB4OUE0RDogMHg1NEZBLFxuICAgIDB4OUE0RTogMHg1NEUyLFxuICAgIDB4OUE0RjogMHg1NTM5LFxuICAgIDB4OUE1MDogMHg1NTQwLFxuICAgIDB4OUE1MTogMHg1NTYzLFxuICAgIDB4OUE1MjogMHg1NTRDLFxuICAgIDB4OUE1MzogMHg1NTJFLFxuICAgIDB4OUE1NDogMHg1NTVDLFxuICAgIDB4OUE1NTogMHg1NTQ1LFxuICAgIDB4OUE1NjogMHg1NTU2LFxuICAgIDB4OUE1NzogMHg1NTU3LFxuICAgIDB4OUE1ODogMHg1NTM4LFxuICAgIDB4OUE1OTogMHg1NTMzLFxuICAgIDB4OUE1QTogMHg1NTVELFxuICAgIDB4OUE1QjogMHg1NTk5LFxuICAgIDB4OUE1QzogMHg1NTgwLFxuICAgIDB4OUE1RDogMHg1NEFGLFxuICAgIDB4OUE1RTogMHg1NThBLFxuICAgIDB4OUE1RjogMHg1NTlGLFxuICAgIDB4OUE2MDogMHg1NTdCLFxuICAgIDB4OUE2MTogMHg1NTdFLFxuICAgIDB4OUE2MjogMHg1NTk4LFxuICAgIDB4OUE2MzogMHg1NTlFLFxuICAgIDB4OUE2NDogMHg1NUFFLFxuICAgIDB4OUE2NTogMHg1NTdDLFxuICAgIDB4OUE2NjogMHg1NTgzLFxuICAgIDB4OUE2NzogMHg1NUE5LFxuICAgIDB4OUE2ODogMHg1NTg3LFxuICAgIDB4OUE2OTogMHg1NUE4LFxuICAgIDB4OUE2QTogMHg1NURBLFxuICAgIDB4OUE2QjogMHg1NUM1LFxuICAgIDB4OUE2QzogMHg1NURGLFxuICAgIDB4OUE2RDogMHg1NUM0LFxuICAgIDB4OUE2RTogMHg1NURDLFxuICAgIDB4OUE2RjogMHg1NUU0LFxuICAgIDB4OUE3MDogMHg1NUQ0LFxuICAgIDB4OUE3MTogMHg1NjE0LFxuICAgIDB4OUE3MjogMHg1NUY3LFxuICAgIDB4OUE3MzogMHg1NjE2LFxuICAgIDB4OUE3NDogMHg1NUZFLFxuICAgIDB4OUE3NTogMHg1NUZELFxuICAgIDB4OUE3NjogMHg1NjFCLFxuICAgIDB4OUE3NzogMHg1NUY5LFxuICAgIDB4OUE3ODogMHg1NjRFLFxuICAgIDB4OUE3OTogMHg1NjUwLFxuICAgIDB4OUE3QTogMHg3MURGLFxuICAgIDB4OUE3QjogMHg1NjM0LFxuICAgIDB4OUE3QzogMHg1NjM2LFxuICAgIDB4OUE3RDogMHg1NjMyLFxuICAgIDB4OUE3RTogMHg1NjM4LFxuICAgIDB4OUE4MDogMHg1NjZCLFxuICAgIDB4OUE4MTogMHg1NjY0LFxuICAgIDB4OUE4MjogMHg1NjJGLFxuICAgIDB4OUE4MzogMHg1NjZDLFxuICAgIDB4OUE4NDogMHg1NjZBLFxuICAgIDB4OUE4NTogMHg1Njg2LFxuICAgIDB4OUE4NjogMHg1NjgwLFxuICAgIDB4OUE4NzogMHg1NjhBLFxuICAgIDB4OUE4ODogMHg1NkEwLFxuICAgIDB4OUE4OTogMHg1Njk0LFxuICAgIDB4OUE4QTogMHg1NjhGLFxuICAgIDB4OUE4QjogMHg1NkE1LFxuICAgIDB4OUE4QzogMHg1NkFFLFxuICAgIDB4OUE4RDogMHg1NkI2LFxuICAgIDB4OUE4RTogMHg1NkI0LFxuICAgIDB4OUE4RjogMHg1NkMyLFxuICAgIDB4OUE5MDogMHg1NkJDLFxuICAgIDB4OUE5MTogMHg1NkMxLFxuICAgIDB4OUE5MjogMHg1NkMzLFxuICAgIDB4OUE5MzogMHg1NkMwLFxuICAgIDB4OUE5NDogMHg1NkM4LFxuICAgIDB4OUE5NTogMHg1NkNFLFxuICAgIDB4OUE5NjogMHg1NkQxLFxuICAgIDB4OUE5NzogMHg1NkQzLFxuICAgIDB4OUE5ODogMHg1NkQ3LFxuICAgIDB4OUE5OTogMHg1NkVFLFxuICAgIDB4OUE5QTogMHg1NkY5LFxuICAgIDB4OUE5QjogMHg1NzAwLFxuICAgIDB4OUE5QzogMHg1NkZGLFxuICAgIDB4OUE5RDogMHg1NzA0LFxuICAgIDB4OUE5RTogMHg1NzA5LFxuICAgIDB4OUE5RjogMHg1NzA4LFxuICAgIDB4OUFBMDogMHg1NzBCLFxuICAgIDB4OUFBMTogMHg1NzBELFxuICAgIDB4OUFBMjogMHg1NzEzLFxuICAgIDB4OUFBMzogMHg1NzE4LFxuICAgIDB4OUFBNDogMHg1NzE2LFxuICAgIDB4OUFBNTogMHg1NUM3LFxuICAgIDB4OUFBNjogMHg1NzFDLFxuICAgIDB4OUFBNzogMHg1NzI2LFxuICAgIDB4OUFBODogMHg1NzM3LFxuICAgIDB4OUFBOTogMHg1NzM4LFxuICAgIDB4OUFBQTogMHg1NzRFLFxuICAgIDB4OUFBQjogMHg1NzNCLFxuICAgIDB4OUFBQzogMHg1NzQwLFxuICAgIDB4OUFBRDogMHg1NzRGLFxuICAgIDB4OUFBRTogMHg1NzY5LFxuICAgIDB4OUFBRjogMHg1N0MwLFxuICAgIDB4OUFCMDogMHg1Nzg4LFxuICAgIDB4OUFCMTogMHg1NzYxLFxuICAgIDB4OUFCMjogMHg1NzdGLFxuICAgIDB4OUFCMzogMHg1Nzg5LFxuICAgIDB4OUFCNDogMHg1NzkzLFxuICAgIDB4OUFCNTogMHg1N0EwLFxuICAgIDB4OUFCNjogMHg1N0IzLFxuICAgIDB4OUFCNzogMHg1N0E0LFxuICAgIDB4OUFCODogMHg1N0FBLFxuICAgIDB4OUFCOTogMHg1N0IwLFxuICAgIDB4OUFCQTogMHg1N0MzLFxuICAgIDB4OUFCQjogMHg1N0M2LFxuICAgIDB4OUFCQzogMHg1N0Q0LFxuICAgIDB4OUFCRDogMHg1N0QyLFxuICAgIDB4OUFCRTogMHg1N0QzLFxuICAgIDB4OUFCRjogMHg1ODBBLFxuICAgIDB4OUFDMDogMHg1N0Q2LFxuICAgIDB4OUFDMTogMHg1N0UzLFxuICAgIDB4OUFDMjogMHg1ODBCLFxuICAgIDB4OUFDMzogMHg1ODE5LFxuICAgIDB4OUFDNDogMHg1ODFELFxuICAgIDB4OUFDNTogMHg1ODcyLFxuICAgIDB4OUFDNjogMHg1ODIxLFxuICAgIDB4OUFDNzogMHg1ODYyLFxuICAgIDB4OUFDODogMHg1ODRCLFxuICAgIDB4OUFDOTogMHg1ODcwLFxuICAgIDB4OUFDQTogMHg2QkMwLFxuICAgIDB4OUFDQjogMHg1ODUyLFxuICAgIDB4OUFDQzogMHg1ODNELFxuICAgIDB4OUFDRDogMHg1ODc5LFxuICAgIDB4OUFDRTogMHg1ODg1LFxuICAgIDB4OUFDRjogMHg1OEI5LFxuICAgIDB4OUFEMDogMHg1ODlGLFxuICAgIDB4OUFEMTogMHg1OEFCLFxuICAgIDB4OUFEMjogMHg1OEJBLFxuICAgIDB4OUFEMzogMHg1OERFLFxuICAgIDB4OUFENDogMHg1OEJCLFxuICAgIDB4OUFENTogMHg1OEI4LFxuICAgIDB4OUFENjogMHg1OEFFLFxuICAgIDB4OUFENzogMHg1OEM1LFxuICAgIDB4OUFEODogMHg1OEQzLFxuICAgIDB4OUFEOTogMHg1OEQxLFxuICAgIDB4OUFEQTogMHg1OEQ3LFxuICAgIDB4OUFEQjogMHg1OEQ5LFxuICAgIDB4OUFEQzogMHg1OEQ4LFxuICAgIDB4OUFERDogMHg1OEU1LFxuICAgIDB4OUFERTogMHg1OERDLFxuICAgIDB4OUFERjogMHg1OEU0LFxuICAgIDB4OUFFMDogMHg1OERGLFxuICAgIDB4OUFFMTogMHg1OEVGLFxuICAgIDB4OUFFMjogMHg1OEZBLFxuICAgIDB4OUFFMzogMHg1OEY5LFxuICAgIDB4OUFFNDogMHg1OEZCLFxuICAgIDB4OUFFNTogMHg1OEZDLFxuICAgIDB4OUFFNjogMHg1OEZELFxuICAgIDB4OUFFNzogMHg1OTAyLFxuICAgIDB4OUFFODogMHg1OTBBLFxuICAgIDB4OUFFOTogMHg1OTEwLFxuICAgIDB4OUFFQTogMHg1OTFCLFxuICAgIDB4OUFFQjogMHg2OEE2LFxuICAgIDB4OUFFQzogMHg1OTI1LFxuICAgIDB4OUFFRDogMHg1OTJDLFxuICAgIDB4OUFFRTogMHg1OTJELFxuICAgIDB4OUFFRjogMHg1OTMyLFxuICAgIDB4OUFGMDogMHg1OTM4LFxuICAgIDB4OUFGMTogMHg1OTNFLFxuICAgIDB4OUFGMjogMHg3QUQyLFxuICAgIDB4OUFGMzogMHg1OTU1LFxuICAgIDB4OUFGNDogMHg1OTUwLFxuICAgIDB4OUFGNTogMHg1OTRFLFxuICAgIDB4OUFGNjogMHg1OTVBLFxuICAgIDB4OUFGNzogMHg1OTU4LFxuICAgIDB4OUFGODogMHg1OTYyLFxuICAgIDB4OUFGOTogMHg1OTYwLFxuICAgIDB4OUFGQTogMHg1OTY3LFxuICAgIDB4OUFGQjogMHg1OTZDLFxuICAgIDB4OUFGQzogMHg1OTY5LFxuICAgIDB4OUI0MDogMHg1OTc4LFxuICAgIDB4OUI0MTogMHg1OTgxLFxuICAgIDB4OUI0MjogMHg1OTlELFxuICAgIDB4OUI0MzogMHg0RjVFLFxuICAgIDB4OUI0NDogMHg0RkFCLFxuICAgIDB4OUI0NTogMHg1OUEzLFxuICAgIDB4OUI0NjogMHg1OUIyLFxuICAgIDB4OUI0NzogMHg1OUM2LFxuICAgIDB4OUI0ODogMHg1OUU4LFxuICAgIDB4OUI0OTogMHg1OURDLFxuICAgIDB4OUI0QTogMHg1OThELFxuICAgIDB4OUI0QjogMHg1OUQ5LFxuICAgIDB4OUI0QzogMHg1OURBLFxuICAgIDB4OUI0RDogMHg1QTI1LFxuICAgIDB4OUI0RTogMHg1QTFGLFxuICAgIDB4OUI0RjogMHg1QTExLFxuICAgIDB4OUI1MDogMHg1QTFDLFxuICAgIDB4OUI1MTogMHg1QTA5LFxuICAgIDB4OUI1MjogMHg1QTFBLFxuICAgIDB4OUI1MzogMHg1QTQwLFxuICAgIDB4OUI1NDogMHg1QTZDLFxuICAgIDB4OUI1NTogMHg1QTQ5LFxuICAgIDB4OUI1NjogMHg1QTM1LFxuICAgIDB4OUI1NzogMHg1QTM2LFxuICAgIDB4OUI1ODogMHg1QTYyLFxuICAgIDB4OUI1OTogMHg1QTZBLFxuICAgIDB4OUI1QTogMHg1QTlBLFxuICAgIDB4OUI1QjogMHg1QUJDLFxuICAgIDB4OUI1QzogMHg1QUJFLFxuICAgIDB4OUI1RDogMHg1QUNCLFxuICAgIDB4OUI1RTogMHg1QUMyLFxuICAgIDB4OUI1RjogMHg1QUJELFxuICAgIDB4OUI2MDogMHg1QUUzLFxuICAgIDB4OUI2MTogMHg1QUQ3LFxuICAgIDB4OUI2MjogMHg1QUU2LFxuICAgIDB4OUI2MzogMHg1QUU5LFxuICAgIDB4OUI2NDogMHg1QUQ2LFxuICAgIDB4OUI2NTogMHg1QUZBLFxuICAgIDB4OUI2NjogMHg1QUZCLFxuICAgIDB4OUI2NzogMHg1QjBDLFxuICAgIDB4OUI2ODogMHg1QjBCLFxuICAgIDB4OUI2OTogMHg1QjE2LFxuICAgIDB4OUI2QTogMHg1QjMyLFxuICAgIDB4OUI2QjogMHg1QUQwLFxuICAgIDB4OUI2QzogMHg1QjJBLFxuICAgIDB4OUI2RDogMHg1QjM2LFxuICAgIDB4OUI2RTogMHg1QjNFLFxuICAgIDB4OUI2RjogMHg1QjQzLFxuICAgIDB4OUI3MDogMHg1QjQ1LFxuICAgIDB4OUI3MTogMHg1QjQwLFxuICAgIDB4OUI3MjogMHg1QjUxLFxuICAgIDB4OUI3MzogMHg1QjU1LFxuICAgIDB4OUI3NDogMHg1QjVBLFxuICAgIDB4OUI3NTogMHg1QjVCLFxuICAgIDB4OUI3NjogMHg1QjY1LFxuICAgIDB4OUI3NzogMHg1QjY5LFxuICAgIDB4OUI3ODogMHg1QjcwLFxuICAgIDB4OUI3OTogMHg1QjczLFxuICAgIDB4OUI3QTogMHg1Qjc1LFxuICAgIDB4OUI3QjogMHg1Qjc4LFxuICAgIDB4OUI3QzogMHg2NTg4LFxuICAgIDB4OUI3RDogMHg1QjdBLFxuICAgIDB4OUI3RTogMHg1QjgwLFxuICAgIDB4OUI4MDogMHg1QjgzLFxuICAgIDB4OUI4MTogMHg1QkE2LFxuICAgIDB4OUI4MjogMHg1QkI4LFxuICAgIDB4OUI4MzogMHg1QkMzLFxuICAgIDB4OUI4NDogMHg1QkM3LFxuICAgIDB4OUI4NTogMHg1QkM5LFxuICAgIDB4OUI4NjogMHg1QkQ0LFxuICAgIDB4OUI4NzogMHg1QkQwLFxuICAgIDB4OUI4ODogMHg1QkU0LFxuICAgIDB4OUI4OTogMHg1QkU2LFxuICAgIDB4OUI4QTogMHg1QkUyLFxuICAgIDB4OUI4QjogMHg1QkRFLFxuICAgIDB4OUI4QzogMHg1QkU1LFxuICAgIDB4OUI4RDogMHg1QkVCLFxuICAgIDB4OUI4RTogMHg1QkYwLFxuICAgIDB4OUI4RjogMHg1QkY2LFxuICAgIDB4OUI5MDogMHg1QkYzLFxuICAgIDB4OUI5MTogMHg1QzA1LFxuICAgIDB4OUI5MjogMHg1QzA3LFxuICAgIDB4OUI5MzogMHg1QzA4LFxuICAgIDB4OUI5NDogMHg1QzBELFxuICAgIDB4OUI5NTogMHg1QzEzLFxuICAgIDB4OUI5NjogMHg1QzIwLFxuICAgIDB4OUI5NzogMHg1QzIyLFxuICAgIDB4OUI5ODogMHg1QzI4LFxuICAgIDB4OUI5OTogMHg1QzM4LFxuICAgIDB4OUI5QTogMHg1QzM5LFxuICAgIDB4OUI5QjogMHg1QzQxLFxuICAgIDB4OUI5QzogMHg1QzQ2LFxuICAgIDB4OUI5RDogMHg1QzRFLFxuICAgIDB4OUI5RTogMHg1QzUzLFxuICAgIDB4OUI5RjogMHg1QzUwLFxuICAgIDB4OUJBMDogMHg1QzRGLFxuICAgIDB4OUJBMTogMHg1QjcxLFxuICAgIDB4OUJBMjogMHg1QzZDLFxuICAgIDB4OUJBMzogMHg1QzZFLFxuICAgIDB4OUJBNDogMHg0RTYyLFxuICAgIDB4OUJBNTogMHg1Qzc2LFxuICAgIDB4OUJBNjogMHg1Qzc5LFxuICAgIDB4OUJBNzogMHg1QzhDLFxuICAgIDB4OUJBODogMHg1QzkxLFxuICAgIDB4OUJBOTogMHg1Qzk0LFxuICAgIDB4OUJBQTogMHg1OTlCLFxuICAgIDB4OUJBQjogMHg1Q0FCLFxuICAgIDB4OUJBQzogMHg1Q0JCLFxuICAgIDB4OUJBRDogMHg1Q0I2LFxuICAgIDB4OUJBRTogMHg1Q0JDLFxuICAgIDB4OUJBRjogMHg1Q0I3LFxuICAgIDB4OUJCMDogMHg1Q0M1LFxuICAgIDB4OUJCMTogMHg1Q0JFLFxuICAgIDB4OUJCMjogMHg1Q0M3LFxuICAgIDB4OUJCMzogMHg1Q0Q5LFxuICAgIDB4OUJCNDogMHg1Q0U5LFxuICAgIDB4OUJCNTogMHg1Q0ZELFxuICAgIDB4OUJCNjogMHg1Q0ZBLFxuICAgIDB4OUJCNzogMHg1Q0VELFxuICAgIDB4OUJCODogMHg1RDhDLFxuICAgIDB4OUJCOTogMHg1Q0VBLFxuICAgIDB4OUJCQTogMHg1RDBCLFxuICAgIDB4OUJCQjogMHg1RDE1LFxuICAgIDB4OUJCQzogMHg1RDE3LFxuICAgIDB4OUJCRDogMHg1RDVDLFxuICAgIDB4OUJCRTogMHg1RDFGLFxuICAgIDB4OUJCRjogMHg1RDFCLFxuICAgIDB4OUJDMDogMHg1RDExLFxuICAgIDB4OUJDMTogMHg1RDE0LFxuICAgIDB4OUJDMjogMHg1RDIyLFxuICAgIDB4OUJDMzogMHg1RDFBLFxuICAgIDB4OUJDNDogMHg1RDE5LFxuICAgIDB4OUJDNTogMHg1RDE4LFxuICAgIDB4OUJDNjogMHg1RDRDLFxuICAgIDB4OUJDNzogMHg1RDUyLFxuICAgIDB4OUJDODogMHg1RDRFLFxuICAgIDB4OUJDOTogMHg1RDRCLFxuICAgIDB4OUJDQTogMHg1RDZDLFxuICAgIDB4OUJDQjogMHg1RDczLFxuICAgIDB4OUJDQzogMHg1RDc2LFxuICAgIDB4OUJDRDogMHg1RDg3LFxuICAgIDB4OUJDRTogMHg1RDg0LFxuICAgIDB4OUJDRjogMHg1RDgyLFxuICAgIDB4OUJEMDogMHg1REEyLFxuICAgIDB4OUJEMTogMHg1RDlELFxuICAgIDB4OUJEMjogMHg1REFDLFxuICAgIDB4OUJEMzogMHg1REFFLFxuICAgIDB4OUJENDogMHg1REJELFxuICAgIDB4OUJENTogMHg1RDkwLFxuICAgIDB4OUJENjogMHg1REI3LFxuICAgIDB4OUJENzogMHg1REJDLFxuICAgIDB4OUJEODogMHg1REM5LFxuICAgIDB4OUJEOTogMHg1RENELFxuICAgIDB4OUJEQTogMHg1REQzLFxuICAgIDB4OUJEQjogMHg1REQyLFxuICAgIDB4OUJEQzogMHg1REQ2LFxuICAgIDB4OUJERDogMHg1RERCLFxuICAgIDB4OUJERTogMHg1REVCLFxuICAgIDB4OUJERjogMHg1REYyLFxuICAgIDB4OUJFMDogMHg1REY1LFxuICAgIDB4OUJFMTogMHg1RTBCLFxuICAgIDB4OUJFMjogMHg1RTFBLFxuICAgIDB4OUJFMzogMHg1RTE5LFxuICAgIDB4OUJFNDogMHg1RTExLFxuICAgIDB4OUJFNTogMHg1RTFCLFxuICAgIDB4OUJFNjogMHg1RTM2LFxuICAgIDB4OUJFNzogMHg1RTM3LFxuICAgIDB4OUJFODogMHg1RTQ0LFxuICAgIDB4OUJFOTogMHg1RTQzLFxuICAgIDB4OUJFQTogMHg1RTQwLFxuICAgIDB4OUJFQjogMHg1RTRFLFxuICAgIDB4OUJFQzogMHg1RTU3LFxuICAgIDB4OUJFRDogMHg1RTU0LFxuICAgIDB4OUJFRTogMHg1RTVGLFxuICAgIDB4OUJFRjogMHg1RTYyLFxuICAgIDB4OUJGMDogMHg1RTY0LFxuICAgIDB4OUJGMTogMHg1RTQ3LFxuICAgIDB4OUJGMjogMHg1RTc1LFxuICAgIDB4OUJGMzogMHg1RTc2LFxuICAgIDB4OUJGNDogMHg1RTdBLFxuICAgIDB4OUJGNTogMHg5RUJDLFxuICAgIDB4OUJGNjogMHg1RTdGLFxuICAgIDB4OUJGNzogMHg1RUEwLFxuICAgIDB4OUJGODogMHg1RUMxLFxuICAgIDB4OUJGOTogMHg1RUMyLFxuICAgIDB4OUJGQTogMHg1RUM4LFxuICAgIDB4OUJGQjogMHg1RUQwLFxuICAgIDB4OUJGQzogMHg1RUNGLFxuICAgIDB4OUM0MDogMHg1RUQ2LFxuICAgIDB4OUM0MTogMHg1RUUzLFxuICAgIDB4OUM0MjogMHg1RURELFxuICAgIDB4OUM0MzogMHg1RURBLFxuICAgIDB4OUM0NDogMHg1RURCLFxuICAgIDB4OUM0NTogMHg1RUUyLFxuICAgIDB4OUM0NjogMHg1RUUxLFxuICAgIDB4OUM0NzogMHg1RUU4LFxuICAgIDB4OUM0ODogMHg1RUU5LFxuICAgIDB4OUM0OTogMHg1RUVDLFxuICAgIDB4OUM0QTogMHg1RUYxLFxuICAgIDB4OUM0QjogMHg1RUYzLFxuICAgIDB4OUM0QzogMHg1RUYwLFxuICAgIDB4OUM0RDogMHg1RUY0LFxuICAgIDB4OUM0RTogMHg1RUY4LFxuICAgIDB4OUM0RjogMHg1RUZFLFxuICAgIDB4OUM1MDogMHg1RjAzLFxuICAgIDB4OUM1MTogMHg1RjA5LFxuICAgIDB4OUM1MjogMHg1RjVELFxuICAgIDB4OUM1MzogMHg1RjVDLFxuICAgIDB4OUM1NDogMHg1RjBCLFxuICAgIDB4OUM1NTogMHg1RjExLFxuICAgIDB4OUM1NjogMHg1RjE2LFxuICAgIDB4OUM1NzogMHg1RjI5LFxuICAgIDB4OUM1ODogMHg1RjJELFxuICAgIDB4OUM1OTogMHg1RjM4LFxuICAgIDB4OUM1QTogMHg1RjQxLFxuICAgIDB4OUM1QjogMHg1RjQ4LFxuICAgIDB4OUM1QzogMHg1RjRDLFxuICAgIDB4OUM1RDogMHg1RjRFLFxuICAgIDB4OUM1RTogMHg1RjJGLFxuICAgIDB4OUM1RjogMHg1RjUxLFxuICAgIDB4OUM2MDogMHg1RjU2LFxuICAgIDB4OUM2MTogMHg1RjU3LFxuICAgIDB4OUM2MjogMHg1RjU5LFxuICAgIDB4OUM2MzogMHg1RjYxLFxuICAgIDB4OUM2NDogMHg1RjZELFxuICAgIDB4OUM2NTogMHg1RjczLFxuICAgIDB4OUM2NjogMHg1Rjc3LFxuICAgIDB4OUM2NzogMHg1RjgzLFxuICAgIDB4OUM2ODogMHg1RjgyLFxuICAgIDB4OUM2OTogMHg1RjdGLFxuICAgIDB4OUM2QTogMHg1RjhBLFxuICAgIDB4OUM2QjogMHg1Rjg4LFxuICAgIDB4OUM2QzogMHg1RjkxLFxuICAgIDB4OUM2RDogMHg1Rjg3LFxuICAgIDB4OUM2RTogMHg1RjlFLFxuICAgIDB4OUM2RjogMHg1Rjk5LFxuICAgIDB4OUM3MDogMHg1Rjk4LFxuICAgIDB4OUM3MTogMHg1RkEwLFxuICAgIDB4OUM3MjogMHg1RkE4LFxuICAgIDB4OUM3MzogMHg1RkFELFxuICAgIDB4OUM3NDogMHg1RkJDLFxuICAgIDB4OUM3NTogMHg1RkQ2LFxuICAgIDB4OUM3NjogMHg1RkZCLFxuICAgIDB4OUM3NzogMHg1RkU0LFxuICAgIDB4OUM3ODogMHg1RkY4LFxuICAgIDB4OUM3OTogMHg1RkYxLFxuICAgIDB4OUM3QTogMHg1RkRELFxuICAgIDB4OUM3QjogMHg2MEIzLFxuICAgIDB4OUM3QzogMHg1RkZGLFxuICAgIDB4OUM3RDogMHg2MDIxLFxuICAgIDB4OUM3RTogMHg2MDYwLFxuICAgIDB4OUM4MDogMHg2MDE5LFxuICAgIDB4OUM4MTogMHg2MDEwLFxuICAgIDB4OUM4MjogMHg2MDI5LFxuICAgIDB4OUM4MzogMHg2MDBFLFxuICAgIDB4OUM4NDogMHg2MDMxLFxuICAgIDB4OUM4NTogMHg2MDFCLFxuICAgIDB4OUM4NjogMHg2MDE1LFxuICAgIDB4OUM4NzogMHg2MDJCLFxuICAgIDB4OUM4ODogMHg2MDI2LFxuICAgIDB4OUM4OTogMHg2MDBGLFxuICAgIDB4OUM4QTogMHg2MDNBLFxuICAgIDB4OUM4QjogMHg2MDVBLFxuICAgIDB4OUM4QzogMHg2MDQxLFxuICAgIDB4OUM4RDogMHg2MDZBLFxuICAgIDB4OUM4RTogMHg2MDc3LFxuICAgIDB4OUM4RjogMHg2MDVGLFxuICAgIDB4OUM5MDogMHg2MDRBLFxuICAgIDB4OUM5MTogMHg2MDQ2LFxuICAgIDB4OUM5MjogMHg2MDRELFxuICAgIDB4OUM5MzogMHg2MDYzLFxuICAgIDB4OUM5NDogMHg2MDQzLFxuICAgIDB4OUM5NTogMHg2MDY0LFxuICAgIDB4OUM5NjogMHg2MDQyLFxuICAgIDB4OUM5NzogMHg2MDZDLFxuICAgIDB4OUM5ODogMHg2MDZCLFxuICAgIDB4OUM5OTogMHg2MDU5LFxuICAgIDB4OUM5QTogMHg2MDgxLFxuICAgIDB4OUM5QjogMHg2MDhELFxuICAgIDB4OUM5QzogMHg2MEU3LFxuICAgIDB4OUM5RDogMHg2MDgzLFxuICAgIDB4OUM5RTogMHg2MDlBLFxuICAgIDB4OUM5RjogMHg2MDg0LFxuICAgIDB4OUNBMDogMHg2MDlCLFxuICAgIDB4OUNBMTogMHg2MDk2LFxuICAgIDB4OUNBMjogMHg2MDk3LFxuICAgIDB4OUNBMzogMHg2MDkyLFxuICAgIDB4OUNBNDogMHg2MEE3LFxuICAgIDB4OUNBNTogMHg2MDhCLFxuICAgIDB4OUNBNjogMHg2MEUxLFxuICAgIDB4OUNBNzogMHg2MEI4LFxuICAgIDB4OUNBODogMHg2MEUwLFxuICAgIDB4OUNBOTogMHg2MEQzLFxuICAgIDB4OUNBQTogMHg2MEI0LFxuICAgIDB4OUNBQjogMHg1RkYwLFxuICAgIDB4OUNBQzogMHg2MEJELFxuICAgIDB4OUNBRDogMHg2MEM2LFxuICAgIDB4OUNBRTogMHg2MEI1LFxuICAgIDB4OUNBRjogMHg2MEQ4LFxuICAgIDB4OUNCMDogMHg2MTRELFxuICAgIDB4OUNCMTogMHg2MTE1LFxuICAgIDB4OUNCMjogMHg2MTA2LFxuICAgIDB4OUNCMzogMHg2MEY2LFxuICAgIDB4OUNCNDogMHg2MEY3LFxuICAgIDB4OUNCNTogMHg2MTAwLFxuICAgIDB4OUNCNjogMHg2MEY0LFxuICAgIDB4OUNCNzogMHg2MEZBLFxuICAgIDB4OUNCODogMHg2MTAzLFxuICAgIDB4OUNCOTogMHg2MTIxLFxuICAgIDB4OUNCQTogMHg2MEZCLFxuICAgIDB4OUNCQjogMHg2MEYxLFxuICAgIDB4OUNCQzogMHg2MTBELFxuICAgIDB4OUNCRDogMHg2MTBFLFxuICAgIDB4OUNCRTogMHg2MTQ3LFxuICAgIDB4OUNCRjogMHg2MTNFLFxuICAgIDB4OUNDMDogMHg2MTI4LFxuICAgIDB4OUNDMTogMHg2MTI3LFxuICAgIDB4OUNDMjogMHg2MTRBLFxuICAgIDB4OUNDMzogMHg2MTNGLFxuICAgIDB4OUNDNDogMHg2MTNDLFxuICAgIDB4OUNDNTogMHg2MTJDLFxuICAgIDB4OUNDNjogMHg2MTM0LFxuICAgIDB4OUNDNzogMHg2MTNELFxuICAgIDB4OUNDODogMHg2MTQyLFxuICAgIDB4OUNDOTogMHg2MTQ0LFxuICAgIDB4OUNDQTogMHg2MTczLFxuICAgIDB4OUNDQjogMHg2MTc3LFxuICAgIDB4OUNDQzogMHg2MTU4LFxuICAgIDB4OUNDRDogMHg2MTU5LFxuICAgIDB4OUNDRTogMHg2MTVBLFxuICAgIDB4OUNDRjogMHg2MTZCLFxuICAgIDB4OUNEMDogMHg2MTc0LFxuICAgIDB4OUNEMTogMHg2MTZGLFxuICAgIDB4OUNEMjogMHg2MTY1LFxuICAgIDB4OUNEMzogMHg2MTcxLFxuICAgIDB4OUNENDogMHg2MTVGLFxuICAgIDB4OUNENTogMHg2MTVELFxuICAgIDB4OUNENjogMHg2MTUzLFxuICAgIDB4OUNENzogMHg2MTc1LFxuICAgIDB4OUNEODogMHg2MTk5LFxuICAgIDB4OUNEOTogMHg2MTk2LFxuICAgIDB4OUNEQTogMHg2MTg3LFxuICAgIDB4OUNEQjogMHg2MUFDLFxuICAgIDB4OUNEQzogMHg2MTk0LFxuICAgIDB4OUNERDogMHg2MTlBLFxuICAgIDB4OUNERTogMHg2MThBLFxuICAgIDB4OUNERjogMHg2MTkxLFxuICAgIDB4OUNFMDogMHg2MUFCLFxuICAgIDB4OUNFMTogMHg2MUFFLFxuICAgIDB4OUNFMjogMHg2MUNDLFxuICAgIDB4OUNFMzogMHg2MUNBLFxuICAgIDB4OUNFNDogMHg2MUM5LFxuICAgIDB4OUNFNTogMHg2MUY3LFxuICAgIDB4OUNFNjogMHg2MUM4LFxuICAgIDB4OUNFNzogMHg2MUMzLFxuICAgIDB4OUNFODogMHg2MUM2LFxuICAgIDB4OUNFOTogMHg2MUJBLFxuICAgIDB4OUNFQTogMHg2MUNCLFxuICAgIDB4OUNFQjogMHg3Rjc5LFxuICAgIDB4OUNFQzogMHg2MUNELFxuICAgIDB4OUNFRDogMHg2MUU2LFxuICAgIDB4OUNFRTogMHg2MUUzLFxuICAgIDB4OUNFRjogMHg2MUY2LFxuICAgIDB4OUNGMDogMHg2MUZBLFxuICAgIDB4OUNGMTogMHg2MUY0LFxuICAgIDB4OUNGMjogMHg2MUZGLFxuICAgIDB4OUNGMzogMHg2MUZELFxuICAgIDB4OUNGNDogMHg2MUZDLFxuICAgIDB4OUNGNTogMHg2MUZFLFxuICAgIDB4OUNGNjogMHg2MjAwLFxuICAgIDB4OUNGNzogMHg2MjA4LFxuICAgIDB4OUNGODogMHg2MjA5LFxuICAgIDB4OUNGOTogMHg2MjBELFxuICAgIDB4OUNGQTogMHg2MjBDLFxuICAgIDB4OUNGQjogMHg2MjE0LFxuICAgIDB4OUNGQzogMHg2MjFCLFxuICAgIDB4OUQ0MDogMHg2MjFFLFxuICAgIDB4OUQ0MTogMHg2MjIxLFxuICAgIDB4OUQ0MjogMHg2MjJBLFxuICAgIDB4OUQ0MzogMHg2MjJFLFxuICAgIDB4OUQ0NDogMHg2MjMwLFxuICAgIDB4OUQ0NTogMHg2MjMyLFxuICAgIDB4OUQ0NjogMHg2MjMzLFxuICAgIDB4OUQ0NzogMHg2MjQxLFxuICAgIDB4OUQ0ODogMHg2MjRFLFxuICAgIDB4OUQ0OTogMHg2MjVFLFxuICAgIDB4OUQ0QTogMHg2MjYzLFxuICAgIDB4OUQ0QjogMHg2MjVCLFxuICAgIDB4OUQ0QzogMHg2MjYwLFxuICAgIDB4OUQ0RDogMHg2MjY4LFxuICAgIDB4OUQ0RTogMHg2MjdDLFxuICAgIDB4OUQ0RjogMHg2MjgyLFxuICAgIDB4OUQ1MDogMHg2Mjg5LFxuICAgIDB4OUQ1MTogMHg2MjdFLFxuICAgIDB4OUQ1MjogMHg2MjkyLFxuICAgIDB4OUQ1MzogMHg2MjkzLFxuICAgIDB4OUQ1NDogMHg2Mjk2LFxuICAgIDB4OUQ1NTogMHg2MkQ0LFxuICAgIDB4OUQ1NjogMHg2MjgzLFxuICAgIDB4OUQ1NzogMHg2Mjk0LFxuICAgIDB4OUQ1ODogMHg2MkQ3LFxuICAgIDB4OUQ1OTogMHg2MkQxLFxuICAgIDB4OUQ1QTogMHg2MkJCLFxuICAgIDB4OUQ1QjogMHg2MkNGLFxuICAgIDB4OUQ1QzogMHg2MkZGLFxuICAgIDB4OUQ1RDogMHg2MkM2LFxuICAgIDB4OUQ1RTogMHg2NEQ0LFxuICAgIDB4OUQ1RjogMHg2MkM4LFxuICAgIDB4OUQ2MDogMHg2MkRDLFxuICAgIDB4OUQ2MTogMHg2MkNDLFxuICAgIDB4OUQ2MjogMHg2MkNBLFxuICAgIDB4OUQ2MzogMHg2MkMyLFxuICAgIDB4OUQ2NDogMHg2MkM3LFxuICAgIDB4OUQ2NTogMHg2MjlCLFxuICAgIDB4OUQ2NjogMHg2MkM5LFxuICAgIDB4OUQ2NzogMHg2MzBDLFxuICAgIDB4OUQ2ODogMHg2MkVFLFxuICAgIDB4OUQ2OTogMHg2MkYxLFxuICAgIDB4OUQ2QTogMHg2MzI3LFxuICAgIDB4OUQ2QjogMHg2MzAyLFxuICAgIDB4OUQ2QzogMHg2MzA4LFxuICAgIDB4OUQ2RDogMHg2MkVGLFxuICAgIDB4OUQ2RTogMHg2MkY1LFxuICAgIDB4OUQ2RjogMHg2MzUwLFxuICAgIDB4OUQ3MDogMHg2MzNFLFxuICAgIDB4OUQ3MTogMHg2MzRELFxuICAgIDB4OUQ3MjogMHg2NDFDLFxuICAgIDB4OUQ3MzogMHg2MzRGLFxuICAgIDB4OUQ3NDogMHg2Mzk2LFxuICAgIDB4OUQ3NTogMHg2MzhFLFxuICAgIDB4OUQ3NjogMHg2MzgwLFxuICAgIDB4OUQ3NzogMHg2M0FCLFxuICAgIDB4OUQ3ODogMHg2Mzc2LFxuICAgIDB4OUQ3OTogMHg2M0EzLFxuICAgIDB4OUQ3QTogMHg2MzhGLFxuICAgIDB4OUQ3QjogMHg2Mzg5LFxuICAgIDB4OUQ3QzogMHg2MzlGLFxuICAgIDB4OUQ3RDogMHg2M0I1LFxuICAgIDB4OUQ3RTogMHg2MzZCLFxuICAgIDB4OUQ4MDogMHg2MzY5LFxuICAgIDB4OUQ4MTogMHg2M0JFLFxuICAgIDB4OUQ4MjogMHg2M0U5LFxuICAgIDB4OUQ4MzogMHg2M0MwLFxuICAgIDB4OUQ4NDogMHg2M0M2LFxuICAgIDB4OUQ4NTogMHg2M0UzLFxuICAgIDB4OUQ4NjogMHg2M0M5LFxuICAgIDB4OUQ4NzogMHg2M0QyLFxuICAgIDB4OUQ4ODogMHg2M0Y2LFxuICAgIDB4OUQ4OTogMHg2M0M0LFxuICAgIDB4OUQ4QTogMHg2NDE2LFxuICAgIDB4OUQ4QjogMHg2NDM0LFxuICAgIDB4OUQ4QzogMHg2NDA2LFxuICAgIDB4OUQ4RDogMHg2NDEzLFxuICAgIDB4OUQ4RTogMHg2NDI2LFxuICAgIDB4OUQ4RjogMHg2NDM2LFxuICAgIDB4OUQ5MDogMHg2NTFELFxuICAgIDB4OUQ5MTogMHg2NDE3LFxuICAgIDB4OUQ5MjogMHg2NDI4LFxuICAgIDB4OUQ5MzogMHg2NDBGLFxuICAgIDB4OUQ5NDogMHg2NDY3LFxuICAgIDB4OUQ5NTogMHg2NDZGLFxuICAgIDB4OUQ5NjogMHg2NDc2LFxuICAgIDB4OUQ5NzogMHg2NDRFLFxuICAgIDB4OUQ5ODogMHg2NTJBLFxuICAgIDB4OUQ5OTogMHg2NDk1LFxuICAgIDB4OUQ5QTogMHg2NDkzLFxuICAgIDB4OUQ5QjogMHg2NEE1LFxuICAgIDB4OUQ5QzogMHg2NEE5LFxuICAgIDB4OUQ5RDogMHg2NDg4LFxuICAgIDB4OUQ5RTogMHg2NEJDLFxuICAgIDB4OUQ5RjogMHg2NERBLFxuICAgIDB4OURBMDogMHg2NEQyLFxuICAgIDB4OURBMTogMHg2NEM1LFxuICAgIDB4OURBMjogMHg2NEM3LFxuICAgIDB4OURBMzogMHg2NEJCLFxuICAgIDB4OURBNDogMHg2NEQ4LFxuICAgIDB4OURBNTogMHg2NEMyLFxuICAgIDB4OURBNjogMHg2NEYxLFxuICAgIDB4OURBNzogMHg2NEU3LFxuICAgIDB4OURBODogMHg4MjA5LFxuICAgIDB4OURBOTogMHg2NEUwLFxuICAgIDB4OURBQTogMHg2NEUxLFxuICAgIDB4OURBQjogMHg2MkFDLFxuICAgIDB4OURBQzogMHg2NEUzLFxuICAgIDB4OURBRDogMHg2NEVGLFxuICAgIDB4OURBRTogMHg2NTJDLFxuICAgIDB4OURBRjogMHg2NEY2LFxuICAgIDB4OURCMDogMHg2NEY0LFxuICAgIDB4OURCMTogMHg2NEYyLFxuICAgIDB4OURCMjogMHg2NEZBLFxuICAgIDB4OURCMzogMHg2NTAwLFxuICAgIDB4OURCNDogMHg2NEZELFxuICAgIDB4OURCNTogMHg2NTE4LFxuICAgIDB4OURCNjogMHg2NTFDLFxuICAgIDB4OURCNzogMHg2NTA1LFxuICAgIDB4OURCODogMHg2NTI0LFxuICAgIDB4OURCOTogMHg2NTIzLFxuICAgIDB4OURCQTogMHg2NTJCLFxuICAgIDB4OURCQjogMHg2NTM0LFxuICAgIDB4OURCQzogMHg2NTM1LFxuICAgIDB4OURCRDogMHg2NTM3LFxuICAgIDB4OURCRTogMHg2NTM2LFxuICAgIDB4OURCRjogMHg2NTM4LFxuICAgIDB4OURDMDogMHg3NTRCLFxuICAgIDB4OURDMTogMHg2NTQ4LFxuICAgIDB4OURDMjogMHg2NTU2LFxuICAgIDB4OURDMzogMHg2NTU1LFxuICAgIDB4OURDNDogMHg2NTRELFxuICAgIDB4OURDNTogMHg2NTU4LFxuICAgIDB4OURDNjogMHg2NTVFLFxuICAgIDB4OURDNzogMHg2NTVELFxuICAgIDB4OURDODogMHg2NTcyLFxuICAgIDB4OURDOTogMHg2NTc4LFxuICAgIDB4OURDQTogMHg2NTgyLFxuICAgIDB4OURDQjogMHg2NTgzLFxuICAgIDB4OURDQzogMHg4QjhBLFxuICAgIDB4OURDRDogMHg2NTlCLFxuICAgIDB4OURDRTogMHg2NTlGLFxuICAgIDB4OURDRjogMHg2NUFCLFxuICAgIDB4OUREMDogMHg2NUI3LFxuICAgIDB4OUREMTogMHg2NUMzLFxuICAgIDB4OUREMjogMHg2NUM2LFxuICAgIDB4OUREMzogMHg2NUMxLFxuICAgIDB4OURENDogMHg2NUM0LFxuICAgIDB4OURENTogMHg2NUNDLFxuICAgIDB4OURENjogMHg2NUQyLFxuICAgIDB4OURENzogMHg2NURCLFxuICAgIDB4OUREODogMHg2NUQ5LFxuICAgIDB4OUREOTogMHg2NUUwLFxuICAgIDB4OUREQTogMHg2NUUxLFxuICAgIDB4OUREQjogMHg2NUYxLFxuICAgIDB4OUREQzogMHg2NzcyLFxuICAgIDB4OURERDogMHg2NjBBLFxuICAgIDB4OURERTogMHg2NjAzLFxuICAgIDB4OURERjogMHg2NUZCLFxuICAgIDB4OURFMDogMHg2NzczLFxuICAgIDB4OURFMTogMHg2NjM1LFxuICAgIDB4OURFMjogMHg2NjM2LFxuICAgIDB4OURFMzogMHg2NjM0LFxuICAgIDB4OURFNDogMHg2NjFDLFxuICAgIDB4OURFNTogMHg2NjRGLFxuICAgIDB4OURFNjogMHg2NjQ0LFxuICAgIDB4OURFNzogMHg2NjQ5LFxuICAgIDB4OURFODogMHg2NjQxLFxuICAgIDB4OURFOTogMHg2NjVFLFxuICAgIDB4OURFQTogMHg2NjVELFxuICAgIDB4OURFQjogMHg2NjY0LFxuICAgIDB4OURFQzogMHg2NjY3LFxuICAgIDB4OURFRDogMHg2NjY4LFxuICAgIDB4OURFRTogMHg2NjVGLFxuICAgIDB4OURFRjogMHg2NjYyLFxuICAgIDB4OURGMDogMHg2NjcwLFxuICAgIDB4OURGMTogMHg2NjgzLFxuICAgIDB4OURGMjogMHg2Njg4LFxuICAgIDB4OURGMzogMHg2NjhFLFxuICAgIDB4OURGNDogMHg2Njg5LFxuICAgIDB4OURGNTogMHg2Njg0LFxuICAgIDB4OURGNjogMHg2Njk4LFxuICAgIDB4OURGNzogMHg2NjlELFxuICAgIDB4OURGODogMHg2NkMxLFxuICAgIDB4OURGOTogMHg2NkI5LFxuICAgIDB4OURGQTogMHg2NkM5LFxuICAgIDB4OURGQjogMHg2NkJFLFxuICAgIDB4OURGQzogMHg2NkJDLFxuICAgIDB4OUU0MDogMHg2NkM0LFxuICAgIDB4OUU0MTogMHg2NkI4LFxuICAgIDB4OUU0MjogMHg2NkQ2LFxuICAgIDB4OUU0MzogMHg2NkRBLFxuICAgIDB4OUU0NDogMHg2NkUwLFxuICAgIDB4OUU0NTogMHg2NjNGLFxuICAgIDB4OUU0NjogMHg2NkU2LFxuICAgIDB4OUU0NzogMHg2NkU5LFxuICAgIDB4OUU0ODogMHg2NkYwLFxuICAgIDB4OUU0OTogMHg2NkY1LFxuICAgIDB4OUU0QTogMHg2NkY3LFxuICAgIDB4OUU0QjogMHg2NzBGLFxuICAgIDB4OUU0QzogMHg2NzE2LFxuICAgIDB4OUU0RDogMHg2NzFFLFxuICAgIDB4OUU0RTogMHg2NzI2LFxuICAgIDB4OUU0RjogMHg2NzI3LFxuICAgIDB4OUU1MDogMHg5NzM4LFxuICAgIDB4OUU1MTogMHg2NzJFLFxuICAgIDB4OUU1MjogMHg2NzNGLFxuICAgIDB4OUU1MzogMHg2NzM2LFxuICAgIDB4OUU1NDogMHg2NzQxLFxuICAgIDB4OUU1NTogMHg2NzM4LFxuICAgIDB4OUU1NjogMHg2NzM3LFxuICAgIDB4OUU1NzogMHg2NzQ2LFxuICAgIDB4OUU1ODogMHg2NzVFLFxuICAgIDB4OUU1OTogMHg2NzYwLFxuICAgIDB4OUU1QTogMHg2NzU5LFxuICAgIDB4OUU1QjogMHg2NzYzLFxuICAgIDB4OUU1QzogMHg2NzY0LFxuICAgIDB4OUU1RDogMHg2Nzg5LFxuICAgIDB4OUU1RTogMHg2NzcwLFxuICAgIDB4OUU1RjogMHg2N0E5LFxuICAgIDB4OUU2MDogMHg2NzdDLFxuICAgIDB4OUU2MTogMHg2NzZBLFxuICAgIDB4OUU2MjogMHg2NzhDLFxuICAgIDB4OUU2MzogMHg2NzhCLFxuICAgIDB4OUU2NDogMHg2N0E2LFxuICAgIDB4OUU2NTogMHg2N0ExLFxuICAgIDB4OUU2NjogMHg2Nzg1LFxuICAgIDB4OUU2NzogMHg2N0I3LFxuICAgIDB4OUU2ODogMHg2N0VGLFxuICAgIDB4OUU2OTogMHg2N0I0LFxuICAgIDB4OUU2QTogMHg2N0VDLFxuICAgIDB4OUU2QjogMHg2N0IzLFxuICAgIDB4OUU2QzogMHg2N0U5LFxuICAgIDB4OUU2RDogMHg2N0I4LFxuICAgIDB4OUU2RTogMHg2N0U0LFxuICAgIDB4OUU2RjogMHg2N0RFLFxuICAgIDB4OUU3MDogMHg2N0RELFxuICAgIDB4OUU3MTogMHg2N0UyLFxuICAgIDB4OUU3MjogMHg2N0VFLFxuICAgIDB4OUU3MzogMHg2N0I5LFxuICAgIDB4OUU3NDogMHg2N0NFLFxuICAgIDB4OUU3NTogMHg2N0M2LFxuICAgIDB4OUU3NjogMHg2N0U3LFxuICAgIDB4OUU3NzogMHg2QTlDLFxuICAgIDB4OUU3ODogMHg2ODFFLFxuICAgIDB4OUU3OTogMHg2ODQ2LFxuICAgIDB4OUU3QTogMHg2ODI5LFxuICAgIDB4OUU3QjogMHg2ODQwLFxuICAgIDB4OUU3QzogMHg2ODRELFxuICAgIDB4OUU3RDogMHg2ODMyLFxuICAgIDB4OUU3RTogMHg2ODRFLFxuICAgIDB4OUU4MDogMHg2OEIzLFxuICAgIDB4OUU4MTogMHg2ODJCLFxuICAgIDB4OUU4MjogMHg2ODU5LFxuICAgIDB4OUU4MzogMHg2ODYzLFxuICAgIDB4OUU4NDogMHg2ODc3LFxuICAgIDB4OUU4NTogMHg2ODdGLFxuICAgIDB4OUU4NjogMHg2ODlGLFxuICAgIDB4OUU4NzogMHg2ODhGLFxuICAgIDB4OUU4ODogMHg2OEFELFxuICAgIDB4OUU4OTogMHg2ODk0LFxuICAgIDB4OUU4QTogMHg2ODlELFxuICAgIDB4OUU4QjogMHg2ODlCLFxuICAgIDB4OUU4QzogMHg2ODgzLFxuICAgIDB4OUU4RDogMHg2QUFFLFxuICAgIDB4OUU4RTogMHg2OEI5LFxuICAgIDB4OUU4RjogMHg2ODc0LFxuICAgIDB4OUU5MDogMHg2OEI1LFxuICAgIDB4OUU5MTogMHg2OEEwLFxuICAgIDB4OUU5MjogMHg2OEJBLFxuICAgIDB4OUU5MzogMHg2OTBGLFxuICAgIDB4OUU5NDogMHg2ODhELFxuICAgIDB4OUU5NTogMHg2ODdFLFxuICAgIDB4OUU5NjogMHg2OTAxLFxuICAgIDB4OUU5NzogMHg2OENBLFxuICAgIDB4OUU5ODogMHg2OTA4LFxuICAgIDB4OUU5OTogMHg2OEQ4LFxuICAgIDB4OUU5QTogMHg2OTIyLFxuICAgIDB4OUU5QjogMHg2OTI2LFxuICAgIDB4OUU5QzogMHg2OEUxLFxuICAgIDB4OUU5RDogMHg2OTBDLFxuICAgIDB4OUU5RTogMHg2OENELFxuICAgIDB4OUU5RjogMHg2OEQ0LFxuICAgIDB4OUVBMDogMHg2OEU3LFxuICAgIDB4OUVBMTogMHg2OEQ1LFxuICAgIDB4OUVBMjogMHg2OTM2LFxuICAgIDB4OUVBMzogMHg2OTEyLFxuICAgIDB4OUVBNDogMHg2OTA0LFxuICAgIDB4OUVBNTogMHg2OEQ3LFxuICAgIDB4OUVBNjogMHg2OEUzLFxuICAgIDB4OUVBNzogMHg2OTI1LFxuICAgIDB4OUVBODogMHg2OEY5LFxuICAgIDB4OUVBOTogMHg2OEUwLFxuICAgIDB4OUVBQTogMHg2OEVGLFxuICAgIDB4OUVBQjogMHg2OTI4LFxuICAgIDB4OUVBQzogMHg2OTJBLFxuICAgIDB4OUVBRDogMHg2OTFBLFxuICAgIDB4OUVBRTogMHg2OTIzLFxuICAgIDB4OUVBRjogMHg2OTIxLFxuICAgIDB4OUVCMDogMHg2OEM2LFxuICAgIDB4OUVCMTogMHg2OTc5LFxuICAgIDB4OUVCMjogMHg2OTc3LFxuICAgIDB4OUVCMzogMHg2OTVDLFxuICAgIDB4OUVCNDogMHg2OTc4LFxuICAgIDB4OUVCNTogMHg2OTZCLFxuICAgIDB4OUVCNjogMHg2OTU0LFxuICAgIDB4OUVCNzogMHg2OTdFLFxuICAgIDB4OUVCODogMHg2OTZFLFxuICAgIDB4OUVCOTogMHg2OTM5LFxuICAgIDB4OUVCQTogMHg2OTc0LFxuICAgIDB4OUVCQjogMHg2OTNELFxuICAgIDB4OUVCQzogMHg2OTU5LFxuICAgIDB4OUVCRDogMHg2OTMwLFxuICAgIDB4OUVCRTogMHg2OTYxLFxuICAgIDB4OUVCRjogMHg2OTVFLFxuICAgIDB4OUVDMDogMHg2OTVELFxuICAgIDB4OUVDMTogMHg2OTgxLFxuICAgIDB4OUVDMjogMHg2OTZBLFxuICAgIDB4OUVDMzogMHg2OUIyLFxuICAgIDB4OUVDNDogMHg2OUFFLFxuICAgIDB4OUVDNTogMHg2OUQwLFxuICAgIDB4OUVDNjogMHg2OUJGLFxuICAgIDB4OUVDNzogMHg2OUMxLFxuICAgIDB4OUVDODogMHg2OUQzLFxuICAgIDB4OUVDOTogMHg2OUJFLFxuICAgIDB4OUVDQTogMHg2OUNFLFxuICAgIDB4OUVDQjogMHg1QkU4LFxuICAgIDB4OUVDQzogMHg2OUNBLFxuICAgIDB4OUVDRDogMHg2OURELFxuICAgIDB4OUVDRTogMHg2OUJCLFxuICAgIDB4OUVDRjogMHg2OUMzLFxuICAgIDB4OUVEMDogMHg2OUE3LFxuICAgIDB4OUVEMTogMHg2QTJFLFxuICAgIDB4OUVEMjogMHg2OTkxLFxuICAgIDB4OUVEMzogMHg2OUEwLFxuICAgIDB4OUVENDogMHg2OTlDLFxuICAgIDB4OUVENTogMHg2OTk1LFxuICAgIDB4OUVENjogMHg2OUI0LFxuICAgIDB4OUVENzogMHg2OURFLFxuICAgIDB4OUVEODogMHg2OUU4LFxuICAgIDB4OUVEOTogMHg2QTAyLFxuICAgIDB4OUVEQTogMHg2QTFCLFxuICAgIDB4OUVEQjogMHg2OUZGLFxuICAgIDB4OUVEQzogMHg2QjBBLFxuICAgIDB4OUVERDogMHg2OUY5LFxuICAgIDB4OUVERTogMHg2OUYyLFxuICAgIDB4OUVERjogMHg2OUU3LFxuICAgIDB4OUVFMDogMHg2QTA1LFxuICAgIDB4OUVFMTogMHg2OUIxLFxuICAgIDB4OUVFMjogMHg2QTFFLFxuICAgIDB4OUVFMzogMHg2OUVELFxuICAgIDB4OUVFNDogMHg2QTE0LFxuICAgIDB4OUVFNTogMHg2OUVCLFxuICAgIDB4OUVFNjogMHg2QTBBLFxuICAgIDB4OUVFNzogMHg2QTEyLFxuICAgIDB4OUVFODogMHg2QUMxLFxuICAgIDB4OUVFOTogMHg2QTIzLFxuICAgIDB4OUVFQTogMHg2QTEzLFxuICAgIDB4OUVFQjogMHg2QTQ0LFxuICAgIDB4OUVFQzogMHg2QTBDLFxuICAgIDB4OUVFRDogMHg2QTcyLFxuICAgIDB4OUVFRTogMHg2QTM2LFxuICAgIDB4OUVFRjogMHg2QTc4LFxuICAgIDB4OUVGMDogMHg2QTQ3LFxuICAgIDB4OUVGMTogMHg2QTYyLFxuICAgIDB4OUVGMjogMHg2QTU5LFxuICAgIDB4OUVGMzogMHg2QTY2LFxuICAgIDB4OUVGNDogMHg2QTQ4LFxuICAgIDB4OUVGNTogMHg2QTM4LFxuICAgIDB4OUVGNjogMHg2QTIyLFxuICAgIDB4OUVGNzogMHg2QTkwLFxuICAgIDB4OUVGODogMHg2QThELFxuICAgIDB4OUVGOTogMHg2QUEwLFxuICAgIDB4OUVGQTogMHg2QTg0LFxuICAgIDB4OUVGQjogMHg2QUEyLFxuICAgIDB4OUVGQzogMHg2QUEzLFxuICAgIDB4OUY0MDogMHg2QTk3LFxuICAgIDB4OUY0MTogMHg4NjE3LFxuICAgIDB4OUY0MjogMHg2QUJCLFxuICAgIDB4OUY0MzogMHg2QUMzLFxuICAgIDB4OUY0NDogMHg2QUMyLFxuICAgIDB4OUY0NTogMHg2QUI4LFxuICAgIDB4OUY0NjogMHg2QUIzLFxuICAgIDB4OUY0NzogMHg2QUFDLFxuICAgIDB4OUY0ODogMHg2QURFLFxuICAgIDB4OUY0OTogMHg2QUQxLFxuICAgIDB4OUY0QTogMHg2QURGLFxuICAgIDB4OUY0QjogMHg2QUFBLFxuICAgIDB4OUY0QzogMHg2QURBLFxuICAgIDB4OUY0RDogMHg2QUVBLFxuICAgIDB4OUY0RTogMHg2QUZCLFxuICAgIDB4OUY0RjogMHg2QjA1LFxuICAgIDB4OUY1MDogMHg4NjE2LFxuICAgIDB4OUY1MTogMHg2QUZBLFxuICAgIDB4OUY1MjogMHg2QjEyLFxuICAgIDB4OUY1MzogMHg2QjE2LFxuICAgIDB4OUY1NDogMHg5QjMxLFxuICAgIDB4OUY1NTogMHg2QjFGLFxuICAgIDB4OUY1NjogMHg2QjM4LFxuICAgIDB4OUY1NzogMHg2QjM3LFxuICAgIDB4OUY1ODogMHg3NkRDLFxuICAgIDB4OUY1OTogMHg2QjM5LFxuICAgIDB4OUY1QTogMHg5OEVFLFxuICAgIDB4OUY1QjogMHg2QjQ3LFxuICAgIDB4OUY1QzogMHg2QjQzLFxuICAgIDB4OUY1RDogMHg2QjQ5LFxuICAgIDB4OUY1RTogMHg2QjUwLFxuICAgIDB4OUY1RjogMHg2QjU5LFxuICAgIDB4OUY2MDogMHg2QjU0LFxuICAgIDB4OUY2MTogMHg2QjVCLFxuICAgIDB4OUY2MjogMHg2QjVGLFxuICAgIDB4OUY2MzogMHg2QjYxLFxuICAgIDB4OUY2NDogMHg2Qjc4LFxuICAgIDB4OUY2NTogMHg2Qjc5LFxuICAgIDB4OUY2NjogMHg2QjdGLFxuICAgIDB4OUY2NzogMHg2QjgwLFxuICAgIDB4OUY2ODogMHg2Qjg0LFxuICAgIDB4OUY2OTogMHg2QjgzLFxuICAgIDB4OUY2QTogMHg2QjhELFxuICAgIDB4OUY2QjogMHg2Qjk4LFxuICAgIDB4OUY2QzogMHg2Qjk1LFxuICAgIDB4OUY2RDogMHg2QjlFLFxuICAgIDB4OUY2RTogMHg2QkE0LFxuICAgIDB4OUY2RjogMHg2QkFBLFxuICAgIDB4OUY3MDogMHg2QkFCLFxuICAgIDB4OUY3MTogMHg2QkFGLFxuICAgIDB4OUY3MjogMHg2QkIyLFxuICAgIDB4OUY3MzogMHg2QkIxLFxuICAgIDB4OUY3NDogMHg2QkIzLFxuICAgIDB4OUY3NTogMHg2QkI3LFxuICAgIDB4OUY3NjogMHg2QkJDLFxuICAgIDB4OUY3NzogMHg2QkM2LFxuICAgIDB4OUY3ODogMHg2QkNCLFxuICAgIDB4OUY3OTogMHg2QkQzLFxuICAgIDB4OUY3QTogMHg2QkRGLFxuICAgIDB4OUY3QjogMHg2QkVDLFxuICAgIDB4OUY3QzogMHg2QkVCLFxuICAgIDB4OUY3RDogMHg2QkYzLFxuICAgIDB4OUY3RTogMHg2QkVGLFxuICAgIDB4OUY4MDogMHg5RUJFLFxuICAgIDB4OUY4MTogMHg2QzA4LFxuICAgIDB4OUY4MjogMHg2QzEzLFxuICAgIDB4OUY4MzogMHg2QzE0LFxuICAgIDB4OUY4NDogMHg2QzFCLFxuICAgIDB4OUY4NTogMHg2QzI0LFxuICAgIDB4OUY4NjogMHg2QzIzLFxuICAgIDB4OUY4NzogMHg2QzVFLFxuICAgIDB4OUY4ODogMHg2QzU1LFxuICAgIDB4OUY4OTogMHg2QzYyLFxuICAgIDB4OUY4QTogMHg2QzZBLFxuICAgIDB4OUY4QjogMHg2QzgyLFxuICAgIDB4OUY4QzogMHg2QzhELFxuICAgIDB4OUY4RDogMHg2QzlBLFxuICAgIDB4OUY4RTogMHg2QzgxLFxuICAgIDB4OUY4RjogMHg2QzlCLFxuICAgIDB4OUY5MDogMHg2QzdFLFxuICAgIDB4OUY5MTogMHg2QzY4LFxuICAgIDB4OUY5MjogMHg2QzczLFxuICAgIDB4OUY5MzogMHg2QzkyLFxuICAgIDB4OUY5NDogMHg2QzkwLFxuICAgIDB4OUY5NTogMHg2Q0M0LFxuICAgIDB4OUY5NjogMHg2Q0YxLFxuICAgIDB4OUY5NzogMHg2Q0QzLFxuICAgIDB4OUY5ODogMHg2Q0JELFxuICAgIDB4OUY5OTogMHg2Q0Q3LFxuICAgIDB4OUY5QTogMHg2Q0M1LFxuICAgIDB4OUY5QjogMHg2Q0RELFxuICAgIDB4OUY5QzogMHg2Q0FFLFxuICAgIDB4OUY5RDogMHg2Q0IxLFxuICAgIDB4OUY5RTogMHg2Q0JFLFxuICAgIDB4OUY5RjogMHg2Q0JBLFxuICAgIDB4OUZBMDogMHg2Q0RCLFxuICAgIDB4OUZBMTogMHg2Q0VGLFxuICAgIDB4OUZBMjogMHg2Q0Q5LFxuICAgIDB4OUZBMzogMHg2Q0VBLFxuICAgIDB4OUZBNDogMHg2RDFGLFxuICAgIDB4OUZBNTogMHg4ODRELFxuICAgIDB4OUZBNjogMHg2RDM2LFxuICAgIDB4OUZBNzogMHg2RDJCLFxuICAgIDB4OUZBODogMHg2RDNELFxuICAgIDB4OUZBOTogMHg2RDM4LFxuICAgIDB4OUZBQTogMHg2RDE5LFxuICAgIDB4OUZBQjogMHg2RDM1LFxuICAgIDB4OUZBQzogMHg2RDMzLFxuICAgIDB4OUZBRDogMHg2RDEyLFxuICAgIDB4OUZBRTogMHg2RDBDLFxuICAgIDB4OUZBRjogMHg2RDYzLFxuICAgIDB4OUZCMDogMHg2RDkzLFxuICAgIDB4OUZCMTogMHg2RDY0LFxuICAgIDB4OUZCMjogMHg2RDVBLFxuICAgIDB4OUZCMzogMHg2RDc5LFxuICAgIDB4OUZCNDogMHg2RDU5LFxuICAgIDB4OUZCNTogMHg2RDhFLFxuICAgIDB4OUZCNjogMHg2RDk1LFxuICAgIDB4OUZCNzogMHg2RkU0LFxuICAgIDB4OUZCODogMHg2RDg1LFxuICAgIDB4OUZCOTogMHg2REY5LFxuICAgIDB4OUZCQTogMHg2RTE1LFxuICAgIDB4OUZCQjogMHg2RTBBLFxuICAgIDB4OUZCQzogMHg2REI1LFxuICAgIDB4OUZCRDogMHg2REM3LFxuICAgIDB4OUZCRTogMHg2REU2LFxuICAgIDB4OUZCRjogMHg2REI4LFxuICAgIDB4OUZDMDogMHg2REM2LFxuICAgIDB4OUZDMTogMHg2REVDLFxuICAgIDB4OUZDMjogMHg2RERFLFxuICAgIDB4OUZDMzogMHg2RENDLFxuICAgIDB4OUZDNDogMHg2REU4LFxuICAgIDB4OUZDNTogMHg2REQyLFxuICAgIDB4OUZDNjogMHg2REM1LFxuICAgIDB4OUZDNzogMHg2REZBLFxuICAgIDB4OUZDODogMHg2REQ5LFxuICAgIDB4OUZDOTogMHg2REU0LFxuICAgIDB4OUZDQTogMHg2REQ1LFxuICAgIDB4OUZDQjogMHg2REVBLFxuICAgIDB4OUZDQzogMHg2REVFLFxuICAgIDB4OUZDRDogMHg2RTJELFxuICAgIDB4OUZDRTogMHg2RTZFLFxuICAgIDB4OUZDRjogMHg2RTJFLFxuICAgIDB4OUZEMDogMHg2RTE5LFxuICAgIDB4OUZEMTogMHg2RTcyLFxuICAgIDB4OUZEMjogMHg2RTVGLFxuICAgIDB4OUZEMzogMHg2RTNFLFxuICAgIDB4OUZENDogMHg2RTIzLFxuICAgIDB4OUZENTogMHg2RTZCLFxuICAgIDB4OUZENjogMHg2RTJCLFxuICAgIDB4OUZENzogMHg2RTc2LFxuICAgIDB4OUZEODogMHg2RTRELFxuICAgIDB4OUZEOTogMHg2RTFGLFxuICAgIDB4OUZEQTogMHg2RTQzLFxuICAgIDB4OUZEQjogMHg2RTNBLFxuICAgIDB4OUZEQzogMHg2RTRFLFxuICAgIDB4OUZERDogMHg2RTI0LFxuICAgIDB4OUZERTogMHg2RUZGLFxuICAgIDB4OUZERjogMHg2RTFELFxuICAgIDB4OUZFMDogMHg2RTM4LFxuICAgIDB4OUZFMTogMHg2RTgyLFxuICAgIDB4OUZFMjogMHg2RUFBLFxuICAgIDB4OUZFMzogMHg2RTk4LFxuICAgIDB4OUZFNDogMHg2RUM5LFxuICAgIDB4OUZFNTogMHg2RUI3LFxuICAgIDB4OUZFNjogMHg2RUQzLFxuICAgIDB4OUZFNzogMHg2RUJELFxuICAgIDB4OUZFODogMHg2RUFGLFxuICAgIDB4OUZFOTogMHg2RUM0LFxuICAgIDB4OUZFQTogMHg2RUIyLFxuICAgIDB4OUZFQjogMHg2RUQ0LFxuICAgIDB4OUZFQzogMHg2RUQ1LFxuICAgIDB4OUZFRDogMHg2RThGLFxuICAgIDB4OUZFRTogMHg2RUE1LFxuICAgIDB4OUZFRjogMHg2RUMyLFxuICAgIDB4OUZGMDogMHg2RTlGLFxuICAgIDB4OUZGMTogMHg2RjQxLFxuICAgIDB4OUZGMjogMHg2RjExLFxuICAgIDB4OUZGMzogMHg3MDRDLFxuICAgIDB4OUZGNDogMHg2RUVDLFxuICAgIDB4OUZGNTogMHg2RUY4LFxuICAgIDB4OUZGNjogMHg2RUZFLFxuICAgIDB4OUZGNzogMHg2RjNGLFxuICAgIDB4OUZGODogMHg2RUYyLFxuICAgIDB4OUZGOTogMHg2RjMxLFxuICAgIDB4OUZGQTogMHg2RUVGLFxuICAgIDB4OUZGQjogMHg2RjMyLFxuICAgIDB4OUZGQzogMHg2RUNDLFxuICAgIDB4QTE6IDB4RkY2MSxcbiAgICAweEEyOiAweEZGNjIsXG4gICAgMHhBMzogMHhGRjYzLFxuICAgIDB4QTQ6IDB4RkY2NCxcbiAgICAweEE1OiAweEZGNjUsXG4gICAgMHhBNjogMHhGRjY2LFxuICAgIDB4QTc6IDB4RkY2NyxcbiAgICAweEE4OiAweEZGNjgsXG4gICAgMHhBOTogMHhGRjY5LFxuICAgIDB4QUE6IDB4RkY2QSxcbiAgICAweEFCOiAweEZGNkIsXG4gICAgMHhBQzogMHhGRjZDLFxuICAgIDB4QUQ6IDB4RkY2RCxcbiAgICAweEFFOiAweEZGNkUsXG4gICAgMHhBRjogMHhGRjZGLFxuICAgIDB4QjA6IDB4RkY3MCxcbiAgICAweEIxOiAweEZGNzEsXG4gICAgMHhCMjogMHhGRjcyLFxuICAgIDB4QjM6IDB4RkY3MyxcbiAgICAweEI0OiAweEZGNzQsXG4gICAgMHhCNTogMHhGRjc1LFxuICAgIDB4QjY6IDB4RkY3NixcbiAgICAweEI3OiAweEZGNzcsXG4gICAgMHhCODogMHhGRjc4LFxuICAgIDB4Qjk6IDB4RkY3OSxcbiAgICAweEJBOiAweEZGN0EsXG4gICAgMHhCQjogMHhGRjdCLFxuICAgIDB4QkM6IDB4RkY3QyxcbiAgICAweEJEOiAweEZGN0QsXG4gICAgMHhCRTogMHhGRjdFLFxuICAgIDB4QkY6IDB4RkY3RixcbiAgICAweEMwOiAweEZGODAsXG4gICAgMHhDMTogMHhGRjgxLFxuICAgIDB4QzI6IDB4RkY4MixcbiAgICAweEMzOiAweEZGODMsXG4gICAgMHhDNDogMHhGRjg0LFxuICAgIDB4QzU6IDB4RkY4NSxcbiAgICAweEM2OiAweEZGODYsXG4gICAgMHhDNzogMHhGRjg3LFxuICAgIDB4Qzg6IDB4RkY4OCxcbiAgICAweEM5OiAweEZGODksXG4gICAgMHhDQTogMHhGRjhBLFxuICAgIDB4Q0I6IDB4RkY4QixcbiAgICAweENDOiAweEZGOEMsXG4gICAgMHhDRDogMHhGRjhELFxuICAgIDB4Q0U6IDB4RkY4RSxcbiAgICAweENGOiAweEZGOEYsXG4gICAgMHhEMDogMHhGRjkwLFxuICAgIDB4RDE6IDB4RkY5MSxcbiAgICAweEQyOiAweEZGOTIsXG4gICAgMHhEMzogMHhGRjkzLFxuICAgIDB4RDQ6IDB4RkY5NCxcbiAgICAweEQ1OiAweEZGOTUsXG4gICAgMHhENjogMHhGRjk2LFxuICAgIDB4RDc6IDB4RkY5NyxcbiAgICAweEQ4OiAweEZGOTgsXG4gICAgMHhEOTogMHhGRjk5LFxuICAgIDB4REE6IDB4RkY5QSxcbiAgICAweERCOiAweEZGOUIsXG4gICAgMHhEQzogMHhGRjlDLFxuICAgIDB4REQ6IDB4RkY5RCxcbiAgICAweERFOiAweEZGOUUsXG4gICAgMHhERjogMHhGRjlGLFxuICAgIDB4RTA0MDogMHg2RjNFLFxuICAgIDB4RTA0MTogMHg2RjEzLFxuICAgIDB4RTA0MjogMHg2RUY3LFxuICAgIDB4RTA0MzogMHg2Rjg2LFxuICAgIDB4RTA0NDogMHg2RjdBLFxuICAgIDB4RTA0NTogMHg2Rjc4LFxuICAgIDB4RTA0NjogMHg2RjgxLFxuICAgIDB4RTA0NzogMHg2RjgwLFxuICAgIDB4RTA0ODogMHg2RjZGLFxuICAgIDB4RTA0OTogMHg2RjVCLFxuICAgIDB4RTA0QTogMHg2RkYzLFxuICAgIDB4RTA0QjogMHg2RjZELFxuICAgIDB4RTA0QzogMHg2RjgyLFxuICAgIDB4RTA0RDogMHg2RjdDLFxuICAgIDB4RTA0RTogMHg2RjU4LFxuICAgIDB4RTA0RjogMHg2RjhFLFxuICAgIDB4RTA1MDogMHg2RjkxLFxuICAgIDB4RTA1MTogMHg2RkMyLFxuICAgIDB4RTA1MjogMHg2RjY2LFxuICAgIDB4RTA1MzogMHg2RkIzLFxuICAgIDB4RTA1NDogMHg2RkEzLFxuICAgIDB4RTA1NTogMHg2RkExLFxuICAgIDB4RTA1NjogMHg2RkE0LFxuICAgIDB4RTA1NzogMHg2RkI5LFxuICAgIDB4RTA1ODogMHg2RkM2LFxuICAgIDB4RTA1OTogMHg2RkFBLFxuICAgIDB4RTA1QTogMHg2RkRGLFxuICAgIDB4RTA1QjogMHg2RkQ1LFxuICAgIDB4RTA1QzogMHg2RkVDLFxuICAgIDB4RTA1RDogMHg2RkQ0LFxuICAgIDB4RTA1RTogMHg2RkQ4LFxuICAgIDB4RTA1RjogMHg2RkYxLFxuICAgIDB4RTA2MDogMHg2RkVFLFxuICAgIDB4RTA2MTogMHg2RkRCLFxuICAgIDB4RTA2MjogMHg3MDA5LFxuICAgIDB4RTA2MzogMHg3MDBCLFxuICAgIDB4RTA2NDogMHg2RkZBLFxuICAgIDB4RTA2NTogMHg3MDExLFxuICAgIDB4RTA2NjogMHg3MDAxLFxuICAgIDB4RTA2NzogMHg3MDBGLFxuICAgIDB4RTA2ODogMHg2RkZFLFxuICAgIDB4RTA2OTogMHg3MDFCLFxuICAgIDB4RTA2QTogMHg3MDFBLFxuICAgIDB4RTA2QjogMHg2Rjc0LFxuICAgIDB4RTA2QzogMHg3MDFELFxuICAgIDB4RTA2RDogMHg3MDE4LFxuICAgIDB4RTA2RTogMHg3MDFGLFxuICAgIDB4RTA2RjogMHg3MDMwLFxuICAgIDB4RTA3MDogMHg3MDNFLFxuICAgIDB4RTA3MTogMHg3MDMyLFxuICAgIDB4RTA3MjogMHg3MDUxLFxuICAgIDB4RTA3MzogMHg3MDYzLFxuICAgIDB4RTA3NDogMHg3MDk5LFxuICAgIDB4RTA3NTogMHg3MDkyLFxuICAgIDB4RTA3NjogMHg3MEFGLFxuICAgIDB4RTA3NzogMHg3MEYxLFxuICAgIDB4RTA3ODogMHg3MEFDLFxuICAgIDB4RTA3OTogMHg3MEI4LFxuICAgIDB4RTA3QTogMHg3MEIzLFxuICAgIDB4RTA3QjogMHg3MEFFLFxuICAgIDB4RTA3QzogMHg3MERGLFxuICAgIDB4RTA3RDogMHg3MENCLFxuICAgIDB4RTA3RTogMHg3MERELFxuICAgIDB4RTA4MDogMHg3MEQ5LFxuICAgIDB4RTA4MTogMHg3MTA5LFxuICAgIDB4RTA4MjogMHg3MEZELFxuICAgIDB4RTA4MzogMHg3MTFDLFxuICAgIDB4RTA4NDogMHg3MTE5LFxuICAgIDB4RTA4NTogMHg3MTY1LFxuICAgIDB4RTA4NjogMHg3MTU1LFxuICAgIDB4RTA4NzogMHg3MTg4LFxuICAgIDB4RTA4ODogMHg3MTY2LFxuICAgIDB4RTA4OTogMHg3MTYyLFxuICAgIDB4RTA4QTogMHg3MTRDLFxuICAgIDB4RTA4QjogMHg3MTU2LFxuICAgIDB4RTA4QzogMHg3MTZDLFxuICAgIDB4RTA4RDogMHg3MThGLFxuICAgIDB4RTA4RTogMHg3MUZCLFxuICAgIDB4RTA4RjogMHg3MTg0LFxuICAgIDB4RTA5MDogMHg3MTk1LFxuICAgIDB4RTA5MTogMHg3MUE4LFxuICAgIDB4RTA5MjogMHg3MUFDLFxuICAgIDB4RTA5MzogMHg3MUQ3LFxuICAgIDB4RTA5NDogMHg3MUI5LFxuICAgIDB4RTA5NTogMHg3MUJFLFxuICAgIDB4RTA5NjogMHg3MUQyLFxuICAgIDB4RTA5NzogMHg3MUM5LFxuICAgIDB4RTA5ODogMHg3MUQ0LFxuICAgIDB4RTA5OTogMHg3MUNFLFxuICAgIDB4RTA5QTogMHg3MUUwLFxuICAgIDB4RTA5QjogMHg3MUVDLFxuICAgIDB4RTA5QzogMHg3MUU3LFxuICAgIDB4RTA5RDogMHg3MUY1LFxuICAgIDB4RTA5RTogMHg3MUZDLFxuICAgIDB4RTA5RjogMHg3MUY5LFxuICAgIDB4RTBBMDogMHg3MUZGLFxuICAgIDB4RTBBMTogMHg3MjBELFxuICAgIDB4RTBBMjogMHg3MjEwLFxuICAgIDB4RTBBMzogMHg3MjFCLFxuICAgIDB4RTBBNDogMHg3MjI4LFxuICAgIDB4RTBBNTogMHg3MjJELFxuICAgIDB4RTBBNjogMHg3MjJDLFxuICAgIDB4RTBBNzogMHg3MjMwLFxuICAgIDB4RTBBODogMHg3MjMyLFxuICAgIDB4RTBBOTogMHg3MjNCLFxuICAgIDB4RTBBQTogMHg3MjNDLFxuICAgIDB4RTBBQjogMHg3MjNGLFxuICAgIDB4RTBBQzogMHg3MjQwLFxuICAgIDB4RTBBRDogMHg3MjQ2LFxuICAgIDB4RTBBRTogMHg3MjRCLFxuICAgIDB4RTBBRjogMHg3MjU4LFxuICAgIDB4RTBCMDogMHg3Mjc0LFxuICAgIDB4RTBCMTogMHg3MjdFLFxuICAgIDB4RTBCMjogMHg3MjgyLFxuICAgIDB4RTBCMzogMHg3MjgxLFxuICAgIDB4RTBCNDogMHg3Mjg3LFxuICAgIDB4RTBCNTogMHg3MjkyLFxuICAgIDB4RTBCNjogMHg3Mjk2LFxuICAgIDB4RTBCNzogMHg3MkEyLFxuICAgIDB4RTBCODogMHg3MkE3LFxuICAgIDB4RTBCOTogMHg3MkI5LFxuICAgIDB4RTBCQTogMHg3MkIyLFxuICAgIDB4RTBCQjogMHg3MkMzLFxuICAgIDB4RTBCQzogMHg3MkM2LFxuICAgIDB4RTBCRDogMHg3MkM0LFxuICAgIDB4RTBCRTogMHg3MkNFLFxuICAgIDB4RTBCRjogMHg3MkQyLFxuICAgIDB4RTBDMDogMHg3MkUyLFxuICAgIDB4RTBDMTogMHg3MkUwLFxuICAgIDB4RTBDMjogMHg3MkUxLFxuICAgIDB4RTBDMzogMHg3MkY5LFxuICAgIDB4RTBDNDogMHg3MkY3LFxuICAgIDB4RTBDNTogMHg1MDBGLFxuICAgIDB4RTBDNjogMHg3MzE3LFxuICAgIDB4RTBDNzogMHg3MzBBLFxuICAgIDB4RTBDODogMHg3MzFDLFxuICAgIDB4RTBDOTogMHg3MzE2LFxuICAgIDB4RTBDQTogMHg3MzFELFxuICAgIDB4RTBDQjogMHg3MzM0LFxuICAgIDB4RTBDQzogMHg3MzJGLFxuICAgIDB4RTBDRDogMHg3MzI5LFxuICAgIDB4RTBDRTogMHg3MzI1LFxuICAgIDB4RTBDRjogMHg3MzNFLFxuICAgIDB4RTBEMDogMHg3MzRFLFxuICAgIDB4RTBEMTogMHg3MzRGLFxuICAgIDB4RTBEMjogMHg5RUQ4LFxuICAgIDB4RTBEMzogMHg3MzU3LFxuICAgIDB4RTBENDogMHg3MzZBLFxuICAgIDB4RTBENTogMHg3MzY4LFxuICAgIDB4RTBENjogMHg3MzcwLFxuICAgIDB4RTBENzogMHg3Mzc4LFxuICAgIDB4RTBEODogMHg3Mzc1LFxuICAgIDB4RTBEOTogMHg3MzdCLFxuICAgIDB4RTBEQTogMHg3MzdBLFxuICAgIDB4RTBEQjogMHg3M0M4LFxuICAgIDB4RTBEQzogMHg3M0IzLFxuICAgIDB4RTBERDogMHg3M0NFLFxuICAgIDB4RTBERTogMHg3M0JCLFxuICAgIDB4RTBERjogMHg3M0MwLFxuICAgIDB4RTBFMDogMHg3M0U1LFxuICAgIDB4RTBFMTogMHg3M0VFLFxuICAgIDB4RTBFMjogMHg3M0RFLFxuICAgIDB4RTBFMzogMHg3NEEyLFxuICAgIDB4RTBFNDogMHg3NDA1LFxuICAgIDB4RTBFNTogMHg3NDZGLFxuICAgIDB4RTBFNjogMHg3NDI1LFxuICAgIDB4RTBFNzogMHg3M0Y4LFxuICAgIDB4RTBFODogMHg3NDMyLFxuICAgIDB4RTBFOTogMHg3NDNBLFxuICAgIDB4RTBFQTogMHg3NDU1LFxuICAgIDB4RTBFQjogMHg3NDNGLFxuICAgIDB4RTBFQzogMHg3NDVGLFxuICAgIDB4RTBFRDogMHg3NDU5LFxuICAgIDB4RTBFRTogMHg3NDQxLFxuICAgIDB4RTBFRjogMHg3NDVDLFxuICAgIDB4RTBGMDogMHg3NDY5LFxuICAgIDB4RTBGMTogMHg3NDcwLFxuICAgIDB4RTBGMjogMHg3NDYzLFxuICAgIDB4RTBGMzogMHg3NDZBLFxuICAgIDB4RTBGNDogMHg3NDc2LFxuICAgIDB4RTBGNTogMHg3NDdFLFxuICAgIDB4RTBGNjogMHg3NDhCLFxuICAgIDB4RTBGNzogMHg3NDlFLFxuICAgIDB4RTBGODogMHg3NEE3LFxuICAgIDB4RTBGOTogMHg3NENBLFxuICAgIDB4RTBGQTogMHg3NENGLFxuICAgIDB4RTBGQjogMHg3NEQ0LFxuICAgIDB4RTBGQzogMHg3M0YxLFxuICAgIDB4RTE0MDogMHg3NEUwLFxuICAgIDB4RTE0MTogMHg3NEUzLFxuICAgIDB4RTE0MjogMHg3NEU3LFxuICAgIDB4RTE0MzogMHg3NEU5LFxuICAgIDB4RTE0NDogMHg3NEVFLFxuICAgIDB4RTE0NTogMHg3NEYyLFxuICAgIDB4RTE0NjogMHg3NEYwLFxuICAgIDB4RTE0NzogMHg3NEYxLFxuICAgIDB4RTE0ODogMHg3NEY4LFxuICAgIDB4RTE0OTogMHg3NEY3LFxuICAgIDB4RTE0QTogMHg3NTA0LFxuICAgIDB4RTE0QjogMHg3NTAzLFxuICAgIDB4RTE0QzogMHg3NTA1LFxuICAgIDB4RTE0RDogMHg3NTBDLFxuICAgIDB4RTE0RTogMHg3NTBFLFxuICAgIDB4RTE0RjogMHg3NTBELFxuICAgIDB4RTE1MDogMHg3NTE1LFxuICAgIDB4RTE1MTogMHg3NTEzLFxuICAgIDB4RTE1MjogMHg3NTFFLFxuICAgIDB4RTE1MzogMHg3NTI2LFxuICAgIDB4RTE1NDogMHg3NTJDLFxuICAgIDB4RTE1NTogMHg3NTNDLFxuICAgIDB4RTE1NjogMHg3NTQ0LFxuICAgIDB4RTE1NzogMHg3NTRELFxuICAgIDB4RTE1ODogMHg3NTRBLFxuICAgIDB4RTE1OTogMHg3NTQ5LFxuICAgIDB4RTE1QTogMHg3NTVCLFxuICAgIDB4RTE1QjogMHg3NTQ2LFxuICAgIDB4RTE1QzogMHg3NTVBLFxuICAgIDB4RTE1RDogMHg3NTY5LFxuICAgIDB4RTE1RTogMHg3NTY0LFxuICAgIDB4RTE1RjogMHg3NTY3LFxuICAgIDB4RTE2MDogMHg3NTZCLFxuICAgIDB4RTE2MTogMHg3NTZELFxuICAgIDB4RTE2MjogMHg3NTc4LFxuICAgIDB4RTE2MzogMHg3NTc2LFxuICAgIDB4RTE2NDogMHg3NTg2LFxuICAgIDB4RTE2NTogMHg3NTg3LFxuICAgIDB4RTE2NjogMHg3NTc0LFxuICAgIDB4RTE2NzogMHg3NThBLFxuICAgIDB4RTE2ODogMHg3NTg5LFxuICAgIDB4RTE2OTogMHg3NTgyLFxuICAgIDB4RTE2QTogMHg3NTk0LFxuICAgIDB4RTE2QjogMHg3NTlBLFxuICAgIDB4RTE2QzogMHg3NTlELFxuICAgIDB4RTE2RDogMHg3NUE1LFxuICAgIDB4RTE2RTogMHg3NUEzLFxuICAgIDB4RTE2RjogMHg3NUMyLFxuICAgIDB4RTE3MDogMHg3NUIzLFxuICAgIDB4RTE3MTogMHg3NUMzLFxuICAgIDB4RTE3MjogMHg3NUI1LFxuICAgIDB4RTE3MzogMHg3NUJELFxuICAgIDB4RTE3NDogMHg3NUI4LFxuICAgIDB4RTE3NTogMHg3NUJDLFxuICAgIDB4RTE3NjogMHg3NUIxLFxuICAgIDB4RTE3NzogMHg3NUNELFxuICAgIDB4RTE3ODogMHg3NUNBLFxuICAgIDB4RTE3OTogMHg3NUQyLFxuICAgIDB4RTE3QTogMHg3NUQ5LFxuICAgIDB4RTE3QjogMHg3NUUzLFxuICAgIDB4RTE3QzogMHg3NURFLFxuICAgIDB4RTE3RDogMHg3NUZFLFxuICAgIDB4RTE3RTogMHg3NUZGLFxuICAgIDB4RTE4MDogMHg3NUZDLFxuICAgIDB4RTE4MTogMHg3NjAxLFxuICAgIDB4RTE4MjogMHg3NUYwLFxuICAgIDB4RTE4MzogMHg3NUZBLFxuICAgIDB4RTE4NDogMHg3NUYyLFxuICAgIDB4RTE4NTogMHg3NUYzLFxuICAgIDB4RTE4NjogMHg3NjBCLFxuICAgIDB4RTE4NzogMHg3NjBELFxuICAgIDB4RTE4ODogMHg3NjA5LFxuICAgIDB4RTE4OTogMHg3NjFGLFxuICAgIDB4RTE4QTogMHg3NjI3LFxuICAgIDB4RTE4QjogMHg3NjIwLFxuICAgIDB4RTE4QzogMHg3NjIxLFxuICAgIDB4RTE4RDogMHg3NjIyLFxuICAgIDB4RTE4RTogMHg3NjI0LFxuICAgIDB4RTE4RjogMHg3NjM0LFxuICAgIDB4RTE5MDogMHg3NjMwLFxuICAgIDB4RTE5MTogMHg3NjNCLFxuICAgIDB4RTE5MjogMHg3NjQ3LFxuICAgIDB4RTE5MzogMHg3NjQ4LFxuICAgIDB4RTE5NDogMHg3NjQ2LFxuICAgIDB4RTE5NTogMHg3NjVDLFxuICAgIDB4RTE5NjogMHg3NjU4LFxuICAgIDB4RTE5NzogMHg3NjYxLFxuICAgIDB4RTE5ODogMHg3NjYyLFxuICAgIDB4RTE5OTogMHg3NjY4LFxuICAgIDB4RTE5QTogMHg3NjY5LFxuICAgIDB4RTE5QjogMHg3NjZBLFxuICAgIDB4RTE5QzogMHg3NjY3LFxuICAgIDB4RTE5RDogMHg3NjZDLFxuICAgIDB4RTE5RTogMHg3NjcwLFxuICAgIDB4RTE5RjogMHg3NjcyLFxuICAgIDB4RTFBMDogMHg3Njc2LFxuICAgIDB4RTFBMTogMHg3Njc4LFxuICAgIDB4RTFBMjogMHg3NjdDLFxuICAgIDB4RTFBMzogMHg3NjgwLFxuICAgIDB4RTFBNDogMHg3NjgzLFxuICAgIDB4RTFBNTogMHg3Njg4LFxuICAgIDB4RTFBNjogMHg3NjhCLFxuICAgIDB4RTFBNzogMHg3NjhFLFxuICAgIDB4RTFBODogMHg3Njk2LFxuICAgIDB4RTFBOTogMHg3NjkzLFxuICAgIDB4RTFBQTogMHg3Njk5LFxuICAgIDB4RTFBQjogMHg3NjlBLFxuICAgIDB4RTFBQzogMHg3NkIwLFxuICAgIDB4RTFBRDogMHg3NkI0LFxuICAgIDB4RTFBRTogMHg3NkI4LFxuICAgIDB4RTFBRjogMHg3NkI5LFxuICAgIDB4RTFCMDogMHg3NkJBLFxuICAgIDB4RTFCMTogMHg3NkMyLFxuICAgIDB4RTFCMjogMHg3NkNELFxuICAgIDB4RTFCMzogMHg3NkQ2LFxuICAgIDB4RTFCNDogMHg3NkQyLFxuICAgIDB4RTFCNTogMHg3NkRFLFxuICAgIDB4RTFCNjogMHg3NkUxLFxuICAgIDB4RTFCNzogMHg3NkU1LFxuICAgIDB4RTFCODogMHg3NkU3LFxuICAgIDB4RTFCOTogMHg3NkVBLFxuICAgIDB4RTFCQTogMHg4NjJGLFxuICAgIDB4RTFCQjogMHg3NkZCLFxuICAgIDB4RTFCQzogMHg3NzA4LFxuICAgIDB4RTFCRDogMHg3NzA3LFxuICAgIDB4RTFCRTogMHg3NzA0LFxuICAgIDB4RTFCRjogMHg3NzI5LFxuICAgIDB4RTFDMDogMHg3NzI0LFxuICAgIDB4RTFDMTogMHg3NzFFLFxuICAgIDB4RTFDMjogMHg3NzI1LFxuICAgIDB4RTFDMzogMHg3NzI2LFxuICAgIDB4RTFDNDogMHg3NzFCLFxuICAgIDB4RTFDNTogMHg3NzM3LFxuICAgIDB4RTFDNjogMHg3NzM4LFxuICAgIDB4RTFDNzogMHg3NzQ3LFxuICAgIDB4RTFDODogMHg3NzVBLFxuICAgIDB4RTFDOTogMHg3NzY4LFxuICAgIDB4RTFDQTogMHg3NzZCLFxuICAgIDB4RTFDQjogMHg3NzVCLFxuICAgIDB4RTFDQzogMHg3NzY1LFxuICAgIDB4RTFDRDogMHg3NzdGLFxuICAgIDB4RTFDRTogMHg3NzdFLFxuICAgIDB4RTFDRjogMHg3Nzc5LFxuICAgIDB4RTFEMDogMHg3NzhFLFxuICAgIDB4RTFEMTogMHg3NzhCLFxuICAgIDB4RTFEMjogMHg3NzkxLFxuICAgIDB4RTFEMzogMHg3N0EwLFxuICAgIDB4RTFENDogMHg3NzlFLFxuICAgIDB4RTFENTogMHg3N0IwLFxuICAgIDB4RTFENjogMHg3N0I2LFxuICAgIDB4RTFENzogMHg3N0I5LFxuICAgIDB4RTFEODogMHg3N0JGLFxuICAgIDB4RTFEOTogMHg3N0JDLFxuICAgIDB4RTFEQTogMHg3N0JELFxuICAgIDB4RTFEQjogMHg3N0JCLFxuICAgIDB4RTFEQzogMHg3N0M3LFxuICAgIDB4RTFERDogMHg3N0NELFxuICAgIDB4RTFERTogMHg3N0Q3LFxuICAgIDB4RTFERjogMHg3N0RBLFxuICAgIDB4RTFFMDogMHg3N0RDLFxuICAgIDB4RTFFMTogMHg3N0UzLFxuICAgIDB4RTFFMjogMHg3N0VFLFxuICAgIDB4RTFFMzogMHg3N0ZDLFxuICAgIDB4RTFFNDogMHg3ODBDLFxuICAgIDB4RTFFNTogMHg3ODEyLFxuICAgIDB4RTFFNjogMHg3OTI2LFxuICAgIDB4RTFFNzogMHg3ODIwLFxuICAgIDB4RTFFODogMHg3OTJBLFxuICAgIDB4RTFFOTogMHg3ODQ1LFxuICAgIDB4RTFFQTogMHg3ODhFLFxuICAgIDB4RTFFQjogMHg3ODc0LFxuICAgIDB4RTFFQzogMHg3ODg2LFxuICAgIDB4RTFFRDogMHg3ODdDLFxuICAgIDB4RTFFRTogMHg3ODlBLFxuICAgIDB4RTFFRjogMHg3ODhDLFxuICAgIDB4RTFGMDogMHg3OEEzLFxuICAgIDB4RTFGMTogMHg3OEI1LFxuICAgIDB4RTFGMjogMHg3OEFBLFxuICAgIDB4RTFGMzogMHg3OEFGLFxuICAgIDB4RTFGNDogMHg3OEQxLFxuICAgIDB4RTFGNTogMHg3OEM2LFxuICAgIDB4RTFGNjogMHg3OENCLFxuICAgIDB4RTFGNzogMHg3OEQ0LFxuICAgIDB4RTFGODogMHg3OEJFLFxuICAgIDB4RTFGOTogMHg3OEJDLFxuICAgIDB4RTFGQTogMHg3OEM1LFxuICAgIDB4RTFGQjogMHg3OENBLFxuICAgIDB4RTFGQzogMHg3OEVDLFxuICAgIDB4RTI0MDogMHg3OEU3LFxuICAgIDB4RTI0MTogMHg3OERBLFxuICAgIDB4RTI0MjogMHg3OEZELFxuICAgIDB4RTI0MzogMHg3OEY0LFxuICAgIDB4RTI0NDogMHg3OTA3LFxuICAgIDB4RTI0NTogMHg3OTEyLFxuICAgIDB4RTI0NjogMHg3OTExLFxuICAgIDB4RTI0NzogMHg3OTE5LFxuICAgIDB4RTI0ODogMHg3OTJDLFxuICAgIDB4RTI0OTogMHg3OTJCLFxuICAgIDB4RTI0QTogMHg3OTQwLFxuICAgIDB4RTI0QjogMHg3OTYwLFxuICAgIDB4RTI0QzogMHg3OTU3LFxuICAgIDB4RTI0RDogMHg3OTVGLFxuICAgIDB4RTI0RTogMHg3OTVBLFxuICAgIDB4RTI0RjogMHg3OTU1LFxuICAgIDB4RTI1MDogMHg3OTUzLFxuICAgIDB4RTI1MTogMHg3OTdBLFxuICAgIDB4RTI1MjogMHg3OTdGLFxuICAgIDB4RTI1MzogMHg3OThBLFxuICAgIDB4RTI1NDogMHg3OTlELFxuICAgIDB4RTI1NTogMHg3OUE3LFxuICAgIDB4RTI1NjogMHg5RjRCLFxuICAgIDB4RTI1NzogMHg3OUFBLFxuICAgIDB4RTI1ODogMHg3OUFFLFxuICAgIDB4RTI1OTogMHg3OUIzLFxuICAgIDB4RTI1QTogMHg3OUI5LFxuICAgIDB4RTI1QjogMHg3OUJBLFxuICAgIDB4RTI1QzogMHg3OUM5LFxuICAgIDB4RTI1RDogMHg3OUQ1LFxuICAgIDB4RTI1RTogMHg3OUU3LFxuICAgIDB4RTI1RjogMHg3OUVDLFxuICAgIDB4RTI2MDogMHg3OUUxLFxuICAgIDB4RTI2MTogMHg3OUUzLFxuICAgIDB4RTI2MjogMHg3QTA4LFxuICAgIDB4RTI2MzogMHg3QTBELFxuICAgIDB4RTI2NDogMHg3QTE4LFxuICAgIDB4RTI2NTogMHg3QTE5LFxuICAgIDB4RTI2NjogMHg3QTIwLFxuICAgIDB4RTI2NzogMHg3QTFGLFxuICAgIDB4RTI2ODogMHg3OTgwLFxuICAgIDB4RTI2OTogMHg3QTMxLFxuICAgIDB4RTI2QTogMHg3QTNCLFxuICAgIDB4RTI2QjogMHg3QTNFLFxuICAgIDB4RTI2QzogMHg3QTM3LFxuICAgIDB4RTI2RDogMHg3QTQzLFxuICAgIDB4RTI2RTogMHg3QTU3LFxuICAgIDB4RTI2RjogMHg3QTQ5LFxuICAgIDB4RTI3MDogMHg3QTYxLFxuICAgIDB4RTI3MTogMHg3QTYyLFxuICAgIDB4RTI3MjogMHg3QTY5LFxuICAgIDB4RTI3MzogMHg5RjlELFxuICAgIDB4RTI3NDogMHg3QTcwLFxuICAgIDB4RTI3NTogMHg3QTc5LFxuICAgIDB4RTI3NjogMHg3QTdELFxuICAgIDB4RTI3NzogMHg3QTg4LFxuICAgIDB4RTI3ODogMHg3QTk3LFxuICAgIDB4RTI3OTogMHg3QTk1LFxuICAgIDB4RTI3QTogMHg3QTk4LFxuICAgIDB4RTI3QjogMHg3QTk2LFxuICAgIDB4RTI3QzogMHg3QUE5LFxuICAgIDB4RTI3RDogMHg3QUM4LFxuICAgIDB4RTI3RTogMHg3QUIwLFxuICAgIDB4RTI4MDogMHg3QUI2LFxuICAgIDB4RTI4MTogMHg3QUM1LFxuICAgIDB4RTI4MjogMHg3QUM0LFxuICAgIDB4RTI4MzogMHg3QUJGLFxuICAgIDB4RTI4NDogMHg5MDgzLFxuICAgIDB4RTI4NTogMHg3QUM3LFxuICAgIDB4RTI4NjogMHg3QUNBLFxuICAgIDB4RTI4NzogMHg3QUNELFxuICAgIDB4RTI4ODogMHg3QUNGLFxuICAgIDB4RTI4OTogMHg3QUQ1LFxuICAgIDB4RTI4QTogMHg3QUQzLFxuICAgIDB4RTI4QjogMHg3QUQ5LFxuICAgIDB4RTI4QzogMHg3QURBLFxuICAgIDB4RTI4RDogMHg3QURELFxuICAgIDB4RTI4RTogMHg3QUUxLFxuICAgIDB4RTI4RjogMHg3QUUyLFxuICAgIDB4RTI5MDogMHg3QUU2LFxuICAgIDB4RTI5MTogMHg3QUVELFxuICAgIDB4RTI5MjogMHg3QUYwLFxuICAgIDB4RTI5MzogMHg3QjAyLFxuICAgIDB4RTI5NDogMHg3QjBGLFxuICAgIDB4RTI5NTogMHg3QjBBLFxuICAgIDB4RTI5NjogMHg3QjA2LFxuICAgIDB4RTI5NzogMHg3QjMzLFxuICAgIDB4RTI5ODogMHg3QjE4LFxuICAgIDB4RTI5OTogMHg3QjE5LFxuICAgIDB4RTI5QTogMHg3QjFFLFxuICAgIDB4RTI5QjogMHg3QjM1LFxuICAgIDB4RTI5QzogMHg3QjI4LFxuICAgIDB4RTI5RDogMHg3QjM2LFxuICAgIDB4RTI5RTogMHg3QjUwLFxuICAgIDB4RTI5RjogMHg3QjdBLFxuICAgIDB4RTJBMDogMHg3QjA0LFxuICAgIDB4RTJBMTogMHg3QjRELFxuICAgIDB4RTJBMjogMHg3QjBCLFxuICAgIDB4RTJBMzogMHg3QjRDLFxuICAgIDB4RTJBNDogMHg3QjQ1LFxuICAgIDB4RTJBNTogMHg3Qjc1LFxuICAgIDB4RTJBNjogMHg3QjY1LFxuICAgIDB4RTJBNzogMHg3Qjc0LFxuICAgIDB4RTJBODogMHg3QjY3LFxuICAgIDB4RTJBOTogMHg3QjcwLFxuICAgIDB4RTJBQTogMHg3QjcxLFxuICAgIDB4RTJBQjogMHg3QjZDLFxuICAgIDB4RTJBQzogMHg3QjZFLFxuICAgIDB4RTJBRDogMHg3QjlELFxuICAgIDB4RTJBRTogMHg3Qjk4LFxuICAgIDB4RTJBRjogMHg3QjlGLFxuICAgIDB4RTJCMDogMHg3QjhELFxuICAgIDB4RTJCMTogMHg3QjlDLFxuICAgIDB4RTJCMjogMHg3QjlBLFxuICAgIDB4RTJCMzogMHg3QjhCLFxuICAgIDB4RTJCNDogMHg3QjkyLFxuICAgIDB4RTJCNTogMHg3QjhGLFxuICAgIDB4RTJCNjogMHg3QjVELFxuICAgIDB4RTJCNzogMHg3Qjk5LFxuICAgIDB4RTJCODogMHg3QkNCLFxuICAgIDB4RTJCOTogMHg3QkMxLFxuICAgIDB4RTJCQTogMHg3QkNDLFxuICAgIDB4RTJCQjogMHg3QkNGLFxuICAgIDB4RTJCQzogMHg3QkI0LFxuICAgIDB4RTJCRDogMHg3QkM2LFxuICAgIDB4RTJCRTogMHg3QkRELFxuICAgIDB4RTJCRjogMHg3QkU5LFxuICAgIDB4RTJDMDogMHg3QzExLFxuICAgIDB4RTJDMTogMHg3QzE0LFxuICAgIDB4RTJDMjogMHg3QkU2LFxuICAgIDB4RTJDMzogMHg3QkU1LFxuICAgIDB4RTJDNDogMHg3QzYwLFxuICAgIDB4RTJDNTogMHg3QzAwLFxuICAgIDB4RTJDNjogMHg3QzA3LFxuICAgIDB4RTJDNzogMHg3QzEzLFxuICAgIDB4RTJDODogMHg3QkYzLFxuICAgIDB4RTJDOTogMHg3QkY3LFxuICAgIDB4RTJDQTogMHg3QzE3LFxuICAgIDB4RTJDQjogMHg3QzBELFxuICAgIDB4RTJDQzogMHg3QkY2LFxuICAgIDB4RTJDRDogMHg3QzIzLFxuICAgIDB4RTJDRTogMHg3QzI3LFxuICAgIDB4RTJDRjogMHg3QzJBLFxuICAgIDB4RTJEMDogMHg3QzFGLFxuICAgIDB4RTJEMTogMHg3QzM3LFxuICAgIDB4RTJEMjogMHg3QzJCLFxuICAgIDB4RTJEMzogMHg3QzNELFxuICAgIDB4RTJENDogMHg3QzRDLFxuICAgIDB4RTJENTogMHg3QzQzLFxuICAgIDB4RTJENjogMHg3QzU0LFxuICAgIDB4RTJENzogMHg3QzRGLFxuICAgIDB4RTJEODogMHg3QzQwLFxuICAgIDB4RTJEOTogMHg3QzUwLFxuICAgIDB4RTJEQTogMHg3QzU4LFxuICAgIDB4RTJEQjogMHg3QzVGLFxuICAgIDB4RTJEQzogMHg3QzY0LFxuICAgIDB4RTJERDogMHg3QzU2LFxuICAgIDB4RTJERTogMHg3QzY1LFxuICAgIDB4RTJERjogMHg3QzZDLFxuICAgIDB4RTJFMDogMHg3Qzc1LFxuICAgIDB4RTJFMTogMHg3QzgzLFxuICAgIDB4RTJFMjogMHg3QzkwLFxuICAgIDB4RTJFMzogMHg3Q0E0LFxuICAgIDB4RTJFNDogMHg3Q0FELFxuICAgIDB4RTJFNTogMHg3Q0EyLFxuICAgIDB4RTJFNjogMHg3Q0FCLFxuICAgIDB4RTJFNzogMHg3Q0ExLFxuICAgIDB4RTJFODogMHg3Q0E4LFxuICAgIDB4RTJFOTogMHg3Q0IzLFxuICAgIDB4RTJFQTogMHg3Q0IyLFxuICAgIDB4RTJFQjogMHg3Q0IxLFxuICAgIDB4RTJFQzogMHg3Q0FFLFxuICAgIDB4RTJFRDogMHg3Q0I5LFxuICAgIDB4RTJFRTogMHg3Q0JELFxuICAgIDB4RTJFRjogMHg3Q0MwLFxuICAgIDB4RTJGMDogMHg3Q0M1LFxuICAgIDB4RTJGMTogMHg3Q0MyLFxuICAgIDB4RTJGMjogMHg3Q0Q4LFxuICAgIDB4RTJGMzogMHg3Q0QyLFxuICAgIDB4RTJGNDogMHg3Q0RDLFxuICAgIDB4RTJGNTogMHg3Q0UyLFxuICAgIDB4RTJGNjogMHg5QjNCLFxuICAgIDB4RTJGNzogMHg3Q0VGLFxuICAgIDB4RTJGODogMHg3Q0YyLFxuICAgIDB4RTJGOTogMHg3Q0Y0LFxuICAgIDB4RTJGQTogMHg3Q0Y2LFxuICAgIDB4RTJGQjogMHg3Q0ZBLFxuICAgIDB4RTJGQzogMHg3RDA2LFxuICAgIDB4RTM0MDogMHg3RDAyLFxuICAgIDB4RTM0MTogMHg3RDFDLFxuICAgIDB4RTM0MjogMHg3RDE1LFxuICAgIDB4RTM0MzogMHg3RDBBLFxuICAgIDB4RTM0NDogMHg3RDQ1LFxuICAgIDB4RTM0NTogMHg3RDRCLFxuICAgIDB4RTM0NjogMHg3RDJFLFxuICAgIDB4RTM0NzogMHg3RDMyLFxuICAgIDB4RTM0ODogMHg3RDNGLFxuICAgIDB4RTM0OTogMHg3RDM1LFxuICAgIDB4RTM0QTogMHg3RDQ2LFxuICAgIDB4RTM0QjogMHg3RDczLFxuICAgIDB4RTM0QzogMHg3RDU2LFxuICAgIDB4RTM0RDogMHg3RDRFLFxuICAgIDB4RTM0RTogMHg3RDcyLFxuICAgIDB4RTM0RjogMHg3RDY4LFxuICAgIDB4RTM1MDogMHg3RDZFLFxuICAgIDB4RTM1MTogMHg3RDRGLFxuICAgIDB4RTM1MjogMHg3RDYzLFxuICAgIDB4RTM1MzogMHg3RDkzLFxuICAgIDB4RTM1NDogMHg3RDg5LFxuICAgIDB4RTM1NTogMHg3RDVCLFxuICAgIDB4RTM1NjogMHg3RDhGLFxuICAgIDB4RTM1NzogMHg3RDdELFxuICAgIDB4RTM1ODogMHg3RDlCLFxuICAgIDB4RTM1OTogMHg3REJBLFxuICAgIDB4RTM1QTogMHg3REFFLFxuICAgIDB4RTM1QjogMHg3REEzLFxuICAgIDB4RTM1QzogMHg3REI1LFxuICAgIDB4RTM1RDogMHg3REM3LFxuICAgIDB4RTM1RTogMHg3REJELFxuICAgIDB4RTM1RjogMHg3REFCLFxuICAgIDB4RTM2MDogMHg3RTNELFxuICAgIDB4RTM2MTogMHg3REEyLFxuICAgIDB4RTM2MjogMHg3REFGLFxuICAgIDB4RTM2MzogMHg3RERDLFxuICAgIDB4RTM2NDogMHg3REI4LFxuICAgIDB4RTM2NTogMHg3RDlGLFxuICAgIDB4RTM2NjogMHg3REIwLFxuICAgIDB4RTM2NzogMHg3REQ4LFxuICAgIDB4RTM2ODogMHg3RERELFxuICAgIDB4RTM2OTogMHg3REU0LFxuICAgIDB4RTM2QTogMHg3RERFLFxuICAgIDB4RTM2QjogMHg3REZCLFxuICAgIDB4RTM2QzogMHg3REYyLFxuICAgIDB4RTM2RDogMHg3REUxLFxuICAgIDB4RTM2RTogMHg3RTA1LFxuICAgIDB4RTM2RjogMHg3RTBBLFxuICAgIDB4RTM3MDogMHg3RTIzLFxuICAgIDB4RTM3MTogMHg3RTIxLFxuICAgIDB4RTM3MjogMHg3RTEyLFxuICAgIDB4RTM3MzogMHg3RTMxLFxuICAgIDB4RTM3NDogMHg3RTFGLFxuICAgIDB4RTM3NTogMHg3RTA5LFxuICAgIDB4RTM3NjogMHg3RTBCLFxuICAgIDB4RTM3NzogMHg3RTIyLFxuICAgIDB4RTM3ODogMHg3RTQ2LFxuICAgIDB4RTM3OTogMHg3RTY2LFxuICAgIDB4RTM3QTogMHg3RTNCLFxuICAgIDB4RTM3QjogMHg3RTM1LFxuICAgIDB4RTM3QzogMHg3RTM5LFxuICAgIDB4RTM3RDogMHg3RTQzLFxuICAgIDB4RTM3RTogMHg3RTM3LFxuICAgIDB4RTM4MDogMHg3RTMyLFxuICAgIDB4RTM4MTogMHg3RTNBLFxuICAgIDB4RTM4MjogMHg3RTY3LFxuICAgIDB4RTM4MzogMHg3RTVELFxuICAgIDB4RTM4NDogMHg3RTU2LFxuICAgIDB4RTM4NTogMHg3RTVFLFxuICAgIDB4RTM4NjogMHg3RTU5LFxuICAgIDB4RTM4NzogMHg3RTVBLFxuICAgIDB4RTM4ODogMHg3RTc5LFxuICAgIDB4RTM4OTogMHg3RTZBLFxuICAgIDB4RTM4QTogMHg3RTY5LFxuICAgIDB4RTM4QjogMHg3RTdDLFxuICAgIDB4RTM4QzogMHg3RTdCLFxuICAgIDB4RTM4RDogMHg3RTgzLFxuICAgIDB4RTM4RTogMHg3REQ1LFxuICAgIDB4RTM4RjogMHg3RTdELFxuICAgIDB4RTM5MDogMHg4RkFFLFxuICAgIDB4RTM5MTogMHg3RTdGLFxuICAgIDB4RTM5MjogMHg3RTg4LFxuICAgIDB4RTM5MzogMHg3RTg5LFxuICAgIDB4RTM5NDogMHg3RThDLFxuICAgIDB4RTM5NTogMHg3RTkyLFxuICAgIDB4RTM5NjogMHg3RTkwLFxuICAgIDB4RTM5NzogMHg3RTkzLFxuICAgIDB4RTM5ODogMHg3RTk0LFxuICAgIDB4RTM5OTogMHg3RTk2LFxuICAgIDB4RTM5QTogMHg3RThFLFxuICAgIDB4RTM5QjogMHg3RTlCLFxuICAgIDB4RTM5QzogMHg3RTlDLFxuICAgIDB4RTM5RDogMHg3RjM4LFxuICAgIDB4RTM5RTogMHg3RjNBLFxuICAgIDB4RTM5RjogMHg3RjQ1LFxuICAgIDB4RTNBMDogMHg3RjRDLFxuICAgIDB4RTNBMTogMHg3RjRELFxuICAgIDB4RTNBMjogMHg3RjRFLFxuICAgIDB4RTNBMzogMHg3RjUwLFxuICAgIDB4RTNBNDogMHg3RjUxLFxuICAgIDB4RTNBNTogMHg3RjU1LFxuICAgIDB4RTNBNjogMHg3RjU0LFxuICAgIDB4RTNBNzogMHg3RjU4LFxuICAgIDB4RTNBODogMHg3RjVGLFxuICAgIDB4RTNBOTogMHg3RjYwLFxuICAgIDB4RTNBQTogMHg3RjY4LFxuICAgIDB4RTNBQjogMHg3RjY5LFxuICAgIDB4RTNBQzogMHg3RjY3LFxuICAgIDB4RTNBRDogMHg3Rjc4LFxuICAgIDB4RTNBRTogMHg3RjgyLFxuICAgIDB4RTNBRjogMHg3Rjg2LFxuICAgIDB4RTNCMDogMHg3RjgzLFxuICAgIDB4RTNCMTogMHg3Rjg4LFxuICAgIDB4RTNCMjogMHg3Rjg3LFxuICAgIDB4RTNCMzogMHg3RjhDLFxuICAgIDB4RTNCNDogMHg3Rjk0LFxuICAgIDB4RTNCNTogMHg3RjlFLFxuICAgIDB4RTNCNjogMHg3RjlELFxuICAgIDB4RTNCNzogMHg3RjlBLFxuICAgIDB4RTNCODogMHg3RkEzLFxuICAgIDB4RTNCOTogMHg3RkFGLFxuICAgIDB4RTNCQTogMHg3RkIyLFxuICAgIDB4RTNCQjogMHg3RkI5LFxuICAgIDB4RTNCQzogMHg3RkFFLFxuICAgIDB4RTNCRDogMHg3RkI2LFxuICAgIDB4RTNCRTogMHg3RkI4LFxuICAgIDB4RTNCRjogMHg4QjcxLFxuICAgIDB4RTNDMDogMHg3RkM1LFxuICAgIDB4RTNDMTogMHg3RkM2LFxuICAgIDB4RTNDMjogMHg3RkNBLFxuICAgIDB4RTNDMzogMHg3RkQ1LFxuICAgIDB4RTNDNDogMHg3RkQ0LFxuICAgIDB4RTNDNTogMHg3RkUxLFxuICAgIDB4RTNDNjogMHg3RkU2LFxuICAgIDB4RTNDNzogMHg3RkU5LFxuICAgIDB4RTNDODogMHg3RkYzLFxuICAgIDB4RTNDOTogMHg3RkY5LFxuICAgIDB4RTNDQTogMHg5OERDLFxuICAgIDB4RTNDQjogMHg4MDA2LFxuICAgIDB4RTNDQzogMHg4MDA0LFxuICAgIDB4RTNDRDogMHg4MDBCLFxuICAgIDB4RTNDRTogMHg4MDEyLFxuICAgIDB4RTNDRjogMHg4MDE4LFxuICAgIDB4RTNEMDogMHg4MDE5LFxuICAgIDB4RTNEMTogMHg4MDFDLFxuICAgIDB4RTNEMjogMHg4MDIxLFxuICAgIDB4RTNEMzogMHg4MDI4LFxuICAgIDB4RTNENDogMHg4MDNGLFxuICAgIDB4RTNENTogMHg4MDNCLFxuICAgIDB4RTNENjogMHg4MDRBLFxuICAgIDB4RTNENzogMHg4MDQ2LFxuICAgIDB4RTNEODogMHg4MDUyLFxuICAgIDB4RTNEOTogMHg4MDU4LFxuICAgIDB4RTNEQTogMHg4MDVBLFxuICAgIDB4RTNEQjogMHg4MDVGLFxuICAgIDB4RTNEQzogMHg4MDYyLFxuICAgIDB4RTNERDogMHg4MDY4LFxuICAgIDB4RTNERTogMHg4MDczLFxuICAgIDB4RTNERjogMHg4MDcyLFxuICAgIDB4RTNFMDogMHg4MDcwLFxuICAgIDB4RTNFMTogMHg4MDc2LFxuICAgIDB4RTNFMjogMHg4MDc5LFxuICAgIDB4RTNFMzogMHg4MDdELFxuICAgIDB4RTNFNDogMHg4MDdGLFxuICAgIDB4RTNFNTogMHg4MDg0LFxuICAgIDB4RTNFNjogMHg4MDg2LFxuICAgIDB4RTNFNzogMHg4MDg1LFxuICAgIDB4RTNFODogMHg4MDlCLFxuICAgIDB4RTNFOTogMHg4MDkzLFxuICAgIDB4RTNFQTogMHg4MDlBLFxuICAgIDB4RTNFQjogMHg4MEFELFxuICAgIDB4RTNFQzogMHg1MTkwLFxuICAgIDB4RTNFRDogMHg4MEFDLFxuICAgIDB4RTNFRTogMHg4MERCLFxuICAgIDB4RTNFRjogMHg4MEU1LFxuICAgIDB4RTNGMDogMHg4MEQ5LFxuICAgIDB4RTNGMTogMHg4MERELFxuICAgIDB4RTNGMjogMHg4MEM0LFxuICAgIDB4RTNGMzogMHg4MERBLFxuICAgIDB4RTNGNDogMHg4MEQ2LFxuICAgIDB4RTNGNTogMHg4MTA5LFxuICAgIDB4RTNGNjogMHg4MEVGLFxuICAgIDB4RTNGNzogMHg4MEYxLFxuICAgIDB4RTNGODogMHg4MTFCLFxuICAgIDB4RTNGOTogMHg4MTI5LFxuICAgIDB4RTNGQTogMHg4MTIzLFxuICAgIDB4RTNGQjogMHg4MTJGLFxuICAgIDB4RTNGQzogMHg4MTRCLFxuICAgIDB4RTQ0MDogMHg5NjhCLFxuICAgIDB4RTQ0MTogMHg4MTQ2LFxuICAgIDB4RTQ0MjogMHg4MTNFLFxuICAgIDB4RTQ0MzogMHg4MTUzLFxuICAgIDB4RTQ0NDogMHg4MTUxLFxuICAgIDB4RTQ0NTogMHg4MEZDLFxuICAgIDB4RTQ0NjogMHg4MTcxLFxuICAgIDB4RTQ0NzogMHg4MTZFLFxuICAgIDB4RTQ0ODogMHg4MTY1LFxuICAgIDB4RTQ0OTogMHg4MTY2LFxuICAgIDB4RTQ0QTogMHg4MTc0LFxuICAgIDB4RTQ0QjogMHg4MTgzLFxuICAgIDB4RTQ0QzogMHg4MTg4LFxuICAgIDB4RTQ0RDogMHg4MThBLFxuICAgIDB4RTQ0RTogMHg4MTgwLFxuICAgIDB4RTQ0RjogMHg4MTgyLFxuICAgIDB4RTQ1MDogMHg4MUEwLFxuICAgIDB4RTQ1MTogMHg4MTk1LFxuICAgIDB4RTQ1MjogMHg4MUE0LFxuICAgIDB4RTQ1MzogMHg4MUEzLFxuICAgIDB4RTQ1NDogMHg4MTVGLFxuICAgIDB4RTQ1NTogMHg4MTkzLFxuICAgIDB4RTQ1NjogMHg4MUE5LFxuICAgIDB4RTQ1NzogMHg4MUIwLFxuICAgIDB4RTQ1ODogMHg4MUI1LFxuICAgIDB4RTQ1OTogMHg4MUJFLFxuICAgIDB4RTQ1QTogMHg4MUI4LFxuICAgIDB4RTQ1QjogMHg4MUJELFxuICAgIDB4RTQ1QzogMHg4MUMwLFxuICAgIDB4RTQ1RDogMHg4MUMyLFxuICAgIDB4RTQ1RTogMHg4MUJBLFxuICAgIDB4RTQ1RjogMHg4MUM5LFxuICAgIDB4RTQ2MDogMHg4MUNELFxuICAgIDB4RTQ2MTogMHg4MUQxLFxuICAgIDB4RTQ2MjogMHg4MUQ5LFxuICAgIDB4RTQ2MzogMHg4MUQ4LFxuICAgIDB4RTQ2NDogMHg4MUM4LFxuICAgIDB4RTQ2NTogMHg4MURBLFxuICAgIDB4RTQ2NjogMHg4MURGLFxuICAgIDB4RTQ2NzogMHg4MUUwLFxuICAgIDB4RTQ2ODogMHg4MUU3LFxuICAgIDB4RTQ2OTogMHg4MUZBLFxuICAgIDB4RTQ2QTogMHg4MUZCLFxuICAgIDB4RTQ2QjogMHg4MUZFLFxuICAgIDB4RTQ2QzogMHg4MjAxLFxuICAgIDB4RTQ2RDogMHg4MjAyLFxuICAgIDB4RTQ2RTogMHg4MjA1LFxuICAgIDB4RTQ2RjogMHg4MjA3LFxuICAgIDB4RTQ3MDogMHg4MjBBLFxuICAgIDB4RTQ3MTogMHg4MjBELFxuICAgIDB4RTQ3MjogMHg4MjEwLFxuICAgIDB4RTQ3MzogMHg4MjE2LFxuICAgIDB4RTQ3NDogMHg4MjI5LFxuICAgIDB4RTQ3NTogMHg4MjJCLFxuICAgIDB4RTQ3NjogMHg4MjM4LFxuICAgIDB4RTQ3NzogMHg4MjMzLFxuICAgIDB4RTQ3ODogMHg4MjQwLFxuICAgIDB4RTQ3OTogMHg4MjU5LFxuICAgIDB4RTQ3QTogMHg4MjU4LFxuICAgIDB4RTQ3QjogMHg4MjVELFxuICAgIDB4RTQ3QzogMHg4MjVBLFxuICAgIDB4RTQ3RDogMHg4MjVGLFxuICAgIDB4RTQ3RTogMHg4MjY0LFxuICAgIDB4RTQ4MDogMHg4MjYyLFxuICAgIDB4RTQ4MTogMHg4MjY4LFxuICAgIDB4RTQ4MjogMHg4MjZBLFxuICAgIDB4RTQ4MzogMHg4MjZCLFxuICAgIDB4RTQ4NDogMHg4MjJFLFxuICAgIDB4RTQ4NTogMHg4MjcxLFxuICAgIDB4RTQ4NjogMHg4Mjc3LFxuICAgIDB4RTQ4NzogMHg4Mjc4LFxuICAgIDB4RTQ4ODogMHg4MjdFLFxuICAgIDB4RTQ4OTogMHg4MjhELFxuICAgIDB4RTQ4QTogMHg4MjkyLFxuICAgIDB4RTQ4QjogMHg4MkFCLFxuICAgIDB4RTQ4QzogMHg4MjlGLFxuICAgIDB4RTQ4RDogMHg4MkJCLFxuICAgIDB4RTQ4RTogMHg4MkFDLFxuICAgIDB4RTQ4RjogMHg4MkUxLFxuICAgIDB4RTQ5MDogMHg4MkUzLFxuICAgIDB4RTQ5MTogMHg4MkRGLFxuICAgIDB4RTQ5MjogMHg4MkQyLFxuICAgIDB4RTQ5MzogMHg4MkY0LFxuICAgIDB4RTQ5NDogMHg4MkYzLFxuICAgIDB4RTQ5NTogMHg4MkZBLFxuICAgIDB4RTQ5NjogMHg4MzkzLFxuICAgIDB4RTQ5NzogMHg4MzAzLFxuICAgIDB4RTQ5ODogMHg4MkZCLFxuICAgIDB4RTQ5OTogMHg4MkY5LFxuICAgIDB4RTQ5QTogMHg4MkRFLFxuICAgIDB4RTQ5QjogMHg4MzA2LFxuICAgIDB4RTQ5QzogMHg4MkRDLFxuICAgIDB4RTQ5RDogMHg4MzA5LFxuICAgIDB4RTQ5RTogMHg4MkQ5LFxuICAgIDB4RTQ5RjogMHg4MzM1LFxuICAgIDB4RTRBMDogMHg4MzM0LFxuICAgIDB4RTRBMTogMHg4MzE2LFxuICAgIDB4RTRBMjogMHg4MzMyLFxuICAgIDB4RTRBMzogMHg4MzMxLFxuICAgIDB4RTRBNDogMHg4MzQwLFxuICAgIDB4RTRBNTogMHg4MzM5LFxuICAgIDB4RTRBNjogMHg4MzUwLFxuICAgIDB4RTRBNzogMHg4MzQ1LFxuICAgIDB4RTRBODogMHg4MzJGLFxuICAgIDB4RTRBOTogMHg4MzJCLFxuICAgIDB4RTRBQTogMHg4MzE3LFxuICAgIDB4RTRBQjogMHg4MzE4LFxuICAgIDB4RTRBQzogMHg4Mzg1LFxuICAgIDB4RTRBRDogMHg4MzlBLFxuICAgIDB4RTRBRTogMHg4M0FBLFxuICAgIDB4RTRBRjogMHg4MzlGLFxuICAgIDB4RTRCMDogMHg4M0EyLFxuICAgIDB4RTRCMTogMHg4Mzk2LFxuICAgIDB4RTRCMjogMHg4MzIzLFxuICAgIDB4RTRCMzogMHg4MzhFLFxuICAgIDB4RTRCNDogMHg4Mzg3LFxuICAgIDB4RTRCNTogMHg4MzhBLFxuICAgIDB4RTRCNjogMHg4MzdDLFxuICAgIDB4RTRCNzogMHg4M0I1LFxuICAgIDB4RTRCODogMHg4MzczLFxuICAgIDB4RTRCOTogMHg4Mzc1LFxuICAgIDB4RTRCQTogMHg4M0EwLFxuICAgIDB4RTRCQjogMHg4Mzg5LFxuICAgIDB4RTRCQzogMHg4M0E4LFxuICAgIDB4RTRCRDogMHg4M0Y0LFxuICAgIDB4RTRCRTogMHg4NDEzLFxuICAgIDB4RTRCRjogMHg4M0VCLFxuICAgIDB4RTRDMDogMHg4M0NFLFxuICAgIDB4RTRDMTogMHg4M0ZELFxuICAgIDB4RTRDMjogMHg4NDAzLFxuICAgIDB4RTRDMzogMHg4M0Q4LFxuICAgIDB4RTRDNDogMHg4NDBCLFxuICAgIDB4RTRDNTogMHg4M0MxLFxuICAgIDB4RTRDNjogMHg4M0Y3LFxuICAgIDB4RTRDNzogMHg4NDA3LFxuICAgIDB4RTRDODogMHg4M0UwLFxuICAgIDB4RTRDOTogMHg4M0YyLFxuICAgIDB4RTRDQTogMHg4NDBELFxuICAgIDB4RTRDQjogMHg4NDIyLFxuICAgIDB4RTRDQzogMHg4NDIwLFxuICAgIDB4RTRDRDogMHg4M0JELFxuICAgIDB4RTRDRTogMHg4NDM4LFxuICAgIDB4RTRDRjogMHg4NTA2LFxuICAgIDB4RTREMDogMHg4M0ZCLFxuICAgIDB4RTREMTogMHg4NDZELFxuICAgIDB4RTREMjogMHg4NDJBLFxuICAgIDB4RTREMzogMHg4NDNDLFxuICAgIDB4RTRENDogMHg4NTVBLFxuICAgIDB4RTRENTogMHg4NDg0LFxuICAgIDB4RTRENjogMHg4NDc3LFxuICAgIDB4RTRENzogMHg4NDZCLFxuICAgIDB4RTREODogMHg4NEFELFxuICAgIDB4RTREOTogMHg4NDZFLFxuICAgIDB4RTREQTogMHg4NDgyLFxuICAgIDB4RTREQjogMHg4NDY5LFxuICAgIDB4RTREQzogMHg4NDQ2LFxuICAgIDB4RTRERDogMHg4NDJDLFxuICAgIDB4RTRERTogMHg4NDZGLFxuICAgIDB4RTRERjogMHg4NDc5LFxuICAgIDB4RTRFMDogMHg4NDM1LFxuICAgIDB4RTRFMTogMHg4NENBLFxuICAgIDB4RTRFMjogMHg4NDYyLFxuICAgIDB4RTRFMzogMHg4NEI5LFxuICAgIDB4RTRFNDogMHg4NEJGLFxuICAgIDB4RTRFNTogMHg4NDlGLFxuICAgIDB4RTRFNjogMHg4NEQ5LFxuICAgIDB4RTRFNzogMHg4NENELFxuICAgIDB4RTRFODogMHg4NEJCLFxuICAgIDB4RTRFOTogMHg4NERBLFxuICAgIDB4RTRFQTogMHg4NEQwLFxuICAgIDB4RTRFQjogMHg4NEMxLFxuICAgIDB4RTRFQzogMHg4NEM2LFxuICAgIDB4RTRFRDogMHg4NEQ2LFxuICAgIDB4RTRFRTogMHg4NEExLFxuICAgIDB4RTRFRjogMHg4NTIxLFxuICAgIDB4RTRGMDogMHg4NEZGLFxuICAgIDB4RTRGMTogMHg4NEY0LFxuICAgIDB4RTRGMjogMHg4NTE3LFxuICAgIDB4RTRGMzogMHg4NTE4LFxuICAgIDB4RTRGNDogMHg4NTJDLFxuICAgIDB4RTRGNTogMHg4NTFGLFxuICAgIDB4RTRGNjogMHg4NTE1LFxuICAgIDB4RTRGNzogMHg4NTE0LFxuICAgIDB4RTRGODogMHg4NEZDLFxuICAgIDB4RTRGOTogMHg4NTQwLFxuICAgIDB4RTRGQTogMHg4NTYzLFxuICAgIDB4RTRGQjogMHg4NTU4LFxuICAgIDB4RTRGQzogMHg4NTQ4LFxuICAgIDB4RTU0MDogMHg4NTQxLFxuICAgIDB4RTU0MTogMHg4NjAyLFxuICAgIDB4RTU0MjogMHg4NTRCLFxuICAgIDB4RTU0MzogMHg4NTU1LFxuICAgIDB4RTU0NDogMHg4NTgwLFxuICAgIDB4RTU0NTogMHg4NUE0LFxuICAgIDB4RTU0NjogMHg4NTg4LFxuICAgIDB4RTU0NzogMHg4NTkxLFxuICAgIDB4RTU0ODogMHg4NThBLFxuICAgIDB4RTU0OTogMHg4NUE4LFxuICAgIDB4RTU0QTogMHg4NTZELFxuICAgIDB4RTU0QjogMHg4NTk0LFxuICAgIDB4RTU0QzogMHg4NTlCLFxuICAgIDB4RTU0RDogMHg4NUVBLFxuICAgIDB4RTU0RTogMHg4NTg3LFxuICAgIDB4RTU0RjogMHg4NTlDLFxuICAgIDB4RTU1MDogMHg4NTc3LFxuICAgIDB4RTU1MTogMHg4NTdFLFxuICAgIDB4RTU1MjogMHg4NTkwLFxuICAgIDB4RTU1MzogMHg4NUM5LFxuICAgIDB4RTU1NDogMHg4NUJBLFxuICAgIDB4RTU1NTogMHg4NUNGLFxuICAgIDB4RTU1NjogMHg4NUI5LFxuICAgIDB4RTU1NzogMHg4NUQwLFxuICAgIDB4RTU1ODogMHg4NUQ1LFxuICAgIDB4RTU1OTogMHg4NURELFxuICAgIDB4RTU1QTogMHg4NUU1LFxuICAgIDB4RTU1QjogMHg4NURDLFxuICAgIDB4RTU1QzogMHg4NUY5LFxuICAgIDB4RTU1RDogMHg4NjBBLFxuICAgIDB4RTU1RTogMHg4NjEzLFxuICAgIDB4RTU1RjogMHg4NjBCLFxuICAgIDB4RTU2MDogMHg4NUZFLFxuICAgIDB4RTU2MTogMHg4NUZBLFxuICAgIDB4RTU2MjogMHg4NjA2LFxuICAgIDB4RTU2MzogMHg4NjIyLFxuICAgIDB4RTU2NDogMHg4NjFBLFxuICAgIDB4RTU2NTogMHg4NjMwLFxuICAgIDB4RTU2NjogMHg4NjNGLFxuICAgIDB4RTU2NzogMHg4NjRELFxuICAgIDB4RTU2ODogMHg0RTU1LFxuICAgIDB4RTU2OTogMHg4NjU0LFxuICAgIDB4RTU2QTogMHg4NjVGLFxuICAgIDB4RTU2QjogMHg4NjY3LFxuICAgIDB4RTU2QzogMHg4NjcxLFxuICAgIDB4RTU2RDogMHg4NjkzLFxuICAgIDB4RTU2RTogMHg4NkEzLFxuICAgIDB4RTU2RjogMHg4NkE5LFxuICAgIDB4RTU3MDogMHg4NkFBLFxuICAgIDB4RTU3MTogMHg4NjhCLFxuICAgIDB4RTU3MjogMHg4NjhDLFxuICAgIDB4RTU3MzogMHg4NkI2LFxuICAgIDB4RTU3NDogMHg4NkFGLFxuICAgIDB4RTU3NTogMHg4NkM0LFxuICAgIDB4RTU3NjogMHg4NkM2LFxuICAgIDB4RTU3NzogMHg4NkIwLFxuICAgIDB4RTU3ODogMHg4NkM5LFxuICAgIDB4RTU3OTogMHg4ODIzLFxuICAgIDB4RTU3QTogMHg4NkFCLFxuICAgIDB4RTU3QjogMHg4NkQ0LFxuICAgIDB4RTU3QzogMHg4NkRFLFxuICAgIDB4RTU3RDogMHg4NkU5LFxuICAgIDB4RTU3RTogMHg4NkVDLFxuICAgIDB4RTU4MDogMHg4NkRGLFxuICAgIDB4RTU4MTogMHg4NkRCLFxuICAgIDB4RTU4MjogMHg4NkVGLFxuICAgIDB4RTU4MzogMHg4NzEyLFxuICAgIDB4RTU4NDogMHg4NzA2LFxuICAgIDB4RTU4NTogMHg4NzA4LFxuICAgIDB4RTU4NjogMHg4NzAwLFxuICAgIDB4RTU4NzogMHg4NzAzLFxuICAgIDB4RTU4ODogMHg4NkZCLFxuICAgIDB4RTU4OTogMHg4NzExLFxuICAgIDB4RTU4QTogMHg4NzA5LFxuICAgIDB4RTU4QjogMHg4NzBELFxuICAgIDB4RTU4QzogMHg4NkY5LFxuICAgIDB4RTU4RDogMHg4NzBBLFxuICAgIDB4RTU4RTogMHg4NzM0LFxuICAgIDB4RTU4RjogMHg4NzNGLFxuICAgIDB4RTU5MDogMHg4NzM3LFxuICAgIDB4RTU5MTogMHg4NzNCLFxuICAgIDB4RTU5MjogMHg4NzI1LFxuICAgIDB4RTU5MzogMHg4NzI5LFxuICAgIDB4RTU5NDogMHg4NzFBLFxuICAgIDB4RTU5NTogMHg4NzYwLFxuICAgIDB4RTU5NjogMHg4NzVGLFxuICAgIDB4RTU5NzogMHg4Nzc4LFxuICAgIDB4RTU5ODogMHg4NzRDLFxuICAgIDB4RTU5OTogMHg4NzRFLFxuICAgIDB4RTU5QTogMHg4Nzc0LFxuICAgIDB4RTU5QjogMHg4NzU3LFxuICAgIDB4RTU5QzogMHg4NzY4LFxuICAgIDB4RTU5RDogMHg4NzZFLFxuICAgIDB4RTU5RTogMHg4NzU5LFxuICAgIDB4RTU5RjogMHg4NzUzLFxuICAgIDB4RTVBMDogMHg4NzYzLFxuICAgIDB4RTVBMTogMHg4NzZBLFxuICAgIDB4RTVBMjogMHg4ODA1LFxuICAgIDB4RTVBMzogMHg4N0EyLFxuICAgIDB4RTVBNDogMHg4NzlGLFxuICAgIDB4RTVBNTogMHg4NzgyLFxuICAgIDB4RTVBNjogMHg4N0FGLFxuICAgIDB4RTVBNzogMHg4N0NCLFxuICAgIDB4RTVBODogMHg4N0JELFxuICAgIDB4RTVBOTogMHg4N0MwLFxuICAgIDB4RTVBQTogMHg4N0QwLFxuICAgIDB4RTVBQjogMHg5NkQ2LFxuICAgIDB4RTVBQzogMHg4N0FCLFxuICAgIDB4RTVBRDogMHg4N0M0LFxuICAgIDB4RTVBRTogMHg4N0IzLFxuICAgIDB4RTVBRjogMHg4N0M3LFxuICAgIDB4RTVCMDogMHg4N0M2LFxuICAgIDB4RTVCMTogMHg4N0JCLFxuICAgIDB4RTVCMjogMHg4N0VGLFxuICAgIDB4RTVCMzogMHg4N0YyLFxuICAgIDB4RTVCNDogMHg4N0UwLFxuICAgIDB4RTVCNTogMHg4ODBGLFxuICAgIDB4RTVCNjogMHg4ODBELFxuICAgIDB4RTVCNzogMHg4N0ZFLFxuICAgIDB4RTVCODogMHg4N0Y2LFxuICAgIDB4RTVCOTogMHg4N0Y3LFxuICAgIDB4RTVCQTogMHg4ODBFLFxuICAgIDB4RTVCQjogMHg4N0QyLFxuICAgIDB4RTVCQzogMHg4ODExLFxuICAgIDB4RTVCRDogMHg4ODE2LFxuICAgIDB4RTVCRTogMHg4ODE1LFxuICAgIDB4RTVCRjogMHg4ODIyLFxuICAgIDB4RTVDMDogMHg4ODIxLFxuICAgIDB4RTVDMTogMHg4ODMxLFxuICAgIDB4RTVDMjogMHg4ODM2LFxuICAgIDB4RTVDMzogMHg4ODM5LFxuICAgIDB4RTVDNDogMHg4ODI3LFxuICAgIDB4RTVDNTogMHg4ODNCLFxuICAgIDB4RTVDNjogMHg4ODQ0LFxuICAgIDB4RTVDNzogMHg4ODQyLFxuICAgIDB4RTVDODogMHg4ODUyLFxuICAgIDB4RTVDOTogMHg4ODU5LFxuICAgIDB4RTVDQTogMHg4ODVFLFxuICAgIDB4RTVDQjogMHg4ODYyLFxuICAgIDB4RTVDQzogMHg4ODZCLFxuICAgIDB4RTVDRDogMHg4ODgxLFxuICAgIDB4RTVDRTogMHg4ODdFLFxuICAgIDB4RTVDRjogMHg4ODlFLFxuICAgIDB4RTVEMDogMHg4ODc1LFxuICAgIDB4RTVEMTogMHg4ODdELFxuICAgIDB4RTVEMjogMHg4OEI1LFxuICAgIDB4RTVEMzogMHg4ODcyLFxuICAgIDB4RTVENDogMHg4ODgyLFxuICAgIDB4RTVENTogMHg4ODk3LFxuICAgIDB4RTVENjogMHg4ODkyLFxuICAgIDB4RTVENzogMHg4OEFFLFxuICAgIDB4RTVEODogMHg4ODk5LFxuICAgIDB4RTVEOTogMHg4OEEyLFxuICAgIDB4RTVEQTogMHg4ODhELFxuICAgIDB4RTVEQjogMHg4OEE0LFxuICAgIDB4RTVEQzogMHg4OEIwLFxuICAgIDB4RTVERDogMHg4OEJGLFxuICAgIDB4RTVERTogMHg4OEIxLFxuICAgIDB4RTVERjogMHg4OEMzLFxuICAgIDB4RTVFMDogMHg4OEM0LFxuICAgIDB4RTVFMTogMHg4OEQ0LFxuICAgIDB4RTVFMjogMHg4OEQ4LFxuICAgIDB4RTVFMzogMHg4OEQ5LFxuICAgIDB4RTVFNDogMHg4OERELFxuICAgIDB4RTVFNTogMHg4OEY5LFxuICAgIDB4RTVFNjogMHg4OTAyLFxuICAgIDB4RTVFNzogMHg4OEZDLFxuICAgIDB4RTVFODogMHg4OEY0LFxuICAgIDB4RTVFOTogMHg4OEU4LFxuICAgIDB4RTVFQTogMHg4OEYyLFxuICAgIDB4RTVFQjogMHg4OTA0LFxuICAgIDB4RTVFQzogMHg4OTBDLFxuICAgIDB4RTVFRDogMHg4OTBBLFxuICAgIDB4RTVFRTogMHg4OTEzLFxuICAgIDB4RTVFRjogMHg4OTQzLFxuICAgIDB4RTVGMDogMHg4OTFFLFxuICAgIDB4RTVGMTogMHg4OTI1LFxuICAgIDB4RTVGMjogMHg4OTJBLFxuICAgIDB4RTVGMzogMHg4OTJCLFxuICAgIDB4RTVGNDogMHg4OTQxLFxuICAgIDB4RTVGNTogMHg4OTQ0LFxuICAgIDB4RTVGNjogMHg4OTNCLFxuICAgIDB4RTVGNzogMHg4OTM2LFxuICAgIDB4RTVGODogMHg4OTM4LFxuICAgIDB4RTVGOTogMHg4OTRDLFxuICAgIDB4RTVGQTogMHg4OTFELFxuICAgIDB4RTVGQjogMHg4OTYwLFxuICAgIDB4RTVGQzogMHg4OTVFLFxuICAgIDB4RTY0MDogMHg4OTY2LFxuICAgIDB4RTY0MTogMHg4OTY0LFxuICAgIDB4RTY0MjogMHg4OTZELFxuICAgIDB4RTY0MzogMHg4OTZBLFxuICAgIDB4RTY0NDogMHg4OTZGLFxuICAgIDB4RTY0NTogMHg4OTc0LFxuICAgIDB4RTY0NjogMHg4OTc3LFxuICAgIDB4RTY0NzogMHg4OTdFLFxuICAgIDB4RTY0ODogMHg4OTgzLFxuICAgIDB4RTY0OTogMHg4OTg4LFxuICAgIDB4RTY0QTogMHg4OThBLFxuICAgIDB4RTY0QjogMHg4OTkzLFxuICAgIDB4RTY0QzogMHg4OTk4LFxuICAgIDB4RTY0RDogMHg4OUExLFxuICAgIDB4RTY0RTogMHg4OUE5LFxuICAgIDB4RTY0RjogMHg4OUE2LFxuICAgIDB4RTY1MDogMHg4OUFDLFxuICAgIDB4RTY1MTogMHg4OUFGLFxuICAgIDB4RTY1MjogMHg4OUIyLFxuICAgIDB4RTY1MzogMHg4OUJBLFxuICAgIDB4RTY1NDogMHg4OUJELFxuICAgIDB4RTY1NTogMHg4OUJGLFxuICAgIDB4RTY1NjogMHg4OUMwLFxuICAgIDB4RTY1NzogMHg4OURBLFxuICAgIDB4RTY1ODogMHg4OURDLFxuICAgIDB4RTY1OTogMHg4OURELFxuICAgIDB4RTY1QTogMHg4OUU3LFxuICAgIDB4RTY1QjogMHg4OUY0LFxuICAgIDB4RTY1QzogMHg4OUY4LFxuICAgIDB4RTY1RDogMHg4QTAzLFxuICAgIDB4RTY1RTogMHg4QTE2LFxuICAgIDB4RTY1RjogMHg4QTEwLFxuICAgIDB4RTY2MDogMHg4QTBDLFxuICAgIDB4RTY2MTogMHg4QTFCLFxuICAgIDB4RTY2MjogMHg4QTFELFxuICAgIDB4RTY2MzogMHg4QTI1LFxuICAgIDB4RTY2NDogMHg4QTM2LFxuICAgIDB4RTY2NTogMHg4QTQxLFxuICAgIDB4RTY2NjogMHg4QTVCLFxuICAgIDB4RTY2NzogMHg4QTUyLFxuICAgIDB4RTY2ODogMHg4QTQ2LFxuICAgIDB4RTY2OTogMHg4QTQ4LFxuICAgIDB4RTY2QTogMHg4QTdDLFxuICAgIDB4RTY2QjogMHg4QTZELFxuICAgIDB4RTY2QzogMHg4QTZDLFxuICAgIDB4RTY2RDogMHg4QTYyLFxuICAgIDB4RTY2RTogMHg4QTg1LFxuICAgIDB4RTY2RjogMHg4QTgyLFxuICAgIDB4RTY3MDogMHg4QTg0LFxuICAgIDB4RTY3MTogMHg4QUE4LFxuICAgIDB4RTY3MjogMHg4QUExLFxuICAgIDB4RTY3MzogMHg4QTkxLFxuICAgIDB4RTY3NDogMHg4QUE1LFxuICAgIDB4RTY3NTogMHg4QUE2LFxuICAgIDB4RTY3NjogMHg4QTlBLFxuICAgIDB4RTY3NzogMHg4QUEzLFxuICAgIDB4RTY3ODogMHg4QUM0LFxuICAgIDB4RTY3OTogMHg4QUNELFxuICAgIDB4RTY3QTogMHg4QUMyLFxuICAgIDB4RTY3QjogMHg4QURBLFxuICAgIDB4RTY3QzogMHg4QUVCLFxuICAgIDB4RTY3RDogMHg4QUYzLFxuICAgIDB4RTY3RTogMHg4QUU3LFxuICAgIDB4RTY4MDogMHg4QUU0LFxuICAgIDB4RTY4MTogMHg4QUYxLFxuICAgIDB4RTY4MjogMHg4QjE0LFxuICAgIDB4RTY4MzogMHg4QUUwLFxuICAgIDB4RTY4NDogMHg4QUUyLFxuICAgIDB4RTY4NTogMHg4QUY3LFxuICAgIDB4RTY4NjogMHg4QURFLFxuICAgIDB4RTY4NzogMHg4QURCLFxuICAgIDB4RTY4ODogMHg4QjBDLFxuICAgIDB4RTY4OTogMHg4QjA3LFxuICAgIDB4RTY4QTogMHg4QjFBLFxuICAgIDB4RTY4QjogMHg4QUUxLFxuICAgIDB4RTY4QzogMHg4QjE2LFxuICAgIDB4RTY4RDogMHg4QjEwLFxuICAgIDB4RTY4RTogMHg4QjE3LFxuICAgIDB4RTY4RjogMHg4QjIwLFxuICAgIDB4RTY5MDogMHg4QjMzLFxuICAgIDB4RTY5MTogMHg5N0FCLFxuICAgIDB4RTY5MjogMHg4QjI2LFxuICAgIDB4RTY5MzogMHg4QjJCLFxuICAgIDB4RTY5NDogMHg4QjNFLFxuICAgIDB4RTY5NTogMHg4QjI4LFxuICAgIDB4RTY5NjogMHg4QjQxLFxuICAgIDB4RTY5NzogMHg4QjRDLFxuICAgIDB4RTY5ODogMHg4QjRGLFxuICAgIDB4RTY5OTogMHg4QjRFLFxuICAgIDB4RTY5QTogMHg4QjQ5LFxuICAgIDB4RTY5QjogMHg4QjU2LFxuICAgIDB4RTY5QzogMHg4QjVCLFxuICAgIDB4RTY5RDogMHg4QjVBLFxuICAgIDB4RTY5RTogMHg4QjZCLFxuICAgIDB4RTY5RjogMHg4QjVGLFxuICAgIDB4RTZBMDogMHg4QjZDLFxuICAgIDB4RTZBMTogMHg4QjZGLFxuICAgIDB4RTZBMjogMHg4Qjc0LFxuICAgIDB4RTZBMzogMHg4QjdELFxuICAgIDB4RTZBNDogMHg4QjgwLFxuICAgIDB4RTZBNTogMHg4QjhDLFxuICAgIDB4RTZBNjogMHg4QjhFLFxuICAgIDB4RTZBNzogMHg4QjkyLFxuICAgIDB4RTZBODogMHg4QjkzLFxuICAgIDB4RTZBOTogMHg4Qjk2LFxuICAgIDB4RTZBQTogMHg4Qjk5LFxuICAgIDB4RTZBQjogMHg4QjlBLFxuICAgIDB4RTZBQzogMHg4QzNBLFxuICAgIDB4RTZBRDogMHg4QzQxLFxuICAgIDB4RTZBRTogMHg4QzNGLFxuICAgIDB4RTZBRjogMHg4QzQ4LFxuICAgIDB4RTZCMDogMHg4QzRDLFxuICAgIDB4RTZCMTogMHg4QzRFLFxuICAgIDB4RTZCMjogMHg4QzUwLFxuICAgIDB4RTZCMzogMHg4QzU1LFxuICAgIDB4RTZCNDogMHg4QzYyLFxuICAgIDB4RTZCNTogMHg4QzZDLFxuICAgIDB4RTZCNjogMHg4Qzc4LFxuICAgIDB4RTZCNzogMHg4QzdBLFxuICAgIDB4RTZCODogMHg4QzgyLFxuICAgIDB4RTZCOTogMHg4Qzg5LFxuICAgIDB4RTZCQTogMHg4Qzg1LFxuICAgIDB4RTZCQjogMHg4QzhBLFxuICAgIDB4RTZCQzogMHg4QzhELFxuICAgIDB4RTZCRDogMHg4QzhFLFxuICAgIDB4RTZCRTogMHg4Qzk0LFxuICAgIDB4RTZCRjogMHg4QzdDLFxuICAgIDB4RTZDMDogMHg4Qzk4LFxuICAgIDB4RTZDMTogMHg2MjFELFxuICAgIDB4RTZDMjogMHg4Q0FELFxuICAgIDB4RTZDMzogMHg4Q0FBLFxuICAgIDB4RTZDNDogMHg4Q0JELFxuICAgIDB4RTZDNTogMHg4Q0IyLFxuICAgIDB4RTZDNjogMHg4Q0IzLFxuICAgIDB4RTZDNzogMHg4Q0FFLFxuICAgIDB4RTZDODogMHg4Q0I2LFxuICAgIDB4RTZDOTogMHg4Q0M4LFxuICAgIDB4RTZDQTogMHg4Q0MxLFxuICAgIDB4RTZDQjogMHg4Q0U0LFxuICAgIDB4RTZDQzogMHg4Q0UzLFxuICAgIDB4RTZDRDogMHg4Q0RBLFxuICAgIDB4RTZDRTogMHg4Q0ZELFxuICAgIDB4RTZDRjogMHg4Q0ZBLFxuICAgIDB4RTZEMDogMHg4Q0ZCLFxuICAgIDB4RTZEMTogMHg4RDA0LFxuICAgIDB4RTZEMjogMHg4RDA1LFxuICAgIDB4RTZEMzogMHg4RDBBLFxuICAgIDB4RTZENDogMHg4RDA3LFxuICAgIDB4RTZENTogMHg4RDBGLFxuICAgIDB4RTZENjogMHg4RDBELFxuICAgIDB4RTZENzogMHg4RDEwLFxuICAgIDB4RTZEODogMHg5RjRFLFxuICAgIDB4RTZEOTogMHg4RDEzLFxuICAgIDB4RTZEQTogMHg4Q0NELFxuICAgIDB4RTZEQjogMHg4RDE0LFxuICAgIDB4RTZEQzogMHg4RDE2LFxuICAgIDB4RTZERDogMHg4RDY3LFxuICAgIDB4RTZERTogMHg4RDZELFxuICAgIDB4RTZERjogMHg4RDcxLFxuICAgIDB4RTZFMDogMHg4RDczLFxuICAgIDB4RTZFMTogMHg4RDgxLFxuICAgIDB4RTZFMjogMHg4RDk5LFxuICAgIDB4RTZFMzogMHg4REMyLFxuICAgIDB4RTZFNDogMHg4REJFLFxuICAgIDB4RTZFNTogMHg4REJBLFxuICAgIDB4RTZFNjogMHg4RENGLFxuICAgIDB4RTZFNzogMHg4RERBLFxuICAgIDB4RTZFODogMHg4REQ2LFxuICAgIDB4RTZFOTogMHg4RENDLFxuICAgIDB4RTZFQTogMHg4RERCLFxuICAgIDB4RTZFQjogMHg4RENCLFxuICAgIDB4RTZFQzogMHg4REVBLFxuICAgIDB4RTZFRDogMHg4REVCLFxuICAgIDB4RTZFRTogMHg4RERGLFxuICAgIDB4RTZFRjogMHg4REUzLFxuICAgIDB4RTZGMDogMHg4REZDLFxuICAgIDB4RTZGMTogMHg4RTA4LFxuICAgIDB4RTZGMjogMHg4RTA5LFxuICAgIDB4RTZGMzogMHg4REZGLFxuICAgIDB4RTZGNDogMHg4RTFELFxuICAgIDB4RTZGNTogMHg4RTFFLFxuICAgIDB4RTZGNjogMHg4RTEwLFxuICAgIDB4RTZGNzogMHg4RTFGLFxuICAgIDB4RTZGODogMHg4RTQyLFxuICAgIDB4RTZGOTogMHg4RTM1LFxuICAgIDB4RTZGQTogMHg4RTMwLFxuICAgIDB4RTZGQjogMHg4RTM0LFxuICAgIDB4RTZGQzogMHg4RTRBLFxuICAgIDB4RTc0MDogMHg4RTQ3LFxuICAgIDB4RTc0MTogMHg4RTQ5LFxuICAgIDB4RTc0MjogMHg4RTRDLFxuICAgIDB4RTc0MzogMHg4RTUwLFxuICAgIDB4RTc0NDogMHg4RTQ4LFxuICAgIDB4RTc0NTogMHg4RTU5LFxuICAgIDB4RTc0NjogMHg4RTY0LFxuICAgIDB4RTc0NzogMHg4RTYwLFxuICAgIDB4RTc0ODogMHg4RTJBLFxuICAgIDB4RTc0OTogMHg4RTYzLFxuICAgIDB4RTc0QTogMHg4RTU1LFxuICAgIDB4RTc0QjogMHg4RTc2LFxuICAgIDB4RTc0QzogMHg4RTcyLFxuICAgIDB4RTc0RDogMHg4RTdDLFxuICAgIDB4RTc0RTogMHg4RTgxLFxuICAgIDB4RTc0RjogMHg4RTg3LFxuICAgIDB4RTc1MDogMHg4RTg1LFxuICAgIDB4RTc1MTogMHg4RTg0LFxuICAgIDB4RTc1MjogMHg4RThCLFxuICAgIDB4RTc1MzogMHg4RThBLFxuICAgIDB4RTc1NDogMHg4RTkzLFxuICAgIDB4RTc1NTogMHg4RTkxLFxuICAgIDB4RTc1NjogMHg4RTk0LFxuICAgIDB4RTc1NzogMHg4RTk5LFxuICAgIDB4RTc1ODogMHg4RUFBLFxuICAgIDB4RTc1OTogMHg4RUExLFxuICAgIDB4RTc1QTogMHg4RUFDLFxuICAgIDB4RTc1QjogMHg4RUIwLFxuICAgIDB4RTc1QzogMHg4RUM2LFxuICAgIDB4RTc1RDogMHg4RUIxLFxuICAgIDB4RTc1RTogMHg4RUJFLFxuICAgIDB4RTc1RjogMHg4RUM1LFxuICAgIDB4RTc2MDogMHg4RUM4LFxuICAgIDB4RTc2MTogMHg4RUNCLFxuICAgIDB4RTc2MjogMHg4RURCLFxuICAgIDB4RTc2MzogMHg4RUUzLFxuICAgIDB4RTc2NDogMHg4RUZDLFxuICAgIDB4RTc2NTogMHg4RUZCLFxuICAgIDB4RTc2NjogMHg4RUVCLFxuICAgIDB4RTc2NzogMHg4RUZFLFxuICAgIDB4RTc2ODogMHg4RjBBLFxuICAgIDB4RTc2OTogMHg4RjA1LFxuICAgIDB4RTc2QTogMHg4RjE1LFxuICAgIDB4RTc2QjogMHg4RjEyLFxuICAgIDB4RTc2QzogMHg4RjE5LFxuICAgIDB4RTc2RDogMHg4RjEzLFxuICAgIDB4RTc2RTogMHg4RjFDLFxuICAgIDB4RTc2RjogMHg4RjFGLFxuICAgIDB4RTc3MDogMHg4RjFCLFxuICAgIDB4RTc3MTogMHg4RjBDLFxuICAgIDB4RTc3MjogMHg4RjI2LFxuICAgIDB4RTc3MzogMHg4RjMzLFxuICAgIDB4RTc3NDogMHg4RjNCLFxuICAgIDB4RTc3NTogMHg4RjM5LFxuICAgIDB4RTc3NjogMHg4RjQ1LFxuICAgIDB4RTc3NzogMHg4RjQyLFxuICAgIDB4RTc3ODogMHg4RjNFLFxuICAgIDB4RTc3OTogMHg4RjRDLFxuICAgIDB4RTc3QTogMHg4RjQ5LFxuICAgIDB4RTc3QjogMHg4RjQ2LFxuICAgIDB4RTc3QzogMHg4RjRFLFxuICAgIDB4RTc3RDogMHg4RjU3LFxuICAgIDB4RTc3RTogMHg4RjVDLFxuICAgIDB4RTc4MDogMHg4RjYyLFxuICAgIDB4RTc4MTogMHg4RjYzLFxuICAgIDB4RTc4MjogMHg4RjY0LFxuICAgIDB4RTc4MzogMHg4RjlDLFxuICAgIDB4RTc4NDogMHg4RjlGLFxuICAgIDB4RTc4NTogMHg4RkEzLFxuICAgIDB4RTc4NjogMHg4RkFELFxuICAgIDB4RTc4NzogMHg4RkFGLFxuICAgIDB4RTc4ODogMHg4RkI3LFxuICAgIDB4RTc4OTogMHg4RkRBLFxuICAgIDB4RTc4QTogMHg4RkU1LFxuICAgIDB4RTc4QjogMHg4RkUyLFxuICAgIDB4RTc4QzogMHg4RkVBLFxuICAgIDB4RTc4RDogMHg4RkVGLFxuICAgIDB4RTc4RTogMHg5MDg3LFxuICAgIDB4RTc4RjogMHg4RkY0LFxuICAgIDB4RTc5MDogMHg5MDA1LFxuICAgIDB4RTc5MTogMHg4RkY5LFxuICAgIDB4RTc5MjogMHg4RkZBLFxuICAgIDB4RTc5MzogMHg5MDExLFxuICAgIDB4RTc5NDogMHg5MDE1LFxuICAgIDB4RTc5NTogMHg5MDIxLFxuICAgIDB4RTc5NjogMHg5MDBELFxuICAgIDB4RTc5NzogMHg5MDFFLFxuICAgIDB4RTc5ODogMHg5MDE2LFxuICAgIDB4RTc5OTogMHg5MDBCLFxuICAgIDB4RTc5QTogMHg5MDI3LFxuICAgIDB4RTc5QjogMHg5MDM2LFxuICAgIDB4RTc5QzogMHg5MDM1LFxuICAgIDB4RTc5RDogMHg5MDM5LFxuICAgIDB4RTc5RTogMHg4RkY4LFxuICAgIDB4RTc5RjogMHg5MDRGLFxuICAgIDB4RTdBMDogMHg5MDUwLFxuICAgIDB4RTdBMTogMHg5MDUxLFxuICAgIDB4RTdBMjogMHg5MDUyLFxuICAgIDB4RTdBMzogMHg5MDBFLFxuICAgIDB4RTdBNDogMHg5MDQ5LFxuICAgIDB4RTdBNTogMHg5MDNFLFxuICAgIDB4RTdBNjogMHg5MDU2LFxuICAgIDB4RTdBNzogMHg5MDU4LFxuICAgIDB4RTdBODogMHg5MDVFLFxuICAgIDB4RTdBOTogMHg5MDY4LFxuICAgIDB4RTdBQTogMHg5MDZGLFxuICAgIDB4RTdBQjogMHg5MDc2LFxuICAgIDB4RTdBQzogMHg5NkE4LFxuICAgIDB4RTdBRDogMHg5MDcyLFxuICAgIDB4RTdBRTogMHg5MDgyLFxuICAgIDB4RTdBRjogMHg5MDdELFxuICAgIDB4RTdCMDogMHg5MDgxLFxuICAgIDB4RTdCMTogMHg5MDgwLFxuICAgIDB4RTdCMjogMHg5MDhBLFxuICAgIDB4RTdCMzogMHg5MDg5LFxuICAgIDB4RTdCNDogMHg5MDhGLFxuICAgIDB4RTdCNTogMHg5MEE4LFxuICAgIDB4RTdCNjogMHg5MEFGLFxuICAgIDB4RTdCNzogMHg5MEIxLFxuICAgIDB4RTdCODogMHg5MEI1LFxuICAgIDB4RTdCOTogMHg5MEUyLFxuICAgIDB4RTdCQTogMHg5MEU0LFxuICAgIDB4RTdCQjogMHg2MjQ4LFxuICAgIDB4RTdCQzogMHg5MERCLFxuICAgIDB4RTdCRDogMHg5MTAyLFxuICAgIDB4RTdCRTogMHg5MTEyLFxuICAgIDB4RTdCRjogMHg5MTE5LFxuICAgIDB4RTdDMDogMHg5MTMyLFxuICAgIDB4RTdDMTogMHg5MTMwLFxuICAgIDB4RTdDMjogMHg5MTRBLFxuICAgIDB4RTdDMzogMHg5MTU2LFxuICAgIDB4RTdDNDogMHg5MTU4LFxuICAgIDB4RTdDNTogMHg5MTYzLFxuICAgIDB4RTdDNjogMHg5MTY1LFxuICAgIDB4RTdDNzogMHg5MTY5LFxuICAgIDB4RTdDODogMHg5MTczLFxuICAgIDB4RTdDOTogMHg5MTcyLFxuICAgIDB4RTdDQTogMHg5MThCLFxuICAgIDB4RTdDQjogMHg5MTg5LFxuICAgIDB4RTdDQzogMHg5MTgyLFxuICAgIDB4RTdDRDogMHg5MUEyLFxuICAgIDB4RTdDRTogMHg5MUFCLFxuICAgIDB4RTdDRjogMHg5MUFGLFxuICAgIDB4RTdEMDogMHg5MUFBLFxuICAgIDB4RTdEMTogMHg5MUI1LFxuICAgIDB4RTdEMjogMHg5MUI0LFxuICAgIDB4RTdEMzogMHg5MUJBLFxuICAgIDB4RTdENDogMHg5MUMwLFxuICAgIDB4RTdENTogMHg5MUMxLFxuICAgIDB4RTdENjogMHg5MUM5LFxuICAgIDB4RTdENzogMHg5MUNCLFxuICAgIDB4RTdEODogMHg5MUQwLFxuICAgIDB4RTdEOTogMHg5MUQ2LFxuICAgIDB4RTdEQTogMHg5MURGLFxuICAgIDB4RTdEQjogMHg5MUUxLFxuICAgIDB4RTdEQzogMHg5MURCLFxuICAgIDB4RTdERDogMHg5MUZDLFxuICAgIDB4RTdERTogMHg5MUY1LFxuICAgIDB4RTdERjogMHg5MUY2LFxuICAgIDB4RTdFMDogMHg5MjFFLFxuICAgIDB4RTdFMTogMHg5MUZGLFxuICAgIDB4RTdFMjogMHg5MjE0LFxuICAgIDB4RTdFMzogMHg5MjJDLFxuICAgIDB4RTdFNDogMHg5MjE1LFxuICAgIDB4RTdFNTogMHg5MjExLFxuICAgIDB4RTdFNjogMHg5MjVFLFxuICAgIDB4RTdFNzogMHg5MjU3LFxuICAgIDB4RTdFODogMHg5MjQ1LFxuICAgIDB4RTdFOTogMHg5MjQ5LFxuICAgIDB4RTdFQTogMHg5MjY0LFxuICAgIDB4RTdFQjogMHg5MjQ4LFxuICAgIDB4RTdFQzogMHg5Mjk1LFxuICAgIDB4RTdFRDogMHg5MjNGLFxuICAgIDB4RTdFRTogMHg5MjRCLFxuICAgIDB4RTdFRjogMHg5MjUwLFxuICAgIDB4RTdGMDogMHg5MjlDLFxuICAgIDB4RTdGMTogMHg5Mjk2LFxuICAgIDB4RTdGMjogMHg5MjkzLFxuICAgIDB4RTdGMzogMHg5MjlCLFxuICAgIDB4RTdGNDogMHg5MjVBLFxuICAgIDB4RTdGNTogMHg5MkNGLFxuICAgIDB4RTdGNjogMHg5MkI5LFxuICAgIDB4RTdGNzogMHg5MkI3LFxuICAgIDB4RTdGODogMHg5MkU5LFxuICAgIDB4RTdGOTogMHg5MzBGLFxuICAgIDB4RTdGQTogMHg5MkZBLFxuICAgIDB4RTdGQjogMHg5MzQ0LFxuICAgIDB4RTdGQzogMHg5MzJFLFxuICAgIDB4RTg0MDogMHg5MzE5LFxuICAgIDB4RTg0MTogMHg5MzIyLFxuICAgIDB4RTg0MjogMHg5MzFBLFxuICAgIDB4RTg0MzogMHg5MzIzLFxuICAgIDB4RTg0NDogMHg5MzNBLFxuICAgIDB4RTg0NTogMHg5MzM1LFxuICAgIDB4RTg0NjogMHg5MzNCLFxuICAgIDB4RTg0NzogMHg5MzVDLFxuICAgIDB4RTg0ODogMHg5MzYwLFxuICAgIDB4RTg0OTogMHg5MzdDLFxuICAgIDB4RTg0QTogMHg5MzZFLFxuICAgIDB4RTg0QjogMHg5MzU2LFxuICAgIDB4RTg0QzogMHg5M0IwLFxuICAgIDB4RTg0RDogMHg5M0FDLFxuICAgIDB4RTg0RTogMHg5M0FELFxuICAgIDB4RTg0RjogMHg5Mzk0LFxuICAgIDB4RTg1MDogMHg5M0I5LFxuICAgIDB4RTg1MTogMHg5M0Q2LFxuICAgIDB4RTg1MjogMHg5M0Q3LFxuICAgIDB4RTg1MzogMHg5M0U4LFxuICAgIDB4RTg1NDogMHg5M0U1LFxuICAgIDB4RTg1NTogMHg5M0Q4LFxuICAgIDB4RTg1NjogMHg5M0MzLFxuICAgIDB4RTg1NzogMHg5M0RELFxuICAgIDB4RTg1ODogMHg5M0QwLFxuICAgIDB4RTg1OTogMHg5M0M4LFxuICAgIDB4RTg1QTogMHg5M0U0LFxuICAgIDB4RTg1QjogMHg5NDFBLFxuICAgIDB4RTg1QzogMHg5NDE0LFxuICAgIDB4RTg1RDogMHg5NDEzLFxuICAgIDB4RTg1RTogMHg5NDAzLFxuICAgIDB4RTg1RjogMHg5NDA3LFxuICAgIDB4RTg2MDogMHg5NDEwLFxuICAgIDB4RTg2MTogMHg5NDM2LFxuICAgIDB4RTg2MjogMHg5NDJCLFxuICAgIDB4RTg2MzogMHg5NDM1LFxuICAgIDB4RTg2NDogMHg5NDIxLFxuICAgIDB4RTg2NTogMHg5NDNBLFxuICAgIDB4RTg2NjogMHg5NDQxLFxuICAgIDB4RTg2NzogMHg5NDUyLFxuICAgIDB4RTg2ODogMHg5NDQ0LFxuICAgIDB4RTg2OTogMHg5NDVCLFxuICAgIDB4RTg2QTogMHg5NDYwLFxuICAgIDB4RTg2QjogMHg5NDYyLFxuICAgIDB4RTg2QzogMHg5NDVFLFxuICAgIDB4RTg2RDogMHg5NDZBLFxuICAgIDB4RTg2RTogMHg5MjI5LFxuICAgIDB4RTg2RjogMHg5NDcwLFxuICAgIDB4RTg3MDogMHg5NDc1LFxuICAgIDB4RTg3MTogMHg5NDc3LFxuICAgIDB4RTg3MjogMHg5NDdELFxuICAgIDB4RTg3MzogMHg5NDVBLFxuICAgIDB4RTg3NDogMHg5NDdDLFxuICAgIDB4RTg3NTogMHg5NDdFLFxuICAgIDB4RTg3NjogMHg5NDgxLFxuICAgIDB4RTg3NzogMHg5NDdGLFxuICAgIDB4RTg3ODogMHg5NTgyLFxuICAgIDB4RTg3OTogMHg5NTg3LFxuICAgIDB4RTg3QTogMHg5NThBLFxuICAgIDB4RTg3QjogMHg5NTk0LFxuICAgIDB4RTg3QzogMHg5NTk2LFxuICAgIDB4RTg3RDogMHg5NTk4LFxuICAgIDB4RTg3RTogMHg5NTk5LFxuICAgIDB4RTg4MDogMHg5NUEwLFxuICAgIDB4RTg4MTogMHg5NUE4LFxuICAgIDB4RTg4MjogMHg5NUE3LFxuICAgIDB4RTg4MzogMHg5NUFELFxuICAgIDB4RTg4NDogMHg5NUJDLFxuICAgIDB4RTg4NTogMHg5NUJCLFxuICAgIDB4RTg4NjogMHg5NUI5LFxuICAgIDB4RTg4NzogMHg5NUJFLFxuICAgIDB4RTg4ODogMHg5NUNBLFxuICAgIDB4RTg4OTogMHg2RkY2LFxuICAgIDB4RTg4QTogMHg5NUMzLFxuICAgIDB4RTg4QjogMHg5NUNELFxuICAgIDB4RTg4QzogMHg5NUNDLFxuICAgIDB4RTg4RDogMHg5NUQ1LFxuICAgIDB4RTg4RTogMHg5NUQ0LFxuICAgIDB4RTg4RjogMHg5NUQ2LFxuICAgIDB4RTg5MDogMHg5NURDLFxuICAgIDB4RTg5MTogMHg5NUUxLFxuICAgIDB4RTg5MjogMHg5NUU1LFxuICAgIDB4RTg5MzogMHg5NUUyLFxuICAgIDB4RTg5NDogMHg5NjIxLFxuICAgIDB4RTg5NTogMHg5NjI4LFxuICAgIDB4RTg5NjogMHg5NjJFLFxuICAgIDB4RTg5NzogMHg5NjJGLFxuICAgIDB4RTg5ODogMHg5NjQyLFxuICAgIDB4RTg5OTogMHg5NjRDLFxuICAgIDB4RTg5QTogMHg5NjRGLFxuICAgIDB4RTg5QjogMHg5NjRCLFxuICAgIDB4RTg5QzogMHg5Njc3LFxuICAgIDB4RTg5RDogMHg5NjVDLFxuICAgIDB4RTg5RTogMHg5NjVFLFxuICAgIDB4RTg5RjogMHg5NjVELFxuICAgIDB4RThBMDogMHg5NjVGLFxuICAgIDB4RThBMTogMHg5NjY2LFxuICAgIDB4RThBMjogMHg5NjcyLFxuICAgIDB4RThBMzogMHg5NjZDLFxuICAgIDB4RThBNDogMHg5NjhELFxuICAgIDB4RThBNTogMHg5Njk4LFxuICAgIDB4RThBNjogMHg5Njk1LFxuICAgIDB4RThBNzogMHg5Njk3LFxuICAgIDB4RThBODogMHg5NkFBLFxuICAgIDB4RThBOTogMHg5NkE3LFxuICAgIDB4RThBQTogMHg5NkIxLFxuICAgIDB4RThBQjogMHg5NkIyLFxuICAgIDB4RThBQzogMHg5NkIwLFxuICAgIDB4RThBRDogMHg5NkI0LFxuICAgIDB4RThBRTogMHg5NkI2LFxuICAgIDB4RThBRjogMHg5NkI4LFxuICAgIDB4RThCMDogMHg5NkI5LFxuICAgIDB4RThCMTogMHg5NkNFLFxuICAgIDB4RThCMjogMHg5NkNCLFxuICAgIDB4RThCMzogMHg5NkM5LFxuICAgIDB4RThCNDogMHg5NkNELFxuICAgIDB4RThCNTogMHg4OTRELFxuICAgIDB4RThCNjogMHg5NkRDLFxuICAgIDB4RThCNzogMHg5NzBELFxuICAgIDB4RThCODogMHg5NkQ1LFxuICAgIDB4RThCOTogMHg5NkY5LFxuICAgIDB4RThCQTogMHg5NzA0LFxuICAgIDB4RThCQjogMHg5NzA2LFxuICAgIDB4RThCQzogMHg5NzA4LFxuICAgIDB4RThCRDogMHg5NzEzLFxuICAgIDB4RThCRTogMHg5NzBFLFxuICAgIDB4RThCRjogMHg5NzExLFxuICAgIDB4RThDMDogMHg5NzBGLFxuICAgIDB4RThDMTogMHg5NzE2LFxuICAgIDB4RThDMjogMHg5NzE5LFxuICAgIDB4RThDMzogMHg5NzI0LFxuICAgIDB4RThDNDogMHg5NzJBLFxuICAgIDB4RThDNTogMHg5NzMwLFxuICAgIDB4RThDNjogMHg5NzM5LFxuICAgIDB4RThDNzogMHg5NzNELFxuICAgIDB4RThDODogMHg5NzNFLFxuICAgIDB4RThDOTogMHg5NzQ0LFxuICAgIDB4RThDQTogMHg5NzQ2LFxuICAgIDB4RThDQjogMHg5NzQ4LFxuICAgIDB4RThDQzogMHg5NzQyLFxuICAgIDB4RThDRDogMHg5NzQ5LFxuICAgIDB4RThDRTogMHg5NzVDLFxuICAgIDB4RThDRjogMHg5NzYwLFxuICAgIDB4RThEMDogMHg5NzY0LFxuICAgIDB4RThEMTogMHg5NzY2LFxuICAgIDB4RThEMjogMHg5NzY4LFxuICAgIDB4RThEMzogMHg1MkQyLFxuICAgIDB4RThENDogMHg5NzZCLFxuICAgIDB4RThENTogMHg5NzcxLFxuICAgIDB4RThENjogMHg5Nzc5LFxuICAgIDB4RThENzogMHg5Nzg1LFxuICAgIDB4RThEODogMHg5NzdDLFxuICAgIDB4RThEOTogMHg5NzgxLFxuICAgIDB4RThEQTogMHg5NzdBLFxuICAgIDB4RThEQjogMHg5Nzg2LFxuICAgIDB4RThEQzogMHg5NzhCLFxuICAgIDB4RThERDogMHg5NzhGLFxuICAgIDB4RThERTogMHg5NzkwLFxuICAgIDB4RThERjogMHg5NzlDLFxuICAgIDB4RThFMDogMHg5N0E4LFxuICAgIDB4RThFMTogMHg5N0E2LFxuICAgIDB4RThFMjogMHg5N0EzLFxuICAgIDB4RThFMzogMHg5N0IzLFxuICAgIDB4RThFNDogMHg5N0I0LFxuICAgIDB4RThFNTogMHg5N0MzLFxuICAgIDB4RThFNjogMHg5N0M2LFxuICAgIDB4RThFNzogMHg5N0M4LFxuICAgIDB4RThFODogMHg5N0NCLFxuICAgIDB4RThFOTogMHg5N0RDLFxuICAgIDB4RThFQTogMHg5N0VELFxuICAgIDB4RThFQjogMHg5RjRGLFxuICAgIDB4RThFQzogMHg5N0YyLFxuICAgIDB4RThFRDogMHg3QURGLFxuICAgIDB4RThFRTogMHg5N0Y2LFxuICAgIDB4RThFRjogMHg5N0Y1LFxuICAgIDB4RThGMDogMHg5ODBGLFxuICAgIDB4RThGMTogMHg5ODBDLFxuICAgIDB4RThGMjogMHg5ODM4LFxuICAgIDB4RThGMzogMHg5ODI0LFxuICAgIDB4RThGNDogMHg5ODIxLFxuICAgIDB4RThGNTogMHg5ODM3LFxuICAgIDB4RThGNjogMHg5ODNELFxuICAgIDB4RThGNzogMHg5ODQ2LFxuICAgIDB4RThGODogMHg5ODRGLFxuICAgIDB4RThGOTogMHg5ODRCLFxuICAgIDB4RThGQTogMHg5ODZCLFxuICAgIDB4RThGQjogMHg5ODZGLFxuICAgIDB4RThGQzogMHg5ODcwLFxuICAgIDB4RTk0MDogMHg5ODcxLFxuICAgIDB4RTk0MTogMHg5ODc0LFxuICAgIDB4RTk0MjogMHg5ODczLFxuICAgIDB4RTk0MzogMHg5OEFBLFxuICAgIDB4RTk0NDogMHg5OEFGLFxuICAgIDB4RTk0NTogMHg5OEIxLFxuICAgIDB4RTk0NjogMHg5OEI2LFxuICAgIDB4RTk0NzogMHg5OEM0LFxuICAgIDB4RTk0ODogMHg5OEMzLFxuICAgIDB4RTk0OTogMHg5OEM2LFxuICAgIDB4RTk0QTogMHg5OEU5LFxuICAgIDB4RTk0QjogMHg5OEVCLFxuICAgIDB4RTk0QzogMHg5OTAzLFxuICAgIDB4RTk0RDogMHg5OTA5LFxuICAgIDB4RTk0RTogMHg5OTEyLFxuICAgIDB4RTk0RjogMHg5OTE0LFxuICAgIDB4RTk1MDogMHg5OTE4LFxuICAgIDB4RTk1MTogMHg5OTIxLFxuICAgIDB4RTk1MjogMHg5OTFELFxuICAgIDB4RTk1MzogMHg5OTFFLFxuICAgIDB4RTk1NDogMHg5OTI0LFxuICAgIDB4RTk1NTogMHg5OTIwLFxuICAgIDB4RTk1NjogMHg5OTJDLFxuICAgIDB4RTk1NzogMHg5OTJFLFxuICAgIDB4RTk1ODogMHg5OTNELFxuICAgIDB4RTk1OTogMHg5OTNFLFxuICAgIDB4RTk1QTogMHg5OTQyLFxuICAgIDB4RTk1QjogMHg5OTQ5LFxuICAgIDB4RTk1QzogMHg5OTQ1LFxuICAgIDB4RTk1RDogMHg5OTUwLFxuICAgIDB4RTk1RTogMHg5OTRCLFxuICAgIDB4RTk1RjogMHg5OTUxLFxuICAgIDB4RTk2MDogMHg5OTUyLFxuICAgIDB4RTk2MTogMHg5OTRDLFxuICAgIDB4RTk2MjogMHg5OTU1LFxuICAgIDB4RTk2MzogMHg5OTk3LFxuICAgIDB4RTk2NDogMHg5OTk4LFxuICAgIDB4RTk2NTogMHg5OUE1LFxuICAgIDB4RTk2NjogMHg5OUFELFxuICAgIDB4RTk2NzogMHg5OUFFLFxuICAgIDB4RTk2ODogMHg5OUJDLFxuICAgIDB4RTk2OTogMHg5OURGLFxuICAgIDB4RTk2QTogMHg5OURCLFxuICAgIDB4RTk2QjogMHg5OURELFxuICAgIDB4RTk2QzogMHg5OUQ4LFxuICAgIDB4RTk2RDogMHg5OUQxLFxuICAgIDB4RTk2RTogMHg5OUVELFxuICAgIDB4RTk2RjogMHg5OUVFLFxuICAgIDB4RTk3MDogMHg5OUYxLFxuICAgIDB4RTk3MTogMHg5OUYyLFxuICAgIDB4RTk3MjogMHg5OUZCLFxuICAgIDB4RTk3MzogMHg5OUY4LFxuICAgIDB4RTk3NDogMHg5QTAxLFxuICAgIDB4RTk3NTogMHg5QTBGLFxuICAgIDB4RTk3NjogMHg5QTA1LFxuICAgIDB4RTk3NzogMHg5OUUyLFxuICAgIDB4RTk3ODogMHg5QTE5LFxuICAgIDB4RTk3OTogMHg5QTJCLFxuICAgIDB4RTk3QTogMHg5QTM3LFxuICAgIDB4RTk3QjogMHg5QTQ1LFxuICAgIDB4RTk3QzogMHg5QTQyLFxuICAgIDB4RTk3RDogMHg5QTQwLFxuICAgIDB4RTk3RTogMHg5QTQzLFxuICAgIDB4RTk4MDogMHg5QTNFLFxuICAgIDB4RTk4MTogMHg5QTU1LFxuICAgIDB4RTk4MjogMHg5QTRELFxuICAgIDB4RTk4MzogMHg5QTVCLFxuICAgIDB4RTk4NDogMHg5QTU3LFxuICAgIDB4RTk4NTogMHg5QTVGLFxuICAgIDB4RTk4NjogMHg5QTYyLFxuICAgIDB4RTk4NzogMHg5QTY1LFxuICAgIDB4RTk4ODogMHg5QTY0LFxuICAgIDB4RTk4OTogMHg5QTY5LFxuICAgIDB4RTk4QTogMHg5QTZCLFxuICAgIDB4RTk4QjogMHg5QTZBLFxuICAgIDB4RTk4QzogMHg5QUFELFxuICAgIDB4RTk4RDogMHg5QUIwLFxuICAgIDB4RTk4RTogMHg5QUJDLFxuICAgIDB4RTk4RjogMHg5QUMwLFxuICAgIDB4RTk5MDogMHg5QUNGLFxuICAgIDB4RTk5MTogMHg5QUQxLFxuICAgIDB4RTk5MjogMHg5QUQzLFxuICAgIDB4RTk5MzogMHg5QUQ0LFxuICAgIDB4RTk5NDogMHg5QURFLFxuICAgIDB4RTk5NTogMHg5QURGLFxuICAgIDB4RTk5NjogMHg5QUUyLFxuICAgIDB4RTk5NzogMHg5QUUzLFxuICAgIDB4RTk5ODogMHg5QUU2LFxuICAgIDB4RTk5OTogMHg5QUVGLFxuICAgIDB4RTk5QTogMHg5QUVCLFxuICAgIDB4RTk5QjogMHg5QUVFLFxuICAgIDB4RTk5QzogMHg5QUY0LFxuICAgIDB4RTk5RDogMHg5QUYxLFxuICAgIDB4RTk5RTogMHg5QUY3LFxuICAgIDB4RTk5RjogMHg5QUZCLFxuICAgIDB4RTlBMDogMHg5QjA2LFxuICAgIDB4RTlBMTogMHg5QjE4LFxuICAgIDB4RTlBMjogMHg5QjFBLFxuICAgIDB4RTlBMzogMHg5QjFGLFxuICAgIDB4RTlBNDogMHg5QjIyLFxuICAgIDB4RTlBNTogMHg5QjIzLFxuICAgIDB4RTlBNjogMHg5QjI1LFxuICAgIDB4RTlBNzogMHg5QjI3LFxuICAgIDB4RTlBODogMHg5QjI4LFxuICAgIDB4RTlBOTogMHg5QjI5LFxuICAgIDB4RTlBQTogMHg5QjJBLFxuICAgIDB4RTlBQjogMHg5QjJFLFxuICAgIDB4RTlBQzogMHg5QjJGLFxuICAgIDB4RTlBRDogMHg5QjMyLFxuICAgIDB4RTlBRTogMHg5QjQ0LFxuICAgIDB4RTlBRjogMHg5QjQzLFxuICAgIDB4RTlCMDogMHg5QjRGLFxuICAgIDB4RTlCMTogMHg5QjRELFxuICAgIDB4RTlCMjogMHg5QjRFLFxuICAgIDB4RTlCMzogMHg5QjUxLFxuICAgIDB4RTlCNDogMHg5QjU4LFxuICAgIDB4RTlCNTogMHg5Qjc0LFxuICAgIDB4RTlCNjogMHg5QjkzLFxuICAgIDB4RTlCNzogMHg5QjgzLFxuICAgIDB4RTlCODogMHg5QjkxLFxuICAgIDB4RTlCOTogMHg5Qjk2LFxuICAgIDB4RTlCQTogMHg5Qjk3LFxuICAgIDB4RTlCQjogMHg5QjlGLFxuICAgIDB4RTlCQzogMHg5QkEwLFxuICAgIDB4RTlCRDogMHg5QkE4LFxuICAgIDB4RTlCRTogMHg5QkI0LFxuICAgIDB4RTlCRjogMHg5QkMwLFxuICAgIDB4RTlDMDogMHg5QkNBLFxuICAgIDB4RTlDMTogMHg5QkI5LFxuICAgIDB4RTlDMjogMHg5QkM2LFxuICAgIDB4RTlDMzogMHg5QkNGLFxuICAgIDB4RTlDNDogMHg5QkQxLFxuICAgIDB4RTlDNTogMHg5QkQyLFxuICAgIDB4RTlDNjogMHg5QkUzLFxuICAgIDB4RTlDNzogMHg5QkUyLFxuICAgIDB4RTlDODogMHg5QkU0LFxuICAgIDB4RTlDOTogMHg5QkQ0LFxuICAgIDB4RTlDQTogMHg5QkUxLFxuICAgIDB4RTlDQjogMHg5QzNBLFxuICAgIDB4RTlDQzogMHg5QkYyLFxuICAgIDB4RTlDRDogMHg5QkYxLFxuICAgIDB4RTlDRTogMHg5QkYwLFxuICAgIDB4RTlDRjogMHg5QzE1LFxuICAgIDB4RTlEMDogMHg5QzE0LFxuICAgIDB4RTlEMTogMHg5QzA5LFxuICAgIDB4RTlEMjogMHg5QzEzLFxuICAgIDB4RTlEMzogMHg5QzBDLFxuICAgIDB4RTlENDogMHg5QzA2LFxuICAgIDB4RTlENTogMHg5QzA4LFxuICAgIDB4RTlENjogMHg5QzEyLFxuICAgIDB4RTlENzogMHg5QzBBLFxuICAgIDB4RTlEODogMHg5QzA0LFxuICAgIDB4RTlEOTogMHg5QzJFLFxuICAgIDB4RTlEQTogMHg5QzFCLFxuICAgIDB4RTlEQjogMHg5QzI1LFxuICAgIDB4RTlEQzogMHg5QzI0LFxuICAgIDB4RTlERDogMHg5QzIxLFxuICAgIDB4RTlERTogMHg5QzMwLFxuICAgIDB4RTlERjogMHg5QzQ3LFxuICAgIDB4RTlFMDogMHg5QzMyLFxuICAgIDB4RTlFMTogMHg5QzQ2LFxuICAgIDB4RTlFMjogMHg5QzNFLFxuICAgIDB4RTlFMzogMHg5QzVBLFxuICAgIDB4RTlFNDogMHg5QzYwLFxuICAgIDB4RTlFNTogMHg5QzY3LFxuICAgIDB4RTlFNjogMHg5Qzc2LFxuICAgIDB4RTlFNzogMHg5Qzc4LFxuICAgIDB4RTlFODogMHg5Q0U3LFxuICAgIDB4RTlFOTogMHg5Q0VDLFxuICAgIDB4RTlFQTogMHg5Q0YwLFxuICAgIDB4RTlFQjogMHg5RDA5LFxuICAgIDB4RTlFQzogMHg5RDA4LFxuICAgIDB4RTlFRDogMHg5Q0VCLFxuICAgIDB4RTlFRTogMHg5RDAzLFxuICAgIDB4RTlFRjogMHg5RDA2LFxuICAgIDB4RTlGMDogMHg5RDJBLFxuICAgIDB4RTlGMTogMHg5RDI2LFxuICAgIDB4RTlGMjogMHg5REFGLFxuICAgIDB4RTlGMzogMHg5RDIzLFxuICAgIDB4RTlGNDogMHg5RDFGLFxuICAgIDB4RTlGNTogMHg5RDQ0LFxuICAgIDB4RTlGNjogMHg5RDE1LFxuICAgIDB4RTlGNzogMHg5RDEyLFxuICAgIDB4RTlGODogMHg5RDQxLFxuICAgIDB4RTlGOTogMHg5RDNGLFxuICAgIDB4RTlGQTogMHg5RDNFLFxuICAgIDB4RTlGQjogMHg5RDQ2LFxuICAgIDB4RTlGQzogMHg5RDQ4LFxuICAgIDB4RUE0MDogMHg5RDVELFxuICAgIDB4RUE0MTogMHg5RDVFLFxuICAgIDB4RUE0MjogMHg5RDY0LFxuICAgIDB4RUE0MzogMHg5RDUxLFxuICAgIDB4RUE0NDogMHg5RDUwLFxuICAgIDB4RUE0NTogMHg5RDU5LFxuICAgIDB4RUE0NjogMHg5RDcyLFxuICAgIDB4RUE0NzogMHg5RDg5LFxuICAgIDB4RUE0ODogMHg5RDg3LFxuICAgIDB4RUE0OTogMHg5REFCLFxuICAgIDB4RUE0QTogMHg5RDZGLFxuICAgIDB4RUE0QjogMHg5RDdBLFxuICAgIDB4RUE0QzogMHg5RDlBLFxuICAgIDB4RUE0RDogMHg5REE0LFxuICAgIDB4RUE0RTogMHg5REE5LFxuICAgIDB4RUE0RjogMHg5REIyLFxuICAgIDB4RUE1MDogMHg5REM0LFxuICAgIDB4RUE1MTogMHg5REMxLFxuICAgIDB4RUE1MjogMHg5REJCLFxuICAgIDB4RUE1MzogMHg5REI4LFxuICAgIDB4RUE1NDogMHg5REJBLFxuICAgIDB4RUE1NTogMHg5REM2LFxuICAgIDB4RUE1NjogMHg5RENGLFxuICAgIDB4RUE1NzogMHg5REMyLFxuICAgIDB4RUE1ODogMHg5REQ5LFxuICAgIDB4RUE1OTogMHg5REQzLFxuICAgIDB4RUE1QTogMHg5REY4LFxuICAgIDB4RUE1QjogMHg5REU2LFxuICAgIDB4RUE1QzogMHg5REVELFxuICAgIDB4RUE1RDogMHg5REVGLFxuICAgIDB4RUE1RTogMHg5REZELFxuICAgIDB4RUE1RjogMHg5RTFBLFxuICAgIDB4RUE2MDogMHg5RTFCLFxuICAgIDB4RUE2MTogMHg5RTFFLFxuICAgIDB4RUE2MjogMHg5RTc1LFxuICAgIDB4RUE2MzogMHg5RTc5LFxuICAgIDB4RUE2NDogMHg5RTdELFxuICAgIDB4RUE2NTogMHg5RTgxLFxuICAgIDB4RUE2NjogMHg5RTg4LFxuICAgIDB4RUE2NzogMHg5RThCLFxuICAgIDB4RUE2ODogMHg5RThDLFxuICAgIDB4RUE2OTogMHg5RTkyLFxuICAgIDB4RUE2QTogMHg5RTk1LFxuICAgIDB4RUE2QjogMHg5RTkxLFxuICAgIDB4RUE2QzogMHg5RTlELFxuICAgIDB4RUE2RDogMHg5RUE1LFxuICAgIDB4RUE2RTogMHg5RUE5LFxuICAgIDB4RUE2RjogMHg5RUI4LFxuICAgIDB4RUE3MDogMHg5RUFBLFxuICAgIDB4RUE3MTogMHg5RUFELFxuICAgIDB4RUE3MjogMHg5NzYxLFxuICAgIDB4RUE3MzogMHg5RUNDLFxuICAgIDB4RUE3NDogMHg5RUNFLFxuICAgIDB4RUE3NTogMHg5RUNGLFxuICAgIDB4RUE3NjogMHg5RUQwLFxuICAgIDB4RUE3NzogMHg5RUQ0LFxuICAgIDB4RUE3ODogMHg5RURDLFxuICAgIDB4RUE3OTogMHg5RURFLFxuICAgIDB4RUE3QTogMHg5RURELFxuICAgIDB4RUE3QjogMHg5RUUwLFxuICAgIDB4RUE3QzogMHg5RUU1LFxuICAgIDB4RUE3RDogMHg5RUU4LFxuICAgIDB4RUE3RTogMHg5RUVGLFxuICAgIDB4RUE4MDogMHg5RUY0LFxuICAgIDB4RUE4MTogMHg5RUY2LFxuICAgIDB4RUE4MjogMHg5RUY3LFxuICAgIDB4RUE4MzogMHg5RUY5LFxuICAgIDB4RUE4NDogMHg5RUZCLFxuICAgIDB4RUE4NTogMHg5RUZDLFxuICAgIDB4RUE4NjogMHg5RUZELFxuICAgIDB4RUE4NzogMHg5RjA3LFxuICAgIDB4RUE4ODogMHg5RjA4LFxuICAgIDB4RUE4OTogMHg3NkI3LFxuICAgIDB4RUE4QTogMHg5RjE1LFxuICAgIDB4RUE4QjogMHg5RjIxLFxuICAgIDB4RUE4QzogMHg5RjJDLFxuICAgIDB4RUE4RDogMHg5RjNFLFxuICAgIDB4RUE4RTogMHg5RjRBLFxuICAgIDB4RUE4RjogMHg5RjUyLFxuICAgIDB4RUE5MDogMHg5RjU0LFxuICAgIDB4RUE5MTogMHg5RjYzLFxuICAgIDB4RUE5MjogMHg5RjVGLFxuICAgIDB4RUE5MzogMHg5RjYwLFxuICAgIDB4RUE5NDogMHg5RjYxLFxuICAgIDB4RUE5NTogMHg5RjY2LFxuICAgIDB4RUE5NjogMHg5RjY3LFxuICAgIDB4RUE5NzogMHg5RjZDLFxuICAgIDB4RUE5ODogMHg5RjZBLFxuICAgIDB4RUE5OTogMHg5Rjc3LFxuICAgIDB4RUE5QTogMHg5RjcyLFxuICAgIDB4RUE5QjogMHg5Rjc2LFxuICAgIDB4RUE5QzogMHg5Rjk1LFxuICAgIDB4RUE5RDogMHg5RjlDLFxuICAgIDB4RUE5RTogMHg5RkEwLFxuICAgIDB4RUE5RjogMHg1ODJGLFxuICAgIDB4RUFBMDogMHg2OUM3LFxuICAgIDB4RUFBMTogMHg5MDU5LFxuICAgIDB4RUFBMjogMHg3NDY0LFxuICAgIDB4RUFBMzogMHg1MURDLFxuICAgIDB4RUFBNDogMHg3MTk5LFxufTtcblxuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBHZW5lcmljR0ZfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgR2VuZXJpY0dGUG9seV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbmZ1bmN0aW9uIHJ1bkV1Y2xpZGVhbkFsZ29yaXRobShmaWVsZCwgYSwgYiwgUikge1xuICAgIHZhciBfYTtcbiAgICAvLyBBc3N1bWUgYSdzIGRlZ3JlZSBpcyA+PSBiJ3NcbiAgICBpZiAoYS5kZWdyZWUoKSA8IGIuZGVncmVlKCkpIHtcbiAgICAgICAgX2EgPSBbYiwgYV0sIGEgPSBfYVswXSwgYiA9IF9hWzFdO1xuICAgIH1cbiAgICB2YXIgckxhc3QgPSBhO1xuICAgIHZhciByID0gYjtcbiAgICB2YXIgdExhc3QgPSBmaWVsZC56ZXJvO1xuICAgIHZhciB0ID0gZmllbGQub25lO1xuICAgIC8vIFJ1biBFdWNsaWRlYW4gYWxnb3JpdGhtIHVudGlsIHIncyBkZWdyZWUgaXMgbGVzcyB0aGFuIFIvMlxuICAgIHdoaWxlIChyLmRlZ3JlZSgpID49IFIgLyAyKSB7XG4gICAgICAgIHZhciByTGFzdExhc3QgPSByTGFzdDtcbiAgICAgICAgdmFyIHRMYXN0TGFzdCA9IHRMYXN0O1xuICAgICAgICByTGFzdCA9IHI7XG4gICAgICAgIHRMYXN0ID0gdDtcbiAgICAgICAgLy8gRGl2aWRlIHJMYXN0TGFzdCBieSByTGFzdCwgd2l0aCBxdW90aWVudCBpbiBxIGFuZCByZW1haW5kZXIgaW4gclxuICAgICAgICBpZiAockxhc3QuaXNaZXJvKCkpIHtcbiAgICAgICAgICAgIC8vIEV1Y2xpZGVhbiBhbGdvcml0aG0gYWxyZWFkeSB0ZXJtaW5hdGVkP1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgciA9IHJMYXN0TGFzdDtcbiAgICAgICAgdmFyIHEgPSBmaWVsZC56ZXJvO1xuICAgICAgICB2YXIgZGVub21pbmF0b3JMZWFkaW5nVGVybSA9IHJMYXN0LmdldENvZWZmaWNpZW50KHJMYXN0LmRlZ3JlZSgpKTtcbiAgICAgICAgdmFyIGRsdEludmVyc2UgPSBmaWVsZC5pbnZlcnNlKGRlbm9taW5hdG9yTGVhZGluZ1Rlcm0pO1xuICAgICAgICB3aGlsZSAoci5kZWdyZWUoKSA+PSByTGFzdC5kZWdyZWUoKSAmJiAhci5pc1plcm8oKSkge1xuICAgICAgICAgICAgdmFyIGRlZ3JlZURpZmYgPSByLmRlZ3JlZSgpIC0gckxhc3QuZGVncmVlKCk7XG4gICAgICAgICAgICB2YXIgc2NhbGUgPSBmaWVsZC5tdWx0aXBseShyLmdldENvZWZmaWNpZW50KHIuZGVncmVlKCkpLCBkbHRJbnZlcnNlKTtcbiAgICAgICAgICAgIHEgPSBxLmFkZE9yU3VidHJhY3QoZmllbGQuYnVpbGRNb25vbWlhbChkZWdyZWVEaWZmLCBzY2FsZSkpO1xuICAgICAgICAgICAgciA9IHIuYWRkT3JTdWJ0cmFjdChyTGFzdC5tdWx0aXBseUJ5TW9ub21pYWwoZGVncmVlRGlmZiwgc2NhbGUpKTtcbiAgICAgICAgfVxuICAgICAgICB0ID0gcS5tdWx0aXBseVBvbHkodExhc3QpLmFkZE9yU3VidHJhY3QodExhc3RMYXN0KTtcbiAgICAgICAgaWYgKHIuZGVncmVlKCkgPj0gckxhc3QuZGVncmVlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBzaWdtYVRpbGRlQXRaZXJvID0gdC5nZXRDb2VmZmljaWVudCgwKTtcbiAgICBpZiAoc2lnbWFUaWxkZUF0WmVybyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGludmVyc2UgPSBmaWVsZC5pbnZlcnNlKHNpZ21hVGlsZGVBdFplcm8pO1xuICAgIHJldHVybiBbdC5tdWx0aXBseShpbnZlcnNlKSwgci5tdWx0aXBseShpbnZlcnNlKV07XG59XG5mdW5jdGlvbiBmaW5kRXJyb3JMb2NhdGlvbnMoZmllbGQsIGVycm9yTG9jYXRvcikge1xuICAgIC8vIFRoaXMgaXMgYSBkaXJlY3QgYXBwbGljYXRpb24gb2YgQ2hpZW4ncyBzZWFyY2hcbiAgICB2YXIgbnVtRXJyb3JzID0gZXJyb3JMb2NhdG9yLmRlZ3JlZSgpO1xuICAgIGlmIChudW1FcnJvcnMgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIFtlcnJvckxvY2F0b3IuZ2V0Q29lZmZpY2llbnQoMSldO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KG51bUVycm9ycyk7XG4gICAgdmFyIGVycm9yQ291bnQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgZmllbGQuc2l6ZSAmJiBlcnJvckNvdW50IDwgbnVtRXJyb3JzOyBpKyspIHtcbiAgICAgICAgaWYgKGVycm9yTG9jYXRvci5ldmFsdWF0ZUF0KGkpID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHRbZXJyb3JDb3VudF0gPSBmaWVsZC5pbnZlcnNlKGkpO1xuICAgICAgICAgICAgZXJyb3JDb3VudCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlcnJvckNvdW50ICE9PSBudW1FcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBmaW5kRXJyb3JNYWduaXR1ZGVzKGZpZWxkLCBlcnJvckV2YWx1YXRvciwgZXJyb3JMb2NhdGlvbnMpIHtcbiAgICAvLyBUaGlzIGlzIGRpcmVjdGx5IGFwcGx5aW5nIEZvcm5leSdzIEZvcm11bGFcbiAgICB2YXIgcyA9IGVycm9yTG9jYXRpb25zLmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHMpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgICAgIHZhciB4aUludmVyc2UgPSBmaWVsZC5pbnZlcnNlKGVycm9yTG9jYXRpb25zW2ldKTtcbiAgICAgICAgdmFyIGRlbm9taW5hdG9yID0gMTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChpICE9PSBqKSB7XG4gICAgICAgICAgICAgICAgZGVub21pbmF0b3IgPSBmaWVsZC5tdWx0aXBseShkZW5vbWluYXRvciwgR2VuZXJpY0dGXzEuYWRkT3JTdWJ0cmFjdEdGKDEsIGZpZWxkLm11bHRpcGx5KGVycm9yTG9jYXRpb25zW2pdLCB4aUludmVyc2UpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0W2ldID0gZmllbGQubXVsdGlwbHkoZXJyb3JFdmFsdWF0b3IuZXZhbHVhdGVBdCh4aUludmVyc2UpLCBmaWVsZC5pbnZlcnNlKGRlbm9taW5hdG9yKSk7XG4gICAgICAgIGlmIChmaWVsZC5nZW5lcmF0b3JCYXNlICE9PSAwKSB7XG4gICAgICAgICAgICByZXN1bHRbaV0gPSBmaWVsZC5tdWx0aXBseShyZXN1bHRbaV0sIHhpSW52ZXJzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGRlY29kZShieXRlcywgdHdvUykge1xuICAgIHZhciBvdXRwdXRCeXRlcyA9IG5ldyBVaW50OENsYW1wZWRBcnJheShieXRlcy5sZW5ndGgpO1xuICAgIG91dHB1dEJ5dGVzLnNldChieXRlcyk7XG4gICAgdmFyIGZpZWxkID0gbmV3IEdlbmVyaWNHRl8xLmRlZmF1bHQoMHgwMTFELCAyNTYsIDApOyAvLyB4XjggKyB4XjQgKyB4XjMgKyB4XjIgKyAxXG4gICAgdmFyIHBvbHkgPSBuZXcgR2VuZXJpY0dGUG9seV8xLmRlZmF1bHQoZmllbGQsIG91dHB1dEJ5dGVzKTtcbiAgICB2YXIgc3luZHJvbWVDb2VmZmljaWVudHMgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkodHdvUyk7XG4gICAgdmFyIGVycm9yID0gZmFsc2U7XG4gICAgZm9yICh2YXIgcyA9IDA7IHMgPCB0d29TOyBzKyspIHtcbiAgICAgICAgdmFyIGV2YWx1YXRpb24gPSBwb2x5LmV2YWx1YXRlQXQoZmllbGQuZXhwKHMgKyBmaWVsZC5nZW5lcmF0b3JCYXNlKSk7XG4gICAgICAgIHN5bmRyb21lQ29lZmZpY2llbnRzW3N5bmRyb21lQ29lZmZpY2llbnRzLmxlbmd0aCAtIDEgLSBzXSA9IGV2YWx1YXRpb247XG4gICAgICAgIGlmIChldmFsdWF0aW9uICE9PSAwKSB7XG4gICAgICAgICAgICBlcnJvciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgICByZXR1cm4gb3V0cHV0Qnl0ZXM7XG4gICAgfVxuICAgIHZhciBzeW5kcm9tZSA9IG5ldyBHZW5lcmljR0ZQb2x5XzEuZGVmYXVsdChmaWVsZCwgc3luZHJvbWVDb2VmZmljaWVudHMpO1xuICAgIHZhciBzaWdtYU9tZWdhID0gcnVuRXVjbGlkZWFuQWxnb3JpdGhtKGZpZWxkLCBmaWVsZC5idWlsZE1vbm9taWFsKHR3b1MsIDEpLCBzeW5kcm9tZSwgdHdvUyk7XG4gICAgaWYgKHNpZ21hT21lZ2EgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBlcnJvckxvY2F0aW9ucyA9IGZpbmRFcnJvckxvY2F0aW9ucyhmaWVsZCwgc2lnbWFPbWVnYVswXSk7XG4gICAgaWYgKGVycm9yTG9jYXRpb25zID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBlcnJvck1hZ25pdHVkZXMgPSBmaW5kRXJyb3JNYWduaXR1ZGVzKGZpZWxkLCBzaWdtYU9tZWdhWzFdLCBlcnJvckxvY2F0aW9ucyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvckxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBvdXRwdXRCeXRlcy5sZW5ndGggLSAxIC0gZmllbGQubG9nKGVycm9yTG9jYXRpb25zW2ldKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0Qnl0ZXNbcG9zaXRpb25dID0gR2VuZXJpY0dGXzEuYWRkT3JTdWJ0cmFjdEdGKG91dHB1dEJ5dGVzW3Bvc2l0aW9uXSwgZXJyb3JNYWduaXR1ZGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dEJ5dGVzO1xufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG5cblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5WRVJTSU9OUyA9IFtcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiBudWxsLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAxLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogW10sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDcsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxOSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTMsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMyB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTcsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA5IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IG51bGwsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDIsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMThdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAxMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDM0IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAxNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI4IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIyIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IG51bGwsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDMsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjJdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAxNSxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDU1IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ0IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAxOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE3IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEzIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IG51bGwsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDQsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjZdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDgwIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAxOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDMyIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAxNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDkgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogbnVsbCxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogNSxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzMF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI2LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTA4IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQzIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAxOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDIyLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiBudWxsLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiA2LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDM0XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA2OCB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMTYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNyB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjQsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxOSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDA3Qzk0LFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiA3LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDIyLCAzOF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDIwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNzggfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDE4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMzEgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDE4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTMgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTQgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MDg1QkMsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDgsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjQsIDQyXSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjQsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA5NyB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjIsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMzggfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMzkgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxOCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxOSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI2LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDA5QTk5LFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiA5LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDI2LCA0Nl0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE2IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAzNiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAzNyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDIwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjQsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTMgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MEE0RDMsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDEwLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDI4LCA1MF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDE4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDY4IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDY5IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDMgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDQgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxOSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDBCQkY2LFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAxMSxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzMCwgNTRdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDgxIH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA1MCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA1MSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIzIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjQsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDgsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTMgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MEM3NjIsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDEyLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDMyLCA1OF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI0LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDkyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDkzIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjIsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMzYgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMzcgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDBEODQ3LFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAxMyxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzNCwgNjJdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEwNyB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjIsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDgsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMzcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMzggfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogOCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDIyLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgwRTYwRCxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMTQsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjYsIDQ2LCA2Nl0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0MCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0MSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDIwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI0LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgwRjkyOCxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMTUsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjYsIDQ4LCA3MF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDIyLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDg3IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDg4IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjQsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDEgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDIgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI0LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxMEI3OCxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMTYsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjYsIDUwLCA3NF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI0LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDk4IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDk5IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTkgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MTE0NUQsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDE3LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDMwLCA1NCwgNzhdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMDcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTA4IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIzIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDEyQTE3LFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAxOCxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzMCwgNTYsIDgyXSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIwIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyMSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI2LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA5LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQzIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ0IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIzIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE5LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDEzNTMyLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAxOSxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzMCwgNTgsIDg2XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTEzIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI2LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI2LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyMiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI2LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA5LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEzIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxNDlBNixcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMjAsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzQsIDYyLCA5MF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEwNyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMDggfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0MSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDIgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDE1NjgzLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAyMSxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAyOCwgNTAsIDcyLCA5NF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTcgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyNixcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAxNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0MiB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIzIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE5LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDE2OEM5LFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAyMixcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAyNiwgNTAsIDc0LCA5OF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExMSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTIgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW3sgbnVtQmxvY2tzOiAxNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NiB9XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjQsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMzQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTMgfV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxNzdFQyxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMjMsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzAsIDU0LCA3NCwgMTAyXSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIxIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyMiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0OCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDE4RUM0LFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAyNCxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAyOCwgNTQsIDgwLCAxMDZdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE4IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDExLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzMCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxOTFFMSxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMjUsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzIsIDU4LCA4NCwgMTEwXSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjYsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDgsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTA2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEwNyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA4LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0OCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MUFGQUIsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDI2LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDMwLCA1OCwgODYsIDExNF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE5LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDI4LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDIzIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDMzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDFCMDhFLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAyNyxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzNCwgNjIsIDkwLCAxMThdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogOCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMjIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIzIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDgsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjMgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDI2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyOCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxQ0MxQSxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMjgsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjYsIDUwLCA3NCwgOTgsIDEyMl0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTAsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE4IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDMxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDExLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxRDMzRixcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMjksXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjZdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTYgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjMgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDM3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE5LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxRUQ3NSxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMzAsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMjYsIDUyLCA3OCwgMTA0LCAxMzBdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTAsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDggfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDI1LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgxRjI1MCxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMzEsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzAsIDU2LCA4MiwgMTA4LCAxMzRdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0MiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMjgsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MjA5RDUsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDMyLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDM0LCA2MCwgODYsIDExMiwgMTM4XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFt7IG51bUJsb2NrczogMTcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE1IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTAsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDYgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzNSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMzUsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MjE2RjAsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDMzLFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDMwLCA1OCwgODYsIDExNCwgMTQyXSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDYgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDI5LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNDYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MjI4QkEsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDM0LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDM0LCA2MiwgOTAsIDExOCwgMTQ2XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDYgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDQ0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA3LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDU5LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE3IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDIzNzlGLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAzNSxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNiwgMTUwXSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyMSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMjIgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDI2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ4IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDM5LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI0IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNDEsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MjRCMEIsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDM2LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDI0LCA1MCwgNzYsIDEwMiwgMTI4LCAxNTRdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMjEgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyMiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA2LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0OCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0NiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTAsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNjQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTYgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5mb0JpdHM6IDB4MjU0MkUsXG4gICAgICAgIHZlcnNpb25OdW1iZXI6IDM3LFxuICAgICAgICBhbGlnbm1lbnRQYXR0ZXJuQ2VudGVyczogWzYsIDI4LCA1NCwgODAsIDEwNiwgMTMyLCAxNThdLFxuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyMyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDI4LFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAyOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDcgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNDksIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDI0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0NiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgyNkE2NCxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogMzgsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzIsIDU4LCA4NCwgMTEwLCAxMzYsIDE2Ml0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDEyMiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTgsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTIzIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEzLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ2IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzMiwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0NyB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA0OCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMTQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNDIsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDMyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZm9CaXRzOiAweDI3NTQxLFxuICAgICAgICB2ZXJzaW9uTnVtYmVyOiAzOSxcbiAgICAgICAgYWxpZ25tZW50UGF0dGVybkNlbnRlcnM6IFs2LCAyNiwgNTQsIDgyLCAxMTAsIDEzOCwgMTY2XSxcbiAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWxzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDExNyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTggfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAyOCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNDAsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDcgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDcsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogNDggfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogNDMsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjQgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDIyLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDI1IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMzAsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDEwLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE1IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiA2NywgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxNiB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmZvQml0czogMHgyOEM2OSxcbiAgICAgICAgdmVyc2lvbk51bWJlcjogNDAsXG4gICAgICAgIGFsaWdubWVudFBhdHRlcm5DZW50ZXJzOiBbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDIsIDE3MF0sXG4gICAgICAgIGVycm9yQ29ycmVjdGlvbkxldmVsczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAxOSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAxMTggfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDYsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTE5IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZWNDb2Rld29yZHNQZXJCbG9jazogMjgsXG4gICAgICAgICAgICAgICAgZWNCbG9ja3M6IFtcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDE4LCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDQ3IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzMSwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiA0OCB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGVjQ29kZXdvcmRzUGVyQmxvY2s6IDMwLFxuICAgICAgICAgICAgICAgIGVjQmxvY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgIHsgbnVtQmxvY2tzOiAzNCwgZGF0YUNvZGV3b3Jkc1BlckJsb2NrOiAyNCB9LFxuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMzQsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMjUgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlY0NvZGV3b3Jkc1BlckJsb2NrOiAzMCxcbiAgICAgICAgICAgICAgICBlY0Jsb2NrczogW1xuICAgICAgICAgICAgICAgICAgICB7IG51bUJsb2NrczogMjAsIGRhdGFDb2Rld29yZHNQZXJCbG9jazogMTUgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBudW1CbG9ja3M6IDYxLCBkYXRhQ29kZXdvcmRzUGVyQmxvY2s6IDE2IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbl07XG5cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEJpdE1hdHJpeF8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbmZ1bmN0aW9uIHNxdWFyZVRvUXVhZHJpbGF0ZXJhbChwMSwgcDIsIHAzLCBwNCkge1xuICAgIHZhciBkeDMgPSBwMS54IC0gcDIueCArIHAzLnggLSBwNC54O1xuICAgIHZhciBkeTMgPSBwMS55IC0gcDIueSArIHAzLnkgLSBwNC55O1xuICAgIGlmIChkeDMgPT09IDAgJiYgZHkzID09PSAwKSB7IC8vIEFmZmluZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYTExOiBwMi54IC0gcDEueCxcbiAgICAgICAgICAgIGExMjogcDIueSAtIHAxLnksXG4gICAgICAgICAgICBhMTM6IDAsXG4gICAgICAgICAgICBhMjE6IHAzLnggLSBwMi54LFxuICAgICAgICAgICAgYTIyOiBwMy55IC0gcDIueSxcbiAgICAgICAgICAgIGEyMzogMCxcbiAgICAgICAgICAgIGEzMTogcDEueCxcbiAgICAgICAgICAgIGEzMjogcDEueSxcbiAgICAgICAgICAgIGEzMzogMSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBkeDEgPSBwMi54IC0gcDMueDtcbiAgICAgICAgdmFyIGR4MiA9IHA0LnggLSBwMy54O1xuICAgICAgICB2YXIgZHkxID0gcDIueSAtIHAzLnk7XG4gICAgICAgIHZhciBkeTIgPSBwNC55IC0gcDMueTtcbiAgICAgICAgdmFyIGRlbm9taW5hdG9yID0gZHgxICogZHkyIC0gZHgyICogZHkxO1xuICAgICAgICB2YXIgYTEzID0gKGR4MyAqIGR5MiAtIGR4MiAqIGR5MykgLyBkZW5vbWluYXRvcjtcbiAgICAgICAgdmFyIGEyMyA9IChkeDEgKiBkeTMgLSBkeDMgKiBkeTEpIC8gZGVub21pbmF0b3I7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhMTE6IHAyLnggLSBwMS54ICsgYTEzICogcDIueCxcbiAgICAgICAgICAgIGExMjogcDIueSAtIHAxLnkgKyBhMTMgKiBwMi55LFxuICAgICAgICAgICAgYTEzOiBhMTMsXG4gICAgICAgICAgICBhMjE6IHA0LnggLSBwMS54ICsgYTIzICogcDQueCxcbiAgICAgICAgICAgIGEyMjogcDQueSAtIHAxLnkgKyBhMjMgKiBwNC55LFxuICAgICAgICAgICAgYTIzOiBhMjMsXG4gICAgICAgICAgICBhMzE6IHAxLngsXG4gICAgICAgICAgICBhMzI6IHAxLnksXG4gICAgICAgICAgICBhMzM6IDEsXG4gICAgICAgIH07XG4gICAgfVxufVxuZnVuY3Rpb24gcXVhZHJpbGF0ZXJhbFRvU3F1YXJlKHAxLCBwMiwgcDMsIHA0KSB7XG4gICAgLy8gSGVyZSwgdGhlIGFkam9pbnQgc2VydmVzIGFzIHRoZSBpbnZlcnNlOlxuICAgIHZhciBzVG9RID0gc3F1YXJlVG9RdWFkcmlsYXRlcmFsKHAxLCBwMiwgcDMsIHA0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhMTE6IHNUb1EuYTIyICogc1RvUS5hMzMgLSBzVG9RLmEyMyAqIHNUb1EuYTMyLFxuICAgICAgICBhMTI6IHNUb1EuYTEzICogc1RvUS5hMzIgLSBzVG9RLmExMiAqIHNUb1EuYTMzLFxuICAgICAgICBhMTM6IHNUb1EuYTEyICogc1RvUS5hMjMgLSBzVG9RLmExMyAqIHNUb1EuYTIyLFxuICAgICAgICBhMjE6IHNUb1EuYTIzICogc1RvUS5hMzEgLSBzVG9RLmEyMSAqIHNUb1EuYTMzLFxuICAgICAgICBhMjI6IHNUb1EuYTExICogc1RvUS5hMzMgLSBzVG9RLmExMyAqIHNUb1EuYTMxLFxuICAgICAgICBhMjM6IHNUb1EuYTEzICogc1RvUS5hMjEgLSBzVG9RLmExMSAqIHNUb1EuYTIzLFxuICAgICAgICBhMzE6IHNUb1EuYTIxICogc1RvUS5hMzIgLSBzVG9RLmEyMiAqIHNUb1EuYTMxLFxuICAgICAgICBhMzI6IHNUb1EuYTEyICogc1RvUS5hMzEgLSBzVG9RLmExMSAqIHNUb1EuYTMyLFxuICAgICAgICBhMzM6IHNUb1EuYTExICogc1RvUS5hMjIgLSBzVG9RLmExMiAqIHNUb1EuYTIxLFxuICAgIH07XG59XG5mdW5jdGlvbiB0aW1lcyhhLCBiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYTExOiBhLmExMSAqIGIuYTExICsgYS5hMjEgKiBiLmExMiArIGEuYTMxICogYi5hMTMsXG4gICAgICAgIGExMjogYS5hMTIgKiBiLmExMSArIGEuYTIyICogYi5hMTIgKyBhLmEzMiAqIGIuYTEzLFxuICAgICAgICBhMTM6IGEuYTEzICogYi5hMTEgKyBhLmEyMyAqIGIuYTEyICsgYS5hMzMgKiBiLmExMyxcbiAgICAgICAgYTIxOiBhLmExMSAqIGIuYTIxICsgYS5hMjEgKiBiLmEyMiArIGEuYTMxICogYi5hMjMsXG4gICAgICAgIGEyMjogYS5hMTIgKiBiLmEyMSArIGEuYTIyICogYi5hMjIgKyBhLmEzMiAqIGIuYTIzLFxuICAgICAgICBhMjM6IGEuYTEzICogYi5hMjEgKyBhLmEyMyAqIGIuYTIyICsgYS5hMzMgKiBiLmEyMyxcbiAgICAgICAgYTMxOiBhLmExMSAqIGIuYTMxICsgYS5hMjEgKiBiLmEzMiArIGEuYTMxICogYi5hMzMsXG4gICAgICAgIGEzMjogYS5hMTIgKiBiLmEzMSArIGEuYTIyICogYi5hMzIgKyBhLmEzMiAqIGIuYTMzLFxuICAgICAgICBhMzM6IGEuYTEzICogYi5hMzEgKyBhLmEyMyAqIGIuYTMyICsgYS5hMzMgKiBiLmEzMyxcbiAgICB9O1xufVxuZnVuY3Rpb24gZXh0cmFjdChpbWFnZSwgbG9jYXRpb24pIHtcbiAgICB2YXIgcVRvUyA9IHF1YWRyaWxhdGVyYWxUb1NxdWFyZSh7IHg6IDMuNSwgeTogMy41IH0sIHsgeDogbG9jYXRpb24uZGltZW5zaW9uIC0gMy41LCB5OiAzLjUgfSwgeyB4OiBsb2NhdGlvbi5kaW1lbnNpb24gLSA2LjUsIHk6IGxvY2F0aW9uLmRpbWVuc2lvbiAtIDYuNSB9LCB7IHg6IDMuNSwgeTogbG9jYXRpb24uZGltZW5zaW9uIC0gMy41IH0pO1xuICAgIHZhciBzVG9RID0gc3F1YXJlVG9RdWFkcmlsYXRlcmFsKGxvY2F0aW9uLnRvcExlZnQsIGxvY2F0aW9uLnRvcFJpZ2h0LCBsb2NhdGlvbi5hbGlnbm1lbnRQYXR0ZXJuLCBsb2NhdGlvbi5ib3R0b21MZWZ0KTtcbiAgICB2YXIgdHJhbnNmb3JtID0gdGltZXMoc1RvUSwgcVRvUyk7XG4gICAgdmFyIG1hdHJpeCA9IEJpdE1hdHJpeF8xLkJpdE1hdHJpeC5jcmVhdGVFbXB0eShsb2NhdGlvbi5kaW1lbnNpb24sIGxvY2F0aW9uLmRpbWVuc2lvbik7XG4gICAgdmFyIG1hcHBpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHZhciBkZW5vbWluYXRvciA9IHRyYW5zZm9ybS5hMTMgKiB4ICsgdHJhbnNmb3JtLmEyMyAqIHkgKyB0cmFuc2Zvcm0uYTMzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogKHRyYW5zZm9ybS5hMTEgKiB4ICsgdHJhbnNmb3JtLmEyMSAqIHkgKyB0cmFuc2Zvcm0uYTMxKSAvIGRlbm9taW5hdG9yLFxuICAgICAgICAgICAgeTogKHRyYW5zZm9ybS5hMTIgKiB4ICsgdHJhbnNmb3JtLmEyMiAqIHkgKyB0cmFuc2Zvcm0uYTMyKSAvIGRlbm9taW5hdG9yLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCBsb2NhdGlvbi5kaW1lbnNpb247IHkrKykge1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGxvY2F0aW9uLmRpbWVuc2lvbjsgeCsrKSB7XG4gICAgICAgICAgICB2YXIgeFZhbHVlID0geCArIDAuNTtcbiAgICAgICAgICAgIHZhciB5VmFsdWUgPSB5ICsgMC41O1xuICAgICAgICAgICAgdmFyIHNvdXJjZVBpeGVsID0gbWFwcGluZ0Z1bmN0aW9uKHhWYWx1ZSwgeVZhbHVlKTtcbiAgICAgICAgICAgIG1hdHJpeC5zZXQoeCwgeSwgaW1hZ2UuZ2V0KE1hdGguZmxvb3Ioc291cmNlUGl4ZWwueCksIE1hdGguZmxvb3Ioc291cmNlUGl4ZWwueSkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBtYXRyaXg6IG1hdHJpeCxcbiAgICAgICAgbWFwcGluZ0Z1bmN0aW9uOiBtYXBwaW5nRnVuY3Rpb24sXG4gICAgfTtcbn1cbmV4cG9ydHMuZXh0cmFjdCA9IGV4dHJhY3Q7XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1BWF9GSU5ERVJQQVRURVJOU19UT19TRUFSQ0ggPSA0O1xudmFyIE1JTl9RVUFEX1JBVElPID0gMC41O1xudmFyIE1BWF9RVUFEX1JBVElPID0gMS41O1xudmFyIGRpc3RhbmNlID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdygoYi54IC0gYS54KSwgMikgKyBNYXRoLnBvdygoYi55IC0gYS55KSwgMikpOyB9O1xuZnVuY3Rpb24gc3VtKHZhbHVlcykge1xuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhICsgYjsgfSk7XG59XG4vLyBUYWtlcyB0aHJlZSBmaW5kZXIgcGF0dGVybnMgYW5kIG9yZ2FuaXplcyB0aGVtIGludG8gdG9wTGVmdCwgdG9wUmlnaHQsIGV0Y1xuZnVuY3Rpb24gcmVvcmRlckZpbmRlclBhdHRlcm5zKHBhdHRlcm4xLCBwYXR0ZXJuMiwgcGF0dGVybjMpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgLy8gRmluZCBkaXN0YW5jZXMgYmV0d2VlbiBwYXR0ZXJuIGNlbnRlcnNcbiAgICB2YXIgb25lVHdvRGlzdGFuY2UgPSBkaXN0YW5jZShwYXR0ZXJuMSwgcGF0dGVybjIpO1xuICAgIHZhciB0d29UaHJlZURpc3RhbmNlID0gZGlzdGFuY2UocGF0dGVybjIsIHBhdHRlcm4zKTtcbiAgICB2YXIgb25lVGhyZWVEaXN0YW5jZSA9IGRpc3RhbmNlKHBhdHRlcm4xLCBwYXR0ZXJuMyk7XG4gICAgdmFyIGJvdHRvbUxlZnQ7XG4gICAgdmFyIHRvcExlZnQ7XG4gICAgdmFyIHRvcFJpZ2h0O1xuICAgIC8vIEFzc3VtZSBvbmUgY2xvc2VzdCB0byBvdGhlciB0d28gaXMgQjsgQSBhbmQgQyB3aWxsIGp1c3QgYmUgZ3Vlc3NlcyBhdCBmaXJzdFxuICAgIGlmICh0d29UaHJlZURpc3RhbmNlID49IG9uZVR3b0Rpc3RhbmNlICYmIHR3b1RocmVlRGlzdGFuY2UgPj0gb25lVGhyZWVEaXN0YW5jZSkge1xuICAgICAgICBfYSA9IFtwYXR0ZXJuMiwgcGF0dGVybjEsIHBhdHRlcm4zXSwgYm90dG9tTGVmdCA9IF9hWzBdLCB0b3BMZWZ0ID0gX2FbMV0sIHRvcFJpZ2h0ID0gX2FbMl07XG4gICAgfVxuICAgIGVsc2UgaWYgKG9uZVRocmVlRGlzdGFuY2UgPj0gdHdvVGhyZWVEaXN0YW5jZSAmJiBvbmVUaHJlZURpc3RhbmNlID49IG9uZVR3b0Rpc3RhbmNlKSB7XG4gICAgICAgIF9iID0gW3BhdHRlcm4xLCBwYXR0ZXJuMiwgcGF0dGVybjNdLCBib3R0b21MZWZ0ID0gX2JbMF0sIHRvcExlZnQgPSBfYlsxXSwgdG9wUmlnaHQgPSBfYlsyXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIF9jID0gW3BhdHRlcm4xLCBwYXR0ZXJuMywgcGF0dGVybjJdLCBib3R0b21MZWZ0ID0gX2NbMF0sIHRvcExlZnQgPSBfY1sxXSwgdG9wUmlnaHQgPSBfY1syXTtcbiAgICB9XG4gICAgLy8gVXNlIGNyb3NzIHByb2R1Y3QgdG8gZmlndXJlIG91dCB3aGV0aGVyIGJvdHRvbUxlZnQgKEEpIGFuZCB0b3BSaWdodCAoQykgYXJlIGNvcnJlY3Qgb3IgZmxpcHBlZCBpbiByZWxhdGlvbiB0byB0b3BMZWZ0IChCKVxuICAgIC8vIFRoaXMgYXNrcyB3aGV0aGVyIEJDIHggQkEgaGFzIGEgcG9zaXRpdmUgeiBjb21wb25lbnQsIHdoaWNoIGlzIHRoZSBhcnJhbmdlbWVudCB3ZSB3YW50LiBJZiBpdCdzIG5lZ2F0aXZlLCB0aGVuXG4gICAgLy8gd2UndmUgZ290IGl0IGZsaXBwZWQgYXJvdW5kIGFuZCBzaG91bGQgc3dhcCB0b3BSaWdodCBhbmQgYm90dG9tTGVmdC5cbiAgICBpZiAoKCh0b3BSaWdodC54IC0gdG9wTGVmdC54KSAqIChib3R0b21MZWZ0LnkgLSB0b3BMZWZ0LnkpKSAtICgodG9wUmlnaHQueSAtIHRvcExlZnQueSkgKiAoYm90dG9tTGVmdC54IC0gdG9wTGVmdC54KSkgPCAwKSB7XG4gICAgICAgIF9kID0gW3RvcFJpZ2h0LCBib3R0b21MZWZ0XSwgYm90dG9tTGVmdCA9IF9kWzBdLCB0b3BSaWdodCA9IF9kWzFdO1xuICAgIH1cbiAgICByZXR1cm4geyBib3R0b21MZWZ0OiBib3R0b21MZWZ0LCB0b3BMZWZ0OiB0b3BMZWZ0LCB0b3BSaWdodDogdG9wUmlnaHQgfTtcbn1cbi8vIENvbXB1dGVzIHRoZSBkaW1lbnNpb24gKG51bWJlciBvZiBtb2R1bGVzIG9uIGEgc2lkZSkgb2YgdGhlIFFSIENvZGUgYmFzZWQgb24gdGhlIHBvc2l0aW9uIG9mIHRoZSBmaW5kZXIgcGF0dGVybnNcbmZ1bmN0aW9uIGNvbXB1dGVEaW1lbnNpb24odG9wTGVmdCwgdG9wUmlnaHQsIGJvdHRvbUxlZnQsIG1hdHJpeCkge1xuICAgIHZhciBtb2R1bGVTaXplID0gKHN1bShjb3VudEJsYWNrV2hpdGVSdW4odG9wTGVmdCwgYm90dG9tTGVmdCwgbWF0cml4LCA1KSkgLyA3ICsgLy8gRGl2aWRlIGJ5IDcgc2luY2UgdGhlIHJhdGlvIGlzIDE6MTozOjE6MVxuICAgICAgICBzdW0oY291bnRCbGFja1doaXRlUnVuKHRvcExlZnQsIHRvcFJpZ2h0LCBtYXRyaXgsIDUpKSAvIDcgK1xuICAgICAgICBzdW0oY291bnRCbGFja1doaXRlUnVuKGJvdHRvbUxlZnQsIHRvcExlZnQsIG1hdHJpeCwgNSkpIC8gNyArXG4gICAgICAgIHN1bShjb3VudEJsYWNrV2hpdGVSdW4odG9wUmlnaHQsIHRvcExlZnQsIG1hdHJpeCwgNSkpIC8gNykgLyA0O1xuICAgIGlmIChtb2R1bGVTaXplIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG1vZHVsZSBzaXplXCIpO1xuICAgIH1cbiAgICB2YXIgdG9wRGltZW5zaW9uID0gTWF0aC5yb3VuZChkaXN0YW5jZSh0b3BMZWZ0LCB0b3BSaWdodCkgLyBtb2R1bGVTaXplKTtcbiAgICB2YXIgc2lkZURpbWVuc2lvbiA9IE1hdGgucm91bmQoZGlzdGFuY2UodG9wTGVmdCwgYm90dG9tTGVmdCkgLyBtb2R1bGVTaXplKTtcbiAgICB2YXIgZGltZW5zaW9uID0gTWF0aC5mbG9vcigodG9wRGltZW5zaW9uICsgc2lkZURpbWVuc2lvbikgLyAyKSArIDc7XG4gICAgc3dpdGNoIChkaW1lbnNpb24gJSA0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGRpbWVuc2lvbisrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGRpbWVuc2lvbi0tO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB7IGRpbWVuc2lvbjogZGltZW5zaW9uLCBtb2R1bGVTaXplOiBtb2R1bGVTaXplIH07XG59XG4vLyBUYWtlcyBhbiBvcmlnaW4gcG9pbnQgYW5kIGFuIGVuZCBwb2ludCBhbmQgY291bnRzIHRoZSBzaXplcyBvZiB0aGUgYmxhY2sgd2hpdGUgcnVuIGZyb20gdGhlIG9yaWdpbiB0b3dhcmRzIHRoZSBlbmQgcG9pbnQuXG4vLyBSZXR1cm5zIGFuIGFycmF5IG9mIGVsZW1lbnRzLCByZXByZXNlbnRpbmcgdGhlIHBpeGVsIHNpemUgb2YgdGhlIGJsYWNrIHdoaXRlIHJ1bi5cbi8vIFVzZXMgYSB2YXJpYW50IG9mIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlc2VuaGFtJ3NfbGluZV9hbGdvcml0aG1cbmZ1bmN0aW9uIGNvdW50QmxhY2tXaGl0ZVJ1blRvd2FyZHNQb2ludChvcmlnaW4sIGVuZCwgbWF0cml4LCBsZW5ndGgpIHtcbiAgICB2YXIgc3dpdGNoUG9pbnRzID0gW3sgeDogTWF0aC5mbG9vcihvcmlnaW4ueCksIHk6IE1hdGguZmxvb3Iob3JpZ2luLnkpIH1dO1xuICAgIHZhciBzdGVlcCA9IE1hdGguYWJzKGVuZC55IC0gb3JpZ2luLnkpID4gTWF0aC5hYnMoZW5kLnggLSBvcmlnaW4ueCk7XG4gICAgdmFyIGZyb21YO1xuICAgIHZhciBmcm9tWTtcbiAgICB2YXIgdG9YO1xuICAgIHZhciB0b1k7XG4gICAgaWYgKHN0ZWVwKSB7XG4gICAgICAgIGZyb21YID0gTWF0aC5mbG9vcihvcmlnaW4ueSk7XG4gICAgICAgIGZyb21ZID0gTWF0aC5mbG9vcihvcmlnaW4ueCk7XG4gICAgICAgIHRvWCA9IE1hdGguZmxvb3IoZW5kLnkpO1xuICAgICAgICB0b1kgPSBNYXRoLmZsb29yKGVuZC54KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZyb21YID0gTWF0aC5mbG9vcihvcmlnaW4ueCk7XG4gICAgICAgIGZyb21ZID0gTWF0aC5mbG9vcihvcmlnaW4ueSk7XG4gICAgICAgIHRvWCA9IE1hdGguZmxvb3IoZW5kLngpO1xuICAgICAgICB0b1kgPSBNYXRoLmZsb29yKGVuZC55KTtcbiAgICB9XG4gICAgdmFyIGR4ID0gTWF0aC5hYnModG9YIC0gZnJvbVgpO1xuICAgIHZhciBkeSA9IE1hdGguYWJzKHRvWSAtIGZyb21ZKTtcbiAgICB2YXIgZXJyb3IgPSBNYXRoLmZsb29yKC1keCAvIDIpO1xuICAgIHZhciB4U3RlcCA9IGZyb21YIDwgdG9YID8gMSA6IC0xO1xuICAgIHZhciB5U3RlcCA9IGZyb21ZIDwgdG9ZID8gMSA6IC0xO1xuICAgIHZhciBjdXJyZW50UGl4ZWwgPSB0cnVlO1xuICAgIC8vIExvb3AgdXAgdW50aWwgeCA9PSB0b1gsIGJ1dCBub3QgYmV5b25kXG4gICAgZm9yICh2YXIgeCA9IGZyb21YLCB5ID0gZnJvbVk7IHggIT09IHRvWCArIHhTdGVwOyB4ICs9IHhTdGVwKSB7XG4gICAgICAgIC8vIERvZXMgY3VycmVudCBwaXhlbCBtZWFuIHdlIGhhdmUgbW92ZWQgd2hpdGUgdG8gYmxhY2sgb3IgdmljZSB2ZXJzYT9cbiAgICAgICAgLy8gU2Nhbm5pbmcgYmxhY2sgaW4gc3RhdGUgMCwyIGFuZCB3aGl0ZSBpbiBzdGF0ZSAxLCBzbyBpZiB3ZSBmaW5kIHRoZSB3cm9uZ1xuICAgICAgICAvLyBjb2xvciwgYWR2YW5jZSB0byBuZXh0IHN0YXRlIG9yIGVuZCBpZiB3ZSBhcmUgaW4gc3RhdGUgMiBhbHJlYWR5XG4gICAgICAgIHZhciByZWFsWCA9IHN0ZWVwID8geSA6IHg7XG4gICAgICAgIHZhciByZWFsWSA9IHN0ZWVwID8geCA6IHk7XG4gICAgICAgIGlmIChtYXRyaXguZ2V0KHJlYWxYLCByZWFsWSkgIT09IGN1cnJlbnRQaXhlbCkge1xuICAgICAgICAgICAgY3VycmVudFBpeGVsID0gIWN1cnJlbnRQaXhlbDtcbiAgICAgICAgICAgIHN3aXRjaFBvaW50cy5wdXNoKHsgeDogcmVhbFgsIHk6IHJlYWxZIH0pO1xuICAgICAgICAgICAgaWYgKHN3aXRjaFBvaW50cy5sZW5ndGggPT09IGxlbmd0aCArIDEpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlcnJvciArPSBkeTtcbiAgICAgICAgaWYgKGVycm9yID4gMCkge1xuICAgICAgICAgICAgaWYgKHkgPT09IHRvWSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSArPSB5U3RlcDtcbiAgICAgICAgICAgIGVycm9yIC09IGR4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBkaXN0YW5jZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzd2l0Y2hQb2ludHNbaV0gJiYgc3dpdGNoUG9pbnRzW2kgKyAxXSkge1xuICAgICAgICAgICAgZGlzdGFuY2VzLnB1c2goZGlzdGFuY2Uoc3dpdGNoUG9pbnRzW2ldLCBzd2l0Y2hQb2ludHNbaSArIDFdKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkaXN0YW5jZXMucHVzaCgwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGlzdGFuY2VzO1xufVxuLy8gVGFrZXMgYW4gb3JpZ2luIHBvaW50IGFuZCBhbiBlbmQgcG9pbnQgYW5kIGNvdW50cyB0aGUgc2l6ZXMgb2YgdGhlIGJsYWNrIHdoaXRlIHJ1biBpbiB0aGUgb3JpZ2luIHBvaW50XG4vLyBhbG9uZyB0aGUgbGluZSB0aGF0IGludGVyc2VjdHMgd2l0aCB0aGUgZW5kIHBvaW50LiBSZXR1cm5zIGFuIGFycmF5IG9mIGVsZW1lbnRzLCByZXByZXNlbnRpbmcgdGhlIHBpeGVsIHNpemVzXG4vLyBvZiB0aGUgYmxhY2sgd2hpdGUgcnVuLiBUYWtlcyBhIGxlbmd0aCB3aGljaCByZXByZXNlbnRzIHRoZSBudW1iZXIgb2Ygc3dpdGNoZXMgZnJvbSBibGFjayB0byB3aGl0ZSB0byBsb29rIGZvci5cbmZ1bmN0aW9uIGNvdW50QmxhY2tXaGl0ZVJ1bihvcmlnaW4sIGVuZCwgbWF0cml4LCBsZW5ndGgpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIHJpc2UgPSBlbmQueSAtIG9yaWdpbi55O1xuICAgIHZhciBydW4gPSBlbmQueCAtIG9yaWdpbi54O1xuICAgIHZhciB0b3dhcmRzRW5kID0gY291bnRCbGFja1doaXRlUnVuVG93YXJkc1BvaW50KG9yaWdpbiwgZW5kLCBtYXRyaXgsIE1hdGguY2VpbChsZW5ndGggLyAyKSk7XG4gICAgdmFyIGF3YXlGcm9tRW5kID0gY291bnRCbGFja1doaXRlUnVuVG93YXJkc1BvaW50KG9yaWdpbiwgeyB4OiBvcmlnaW4ueCAtIHJ1biwgeTogb3JpZ2luLnkgLSByaXNlIH0sIG1hdHJpeCwgTWF0aC5jZWlsKGxlbmd0aCAvIDIpKTtcbiAgICB2YXIgbWlkZGxlVmFsdWUgPSB0b3dhcmRzRW5kLnNoaWZ0KCkgKyBhd2F5RnJvbUVuZC5zaGlmdCgpIC0gMTsgLy8gU3Vic3RyYWN0IG9uZSBzbyB3ZSBkb24ndCBkb3VibGUgY291bnQgYSBwaXhlbFxuICAgIHJldHVybiAoX2EgPSBhd2F5RnJvbUVuZC5jb25jYXQobWlkZGxlVmFsdWUpKS5jb25jYXQuYXBwbHkoX2EsIHRvd2FyZHNFbmQpO1xufVxuLy8gVGFrZXMgaW4gYSBibGFjayB3aGl0ZSBydW4gYW5kIGFuIGFycmF5IG9mIGV4cGVjdGVkIHJhdGlvcy4gUmV0dXJucyB0aGUgYXZlcmFnZSBzaXplIG9mIHRoZSBydW4gYXMgd2VsbCBhcyB0aGUgXCJlcnJvclwiIC1cbi8vIHRoYXQgaXMgdGhlIGFtb3VudCB0aGUgcnVuIGRpdmVyZ2VzIGZyb20gdGhlIGV4cGVjdGVkIHJhdGlvXG5mdW5jdGlvbiBzY29yZUJsYWNrV2hpdGVSdW4oc2VxdWVuY2UsIHJhdGlvcykge1xuICAgIHZhciBhdmVyYWdlU2l6ZSA9IHN1bShzZXF1ZW5jZSkgLyBzdW0ocmF0aW9zKTtcbiAgICB2YXIgZXJyb3IgPSAwO1xuICAgIHJhdGlvcy5mb3JFYWNoKGZ1bmN0aW9uIChyYXRpbywgaSkge1xuICAgICAgICBlcnJvciArPSBNYXRoLnBvdygoc2VxdWVuY2VbaV0gLSByYXRpbyAqIGF2ZXJhZ2VTaXplKSwgMik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgYXZlcmFnZVNpemU6IGF2ZXJhZ2VTaXplLCBlcnJvcjogZXJyb3IgfTtcbn1cbi8vIFRha2VzIGFuIFgsWSBwb2ludCBhbmQgYW4gYXJyYXkgb2Ygc2l6ZXMgYW5kIHNjb3JlcyB0aGUgcG9pbnQgYWdhaW5zdCB0aG9zZSByYXRpb3MuXG4vLyBGb3IgZXhhbXBsZSBmb3IgYSBmaW5kZXIgcGF0dGVybiB0YWtlcyB0aGUgcmF0aW8gbGlzdCBvZiAxOjE6MzoxOjEgYW5kIGNoZWNrcyBob3Jpem9udGFsLCB2ZXJ0aWNhbCBhbmQgZGlhZ29uYWwgcmF0aW9zXG4vLyBhZ2FpbnN0IHRoYXQuXG5mdW5jdGlvbiBzY29yZVBhdHRlcm4ocG9pbnQsIHJhdGlvcywgbWF0cml4KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGhvcml6b250YWxSdW4gPSBjb3VudEJsYWNrV2hpdGVSdW4ocG9pbnQsIHsgeDogLTEsIHk6IHBvaW50LnkgfSwgbWF0cml4LCByYXRpb3MubGVuZ3RoKTtcbiAgICAgICAgdmFyIHZlcnRpY2FsUnVuID0gY291bnRCbGFja1doaXRlUnVuKHBvaW50LCB7IHg6IHBvaW50LngsIHk6IC0xIH0sIG1hdHJpeCwgcmF0aW9zLmxlbmd0aCk7XG4gICAgICAgIHZhciB0b3BMZWZ0UG9pbnQgPSB7XG4gICAgICAgICAgICB4OiBNYXRoLm1heCgwLCBwb2ludC54IC0gcG9pbnQueSkgLSAxLFxuICAgICAgICAgICAgeTogTWF0aC5tYXgoMCwgcG9pbnQueSAtIHBvaW50LngpIC0gMSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRvcExlZnRCb3R0b21SaWdodFJ1biA9IGNvdW50QmxhY2tXaGl0ZVJ1bihwb2ludCwgdG9wTGVmdFBvaW50LCBtYXRyaXgsIHJhdGlvcy5sZW5ndGgpO1xuICAgICAgICB2YXIgYm90dG9tTGVmdFBvaW50ID0ge1xuICAgICAgICAgICAgeDogTWF0aC5taW4obWF0cml4LndpZHRoLCBwb2ludC54ICsgcG9pbnQueSkgKyAxLFxuICAgICAgICAgICAgeTogTWF0aC5taW4obWF0cml4LmhlaWdodCwgcG9pbnQueSArIHBvaW50LngpICsgMSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGJvdHRvbUxlZnRUb3BSaWdodFJ1biA9IGNvdW50QmxhY2tXaGl0ZVJ1bihwb2ludCwgYm90dG9tTGVmdFBvaW50LCBtYXRyaXgsIHJhdGlvcy5sZW5ndGgpO1xuICAgICAgICB2YXIgaG9yekVycm9yID0gc2NvcmVCbGFja1doaXRlUnVuKGhvcml6b250YWxSdW4sIHJhdGlvcyk7XG4gICAgICAgIHZhciB2ZXJ0RXJyb3IgPSBzY29yZUJsYWNrV2hpdGVSdW4odmVydGljYWxSdW4sIHJhdGlvcyk7XG4gICAgICAgIHZhciBkaWFnRG93bkVycm9yID0gc2NvcmVCbGFja1doaXRlUnVuKHRvcExlZnRCb3R0b21SaWdodFJ1biwgcmF0aW9zKTtcbiAgICAgICAgdmFyIGRpYWdVcEVycm9yID0gc2NvcmVCbGFja1doaXRlUnVuKGJvdHRvbUxlZnRUb3BSaWdodFJ1biwgcmF0aW9zKTtcbiAgICAgICAgdmFyIHJhdGlvRXJyb3IgPSBNYXRoLnNxcnQoaG9yekVycm9yLmVycm9yICogaG9yekVycm9yLmVycm9yICtcbiAgICAgICAgICAgIHZlcnRFcnJvci5lcnJvciAqIHZlcnRFcnJvci5lcnJvciArXG4gICAgICAgICAgICBkaWFnRG93bkVycm9yLmVycm9yICogZGlhZ0Rvd25FcnJvci5lcnJvciArXG4gICAgICAgICAgICBkaWFnVXBFcnJvci5lcnJvciAqIGRpYWdVcEVycm9yLmVycm9yKTtcbiAgICAgICAgdmFyIGF2Z1NpemUgPSAoaG9yekVycm9yLmF2ZXJhZ2VTaXplICsgdmVydEVycm9yLmF2ZXJhZ2VTaXplICsgZGlhZ0Rvd25FcnJvci5hdmVyYWdlU2l6ZSArIGRpYWdVcEVycm9yLmF2ZXJhZ2VTaXplKSAvIDQ7XG4gICAgICAgIHZhciBzaXplRXJyb3IgPSAoTWF0aC5wb3coKGhvcnpFcnJvci5hdmVyYWdlU2l6ZSAtIGF2Z1NpemUpLCAyKSArXG4gICAgICAgICAgICBNYXRoLnBvdygodmVydEVycm9yLmF2ZXJhZ2VTaXplIC0gYXZnU2l6ZSksIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KChkaWFnRG93bkVycm9yLmF2ZXJhZ2VTaXplIC0gYXZnU2l6ZSksIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KChkaWFnVXBFcnJvci5hdmVyYWdlU2l6ZSAtIGF2Z1NpemUpLCAyKSkgLyBhdmdTaXplO1xuICAgICAgICByZXR1cm4gcmF0aW9FcnJvciArIHNpemVFcnJvcjtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIHJldHVybiBJbmZpbml0eTtcbiAgICB9XG59XG5mdW5jdGlvbiByZWNlbnRlckxvY2F0aW9uKG1hdHJpeCwgcCkge1xuICAgIHZhciBsZWZ0WCA9IE1hdGgucm91bmQocC54KTtcbiAgICB3aGlsZSAobWF0cml4LmdldChsZWZ0WCwgTWF0aC5yb3VuZChwLnkpKSkge1xuICAgICAgICBsZWZ0WC0tO1xuICAgIH1cbiAgICB2YXIgcmlnaHRYID0gTWF0aC5yb3VuZChwLngpO1xuICAgIHdoaWxlIChtYXRyaXguZ2V0KHJpZ2h0WCwgTWF0aC5yb3VuZChwLnkpKSkge1xuICAgICAgICByaWdodFgrKztcbiAgICB9XG4gICAgdmFyIHggPSAobGVmdFggKyByaWdodFgpIC8gMjtcbiAgICB2YXIgdG9wWSA9IE1hdGgucm91bmQocC55KTtcbiAgICB3aGlsZSAobWF0cml4LmdldChNYXRoLnJvdW5kKHgpLCB0b3BZKSkge1xuICAgICAgICB0b3BZLS07XG4gICAgfVxuICAgIHZhciBib3R0b21ZID0gTWF0aC5yb3VuZChwLnkpO1xuICAgIHdoaWxlIChtYXRyaXguZ2V0KE1hdGgucm91bmQoeCksIGJvdHRvbVkpKSB7XG4gICAgICAgIGJvdHRvbVkrKztcbiAgICB9XG4gICAgdmFyIHkgPSAodG9wWSArIGJvdHRvbVkpIC8gMjtcbiAgICByZXR1cm4geyB4OiB4LCB5OiB5IH07XG59XG5mdW5jdGlvbiBsb2NhdGUobWF0cml4KSB7XG4gICAgdmFyIGZpbmRlclBhdHRlcm5RdWFkcyA9IFtdO1xuICAgIHZhciBhY3RpdmVGaW5kZXJQYXR0ZXJuUXVhZHMgPSBbXTtcbiAgICB2YXIgYWxpZ25tZW50UGF0dGVyblF1YWRzID0gW107XG4gICAgdmFyIGFjdGl2ZUFsaWdubWVudFBhdHRlcm5RdWFkcyA9IFtdO1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgdmFyIGxlbmd0aF8xID0gMDtcbiAgICAgICAgdmFyIGxhc3RCaXQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNjYW5zID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgICAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB2YXIgdiA9IG1hdHJpeC5nZXQoeCwgeSk7XG4gICAgICAgICAgICBpZiAodiA9PT0gbGFzdEJpdCkge1xuICAgICAgICAgICAgICAgIGxlbmd0aF8xKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2FucyA9IFtzY2Fuc1sxXSwgc2NhbnNbMl0sIHNjYW5zWzNdLCBzY2Fuc1s0XSwgbGVuZ3RoXzFdO1xuICAgICAgICAgICAgICAgIGxlbmd0aF8xID0gMTtcbiAgICAgICAgICAgICAgICBsYXN0Qml0ID0gdjtcbiAgICAgICAgICAgICAgICAvLyBEbyB0aGUgbGFzdCA1IGNvbG9yIGNoYW5nZXMgfiBtYXRjaCB0aGUgZXhwZWN0ZWQgcmF0aW8gZm9yIGEgZmluZGVyIHBhdHRlcm4/IDE6MTozOjE6MSBvZiBiOnc6Yjp3OmJcbiAgICAgICAgICAgICAgICB2YXIgYXZlcmFnZUZpbmRlclBhdHRlcm5CbG9ja3NpemUgPSBzdW0oc2NhbnMpIC8gNztcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRGaW5kZXJQYXR0ZXJuID0gTWF0aC5hYnMoc2NhbnNbMF0gLSBhdmVyYWdlRmluZGVyUGF0dGVybkJsb2Nrc2l6ZSkgPCBhdmVyYWdlRmluZGVyUGF0dGVybkJsb2Nrc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhzY2Fuc1sxXSAtIGF2ZXJhZ2VGaW5kZXJQYXR0ZXJuQmxvY2tzaXplKSA8IGF2ZXJhZ2VGaW5kZXJQYXR0ZXJuQmxvY2tzaXplICYmXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHNjYW5zWzJdIC0gMyAqIGF2ZXJhZ2VGaW5kZXJQYXR0ZXJuQmxvY2tzaXplKSA8IDMgKiBhdmVyYWdlRmluZGVyUGF0dGVybkJsb2Nrc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhzY2Fuc1szXSAtIGF2ZXJhZ2VGaW5kZXJQYXR0ZXJuQmxvY2tzaXplKSA8IGF2ZXJhZ2VGaW5kZXJQYXR0ZXJuQmxvY2tzaXplICYmXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHNjYW5zWzRdIC0gYXZlcmFnZUZpbmRlclBhdHRlcm5CbG9ja3NpemUpIDwgYXZlcmFnZUZpbmRlclBhdHRlcm5CbG9ja3NpemUgJiZcbiAgICAgICAgICAgICAgICAgICAgIXY7IC8vIEFuZCBtYWtlIHN1cmUgdGhlIGN1cnJlbnQgcGl4ZWwgaXMgd2hpdGUgc2luY2UgZmluZGVyIHBhdHRlcm5zIGFyZSBib3JkZXJlZCBpbiB3aGl0ZVxuICAgICAgICAgICAgICAgIC8vIERvIHRoZSBsYXN0IDMgY29sb3IgY2hhbmdlcyB+IG1hdGNoIHRoZSBleHBlY3RlZCByYXRpbyBmb3IgYW4gYWxpZ25tZW50IHBhdHRlcm4/IDE6MToxIG9mIHc6Yjp3XG4gICAgICAgICAgICAgICAgdmFyIGF2ZXJhZ2VBbGlnbm1lbnRQYXR0ZXJuQmxvY2tzaXplID0gc3VtKHNjYW5zLnNsaWNlKC0zKSkgLyAzO1xuICAgICAgICAgICAgICAgIHZhciB2YWxpZEFsaWdubWVudFBhdHRlcm4gPSBNYXRoLmFicyhzY2Fuc1syXSAtIGF2ZXJhZ2VBbGlnbm1lbnRQYXR0ZXJuQmxvY2tzaXplKSA8IGF2ZXJhZ2VBbGlnbm1lbnRQYXR0ZXJuQmxvY2tzaXplICYmXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKHNjYW5zWzNdIC0gYXZlcmFnZUFsaWdubWVudFBhdHRlcm5CbG9ja3NpemUpIDwgYXZlcmFnZUFsaWdubWVudFBhdHRlcm5CbG9ja3NpemUgJiZcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoc2NhbnNbNF0gLSBhdmVyYWdlQWxpZ25tZW50UGF0dGVybkJsb2Nrc2l6ZSkgPCBhdmVyYWdlQWxpZ25tZW50UGF0dGVybkJsb2Nrc2l6ZSAmJlxuICAgICAgICAgICAgICAgICAgICB2OyAvLyBJcyB0aGUgY3VycmVudCBwaXhlbCBibGFjayBzaW5jZSBhbGlnbm1lbnQgcGF0dGVybnMgYXJlIGJvcmRlcmVkIGluIGJsYWNrXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkRmluZGVyUGF0dGVybikge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb21wdXRlIHRoZSBzdGFydCBhbmQgZW5kIHggdmFsdWVzIG9mIHRoZSBsYXJnZSBjZW50ZXIgYmxhY2sgc3F1YXJlXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbmRYXzEgPSB4IC0gc2NhbnNbM10gLSBzY2Fuc1s0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0WF8xID0gZW5kWF8xIC0gc2NhbnNbMl07XG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5lID0geyBzdGFydFg6IHN0YXJ0WF8xLCBlbmRYOiBlbmRYXzEsIHk6IHkgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSXMgdGhlcmUgYSBxdWFkIGRpcmVjdGx5IGFib3ZlIHRoZSBjdXJyZW50IHNwb3Q/IElmIHNvLCBleHRlbmQgaXQgd2l0aCB0aGUgbmV3IGxpbmUuIE90aGVyd2lzZSwgY3JlYXRlIGEgbmV3IHF1YWQgd2l0aFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0IGxpbmUgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hpbmdRdWFkcyA9IGFjdGl2ZUZpbmRlclBhdHRlcm5RdWFkcy5maWx0ZXIoZnVuY3Rpb24gKHEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoc3RhcnRYXzEgPj0gcS5ib3R0b20uc3RhcnRYICYmIHN0YXJ0WF8xIDw9IHEuYm90dG9tLmVuZFgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVuZFhfMSA+PSBxLmJvdHRvbS5zdGFydFggJiYgc3RhcnRYXzEgPD0gcS5ib3R0b20uZW5kWCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhcnRYXzEgPD0gcS5ib3R0b20uc3RhcnRYICYmIGVuZFhfMSA+PSBxLmJvdHRvbS5lbmRYICYmICgoc2NhbnNbMl0gLyAocS5ib3R0b20uZW5kWCAtIHEuYm90dG9tLnN0YXJ0WCkpIDwgTUFYX1FVQURfUkFUSU8gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNjYW5zWzJdIC8gKHEuYm90dG9tLmVuZFggLSBxLmJvdHRvbS5zdGFydFgpKSA+IE1JTl9RVUFEX1JBVElPKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdRdWFkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGluZ1F1YWRzWzBdLmJvdHRvbSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVGaW5kZXJQYXR0ZXJuUXVhZHMucHVzaCh7IHRvcDogbGluZSwgYm90dG9tOiBsaW5lIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWxpZEFsaWdubWVudFBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSB0aGUgc3RhcnQgYW5kIGVuZCB4IHZhbHVlcyBvZiB0aGUgY2VudGVyIGJsYWNrIHNxdWFyZVxuICAgICAgICAgICAgICAgICAgICB2YXIgZW5kWF8yID0geCAtIHNjYW5zWzRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnRYXzIgPSBlbmRYXzIgLSBzY2Fuc1szXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmUgPSB7IHN0YXJ0WDogc3RhcnRYXzIsIHk6IHksIGVuZFg6IGVuZFhfMiB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBJcyB0aGVyZSBhIHF1YWQgZGlyZWN0bHkgYWJvdmUgdGhlIGN1cnJlbnQgc3BvdD8gSWYgc28sIGV4dGVuZCBpdCB3aXRoIHRoZSBuZXcgbGluZS4gT3RoZXJ3aXNlLCBjcmVhdGUgYSBuZXcgcXVhZCB3aXRoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgbGluZSBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGluZ1F1YWRzID0gYWN0aXZlQWxpZ25tZW50UGF0dGVyblF1YWRzLmZpbHRlcihmdW5jdGlvbiAocSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChzdGFydFhfMiA+PSBxLmJvdHRvbS5zdGFydFggJiYgc3RhcnRYXzIgPD0gcS5ib3R0b20uZW5kWCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW5kWF8yID49IHEuYm90dG9tLnN0YXJ0WCAmJiBzdGFydFhfMiA8PSBxLmJvdHRvbS5lbmRYKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGFydFhfMiA8PSBxLmJvdHRvbS5zdGFydFggJiYgZW5kWF8yID49IHEuYm90dG9tLmVuZFggJiYgKChzY2Fuc1syXSAvIChxLmJvdHRvbS5lbmRYIC0gcS5ib3R0b20uc3RhcnRYKSkgPCBNQVhfUVVBRF9SQVRJTyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2NhbnNbMl0gLyAocS5ib3R0b20uZW5kWCAtIHEuYm90dG9tLnN0YXJ0WCkpID4gTUlOX1FVQURfUkFUSU8pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGluZ1F1YWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoaW5nUXVhZHNbMF0uYm90dG9tID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUFsaWdubWVudFBhdHRlcm5RdWFkcy5wdXNoKHsgdG9wOiBsaW5lLCBib3R0b206IGxpbmUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIHggPSAtMTsgeCA8PSBtYXRyaXgud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgX2xvb3BfMih4KTtcbiAgICAgICAgfVxuICAgICAgICBmaW5kZXJQYXR0ZXJuUXVhZHMucHVzaC5hcHBseShmaW5kZXJQYXR0ZXJuUXVhZHMsIGFjdGl2ZUZpbmRlclBhdHRlcm5RdWFkcy5maWx0ZXIoZnVuY3Rpb24gKHEpIHsgcmV0dXJuIHEuYm90dG9tLnkgIT09IHkgJiYgcS5ib3R0b20ueSAtIHEudG9wLnkgPj0gMjsgfSkpO1xuICAgICAgICBhY3RpdmVGaW5kZXJQYXR0ZXJuUXVhZHMgPSBhY3RpdmVGaW5kZXJQYXR0ZXJuUXVhZHMuZmlsdGVyKGZ1bmN0aW9uIChxKSB7IHJldHVybiBxLmJvdHRvbS55ID09PSB5OyB9KTtcbiAgICAgICAgYWxpZ25tZW50UGF0dGVyblF1YWRzLnB1c2guYXBwbHkoYWxpZ25tZW50UGF0dGVyblF1YWRzLCBhY3RpdmVBbGlnbm1lbnRQYXR0ZXJuUXVhZHMuZmlsdGVyKGZ1bmN0aW9uIChxKSB7IHJldHVybiBxLmJvdHRvbS55ICE9PSB5OyB9KSk7XG4gICAgICAgIGFjdGl2ZUFsaWdubWVudFBhdHRlcm5RdWFkcyA9IGFjdGl2ZUFsaWdubWVudFBhdHRlcm5RdWFkcy5maWx0ZXIoZnVuY3Rpb24gKHEpIHsgcmV0dXJuIHEuYm90dG9tLnkgPT09IHk7IH0pO1xuICAgIH07XG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPD0gbWF0cml4LmhlaWdodDsgeSsrKSB7XG4gICAgICAgIF9sb29wXzEoeSk7XG4gICAgfVxuICAgIGZpbmRlclBhdHRlcm5RdWFkcy5wdXNoLmFwcGx5KGZpbmRlclBhdHRlcm5RdWFkcywgYWN0aXZlRmluZGVyUGF0dGVyblF1YWRzLmZpbHRlcihmdW5jdGlvbiAocSkgeyByZXR1cm4gcS5ib3R0b20ueSAtIHEudG9wLnkgPj0gMjsgfSkpO1xuICAgIGFsaWdubWVudFBhdHRlcm5RdWFkcy5wdXNoLmFwcGx5KGFsaWdubWVudFBhdHRlcm5RdWFkcywgYWN0aXZlQWxpZ25tZW50UGF0dGVyblF1YWRzKTtcbiAgICB2YXIgZmluZGVyUGF0dGVybkdyb3VwcyA9IGZpbmRlclBhdHRlcm5RdWFkc1xuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChxKSB7IHJldHVybiBxLmJvdHRvbS55IC0gcS50b3AueSA+PSAyOyB9KSAvLyBBbGwgcXVhZHMgbXVzdCBiZSBhdCBsZWFzdCAycHggdGFsbCBzaW5jZSB0aGUgY2VudGVyIHNxdWFyZSBpcyBsYXJnZXIgdGhhbiBhIGJsb2NrXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHEpIHtcbiAgICAgICAgdmFyIHggPSAocS50b3Auc3RhcnRYICsgcS50b3AuZW5kWCArIHEuYm90dG9tLnN0YXJ0WCArIHEuYm90dG9tLmVuZFgpIC8gNDtcbiAgICAgICAgdmFyIHkgPSAocS50b3AueSArIHEuYm90dG9tLnkgKyAxKSAvIDI7XG4gICAgICAgIGlmICghbWF0cml4LmdldChNYXRoLnJvdW5kKHgpLCBNYXRoLnJvdW5kKHkpKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZW5ndGhzID0gW3EudG9wLmVuZFggLSBxLnRvcC5zdGFydFgsIHEuYm90dG9tLmVuZFggLSBxLmJvdHRvbS5zdGFydFgsIHEuYm90dG9tLnkgLSBxLnRvcC55ICsgMV07XG4gICAgICAgIHZhciBzaXplID0gc3VtKGxlbmd0aHMpIC8gbGVuZ3Rocy5sZW5ndGg7XG4gICAgICAgIHZhciBzY29yZSA9IHNjb3JlUGF0dGVybih7IHg6IE1hdGgucm91bmQoeCksIHk6IE1hdGgucm91bmQoeSkgfSwgWzEsIDEsIDMsIDEsIDFdLCBtYXRyaXgpO1xuICAgICAgICByZXR1cm4geyBzY29yZTogc2NvcmUsIHg6IHgsIHk6IHksIHNpemU6IHNpemUgfTtcbiAgICB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChxKSB7IHJldHVybiAhIXE7IH0pIC8vIEZpbHRlciBvdXQgYW55IHJlamVjdGVkIHF1YWRzIGZyb20gYWJvdmVcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuc2NvcmUgLSBiLnNjb3JlOyB9KVxuICAgICAgICAvLyBOb3cgdGFrZSB0aGUgdG9wIGZpbmRlciBwYXR0ZXJuIG9wdGlvbnMgYW5kIHRyeSB0byBmaW5kIDIgb3RoZXIgb3B0aW9ucyB3aXRoIGEgc2ltaWxhciBzaXplLlxuICAgICAgICAubWFwKGZ1bmN0aW9uIChwb2ludCwgaSwgZmluZGVyUGF0dGVybnMpIHtcbiAgICAgICAgaWYgKGkgPiBNQVhfRklOREVSUEFUVEVSTlNfVE9fU0VBUkNIKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3RoZXJQb2ludHMgPSBmaW5kZXJQYXR0ZXJuc1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAocCwgaWkpIHsgcmV0dXJuIGkgIT09IGlpOyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocCkgeyByZXR1cm4gKHsgeDogcC54LCB5OiBwLnksIHNjb3JlOiBwLnNjb3JlICsgKE1hdGgucG93KChwLnNpemUgLSBwb2ludC5zaXplKSwgMikpIC8gcG9pbnQuc2l6ZSwgc2l6ZTogcC5zaXplIH0pOyB9KVxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuc2NvcmUgLSBiLnNjb3JlOyB9KTtcbiAgICAgICAgaWYgKG90aGVyUG9pbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzY29yZSA9IHBvaW50LnNjb3JlICsgb3RoZXJQb2ludHNbMF0uc2NvcmUgKyBvdGhlclBvaW50c1sxXS5zY29yZTtcbiAgICAgICAgcmV0dXJuIHsgcG9pbnRzOiBbcG9pbnRdLmNvbmNhdChvdGhlclBvaW50cy5zbGljZSgwLCAyKSksIHNjb3JlOiBzY29yZSB9O1xuICAgIH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHEpIHsgcmV0dXJuICEhcTsgfSkgLy8gRmlsdGVyIG91dCBhbnkgcmVqZWN0ZWQgZmluZGVyIHBhdHRlcm5zIGZyb20gYWJvdmVcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuc2NvcmUgLSBiLnNjb3JlOyB9KTtcbiAgICBpZiAoZmluZGVyUGF0dGVybkdyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBfYSA9IHJlb3JkZXJGaW5kZXJQYXR0ZXJucyhmaW5kZXJQYXR0ZXJuR3JvdXBzWzBdLnBvaW50c1swXSwgZmluZGVyUGF0dGVybkdyb3Vwc1swXS5wb2ludHNbMV0sIGZpbmRlclBhdHRlcm5Hcm91cHNbMF0ucG9pbnRzWzJdKSwgdG9wUmlnaHQgPSBfYS50b3BSaWdodCwgdG9wTGVmdCA9IF9hLnRvcExlZnQsIGJvdHRvbUxlZnQgPSBfYS5ib3R0b21MZWZ0O1xuICAgIHZhciBhbGlnbm1lbnQgPSBmaW5kQWxpZ25tZW50UGF0dGVybihtYXRyaXgsIGFsaWdubWVudFBhdHRlcm5RdWFkcywgdG9wUmlnaHQsIHRvcExlZnQsIGJvdHRvbUxlZnQpO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBpZiAoYWxpZ25tZW50KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIGFsaWdubWVudFBhdHRlcm46IHsgeDogYWxpZ25tZW50LmFsaWdubWVudFBhdHRlcm4ueCwgeTogYWxpZ25tZW50LmFsaWdubWVudFBhdHRlcm4ueSB9LFxuICAgICAgICAgICAgYm90dG9tTGVmdDogeyB4OiBib3R0b21MZWZ0LngsIHk6IGJvdHRvbUxlZnQueSB9LFxuICAgICAgICAgICAgZGltZW5zaW9uOiBhbGlnbm1lbnQuZGltZW5zaW9uLFxuICAgICAgICAgICAgdG9wTGVmdDogeyB4OiB0b3BMZWZ0LngsIHk6IHRvcExlZnQueSB9LFxuICAgICAgICAgICAgdG9wUmlnaHQ6IHsgeDogdG9wUmlnaHQueCwgeTogdG9wUmlnaHQueSB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gV2Ugbm9ybWFsbHkgdXNlIHRoZSBjZW50ZXIgb2YgdGhlIHF1YWRzIGFzIHRoZSBsb2NhdGlvbiBvZiB0aGUgdHJhY2tpbmcgcG9pbnRzLCB3aGljaCBpcyBvcHRpbWFsIGZvciBtb3N0IGNhc2VzIGFuZCB3aWxsIGFjY291bnRcbiAgICAvLyBmb3IgYSBza2V3IGluIHRoZSBpbWFnZS4gSG93ZXZlciwgSW4gc29tZSBjYXNlcywgYSBzbGlnaHQgc2tldyBtaWdodCBub3QgYmUgcmVhbCBhbmQgaW5zdGVhZCBiZSBjYXVzZWQgYnkgaW1hZ2UgY29tcHJlc3Npb25cbiAgICAvLyBlcnJvcnMgYW5kL29yIGxvdyByZXNvbHV0aW9uLiBGb3IgdGhvc2UgY2FzZXMsIHdlJ2QgYmUgYmV0dGVyIG9mZiBjZW50ZXJpbmcgdGhlIHBvaW50IGV4YWN0bHkgaW4gdGhlIG1pZGRsZSBvZiB0aGUgYmxhY2sgYXJlYS4gV2VcbiAgICAvLyBjb21wdXRlIGFuZCByZXR1cm4gdGhlIGxvY2F0aW9uIGRhdGEgZm9yIHRoZSBuYWl2ZWx5IGNlbnRlcmVkIHBvaW50cyBhcyBpdCBpcyBsaXR0bGUgYWRkaXRpb25hbCB3b3JrIGFuZCBhbGxvd3MgZm9yIG11bHRpcGxlXG4gICAgLy8gYXR0ZW1wdHMgYXQgZGVjb2RpbmcgaGFyZGVyIGltYWdlcy5cbiAgICB2YXIgbWlkVG9wUmlnaHQgPSByZWNlbnRlckxvY2F0aW9uKG1hdHJpeCwgdG9wUmlnaHQpO1xuICAgIHZhciBtaWRUb3BMZWZ0ID0gcmVjZW50ZXJMb2NhdGlvbihtYXRyaXgsIHRvcExlZnQpO1xuICAgIHZhciBtaWRCb3R0b21MZWZ0ID0gcmVjZW50ZXJMb2NhdGlvbihtYXRyaXgsIGJvdHRvbUxlZnQpO1xuICAgIHZhciBjZW50ZXJlZEFsaWdubWVudCA9IGZpbmRBbGlnbm1lbnRQYXR0ZXJuKG1hdHJpeCwgYWxpZ25tZW50UGF0dGVyblF1YWRzLCBtaWRUb3BSaWdodCwgbWlkVG9wTGVmdCwgbWlkQm90dG9tTGVmdCk7XG4gICAgaWYgKGNlbnRlcmVkQWxpZ25tZW50KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgIGFsaWdubWVudFBhdHRlcm46IHsgeDogY2VudGVyZWRBbGlnbm1lbnQuYWxpZ25tZW50UGF0dGVybi54LCB5OiBjZW50ZXJlZEFsaWdubWVudC5hbGlnbm1lbnRQYXR0ZXJuLnkgfSxcbiAgICAgICAgICAgIGJvdHRvbUxlZnQ6IHsgeDogbWlkQm90dG9tTGVmdC54LCB5OiBtaWRCb3R0b21MZWZ0LnkgfSxcbiAgICAgICAgICAgIHRvcExlZnQ6IHsgeDogbWlkVG9wTGVmdC54LCB5OiBtaWRUb3BMZWZ0LnkgfSxcbiAgICAgICAgICAgIHRvcFJpZ2h0OiB7IHg6IG1pZFRvcFJpZ2h0LngsIHk6IG1pZFRvcFJpZ2h0LnkgfSxcbiAgICAgICAgICAgIGRpbWVuc2lvbjogY2VudGVyZWRBbGlnbm1lbnQuZGltZW5zaW9uLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmxvY2F0ZSA9IGxvY2F0ZTtcbmZ1bmN0aW9uIGZpbmRBbGlnbm1lbnRQYXR0ZXJuKG1hdHJpeCwgYWxpZ25tZW50UGF0dGVyblF1YWRzLCB0b3BSaWdodCwgdG9wTGVmdCwgYm90dG9tTGVmdCkge1xuICAgIHZhciBfYTtcbiAgICAvLyBOb3cgdGhhdCB3ZSd2ZSBmb3VuZCB0aGUgdGhyZWUgZmluZGVyIHBhdHRlcm5zIHdlIGNhbiBkZXRlcm1pbmUgdGhlIGJsb2NrU2l6ZSBhbmQgdGhlIHNpemUgb2YgdGhlIFFSIGNvZGUuXG4gICAgLy8gV2UnbGwgdXNlIHRoZXNlIHRvIGhlbHAgZmluZCB0aGUgYWxpZ25tZW50IHBhdHRlcm4gYnV0IGFsc28gbGF0ZXIgd2hlbiB3ZSBkbyB0aGUgZXh0cmFjdGlvbi5cbiAgICB2YXIgZGltZW5zaW9uO1xuICAgIHZhciBtb2R1bGVTaXplO1xuICAgIHRyeSB7XG4gICAgICAgIChfYSA9IGNvbXB1dGVEaW1lbnNpb24odG9wTGVmdCwgdG9wUmlnaHQsIGJvdHRvbUxlZnQsIG1hdHJpeCksIGRpbWVuc2lvbiA9IF9hLmRpbWVuc2lvbiwgbW9kdWxlU2l6ZSA9IF9hLm1vZHVsZVNpemUpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gTm93IGZpbmQgdGhlIGFsaWdubWVudCBwYXR0ZXJuXG4gICAgdmFyIGJvdHRvbVJpZ2h0RmluZGVyUGF0dGVybiA9IHtcbiAgICAgICAgeDogdG9wUmlnaHQueCAtIHRvcExlZnQueCArIGJvdHRvbUxlZnQueCxcbiAgICAgICAgeTogdG9wUmlnaHQueSAtIHRvcExlZnQueSArIGJvdHRvbUxlZnQueSxcbiAgICB9O1xuICAgIHZhciBtb2R1bGVzQmV0d2VlbkZpbmRlclBhdHRlcm5zID0gKChkaXN0YW5jZSh0b3BMZWZ0LCBib3R0b21MZWZ0KSArIGRpc3RhbmNlKHRvcExlZnQsIHRvcFJpZ2h0KSkgLyAyIC8gbW9kdWxlU2l6ZSk7XG4gICAgdmFyIGNvcnJlY3Rpb25Ub1RvcExlZnQgPSAxIC0gKDMgLyBtb2R1bGVzQmV0d2VlbkZpbmRlclBhdHRlcm5zKTtcbiAgICB2YXIgZXhwZWN0ZWRBbGlnbm1lbnRQYXR0ZXJuID0ge1xuICAgICAgICB4OiB0b3BMZWZ0LnggKyBjb3JyZWN0aW9uVG9Ub3BMZWZ0ICogKGJvdHRvbVJpZ2h0RmluZGVyUGF0dGVybi54IC0gdG9wTGVmdC54KSxcbiAgICAgICAgeTogdG9wTGVmdC55ICsgY29ycmVjdGlvblRvVG9wTGVmdCAqIChib3R0b21SaWdodEZpbmRlclBhdHRlcm4ueSAtIHRvcExlZnQueSksXG4gICAgfTtcbiAgICB2YXIgYWxpZ25tZW50UGF0dGVybnMgPSBhbGlnbm1lbnRQYXR0ZXJuUXVhZHNcbiAgICAgICAgLm1hcChmdW5jdGlvbiAocSkge1xuICAgICAgICB2YXIgeCA9IChxLnRvcC5zdGFydFggKyBxLnRvcC5lbmRYICsgcS5ib3R0b20uc3RhcnRYICsgcS5ib3R0b20uZW5kWCkgLyA0O1xuICAgICAgICB2YXIgeSA9IChxLnRvcC55ICsgcS5ib3R0b20ueSArIDEpIC8gMjtcbiAgICAgICAgaWYgKCFtYXRyaXguZ2V0KE1hdGguZmxvb3IoeCksIE1hdGguZmxvb3IoeSkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlbmd0aHMgPSBbcS50b3AuZW5kWCAtIHEudG9wLnN0YXJ0WCwgcS5ib3R0b20uZW5kWCAtIHEuYm90dG9tLnN0YXJ0WCwgKHEuYm90dG9tLnkgLSBxLnRvcC55ICsgMSldO1xuICAgICAgICB2YXIgc2l6ZSA9IHN1bShsZW5ndGhzKSAvIGxlbmd0aHMubGVuZ3RoO1xuICAgICAgICB2YXIgc2l6ZVNjb3JlID0gc2NvcmVQYXR0ZXJuKHsgeDogTWF0aC5mbG9vcih4KSwgeTogTWF0aC5mbG9vcih5KSB9LCBbMSwgMSwgMV0sIG1hdHJpeCk7XG4gICAgICAgIHZhciBzY29yZSA9IHNpemVTY29yZSArIGRpc3RhbmNlKHsgeDogeCwgeTogeSB9LCBleHBlY3RlZEFsaWdubWVudFBhdHRlcm4pO1xuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCBzY29yZTogc2NvcmUgfTtcbiAgICB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uICh2KSB7IHJldHVybiAhIXY7IH0pXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLnNjb3JlIC0gYi5zY29yZTsgfSk7XG4gICAgLy8gSWYgdGhlcmUgYXJlIGxlc3MgdGhhbiAxNSBtb2R1bGVzIGJldHdlZW4gZmluZGVyIHBhdHRlcm5zIGl0J3MgYSB2ZXJzaW9uIDEgUVIgY29kZSBhbmQgYXMgc3VjaCBoYXMgbm8gYWxpZ25tZW1udCBwYXR0ZXJuXG4gICAgLy8gc28gd2UgY2FuIG9ubHkgdXNlIG91ciBiZXN0IGd1ZXNzLlxuICAgIHZhciBhbGlnbm1lbnRQYXR0ZXJuID0gbW9kdWxlc0JldHdlZW5GaW5kZXJQYXR0ZXJucyA+PSAxNSAmJiBhbGlnbm1lbnRQYXR0ZXJucy5sZW5ndGggPyBhbGlnbm1lbnRQYXR0ZXJuc1swXSA6IGV4cGVjdGVkQWxpZ25tZW50UGF0dGVybjtcbiAgICByZXR1cm4geyBhbGlnbm1lbnRQYXR0ZXJuOiBhbGlnbm1lbnRQYXR0ZXJuLCBkaW1lbnNpb246IGRpbWVuc2lvbiB9O1xufVxuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKVtcImRlZmF1bHRcIl07XG59KTsiLCJpbXBvcnQganNRUiwgeyBRUkNvZGUgfSBmcm9tIFwianNxclwiXG5pbXBvcnQgeyBGdW5jdGlvbk1hcHBpbmcsIFdvcmtlck1lc3NhZ2UgfSBmcm9tIFwiLi9tcXItd29ya2VyLmRcIiBcblxuY29uc3QgY3R4OiBXb3JrZXIgPSBzZWxmIGFzIGFueTtcblxuY29uc3QgbWFwRnVuY3Rpb25XaXRoVHlwZSA9IChkYXRhOiBXb3JrZXJNZXNzYWdlLCBtYXBwaW5nOiBGdW5jdGlvbk1hcHBpbmcpID0+IHtcblx0Y29uc3QgeyB0eXBlLCBib2R5IH0gPSBkYXRhO1xuXHRjb25zdCBmbiA9IG1hcHBpbmdbdHlwZV07XG5cdGNvbnN0IHJhd1Jlc3VsdCA9IGZuKGJvZHkpO1xuXHRcblx0cmV0dXJuIHtcblx0XHR0eXBlLFxuXHRcdGJvZHk6IHJhd1Jlc3VsdFxuXHR9O1xufVxuXG5jb25zdCBmdW5jdGlvbk1hcHBlckNyZWF0b3IgPSAobWFwcGluZzogRnVuY3Rpb25NYXBwaW5nKSA9PiBldmVudCA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IG1hcEZ1bmN0aW9uV2l0aFR5cGUoZXZlbnQuZGF0YSwgbWFwcGluZyk7XG5cdGN0eC5wb3N0TWVzc2FnZShyZXN1bHQpO1xufVxuXG5jb25zdCBzY2FuUVJDb2RlID0gKGltYWdlRGF0YTogSW1hZ2VEYXRhKTogUVJDb2RlID0+IHtcblx0Y29uc3QgY29kZSA9IGpzUVIoaW1hZ2VEYXRhLmRhdGEsIGltYWdlRGF0YS53aWR0aCwgaW1hZ2VEYXRhLmhlaWdodCwge1xuXHRcdGludmVyc2lvbkF0dGVtcHRzOiBcImRvbnRJbnZlcnRcIixcblx0fSk7XG5cblx0cmV0dXJuIGNvZGVcbn1cblxuY3R4Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uTWFwcGVyQ3JlYXRvcih7XG5cdFwic2Nhbl9xcmNvZGVcIjogc2NhblFSQ29kZVxufSlcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9zcmMvd29ya2VyL21xci13b3JrZXIudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9
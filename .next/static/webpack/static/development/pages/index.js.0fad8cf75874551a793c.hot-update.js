webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function webpackUniversalModuleDefinition(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,(function(e,t){return function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)__webpack_require__.d(n,o,function(t){return e[t]}.bind(null,o));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=5)}([function(e,t,n){"use strict";function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return classToModules})),n.d(t,"c",(function(){return getClassName}));var o=function(){function MediaLoader(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MediaLoader),"undefined"!=typeof window&&(this.image=new Image,this.resolve=null,this.video=document.createElement("video"),this.events())}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(MediaLoader,[{key:"events",value:function events(){var e=this;this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!0)})),this.video.addEventListener("loadeddata",(function(){return e.resolve&&e.resolve(!1)})),this.image.onload=function(){return e.resolve&&e.resolve(!0)},this.image.onerror=function(){return e.resolve&&e.resolve(!1)}}},{key:"load",value:function load(e){var t=this;return new Promise((function(n){e||n(!0),t.resolve=n,t.loading=!0,t.ended=!1,e.match(/\.(mp4|webm)/i)&&t.video.setAttribute("src",e),e.match(/\.(png|jp(e)?g|gif|webp)/i)&&(t.image.src=e,(t.image.width>0||t.image.height>0)&&n(!0))}))}},{key:"loadImage",value:function loadImage(e){var t=this,n=new Image,o=!1;n.onload=function(){o||t.pumpLoaded()},n.onerror=function(){o||t.pumpLoaded()},n.src=e,!1===o&&(n.width>0||n.height>0)&&(o=!0,this.pumpLoaded())}},{key:"loadVideo",value:function loadVideo(e){var t=this,n=document.createElement("video");n.addEventListener("loadeddata",(function(){t.pumpLoaded()})),n.addEventListener("error",(function(){t.pumpLoaded()})),n.setAttribute("src",e)}},{key:"pumpLoaded",value:function pumpLoaded(){this.loaded+=1,this.loaded===this.toLoad&&this.resolver(!0)}},{key:"startLoad",value:function startLoad(e){e.match(/\.(mp4|webm)/i)&&this.loadVideo(e),e.match(/\.(png|jp(e)?g|gif|webp)/i)&&this.loadImage(e)}},{key:"loadMultiple",value:function loadMultiple(e){var t=this;return this.loaded=0,this.toLoad=e.length,new Promise((function(n){t.resolver=n,e.forEach((function(e){t.startLoad(e)}))}))}}]),MediaLoader}();function classToModules(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(!t)return e.join(" ").trim();for(var n=[],o=e.length;o--;)t[e[o]]&&n.push(t[e[o]]);return n}function getClassName(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t&&t[e]||e}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return getRootClassName})),n.d(t,"g",(function(){return transformChildren})),n.d(t,"f",(function(){return setupClassNames}));var o=n(0);function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function classListAdd(e,t){"string"==typeof t&&e&&t.split(" ").forEach((function(t){e.classList.add(t)}))},i=function classListRemove(e,t){"string"==typeof t&&e&&t.split(" ").forEach((function(t){e.classList.remove(t)}))},a=function getAnyClassName(e){return"string"==typeof e&&e.split(" ")[0]||""},s=function mergeStyles(e){var t=Array.isArray(e)?e:[e];if(1===t.length)return t[0];for(var n=_objectSpread({},t[0]),o=1;o<t.length;o+=1){for(var r in n)t[o][r]&&(n[r]=[n[r],t[o][r]].join(" "));for(var i in t[o])n[i]||(n[i]=t[o][i])}return n};function getRootClassName(e){var t,n=e.rootElement,r=e.cssModule,i=e.disabled,a=e.organicArrows,s=e.className,c=e.total,l=e.current,u=e.infinite,d=e.animation,f=e.fillParent,p=[n];(d&&p.push("".concat(n,"--").concat(d)),!0===a&&p.push("".concat(n,"--organic-arrows")),!0===i&&p.push("".concat(n,"--disabled")),f&&p.push("".concat(n,"--fill-parent")),!1===u&&(0===l&&p.push("".concat(n,"--first")),l===c-1&&p.push("".concat(n,"--last"))),r&&r[n]&&(p=Object(o.b)(p,r)),s)&&(t=p).push.apply(t,_toConsumableArray(s.split(" ")));return p.join(" ").trim().replace(/[\s]+/gi," ")}function transformChildren(e){var t=[];return(e.constructor===Array?e:[e]).forEach((function(e){var n=_objectSpread({},e.props);e.props["data-src"]&&(n.source=e.props["data-src"]),e.props["data-slug"]&&(n.slug=e.props["data-slug"]),t.push(n)})),t}function setupClassNames(e,t){return{boxA:Object(o.c)("".concat(e,"__boxA"),t),boxB:Object(o.c)("".concat(e,"__boxB"),t),box:Object(o.c)("".concat(e,"__box"),t),container:Object(o.c)("".concat(e,"__container"),t),wrapper:Object(o.c)("".concat(e,"__wrapper"),t),bar:Object(o.c)("".concat(e,"__bar"),t),barActive:Object(o.c)("".concat(e,"__bar--active"),t),barEnd:Object(o.c)("".concat(e,"__bar--end"),t),content:Object(o.c)("".concat(e,"__content"),t),contentStatic:Object(o.c)("".concat(e,"__content--static"),t),contentMoveLeft:Object(o.c)("".concat(e,"__content--moveLeft"),t),contentMoveRight:Object(o.c)("".concat(e,"__content--moveRight"),t),controlsHidden:Object(o.c)("".concat(e,"__controls--hidden"),t),controlsActive:Object(o.c)("".concat(e,"__controls--active"),t),animated:Object(o.c)("".concat(e,"--animated"),t),animatedMobile:Object(o.c)("".concat(e,"--animated-mobile"),t),contentExit:Object(o.c)("".concat(e,"__content--exit"),t),exit:Object(o.c)("".concat(e,"--exit"),t),active:Object(o.c)("".concat(e,"--active"),t),moveLeft:Object(o.c)("".concat(e,"--moveLeft"),t),moveRight:Object(o.c)("".concat(e,"--moveRight"),t),startUp:Object(o.c)("".concat(e,"__startUp"),t),bulletsLoading:Object(o.c)("".concat(e,"__bullets--loading"),t)}}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.tolerance,r=void 0===o?0:o,i=n.propertyName;return new Promise((function(n){if(e){var o=null,a=t.charAt(0).toUpperCase()+t.slice(1),s=0;void 0!==e.style["Webkit"+a]&&(o="webkit"+a+"End"),void 0!==e.style.OTransition&&(o="o"+t+"End"),void 0!==e.style[t]&&(o=t+"end"),e.clearCssEndEvent&&e.clearCssEndEvent(),e.clearCssEndEvent=function(){e.removeEventListener(o,c)},e.addEventListener(o,c)}else n(!1);function c(t){if((t.srcElement||t.target)===e){if(s>=r){if(i&&i!==t.propertyName)return;e.removeEventListener(o,c),n(t)}s+=1}}}))}function r(e){window&&window.requestAnimationFrame((function(){window.requestAnimationFrame(e)}))}Object.defineProperty(t,"__esModule",{value:!0}),t.setCssEndEvent=o,t.beforeCssLayout=function(e){window&&window.requestAnimationFrame(e)},t.beforeNextCssLayout=r,t.beforeFutureCssLayout=function(e,t){!function e(t,n){window&&t&&Number.isInteger(t)&&t>0?window.requestAnimationFrame((function(){e(t-1,n)})):n()}(e+1,t)},t.onceNextCssLayout=function(){return new Promise((function(e){r(e)}))},t.onceTransitionEnd=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){o(e,"transition",t).then(n)}))},t.onceAnimationEnd=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n){o(e,"animation",t).then(n)}))}}])},function(e,t,n){e.exports=n(13)},,,,,,,,function(e,t,n){"use strict";n.r(t);var o=n(3),r=n.n(o),i=n(2),a=n.n(i),s=n(4),c=n(0),l=n(1);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){function Bullets(e){var t;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Bullets),t=function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}(this,_getPrototypeOf(Bullets).call(this,e)),_defineProperty(_assertThisInitialized(t),"bulletClick",(function(e){var n=e.currentTarget;n.classList.add(Object(c.c)("".concat(t.rootElement,"__bullets--loading"),t.props.cssModule));var o=parseInt(n.getAttribute("data-index"),10),r=!(t.props.selected>o);t.props.onClick({index:o,direction:r})})),t.rootElement=e.rootElement,t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Bullets,e),function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Bullets,[{key:"renderBullets",value:function renderBullets(){var e=this,t=this.props,n=t.cssModule,o=t.selected,i=t.media;return(void 0===i?[]:i).map((function(t,i){var a=i===o?Object(c.c)("".concat(e.rootElement,"__bullets--active"),n):null;return r.a.createElement("button",{key:"bullet-".concat(i),"data-index":i,onClick:e.bulletClick,className:a},i)}))}},{key:"render",value:function render(){var e=this.props,t=e.cssModule,n=e.rootElement;return r.a.createElement("nav",{className:Object(c.c)("".concat(n,"__bullets"),t)},this.renderBullets())}}]),Bullets}(r.a.Component);function buttons_typeof(e){return(buttons_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function buttons_defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function buttons_possibleConstructorReturn(e,t){return!t||"object"!==buttons_typeof(t)&&"function"!=typeof t?function buttons_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function buttons_getPrototypeOf(e){return(buttons_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function buttons_setPrototypeOf(e,t){return(buttons_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function buttons_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}_defineProperty(u,"propTypes",{cssModule:a.a.object,rootElement:a.a.string.isRequired,media:a.a.array,onClick:a.a.func,selected:a.a.number}),_defineProperty(u,"defaultProps",{cssModule:null,selected:0,media:[],onClick:function onClick(){}});var d=function(e){function Buttons(){return function buttons_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Buttons),buttons_possibleConstructorReturn(this,buttons_getPrototypeOf(Buttons).apply(this,arguments))}return function buttons_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&buttons_setPrototypeOf(e,t)}(Buttons,e),function buttons_createClass(e,t,n){return t&&buttons_defineProperties(e.prototype,t),n&&buttons_defineProperties(e,n),e}(Buttons,[{key:"componentDidMount",value:function componentDidMount(){this.props.onMount({element:this.controls,next:this.next,prev:this.prev})}},{key:"render",value:function render(){var e=this,t=this.props,n=t.rootElement,o=t.cssModule,i=t.organicArrows,a=t.buttonContentLeft,s=t.buttonContentRight,l=t.onNext,u=t.onPrev;return r.a.createElement("div",{ref:function ref(t){e.controls=t,e.props.onMount({element:e.controls,next:e.next||null,prev:e.prev||null})},className:[Object(c.c)("".concat(n,"__controls"),o),Object(c.c)("".concat(n,"__controls--hidden"),o)].join(" ")},r.a.createElement("button",{ref:function ref(t){e.next=t},"aria-label":"next",className:Object(c.c)("".concat(n,"__next"),o),onClick:l},i?r.a.createElement("span",{className:Object(c.c)("".concat(n,"__controls__arrow-right"),o)}):s),r.a.createElement("button",{ref:function ref(t){e.prev=t},"aria-label":"previous",className:Object(c.c)("".concat(n,"__prev"),o),onClick:u},i?r.a.createElement("span",{className:Object(c.c)("".concat(n,"__controls__arrow-left"),o)}):a))}}]),Buttons}(r.a.Component);function media_typeof(e){return(media_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var n,o,r=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function media_defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function media_getPrototypeOf(e){return(media_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function media_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function media_setPrototypeOf(e,t){return(media_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function media_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}buttons_defineProperty(d,"propTypes",{cssModule:a.a.object,rootElement:a.a.string.isRequired,onMount:a.a.func.isRequired,onNext:a.a.func.isRequired,onPrev:a.a.func.isRequired,buttonContentLeft:a.a.node,buttonContentRight:a.a.node,organicArrows:a.a.bool}),buttons_defineProperty(d,"defaultProps",{cssModule:null,organicArrows:!0,buttonContentLeft:null,buttonContentRight:null});var f=function(e){function Media(){var e,t;!function media_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Media);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return t=function media_possibleConstructorReturn(e,t){return!t||"object"!==media_typeof(t)&&"function"!=typeof t?media_assertThisInitialized(e):t}(this,(e=media_getPrototypeOf(Media)).call.apply(e,[this].concat(o))),media_defineProperty(media_assertThisInitialized(t),"state",{}),t}return function media_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&media_setPrototypeOf(e,t)}(Media,e),function media_createClass(e,t,n){return t&&media_defineProperties(e.prototype,t),n&&media_defineProperties(e,n),e}(Media,[{key:"render",value:function render(){var e=this.props,t=e.media,n=e.className,o=t.source,i=t.children,a=t.style,s=(t.loader,t["data-src"],t["data-alt"],t.className),c=(t.onTransitionEnd,t.onTransitionStartOut,t.onTransitionStartIn,t.onTransitionRequestOut,t.onTransitionRequestIn,_objectWithoutProperties(t,["source","children","style","loader","data-src","data-alt","className","onTransitionEnd","onTransitionStartOut","onTransitionStartIn","onTransitionRequestOut","onTransitionRequestIn"])),l=null;return o&&(l=o.match(/\.(mp4|webm)/)?r.a.createElement("video",{title:t.title||t["data-title"],src:o,type:"video/mp4",controls:!0}):r.a.createElement("img",{alt:t.alt||t.title||t["data-alt"]||null,src:o})),r.a.createElement("div",_extends({className:n,style:a||null},c),l,i&&r.a.createElement("div",{className:s},t.children))}}]),Media}(r.a.Component);function core_typeof(e){return(core_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function core_extends(){return(core_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){core_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function core_defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function core_getPrototypeOf(e){return(core_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function core_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function core_setPrototypeOf(e,t){return(core_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function core_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}media_defineProperty(f,"propTypes",{media:a.a.object.isRequired,className:a.a.string.isRequired});var p="awssld",b=new c.a,h=function(e){function AwesomeSlider(e){var t;return function core_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AwesomeSlider),t=function core_possibleConstructorReturn(e,t){return!t||"object"!==core_typeof(t)&&"function"!=typeof t?core_assertThisInitialized(e):t}(this,core_getPrototypeOf(AwesomeSlider).call(this,e)),core_defineProperty(core_assertThisInitialized(t),"clickNext",(function(){var e=null===t.index?0:t.index+1;t.onTransitionRequest("next",e),t.goTo({index:e,direction:!0})})),core_defineProperty(core_assertThisInitialized(t),"clickPrev",(function(){var e=t.index-1;t.onTransitionRequest("prev",e),t.goTo({index:e,direction:!1})})),core_defineProperty(core_assertThisInitialized(t),"touchStart",(function(e){if(!t.animating&&null!==t.index){var n=e.nativeEvent;t.touchStartPoint=n.touches[0].clientX}})),core_defineProperty(core_assertThisInitialized(t),"touchMove",(function(e){if(!t.animating&&t.touchStartPoint){var n=e.nativeEvent,o=n.touches[0].clientX-t.touchStartPoint,r=t[t.active],i=t[t.loader],a=!(o>0),s=Math.abs(o);!1!==t.touchEnabled?s>=10&&(!1===t.loading?t.goTo({index:a?t.index+1:t.index-1,direction:a,touch:!0}):!0===t.direction?(o+=10,Math.abs(o)>r.offsetWidth?o=-r.offsetWidth:o>0&&(o=0),r.style.transform="translate3d(".concat(o,"px, 0, 0)"),i.style.transform="translate3d(calc(100% + ".concat(o,"px), 0, 0)")):(o-=10,Math.abs(o)>r.offsetWidth?o=r.offsetWidth:o<0&&(o=0),r.style.transform="translate3d(".concat(o,"px, 0, 0)"),i.style.transform="translate3d(calc(-100% + ".concat(o,"px), 0, 0)"))):s>20&&(t.touchEnabled=!0,t.touchStartPoint=n.touches[0].clientX)}})),core_defineProperty(core_assertThisInitialized(t),"touchEnd",(function(){!t.animating&&t.touchStartPoint&&t.loading&&(t.touchStartPoint=null,t.animating=!0,t.touchEnabled=!1,t.animateMobileEnd((function(){t.index=t.nextIndex,t.setState({index:t.index}),t.onTransitionEnd(),t.animating=!1,t.loading=!1,t.unchargeIndex()})))})),core_defineProperty(core_assertThisInitialized(t),"bulletClick",(function(e){var n=e.currentTarget,o=parseInt(n.getAttribute("data-index"),10);t.goTo({index:o,direction:!(t.index>o)},(function(){Object(s.onceNextCssLayout)().then((function(){Object(l.a)(n,t.classNames.bulletsLoading)}))}))})),t.rootElement=e.rootElement||p,t.boxA=null,t.boxB=null,t.loaded=[],t.active="boxA",t.loader="boxB",t.nextIndex=null,t.loading=!1,t.media=null,t.started=!1,t.touchEnabled=!1,t.setupStartup(e),t}return function core_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&core_setPrototypeOf(e,t)}(AwesomeSlider,e),function core_createClass(e,t,n){return t&&core_defineProperties(e.prototype,t),n&&core_defineProperties(e,n),e}(AwesomeSlider,[{key:"componentDidMount",value:function componentDidMount(){var e=this;Object(l.a)(this.boxA,this.classNames.active),this.props.startupScreen&&(this.buttons&&(Object(l.a)(this.buttons.element,this.classNames.controlsHidden),Object(l.a)(this.buttons.element,this.classNames.controlsActive)),!0===this.props.startup&&this.media.length>0&&this.startup()),this.props.onFirstMount&&this.props.onFirstMount(_objectSpread({},this.getInfo())),this.buttons&&Object(s.onceNextCssLayout)().then((function(){e.buttons&&e.buttons.element&&Object(l.b)(e.buttons.element,e.classNames.controlsHidden)}))}},{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(e){if(this.checkChildren(e),this.setupClassNames(Object(l.e)(e.cssModule)),e.name===this.props.name)if(!0!==e.startup||!1!==this.started)if(e.selected===this.props.selected)this.refreshSlider();else{var t=this.getIndex(e.selected),n=!0===e.infinite&&0===t&&this.index===this.media.length-1||!(this.index>t);this.goTo({index:t,direction:n})}else this.startup();else this.resetSlider(e.selected)}},{key:"onTransitionStart",value:function onTransitionStart(){var e=this.media[this.index],t=this.media[this.nextIndex],n=_objectSpread({},this.getInfo(),{nextSlide:this[this.loader],nextIndex:this.nextIndex,nextMedia:t});this.props.onTransitionStart&&this.props.onTransitionStart(n),e&&e.onTransitionStartOut&&e.onTransitionStartOut(n),t&&t.onTransitionStartIn&&t.onTransitionStartIn(n)}},{key:"onTransitionRequest",value:function onTransitionRequest(e,t){var n=this.media[this.index],o=this.checkIndex(t),r=this.media[o],i=_objectSpread({eventName:e},this.getInfo(),{nextSlide:null,nextIndex:o,nextMedia:r});this.props.onTransitionRequest&&this.props.onTransitionRequest(i),n&&n.onTransitionRequestOut&&n.onTransitionRequestOut(i),r&&r.onTransitionRequestIn&&r.onTransitionRequestIn(i)}},{key:"onTransitionEnd",value:function onTransitionEnd(){var e=this.media[this.index],t=_objectSpread({},this.getInfo());this.props.onTransitionEnd&&this.props.onTransitionEnd(t),e&&e.onTransitionEnd&&e.onTransitionEnd(t)}},{key:"getRootClassName",value:function getRootClassName(){var e=this.props,t=e.animation,n=e.className,o=e.cssModule,r=e.disabled,i=e.fillParent,a=e.infinite,s=e.organicArrows;return Object(l.d)({animation:t,className:n,cssModule:Object(l.e)(o),current:this.state.index,disabled:r,fillParent:i,infinite:a,organicArrows:s,rootElement:this.rootElement,total:this.media.length})}},{key:"setupStartup",value:function setupStartup(e){if(this.checkChildren(e),this.setupClassNames(Object(l.e)(e.cssModule)),e.startupScreen){var t=this.getIndex(this.props.selected);this.index=null,this.state={index:this.index,boxA:{className:this.classNames.startUp,children:e.startupScreen},boxB:this.media[t]||null}}else this.started=!0,this.index=this.getIndex(this.props.selected),this.state={index:this.index,boxA:this.media[this.index]||null,boxB:null}}},{key:"getInfo",value:function getInfo(){return{slides:this.media.length,currentIndex:this.index,currentSlide:this[this.active],currentMedia:this.media[this.index],element:this.slider}}},{key:"getProgressBar",value:function getProgressBar(){if(!document)return{};var e=document.createElement("div");return e.className=this.classNames.bar,e}},{key:"setupClassNames",value:function setupClassNames(e){this.classNames=Object(l.f)(this.rootElement,e)}},{key:"getIndex",value:function getIndex(e){var t=0;return"number"==typeof e?e:("string"==typeof e&&this.media.forEach((function(n,o){n.slug===e&&(t=o)})),t)}},{key:"refreshSlider",value:function refreshSlider(){var e;if(!0!==this.loading&&!1!==this.props.startup&&null!==this.index){var t=this.index;this.setState((core_defineProperty(e={index:t},this.active,this.media[this.getIndex(t)]),core_defineProperty(e,this.loader,null),e))}}},{key:"startup",value:function startup(){var e=this;this.started=!0,setTimeout((function(){e.goTo({index:e.props.selected,direction:!0,touch:!1})}),this.props.startupDelay||75)}},{key:"resetSlider",value:function resetSlider(){var e,t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.index=n,this.setState((core_defineProperty(e={index:n},this.active,this.media[this.getIndex(n)]),core_defineProperty(e,this.loader,null),e),(function(){t.props.onResetSlider&&t.props.onResetSlider(_objectSpread({},t.getInfo()))}))}},{key:"checkChildren",value:function checkChildren(e){e.children&&(e.children!==this.props.children||this.props.children&&!this.media)?this.media=Object(l.g)(e.children):e.media&&e.media.length?this.media=e.media:this.media||(this.media=[])}},{key:"startBarAnimation",value:function startBarAnimation(e){var t=this,n=e.active;return new Promise((function(e){t.bar=t.getProgressBar(),n.appendChild(t.bar),Object(s.onceNextCssLayout)().then((function(){Object(s.onceNextCssLayout)().then((function(){Object(l.a)(t.bar,t.classNames.barActive),e()}))}))}))}},{key:"endBarAnimation",value:function endBarAnimation(e){var t=this;this.bar&&Object(s.onceNextCssLayout)().then((function(){Object(s.onceTransitionEnd)(t.bar).then((function(){e()})),Object(l.a)(t.bar,t.classNames.barEnd)}))}},{key:"loadContent",value:function loadContent(e,t){var n=this;return new Promise((function(o,r){if(n.props.onLoadStart||t&&t.onLoadStart){var i=n.props.onLoadStart||t&&t.onLoadStart;return n.startBarAnimation({active:e}),void i(_objectSpread({next:function next(){n.endBarAnimation((function(){o(n.bar)}))},error:r},n.getInfo()))}if(t&&(t.source||t.preload)){var a=t.preload?t.preload:t.source&&[t.source]||[];return!0===n.checkLoadedUrls(a)?void o(null):(n.startBarAnimation({active:e}),void b.loadMultiple(a).then((function(){n.pushLoaded(a),n.endBarAnimation((function(){o(n.bar)}))})))}o(null)}))}},{key:"pushLoaded",value:function pushLoaded(e){this.loaded=[].concat(_toConsumableArray(this.loaded),_toConsumableArray(e))}},{key:"checkLoadedUrls",value:function checkLoadedUrls(e){var t=this,n=!0;return e.forEach((function(e){t.loaded.includes(e)||(n=!1)})),n}},{key:"startAnimationMobile",value:function startAnimationMobile(){var e=this.direction,t=this[this.active],n=this[this.loader],o=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,r=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight;this.props.onTransitionStart&&this.props.onTransitionStart(_objectSpread({},this.getInfo(),{nextSlide:this[this.loader],nextIndex:this.nextIndex,nextMedia:this.media[this.nextIndex]}));var i=t.querySelector(".".concat(Object(l.c)(this.classNames.content)));Object(l.a)(i,r),Object(l.a)(i,this.classNames.contentExit);var a=n.querySelector(".".concat(Object(l.c)(this.classNames.content)));Object(l.a)(a,o),Object(l.a)(a,this.classNames.contentStatic),Object(l.a)(t,this.classNames.animated),Object(l.a)(n,this.classNames.animated)}},{key:"animateMobileEnd",value:function animateMobileEnd(e){var t=this,n=this.direction,o=this[this.active],r=this[this.loader],i=n?this.classNames.moveLeft:this.classNames.moveRight,a=n?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,c=n?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,u=r.querySelector(".".concat(Object(l.c)(this.classNames.content))),d=o.querySelector(".".concat(Object(l.c)(this.classNames.content)));Object(l.b)(u,this.classNames.contentStatic),Object(l.a)(r,this.classNames.animatedMobile),Object(l.a)(o,this.classNames.animatedMobile),Object(s.onceNextCssLayout)().then((function(){r.style.transform="translate3d(0, 0, 0)",o.style.transform="translate3d(".concat(t.direction?"-":"","100%, 0, 0)"),Object(s.onceTransitionEnd)(o).then((function(){t.loading&&(Object(l.b)(o,t.classNames.animated),Object(l.b)(r,t.classNames.animated),Object(l.a)(r,t.classNames.active),Object(l.b)(o,t.classNames.active),Object(l.b)(o,i),Object(l.b)(r,t.classNames.animatedMobile),Object(l.b)(o,t.classNames.animatedMobile),Object(l.b)(d,c),Object(l.b)(d,t.classNames.contentExit),Object(l.b)(u,a),t.buttons&&setTimeout((function(){t.buttons&&Object(l.b)(t.buttons.element,t.classNames.controlsActive)}),t.props.controlsReturnDelay),t.activeArrow&&(Object(l.b)(t.activeArrow,t.activeArrowClass),t.activeArrow=null,t.activeArrowClass=null),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA",e&&e())}))}))}},{key:"runAnimation",value:function runAnimation(e){var t=this,n=e.active,o=e.media,r=e.contentExitMoveClass,i=e.contentEnterMoveClass,a=e.activeContentElement,c=e.loaderContentElement,u=e.loader,d=e.loaderPosition,f=e.exitPosition,p=e.callback,b=e.transitionDelay;this.loadContent(n,o).then((function(e){Object(l.a)(a,r),Object(l.a)(a,t.classNames.contentExit),Object(l.a)(c,i),Object(l.a)(c,t.classNames.contentStatic),setTimeout((function(){Object(s.onceNextCssLayout)().then((function(){Object(l.a)(n,t.classNames.animated),Object(l.a)(u,t.classNames.animated),Object(l.b)(c,t.classNames.contentStatic),Object(l.a)(n,t.classNames.exit),Object(l.a)(u,d),Object(l.a)(n,f),Object(s.onceAnimationEnd)(n).then((function(){Object(l.a)(u,t.classNames.active),Object(l.b)(u,d),Object(l.b)(u,t.classNames.animated),Object(l.b)(n,t.classNames.animated),Object(l.b)(n,t.classNames.active),Object(l.b)(n,f),Object(l.b)(n,t.classNames.exit),Object(l.b)(a,r),Object(l.b)(a,t.classNames.contentExit),Object(l.b)(c,i),e&&n.removeChild(e),t.buttons&&setTimeout((function(){t.buttons&&Object(l.b)(t.buttons.element,t.classNames.controlsActive)}),t.props.controlsReturnDelay),t.active="boxA"===t.active?"boxB":"boxA",t.loader="boxA"===t.active?"boxB":"boxA";var o=!t.activeArrow;t.activeArrow&&(Object(s.onceTransitionEnd)(t.activeArrow,{tolerance:null===t.index?0:2}).then((function(){t.releaseTransition()})),Object(l.b)(t.activeArrow,t.activeArrowClass),t.activeArrow=null,t.activeArrowClass=null),p({release:o})}))}))}),b)}))}},{key:"releaseTransition",value:function releaseTransition(){this.loading=!1}},{key:"startAnimation",value:function startAnimation(e,t,n){var o=this.props.transitionDelay,r=this[this.active],i=this[this.loader],a=e?this.classNames.moveRight:this.classNames.moveLeft,s=e?this.classNames.moveLeft:this.classNames.moveRight,c=e?this.classNames.contentMoveRight:this.classNames.contentMoveLeft,u=e?this.classNames.contentMoveLeft:this.classNames.contentMoveRight,d=r.querySelector(".".concat(Object(l.c)(this.classNames.content))),f=i.querySelector(".".concat(Object(l.c)(this.classNames.content)));r.style.removeProperty("transform"),i.style.removeProperty("transform"),this.onTransitionStart();var p={active:r,media:t,contentExitMoveClass:u,contentEnterMoveClass:c,activeContentElement:d,loaderContentElement:f,loader:i,loaderPosition:a,exitPosition:s,callback:n,transitionDelay:o};this.runAnimation(p)}},{key:"goTo",value:function goTo(e){var t=this,n=e.index,o=e.direction,r=e.touch,i=void 0!==r&&r,a=this.getIndex(n);!0!==this.loading&&n!==this.index?(this.loading=!0,this.direction=o,!0!==i?this.activateArrows(o,(function(){t.chargeIndex(a,(function(e){t.renderedLoader=!0,t.startAnimation(o,e,(function(e){var n=e.release,o=void 0===n||n;t.index=t.nextIndex,t.setState({index:t.index},(function(){t.onTransitionEnd(),!0===o&&t.releaseTransition()}))}))}))})):this.chargeIndex(a,(function(){t.activateArrows(o),t.startAnimationMobile()}))):this.props.onTransitionReject&&this.props.onTransitionReject(_objectSpread({},this.getInfo(),{forceTransition:function forceTransition(){t.goTo({index:n,direction:o,touch:i})}}))}},{key:"checkIndex",value:function checkIndex(e){return e>this.media.length-1?0:e<0?this.media.length-1:e}},{key:"chargeIndex",value:function chargeIndex(e,t){this.nextIndex=this.checkIndex(e);var n={},o=this.media[this.nextIndex];n[this.loader]=_objectSpread({loader:!0},o),this.setState(n,(function(){t(o)}))}},{key:"unchargeIndex",value:function unchargeIndex(){var e={};e[this.loader]=null,this.setState(e,(function(){}))}},{key:"activateArrows",value:function activateArrows(e,t){var n=e?"right":"left",o=Object(l.e)(this.props.cssModule),r=Object(l.c)(Object(c.c)("".concat(this.rootElement,"__controls__arrow-").concat(n),o));if(this.buttons){var i=e?this.buttons.next:this.buttons.prev;this.activeArrow=i.querySelector(".".concat(r))}!this.activeArrow||this.buttons&&this.buttons.element&&this.buttons.element.classList.contains(this.classNames.controlsActive)?t&&t():(this.activeArrowClass=Object(c.c)("".concat(this.rootElement,"__controls__arrow-").concat(n,"--active"),o),Object(s.onceTransitionEnd)(this.activeArrow,{tolerance:null===this.index?0:2}).then((function(){t&&t()})),this.buttons&&this.buttons.element&&(Object(l.a)(this.buttons.element,this.classNames.controlsActive),Object(l.a)(this.activeArrow,this.activeArrowClass)))}},{key:"renderBox",value:function renderBox(e){var t=this,n={};return this.props.mobileTouch&&(n.onTouchStart=this.touchStart,n.onTouchMove=this.touchMove,n.onTouchEnd=this.touchEnd),r.a.createElement("div",core_extends({ref:function ref(n){t["box".concat(e)]=n},className:this.classNames.box},n),this.state["box".concat(e)]&&r.a.createElement(f,{media:this.state["box".concat(e)],className:this.classNames.content}))}},{key:"render",value:function render(){var e=this,t=this.props,n=t.cssModule,o=t.organicArrows,i=t.bullets,a=t.style,s=t.customContent,c=t.buttons,f=t.buttonContentLeft,p=t.buttonContentRight,b=this.rootElement;return r.a.createElement("div",{ref:function ref(t){e.slider=t},className:this.getRootClassName(),style:a},r.a.createElement("div",{ref:function ref(t){e.wrapper=t},className:this.classNames.wrapper},r.a.createElement("div",{ref:function ref(t){e.container=t},className:this.classNames.container},this.renderBox("A"),this.renderBox("B")),c&&r.a.createElement(d,{rootElement:b,cssModule:Object(l.e)(n),onMount:function onMount(t){e.buttons=t},onNext:this.clickNext,onPrev:this.clickPrev,organicArrows:o,buttonContentLeft:f,buttonContentRight:p}),s),i&&r.a.createElement(u,{cssModule:Object(l.e)(n),rootElement:b,media:this.media,selected:this.state.index,onClick:function onClick(t){e.onTransitionRequest("bullet",t.index),e.goTo(t)}}))}}]),AwesomeSlider}(r.a.Component);core_defineProperty(h,"propTypes",{animation:a.a.string,bullets:a.a.bool,buttonContentLeft:a.a.node,buttonContentRight:a.a.node,buttons:a.a.bool,children:a.a.node,className:a.a.string,controlsReturnDelay:a.a.number,cssModule:a.a.any,customContent:a.a.node,onLoadStart:a.a.func,disabled:a.a.bool,fillParent:a.a.bool,infinite:a.a.bool,media:a.a.array,name:a.a.string,onFirstMount:a.a.func,onResetSlider:a.a.func,onStartupRelease:a.a.func,onTransitionEnd:a.a.func,onTransitionRequest:a.a.func,onTransitionStart:a.a.func,organicArrows:a.a.bool,rootElement:a.a.string,selected:a.a.any,startup:a.a.bool,startupDelay:a.a.number,startupScreen:a.a.object,style:a.a.object,transitionDelay:a.a.number,mobileTouch:a.a.bool}),core_defineProperty(h,"defaultProps",{animation:null,bullets:!0,buttonContentLeft:null,buttonContentRight:null,buttons:!0,children:null,className:null,controlsReturnDelay:0,cssModule:null,customContent:null,onLoadStart:null,disabled:!1,fillParent:!1,infinite:!0,media:[],name:"awesome-slider",onFirstMount:null,onResetSlider:null,onStartupRelease:null,onTransitionEnd:null,onTransitionRequest:null,onTransitionStart:null,organicArrows:!0,rootElement:p,selected:0,startup:!0,startupDelay:0,startupScreen:null,style:{},transitionDelay:0,mobileTouch:!0});t.default=h}])}));

/***/ }),

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stuff_logo_tuvamex_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stuff/logo-tuvamex.png */ "./pages/stuff/logo-tuvamex.png");
/* harmony import */ var _stuff_logo_tuvamex_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_stuff_logo_tuvamex_png__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "C:\\Users\\Adriana\\Desktop\\silversite\\pages\\Home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var Header = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-2150368133" + " " + "header-cointainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2150368133" + " " + "logo-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx("img", {
        src: _stuff_logo_tuvamex_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        className: "jsx-2150368133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-2150368133" + " " + "header-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2150368133" + " " + "cotiza",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("img", {
        src: "https://image.flaticon.com/icons/svg/1034/1034240.svg",
        className: "jsx-2150368133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2150368133" + " " + "info-cotiza",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-2150368133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "COTIZA AHORA"), __jsx("p", {
        className: "jsx-2150368133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "800 3679764"))), __jsx("div", {
        className: "jsx-2150368133" + " " + "cotiza",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx("img", {
        src: "https://image.flaticon.com/icons/svg/1034/1034236.svg",
        className: "jsx-2150368133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2150368133" + " " + "info-cotiza",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-2150368133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "LLAMANOS:"), __jsx("h1", {
        className: "jsx-2150368133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "55 5749-3539"), __jsx("h1", {
        className: "jsx-2150368133",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Whatsapp: 55 2563 6863")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2150368133",
        __self: this
      }, "div.jsx-2150368133,.header-container.jsx-2150368133{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.jsx-2150368133,.logo-contact.jsx-2150368133{width:40%;height:90%;margin:0 5% 0 2%;}.jsx-2150368133,.logo-contact.jsx-2150368133 img.jsx-2150368133{width:35%;height:100%;}.header-contact.jsx-2150368133{width:45%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.jsx-2150368133,.cotiza.jsx-2150368133{width:60%;height:80%;display:flex justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.jsx-2150368133,.cotiza.jsx-2150368133 img.jsx-2150368133{width:45px;height:45px;}.info-cotiza.jsx-2150368133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.info-cotiza.jsx-2150368133 p.jsx-2150368133:first-child{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:'Raleway',sans-serif;height:50%;width:90%;color:#000;font-size:0.8rem;}.jsx-2150368133,.info-cotiza.jsx-2150368133 h1.jsx-2150368133{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:'Raleway',sans-serif;height:60%;width:100%;font-size:0.8rem;font-weight:lighter;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXEhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0MwQixBQUk2QixBQU9GLEFBTUEsQUFLQSxBQVFBLEFBUUMsQUFJRSxBQU9BLEFBVUEsVUEvQ0YsQUFNQyxBQUtBLEFBUUQsQ0FRQyxDQWxDQSxTQVFLLEFBb0JNLENBYjNCLEFBSWlCLENBZ0JqQixlQXpCQSxtQkFtQnVCLGlCQVNJLEFBT0osQUFVQSxZQXRESSxVQW1CQSxzREFXM0IsaUJBZXNDLEFBVUEsTUFqQlgsc0JBbkMzQixBQWlCeUIsS0EwQlYsQUFVQSxXQVRELEFBVUMsVUFUQSxDQVVNLFVBVEEsT0FVRyxVQVR4QixVQVVlLFdBQ2YsWUF0QjBCLGNBakIxQixnRUFtQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBZHJpYW5hXFxEZXNrdG9wXFxzaWx2ZXJzaXRlXFxwYWdlc1xcSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuL3N0dWZmL2xvZ28tdHV2YW1leC5wbmcnXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKFxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29pbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3RpemFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9IFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzEwMzQvMTAzNDI0MC5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWNvdGl6YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNPVElaQSBBSE9SQTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD44MDAgMzY3OTc2NDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImxsYW1hbm9zXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3RpemFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMDM0LzEwMzQyMzYuc3ZnXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tY290aXphXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TExBTUFOT1M6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT41NSA1NzQ5LTM1Mzk8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5XaGF0c2FwcDogNTUgMjU2MyA2ODYzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIGRpdixcclxuICAgICAgICAgICAgLmhlYWRlci1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC5sb2dvLWNvbnRhY3R7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNSUgMCAyJTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC5sb2dvLWNvbnRhY3QgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRlci1jb250YWN0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLmNvdGl6YXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleFxyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLmNvdGl6YSBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5mby1jb3RpemEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgXHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm8tY290aXphIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLmluZm8tY290aXphIGgxIHtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gICBcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\Home.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/components/Home/PhotoSlide/Gallery.js":
/*!*****************************************************!*\
  !*** ./pages/components/Home/PhotoSlide/Gallery.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-slider */ "./node_modules/react-awesome-slider/dist/index.js");
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Adriana\\Desktop\\silversite\\pages\\components\\Home\\PhotoSlide\\Gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

var slider = __jsx(react_awesome_slider__WEBPACK_IMPORTED_MODULE_1___default.a, {
  cssModule: styles,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  "data-src": "/path/to/image-0.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("div", {
  "data-src": "/path/to/image-1.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("div", {
  "data-src": "/path/to/image-2.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Slideshow);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./pages/Home.js");
/* harmony import */ var _components_Home_NavBar_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Home/NavBar/Nav */ "./pages/components/Home/NavBar/Nav.js");
/* harmony import */ var _components_Home_PhotoSlide_Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home/PhotoSlide/Gallery */ "./pages/components/Home/PhotoSlide/Gallery.js");
var _jsxFileName = "C:\\Users\\Adriana\\Desktop\\silversite\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "jsx-3561261606" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("hr", {
    className: "jsx-3561261606",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_components_Home_NavBar_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("hr", {
    className: "jsx-3561261606",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-3561261606" + " " + "gallery-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_components_Home_PhotoSlide_Gallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3561261606",
    __self: this
  }, "section.jsx-3561261606,.header.jsx-3561261606{height:12vh;}hr.jsx-3561261606{height:0.5px;border-style:none;background-color:#BABABA;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFJMkIsQUFJQyxZQUZmLENBR29CLGtCQUNPLHlCQUMzQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFkcmlhbmFcXERlc2t0b3BcXHNpbHZlcnNpdGVcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9Ib21lJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvSG9tZS9OYXZCYXIvTmF2JztcclxuaW1wb3J0IFNsaWRlU2hvdyBmcm9tICcuL2NvbXBvbmVudHMvSG9tZS9QaG90b1NsaWRlL0dhbGxlcnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWUgPSBcImdhbGxlcnktc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8U2xpZGVTaG93IC8+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgc2VjdGlvbixcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMnZoO1xyXG4gICAgICAgICAgICAgIC8vICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwLjVweDtcclxuICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JBQkFCQTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.0fad8cf75874551a793c.hot-update.js.map
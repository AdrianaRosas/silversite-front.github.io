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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stuff_logo_tuvamex_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stuff/logo-tuvamex.png */ "./pages/stuff/logo-tuvamex.png");
/* harmony import */ var _stuff_logo_tuvamex_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stuff_logo_tuvamex_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Adriana\\Desktop\\silversite\\pages\\Home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Header extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-772586714" + " " + "header-cointainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-772586714" + " " + "logo-contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: _stuff_logo_tuvamex_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      className: "jsx-772586714",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-772586714" + " " + "header-contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-772586714" + " " + "cotiza",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.flaticon.com/icons/svg/1034/1034240.svg",
      className: "jsx-772586714",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-772586714" + " " + "info-cotiza",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-772586714",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "COTIZA AHORA"), __jsx("p", {
      className: "jsx-772586714",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "800 3679764"))), __jsx("div", {
      className: "jsx-772586714" + " " + "cotiza",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.flaticon.com/icons/svg/1034/1034236.svg",
      className: "jsx-772586714",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-772586714" + " " + "info-cotiza",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-772586714",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "LLAMANOS:"), __jsx("h1", {
      className: "jsx-772586714",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "55 5749-3539"), __jsx("h1", {
      className: "jsx-772586714",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Whatsapp: 55 2563 6863")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "772586714",
      __self: this
    }, "div.jsx-772586714,.header-container.jsx-772586714{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.jsx-772586714,.logo-contact.jsx-772586714{width:55%;height:90%;margin:0 8% 0 2%;}.jsx-772586714,.logo-contact.jsx-772586714 img.jsx-772586714{width:30%;height:100%;}.header-contact.jsx-772586714{width:40%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.jsx-772586714,.cotiza.jsx-772586714{width:60%;height:80%;display:flex justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.jsx-772586714,.cotiza.jsx-772586714 img.jsx-772586714{width:45px;height:45px;}.info-cotiza.jsx-772586714{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.info-cotiza.jsx-772586714 p.jsx-772586714:first-child{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:'Raleway',sans-serif;height:50%;width:90%;color:#000;font-size:0.8rem;}.jsx-772586714,.info-cotiza.jsx-772586714 h1.jsx-772586714{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:'Raleway',sans-serif;height:60%;width:100%;font-size:0.8rem;font-weight:lighter;color:#000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXEhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0MwQixBQUk2QixBQU9GLEFBTUEsQUFLQSxBQVFBLEFBUUMsQUFJRSxBQU9BLEFBVUEsVUEvQ0YsQUFNQyxBQUtBLEFBUUQsQ0FRQyxDQWxDQSxTQVFLLEFBb0JNLENBYjNCLEFBSWlCLENBZ0JqQixlQXpCQSxtQkFtQnVCLGlCQVNJLEFBT0osQUFVQSxZQXRESSxVQW1CQSxzREFXM0IsaUJBZXNDLEFBVUEsTUFqQlgsc0JBbkMzQixBQWlCeUIsS0EwQlYsQUFVQSxXQVRELEFBVUMsVUFUQSxDQVVNLFVBVEEsT0FVRyxVQVR4QixVQVVlLFdBQ2YsWUF0QjBCLGNBakIxQixnRUFtQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBZHJpYW5hXFxEZXNrdG9wXFxzaWx2ZXJzaXRlXFxwYWdlc1xcSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuL3N0dWZmL2xvZ28tdHV2YW1leC5wbmcnXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKFxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29pbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3RpemFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9IFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzEwMzQvMTAzNDI0MC5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWNvdGl6YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNPVElaQSBBSE9SQTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD44MDAgMzY3OTc2NDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImxsYW1hbm9zXCI+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3RpemFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMDM0LzEwMzQyMzYuc3ZnXCIvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tY290aXphXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TExBTUFOT1M6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT41NSA1NzQ5LTM1Mzk8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5XaGF0c2FwcDogNTUgMjU2MyA2ODYzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIGRpdixcclxuICAgICAgICAgICAgLmhlYWRlci1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC5sb2dvLWNvbnRhY3R7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgOCUgMCAyJTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC5sb2dvLWNvbnRhY3QgaW1ne1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRlci1jb250YWN0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLmNvdGl6YXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleFxyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLmNvdGl6YSBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5mby1jb3RpemEge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgXHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm8tY290aXphIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLmluZm8tY290aXphIGgxIHtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4gICBcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\Home.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/LineProducts.js":
/*!*******************************!*\
  !*** ./pages/LineProducts.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Adriana\\Desktop\\silversite\\pages\\LineProducts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class LineProducts extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("div", {
      className: "jsx-1040884982" + " " + "products-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "LINEA DE PRODUCTOS"), __jsx("div", {
      className: "jsx-1040884982" + " " + "info-products",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1040884982" + " " + "card-products",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1040884982" + " " + "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.flaticon.com/icons/svg/1835/1835178.svg",
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1040884982" + " " + "info-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "TUBERIAS"), __jsx("p", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Toda clase de Tubos en PVC, ", __jsx("br", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), " CPVC, Polietileno Liso y Corrugado."), __jsx("a", {
      href: "",
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "M\xE1s >>"))), __jsx("div", {
      className: "jsx-1040884982" + " " + "card-products",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1040884982" + " " + "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.flaticon.com/icons/svg/1835/1835178.svg",
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1040884982" + " " + "info-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "CONEXIONES"), __jsx("p", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Conexiones para todo tipo de ", __jsx("br", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), " Tubos, en PVC, CPVC, Polietileno."), __jsx("a", {
      href: "",
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "M\xE1s >>"))), __jsx("div", {
      className: "jsx-1040884982" + " " + "card-products",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1040884982" + " " + "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.flaticon.com/icons/svg/1835/1835178.svg",
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1040884982" + " " + "info-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "VALVULAS"), __jsx("p", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "V\xE1lvulas de todo tipo de ", __jsx("br", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), " materiales: PVC, CPVC, PPL, PE, ", __jsx("br", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), " Bola, Mariposa, Compuerta."), __jsx("a", {
      href: "",
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "M\xE1s >>"))), __jsx("div", {
      className: "jsx-1040884982" + " " + "card-products",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1040884982" + " " + "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.flaticon.com/icons/svg/1835/1835178.svg",
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1040884982" + " " + "info-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "CEMENTOS"), __jsx("p", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Somos distribuidores autorizados ", __jsx("br", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), " Oatey, Cementos, Primers y ", __jsx("br", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), " Limpiadores."), __jsx("a", {
      href: "",
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "M\xE1s >>"))), __jsx("div", {
      className: "jsx-1040884982" + " " + "card-products",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-1040884982" + " " + "circle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("img", {
      src: "https://image.flaticon.com/icons/svg/1835/1835178.svg",
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-1040884982" + " " + "info-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "ACCESORIOS"), __jsx("p", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Gran variedad de productos ", __jsx("br", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), " necesarios para tus proyectos. ", __jsx("br", {
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), " Piezas especiales."), __jsx("a", {
      href: "",
      className: "jsx-1040884982",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "M\xE1s >>")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1040884982",
      __self: this
    }, "div.jsx-1040884982,.products-container.jsx-1040884982{width:98%;height:90%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h1.jsx-1040884982{font-family:'Raleway',sans-serif;font-weight:lighter;color:#484848;}.info-products.jsx-1040884982{width:100%;height:90%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.card-products.jsx-1040884982{font-family:'Raleway',sans-serif;}.circle.jsx-1040884982{width:150px;height:150px;border-radius:50%;background:#ffffff;border:4px solid #1B133C;}.circle.jsx-1040884982 img.jsx-1040884982{width:70px;height:70px;}.info-card.jsx-1040884982{width:90%;height:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.info-card.jsx-1040884982 h2.jsx-1040884982{font-size:20px;color:#1B133C;font-weight:lighter;}.info-card.jsx-1040884982 p.jsx-1040884982{font-size:14px;color:#767676;font-weight:lighter;text-align:center;}.info-card.jsx-1040884982 a.jsx-1040884982{font-size:14px;-webkit-text-decoration:none;text-decoration:none;color:#1B133C;font-weight:lighter;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXExpbmVQcm9kdWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RDBCLEFBSTJCLEFBU3dCLEFBTXJCLEFBVXlCLEFBSXZCLEFBT0QsQUFJRixBQVNLLEFBTUEsQUFNRixVQTVESixBQXdDRSxDQXpCQSxBQXFCRSxDQVBDLEdBb0JBLEFBTUEsQUFNSyxNQTVEUixBQXdDRSxDQXpCQSxDQXFCakIsRUFQdUIsSUFvQkMsQUFNQSxJQS9DRixBQWlCdEIsVUFLd0IsTUFxQnhCLEFBS3NCLElBL0NOLFNBc0JjLEdBOEJkLEVBbERoQixBQThDQSxZQUtzQixRQTlCdEIsUUEvQndCLEFBd0NFLENBekJILEdBK0NILGtCQUNwQixnREEvQzJCLFFBZkYsQUF3Q0UsMkZBeEJKLFFBZkYsQUF3Q0UscUZBdEJ2QixRQWhCQSxBQXdDQSIsImZpbGUiOiJDOlxcVXNlcnNcXEFkcmlhbmFcXERlc2t0b3BcXHNpbHZlcnNpdGVcXHBhZ2VzXFxMaW5lUHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIExpbmVQcm9kdWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMT5MSU5FQSBERSBQUk9EVUNUT1M8L2gxPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9IFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE4MzUvMTgzNTE3OC5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlRVQkVSSUFTPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRvZGEgY2xhc2UgZGUgVHVib3MgZW4gUFZDLCA8YnIgLz4gQ1BWQywgUG9saWV0aWxlbm8gTGlzbyB5IENvcnJ1Z2Fkby48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+TcOhcyA+PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xODM1LzE4MzUxNzguc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DT05FWElPTkVTPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbmV4aW9uZXMgcGFyYSB0b2RvIHRpcG8gZGUgPGJyLz4gVHVib3MsIGVuIFBWQywgQ1BWQywgUG9saWV0aWxlbm8uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPk3DoXMgPj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0gXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTgzNS8xODM1MTc4LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+VkFMVlVMQVM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHA+VsOhbHZ1bGFzIGRlIHRvZG8gdGlwbyBkZSA8YnIgLz4gbWF0ZXJpYWxlczogUFZDLCBDUFZDLCBQUEwsIFBFLCA8YnIvPiBCb2xhLCBNYXJpcG9zYSwgQ29tcHVlcnRhLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5Nw6FzID4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9IFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE4MzUvMTgzNTE3OC5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNFTUVOVE9TPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNvbW9zIGRpc3RyaWJ1aWRvcmVzIGF1dG9yaXphZG9zIDxiciAvPiBPYXRleSwgQ2VtZW50b3MsIFByaW1lcnMgeSA8YnIvPiBMaW1waWFkb3Jlcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+TcOhcyA+PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSBcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xODM1LzE4MzUxNzguc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BQ0NFU09SSU9TPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdyYW4gdmFyaWVkYWQgZGUgcHJvZHVjdG9zIDxici8+IG5lY2VzYXJpb3MgcGFyYSB0dXMgcHJveWVjdG9zLiA8YnIvPiBQaWV6YXMgZXNwZWNpYWxlcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+TcOhcyA+PjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIGRpdixcclxuICAgICAgICAgICAgICAucHJvZHVjdHMtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogZ3JlZW55ZWxsb3c7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogZ3JheTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmluZm8tcHJvZHVjdHN7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7XHJcblxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgLmNhcmQtcHJvZHVjdHN7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBnb2xkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuY2lyY2xle1xyXG4gICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjMUIxMzNDO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuY2lyY2xlIGltZ3tcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuaW5mby1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5pbmZvLWNhcmQgaDJ7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMxQjEzM0M7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5pbmZvLWNhcmQgcCB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICM3Njc2NzY7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5pbmZvLWNhcmQgYSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzFCMTMzQztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiAgIFxyXG5leHBvcnQgZGVmYXVsdCBMaW5lUHJvZHVjdHM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\LineProducts.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LineProducts);

/***/ }),

/***/ "./pages/components/Home/NavBar/Nav.js":
/*!*********************************************!*\
  !*** ./pages/components/Home/NavBar/Nav.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavBar/Navigation.json */ "./pages/components/Home/NavBar/Navigation.json");
var _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../NavBar/Navigation.json */ "./pages/components/Home/NavBar/Navigation.json", 1);
var _jsxFileName = "C:\\Users\\Adriana\\Desktop\\silversite\\pages\\components\\Home\\NavBar\\Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class NavBar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props); // Ref's for nav links

    _defineProperty(this, "setUnderline", () => {
      const {
        active
      } = this.state; // Calcaulate nav's position from the edge

      const wrapper = this.nav.wrapper.getBoundingClientRect();
      const containerWidth = this.nav.container.clientWidth;
      const positionFromEdge = (wrapper.width - containerWidth) / 2; // Get the scroll position of the div (for when nav is wider than browser)

      const scrollPos = this.nav.scrollContainer.scrollLeft; // Get active link position

      const activeLink = this.links[active.section];
      const activeLinkPos = activeLink.getBoundingClientRect(); // Set line width to match active link width

      this.nav.line.style.width = `${activeLink.clientWidth}px`; // Calculate left position of line to line up with active line

      this.nav.line.style.left = `${activeLinkPos.left - positionFromEdge + scrollPos}px`;
    });

    _defineProperty(this, "onResize", () => {
      // Don't transition the underline on resize (so it doesn't lag)
      this.nav.line.classList.remove("transition");
      this.setUnderline();
    });

    _defineProperty(this, "onClick", e => {
      e.persist();
      const activeIndex = _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_2__["cities"].findIndex(x => x.section === e.target.id);
      const activeObj = _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_2__["cities"][activeIndex]; // Set transition onClick only

      this.nav.line.classList.add("transition");
      this.setState({
        active: activeObj
      });
    });

    this.links = {}; // Ref's for other nav elements

    this.nav = {
      line: null,
      container: null,
      wrapper: null
    };
    this.state = {
      // Stores active nav item - first by default
      active: _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_2__["cities"][0]
    };
  }

  componentDidMount() {
    // Set underline to the first active link position
    this.setUnderline(); // Attach event listeners

    this.attachEventListeners();
  }

  componentDidUpdate() {
    // Move underline when active link changes
    this.setUnderline();
  }

  componentWillUnmount() {
    // Clear event listeners on unmount
    this.detachEventListeners();
  }

  attachEventListeners() {
    // Adjust the underline on resize
    window.addEventListener("resize", this.onResize);
  }

  detachEventListeners() {
    // Remove adjust the underline on resize
    window.addEventListener("resize", this.onResize);
  }

  render() {
    const {
      active
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("div", {
      className: "scroll-container",
      ref: node => {
        this.nav.scrollContainer = node;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      className: "wrapper",
      ref: node => {
        this.nav.wrapper = node;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("div", {
      ref: node => {
        this.nav.container = node;
      },
      className: "jsx-2514365959" + " " + "links-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_2__["cities"].map(cities => {
      const {
        section,
        label
      } = cities;
      return __jsx("div", {
        key: section,
        className: "jsx-2514365959" + " " + "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("button", {
        type: "button",
        id: section,
        onClick: this.onClick,
        ref: node => {
          this.links[section] = node;
        },
        className: "jsx-2514365959" + " " + ((active.section === section ? "active" : "") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, label));
    }), __jsx("div", {
      ref: node => {
        this.nav.line = node;
      },
      className: "jsx-2514365959" + " " + "line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2514365959",
      __self: this
    }, ".scroll-container.jsx-2514365959{max-width:100%;overflow-x:auto;}.wrapper.jsx-2514365959{min-width:710px;}.container.jsx-2514365959{background:violet;max-width:1000px;}.links-container.jsx-2514365959{height:100%;width:99%;position:relative;}.links-container.jsx-2514365959 .link.jsx-2514365959{height:100%;margin-bottom:3px;display:inline-block;width:calc(100% / 7);}.links-container.jsx-2514365959 .link.jsx-2514365959 button.jsx-2514365959{background-color:transparent;cursor:pointer;border:none;outline:none;padding:5px;color:#00000;font-size:0.8rem;-webkit-letter-spacing:0.7px;-moz-letter-spacing:0.7px;-ms-letter-spacing:0.7px;letter-spacing:0.7px;display:block;margin:auto;font-family:'Raleway',sans-serif;}.links-container.jsx-2514365959 .link.jsx-2514365959 button.jsx-2514365959:hover{color:#000000;}.links-container.jsx-2514365959 .link.jsx-2514365959 button.active.jsx-2514365959{color:#000000;}.links-container.jsx-2514365959 .line.jsx-2514365959{display:block;height:2px;position:absolute;background-color:#000000;}.links-container.jsx-2514365959 .line.transition.jsx-2514365959{-webkit-transition:left 0.35s,width 0.35s;transition:left 0.35s,width 0.35s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGNvbXBvbmVudHNcXEhvbWVcXE5hdkJhclxcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdKNkIsQUFNa0MsQUFJQyxBQUlFLEFBT04sQUFNQSxBQU9pQixBQWFmLEFBR0EsQUFHQSxBQU9xQixZQXRDekIsQUFNUSxFQW9CcEIsQUFHQSxBQUlhLENBaERLLENBS2xCLEVBTW1CLElBTUMsR0FnQ0EsSUFyQkgsQ0FMTSxDQXRCdkIsSUFXQSxLQU1BLEdBZ0MyQixDQXJCYixPQUxTLEtBTVIsWUFxQmYsQ0FwQmUsR0FOZixJQTZCQSxLQXRCZSxhQUNJLGlCQUNJLHFHQUNQLGNBQ0YsWUFDc0IsaUNBQ3BDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGNvbXBvbmVudHNcXEhvbWVcXE5hdkJhclxcTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgZGF0YSBmcm9tIFwiLi4vTmF2QmFyL05hdmlnYXRpb24uanNvblwiO1xyXG5cclxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge307XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAvLyBSZWYncyBmb3IgbmF2IGxpbmtzXHJcbiAgICB0aGlzLmxpbmtzID0ge307XHJcblxyXG4gICAgLy8gUmVmJ3MgZm9yIG90aGVyIG5hdiBlbGVtZW50c1xyXG4gICAgdGhpcy5uYXYgPSB7XHJcbiAgICAgIGxpbmU6IG51bGwsXHJcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcclxuICAgICAgd3JhcHBlcjogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAvLyBTdG9yZXMgYWN0aXZlIG5hdiBpdGVtIC0gZmlyc3QgYnkgZGVmYXVsdFxyXG4gICAgICBhY3RpdmU6IGRhdGEuY2l0aWVzWzBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyBTZXQgdW5kZXJsaW5lIHRvIHRoZSBmaXJzdCBhY3RpdmUgbGluayBwb3NpdGlvblxyXG4gICAgdGhpcy5zZXRVbmRlcmxpbmUoKTtcclxuXHJcbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzXHJcbiAgICB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAvLyBNb3ZlIHVuZGVybGluZSB3aGVuIGFjdGl2ZSBsaW5rIGNoYW5nZXNcclxuICAgIHRoaXMuc2V0VW5kZXJsaW5lKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIC8vIENsZWFyIGV2ZW50IGxpc3RlbmVycyBvbiB1bm1vdW50XHJcbiAgICB0aGlzLmRldGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzZXRVbmRlcmxpbmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAvLyBDYWxjYXVsYXRlIG5hdidzIHBvc2l0aW9uIGZyb20gdGhlIGVkZ2VcclxuICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLm5hdi53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB0aGlzLm5hdi5jb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCBwb3NpdGlvbkZyb21FZGdlID0gKHdyYXBwZXIud2lkdGggLSBjb250YWluZXJXaWR0aCkgLyAyO1xyXG5cclxuICAgIC8vIEdldCB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBkaXYgKGZvciB3aGVuIG5hdiBpcyB3aWRlciB0aGFuIGJyb3dzZXIpXHJcbiAgICBjb25zdCBzY3JvbGxQb3MgPSB0aGlzLm5hdi5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdDtcclxuXHJcbiAgICAvLyBHZXQgYWN0aXZlIGxpbmsgcG9zaXRpb25cclxuICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSB0aGlzLmxpbmtzW2FjdGl2ZS5zZWN0aW9uXTtcclxuICAgIGNvbnN0IGFjdGl2ZUxpbmtQb3MgPSBhY3RpdmVMaW5rLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIC8vIFNldCBsaW5lIHdpZHRoIHRvIG1hdGNoIGFjdGl2ZSBsaW5rIHdpZHRoXHJcbiAgICB0aGlzLm5hdi5saW5lLnN0eWxlLndpZHRoID0gYCR7YWN0aXZlTGluay5jbGllbnRXaWR0aH1weGA7XHJcbiAgICAvLyBDYWxjdWxhdGUgbGVmdCBwb3NpdGlvbiBvZiBsaW5lIHRvIGxpbmUgdXAgd2l0aCBhY3RpdmUgbGluZVxyXG4gICAgdGhpcy5uYXYubGluZS5zdHlsZS5sZWZ0ID0gYCR7YWN0aXZlTGlua1Bvcy5sZWZ0IC1cclxuICAgICAgcG9zaXRpb25Gcm9tRWRnZSArXHJcbiAgICAgIHNjcm9sbFBvc31weGA7XHJcbiAgfTtcclxuXHJcbiAgb25SZXNpemUgPSAoKSA9PiB7XHJcbiAgICAvLyBEb24ndCB0cmFuc2l0aW9uIHRoZSB1bmRlcmxpbmUgb24gcmVzaXplIChzbyBpdCBkb2Vzbid0IGxhZylcclxuICAgIHRoaXMubmF2LmxpbmUuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb25cIik7XHJcbiAgICB0aGlzLnNldFVuZGVybGluZSgpO1xyXG4gIH07XHJcblxyXG4gIG9uQ2xpY2sgPSBlID0+IHtcclxuICAgIGUucGVyc2lzdCgpO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gZGF0YS5jaXRpZXMuZmluZEluZGV4KHggPT4geC5zZWN0aW9uID09PSBlLnRhcmdldC5pZCk7XHJcbiAgICBjb25zdCBhY3RpdmVPYmogPSBkYXRhLmNpdGllc1thY3RpdmVJbmRleF07XHJcblxyXG4gICAgLy8gU2V0IHRyYW5zaXRpb24gb25DbGljayBvbmx5XHJcbiAgICB0aGlzLm5hdi5saW5lLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogYWN0aXZlT2JqIH0pO1xyXG4gIH07XHJcblxyXG4gIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gQWRqdXN0IHRoZSB1bmRlcmxpbmUgb24gcmVzaXplXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcclxuICB9XHJcblxyXG4gIGRldGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gUmVtb3ZlIGFkanVzdCB0aGUgdW5kZXJsaW5lIG9uIHJlc2l6ZVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5hdi5zY3JvbGxDb250YWluZXIgPSBub2RlO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndyYXBwZXJcIlxyXG4gICAgICAgICAgICByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubmF2LndyYXBwZXIgPSBub2RlO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtzLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm5hdi5jb250YWluZXIgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5jaXRpZXMubWFwKGNpdGllcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2VjdGlvbiwgbGFiZWwgfSA9IGNpdGllcztcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rXCIga2V5PXtzZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmUuc2VjdGlvbiA9PT0gc2VjdGlvbiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3NlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmtzW3NlY3Rpb25dID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdi5saW5lID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgLnNjcm9sbC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3MTBweDtcclxuICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMCAyNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZpb2xldDtcclxuICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luOiAxNTJweCBhdXRvIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDAgNSU7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlua3MtY29udGFpbmVyIC5saW5rIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAvIDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmtzLWNvbnRhaW5lciAubGluayBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlua3MtY29udGFpbmVyIC5saW5rIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmtzLWNvbnRhaW5lciAubGluayBidXR0b24uYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlua3MtY29udGFpbmVyIC5saW5lIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlua3MtY29udGFpbmVyIC5saW5lLnRyYW5zaXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMzVzLCB3aWR0aCAwLjM1cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbmB9XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qKiBDb250ZW50IGZvciBlYWNoIHRhYiB3b3VsZCBnbyBoZXJlICovfVxyXG4gICAgICAgIHsvKiA8ZGl2PnthY3RpdmUuY29udGVudH08L2Rpdj4gKi99XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\components\\\\Home\\\\NavBar\\\\Nav.js */"))))));
  }

}

_defineProperty(NavBar, "propTypes", {});

_defineProperty(NavBar, "defaultProps", {});

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./pages/components/Home/NavBar/Navigation.json":
/*!******************************************************!*\
  !*** ./pages/components/Home/NavBar/Navigation.json ***!
  \******************************************************/
/*! exports provided: cities, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cities\":[{\"section\":\"INICIO\",\"label\":\"INICIO\"},{\"section\":\"TUBERIAS\",\"label\":\"TUBERIAS\"},{\"section\":\"CONEXIONES\",\"label\":\"CONEXIONES\"},{\"section\":\"VALVULAS\",\"label\":\"VALVULAS\"},{\"section\":\"CEMENTOS\",\"label\":\"CEMENTOS\"},{\"section\":\"ACCESORIOS\",\"label\":\"ACCESORIOS\"},{\"section\":\"CLIENTE PREFERENTE\",\"label\":\"CLIENTE PREFERENTE\"}]}");

/***/ }),

/***/ "./pages/components/Home/PhotoSlide/Gallery.js":
/*!*****************************************************!*\
  !*** ./pages/components/Home/PhotoSlide/Gallery.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nuka-carousel */ "nuka-carousel");
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nuka_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stuff_back_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../stuff/back.svg */ "./pages/stuff/back.svg");
/* harmony import */ var _stuff_back_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stuff_back_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Adriana\\Desktop\\silversite\\pages\\components\\Home\\PhotoSlide\\Gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Slideshow extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-2587565316",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx(nuka_carousel__WEBPACK_IMPORTED_MODULE_3___default.a //  renderTopCenterControls = { ({ currentSlide }) => (
    //     < div > Diapositiva: { currentSlide } </ div >
    //   ) } 
    , {
      renderCenterLeftControls: ({
        previousSlide
      }) => __jsx("button", {
        onClick: previousSlide,
        className: "jsx-2587565316" + " " + "controller",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, " "),
      renderCenterRightControls: ({
        nextSlide
      }) => __jsx("button", {
        onClick: nextSlide,
        className: "jsx-2587565316" + " " + "controller-two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }),
      slidesToShow: 1,
      autoplay: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgeroneto.com%2Fimages%2Ftubo13.png&f=1&nofb=1",
      className: "jsx-2587565316",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("img", {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fadequa.es%2Fwp-content%2Fuploads%2F2015%2F09%2FG-PVC-EDIFICACION-3.jpg&f=1&nofb=1",
      className: "jsx-2587565316",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("img", {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F9c%2F45%2F67%2F9c456726e942a039c41968566bb20895.jpg&f=1&nofb=1",
      className: "jsx-2587565316",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("img", {
      src: "https://especialistaspvc.com.mx/wp-content/uploads/2018/05/AdobeStock_141250485web.jpg",
      className: "jsx-2587565316",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("img", {
      src: "https://http2.mlstatic.com/tuberia-y-conexiones-pead-D_NQ_NP_980482-MLM25574935515_052017-F.jpg",
      className: "jsx-2587565316",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2587565316",
      __self: this
    }, "div.jsx-2587565316{height:92%;width:98%;}img.jsx-2587565316{width:50vw;height:98vh;}.controller.jsx-2587565316,.controller-two.jsx-2587565316{width:50px;height:50px;border-radius:50%;background-color:white;border-style:none;border:2px solid #000000;opacity:1;}.controller.jsx-2587565316{background-image:url(\"https://image.flaticon.com/icons/svg/860/860790.svg\");background-size:20px;background-repeat:no-repeat;background-position:center;}.controller-two.jsx-2587565316{background-image:url(\"https://image.flaticon.com/icons/svg/318/318429.svg\");background-size:20px;background-repeat:no-repeat;background-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGNvbXBvbmVudHNcXEhvbWVcXFBob3RvU2xpZGVcXEdhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNvQixBQUl1QixBQUtJLEFBSUEsQUFTOEQsQUFNQSxXQXZCbkUsQUFLTSxBQUlBLFVBUGYsRUFJRCxBQUlzQixrQkFDSyx1QkFDTCxZQU1BLEFBTUEsTUFYTyxlQU1BLEFBTUEsVUFYZixVQUNkLFFBSzRCLEFBTUEsMkJBTC9CLEFBTUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBZHJpYW5hXFxEZXNrdG9wXFxzaWx2ZXJzaXRlXFxwYWdlc1xcY29tcG9uZW50c1xcSG9tZVxcUGhvdG9TbGlkZVxcR2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCc7XHJcbmltcG9ydCBwcmV2IGZyb20gJy4uLy4uLy4uL3N0dWZmL2JhY2suc3ZnJ1xyXG5cclxuY2xhc3MgU2xpZGVzaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgLy8gIHJlbmRlclRvcENlbnRlckNvbnRyb2xzID0geyAoeyBjdXJyZW50U2xpZGUgfSkgPT4gKFxyXG4gICAgICAgIC8vICAgICA8IGRpdiA+IERpYXBvc2l0aXZhOiB7IGN1cnJlbnRTbGlkZSB9IDwvIGRpdiA+XHJcbiAgICAgICAgLy8gICApIH0gXHJcbiAgICAgICAgICByZW5kZXJDZW50ZXJMZWZ0Q29udHJvbHMgPSB7ICh7IHByZXZpb3VzU2xpZGUgfSkgPT4gKFxyXG4gICAgICAgICAgICA8IGJ1dHRvbiBjbGFzc05hbWU9XCJjb250cm9sbGVyXCIgIG9uQ2xpY2sgPSB7IHByZXZpb3VzU2xpZGUgfSA+IDwvIGJ1dHRvbiA+XHJcbiAgICAgICAgICApIH0gXHJcbiAgICAgICAgICByZW5kZXJDZW50ZXJSaWdodENvbnRyb2xzID0geyAoeyBuZXh0U2xpZGUgfSkgPT4gKFxyXG4gICAgICAgICAgICA8IGJ1dHRvbiBjbGFzc05hbWU9XCJjb250cm9sbGVyLXR3b1wiICBvbkNsaWNrID0geyBuZXh0U2xpZGUgfSA+PC8gYnV0dG9uID5cclxuICAgICAgICAgICkgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93PXsxfVxyXG4gICAgICAgICAgYXV0b3BsYXk9e3RydWV9ID5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2V4dGVybmFsLWNvbnRlbnQuZHVja2R1Y2tnby5jb20vaXUvP3U9aHR0cCUzQSUyRiUyRmdlcm9uZXRvLmNvbSUyRmltYWdlcyUyRnR1Ym8xMy5wbmcmZj0xJm5vZmI9MVwiIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRmFkZXF1YS5lcyUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAxNSUyRjA5JTJGRy1QVkMtRURJRklDQUNJT04tMy5qcGcmZj0xJm5vZmI9MVwiIC8+XHJcblxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2V4dGVybmFsLWNvbnRlbnQuZHVja2R1Y2tnby5jb20vaXUvP3U9aHR0cHMlM0ElMkYlMkZzLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tJTJGb3JpZ2luYWxzJTJGOWMlMkY0NSUyRjY3JTJGOWM0NTY3MjZlOTQyYTAzOWM0MTk2ODU2NmJiMjA4OTUuanBnJmY9MSZub2ZiPTFcIiAvPlxyXG5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9lc3BlY2lhbGlzdGFzcHZjLmNvbS5teC93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS9BZG9iZVN0b2NrXzE0MTI1MDQ4NXdlYi5qcGdcIiAvPlxyXG5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9odHRwMi5tbHN0YXRpYy5jb20vdHViZXJpYS15LWNvbmV4aW9uZXMtcGVhZC1EX05RX05QXzk4MDQ4Mi1NTE0yNTU3NDkzNTUxNV8wNTIwMTctRi5qcGdcIiAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgIGRpdlxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICBoZWlnaHQ6IDkyJTsgICAgXHJcbiAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICAvLyAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6IDk4dmg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5jb250cm9sbGVyLCAuY29udHJvbGxlci10d28ge1xyXG4gICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5jb250cm9sbGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzg2MC84NjA3OTAuc3ZnXCIpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7ICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAuY29udHJvbGxlci10d28ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMzE4LzMxODQyOS5zdmdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDsgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXNob3c7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\components\\\\Home\\\\PhotoSlide\\\\Gallery.js */"));
  }

}

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./pages/Home.js");
/* harmony import */ var _components_Home_NavBar_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Home/NavBar/Nav */ "./pages/components/Home/NavBar/Nav.js");
/* harmony import */ var _components_Home_PhotoSlide_Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home/PhotoSlide/Gallery */ "./pages/components/Home/PhotoSlide/Gallery.js");
/* harmony import */ var _LineProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LineProducts */ "./pages/LineProducts.js");
var _jsxFileName = "C:\\Users\\Adriana\\Desktop\\silversite\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "jsx-2993261006" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx("hr", {
    className: "jsx-2993261006",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_Home_NavBar_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("hr", {
    className: "jsx-2993261006",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-2993261006" + " " + "gallery-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_Home_PhotoSlide_Gallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-2993261006" + " " + "info-products-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_LineProducts__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2993261006",
    __self: this
  }, "section.jsx-2993261006,.header.jsx-2993261006{height:12vh;}hr.jsx-2993261006{height:0.5px;border-style:none;background-color:#BABABA;}.gallery-section.jsx-2993261006{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:112vh;}.info-products-section.jsx-2993261006{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#C5CAD9;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFJMkIsQUFHQyxBQUtBLEFBUUEsWUFmZixDQUdvQixBQWFMLGtCQVpZLHlCQUMzQixrQkFHd0IsYUFTSixpRUFSQSw0QkFTSyxpRUFSRSxrQ0FTTixtQkFDckIsNENBVGUsYUFFZiIsImZpbGUiOiJDOlxcVXNlcnNcXEFkcmlhbmFcXERlc2t0b3BcXHNpbHZlcnNpdGVcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9Ib21lJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvSG9tZS9OYXZCYXIvTmF2JztcclxuaW1wb3J0IFNsaWRlc2hvdyBmcm9tICcuL2NvbXBvbmVudHMvSG9tZS9QaG90b1NsaWRlL0dhbGxlcnknO1xyXG5pbXBvcnQgTGluZVBSb2R1Y3RzIGZyb20gJy4vTGluZVByb2R1Y3RzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lID0gXCJnYWxsZXJ5LXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPFNsaWRlc2hvdyAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lID0gXCJpbmZvLXByb2R1Y3RzLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgIDxMaW5lUFJvZHVjdHMgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICBzZWN0aW9uLFxyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEydmg7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGhyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDAuNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFCQUJBO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5nYWxsZXJ5LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDExMnZoO1xyXG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbmZvLXByb2R1Y3RzLXNlY3Rpb257XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQzVDQUQ5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\index.js */"));
}

/***/ }),

/***/ "./pages/stuff/back.svg":
/*!******************************!*\
  !*** ./pages/stuff/back.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0ODkuNiA0ODkuNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5LjYgNDg5LjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIGNsYXNzPSIiPjxnPjxnPgoJPGc+CgkJPHBhdGggc3R5bGU9ImZpbGw6I0UzRTlFRCIgZD0iTTI0NC44LDQ4OS42YzEzNSwwLDI0NC44LTEwOS44LDI0NC44LTI0NC44UzM3OS44LDAsMjQ0LjgsMFMwLDEwOS44LDAsMjQ0LjggICAgUzEwOS44LDQ4OS42LDI0NC44LDQ4OS42eiBNMjQ0LjgsMTkuOGMxMjQuMSwwLDIyNSwxMDAuOSwyMjUsMjI1cy0xMDAuOSwyMjUtMjI1LDIyNXMtMjI1LTEwMC45LTIyNS0yMjVTMTIwLjcsMTkuOCwyNDQuOCwxOS44eiIgZGF0YS1vcmlnaW5hbD0iIzJDMkYzMyIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzJDMkYzMyIvPgoJCTxwYXRoIHN0eWxlPSJmaWxsOiNFM0U5RUQiIGQ9Ik0yNjUuNSwzMjYuMWMxLjksMS45LDQuNSwyLjksNywyLjlzNS4xLTEsNy0yLjljMy45LTMuOSwzLjktMTAuMSwwLTE0bC02Ny4zLTY3LjNsNjcuMy02Ny4zICAgIGMzLjktMy45LDMuOS0xMC4xLDAtMTRzLTEwLjEtMy45LTE0LDBsLTc0LjMsNzQuM2MtMy45LDMuOS0zLjksMTAuMSwwLDE0TDI2NS41LDMyNi4xeiIgZGF0YS1vcmlnaW5hbD0iIzNDOTJDQSIgY2xhc3M9IiIgZGF0YS1vbGRfY29sb3I9IiMzQzkyQ0EiLz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+Cg=="

/***/ }),

/***/ "./pages/stuff/logo-tuvamex.png":
/*!**************************************!*\
  !*** ./pages/stuff/logo-tuvamex.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-tuvamex-766ec02a16b2201a85c2355e37d96946.png";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Adriana\Desktop\silversite\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "nuka-carousel":
/*!********************************!*\
  !*** external "nuka-carousel" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
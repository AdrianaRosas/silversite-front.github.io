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


 // import '../../Home/NavBar/Nav.css'

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
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      className: "scroll-container",
      ref: node => {
        this.nav.scrollContainer = node;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("div", {
      className: "wrapper",
      ref: node => {
        this.nav.wrapper = node;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("div", {
      ref: node => {
        this.nav.container = node;
      },
      className: "jsx-2514365959" + " " + "links-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
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
          lineNumber: 125
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
          lineNumber: 126
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
        lineNumber: 140
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2514365959",
      __self: this
    }, ".scroll-container.jsx-2514365959{max-width:100%;overflow-x:auto;}.wrapper.jsx-2514365959{min-width:710px;}.container.jsx-2514365959{background:violet;max-width:1000px;}.links-container.jsx-2514365959{height:100%;width:99%;position:relative;}.links-container.jsx-2514365959 .link.jsx-2514365959{height:100%;margin-bottom:3px;display:inline-block;width:calc(100% / 7);}.links-container.jsx-2514365959 .link.jsx-2514365959 button.jsx-2514365959{background-color:transparent;cursor:pointer;border:none;outline:none;padding:5px;color:#00000;font-size:0.8rem;-webkit-letter-spacing:0.7px;-moz-letter-spacing:0.7px;-ms-letter-spacing:0.7px;letter-spacing:0.7px;display:block;margin:auto;font-family:'Raleway',sans-serif;}.links-container.jsx-2514365959 .link.jsx-2514365959 button.jsx-2514365959:hover{color:#000000;}.links-container.jsx-2514365959 .link.jsx-2514365959 button.active.jsx-2514365959{color:#000000;}.links-container.jsx-2514365959 .line.jsx-2514365959{display:block;height:2px;position:absolute;background-color:#000000;}.links-container.jsx-2514365959 .line.transition.jsx-2514365959{-webkit-transition:left 0.35s,width 0.35s;transition:left 0.35s,width 0.35s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGNvbXBvbmVudHNcXEhvbWVcXE5hdkJhclxcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKNkIsQUFNa0MsQUFJQyxBQUlFLEFBT04sQUFNQSxBQU9pQixBQWFmLEFBR0EsQUFHQSxBQU9xQixZQXRDekIsQUFNUSxFQW9CcEIsQUFHQSxBQUlhLENBaERLLENBS2xCLEVBTW1CLElBTUMsR0FnQ0EsSUFyQkgsQ0FMTSxDQXRCdkIsSUFXQSxLQU1BLEdBZ0MyQixDQXJCYixPQUxTLEtBTVIsWUFxQmYsQ0FwQmUsR0FOZixJQTZCQSxLQXRCZSxhQUNJLGlCQUNJLHFHQUNQLGNBQ0YsWUFDc0IsaUNBQ3BDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGNvbXBvbmVudHNcXEhvbWVcXE5hdkJhclxcTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgZGF0YSBmcm9tIFwiLi4vTmF2QmFyL05hdmlnYXRpb24uanNvblwiO1xyXG4vLyBpbXBvcnQgJy4uLy4uL0hvbWUvTmF2QmFyL05hdi5jc3MnXHJcblxyXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIC8vIFJlZidzIGZvciBuYXYgbGlua3NcclxuICAgIHRoaXMubGlua3MgPSB7fTtcclxuXHJcbiAgICAvLyBSZWYncyBmb3Igb3RoZXIgbmF2IGVsZW1lbnRzXHJcbiAgICB0aGlzLm5hdiA9IHtcclxuICAgICAgbGluZTogbnVsbCxcclxuICAgICAgY29udGFpbmVyOiBudWxsLFxyXG4gICAgICB3cmFwcGVyOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC8vIFN0b3JlcyBhY3RpdmUgbmF2IGl0ZW0gLSBmaXJzdCBieSBkZWZhdWx0XHJcbiAgICAgIGFjdGl2ZTogZGF0YS5jaXRpZXNbMF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vIFNldCB1bmRlcmxpbmUgdG8gdGhlIGZpcnN0IGFjdGl2ZSBsaW5rIHBvc2l0aW9uXHJcbiAgICB0aGlzLnNldFVuZGVybGluZSgpO1xyXG5cclxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnNcclxuICAgIHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIC8vIE1vdmUgdW5kZXJsaW5lIHdoZW4gYWN0aXZlIGxpbmsgY2hhbmdlc1xyXG4gICAgdGhpcy5zZXRVbmRlcmxpbmUoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgLy8gQ2xlYXIgZXZlbnQgbGlzdGVuZXJzIG9uIHVubW91bnRcclxuICAgIHRoaXMuZGV0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHNldFVuZGVybGluZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIC8vIENhbGNhdWxhdGUgbmF2J3MgcG9zaXRpb24gZnJvbSB0aGUgZWRnZVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IHRoaXMubmF2LndyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHRoaXMubmF2LmNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgIGNvbnN0IHBvc2l0aW9uRnJvbUVkZ2UgPSAod3JhcHBlci53aWR0aCAtIGNvbnRhaW5lcldpZHRoKSAvIDI7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGRpdiAoZm9yIHdoZW4gbmF2IGlzIHdpZGVyIHRoYW4gYnJvd3NlcilcclxuICAgIGNvbnN0IHNjcm9sbFBvcyA9IHRoaXMubmF2LnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0O1xyXG5cclxuICAgIC8vIEdldCBhY3RpdmUgbGluayBwb3NpdGlvblxyXG4gICAgY29uc3QgYWN0aXZlTGluayA9IHRoaXMubGlua3NbYWN0aXZlLnNlY3Rpb25dO1xyXG4gICAgY29uc3QgYWN0aXZlTGlua1BvcyA9IGFjdGl2ZUxpbmsuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgLy8gU2V0IGxpbmUgd2lkdGggdG8gbWF0Y2ggYWN0aXZlIGxpbmsgd2lkdGhcclxuICAgIHRoaXMubmF2LmxpbmUuc3R5bGUud2lkdGggPSBgJHthY3RpdmVMaW5rLmNsaWVudFdpZHRofXB4YDtcclxuICAgIC8vIENhbGN1bGF0ZSBsZWZ0IHBvc2l0aW9uIG9mIGxpbmUgdG8gbGluZSB1cCB3aXRoIGFjdGl2ZSBsaW5lXHJcbiAgICB0aGlzLm5hdi5saW5lLnN0eWxlLmxlZnQgPSBgJHthY3RpdmVMaW5rUG9zLmxlZnQgLVxyXG4gICAgICBwb3NpdGlvbkZyb21FZGdlICtcclxuICAgICAgc2Nyb2xsUG9zfXB4YDtcclxuICB9O1xyXG5cclxuICBvblJlc2l6ZSA9ICgpID0+IHtcclxuICAgIC8vIERvbid0IHRyYW5zaXRpb24gdGhlIHVuZGVybGluZSBvbiByZXNpemUgKHNvIGl0IGRvZXNuJ3QgbGFnKVxyXG4gICAgdGhpcy5uYXYubGluZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNpdGlvblwiKTtcclxuICAgIHRoaXMuc2V0VW5kZXJsaW5lKCk7XHJcbiAgfTtcclxuXHJcbiAgb25DbGljayA9IGUgPT4ge1xyXG4gICAgZS5wZXJzaXN0KCk7XHJcblxyXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSBkYXRhLmNpdGllcy5maW5kSW5kZXgoeCA9PiB4LnNlY3Rpb24gPT09IGUudGFyZ2V0LmlkKTtcclxuICAgIGNvbnN0IGFjdGl2ZU9iaiA9IGRhdGEuY2l0aWVzW2FjdGl2ZUluZGV4XTtcclxuXHJcbiAgICAvLyBTZXQgdHJhbnNpdGlvbiBvbkNsaWNrIG9ubHlcclxuICAgIHRoaXMubmF2LmxpbmUuY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb25cIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBhY3RpdmVPYmogfSk7XHJcbiAgfTtcclxuXHJcbiAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBBZGp1c3QgdGhlIHVuZGVybGluZSBvbiByZXNpemVcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUpO1xyXG4gIH1cclxuXHJcbiAgZGV0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBSZW1vdmUgYWRqdXN0IHRoZSB1bmRlcmxpbmUgb24gcmVzaXplXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGwtY29udGFpbmVyXCJcclxuICAgICAgICAgIHJlZj17bm9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2LnNjcm9sbENvbnRhaW5lciA9IG5vZGU7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid3JhcHBlclwiXHJcbiAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uYXYud3JhcHBlciA9IG5vZGU7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua3MtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubmF2LmNvbnRhaW5lciA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmNpdGllcy5tYXAoY2l0aWVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgeyBzZWN0aW9uLCBsYWJlbCB9ID0gY2l0aWVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtcIiBrZXk9e3NlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZS5zZWN0aW9uID09PSBzZWN0aW9uID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17c2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlua3Nbc2VjdGlvbl0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2LmxpbmUgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDcxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAwIDI2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAvLyBtYXJnaW46IDE1MnB4IGF1dG8gMTBweDtcclxuICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMCA1JTtcclxuICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmtzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmsge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlua3MtY29udGFpbmVyIC5saW5rIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmsgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlua3MtY29udGFpbmVyIC5saW5rIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmUudHJhbnNpdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4zNXMsIHdpZHRoIDAuMzVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuYH1cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyoqIENvbnRlbnQgZm9yIGVhY2ggdGFiIHdvdWxkIGdvIGhlcmUgKi99XHJcbiAgICAgICAgey8qIDxkaXY+e2FjdGl2ZS5jb250ZW50fTwvZGl2PiAqL31cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\components\\\\Home\\\\NavBar\\\\Nav.js */"))))));
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
      className: "jsx-1707757703",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
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
        className: "jsx-1707757703" + " " + "controller",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, " "),
      renderCenterRightControls: ({
        nextSlide
      }) => __jsx("button", {
        onClick: nextSlide,
        className: "jsx-1707757703" + " " + "controller-two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }),
      slidesToShow: 1,
      autoplay: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("img", {
      src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgeroneto.com%2Fimages%2Ftubo13.png&f=1&nofb=1",
      className: "jsx-1707757703",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("img", {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fadequa.es%2Fwp-content%2Fuploads%2F2015%2F09%2FG-PVC-EDIFICACION-3.jpg&f=1&nofb=1",
      className: "jsx-1707757703",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("img", {
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F9c%2F45%2F67%2F9c456726e942a039c41968566bb20895.jpg&f=1&nofb=1",
      className: "jsx-1707757703",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("img", {
      src: "https://especialistaspvc.com.mx/wp-content/uploads/2018/05/AdobeStock_141250485web.jpg",
      className: "jsx-1707757703",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx("img", {
      src: "https://http2.mlstatic.com/tuberia-y-conexiones-pead-D_NQ_NP_980482-MLM25574935515_052017-F.jpg",
      className: "jsx-1707757703",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1707757703",
      __self: this
    }, "div.jsx-1707757703{height:92%;width:98%;}img.jsx-1707757703{width:50vw;height:98vh;}.controller.jsx-1707757703,.controller-two.jsx-1707757703{width:50px;height:50px;border-radius:50%;background-color:white;border-style:none;border:2px solid #000000;opacity:1;}.controller.jsx-1707757703{background-image:url(\"https://image.flaticon.com/icons/svg/860/860790.svg\");background-size:20px;background-repeat:no-repeat;background-position:center;}.controller-two.jsx-1707757703{background-image:url(\"https://image.flaticon.com/icons/svg/318/318429.svg\");background-size:20px;background-repeat:no-repeat;background-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGNvbXBvbmVudHNcXEhvbWVcXFBob3RvU2xpZGVcXEdhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNvQixBQUl1QixBQUtJLEFBSUEsQUFTOEQsQUFNQSxXQXZCbkUsQUFLTSxBQUlBLFVBUGYsRUFJRCxBQUlzQixrQkFDSyx1QkFDTCxZQU1BLEFBTUEsTUFYTyxlQU1BLEFBTUEsVUFYZixVQUNkLFFBSzRCLEFBTUEsMkJBTC9CLEFBTUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxBZHJpYW5hXFxEZXNrdG9wXFxzaWx2ZXJzaXRlXFxwYWdlc1xcY29tcG9uZW50c1xcSG9tZVxcUGhvdG9TbGlkZVxcR2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCc7XHJcbmltcG9ydCBwcmV2IGZyb20gJy4uLy4uLy4uL3N0dWZmL2JhY2suc3ZnJ1xyXG5cclxuXHJcblxyXG5jbGFzcyBTbGlkZXNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAvLyAgcmVuZGVyVG9wQ2VudGVyQ29udHJvbHMgPSB7ICh7IGN1cnJlbnRTbGlkZSB9KSA9PiAoXHJcbiAgICAgICAgLy8gICAgIDwgZGl2ID4gRGlhcG9zaXRpdmE6IHsgY3VycmVudFNsaWRlIH0gPC8gZGl2ID5cclxuICAgICAgICAvLyAgICkgfSBcclxuICAgICAgICAgIHJlbmRlckNlbnRlckxlZnRDb250cm9scyA9IHsgKHsgcHJldmlvdXNTbGlkZSB9KSA9PiAoXHJcbiAgICAgICAgICAgIDwgYnV0dG9uIGNsYXNzTmFtZT1cImNvbnRyb2xsZXJcIiAgb25DbGljayA9IHsgcHJldmlvdXNTbGlkZSB9ID4gPC8gYnV0dG9uID5cclxuICAgICAgICAgICkgfSBcclxuICAgICAgICAgIHJlbmRlckNlbnRlclJpZ2h0Q29udHJvbHMgPSB7ICh7IG5leHRTbGlkZSB9KSA9PiAoXHJcbiAgICAgICAgICAgIDwgYnV0dG9uIGNsYXNzTmFtZT1cImNvbnRyb2xsZXItdHdvXCIgIG9uQ2xpY2sgPSB7IG5leHRTbGlkZSB9ID48LyBidXR0b24gPlxyXG4gICAgICAgICAgKSB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XHJcbiAgICAgICAgICBhdXRvcGxheT17dHJ1ZX0gPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwJTNBJTJGJTJGZ2Vyb25ldG8uY29tJTJGaW1hZ2VzJTJGdHVibzEzLnBuZyZmPTEmbm9mYj0xXCIgLz5cclxuICAgICAgICBcclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9leHRlcm5hbC1jb250ZW50LmR1Y2tkdWNrZ28uY29tL2l1Lz91PWh0dHBzJTNBJTJGJTJGYWRlcXVhLmVzJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE1JTJGMDklMkZHLVBWQy1FRElGSUNBQ0lPTi0zLmpwZyZmPTEmbm9mYj0xXCIgLz5cclxuXHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZXh0ZXJuYWwtY29udGVudC5kdWNrZHVja2dvLmNvbS9pdS8/dT1odHRwcyUzQSUyRiUyRnMtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20lMkZvcmlnaW5hbHMlMkY5YyUyRjQ1JTJGNjclMkY5YzQ1NjcyNmU5NDJhMDM5YzQxOTY4NTY2YmIyMDg5NS5qcGcmZj0xJm5vZmI9MVwiIC8+XHJcblxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2VzcGVjaWFsaXN0YXNwdmMuY29tLm14L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA1L0Fkb2JlU3RvY2tfMTQxMjUwNDg1d2ViLmpwZ1wiIC8+XHJcblxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2h0dHAyLm1sc3RhdGljLmNvbS90dWJlcmlhLXktY29uZXhpb25lcy1wZWFkLURfTlFfTlBfOTgwNDgyLU1MTTI1NTc0OTM1NTE1XzA1MjAxNy1GLmpwZ1wiIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICBcclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgZGl2XHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgIGhlaWdodDogOTIlOyAgICBcclxuICAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgIC8vICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgd2lkdGg6IDUwdnc7XHJcbiAgICAgICAgICAgICAgIGhlaWdodDogOTh2aDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmNvbnRyb2xsZXIsIC5jb250cm9sbGVyLXR3byB7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmNvbnRyb2xsZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvODYwLzg2MDc5MC5zdmdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDsgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgIC5jb250cm9sbGVyLXR3byB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8zMTgvMzE4NDI5LnN2Z1wiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4OyAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlc2hvdzsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\components\\\\Home\\\\PhotoSlide\\\\Gallery.js */"));
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
var _jsxFileName = "C:\\Users\\Adriana\\Desktop\\silversite\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: "jsx-120206560" + " " + "header",
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
    className: "jsx-120206560",
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
    className: "jsx-120206560",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("section", {
    className: "jsx-120206560" + " " + "gallery-section",
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
    id: "120206560",
    __self: this
  }, "section.jsx-120206560,.header.jsx-120206560{height:12vh;}hr.jsx-120206560{height:0.5px;border-style:none;background-color:#BABABA;}.gallery-section.jsx-120206560{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:112vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFJMkIsQUFJQyxBQUtBLFlBUGYsQ0FHb0Isa0JBQ08seUJBQzNCLGtCQUd3Qiw4RUFDSiw2RkFDTyxpR0FDWixhQUVmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9Ib21lL05hdkJhci9OYXYnO1xyXG5pbXBvcnQgU2xpZGVzaG93IGZyb20gJy4vY29tcG9uZW50cy9Ib21lL1Bob3RvU2xpZGUvR2FsbGVyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZSA9IFwiZ2FsbGVyeS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxTbGlkZXNob3cgLz5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICBzZWN0aW9uLFxyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEydmg7XHJcbiAgICAgICAgICAgICAgLy8gIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGhyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDAuNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFCQUJBO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5nYWxsZXJ5LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDExMnZoO1xyXG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\index.js */"));
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
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/Home/NavBar/Nav.js":
/*!*********************************************!*\
  !*** ./pages/components/Home/NavBar/Nav.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../NavBar/Navigation.json */ "./pages/components/Home/NavBar/Navigation.json");
var _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../NavBar/Navigation.json */ "./pages/components/Home/NavBar/Navigation.json", 1);







var _jsxFileName = "C:\\Users\\Adriana\\Desktop\\silversite\\pages\\components\\Home\\NavBar\\Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

 // import '../../Home/NavBar/Nav.css'

var NavBar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavBar, _Component);

  function NavBar(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar).call(this, props)); // Ref's for nav links

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setUnderline", function () {
      var active = _this.state.active; // Calcaulate nav's position from the edge

      var wrapper = _this.nav.wrapper.getBoundingClientRect();

      var containerWidth = _this.nav.container.clientWidth;
      var positionFromEdge = (wrapper.width - containerWidth) / 2; // Get the scroll position of the div (for when nav is wider than browser)

      var scrollPos = _this.nav.scrollContainer.scrollLeft; // Get active link position

      var activeLink = _this.links[active.section];
      var activeLinkPos = activeLink.getBoundingClientRect(); // Set line width to match active link width

      _this.nav.line.style.width = "".concat(activeLink.clientWidth, "px"); // Calculate left position of line to line up with active line

      _this.nav.line.style.left = "".concat(activeLinkPos.left - positionFromEdge + scrollPos, "px");
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onResize", function () {
      // Don't transition the underline on resize (so it doesn't lag)
      _this.nav.line.classList.remove("transition");

      _this.setUnderline();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onClick", function (e) {
      e.persist();
      var activeIndex = _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_9__["cities"].findIndex(function (x) {
        return x.section === e.target.id;
      });
      var activeObj = _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_9__["cities"][activeIndex]; // Set transition onClick only

      _this.nav.line.classList.add("transition");

      _this.setState({
        active: activeObj
      });
    });

    _this.links = {}; // Ref's for other nav elements

    _this.nav = {
      line: null,
      container: null,
      wrapper: null
    };
    _this.state = {
      // Stores active nav item - first by default
      active: _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_9__["cities"][0]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Set underline to the first active link position
      this.setUnderline(); // Attach event listeners

      this.attachEventListeners();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // Move underline when active link changes
      this.setUnderline();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Clear event listeners on unmount
      this.detachEventListeners();
    }
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      // Adjust the underline on resize
      window.addEventListener("resize", this.onResize);
    }
  }, {
    key: "detachEventListeners",
    value: function detachEventListeners() {
      // Remove adjust the underline on resize
      window.addEventListener("resize", this.onResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var active = this.state.active;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("div", {
        className: "scroll-container",
        ref: function ref(node) {
          _this2.nav.scrollContainer = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("div", {
        className: "wrapper",
        ref: function ref(node) {
          _this2.nav.wrapper = node;
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
        ref: function ref(node) {
          _this2.nav.container = node;
        },
        className: "jsx-2842939104" + " " + "links-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, _NavBar_Navigation_json__WEBPACK_IMPORTED_MODULE_9__["cities"].map(function (cities) {
        var section = cities.section,
            label = cities.label;
        return __jsx("div", {
          key: section,
          className: "jsx-2842939104" + " " + "link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, __jsx("button", {
          type: "button",
          id: section,
          onClick: _this2.onClick,
          ref: function ref(node) {
            _this2.links[section] = node;
          },
          className: "jsx-2842939104" + " " + ((active.section === section ? "active" : "") || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, label));
      }), __jsx("div", {
        ref: function ref(node) {
          _this2.nav.line = node;
        },
        className: "jsx-2842939104" + " " + "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2842939104",
        __self: this
      }, ".scroll-container.jsx-2842939104{max-width:100%;overflow-x:auto;}.wrapper.jsx-2842939104{min-width:710px;}.container.jsx-2842939104{background:violet;max-width:1000px;}.links-container.jsx-2842939104{height:100 width:99%;background-color:yellowgreen;position:relative;}.links-container.jsx-2842939104 .link.jsx-2842939104{height:100%;display:inline-block;width:calc(100% / 7);}.links-container.jsx-2842939104 .link.jsx-2842939104 button.jsx-2842939104{background-color:transparent;cursor:pointer;border:none;outline:none;padding:5px;color:#00000;font-size:0.8rem;-webkit-letter-spacing:0.7px;-moz-letter-spacing:0.7px;-ms-letter-spacing:0.7px;letter-spacing:0.7px;display:block;margin:auto;font-family:'Raleway',sans-serif;}.links-container.jsx-2842939104 .link.jsx-2842939104 button.jsx-2842939104:hover{color:#000000;}.links-container.jsx-2842939104 .link.jsx-2842939104 button.active.jsx-2842939104{color:#000000;}.links-container.jsx-2842939104 .line.jsx-2842939104{display:block;height:2px;position:absolute;background-color:#000000;}.links-container.jsx-2842939104 .line.transition.jsx-2842939104{-webkit-transition:left 0.35s,width 0.35s;transition:left 0.35s,width 0.35s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGNvbXBvbmVudHNcXEhvbWVcXE5hdkJhclxcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKNkIsQUFNa0MsQUFJQyxBQUlFLEFBUVIsQUFLRSxBQU9pQixBQWFmLEFBR0EsQUFHQSxBQU9xQixZQTlCZCxFQWtCdkIsQUFHQSxBQUlhLENBaERLLENBS2xCLEVBTW1CLEdBS1ksSUFpQ1gsSUFyQkgsRUEzQmpCLEVBdUJ1QixFQVp2QixRQXNDMkIsQ0FyQmIsTUFaTSxJQVFwQixFQUtlLFlBWmYsQUFpQ0EsQ0FwQmUsT0F1QmYsS0F0QmUsYUFDSSxpQkFDSSxxR0FDUCxjQUNGLFlBQ3NCLGlDQUNwQyIsImZpbGUiOiJDOlxcVXNlcnNcXEFkcmlhbmFcXERlc2t0b3BcXHNpbHZlcnNpdGVcXHBhZ2VzXFxjb21wb25lbnRzXFxIb21lXFxOYXZCYXJcXE5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIGRhdGEgZnJvbSBcIi4uL05hdkJhci9OYXZpZ2F0aW9uLmpzb25cIjtcclxuLy8gaW1wb3J0ICcuLi8uLi9Ib21lL05hdkJhci9OYXYuY3NzJ1xyXG5cclxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge307XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAvLyBSZWYncyBmb3IgbmF2IGxpbmtzXHJcbiAgICB0aGlzLmxpbmtzID0ge307XHJcblxyXG4gICAgLy8gUmVmJ3MgZm9yIG90aGVyIG5hdiBlbGVtZW50c1xyXG4gICAgdGhpcy5uYXYgPSB7XHJcbiAgICAgIGxpbmU6IG51bGwsXHJcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcclxuICAgICAgd3JhcHBlcjogbnVsbFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAvLyBTdG9yZXMgYWN0aXZlIG5hdiBpdGVtIC0gZmlyc3QgYnkgZGVmYXVsdFxyXG4gICAgICBhY3RpdmU6IGRhdGEuY2l0aWVzWzBdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyBTZXQgdW5kZXJsaW5lIHRvIHRoZSBmaXJzdCBhY3RpdmUgbGluayBwb3NpdGlvblxyXG4gICAgdGhpcy5zZXRVbmRlcmxpbmUoKTtcclxuXHJcbiAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzXHJcbiAgICB0aGlzLmF0dGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAvLyBNb3ZlIHVuZGVybGluZSB3aGVuIGFjdGl2ZSBsaW5rIGNoYW5nZXNcclxuICAgIHRoaXMuc2V0VW5kZXJsaW5lKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIC8vIENsZWFyIGV2ZW50IGxpc3RlbmVycyBvbiB1bm1vdW50XHJcbiAgICB0aGlzLmRldGFjaEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzZXRVbmRlcmxpbmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAvLyBDYWxjYXVsYXRlIG5hdidzIHBvc2l0aW9uIGZyb20gdGhlIGVkZ2VcclxuICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLm5hdi53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB0aGlzLm5hdi5jb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCBwb3NpdGlvbkZyb21FZGdlID0gKHdyYXBwZXIud2lkdGggLSBjb250YWluZXJXaWR0aCkgLyAyO1xyXG5cclxuICAgIC8vIEdldCB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBkaXYgKGZvciB3aGVuIG5hdiBpcyB3aWRlciB0aGFuIGJyb3dzZXIpXHJcbiAgICBjb25zdCBzY3JvbGxQb3MgPSB0aGlzLm5hdi5zY3JvbGxDb250YWluZXIuc2Nyb2xsTGVmdDtcclxuXHJcbiAgICAvLyBHZXQgYWN0aXZlIGxpbmsgcG9zaXRpb25cclxuICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSB0aGlzLmxpbmtzW2FjdGl2ZS5zZWN0aW9uXTtcclxuICAgIGNvbnN0IGFjdGl2ZUxpbmtQb3MgPSBhY3RpdmVMaW5rLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIC8vIFNldCBsaW5lIHdpZHRoIHRvIG1hdGNoIGFjdGl2ZSBsaW5rIHdpZHRoXHJcbiAgICB0aGlzLm5hdi5saW5lLnN0eWxlLndpZHRoID0gYCR7YWN0aXZlTGluay5jbGllbnRXaWR0aH1weGA7XHJcbiAgICAvLyBDYWxjdWxhdGUgbGVmdCBwb3NpdGlvbiBvZiBsaW5lIHRvIGxpbmUgdXAgd2l0aCBhY3RpdmUgbGluZVxyXG4gICAgdGhpcy5uYXYubGluZS5zdHlsZS5sZWZ0ID0gYCR7YWN0aXZlTGlua1Bvcy5sZWZ0IC1cclxuICAgICAgcG9zaXRpb25Gcm9tRWRnZSArXHJcbiAgICAgIHNjcm9sbFBvc31weGA7XHJcbiAgfTtcclxuXHJcbiAgb25SZXNpemUgPSAoKSA9PiB7XHJcbiAgICAvLyBEb24ndCB0cmFuc2l0aW9uIHRoZSB1bmRlcmxpbmUgb24gcmVzaXplIChzbyBpdCBkb2Vzbid0IGxhZylcclxuICAgIHRoaXMubmF2LmxpbmUuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb25cIik7XHJcbiAgICB0aGlzLnNldFVuZGVybGluZSgpO1xyXG4gIH07XHJcblxyXG4gIG9uQ2xpY2sgPSBlID0+IHtcclxuICAgIGUucGVyc2lzdCgpO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gZGF0YS5jaXRpZXMuZmluZEluZGV4KHggPT4geC5zZWN0aW9uID09PSBlLnRhcmdldC5pZCk7XHJcbiAgICBjb25zdCBhY3RpdmVPYmogPSBkYXRhLmNpdGllc1thY3RpdmVJbmRleF07XHJcblxyXG4gICAgLy8gU2V0IHRyYW5zaXRpb24gb25DbGljayBvbmx5XHJcbiAgICB0aGlzLm5hdi5saW5lLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogYWN0aXZlT2JqIH0pO1xyXG4gIH07XHJcblxyXG4gIGF0dGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gQWRqdXN0IHRoZSB1bmRlcmxpbmUgb24gcmVzaXplXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcclxuICB9XHJcblxyXG4gIGRldGFjaEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gUmVtb3ZlIGFkanVzdCB0aGUgdW5kZXJsaW5lIG9uIHJlc2l6ZVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5hdi5zY3JvbGxDb250YWluZXIgPSBub2RlO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndyYXBwZXJcIlxyXG4gICAgICAgICAgICByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubmF2LndyYXBwZXIgPSBub2RlO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtzLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm5hdi5jb250YWluZXIgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5jaXRpZXMubWFwKGNpdGllcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2VjdGlvbiwgbGFiZWwgfSA9IGNpdGllcztcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rXCIga2V5PXtzZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmUuc2VjdGlvbiA9PT0gc2VjdGlvbiA/IFwiYWN0aXZlXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3NlY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmtzW3NlY3Rpb25dID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdi5saW5lID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgLnNjcm9sbC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3MTBweDtcclxuICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMCAyNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZpb2xldDtcclxuICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luOiAxNTJweCBhdXRvIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDAgNSU7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTklO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmtzLWNvbnRhaW5lciAubGluayB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmsgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuN3B4O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmtzLWNvbnRhaW5lciAubGluayBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmsgYnV0dG9uLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmtzLWNvbnRhaW5lciAubGluZSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAvLyB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmtzLWNvbnRhaW5lciAubGluZS50cmFuc2l0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjM1cywgd2lkdGggMC4zNXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5gfVxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiogQ29udGVudCBmb3IgZWFjaCB0YWIgd291bGQgZ28gaGVyZSAqL31cclxuICAgICAgICB7LyogPGRpdj57YWN0aXZlLmNvbnRlbnR9PC9kaXY+ICovfVxyXG4gICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\components\\\\Home\\\\NavBar\\\\Nav.js */"))))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(NavBar, "propTypes", {});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(NavBar, "defaultProps", {});

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.539becdeaac5d8d2ab6f.hot-update.js.map
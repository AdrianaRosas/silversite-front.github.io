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
        className: "jsx-1995629963" + " " + "links-container",
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
          className: "jsx-1995629963" + " " + "link",
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
          className: "jsx-1995629963" + " " + ((active.section === section ? "active" : "") || ""),
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
        className: "jsx-1995629963" + " " + "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1995629963",
        __self: this
      }, ".scroll-container.jsx-1995629963{max-width:100%;overflow-x:auto;}.wrapper.jsx-1995629963{min-width:710px;}.container.jsx-1995629963{background:violet;max-width:1000px;}.links-container.jsx-1995629963{height:100%;width:99%;position:relative;}.links-container.jsx-1995629963 .link.jsx-1995629963{height:100%;margin-bottom:5px;display:inline-block;width:calc(100% / 7);}.links-container.jsx-1995629963 .link.jsx-1995629963 button.jsx-1995629963{background-color:transparent;cursor:pointer;border:none;outline:none;padding:5px;color:#00000;font-size:0.8rem;-webkit-letter-spacing:0.7px;-moz-letter-spacing:0.7px;-ms-letter-spacing:0.7px;letter-spacing:0.7px;display:block;margin:auto;font-family:'Raleway',sans-serif;}.links-container.jsx-1995629963 .link.jsx-1995629963 button.jsx-1995629963:hover{color:#000000;}.links-container.jsx-1995629963 .link.jsx-1995629963 button.active.jsx-1995629963{color:#000000;}.links-container.jsx-1995629963 .line.jsx-1995629963{display:block;height:2px;position:absolute;background-color:#000000;}.links-container.jsx-1995629963 .line.transition.jsx-1995629963{-webkit-transition:left 0.35s,width 0.35s;transition:left 0.35s,width 0.35s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGNvbXBvbmVudHNcXEhvbWVcXE5hdkJhclxcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKNkIsQUFNa0MsQUFJQyxBQUlFLEFBT04sQUFNQSxBQU9pQixBQWFmLEFBR0EsQUFHQSxBQU9xQixZQXRDekIsQUFNUSxFQW9CcEIsQUFHQSxBQUlhLENBaERLLENBS2xCLEVBTW1CLElBTUMsR0FnQ0EsSUFyQkgsQ0FMTSxDQXRCdkIsSUFXQSxLQU1BLEdBZ0MyQixDQXJCYixPQUxTLEtBTVIsWUFxQmYsQ0FwQmUsR0FOZixJQTZCQSxLQXRCZSxhQUNJLGlCQUNJLHFHQUNQLGNBQ0YsWUFDc0IsaUNBQ3BDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGNvbXBvbmVudHNcXEhvbWVcXE5hdkJhclxcTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgZGF0YSBmcm9tIFwiLi4vTmF2QmFyL05hdmlnYXRpb24uanNvblwiO1xyXG4vLyBpbXBvcnQgJy4uLy4uL0hvbWUvTmF2QmFyL05hdi5jc3MnXHJcblxyXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7fTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIC8vIFJlZidzIGZvciBuYXYgbGlua3NcclxuICAgIHRoaXMubGlua3MgPSB7fTtcclxuXHJcbiAgICAvLyBSZWYncyBmb3Igb3RoZXIgbmF2IGVsZW1lbnRzXHJcbiAgICB0aGlzLm5hdiA9IHtcclxuICAgICAgbGluZTogbnVsbCxcclxuICAgICAgY29udGFpbmVyOiBudWxsLFxyXG4gICAgICB3cmFwcGVyOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC8vIFN0b3JlcyBhY3RpdmUgbmF2IGl0ZW0gLSBmaXJzdCBieSBkZWZhdWx0XHJcbiAgICAgIGFjdGl2ZTogZGF0YS5jaXRpZXNbMF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vIFNldCB1bmRlcmxpbmUgdG8gdGhlIGZpcnN0IGFjdGl2ZSBsaW5rIHBvc2l0aW9uXHJcbiAgICB0aGlzLnNldFVuZGVybGluZSgpO1xyXG5cclxuICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnNcclxuICAgIHRoaXMuYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIC8vIE1vdmUgdW5kZXJsaW5lIHdoZW4gYWN0aXZlIGxpbmsgY2hhbmdlc1xyXG4gICAgdGhpcy5zZXRVbmRlcmxpbmUoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgLy8gQ2xlYXIgZXZlbnQgbGlzdGVuZXJzIG9uIHVubW91bnRcclxuICAgIHRoaXMuZGV0YWNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHNldFVuZGVybGluZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIC8vIENhbGNhdWxhdGUgbmF2J3MgcG9zaXRpb24gZnJvbSB0aGUgZWRnZVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IHRoaXMubmF2LndyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHRoaXMubmF2LmNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgIGNvbnN0IHBvc2l0aW9uRnJvbUVkZ2UgPSAod3JhcHBlci53aWR0aCAtIGNvbnRhaW5lcldpZHRoKSAvIDI7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIGRpdiAoZm9yIHdoZW4gbmF2IGlzIHdpZGVyIHRoYW4gYnJvd3NlcilcclxuICAgIGNvbnN0IHNjcm9sbFBvcyA9IHRoaXMubmF2LnNjcm9sbENvbnRhaW5lci5zY3JvbGxMZWZ0O1xyXG5cclxuICAgIC8vIEdldCBhY3RpdmUgbGluayBwb3NpdGlvblxyXG4gICAgY29uc3QgYWN0aXZlTGluayA9IHRoaXMubGlua3NbYWN0aXZlLnNlY3Rpb25dO1xyXG4gICAgY29uc3QgYWN0aXZlTGlua1BvcyA9IGFjdGl2ZUxpbmsuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgLy8gU2V0IGxpbmUgd2lkdGggdG8gbWF0Y2ggYWN0aXZlIGxpbmsgd2lkdGhcclxuICAgIHRoaXMubmF2LmxpbmUuc3R5bGUud2lkdGggPSBgJHthY3RpdmVMaW5rLmNsaWVudFdpZHRofXB4YDtcclxuICAgIC8vIENhbGN1bGF0ZSBsZWZ0IHBvc2l0aW9uIG9mIGxpbmUgdG8gbGluZSB1cCB3aXRoIGFjdGl2ZSBsaW5lXHJcbiAgICB0aGlzLm5hdi5saW5lLnN0eWxlLmxlZnQgPSBgJHthY3RpdmVMaW5rUG9zLmxlZnQgLVxyXG4gICAgICBwb3NpdGlvbkZyb21FZGdlICtcclxuICAgICAgc2Nyb2xsUG9zfXB4YDtcclxuICB9O1xyXG5cclxuICBvblJlc2l6ZSA9ICgpID0+IHtcclxuICAgIC8vIERvbid0IHRyYW5zaXRpb24gdGhlIHVuZGVybGluZSBvbiByZXNpemUgKHNvIGl0IGRvZXNuJ3QgbGFnKVxyXG4gICAgdGhpcy5uYXYubGluZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNpdGlvblwiKTtcclxuICAgIHRoaXMuc2V0VW5kZXJsaW5lKCk7XHJcbiAgfTtcclxuXHJcbiAgb25DbGljayA9IGUgPT4ge1xyXG4gICAgZS5wZXJzaXN0KCk7XHJcblxyXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSBkYXRhLmNpdGllcy5maW5kSW5kZXgoeCA9PiB4LnNlY3Rpb24gPT09IGUudGFyZ2V0LmlkKTtcclxuICAgIGNvbnN0IGFjdGl2ZU9iaiA9IGRhdGEuY2l0aWVzW2FjdGl2ZUluZGV4XTtcclxuXHJcbiAgICAvLyBTZXQgdHJhbnNpdGlvbiBvbkNsaWNrIG9ubHlcclxuICAgIHRoaXMubmF2LmxpbmUuY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb25cIik7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiBhY3RpdmVPYmogfSk7XHJcbiAgfTtcclxuXHJcbiAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBBZGp1c3QgdGhlIHVuZGVybGluZSBvbiByZXNpemVcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUpO1xyXG4gIH1cclxuXHJcbiAgZGV0YWNoRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBSZW1vdmUgYWRqdXN0IHRoZSB1bmRlcmxpbmUgb24gcmVzaXplXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGwtY29udGFpbmVyXCJcclxuICAgICAgICAgIHJlZj17bm9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2LnNjcm9sbENvbnRhaW5lciA9IG5vZGU7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid3JhcHBlclwiXHJcbiAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uYXYud3JhcHBlciA9IG5vZGU7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlua3MtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubmF2LmNvbnRhaW5lciA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXRhLmNpdGllcy5tYXAoY2l0aWVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgeyBzZWN0aW9uLCBsYWJlbCB9ID0gY2l0aWVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtcIiBrZXk9e3NlY3Rpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZS5zZWN0aW9uID09PSBzZWN0aW9uID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17c2VjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlua3Nbc2VjdGlvbl0gPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICByZWY9e25vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2LmxpbmUgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PiB7YFxyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAuc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDcxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAwIDI2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmlvbGV0O1xyXG4gICAgICAgICAgICAgICAgICAvLyBtYXJnaW46IDE1MnB4IGF1dG8gMTBweDtcclxuICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMCA1JTtcclxuICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpbmtzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmsge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlua3MtY29udGFpbmVyIC5saW5rIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmsgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlua3MtY29udGFpbmVyIC5saW5rIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmUudHJhbnNpdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4zNXMsIHdpZHRoIDAuMzVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuYH1cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyoqIENvbnRlbnQgZm9yIGVhY2ggdGFiIHdvdWxkIGdvIGhlcmUgKi99XHJcbiAgICAgICAgey8qIDxkaXY+e2FjdGl2ZS5jb250ZW50fTwvZGl2PiAqL31cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\components\\\\Home\\\\NavBar\\\\Nav.js */"))))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(NavBar, "propTypes", {});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(NavBar, "defaultProps", {});

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.e305d5642c614b1fa94c.hot-update.js.map
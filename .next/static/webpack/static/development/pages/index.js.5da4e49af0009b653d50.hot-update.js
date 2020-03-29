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
        className: "jsx-3462267267" + " " + "links-container",
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
          className: "jsx-3462267267" + " " + "link",
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
          className: "jsx-3462267267" + " " + ((active.section === section ? "active" : "") || ""),
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
        className: "jsx-3462267267" + " " + "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3462267267",
        __self: this
      }, ".jsx-3462267267{background-color:teal;}.scroll-container.jsx-3462267267{max-width:100%;overflow-x:auto;}.wrapper.jsx-3462267267{min-width:710px;}.container.jsx-3462267267{background:violet;max-width:1000px;}.links-container.jsx-3462267267{width:99%;background-color:yellowgreen;position:relative;}.links-container.jsx-3462267267 .link.jsx-3462267267{height:100%;background-color:blue;display:inline-block;width:calc(100% / 7);}.links-container.jsx-3462267267 .link.jsx-3462267267 button.jsx-3462267267{background-color:transparent;cursor:pointer;border:none;outline:none;padding:5px;color:#00000;font-size:0.8rem;-webkit-letter-spacing:0.7px;-moz-letter-spacing:0.7px;-ms-letter-spacing:0.7px;letter-spacing:0.7px;display:block;margin:auto;font-family:'Raleway',sans-serif;}.links-container.jsx-3462267267 .link.jsx-3462267267 button.jsx-3462267267:hover{color:#000000;}.links-container.jsx-3462267267 .link.jsx-3462267267 button.active.jsx-3462267267{color:#000000;}.links-container.jsx-3462267267 .line.jsx-3462267267{display:block;height:2px;position:absolute;background-color:#000000;}.links-container.jsx-3462267267 .line.transition.jsx-3462267267{-webkit-transition:left 0.35s,width 0.35s;transition:left 0.35s,width 0.35s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRyaWFuYVxcRGVza3RvcFxcc2lsdmVyc2l0ZVxccGFnZXNcXGNvbXBvbmVudHNcXEhvbWVcXE5hdkJhclxcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKNkIsQUFFdUMsQUFJTCxBQUlDLEFBSUUsQUFPUixBQUtFLEFBT2lCLEFBYWYsQUFHQSxBQUdBLEFBT3FCLFVBckNOLEVBTVAsRUFtQnhCLEFBR0EsQUFJYSxDQS9DSyxDQUtsQixFQU1tQixJQTRDbkMsR0FQb0MsSUFyQkgsRUExQmpCLEdBcUJ1QixDQVZ2QixJQUlvQixJQWlDTyxDQXJCYixXQUxTLENBTVIsQ0FaZixXQWlDQSxDQXBCZSxPQU5mLEFBNkJBLEtBdEJlLGFBQ0ksaUJBQ0kscUdBQ1AsY0FDRixZQUNzQixpQ0FDcEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxBZHJpYW5hXFxEZXNrdG9wXFxzaWx2ZXJzaXRlXFxwYWdlc1xcY29tcG9uZW50c1xcSG9tZVxcTmF2QmFyXFxOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBkYXRhIGZyb20gXCIuLi9OYXZCYXIvTmF2aWdhdGlvbi5qc29uXCI7XHJcbi8vIGltcG9ydCAnLi4vLi4vSG9tZS9OYXZCYXIvTmF2LmNzcydcclxuXHJcbmNsYXNzIE5hdkJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHt9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgLy8gUmVmJ3MgZm9yIG5hdiBsaW5rc1xyXG4gICAgdGhpcy5saW5rcyA9IHt9O1xyXG5cclxuICAgIC8vIFJlZidzIGZvciBvdGhlciBuYXYgZWxlbWVudHNcclxuICAgIHRoaXMubmF2ID0ge1xyXG4gICAgICBsaW5lOiBudWxsLFxyXG4gICAgICBjb250YWluZXI6IG51bGwsXHJcbiAgICAgIHdyYXBwZXI6IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLy8gU3RvcmVzIGFjdGl2ZSBuYXYgaXRlbSAtIGZpcnN0IGJ5IGRlZmF1bHRcclxuICAgICAgYWN0aXZlOiBkYXRhLmNpdGllc1swXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gU2V0IHVuZGVybGluZSB0byB0aGUgZmlyc3QgYWN0aXZlIGxpbmsgcG9zaXRpb25cclxuICAgIHRoaXMuc2V0VW5kZXJsaW5lKCk7XHJcblxyXG4gICAgLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgdGhpcy5hdHRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgLy8gTW92ZSB1bmRlcmxpbmUgd2hlbiBhY3RpdmUgbGluayBjaGFuZ2VzXHJcbiAgICB0aGlzLnNldFVuZGVybGluZSgpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAvLyBDbGVhciBldmVudCBsaXN0ZW5lcnMgb24gdW5tb3VudFxyXG4gICAgdGhpcy5kZXRhY2hFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgc2V0VW5kZXJsaW5lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgLy8gQ2FsY2F1bGF0ZSBuYXYncyBwb3NpdGlvbiBmcm9tIHRoZSBlZGdlXHJcbiAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5uYXYud3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gdGhpcy5uYXYuY29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgcG9zaXRpb25Gcm9tRWRnZSA9ICh3cmFwcGVyLndpZHRoIC0gY29udGFpbmVyV2lkdGgpIC8gMjtcclxuXHJcbiAgICAvLyBHZXQgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgZGl2IChmb3Igd2hlbiBuYXYgaXMgd2lkZXIgdGhhbiBicm93c2VyKVxyXG4gICAgY29uc3Qgc2Nyb2xsUG9zID0gdGhpcy5uYXYuc2Nyb2xsQ29udGFpbmVyLnNjcm9sbExlZnQ7XHJcblxyXG4gICAgLy8gR2V0IGFjdGl2ZSBsaW5rIHBvc2l0aW9uXHJcbiAgICBjb25zdCBhY3RpdmVMaW5rID0gdGhpcy5saW5rc1thY3RpdmUuc2VjdGlvbl07XHJcbiAgICBjb25zdCBhY3RpdmVMaW5rUG9zID0gYWN0aXZlTGluay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAvLyBTZXQgbGluZSB3aWR0aCB0byBtYXRjaCBhY3RpdmUgbGluayB3aWR0aFxyXG4gICAgdGhpcy5uYXYubGluZS5zdHlsZS53aWR0aCA9IGAke2FjdGl2ZUxpbmsuY2xpZW50V2lkdGh9cHhgO1xyXG4gICAgLy8gQ2FsY3VsYXRlIGxlZnQgcG9zaXRpb24gb2YgbGluZSB0byBsaW5lIHVwIHdpdGggYWN0aXZlIGxpbmVcclxuICAgIHRoaXMubmF2LmxpbmUuc3R5bGUubGVmdCA9IGAke2FjdGl2ZUxpbmtQb3MubGVmdCAtXHJcbiAgICAgIHBvc2l0aW9uRnJvbUVkZ2UgK1xyXG4gICAgICBzY3JvbGxQb3N9cHhgO1xyXG4gIH07XHJcblxyXG4gIG9uUmVzaXplID0gKCkgPT4ge1xyXG4gICAgLy8gRG9uJ3QgdHJhbnNpdGlvbiB0aGUgdW5kZXJsaW5lIG9uIHJlc2l6ZSAoc28gaXQgZG9lc24ndCBsYWcpXHJcbiAgICB0aGlzLm5hdi5saW5lLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gICAgdGhpcy5zZXRVbmRlcmxpbmUoKTtcclxuICB9O1xyXG5cclxuICBvbkNsaWNrID0gZSA9PiB7XHJcbiAgICBlLnBlcnNpc3QoKTtcclxuXHJcbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IGRhdGEuY2l0aWVzLmZpbmRJbmRleCh4ID0+IHguc2VjdGlvbiA9PT0gZS50YXJnZXQuaWQpO1xyXG4gICAgY29uc3QgYWN0aXZlT2JqID0gZGF0YS5jaXRpZXNbYWN0aXZlSW5kZXhdO1xyXG5cclxuICAgIC8vIFNldCB0cmFuc2l0aW9uIG9uQ2xpY2sgb25seVxyXG4gICAgdGhpcy5uYXYubGluZS5jbGFzc0xpc3QuYWRkKFwidHJhbnNpdGlvblwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGFjdGl2ZU9iaiB9KTtcclxuICB9O1xyXG5cclxuICBhdHRhY2hFdmVudExpc3RlbmVycygpIHtcclxuICAgIC8vIEFkanVzdCB0aGUgdW5kZXJsaW5lIG9uIHJlc2l6ZVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZSk7XHJcbiAgfVxyXG5cclxuICBkZXRhY2hFdmVudExpc3RlbmVycygpIHtcclxuICAgIC8vIFJlbW92ZSBhZGp1c3QgdGhlIHVuZGVybGluZSBvbiByZXNpemVcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbC1jb250YWluZXJcIlxyXG4gICAgICAgICAgcmVmPXtub2RlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uYXYuc2Nyb2xsQ29udGFpbmVyID0gbm9kZTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3cmFwcGVyXCJcclxuICAgICAgICAgICAgcmVmPXtub2RlID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm5hdi53cmFwcGVyID0gbm9kZTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rcy1jb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgcmVmPXtub2RlID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5uYXYuY29udGFpbmVyID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuY2l0aWVzLm1hcChjaXRpZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB7IHNlY3Rpb24sIGxhYmVsIH0gPSBjaXRpZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua1wiIGtleT17c2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlLnNlY3Rpb24gPT09IHNlY3Rpb24gPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzZWN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5rc1tzZWN0aW9uXSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXYubGluZSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+IHtgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xyXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIC5zY3JvbGwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNzEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDAgMjZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2aW9sZXQ7XHJcbiAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbjogMTUycHggYXV0byAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiAwIDUlO1xyXG4gICAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VlZWVlZTtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlua3MtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmsge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlua3MtY29udGFpbmVyIC5saW5rIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmsgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubGlua3MtY29udGFpbmVyIC5saW5rIGJ1dHRvbi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5saW5rcy1jb250YWluZXIgLmxpbmUudHJhbnNpdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4zNXMsIHdpZHRoIDAuMzVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuYH1cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyoqIENvbnRlbnQgZm9yIGVhY2ggdGFiIHdvdWxkIGdvIGhlcmUgKi99XHJcbiAgICAgICAgey8qIDxkaXY+e2FjdGl2ZS5jb250ZW50fTwvZGl2PiAqL31cclxuICAgICAgPC9GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Adriana\\\\Desktop\\\\silversite\\\\pages\\\\components\\\\Home\\\\NavBar\\\\Nav.js */"))))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(NavBar, "propTypes", {});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(NavBar, "defaultProps", {});

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=index.js.5da4e49af0009b653d50.hot-update.js.map
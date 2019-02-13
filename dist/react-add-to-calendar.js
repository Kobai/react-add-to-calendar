(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactAddToCalendar"] = factory(require("react"));
	else
		root["ReactAddToCalendar"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _helpers = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./helpers\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _helpers2 = _interopRequireDefault(_helpers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var helpers = new _helpers2.default();

	var ReactAddToCalendar = function (_React$Component) {
	  _inherits(ReactAddToCalendar, _React$Component);

	  function ReactAddToCalendar(props) {
	    _classCallCheck(this, ReactAddToCalendar);

	    var _this = _possibleConstructorReturn(this, (ReactAddToCalendar.__proto__ || Object.getPrototypeOf(ReactAddToCalendar)).call(this, props));

	    _this.state = {
	      optionsOpen: props.optionsOpen || false,
	      isCrappyIE: false
	    };

	    _this.toggleCalendarDropdown = _this.toggleCalendarDropdown.bind(_this);
	    _this.handleDropdownLinkClick = _this.handleDropdownLinkClick.bind(_this);
	    return _this;
	  }

	  _createClass(ReactAddToCalendar, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      // polyfill for startsWith to fix IE bug
	      if (!String.prototype.startsWith) {
	        String.prototype.startsWith = function (searchString, position) {
	          position = position || 0;
	          return this.indexOf(searchString, position) === position;
	        };
	      }

	      var isCrappyIE = false;
	      if (typeof window !== "undefined" && window.navigator.msSaveOrOpenBlob && window.Blob) {
	        isCrappyIE = true;
	      }

	      this.setState({ isCrappyIE: isCrappyIE });
	    }
	  }, {
	    key: "toggleCalendarDropdown",
	    value: function toggleCalendarDropdown() {
	      var showOptions = !this.state.optionsOpen;

	      if (showOptions) {
	        document.addEventListener("click", this.toggleCalendarDropdown, false);
	      } else {
	        document.removeEventListener("click", this.toggleCalendarDropdown);
	      }

	      this.setState({ optionsOpen: showOptions });
	    }
	  }, {
	    key: "handleDropdownLinkClick",
	    value: function handleDropdownLinkClick(e) {
	      e.preventDefault();
	      var url = e.currentTarget.getAttribute("href");

	      if (!helpers.isMobile() && (url.startsWith("data") || url.startsWith("BEGIN"))) {
	        var filename = "download.ics";
	        var blob = new Blob([url], { type: "text/calendar;charset=utf-8" });

	        if (this.state.isCrappyIE) {
	          window.navigator.msSaveOrOpenBlob(blob, filename);
	        } else {
	          /****************************************************************
	          // many browsers do not properly support downloading data URIs
	          // (even with "download" attribute in use) so this solution
	          // ensures the event will download cross-browser
	          ****************************************************************/
	          var link = document.createElement("a");
	          link.href = window.URL.createObjectURL(blob);
	          link.setAttribute("download", filename);
	          document.body.appendChild(link);
	          link.click();
	          document.body.removeChild(link);
	        }
	      } else {
	        window.open(url, "_blank");
	      }

	      this.toggleCalendarDropdown();
	    }
	  }, {
	    key: "renderDropdown",
	    value: function renderDropdown() {
	      var self = this;

	      var items = this.props.listItems.map(function (listItem) {
	        var currentItem = Object.keys(listItem)[0];
	        var currentLabel = listItem[currentItem];

	        var icon = null;
	        if (self.props.displayItemIcons) {
	          var currentIcon = currentItem === "outlook" || currentItem === "outlookcom" ? "windows" : currentItem;
	          icon = _react2.default.createElement("i", { className: "fa fa-" + currentIcon });
	        }

	        return _react2.default.createElement(
	          "li",
	          { key: helpers.getRandomKey() },
	          _react2.default.createElement(
	            "a",
	            {
	              className: currentItem + "-link",
	              onClick: self.handleDropdownLinkClick,
	              href: helpers.buildUrl(self.props.event, currentItem, self.state.isCrappyIE),
	              target: "_blank"
	            },
	            icon,
	            currentLabel
	          )
	        );
	      });

	      return _react2.default.createElement(
	        "div",
	        { className: this.props.dropdownClass },
	        _react2.default.createElement(
	          "ul",
	          null,
	          items
	        )
	      );
	    }
	  }, {
	    key: "renderButton",
	    value: function renderButton() {
	      var buttonLabel = this.props.buttonLabel;
	      var buttonIcon = null;
	      var template = Object.keys(this.props.buttonTemplate);

	      if (template[0] !== "textOnly") {
	        var iconPlacement = this.props.buttonTemplate[template];
	        var buttonClassPrefix = this.props.buttonIconClass === "react-add-to-calendar__icon--" ? "" + this.props.buttonIconClass + iconPlacement : this.props.buttonIconClass;
	        var iconPrefix = this.props.useFontAwesomeIcons ? "fa fa-" : "";

	        var mainButtonIconClass = template[0] === "caret" ? this.state.optionsOpen ? "caret-up" : "caret-down" : template[0];

	        var buttonIconClass = buttonClassPrefix + " " + iconPrefix + mainButtonIconClass;

	        buttonIcon = _react2.default.createElement("i", { className: buttonIconClass });
	        buttonLabel = iconPlacement === "right" ? _react2.default.createElement(
	          "span",
	          null,
	          buttonLabel + " ",
	          buttonIcon
	        ) : _react2.default.createElement(
	          "span",
	          null,
	          buttonIcon,
	          " " + buttonLabel
	        );
	      }

	      var buttonClass = this.state.optionsOpen ? this.props.buttonClassClosed + " " + this.props.buttonClassOpen : this.props.buttonClassClosed;

	      return _react2.default.createElement(
	        "div",
	        { className: this.props.buttonWrapperClass },
	        _react2.default.createElement(
	          "a",
	          { className: buttonClass, onClick: this.toggleCalendarDropdown },
	          buttonLabel
	        )
	      );
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var options = null;
	      if (this.state.optionsOpen) {
	        options = this.renderDropdown();
	      }

	      var addToCalendarBtn = null;
	      if (this.props.event) {
	        addToCalendarBtn = this.renderButton();
	      }

	      return _react2.default.createElement(
	        "div",
	        { className: this.props.rootClass },
	        addToCalendarBtn,
	        options
	      );
	    }
	  }]);

	  return ReactAddToCalendar;
	}(_react2.default.Component);

	exports.default = ReactAddToCalendar;


	ReactAddToCalendar.displayName = "Add To Calendar";

	ReactAddToCalendar.propTypes = {
	  buttonClassClosed: _propTypes2.default.string,
	  buttonClassOpen: _propTypes2.default.string,
	  buttonLabel: _propTypes2.default.string,
	  buttonTemplate: _propTypes2.default.object,
	  buttonIconClass: _propTypes2.default.string,
	  useFontAwesomeIcons: _propTypes2.default.bool,
	  buttonWrapperClass: _propTypes2.default.string,
	  displayItemIcons: _propTypes2.default.bool,
	  optionsOpen: _propTypes2.default.bool,
	  dropdownClass: _propTypes2.default.string,
	  event: _propTypes2.default.shape({
	    title: _propTypes2.default.string,
	    description: _propTypes2.default.string,
	    googleDescription: _propTypes2.default.string,
	    location: _propTypes2.default.string,
	    startTime: _propTypes2.default.string,
	    endTime: _propTypes2.default.string
	  }).isRequired,
	  listItems: _propTypes2.default.arrayOf(_propTypes2.default.object),
	  rootClass: _propTypes2.default.string
	};

	ReactAddToCalendar.defaultProps = {
	  buttonClassClosed: "react-add-to-calendar__button",
	  buttonClassOpen: "react-add-to-calendar__button--light",
	  buttonLabel: "Add to My Calendar",
	  buttonTemplate: { caret: "right" },
	  buttonIconClass: "react-add-to-calendar__icon--",
	  useFontAwesomeIcons: true,
	  buttonWrapperClass: "react-add-to-calendar__wrapper",
	  displayItemIcons: true,
	  optionsOpen: false,
	  dropdownClass: "react-add-to-calendar__dropdown",
	  event: {
	    title: "Sample Event",
	    description: "This is the sample event provided as an example only",
	    location: "Portland, OR",
	    startTime: "2016-09-16T20:15:00-04:00",
	    endTime: "2016-09-16T21:45:00-04:00"
	  },
	  listItems: [{ apple: "Apple Calendar" }, { google: "Google" }, { outlook: "Outlook" }, { outlookcom: "Outlook.com" }, { yahoo: "Yahoo" }],
	  rootClass: "react-add-to-calendar"
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(3)();
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(4);
	var invariant = __webpack_require__(5);
	var ReactPropTypesSecret = __webpack_require__(6);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ })
/******/ ])
});
;
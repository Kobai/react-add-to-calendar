/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(7);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _root = __webpack_require__(17);

	var _root2 = _interopRequireDefault(_root);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_root2.default, null), document.getElementById('app'));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	if (true) {
	  module.exports = __webpack_require__(3);
	} else {
	  module.exports = require('./cjs/react.development.js');
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.2.0
	 * react.production.min.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';var m=__webpack_require__(4),n=__webpack_require__(5),p=__webpack_require__(6),q="function"===typeof Symbol&&Symbol["for"],r=q?Symbol["for"]("react.element"):60103,t=q?Symbol["for"]("react.call"):60104,u=q?Symbol["for"]("react.return"):60105,v=q?Symbol["for"]("react.portal"):60106,w=q?Symbol["for"]("react.fragment"):60107,x="function"===typeof Symbol&&Symbol.iterator;
	function y(a){for(var b=arguments.length-1,e="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)e+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);b=Error(e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
	var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function A(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}A.prototype.isReactComponent={};A.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?y("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};A.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
	function B(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}function C(){}C.prototype=A.prototype;var D=B.prototype=new C;D.constructor=B;m(D,A.prototype);D.isPureReactComponent=!0;function E(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}var F=E.prototype=new C;F.constructor=E;m(F,A.prototype);F.unstable_isAsyncReactComponent=!0;F.render=function(){return this.props.children};var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
	function J(a,b,e){var c,d={},g=null,k=null;if(null!=b)for(c in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)H.call(b,c)&&!I.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var h=Array(f),l=0;l<f;l++)h[l]=arguments[l+2];d.children=h}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:r,type:a,key:g,ref:k,props:d,_owner:G.current}}function K(a){return"object"===typeof a&&null!==a&&a.$$typeof===r}
	function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var L=/\/+/g,M=[];function N(a,b,e,c){if(M.length){var d=M.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function O(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>M.length&&M.push(a)}
	function P(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case r:case t:case u:case v:g=!0}}if(g)return e(c,a,""===b?"."+Q(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+Q(d,k);g+=P(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=x&&a[x]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=
	f.call(a),k=0;!(d=a.next()).done;)d=d.value,f=b+Q(d,k++),g+=P(d,f,e,c);else"object"===d&&(e=""+a,y("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function R(a,b){a.func.call(a.context,b,a.count++)}
	function S(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?T(a,c,e,p.thatReturnsArgument):null!=a&&(K(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(L,"$\x26/")+"/")+e,a={$$typeof:r,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function T(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(L,"$\x26/")+"/");b=N(b,g,c,d);null==a||P(a,"",S,b);O(b)}
	var U={Children:{map:function(a,b,e){if(null==a)return a;var c=[];T(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=N(null,null,b,e);null==a||P(a,"",R,b);O(b)},count:function(a){return null==a?0:P(a,"",p.thatReturnsNull,null)},toArray:function(a){var b=[];T(a,b,null,p.thatReturnsArgument);return b},only:function(a){K(a)?void 0:y("143");return a}},Component:A,PureComponent:B,unstable_AsyncComponent:E,Fragment:w,createElement:J,cloneElement:function(a,b,e){var c=m({},a.props),
	d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)H.call(b,h)&&!I.hasOwnProperty(h)&&(c[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)c.children=e;else if(1<h){f=Array(h);for(var l=0;l<h;l++)f[l]=arguments[l+2];c.children=f}return{$$typeof:r,type:a.type,key:d,ref:g,props:c,_owner:k}},createFactory:function(a){var b=J.bind(null,a);b.type=a;return b},
	isValidElement:K,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:G,assign:m}},V=Object.freeze({default:U}),W=V&&U||V;module.exports=W["default"]?W["default"]:W;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (false) {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  if (false) {
	    // This branch is unreachable because this function is only called
	    // in production, but the condition is true only in development.
	    // Therefore if the branch is still here, dead code elimination wasn't
	    // properly applied.
	    // Don't change the message. React DevTools relies on it. Also make sure
	    // this message doesn't occur elsewhere in this function, or it will cause
	    // a false positive.
	    throw new Error('^_^');
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	if (true) {
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  module.exports = __webpack_require__(8);
	} else {
	  module.exports = require('./cjs/react-dom.development.js');
	}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.2.0
	 * react-dom.production.min.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	/*
	 Modernizr 3.0.0pre (Custom Build) | MIT
	*/
	'use strict';var aa=__webpack_require__(2),l=__webpack_require__(9),B=__webpack_require__(4),C=__webpack_require__(6),ba=__webpack_require__(10),da=__webpack_require__(11),ea=__webpack_require__(12),fa=__webpack_require__(13),ia=__webpack_require__(16),D=__webpack_require__(5);
	function E(a){for(var b=arguments.length-1,c="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,d=0;d<b;d++)c+="\x26args[]\x3d"+encodeURIComponent(arguments[d+1]);b=Error(c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}aa?void 0:E("227");
	var oa={children:!0,dangerouslySetInnerHTML:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,suppressHydrationWarning:!0,style:!0};function pa(a,b){return(a&b)===b}
	var ta={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(a){var b=ta,c=a.Properties||{},d=a.DOMAttributeNamespaces||{},e=a.DOMAttributeNames||{};a=a.DOMMutationMethods||{};for(var f in c){ua.hasOwnProperty(f)?E("48",f):void 0;var g=f.toLowerCase(),h=c[f];g={attributeName:g,attributeNamespace:null,propertyName:f,mutationMethod:null,mustUseProperty:pa(h,b.MUST_USE_PROPERTY),
	hasBooleanValue:pa(h,b.HAS_BOOLEAN_VALUE),hasNumericValue:pa(h,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:pa(h,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:pa(h,b.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:pa(h,b.HAS_STRING_BOOLEAN_VALUE)};1>=g.hasBooleanValue+g.hasNumericValue+g.hasOverloadedBooleanValue?void 0:E("50",f);e.hasOwnProperty(f)&&(g.attributeName=e[f]);d.hasOwnProperty(f)&&(g.attributeNamespace=d[f]);a.hasOwnProperty(f)&&(g.mutationMethod=a[f]);ua[f]=g}}},ua={};
	function va(a,b){if(oa.hasOwnProperty(a)||2<a.length&&("o"===a[0]||"O"===a[0])&&("n"===a[1]||"N"===a[1]))return!1;if(null===b)return!0;switch(typeof b){case "boolean":return oa.hasOwnProperty(a)?a=!0:(b=wa(a))?a=b.hasBooleanValue||b.hasStringBooleanValue||b.hasOverloadedBooleanValue:(a=a.toLowerCase().slice(0,5),a="data-"===a||"aria-"===a),a;case "undefined":case "number":case "string":case "object":return!0;default:return!1}}function wa(a){return ua.hasOwnProperty(a)?ua[a]:null}
	var xa=ta,ya=xa.MUST_USE_PROPERTY,K=xa.HAS_BOOLEAN_VALUE,za=xa.HAS_NUMERIC_VALUE,Aa=xa.HAS_POSITIVE_NUMERIC_VALUE,Ba=xa.HAS_OVERLOADED_BOOLEAN_VALUE,Ca=xa.HAS_STRING_BOOLEAN_VALUE,Da={Properties:{allowFullScreen:K,async:K,autoFocus:K,autoPlay:K,capture:Ba,checked:ya|K,cols:Aa,contentEditable:Ca,controls:K,"default":K,defer:K,disabled:K,download:Ba,draggable:Ca,formNoValidate:K,hidden:K,loop:K,multiple:ya|K,muted:ya|K,noValidate:K,open:K,playsInline:K,readOnly:K,required:K,reversed:K,rows:Aa,rowSpan:za,
	scoped:K,seamless:K,selected:ya|K,size:Aa,start:za,span:Aa,spellCheck:Ca,style:0,tabIndex:0,itemScope:K,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:Ca},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(a,b){if(null==b)return a.removeAttribute("value");"number"!==a.type||!1===a.hasAttribute("value")?a.setAttribute("value",""+b):a.validity&&!a.validity.badInput&&a.ownerDocument.activeElement!==a&&
	a.setAttribute("value",""+b)}}},Ea=xa.HAS_STRING_BOOLEAN_VALUE,M={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Ga={Properties:{autoReverse:Ea,externalResourcesRequired:Ea,preserveAlpha:Ea},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:M.xlink,xlinkArcrole:M.xlink,xlinkHref:M.xlink,xlinkRole:M.xlink,xlinkShow:M.xlink,xlinkTitle:M.xlink,xlinkType:M.xlink,
	xmlBase:M.xml,xmlLang:M.xml,xmlSpace:M.xml}},Ha=/[\-\:]([a-z])/g;function Ia(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(a){var b=a.replace(Ha,
	Ia);Ga.Properties[b]=0;Ga.DOMAttributeNames[b]=a});xa.injectDOMPropertyConfig(Da);xa.injectDOMPropertyConfig(Ga);
	var P={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,injection:{injectErrorUtils:function(a){"function"!==typeof a.invokeGuardedCallback?E("197"):void 0;Ja=a.invokeGuardedCallback}},invokeGuardedCallback:function(a,b,c,d,e,f,g,h,k){Ja.apply(P,arguments)},invokeGuardedCallbackAndCatchFirstError:function(a,b,c,d,e,f,g,h,k){P.invokeGuardedCallback.apply(this,arguments);if(P.hasCaughtError()){var q=P.clearCaughtError();P._hasRethrowError||(P._hasRethrowError=!0,P._rethrowError=
	q)}},rethrowCaughtError:function(){return Ka.apply(P,arguments)},hasCaughtError:function(){return P._hasCaughtError},clearCaughtError:function(){if(P._hasCaughtError){var a=P._caughtError;P._caughtError=null;P._hasCaughtError=!1;return a}E("198")}};function Ja(a,b,c,d,e,f,g,h,k){P._hasCaughtError=!1;P._caughtError=null;var q=Array.prototype.slice.call(arguments,3);try{b.apply(c,q)}catch(v){P._caughtError=v,P._hasCaughtError=!0}}
	function Ka(){if(P._hasRethrowError){var a=P._rethrowError;P._rethrowError=null;P._hasRethrowError=!1;throw a;}}var La=null,Ma={};
	function Na(){if(La)for(var a in Ma){var b=Ma[a],c=La.indexOf(a);-1<c?void 0:E("96",a);if(!Oa[c]){b.extractEvents?void 0:E("97",a);Oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;Pa.hasOwnProperty(h)?E("99",h):void 0;Pa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&Qa(k[e],g,h);e=!0}else f.registrationName?(Qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:E("98",d,a)}}}}
	function Qa(a,b,c){Ra[a]?E("100",a):void 0;Ra[a]=b;Sa[a]=b.eventTypes[c].dependencies}var Oa=[],Pa={},Ra={},Sa={};function Ta(a){La?E("101"):void 0;La=Array.prototype.slice.call(a);Na()}function Ua(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];Ma.hasOwnProperty(c)&&Ma[c]===d||(Ma[c]?E("102",c):void 0,Ma[c]=d,b=!0)}b&&Na()}
	var Va=Object.freeze({plugins:Oa,eventNameDispatchConfigs:Pa,registrationNameModules:Ra,registrationNameDependencies:Sa,possibleRegistrationNames:null,injectEventPluginOrder:Ta,injectEventPluginsByName:Ua}),Wa=null,Xa=null,Ya=null;function Za(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=Ya(d);P.invokeGuardedCallbackAndCatchFirstError(b,c,void 0,a);a.currentTarget=null}
	function $a(a,b){null==b?E("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function ab(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var bb=null;
	function cb(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)Za(a,b,c[e],d[e]);else c&&Za(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function db(a){return cb(a,!0)}function gb(a){return cb(a,!1)}var hb={injectEventPluginOrder:Ta,injectEventPluginsByName:Ua};
	function ib(a,b){var c=a.stateNode;if(!c)return null;var d=Wa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?E("231",b,typeof c):void 0;
	return c}function jb(a,b,c,d){for(var e,f=0;f<Oa.length;f++){var g=Oa[f];g&&(g=g.extractEvents(a,b,c,d))&&(e=$a(e,g))}return e}function kb(a){a&&(bb=$a(bb,a))}function lb(a){var b=bb;bb=null;b&&(a?ab(b,db):ab(b,gb),bb?E("95"):void 0,P.rethrowCaughtError())}var mb=Object.freeze({injection:hb,getListener:ib,extractEvents:jb,enqueueEvents:kb,processEventQueue:lb}),nb=Math.random().toString(36).slice(2),Q="__reactInternalInstance$"+nb,ob="__reactEventHandlers$"+nb;
	function pb(a){if(a[Q])return a[Q];for(var b=[];!a[Q];)if(b.push(a),a.parentNode)a=a.parentNode;else return null;var c=void 0,d=a[Q];if(5===d.tag||6===d.tag)return d;for(;a&&(d=a[Q]);a=b.pop())c=d;return c}function qb(a){if(5===a.tag||6===a.tag)return a.stateNode;E("33")}function rb(a){return a[ob]||null}
	var sb=Object.freeze({precacheFiberNode:function(a,b){b[Q]=a},getClosestInstanceFromNode:pb,getInstanceFromNode:function(a){a=a[Q];return!a||5!==a.tag&&6!==a.tag?null:a},getNodeFromInstance:qb,getFiberCurrentPropsFromNode:rb,updateFiberProps:function(a,b){a[ob]=b}});function tb(a){do a=a["return"];while(a&&5!==a.tag);return a?a:null}function ub(a,b,c){for(var d=[];a;)d.push(a),a=tb(a);for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c)}
	function vb(a,b,c){if(b=ib(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=$a(c._dispatchListeners,b),c._dispatchInstances=$a(c._dispatchInstances,a)}function wb(a){a&&a.dispatchConfig.phasedRegistrationNames&&ub(a._targetInst,vb,a)}function xb(a){if(a&&a.dispatchConfig.phasedRegistrationNames){var b=a._targetInst;b=b?tb(b):null;ub(b,vb,a)}}
	function yb(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=ib(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=$a(c._dispatchListeners,b),c._dispatchInstances=$a(c._dispatchInstances,a))}function zb(a){a&&a.dispatchConfig.registrationName&&yb(a._targetInst,null,a)}function Ab(a){ab(a,wb)}
	function Bb(a,b,c,d){if(c&&d)a:{var e=c;for(var f=d,g=0,h=e;h;h=tb(h))g++;h=0;for(var k=f;k;k=tb(k))h++;for(;0<g-h;)e=tb(e),g--;for(;0<h-g;)f=tb(f),h--;for(;g--;){if(e===f||e===f.alternate)break a;e=tb(e);f=tb(f)}e=null}else e=null;f=e;for(e=[];c&&c!==f;){g=c.alternate;if(null!==g&&g===f)break;e.push(c);c=tb(c)}for(c=[];d&&d!==f;){g=d.alternate;if(null!==g&&g===f)break;c.push(d);d=tb(d)}for(d=0;d<e.length;d++)yb(e[d],"bubbled",a);for(a=c.length;0<a--;)yb(c[a],"captured",b)}
	var Cb=Object.freeze({accumulateTwoPhaseDispatches:Ab,accumulateTwoPhaseDispatchesSkipTarget:function(a){ab(a,xb)},accumulateEnterLeaveDispatches:Bb,accumulateDirectDispatches:function(a){ab(a,zb)}}),Db=null;function Eb(){!Db&&l.canUseDOM&&(Db="textContent"in document.documentElement?"textContent":"innerText");return Db}var S={_root:null,_startText:null,_fallbackText:null};
	function Fb(){if(S._fallbackText)return S._fallbackText;var a,b=S._startText,c=b.length,d,e=Gb(),f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);S._fallbackText=e.slice(a,1<d?1-d:void 0);return S._fallbackText}function Gb(){return"value"in S._root?S._root.value:S._root[Eb()]}
	var Hb="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),Ib={type:null,target:null,currentTarget:C.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
	function T(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?C.thatReturnsTrue:C.thatReturnsFalse;this.isPropagationStopped=C.thatReturnsFalse;return this}
	B(T.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=C.thatReturnsTrue)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=C.thatReturnsTrue)},persist:function(){this.isPersistent=C.thatReturnsTrue},isPersistent:C.thatReturnsFalse,
	destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;for(a=0;a<Hb.length;a++)this[Hb[a]]=null}});T.Interface=Ib;T.augmentClass=function(a,b){function c(){}c.prototype=this.prototype;var d=new c;B(d,a.prototype);a.prototype=d;a.prototype.constructor=a;a.Interface=B({},this.Interface,b);a.augmentClass=this.augmentClass;Jb(a)};Jb(T);function Kb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
	function Lb(a){a instanceof this?void 0:E("223");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function Jb(a){a.eventPool=[];a.getPooled=Kb;a.release=Lb}function Mb(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(Mb,{data:null});function Nb(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(Nb,{data:null});var Pb=[9,13,27,32],Vb=l.canUseDOM&&"CompositionEvent"in window,Wb=null;l.canUseDOM&&"documentMode"in document&&(Wb=document.documentMode);var Xb;
	if(Xb=l.canUseDOM&&"TextEvent"in window&&!Wb){var Yb=window.opera;Xb=!("object"===typeof Yb&&"function"===typeof Yb.version&&12>=parseInt(Yb.version(),10))}
	var Zb=Xb,$b=l.canUseDOM&&(!Vb||Wb&&8<Wb&&11>=Wb),ac=String.fromCharCode(32),bc={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
	captured:"onCompositionStartCapture"},dependencies:"topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")}},cc=!1;
	function dc(a,b){switch(a){case "topKeyUp":return-1!==Pb.indexOf(b.keyCode);case "topKeyDown":return 229!==b.keyCode;case "topKeyPress":case "topMouseDown":case "topBlur":return!0;default:return!1}}function ec(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var fc=!1;function gc(a,b){switch(a){case "topCompositionEnd":return ec(b);case "topKeyPress":if(32!==b.which)return null;cc=!0;return ac;case "topTextInput":return a=b.data,a===ac&&cc?null:a;default:return null}}
	function hc(a,b){if(fc)return"topCompositionEnd"===a||!Vb&&dc(a,b)?(a=Fb(),S._root=null,S._startText=null,S._fallbackText=null,fc=!1,a):null;switch(a){case "topPaste":return null;case "topKeyPress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "topCompositionEnd":return $b?null:b.data;default:return null}}
	var ic={eventTypes:bc,extractEvents:function(a,b,c,d){var e;if(Vb)b:{switch(a){case "topCompositionStart":var f=bc.compositionStart;break b;case "topCompositionEnd":f=bc.compositionEnd;break b;case "topCompositionUpdate":f=bc.compositionUpdate;break b}f=void 0}else fc?dc(a,c)&&(f=bc.compositionEnd):"topKeyDown"===a&&229===c.keyCode&&(f=bc.compositionStart);f?($b&&(fc||f!==bc.compositionStart?f===bc.compositionEnd&&fc&&(e=Fb()):(S._root=d,S._startText=Gb(),fc=!0)),f=Mb.getPooled(f,b,c,d),e?f.data=
	e:(e=ec(c),null!==e&&(f.data=e)),Ab(f),e=f):e=null;(a=Zb?gc(a,c):hc(a,c))?(b=Nb.getPooled(bc.beforeInput,b,c,d),b.data=a,Ab(b)):b=null;return[e,b]}},jc=null,kc=null,lc=null;function mc(a){if(a=Xa(a)){jc&&"function"===typeof jc.restoreControlledState?void 0:E("194");var b=Wa(a.stateNode);jc.restoreControlledState(a.stateNode,a.type,b)}}var nc={injectFiberControlledHostComponent:function(a){jc=a}};function oc(a){kc?lc?lc.push(a):lc=[a]:kc=a}
	function pc(){if(kc){var a=kc,b=lc;lc=kc=null;mc(a);if(b)for(a=0;a<b.length;a++)mc(b[a])}}var qc=Object.freeze({injection:nc,enqueueStateRestore:oc,restoreStateIfNeeded:pc});function rc(a,b){return a(b)}var sc=!1;function tc(a,b){if(sc)return rc(a,b);sc=!0;try{return rc(a,b)}finally{sc=!1,pc()}}var uc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};
	function vc(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!uc[a.type]:"textarea"===b?!0:!1}function wc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var xc;l.canUseDOM&&(xc=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));
	function yc(a,b){if(!l.canUseDOM||b&&!("addEventListener"in document))return!1;b="on"+a;var c=b in document;c||(c=document.createElement("div"),c.setAttribute(b,"return;"),c="function"===typeof c[b]);!c&&xc&&"wheel"===a&&(c=document.implementation.hasFeature("Events.wheel","3.0"));return c}function zc(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Ac(a){var b=zc(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"function"===typeof c.get&&"function"===typeof c.set)return Object.defineProperty(a,b,{enumerable:c.enumerable,configurable:!0,get:function(){return c.get.call(this)},set:function(a){d=""+a;c.set.call(this,a)}}),{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;delete a[b]}}}
	function Bc(a){a._valueTracker||(a._valueTracker=Ac(a))}function Cc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=zc(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Dc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")}};
	function Ec(a,b,c){a=T.getPooled(Dc.change,a,b,c);a.type="change";oc(c);Ab(a);return a}var Fc=null,Gc=null;function Hc(a){kb(a);lb(!1)}function Ic(a){var b=qb(a);if(Cc(b))return a}function Jc(a,b){if("topChange"===a)return b}var Kc=!1;l.canUseDOM&&(Kc=yc("input")&&(!document.documentMode||9<document.documentMode));function Lc(){Fc&&(Fc.detachEvent("onpropertychange",Mc),Gc=Fc=null)}function Mc(a){"value"===a.propertyName&&Ic(Gc)&&(a=Ec(Gc,a,wc(a)),tc(Hc,a))}
	function Nc(a,b,c){"topFocus"===a?(Lc(),Fc=b,Gc=c,Fc.attachEvent("onpropertychange",Mc)):"topBlur"===a&&Lc()}function Oc(a){if("topSelectionChange"===a||"topKeyUp"===a||"topKeyDown"===a)return Ic(Gc)}function Pc(a,b){if("topClick"===a)return Ic(b)}function $c(a,b){if("topInput"===a||"topChange"===a)return Ic(b)}
	var ad={eventTypes:Dc,_isInputEventSupported:Kc,extractEvents:function(a,b,c,d){var e=b?qb(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Jc;else if(vc(e))if(Kc)g=$c;else{g=Oc;var h=Nc}else f=e.nodeName,!f||"input"!==f.toLowerCase()||"checkbox"!==e.type&&"radio"!==e.type||(g=Pc);if(g&&(g=g(a,b)))return Ec(g,c,d);h&&h(a,e,b);"topBlur"===a&&null!=b&&(a=b._wrapperState||e._wrapperState)&&a.controlled&&"number"===e.type&&(a=""+e.value,e.getAttribute("value")!==
	a&&e.setAttribute("value",a))}};function bd(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(bd,{view:null,detail:null});var cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=cd[a])?!!b[a]:!1}function ed(){return dd}function fd(a,b,c,d){return T.call(this,a,b,c,d)}
	bd.augmentClass(fd,{screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:ed,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)}});
	var gd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},hd={eventTypes:gd,extractEvents:function(a,b,c,d){if("topMouseOver"===a&&(c.relatedTarget||c.fromElement)||"topMouseOut"!==a&&"topMouseOver"!==a)return null;var e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;"topMouseOut"===a?(a=b,b=(b=c.relatedTarget||c.toElement)?pb(b):null):a=null;if(a===
	b)return null;var f=null==a?e:qb(a);e=null==b?e:qb(b);var g=fd.getPooled(gd.mouseLeave,a,c,d);g.type="mouseleave";g.target=f;g.relatedTarget=e;c=fd.getPooled(gd.mouseEnter,b,c,d);c.type="mouseenter";c.target=e;c.relatedTarget=f;Bb(g,c,a,b);return[g,c]}},id=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;function jd(a){a=a.type;return"string"===typeof a?a:"function"===typeof a?a.displayName||a.name:null}
	function kd(a){var b=a;if(a.alternate)for(;b["return"];)b=b["return"];else{if(0!==(b.effectTag&2))return 1;for(;b["return"];)if(b=b["return"],0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function ld(a){return(a=a._reactInternalFiber)?2===kd(a):!1}function md(a){2!==kd(a)?E("188"):void 0}
	function nd(a){var b=a.alternate;if(!b)return b=kd(a),3===b?E("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c["return"],f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return md(e),a;if(g===d)return md(e),b;g=g.sibling}E("188")}if(c["return"]!==d["return"])c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
	void 0:E("189")}}c.alternate!==d?E("190"):void 0}3!==c.tag?E("188"):void 0;return c.stateNode.current===c?a:b}function od(a){a=nd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null}
	function pd(a){a=nd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null}var qd=[];
	function rd(a){var b=a.targetInst;do{if(!b){a.ancestors.push(b);break}var c;for(c=b;c["return"];)c=c["return"];c=3!==c.tag?null:c.stateNode.containerInfo;if(!c)break;a.ancestors.push(b);b=pb(c)}while(b);for(c=0;c<a.ancestors.length;c++)b=a.ancestors[c],sd(a.topLevelType,b,a.nativeEvent,wc(a.nativeEvent))}var td=!0,sd=void 0;function ud(a){td=!!a}function U(a,b,c){return c?ba.listen(c,b,vd.bind(null,a)):null}function wd(a,b,c){return c?ba.capture(c,b,vd.bind(null,a)):null}
	function vd(a,b){if(td){var c=wc(b);c=pb(c);null===c||"number"!==typeof c.tag||2===kd(c)||(c=null);if(qd.length){var d=qd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{tc(rd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>qd.length&&qd.push(a)}}}
	var xd=Object.freeze({get _enabled(){return td},get _handleTopLevel(){return sd},setHandleTopLevel:function(a){sd=a},setEnabled:ud,isEnabled:function(){return td},trapBubbledEvent:U,trapCapturedEvent:wd,dispatchEvent:vd});function yd(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}
	var zd={animationend:yd("Animation","AnimationEnd"),animationiteration:yd("Animation","AnimationIteration"),animationstart:yd("Animation","AnimationStart"),transitionend:yd("Transition","TransitionEnd")},Ad={},Bd={};l.canUseDOM&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete zd.animationend.animation,delete zd.animationiteration.animation,delete zd.animationstart.animation),"TransitionEvent"in window||delete zd.transitionend.transition);
	function Cd(a){if(Ad[a])return Ad[a];if(!zd[a])return a;var b=zd[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Bd)return Ad[a]=b[c];return""}
	var Dd={topAbort:"abort",topAnimationEnd:Cd("animationend")||"animationend",topAnimationIteration:Cd("animationiteration")||"animationiteration",topAnimationStart:Cd("animationstart")||"animationstart",topBlur:"blur",topCancel:"cancel",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topClose:"close",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",
	topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoad:"load",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",
	topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topToggle:"toggle",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",
	topTouchStart:"touchstart",topTransitionEnd:Cd("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},Ed={},Fd=0,Gd="_reactListenersID"+(""+Math.random()).slice(2);function Hd(a){Object.prototype.hasOwnProperty.call(a,Gd)||(a[Gd]=Fd++,Ed[a[Gd]]={});return Ed[a[Gd]]}function Id(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Jd(a,b){var c=Id(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Id(c)}}function Kd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&"text"===a.type||"textarea"===b||"true"===a.contentEditable)}
	var Ld=l.canUseDOM&&"documentMode"in document&&11>=document.documentMode,Md={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")}},Nd=null,Od=null,Pd=null,Qd=!1;
	function Rd(a,b){if(Qd||null==Nd||Nd!==da())return null;var c=Nd;"selectionStart"in c&&Kd(c)?c={start:c.selectionStart,end:c.selectionEnd}:window.getSelection?(c=window.getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}):c=void 0;return Pd&&ea(Pd,c)?null:(Pd=c,a=T.getPooled(Md.select,Od,a,b),a.type="select",a.target=Nd,Ab(a),a)}
	var Sd={eventTypes:Md,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Hd(e);f=Sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?qb(b):window;switch(a){case "topFocus":if(vc(e)||"true"===e.contentEditable)Nd=e,Od=b,Pd=null;break;case "topBlur":Pd=Od=Nd=null;break;case "topMouseDown":Qd=!0;break;case "topContextMenu":case "topMouseUp":return Qd=!1,Rd(c,d);case "topSelectionChange":if(Ld)break;
	case "topKeyDown":case "topKeyUp":return Rd(c,d)}return null}};function Td(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(Td,{animationName:null,elapsedTime:null,pseudoElement:null});function Ud(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(Ud,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}});function Vd(a,b,c,d){return T.call(this,a,b,c,d)}bd.augmentClass(Vd,{relatedTarget:null});
	function Wd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;return 32<=a||13===a?a:0}
	var Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
	116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};function Zd(a,b,c,d){return T.call(this,a,b,c,d)}
	bd.augmentClass(Zd,{key:function(a){if(a.key){var b=Xd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Wd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Yd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:ed,charCode:function(a){return"keypress"===a.type?Wd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
	a.type?Wd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}});function $d(a,b,c,d){return T.call(this,a,b,c,d)}fd.augmentClass($d,{dataTransfer:null});function ae(a,b,c,d){return T.call(this,a,b,c,d)}bd.augmentClass(ae,{touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:ed});function be(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(be,{propertyName:null,elapsedTime:null,pseudoElement:null});
	function ce(a,b,c,d){return T.call(this,a,b,c,d)}fd.augmentClass(ce,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null});var de={},ee={};
	"abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function(a){var b=a[0].toUpperCase()+
	a.slice(1),c="on"+b;b="top"+b;c={phasedRegistrationNames:{bubbled:c,captured:c+"Capture"},dependencies:[b]};de[a]=c;ee[b]=c});
	var fe={eventTypes:de,extractEvents:function(a,b,c,d){var e=ee[a];if(!e)return null;switch(a){case "topKeyPress":if(0===Wd(c))return null;case "topKeyDown":case "topKeyUp":a=Zd;break;case "topBlur":case "topFocus":a=Vd;break;case "topClick":if(2===c.button)return null;case "topDoubleClick":case "topMouseDown":case "topMouseMove":case "topMouseUp":case "topMouseOut":case "topMouseOver":case "topContextMenu":a=fd;break;case "topDrag":case "topDragEnd":case "topDragEnter":case "topDragExit":case "topDragLeave":case "topDragOver":case "topDragStart":case "topDrop":a=
	$d;break;case "topTouchCancel":case "topTouchEnd":case "topTouchMove":case "topTouchStart":a=ae;break;case "topAnimationEnd":case "topAnimationIteration":case "topAnimationStart":a=Td;break;case "topTransitionEnd":a=be;break;case "topScroll":a=bd;break;case "topWheel":a=ce;break;case "topCopy":case "topCut":case "topPaste":a=Ud;break;default:a=T}b=a.getPooled(e,b,c,d);Ab(b);return b}};sd=function(a,b,c,d){a=jb(a,b,c,d);kb(a);lb(!1)};hb.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
	Wa=sb.getFiberCurrentPropsFromNode;Xa=sb.getInstanceFromNode;Ya=sb.getNodeFromInstance;hb.injectEventPluginsByName({SimpleEventPlugin:fe,EnterLeaveEventPlugin:hd,ChangeEventPlugin:ad,SelectEventPlugin:Sd,BeforeInputEventPlugin:ic});var ge=[],he=-1;function V(a){0>he||(a.current=ge[he],ge[he]=null,he--)}function W(a,b){he++;ge[he]=a.current;a.current=b}new Set;var ie={current:D},X={current:!1},je=D;function ke(a){return le(a)?je:ie.current}
	function me(a,b){var c=a.type.contextTypes;if(!c)return D;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function le(a){return 2===a.tag&&null!=a.type.childContextTypes}function ne(a){le(a)&&(V(X,a),V(ie,a))}
	function oe(a,b,c){null!=ie.cursor?E("168"):void 0;W(ie,b,a);W(X,c,a)}function pe(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:E("108",jd(a)||"Unknown",e);return B({},b,c)}function qe(a){if(!le(a))return!1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||D;je=ie.current;W(ie,b,a);W(X,X.current,a);return!0}
	function re(a,b){var c=a.stateNode;c?void 0:E("169");if(b){var d=pe(a,je);c.__reactInternalMemoizedMergedChildContext=d;V(X,a);V(ie,a);W(ie,d,a)}else V(X,a);W(X,b,a)}
	function Y(a,b,c){this.tag=a;this.key=b;this.stateNode=this.type=null;this.sibling=this.child=this["return"]=null;this.index=0;this.memoizedState=this.updateQueue=this.memoizedProps=this.pendingProps=this.ref=null;this.internalContextTag=c;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.expirationTime=0;this.alternate=null}
	function se(a,b,c){var d=a.alternate;null===d?(d=new Y(a.tag,a.key,a.internalContextTag),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.expirationTime=c;d.pendingProps=b;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.sibling=a.sibling;d.index=a.index;d.ref=a.ref;return d}
	function te(a,b,c){var d=void 0,e=a.type,f=a.key;"function"===typeof e?(d=e.prototype&&e.prototype.isReactComponent?new Y(2,f,b):new Y(0,f,b),d.type=e,d.pendingProps=a.props):"string"===typeof e?(d=new Y(5,f,b),d.type=e,d.pendingProps=a.props):"object"===typeof e&&null!==e&&"number"===typeof e.tag?(d=e,d.pendingProps=a.props):E("130",null==e?e:typeof e,"");d.expirationTime=c;return d}function ue(a,b,c,d){b=new Y(10,d,b);b.pendingProps=a;b.expirationTime=c;return b}
	function ve(a,b,c){b=new Y(6,null,b);b.pendingProps=a;b.expirationTime=c;return b}function we(a,b,c){b=new Y(7,a.key,b);b.type=a.handler;b.pendingProps=a;b.expirationTime=c;return b}function xe(a,b,c){a=new Y(9,null,b);a.expirationTime=c;return a}function ye(a,b,c){b=new Y(4,a.key,b);b.pendingProps=a.children||[];b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}var ze=null,Ae=null;
	function Be(a){return function(b){try{return a(b)}catch(c){}}}function Ce(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);ze=Be(function(a){return b.onCommitFiberRoot(c,a)});Ae=Be(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}function De(a){"function"===typeof ze&&ze(a)}function Ee(a){"function"===typeof Ae&&Ae(a)}
	function Fe(a){return{baseState:a,expirationTime:0,first:null,last:null,callbackList:null,hasForceUpdate:!1,isInitialized:!1}}function Ge(a,b){null===a.last?a.first=a.last=b:(a.last.next=b,a.last=b);if(0===a.expirationTime||a.expirationTime>b.expirationTime)a.expirationTime=b.expirationTime}
	function He(a,b){var c=a.alternate,d=a.updateQueue;null===d&&(d=a.updateQueue=Fe(null));null!==c?(a=c.updateQueue,null===a&&(a=c.updateQueue=Fe(null))):a=null;a=a!==d?a:null;null===a?Ge(d,b):null===d.last||null===a.last?(Ge(d,b),Ge(a,b)):(Ge(d,b),a.last=b)}function Ie(a,b,c,d){a=a.partialState;return"function"===typeof a?a.call(b,c,d):a}
	function Je(a,b,c,d,e,f){null!==a&&a.updateQueue===c&&(c=b.updateQueue={baseState:c.baseState,expirationTime:c.expirationTime,first:c.first,last:c.last,isInitialized:c.isInitialized,callbackList:null,hasForceUpdate:!1});c.expirationTime=0;c.isInitialized?a=c.baseState:(a=c.baseState=b.memoizedState,c.isInitialized=!0);for(var g=!0,h=c.first,k=!1;null!==h;){var q=h.expirationTime;if(q>f){var v=c.expirationTime;if(0===v||v>q)c.expirationTime=q;k||(k=!0,c.baseState=a)}else{k||(c.first=h.next,null===
	c.first&&(c.last=null));if(h.isReplace)a=Ie(h,d,a,e),g=!0;else if(q=Ie(h,d,a,e))a=g?B({},a,q):B(a,q),g=!1;h.isForced&&(c.hasForceUpdate=!0);null!==h.callback&&(q=c.callbackList,null===q&&(q=c.callbackList=[]),q.push(h))}h=h.next}null!==c.callbackList?b.effectTag|=32:null!==c.first||c.hasForceUpdate||(b.updateQueue=null);k||(c.baseState=a);return a}
	function Ke(a,b){var c=a.callbackList;if(null!==c)for(a.callbackList=null,a=0;a<c.length;a++){var d=c[a],e=d.callback;d.callback=null;"function"!==typeof e?E("191",e):void 0;e.call(b)}}
	function Le(a,b,c,d){function e(a,b){b.updater=f;a.stateNode=b;b._reactInternalFiber=a}var f={isMounted:ld,enqueueSetState:function(c,d,e){c=c._reactInternalFiber;e=void 0===e?null:e;var g=b(c);He(c,{expirationTime:g,partialState:d,callback:e,isReplace:!1,isForced:!1,nextCallback:null,next:null});a(c,g)},enqueueReplaceState:function(c,d,e){c=c._reactInternalFiber;e=void 0===e?null:e;var g=b(c);He(c,{expirationTime:g,partialState:d,callback:e,isReplace:!0,isForced:!1,nextCallback:null,next:null});
	a(c,g)},enqueueForceUpdate:function(c,d){c=c._reactInternalFiber;d=void 0===d?null:d;var e=b(c);He(c,{expirationTime:e,partialState:null,callback:d,isReplace:!1,isForced:!0,nextCallback:null,next:null});a(c,e)}};return{adoptClassInstance:e,constructClassInstance:function(a,b){var c=a.type,d=ke(a),f=2===a.tag&&null!=a.type.contextTypes,g=f?me(a,d):D;b=new c(b,g);e(a,b);f&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=d,a.__reactInternalMemoizedMaskedChildContext=g);return b},mountClassInstance:function(a,
	b){var c=a.alternate,d=a.stateNode,e=d.state||null,g=a.pendingProps;g?void 0:E("158");var h=ke(a);d.props=g;d.state=a.memoizedState=e;d.refs=D;d.context=me(a,h);null!=a.type&&null!=a.type.prototype&&!0===a.type.prototype.unstable_isAsyncReactComponent&&(a.internalContextTag|=1);"function"===typeof d.componentWillMount&&(e=d.state,d.componentWillMount(),e!==d.state&&f.enqueueReplaceState(d,d.state,null),e=a.updateQueue,null!==e&&(d.state=Je(c,a,e,d,g,b)));"function"===typeof d.componentDidMount&&(a.effectTag|=
	4)},updateClassInstance:function(a,b,e){var g=b.stateNode;g.props=b.memoizedProps;g.state=b.memoizedState;var h=b.memoizedProps,k=b.pendingProps;k||(k=h,null==k?E("159"):void 0);var u=g.context,z=ke(b);z=me(b,z);"function"!==typeof g.componentWillReceiveProps||h===k&&u===z||(u=g.state,g.componentWillReceiveProps(k,z),g.state!==u&&f.enqueueReplaceState(g,g.state,null));u=b.memoizedState;e=null!==b.updateQueue?Je(a,b,b.updateQueue,g,k,e):u;if(!(h!==k||u!==e||X.current||null!==b.updateQueue&&b.updateQueue.hasForceUpdate))return"function"!==
	typeof g.componentDidUpdate||h===a.memoizedProps&&u===a.memoizedState||(b.effectTag|=4),!1;var G=k;if(null===h||null!==b.updateQueue&&b.updateQueue.hasForceUpdate)G=!0;else{var I=b.stateNode,L=b.type;G="function"===typeof I.shouldComponentUpdate?I.shouldComponentUpdate(G,e,z):L.prototype&&L.prototype.isPureReactComponent?!ea(h,G)||!ea(u,e):!0}G?("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(k,e,z),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4)):("function"!==typeof g.componentDidUpdate||
	h===a.memoizedProps&&u===a.memoizedState||(b.effectTag|=4),c(b,k),d(b,e));g.props=k;g.state=e;g.context=z;return G}}}var Qe="function"===typeof Symbol&&Symbol["for"],Re=Qe?Symbol["for"]("react.element"):60103,Se=Qe?Symbol["for"]("react.call"):60104,Te=Qe?Symbol["for"]("react.return"):60105,Ue=Qe?Symbol["for"]("react.portal"):60106,Ve=Qe?Symbol["for"]("react.fragment"):60107,We="function"===typeof Symbol&&Symbol.iterator;
	function Xe(a){if(null===a||"undefined"===typeof a)return null;a=We&&a[We]||a["@@iterator"];return"function"===typeof a?a:null}var Ye=Array.isArray;
	function Ze(a,b){var c=b.ref;if(null!==c&&"function"!==typeof c){if(b._owner){b=b._owner;var d=void 0;b&&(2!==b.tag?E("110"):void 0,d=b.stateNode);d?void 0:E("147",c);var e=""+c;if(null!==a&&null!==a.ref&&a.ref._stringRef===e)return a.ref;a=function(a){var b=d.refs===D?d.refs={}:d.refs;null===a?delete b[e]:b[e]=a};a._stringRef=e;return a}"string"!==typeof c?E("148"):void 0;b._owner?void 0:E("149",c)}return c}
	function $e(a,b){"textarea"!==a.type&&E("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
	function af(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=se(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
	2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=ve(c,a.internalContextTag,d),b["return"]=a,b;b=e(b,c,d);b["return"]=a;return b}function k(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=Ze(b,c),d["return"]=a,d;d=te(c,a.internalContextTag,d);d.ref=Ze(b,c);d["return"]=a;return d}function q(a,b,c,d){if(null===b||7!==b.tag)return b=we(c,a.internalContextTag,d),b["return"]=a,b;b=e(b,c,d);
	b["return"]=a;return b}function v(a,b,c,d){if(null===b||9!==b.tag)return b=xe(c,a.internalContextTag,d),b.type=c.value,b["return"]=a,b;b=e(b,null,d);b.type=c.value;b["return"]=a;return b}function y(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=ye(c,a.internalContextTag,d),b["return"]=a,b;b=e(b,c.children||[],d);b["return"]=a;return b}function u(a,b,c,d,f){if(null===b||10!==b.tag)return b=ue(c,a.internalContextTag,
	d,f),b["return"]=a,b;b=e(b,c,d);b["return"]=a;return b}function z(a,b,c){if("string"===typeof b||"number"===typeof b)return b=ve(""+b,a.internalContextTag,c),b["return"]=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Re:if(b.type===Ve)return b=ue(b.props.children,a.internalContextTag,c,b.key),b["return"]=a,b;c=te(b,a.internalContextTag,c);c.ref=Ze(null,b);c["return"]=a;return c;case Se:return b=we(b,a.internalContextTag,c),b["return"]=a,b;case Te:return c=xe(b,a.internalContextTag,
	c),c.type=b.value,c["return"]=a,c;case Ue:return b=ye(b,a.internalContextTag,c),b["return"]=a,b}if(Ye(b)||Xe(b))return b=ue(b,a.internalContextTag,c,null),b["return"]=a,b;$e(a,b)}return null}function G(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Re:return c.key===e?c.type===Ve?u(a,b,c.props.children,d,e):k(a,b,c,d):null;case Se:return c.key===e?q(a,b,c,d):null;case Te:return null===
	e?v(a,b,c,d):null;case Ue:return c.key===e?y(a,b,c,d):null}if(Ye(c)||Xe(c))return null!==e?null:u(a,b,c,d,null);$e(a,c)}return null}function I(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Re:return a=a.get(null===d.key?c:d.key)||null,d.type===Ve?u(b,a,d.props.children,e,d.key):k(b,a,d,e);case Se:return a=a.get(null===d.key?c:d.key)||null,q(b,a,d,e);case Te:return a=a.get(c)||null,v(b,a,d,e);case Ue:return a=
	a.get(null===d.key?c:d.key)||null,y(b,a,d,e)}if(Ye(d)||Xe(d))return a=a.get(c)||null,u(b,a,d,e,null);$e(b,d)}return null}function L(e,g,m,A){for(var h=null,r=null,n=g,w=g=0,k=null;null!==n&&w<m.length;w++){n.index>w?(k=n,n=null):k=n.sibling;var x=G(e,n,m[w],A);if(null===x){null===n&&(n=k);break}a&&n&&null===x.alternate&&b(e,n);g=f(x,g,w);null===r?h=x:r.sibling=x;r=x;n=k}if(w===m.length)return c(e,n),h;if(null===n){for(;w<m.length;w++)if(n=z(e,m[w],A))g=f(n,g,w),null===r?h=n:r.sibling=n,r=n;return h}for(n=
	d(e,n);w<m.length;w++)if(k=I(n,e,w,m[w],A)){if(a&&null!==k.alternate)n["delete"](null===k.key?w:k.key);g=f(k,g,w);null===r?h=k:r.sibling=k;r=k}a&&n.forEach(function(a){return b(e,a)});return h}function N(e,g,m,A){var h=Xe(m);"function"!==typeof h?E("150"):void 0;m=h.call(m);null==m?E("151"):void 0;for(var r=h=null,n=g,w=g=0,k=null,x=m.next();null!==n&&!x.done;w++,x=m.next()){n.index>w?(k=n,n=null):k=n.sibling;var J=G(e,n,x.value,A);if(null===J){n||(n=k);break}a&&n&&null===J.alternate&&b(e,n);g=f(J,
	g,w);null===r?h=J:r.sibling=J;r=J;n=k}if(x.done)return c(e,n),h;if(null===n){for(;!x.done;w++,x=m.next())x=z(e,x.value,A),null!==x&&(g=f(x,g,w),null===r?h=x:r.sibling=x,r=x);return h}for(n=d(e,n);!x.done;w++,x=m.next())if(x=I(n,e,w,x.value,A),null!==x){if(a&&null!==x.alternate)n["delete"](null===x.key?w:x.key);g=f(x,g,w);null===r?h=x:r.sibling=x;r=x}a&&n.forEach(function(a){return b(e,a)});return h}return function(a,d,f,h){"object"===typeof f&&null!==f&&f.type===Ve&&null===f.key&&(f=f.props.children);
	var m="object"===typeof f&&null!==f;if(m)switch(f.$$typeof){case Re:a:{var r=f.key;for(m=d;null!==m;){if(m.key===r)if(10===m.tag?f.type===Ve:m.type===f.type){c(a,m.sibling);d=e(m,f.type===Ve?f.props.children:f.props,h);d.ref=Ze(m,f);d["return"]=a;a=d;break a}else{c(a,m);break}else b(a,m);m=m.sibling}f.type===Ve?(d=ue(f.props.children,a.internalContextTag,h,f.key),d["return"]=a,a=d):(h=te(f,a.internalContextTag,h),h.ref=Ze(d,f),h["return"]=a,a=h)}return g(a);case Se:a:{for(m=f.key;null!==d;){if(d.key===
	m)if(7===d.tag){c(a,d.sibling);d=e(d,f,h);d["return"]=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=we(f,a.internalContextTag,h);d["return"]=a;a=d}return g(a);case Te:a:{if(null!==d)if(9===d.tag){c(a,d.sibling);d=e(d,null,h);d.type=f.value;d["return"]=a;a=d;break a}else c(a,d);d=xe(f,a.internalContextTag,h);d.type=f.value;d["return"]=a;a=d}return g(a);case Ue:a:{for(m=f.key;null!==d;){if(d.key===m)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===
	f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d["return"]=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=ye(f,a.internalContextTag,h);d["return"]=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h)):(c(a,d),d=ve(f,a.internalContextTag,h)),d["return"]=a,a=d,g(a);if(Ye(f))return L(a,d,f,h);if(Xe(f))return N(a,d,f,h);m&&$e(a,f);if("undefined"===typeof f)switch(a.tag){case 2:case 1:h=a.type,E("152",h.displayName||
	h.name||"Component")}return c(a,d)}}var bf=af(!0),cf=af(!1);
	function df(a,b,c,d,e){function f(a,b,c){var d=b.expirationTime;b.child=null===a?cf(b,null,c,d):bf(b,a.child,c,d)}function g(a,b){var c=b.ref;null===c||a&&a.ref===c||(b.effectTag|=128)}function h(a,b,c,d){g(a,b);if(!c)return d&&re(b,!1),q(a,b);c=b.stateNode;id.current=b;var e=c.render();b.effectTag|=1;f(a,b,e);b.memoizedState=c.state;b.memoizedProps=c.props;d&&re(b,!0);return b.child}function k(a){var b=a.stateNode;b.pendingContext?oe(a,b.pendingContext,b.pendingContext!==b.context):b.context&&oe(a,
	b.context,!1);I(a,b.containerInfo)}function q(a,b){null!==a&&b.child!==a.child?E("153"):void 0;if(null!==b.child){a=b.child;var c=se(a,a.pendingProps,a.expirationTime);b.child=c;for(c["return"]=b;null!==a.sibling;)a=a.sibling,c=c.sibling=se(a,a.pendingProps,a.expirationTime),c["return"]=b;c.sibling=null}return b.child}function v(a,b){switch(b.tag){case 3:k(b);break;case 2:qe(b);break;case 4:I(b,b.stateNode.containerInfo)}return null}var y=a.shouldSetTextContent,u=a.useSyncScheduling,z=a.shouldDeprioritizeSubtree,
	G=b.pushHostContext,I=b.pushHostContainer,L=c.enterHydrationState,N=c.resetHydrationState,J=c.tryToClaimNextHydratableInstance;a=Le(d,e,function(a,b){a.memoizedProps=b},function(a,b){a.memoizedState=b});var w=a.adoptClassInstance,m=a.constructClassInstance,A=a.mountClassInstance,Ob=a.updateClassInstance;return{beginWork:function(a,b,c){if(0===b.expirationTime||b.expirationTime>c)return v(a,b);switch(b.tag){case 0:null!==a?E("155"):void 0;var d=b.type,e=b.pendingProps,r=ke(b);r=me(b,r);d=d(e,r);b.effectTag|=
	1;"object"===typeof d&&null!==d&&"function"===typeof d.render?(b.tag=2,e=qe(b),w(b,d),A(b,c),b=h(a,b,!0,e)):(b.tag=1,f(a,b,d),b.memoizedProps=e,b=b.child);return b;case 1:a:{e=b.type;c=b.pendingProps;d=b.memoizedProps;if(X.current)null===c&&(c=d);else if(null===c||d===c){b=q(a,b);break a}d=ke(b);d=me(b,d);e=e(c,d);b.effectTag|=1;f(a,b,e);b.memoizedProps=c;b=b.child}return b;case 2:return e=qe(b),d=void 0,null===a?b.stateNode?E("153"):(m(b,b.pendingProps),A(b,c),d=!0):d=Ob(a,b,c),h(a,b,d,e);case 3:return k(b),
	e=b.updateQueue,null!==e?(d=b.memoizedState,e=Je(a,b,e,null,null,c),d===e?(N(),b=q(a,b)):(d=e.element,r=b.stateNode,(null===a||null===a.child)&&r.hydrate&&L(b)?(b.effectTag|=2,b.child=cf(b,null,d,c)):(N(),f(a,b,d)),b.memoizedState=e,b=b.child)):(N(),b=q(a,b)),b;case 5:G(b);null===a&&J(b);e=b.type;var n=b.memoizedProps;d=b.pendingProps;null===d&&(d=n,null===d?E("154"):void 0);r=null!==a?a.memoizedProps:null;X.current||null!==d&&n!==d?(n=d.children,y(e,d)?n=null:r&&y(e,r)&&(b.effectTag|=16),g(a,b),
	2147483647!==c&&!u&&z(e,d)?(b.expirationTime=2147483647,b=null):(f(a,b,n),b.memoizedProps=d,b=b.child)):b=q(a,b);return b;case 6:return null===a&&J(b),a=b.pendingProps,null===a&&(a=b.memoizedProps),b.memoizedProps=a,null;case 8:b.tag=7;case 7:e=b.pendingProps;if(X.current)null===e&&(e=a&&a.memoizedProps,null===e?E("154"):void 0);else if(null===e||b.memoizedProps===e)e=b.memoizedProps;d=e.children;b.stateNode=null===a?cf(b,b.stateNode,d,c):bf(b,b.stateNode,d,c);b.memoizedProps=e;return b.stateNode;
	case 9:return null;case 4:a:{I(b,b.stateNode.containerInfo);e=b.pendingProps;if(X.current)null===e&&(e=a&&a.memoizedProps,null==e?E("154"):void 0);else if(null===e||b.memoizedProps===e){b=q(a,b);break a}null===a?b.child=bf(b,null,e,c):f(a,b,e);b.memoizedProps=e;b=b.child}return b;case 10:a:{c=b.pendingProps;if(X.current)null===c&&(c=b.memoizedProps);else if(null===c||b.memoizedProps===c){b=q(a,b);break a}f(a,b,c);b.memoizedProps=c;b=b.child}return b;default:E("156")}},beginFailedWork:function(a,b,
	c){switch(b.tag){case 2:qe(b);break;case 3:k(b);break;default:E("157")}b.effectTag|=64;null===a?b.child=null:b.child!==a.child&&(b.child=a.child);if(0===b.expirationTime||b.expirationTime>c)return v(a,b);b.firstEffect=null;b.lastEffect=null;b.child=null===a?cf(b,null,null,c):bf(b,a.child,null,c);2===b.tag&&(a=b.stateNode,b.memoizedProps=a.props,b.memoizedState=a.state);return b.child}}}
	function ef(a,b,c){function d(a){a.effectTag|=4}var e=a.createInstance,f=a.createTextInstance,g=a.appendInitialChild,h=a.finalizeInitialChildren,k=a.prepareUpdate,q=a.persistence,v=b.getRootHostContainer,y=b.popHostContext,u=b.getHostContext,z=b.popHostContainer,G=c.prepareToHydrateHostInstance,I=c.prepareToHydrateHostTextInstance,L=c.popHydrationState,N=void 0,J=void 0,w=void 0;a.mutation?(N=function(){},J=function(a,b,c){(b.updateQueue=c)&&d(b)},w=function(a,b,c,e){c!==e&&d(b)}):q?E("235"):E("236");
	return{completeWork:function(a,b,c){var m=b.pendingProps;if(null===m)m=b.memoizedProps;else if(2147483647!==b.expirationTime||2147483647===c)b.pendingProps=null;switch(b.tag){case 1:return null;case 2:return ne(b),null;case 3:z(b);V(X,b);V(ie,b);m=b.stateNode;m.pendingContext&&(m.context=m.pendingContext,m.pendingContext=null);if(null===a||null===a.child)L(b),b.effectTag&=-3;N(b);return null;case 5:y(b);c=v();var A=b.type;if(null!==a&&null!=b.stateNode){var p=a.memoizedProps,q=b.stateNode,x=u();q=
	k(q,A,p,m,c,x);J(a,b,q,A,p,m,c);a.ref!==b.ref&&(b.effectTag|=128)}else{if(!m)return null===b.stateNode?E("166"):void 0,null;a=u();if(L(b))G(b,c,a)&&d(b);else{a=e(A,m,c,a,b);a:for(p=b.child;null!==p;){if(5===p.tag||6===p.tag)g(a,p.stateNode);else if(4!==p.tag&&null!==p.child){p.child["return"]=p;p=p.child;continue}if(p===b)break;for(;null===p.sibling;){if(null===p["return"]||p["return"]===b)break a;p=p["return"]}p.sibling["return"]=p["return"];p=p.sibling}h(a,A,m,c)&&d(b);b.stateNode=a}null!==b.ref&&
	(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)w(a,b,a.memoizedProps,m);else{if("string"!==typeof m)return null===b.stateNode?E("166"):void 0,null;a=v();c=u();L(b)?I(b)&&d(b):b.stateNode=f(m,a,c,b)}return null;case 7:(m=b.memoizedProps)?void 0:E("165");b.tag=8;A=[];a:for((p=b.stateNode)&&(p["return"]=b);null!==p;){if(5===p.tag||6===p.tag||4===p.tag)E("247");else if(9===p.tag)A.push(p.type);else if(null!==p.child){p.child["return"]=p;p=p.child;continue}for(;null===p.sibling;){if(null===
	p["return"]||p["return"]===b)break a;p=p["return"]}p.sibling["return"]=p["return"];p=p.sibling}p=m.handler;m=p(m.props,A);b.child=bf(b,null!==a?a.child:null,m,c);return b.child;case 8:return b.tag=7,null;case 9:return null;case 10:return null;case 4:return z(b),N(b),null;case 0:E("167");default:E("156")}}}}
	function ff(a,b){function c(a){var c=a.ref;if(null!==c)try{c(null)}catch(A){b(a,A)}}function d(a){"function"===typeof Ee&&Ee(a);switch(a.tag){case 2:c(a);var d=a.stateNode;if("function"===typeof d.componentWillUnmount)try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(A){b(a,A)}break;case 5:c(a);break;case 7:e(a.stateNode);break;case 4:k&&g(a)}}function e(a){for(var b=a;;)if(d(b),null===b.child||k&&4===b.tag){if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||
	b["return"]===a)return;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}else b.child["return"]=b,b=b.child}function f(a){return 5===a.tag||3===a.tag||4===a.tag}function g(a){for(var b=a,c=!1,f=void 0,g=void 0;;){if(!c){c=b["return"];a:for(;;){null===c?E("160"):void 0;switch(c.tag){case 5:f=c.stateNode;g=!1;break a;case 3:f=c.stateNode.containerInfo;g=!0;break a;case 4:f=c.stateNode.containerInfo;g=!0;break a}c=c["return"]}c=!0}if(5===b.tag||6===b.tag)e(b),g?J(f,b.stateNode):N(f,b.stateNode);
	else if(4===b.tag?f=b.stateNode.containerInfo:d(b),null!==b.child){b.child["return"]=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||b["return"]===a)return;b=b["return"];4===b.tag&&(c=!1)}b.sibling["return"]=b["return"];b=b.sibling}}var h=a.getPublicInstance,k=a.mutation;a=a.persistence;k||(a?E("235"):E("236"));var q=k.commitMount,v=k.commitUpdate,y=k.resetTextContent,u=k.commitTextUpdate,z=k.appendChild,G=k.appendChildToContainer,I=k.insertBefore,L=k.insertInContainerBefore,
	N=k.removeChild,J=k.removeChildFromContainer;return{commitResetTextContent:function(a){y(a.stateNode)},commitPlacement:function(a){a:{for(var b=a["return"];null!==b;){if(f(b)){var c=b;break a}b=b["return"]}E("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:E("161")}c.effectTag&16&&(y(b),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c["return"]||f(c["return"])){c=
	null;break a}c=c["return"]}c.sibling["return"]=c["return"];for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;else c.child["return"]=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)c?d?L(b,e.stateNode,c):I(b,e.stateNode,c):d?G(b,e.stateNode):z(b,e.stateNode);else if(4!==e.tag&&null!==e.child){e.child["return"]=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e["return"]||e["return"]===
	a)return;e=e["return"]}e.sibling["return"]=e["return"];e=e.sibling}},commitDeletion:function(a){g(a);a["return"]=null;a.child=null;a.alternate&&(a.alternate.child=null,a.alternate["return"]=null)},commitWork:function(a,b){switch(b.tag){case 2:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&v(c,f,e,a,d,b)}break;case 6:null===b.stateNode?E("162"):void 0;c=b.memoizedProps;u(b.stateNode,null!==a?a.memoizedProps:
	c,c);break;case 3:break;default:E("163")}},commitLifeCycles:function(a,b){switch(b.tag){case 2:var c=b.stateNode;if(b.effectTag&4)if(null===a)c.props=b.memoizedProps,c.state=b.memoizedState,c.componentDidMount();else{var d=a.memoizedProps;a=a.memoizedState;c.props=b.memoizedProps;c.state=b.memoizedState;c.componentDidUpdate(d,a)}b=b.updateQueue;null!==b&&Ke(b,c);break;case 3:c=b.updateQueue;null!==c&&Ke(c,null!==b.child?b.child.stateNode:null);break;case 5:c=b.stateNode;null===a&&b.effectTag&4&&q(c,
	b.type,b.memoizedProps,b);break;case 6:break;case 4:break;default:E("163")}},commitAttachRef:function(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:b(h(c));break;default:b(c)}}},commitDetachRef:function(a){a=a.ref;null!==a&&a(null)}}}var gf={};
	function hf(a){function b(a){a===gf?E("174"):void 0;return a}var c=a.getChildHostContext,d=a.getRootHostContext,e={current:gf},f={current:gf},g={current:gf};return{getHostContext:function(){return b(e.current)},getRootHostContainer:function(){return b(g.current)},popHostContainer:function(a){V(e,a);V(f,a);V(g,a)},popHostContext:function(a){f.current===a&&(V(e,a),V(f,a))},pushHostContainer:function(a,b){W(g,b,a);b=d(b);W(f,a,a);W(e,b,a)},pushHostContext:function(a){var d=b(g.current),h=b(e.current);
	d=c(h,a.type,d);h!==d&&(W(f,a,a),W(e,d,a))},resetHostContainer:function(){e.current=gf;g.current=gf}}}
	function jf(a){function b(a,b){var c=new Y(5,null,0);c.type="DELETED";c.stateNode=b;c["return"]=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function c(a,b){switch(a.tag){case 5:return b=f(b,a.type,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 6:return b=g(b,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;default:return!1}}function d(a){for(a=a["return"];null!==a&&5!==a.tag&&3!==a.tag;)a=a["return"];y=a}var e=a.shouldSetTextContent;
	a=a.hydration;if(!a)return{enterHydrationState:function(){return!1},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){E("175")},prepareToHydrateHostTextInstance:function(){E("176")},popHydrationState:function(){return!1}};var f=a.canHydrateInstance,g=a.canHydrateTextInstance,h=a.getNextHydratableSibling,k=a.getFirstHydratableChild,q=a.hydrateInstance,v=a.hydrateTextInstance,y=null,u=null,z=!1;return{enterHydrationState:function(a){u=
	k(a.stateNode.containerInfo);y=a;return z=!0},resetHydrationState:function(){u=y=null;z=!1},tryToClaimNextHydratableInstance:function(a){if(z){var d=u;if(d){if(!c(a,d)){d=h(d);if(!d||!c(a,d)){a.effectTag|=2;z=!1;y=a;return}b(y,u)}y=a;u=k(d)}else a.effectTag|=2,z=!1,y=a}},prepareToHydrateHostInstance:function(a,b,c){b=q(a.stateNode,a.type,a.memoizedProps,b,c,a);a.updateQueue=b;return null!==b?!0:!1},prepareToHydrateHostTextInstance:function(a){return v(a.stateNode,a.memoizedProps,a)},popHydrationState:function(a){if(a!==
	y)return!1;if(!z)return d(a),z=!0,!1;var c=a.type;if(5!==a.tag||"head"!==c&&"body"!==c&&!e(c,a.memoizedProps))for(c=u;c;)b(a,c),c=h(c);d(a);u=y?h(a.stateNode):null;return!0}}}
	function kf(a){function b(a){Qb=ja=!0;var b=a.stateNode;b.current===a?E("177"):void 0;b.isReadyForCommit=!1;id.current=null;if(1<a.effectTag)if(null!==a.lastEffect){a.lastEffect.nextEffect=a;var c=a.firstEffect}else c=a;else c=a.firstEffect;yg();for(t=c;null!==t;){var d=!1,e=void 0;try{for(;null!==t;){var f=t.effectTag;f&16&&zg(t);if(f&128){var g=t.alternate;null!==g&&Ag(g)}switch(f&-242){case 2:Ne(t);t.effectTag&=-3;break;case 6:Ne(t);t.effectTag&=-3;Oe(t.alternate,t);break;case 4:Oe(t.alternate,
	t);break;case 8:Sc=!0,Bg(t),Sc=!1}t=t.nextEffect}}catch(Tc){d=!0,e=Tc}d&&(null===t?E("178"):void 0,h(t,e),null!==t&&(t=t.nextEffect))}Cg();b.current=a;for(t=c;null!==t;){c=!1;d=void 0;try{for(;null!==t;){var k=t.effectTag;k&36&&Dg(t.alternate,t);k&128&&Eg(t);if(k&64)switch(e=t,f=void 0,null!==R&&(f=R.get(e),R["delete"](e),null==f&&null!==e.alternate&&(e=e.alternate,f=R.get(e),R["delete"](e))),null==f?E("184"):void 0,e.tag){case 2:e.stateNode.componentDidCatch(f.error,{componentStack:f.componentStack});
	break;case 3:null===ca&&(ca=f.error);break;default:E("157")}var Qc=t.nextEffect;t.nextEffect=null;t=Qc}}catch(Tc){c=!0,d=Tc}c&&(null===t?E("178"):void 0,h(t,d),null!==t&&(t=t.nextEffect))}ja=Qb=!1;"function"===typeof De&&De(a.stateNode);ha&&(ha.forEach(G),ha=null);null!==ca&&(a=ca,ca=null,Ob(a));b=b.current.expirationTime;0===b&&(qa=R=null);return b}function c(a){for(;;){var b=Fg(a.alternate,a,H),c=a["return"],d=a.sibling;var e=a;if(2147483647===H||2147483647!==e.expirationTime){if(2!==e.tag&&3!==
	e.tag)var f=0;else f=e.updateQueue,f=null===f?0:f.expirationTime;for(var g=e.child;null!==g;)0!==g.expirationTime&&(0===f||f>g.expirationTime)&&(f=g.expirationTime),g=g.sibling;e.expirationTime=f}if(null!==b)return b;null!==c&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;
	if(null!==c)a=c;else{a.stateNode.isReadyForCommit=!0;break}}return null}function d(a){var b=rg(a.alternate,a,H);null===b&&(b=c(a));id.current=null;return b}function e(a){var b=Gg(a.alternate,a,H);null===b&&(b=c(a));id.current=null;return b}function f(a){if(null!==R){if(!(0===H||H>a))if(H<=Uc)for(;null!==F;)F=k(F)?e(F):d(F);else for(;null!==F&&!A();)F=k(F)?e(F):d(F)}else if(!(0===H||H>a))if(H<=Uc)for(;null!==F;)F=d(F);else for(;null!==F&&!A();)F=d(F)}function g(a,b){ja?E("243"):void 0;ja=!0;a.isReadyForCommit=
	!1;if(a!==ra||b!==H||null===F){for(;-1<he;)ge[he]=null,he--;je=D;ie.current=D;X.current=!1;x();ra=a;H=b;F=se(ra.current,null,b)}var c=!1,d=null;try{f(b)}catch(Rc){c=!0,d=Rc}for(;c;){if(eb){ca=d;break}var g=F;if(null===g)eb=!0;else{var k=h(g,d);null===k?E("183"):void 0;if(!eb){try{c=k;d=b;for(k=c;null!==g;){switch(g.tag){case 2:ne(g);break;case 5:qg(g);break;case 3:p(g);break;case 4:p(g)}if(g===k||g.alternate===k)break;g=g["return"]}F=e(c);f(d)}catch(Rc){c=!0;d=Rc;continue}break}}}b=ca;eb=ja=!1;ca=
	null;null!==b&&Ob(b);return a.isReadyForCommit?a.current.alternate:null}function h(a,b){var c=id.current=null,d=!1,e=!1,f=null;if(3===a.tag)c=a,q(a)&&(eb=!0);else for(var g=a["return"];null!==g&&null===c;){2===g.tag?"function"===typeof g.stateNode.componentDidCatch&&(d=!0,f=jd(g),c=g,e=!0):3===g.tag&&(c=g);if(q(g)){if(Sc||null!==ha&&(ha.has(g)||null!==g.alternate&&ha.has(g.alternate)))return null;c=null;e=!1}g=g["return"]}if(null!==c){null===qa&&(qa=new Set);qa.add(c);var h="";g=a;do{a:switch(g.tag){case 0:case 1:case 2:case 5:var k=
	g._debugOwner,Qc=g._debugSource;var m=jd(g);var n=null;k&&(n=jd(k));k=Qc;m="\n    in "+(m||"Unknown")+(k?" (at "+k.fileName.replace(/^.*[\\\/]/,"")+":"+k.lineNumber+")":n?" (created by "+n+")":"");break a;default:m=""}h+=m;g=g["return"]}while(g);g=h;a=jd(a);null===R&&(R=new Map);b={componentName:a,componentStack:g,error:b,errorBoundary:d?c.stateNode:null,errorBoundaryFound:d,errorBoundaryName:f,willRetry:e};R.set(c,b);try{var p=b.error;p&&p.suppressReactErrorLogging||console.error(p)}catch(Vc){Vc&&
	Vc.suppressReactErrorLogging||console.error(Vc)}Qb?(null===ha&&(ha=new Set),ha.add(c)):G(c);return c}null===ca&&(ca=b);return null}function k(a){return null!==R&&(R.has(a)||null!==a.alternate&&R.has(a.alternate))}function q(a){return null!==qa&&(qa.has(a)||null!==a.alternate&&qa.has(a.alternate))}function v(){return 20*(((I()+100)/20|0)+1)}function y(a){return 0!==ka?ka:ja?Qb?1:H:!Hg||a.internalContextTag&1?v():1}function u(a,b){return z(a,b,!1)}function z(a,b){for(;null!==a;){if(0===a.expirationTime||
	a.expirationTime>b)a.expirationTime=b;null!==a.alternate&&(0===a.alternate.expirationTime||a.alternate.expirationTime>b)&&(a.alternate.expirationTime=b);if(null===a["return"])if(3===a.tag){var c=a.stateNode;!ja&&c===ra&&b<H&&(F=ra=null,H=0);var d=c,e=b;Rb>Ig&&E("185");if(null===d.nextScheduledRoot)d.remainingExpirationTime=e,null===O?(sa=O=d,d.nextScheduledRoot=d):(O=O.nextScheduledRoot=d,O.nextScheduledRoot=sa);else{var f=d.remainingExpirationTime;if(0===f||e<f)d.remainingExpirationTime=e}Fa||(la?
	Sb&&(ma=d,na=1,m(ma,na)):1===e?w(1,null):L(e));!ja&&c===ra&&b<H&&(F=ra=null,H=0)}else break;a=a["return"]}}function G(a){z(a,1,!0)}function I(){return Uc=((Wc()-Pe)/10|0)+2}function L(a){if(0!==Tb){if(a>Tb)return;Jg(Xc)}var b=Wc()-Pe;Tb=a;Xc=Kg(J,{timeout:10*(a-2)-b})}function N(){var a=0,b=null;if(null!==O)for(var c=O,d=sa;null!==d;){var e=d.remainingExpirationTime;if(0===e){null===c||null===O?E("244"):void 0;if(d===d.nextScheduledRoot){sa=O=d.nextScheduledRoot=null;break}else if(d===sa)sa=e=d.nextScheduledRoot,
	O.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===O){O=c;O.nextScheduledRoot=sa;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===O)break;c=d;d=d.nextScheduledRoot}}c=ma;null!==c&&c===b?Rb++:Rb=0;ma=b;na=a}function J(a){w(0,a)}function w(a,b){fb=b;for(N();null!==ma&&0!==na&&(0===a||na<=a)&&!Yc;)m(ma,na),N();null!==fb&&(Tb=0,Xc=-1);0!==na&&L(na);fb=null;Yc=!1;Rb=0;if(Ub)throw a=Zc,Zc=
	null,Ub=!1,a;}function m(a,c){Fa?E("245"):void 0;Fa=!0;if(c<=I()){var d=a.finishedWork;null!==d?(a.finishedWork=null,a.remainingExpirationTime=b(d)):(a.finishedWork=null,d=g(a,c),null!==d&&(a.remainingExpirationTime=b(d)))}else d=a.finishedWork,null!==d?(a.finishedWork=null,a.remainingExpirationTime=b(d)):(a.finishedWork=null,d=g(a,c),null!==d&&(A()?a.finishedWork=d:a.remainingExpirationTime=b(d)));Fa=!1}function A(){return null===fb||fb.timeRemaining()>Lg?!1:Yc=!0}function Ob(a){null===ma?E("246"):
	void 0;ma.remainingExpirationTime=0;Ub||(Ub=!0,Zc=a)}var r=hf(a),n=jf(a),p=r.popHostContainer,qg=r.popHostContext,x=r.resetHostContainer,Me=df(a,r,n,u,y),rg=Me.beginWork,Gg=Me.beginFailedWork,Fg=ef(a,r,n).completeWork;r=ff(a,h);var zg=r.commitResetTextContent,Ne=r.commitPlacement,Bg=r.commitDeletion,Oe=r.commitWork,Dg=r.commitLifeCycles,Eg=r.commitAttachRef,Ag=r.commitDetachRef,Wc=a.now,Kg=a.scheduleDeferredCallback,Jg=a.cancelDeferredCallback,Hg=a.useSyncScheduling,yg=a.prepareForCommit,Cg=a.resetAfterCommit,
	Pe=Wc(),Uc=2,ka=0,ja=!1,F=null,ra=null,H=0,t=null,R=null,qa=null,ha=null,ca=null,eb=!1,Qb=!1,Sc=!1,sa=null,O=null,Tb=0,Xc=-1,Fa=!1,ma=null,na=0,Yc=!1,Ub=!1,Zc=null,fb=null,la=!1,Sb=!1,Ig=1E3,Rb=0,Lg=1;return{computeAsyncExpiration:v,computeExpirationForFiber:y,scheduleWork:u,batchedUpdates:function(a,b){var c=la;la=!0;try{return a(b)}finally{(la=c)||Fa||w(1,null)}},unbatchedUpdates:function(a){if(la&&!Sb){Sb=!0;try{return a()}finally{Sb=!1}}return a()},flushSync:function(a){var b=la;la=!0;try{a:{var c=
	ka;ka=1;try{var d=a();break a}finally{ka=c}d=void 0}return d}finally{la=b,Fa?E("187"):void 0,w(1,null)}},deferredUpdates:function(a){var b=ka;ka=v();try{return a()}finally{ka=b}}}}
	function lf(a){function b(a){a=od(a);return null===a?null:a.stateNode}var c=a.getPublicInstance;a=kf(a);var d=a.computeAsyncExpiration,e=a.computeExpirationForFiber,f=a.scheduleWork;return{createContainer:function(a,b){var c=new Y(3,null,0);a={current:c,containerInfo:a,pendingChildren:null,remainingExpirationTime:0,isReadyForCommit:!1,finishedWork:null,context:null,pendingContext:null,hydrate:b,nextScheduledRoot:null};return c.stateNode=a},updateContainer:function(a,b,c,q){var g=b.current;if(c){c=
	c._reactInternalFiber;var h;b:{2===kd(c)&&2===c.tag?void 0:E("170");for(h=c;3!==h.tag;){if(le(h)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}(h=h["return"])?void 0:E("171")}h=h.stateNode.context}c=le(c)?pe(c,h):h}else c=D;null===b.context?b.context=c:b.pendingContext=c;b=q;b=void 0===b?null:b;q=null!=a&&null!=a.type&&null!=a.type.prototype&&!0===a.type.prototype.unstable_isAsyncReactComponent?d():e(g);He(g,{expirationTime:q,partialState:{element:a},callback:b,isReplace:!1,isForced:!1,
	nextCallback:null,next:null});f(g,q)},batchedUpdates:a.batchedUpdates,unbatchedUpdates:a.unbatchedUpdates,deferredUpdates:a.deferredUpdates,flushSync:a.flushSync,getPublicRootInstance:function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return c(a.child.stateNode);default:return a.child.stateNode}},findHostInstance:b,findHostInstanceWithNoPortals:function(a){a=pd(a);return null===a?null:a.stateNode},injectIntoDevTools:function(a){var c=a.findFiberByHostInstance;return Ce(B({},
	a,{findHostInstanceByFiber:function(a){return b(a)},findFiberByHostInstance:function(a){return c?c(a):null}}))}}}var mf=Object.freeze({default:lf}),nf=mf&&lf||mf,of=nf["default"]?nf["default"]:nf;function pf(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ue,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}var qf="object"===typeof performance&&"function"===typeof performance.now,rf=void 0;rf=qf?function(){return performance.now()}:function(){return Date.now()};
	var sf=void 0,tf=void 0;
	if(l.canUseDOM)if("function"!==typeof requestIdleCallback||"function"!==typeof cancelIdleCallback){var uf=null,vf=!1,wf=-1,xf=!1,yf=0,zf=33,Af=33,Bf;Bf=qf?{didTimeout:!1,timeRemaining:function(){var a=yf-performance.now();return 0<a?a:0}}:{didTimeout:!1,timeRemaining:function(){var a=yf-Date.now();return 0<a?a:0}};var Cf="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===window&&a.data===Cf){vf=!1;a=rf();if(0>=yf-a)if(-1!==wf&&wf<=
	a)Bf.didTimeout=!0;else{xf||(xf=!0,requestAnimationFrame(Df));return}else Bf.didTimeout=!1;wf=-1;a=uf;uf=null;null!==a&&a(Bf)}},!1);var Df=function(a){xf=!1;var b=a-yf+Af;b<Af&&zf<Af?(8>b&&(b=8),Af=b<zf?zf:b):zf=b;yf=a+Af;vf||(vf=!0,window.postMessage(Cf,"*"))};sf=function(a,b){uf=a;null!=b&&"number"===typeof b.timeout&&(wf=rf()+b.timeout);xf||(xf=!0,requestAnimationFrame(Df));return 0};tf=function(){uf=null;vf=!1;wf=-1}}else sf=window.requestIdleCallback,tf=window.cancelIdleCallback;else sf=function(a){return setTimeout(function(){a({timeRemaining:function(){return Infinity}})})},
	tf=function(a){clearTimeout(a)};var Ef=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},Gf={};
	function Hf(a){if(Gf.hasOwnProperty(a))return!0;if(Ff.hasOwnProperty(a))return!1;if(Ef.test(a))return Gf[a]=!0;Ff[a]=!0;return!1}
	function If(a,b,c){var d=wa(b);if(d&&va(b,c)){var e=d.mutationMethod;e?e(a,c):null==c||d.hasBooleanValue&&!c||d.hasNumericValue&&isNaN(c)||d.hasPositiveNumericValue&&1>c||d.hasOverloadedBooleanValue&&!1===c?Jf(a,b):d.mustUseProperty?a[d.propertyName]=c:(b=d.attributeName,(e=d.attributeNamespace)?a.setAttributeNS(e,b,""+c):d.hasBooleanValue||d.hasOverloadedBooleanValue&&!0===c?a.setAttribute(b,""):a.setAttribute(b,""+c))}else Kf(a,b,va(b,c)?c:null)}
	function Kf(a,b,c){Hf(b)&&(null==c?a.removeAttribute(b):a.setAttribute(b,""+c))}function Jf(a,b){var c=wa(b);c?(b=c.mutationMethod)?b(a,void 0):c.mustUseProperty?a[c.propertyName]=c.hasBooleanValue?!1:"":a.removeAttribute(c.attributeName):a.removeAttribute(b)}
	function Lf(a,b){var c=b.value,d=b.checked;return B({type:void 0,step:void 0,min:void 0,max:void 0},b,{defaultChecked:void 0,defaultValue:void 0,value:null!=c?c:a._wrapperState.initialValue,checked:null!=d?d:a._wrapperState.initialChecked})}function Mf(a,b){var c=b.defaultValue;a._wrapperState={initialChecked:null!=b.checked?b.checked:b.defaultChecked,initialValue:null!=b.value?b.value:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}
	function Nf(a,b){b=b.checked;null!=b&&If(a,"checked",b)}function Of(a,b){Nf(a,b);var c=b.value;if(null!=c)if(0===c&&""===a.value)a.value="0";else if("number"===b.type){if(b=parseFloat(a.value)||0,c!=b||c==b&&a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else null==b.value&&null!=b.defaultValue&&a.defaultValue!==""+b.defaultValue&&(a.defaultValue=""+b.defaultValue),null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
	function Pf(a,b){switch(b.type){case "submit":case "reset":break;case "color":case "date":case "datetime":case "datetime-local":case "month":case "time":case "week":a.value="";a.value=a.defaultValue;break;default:a.value=a.value}b=a.name;""!==b&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!a.defaultChecked;""!==b&&(a.name=b)}function Qf(a){var b="";aa.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}
	function Rf(a,b){a=B({children:void 0},b);if(b=Qf(b.children))a.children=b;return a}function Sf(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+c;b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
	function Tf(a,b){var c=b.value;a._wrapperState={initialValue:null!=c?c:b.defaultValue,wasMultiple:!!b.multiple}}function Uf(a,b){null!=b.dangerouslySetInnerHTML?E("91"):void 0;return B({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Vf(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?E("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:E("93"),b=b[0]),c=""+b),null==c&&(c=""));a._wrapperState={initialValue:""+c}}
	function Wf(a,b){var c=b.value;null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=b.defaultValue)}function Xf(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var Yf={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
	function Zf(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $f(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Zf(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var ag=void 0,bg=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Yf.svg||"innerHTML"in a)a.innerHTML=b;else{ag=ag||document.createElement("div");ag.innerHTML="\x3csvg\x3e"+b+"\x3c/svg\x3e";for(b=ag.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
	function cg(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
	var dg={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,
	stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eg=["Webkit","ms","Moz","O"];Object.keys(dg).forEach(function(a){eg.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);dg[b]=dg[a]})});
	function fg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||dg.hasOwnProperty(e)&&dg[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var gg=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function hg(a,b,c){b&&(gg[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?E("137",a,c()):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?E("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:E("61")),null!=b.style&&"object"!==typeof b.style?E("62",c()):void 0)}
	function ig(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var jg=Yf.html,kg=C.thatReturns("");
	function lg(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Hd(a);b=Sa[b];for(var d=0;d<b.length;d++){var e=b[d];c.hasOwnProperty(e)&&c[e]||("topScroll"===e?wd("topScroll","scroll",a):"topFocus"===e||"topBlur"===e?(wd("topFocus","focus",a),wd("topBlur","blur",a),c.topBlur=!0,c.topFocus=!0):"topCancel"===e?(yc("cancel",!0)&&wd("topCancel","cancel",a),c.topCancel=!0):"topClose"===e?(yc("close",!0)&&wd("topClose","close",a),c.topClose=!0):Dd.hasOwnProperty(e)&&U(e,Dd[e],a),c[e]=!0)}}
	var mg={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",
	topWaiting:"waiting"};function ng(a,b,c,d){c=9===c.nodeType?c:c.ownerDocument;d===jg&&(d=Zf(a));d===jg?"script"===a?(a=c.createElement("div"),a.innerHTML="\x3cscript\x3e\x3c/script\x3e",a=a.removeChild(a.firstChild)):a="string"===typeof b.is?c.createElement(a,{is:b.is}):c.createElement(a):a=c.createElementNS(d,a);return a}function og(a,b){return(9===b.nodeType?b:b.ownerDocument).createTextNode(a)}
	function pg(a,b,c,d){var e=ig(b,c);switch(b){case "iframe":case "object":U("topLoad","load",a);var f=c;break;case "video":case "audio":for(f in mg)mg.hasOwnProperty(f)&&U(f,mg[f],a);f=c;break;case "source":U("topError","error",a);f=c;break;case "img":case "image":U("topError","error",a);U("topLoad","load",a);f=c;break;case "form":U("topReset","reset",a);U("topSubmit","submit",a);f=c;break;case "details":U("topToggle","toggle",a);f=c;break;case "input":Mf(a,c);f=Lf(a,c);U("topInvalid","invalid",a);
	lg(d,"onChange");break;case "option":f=Rf(a,c);break;case "select":Tf(a,c);f=B({},c,{value:void 0});U("topInvalid","invalid",a);lg(d,"onChange");break;case "textarea":Vf(a,c);f=Uf(a,c);U("topInvalid","invalid",a);lg(d,"onChange");break;default:f=c}hg(b,f,kg);var g=f,h;for(h in g)if(g.hasOwnProperty(h)){var k=g[h];"style"===h?fg(a,k,kg):"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,null!=k&&bg(a,k)):"children"===h?"string"===typeof k?("textarea"!==b||""!==k)&&cg(a,k):"number"===typeof k&&cg(a,
	""+k):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(Ra.hasOwnProperty(h)?null!=k&&lg(d,h):e?Kf(a,h,k):null!=k&&If(a,h,k))}switch(b){case "input":Bc(a);Pf(a,c);break;case "textarea":Bc(a);Xf(a,c);break;case "option":null!=c.value&&a.setAttribute("value",c.value);break;case "select":a.multiple=!!c.multiple;b=c.value;null!=b?Sf(a,!!c.multiple,b,!1):null!=c.defaultValue&&Sf(a,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof f.onClick&&(a.onclick=
	C)}}
	function sg(a,b,c,d,e){var f=null;switch(b){case "input":c=Lf(a,c);d=Lf(a,d);f=[];break;case "option":c=Rf(a,c);d=Rf(a,d);f=[];break;case "select":c=B({},c,{value:void 0});d=B({},d,{value:void 0});f=[];break;case "textarea":c=Uf(a,c);d=Uf(a,d);f=[];break;default:"function"!==typeof c.onClick&&"function"===typeof d.onClick&&(a.onclick=C)}hg(b,d,kg);var g,h;a=null;for(g in c)if(!d.hasOwnProperty(g)&&c.hasOwnProperty(g)&&null!=c[g])if("style"===g)for(h in b=c[g],b)b.hasOwnProperty(h)&&(a||(a={}),a[h]=
	"");else"dangerouslySetInnerHTML"!==g&&"children"!==g&&"suppressContentEditableWarning"!==g&&"suppressHydrationWarning"!==g&&"autoFocus"!==g&&(Ra.hasOwnProperty(g)?f||(f=[]):(f=f||[]).push(g,null));for(g in d){var k=d[g];b=null!=c?c[g]:void 0;if(d.hasOwnProperty(g)&&k!==b&&(null!=k||null!=b))if("style"===g)if(b){for(h in b)!b.hasOwnProperty(h)||k&&k.hasOwnProperty(h)||(a||(a={}),a[h]="");for(h in k)k.hasOwnProperty(h)&&b[h]!==k[h]&&(a||(a={}),a[h]=k[h])}else a||(f||(f=[]),f.push(g,a)),a=k;else"dangerouslySetInnerHTML"===
	g?(k=k?k.__html:void 0,b=b?b.__html:void 0,null!=k&&b!==k&&(f=f||[]).push(g,""+k)):"children"===g?b===k||"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(g,""+k):"suppressContentEditableWarning"!==g&&"suppressHydrationWarning"!==g&&(Ra.hasOwnProperty(g)?(null!=k&&lg(e,g),f||b===k||(f=[])):(f=f||[]).push(g,k))}a&&(f=f||[]).push("style",a);return f}
	function tg(a,b,c,d,e){"input"===c&&"radio"===e.type&&null!=e.name&&Nf(a,e);ig(c,d);d=ig(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?fg(a,h,kg):"dangerouslySetInnerHTML"===g?bg(a,h):"children"===g?cg(a,h):d?null!=h?Kf(a,g,h):a.removeAttribute(g):null!=h?If(a,g,h):Jf(a,g)}switch(c){case "input":Of(a,e);break;case "textarea":Wf(a,e);break;case "select":a._wrapperState.initialValue=void 0,b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?Sf(a,
	!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?Sf(a,!!e.multiple,e.defaultValue,!0):Sf(a,!!e.multiple,e.multiple?[]:"",!1))}}
	function ug(a,b,c,d,e){switch(b){case "iframe":case "object":U("topLoad","load",a);break;case "video":case "audio":for(var f in mg)mg.hasOwnProperty(f)&&U(f,mg[f],a);break;case "source":U("topError","error",a);break;case "img":case "image":U("topError","error",a);U("topLoad","load",a);break;case "form":U("topReset","reset",a);U("topSubmit","submit",a);break;case "details":U("topToggle","toggle",a);break;case "input":Mf(a,c);U("topInvalid","invalid",a);lg(e,"onChange");break;case "select":Tf(a,c);
	U("topInvalid","invalid",a);lg(e,"onChange");break;case "textarea":Vf(a,c),U("topInvalid","invalid",a),lg(e,"onChange")}hg(b,c,kg);d=null;for(var g in c)c.hasOwnProperty(g)&&(f=c[g],"children"===g?"string"===typeof f?a.textContent!==f&&(d=["children",f]):"number"===typeof f&&a.textContent!==""+f&&(d=["children",""+f]):Ra.hasOwnProperty(g)&&null!=f&&lg(e,g));switch(b){case "input":Bc(a);Pf(a,c);break;case "textarea":Bc(a);Xf(a,c);break;case "select":case "option":break;default:"function"===typeof c.onClick&&
	(a.onclick=C)}return d}function vg(a,b){return a.nodeValue!==b}
	var wg=Object.freeze({createElement:ng,createTextNode:og,setInitialProperties:pg,diffProperties:sg,updateProperties:tg,diffHydratedProperties:ug,diffHydratedText:vg,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(a,b,c){switch(b){case "input":Of(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=
	c.parentNode;c=c.querySelectorAll("input[name\x3d"+JSON.stringify(""+b)+'][type\x3d"radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=rb(d);e?void 0:E("90");Cc(d);Of(d,e)}}}break;case "textarea":Wf(a,c);break;case "select":b=c.value,null!=b&&Sf(a,!!c.multiple,b,!1)}}});nc.injectFiberControlledHostComponent(wg);var xg=null,Mg=null;function Ng(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
	function Og(a){a=a?9===a.nodeType?a.documentElement:a.firstChild:null;return!(!a||1!==a.nodeType||!a.hasAttribute("data-reactroot"))}
	var Z=of({getRootHostContext:function(a){var b=a.nodeType;switch(b){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:$f(null,"");break;default:b=8===b?a.parentNode:a,a=b.namespaceURI||null,b=b.tagName,a=$f(a,b)}return a},getChildHostContext:function(a,b){return $f(a,b)},getPublicInstance:function(a){return a},prepareForCommit:function(){xg=td;var a=da();if(Kd(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{var c=window.getSelection&&window.getSelection();
	if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(z){b=null;break a}var f=0,g=-1,h=-1,k=0,q=0,v=a,y=null;b:for(;;){for(var u;;){v!==b||0!==d&&3!==v.nodeType||(g=f+d);v!==e||0!==c&&3!==v.nodeType||(h=f+c);3===v.nodeType&&(f+=v.nodeValue.length);if(null===(u=v.firstChild))break;y=v;v=u}for(;;){if(v===a)break b;y===b&&++k===d&&(g=f);y===e&&++q===c&&(h=f);if(null!==(u=v.nextSibling))break;v=y;y=v.parentNode}v=u}b=-1===g||-1===h?null:
	{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;Mg={focusedElem:a,selectionRange:b};ud(!1)},resetAfterCommit:function(){var a=Mg,b=da(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&fa(document.documentElement,c)){if(Kd(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(window.getSelection){b=window.getSelection();var e=c[Eb()].length;a=Math.min(d.start,e);d=void 0===d.end?a:Math.min(d.end,e);!b.extend&&a>
	d&&(e=d,d=a,a=e);e=Jd(c,a);var f=Jd(c,d);if(e&&f&&(1!==b.rangeCount||b.anchorNode!==e.node||b.anchorOffset!==e.offset||b.focusNode!==f.node||b.focusOffset!==f.offset)){var g=document.createRange();g.setStart(e.node,e.offset);b.removeAllRanges();a>d?(b.addRange(g),b.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),b.addRange(g))}}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});ia(c);for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=
	a.top}Mg=null;ud(xg);xg=null},createInstance:function(a,b,c,d,e){a=ng(a,b,c,d);a[Q]=e;a[ob]=b;return a},appendInitialChild:function(a,b){a.appendChild(b)},finalizeInitialChildren:function(a,b,c,d){pg(a,b,c,d);a:{switch(b){case "button":case "input":case "select":case "textarea":a=!!c.autoFocus;break a}a=!1}return a},prepareUpdate:function(a,b,c,d,e){return sg(a,b,c,d,e)},shouldSetTextContent:function(a,b){return"textarea"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===
	typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&"string"===typeof b.dangerouslySetInnerHTML.__html},shouldDeprioritizeSubtree:function(a,b){return!!b.hidden},createTextInstance:function(a,b,c,d){a=og(a,b);a[Q]=d;return a},now:rf,mutation:{commitMount:function(a){a.focus()},commitUpdate:function(a,b,c,d,e){a[ob]=e;tg(a,b,c,d,e)},resetTextContent:function(a){a.textContent=""},commitTextUpdate:function(a,b,c){a.nodeValue=c},appendChild:function(a,b){a.appendChild(b)},appendChildToContainer:function(a,
	b){8===a.nodeType?a.parentNode.insertBefore(b,a):a.appendChild(b)},insertBefore:function(a,b,c){a.insertBefore(b,c)},insertInContainerBefore:function(a,b,c){8===a.nodeType?a.parentNode.insertBefore(b,c):a.insertBefore(b,c)},removeChild:function(a,b){a.removeChild(b)},removeChildFromContainer:function(a,b){8===a.nodeType?a.parentNode.removeChild(b):a.removeChild(b)}},hydration:{canHydrateInstance:function(a,b){return 1!==a.nodeType||b.toLowerCase()!==a.nodeName.toLowerCase()?null:a},canHydrateTextInstance:function(a,
	b){return""===b||3!==a.nodeType?null:a},getNextHydratableSibling:function(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a},getFirstHydratableChild:function(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a},hydrateInstance:function(a,b,c,d,e,f){a[Q]=f;a[ob]=c;return ug(a,b,c,e,d)},hydrateTextInstance:function(a,b,c){a[Q]=c;return vg(a,b)},didNotMatchHydratedContainerTextInstance:function(){},didNotMatchHydratedTextInstance:function(){},
	didNotHydrateContainerInstance:function(){},didNotHydrateInstance:function(){},didNotFindHydratableContainerInstance:function(){},didNotFindHydratableContainerTextInstance:function(){},didNotFindHydratableInstance:function(){},didNotFindHydratableTextInstance:function(){}},scheduleDeferredCallback:sf,cancelDeferredCallback:tf,useSyncScheduling:!0});rc=Z.batchedUpdates;
	function Pg(a,b,c,d,e){Ng(c)?void 0:E("200");var f=c._reactRootContainer;if(f)Z.updateContainer(b,f,a,e);else{d=d||Og(c);if(!d)for(f=void 0;f=c.lastChild;)c.removeChild(f);var g=Z.createContainer(c,d);f=c._reactRootContainer=g;Z.unbatchedUpdates(function(){Z.updateContainer(b,g,a,e)})}return Z.getPublicRootInstance(f)}function Qg(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Ng(b)?void 0:E("200");return pf(a,b,null,c)}
	function Rg(a,b){this._reactRootContainer=Z.createContainer(a,b)}Rg.prototype.render=function(a,b){Z.updateContainer(a,this._reactRootContainer,null,b)};Rg.prototype.unmount=function(a){Z.updateContainer(null,this._reactRootContainer,null,a)};
	var Sg={createPortal:Qg,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(b)return Z.findHostInstance(b);"function"===typeof a.render?E("188"):E("213",Object.keys(a))},hydrate:function(a,b,c){return Pg(null,a,b,!0,c)},render:function(a,b,c){return Pg(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?E("38"):void 0;return Pg(a,b,c,!1,d)},unmountComponentAtNode:function(a){Ng(a)?void 0:
	E("40");return a._reactRootContainer?(Z.unbatchedUpdates(function(){Pg(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:Qg,unstable_batchedUpdates:tc,unstable_deferredUpdates:Z.deferredUpdates,flushSync:Z.flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:mb,EventPluginRegistry:Va,EventPropagators:Cb,ReactControlledComponent:qc,ReactDOMComponentTree:sb,ReactDOMEventListener:xd}};
	Z.injectIntoDevTools({findFiberByHostInstance:pb,bundleType:0,version:"16.2.0",rendererPackageName:"react-dom"});var Tg=Object.freeze({default:Sg}),Ug=Tg&&Sg||Tg;module.exports=Ug["default"]?Ug["default"]:Ug;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var emptyFunction = __webpack_require__(6);

	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function listen(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function remove() {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },

	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function capture(target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function remove() {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (false) {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },

	  registerDefault: function registerDefault() {}
	};

	module.exports = EventListener;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	/* eslint-disable fb-www/typeof-undefined */

	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 *
	 * @param {?DOMDocument} doc Defaults to current document.
	 * @return {?DOMElement}
	 */
	function getActiveElement(doc) /*?DOMElement*/{
	  doc = doc || (typeof document !== 'undefined' ? document : undefined);
	  if (typeof doc === 'undefined') {
	    return null;
	  }
	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}

	module.exports = getActiveElement;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	var isTextNode = __webpack_require__(14);

	/*eslint-disable no-bitwise */

	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 */
	function containsNode(outerNode, innerNode) {
	  if (!outerNode || !innerNode) {
	    return false;
	  } else if (outerNode === innerNode) {
	    return true;
	  } else if (isTextNode(outerNode)) {
	    return false;
	  } else if (isTextNode(innerNode)) {
	    return containsNode(outerNode, innerNode.parentNode);
	  } else if ('contains' in outerNode) {
	    return outerNode.contains(innerNode);
	  } else if (outerNode.compareDocumentPosition) {
	    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	  } else {
	    return false;
	  }
	}

	module.exports = containsNode;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	var isNode = __webpack_require__(15);

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}

	module.exports = isTextNode;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */

	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	function isNode(object) {
	  var doc = object ? object.ownerDocument || object : document;
	  var defaultView = doc.defaultView || window;
	  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}

	module.exports = isNode;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * @param {DOMElement} node input/textarea to focus
	 */

	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch (e) {}
	}

	module.exports = focusNode;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _example_components = __webpack_require__(18);

	var _example_components2 = _interopRequireDefault(_example_components);

	var _hero_example = __webpack_require__(213);

	var _hero_example2 = _interopRequireDefault(_hero_example);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Root = function (_React$Component) {
	  _inherits(Root, _React$Component);

	  function Root() {
	    _classCallCheck(this, Root);

	    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	  }

	  _createClass(Root, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "hero" },
	          _react2.default.createElement(
	            "div",
	            { className: "hero__content" },
	            _react2.default.createElement(
	              "h1",
	              { className: "hero__title" },
	              "React Add to Calendar Button"
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "hero__crafted-by" },
	              _react2.default.createElement(
	                "a",
	                { href: "http://4one.io", className: "hero__crafted-by-link" },
	                "Crafted by Jason Salzman"
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "hero__example" },
	              _react2.default.createElement(_hero_example2.default, null)
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "wrapper" },
	          _react2.default.createElement(
	            "h1",
	            null,
	            "React Add to Calendar Button"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement(
	              "a",
	              { href: "https://npmjs.org/package/react-add-to-calendar" },
	              _react2.default.createElement("img", {
	                src: "https://badge.fury.io/js/react-add-to-calendar.svg",
	                className: "badge" })
	            ),
	            "\xA0\xA0",
	            _react2.default.createElement(
	              "a",
	              { href: "https://travis-ci.org/jasonsalzman/react-add-to-calendar" },
	              _react2.default.createElement("img", {
	                src: "https://travis-ci.org/jasonsalzman/react-add-to-calendar.svg?branch=master",
	                className: "badge" })
	            ),
	            "\xA0\xA0",
	            _react2.default.createElement(
	              "a",
	              { href: "https://david-dm.org/jasonsalzman/react-add-to-calendar" },
	              _react2.default.createElement("img", {
	                src: "https://img.shields.io/david/strongloop/express.svg?maxAge=2592000",
	                className: "badge" })
	            ),
	            "\xA0\xA0",
	            _react2.default.createElement(
	              "a",
	              { href: "https://david-dm.org/jasonsalzman/react-add-to-calendar" },
	              _react2.default.createElement("img", {
	                src: "https://img.shields.io/david/peer/webcomponents/generator-element.svg?maxAge=2592000",
	                className: "badge" })
	            ),
	            "\xA0\xA0",
	            _react2.default.createElement(
	              "a",
	              { href: "https://npmjs.org/package/react-add-to-calendar" },
	              _react2.default.createElement("img", {
	                src: "https://img.shields.io/npm/dm/react-add-to-calendar.svg",
	                className: "badge" })
	            )
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "A simple, customizable, and reusable Add to Calendar button component for React."
	          ),
	          _react2.default.createElement(
	            "h2",
	            null,
	            "Installation"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "The package can be installed via NPM:"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement(
	              "code",
	              null,
	              "npm install react-add-to-calendar --save"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "wrapper" },
	          _react2.default.createElement(_example_components2.default, null)
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "https://github.com/jasonsalzman/react-add-to-calendar/" },
	          _react2.default.createElement("img", {
	            className: "github-ribbon",
	            src: "images/ribbon.png",
	            alt: "Fork me on GitHub" })
	        )
	      );
	    }
	  }]);

	  return Root;
	}(_react2.default.Component);

	exports.default = Root;


	Root.displayName = "Root";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _highlight = __webpack_require__(19);

	var _highlight2 = _interopRequireDefault(_highlight);

	var _default = __webpack_require__(195);

	var _default2 = _interopRequireDefault(_default);

	var _changeLabel = __webpack_require__(203);

	var _changeLabel2 = _interopRequireDefault(_changeLabel);

	var _changeTemplate = __webpack_require__(204);

	var _changeTemplate2 = _interopRequireDefault(_changeTemplate);

	var _textOnlyTemplate = __webpack_require__(205);

	var _textOnlyTemplate2 = _interopRequireDefault(_textOnlyTemplate);

	var _textOnlyDropdown = __webpack_require__(206);

	var _textOnlyDropdown2 = _interopRequireDefault(_textOnlyDropdown);

	var _changeDropdownOrder = __webpack_require__(207);

	var _changeDropdownOrder2 = _interopRequireDefault(_changeDropdownOrder);

	var _removeDropdownItem = __webpack_require__(208);

	var _removeDropdownItem2 = _interopRequireDefault(_removeDropdownItem);

	var _changeDropdownLabels = __webpack_require__(209);

	var _changeDropdownLabels2 = _interopRequireDefault(_changeDropdownLabels);

	var _code_example_component = __webpack_require__(210);

	var _code_example_component2 = _interopRequireDefault(_code_example_component);

	__webpack_require__(211);

	__webpack_require__(212);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var examples = [{
	  title: "Default",
	  component: _default2.default
	}, {
	  title: "Change Button Label",
	  component: _changeLabel2.default
	}, {
	  title: "Change Button Template",
	  component: _changeTemplate2.default
	}, {
	  title: "Text Only Button Template",
	  component: _textOnlyTemplate2.default
	}, {
	  title: "Text Only Dropdown Items",
	  component: _textOnlyDropdown2.default
	}, {
	  title: "Change Dropdown Order",
	  component: _changeDropdownOrder2.default
	}, {
	  title: "Remove Dropdown Item",
	  component: _removeDropdownItem2.default
	}, {
	  title: "Change Dropdown Labels",
	  component: _changeDropdownLabels2.default
	}];

	var ExampleComponents = function (_React$Component) {
	  _inherits(ExampleComponents, _React$Component);

	  function ExampleComponents() {
	    _classCallCheck(this, ExampleComponents);

	    return _possibleConstructorReturn(this, (ExampleComponents.__proto__ || Object.getPrototypeOf(ExampleComponents)).apply(this, arguments));
	  }

	  _createClass(ExampleComponents, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      _highlight2.default.initHighlightingOnLoad();
	    }
	  }, {
	    key: "renderExamples",
	    value: function renderExamples() {
	      return examples.map(function (example, index) {
	        return _react2.default.createElement(
	          _code_example_component2.default,
	          {
	            key: "example-" + index,
	            id: index,
	            title: example.title },
	          _react2.default.createElement(example.component, null)
	        );
	      });
	    }
	  }, {
	    key: "renderLeftColumn",
	    value: function renderLeftColumn() {
	      return examples.map(function (example, index) {
	        return _react2.default.createElement(
	          "li",
	          { className: "examples__navigation-item", key: "link-" + index },
	          _react2.default.createElement(
	            "a",
	            { href: "#example-" + index },
	            example.title
	          )
	        );
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h1",
	          null,
	          "Examples"
	        ),
	        _react2.default.createElement(
	          "ul",
	          { className: "examples__navigation" },
	          this.renderLeftColumn()
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "examples" },
	          this.renderExamples()
	        )
	      );
	    }
	  }]);

	  return ExampleComponents;
	}(_react2.default.Component);

	exports.default = ExampleComponents;


	ExampleComponents.displayName = "exampleComponents";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var hljs = __webpack_require__(20);

	hljs.registerLanguage('1c', __webpack_require__(21));
	hljs.registerLanguage('abnf', __webpack_require__(22));
	hljs.registerLanguage('accesslog', __webpack_require__(23));
	hljs.registerLanguage('actionscript', __webpack_require__(24));
	hljs.registerLanguage('ada', __webpack_require__(25));
	hljs.registerLanguage('apache', __webpack_require__(26));
	hljs.registerLanguage('applescript', __webpack_require__(27));
	hljs.registerLanguage('cpp', __webpack_require__(28));
	hljs.registerLanguage('arduino', __webpack_require__(29));
	hljs.registerLanguage('armasm', __webpack_require__(30));
	hljs.registerLanguage('xml', __webpack_require__(31));
	hljs.registerLanguage('asciidoc', __webpack_require__(32));
	hljs.registerLanguage('aspectj', __webpack_require__(33));
	hljs.registerLanguage('autohotkey', __webpack_require__(34));
	hljs.registerLanguage('autoit', __webpack_require__(35));
	hljs.registerLanguage('avrasm', __webpack_require__(36));
	hljs.registerLanguage('awk', __webpack_require__(37));
	hljs.registerLanguage('axapta', __webpack_require__(38));
	hljs.registerLanguage('bash', __webpack_require__(39));
	hljs.registerLanguage('basic', __webpack_require__(40));
	hljs.registerLanguage('bnf', __webpack_require__(41));
	hljs.registerLanguage('brainfuck', __webpack_require__(42));
	hljs.registerLanguage('cal', __webpack_require__(43));
	hljs.registerLanguage('capnproto', __webpack_require__(44));
	hljs.registerLanguage('ceylon', __webpack_require__(45));
	hljs.registerLanguage('clean', __webpack_require__(46));
	hljs.registerLanguage('clojure', __webpack_require__(47));
	hljs.registerLanguage('clojure-repl', __webpack_require__(48));
	hljs.registerLanguage('cmake', __webpack_require__(49));
	hljs.registerLanguage('coffeescript', __webpack_require__(50));
	hljs.registerLanguage('coq', __webpack_require__(51));
	hljs.registerLanguage('cos', __webpack_require__(52));
	hljs.registerLanguage('crmsh', __webpack_require__(53));
	hljs.registerLanguage('crystal', __webpack_require__(54));
	hljs.registerLanguage('cs', __webpack_require__(55));
	hljs.registerLanguage('csp', __webpack_require__(56));
	hljs.registerLanguage('css', __webpack_require__(57));
	hljs.registerLanguage('d', __webpack_require__(58));
	hljs.registerLanguage('markdown', __webpack_require__(59));
	hljs.registerLanguage('dart', __webpack_require__(60));
	hljs.registerLanguage('delphi', __webpack_require__(61));
	hljs.registerLanguage('diff', __webpack_require__(62));
	hljs.registerLanguage('django', __webpack_require__(63));
	hljs.registerLanguage('dns', __webpack_require__(64));
	hljs.registerLanguage('dockerfile', __webpack_require__(65));
	hljs.registerLanguage('dos', __webpack_require__(66));
	hljs.registerLanguage('dsconfig', __webpack_require__(67));
	hljs.registerLanguage('dts', __webpack_require__(68));
	hljs.registerLanguage('dust', __webpack_require__(69));
	hljs.registerLanguage('ebnf', __webpack_require__(70));
	hljs.registerLanguage('elixir', __webpack_require__(71));
	hljs.registerLanguage('elm', __webpack_require__(72));
	hljs.registerLanguage('ruby', __webpack_require__(73));
	hljs.registerLanguage('erb', __webpack_require__(74));
	hljs.registerLanguage('erlang-repl', __webpack_require__(75));
	hljs.registerLanguage('erlang', __webpack_require__(76));
	hljs.registerLanguage('excel', __webpack_require__(77));
	hljs.registerLanguage('fix', __webpack_require__(78));
	hljs.registerLanguage('flix', __webpack_require__(79));
	hljs.registerLanguage('fortran', __webpack_require__(80));
	hljs.registerLanguage('fsharp', __webpack_require__(81));
	hljs.registerLanguage('gams', __webpack_require__(82));
	hljs.registerLanguage('gauss', __webpack_require__(83));
	hljs.registerLanguage('gcode', __webpack_require__(84));
	hljs.registerLanguage('gherkin', __webpack_require__(85));
	hljs.registerLanguage('glsl', __webpack_require__(86));
	hljs.registerLanguage('go', __webpack_require__(87));
	hljs.registerLanguage('golo', __webpack_require__(88));
	hljs.registerLanguage('gradle', __webpack_require__(89));
	hljs.registerLanguage('groovy', __webpack_require__(90));
	hljs.registerLanguage('haml', __webpack_require__(91));
	hljs.registerLanguage('handlebars', __webpack_require__(92));
	hljs.registerLanguage('haskell', __webpack_require__(93));
	hljs.registerLanguage('haxe', __webpack_require__(94));
	hljs.registerLanguage('hsp', __webpack_require__(95));
	hljs.registerLanguage('htmlbars', __webpack_require__(96));
	hljs.registerLanguage('http', __webpack_require__(97));
	hljs.registerLanguage('hy', __webpack_require__(98));
	hljs.registerLanguage('inform7', __webpack_require__(99));
	hljs.registerLanguage('ini', __webpack_require__(100));
	hljs.registerLanguage('irpf90', __webpack_require__(101));
	hljs.registerLanguage('java', __webpack_require__(102));
	hljs.registerLanguage('javascript', __webpack_require__(103));
	hljs.registerLanguage('jboss-cli', __webpack_require__(104));
	hljs.registerLanguage('json', __webpack_require__(105));
	hljs.registerLanguage('julia', __webpack_require__(106));
	hljs.registerLanguage('kotlin', __webpack_require__(107));
	hljs.registerLanguage('lasso', __webpack_require__(108));
	hljs.registerLanguage('ldif', __webpack_require__(109));
	hljs.registerLanguage('leaf', __webpack_require__(110));
	hljs.registerLanguage('less', __webpack_require__(111));
	hljs.registerLanguage('lisp', __webpack_require__(112));
	hljs.registerLanguage('livecodeserver', __webpack_require__(113));
	hljs.registerLanguage('livescript', __webpack_require__(114));
	hljs.registerLanguage('llvm', __webpack_require__(115));
	hljs.registerLanguage('lsl', __webpack_require__(116));
	hljs.registerLanguage('lua', __webpack_require__(117));
	hljs.registerLanguage('makefile', __webpack_require__(118));
	hljs.registerLanguage('mathematica', __webpack_require__(119));
	hljs.registerLanguage('matlab', __webpack_require__(120));
	hljs.registerLanguage('maxima', __webpack_require__(121));
	hljs.registerLanguage('mel', __webpack_require__(122));
	hljs.registerLanguage('mercury', __webpack_require__(123));
	hljs.registerLanguage('mipsasm', __webpack_require__(124));
	hljs.registerLanguage('mizar', __webpack_require__(125));
	hljs.registerLanguage('perl', __webpack_require__(126));
	hljs.registerLanguage('mojolicious', __webpack_require__(127));
	hljs.registerLanguage('monkey', __webpack_require__(128));
	hljs.registerLanguage('moonscript', __webpack_require__(129));
	hljs.registerLanguage('n1ql', __webpack_require__(130));
	hljs.registerLanguage('nginx', __webpack_require__(131));
	hljs.registerLanguage('nimrod', __webpack_require__(132));
	hljs.registerLanguage('nix', __webpack_require__(133));
	hljs.registerLanguage('nsis', __webpack_require__(134));
	hljs.registerLanguage('objectivec', __webpack_require__(135));
	hljs.registerLanguage('ocaml', __webpack_require__(136));
	hljs.registerLanguage('openscad', __webpack_require__(137));
	hljs.registerLanguage('oxygene', __webpack_require__(138));
	hljs.registerLanguage('parser3', __webpack_require__(139));
	hljs.registerLanguage('pf', __webpack_require__(140));
	hljs.registerLanguage('php', __webpack_require__(141));
	hljs.registerLanguage('pony', __webpack_require__(142));
	hljs.registerLanguage('powershell', __webpack_require__(143));
	hljs.registerLanguage('processing', __webpack_require__(144));
	hljs.registerLanguage('profile', __webpack_require__(145));
	hljs.registerLanguage('prolog', __webpack_require__(146));
	hljs.registerLanguage('protobuf', __webpack_require__(147));
	hljs.registerLanguage('puppet', __webpack_require__(148));
	hljs.registerLanguage('purebasic', __webpack_require__(149));
	hljs.registerLanguage('python', __webpack_require__(150));
	hljs.registerLanguage('q', __webpack_require__(151));
	hljs.registerLanguage('qml', __webpack_require__(152));
	hljs.registerLanguage('r', __webpack_require__(153));
	hljs.registerLanguage('rib', __webpack_require__(154));
	hljs.registerLanguage('roboconf', __webpack_require__(155));
	hljs.registerLanguage('rsl', __webpack_require__(156));
	hljs.registerLanguage('ruleslanguage', __webpack_require__(157));
	hljs.registerLanguage('rust', __webpack_require__(158));
	hljs.registerLanguage('scala', __webpack_require__(159));
	hljs.registerLanguage('scheme', __webpack_require__(160));
	hljs.registerLanguage('scilab', __webpack_require__(161));
	hljs.registerLanguage('scss', __webpack_require__(162));
	hljs.registerLanguage('shell', __webpack_require__(163));
	hljs.registerLanguage('smali', __webpack_require__(164));
	hljs.registerLanguage('smalltalk', __webpack_require__(165));
	hljs.registerLanguage('sml', __webpack_require__(166));
	hljs.registerLanguage('sqf', __webpack_require__(167));
	hljs.registerLanguage('sql', __webpack_require__(168));
	hljs.registerLanguage('stan', __webpack_require__(169));
	hljs.registerLanguage('stata', __webpack_require__(170));
	hljs.registerLanguage('step21', __webpack_require__(171));
	hljs.registerLanguage('stylus', __webpack_require__(172));
	hljs.registerLanguage('subunit', __webpack_require__(173));
	hljs.registerLanguage('swift', __webpack_require__(174));
	hljs.registerLanguage('taggerscript', __webpack_require__(175));
	hljs.registerLanguage('yaml', __webpack_require__(176));
	hljs.registerLanguage('tap', __webpack_require__(177));
	hljs.registerLanguage('tcl', __webpack_require__(178));
	hljs.registerLanguage('tex', __webpack_require__(179));
	hljs.registerLanguage('thrift', __webpack_require__(180));
	hljs.registerLanguage('tp', __webpack_require__(181));
	hljs.registerLanguage('twig', __webpack_require__(182));
	hljs.registerLanguage('typescript', __webpack_require__(183));
	hljs.registerLanguage('vala', __webpack_require__(184));
	hljs.registerLanguage('vbnet', __webpack_require__(185));
	hljs.registerLanguage('vbscript', __webpack_require__(186));
	hljs.registerLanguage('vbscript-html', __webpack_require__(187));
	hljs.registerLanguage('verilog', __webpack_require__(188));
	hljs.registerLanguage('vhdl', __webpack_require__(189));
	hljs.registerLanguage('vim', __webpack_require__(190));
	hljs.registerLanguage('x86asm', __webpack_require__(191));
	hljs.registerLanguage('xl', __webpack_require__(192));
	hljs.registerLanguage('xquery', __webpack_require__(193));
	hljs.registerLanguage('zephir', __webpack_require__(194));

	module.exports = hljs;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	Syntax highlighting with language autodetection.
	https://highlightjs.org/
	*/

	(function(factory) {

	  // Find the global object for export to both the browser and web workers.
	  var globalObject = typeof window === 'object' && window ||
	                     typeof self === 'object' && self;

	  // Setup highlight.js for different environments. First is Node.js or
	  // CommonJS.
	  if(true) {
	    factory(exports);
	  } else if(globalObject) {
	    // Export hljs globally even when using AMD for cases when this script
	    // is loaded with others that may still expect a global hljs.
	    globalObject.hljs = factory({});

	    // Finally register the global hljs with AMD.
	    if(typeof define === 'function' && define.amd) {
	      define([], function() {
	        return globalObject.hljs;
	      });
	    }
	  }

	}(function(hljs) {
	  // Convenience variables for build-in objects
	  var ArrayProto = [],
	      objectKeys = Object.keys;

	  // Global internal variables used within the highlight.js library.
	  var languages = {},
	      aliases   = {};

	  // Regular expressions used throughout the highlight.js library.
	  var noHighlightRe    = /^(no-?highlight|plain|text)$/i,
	      languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
	      fixMarkupRe      = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

	  var spanEndTag = '</span>';

	  // Global options used when within external APIs. This is modified when
	  // calling the `hljs.configure` function.
	  var options = {
	    classPrefix: 'hljs-',
	    tabReplace: null,
	    useBR: false,
	    languages: undefined
	  };


	  /* Utility functions */

	  function escape(value) {
	    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	  }

	  function tag(node) {
	    return node.nodeName.toLowerCase();
	  }

	  function testRe(re, lexeme) {
	    var match = re && re.exec(lexeme);
	    return match && match.index === 0;
	  }

	  function isNotHighlighted(language) {
	    return noHighlightRe.test(language);
	  }

	  function blockLanguage(block) {
	    var i, match, length, _class;
	    var classes = block.className + ' ';

	    classes += block.parentNode ? block.parentNode.className : '';

	    // language-* takes precedence over non-prefixed class names.
	    match = languagePrefixRe.exec(classes);
	    if (match) {
	      return getLanguage(match[1]) ? match[1] : 'no-highlight';
	    }

	    classes = classes.split(/\s+/);

	    for (i = 0, length = classes.length; i < length; i++) {
	      _class = classes[i]

	      if (isNotHighlighted(_class) || getLanguage(_class)) {
	        return _class;
	      }
	    }
	  }

	  function inherit(parent) {  // inherit(parent, override_obj, override_obj, ...)
	    var key;
	    var result = {};
	    var objects = Array.prototype.slice.call(arguments, 1);

	    for (key in parent)
	      result[key] = parent[key];
	    objects.forEach(function(obj) {
	      for (key in obj)
	        result[key] = obj[key];
	    });
	    return result;
	  }

	  /* Stream merging */

	  function nodeStream(node) {
	    var result = [];
	    (function _nodeStream(node, offset) {
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        if (child.nodeType === 3)
	          offset += child.nodeValue.length;
	        else if (child.nodeType === 1) {
	          result.push({
	            event: 'start',
	            offset: offset,
	            node: child
	          });
	          offset = _nodeStream(child, offset);
	          // Prevent void elements from having an end tag that would actually
	          // double them in the output. There are more void elements in HTML
	          // but we list only those realistically expected in code display.
	          if (!tag(child).match(/br|hr|img|input/)) {
	            result.push({
	              event: 'stop',
	              offset: offset,
	              node: child
	            });
	          }
	        }
	      }
	      return offset;
	    })(node, 0);
	    return result;
	  }

	  function mergeStreams(original, highlighted, value) {
	    var processed = 0;
	    var result = '';
	    var nodeStack = [];

	    function selectStream() {
	      if (!original.length || !highlighted.length) {
	        return original.length ? original : highlighted;
	      }
	      if (original[0].offset !== highlighted[0].offset) {
	        return (original[0].offset < highlighted[0].offset) ? original : highlighted;
	      }

	      /*
	      To avoid starting the stream just before it should stop the order is
	      ensured that original always starts first and closes last:

	      if (event1 == 'start' && event2 == 'start')
	        return original;
	      if (event1 == 'start' && event2 == 'stop')
	        return highlighted;
	      if (event1 == 'stop' && event2 == 'start')
	        return original;
	      if (event1 == 'stop' && event2 == 'stop')
	        return highlighted;

	      ... which is collapsed to:
	      */
	      return highlighted[0].event === 'start' ? original : highlighted;
	    }

	    function open(node) {
	      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value).replace('"', '&quot;') + '"';}
	      result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
	    }

	    function close(node) {
	      result += '</' + tag(node) + '>';
	    }

	    function render(event) {
	      (event.event === 'start' ? open : close)(event.node);
	    }

	    while (original.length || highlighted.length) {
	      var stream = selectStream();
	      result += escape(value.substring(processed, stream[0].offset));
	      processed = stream[0].offset;
	      if (stream === original) {
	        /*
	        On any opening or closing tag of the original markup we first close
	        the entire highlighted node stack, then render the original tag along
	        with all the following original tags at the same offset and then
	        reopen all the tags on the highlighted stack.
	        */
	        nodeStack.reverse().forEach(close);
	        do {
	          render(stream.splice(0, 1)[0]);
	          stream = selectStream();
	        } while (stream === original && stream.length && stream[0].offset === processed);
	        nodeStack.reverse().forEach(open);
	      } else {
	        if (stream[0].event === 'start') {
	          nodeStack.push(stream[0].node);
	        } else {
	          nodeStack.pop();
	        }
	        render(stream.splice(0, 1)[0]);
	      }
	    }
	    return result + escape(value.substr(processed));
	  }

	  /* Initialization */

	  function expand_mode(mode) {
	    if (mode.variants && !mode.cached_variants) {
	      mode.cached_variants = mode.variants.map(function(variant) {
	        return inherit(mode, {variants: null}, variant);
	      });
	    }
	    return mode.cached_variants || (mode.endsWithParent && [inherit(mode)]) || [mode];
	  }

	  function compileLanguage(language) {

	    function reStr(re) {
	        return (re && re.source) || re;
	    }

	    function langRe(value, global) {
	      return new RegExp(
	        reStr(value),
	        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
	      );
	    }

	    function compileMode(mode, parent) {
	      if (mode.compiled)
	        return;
	      mode.compiled = true;

	      mode.keywords = mode.keywords || mode.beginKeywords;
	      if (mode.keywords) {
	        var compiled_keywords = {};

	        var flatten = function(className, str) {
	          if (language.case_insensitive) {
	            str = str.toLowerCase();
	          }
	          str.split(' ').forEach(function(kw) {
	            var pair = kw.split('|');
	            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
	          });
	        };

	        if (typeof mode.keywords === 'string') { // string
	          flatten('keyword', mode.keywords);
	        } else {
	          objectKeys(mode.keywords).forEach(function (className) {
	            flatten(className, mode.keywords[className]);
	          });
	        }
	        mode.keywords = compiled_keywords;
	      }
	      mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

	      if (parent) {
	        if (mode.beginKeywords) {
	          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
	        }
	        if (!mode.begin)
	          mode.begin = /\B|\b/;
	        mode.beginRe = langRe(mode.begin);
	        if (!mode.end && !mode.endsWithParent)
	          mode.end = /\B|\b/;
	        if (mode.end)
	          mode.endRe = langRe(mode.end);
	        mode.terminator_end = reStr(mode.end) || '';
	        if (mode.endsWithParent && parent.terminator_end)
	          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
	      }
	      if (mode.illegal)
	        mode.illegalRe = langRe(mode.illegal);
	      if (mode.relevance == null)
	        mode.relevance = 1;
	      if (!mode.contains) {
	        mode.contains = [];
	      }
	      mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
	        return expand_mode(c === 'self' ? mode : c)
	      }));
	      mode.contains.forEach(function(c) {compileMode(c, mode);});

	      if (mode.starts) {
	        compileMode(mode.starts, parent);
	      }

	      var terminators =
	        mode.contains.map(function(c) {
	          return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
	        })
	        .concat([mode.terminator_end, mode.illegal])
	        .map(reStr)
	        .filter(Boolean);
	      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};
	    }

	    compileMode(language);
	  }

	  /*
	  Core highlighting function. Accepts a language name, or an alias, and a
	  string with the code to highlight. Returns an object with the following
	  properties:

	  - relevance (int)
	  - value (an HTML string with highlighting markup)

	  */
	  function highlight(name, value, ignore_illegals, continuation) {

	    function subMode(lexeme, mode) {
	      var i, length;

	      for (i = 0, length = mode.contains.length; i < length; i++) {
	        if (testRe(mode.contains[i].beginRe, lexeme)) {
	          return mode.contains[i];
	        }
	      }
	    }

	    function endOfMode(mode, lexeme) {
	      if (testRe(mode.endRe, lexeme)) {
	        while (mode.endsParent && mode.parent) {
	          mode = mode.parent;
	        }
	        return mode;
	      }
	      if (mode.endsWithParent) {
	        return endOfMode(mode.parent, lexeme);
	      }
	    }

	    function isIllegal(lexeme, mode) {
	      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
	    }

	    function keywordMatch(mode, match) {
	      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
	      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
	    }

	    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
	      var classPrefix = noPrefix ? '' : options.classPrefix,
	          openSpan    = '<span class="' + classPrefix,
	          closeSpan   = leaveOpen ? '' : spanEndTag

	      openSpan += classname + '">';

	      return openSpan + insideSpan + closeSpan;
	    }

	    function processKeywords() {
	      var keyword_match, last_index, match, result;

	      if (!top.keywords)
	        return escape(mode_buffer);

	      result = '';
	      last_index = 0;
	      top.lexemesRe.lastIndex = 0;
	      match = top.lexemesRe.exec(mode_buffer);

	      while (match) {
	        result += escape(mode_buffer.substring(last_index, match.index));
	        keyword_match = keywordMatch(top, match);
	        if (keyword_match) {
	          relevance += keyword_match[1];
	          result += buildSpan(keyword_match[0], escape(match[0]));
	        } else {
	          result += escape(match[0]);
	        }
	        last_index = top.lexemesRe.lastIndex;
	        match = top.lexemesRe.exec(mode_buffer);
	      }
	      return result + escape(mode_buffer.substr(last_index));
	    }

	    function processSubLanguage() {
	      var explicit = typeof top.subLanguage === 'string';
	      if (explicit && !languages[top.subLanguage]) {
	        return escape(mode_buffer);
	      }

	      var result = explicit ?
	                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :
	                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

	      // Counting embedded language score towards the host language may be disabled
	      // with zeroing the containing mode relevance. Usecase in point is Markdown that
	      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
	      // score.
	      if (top.relevance > 0) {
	        relevance += result.relevance;
	      }
	      if (explicit) {
	        continuations[top.subLanguage] = result.top;
	      }
	      return buildSpan(result.language, result.value, false, true);
	    }

	    function processBuffer() {
	      result += (top.subLanguage != null ? processSubLanguage() : processKeywords());
	      mode_buffer = '';
	    }

	    function startNewMode(mode) {
	      result += mode.className? buildSpan(mode.className, '', true): '';
	      top = Object.create(mode, {parent: {value: top}});
	    }

	    function processLexeme(buffer, lexeme) {

	      mode_buffer += buffer;

	      if (lexeme == null) {
	        processBuffer();
	        return 0;
	      }

	      var new_mode = subMode(lexeme, top);
	      if (new_mode) {
	        if (new_mode.skip) {
	          mode_buffer += lexeme;
	        } else {
	          if (new_mode.excludeBegin) {
	            mode_buffer += lexeme;
	          }
	          processBuffer();
	          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
	            mode_buffer = lexeme;
	          }
	        }
	        startNewMode(new_mode, lexeme);
	        return new_mode.returnBegin ? 0 : lexeme.length;
	      }

	      var end_mode = endOfMode(top, lexeme);
	      if (end_mode) {
	        var origin = top;
	        if (origin.skip) {
	          mode_buffer += lexeme;
	        } else {
	          if (!(origin.returnEnd || origin.excludeEnd)) {
	            mode_buffer += lexeme;
	          }
	          processBuffer();
	          if (origin.excludeEnd) {
	            mode_buffer = lexeme;
	          }
	        }
	        do {
	          if (top.className) {
	            result += spanEndTag;
	          }
	          if (!top.skip) {
	            relevance += top.relevance;
	          }
	          top = top.parent;
	        } while (top !== end_mode.parent);
	        if (end_mode.starts) {
	          startNewMode(end_mode.starts, '');
	        }
	        return origin.returnEnd ? 0 : lexeme.length;
	      }

	      if (isIllegal(lexeme, top))
	        throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

	      /*
	      Parser should not reach this point as all types of lexemes should be caught
	      earlier, but if it does due to some bug make sure it advances at least one
	      character forward to prevent infinite looping.
	      */
	      mode_buffer += lexeme;
	      return lexeme.length || 1;
	    }

	    var language = getLanguage(name);
	    if (!language) {
	      throw new Error('Unknown language: "' + name + '"');
	    }

	    compileLanguage(language);
	    var top = continuation || language;
	    var continuations = {}; // keep continuations for sub-languages
	    var result = '', current;
	    for(current = top; current !== language; current = current.parent) {
	      if (current.className) {
	        result = buildSpan(current.className, '', true) + result;
	      }
	    }
	    var mode_buffer = '';
	    var relevance = 0;
	    try {
	      var match, count, index = 0;
	      while (true) {
	        top.terminators.lastIndex = index;
	        match = top.terminators.exec(value);
	        if (!match)
	          break;
	        count = processLexeme(value.substring(index, match.index), match[0]);
	        index = match.index + count;
	      }
	      processLexeme(value.substr(index));
	      for(current = top; current.parent; current = current.parent) { // close dangling modes
	        if (current.className) {
	          result += spanEndTag;
	        }
	      }
	      return {
	        relevance: relevance,
	        value: result,
	        language: name,
	        top: top
	      };
	    } catch (e) {
	      if (e.message && e.message.indexOf('Illegal') !== -1) {
	        return {
	          relevance: 0,
	          value: escape(value)
	        };
	      } else {
	        throw e;
	      }
	    }
	  }

	  /*
	  Highlighting with language detection. Accepts a string with the code to
	  highlight. Returns an object with the following properties:

	  - language (detected language)
	  - relevance (int)
	  - value (an HTML string with highlighting markup)
	  - second_best (object with the same structure for second-best heuristically
	    detected language, may be absent)

	  */
	  function highlightAuto(text, languageSubset) {
	    languageSubset = languageSubset || options.languages || objectKeys(languages);
	    var result = {
	      relevance: 0,
	      value: escape(text)
	    };
	    var second_best = result;
	    languageSubset.filter(getLanguage).forEach(function(name) {
	      var current = highlight(name, text, false);
	      current.language = name;
	      if (current.relevance > second_best.relevance) {
	        second_best = current;
	      }
	      if (current.relevance > result.relevance) {
	        second_best = result;
	        result = current;
	      }
	    });
	    if (second_best.language) {
	      result.second_best = second_best;
	    }
	    return result;
	  }

	  /*
	  Post-processing of the highlighted markup:

	  - replace TABs with something more useful
	  - replace real line-breaks with '<br>' for non-pre containers

	  */
	  function fixMarkup(value) {
	    return !(options.tabReplace || options.useBR)
	      ? value
	      : value.replace(fixMarkupRe, function(match, p1) {
	          if (options.useBR && match === '\n') {
	            return '<br>';
	          } else if (options.tabReplace) {
	            return p1.replace(/\t/g, options.tabReplace);
	          }
	          return '';
	      });
	  }

	  function buildClassName(prevClassName, currentLang, resultLang) {
	    var language = currentLang ? aliases[currentLang] : resultLang,
	        result   = [prevClassName.trim()];

	    if (!prevClassName.match(/\bhljs\b/)) {
	      result.push('hljs');
	    }

	    if (prevClassName.indexOf(language) === -1) {
	      result.push(language);
	    }

	    return result.join(' ').trim();
	  }

	  /*
	  Applies highlighting to a DOM node containing code. Accepts a DOM node and
	  two optional parameters for fixMarkup.
	  */
	  function highlightBlock(block) {
	    var node, originalStream, result, resultNode, text;
	    var language = blockLanguage(block);

	    if (isNotHighlighted(language))
	        return;

	    if (options.useBR) {
	      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
	    } else {
	      node = block;
	    }
	    text = node.textContent;
	    result = language ? highlight(language, text, true) : highlightAuto(text);

	    originalStream = nodeStream(node);
	    if (originalStream.length) {
	      resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      resultNode.innerHTML = result.value;
	      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
	    }
	    result.value = fixMarkup(result.value);

	    block.innerHTML = result.value;
	    block.className = buildClassName(block.className, language, result.language);
	    block.result = {
	      language: result.language,
	      re: result.relevance
	    };
	    if (result.second_best) {
	      block.second_best = {
	        language: result.second_best.language,
	        re: result.second_best.relevance
	      };
	    }
	  }

	  /*
	  Updates highlight.js global options with values passed in the form of an object.
	  */
	  function configure(user_options) {
	    options = inherit(options, user_options);
	  }

	  /*
	  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
	  */
	  function initHighlighting() {
	    if (initHighlighting.called)
	      return;
	    initHighlighting.called = true;

	    var blocks = document.querySelectorAll('pre code');
	    ArrayProto.forEach.call(blocks, highlightBlock);
	  }

	  /*
	  Attaches highlighting to the page load event.
	  */
	  function initHighlightingOnLoad() {
	    addEventListener('DOMContentLoaded', initHighlighting, false);
	    addEventListener('load', initHighlighting, false);
	  }

	  function registerLanguage(name, language) {
	    var lang = languages[name] = language(hljs);
	    if (lang.aliases) {
	      lang.aliases.forEach(function(alias) {aliases[alias] = name;});
	    }
	  }

	  function listLanguages() {
	    return objectKeys(languages);
	  }

	  function getLanguage(name) {
	    name = (name || '').toLowerCase();
	    return languages[name] || languages[aliases[name]];
	  }

	  /* Interface definition */

	  hljs.highlight = highlight;
	  hljs.highlightAuto = highlightAuto;
	  hljs.fixMarkup = fixMarkup;
	  hljs.highlightBlock = highlightBlock;
	  hljs.configure = configure;
	  hljs.initHighlighting = initHighlighting;
	  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
	  hljs.registerLanguage = registerLanguage;
	  hljs.listLanguages = listLanguages;
	  hljs.getLanguage = getLanguage;
	  hljs.inherit = inherit;

	  // Common regexps
	  hljs.IDENT_RE = '[a-zA-Z]\\w*';
	  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
	  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
	  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
	  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
	  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

	  // Common modes
	  hljs.BACKSLASH_ESCAPE = {
	    begin: '\\\\[\\s\\S]', relevance: 0
	  };
	  hljs.APOS_STRING_MODE = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.QUOTE_STRING_MODE = {
	    className: 'string',
	    begin: '"', end: '"',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.PHRASAL_WORDS_MODE = {
	    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
	  };
	  hljs.COMMENT = function (begin, end, inherits) {
	    var mode = hljs.inherit(
	      {
	        className: 'comment',
	        begin: begin, end: end,
	        contains: []
	      },
	      inherits || {}
	    );
	    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
	    mode.contains.push({
	      className: 'doctag',
	      begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
	      relevance: 0
	    });
	    return mode;
	  };
	  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
	  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
	  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
	  hljs.NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE,
	    relevance: 0
	  };
	  hljs.C_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.C_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.BINARY_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.BINARY_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.CSS_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE + '(' +
	      '%|em|ex|ch|rem'  +
	      '|vw|vh|vmin|vmax' +
	      '|cm|mm|in|pt|pc|px' +
	      '|deg|grad|rad|turn' +
	      '|s|ms' +
	      '|Hz|kHz' +
	      '|dpi|dpcm|dppx' +
	      ')?',
	    relevance: 0
	  };
	  hljs.REGEXP_MODE = {
	    className: 'regexp',
	    begin: /\//, end: /\/[gimuy]*/,
	    illegal: /\n/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      {
	        begin: /\[/, end: /\]/,
	        relevance: 0,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	  hljs.TITLE_MODE = {
	    className: 'title',
	    begin: hljs.IDENT_RE,
	    relevance: 0
	  };
	  hljs.UNDERSCORE_TITLE_MODE = {
	    className: 'title',
	    begin: hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };
	  hljs.METHOD_GUARD = {
	    // excludes method names from keyword processing
	    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };

	  return hljs;
	}));


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = function(hljs){
	  var IDENT_RE_RU = '[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*';
	  var OneS_KEYWORDS = 'возврат дата для если и или иначе иначеесли исключение конецесли ' +
	    'конецпопытки конецпроцедуры конецфункции конеццикла константа не перейти перем ' +
	    'перечисление по пока попытка прервать продолжить процедура строка тогда фс функция цикл ' +
	    'число экспорт';
	  var OneS_BUILT_IN = 'ansitooem oemtoansi ввестивидсубконто ввестидату ввестизначение ' +
	    'ввестиперечисление ввестипериод ввестиплансчетов ввестистроку ввестичисло вопрос ' +
	    'восстановитьзначение врег выбранныйплансчетов вызватьисключение датагод датамесяц ' +
	    'датачисло добавитьмесяц завершитьработусистемы заголовоксистемы записьжурналарегистрации ' +
	    'запуститьприложение зафиксироватьтранзакцию значениевстроку значениевстрокувнутр ' +
	    'значениевфайл значениеизстроки значениеизстрокивнутр значениеизфайла имякомпьютера ' +
	    'имяпользователя каталогвременныхфайлов каталогиб каталогпользователя каталогпрограммы ' +
	    'кодсимв командасистемы конгода конецпериодаби конецрассчитанногопериодаби ' +
	    'конецстандартногоинтервала конквартала конмесяца коннедели лев лог лог10 макс ' +
	    'максимальноеколичествосубконто мин монопольныйрежим названиеинтерфейса названиенабораправ ' +
	    'назначитьвид назначитьсчет найти найтипомеченныенаудаление найтиссылки началопериодаби ' +
	    'началостандартногоинтервала начатьтранзакцию начгода начквартала начмесяца начнедели ' +
	    'номерднягода номерднянедели номернеделигода нрег обработкаожидания окр описаниеошибки ' +
	    'основнойжурналрасчетов основнойплансчетов основнойязык открытьформу открытьформумодально ' +
	    'отменитьтранзакцию очиститьокносообщений периодстр полноеимяпользователя получитьвремята ' +
	    'получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта ' +
	    'получитьпустоезначение получитьта прав праводоступа предупреждение префиксавтонумерации ' +
	    'пустаястрока пустоезначение рабочаядаттьпустоезначение рабочаядата разделительстраниц ' +
	    'разделительстрок разм разобратьпозициюдокумента рассчитатьрегистрына ' +
	    'рассчитатьрегистрыпо сигнал симв символтабуляции создатьобъект сокрл сокрлп сокрп ' +
	    'сообщить состояние сохранитьзначение сред статусвозврата стрдлина стрзаменить ' +
	    'стрколичествострок стрполучитьстроку  стрчисловхождений сформироватьпозициюдокумента ' +
	    'счетпокоду текущаядата текущеевремя типзначения типзначениястр удалитьобъекты ' +
	    'установитьтана установитьтапо фиксшаблон формат цел шаблон';
	  var DQUOTE =  {begin: '""'};
	  var STR_START = {
	      className: 'string',
	      begin: '"', end: '"|$',
	      contains: [DQUOTE]
	    };
	  var STR_CONT = {
	    className: 'string',
	    begin: '\\|', end: '"|$',
	    contains: [DQUOTE]
	  };

	  return {
	    case_insensitive: true,
	    lexemes: IDENT_RE_RU,
	    keywords: {keyword: OneS_KEYWORDS, built_in: OneS_BUILT_IN},
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.NUMBER_MODE,
	      STR_START, STR_CONT,
	      {
	        className: 'function',
	        begin: '(процедура|функция)', end: '$',
	        lexemes: IDENT_RE_RU,
	        keywords: 'процедура функция',
	        contains: [
	          {
	            begin: 'экспорт', endsWithParent: true,
	            lexemes: IDENT_RE_RU,
	            keywords: 'экспорт',
	            contains: [hljs.C_LINE_COMMENT_MODE]
	          },
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            lexemes: IDENT_RE_RU,
	            keywords: 'знач',
	            contains: [STR_START, STR_CONT]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE_RU})
	        ]
	      },
	      {className: 'meta', begin: '#', end: '$'},
	      {className: 'number', begin: '\'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})\''} // date
	    ]
	  };
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	    var regexes = {
	        ruleDeclaration: "^[a-zA-Z][a-zA-Z0-9-]*",
	        unexpectedChars: "[!@#$^&',?+~`|:]"
	    };

	    var keywords = [
	        "ALPHA",
	        "BIT",
	        "CHAR",
	        "CR",
	        "CRLF",
	        "CTL",
	        "DIGIT",
	        "DQUOTE",
	        "HEXDIG",
	        "HTAB",
	        "LF",
	        "LWSP",
	        "OCTET",
	        "SP",
	        "VCHAR",
	        "WSP"
	    ];

	    var commentMode = hljs.COMMENT(";", "$");

	    var terminalBinaryMode = {
	        className: "symbol",
	        begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
	    };

	    var terminalDecimalMode = {
	        className: "symbol",
	        begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
	    };

	    var terminalHexadecimalMode = {
	        className: "symbol",
	        begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/,
	    };

	    var caseSensitivityIndicatorMode = {
	        className: "symbol",
	        begin: /%[si]/
	    };

	    var ruleDeclarationMode = {
	        begin: regexes.ruleDeclaration + '\\s*=',
	        returnBegin: true,
	        end: /=/,
	        relevance: 0,
	        contains: [{className: "attribute", begin: regexes.ruleDeclaration}]
	    };

	    return {
	      illegal: regexes.unexpectedChars,
	      keywords: keywords.join(" "),
	      contains: [
	          ruleDeclarationMode,
	          commentMode,
	          terminalBinaryMode,
	          terminalDecimalMode,
	          terminalHexadecimalMode,
	          caseSensitivityIndicatorMode,
	          hljs.QUOTE_STRING_MODE,
	          hljs.NUMBER_MODE
	      ]
	    };
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      // IP
	      {
	        className: 'number',
	        begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
	      },
	      // Other numbers
	      {
	        className: 'number',
	        begin: '\\b\\d+\\b',
	        relevance: 0
	      },
	      // Requests
	      {
	        className: 'string',
	        begin: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)', end: '"',
	        keywords: 'GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE',
	        illegal: '\\n',
	        relevance: 10
	      },
	      // Dates
	      {
	        className: 'string',
	        begin: /\[/, end: /\]/,
	        illegal: '\\n'
	      },
	      // Strings
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        illegal: '\\n'
	      }
	    ]
	  };
	};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
	  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

	  var AS3_REST_ARG_MODE = {
	    className: 'rest_arg',
	    begin: '[.]{3}', end: IDENT_RE,
	    relevance: 10
	  };

	  return {
	    aliases: ['as'],
	    keywords: {
	      keyword: 'as break case catch class const continue default delete do dynamic each ' +
	        'else extends final finally for function get if implements import in include ' +
	        'instanceof interface internal is namespace native new override package private ' +
	        'protected public return set static super switch this throw try typeof use var void ' +
	        'while with',
	      literal: 'true false null undefined'
	    },
	    contains: [
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'package', end: '{',
	        contains: [hljs.TITLE_MODE]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.TITLE_MODE
	        ]
	      },
	      {
	        className: 'meta',
	        beginKeywords: 'import include', end: ';',
	        keywords: {'meta-keyword': 'import include'}
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '[{;]', excludeEnd: true,
	        illegal: '\\S',
	        contains: [
	          hljs.TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              AS3_REST_ARG_MODE
	            ]
	          },
	          {
	            begin: ':\\s*' + IDENT_FUNC_RETURN_TYPE_RE
	          }
	        ]
	      },
	      hljs.METHOD_GUARD
	    ],
	    illegal: /#/
	  };
	};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = // We try to support full Ada2012
	//
	// We highlight all appearances of types, keywords, literals (string, char, number, bool)
	// and titles (user defined function/procedure/package)
	// CSS classes are set accordingly
	//
	// Languages causing problems for language detection:
	// xml (broken by Foo : Bar type), elm (broken by Foo : Bar type), vbscript-html (broken by body keyword)
	// sql (ada default.txt has a lot of sql keywords)

	function(hljs) {
	    // Regular expression for Ada numeric literals.
	    // stolen form the VHDL highlighter

	    // Decimal literal:
	    var INTEGER_RE = '\\d(_|\\d)*';
	    var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
	    var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';

	    // Based literal:
	    var BASED_INTEGER_RE = '\\w+';
	    var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

	    var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

	    // Identifier regex
	    var ID_REGEX = '[A-Za-z](_?[A-Za-z0-9.])*';

	    // bad chars, only allowed in literals
	    var BAD_CHARS = '[]{}%#\'\"'

	    // Ada doesn't have block comments, only line comments
	    var COMMENTS = hljs.COMMENT('--', '$');

	    // variable declarations of the form
	    // Foo : Bar := Baz;
	    // where only Bar will be highlighted
	    var VAR_DECLS = {
	        // TODO: These spaces are not required by the Ada syntax
	        // however, I have yet to see handwritten Ada code where
	        // someone does not put spaces around :
	        begin: '\\s+:\\s+', end: '\\s*(:=|;|\\)|=>|$)',
	        // endsWithParent: true,
	        // returnBegin: true,
	        illegal: BAD_CHARS,
	        contains: [
	            {
	                // workaround to avoid highlighting
	                // named loops and declare blocks
	                beginKeywords: 'loop for declare others',
	                endsParent: true,
	            },
	            {
	                // properly highlight all modifiers
	                className: 'keyword',
	                beginKeywords: 'not null constant access function procedure in out aliased exception'
	            },
	            {
	                className: 'type',
	                begin: ID_REGEX,
	                endsParent: true,
	                relevance: 0,
	            }
	        ]
	    };

	    return {
	        case_insensitive: true,
	        keywords: {
	            keyword:
	                'abort else new return abs elsif not reverse abstract end ' +
	                'accept entry select access exception of separate aliased exit or some ' +
	                'all others subtype and for out synchronized array function overriding ' +
	                'at tagged generic package task begin goto pragma terminate ' +
	                'body private then if procedure type case in protected constant interface ' +
	                'is raise use declare range delay limited record when delta loop rem while ' +
	                'digits renames with do mod requeue xor',
	            literal:
	                'True False',
	        },
	        contains: [
	            COMMENTS,
	            // strings "foobar"
	            {
	                className: 'string',
	                begin: /"/, end: /"/,
	                contains: [{begin: /""/, relevance: 0}]
	            },
	            // characters ''
	            {
	                // character literals always contain one char
	                className: 'string',
	                begin: /'.'/
	            },
	            {
	                // number literals
	                className: 'number',
	                begin: NUMBER_RE,
	                relevance: 0
	            },
	            {
	                // Attributes
	                className: 'symbol',
	                begin: "'" + ID_REGEX,
	            },
	            {
	                // package definition, maybe inside generic
	                className: 'title',
	                begin: '(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?', end: '(is|$)',
	                keywords: 'package body',
	                excludeBegin: true,
	                excludeEnd: true,
	                illegal: BAD_CHARS
	            },
	            {
	                // function/procedure declaration/definition
	                // maybe inside generic
	                begin: '(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+', end: '(\\bis|\\bwith|\\brenames|\\)\\s*;)',
	                keywords: 'overriding function procedure with is renames return',
	                // we need to re-match the 'function' keyword, so that
	                // the title mode below matches only exactly once
	                returnBegin: true,
	                contains:
	                [
	                    COMMENTS,
	                    {
	                        // name of the function/procedure
	                        className: 'title',
	                        begin: '(\\bwith\\s+)?\\b(function|procedure)\\s+',
	                        end: '(\\(|\\s+|$)',
	                        excludeBegin: true,
	                        excludeEnd: true,
	                        illegal: BAD_CHARS
	                    },
	                    // 'self'
	                    // // parameter types
	                    VAR_DECLS,
	                    {
	                        // return type
	                        className: 'type',
	                        begin: '\\breturn\\s+', end: '(\\s+|;|$)',
	                        keywords: 'return',
	                        excludeBegin: true,
	                        excludeEnd: true,
	                        // we are done with functions
	                        endsParent: true,
	                        illegal: BAD_CHARS

	                    },
	                ]
	            },
	            {
	                // new type declarations
	                // maybe inside generic
	                className: 'type',
	                begin: '\\b(sub)?type\\s+', end: '\\s+',
	                keywords: 'type',
	                excludeBegin: true,
	                illegal: BAD_CHARS
	            },

	            // see comment above the definition
	            VAR_DECLS,

	            // no markup
	            // relevance boosters for small snippets
	            // {begin: '\\s*=>\\s*'},
	            // {begin: '\\s*:=\\s*'},
	            // {begin: '\\s+:=\\s+'},
	        ]
	    };
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var NUMBER = {className: 'number', begin: '[\\$%]\\d+'};
	  return {
	    aliases: ['apacheconf'],
	    case_insensitive: true,
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {className: 'section', begin: '</?', end: '>'},
	      {
	        className: 'attribute',
	        begin: /\w+/,
	        relevance: 0,
	        // keywords aren’t needed for highlighting per se, they only boost relevance
	        // for a very generally defined mode (starts with a word, ends with line-end
	        keywords: {
	          nomarkup:
	            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot ' +
	            'sethandler errordocument loadmodule options header listen serverroot ' +
	            'servername'
	        },
	        starts: {
	          end: /$/,
	          relevance: 0,
	          keywords: {
	            literal: 'on off all'
	          },
	          contains: [
	            {
	              className: 'meta',
	              begin: '\\s\\[', end: '\\]$'
	            },
	            {
	              className: 'variable',
	              begin: '[\\$%]\\{', end: '\\}',
	              contains: ['self', NUMBER]
	            },
	            NUMBER,
	            hljs.QUOTE_STRING_MODE
	          ]
	        }
	      }
	    ],
	    illegal: /\S/
	  };
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: ''});
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)',
	    contains: ['self', hljs.C_NUMBER_MODE, STRING]
	  };
	  var COMMENT_MODE_1 = hljs.COMMENT('--', '$');
	  var COMMENT_MODE_2 = hljs.COMMENT(
	    '\\(\\*',
	    '\\*\\)',
	    {
	      contains: ['self', COMMENT_MODE_1] //allow nesting
	    }
	  );
	  var COMMENTS = [
	    COMMENT_MODE_1,
	    COMMENT_MODE_2,
	    hljs.HASH_COMMENT_MODE
	  ];

	  return {
	    aliases: ['osascript'],
	    keywords: {
	      keyword:
	        'about above after against and around as at back before beginning ' +
	        'behind below beneath beside between but by considering ' +
	        'contain contains continue copy div does eighth else end equal ' +
	        'equals error every exit fifth first for fourth from front ' +
	        'get given global if ignoring in into is it its last local me ' +
	        'middle mod my ninth not of on onto or over prop property put ref ' +
	        'reference repeat returning script second set seventh since ' +
	        'sixth some tell tenth that the|0 then third through thru ' +
	        'timeout times to transaction try until where while whose with ' +
	        'without',
	      literal:
	        'AppleScript false linefeed return pi quote result space tab true',
	      built_in:
	        'alias application boolean class constant date file integer list ' +
	        'number real record string text ' +
	        'activate beep count delay launch log offset read round ' +
	        'run say summarize write ' +
	        'character characters contents day frontmost id item length ' +
	        'month name paragraph paragraphs rest reverse running time version ' +
	        'weekday word words year'
	    },
	    contains: [
	      STRING,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'built_in',
	        begin:
	          '\\b(clipboard info|the clipboard|info for|list (disks|folder)|' +
	          'mount volume|path to|(close|open for) access|(get|set) eof|' +
	          'current date|do shell script|get volume settings|random number|' +
	          'set volume|system attribute|system info|time to GMT|' +
	          '(load|run|store) script|scripting components|' +
	          'ASCII (character|number)|localized string|' +
	          'choose (application|color|file|file name|' +
	          'folder|from list|remote application|URL)|' +
	          'display (alert|dialog))\\b|^\\s*return\\b'
	      },
	      {
	        className: 'literal',
	        begin:
	          '\\b(text item delimiters|current application|missing value)\\b'
	      },
	      {
	        className: 'keyword',
	        begin:
	          '\\b(apart from|aside from|instead of|out of|greater than|' +
	          "isn't|(doesn't|does not) (equal|come before|come after|contain)|" +
	          '(greater|less) than( or equal)?|(starts?|ends|begins?) with|' +
	          'contained by|comes (before|after)|a (ref|reference)|POSIX file|' +
	          'POSIX path|(date|time) string|quoted form)\\b'
	      },
	      {
	        beginKeywords: 'on',
	        illegal: '[${=;\\n]',
	        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
	      }
	    ].concat(COMMENTS),
	    illegal: '//|->|=>|\\[\\['
	  };
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var CPP_PRIMITIVE_TYPES = {
	    className: 'keyword',
	    begin: '\\b[a-z\\d_]*_t\\b'
	  };

	  var STRINGS = {
	    className: 'string',
	    variants: [
	      {
	        begin: '(u8?|U)?L?"', end: '"',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        begin: '(u8?|U)?R"', end: '"',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        begin: '\'\\\\?.', end: '\'',
	        illegal: '.'
	      }
	    ]
	  };

	  var NUMBERS = {
	    className: 'number',
	    variants: [
	      { begin: '\\b(0b[01\']+)' },
	      { begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)(u|U|l|L|ul|UL|f|F|b|B)' },
	      { begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)' }
	    ],
	    relevance: 0
	  };

	  var PREPROCESSOR =       {
	    className: 'meta',
	    begin: /#\s*[a-z]+\b/, end: /$/,
	    keywords: {
	      'meta-keyword':
	        'if else elif endif define undef warning error line ' +
	        'pragma ifdef ifndef include'
	    },
	    contains: [
	      {
	        begin: /\\\n/, relevance: 0
	      },
	      hljs.inherit(STRINGS, {className: 'meta-string'}),
	      {
	        className: 'meta-string',
	        begin: /<[^\n>]*>/, end: /$/,
	        illegal: '\\n',
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };

	  var FUNCTION_TITLE = hljs.IDENT_RE + '\\s*\\(';

	  var CPP_KEYWORDS = {
	    keyword: 'int float while private char catch import module export virtual operator sizeof ' +
	      'dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace ' +
	      'unsigned long volatile static protected bool template mutable if public friend ' +
	      'do goto auto void enum else break extern using asm case typeid ' +
	      'short reinterpret_cast|10 default double register explicit signed typename try this ' +
	      'switch continue inline delete alignof constexpr decltype ' +
	      'noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary ' +
	      'atomic_bool atomic_char atomic_schar ' +
	      'atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong ' +
	      'atomic_ullong new throw return ' +
	      'and or not',
	    built_in: 'std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream ' +
	      'auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set ' +
	      'unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos ' +
	      'asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp ' +
	      'fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper ' +
	      'isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow ' +
	      'printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp ' +
	      'strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan ' +
	      'vfprintf vprintf vsprintf endl initializer_list unique_ptr',
	    literal: 'true false nullptr NULL'
	  };

	  var EXPRESSION_CONTAINS = [
	    CPP_PRIMITIVE_TYPES,
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    NUMBERS,
	    STRINGS
	  ];

	  return {
	    aliases: ['c', 'cc', 'h', 'c++', 'h++', 'hpp'],
	    keywords: CPP_KEYWORDS,
	    illegal: '</',
	    contains: EXPRESSION_CONTAINS.concat([
	      PREPROCESSOR,
	      {
	        begin: '\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<', end: '>',
	        keywords: CPP_KEYWORDS,
	        contains: ['self', CPP_PRIMITIVE_TYPES]
	      },
	      {
	        begin: hljs.IDENT_RE + '::',
	        keywords: CPP_KEYWORDS
	      },
	      {
	        // This mode covers expression context where we can't expect a function
	        // definition and shouldn't highlight anything that looks like one:
	        // `return some()`, `else if()`, `(x*sum(1, 2))`
	        variants: [
	          {begin: /=/, end: /;/},
	          {begin: /\(/, end: /\)/},
	          {beginKeywords: 'new throw return else', end: /;/}
	        ],
	        keywords: CPP_KEYWORDS,
	        contains: EXPRESSION_CONTAINS.concat([
	          {
	            begin: /\(/, end: /\)/,
	            keywords: CPP_KEYWORDS,
	            contains: EXPRESSION_CONTAINS.concat(['self']),
	            relevance: 0
	          }
	        ]),
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '(' + hljs.IDENT_RE + '[\\*&\\s]+)+' + FUNCTION_TITLE,
	        returnBegin: true, end: /[{;=]/,
	        excludeEnd: true,
	        keywords: CPP_KEYWORDS,
	        illegal: /[^\w\s\*&]/,
	        contains: [
	          {
	            begin: FUNCTION_TITLE, returnBegin: true,
	            contains: [hljs.TITLE_MODE],
	            relevance: 0
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            keywords: CPP_KEYWORDS,
	            relevance: 0,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              STRINGS,
	              NUMBERS,
	              CPP_PRIMITIVE_TYPES
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          PREPROCESSOR
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class struct', end: /[{;:]/,
	        contains: [
	          {begin: /</, end: />/, contains: ['self']}, // skip generic stuff
	          hljs.TITLE_MODE
	        ]
	      }
	    ]),
	    exports: {
	      preprocessor: PREPROCESSOR,
	      strings: STRINGS,
	      keywords: CPP_KEYWORDS
	    }
	  };
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var CPP = hljs.getLanguage('cpp').exports;
		return {
	    keywords: {
	      keyword:
	        'boolean byte word string String array ' + CPP.keywords.keyword,
	      built_in:
	        'setup loop while catch for if do goto try switch case else ' +
	        'default break continue return ' +
	        'KeyboardController MouseController SoftwareSerial ' +
	        'EthernetServer EthernetClient LiquidCrystal ' +
	        'RobotControl GSMVoiceCall EthernetUDP EsploraTFT ' +
	        'HttpClient RobotMotor WiFiClient GSMScanner ' +
	        'FileSystem Scheduler GSMServer YunClient YunServer ' +
	        'IPAddress GSMClient GSMModem Keyboard Ethernet ' +
	        'Console GSMBand Esplora Stepper Process ' +
	        'WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage ' +
	        'Client Server GSMPIN FileIO Bridge Serial ' +
	        'EEPROM Stream Mouse Audio Servo File Task ' +
	        'GPRS WiFi Wire TFT GSM SPI SD ' +
	        'runShellCommandAsynchronously analogWriteResolution ' +
	        'retrieveCallingNumber printFirmwareVersion ' +
	        'analogReadResolution sendDigitalPortPair ' +
	        'noListenOnLocalhost readJoystickButton setFirmwareVersion ' +
	        'readJoystickSwitch scrollDisplayRight getVoiceCallStatus ' +
	        'scrollDisplayLeft writeMicroseconds delayMicroseconds ' +
	        'beginTransmission getSignalStrength runAsynchronously ' +
	        'getAsynchronously listenOnLocalhost getCurrentCarrier ' +
	        'readAccelerometer messageAvailable sendDigitalPorts ' +
	        'lineFollowConfig countryNameWrite runShellCommand ' +
	        'readStringUntil rewindDirectory readTemperature ' +
	        'setClockDivider readLightSensor endTransmission ' +
	        'analogReference detachInterrupt countryNameRead ' +
	        'attachInterrupt encryptionType readBytesUntil ' +
	        'robotNameWrite readMicrophone robotNameRead cityNameWrite ' +
	        'userNameWrite readJoystickY readJoystickX mouseReleased ' +
	        'openNextFile scanNetworks noInterrupts digitalWrite ' +
	        'beginSpeaker mousePressed isActionDone mouseDragged ' +
	        'displayLogos noAutoscroll addParameter remoteNumber ' +
	        'getModifiers keyboardRead userNameRead waitContinue ' +
	        'processInput parseCommand printVersion readNetworks ' +
	        'writeMessage blinkVersion cityNameRead readMessage ' +
	        'setDataMode parsePacket isListening setBitOrder ' +
	        'beginPacket isDirectory motorsWrite drawCompass ' +
	        'digitalRead clearScreen serialEvent rightToLeft ' +
	        'setTextSize leftToRight requestFrom keyReleased ' +
	        'compassRead analogWrite interrupts WiFiServer ' +
	        'disconnect playMelody parseFloat autoscroll ' +
	        'getPINUsed setPINUsed setTimeout sendAnalog ' +
	        'readSlider analogRead beginWrite createChar ' +
	        'motorsStop keyPressed tempoWrite readButton ' +
	        'subnetMask debugPrint macAddress writeGreen ' +
	        'randomSeed attachGPRS readString sendString ' +
	        'remotePort releaseAll mouseMoved background ' +
	        'getXChange getYChange answerCall getResult ' +
	        'voiceCall endPacket constrain getSocket writeJSON ' +
	        'getButton available connected findUntil readBytes ' +
	        'exitValue readGreen writeBlue startLoop IPAddress ' +
	        'isPressed sendSysex pauseMode gatewayIP setCursor ' +
	        'getOemKey tuneWrite noDisplay loadImage switchPIN ' +
	        'onRequest onReceive changePIN playFile noBuffer ' +
	        'parseInt overflow checkPIN knobRead beginTFT ' +
	        'bitClear updateIR bitWrite position writeRGB ' +
	        'highByte writeRed setSpeed readBlue noStroke ' +
	        'remoteIP transfer shutdown hangCall beginSMS ' +
	        'endWrite attached maintain noCursor checkReg ' +
	        'checkPUK shiftOut isValid shiftIn pulseIn ' +
	        'connect println localIP pinMode getIMEI ' +
	        'display noBlink process getBand running beginSD ' +
	        'drawBMP lowByte setBand release bitRead prepare ' +
	        'pointTo readRed setMode noFill remove listen ' +
	        'stroke detach attach noTone exists buffer ' +
	        'height bitSet circle config cursor random ' +
	        'IRread setDNS endSMS getKey micros ' +
	        'millis begin print write ready flush width ' +
	        'isPIN blink clear press mkdir rmdir close ' +
	        'point yield image BSSID click delay ' +
	        'read text move peek beep rect line open ' +
	        'seek fill size turn stop home find ' +
	        'step tone sqrt RSSI SSID ' +
	        'end bit tan cos sin pow map abs max ' +
	        'min get run put',
	      literal:
	        'DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE ' +
	        'REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP ' +
	        'SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN ' +
	        'INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL ' +
	        'DEFAULT OUTPUT INPUT HIGH LOW'
	    },
	    contains: [
	      CPP.preprocessor,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	    //local labels: %?[FB]?[AT]?\d{1,2}\w+
	  return {
	    case_insensitive: true,
	    aliases: ['arm'],
	    lexemes: '\\.?' + hljs.IDENT_RE,
	    keywords: {
	      meta:
	        //GNU preprocs
	        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg '+
	        //ARM directives
	        'ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ',
	      built_in:
	        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 '+ //standard registers
	        'pc lr sp ip sl sb fp '+ //typical regs plus backward compatibility
	        'a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 '+ //more regs and fp
	        'p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 '+ //coprocessor regs
	        'c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 '+ //more coproc
	        'q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 '+ //advanced SIMD NEON regs

	        //program status registers
	        'cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf '+
	        'spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf '+

	        //NEON and VFP registers
	        's0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 '+
	        's16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 '+
	        'd0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 '+
	        'd16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 ' +

	        '{PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @'
	    },
	    contains: [
	      {
	        className: 'keyword',
	        begin: '\\b('+     //mnemonics
	            'adc|'+
	            '(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|'+
	            'and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|'+
	            'bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|'+
	            'setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|'+
	            'ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|'+
	            'mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|'+
	            'mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|'+
	            'mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|'+
	            'rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|'+
	            'stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|'+
	            '[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|'+
	            'wfe|wfi|yield'+
	        ')'+
	        '(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?'+ //condition codes
	        '[sptrx]?' ,                                             //legal postfixes
	        end: '\\s'
	      },
	      hljs.COMMENT('[;@]', '$', {relevance: 0}),
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'',
	        end: '[^\\\\]\'',
	        relevance: 0
	      },
	      {
	        className: 'title',
	        begin: '\\|', end: '\\|',
	        illegal: '\\n',
	        relevance: 0
	      },
	      {
	        className: 'number',
	        variants: [
	            {begin: '[#$=]?0x[0-9a-f]+'}, //hex
	            {begin: '[#$=]?0b[01]+'},     //bin
	            {begin: '[#$=]\\d+'},        //literal
	            {begin: '\\b\\d+'}           //bare number
	        ],
	        relevance: 0
	      },
	      {
	        className: 'symbol',
	        variants: [
	            {begin: '^[a-z_\\.\\$][a-z0-9_\\.\\$]+'}, //ARM syntax
	            {begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'}, //GNU ARM syntax
	            {begin: '[=#]\\w+' }  //label reference
	        ],
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
	  var TAG_INTERNALS = {
	    endsWithParent: true,
	    illegal: /</,
	    relevance: 0,
	    contains: [
	      {
	        className: 'attr',
	        begin: XML_IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: /=\s*/,
	        relevance: 0,
	        contains: [
	          {
	            className: 'string',
	            endsParent: true,
	            variants: [
	              {begin: /"/, end: /"/},
	              {begin: /'/, end: /'/},
	              {begin: /[^\s"'=<>`]+/}
	            ]
	          }
	        ]
	      }
	    ]
	  };
	  return {
	    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist'],
	    case_insensitive: true,
	    contains: [
	      {
	        className: 'meta',
	        begin: '<!DOCTYPE', end: '>',
	        relevance: 10,
	        contains: [{begin: '\\[', end: '\\]'}]
	      },
	      hljs.COMMENT(
	        '<!--',
	        '-->',
	        {
	          relevance: 10
	        }
	      ),
	      {
	        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
	        relevance: 10
	      },
	      {
	        begin: /<\?(php)?/, end: /\?>/,
	        subLanguage: 'php',
	        contains: [{begin: '/\\*', end: '\\*/', skip: true}]
	      },
	      {
	        className: 'tag',
	        /*
	        The lookahead pattern (?=...) ensures that 'begin' only matches
	        '<style' as a single word, followed by a whitespace or an
	        ending braket. The '$' is needed for the lexeme to be recognized
	        by hljs.subMode() that tests lexemes outside the stream.
	        */
	        begin: '<style(?=\\s|>|$)', end: '>',
	        keywords: {name: 'style'},
	        contains: [TAG_INTERNALS],
	        starts: {
	          end: '</style>', returnEnd: true,
	          subLanguage: ['css', 'xml']
	        }
	      },
	      {
	        className: 'tag',
	        // See the comment in the <style tag about the lookahead pattern
	        begin: '<script(?=\\s|>|$)', end: '>',
	        keywords: {name: 'script'},
	        contains: [TAG_INTERNALS],
	        starts: {
	          end: '\<\/script\>', returnEnd: true,
	          subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
	        }
	      },
	      {
	        className: 'meta',
	        variants: [
	          {begin: /<\?xml/, end: /\?>/, relevance: 10},
	          {begin: /<\?\w+/, end: /\?>/}
	        ]
	      },
	      {
	        className: 'tag',
	        begin: '</?', end: '/?>',
	        contains: [
	          {
	            className: 'name', begin: /[^\/><\s]+/, relevance: 0
	          },
	          TAG_INTERNALS
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['adoc'],
	    contains: [
	      // block comment
	      hljs.COMMENT(
	        '^/{4,}\\n',
	        '\\n/{4,}$',
	        // can also be done as...
	        //'^/{4,}$',
	        //'^/{4,}$',
	        {
	          relevance: 10
	        }
	      ),
	      // line comment
	      hljs.COMMENT(
	        '^//',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      // title
	      {
	        className: 'title',
	        begin: '^\\.\\w.*$'
	      },
	      // example, admonition & sidebar blocks
	      {
	        begin: '^[=\\*]{4,}\\n',
	        end: '\\n^[=\\*]{4,}$',
	        relevance: 10
	      },
	      // headings
	      {
	        className: 'section',
	        relevance: 10,
	        variants: [
	          {begin: '^(={1,5}) .+?( \\1)?$'},
	          {begin: '^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$'},
	        ]
	      },
	      // document attributes
	      {
	        className: 'meta',
	        begin: '^:.+?:',
	        end: '\\s',
	        excludeEnd: true,
	        relevance: 10
	      },
	      // block attributes
	      {
	        className: 'meta',
	        begin: '^\\[.+?\\]$',
	        relevance: 0
	      },
	      // quoteblocks
	      {
	        className: 'quote',
	        begin: '^_{4,}\\n',
	        end: '\\n_{4,}$',
	        relevance: 10
	      },
	      // listing and literal blocks
	      {
	        className: 'code',
	        begin: '^[\\-\\.]{4,}\\n',
	        end: '\\n[\\-\\.]{4,}$',
	        relevance: 10
	      },
	      // passthrough blocks
	      {
	        begin: '^\\+{4,}\\n',
	        end: '\\n\\+{4,}$',
	        contains: [
	          {
	            begin: '<', end: '>',
	            subLanguage: 'xml',
	            relevance: 0
	          }
	        ],
	        relevance: 10
	      },
	      // lists (can only capture indicators)
	      {
	        className: 'bullet',
	        begin: '^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+'
	      },
	      // admonition
	      {
	        className: 'symbol',
	        begin: '^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+',
	        relevance: 10
	      },
	      // inline strong
	      {
	        className: 'strong',
	        // must not follow a word character or be followed by an asterisk or space
	        begin: '\\B\\*(?![\\*\\s])',
	        end: '(\\n{2}|\\*)',
	        // allow escaped asterisk followed by word char
	        contains: [
	          {
	            begin: '\\\\*\\w',
	            relevance: 0
	          }
	        ]
	      },
	      // inline emphasis
	      {
	        className: 'emphasis',
	        // must not follow a word character or be followed by a single quote or space
	        begin: '\\B\'(?![\'\\s])',
	        end: '(\\n{2}|\')',
	        // allow escaped single quote followed by word char
	        contains: [
	          {
	            begin: '\\\\\'\\w',
	            relevance: 0
	          }
	        ],
	        relevance: 0
	      },
	      // inline emphasis (alt)
	      {
	        className: 'emphasis',
	        // must not follow a word character or be followed by an underline or space
	        begin: '_(?![_\\s])',
	        end: '(\\n{2}|_)',
	        relevance: 0
	      },
	      // inline smart quotes
	      {
	        className: 'string',
	        variants: [
	          {begin: "``.+?''"},
	          {begin: "`.+?'"}
	        ]
	      },
	      // inline code snippets (TODO should get same treatment as strong and emphasis)
	      {
	        className: 'code',
	        begin: '(`.+?`|\\+.+?\\+)',
	        relevance: 0
	      },
	      // indented literal block
	      {
	        className: 'code',
	        begin: '^[ \\t]',
	        end: '$',
	        relevance: 0
	      },
	      // horizontal rules
	      {
	        begin: '^\'{3,}[ \\t]*$',
	        relevance: 10
	      },
	      // images and links
	      {
	        begin: '(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]',
	        returnBegin: true,
	        contains: [
	          {
	            begin: '(link|image:?):',
	            relevance: 0
	          },
	          {
	            className: 'link',
	            begin: '\\w',
	            end: '[^\\[]+',
	            relevance: 0
	          },
	          {
	            className: 'string',
	            begin: '\\[',
	            end: '\\]',
	            excludeBegin: true,
	            excludeEnd: true,
	            relevance: 0
	          }
	        ],
	        relevance: 10
	      }
	    ]
	  };
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = function (hljs) {
	  var KEYWORDS =
	    'false synchronized int abstract float private char boolean static null if const ' +
	    'for true while long throw strictfp finally protected import native final return void ' +
	    'enum else extends implements break transient new catch instanceof byte super volatile case ' +
	    'assert short package default double public try this switch continue throws privileged ' +
	    'aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization ' +
	    'staticinitialization withincode target within execution getWithinTypeName handler ' +
	    'thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents '+
	    'warning error soft precedence thisAspectInstance';
	  var SHORTKEYS = 'get set args call';
	  return {
	    keywords : KEYWORDS,
	    illegal : /<\/|#/,
	    contains : [
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          relevance : 0,
	          contains : [
	            {
	              // eat up @'s in emails to prevent them to be recognized as doctags
	              begin: /\w+@/, relevance: 0
	            },
	            {
	              className : 'doctag',
	              begin : '@[A-Za-z]+'
	            }
	          ]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className : 'class',
	        beginKeywords : 'aspect',
	        end : /[{;=]/,
	        excludeEnd : true,
	        illegal : /[:;"\[\]]/,
	        contains : [
	          {
	            beginKeywords : 'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'
	          },
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            begin : /\([^\)]*/,
	            end : /[)]+/,
	            keywords : KEYWORDS + ' ' + SHORTKEYS,
	            excludeEnd : false
	          }
	        ]
	      },
	      {
	        className : 'class',
	        beginKeywords : 'class interface',
	        end : /[{;=]/,
	        excludeEnd : true,
	        relevance: 0,
	        keywords : 'class interface',
	        illegal : /[:"\[\]]/,
	        contains : [
	          {beginKeywords : 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        // AspectJ Constructs
	        beginKeywords : 'pointcut after before around throwing returning',
	        end : /[)]/,
	        excludeEnd : false,
	        illegal : /["\[\]]/,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            returnBegin : true,
	            contains : [hljs.UNDERSCORE_TITLE_MODE]
	          }
	        ]
	      },
	      {
	        begin : /[:]/,
	        returnBegin : true,
	        end : /[{;]/,
	        relevance: 0,
	        excludeEnd : false,
	        keywords : KEYWORDS,
	        illegal : /["\[\]]/,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            keywords : KEYWORDS + ' ' + SHORTKEYS,
	            relevance: 0
	          },
	          hljs.QUOTE_STRING_MODE
	        ]
	      },
	      {
	        // this prevents 'new Name(...), or throw ...' from being recognized as a function definition
	        beginKeywords : 'new throw',
	        relevance : 0
	      },
	      {
	        // the function class is a bit different for AspectJ compared to the Java language
	        className : 'function',
	        begin : /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
	        returnBegin : true,
	        end : /[{;=]/,
	        keywords : KEYWORDS,
	        excludeEnd : true,
	        contains : [
	          {
	            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
	            returnBegin : true,
	            relevance: 0,
	            contains : [hljs.UNDERSCORE_TITLE_MODE]
	          },
	          {
	            className : 'params',
	            begin : /\(/, end : /\)/,
	            relevance: 0,
	            keywords : KEYWORDS,
	            contains : [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_NUMBER_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        // annotation is also used in this language
	        className : 'meta',
	        begin : '@[A-Za-z]+'
	      }
	    ]
	  };
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var BACKTICK_ESCAPE = {
	    begin: /`[\s\S]/
	  };

	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword: 'Break Continue Else Gosub If Loop Return While',
	      literal: 'A|0 true false NOT AND OR',
	      built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel',
	    },
	    contains: [
	      {
	        className: 'built_in',
	        begin: 'A_[a-zA-Z0-9]+'
	      },
	      BACKTICK_ESCAPE,
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [BACKTICK_ESCAPE]}),
	      hljs.COMMENT(';', '$', {relevance: 0}),
	      {
	        className: 'number',
	        begin: hljs.NUMBER_RE,
	        relevance: 0
	      },
	      {
	        className: 'variable', // FIXME
	        begin: '%', end: '%',
	        illegal: '\\n',
	        contains: [BACKTICK_ESCAPE]
	      },
	      {
	        className: 'symbol',
	        contains: [BACKTICK_ESCAPE],
	        variants: [
	          {begin: '^[^\\n";]+::(?!=)'},
	          {begin: '^[^\\n";]+:(?!=)', relevance: 0} // zero relevance as it catches a lot of things
	                                                    // followed by a single ':' in many languages
	        ]
	      },
	      {
	        // consecutive commas, not for highlighting but just for relevance
	        begin: ',\\s*,'
	      }
	    ]
	  }
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	    var KEYWORDS = 'ByRef Case Const ContinueCase ContinueLoop ' +
	        'Default Dim Do Else ElseIf EndFunc EndIf EndSelect ' +
	        'EndSwitch EndWith Enum Exit ExitLoop For Func ' +
	        'Global If In Local Next ReDim Return Select Static ' +
	        'Step Switch Then To Until Volatile WEnd While With',

	        LITERAL = 'True False And Null Not Or',

	        BUILT_IN =
	          'Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait',

	        COMMENT = {
	            variants: [
	              hljs.COMMENT(';', '$', {relevance: 0}),
	              hljs.COMMENT('#cs', '#ce'),
	              hljs.COMMENT('#comments-start', '#comments-end')
	            ]
	        },

	        VARIABLE = {
	            begin: '\\$[A-z0-9_]+'
	        },

	        STRING = {
	            className: 'string',
	            variants: [{
	                begin: /"/,
	                end: /"/,
	                contains: [{
	                    begin: /""/,
	                    relevance: 0
	                }]
	            }, {
	                begin: /'/,
	                end: /'/,
	                contains: [{
	                    begin: /''/,
	                    relevance: 0
	                }]
	            }]
	        },

	        NUMBER = {
	            variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
	        },

	        PREPROCESSOR = {
	            className: 'meta',
	            begin: '#',
	            end: '$',
	            keywords: {'meta-keyword': 'comments include include-once NoTrayIcon OnAutoItStartRegister pragma compile RequireAdmin'},
	            contains: [{
	                    begin: /\\\n/,
	                    relevance: 0
	                }, {
	                    beginKeywords: 'include',
	                    keywords: {'meta-keyword': 'include'},
	                    end: '$',
	                    contains: [
	                        STRING, {
	                            className: 'meta-string',
	                            variants: [{
	                                begin: '<',
	                                end: '>'
	                            }, {
	                                begin: /"/,
	                                end: /"/,
	                                contains: [{
	                                    begin: /""/,
	                                    relevance: 0
	                                }]
	                            }, {
	                                begin: /'/,
	                                end: /'/,
	                                contains: [{
	                                    begin: /''/,
	                                    relevance: 0
	                                }]
	                            }]
	                        }
	                    ]
	                },
	                STRING,
	                COMMENT
	            ]
	        },

	        CONSTANT = {
	            className: 'symbol',
	            // begin: '@',
	            // end: '$',
	            // keywords: 'AppDataCommonDir AppDataDir AutoItExe AutoItPID AutoItVersion AutoItX64 COM_EventObj CommonFilesDir Compiled ComputerName ComSpec CPUArch CR CRLF DesktopCommonDir DesktopDepth DesktopDir DesktopHeight DesktopRefresh DesktopWidth DocumentsCommonDir error exitCode exitMethod extended FavoritesCommonDir FavoritesDir GUI_CtrlHandle GUI_CtrlId GUI_DragFile GUI_DragId GUI_DropId GUI_WinHandle HomeDrive HomePath HomeShare HotKeyPressed HOUR IPAddress1 IPAddress2 IPAddress3 IPAddress4 KBLayout LF LocalAppDataDir LogonDNSDomain LogonDomain LogonServer MDAY MIN MON MSEC MUILang MyDocumentsDir NumParams OSArch OSBuild OSLang OSServicePack OSType OSVersion ProgramFilesDir ProgramsCommonDir ProgramsDir ScriptDir ScriptFullPath ScriptLineNumber ScriptName SEC StartMenuCommonDir StartMenuDir StartupCommonDir StartupDir SW_DISABLE SW_ENABLE SW_HIDE SW_LOCK SW_MAXIMIZE SW_MINIMIZE SW_RESTORE SW_SHOW SW_SHOWDEFAULT SW_SHOWMAXIMIZED SW_SHOWMINIMIZED SW_SHOWMINNOACTIVE SW_SHOWNA SW_SHOWNOACTIVATE SW_SHOWNORMAL SW_UNLOCK SystemDir TAB TempDir TRAY_ID TrayIconFlashing TrayIconVisible UserName UserProfileDir WDAY WindowsDir WorkingDir YDAY YEAR',
	            // relevance: 5
	            begin: '@[A-z0-9_]+'
	        },

	        FUNCTION = {
	            className: 'function',
	            beginKeywords: 'Func',
	            end: '$',
	            illegal: '\\$|\\[|%',
	            contains: [
	                hljs.UNDERSCORE_TITLE_MODE, {
	                    className: 'params',
	                    begin: '\\(',
	                    end: '\\)',
	                    contains: [
	                        VARIABLE,
	                        STRING,
	                        NUMBER
	                    ]
	                }
	            ]
	        };

	    return {
	        case_insensitive: true,
	        illegal: /\/\*/,
	        keywords: {
	            keyword: KEYWORDS,
	            built_in: BUILT_IN,
	            literal: LITERAL
	        },
	        contains: [
	            COMMENT,
	            VARIABLE,
	            STRING,
	            NUMBER,
	            PREPROCESSOR,
	            CONSTANT,
	            FUNCTION
	        ]
	    }
	};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    lexemes: '\\.?' + hljs.IDENT_RE,
	    keywords: {
	      keyword:
	        /* mnemonic */
	        'adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs ' +
	        'brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr ' +
	        'clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor ' +
	        'fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul ' +
	        'muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs ' +
	        'sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub ' +
	        'subi swap tst wdr',
	      built_in:
	        /* general purpose registers */
	        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 ' +
	        'r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ' +
	        /* IO Registers (ATMega128) */
	        'ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h ' +
	        'tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ' +
	        'ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ' +
	        'ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk ' +
	        'tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ' +
	        'ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr ' +
	        'porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ' +
	        'ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf',
	      meta:
	        '.byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list ' +
	        '.listmac .macro .nolist .org .set'
	    },
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.COMMENT(
	        ';',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      hljs.C_NUMBER_MODE, // 0x..., decimal, float
	      hljs.BINARY_NUMBER_MODE, // 0b...
	      {
	        className: 'number',
	        begin: '\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)' // $..., 0o...
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'', end: '[^\\\\]\'',
	        illegal: '[^\\\\][^\']'
	      },
	      {className: 'symbol',  begin: '^[A-Za-z0-9_.$]+:'},
	      {className: 'meta', begin: '#', end: '$'},
	      {  // подстановка в «.macro»
	        className: 'subst',
	        begin: '@[0-9]+'
	      }
	    ]
	  };
	};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var VARIABLE = {
	    className: 'variable',
	    variants: [
	      {begin: /\$[\w\d#@][\w\d_]*/},
	      {begin: /\$\{(.*?)}/}
	    ]
	  };
	  var KEYWORDS = 'BEGIN END if else while do for in break continue delete next nextfile function func exit|10';
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE],
	    variants: [
	      {
	        begin: /(u|b)?r?'''/, end: /'''/,
	        relevance: 10
	      },
	      {
	        begin: /(u|b)?r?"""/, end: /"""/,
	        relevance: 10
	      },
	      {
	        begin: /(u|r|ur)'/, end: /'/,
	        relevance: 10
	      },
	      {
	        begin: /(u|r|ur)"/, end: /"/,
	        relevance: 10
	      },
	      {
	        begin: /(b|br)'/, end: /'/
	      },
	      {
	        begin: /(b|br)"/, end: /"/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE
	    ]
	  };
	  return {
		 keywords: {
		   keyword: KEYWORDS
	    },
	    contains: [
	      VARIABLE,
	      STRING,
	      hljs.REGEXP_MODE,
	      hljs.HASH_COMMENT_MODE,
	      hljs.NUMBER_MODE
	    ]
	  }
	};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: 'false int abstract private char boolean static null if for true ' +
	      'while long throw finally protected final return void enum else ' +
	      'break new catch byte super case short default double public try this switch ' +
	      'continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count ' +
	      'order group by asc desc index hint like dispaly edit client server ttsbegin ' +
	      'ttscommit str real date container anytype common div mod',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$'
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        illegal: ':',
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$[\w\d#@][\w\d_]*/},
	      {begin: /\$\{(.*?)}/}
	    ]
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: /"/, end: /"/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      VAR,
	      {
	        className: 'variable',
	        begin: /\$\(/, end: /\)/,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	  var APOS_STRING = {
	    className: 'string',
	    begin: /'/, end: /'/
	  };

	  return {
	    aliases: ['sh', 'zsh'],
	    lexemes: /-?[a-z\._]+/,
	    keywords: {
	      keyword:
	        'if then else elif fi for while in do done case esac function',
	      literal:
	        'true false',
	      built_in:
	        // Shell built-ins
	        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
	        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
	        'trap umask unset ' +
	        // Bash built-ins
	        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
	        'read readarray source type typeset ulimit unalias ' +
	        // Shell modifiers
	        'set shopt ' +
	        // Zsh built-ins
	        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
	        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
	        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
	        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
	        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
	        'zpty zregexparse zsocket zstyle ztcp',
	      _:
	        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster
	    },
	    contains: [
	      {
	        className: 'meta',
	        begin: /^#![^\n]+sh\s*$/,
	        relevance: 10
	      },
	      {
	        className: 'function',
	        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
	        returnBegin: true,
	        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
	        relevance: 0
	      },
	      hljs.HASH_COMMENT_MODE,
	      QUOTE_STRING,
	      APOS_STRING,
	      VAR
	    ]
	  };
	};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    illegal: '^\.',
	    // Support explicitely typed variables that end with $%! or #.
	    lexemes: '[a-zA-Z][a-zA-Z0-9_\$\%\!\#]*',
	    keywords: {
	        keyword:
	          'ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE ' +
	          'CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ ' +
	          'DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ ' +
	          'EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO ' +
	          'HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON ' +
	          'OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET ' +
	          'MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION ' +
	          'BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET ' +
	          'PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET ' +
	          'RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP ' +
	          'SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE ' +
	          'WEND WIDTH WINDOW WRITE XOR'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.COMMENT('REM', '$', {relevance: 10}),
	      hljs.COMMENT('\'', '$', {relevance: 0}),
	      {
	        // Match line numbers
	        className: 'symbol',
	        begin: '^[0-9]+\ ',
	        relevance: 10
	      },
	      {
	        // Match typed numeric constants (1000, 12.34!, 1.2e5, 1.5#, 1.2D2)
	        className: 'number',
	        begin: '\\b([0-9]+[0-9edED\.]*[#\!]?)',
	        relevance: 0
	      },
	      {
	        // Match hexadecimal numbers (&Hxxxx)
	        className: 'number',
	        begin: '(\&[hH][0-9a-fA-F]{1,4})'
	      },
	      {
	        // Match octal numbers (&Oxxxxxx)
	        className: 'number',
	        begin: '(\&[oO][0-7]{1,6})'
	      }
	    ]
	  };
	};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = function(hljs){
	  return {
	    contains: [
	      // Attribute
	      {
	        className: 'attribute',
	        begin: /</, end: />/
	      },
	      // Specific
	      {
	        begin: /::=/,
	        starts: {
	          end: /$/,
	          contains: [
	            {
	              begin: /</, end: />/
	            },
	            // Common
	            hljs.C_LINE_COMMENT_MODE,
	            hljs.C_BLOCK_COMMENT_MODE,
	            hljs.APOS_STRING_MODE,
	            hljs.QUOTE_STRING_MODE
	          ]
	        }
	      }
	    ]
	  };
	};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = function(hljs){
	  var LITERAL = {
	    className: 'literal',
	    begin: '[\\+\\-]',
	    relevance: 0
	  };
	  return {
	    aliases: ['bf'],
	    contains: [
	      hljs.COMMENT(
	        '[^\\[\\]\\.,\\+\\-<> \r\n]',
	        '[\\[\\]\\.,\\+\\-<> \r\n]',
	        {
	          returnEnd: true,
	          relevance: 0
	        }
	      ),
	      {
	        className: 'title',
	        begin: '[\\[\\]]',
	        relevance: 0
	      },
	      {
	        className: 'string',
	        begin: '[\\.,]',
	        relevance: 0
	      },
	      {
	        // this mode works as the only relevance counter
	        begin: /\+\+|\-\-/, returnBegin: true,
	        contains: [LITERAL]
	      },
	      LITERAL
	    ]
	  };
	};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS =
	    'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to ' +
	    'until while with var';
	  var LITERALS = 'false true';
	  var COMMENT_MODES = [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.COMMENT(
	      /\{/,
	      /\}/,
	      {
	        relevance: 0
	      }
	    ),
	    hljs.COMMENT(
	      /\(\*/,
	      /\*\)/,
	      {
	        relevance: 10
	      }
	    )
	  ];
	  var STRING = {
	    className: 'string',
	    begin: /'/, end: /'/,
	    contains: [{begin: /''/}]
	  };
	  var CHAR_STRING = {
	    className: 'string', begin: /(#\d+)+/
	  };
	  var DATE = {
	      className: 'number',
	      begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
	      relevance: 0
	  };
	  var DBL_QUOTED_VARIABLE = {
	      className: 'string', // not a string technically but makes sense to be highlighted in the same style
	      begin: '"',
	      end: '"'
	  };

	  var PROCEDURE = {
	    className: 'function',
	    beginKeywords: 'procedure', end: /[:;]/,
	    keywords: 'procedure|10',
	    contains: [
	      hljs.TITLE_MODE,
	      {
	        className: 'params',
	        begin: /\(/, end: /\)/,
	        keywords: KEYWORDS,
	        contains: [STRING, CHAR_STRING]
	      }
	    ].concat(COMMENT_MODES)
	  };

	  var OBJECT = {
	    className: 'class',
	    begin: 'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)',
	    returnBegin: true,
	    contains: [
	      hljs.TITLE_MODE,
	        PROCEDURE
	    ]
	  };

	  return {
	    case_insensitive: true,
	    keywords: { keyword: KEYWORDS, literal: LITERALS },
	    illegal: /\/\*/,
	    contains: [
	      STRING, CHAR_STRING,
	      DATE, DBL_QUOTED_VARIABLE,
	      hljs.NUMBER_MODE,
	      OBJECT,
	      PROCEDURE
	    ]
	  };
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['capnp'],
	    keywords: {
	      keyword:
	        'struct enum interface union group import using const annotation extends in of on as with from fixed',
	      built_in:
	        'Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 ' +
	        'Text Data AnyPointer AnyStruct Capability List',
	      literal:
	        'true false'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'meta',
	        begin: /@0x[\w\d]{16};/,
	        illegal: /\n/
	      },
	      {
	        className: 'symbol',
	        begin: /@\d+\b/
	      },
	      {
	        className: 'class',
	        beginKeywords: 'struct enum', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'interface', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  // 2.3. Identifiers and keywords
	  var KEYWORDS =
	    'assembly module package import alias class interface object given value ' +
	    'assign void function new of extends satisfies abstracts in out return ' +
	    'break continue throw assert dynamic if else switch case for while try ' +
	    'catch finally then let this outer super is exists nonempty';
	  // 7.4.1 Declaration Modifiers
	  var DECLARATION_MODIFIERS =
	    'shared abstract formal default actual variable late native deprecated' +
	    'final sealed annotation suppressWarnings small';
	  // 7.4.2 Documentation
	  var DOCUMENTATION =
	    'doc by license see throws tagged';
	  var SUBST = {
	    className: 'subst', excludeBegin: true, excludeEnd: true,
	    begin: /``/, end: /``/,
	    keywords: KEYWORDS,
	    relevance: 10
	  };
	  var EXPRESSIONS = [
	    {
	      // verbatim string
	      className: 'string',
	      begin: '"""',
	      end: '"""',
	      relevance: 10
	    },
	    {
	      // string literal or template
	      className: 'string',
	      begin: '"', end: '"',
	      contains: [SUBST]
	    },
	    {
	      // character literal
	      className: 'string',
	      begin: "'",
	      end: "'"
	    },
	    {
	      // numeric literal
	      className: 'number',
	      begin: '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
	      relevance: 0
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  return {
	    keywords: {
	      keyword: KEYWORDS + ' ' + DECLARATION_MODIFIERS,
	      meta: DOCUMENTATION
	    },
	    illegal: '\\$[^01]|#[^0-9a-fA-F]',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.COMMENT('/\\*', '\\*/', {contains: ['self']}),
	      {
	        // compiler annotation
	        className: 'meta',
	        begin: '@[a-z]\\w*(?:\\:\"[^\"]*\")?'
	      }
	    ].concat(EXPRESSIONS)
	  };
	};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['clean','icl','dcl'],
	    keywords: {
	      keyword:
	        'if let in with where case of class instance otherwise ' +
	        'implementation definition system module from import qualified as ' +
	        'special code inline foreign export ccall stdcall generic derive ' +
	        'infix infixl infixr',
	      literal:
	        'True False'
	    },
	    contains: [

	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,

	      {begin: '->|<-[|:]?|::|#!?|>>=|\\{\\||\\|\\}|:==|=:|\\.\\.|<>|`'} // relevance booster
	    ]
	  };
	};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var keywords = {
	    'builtin-name':
	      // Clojure keywords
	      'def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem '+
	      'quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? '+
	      'set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? '+
	      'class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? '+
	      'string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . '+
	      'inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last '+
	      'drop-while while intern condp case reduced cycle split-at split-with repeat replicate '+
	      'iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext '+
	      'nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends '+
	      'add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler '+
	      'set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter '+
	      'monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or '+
	      'when when-not when-let comp juxt partial sequence memoize constantly complement identity assert '+
	      'peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast '+
	      'sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import '+
	      'refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! '+
	      'assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger '+
	      'bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline '+
	      'flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking '+
	      'assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! '+
	      'reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! '+
	      'new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty '+
	      'hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list '+
	      'disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer '+
	      'chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate '+
	      'unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta '+
	      'lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize'
	   };

	  var SYMBOLSTART = 'a-zA-Z_\\-!.?+*=<>&#\'';
	  var SYMBOL_RE = '[' + SYMBOLSTART + '][' + SYMBOLSTART + '0-9/;:]*';
	  var SIMPLE_NUMBER_RE = '[-+]?\\d+(\\.\\d+)?';

	  var SYMBOL = {
	    begin: SYMBOL_RE,
	    relevance: 0
	  };
	  var NUMBER = {
	    className: 'number', begin: SIMPLE_NUMBER_RE,
	    relevance: 0
	  };
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null});
	  var COMMENT = hljs.COMMENT(
	    ';',
	    '$',
	    {
	      relevance: 0
	    }
	  );
	  var LITERAL = {
	    className: 'literal',
	    begin: /\b(true|false|nil)\b/
	  };
	  var COLLECTION = {
	    begin: '[\\[\\{]', end: '[\\]\\}]'
	  };
	  var HINT = {
	    className: 'comment',
	    begin: '\\^' + SYMBOL_RE
	  };
	  var HINT_COL = hljs.COMMENT('\\^\\{', '\\}');
	  var KEY = {
	    className: 'symbol',
	    begin: '[:]{1,2}' + SYMBOL_RE
	  };
	  var LIST = {
	    begin: '\\(', end: '\\)'
	  };
	  var BODY = {
	    endsWithParent: true,
	    relevance: 0
	  };
	  var NAME = {
	    keywords: keywords,
	    lexemes: SYMBOL_RE,
	    className: 'name', begin: SYMBOL_RE,
	    starts: BODY
	  };
	  var DEFAULT_CONTAINS = [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL, SYMBOL];

	  LIST.contains = [hljs.COMMENT('comment', ''), NAME, BODY];
	  BODY.contains = DEFAULT_CONTAINS;
	  COLLECTION.contains = DEFAULT_CONTAINS;

	  return {
	    aliases: ['clj'],
	    illegal: /\S/,
	    contains: [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL]
	  }
	};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      {
	        className: 'meta',
	        begin: /^([\w.-]+|\s*#_)=>/,
	        starts: {
	          end: /$/,
	          subLanguage: 'clojure'
	        }
	      }
	    ]
	  }
	};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['cmake.in'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'add_custom_command add_custom_target add_definitions add_dependencies ' +
	        'add_executable add_library add_subdirectory add_test aux_source_directory ' +
	        'break build_command cmake_minimum_required cmake_policy configure_file ' +
	        'create_test_sourcelist define_property else elseif enable_language enable_testing ' +
	        'endforeach endfunction endif endmacro endwhile execute_process export find_file ' +
	        'find_library find_package find_path find_program fltk_wrap_ui foreach function ' +
	        'get_cmake_property get_directory_property get_filename_component get_property ' +
	        'get_source_file_property get_target_property get_test_property if include ' +
	        'include_directories include_external_msproject include_regular_expression install ' +
	        'link_directories load_cache load_command macro mark_as_advanced message option ' +
	        'output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return ' +
	        'separate_arguments set set_directory_properties set_property ' +
	        'set_source_files_properties set_target_properties set_tests_properties site_name ' +
	        'source_group string target_link_libraries try_compile try_run unset variable_watch ' +
	        'while build_name exec_program export_library_dependencies install_files ' +
	        'install_programs install_targets link_libraries make_directory remove subdir_depends ' +
	        'subdirs use_mangled_mesa utility_source variable_requires write_file ' +
	        'qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or ' +
	        'equal less greater strless strgreater strequal matches'
	    },
	    contains: [
	      {
	        className: 'variable',
	        begin: '\\${', end: '}'
	      },
	      hljs.HASH_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE
	    ]
	  };
	};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // JS keywords
	      'in if for while finally new do return else break catch instanceof throw try this ' +
	      'switch continue typeof delete debugger super yield import export from as default await ' +
	      // Coffee keywords
	      'then unless until loop of by when and or is isnt not',
	    literal:
	      // JS literals
	      'true false null undefined ' +
	      // Coffee literals
	      'yes no on off',
	    built_in:
	      'npm require console print module global window document'
	  };
	  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
	  var SUBST = {
	    className: 'subst',
	    begin: /#\{/, end: /}/,
	    keywords: KEYWORDS
	  };
	  var EXPRESSIONS = [
	    hljs.BINARY_NUMBER_MODE,
	    hljs.inherit(hljs.C_NUMBER_MODE, {starts: {end: '(\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp
	    {
	      className: 'string',
	      variants: [
	        {
	          begin: /'''/, end: /'''/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /'/, end: /'/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /"""/, end: /"""/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	        },
	        {
	          begin: /"/, end: /"/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	        }
	      ]
	    },
	    {
	      className: 'regexp',
	      variants: [
	        {
	          begin: '///', end: '///',
	          contains: [SUBST, hljs.HASH_COMMENT_MODE]
	        },
	        {
	          begin: '//[gim]*',
	          relevance: 0
	        },
	        {
	          // regex can't start with space to parse x / 2 / 3 as two divisions
	          // regex can't start with *, and it supports an "illegal" in the main mode
	          begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
	        }
	      ]
	    },
	    {
	      begin: '@' + JS_IDENT_RE // relevance booster
	    },
	    {
	      subLanguage: 'javascript',
	      excludeBegin: true, excludeEnd: true,
	      variants: [
	        {
	          begin: '```', end: '```',
	        },
	        {
	          begin: '`', end: '`',
	        }
	      ]
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
	  var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
	  var PARAMS = {
	    className: 'params',
	    begin: '\\([^\\(]', returnBegin: true,
	    /* We need another contained nameless mode to not have every nested
	    pair of parens to be called "params" */
	    contains: [{
	      begin: /\(/, end: /\)/,
	      keywords: KEYWORDS,
	      contains: ['self'].concat(EXPRESSIONS)
	    }]
	  };

	  return {
	    aliases: ['coffee', 'cson', 'iced'],
	    keywords: KEYWORDS,
	    illegal: /\/\*/,
	    contains: EXPRESSIONS.concat([
	      hljs.COMMENT('###', '###'),
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'function',
	        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE, end: '[-=]>',
	        returnBegin: true,
	        contains: [TITLE, PARAMS]
	      },
	      {
	        // anonymous function start
	        begin: /[:\(,=]\s*/,
	        relevance: 0,
	        contains: [
	          {
	            className: 'function',
	            begin: PARAMS_RE, end: '[-=]>',
	            returnBegin: true,
	            contains: [PARAMS]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class',
	        end: '$',
	        illegal: /[:="\[\]]/,
	        contains: [
	          {
	            beginKeywords: 'extends',
	            endsWithParent: true,
	            illegal: /[:="\[\]]/,
	            contains: [TITLE]
	          },
	          TITLE
	        ]
	      },
	      {
	        begin: JS_IDENT_RE + ':', end: ':',
	        returnBegin: true, returnEnd: true,
	        relevance: 0
	      }
	    ])
	  };
	};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword:
	        '_ as at cofix else end exists exists2 fix for forall fun if IF in let ' +
	        'match mod Prop return Set then Type using where with ' +
	        'Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo ' +
	        'Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion ' +
	        'Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture ' +
	        'Conjectures Constant constr Constraint Constructors Context Corollary ' +
	        'CreateHintDb Cut Declare Defined Definition Delimit Dependencies Dependent' +
	        'Derive Drop eauto End Equality Eval Example Existential Existentials ' +
	        'Existing Export exporting Extern Extract Extraction Fact Field Fields File ' +
	        'Fixpoint Focus for From Function Functional Generalizable Global Goal Grab ' +
	        'Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident ' +
	        'Identity If Immediate Implicit Import Include Inductive Infix Info Initial ' +
	        'Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear ' +
	        'Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML ' +
	        'Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation ' +
	        'Obligations Opaque Open Optimize Options Parameter Parameters Parametric ' +
	        'Path Paths pattern Polymorphic Preterm Print Printing Program Projections ' +
	        'Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark ' +
	        'Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save ' +
	        'Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern ' +
	        'SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies ' +
	        'Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time ' +
	        'Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused ' +
	        'Unfold Universe Universes Unset Unshelve using Variable Variables Variant ' +
	        'Verbose Visibility where with',
	      built_in:
	        'abstract absurd admit after apply as assert assumption at auto autorewrite ' +
	        'autounfold before bottom btauto by case case_eq cbn cbv change ' +
	        'classical_left classical_right clear clearbody cofix compare compute ' +
	        'congruence constr_eq constructor contradict contradiction cut cutrewrite ' +
	        'cycle decide decompose dependent destruct destruction dintuition ' +
	        'discriminate discrR do double dtauto eapply eassumption eauto ecase ' +
	        'econstructor edestruct ediscriminate eelim eexact eexists einduction ' +
	        'einjection eleft elim elimtype enough equality erewrite eright ' +
	        'esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail ' +
	        'field field_simplify field_simplify_eq first firstorder fix fold fourier ' +
	        'functional generalize generalizing gfail give_up has_evar hnf idtac in ' +
	        'induction injection instantiate intro intro_pattern intros intuition ' +
	        'inversion inversion_clear is_evar is_var lapply lazy left lia lra move ' +
	        'native_compute nia nsatz omega once pattern pose progress proof psatz quote ' +
	        'record red refine reflexivity remember rename repeat replace revert ' +
	        'revgoals rewrite rewrite_strat right ring ring_simplify rtauto set ' +
	        'setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry ' +
	        'setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve ' +
	        'specialize split split_Rabs split_Rmult stepl stepr subst sum swap ' +
	        'symmetry tactic tauto time timeout top transitivity trivial try tryif ' +
	        'unfold unify until using vm_compute with'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.COMMENT('\\(\\*', '\\*\\)'),
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'type',
	        excludeBegin: true,
	        begin: '\\|\\s*',
	        end: '\\w+'
	      },
	      {begin: /[-=]>/} // relevance booster
	    ]
	  };
	};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports = function cos (hljs) {

	  var STRINGS = {
	    className: 'string',
	    variants: [
	      {
	        begin: '"',
	        end: '"',
	        contains: [{ // escaped
	          begin: "\"\"",
	          relevance: 0
	        }]
	      }
	    ]
	  };

	  var NUMBERS = {
	    className: "number",
	    begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
	    relevance: 0
	  };

	  var COS_KEYWORDS =
	    'property parameter class classmethod clientmethod extends as break ' +
	    'catch close continue do d|0 else elseif for goto halt hang h|0 if job ' +
	    'j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 ' +
	    'tcommit throw trollback try tstart use view while write w|0 xecute x|0 ' +
	    'zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert ' +
	    'zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit ' +
	    'zsync ascii';

	    // registered function - no need in them due to all functions are highlighted,
	    // but I'll just leave this here.

	    //"$bit", "$bitcount",
	    //"$bitfind", "$bitlogic", "$case", "$char", "$classmethod", "$classname",
	    //"$compile", "$data", "$decimal", "$double", "$extract", "$factor",
	    //"$find", "$fnumber", "$get", "$increment", "$inumber", "$isobject",
	    //"$isvaliddouble", "$isvalidnum", "$justify", "$length", "$list",
	    //"$listbuild", "$listdata", "$listfind", "$listfromstring", "$listget",
	    //"$listlength", "$listnext", "$listsame", "$listtostring", "$listvalid",
	    //"$locate", "$match", "$method", "$name", "$nconvert", "$next",
	    //"$normalize", "$now", "$number", "$order", "$parameter", "$piece",
	    //"$prefetchoff", "$prefetchon", "$property", "$qlength", "$qsubscript",
	    //"$query", "$random", "$replace", "$reverse", "$sconvert", "$select",
	    //"$sortbegin", "$sortend", "$stack", "$text", "$translate", "$view",
	    //"$wascii", "$wchar", "$wextract", "$wfind", "$wiswide", "$wlength",
	    //"$wreverse", "$xecute", "$zabs", "$zarccos", "$zarcsin", "$zarctan",
	    //"$zcos", "$zcot", "$zcsc", "$zdate", "$zdateh", "$zdatetime",
	    //"$zdatetimeh", "$zexp", "$zhex", "$zln", "$zlog", "$zpower", "$zsec",
	    //"$zsin", "$zsqr", "$ztan", "$ztime", "$ztimeh", "$zboolean",
	    //"$zconvert", "$zcrc", "$zcyc", "$zdascii", "$zdchar", "$zf",
	    //"$ziswide", "$zlascii", "$zlchar", "$zname", "$zposition", "$zqascii",
	    //"$zqchar", "$zsearch", "$zseek", "$zstrip", "$zwascii", "$zwchar",
	    //"$zwidth", "$zwpack", "$zwbpack", "$zwunpack", "$zwbunpack", "$zzenkaku",
	    //"$change", "$mv", "$mvat", "$mvfmt", "$mvfmts", "$mviconv",
	    //"$mviconvs", "$mvinmat", "$mvlover", "$mvoconv", "$mvoconvs", "$mvraise",
	    //"$mvtrans", "$mvv", "$mvname", "$zbitand", "$zbitcount", "$zbitfind",
	    //"$zbitget", "$zbitlen", "$zbitnot", "$zbitor", "$zbitset", "$zbitstr",
	    //"$zbitxor", "$zincrement", "$znext", "$zorder", "$zprevious", "$zsort",
	    //"device", "$ecode", "$estack", "$etrap", "$halt", "$horolog",
	    //"$io", "$job", "$key", "$namespace", "$principal", "$quit", "$roles",
	    //"$storage", "$system", "$test", "$this", "$tlevel", "$username",
	    //"$x", "$y", "$za", "$zb", "$zchild", "$zeof", "$zeos", "$zerror",
	    //"$zhorolog", "$zio", "$zjob", "$zmode", "$znspace", "$zparent", "$zpi",
	    //"$zpos", "$zreference", "$zstorage", "$ztimestamp", "$ztimezone",
	    //"$ztrap", "$zversion"

	  return {
	    case_insensitive: true,
	    aliases: ["cos", "cls"],
	    keywords: COS_KEYWORDS,
	    contains: [
	      NUMBERS,
	      STRINGS,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: "comment",
	        begin: /;/, end: "$",
	        relevance: 0
	      },
	      { // Functions and user-defined functions: write $ztime(60*60*3), $$myFunc(10), $$^Val(1)
	        className: "built_in",
	        begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
	      },
	      { // Macro command: quit $$$OK
	        className: "built_in",
	        begin: /\$\$\$[a-zA-Z]+/
	      },
	      { // Special (global) variables: write %request.Content; Built-in classes: %Library.Integer
	        className: "built_in",
	        begin: /%[a-z]+(?:\.[a-z]+)*/
	      },
	      { // Global variable: set ^globalName = 12 write ^globalName
	        className: "symbol",
	        begin: /\^%?[a-zA-Z][\w]*/
	      },
	      { // Some control constructions: do ##class(Package.ClassName).Method(), ##super()
	        className: "keyword",
	        begin: /##class|##super|#define|#dim/
	      },

	      // sub-languages: are not fully supported by hljs by 11/15/2015
	      // left for the future implementation.
	      {
	        begin: /&sql\(/,    end: /\)/,
	        excludeBegin: true, excludeEnd: true,
	        subLanguage: "sql"
	      },
	      {
	        begin: /&(js|jscript|javascript)</, end: />/,
	        excludeBegin: true, excludeEnd: true,
	        subLanguage: "javascript"
	      },
	      {
	        // this brakes first and last tag, but this is the only way to embed a valid html
	        begin: /&html<\s*</, end: />\s*>/,
	        subLanguage: "xml"
	      }
	    ]
	  };
	};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var RESOURCES = 'primitive rsc_template';

	  var COMMANDS = 'group clone ms master location colocation order fencing_topology ' +
	      'rsc_ticket acl_target acl_group user role ' +
	      'tag xml';

	  var PROPERTY_SETS = 'property rsc_defaults op_defaults';

	  var KEYWORDS = 'params meta operations op rule attributes utilization';

	  var OPERATORS = 'read write deny defined not_defined in_range date spec in ' +
	      'ref reference attribute type xpath version and or lt gt tag ' +
	      'lte gte eq ne \\';

	  var TYPES = 'number string';

	  var LITERALS = 'Master Started Slave Stopped start promote demote stop monitor true false';

	  return {
	    aliases: ['crm', 'pcmk'],
	    case_insensitive: true,
	    keywords: {
	      keyword: KEYWORDS + ' ' + OPERATORS + ' ' + TYPES,
	      literal: LITERALS
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        beginKeywords: 'node',
	        starts: {
	          end: '\\s*([\\w_-]+:)?',
	          starts: {
	            className: 'title',
	            end: '\\s*[\\$\\w_][\\w_-]*'
	          }
	        }
	      },
	      {
	        beginKeywords: RESOURCES,
	        starts: {
	          className: 'title',
	          end: '\\s*[\\$\\w_][\\w_-]*',
	          starts: {
	            end: '\\s*@?[\\w_][\\w_\\.:-]*'
	          }
	        }
	      },
	      {
	        begin: '\\b(' + COMMANDS.split(' ').join('|') + ')\\s+',
	        keywords: COMMANDS,
	        starts: {
	          className: 'title',
	          end: '[\\$\\w_][\\w_-]*'
	        }
	      },
	      {
	        beginKeywords: PROPERTY_SETS,
	        starts: {
	          className: 'title',
	          end: '\\s*([\\w_-]+:)?'
	        }
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'meta',
	        begin: '(ocf|systemd|service|lsb):[\\w_:-]+',
	        relevance: 0
	      },
	      {
	        className: 'number',
	        begin: '\\b\\d+(\\.\\d+)?(ms|s|h|m)?',
	        relevance: 0
	      },
	      {
	        className: 'literal',
	        begin: '[-]?(infinity|inf)',
	        relevance: 0
	      },
	      {
	        className: 'attr',
	        begin: /([A-Za-z\$_\#][\w_-]+)=/,
	        relevance: 0
	      },
	      {
	        className: 'tag',
	        begin: '</?',
	        end: '/?>',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var NUM_SUFFIX = '(_[uif](8|16|32|64))?';
	  var CRYSTAL_IDENT_RE = '[a-zA-Z_]\\w*[!?=]?';
	  var RE_STARTER = '!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|' +
	    '>>|>|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';
	  var CRYSTAL_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\][=?]?';
	  var CRYSTAL_KEYWORDS = {
	    keyword:
	      'abstract alias as asm begin break case class def do else elsif end ensure enum extend for fun if ifdef ' +
	      'include instance_sizeof is_a? lib macro module next of out pointerof private protected rescue responds_to? ' +
	      'return require self sizeof struct super then type typeof union unless until when while with yield ' +
	      '__DIR__ __FILE__ __LINE__',
	    literal: 'false nil true'
	  };
	  var SUBST = {
	    className: 'subst',
	    begin: '#{', end: '}',
	    keywords: CRYSTAL_KEYWORDS
	  };
	  var EXPANSION = {
	    className: 'template-variable',
	    variants: [
	      {begin: '\\{\\{', end: '\\}\\}'},
	      {begin: '\\{%', end: '%\\}'}
	    ],
	    keywords: CRYSTAL_KEYWORDS
	  };

	  function recursiveParen(begin, end) {
	    var
	    contains = [{begin: begin, end: end}];
	    contains[0].contains = contains;
	    return contains;
	  }
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {begin: /'/, end: /'/},
	      {begin: /"/, end: /"/},
	      {begin: /`/, end: /`/},
	      {begin: '%w?\\(', end: '\\)', contains: recursiveParen('\\(', '\\)')},
	      {begin: '%w?\\[', end: '\\]', contains: recursiveParen('\\[', '\\]')},
	      {begin: '%w?{', end: '}', contains: recursiveParen('{', '}')},
	      {begin: '%w?<', end: '>', contains: recursiveParen('<', '>')},
	      {begin: '%w?/', end: '/'},
	      {begin: '%w?%', end: '%'},
	      {begin: '%w?-', end: '-'},
	      {begin: '%w?\\|', end: '\\|'},
	    ],
	    relevance: 0,
	  };
	  var REGEXP = {
	    begin: '(' + RE_STARTER + ')\\s*',
	    contains: [
	      {
	        className: 'regexp',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	        variants: [
	          {begin: '//[a-z]*', relevance: 0},
	          {begin: '/', end: '/[a-z]*'},
	          {begin: '%r\\(', end: '\\)', contains: recursiveParen('\\(', '\\)')},
	          {begin: '%r\\[', end: '\\]', contains: recursiveParen('\\[', '\\]')},
	          {begin: '%r{', end: '}', contains: recursiveParen('{', '}')},
	          {begin: '%r<', end: '>', contains: recursiveParen('<', '>')},
	          {begin: '%r/', end: '/'},
	          {begin: '%r%', end: '%'},
	          {begin: '%r-', end: '-'},
	          {begin: '%r\\|', end: '\\|'},
	        ]
	      }
	    ],
	    relevance: 0
	  };
	  var REGEXP2 = {
	    className: 'regexp',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {begin: '%r\\(', end: '\\)', contains: recursiveParen('\\(', '\\)')},
	      {begin: '%r\\[', end: '\\]', contains: recursiveParen('\\[', '\\]')},
	      {begin: '%r{', end: '}', contains: recursiveParen('{', '}')},
	      {begin: '%r<', end: '>', contains: recursiveParen('<', '>')},
	      {begin: '%r/', end: '/'},
	      {begin: '%r%', end: '%'},
	      {begin: '%r-', end: '-'},
	      {begin: '%r\\|', end: '\\|'},
	    ],
	    relevance: 0
	  };
	  var ATTRIBUTE = {
	    className: 'meta',
	    begin: '@\\[', end: '\\]',
	    contains: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'})
	    ]
	  };
	  var CRYSTAL_DEFAULT_CONTAINS = [
	    EXPANSION,
	    STRING,
	    REGEXP,
	    REGEXP2,
	    ATTRIBUTE,
	    hljs.HASH_COMMENT_MODE,
	    {
	      className: 'class',
	      beginKeywords: 'class module struct', end: '$|;',
	      illegal: /=/,
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        hljs.inherit(hljs.TITLE_MODE, {begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
	        {begin: '<'} // relevance booster for inheritance
	      ]
	    },
	    {
	      className: 'class',
	      beginKeywords: 'lib enum union', end: '$|;',
	      illegal: /=/,
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        hljs.inherit(hljs.TITLE_MODE, {begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
	      ],
	      relevance: 10
	    },
	    {
	      className: 'function',
	      beginKeywords: 'def', end: /\B\b/,
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {
	          begin: CRYSTAL_METHOD_RE,
	          endsParent: true
	        })
	      ]
	    },
	    {
	      className: 'function',
	      beginKeywords: 'fun macro', end: /\B\b/,
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {
	          begin: CRYSTAL_METHOD_RE,
	          endsParent: true
	        })
	      ],
	      relevance: 5
	    },
	    {
	      className: 'symbol',
	      begin: hljs.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: ':',
	      contains: [STRING, {begin: CRYSTAL_METHOD_RE}],
	      relevance: 0
	    },
	    {
	      className: 'number',
	      variants: [
	        { begin: '\\b0b([01_]*[01])' + NUM_SUFFIX },
	        { begin: '\\b0o([0-7_]*[0-7])' + NUM_SUFFIX },
	        { begin: '\\b0x([A-Fa-f0-9_]*[A-Fa-f0-9])' + NUM_SUFFIX },
	        { begin: '\\b(([0-9][0-9_]*[0-9]|[0-9])(\\.[0-9_]*[0-9])?([eE][+-]?[0-9_]*[0-9])?)' + NUM_SUFFIX}
	      ],
	      relevance: 0
	    }
	  ];
	  SUBST.contains = CRYSTAL_DEFAULT_CONTAINS;
	  EXPANSION.contains = CRYSTAL_DEFAULT_CONTAINS.slice(1); // without EXPANSION

	  return {
	    aliases: ['cr'],
	    lexemes: CRYSTAL_IDENT_RE,
	    keywords: CRYSTAL_KEYWORDS,
	    contains: CRYSTAL_DEFAULT_CONTAINS
	  };
	};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // Normal keywords.
	      'abstract as base bool break byte case catch char checked const continue decimal ' +
	      'default delegate do double else enum event explicit extern finally fixed float ' +
	      'for foreach goto if implicit in int interface internal is lock long ' +
	      'object operator out override params private protected public readonly ref sbyte ' +
	      'sealed short sizeof stackalloc static string struct switch this try typeof ' +
	      'uint ulong unchecked unsafe ushort using virtual void volatile while ' +
	      'nameof ' +
	      // Contextual keywords.
	      'add alias ascending async await by descending dynamic equals from get global group into join ' +
	      'let on orderby partial remove select set value var where yield',
	    literal:
	      'null false true'
	  };

	  var VERBATIM_STRING = {
	    className: 'string',
	    begin: '@"', end: '"',
	    contains: [{begin: '""'}]
	  };
	  var VERBATIM_STRING_NO_LF = hljs.inherit(VERBATIM_STRING, {illegal: /\n/});
	  var SUBST = {
	    className: 'subst',
	    begin: '{', end: '}',
	    keywords: KEYWORDS
	  };
	  var SUBST_NO_LF = hljs.inherit(SUBST, {illegal: /\n/});
	  var INTERPOLATED_STRING = {
	    className: 'string',
	    begin: /\$"/, end: '"',
	    illegal: /\n/,
	    contains: [{begin: '{{'}, {begin: '}}'}, hljs.BACKSLASH_ESCAPE, SUBST_NO_LF]
	  };
	  var INTERPOLATED_VERBATIM_STRING = {
	    className: 'string',
	    begin: /\$@"/, end: '"',
	    contains: [{begin: '{{'}, {begin: '}}'}, {begin: '""'}, SUBST]
	  };
	  var INTERPOLATED_VERBATIM_STRING_NO_LF = hljs.inherit(INTERPOLATED_VERBATIM_STRING, {
	    illegal: /\n/,
	    contains: [{begin: '{{'}, {begin: '}}'}, {begin: '""'}, SUBST_NO_LF]
	  });
	  SUBST.contains = [
	    INTERPOLATED_VERBATIM_STRING,
	    INTERPOLATED_STRING,
	    VERBATIM_STRING,
	    hljs.APOS_STRING_MODE,
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE,
	    hljs.C_BLOCK_COMMENT_MODE
	  ];
	  SUBST_NO_LF.contains = [
	    INTERPOLATED_VERBATIM_STRING_NO_LF,
	    INTERPOLATED_STRING,
	    VERBATIM_STRING_NO_LF,
	    hljs.APOS_STRING_MODE,
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE,
	    hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, {illegal: /\n/})
	  ];
	  var STRING = {
	    variants: [
	      INTERPOLATED_VERBATIM_STRING,
	      INTERPOLATED_STRING,
	      VERBATIM_STRING,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE
	    ]
	  };

	  var TYPE_IDENT_RE = hljs.IDENT_RE + '(<' + hljs.IDENT_RE + '(\\s*,\\s*' + hljs.IDENT_RE + ')*>)?(\\[\\])?';
	  return {
	    aliases: ['csharp'],
	    keywords: KEYWORDS,
	    illegal: /::/,
	    contains: [
	      hljs.COMMENT(
	        '///',
	        '$',
	        {
	          returnBegin: true,
	          contains: [
	            {
	              className: 'doctag',
	              variants: [
	                {
	                  begin: '///', relevance: 0
	                },
	                {
	                  begin: '<!--|-->'
	                },
	                {
	                  begin: '</?', end: '>'
	                }
	              ]
	            }
	          ]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$',
	        keywords: {'meta-keyword': 'if else elif endif define undef warning error line region endregion pragma checksum'}
	      },
	      STRING,
	      hljs.C_NUMBER_MODE,
	      {
	        beginKeywords: 'class interface', end: /[{;=]/,
	        illegal: /[^\s:]/,
	        contains: [
	          hljs.TITLE_MODE,
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        beginKeywords: 'namespace', end: /[{;=]/,
	        illegal: /[^\s:]/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: '[a-zA-Z](\\.?\\w)*'}),
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        // Expression keywords prevent 'keyword Name(...)' from being
	        // recognized as a function definition
	        beginKeywords: 'new return throw await',
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '(' + TYPE_IDENT_RE + '\\s+)+' + hljs.IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: hljs.IDENT_RE + '\\s*\\(', returnBegin: true,
	            contains: [hljs.TITLE_MODE],
	            relevance: 0
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            keywords: KEYWORDS,
	            relevance: 0,
	            contains: [
	              STRING,
	              hljs.C_NUMBER_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: false,
	    lexemes: '[a-zA-Z][a-zA-Z0-9_-]*',
	    keywords: {
	      keyword: 'base-uri child-src connect-src default-src font-src form-action' +
	        ' frame-ancestors frame-src img-src media-src object-src plugin-types' +
	        ' report-uri sandbox script-src style-src', 
	    },
	    contains: [
	    {
	      className: 'string',
	      begin: "'", end: "'"
	    },
	    {
	      className: 'attribute',
	      begin: '^Content', end: ':', excludeEnd: true,
	    },
	    ]
	  };
	};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
	  var RULE = {
	    begin: /[A-Z\_\.\-]+\s*:/, returnBegin: true, end: ';', endsWithParent: true,
	    contains: [
	      {
	        className: 'attribute',
	        begin: /\S/, end: ':', excludeEnd: true,
	        starts: {
	          endsWithParent: true, excludeEnd: true,
	          contains: [
	            {
	              begin: /[\w-]+\(/, returnBegin: true,
	              contains: [
	                {
	                  className: 'built_in',
	                  begin: /[\w-]+/
	                },
	                {
	                  begin: /\(/, end: /\)/,
	                  contains: [
	                    hljs.APOS_STRING_MODE,
	                    hljs.QUOTE_STRING_MODE
	                  ]
	                }
	              ]
	            },
	            hljs.CSS_NUMBER_MODE,
	            hljs.QUOTE_STRING_MODE,
	            hljs.APOS_STRING_MODE,
	            hljs.C_BLOCK_COMMENT_MODE,
	            {
	              className: 'number', begin: '#[0-9A-Fa-f]+'
	            },
	            {
	              className: 'meta', begin: '!important'
	            }
	          ]
	        }
	      }
	    ]
	  };

	  return {
	    case_insensitive: true,
	    illegal: /[=\/|'\$]/,
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'selector-id', begin: /#[A-Za-z0-9_-]+/
	      },
	      {
	        className: 'selector-class', begin: /\.[A-Za-z0-9_-]+/
	      },
	      {
	        className: 'selector-attr',
	        begin: /\[/, end: /\]/,
	        illegal: '$'
	      },
	      {
	        className: 'selector-pseudo',
	        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
	      },
	      {
	        begin: '@(font-face|page)',
	        lexemes: '[a-z-]+',
	        keywords: 'font-face page'
	      },
	      {
	        begin: '@', end: '[{;]', // at_rule eating first "{" is a good thing
	                                 // because it doesn’t let it to be parsed as
	                                 // a rule set but instead drops parser into
	                                 // the default mode which is how it should be.
	        illegal: /:/, // break on Less variables @var: ...
	        contains: [
	          {
	            className: 'keyword',
	            begin: /\w+/
	          },
	          {
	            begin: /\s/, endsWithParent: true, excludeEnd: true,
	            relevance: 0,
	            contains: [
	              hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE,
	              hljs.CSS_NUMBER_MODE
	            ]
	          }
	        ]
	      },
	      {
	        className: 'selector-tag', begin: IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: '{', end: '}',
	        illegal: /\S/,
	        contains: [
	          hljs.C_BLOCK_COMMENT_MODE,
	          RULE,
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	module.exports = /**
	 * Known issues:
	 *
	 * - invalid hex string literals will be recognized as a double quoted strings
	 *   but 'x' at the beginning of string will not be matched
	 *
	 * - delimited string literals are not checked for matching end delimiter
	 *   (not possible to do with js regexp)
	 *
	 * - content of token string is colored as a string (i.e. no keyword coloring inside a token string)
	 *   also, content of token string is not validated to contain only valid D tokens
	 *
	 * - special token sequence rule is not strictly following D grammar (anything following #line
	 *   up to the end of line is matched as special token sequence)
	 */

	function(hljs) {
	  /**
	   * Language keywords
	   *
	   * @type {Object}
	   */
	  var D_KEYWORDS = {
	    keyword:
	      'abstract alias align asm assert auto body break byte case cast catch class ' +
	      'const continue debug default delete deprecated do else enum export extern final ' +
	      'finally for foreach foreach_reverse|10 goto if immutable import in inout int ' +
	      'interface invariant is lazy macro mixin module new nothrow out override package ' +
	      'pragma private protected public pure ref return scope shared static struct ' +
	      'super switch synchronized template this throw try typedef typeid typeof union ' +
	      'unittest version void volatile while with __FILE__ __LINE__ __gshared|10 ' +
	      '__thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',
	    built_in:
	      'bool cdouble cent cfloat char creal dchar delegate double dstring float function ' +
	      'idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar ' +
	      'wstring',
	    literal:
	      'false null true'
	  };

	  /**
	   * Number literal regexps
	   *
	   * @type {String}
	   */
	  var decimal_integer_re = '(0|[1-9][\\d_]*)',
	    decimal_integer_nosus_re = '(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)',
	    binary_integer_re = '0[bB][01_]+',
	    hexadecimal_digits_re = '([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)',
	    hexadecimal_integer_re = '0[xX]' + hexadecimal_digits_re,

	    decimal_exponent_re = '([eE][+-]?' + decimal_integer_nosus_re + ')',
	    decimal_float_re = '(' + decimal_integer_nosus_re + '(\\.\\d*|' + decimal_exponent_re + ')|' +
	                '\\d+\\.' + decimal_integer_nosus_re + decimal_integer_nosus_re + '|' +
	                '\\.' + decimal_integer_re + decimal_exponent_re + '?' +
	              ')',
	    hexadecimal_float_re = '(0[xX](' +
	                  hexadecimal_digits_re + '\\.' + hexadecimal_digits_re + '|'+
	                  '\\.?' + hexadecimal_digits_re +
	                 ')[pP][+-]?' + decimal_integer_nosus_re + ')',

	    integer_re = '(' +
	      decimal_integer_re + '|' +
	      binary_integer_re  + '|' +
	       hexadecimal_integer_re   +
	    ')',

	    float_re = '(' +
	      hexadecimal_float_re + '|' +
	      decimal_float_re  +
	    ')';

	  /**
	   * Escape sequence supported in D string and character literals
	   *
	   * @type {String}
	   */
	  var escape_sequence_re = '\\\\(' +
	              '[\'"\\?\\\\abfnrtv]|' +  // common escapes
	              'u[\\dA-Fa-f]{4}|' +     // four hex digit unicode codepoint
	              '[0-7]{1,3}|' +       // one to three octal digit ascii char code
	              'x[\\dA-Fa-f]{2}|' +    // two hex digit ascii char code
	              'U[\\dA-Fa-f]{8}' +      // eight hex digit unicode codepoint
	              ')|' +
	              '&[a-zA-Z\\d]{2,};';      // named character entity

	  /**
	   * D integer number literals
	   *
	   * @type {Object}
	   */
	  var D_INTEGER_MODE = {
	    className: 'number',
	      begin: '\\b' + integer_re + '(L|u|U|Lu|LU|uL|UL)?',
	      relevance: 0
	  };

	  /**
	   * [D_FLOAT_MODE description]
	   * @type {Object}
	   */
	  var D_FLOAT_MODE = {
	    className: 'number',
	    begin: '\\b(' +
	        float_re + '([fF]|L|i|[fF]i|Li)?|' +
	        integer_re + '(i|[fF]i|Li)' +
	      ')',
	    relevance: 0
	  };

	  /**
	   * D character literal
	   *
	   * @type {Object}
	   */
	  var D_CHARACTER_MODE = {
	    className: 'string',
	    begin: '\'(' + escape_sequence_re + '|.)', end: '\'',
	    illegal: '.'
	  };

	  /**
	   * D string escape sequence
	   *
	   * @type {Object}
	   */
	  var D_ESCAPE_SEQUENCE = {
	    begin: escape_sequence_re,
	    relevance: 0
	  };

	  /**
	   * D double quoted string literal
	   *
	   * @type {Object}
	   */
	  var D_STRING_MODE = {
	    className: 'string',
	    begin: '"',
	    contains: [D_ESCAPE_SEQUENCE],
	    end: '"[cwd]?'
	  };

	  /**
	   * D wysiwyg and delimited string literals
	   *
	   * @type {Object}
	   */
	  var D_WYSIWYG_DELIMITED_STRING_MODE = {
	    className: 'string',
	    begin: '[rq]"',
	    end: '"[cwd]?',
	    relevance: 5
	  };

	  /**
	   * D alternate wysiwyg string literal
	   *
	   * @type {Object}
	   */
	  var D_ALTERNATE_WYSIWYG_STRING_MODE = {
	    className: 'string',
	    begin: '`',
	    end: '`[cwd]?'
	  };

	  /**
	   * D hexadecimal string literal
	   *
	   * @type {Object}
	   */
	  var D_HEX_STRING_MODE = {
	    className: 'string',
	    begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
	    relevance: 10
	  };

	  /**
	   * D delimited string literal
	   *
	   * @type {Object}
	   */
	  var D_TOKEN_STRING_MODE = {
	    className: 'string',
	    begin: 'q"\\{',
	    end: '\\}"'
	  };

	  /**
	   * Hashbang support
	   *
	   * @type {Object}
	   */
	  var D_HASHBANG_MODE = {
	    className: 'meta',
	    begin: '^#!',
	    end: '$',
	    relevance: 5
	  };

	  /**
	   * D special token sequence
	   *
	   * @type {Object}
	   */
	  var D_SPECIAL_TOKEN_SEQUENCE_MODE = {
	    className: 'meta',
	    begin: '#(line)',
	    end: '$',
	    relevance: 5
	  };

	  /**
	   * D attributes
	   *
	   * @type {Object}
	   */
	  var D_ATTRIBUTE_MODE = {
	    className: 'keyword',
	    begin: '@[a-zA-Z_][a-zA-Z_\\d]*'
	  };

	  /**
	   * D nesting comment
	   *
	   * @type {Object}
	   */
	  var D_NESTING_COMMENT_MODE = hljs.COMMENT(
	    '\\/\\+',
	    '\\+\\/',
	    {
	      contains: ['self'],
	      relevance: 10
	    }
	  );

	  return {
	    lexemes: hljs.UNDERSCORE_IDENT_RE,
	    keywords: D_KEYWORDS,
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        D_NESTING_COMMENT_MODE,
	        D_HEX_STRING_MODE,
	        D_STRING_MODE,
	        D_WYSIWYG_DELIMITED_STRING_MODE,
	        D_ALTERNATE_WYSIWYG_STRING_MODE,
	        D_TOKEN_STRING_MODE,
	        D_FLOAT_MODE,
	        D_INTEGER_MODE,
	        D_CHARACTER_MODE,
	        D_HASHBANG_MODE,
	        D_SPECIAL_TOKEN_SEQUENCE_MODE,
	        D_ATTRIBUTE_MODE
	    ]
	  };
	};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['md', 'mkdown', 'mkd'],
	    contains: [
	      // highlight headers
	      {
	        className: 'section',
	        variants: [
	          { begin: '^#{1,6}', end: '$' },
	          { begin: '^.+?\\n[=-]{2,}$' }
	        ]
	      },
	      // inline html
	      {
	        begin: '<', end: '>',
	        subLanguage: 'xml',
	        relevance: 0
	      },
	      // lists (indicators only)
	      {
	        className: 'bullet',
	        begin: '^([*+-]|(\\d+\\.))\\s+'
	      },
	      // strong segments
	      {
	        className: 'strong',
	        begin: '[*_]{2}.+?[*_]{2}'
	      },
	      // emphasis segments
	      {
	        className: 'emphasis',
	        variants: [
	          { begin: '\\*.+?\\*' },
	          { begin: '_.+?_'
	          , relevance: 0
	          }
	        ]
	      },
	      // blockquotes
	      {
	        className: 'quote',
	        begin: '^>\\s+', end: '$'
	      },
	      // code snippets
	      {
	        className: 'code',
	        variants: [
	          {
	            begin: '^```\w*\s*$', end: '^```\s*$'
	          },
	          {
	            begin: '`.+?`'
	          },
	          {
	            begin: '^( {4}|\t)', end: '$',
	            relevance: 0
	          }
	        ]
	      },
	      // horizontal rules
	      {
	        begin: '^[-\\*]{3,}', end: '$'
	      },
	      // using links - title and link
	      {
	        begin: '\\[.+?\\][\\(\\[].*?[\\)\\]]',
	        returnBegin: true,
	        contains: [
	          {
	            className: 'string',
	            begin: '\\[', end: '\\]',
	            excludeBegin: true,
	            returnEnd: true,
	            relevance: 0
	          },
	          {
	            className: 'link',
	            begin: '\\]\\(', end: '\\)',
	            excludeBegin: true, excludeEnd: true
	          },
	          {
	            className: 'symbol',
	            begin: '\\]\\[', end: '\\]',
	            excludeBegin: true, excludeEnd: true
	          }
	        ],
	        relevance: 10
	      },
	      {
	        begin: /^\[[^\n]+\]:/,
	        returnBegin: true,
	        contains: [
	          {
	            className: 'symbol',
	            begin: /\[/, end: /\]/,
	            excludeBegin: true, excludeEnd: true
	          },
	          {
	            className: 'link',
	            begin: /:\s*/, end: /$/,
	            excludeBegin: true
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = function (hljs) {
	  var SUBST = {
	    className: 'subst',
	    begin: '\\$\\{', end: '}',
	    keywords: 'true false null this is new super'
	  };

	  var STRING = {
	    className: 'string',
	    variants: [
	      {
	        begin: 'r\'\'\'', end: '\'\'\''
	      },
	      {
	        begin: 'r"""', end: '"""'
	      },
	      {
	        begin: 'r\'', end: '\'',
	        illegal: '\\n'
	      },
	      {
	        begin: 'r"', end: '"',
	        illegal: '\\n'
	      },
	      {
	        begin: '\'\'\'', end: '\'\'\'',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      },
	      {
	        begin: '"""', end: '"""',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      },
	      {
	        begin: '\'', end: '\'',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      },
	      {
	        begin: '"', end: '"',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      }
	    ]
	  };
	  SUBST.contains = [
	    hljs.C_NUMBER_MODE, STRING
	  ];

	  var KEYWORDS = {
	    keyword: 'assert async await break case catch class const continue default do else enum extends false final ' +
	      'finally for if in is new null rethrow return super switch sync this throw true try var void while with yield ' +
	      'abstract as dynamic export external factory get implements import library operator part set static typedef',
	    built_in:
	      // dart:core
	      'print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set ' +
	      'Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num ' +
	      // dart:html
	      'document window querySelector querySelectorAll Element ElementList'
	  };

	  return {
	    keywords: KEYWORDS,
	    contains: [
	      STRING,
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          subLanguage: 'markdown'
	        }
	      ),
	      hljs.COMMENT(
	        '///',
	        '$',
	        {
	          subLanguage: 'markdown'
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta', begin: '@[A-Za-z]+'
	      },
	      {
	        begin: '=>' // No markup, just a relevance booster
	      }
	    ]
	  }
	};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS =
	    'exports register file shl array record property for mod while set ally label uses raise not ' +
	    'stored class safecall var interface or private static exit index inherited to else stdcall ' +
	    'override shr asm far resourcestring finalization packed virtual out and protected library do ' +
	    'xorwrite goto near function end div overload object unit begin string on inline repeat until ' +
	    'destructor write message program with read initialization except default nil if case cdecl in ' +
	    'downto threadvar of try pascal const external constructor type public then implementation ' +
	    'finally published procedure absolute reintroduce operator as is abstract alias assembler ' +
	    'bitpacked break continue cppdecl cvar enumerator experimental platform deprecated ' +
	    'unimplemented dynamic export far16 forward generic helper implements interrupt iochecks ' +
	    'local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat ' +
	    'specialize strict unaligned varargs ';
	  var COMMENT_MODES = [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.COMMENT(/\{/, /\}/, {relevance: 0}),
	    hljs.COMMENT(/\(\*/, /\*\)/, {relevance: 10})
	  ];
	  var DIRECTIVE = {
	    className: 'meta',
	    variants: [
	      {begin: /\{\$/, end: /\}/},
	      {begin: /\(\*\$/, end: /\*\)/}
	    ]
	  };
	  var STRING = {
	    className: 'string',
	    begin: /'/, end: /'/,
	    contains: [{begin: /''/}]
	  };
	  var CHAR_STRING = {
	    className: 'string', begin: /(#\d+)+/
	  };
	  var CLASS = {
	    begin: hljs.IDENT_RE + '\\s*=\\s*class\\s*\\(', returnBegin: true,
	    contains: [
	      hljs.TITLE_MODE
	    ]
	  };
	  var FUNCTION = {
	    className: 'function',
	    beginKeywords: 'function constructor destructor procedure', end: /[:;]/,
	    keywords: 'function constructor|10 destructor|10 procedure|10',
	    contains: [
	      hljs.TITLE_MODE,
	      {
	        className: 'params',
	        begin: /\(/, end: /\)/,
	        keywords: KEYWORDS,
	        contains: [STRING, CHAR_STRING, DIRECTIVE].concat(COMMENT_MODES)
	      },
	      DIRECTIVE
	    ].concat(COMMENT_MODES)
	  };
	  return {
	    aliases: ['dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm'],
	    case_insensitive: true,
	    keywords: KEYWORDS,
	    illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
	    contains: [
	      STRING, CHAR_STRING,
	      hljs.NUMBER_MODE,
	      CLASS,
	      FUNCTION,
	      DIRECTIVE
	    ].concat(COMMENT_MODES)
	  };
	};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['patch'],
	    contains: [
	      {
	        className: 'meta',
	        relevance: 10,
	        variants: [
	          {begin: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},
	          {begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/},
	          {begin: /^\-\-\- +\d+,\d+ +\-\-\-\-$/}
	        ]
	      },
	      {
	        className: 'comment',
	        variants: [
	          {begin: /Index: /, end: /$/},
	          {begin: /={3,}/, end: /$/},
	          {begin: /^\-{3}/, end: /$/},
	          {begin: /^\*{3} /, end: /$/},
	          {begin: /^\+{3}/, end: /$/},
	          {begin: /\*{5}/, end: /\*{5}$/}
	        ]
	      },
	      {
	        className: 'addition',
	        begin: '^\\+', end: '$'
	      },
	      {
	        className: 'deletion',
	        begin: '^\\-', end: '$'
	      },
	      {
	        className: 'addition',
	        begin: '^\\!', end: '$'
	      }
	    ]
	  };
	};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var FILTER = {
	    begin: /\|[A-Za-z]+:?/,
	    keywords: {
	      name:
	        'truncatewords removetags linebreaksbr yesno get_digit timesince random striptags ' +
	        'filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands ' +
	        'title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode ' +
	        'timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort ' +
	        'dictsortreversed default_if_none pluralize lower join center default ' +
	        'truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first ' +
	        'escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize ' +
	        'localtime utc timezone'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE
	    ]
	  };

	  return {
	    aliases: ['jinja'],
	    case_insensitive: true,
	    subLanguage: 'xml',
	    contains: [
	      hljs.COMMENT(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/),
	      hljs.COMMENT(/\{#/, /#}/),
	      {
	        className: 'template-tag',
	        begin: /\{%/, end: /%}/,
	        contains: [
	          {
	            className: 'name',
	            begin: /\w+/,
	            keywords: {
	              name:
	                'comment endcomment load templatetag ifchanged endifchanged if endif firstof for ' +
	                'endfor ifnotequal endifnotequal widthratio extends include spaceless ' +
	                'endspaceless regroup ifequal endifequal ssi now with cycle url filter ' +
	                'endfilter debug block endblock else autoescape endautoescape csrf_token empty elif ' +
	                'endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix ' +
	                'plural get_current_language language get_available_languages ' +
	                'get_current_language_bidi get_language_info get_language_info_list localize ' +
	                'endlocalize localtime endlocaltime timezone endtimezone get_current_timezone ' +
	                'verbatim'
	            },
	            starts: {
	              endsWithParent: true,
	              keywords: 'in by as',
	              contains: [FILTER],
	              relevance: 0
	            }
	          }
	        ]
	      },
	      {
	        className: 'template-variable',
	        begin: /\{\{/, end: /}}/,
	        contains: [FILTER]
	      }
	    ]
	  };
	};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['bind', 'zone'],
	    keywords: {
	      keyword:
	        'IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX ' +
	        'LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT'
	    },
	    contains: [
	      hljs.COMMENT(';', '$', {relevance: 0}),
	      {
	        className: 'meta',
	        begin: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
	      },
	      // IPv6
	      {
	        className: 'number',
	        begin: '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b'
	      },
	      // IPv4
	      {
	        className: 'number',
	        begin: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b'
	      },
	      hljs.inherit(hljs.NUMBER_MODE, {begin: /\b\d+[dhwm]?/})
	    ]
	  };
	};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['docker'],
	    case_insensitive: true,
	    keywords: 'from maintainer expose env arg user onbuild stopsignal',
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      {
	        beginKeywords: 'run cmd entrypoint volume add copy workdir label healthcheck shell',
	        starts: {
	          end: /[^\\]\n/,
	          subLanguage: 'bash'
	        }
	      }
	    ],
	    illegal: '</'
	  }
	};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var COMMENT = hljs.COMMENT(
	    /^\s*@?rem\b/, /$/,
	    {
	      relevance: 10
	    }
	  );
	  var LABEL = {
	    className: 'symbol',
	    begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
	    relevance: 0
	  };
	  return {
	    aliases: ['bat', 'cmd'],
	    case_insensitive: true,
	    illegal: /\/\*/,
	    keywords: {
	      keyword:
	        'if else goto for in do call exit not exist errorlevel defined ' +
	        'equ neq lss leq gtr geq',
	      built_in:
	        'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux ' +
	        'shift cd dir echo setlocal endlocal set pause copy ' +
	        'append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color ' +
	        'comp compact convert date dir diskcomp diskcopy doskey erase fs ' +
	        'find findstr format ftype graftabl help keyb label md mkdir mode more move path ' +
	        'pause print popd pushd promt rd recover rem rename replace restore rmdir shift' +
	        'sort start subst time title tree type ver verify vol ' +
	        // winutils
	        'ping net ipconfig taskkill xcopy ren del'
	    },
	    contains: [
	      {
	        className: 'variable', begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
	      },
	      {
	        className: 'function',
	        begin: LABEL.begin, end: 'goto:eof',
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'}),
	          COMMENT
	        ]
	      },
	      {
	        className: 'number', begin: '\\b\\d+',
	        relevance: 0
	      },
	      COMMENT
	    ]
	  };
	};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var QUOTED_PROPERTY = {
	    className: 'string',
	    begin: /"/, end: /"/
	  };
	  var APOS_PROPERTY = {
	    className: 'string',
	    begin: /'/, end: /'/
	  };
	  var UNQUOTED_PROPERTY = {
	    className: 'string',
	    begin: '[\\w-?]+:\\w+', end: '\\W',
	    relevance: 0
	  };
	  var VALUELESS_PROPERTY = {
	    className: 'string',
	    begin: '\\w+-?\\w+', end: '\\W',
	    relevance: 0
	  };

	  return {
	    keywords: 'dsconfig',
	    contains: [
	      {
	        className: 'keyword',
	        begin: '^dsconfig', end: '\\s', excludeEnd: true,
	        relevance: 10
	      },
	      {
	        className: 'built_in',
	        begin: '(list|create|get|set|delete)-(\\w+)', end: '\\s', excludeEnd: true,
	        illegal: '!@#$%^&*()',
	        relevance: 10
	      },
	      {
	        className: 'built_in',
	        begin: '--(\\w+)', end: '\\s', excludeEnd: true
	      },
	      QUOTED_PROPERTY,
	      APOS_PROPERTY,
	      UNQUOTED_PROPERTY,
	      VALUELESS_PROPERTY,
	      hljs.HASH_COMMENT_MODE
	    ]
	  };
	};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var STRINGS = {
	    className: 'string',
	    variants: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?"' }),
	      {
	        begin: '(u8?|U)?R"', end: '"',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        begin: '\'\\\\?.', end: '\'',
	        illegal: '.'
	      }
	    ]
	  };

	  var NUMBERS = {
	    className: 'number',
	    variants: [
	      { begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)' },
	      { begin: hljs.C_NUMBER_RE }
	    ],
	    relevance: 0
	  };

	  var PREPROCESSOR = {
	    className: 'meta',
	    begin: '#', end: '$',
	    keywords: {'meta-keyword': 'if else elif endif define undef ifdef ifndef'},
	    contains: [
	      {
	        begin: /\\\n/, relevance: 0
	      },
	      {
	        beginKeywords: 'include', end: '$',
	        keywords: {'meta-keyword': 'include'},
	        contains: [
	          hljs.inherit(STRINGS, {className: 'meta-string'}),
	          {
	            className: 'meta-string',
	            begin: '<', end: '>',
	            illegal: '\\n'
	          }
	        ]
	      },
	      STRINGS,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };

	  var DTS_REFERENCE = {
	    className: 'variable',
	    begin: '\\&[a-z\\d_]*\\b'
	  };

	  var DTS_KEYWORD = {
	    className: 'meta-keyword',
	    begin: '/[a-z][a-z\\d-]*/'
	  };

	  var DTS_LABEL = {
	    className: 'symbol',
	    begin: '^\\s*[a-zA-Z_][a-zA-Z\\d_]*:'
	  };

	  var DTS_CELL_PROPERTY = {
	    className: 'params',
	    begin: '<',
	    end: '>',
	    contains: [
	      NUMBERS,
	      DTS_REFERENCE
	    ]
	  };

	  var DTS_NODE = {
	    className: 'class',
	    begin: /[a-zA-Z_][a-zA-Z\d_@]*\s{/,
	    end: /[{;=]/,
	    returnBegin: true,
	    excludeEnd: true
	  };

	  var DTS_ROOT_NODE = {
	    className: 'class',
	    begin: '/\\s*{',
	    end: '};',
	    relevance: 10,
	    contains: [
	      DTS_REFERENCE,
	      DTS_KEYWORD,
	      DTS_LABEL,
	      DTS_NODE,
	      DTS_CELL_PROPERTY,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      NUMBERS,
	      STRINGS
	    ]
	  };

	  return {
	    keywords: "",
	    contains: [
	      DTS_ROOT_NODE,
	      DTS_REFERENCE,
	      DTS_KEYWORD,
	      DTS_LABEL,
	      DTS_NODE,
	      DTS_CELL_PROPERTY,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      NUMBERS,
	      STRINGS,
	      PREPROCESSOR,
	      {
	        begin: hljs.IDENT_RE + '::',
	        keywords: ""
	      }
	    ]
	  };
	};

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';
	  return {
	    aliases: ['dst'],
	    case_insensitive: true,
	    subLanguage: 'xml',
	    contains: [
	      {
	        className: 'template-tag',
	        begin: /\{[#\/]/, end: /\}/, illegal: /;/,
	        contains: [
	          {
	            className: 'name',
	            begin: /[a-zA-Z\.-]+/,
	            starts: {
	              endsWithParent: true, relevance: 0,
	              contains: [
	                hljs.QUOTE_STRING_MODE
	              ]
	            }
	          }
	        ]
	      },
	      {
	        className: 'template-variable',
	        begin: /\{/, end: /\}/, illegal: /;/,
	        keywords: EXPRESSION_KEYWORDS
	      }
	    ]
	  };
	};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	    var commentMode = hljs.COMMENT(/\(\*/, /\*\)/);

	    var nonTerminalMode = {
	        className: "attribute",
	        begin: /^[ ]*[a-zA-Z][a-zA-Z-]*([\s-]+[a-zA-Z][a-zA-Z]*)*/
	    };

	    var specialSequenceMode = {
	        className: "meta",
	        begin: /\?.*\?/
	    };

	    var ruleBodyMode = {
	        begin: /=/, end: /;/,
	        contains: [
	            commentMode,
	            specialSequenceMode,
	            // terminals
	            hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE
	        ]
	    };

	    return {
	        illegal: /\S/,
	        contains: [
	            commentMode,
	            nonTerminalMode,
	            ruleBodyMode
	        ]
	    };
	};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var ELIXIR_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?';
	  var ELIXIR_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
	  var ELIXIR_KEYWORDS =
	    'and false then defined module in return redo retry end for true self when ' +
	    'next until do begin unless nil break not case cond alias while ensure or ' +
	    'include use alias fn quote';
	  var SUBST = {
	    className: 'subst',
	    begin: '#\\{', end: '}',
	    lexemes: ELIXIR_IDENT_RE,
	    keywords: ELIXIR_KEYWORDS
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {
	        begin: /'/, end: /'/
	      },
	      {
	        begin: /"/, end: /"/
	      }
	    ]
	  };
	  var FUNCTION = {
	    className: 'function',
	    beginKeywords: 'def defp defmacro', end: /\B\b/, // the mode is ended by the title
	    contains: [
	      hljs.inherit(hljs.TITLE_MODE, {
	        begin: ELIXIR_IDENT_RE,
	        endsParent: true
	      })
	    ]
	  };
	  var CLASS = hljs.inherit(FUNCTION, {
	    className: 'class',
	    beginKeywords: 'defimpl defmodule defprotocol defrecord', end: /\bdo\b|$|;/
	  });
	  var ELIXIR_DEFAULT_CONTAINS = [
	    STRING,
	    hljs.HASH_COMMENT_MODE,
	    CLASS,
	    FUNCTION,
	    {
	      className: 'symbol',
	      begin: ':(?!\\s)',
	      contains: [STRING, {begin: ELIXIR_METHOD_RE}],
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: ELIXIR_IDENT_RE + ':',
	      relevance: 0
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    },
	    {
	      className: 'variable',
	      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))'
	    },
	    {
	      begin: '->'
	    },
	    { // regexp container
	      begin: '(' + hljs.RE_STARTERS_RE + ')\\s*',
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        {
	          className: 'regexp',
	          illegal: '\\n',
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	          variants: [
	            {
	              begin: '/', end: '/[a-z]*'
	            },
	            {
	              begin: '%r\\[', end: '\\][a-z]*'
	            }
	          ]
	        }
	      ],
	      relevance: 0
	    }
	  ];
	  SUBST.contains = ELIXIR_DEFAULT_CONTAINS;

	  return {
	    lexemes: ELIXIR_IDENT_RE,
	    keywords: ELIXIR_KEYWORDS,
	    contains: ELIXIR_DEFAULT_CONTAINS
	  };
	};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var COMMENT = {
	    variants: [
	      hljs.COMMENT('--', '$'),
	      hljs.COMMENT(
	        '{-',
	        '-}',
	        {
	          contains: ['self']
	        }
	      )
	    ]
	  };

	  var CONSTRUCTOR = {
	    className: 'type',
	    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (built-in, infix).
	    relevance: 0
	  };

	  var LIST = {
	    begin: '\\(', end: '\\)',
	    illegal: '"',
	    contains: [
	      {className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'},
	      COMMENT
	    ]
	  };

	  var RECORD = {
	    begin: '{', end: '}',
	    contains: LIST.contains
	  };

	  return {
	    keywords:
	      'let in if then else case of where module import exposing ' +
	      'type alias as infix infixl infixr port effect command subscription',
	    contains: [

	      // Top-level constructions.

	      {
	        beginKeywords: 'port effect module', end: 'exposing',
	        keywords: 'port effect module where command subscription exposing',
	        contains: [LIST, COMMENT],
	        illegal: '\\W\\.|;'
	      },
	      {
	        begin: 'import', end: '$',
	        keywords: 'import as exposing',
	        contains: [LIST, COMMENT],
	        illegal: '\\W\\.|;'
	      },
	      {
	        begin: 'type', end: '$',
	        keywords: 'type alias',
	        contains: [CONSTRUCTOR, LIST, RECORD, COMMENT]
	      },
	      {
	        beginKeywords: 'infix infixl infixr', end: '$',
	        contains: [hljs.C_NUMBER_MODE, COMMENT]
	      },
	      {
	        begin: 'port', end: '$',
	        keywords: 'port',
	        contains: [COMMENT]
	      },

	      // Literals and names.

	      // TODO: characters.
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      CONSTRUCTOR,
	      hljs.inherit(hljs.TITLE_MODE, {begin: '^[_a-z][\\w\']*'}),
	      COMMENT,

	      {begin: '->|<-'} // No markup, relevance booster
	    ],
	    illegal: /;/
	  };
	};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var RUBY_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
	  var RUBY_KEYWORDS = {
	    keyword:
	      'and then defined module in return redo if BEGIN retry end for self when ' +
	      'next until do begin unless END rescue else break undef not super class case ' +
	      'require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor',
	    literal:
	      'true false nil'
	  };
	  var YARDOCTAG = {
	    className: 'doctag',
	    begin: '@[A-Za-z]+'
	  };
	  var IRB_OBJECT = {
	    begin: '#<', end: '>'
	  };
	  var COMMENT_MODES = [
	    hljs.COMMENT(
	      '#',
	      '$',
	      {
	        contains: [YARDOCTAG]
	      }
	    ),
	    hljs.COMMENT(
	      '^\\=begin',
	      '^\\=end',
	      {
	        contains: [YARDOCTAG],
	        relevance: 10
	      }
	    ),
	    hljs.COMMENT('^__END__', '\\n$')
	  ];
	  var SUBST = {
	    className: 'subst',
	    begin: '#\\{', end: '}',
	    keywords: RUBY_KEYWORDS
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	    variants: [
	      {begin: /'/, end: /'/},
	      {begin: /"/, end: /"/},
	      {begin: /`/, end: /`/},
	      {begin: '%[qQwWx]?\\(', end: '\\)'},
	      {begin: '%[qQwWx]?\\[', end: '\\]'},
	      {begin: '%[qQwWx]?{', end: '}'},
	      {begin: '%[qQwWx]?<', end: '>'},
	      {begin: '%[qQwWx]?/', end: '/'},
	      {begin: '%[qQwWx]?%', end: '%'},
	      {begin: '%[qQwWx]?-', end: '-'},
	      {begin: '%[qQwWx]?\\|', end: '\\|'},
	      {
	        // \B in the beginning suppresses recognition of ?-sequences where ?
	        // is the last character of a preceding identifier, as in: `func?4`
	        begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
	      },
	      {
	        begin: /<<(-?)\w+$/, end: /^\s*\w+$/,
	      }
	    ]
	  };
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)', endsParent: true,
	    keywords: RUBY_KEYWORDS
	  };

	  var RUBY_DEFAULT_CONTAINS = [
	    STRING,
	    IRB_OBJECT,
	    {
	      className: 'class',
	      beginKeywords: 'class module', end: '$|;',
	      illegal: /=/,
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {begin: '[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?'}),
	        {
	          begin: '<\\s*',
	          contains: [{
	            begin: '(' + hljs.IDENT_RE + '::)?' + hljs.IDENT_RE
	          }]
	        }
	      ].concat(COMMENT_MODES)
	    },
	    {
	      className: 'function',
	      beginKeywords: 'def', end: '$|;',
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {begin: RUBY_METHOD_RE}),
	        PARAMS
	      ].concat(COMMENT_MODES)
	    },
	    {
	      // swallow namespace qualifiers before symbols
	      begin: hljs.IDENT_RE + '::'
	    },
	    {
	      className: 'symbol',
	      begin: hljs.UNDERSCORE_IDENT_RE + '(\\!|\\?)?:',
	      relevance: 0
	    },
	    {
	      className: 'symbol',
	      begin: ':(?!\\s)',
	      contains: [STRING, {begin: RUBY_METHOD_RE}],
	      relevance: 0
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    },
	    {
	      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))' // variables
	    },
	    {
	      className: 'params',
	      begin: /\|/, end: /\|/,
	      keywords: RUBY_KEYWORDS
	    },
	    { // regexp container
	      begin: '(' + hljs.RE_STARTERS_RE + '|unless)\\s*',
	      keywords: 'unless',
	      contains: [
	        IRB_OBJECT,
	        {
	          className: 'regexp',
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
	          illegal: /\n/,
	          variants: [
	            {begin: '/', end: '/[a-z]*'},
	            {begin: '%r{', end: '}[a-z]*'},
	            {begin: '%r\\(', end: '\\)[a-z]*'},
	            {begin: '%r!', end: '![a-z]*'},
	            {begin: '%r\\[', end: '\\][a-z]*'}
	          ]
	        }
	      ].concat(COMMENT_MODES),
	      relevance: 0
	    }
	  ].concat(COMMENT_MODES);

	  SUBST.contains = RUBY_DEFAULT_CONTAINS;
	  PARAMS.contains = RUBY_DEFAULT_CONTAINS;

	  var SIMPLE_PROMPT = "[>?]>";
	  var DEFAULT_PROMPT = "[\\w#]+\\(\\w+\\):\\d+:\\d+>";
	  var RVM_PROMPT = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>";

	  var IRB_DEFAULT = [
	    {
	      begin: /^\s*=>/,
	      starts: {
	        end: '$', contains: RUBY_DEFAULT_CONTAINS
	      }
	    },
	    {
	      className: 'meta',
	      begin: '^('+SIMPLE_PROMPT+"|"+DEFAULT_PROMPT+'|'+RVM_PROMPT+')',
	      starts: {
	        end: '$', contains: RUBY_DEFAULT_CONTAINS
	      }
	    }
	  ];

	  return {
	    aliases: ['rb', 'gemspec', 'podspec', 'thor', 'irb'],
	    keywords: RUBY_KEYWORDS,
	    illegal: /\/\*/,
	    contains: COMMENT_MODES.concat(IRB_DEFAULT).concat(RUBY_DEFAULT_CONTAINS)
	  };
	};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    subLanguage: 'xml',
	    contains: [
	      hljs.COMMENT('<%#', '%>'),
	      {
	        begin: '<%[%=-]?', end: '[%-]?%>',
	        subLanguage: 'ruby',
	        excludeBegin: true,
	        excludeEnd: true
	      }
	    ]
	  };
	};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      built_in:
	        'spawn spawn_link self',
	      keyword:
	        'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if ' +
	        'let not of or orelse|10 query receive rem try when xor'
	    },
	    contains: [
	      {
	        className: 'meta', begin: '^[0-9]+> ',
	        relevance: 10
	      },
	      hljs.COMMENT('%', '$'),
	      {
	        className: 'number',
	        begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
	        relevance: 0
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        begin: '\\?(::)?([A-Z]\\w*(::)?)+'
	      },
	      {
	        begin: '->'
	      },
	      {
	        begin: 'ok'
	      },
	      {
	        begin: '!'
	      },
	      {
	        begin: '(\\b[a-z\'][a-zA-Z0-9_\']*:[a-z\'][a-zA-Z0-9_\']*)|(\\b[a-z\'][a-zA-Z0-9_\']*)',
	        relevance: 0
	      },
	      {
	        begin: '[A-Z][a-zA-Z0-9_\']*',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var BASIC_ATOM_RE = '[a-z\'][a-zA-Z0-9_\']*';
	  var FUNCTION_NAME_RE = '(' + BASIC_ATOM_RE + ':' + BASIC_ATOM_RE + '|' + BASIC_ATOM_RE + ')';
	  var ERLANG_RESERVED = {
	    keyword:
	      'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if ' +
	      'let not of orelse|10 query receive rem try when xor',
	    literal:
	      'false true'
	  };

	  var COMMENT = hljs.COMMENT('%', '$');
	  var NUMBER = {
	    className: 'number',
	    begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
	    relevance: 0
	  };
	  var NAMED_FUN = {
	    begin: 'fun\\s+' + BASIC_ATOM_RE + '/\\d+'
	  };
	  var FUNCTION_CALL = {
	    begin: FUNCTION_NAME_RE + '\\(', end: '\\)',
	    returnBegin: true,
	    relevance: 0,
	    contains: [
	      {
	        begin: FUNCTION_NAME_RE, relevance: 0
	      },
	      {
	        begin: '\\(', end: '\\)', endsWithParent: true,
	        returnEnd: true,
	        relevance: 0
	        // "contains" defined later
	      }
	    ]
	  };
	  var TUPLE = {
	    begin: '{', end: '}',
	    relevance: 0
	    // "contains" defined later
	  };
	  var VAR1 = {
	    begin: '\\b_([A-Z][A-Za-z0-9_]*)?',
	    relevance: 0
	  };
	  var VAR2 = {
	    begin: '[A-Z][a-zA-Z0-9_]*',
	    relevance: 0
	  };
	  var RECORD_ACCESS = {
	    begin: '#' + hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0,
	    returnBegin: true,
	    contains: [
	      {
	        begin: '#' + hljs.UNDERSCORE_IDENT_RE,
	        relevance: 0
	      },
	      {
	        begin: '{', end: '}',
	        relevance: 0
	        // "contains" defined later
	      }
	    ]
	  };

	  var BLOCK_STATEMENTS = {
	    beginKeywords: 'fun receive if try case', end: 'end',
	    keywords: ERLANG_RESERVED
	  };
	  BLOCK_STATEMENTS.contains = [
	    COMMENT,
	    NAMED_FUN,
	    hljs.inherit(hljs.APOS_STRING_MODE, {className: ''}),
	    BLOCK_STATEMENTS,
	    FUNCTION_CALL,
	    hljs.QUOTE_STRING_MODE,
	    NUMBER,
	    TUPLE,
	    VAR1, VAR2,
	    RECORD_ACCESS
	  ];

	  var BASIC_MODES = [
	    COMMENT,
	    NAMED_FUN,
	    BLOCK_STATEMENTS,
	    FUNCTION_CALL,
	    hljs.QUOTE_STRING_MODE,
	    NUMBER,
	    TUPLE,
	    VAR1, VAR2,
	    RECORD_ACCESS
	  ];
	  FUNCTION_CALL.contains[1].contains = BASIC_MODES;
	  TUPLE.contains = BASIC_MODES;
	  RECORD_ACCESS.contains[1].contains = BASIC_MODES;

	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)',
	    contains: BASIC_MODES
	  };
	  return {
	    aliases: ['erl'],
	    keywords: ERLANG_RESERVED,
	    illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
	    contains: [
	      {
	        className: 'function',
	        begin: '^' + BASIC_ATOM_RE + '\\s*\\(', end: '->',
	        returnBegin: true,
	        illegal: '\\(|#|//|/\\*|\\\\|:|;',
	        contains: [
	          PARAMS,
	          hljs.inherit(hljs.TITLE_MODE, {begin: BASIC_ATOM_RE})
	        ],
	        starts: {
	          end: ';|\\.',
	          keywords: ERLANG_RESERVED,
	          contains: BASIC_MODES
	        }
	      },
	      COMMENT,
	      {
	        begin: '^-', end: '\\.',
	        relevance: 0,
	        excludeEnd: true,
	        returnBegin: true,
	        lexemes: '-' + hljs.IDENT_RE,
	        keywords:
	          '-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn ' +
	          '-import -include -include_lib -compile -define -else -endif -file -behaviour ' +
	          '-behavior -spec',
	        contains: [PARAMS]
	      },
	      NUMBER,
	      hljs.QUOTE_STRING_MODE,
	      RECORD_ACCESS,
	      VAR1, VAR2,
	      TUPLE,
	      {begin: /\.$/} // relevance booster
	    ]
	  };
	};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['xlsx', 'xls'],
	    case_insensitive: true,
	    lexemes: /[a-zA-Z][\w\.]*/,
	    // built-in functions imported from https://web.archive.org/web/20160513042710/https://support.office.com/en-us/article/Excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188
	    keywords: {
	        built_in: 'ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF|0 IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST'
	    },
	    contains: [
	      {
	        /* matches a beginning equal sign found in Excel formula examples */ 
	        begin: /^=/,
	        end: /[^=]/, returnEnd: true, illegal: /=/, /* only allow single equal sign at front of line */
	        relevance: 10
	      },
	      /* technically, there can be more than 2 letters in column names, but this prevents conflict with some keywords */
	      {
	        /* matches a reference to a single cell */
	        className: 'symbol',
	        begin: /\b[A-Z]{1,2}\d+\b/,
	        end: /[^\d]/, excludeEnd: true,
	        relevance: 0
	      },
	      {
	        /* matches a reference to a range of cells */
	        className: 'symbol',
	        begin: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,
	        relevance: 0
	      },
	      hljs.BACKSLASH_ESCAPE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'number',
	        begin: hljs.NUMBER_RE + '(%)?',
	        relevance: 0
	      },
	      /* Excel formula comments are done by putting the comment in a function call to N() */
	      hljs.COMMENT(/\bN\(/,/\)/,
	      {
	        excludeBegin: true,
	        excludeEnd: true,
	        illegal: /\n/
	      })
	    ]
	  };
	};

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	    {
	      begin: /[^\u2401\u0001]+/,
	      end: /[\u2401\u0001]/,
	      excludeEnd: true,
	      returnBegin: true,
	      returnEnd: false,
	      contains: [
	      {
	        begin: /([^\u2401\u0001=]+)/,
	        end: /=([^\u2401\u0001=]+)/,
	        returnEnd: true,
	        returnBegin: false,
	        className: 'attr'
	      },
	      {
	        begin: /=/,
	        end: /([\u2401\u0001])/,
	        excludeEnd: true,
	        excludeBegin: true,
	        className: 'string'
	      }]
	    }],
	    case_insensitive: true
	  };
	};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	module.exports = function (hljs) {

	    var CHAR = {
	        className: 'string',
	        begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
	    };

	    var STRING = {
	        className: 'string',
	        variants: [
	            {
	                begin: '"', end: '"'
	            }
	        ]
	    };

	    var NAME = {
	        className: 'title',
	        begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
	    };

	    var METHOD = {
	        className: 'function',
	        beginKeywords: 'def',
	        end: /[:={\[(\n;]/,
	        excludeEnd: true,
	        contains: [NAME]
	    };

	    return {
	        keywords: {
	            literal: 'true false',
	            keyword: 'case class def else enum if impl import in lat rel index let match namespace switch type yield with'
	        },
	        contains: [
	            hljs.C_LINE_COMMENT_MODE,
	            hljs.C_BLOCK_COMMENT_MODE,
	            CHAR,
	            STRING,
	            METHOD,
	            hljs.C_NUMBER_MODE
	        ]
	    };
	};

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)'
	  };

	  var F_KEYWORDS = {
	    literal: '.False. .True.',
	    keyword: 'kind do while private call intrinsic where elsewhere ' +
	      'type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then ' +
	      'public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. ' +
	      'goto save else use module select case ' +
	      'access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit ' +
	      'continue format pause cycle exit ' +
	      'c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg ' +
	      'synchronous nopass non_overridable pass protected volatile abstract extends import ' +
	      'non_intrinsic value deferred generic final enumerator class associate bind enum ' +
	      'c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t ' +
	      'c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double ' +
	      'c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr ' +
	      'c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer ' +
	      'c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor ' +
	      'numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ' +
	      'ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive ' +
	      'pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure ' +
	      'integer real character complex logical dimension allocatable|10 parameter ' +
	      'external implicit|10 none double precision assign intent optional pointer ' +
	      'target in out common equivalence data',
	    built_in: 'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint ' +
	      'dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl ' +
	      'algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama ' +
	      'iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod ' +
	      'qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log ' +
	      'log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate ' +
	      'adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product ' +
	      'eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul ' +
	      'maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product ' +
	      'radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind ' +
	      'set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer ' +
	      'dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ' +
	      'ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode ' +
	      'is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of'  +
	      'acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 ' +
	      'atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits ' +
	      'bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr ' +
	      'num_images parity popcnt poppar shifta shiftl shiftr this_image'
	  };
	  return {
	    case_insensitive: true,
	    aliases: ['f90', 'f95'],
	    keywords: F_KEYWORDS,
	    illegal: /\/\*/,
	    contains: [
	      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'string', relevance: 0}),
	      {
	        className: 'function',
	        beginKeywords: 'subroutine function program',
	        illegal: '[${=\\n]',
	        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
	      },
	      hljs.COMMENT('!', '$', {relevance: 0}),
	      {
	        className: 'number',
	        begin: '(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var TYPEPARAM = {
	    begin: '<', end: '>',
	    contains: [
	      hljs.inherit(hljs.TITLE_MODE, {begin: /'[a-zA-Z0-9_]+/})
	    ]
	  };

	  return {
	    aliases: ['fs'],
	    keywords:
	      'abstract and as assert base begin class default delegate do done ' +
	      'downcast downto elif else end exception extern false finally for ' +
	      'fun function global if in inherit inline interface internal lazy let ' +
	      'match member module mutable namespace new null of open or ' +
	      'override private public rec return sig static struct then to ' +
	      'true try type upcast use val void when while with yield',
	    illegal: /\/\*/,
	    contains: [
	      {
	        // monad builder keywords (matches before non-bang kws)
	        className: 'keyword',
	        begin: /\b(yield|return|let|do)!/
	      },
	      {
	        className: 'string',
	        begin: '@"', end: '"',
	        contains: [{begin: '""'}]
	      },
	      {
	        className: 'string',
	        begin: '"""', end: '"""'
	      },
	      hljs.COMMENT('\\(\\*', '\\*\\)'),
	      {
	        className: 'class',
	        beginKeywords: 'type', end: '\\(|=|$', excludeEnd: true,
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          TYPEPARAM
	        ]
	      },
	      {
	        className: 'meta',
	        begin: '\\[<', end: '>\\]',
	        relevance: 10
	      },
	      {
	        className: 'symbol',
	        begin: '\\B(\'[A-Za-z])\\b',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = function (hljs) {
	  var KEYWORDS = {
	    'keyword':
	      'abort acronym acronyms alias all and assign binary card diag display ' +
	      'else eq file files for free ge gt if integer le loop lt maximizing ' +
	      'minimizing model models ne negative no not option options or ord ' +
	      'positive prod put putpage puttl repeat sameas semicont semiint smax ' +
	      'smin solve sos1 sos2 sum system table then until using while xor yes',
	    'literal': 'eps inf na',
	    'built-in':
	      'abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy ' +
	      'cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact ' +
	      'floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max ' +
	      'min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power ' +
	      'randBinomial randLinear randTriangle round rPower sigmoid sign ' +
	      'signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt ' +
	      'tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp ' +
	      'bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt ' +
	      'rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear ' +
	      'jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion ' +
	      'handleCollect handleDelete handleStatus handleSubmit heapFree ' +
	      'heapLimit heapSize jobHandle jobKill jobStatus jobTerminate ' +
	      'licenseLevel licenseStatus maxExecError sleep timeClose timeComp ' +
	      'timeElapsed timeExec timeStart'
	  };
	  var PARAMS = {
	    className: 'params',
	    begin: /\(/, end: /\)/,
	    excludeBegin: true,
	    excludeEnd: true,
	  };
	  var SYMBOLS = {
	    className: 'symbol',
	    variants: [
	      {begin: /\=[lgenxc]=/},
	      {begin: /\$/},
	    ]
	  };
	  var QSTR = { // One-line quoted comment string
	    className: 'comment',
	    variants: [
	      {begin: '\'', end: '\''},
	      {begin: '"', end: '"'},
	    ],
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  var ASSIGNMENT = {
	    begin: '/',
	    end: '/',
	    keywords: KEYWORDS,
	    contains: [
	      QSTR,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	    ],
	  };
	  var DESCTEXT = { // Parameter/set/variable description text
	    begin: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
	    excludeBegin: true,
	    end: '$',
	    endsWithParent: true,
	    contains: [
	      QSTR,
	      ASSIGNMENT,
	      {
	        className: 'comment',
	        begin: /([ ]*[a-z0-9&#*=?@>\\<:\-,()$\[\]_.{}!+%^]+)+/,
	        relevance: 0
	      },
	    ],
	  };

	  return {
	    aliases: ['gms'],
	    case_insensitive: true,
	    keywords: KEYWORDS,
	    contains: [
	      hljs.COMMENT(/^\$ontext/, /^\$offtext/),
	      {
	        className: 'meta',
	        begin: '^\\$[a-z0-9]+',
	        end: '$',
	        returnBegin: true,
	        contains: [
	          {
	            className: 'meta-keyword',
	            begin: '^\\$[a-z0-9]+',
	          }
	        ]
	      },
	      hljs.COMMENT('^\\*', '$'),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,
	      // Declarations
	      {
	        beginKeywords:
	          'set sets parameter parameters variable variables ' +
	          'scalar scalars equation equations',
	        end: ';',
	        contains: [
	          hljs.COMMENT('^\\*', '$'),
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          ASSIGNMENT,
	          DESCTEXT,
	        ]
	      },
	      { // table environment
	        beginKeywords: 'table',
	        end: ';',
	        returnBegin: true,
	        contains: [
	          { // table header row
	            beginKeywords: 'table',
	            end: '$',
	            contains: [DESCTEXT],
	          },
	          hljs.COMMENT('^\\*', '$'),
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          hljs.C_NUMBER_MODE,
	          // Table does not contain DESCTEXT or ASSIGNMENT
	        ]
	      },
	      // Function definitions
	      {
	        className: 'function',
	        begin: /^[a-z][a-z0-9_,\-+' ()$]+\.{2}/,
	        returnBegin: true,
	        contains: [
	              { // Function title
	                className: 'title',
	                begin: /^[a-z][a-z0-9_]+/,
	              },
	              PARAMS,
	              SYMBOLS,
	            ],
	      },
	      hljs.C_NUMBER_MODE,
	      SYMBOLS,
	    ]
	  };
	};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword: 'and bool break call callexe checkinterrupt clear clearg closeall cls comlog compile ' +
	              'continue create debug declare delete disable dlibrary dllcall do dos ed edit else ' +
	              'elseif enable end endfor endif endp endo errorlog errorlogat expr external fn ' +
	              'for format goto gosub graph if keyword let lib library line load loadarray loadexe ' +
	              'loadf loadk loadm loadp loads loadx local locate loopnextindex lprint lpwidth lshow ' +
	              'matrix msym ndpclex new not open or output outwidth plot plotsym pop prcsn print ' +
	              'printdos proc push retp return rndcon rndmod rndmult rndseed run save saveall screen ' +
	              'scroll setarray show sparse stop string struct system trace trap threadfor ' +
	              'threadendfor threadbegin threadjoin threadstat threadend until use while winprint',
	    built_in: 'abs acf aconcat aeye amax amean AmericanBinomCall AmericanBinomCall_Greeks AmericanBinomCall_ImpVol ' +
	              'AmericanBinomPut AmericanBinomPut_Greeks AmericanBinomPut_ImpVol AmericanBSCall AmericanBSCall_Greeks ' +
	              'AmericanBSCall_ImpVol AmericanBSPut AmericanBSPut_Greeks AmericanBSPut_ImpVol amin amult annotationGetDefaults ' +
	              'annotationSetBkd annotationSetFont annotationSetLineColor annotationSetLineStyle annotationSetLineThickness ' +
	              'annualTradingDays arccos arcsin areshape arrayalloc arrayindex arrayinit arraytomat asciiload asclabel astd ' +
	              'astds asum atan atan2 atranspose axmargin balance band bandchol bandcholsol bandltsol bandrv bandsolpd bar ' +
	              'base10 begwind besselj bessely beta box boxcox cdfBeta cdfBetaInv cdfBinomial cdfBinomialInv cdfBvn cdfBvn2 ' +
	              'cdfBvn2e cdfCauchy cdfCauchyInv cdfChic cdfChii cdfChinc cdfChincInv cdfExp cdfExpInv cdfFc cdfFnc cdfFncInv ' +
	              'cdfGam cdfGenPareto cdfHyperGeo cdfLaplace cdfLaplaceInv cdfLogistic cdfLogisticInv cdfmControlCreate cdfMvn ' +
	              'cdfMvn2e cdfMvnce cdfMvne cdfMvt2e cdfMvtce cdfMvte cdfN cdfN2 cdfNc cdfNegBinomial cdfNegBinomialInv cdfNi ' +
	              'cdfPoisson cdfPoissonInv cdfRayleigh cdfRayleighInv cdfTc cdfTci cdfTnc cdfTvn cdfWeibull cdfWeibullInv cdir ' +
	              'ceil ChangeDir chdir chiBarSquare chol choldn cholsol cholup chrs close code cols colsf combinate combinated ' +
	              'complex con cond conj cons ConScore contour conv convertsatostr convertstrtosa corrm corrms corrvc corrx corrxs ' +
	              'cos cosh counts countwts crossprd crout croutp csrcol csrlin csvReadM csvReadSA cumprodc cumsumc curve cvtos ' +
	              'datacreate datacreatecomplex datalist dataload dataloop dataopen datasave date datestr datestring datestrymd ' +
	              'dayinyr dayofweek dbAddDatabase dbClose dbCommit dbCreateQuery dbExecQuery dbGetConnectOptions dbGetDatabaseName ' +
	              'dbGetDriverName dbGetDrivers dbGetHostName dbGetLastErrorNum dbGetLastErrorText dbGetNumericalPrecPolicy ' +
	              'dbGetPassword dbGetPort dbGetTableHeaders dbGetTables dbGetUserName dbHasFeature dbIsDriverAvailable dbIsOpen ' +
	              'dbIsOpenError dbOpen dbQueryBindValue dbQueryClear dbQueryCols dbQueryExecPrepared dbQueryFetchAllM dbQueryFetchAllSA ' +
	              'dbQueryFetchOneM dbQueryFetchOneSA dbQueryFinish dbQueryGetBoundValue dbQueryGetBoundValues dbQueryGetField ' +
	              'dbQueryGetLastErrorNum dbQueryGetLastErrorText dbQueryGetLastInsertID dbQueryGetLastQuery dbQueryGetPosition ' +
	              'dbQueryIsActive dbQueryIsForwardOnly dbQueryIsNull dbQueryIsSelect dbQueryIsValid dbQueryPrepare dbQueryRows ' +
	              'dbQuerySeek dbQuerySeekFirst dbQuerySeekLast dbQuerySeekNext dbQuerySeekPrevious dbQuerySetForwardOnly ' +
	              'dbRemoveDatabase dbRollback dbSetConnectOptions dbSetDatabaseName dbSetHostName dbSetNumericalPrecPolicy ' +
	              'dbSetPort dbSetUserName dbTransaction DeleteFile delif delrows denseToSp denseToSpRE denToZero design det detl ' +
	              'dfft dffti diag diagrv digamma doswin DOSWinCloseall DOSWinOpen dotfeq dotfeqmt dotfge dotfgemt dotfgt dotfgtmt ' +
	              'dotfle dotflemt dotflt dotfltmt dotfne dotfnemt draw drop dsCreate dstat dstatmt dstatmtControlCreate dtdate dtday ' +
	              'dttime dttodtv dttostr dttoutc dtvnormal dtvtodt dtvtoutc dummy dummybr dummydn eig eigh eighv eigv elapsedTradingDays ' +
	              'endwind envget eof eqSolve eqSolvemt eqSolvemtControlCreate eqSolvemtOutCreate eqSolveset erf erfc erfccplx erfcplx error ' +
	              'etdays ethsec etstr EuropeanBinomCall EuropeanBinomCall_Greeks EuropeanBinomCall_ImpVol EuropeanBinomPut ' +
	              'EuropeanBinomPut_Greeks EuropeanBinomPut_ImpVol EuropeanBSCall EuropeanBSCall_Greeks EuropeanBSCall_ImpVol ' +
	              'EuropeanBSPut EuropeanBSPut_Greeks EuropeanBSPut_ImpVol exctsmpl exec execbg exp extern eye fcheckerr fclearerr feq ' +
	              'feqmt fflush fft ffti fftm fftmi fftn fge fgemt fgets fgetsa fgetsat fgetst fgt fgtmt fileinfo filesa fle flemt ' +
	              'floor flt fltmt fmod fne fnemt fonts fopen formatcv formatnv fputs fputst fseek fstrerror ftell ftocv ftos ftostrC ' +
	              'gamma gammacplx gammaii gausset gdaAppend gdaCreate gdaDStat gdaDStatMat gdaGetIndex gdaGetName gdaGetNames gdaGetOrders ' +
	              'gdaGetType gdaGetTypes gdaGetVarInfo gdaIsCplx gdaLoad gdaPack gdaRead gdaReadByIndex gdaReadSome gdaReadSparse ' +
	              'gdaReadStruct gdaReportVarInfo gdaSave gdaUpdate gdaUpdateAndPack gdaVars gdaWrite gdaWrite32 gdaWriteSome getarray ' +
	              'getdims getf getGAUSShome getmatrix getmatrix4D getname getnamef getNextTradingDay getNextWeekDay getnr getorders ' +
	              'getpath getPreviousTradingDay getPreviousWeekDay getRow getscalar3D getscalar4D getTrRow getwind glm gradcplx gradMT ' +
	              'gradMTm gradMTT gradMTTm gradp graphprt graphset hasimag header headermt hess hessMT hessMTg hessMTgw hessMTm ' +
	              'hessMTmw hessMTT hessMTTg hessMTTgw hessMTTm hessMTw hessp hist histf histp hsec imag indcv indexcat indices indices2 ' +
	              'indicesf indicesfn indnv indsav integrate1d integrateControlCreate intgrat2 intgrat3 inthp1 inthp2 inthp3 inthp4 ' +
	              'inthpControlCreate intquad1 intquad2 intquad3 intrleav intrleavsa intrsect intsimp inv invpd invswp iscplx iscplxf ' +
	              'isden isinfnanmiss ismiss key keyav keyw lag lag1 lagn lapEighb lapEighi lapEighvb lapEighvi lapgEig lapgEigh lapgEighv ' +
	              'lapgEigv lapgSchur lapgSvdcst lapgSvds lapgSvdst lapSvdcusv lapSvds lapSvdusv ldlp ldlsol linSolve listwise ln lncdfbvn ' +
	              'lncdfbvn2 lncdfmvn lncdfn lncdfn2 lncdfnc lnfact lngammacplx lnpdfmvn lnpdfmvt lnpdfn lnpdft loadd loadstruct loadwind ' +
	              'loess loessmt loessmtControlCreate log loglog logx logy lower lowmat lowmat1 ltrisol lu lusol machEpsilon make makevars ' +
	              'makewind margin matalloc matinit mattoarray maxbytes maxc maxindc maxv maxvec mbesselei mbesselei0 mbesselei1 mbesseli ' +
	              'mbesseli0 mbesseli1 meanc median mergeby mergevar minc minindc minv miss missex missrv moment momentd movingave ' +
	              'movingaveExpwgt movingaveWgt nextindex nextn nextnevn nextwind ntos null null1 numCombinations ols olsmt olsmtControlCreate ' +
	              'olsqr olsqr2 olsqrmt ones optn optnevn orth outtyp pacf packedToSp packr parse pause pdfCauchy pdfChi pdfExp pdfGenPareto ' +
	              'pdfHyperGeo pdfLaplace pdfLogistic pdfn pdfPoisson pdfRayleigh pdfWeibull pi pinv pinvmt plotAddArrow plotAddBar plotAddBox ' +
	              'plotAddHist plotAddHistF plotAddHistP plotAddPolar plotAddScatter plotAddShape plotAddTextbox plotAddTS plotAddXY plotArea ' +
	              'plotBar plotBox plotClearLayout plotContour plotCustomLayout plotGetDefaults plotHist plotHistF plotHistP plotLayout ' +
	              'plotLogLog plotLogX plotLogY plotOpenWindow plotPolar plotSave plotScatter plotSetAxesPen plotSetBar plotSetBarFill ' +
	              'plotSetBarStacked plotSetBkdColor plotSetFill plotSetGrid plotSetLegend plotSetLineColor plotSetLineStyle plotSetLineSymbol ' +
	              'plotSetLineThickness plotSetNewWindow plotSetTitle plotSetWhichYAxis plotSetXAxisShow plotSetXLabel plotSetXRange ' +
	              'plotSetXTicInterval plotSetXTicLabel plotSetYAxisShow plotSetYLabel plotSetYRange plotSetZAxisShow plotSetZLabel ' +
	              'plotSurface plotTS plotXY polar polychar polyeval polygamma polyint polymake polymat polymroot polymult polyroot ' +
	              'pqgwin previousindex princomp printfm printfmt prodc psi putarray putf putvals pvCreate pvGetIndex pvGetParNames ' +
	              'pvGetParVector pvLength pvList pvPack pvPacki pvPackm pvPackmi pvPacks pvPacksi pvPacksm pvPacksmi pvPutParVector ' +
	              'pvTest pvUnpack QNewton QNewtonmt QNewtonmtControlCreate QNewtonmtOutCreate QNewtonSet QProg QProgmt QProgmtInCreate ' +
	              'qqr qqre qqrep qr qre qrep qrsol qrtsol qtyr qtyre qtyrep quantile quantiled qyr qyre qyrep qz rank rankindx readr ' +
	              'real reclassify reclassifyCuts recode recserar recsercp recserrc rerun rescale reshape rets rev rfft rffti rfftip rfftn ' +
	              'rfftnp rfftp rndBernoulli rndBeta rndBinomial rndCauchy rndChiSquare rndCon rndCreateState rndExp rndGamma rndGeo rndGumbel ' +
	              'rndHyperGeo rndi rndKMbeta rndKMgam rndKMi rndKMn rndKMnb rndKMp rndKMu rndKMvm rndLaplace rndLCbeta rndLCgam rndLCi rndLCn ' +
	              'rndLCnb rndLCp rndLCu rndLCvm rndLogNorm rndMTu rndMVn rndMVt rndn rndnb rndNegBinomial rndp rndPoisson rndRayleigh ' +
	              'rndStateSkip rndu rndvm rndWeibull rndWishart rotater round rows rowsf rref sampleData satostrC saved saveStruct savewind ' +
	              'scale scale3d scalerr scalinfnanmiss scalmiss schtoc schur searchsourcepath seekr select selif seqa seqm setdif setdifsa ' +
	              'setvars setvwrmode setwind shell shiftr sin singleindex sinh sleep solpd sortc sortcc sortd sorthc sorthcc sortind ' +
	              'sortindc sortmc sortr sortrc spBiconjGradSol spChol spConjGradSol spCreate spDenseSubmat spDiagRvMat spEigv spEye spLDL ' +
	              'spline spLU spNumNZE spOnes spreadSheetReadM spreadSheetReadSA spreadSheetWrite spScale spSubmat spToDense spTrTDense ' +
	              'spTScalar spZeros sqpSolve sqpSolveMT sqpSolveMTControlCreate sqpSolveMTlagrangeCreate sqpSolveMToutCreate sqpSolveSet ' +
	              'sqrt statements stdc stdsc stocv stof strcombine strindx strlen strput strrindx strsect strsplit strsplitPad strtodt ' +
	              'strtof strtofcplx strtriml strtrimr strtrunc strtruncl strtruncpad strtruncr submat subscat substute subvec sumc sumr ' +
	              'surface svd svd1 svd2 svdcusv svds svdusv sysstate tab tan tanh tempname threadBegin threadEnd threadEndFor threadFor ' +
	              'threadJoin threadStat time timedt timestr timeutc title tkf2eps tkf2ps tocart todaydt toeplitz token topolar trapchk ' +
	              'trigamma trimr trunc type typecv typef union unionsa uniqindx uniqindxsa unique uniquesa upmat upmat1 upper utctodt ' +
	              'utctodtv utrisol vals varCovMS varCovXS varget vargetl varmall varmares varput varputl vartypef vcm vcms vcx vcxs ' +
	              'vec vech vecr vector vget view viewxyz vlist vnamecv volume vput vread vtypecv wait waitc walkindex where window ' +
	              'writer xlabel xlsGetSheetCount xlsGetSheetSize xlsGetSheetTypes xlsMakeRange xlsReadM xlsReadSA xlsWrite xlsWriteM ' +
	              'xlsWriteSA xpnd xtics xy xyz ylabel ytics zeros zeta zlabel ztics cdfEmpirical dot h5create h5open h5read h5readAttribute ' +
	              'h5write h5writeAttribute ldl plotAddErrorBar plotAddSurface plotCDFEmpirical plotSetColormap plotSetContourLabels ' +
	              'plotSetLegendFont plotSetTextInterpreter plotSetXTicCount plotSetYTicCount plotSetZLevels powerm strjoin strtrim sylvester',
	    literal: 'DB_AFTER_LAST_ROW DB_ALL_TABLES DB_BATCH_OPERATIONS DB_BEFORE_FIRST_ROW DB_BLOB DB_EVENT_NOTIFICATIONS ' +
	             'DB_FINISH_QUERY DB_HIGH_PRECISION DB_LAST_INSERT_ID DB_LOW_PRECISION_DOUBLE DB_LOW_PRECISION_INT32 ' +
	             'DB_LOW_PRECISION_INT64 DB_LOW_PRECISION_NUMBERS DB_MULTIPLE_RESULT_SETS DB_NAMED_PLACEHOLDERS ' +
	             'DB_POSITIONAL_PLACEHOLDERS DB_PREPARED_QUERIES DB_QUERY_SIZE DB_SIMPLE_LOCKING DB_SYSTEM_TABLES DB_TABLES ' +
	             'DB_TRANSACTIONS DB_UNICODE DB_VIEWS'
	  };

	  var PREPROCESSOR =
	  {
	    className: 'meta',
	    begin: '#', end: '$',
	    keywords: {'meta-keyword': 'define definecs|10 undef ifdef ifndef iflight ifdllcall ifmac ifos2win ifunix else endif lineson linesoff srcfile srcline'},
	    contains: [
	      {
	        begin: /\\\n/, relevance: 0
	      },
	      {
	        beginKeywords: 'include', end: '$',
	        keywords: {'meta-keyword': 'include'},
	        contains: [
	          {
	            className: 'meta-string',
	            begin: '"', end: '"',
	            illegal: '\\n'
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };

	  var FUNCTION_TITLE = hljs.UNDERSCORE_IDENT_RE + '\\s*\\(?';
	  var PARSE_PARAMS = [
	    {
	      className: 'params',
	      begin: /\(/, end: /\)/,
	      keywords: KEYWORDS,
	      relevance: 0,
	      contains: [
	        hljs.C_NUMBER_MODE,
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE
	      ]
	    }
	  ];

	  return {
	    aliases: ['gss'],
	    case_insensitive: true, // language is case-insensitive
	    keywords: KEYWORDS,
	    illegal: '(\\{[%#]|[%#]\\})',
	    contains: [
	      hljs.C_NUMBER_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.COMMENT('@', '@'),
	      PREPROCESSOR,
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        className: 'function',
	        beginKeywords: 'proc keyword',
	        end: ';',
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: FUNCTION_TITLE, returnBegin: true,
	            contains: [hljs.UNDERSCORE_TITLE_MODE],
	            relevance: 0
	          },
	          hljs.C_NUMBER_MODE,
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          PREPROCESSOR
	        ].concat(PARSE_PARAMS)
	      },
	      {
	        className: 'function',
	        beginKeywords: 'fn',
	        end: ';',
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: FUNCTION_TITLE + hljs.IDENT_RE + '\\)?\\s*\\=\\s*', returnBegin: true,
	            contains: [hljs.UNDERSCORE_TITLE_MODE],
	            relevance: 0
	          },
	          hljs.C_NUMBER_MODE,
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ].concat(PARSE_PARAMS)
	      },
	      {
	        className: 'function',
	        begin: '\\bexternal (proc|keyword|fn)\\s+',
	        end: ';',
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: FUNCTION_TITLE, returnBegin: true,
	            contains: [hljs.UNDERSCORE_TITLE_MODE],
	            relevance: 0
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        className: 'function',
	        begin: '\\bexternal (matrix|string|array|sparse matrix|struct ' + hljs.IDENT_RE + ')\\s+',
	        end: ';',
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	    var GCODE_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
	    var GCODE_CLOSE_RE = '\\%';
	    var GCODE_KEYWORDS =
	      'IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT ' +
	      'EQ LT GT NE GE LE OR XOR';
	    var GCODE_START = {
	        className: 'meta',
	        begin: '([O])([0-9]+)'
	    };
	    var GCODE_CODE = [
	        hljs.C_LINE_COMMENT_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        hljs.COMMENT(/\(/, /\)/),
	        hljs.inherit(hljs.C_NUMBER_MODE, {begin: '([-+]?([0-9]*\\.?[0-9]+\\.?))|' + hljs.C_NUMBER_RE}),
	        hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	        hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	        {
	            className: 'name',
	            begin: '([G])([0-9]+\\.?[0-9]?)'
	        },
	        {
	            className: 'name',
	            begin: '([M])([0-9]+\\.?[0-9]?)'
	        },
	        {
	            className: 'attr',
	            begin: '(VC|VS|#)',
	            end: '(\\d+)'
	        },
	        {
	            className: 'attr',
	            begin: '(VZOFX|VZOFY|VZOFZ)'
	        },
	        {
	            className: 'built_in',
	            begin: '(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)',
	            end: '([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])'
	        },
	        {
	            className: 'symbol',
	            variants: [
	                {
	                    begin: 'N', end: '\\d+',
	                    illegal: '\\W'
	                }
	            ]
	        }
	    ];

	    return {
	        aliases: ['nc'],
	        // Some implementations (CNC controls) of G-code are interoperable with uppercase and lowercase letters seamlessly.
	        // However, most prefer all uppercase and uppercase is customary.
	        case_insensitive: true,
	        lexemes: GCODE_IDENT_RE,
	        keywords: GCODE_KEYWORDS,
	        contains: [
	            {
	                className: 'meta',
	                begin: GCODE_CLOSE_RE
	            },
	            GCODE_START
	        ].concat(GCODE_CODE)
	    };
	};

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	module.exports = function (hljs) {
	  return {
	    aliases: ['feature'],
	    keywords: 'Feature Background Ability Business\ Need Scenario Scenarios Scenario\ Outline Scenario\ Template Examples Given And Then But When',
	    contains: [
	      {
	        className: 'symbol',
	        begin: '\\*',
	        relevance: 0
	      },
	      {
	        className: 'meta',
	        begin: '@[^@\\s]+'
	      },
	      {
	        begin: '\\|', end: '\\|\\w*$',
	        contains: [
	          {
	            className: 'string',
	            begin: '[^|]+'
	          }
	        ]
	      },
	      {
	        className: 'variable',
	        begin: '<', end: '>'
	      },
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'string',
	        begin: '"""', end: '"""'
	      },
	      hljs.QUOTE_STRING_MODE
	    ]
	  };
	};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword:
	        // Statements
	        'break continue discard do else for if return while switch case default ' +
	        // Qualifiers
	        'attribute binding buffer ccw centroid centroid varying coherent column_major const cw ' +
	        'depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing ' +
	        'flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant ' +
	        'invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y ' +
	        'local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left ' +
	        'out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f '+
	        'r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict ' +
	        'rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 ' +
	        'rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 ' +
	        'rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip ' +
	        'triangles triangles_adjacency uniform varying vertices volatile writeonly',
	      type:
	        'atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 ' +
	        'dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray ' +
	        'iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer' +
	        'iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray ' +
	        'image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray ' +
	        'isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D ' +
	        'isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 ' +
	        'mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray ' +
	        'sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow ' +
	        'sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D ' +
	        'samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow ' +
	        'image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect ' +
	        'uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray ' +
	        'usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D ' +
	        'samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void',
	      built_in:
	        // Constants
	        'gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes ' +
	        'gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms ' +
	        'gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers ' +
	        'gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits ' +
	        'gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize ' +
	        'gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters ' +
	        'gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors ' +
	        'gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers ' +
	        'gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents ' +
	        'gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits ' +
	        'gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents ' +
	        'gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset ' +
	        'gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms ' +
	        'gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits ' +
	        'gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents ' +
	        'gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters ' +
	        'gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents ' +
	        'gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents ' +
	        'gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits ' +
	        'gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors ' +
	        'gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms ' +
	        'gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits ' +
	        'gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset ' +
	        // Variables
	        'gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial ' +
	        'gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color ' +
	        'gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord ' +
	        'gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor ' +
	        'gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial ' +
	        'gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel ' +
	        'gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix ' +
	        'gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose ' +
	        'gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose ' +
	        'gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 ' +
	        'gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 ' +
	        'gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ ' +
	        'gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord ' +
	        'gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse ' +
	        'gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask ' +
	        'gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter ' +
	        'gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose ' +
	        'gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out ' +
	        // Functions
	        'EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin ' +
	        'asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement ' +
	        'atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier ' +
	        'bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross ' +
	        'dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB ' +
	        'floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan ' +
	        'greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap ' +
	        'imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad ' +
	        'imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset ' +
	        'interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log ' +
	        'log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer ' +
	        'memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 ' +
	        'normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 ' +
	        'packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod ' +
	        'shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh ' +
	        'smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod ' +
	        'texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod ' +
	        'texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod ' +
	        'textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset ' +
	        'textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset ' +
	        'textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod ' +
	        'textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 ' +
	        'unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow',
	      literal: 'true false'
	    },
	    illegal: '"',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$'
	      }
	    ]
	  };
	};

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var GO_KEYWORDS = {
	    keyword:
	      'break default func interface select case map struct chan else goto package switch ' +
	      'const fallthrough if range type continue for import return var go defer ' +
	      'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' +
	      'uint16 uint32 uint64 int uint uintptr rune',
	    literal:
	       'true false iota nil',
	    built_in:
	      'append cap close complex copy imag len make new panic print println real recover delete'
	  };
	  return {
	    aliases: ['golang'],
	    keywords: GO_KEYWORDS,
	    illegal: '</',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'string',
	        variants: [
	          hljs.QUOTE_STRING_MODE,
	          {begin: '\'', end: '[^\\\\]\''},
	          {begin: '`', end: '`'},
	        ]
	      },
	      {
	        className: 'number',
	        variants: [
	          {begin: hljs.C_NUMBER_RE + '[dflsi]', relevance: 1},
	          hljs.C_NUMBER_MODE
	        ]
	      },
	      {
	        begin: /:=/ // relevance booster
	      },
	      {
	        className: 'function',
	        beginKeywords: 'func', end: /\s*\{/, excludeEnd: true,
	        contains: [
	          hljs.TITLE_MODE,
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            keywords: GO_KEYWORDS,
	            illegal: /["']/
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	    return {
	      keywords: {
	        keyword:
	          'println readln print import module function local return let var ' +
	          'while for foreach times in case when match with break continue ' +
	          'augment augmentation each find filter reduce ' +
	          'if then else otherwise try catch finally raise throw orIfNull ' +
	          'DynamicObject|10 DynamicVariable struct Observable map set vector list array',
	        literal:
	          'true false null'
	      },
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        hljs.QUOTE_STRING_MODE,
	        hljs.C_NUMBER_MODE,
	        {
	          className: 'meta', begin: '@[A-Za-z]+'
	        }
	      ]
	    }
	};

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'task project allprojects subprojects artifacts buildscript configurations ' +
	        'dependencies repositories sourceSets description delete from into include ' +
	        'exclude source classpath destinationDir includes options sourceCompatibility ' +
	        'targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant ' +
	        'def abstract break case catch continue default do else extends final finally ' +
	        'for if implements instanceof native new private protected public return static ' +
	        'switch synchronized throw throws transient try volatile while strictfp package ' +
	        'import false null super this true antlrtask checkstyle codenarc copy boolean ' +
	        'byte char class double float int interface long short void compile runTime ' +
	        'file fileTree abs any append asList asWritable call collect compareTo count ' +
	        'div dump each eachByte eachFile eachLine every find findAll flatten getAt ' +
	        'getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods ' +
	        'isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter ' +
	        'newReader newWriter next plus pop power previous print println push putAt read ' +
	        'readBytes readLines reverse reverseEach round size sort splitEachLine step subMap ' +
	        'times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader ' +
	        'withStream withWriter withWriterAppend write writeLine'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.REGEXP_MODE

	    ]
	  }
	};

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	    return {
	        keywords: {
	            literal : 'true false null',
	            keyword:
	            'byte short char int long boolean float double void ' +
	            // groovy specific keywords
	            'def as in assert trait ' +
	            // common keywords with Java
	            'super this abstract static volatile transient public private protected synchronized final ' +
	            'class interface enum if else for while switch case break default continue ' +
	            'throw throws try catch finally implements extends new import package return instanceof'
	        },

	        contains: [
	            hljs.COMMENT(
	                '/\\*\\*',
	                '\\*/',
	                {
	                    relevance : 0,
	                    contains : [
	                      {
	                          // eat up @'s in emails to prevent them to be recognized as doctags
	                          begin: /\w+@/, relevance: 0
	                      },
	                      {
	                          className : 'doctag',
	                          begin : '@[A-Za-z]+'
	                      }
	                    ]
	                }
	            ),
	            hljs.C_LINE_COMMENT_MODE,
	            hljs.C_BLOCK_COMMENT_MODE,
	            {
	                className: 'string',
	                begin: '"""', end: '"""'
	            },
	            {
	                className: 'string',
	                begin: "'''", end: "'''"
	            },
	            {
	                className: 'string',
	                begin: "\\$/", end: "/\\$",
	                relevance: 10
	            },
	            hljs.APOS_STRING_MODE,
	            {
	                className: 'regexp',
	                begin: /~?\/[^\/\n]+\//,
	                contains: [
	                    hljs.BACKSLASH_ESCAPE
	                ]
	            },
	            hljs.QUOTE_STRING_MODE,
	            {
	                className: 'meta',
	                begin: "^#!/usr/bin/env", end: '$',
	                illegal: '\n'
	            },
	            hljs.BINARY_NUMBER_MODE,
	            {
	                className: 'class',
	                beginKeywords: 'class interface trait enum', end: '{',
	                illegal: ':',
	                contains: [
	                    {beginKeywords: 'extends implements'},
	                    hljs.UNDERSCORE_TITLE_MODE
	                ]
	            },
	            hljs.C_NUMBER_MODE,
	            {
	                className: 'meta', begin: '@[A-Za-z]+'
	            },
	            {
	                // highlight map keys and named parameters as strings
	                className: 'string', begin: /[^\?]{0}[A-Za-z0-9_$]+ *:/
	            },
	            {
	                // catch middle element of the ternary operator
	                // to avoid highlight it as a label, named parameter, or map key
	                begin: /\?/, end: /\:/
	            },
	            {
	                // highlight labeled statements
	                className: 'symbol', begin: '^\\s*[A-Za-z0-9_$]+:',
	                relevance: 0
	            }
	        ],
	        illegal: /#|<\//
	    }
	};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	module.exports = // TODO support filter tags like :javascript, support inline HTML
	function(hljs) {
	  return {
	    case_insensitive: true,
	    contains: [
	      {
	        className: 'meta',
	        begin: '^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$',
	        relevance: 10
	      },
	      // FIXME these comments should be allowed to span indented lines
	      hljs.COMMENT(
	        '^\\s*(!=#|=#|-#|/).*$',
	        false,
	        {
	          relevance: 0
	        }
	      ),
	      {
	        begin: '^\\s*(-|=|!=)(?!#)',
	        starts: {
	          end: '\\n',
	          subLanguage: 'ruby'
	        }
	      },
	      {
	        className: 'tag',
	        begin: '^\\s*%',
	        contains: [
	          {
	            className: 'selector-tag',
	            begin: '\\w+'
	          },
	          {
	            className: 'selector-id',
	            begin: '#[\\w-]+'
	          },
	          {
	            className: 'selector-class',
	            begin: '\\.[\\w-]+'
	          },
	          {
	            begin: '{\\s*',
	            end: '\\s*}',
	            contains: [
	              {
	                begin: ':\\w+\\s*=>',
	                end: ',\\s+',
	                returnBegin: true,
	                endsWithParent: true,
	                contains: [
	                  {
	                    className: 'attr',
	                    begin: ':\\w+'
	                  },
	                  hljs.APOS_STRING_MODE,
	                  hljs.QUOTE_STRING_MODE,
	                  {
	                    begin: '\\w+',
	                    relevance: 0
	                  }
	                ]
	              }
	            ]
	          },
	          {
	            begin: '\\(\\s*',
	            end: '\\s*\\)',
	            excludeEnd: true,
	            contains: [
	              {
	                begin: '\\w+\\s*=',
	                end: '\\s+',
	                returnBegin: true,
	                endsWithParent: true,
	                contains: [
	                  {
	                    className: 'attr',
	                    begin: '\\w+',
	                    relevance: 0
	                  },
	                  hljs.APOS_STRING_MODE,
	                  hljs.QUOTE_STRING_MODE,
	                  {
	                    begin: '\\w+',
	                    relevance: 0
	                  }
	                ]
	              }
	            ]
	          }
	        ]
	      },
	      {
	        begin: '^\\s*[=~]\\s*'
	      },
	      {
	        begin: '#{',
	        starts: {
	          end: '}',
	          subLanguage: 'ruby'
	        }
	      }
	    ]
	  };
	};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var BUILT_INS = {'builtin-name': 'each in with if else unless bindattr action collection debugger log outlet template unbound view yield'};
	  return {
	    aliases: ['hbs', 'html.hbs', 'html.handlebars'],
	    case_insensitive: true,
	    subLanguage: 'xml',
	    contains: [
	    hljs.COMMENT('{{!(--)?', '(--)?}}'),
	      {
	        className: 'template-tag',
	        begin: /\{\{[#\/]/, end: /\}\}/,
	        contains: [
	          {
	            className: 'name',
	            begin: /[a-zA-Z\.-]+/,
	            keywords: BUILT_INS,
	            starts: {
	              endsWithParent: true, relevance: 0,
	              contains: [
	                hljs.QUOTE_STRING_MODE
	              ]
	            }
	          }
	        ]
	      },
	      {
	        className: 'template-variable',
	        begin: /\{\{/, end: /\}\}/,
	        keywords: BUILT_INS
	      }
	    ]
	  };
	};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var COMMENT = {
	    variants: [
	      hljs.COMMENT('--', '$'),
	      hljs.COMMENT(
	        '{-',
	        '-}',
	        {
	          contains: ['self']
	        }
	      )
	    ]
	  };

	  var PRAGMA = {
	    className: 'meta',
	    begin: '{-#', end: '#-}'
	  };

	  var PREPROCESSOR = {
	    className: 'meta',
	    begin: '^#', end: '$'
	  };

	  var CONSTRUCTOR = {
	    className: 'type',
	    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (build-in, infix).
	    relevance: 0
	  };

	  var LIST = {
	    begin: '\\(', end: '\\)',
	    illegal: '"',
	    contains: [
	      PRAGMA,
	      PREPROCESSOR,
	      {className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'},
	      hljs.inherit(hljs.TITLE_MODE, {begin: '[_a-z][\\w\']*'}),
	      COMMENT
	    ]
	  };

	  var RECORD = {
	    begin: '{', end: '}',
	    contains: LIST.contains
	  };

	  return {
	    aliases: ['hs'],
	    keywords:
	      'let in if then else case of where do module import hiding ' +
	      'qualified type data newtype deriving class instance as default ' +
	      'infix infixl infixr foreign export ccall stdcall cplusplus ' +
	      'jvm dotnet safe unsafe family forall mdo proc rec',
	    contains: [

	      // Top-level constructions.

	      {
	        beginKeywords: 'module', end: 'where',
	        keywords: 'module where',
	        contains: [LIST, COMMENT],
	        illegal: '\\W\\.|;'
	      },
	      {
	        begin: '\\bimport\\b', end: '$',
	        keywords: 'import qualified as hiding',
	        contains: [LIST, COMMENT],
	        illegal: '\\W\\.|;'
	      },

	      {
	        className: 'class',
	        begin: '^(\\s*)?(class|instance)\\b', end: 'where',
	        keywords: 'class family instance where',
	        contains: [CONSTRUCTOR, LIST, COMMENT]
	      },
	      {
	        className: 'class',
	        begin: '\\b(data|(new)?type)\\b', end: '$',
	        keywords: 'data family type newtype deriving',
	        contains: [PRAGMA, CONSTRUCTOR, LIST, RECORD, COMMENT]
	      },
	      {
	        beginKeywords: 'default', end: '$',
	        contains: [CONSTRUCTOR, LIST, COMMENT]
	      },
	      {
	        beginKeywords: 'infix infixl infixr', end: '$',
	        contains: [hljs.C_NUMBER_MODE, COMMENT]
	      },
	      {
	        begin: '\\bforeign\\b', end: '$',
	        keywords: 'foreign import export ccall stdcall cplusplus jvm ' +
	                  'dotnet safe unsafe',
	        contains: [CONSTRUCTOR, hljs.QUOTE_STRING_MODE, COMMENT]
	      },
	      {
	        className: 'meta',
	        begin: '#!\\/usr\\/bin\\/env\ runhaskell', end: '$'
	      },

	      // "Whitespaces".

	      PRAGMA,
	      PREPROCESSOR,

	      // Literals and names.

	      // TODO: characters.
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      CONSTRUCTOR,
	      hljs.inherit(hljs.TITLE_MODE, {begin: '^[_a-z][\\w\']*'}),

	      COMMENT,

	      {begin: '->|<-'} // No markup, relevance booster
	    ]
	  };
	};

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
	  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

	  var HAXE_BASIC_TYPES = 'Int Float String Bool Dynamic Void Array ';

	  return {
	    aliases: ['hx'],
	    keywords: {
	      keyword: 'break case cast catch continue default do dynamic else enum extern ' +
	               'for function here if import in inline never new override package private get set ' +
	               'public return static super switch this throw trace try typedef untyped using var while ' +
	               HAXE_BASIC_TYPES,
	      built_in:
	        'trace this',
	      literal:
	        'true false null _'
	    },
	    contains: [
	      { className: 'string', // interpolate-able strings
	        begin: '\'', end: '\'',
	        contains: [
	          hljs.BACKSLASH_ESCAPE,
	          { className: 'subst', // interpolation
	            begin: '\\$\\{', end: '\\}'
	          },
	          { className: 'subst', // interpolation
	            begin: '\\$', end: '\\W}'
	          }
	        ]
	      },
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      { className: 'meta', // compiler meta
	        begin: '@:', end: '$'
	      },
	      { className: 'meta', // compiler conditionals
	        begin: '#', end: '$',
	        keywords: {'meta-keyword': 'if else elseif end error'}
	      },
	      { className: 'type', // function types
	        begin: ':[ \t]*', end: '[^A-Za-z0-9_ \t\\->]',
	        excludeBegin: true, excludeEnd: true,
	        relevance: 0
	      },
	      { className: 'type', // types
	        begin: ':[ \t]*', end: '\\W',
	        excludeBegin: true, excludeEnd: true
	      },
	      { className: 'type', // instantiation
	        begin: 'new *', end: '\\W',
	        excludeBegin: true, excludeEnd: true
	      },
	      { className: 'class', // enums
	        beginKeywords: 'enum', end: '\\{',
	        contains: [
	          hljs.TITLE_MODE
	        ]
	      },
	      { className: 'class', // abstracts
	        beginKeywords: 'abstract', end: '[\\{$]',
	        contains: [
	          { className: 'type',
	            begin: '\\(', end: '\\)',
	            excludeBegin: true, excludeEnd: true
	          },
	          { className: 'type',
	            begin: 'from +', end: '\\W',
	            excludeBegin: true, excludeEnd: true
	          },
	          { className: 'type',
	            begin: 'to +', end: '\\W',
	            excludeBegin: true, excludeEnd: true
	          },
	          hljs.TITLE_MODE
	        ],
	        keywords: {
	          keyword: 'abstract from to'
	        }
	      },
	      { className: 'class', // classes
	        begin: '\\b(class|interface) +', end: '[\\{$]',  excludeEnd: true,
	        keywords: 'class interface',
	        contains: [
	          { className: 'keyword',
	            begin: '\\b(extends|implements) +',
	            keywords: 'extends implements',
	            contains: [
	              {
	                className: 'type',
	                begin: hljs.IDENT_RE,
	                relevance: 0
	              }
	            ]
	          },
	          hljs.TITLE_MODE
	        ]
	      },
	      { className: 'function',
	        beginKeywords: 'function', end: '\\(', excludeEnd: true,
	        illegal: '\\S',
	        contains: [
	          hljs.TITLE_MODE
	        ]
	      }
	    ],
	    illegal: /<\//
	  };
	};

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    lexemes: /[\w\._]+/,
	    keywords: 'goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,

	      {
	        // multi-line string
	        className: 'string',
	        begin: '{"', end: '"}',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },

	      hljs.COMMENT(';', '$', {relevance: 0}),

	      {
	        // pre-processor
	        className: 'meta',
	        begin: '#', end: '$',
	        keywords: {'meta-keyword': 'addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib'},
	        contains: [
	          hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'}),
	          hljs.NUMBER_MODE,
	          hljs.C_NUMBER_MODE,
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },

	      {
	        // label
	        className: 'symbol',
	        begin: '^\\*(\\w+|@)'
	      },

	      hljs.NUMBER_MODE,
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ }),
/* 96 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var BUILT_INS = 'action collection component concat debugger each each-in else get hash if input link-to loc log mut outlet partial query-params render textarea unbound unless with yield view';

	  var ATTR_ASSIGNMENT = {
	    illegal: /\}\}/,
	    begin: /[a-zA-Z0-9_]+=/,
	    returnBegin: true,
	    relevance: 0,
	    contains: [
	      {
	        className: 'attr', begin: /[a-zA-Z0-9_]+/
	      }
	    ]
	  };

	  var SUB_EXPR = {
	    illegal: /\}\}/,
	    begin: /\)/, end: /\)/,
	    contains: [
	      {
	        begin: /[a-zA-Z\.\-]+/,
	        keywords: {built_in: BUILT_INS},
	        starts: {
	          endsWithParent: true, relevance: 0,
	          contains: [
	            hljs.QUOTE_STRING_MODE,
	          ]
	        }
	      }
	    ]
	  };

	  var TAG_INNARDS = {
	    endsWithParent: true, relevance: 0,
	    keywords: {keyword: 'as', built_in: BUILT_INS},
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      ATTR_ASSIGNMENT,
	      hljs.NUMBER_MODE
	    ]
	  };

	  return {
	    case_insensitive: true,
	    subLanguage: 'xml',
	    contains: [
	      hljs.COMMENT('{{!(--)?', '(--)?}}'),
	      {
	        className: 'template-tag',
	        begin: /\{\{[#\/]/, end: /\}\}/,
	        contains: [
	          {
	            className: 'name',
	            begin: /[a-zA-Z\.\-]+/,
	            keywords: {'builtin-name': BUILT_INS},
	            starts: TAG_INNARDS
	          }
	        ]
	      },
	      {
	        className: 'template-variable',
	        begin: /\{\{[a-zA-Z][a-zA-Z\-]+/, end: /\}\}/,
	        keywords: {keyword: 'as', built_in: BUILT_INS},
	        contains: [
	          hljs.QUOTE_STRING_MODE
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var VERSION = 'HTTP/[0-9\\.]+';
	  return {
	    aliases: ['https'],
	    illegal: '\\S',
	    contains: [
	      {
	        begin: '^' + VERSION, end: '$',
	        contains: [{className: 'number', begin: '\\b\\d{3}\\b'}]
	      },
	      {
	        begin: '^[A-Z]+ (.*?) ' + VERSION + '$', returnBegin: true, end: '$',
	        contains: [
	          {
	            className: 'string',
	            begin: ' ', end: ' ',
	            excludeBegin: true, excludeEnd: true
	          },
	          {
	            begin: VERSION
	          },
	          {
	            className: 'keyword',
	            begin: '[A-Z]+'
	          }
	        ]
	      },
	      {
	        className: 'attribute',
	        begin: '^\\w', end: ': ', excludeEnd: true,
	        illegal: '\\n|\\s|=',
	        starts: {end: '$', relevance: 0}
	      },
	      {
	        begin: '\\n\\n',
	        starts: {subLanguage: [], endsWithParent: true}
	      }
	    ]
	  };
	};

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var keywords = {
	    'builtin-name':
	      // keywords
	      '!= % %= & &= * ** **= *= *map ' +
	      '+ += , --build-class-- --import-- -= . / // //= ' +
	      '/= < << <<= <= = > >= >> >>= ' +
	      '@ @= ^ ^= abs accumulate all and any ap-compose ' +
	      'ap-dotimes ap-each ap-each-while ap-filter ap-first ap-if ap-last ap-map ap-map-when ap-pipe ' +
	      'ap-reduce ap-reject apply as-> ascii assert assoc bin break butlast ' +
	      'callable calling-module-name car case cdr chain chr coll? combinations compile ' +
	      'compress cond cons cons? continue count curry cut cycle dec ' +
	      'def default-method defclass defmacro defmacro-alias defmacro/g! defmain defmethod defmulti defn ' +
	      'defn-alias defnc defnr defreader defseq del delattr delete-route dict-comp dir ' +
	      'disassemble dispatch-reader-macro distinct divmod do doto drop drop-last drop-while empty? ' +
	      'end-sequence eval eval-and-compile eval-when-compile even? every? except exec filter first ' +
	      'flatten float? fn fnc fnr for for* format fraction genexpr ' +
	      'gensym get getattr global globals group-by hasattr hash hex id ' +
	      'identity if if* if-not if-python2 import in inc input instance? ' +
	      'integer integer-char? integer? interleave interpose is is-coll is-cons is-empty is-even ' +
	      'is-every is-float is-instance is-integer is-integer-char is-iterable is-iterator is-keyword is-neg is-none ' +
	      'is-not is-numeric is-odd is-pos is-string is-symbol is-zero isinstance islice issubclass ' +
	      'iter iterable? iterate iterator? keyword keyword? lambda last len let ' +
	      'lif lif-not list* list-comp locals loop macro-error macroexpand macroexpand-1 macroexpand-all ' +
	      'map max merge-with method-decorator min multi-decorator multicombinations name neg? next ' +
	      'none? nonlocal not not-in not? nth numeric? oct odd? open ' +
	      'or ord partition permutations pos? post-route postwalk pow prewalk print ' +
	      'product profile/calls profile/cpu put-route quasiquote quote raise range read read-str ' +
	      'recursive-replace reduce remove repeat repeatedly repr require rest round route ' +
	      'route-with-methods rwm second seq set-comp setattr setv some sorted string ' +
	      'string? sum switch symbol? take take-nth take-while tee try unless ' +
	      'unquote unquote-splicing vars walk when while with with* with-decorator with-gensyms ' +
	      'xi xor yield yield-from zero? zip zip-longest | |= ~'
	   };

	  var SYMBOLSTART = 'a-zA-Z_\\-!.?+*=<>&#\'';
	  var SYMBOL_RE = '[' + SYMBOLSTART + '][' + SYMBOLSTART + '0-9/;:]*';
	  var SIMPLE_NUMBER_RE = '[-+]?\\d+(\\.\\d+)?';

	  var SHEBANG = {
	    className: 'meta',
	    begin: '^#!', end: '$'
	  };

	  var SYMBOL = {
	    begin: SYMBOL_RE,
	    relevance: 0
	  };
	  var NUMBER = {
	    className: 'number', begin: SIMPLE_NUMBER_RE,
	    relevance: 0
	  };
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null});
	  var COMMENT = hljs.COMMENT(
	    ';',
	    '$',
	    {
	      relevance: 0
	    }
	  );
	  var LITERAL = {
	    className: 'literal',
	    begin: /\b([Tt]rue|[Ff]alse|nil|None)\b/
	  };
	  var COLLECTION = {
	    begin: '[\\[\\{]', end: '[\\]\\}]'
	  };
	  var HINT = {
	    className: 'comment',
	    begin: '\\^' + SYMBOL_RE
	  };
	  var HINT_COL = hljs.COMMENT('\\^\\{', '\\}');
	  var KEY = {
	    className: 'symbol',
	    begin: '[:]{1,2}' + SYMBOL_RE
	  };
	  var LIST = {
	    begin: '\\(', end: '\\)'
	  };
	  var BODY = {
	    endsWithParent: true,
	    relevance: 0
	  };
	  var NAME = {
	    keywords: keywords,
	    lexemes: SYMBOL_RE,
	    className: 'name', begin: SYMBOL_RE,
	    starts: BODY
	  };
	  var DEFAULT_CONTAINS = [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL, SYMBOL];

	  LIST.contains = [hljs.COMMENT('comment', ''), NAME, BODY];
	  BODY.contains = DEFAULT_CONTAINS;
	  COLLECTION.contains = DEFAULT_CONTAINS;

	  return {
	    aliases: ['hylang'],
	    illegal: /\S/,
	    contains: [SHEBANG, LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL]
	  }
	};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var START_BRACKET = '\\[';
	  var END_BRACKET = '\\]';
	  return {
	    aliases: ['i7'],
	    case_insensitive: true,
	    keywords: {
	      // Some keywords more or less unique to I7, for relevance.
	      keyword:
	        // kind:
	        'thing room person man woman animal container ' +
	        'supporter backdrop door ' +
	        // characteristic:
	        'scenery open closed locked inside gender ' +
	        // verb:
	        'is are say understand ' +
	        // misc keyword:
	        'kind of rule'
	    },
	    contains: [
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        relevance: 0,
	        contains: [
	          {
	            className: 'subst',
	            begin: START_BRACKET, end: END_BRACKET
	          }
	        ]
	      },
	      {
	        className: 'section',
	        begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
	        end: '$'
	      },
	      {
	        // Rule definition
	        // This is here for relevance.
	        begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
	        end: ':',
	        contains: [
	          {
	            //Rule name
	            begin: '\\(This', end: '\\)'
	          }
	        ]
	      },
	      {
	        className: 'comment',
	        begin: START_BRACKET, end: END_BRACKET,
	        contains: ['self']
	      }
	    ]
	  };
	};

/***/ }),
/* 100 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var STRING = {
	    className: "string",
	    contains: [hljs.BACKSLASH_ESCAPE],
	    variants: [
	      {
	        begin: "'''", end: "'''",
	        relevance: 10
	      }, {
	        begin: '"""', end: '"""',
	        relevance: 10
	      }, {
	        begin: '"', end: '"'
	      }, {
	        begin: "'", end: "'"
	      }
	    ]
	  };
	  return {
	    aliases: ['toml'],
	    case_insensitive: true,
	    illegal: /\S/,
	    contains: [
	      hljs.COMMENT(';', '$'),
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'section',
	        begin: /^\s*\[+/, end: /\]+/
	      },
	      {
	        begin: /^[a-z0-9\[\]_-]+\s*=\s*/, end: '$',
	        returnBegin: true,
	        contains: [
	          {
	            className: 'attr',
	            begin: /[a-z0-9\[\]_-]+/
	          },
	          {
	            begin: /=/, endsWithParent: true,
	            relevance: 0,
	            contains: [
	              {
	                className: 'literal',
	                begin: /\bon|off|true|false|yes|no\b/
	              },
	              {
	                className: 'variable',
	                variants: [
	                  {begin: /\$[\w\d"][\w\d_]*/},
	                  {begin: /\$\{(.*?)}/}
	                ]
	              },
	              STRING,
	              {
	                className: 'number',
	                begin: /([\+\-]+)?[\d]+_[\d_]+/
	              },
	              hljs.NUMBER_MODE
	            ]
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)'
	  };

	  var F_KEYWORDS = {
	    literal: '.False. .True.',
	    keyword: 'kind do while private call intrinsic where elsewhere ' +
	      'type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then ' +
	      'public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. ' +
	      'goto save else use module select case ' +
	      'access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit ' +
	      'continue format pause cycle exit ' +
	      'c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg ' +
	      'synchronous nopass non_overridable pass protected volatile abstract extends import ' +
	      'non_intrinsic value deferred generic final enumerator class associate bind enum ' +
	      'c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t ' +
	      'c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double ' +
	      'c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr ' +
	      'c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer ' +
	      'c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor ' +
	      'numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ' +
	      'ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive ' +
	      'pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure ' +
	      'integer real character complex logical dimension allocatable|10 parameter ' +
	      'external implicit|10 none double precision assign intent optional pointer ' +
	      'target in out common equivalence data ' +
	      // IRPF90 special keywords
	      'begin_provider &begin_provider end_provider begin_shell end_shell begin_template end_template subst assert touch ' +
	      'soft_touch provide no_dep free irp_if irp_else irp_endif irp_write irp_read',
	    built_in: 'alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint ' +
	      'dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl ' +
	      'algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama ' +
	      'iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod ' +
	      'qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log ' +
	      'log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate ' +
	      'adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product ' +
	      'eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul ' +
	      'maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product ' +
	      'radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind ' +
	      'set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer ' +
	      'dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ' +
	      'ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode ' +
	      'is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of'  +
	      'acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 ' +
	      'atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits ' +
	      'bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr ' +
	      'num_images parity popcnt poppar shifta shiftl shiftr this_image ' +
	      // IRPF90 special built_ins
	      'IRP_ALIGN irp_here'
	  };
	  return {
	    case_insensitive: true,
	    keywords: F_KEYWORDS,
	    illegal: /\/\*/,
	    contains: [
	      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'string', relevance: 0}),
	      {
	        className: 'function',
	        beginKeywords: 'subroutine function program',
	        illegal: '[${=\\n]',
	        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
	      },
	      hljs.COMMENT('!', '$', {relevance: 0}),
	      hljs.COMMENT('begin_doc', 'end_doc', {relevance: 10}),
	      {
	        className: 'number',
	        begin: '(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?',
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var JAVA_IDENT_RE = '[\u00C0-\u02B8a-zA-Z_$][\u00C0-\u02B8a-zA-Z_$0-9]*';
	  var GENERIC_IDENT_RE = JAVA_IDENT_RE + '(<' + JAVA_IDENT_RE + '(\\s*,\\s*' + JAVA_IDENT_RE + ')*>)?';
	  var KEYWORDS =
	    'false synchronized int abstract float private char boolean static null if const ' +
	    'for true while long strictfp finally protected import native final void ' +
	    'enum else break transient catch instanceof byte super volatile case assert short ' +
	    'package default double public try this switch continue throws protected public private ' +
	    'module requires exports do';

	  // https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html
	  var JAVA_NUMBER_RE = '\\b' +
	    '(' +
	      '0[bB]([01]+[01_]+[01]+|[01]+)' + // 0b...
	      '|' +
	      '0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)' + // 0x...
	      '|' +
	      '(' +
	        '([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?' +
	        '|' +
	        '\\.([\\d]+[\\d_]+[\\d]+|[\\d]+)' +
	      ')' +
	      '([eE][-+]?\\d+)?' + // octal, decimal, float
	    ')' +
	    '[lLfF]?';
	  var JAVA_NUMBER_MODE = {
	    className: 'number',
	    begin: JAVA_NUMBER_RE,
	    relevance: 0
	  };

	  return {
	    aliases: ['jsp'],
	    keywords: KEYWORDS,
	    illegal: /<\/|#/,
	    contains: [
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          relevance : 0,
	          contains : [
	            {
	              // eat up @'s in emails to prevent them to be recognized as doctags
	              begin: /\w+@/, relevance: 0
	            },
	            {
	              className : 'doctag',
	              begin : '@[A-Za-z]+'
	            }
	          ]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: /[{;=]/, excludeEnd: true,
	        keywords: 'class interface',
	        illegal: /[:"\[\]]/,
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        // Expression keywords prevent 'keyword Name(...)' from being
	        // recognized as a function definition
	        beginKeywords: 'new throw return else',
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true, end: /[{;=]/,
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          {
	            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
	            relevance: 0,
	            contains: [hljs.UNDERSCORE_TITLE_MODE]
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            keywords: KEYWORDS,
	            relevance: 0,
	            contains: [
	              hljs.APOS_STRING_MODE,
	              hljs.QUOTE_STRING_MODE,
	              hljs.C_NUMBER_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          },
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      JAVA_NUMBER_MODE,
	      {
	        className: 'meta', begin: '@[A-Za-z]+'
	      }
	    ]
	  };
	};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
	  var KEYWORDS = {
	    keyword:
	      'in of if for while finally var new function do return void else break catch ' +
	      'instanceof with throw case default try this switch continue typeof delete ' +
	      'let yield const export super debugger as async await static ' +
	      // ECMAScript 6 modules import
	      'import from as'
	    ,
	    literal:
	      'true false null undefined NaN Infinity',
	    built_in:
	      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
	      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
	      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
	      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
	      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
	      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
	      'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
	      'Promise'
	  };
	  var EXPRESSIONS;
	  var NUMBER = {
	    className: 'number',
	    variants: [
	      { begin: '\\b(0[bB][01]+)' },
	      { begin: '\\b(0[oO][0-7]+)' },
	      { begin: hljs.C_NUMBER_RE }
	    ],
	    relevance: 0
	  };
	  var SUBST = {
	    className: 'subst',
	    begin: '\\$\\{', end: '\\}',
	    keywords: KEYWORDS,
	    contains: []  // defined later
	  };
	  var TEMPLATE_STRING = {
	    className: 'string',
	    begin: '`', end: '`',
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      SUBST
	    ]
	  };
	  SUBST.contains = [
	    hljs.APOS_STRING_MODE,
	    hljs.QUOTE_STRING_MODE,
	    TEMPLATE_STRING,
	    NUMBER,
	    hljs.REGEXP_MODE
	  ]
	  var PARAMS_CONTAINS = SUBST.contains.concat([
	    hljs.C_BLOCK_COMMENT_MODE,
	    hljs.C_LINE_COMMENT_MODE
	  ]);

	  return {
	    aliases: ['js', 'jsx'],
	    keywords: KEYWORDS,
	    contains: [
	      {
	        className: 'meta',
	        relevance: 10,
	        begin: /^\s*['"]use (strict|asm)['"]/
	      },
	      {
	        className: 'meta',
	        begin: /^#!/, end: /$/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      TEMPLATE_STRING,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      NUMBER,
	      { // object attr container
	        begin: /[{,]\s*/, relevance: 0,
	        contains: [
	          {
	            begin: IDENT_RE + '\\s*:', returnBegin: true,
	            relevance: 0,
	            contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
	          }
	        ]
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.REGEXP_MODE,
	          {
	            className: 'function',
	            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
	            end: '\\s*=>',
	            contains: [
	              {
	                className: 'params',
	                variants: [
	                  {
	                    begin: IDENT_RE
	                  },
	                  {
	                    begin: /\(\s*\)/,
	                  },
	                  {
	                    begin: /\(/, end: /\)/,
	                    excludeBegin: true, excludeEnd: true,
	                    keywords: KEYWORDS,
	                    contains: PARAMS_CONTAINS
	                  }
	                ]
	              }
	            ]
	          },
	          { // E4X / JSX
	            begin: /</, end: /(\/\w+|\w+\/)>/,
	            subLanguage: 'xml',
	            contains: [
	              {begin: /<\w+\s*\/>/, skip: true},
	              {
	                begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
	                contains: [
	                  {begin: /<\w+\s*\/>/, skip: true},
	                  'self'
	                ]
	              }
	            ]
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /\{/, excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            contains: PARAMS_CONTAINS
	          }
	        ],
	        illegal: /\[|%/
	      },
	      {
	        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
	      },
	      hljs.METHOD_GUARD,
	      { // ES6 class
	        className: 'class',
	        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
	        illegal: /[:"\[\]]/,
	        contains: [
	          {beginKeywords: 'extends'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        beginKeywords: 'constructor', end: /\{/, excludeEnd: true
	      }
	    ],
	    illegal: /#(?!!)/
	  };
	};

/***/ }),
/* 104 */
/***/ (function(module, exports) {

	module.exports = function (hljs) {
	  var PARAM = {
	    begin: /[\w-]+ *=/, returnBegin: true,
	    relevance: 0,
	    contains: [{className: 'attr', begin: /[\w-]+/}]
	  };
	  var PARAMSBLOCK = {
	    className: 'params',
	    begin: /\(/,
	    end: /\)/,
	    contains: [PARAM],
	    relevance : 0
	  };
	  var OPERATION = {
	    className: 'function',
	    begin: /:[\w\-.]+/,
	    relevance: 0
	  };
	  var PATH = {
	    className: 'string',
	    begin: /\B(([\/.])[\w\-.\/=]+)+/,
	  };
	  var COMMAND_PARAMS = {
	    className: 'params',
	    begin: /--[\w\-=\/]+/,
	  };
	  return {
	    aliases: ['wildfly-cli'],
	    lexemes: '[a-z\-]+',
	    keywords: {
	      keyword: 'alias batch cd clear command connect connection-factory connection-info data-source deploy ' +
	      'deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls ' +
	      'patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias ' +
	      'undeploy unset version xa-data-source', // module
	      literal: 'true false'
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      COMMAND_PARAMS,
	      OPERATION,
	      PATH,
	      PARAMSBLOCK
	    ]
	  }
	};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var LITERALS = {literal: 'true false null'};
	  var TYPES = [
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE
	  ];
	  var VALUE_CONTAINER = {
	    end: ',', endsWithParent: true, excludeEnd: true,
	    contains: TYPES,
	    keywords: LITERALS
	  };
	  var OBJECT = {
	    begin: '{', end: '}',
	    contains: [
	      {
	        className: 'attr',
	        begin: /"/, end: /"/,
	        contains: [hljs.BACKSLASH_ESCAPE],
	        illegal: '\\n',
	      },
	      hljs.inherit(VALUE_CONTAINER, {begin: /:/})
	    ],
	    illegal: '\\S'
	  };
	  var ARRAY = {
	    begin: '\\[', end: '\\]',
	    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents
	    illegal: '\\S'
	  };
	  TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);
	  return {
	    contains: TYPES,
	    keywords: LITERALS,
	    illegal: '\\S'
	  };
	};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  // Since there are numerous special names in Julia, it is too much trouble
	  // to maintain them by hand. Hence these names (i.e. keywords, literals and
	  // built-ins) are automatically generated from Julia (v0.3.0 and v0.4.1)
	  // itself through following scripts for each.

	  var KEYWORDS = {
	    // # keyword generator
	    // println("in")
	    // for kw in Base.REPLCompletions.complete_keyword("")
	    //     println(kw)
	    // end
	    keyword:
	      'in abstract baremodule begin bitstype break catch ccall const continue do else elseif end export ' +
	      'finally for function global if immutable import importall let local macro module quote return try type ' +
	      'typealias using while',

	    // # literal generator
	    // println("true")
	    // println("false")
	    // for name in Base.REPLCompletions.completions("", 0)[1]
	    //     try
	    //         s = symbol(name)
	    //         v = eval(s)
	    //         if !isa(v, Function) &&
	    //            !isa(v, DataType) &&
	    //            !isa(v, IntrinsicFunction) &&
	    //            !issubtype(typeof(v), Tuple) &&
	    //            !isa(v, Union) &&
	    //            !isa(v, Module) &&
	    //            !isa(v, TypeConstructor) &&
	    //            !isa(v, TypeVar) &&
	    //            !isa(v, Colon)
	    //             println(name)
	    //         end
	    //     end
	    // end
	    literal:
	      // v0.3
	      'true false ARGS CPU_CORES C_NULL DL_LOAD_PATH DevNull ENDIAN_BOM ENV I|0 Inf Inf16 Inf32 ' +
	      'InsertionSort JULIA_HOME LOAD_PATH MS_ASYNC MS_INVALIDATE MS_SYNC MergeSort NaN NaN16 NaN32 OS_NAME QuickSort ' +
	      'RTLD_DEEPBIND RTLD_FIRST RTLD_GLOBAL RTLD_LAZY RTLD_LOCAL RTLD_NODELETE RTLD_NOLOAD RTLD_NOW RoundDown ' +
	      'RoundFromZero RoundNearest RoundToZero RoundUp STDERR STDIN STDOUT VERSION WORD_SIZE catalan cglobal e|0 eu|0 ' +
	      'eulergamma golden im nothing pi γ π φ ' +
	      // v0.4 (diff)
	      'Inf64 NaN64 RoundNearestTiesAway RoundNearestTiesUp ',

	    // # built_in generator:
	    // for name in Base.REPLCompletions.completions("", 0)[1]
	    //     try
	    //         v = eval(symbol(name))
	    //         if isa(v, DataType) || isa(v, TypeConstructor) || isa(v, TypeVar)
	    //             println(name)
	    //         end
	    //     end
	    // end
	    built_in:
	      // v0.3
	      'ANY ASCIIString AbstractArray AbstractRNG AbstractSparseArray Any ArgumentError Array Associative Base64Pipe ' +
	      'Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError Box CFILE Cchar Cdouble Cfloat Char ' +
	      'CharString Cint Clong Clonglong ClusterManager Cmd Coff_t Colon Complex Complex128 Complex32 Complex64 ' +
	      'Condition Cptrdiff_t Cshort Csize_t Cssize_t Cuchar Cuint Culong Culonglong Cushort Cwchar_t DArray DataType ' +
	      'DenseArray Diagonal Dict DimensionMismatch DirectIndexString Display DivideError DomainError EOFError ' +
	      'EachLine Enumerate ErrorException Exception Expr Factorization FileMonitor FileOffset Filter Float16 Float32 ' +
	      'Float64 FloatRange FloatingPoint Function GetfieldNode GotoNode Hermitian IO IOBuffer IOStream IPv4 IPv6 ' +
	      'InexactError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException IntrinsicFunction KeyError ' +
	      'LabelNode LambdaStaticData LineNumberNode LoadError LocalProcess MIME MathConst MemoryError MersenneTwister ' +
	      'Method MethodError MethodTable Module NTuple NewvarNode Nothing Number ObjectIdDict OrdinalRange ' +
	      'OverflowError ParseError PollingFileWatcher ProcessExitedException ProcessGroup Ptr QuoteNode Range Range1 ' +
	      'Ranges Rational RawFD Real Regex RegexMatch RemoteRef RepString RevString RopeString RoundingMode Set ' +
	      'SharedArray Signed SparseMatrixCSC StackOverflowError Stat StatStruct StepRange String SubArray SubString ' +
	      'SymTridiagonal Symbol SymbolNode Symmetric SystemError Task TextDisplay Timer TmStruct TopNode Triangular ' +
	      'Tridiagonal Type TypeConstructor TypeError TypeName TypeVar UTF16String UTF32String UTF8String UdpSocket ' +
	      'Uint Uint128 Uint16 Uint32 Uint64 Uint8 UndefRefError UndefVarError UniformScaling UnionType UnitRange ' +
	      'Unsigned Vararg VersionNumber WString WeakKeyDict WeakRef Woodbury Zip ' +
	      // v0.4 (diff)
	      'AbstractChannel AbstractFloat AbstractString AssertionError Base64DecodePipe Base64EncodePipe BufferStream ' +
	      'CapturedException CartesianIndex CartesianRange Channel Cintmax_t CompositeException Cstring Cuintmax_t ' +
	      'Cwstring Date DateTime Dims Enum GenSym GlobalRef HTML InitError InvalidStateException Irrational LinSpace ' +
	      'LowerTriangular NullException Nullable OutOfMemoryError Pair PartialQuickSort Pipe RandomDevice ' +
	      'ReadOnlyMemoryError ReentrantLock Ref RemoteException SegmentationFault SerializationState SimpleVector ' +
	      'TCPSocket Text Tuple UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UnicodeError Union UpperTriangular ' +
	      'Val Void WorkerConfig AbstractMatrix AbstractSparseMatrix AbstractSparseVector AbstractVecOrMat AbstractVector ' +
	      'DenseMatrix DenseVecOrMat DenseVector Matrix SharedMatrix SharedVector StridedArray StridedMatrix ' +
	      'StridedVecOrMat StridedVector VecOrMat Vector '
	  };

	  // ref: http://julia.readthedocs.org/en/latest/manual/variables/#allowed-variable-names
	  var VARIABLE_NAME_RE = '[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*';

	  // placeholder for recursive self-reference
	  var DEFAULT = { lexemes: VARIABLE_NAME_RE, keywords: KEYWORDS, illegal: /<\// };

	  var TYPE_ANNOTATION = {
	    className: 'type',
	    begin: /::/
	  };

	  var SUBTYPE = {
	    className: 'type',
	    begin: /<:/
	  };

	  // ref: http://julia.readthedocs.org/en/latest/manual/integers-and-floating-point-numbers/
	  var NUMBER = {
	    className: 'number',
	    // supported numeric literals:
	    //  * binary literal (e.g. 0x10)
	    //  * octal literal (e.g. 0o76543210)
	    //  * hexadecimal literal (e.g. 0xfedcba876543210)
	    //  * hexadecimal floating point literal (e.g. 0x1p0, 0x1.2p2)
	    //  * decimal literal (e.g. 9876543210, 100_000_000)
	    //  * floating pointe literal (e.g. 1.2, 1.2f, .2, 1., 1.2e10, 1.2e-10)
	    begin: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
	    relevance: 0
	  };

	  var CHAR = {
	    className: 'string',
	    begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
	  };

	  var INTERPOLATION = {
	    className: 'subst',
	    begin: /\$\(/, end: /\)/,
	    keywords: KEYWORDS
	  };

	  var INTERPOLATED_VARIABLE = {
	    className: 'variable',
	    begin: '\\$' + VARIABLE_NAME_RE
	  };

	  // TODO: neatly escape normal code in string literal
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
	    variants: [
	      { begin: /\w*"""/, end: /"""\w*/, relevance: 10 },
	      { begin: /\w*"/, end: /"\w*/ }
	    ]
	  };

	  var COMMAND = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, INTERPOLATION, INTERPOLATED_VARIABLE],
	    begin: '`', end: '`'
	  };

	  var MACROCALL = {
	    className: 'meta',
	    begin: '@' + VARIABLE_NAME_RE
	  };

	  var COMMENT = {
	    className: 'comment',
	    variants: [
	      { begin: '#=', end: '=#', relevance: 10 },
	      { begin: '#', end: '$' }
	    ]
	  };

	  DEFAULT.contains = [
	    NUMBER,
	    CHAR,
	    TYPE_ANNOTATION,
	    SUBTYPE,
	    STRING,
	    COMMAND,
	    MACROCALL,
	    COMMENT,
	    hljs.HASH_COMMENT_MODE
	  ];
	  INTERPOLATION.contains = DEFAULT.contains;

	  return DEFAULT;
	};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      'abstract as val var vararg get set class object open private protected public noinline ' +
	      'crossinline dynamic final enum if else do while for when throw try catch finally ' +
	      'import package is in fun override companion reified inline lateinit init' +
	      'interface annotation data sealed internal infix operator out by constructor super ' +
	      // to be deleted soon
	      'trait volatile transient native default',
	    built_in:
	      'Byte Short Char Int Long Boolean Float Double Void Unit Nothing',
	    literal:
	      'true false null'
	  };
	  var KEYWORDS_WITH_LABEL = {
	    className: 'keyword',
	    begin: /\b(break|continue|return|this)\b/,
	    starts: {
	      contains: [
	        {
	          className: 'symbol',
	          begin: /@\w+/
	        }
	      ]
	    }
	  };
	  var LABEL = {
	    className: 'symbol', begin: hljs.UNDERSCORE_IDENT_RE + '@'
	  };

	  // for string templates
	  var SUBST = {
	    className: 'subst',
	    variants: [
	      {begin: '\\$' + hljs.UNDERSCORE_IDENT_RE},
	      {begin: '\\${', end: '}', contains: [hljs.APOS_STRING_MODE, hljs.C_NUMBER_MODE]}
	    ]
	  };
	  var STRING = {
	    className: 'string',
	    variants: [
	      {
	        begin: '"""', end: '"""',
	        contains: [SUBST]
	      },
	      // Can't use built-in modes easily, as we want to use STRING in the meta
	      // context as 'meta-string' and there's no syntax to remove explicitly set
	      // classNames in built-in modes.
	      {
	        begin: '\'', end: '\'',
	        illegal: /\n/,
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        begin: '"', end: '"',
	        illegal: /\n/,
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      }
	    ]
	  };

	  var ANNOTATION_USE_SITE = {
	    className: 'meta', begin: '@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*' + hljs.UNDERSCORE_IDENT_RE + ')?'
	  };
	  var ANNOTATION = {
	    className: 'meta', begin: '@' + hljs.UNDERSCORE_IDENT_RE,
	    contains: [
	      {
	        begin: /\(/, end: /\)/,
	        contains: [
	          hljs.inherit(STRING, {className: 'meta-string'})
	        ]
	      }
	    ]
	  };

	  return {
	    keywords: KEYWORDS,
	    contains : [
	      hljs.COMMENT(
	        '/\\*\\*',
	        '\\*/',
	        {
	          relevance : 0,
	          contains : [{
	            className : 'doctag',
	            begin : '@[A-Za-z]+'
	          }]
	        }
	      ),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      KEYWORDS_WITH_LABEL,
	      LABEL,
	      ANNOTATION_USE_SITE,
	      ANNOTATION,
	      {
	        className: 'function',
	        beginKeywords: 'fun', end: '[(]|$',
	        returnBegin: true,
	        excludeEnd: true,
	        keywords: KEYWORDS,
	        illegal: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
	        relevance: 5,
	        contains: [
	          {
	            begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(', returnBegin: true,
	            relevance: 0,
	            contains: [hljs.UNDERSCORE_TITLE_MODE]
	          },
	          {
	            className: 'type',
	            begin: /</, end: />/, keywords: 'reified',
	            relevance: 0
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            endsParent: true,
	            keywords: KEYWORDS,
	            relevance: 0,
	            contains: [
	              {
	                begin: /:/, end: /[=,\/]/, endsWithParent: true,
	                contains: [
	                  {className: 'type', begin: hljs.UNDERSCORE_IDENT_RE},
	                  hljs.C_LINE_COMMENT_MODE,
	                  hljs.C_BLOCK_COMMENT_MODE
	                ],
	                relevance: 0
	              },
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              ANNOTATION_USE_SITE,
	              ANNOTATION,
	              STRING,
	              hljs.C_NUMBER_MODE
	            ]
	          },
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface trait', end: /[:\{(]|$/, // remove 'trait' when removed from KEYWORDS
	        excludeEnd: true,
	        illegal: 'extends implements',
	        contains: [
	          {beginKeywords: 'public protected internal private constructor'},
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'type',
	            begin: /</, end: />/, excludeBegin: true, excludeEnd: true,
	            relevance: 0
	          },
	          {
	            className: 'type',
	            begin: /[,:]\s*/, end: /[<\(,]|$/, excludeBegin: true, returnEnd: true
	          },
	          ANNOTATION_USE_SITE,
	          ANNOTATION
	        ]
	      },
	      STRING,
	      {
	        className: 'meta',
	        begin: "^#!/usr/bin/env", end: '$',
	        illegal: '\n'
	      },
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var LASSO_IDENT_RE = '[a-zA-Z_][\\w.]*';
	  var LASSO_ANGLE_RE = '<\\?(lasso(script)?|=)';
	  var LASSO_CLOSE_RE = '\\]|\\?>';
	  var LASSO_KEYWORDS = {
	    literal:
	      'true false none minimal full all void and or not ' +
	      'bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft',
	    built_in:
	      'array date decimal duration integer map pair string tag xml null ' +
	      'boolean bytes keyword list locale queue set stack staticarray ' +
	      'local var variable global data self inherited currentcapture givenblock',
	    keyword:
	      'cache database_names database_schemanames database_tablenames ' +
	      'define_tag define_type email_batch encode_set html_comment handle ' +
	      'handle_error header if inline iterate ljax_target link ' +
	      'link_currentaction link_currentgroup link_currentrecord link_detail ' +
	      'link_firstgroup link_firstrecord link_lastgroup link_lastrecord ' +
	      'link_nextgroup link_nextrecord link_prevgroup link_prevrecord log ' +
	      'loop namespace_using output_none portal private protect records ' +
	      'referer referrer repeating resultset rows search_args ' +
	      'search_arguments select sort_args sort_arguments thread_atomic ' +
	      'value_list while abort case else fail_if fail_ifnot fail if_empty ' +
	      'if_false if_null if_true loop_abort loop_continue loop_count params ' +
	      'params_up return return_value run_children soap_definetag ' +
	      'soap_lastrequest soap_lastresponse tag_name ascending average by ' +
	      'define descending do equals frozen group handle_failure import in ' +
	      'into join let match max min on order parent protected provide public ' +
	      'require returnhome skip split_thread sum take thread to trait type ' +
	      'where with yield yieldhome'
	  };
	  var HTML_COMMENT = hljs.COMMENT(
	    '<!--',
	    '-->',
	    {
	      relevance: 0
	    }
	  );
	  var LASSO_NOPROCESS = {
	    className: 'meta',
	    begin: '\\[noprocess\\]',
	    starts: {
	      end: '\\[/noprocess\\]',
	      returnEnd: true,
	      contains: [HTML_COMMENT]
	    }
	  };
	  var LASSO_START = {
	    className: 'meta',
	    begin: '\\[/noprocess|' + LASSO_ANGLE_RE
	  };
	  var LASSO_DATAMEMBER = {
	    className: 'symbol',
	    begin: '\'' + LASSO_IDENT_RE + '\''
	  };
	  var LASSO_CODE = [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    hljs.inherit(hljs.C_NUMBER_MODE, {begin: hljs.C_NUMBER_RE + '|(-?infinity|NaN)\\b'}),
	    hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	    hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	    {
	      className: 'string',
	      begin: '`', end: '`'
	    },
	    { // variables
	      variants: [
	        {
	          begin: '[#$]' + LASSO_IDENT_RE
	        },
	        {
	          begin: '#', end: '\\d+',
	          illegal: '\\W'
	        }
	      ]
	    },
	    {
	      className: 'type',
	      begin: '::\\s*', end: LASSO_IDENT_RE,
	      illegal: '\\W'
	    },
	    {
	      className: 'params',
	      variants: [
	        {
	          begin: '-(?!infinity)' + LASSO_IDENT_RE,
	          relevance: 0
	        },
	        {
	          begin: '(\\.\\.\\.)'
	        }
	      ]
	    },
	    {
	      begin: /(->|\.)\s*/,
	      relevance: 0,
	      contains: [LASSO_DATAMEMBER]
	    },
	    {
	      className: 'class',
	      beginKeywords: 'define',
	      returnEnd: true, end: '\\(|=>',
	      contains: [
	        hljs.inherit(hljs.TITLE_MODE, {begin: LASSO_IDENT_RE + '(=(?!>))?|[-+*/%](?!>)'})
	      ]
	    }
	  ];
	  return {
	    aliases: ['ls', 'lassoscript'],
	    case_insensitive: true,
	    lexemes: LASSO_IDENT_RE + '|&[lg]t;',
	    keywords: LASSO_KEYWORDS,
	    contains: [
	      {
	        className: 'meta',
	        begin: LASSO_CLOSE_RE,
	        relevance: 0,
	        starts: { // markup
	          end: '\\[|' + LASSO_ANGLE_RE,
	          returnEnd: true,
	          relevance: 0,
	          contains: [HTML_COMMENT]
	        }
	      },
	      LASSO_NOPROCESS,
	      LASSO_START,
	      {
	        className: 'meta',
	        begin: '\\[no_square_brackets',
	        starts: {
	          end: '\\[/no_square_brackets\\]', // not implemented in the language
	          lexemes: LASSO_IDENT_RE + '|&[lg]t;',
	          keywords: LASSO_KEYWORDS,
	          contains: [
	            {
	              className: 'meta',
	              begin: LASSO_CLOSE_RE,
	              relevance: 0,
	              starts: {
	                end: '\\[noprocess\\]|' + LASSO_ANGLE_RE,
	                returnEnd: true,
	                contains: [HTML_COMMENT]
	              }
	            },
	            LASSO_NOPROCESS,
	            LASSO_START
	          ].concat(LASSO_CODE)
	        }
	      },
	      {
	        className: 'meta',
	        begin: '\\[',
	        relevance: 0
	      },
	      {
	        className: 'meta',
	        begin: '^#!', end:'lasso9$',
	        relevance: 10
	      }
	    ].concat(LASSO_CODE)
	  };
	};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      {
	        className: 'attribute',
	        begin: '^dn', end: ': ', excludeEnd: true,
	        starts: {end: '$', relevance: 0},
	        relevance: 10
	      },
	      {
	        className: 'attribute',
	        begin: '^\\w', end: ': ', excludeEnd: true,
	        starts: {end: '$', relevance: 0}
	      },
	      {
	        className: 'literal',
	        begin: '^-', end: '$'
	      },
	      hljs.HASH_COMMENT_MODE
	    ]
	  };
	};

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	module.exports = function (hljs) {
	  return {
	    contains: [
	      {
	        className: 'function',
	        begin: '#+' + '[A-Za-z_0-9]*' + '\\(',
	        end:' {',
	        returnBegin: true,
	        excludeEnd: true,
	        contains : [
	          {
	            className: 'keyword',
	            begin: '#+'
	          },
	          {
	            className: 'title',
	            begin: '[A-Za-z_][A-Za-z_0-9]*'
	          },
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            endsParent: true,
	            contains: [
	              {
	                className: 'string',
	                begin: '"',
	                end: '"'
	              },
	              {
	                className: 'variable',
	                begin: '[A-Za-z_][A-Za-z_0-9]*'
	              }
	            ]
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE        = '[\\w-]+'; // yes, Less identifiers may begin with a digit
	  var INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})';

	  /* Generic Modes */

	  var RULES = [], VALUE = []; // forward def. for recursive modes

	  var STRING_MODE = function(c) { return {
	    // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
	    className: 'string', begin: '~?' + c + '.*?' + c
	  };};

	  var IDENT_MODE = function(name, begin, relevance) { return {
	    className: name, begin: begin, relevance: relevance
	  };};

	  var PARENS_MODE = {
	    // used only to properly balance nested parens inside mixin call, def. arg list
	    begin: '\\(', end: '\\)', contains: VALUE, relevance: 0
	  };

	  // generic Less highlighter (used almost everywhere except selectors):
	  VALUE.push(
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    STRING_MODE("'"),
	    STRING_MODE('"'),
	    hljs.CSS_NUMBER_MODE, // fixme: it does not include dot for numbers like .5em :(
	    {
	      begin: '(url|data-uri)\\(',
	      starts: {className: 'string', end: '[\\)\\n]', excludeEnd: true}
	    },
	    IDENT_MODE('number', '#[0-9A-Fa-f]+\\b'),
	    PARENS_MODE,
	    IDENT_MODE('variable', '@@?' + IDENT_RE, 10),
	    IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),
	    IDENT_MODE('built_in', '~?`[^`]*?`'), // inline javascript (or whatever host language) *multiline* string
	    { // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
	      className: 'attribute', begin: IDENT_RE + '\\s*:', end: ':', returnBegin: true, excludeEnd: true
	    },
	    {
	      className: 'meta',
	      begin: '!important'
	    }
	  );

	  var VALUE_WITH_RULESETS = VALUE.concat({
	    begin: '{', end: '}', contains: RULES
	  });

	  var MIXIN_GUARD_MODE = {
	    beginKeywords: 'when', endsWithParent: true,
	    contains: [{beginKeywords: 'and not'}].concat(VALUE) // using this form to override VALUE’s 'function' match
	  };

	  /* Rule-Level Modes */

	  var RULE_MODE = {
	    begin: INTERP_IDENT_RE + '\\s*:', returnBegin: true, end: '[;}]',
	    relevance: 0,
	    contains: [
	      {
	        className: 'attribute',
	        begin: INTERP_IDENT_RE, end: ':', excludeEnd: true,
	        starts: {
	          endsWithParent: true, illegal: '[<=$]',
	          relevance: 0,
	          contains: VALUE
	        }
	      }
	    ]
	  };

	  var AT_RULE_MODE = {
	    className: 'keyword',
	    begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
	    starts: {end: '[;{}]', returnEnd: true, contains: VALUE, relevance: 0}
	  };

	  // variable definitions and calls
	  var VAR_RULE_MODE = {
	    className: 'variable',
	    variants: [
	      // using more strict pattern for higher relevance to increase chances of Less detection.
	      // this is *the only* Less specific statement used in most of the sources, so...
	      // (we’ll still often loose to the css-parser unless there's '//' comment,
	      // simply because 1 variable just can't beat 99 properties :)
	      {begin: '@' + IDENT_RE + '\\s*:', relevance: 15},
	      {begin: '@' + IDENT_RE}
	    ],
	    starts: {end: '[;}]', returnEnd: true, contains: VALUE_WITH_RULESETS}
	  };

	  var SELECTOR_MODE = {
	    // first parse unambiguous selectors (i.e. those not starting with tag)
	    // then fall into the scary lookahead-discriminator variant.
	    // this mode also handles mixin definitions and calls
	    variants: [{
	      begin: '[\\.#:&\\[>]', end: '[;{}]'  // mixin calls end with ';'
	      }, {
	      begin: INTERP_IDENT_RE, end: '{'
	    }],
	    returnBegin: true,
	    returnEnd:   true,
	    illegal: '[<=\'$"]',
	    relevance: 0,
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      MIXIN_GUARD_MODE,
	      IDENT_MODE('keyword',  'all\\b'),
	      IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),     // otherwise it’s identified as tag
	      IDENT_MODE('selector-tag',  INTERP_IDENT_RE + '%?', 0), // '%' for more consistent coloring of @keyframes "tags"
	      IDENT_MODE('selector-id', '#' + INTERP_IDENT_RE),
	      IDENT_MODE('selector-class', '\\.' + INTERP_IDENT_RE, 0),
	      IDENT_MODE('selector-tag',  '&', 0),
	      {className: 'selector-attr', begin: '\\[', end: '\\]'},
	      {className: 'selector-pseudo', begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},
	      {begin: '\\(', end: '\\)', contains: VALUE_WITH_RULESETS}, // argument list of parametric mixins
	      {begin: '!important'} // eat !important after mixin call or it will be colored as tag
	    ]
	  };

	  RULES.push(
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    AT_RULE_MODE,
	    VAR_RULE_MODE,
	    RULE_MODE,
	    SELECTOR_MODE
	  );

	  return {
	    case_insensitive: true,
	    illegal: '[=>\'/<($"]',
	    contains: RULES
	  };
	};

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var LISP_IDENT_RE = '[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*';
	  var MEC_RE = '\\|[^]*?\\|';
	  var LISP_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?';
	  var SHEBANG = {
	    className: 'meta',
	    begin: '^#!', end: '$'
	  };
	  var LITERAL = {
	    className: 'literal',
	    begin: '\\b(t{1}|nil)\\b'
	  };
	  var NUMBER = {
	    className: 'number',
	    variants: [
	      {begin: LISP_SIMPLE_NUMBER_RE, relevance: 0},
	      {begin: '#(b|B)[0-1]+(/[0-1]+)?'},
	      {begin: '#(o|O)[0-7]+(/[0-7]+)?'},
	      {begin: '#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?'},
	      {begin: '#(c|C)\\(' + LISP_SIMPLE_NUMBER_RE + ' +' + LISP_SIMPLE_NUMBER_RE, end: '\\)'}
	    ]
	  };
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null});
	  var COMMENT = hljs.COMMENT(
	    ';', '$',
	    {
	      relevance: 0
	    }
	  );
	  var VARIABLE = {
	    begin: '\\*', end: '\\*'
	  };
	  var KEYWORD = {
	    className: 'symbol',
	    begin: '[:&]' + LISP_IDENT_RE
	  };
	  var IDENT = {
	    begin: LISP_IDENT_RE,
	    relevance: 0
	  };
	  var MEC = {
	    begin: MEC_RE
	  };
	  var QUOTED_LIST = {
	    begin: '\\(', end: '\\)',
	    contains: ['self', LITERAL, STRING, NUMBER, IDENT]
	  };
	  var QUOTED = {
	    contains: [NUMBER, STRING, VARIABLE, KEYWORD, QUOTED_LIST, IDENT],
	    variants: [
	      {
	        begin: '[\'`]\\(', end: '\\)'
	      },
	      {
	        begin: '\\(quote ', end: '\\)',
	        keywords: {name: 'quote'}
	      },
	      {
	        begin: '\'' + MEC_RE
	      }
	    ]
	  };
	  var QUOTED_ATOM = {
	    variants: [
	      {begin: '\'' + LISP_IDENT_RE},
	      {begin: '#\'' + LISP_IDENT_RE + '(::' + LISP_IDENT_RE + ')*'}
	    ]
	  };
	  var LIST = {
	    begin: '\\(\\s*', end: '\\)'
	  };
	  var BODY = {
	    endsWithParent: true,
	    relevance: 0
	  };
	  LIST.contains = [
	    {
	      className: 'name',
	      variants: [
	        {begin: LISP_IDENT_RE},
	        {begin: MEC_RE}
	      ]
	    },
	    BODY
	  ];
	  BODY.contains = [QUOTED, QUOTED_ATOM, LIST, LITERAL, NUMBER, STRING, COMMENT, VARIABLE, KEYWORD, MEC, IDENT];

	  return {
	    illegal: /\S/,
	    contains: [
	      NUMBER,
	      SHEBANG,
	      LITERAL,
	      STRING,
	      COMMENT,
	      QUOTED,
	      QUOTED_ATOM,
	      LIST,
	      IDENT
	    ]
	  };
	};

/***/ }),
/* 113 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var VARIABLE = {
	    begin: '\\b[gtps][A-Z]+[A-Za-z0-9_\\-]*\\b|\\$_[A-Z]+',
	    relevance: 0
	  };
	  var COMMENT_MODES = [
	    hljs.C_BLOCK_COMMENT_MODE,
	    hljs.HASH_COMMENT_MODE,
	    hljs.COMMENT('--', '$'),
	    hljs.COMMENT('[^:]//', '$')
	  ];
	  var TITLE1 = hljs.inherit(hljs.TITLE_MODE, {
	    variants: [
	      {begin: '\\b_*rig[A-Z]+[A-Za-z0-9_\\-]*'},
	      {begin: '\\b_[a-z0-9\\-]+'}
	    ]
	  });
	  var TITLE2 = hljs.inherit(hljs.TITLE_MODE, {begin: '\\b([A-Za-z0-9_\\-]+)\\b'});
	  return {
	    case_insensitive: false,
	    keywords: {
	      keyword:
	        '$_COOKIE $_FILES $_GET $_GET_BINARY $_GET_RAW $_POST $_POST_BINARY $_POST_RAW $_SESSION $_SERVER ' +
	        'codepoint codepoints segment segments codeunit codeunits sentence sentences trueWord trueWords paragraph ' +
	        'after byte bytes english the until http forever descending using line real8 with seventh ' +
	        'for stdout finally element word words fourth before black ninth sixth characters chars stderr ' +
	        'uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid ' +
	        'at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 ' +
	        'int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat ' +
	        'end repeat URL in try into switch to words https token binfile each tenth as ticks tick ' +
	        'system real4 by dateItems without char character ascending eighth whole dateTime numeric short ' +
	        'first ftp integer abbreviated abbr abbrev private case while if ' +
	        'div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within ' +
	        'contains ends with begins the keys of keys',
	      literal:
	        'SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE ' +
	        'QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO ' +
	        'six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five ' +
	        'quote empty one true return cr linefeed right backslash null seven tab three two ' +
	        'RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK ' +
	        'FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK',
	      built_in:
	        'put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg avgDev base64Decode ' +
	        'base64Encode baseConvert binaryDecode binaryEncode byteOffset byteToNum cachedURL cachedURLs charToNum ' +
	        'cipherNames codepointOffset codepointProperty codepointToNum codeunitOffset commandNames compound compress ' +
	        'constantNames cos date dateFormat decompress directories ' +
	        'diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames geometricMean global ' +
	        'globals hasMemory harmonicMean hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset ' +
	        'keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders ' +
	        'libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 ' +
	        'longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge millisec ' +
	        'millisecs millisecond milliseconds min monthNames nativeCharToNum normalizeText num number numToByte numToChar ' +
	        'numToCodepoint numToNativeChar offset open openfiles openProcesses openProcessIDs openSockets ' +
	        'paragraphOffset paramCount param params peerAddress pendingMessages platform popStdDev populationStandardDeviation ' +
	        'populationVariance popVariance processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile ' +
	        'revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull ' +
	        'revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered ' +
	        'revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames ' +
	        'revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull ' +
	        'revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections ' +
	        'revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype ' +
	        'revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext ' +
	        'revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames ' +
	        'revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase ' +
	        'revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute ' +
	        'revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLCreateTreeFromFileWithNamespaces ' +
	        'revXMLCreateTreeWithNamespaces revXMLDataFromXPathQuery revXMLEvaluateXPath revXMLFirstChild revXMLMatchingNode ' +
	        'revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling ' +
	        'revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error ' +
	        'revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_Execute ' +
	        'revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort ' +
	        'revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree ' +
	        'revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sampVariance ' +
	        'sec secs seconds sentenceOffset sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound ' +
	        'stdDev sum sysError systemVersion tan tempName textDecode textEncode tick ticks time to tokenOffset toLower toUpper ' +
	        'transpose truewordOffset trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus uuid value variableNames ' +
	        'variance version waitDepth weekdayNames wordOffset xsltApplyStylesheet xsltApplyStylesheetFromFile xsltLoadStylesheet ' +
	        'xsltLoadStylesheetFromFile add breakpoint cancel clear local variable file word line folder directory URL close socket process ' +
	        'combine constant convert create new alias folder directory decrypt delete variable word line folder ' +
	        'directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile ' +
	        'libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback ' +
	        'libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime ' +
	        'libURLSetStatusCallback load multiply socket prepare process post seek rel relative read from process rename ' +
	        'replace require resetAll resolve revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase ' +
	        'revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees ' +
	        'revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord ' +
	        'revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase ' +
	        'revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD ' +
	        'revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost ' +
	        'revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData ' +
	        'revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel ' +
	        'revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback ' +
	        'revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split start stop ' +
	        'subtract union unload wait write'
	    },
	    contains: [
	      VARIABLE,
	      {
	        className: 'keyword',
	        begin: '\\bend\\sif\\b'
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '$',
	        contains: [
	          VARIABLE,
	          TITLE2,
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.BINARY_NUMBER_MODE,
	          hljs.C_NUMBER_MODE,
	          TITLE1
	        ]
	      },
	      {
	        className: 'function',
	        begin: '\\bend\\s+', end: '$',
	        keywords: 'end',
	        contains: [
	          TITLE2,
	          TITLE1
	        ],
	        relevance: 0
	      },
	      {
	        beginKeywords: 'command on', end: '$',
	        contains: [
	          VARIABLE,
	          TITLE2,
	          hljs.APOS_STRING_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.BINARY_NUMBER_MODE,
	          hljs.C_NUMBER_MODE,
	          TITLE1
	        ]
	      },
	      {
	        className: 'meta',
	        variants: [
	          {
	            begin: '<\\?(rev|lc|livecode)',
	            relevance: 10
	          },
	          { begin: '<\\?' },
	          { begin: '\\?>' }
	        ]
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.BINARY_NUMBER_MODE,
	      hljs.C_NUMBER_MODE,
	      TITLE1
	    ].concat(COMMENT_MODES),
	    illegal: ';$|^\\[|^=|&|{'
	  };
	};

/***/ }),
/* 114 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // JS keywords
	      'in if for while finally new do return else break catch instanceof throw try this ' +
	      'switch continue typeof delete debugger case default function var with ' +
	      // LiveScript keywords
	      'then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super ' +
	      'case default function var void const let enum export import native ' +
	      '__hasProp __extends __slice __bind __indexOf',
	    literal:
	      // JS literals
	      'true false null undefined ' +
	      // LiveScript literals
	      'yes no on off it that void',
	    built_in:
	      'npm require console print module global window document'
	  };
	  var JS_IDENT_RE = '[A-Za-z$_](?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*';
	  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
	  var SUBST = {
	    className: 'subst',
	    begin: /#\{/, end: /}/,
	    keywords: KEYWORDS
	  };
	  var SUBST_SIMPLE = {
	    className: 'subst',
	    begin: /#[A-Za-z$_]/, end: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
	    keywords: KEYWORDS
	  };
	  var EXPRESSIONS = [
	    hljs.BINARY_NUMBER_MODE,
	    {
	      className: 'number',
	      begin: '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
	      relevance: 0,
	      starts: {end: '(\\s*/)?', relevance: 0} // a number tries to eat the following slash to prevent treating it as a regexp
	    },
	    {
	      className: 'string',
	      variants: [
	        {
	          begin: /'''/, end: /'''/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /'/, end: /'/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /"""/, end: /"""/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
	        },
	        {
	          begin: /"/, end: /"/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
	        },
	        {
	          begin: /\\/, end: /(\s|$)/,
	          excludeEnd: true
	        }
	      ]
	    },
	    {
	      className: 'regexp',
	      variants: [
	        {
	          begin: '//', end: '//[gim]*',
	          contains: [SUBST, hljs.HASH_COMMENT_MODE]
	        },
	        {
	          // regex can't start with space to parse x / 2 / 3 as two divisions
	          // regex can't start with *, and it supports an "illegal" in the main mode
	          begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
	        }
	      ]
	    },
	    {
	      begin: '@' + JS_IDENT_RE
	    },
	    {
	      begin: '``', end: '``',
	      excludeBegin: true, excludeEnd: true,
	      subLanguage: 'javascript'
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', returnBegin: true,
	    /* We need another contained nameless mode to not have every nested
	    pair of parens to be called "params" */
	    contains: [
	      {
	        begin: /\(/, end: /\)/,
	        keywords: KEYWORDS,
	        contains: ['self'].concat(EXPRESSIONS)
	      }
	    ]
	  };

	  return {
	    aliases: ['ls'],
	    keywords: KEYWORDS,
	    illegal: /\/\*/,
	    contains: EXPRESSIONS.concat([
	      hljs.COMMENT('\\/\\*', '\\*\\/'),
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'function',
	        contains: [TITLE, PARAMS],
	        returnBegin: true,
	        variants: [
	          {
	            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?', end: '\\->\\*?'
	          },
	          {
	            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?', end: '[-~]{1,2}>\\*?'
	          },
	          {
	            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?', end: '!?[-~]{1,2}>\\*?'
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class',
	        end: '$',
	        illegal: /[:="\[\]]/,
	        contains: [
	          {
	            beginKeywords: 'extends',
	            endsWithParent: true,
	            illegal: /[:="\[\]]/,
	            contains: [TITLE]
	          },
	          TITLE
	        ]
	      },
	      {
	        begin: JS_IDENT_RE + ':', end: ':',
	        returnBegin: true, returnEnd: true,
	        relevance: 0
	      }
	    ])
	  };
	};

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var identifier = '([-a-zA-Z$._][\\w\\-$.]*)';
	  return {
	    //lexemes: '[.%]?' + hljs.IDENT_RE,
	    keywords:
	      'begin end true false declare define global ' +
	      'constant private linker_private internal ' +
	      'available_externally linkonce linkonce_odr weak ' +
	      'weak_odr appending dllimport dllexport common ' +
	      'default hidden protected extern_weak external ' +
	      'thread_local zeroinitializer undef null to tail ' +
	      'target triple datalayout volatile nuw nsw nnan ' +
	      'ninf nsz arcp fast exact inbounds align ' +
	      'addrspace section alias module asm sideeffect ' +
	      'gc dbg linker_private_weak attributes blockaddress ' +
	      'initialexec localdynamic localexec prefix unnamed_addr ' +
	      'ccc fastcc coldcc x86_stdcallcc x86_fastcallcc ' +
	      'arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ' +
	      'ptx_kernel intel_ocl_bicc msp430_intrcc spir_func ' +
	      'spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc ' +
	      'cc c signext zeroext inreg sret nounwind ' +
	      'noreturn noalias nocapture byval nest readnone ' +
	      'readonly inlinehint noinline alwaysinline optsize ssp ' +
	      'sspreq noredzone noimplicitfloat naked builtin cold ' +
	      'nobuiltin noduplicate nonlazybind optnone returns_twice ' +
	      'sanitize_address sanitize_memory sanitize_thread sspstrong ' +
	      'uwtable returned type opaque eq ne slt sgt ' +
	      'sle sge ult ugt ule uge oeq one olt ogt ' +
	      'ole oge ord uno ueq une x acq_rel acquire ' +
	      'alignstack atomic catch cleanup filter inteldialect ' +
	      'max min monotonic nand personality release seq_cst ' +
	      'singlethread umax umin unordered xchg add fadd ' +
	      'sub fsub mul fmul udiv sdiv fdiv urem srem ' +
	      'frem shl lshr ashr and or xor icmp fcmp ' +
	      'phi call trunc zext sext fptrunc fpext uitofp ' +
	      'sitofp fptoui fptosi inttoptr ptrtoint bitcast ' +
	      'addrspacecast select va_arg ret br switch invoke ' +
	      'unwind unreachable indirectbr landingpad resume ' +
	      'malloc alloca free load store getelementptr ' +
	      'extractelement insertelement shufflevector getresult ' +
	      'extractvalue insertvalue atomicrmw cmpxchg fence ' +
	      'argmemonly double',
	    contains: [
	      {
	        className: 'keyword',
	        begin: 'i\\d+'
	      },
	      hljs.COMMENT(
	        ';', '\\n', {relevance: 0}
	      ),
	      // Double quote string
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        variants: [
	          // Double-quoted string
	          { begin: '"', end: '[^\\\\]"' },
	        ],
	        relevance: 0
	      },
	      {
	        className: 'title',
	        variants: [
	          { begin: '@' + identifier },
	          { begin: '@\\d+' },
	          { begin: '!' + identifier },
	          { begin: '!\\d+' + identifier }
	        ]
	      },
	      {
	        className: 'symbol',
	        variants: [
	          { begin: '%' + identifier },
	          { begin: '%\\d+' },
	          { begin: '#\\d+' },
	        ]
	      },
	      {
	        className: 'number',
	        variants: [
	            { begin: '0[xX][a-fA-F0-9]+' },
	            { begin: '-?\\d+(?:[.]\\d+)?(?:[eE][-+]?\\d+(?:[.]\\d+)?)?' }
	        ],
	        relevance: 0
	      },
	    ]
	  };
	};

/***/ }),
/* 116 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {

	    var LSL_STRING_ESCAPE_CHARS = {
	        className: 'subst',
	        begin: /\\[tn"\\]/
	    };

	    var LSL_STRINGS = {
	        className: 'string',
	        begin: '"',
	        end: '"',
	        contains: [
	            LSL_STRING_ESCAPE_CHARS
	        ]
	    };

	    var LSL_NUMBERS = {
	        className: 'number',
	        begin: hljs.C_NUMBER_RE
	    };

	    var LSL_CONSTANTS = {
	        className: 'literal',
	        variants: [
	            {
	                begin: '\\b(?:PI|TWO_PI|PI_BY_TWO|DEG_TO_RAD|RAD_TO_DEG|SQRT2)\\b'
	            },
	            {
	                begin: '\\b(?:XP_ERROR_(?:EXPERIENCES_DISABLED|EXPERIENCE_(?:DISABLED|SUSPENDED)|INVALID_(?:EXPERIENCE|PARAMETERS)|KEY_NOT_FOUND|MATURITY_EXCEEDED|NONE|NOT_(?:FOUND|PERMITTED(?:_LAND)?)|NO_EXPERIENCE|QUOTA_EXCEEDED|RETRY_UPDATE|STORAGE_EXCEPTION|STORE_DISABLED|THROTTLED|UNKNOWN_ERROR)|JSON_APPEND|STATUS_(?:PHYSICS|ROTATE_[XYZ]|PHANTOM|SANDBOX|BLOCK_GRAB(?:_OBJECT)?|(?:DIE|RETURN)_AT_EDGE|CAST_SHADOWS|OK|MALFORMED_PARAMS|TYPE_MISMATCH|BOUNDS_ERROR|NOT_(?:FOUND|SUPPORTED)|INTERNAL_ERROR|WHITELIST_FAILED)|AGENT(?:_(?:BY_(?:LEGACY_|USER)NAME|FLYING|ATTACHMENTS|SCRIPTED|MOUSELOOK|SITTING|ON_OBJECT|AWAY|WALKING|IN_AIR|TYPING|CROUCHING|BUSY|ALWAYS_RUN|AUTOPILOT|LIST_(?:PARCEL(?:_OWNER)?|REGION)))?|CAMERA_(?:PITCH|DISTANCE|BEHINDNESS_(?:ANGLE|LAG)|(?:FOCUS|POSITION)(?:_(?:THRESHOLD|LOCKED|LAG))?|FOCUS_OFFSET|ACTIVE)|ANIM_ON|LOOP|REVERSE|PING_PONG|SMOOTH|ROTATE|SCALE|ALL_SIDES|LINK_(?:ROOT|SET|ALL_(?:OTHERS|CHILDREN)|THIS)|ACTIVE|PASS(?:IVE|_(?:ALWAYS|IF_NOT_HANDLED|NEVER))|SCRIPTED|CONTROL_(?:FWD|BACK|(?:ROT_)?(?:LEFT|RIGHT)|UP|DOWN|(?:ML_)?LBUTTON)|PERMISSION_(?:RETURN_OBJECTS|DEBIT|OVERRIDE_ANIMATIONS|SILENT_ESTATE_MANAGEMENT|TAKE_CONTROLS|TRIGGER_ANIMATION|ATTACH|CHANGE_LINKS|(?:CONTROL|TRACK)_CAMERA|TELEPORT)|INVENTORY_(?:TEXTURE|SOUND|OBJECT|SCRIPT|LANDMARK|CLOTHING|NOTECARD|BODYPART|ANIMATION|GESTURE|ALL|NONE)|CHANGED_(?:INVENTORY|COLOR|SHAPE|SCALE|TEXTURE|LINK|ALLOWED_DROP|OWNER|REGION(?:_START)?|TELEPORT|MEDIA)|OBJECT_(?:CLICK_ACTION|HOVER_HEIGHT|LAST_OWNER_ID|(?:PHYSICS|SERVER|STREAMING)_COST|UNKNOWN_DETAIL|CHARACTER_TIME|PHANTOM|PHYSICS|TEMP_ON_REZ|NAME|DESC|POS|PRIM_(?:COUNT|EQUIVALENCE)|RETURN_(?:PARCEL(?:_OWNER)?|REGION)|REZZER_KEY|ROO?T|VELOCITY|OMEGA|OWNER|GROUP|CREATOR|ATTACHED_POINT|RENDER_WEIGHT|(?:BODY_SHAPE|PATHFINDING)_TYPE|(?:RUNNING|TOTAL)_SCRIPT_COUNT|TOTAL_INVENTORY_COUNT|SCRIPT_(?:MEMORY|TIME))|TYPE_(?:INTEGER|FLOAT|STRING|KEY|VECTOR|ROTATION|INVALID)|(?:DEBUG|PUBLIC)_CHANNEL|ATTACH_(?:AVATAR_CENTER|CHEST|HEAD|BACK|PELVIS|MOUTH|CHIN|NECK|NOSE|BELLY|[LR](?:SHOULDER|HAND|FOOT|EAR|EYE|[UL](?:ARM|LEG)|HIP)|(?:LEFT|RIGHT)_PEC|HUD_(?:CENTER_[12]|TOP_(?:RIGHT|CENTER|LEFT)|BOTTOM(?:_(?:RIGHT|LEFT))?)|[LR]HAND_RING1|TAIL_(?:BASE|TIP)|[LR]WING|FACE_(?:JAW|[LR]EAR|[LR]EYE|TOUNGE)|GROIN|HIND_[LR]FOOT)|LAND_(?:LEVEL|RAISE|LOWER|SMOOTH|NOISE|REVERT)|DATA_(?:ONLINE|NAME|BORN|SIM_(?:POS|STATUS|RATING)|PAYINFO)|PAYMENT_INFO_(?:ON_FILE|USED)|REMOTE_DATA_(?:CHANNEL|REQUEST|REPLY)|PSYS_(?:PART_(?:BF_(?:ZERO|ONE(?:_MINUS_(?:DEST_COLOR|SOURCE_(ALPHA|COLOR)))?|DEST_COLOR|SOURCE_(ALPHA|COLOR))|BLEND_FUNC_(DEST|SOURCE)|FLAGS|(?:START|END)_(?:COLOR|ALPHA|SCALE|GLOW)|MAX_AGE|(?:RIBBON|WIND|INTERP_(?:COLOR|SCALE)|BOUNCE|FOLLOW_(?:SRC|VELOCITY)|TARGET_(?:POS|LINEAR)|EMISSIVE)_MASK)|SRC_(?:MAX_AGE|PATTERN|ANGLE_(?:BEGIN|END)|BURST_(?:RATE|PART_COUNT|RADIUS|SPEED_(?:MIN|MAX))|ACCEL|TEXTURE|TARGET_KEY|OMEGA|PATTERN_(?:DROP|EXPLODE|ANGLE(?:_CONE(?:_EMPTY)?)?)))|VEHICLE_(?:REFERENCE_FRAME|TYPE_(?:NONE|SLED|CAR|BOAT|AIRPLANE|BALLOON)|(?:LINEAR|ANGULAR)_(?:FRICTION_TIMESCALE|MOTOR_DIRECTION)|LINEAR_MOTOR_OFFSET|HOVER_(?:HEIGHT|EFFICIENCY|TIMESCALE)|BUOYANCY|(?:LINEAR|ANGULAR)_(?:DEFLECTION_(?:EFFICIENCY|TIMESCALE)|MOTOR_(?:DECAY_)?TIMESCALE)|VERTICAL_ATTRACTION_(?:EFFICIENCY|TIMESCALE)|BANKING_(?:EFFICIENCY|MIX|TIMESCALE)|FLAG_(?:NO_DEFLECTION_UP|LIMIT_(?:ROLL_ONLY|MOTOR_UP)|HOVER_(?:(?:WATER|TERRAIN|UP)_ONLY|GLOBAL_HEIGHT)|MOUSELOOK_(?:STEER|BANK)|CAMERA_DECOUPLED))|PRIM_(?:ALPHA_MODE(?:_(?:BLEND|EMISSIVE|MASK|NONE))?|NORMAL|SPECULAR|TYPE(?:_(?:BOX|CYLINDER|PRISM|SPHERE|TORUS|TUBE|RING|SCULPT))?|HOLE_(?:DEFAULT|CIRCLE|SQUARE|TRIANGLE)|MATERIAL(?:_(?:STONE|METAL|GLASS|WOOD|FLESH|PLASTIC|RUBBER))?|SHINY_(?:NONE|LOW|MEDIUM|HIGH)|BUMP_(?:NONE|BRIGHT|DARK|WOOD|BARK|BRICKS|CHECKER|CONCRETE|TILE|STONE|DISKS|GRAVEL|BLOBS|SIDING|LARGETILE|STUCCO|SUCTION|WEAVE)|TEXGEN_(?:DEFAULT|PLANAR)|SCULPT_(?:TYPE_(?:SPHERE|TORUS|PLANE|CYLINDER|MASK)|FLAG_(?:MIRROR|INVERT))|PHYSICS(?:_(?:SHAPE_(?:CONVEX|NONE|PRIM|TYPE)))?|(?:POS|ROT)_LOCAL|SLICE|TEXT|FLEXIBLE|POINT_LIGHT|TEMP_ON_REZ|PHANTOM|POSITION|SIZE|ROTATION|TEXTURE|NAME|OMEGA|DESC|LINK_TARGET|COLOR|BUMP_SHINY|FULLBRIGHT|TEXGEN|GLOW|MEDIA_(?:ALT_IMAGE_ENABLE|CONTROLS|(?:CURRENT|HOME)_URL|AUTO_(?:LOOP|PLAY|SCALE|ZOOM)|FIRST_CLICK_INTERACT|(?:WIDTH|HEIGHT)_PIXELS|WHITELIST(?:_ENABLE)?|PERMS_(?:INTERACT|CONTROL)|PARAM_MAX|CONTROLS_(?:STANDARD|MINI)|PERM_(?:NONE|OWNER|GROUP|ANYONE)|MAX_(?:URL_LENGTH|WHITELIST_(?:SIZE|COUNT)|(?:WIDTH|HEIGHT)_PIXELS)))|MASK_(?:BASE|OWNER|GROUP|EVERYONE|NEXT)|PERM_(?:TRANSFER|MODIFY|COPY|MOVE|ALL)|PARCEL_(?:MEDIA_COMMAND_(?:STOP|PAUSE|PLAY|LOOP|TEXTURE|URL|TIME|AGENT|UNLOAD|AUTO_ALIGN|TYPE|SIZE|DESC|LOOP_SET)|FLAG_(?:ALLOW_(?:FLY|(?:GROUP_)?SCRIPTS|LANDMARK|TERRAFORM|DAMAGE|CREATE_(?:GROUP_)?OBJECTS)|USE_(?:ACCESS_(?:GROUP|LIST)|BAN_LIST|LAND_PASS_LIST)|LOCAL_SOUND_ONLY|RESTRICT_PUSHOBJECT|ALLOW_(?:GROUP|ALL)_OBJECT_ENTRY)|COUNT_(?:TOTAL|OWNER|GROUP|OTHER|SELECTED|TEMP)|DETAILS_(?:NAME|DESC|OWNER|GROUP|AREA|ID|SEE_AVATARS))|LIST_STAT_(?:MAX|MIN|MEAN|MEDIAN|STD_DEV|SUM(?:_SQUARES)?|NUM_COUNT|GEOMETRIC_MEAN|RANGE)|PAY_(?:HIDE|DEFAULT)|REGION_FLAG_(?:ALLOW_DAMAGE|FIXED_SUN|BLOCK_TERRAFORM|SANDBOX|DISABLE_(?:COLLISIONS|PHYSICS)|BLOCK_FLY|ALLOW_DIRECT_TELEPORT|RESTRICT_PUSHOBJECT)|HTTP_(?:METHOD|MIMETYPE|BODY_(?:MAXLENGTH|TRUNCATED)|CUSTOM_HEADER|PRAGMA_NO_CACHE|VERBOSE_THROTTLE|VERIFY_CERT)|STRING_(?:TRIM(?:_(?:HEAD|TAIL))?)|CLICK_ACTION_(?:NONE|TOUCH|SIT|BUY|PAY|OPEN(?:_MEDIA)?|PLAY|ZOOM)|TOUCH_INVALID_FACE|PROFILE_(?:NONE|SCRIPT_MEMORY)|RC_(?:DATA_FLAGS|DETECT_PHANTOM|GET_(?:LINK_NUM|NORMAL|ROOT_KEY)|MAX_HITS|REJECT_(?:TYPES|AGENTS|(?:NON)?PHYSICAL|LAND))|RCERR_(?:CAST_TIME_EXCEEDED|SIM_PERF_LOW|UNKNOWN)|ESTATE_ACCESS_(?:ALLOWED_(?:AGENT|GROUP)_(?:ADD|REMOVE)|BANNED_AGENT_(?:ADD|REMOVE))|DENSITY|FRICTION|RESTITUTION|GRAVITY_MULTIPLIER|KFM_(?:COMMAND|CMD_(?:PLAY|STOP|PAUSE)|MODE|FORWARD|LOOP|PING_PONG|REVERSE|DATA|ROTATION|TRANSLATION)|ERR_(?:GENERIC|PARCEL_PERMISSIONS|MALFORMED_PARAMS|RUNTIME_PERMISSIONS|THROTTLED)|CHARACTER_(?:CMD_(?:(?:SMOOTH_)?STOP|JUMP)|DESIRED_(?:TURN_)?SPEED|RADIUS|STAY_WITHIN_PARCEL|LENGTH|ORIENTATION|ACCOUNT_FOR_SKIPPED_FRAMES|AVOIDANCE_MODE|TYPE(?:_(?:[ABCD]|NONE))?|MAX_(?:DECEL|TURN_RADIUS|(?:ACCEL|SPEED)))|PURSUIT_(?:OFFSET|FUZZ_FACTOR|GOAL_TOLERANCE|INTERCEPT)|REQUIRE_LINE_OF_SIGHT|FORCE_DIRECT_PATH|VERTICAL|HORIZONTAL|AVOID_(?:CHARACTERS|DYNAMIC_OBSTACLES|NONE)|PU_(?:EVADE_(?:HIDDEN|SPOTTED)|FAILURE_(?:DYNAMIC_PATHFINDING_DISABLED|INVALID_(?:GOAL|START)|NO_(?:NAVMESH|VALID_DESTINATION)|OTHER|TARGET_GONE|(?:PARCEL_)?UNREACHABLE)|(?:GOAL|SLOWDOWN_DISTANCE)_REACHED)|TRAVERSAL_TYPE(?:_(?:FAST|NONE|SLOW))?|CONTENT_TYPE_(?:ATOM|FORM|HTML|JSON|LLSD|RSS|TEXT|XHTML|XML)|GCNP_(?:RADIUS|STATIC)|(?:PATROL|WANDER)_PAUSE_AT_WAYPOINTS|OPT_(?:AVATAR|CHARACTER|EXCLUSION_VOLUME|LEGACY_LINKSET|MATERIAL_VOLUME|OTHER|STATIC_OBSTACLE|WALKABLE)|SIM_STAT_PCT_CHARS_STEPPED)\\b'
	            },
	            {
	                begin: '\\b(?:FALSE|TRUE)\\b'
	            },
	            {
	                begin: '\\b(?:ZERO_ROTATION)\\b'
	            },
	            {
	                begin: '\\b(?:EOF|JSON_(?:ARRAY|DELETE|FALSE|INVALID|NULL|NUMBER|OBJECT|STRING|TRUE)|NULL_KEY|TEXTURE_(?:BLANK|DEFAULT|MEDIA|PLYWOOD|TRANSPARENT)|URL_REQUEST_(?:GRANTED|DENIED))\\b'
	            },
	            {
	                begin: '\\b(?:ZERO_VECTOR|TOUCH_INVALID_(?:TEXCOORD|VECTOR))\\b'
	            }
	        ]
	    };

	    var LSL_FUNCTIONS = {
	        className: 'built_in',
	        begin: '\\b(?:ll(?:AgentInExperience|(?:Create|DataSize|Delete|KeyCount|Keys|Read|Update)KeyValue|GetExperience(?:Details|ErrorMessage)|ReturnObjectsBy(?:ID|Owner)|Json(?:2List|[GS]etValue|ValueType)|Sin|Cos|Tan|Atan2|Sqrt|Pow|Abs|Fabs|Frand|Floor|Ceil|Round|Vec(?:Mag|Norm|Dist)|Rot(?:Between|2(?:Euler|Fwd|Left|Up))|(?:Euler|Axes)2Rot|Whisper|(?:Region|Owner)?Say|Shout|Listen(?:Control|Remove)?|Sensor(?:Repeat|Remove)?|Detected(?:Name|Key|Owner|Type|Pos|Vel|Grab|Rot|Group|LinkNumber)|Die|Ground|Wind|(?:[GS]et)(?:AnimationOverride|MemoryLimit|PrimMediaParams|ParcelMusicURL|Object(?:Desc|Name)|PhysicsMaterial|Status|Scale|Color|Alpha|Texture|Pos|Rot|Force|Torque)|ResetAnimationOverride|(?:Scale|Offset|Rotate)Texture|(?:Rot)?Target(?:Remove)?|(?:Stop)?MoveToTarget|Apply(?:Rotational)?Impulse|Set(?:KeyframedMotion|ContentType|RegionPos|(?:Angular)?Velocity|Buoyancy|HoverHeight|ForceAndTorque|TimerEvent|ScriptState|Damage|TextureAnim|Sound(?:Queueing|Radius)|Vehicle(?:Type|(?:Float|Vector|Rotation)Param)|(?:Touch|Sit)?Text|Camera(?:Eye|At)Offset|PrimitiveParams|ClickAction|Link(?:Alpha|Color|PrimitiveParams(?:Fast)?|Texture(?:Anim)?|Camera|Media)|RemoteScriptAccessPin|PayPrice|LocalRot)|ScaleByFactor|Get(?:(?:Max|Min)ScaleFactor|ClosestNavPoint|StaticPath|SimStats|Env|PrimitiveParams|Link(?:PrimitiveParams|Number(?:OfSides)?|Key|Name|Media)|HTTPHeader|FreeURLs|Object(?:Details|PermMask|PrimCount)|Parcel(?:MaxPrims|Details|Prim(?:Count|Owners))|Attached(?:List)?|(?:SPMax|Free|Used)Memory|Region(?:Name|TimeDilation|FPS|Corner|AgentCount)|Root(?:Position|Rotation)|UnixTime|(?:Parcel|Region)Flags|(?:Wall|GMT)clock|SimulatorHostname|BoundingBox|GeometricCenter|Creator|NumberOf(?:Prims|NotecardLines|Sides)|Animation(?:List)?|(?:Camera|Local)(?:Pos|Rot)|Vel|Accel|Omega|Time(?:stamp|OfDay)|(?:Object|CenterOf)?Mass|MassMKS|Energy|Owner|(?:Owner)?Key|SunDirection|Texture(?:Offset|Scale|Rot)|Inventory(?:Number|Name|Key|Type|Creator|PermMask)|Permissions(?:Key)?|StartParameter|List(?:Length|EntryType)|Date|Agent(?:Size|Info|Language|List)|LandOwnerAt|NotecardLine|Script(?:Name|State))|(?:Get|Reset|GetAndReset)Time|PlaySound(?:Slave)?|LoopSound(?:Master|Slave)?|(?:Trigger|Stop|Preload)Sound|(?:(?:Get|Delete)Sub|Insert)String|To(?:Upper|Lower)|Give(?:InventoryList|Money)|RezObject|(?:Stop)?LookAt|Sleep|CollisionFilter|(?:Take|Release)Controls|DetachFromAvatar|AttachToAvatar(?:Temp)?|InstantMessage|(?:GetNext)?Email|StopHover|MinEventDelay|RotLookAt|String(?:Length|Trim)|(?:Start|Stop)Animation|TargetOmega|Request(?:Experience)?Permissions|(?:Create|Break)Link|BreakAllLinks|(?:Give|Remove)Inventory|Water|PassTouches|Request(?:Agent|Inventory)Data|TeleportAgent(?:Home|GlobalCoords)?|ModifyLand|CollisionSound|ResetScript|MessageLinked|PushObject|PassCollisions|AxisAngle2Rot|Rot2(?:Axis|Angle)|A(?:cos|sin)|AngleBetween|AllowInventoryDrop|SubStringIndex|List2(?:CSV|Integer|Json|Float|String|Key|Vector|Rot|List(?:Strided)?)|DeleteSubList|List(?:Statistics|Sort|Randomize|(?:Insert|Find|Replace)List)|EdgeOfWorld|AdjustSoundVolume|Key2Name|TriggerSoundLimited|EjectFromLand|(?:CSV|ParseString)2List|OverMyLand|SameGroup|UnSit|Ground(?:Slope|Normal|Contour)|GroundRepel|(?:Set|Remove)VehicleFlags|(?:AvatarOn)?(?:Link)?SitTarget|Script(?:Danger|Profiler)|Dialog|VolumeDetect|ResetOtherScript|RemoteLoadScriptPin|(?:Open|Close)RemoteDataChannel|SendRemoteData|RemoteDataReply|(?:Integer|String)ToBase64|XorBase64|Log(?:10)?|Base64To(?:String|Integer)|ParseStringKeepNulls|RezAtRoot|RequestSimulatorData|ForceMouselook|(?:Load|Release|(?:E|Une)scape)URL|ParcelMedia(?:CommandList|Query)|ModPow|MapDestination|(?:RemoveFrom|AddTo|Reset)Land(?:Pass|Ban)List|(?:Set|Clear)CameraParams|HTTP(?:Request|Response)|TextBox|DetectedTouch(?:UV|Face|Pos|(?:N|Bin)ormal|ST)|(?:MD5|SHA1|DumpList2)String|Request(?:Secure)?URL|Clear(?:Prim|Link)Media|(?:Link)?ParticleSystem|(?:Get|Request)(?:Username|DisplayName)|RegionSayTo|CastRay|GenerateKey|TransferLindenDollars|ManageEstateAccess|(?:Create|Delete)Character|ExecCharacterCmd|Evade|FleeFrom|NavigateTo|PatrolPoints|Pursue|UpdateCharacter|WanderWithin))\\b'
	    };

	    return {
	        illegal: ':',
	        contains: [
	            LSL_STRINGS,
	            {
	                className: 'comment',
	                variants: [
	                    hljs.COMMENT('//', '$'),
	                    hljs.COMMENT('/\\*', '\\*/')
	                ]
	            },
	            LSL_NUMBERS,
	            {
	                className: 'section',
	                variants: [
	                    {
	                        begin: '\\b(?:state|default)\\b'
	                    },
	                    {
	                        begin: '\\b(?:state_(?:entry|exit)|touch(?:_(?:start|end))?|(?:land_)?collision(?:_(?:start|end))?|timer|listen|(?:no_)?sensor|control|(?:not_)?at_(?:rot_)?target|money|email|experience_permissions(?:_denied)?|run_time_permissions|changed|attach|dataserver|moving_(?:start|end)|link_message|(?:on|object)_rez|remote_data|http_re(?:sponse|quest)|path_update|transaction_result)\\b'
	                    }
	                ]
	            },
	            LSL_FUNCTIONS,
	            LSL_CONSTANTS,
	            {
	                className: 'type',
	                begin: '\\b(?:integer|float|string|key|vector|quaternion|rotation|list)\\b'
	            }
	        ]
	    };
	};

/***/ }),
/* 117 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var OPENING_LONG_BRACKET = '\\[=*\\[';
	  var CLOSING_LONG_BRACKET = '\\]=*\\]';
	  var LONG_BRACKETS = {
	    begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
	    contains: ['self']
	  };
	  var COMMENTS = [
	    hljs.COMMENT('--(?!' + OPENING_LONG_BRACKET + ')', '$'),
	    hljs.COMMENT(
	      '--' + OPENING_LONG_BRACKET,
	      CLOSING_LONG_BRACKET,
	      {
	        contains: [LONG_BRACKETS],
	        relevance: 10
	      }
	    )
	  ];
	  return {
	    lexemes: hljs.UNDERSCORE_IDENT_RE,
	    keywords: {
	      literal: "true false nil",
	      keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
	      built_in:
	        //Metatags and globals:
	        '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len ' +
	        '__gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert ' +
	        //Standard methods and properties:
	        'collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring' +
	        'module next pairs pcall print rawequal rawget rawset require select setfenv' +
	        'setmetatable tonumber tostring type unpack xpcall arg self' +
	        //Library methods and properties (one line per library):
	        'coroutine resume yield status wrap create running debug getupvalue ' +
	        'debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv ' +
	        'io lines write close flush open output type read stderr stdin input stdout popen tmpfile ' +
	        'math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan ' +
	        'os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall ' +
	        'string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower ' +
	        'table setn insert getn foreachi maxn foreach concat sort remove'
	    },
	    contains: COMMENTS.concat([
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '\\)',
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'}),
	          {
	            className: 'params',
	            begin: '\\(', endsWithParent: true,
	            contains: COMMENTS
	          }
	        ].concat(COMMENTS)
	      },
	      hljs.C_NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
	        contains: [LONG_BRACKETS],
	        relevance: 5
	      }
	    ])
	  };
	};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  /* Variables: simple (eg $(var)) and special (eg $@) */
	  var VARIABLE = {
	    className: 'variable',
	    variants: [
	      {
	        begin: '\\$\\(' + hljs.UNDERSCORE_IDENT_RE + '\\)',
	        contains: [hljs.BACKSLASH_ESCAPE],
	      },
	      {
	        begin: /\$[@%<?\^\+\*]/
	      },
	    ]
	  };
	  /* Quoted string with variables inside */
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: /"/, end: /"/,
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      VARIABLE,
	    ]
	  };
	  /* Function: $(func arg,...) */
	  var FUNC = {
	    className: 'variable',
	    begin: /\$\([\w-]+\s/, end: /\)/,
	    keywords: {
	      built_in:
	        'subst patsubst strip findstring filter filter-out sort ' +
	        'word wordlist firstword lastword dir notdir suffix basename ' +
	        'addsuffix addprefix join wildcard realpath abspath error warning ' +
	        'shell origin flavor foreach if or and call eval file value',
	    },
	    contains: [
	      VARIABLE,
	    ]
	  };
	  /* Variable assignment */
	  var VAR_ASSIG = {
	    begin: '^' + hljs.UNDERSCORE_IDENT_RE + '\\s*[:+?]?=',
	    illegal: '\\n',
	    returnBegin: true,
	    contains: [
	      {
	        begin: '^' + hljs.UNDERSCORE_IDENT_RE, end: '[:+?]?=',
	        excludeEnd: true,
	      }
	    ]
	  };
	  /* Meta targets (.PHONY) */
	  var META = {
	    className: 'meta',
	    begin: /^\.PHONY:/, end: /$/,
	    keywords: {'meta-keyword': '.PHONY'},
	    lexemes: /[\.\w]+/
	  };
	  /* Targets */
	  var TARGET = {
	    className: 'section',
	    begin: /^[^\s]+:/, end: /$/,
	    contains: [VARIABLE,]
	  };
	  return {
	    aliases: ['mk', 'mak'],
	    keywords:
	      'define endef undefine ifdef ifndef ifeq ifneq else endif ' +
	      'include -include sinclude override export unexport private vpath',
	    lexemes: /[\w-]+/,
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      VARIABLE,
	      QUOTE_STRING,
	      FUNC,
	      VAR_ASSIG,
	      META,
	      TARGET,
	    ]
	  };
	};

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['mma'],
	    lexemes: '(\\$|\\b)' + hljs.IDENT_RE + '\\b',
	    keywords: 'AbelianGroup Abort AbortKernels AbortProtect Above Abs Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Active ActiveItem ActiveStyle AcyclicGraphQ AddOnHelpPath AddTo AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AffineTransform After AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowedDimensions AllowGroupClose AllowInlineCells AllowKernelInitialization AllowReverseGroupClose AllowScriptLevelChange AlphaChannel AlternatingGroup AlternativeHypothesis Alternatives AmbientLight Analytic AnchoredSearch And AndersonDarlingTest AngerJ AngleBracket AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotation Annuity AnnuityDue Antialiasing Antisymmetric Apart ApartSquareFree Appearance AppearanceElements AppellF1 Append AppendTo Apply ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess ARProcess Array ArrayComponents ArrayDepth ArrayFlatten ArrayPad ArrayPlot ArrayQ ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads AspectRatio AspectRatioFixed Assert Assuming Assumptions AstronomicalData Asynchronous AsynchronousTaskObject AsynchronousTasks AtomQ Attributes AugmentedSymmetricPolynomial AutoAction AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords Axes AxesEdge AxesLabel AxesOrigin AxesStyle Axis ' +
	      'BabyMonsterGroupB Back Background BackgroundTasksSettings Backslash Backsubstitution Backward Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseForm Baseline BaselinePosition BaseStyle BatesDistribution BattleLemarieWavelet Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized BetweennessCentrality BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms Booleans BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryStyle Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BubbleChart BubbleChart3D BubbleScale BubbleSizes BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteCount ByteOrdering ' +
	      'C CachedValue CacheGraphics CalendarData CalendarType CallPacket CanberraDistance Cancel CancelButton CandlestickChart Cap CapForm CapitalDifferentialD CardinalBSplineBasis CarmichaelLambda Cases Cashflow Casoratian Catalan CatalanNumber Catch CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterDot CentralMoment CentralMomentGeneratingFunction CForm ChampernowneNumber ChanVeseBinarize Character CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop Circle CircleBox CircleDot CircleMinus CirclePlus CircleTimes CirculantGraph CityData Clear ClearAll ClearAttributes ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent ClusteringComponents CMYKColor Coarse Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorCombine ColorConvert ColorData ColorDataFunction ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorSpace Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CommonDefaultFormatTypes Commonest CommonestFilter CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledFunction Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComponentMeasurements ' +
	      'ComponentwiseContextMenu Compose ComposeList ComposeSeries Composition CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath Congruent Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphQ ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray Constants ConstrainedMax ConstrainedMin ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFilename ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean Control ControlActive ControlAlignment ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateDialog CreateDirectory CreateDocument CreateIntermediateDirectories CreatePalette CreatePalettePacket CreateScheduledTask CreateTemporary CreateWindow CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossingDetect CrossMatrix Csc Csch CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrentImage CurrentlySpeakingPacket CurrentValue CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition ' +
	      'D DagumDistribution DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DataCompression DataDistribution DataRange DataReversed Date DateDelimiters DateDifference DateFunction DateList DateListLogPlot DateListPlot DatePattern DatePlus DateRange DateString DateTicksFormat DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayMatchQ DayName DayPlus DayRange DayRound DeBruijnGraph Debug DebugTag Decimal DeclareKnownSymbols DeclarePackage Decompose Decrement DedekindEta Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic Deinitialization Del Deletable Delete DeleteBorderComponents DeleteCases DeleteContents DeleteDirectory DeleteDuplicates DeleteFile DeleteSmallComponents DeleteWithContents DeletionWarning Delimiter DelimiterFlashTime DelimiterMatching Delimiters Denominator DensityGraphics DensityHistogram DensityPlot DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DescriptorStateSpace DesignMatrix Det DGaussianWavelet DiacriticalPositioning Diagonal DiagonalMatrix Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DifferenceDelta DifferenceOrder DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralGroup Dilation Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletCharacter DirichletConvolve DirichletDistribution DirichletL DirichletTransform DirichletWindow DisableConsolePrintPacket DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform ' +
	      'DiscreteWaveletTransform Discriminant Disjunction Disk DiskBox DiskMatrix Dispatch DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentNotebook DominantColors DOSTextFormat Dot DotDashed DotEqual Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DSolve Dt DualLinearProgramming DualSystemsModel DumpGet DumpSave DuplicateFreeQ Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions ' +
	      'E EccentricityCentrality EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeCost EdgeCount EdgeCoverQ EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData Eliminate EliminationOrder EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EnableConsolePrintPacket Enabled Encode End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfFile EndOfLine EndOfString EndPackage EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entropy EntropyFilter Environment Epilog Equal EqualColumns EqualRows EqualTilde EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerE EulerGamma EulerianGraphQ EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluationCell EvaluationCompletionAction EvaluationElements EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpToTrig ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalCall ExternalDataCharacterEncoding Extract ExtractArchive ExtremeValueDistribution ' +
	      'FaceForm FaceGrids FaceGridsStyle Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail FailureDistribution False FARIMAProcess FEDisableConsolePrintPacket FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket Fibonacci FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileDate FileExistsQ FileExtension FileFormat FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileType FilledCurve FilledCurveBox Filling FillingStyle FillingTransform FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindArgMax FindArgMin FindClique FindClusters FindCurvePath FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEulerianCycle FindFaces FindFile FindFit FindGeneratingFunction FindGeoLocation FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMaximum FindMaximumFlow FindMaxValue FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindPermutation FindPostmanTour FindProcessParameters FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindThreshold FindVertexCover FindVertexCut Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstPassageTimeDistribution FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FittedModel FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlatTopWindow FlipView Floor FlushPrintOutputPacket Fold FoldList Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrequencySamplingFilterKernel FresnelC FresnelS Friday FrobeniusNumber FrobeniusSolve ' +
	      'FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullOptions FullSimplify Function FunctionExpand FunctionInterpolation FunctionSpace FussellVeselyImportance ' +
	      'GaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins Gamma GammaDistribution GammaRegularized GapPenalty Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateConditions GeneratedCell GeneratedParameters GeneratingFunction Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDistance GeoGridPosition GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoPosition GeoPositionENU GeoPositionXYZ GeoProjectionData GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter Graph GraphAssortativity GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion ' +
	      'GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel GreatCircleDistance Greater GreaterEqual GreaterEqualLess GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterTilde Green Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain Gudermannian GumbelDistribution ' +
	      'HaarWavelet HadamardMatrix HalfNormalDistribution HamiltonianGraphQ HammingDistance HammingWindow HankelH1 HankelH2 HankelMatrix HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash HashTable Haversine HazardFunction Head HeadCompose Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenSurface HighlightGraph HighlightImage HighpassFilter HigmanSimsGroupHS HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HitMissTransform HITSCentrality HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HotellingTSquareDistribution HoytDistribution HTMLSave Hue HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData ' +
	      'I Identity IdentityMatrix If IgnoreCase Im Image Image3D Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageAspectRatio ImageAssemble ImageCache ImageCacheValid ImageCapture ImageChannels ImageClip ImageColorSpace ImageCompose ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDataPacket ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDistance ImageEffect ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageForestingComponents ImageForwardTransformation ImageHistogram ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarkers ImageMeasurements ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImageQ ImageRangeCache ImageReflect ImageRegion ImageResize ImageResolution ImageRotate ImageRotated ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions Implies Import ImportAutoReplacements ImportString ImprovementImportance In IncidenceGraph IncidenceList IncidenceMatrix IncludeConstantBasis IncludeFileExtension IncludePods IncludeSingularTerm Increment Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentUnit IndependentVertexSetQ Indeterminate IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers Infinity Infix Information Inherited InheritScope Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InlineCounterAssignments InlineCounterIncrements InlineRules Inner Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionPointObject InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Install InstallService InString Integer IntegerDigits IntegerExponent IntegerLength IntegerPart IntegerPartitions IntegerQ Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction ' +
	      'InterpretTemplate InterquartileRange Interrupt InterruptSettings Intersection Interval IntervalIntersection IntervalMemberQ IntervalUnion Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHaversine InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InversePermutation InverseRadon InverseSeries InverseSurvivalFunction InverseWaveletTransform InverseWeierstrassP InverseZTransform Invisible InvisibleApplication InvisibleTimes IrreduciblePolynomialQ IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess ' +
	      'JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join Joined JoinedCurve JoinedCurveBox JoinForm JordanDecomposition JordanModelDecomposition ' +
	      'K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelMixtureDistribution KernelObject Kernels Ket Khinchin KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnightTourGraph KnotData KnownUnitQ KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter ' +
	      'Label Labeled LabeledSlider LabelingFunction LabelStyle LaguerreL LambdaComponents LambertW LanczosWindow LandauDistribution Language LanguageCategory LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCM LeafCount LeapYearQ LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessFullEqual LessGreater LessLess LessSlantEqual LessTilde LetterCharacter LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox LinearFilter LinearFractionalTransform LinearModelFit LinearOffsetFunction LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBreak LinebreakAdjustments LineBreakChart LineBreakWithin LineColor LineForm LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRead LinkReadHeld LinkReadyQ Links LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot Listen ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalClusteringCoefficient LocalizeVariables LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions ' +
	      'LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestAscendingSequence LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow Loopback LoopFreeGraphQ LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LyapunovSolve LyonsGroupLy ' +
	      'MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules MangoldtLambda ManhattanDistance Manipulate Manipulator MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixPlot MatrixPower MatrixQ MatrixRank Max MaxBend MaxDetect MaxExtraBandwidths MaxExtraConditions MaxFeatures MaxFilter Maximize MaxIterations MaxMemoryUsed MaxMixtureKernels MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxValue MaxwellDistribution McLaughlinGroupMcL Mean MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter Median MedianDeviation MedianFilter Medium MeijerG MeixnerDistribution MemberQ MemoryConstrained MemoryInUse Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuPacket MenuSortingValue MenuStyle MenuView MergeDifferences Mesh MeshFunctions MeshRange MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation Method MethodOptions MexicanHatWavelet MeyerWavelet Min MinDetect MinFilter MinimalPolynomial MinimalStateSpaceModel Minimize Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingDataMethod MittagLefflerE MixedRadix MixedRadixQuantity MixtureDistribution Mod Modal Mode Modular ModularLambda Module Modulus MoebiusMu Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction Monday Monitor MonomialList MonomialOrder MonsterGroupM MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform Most MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovingAverage MovingMedian MoyalDistribution MultiedgeStyle MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution ' +
	      'N NakagamiDistribution NameQ Names NamespaceBox Nand NArgMax NArgMin NBernoulliB NCache NDSolve NDSolveValue Nearest NearestFunction NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeMultinomialDistribution NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestList NestWhile NestWhileList NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextPrime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants None NonlinearModelFit NonlocalMeansFilter NonNegative NonPositive Nor NorlundB Norm Normal NormalDistribution NormalGrouping Normalize NormalizedSquaredEuclideanDistance NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde NotHumpDownHump NotHumpEqual NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms Null NullRecords NullSpace NullWords Number NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator ' +
	      'NumberSigns NumberString Numerator NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot ' +
	      'O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OddQ Off Offset OLEData On ONanGroupON OneIdentity Opacity Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering Orderless OrnsteinUhlenbeckProcess Orthogonalize Out Outer OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OwenT OwnValues ' +
	      'PackingMethod PaddedForm Padding PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageWidth PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParetoDistribution Part PartialCorrelationFunction PartialD ParticleData Partition PartitionsP PartitionsQ ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PerformanceGoal PeriodicInterpolation Periodogram PeriodogramArray PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PERTDistribution PetersenGraph PhaseMargins Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest Pink Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarGraphQ Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangePadding PlotRegion PlotStyle Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox PointBox PointFigureChart PointForm PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonBox PolygonBoxOptions PolygonHoleScale PolygonIntersections PolygonScale PolyhedronData PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position Positive PositiveDefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList ' +
	      'PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement PredictionRoot PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependTo PreserveImageOptions Previous PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitiveRoot PrincipalComponents PrincipalValue Print PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessEstimator ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions ' +
	      'QBinomial QFactorial QGamma QHypergeometricPFQ QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ Quantile QuantilePlot Quantity QuantityForm QuantityMagnitude QuantityQ QuantityUnit Quartics QuartileDeviation Quartiles QuartileSkewness QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder ' +
	      'RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Random RandomChoice RandomComplex RandomFunction RandomGraph RandomImage RandomInteger RandomPermutation RandomPrime RandomReal RandomSample RandomSeed RandomVariate RandomWalkProcess Range RangeFilter RangeSpecification RankedMax RankedMin Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios Raw RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadList ReadProtected Real RealBlockDiagonalForm RealDigits RealExponent Reals Reap Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate RegionBinarize RegionFunction RegionPlot RegionPlot3D RegularExpression Regularization Reinstall Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot Remove RemoveAlphaChannel RemoveAsynchronousTask Removed RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart Repeated RepeatedNull RepeatedString Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated Resampling Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask Residue Resolve Rest Resultant ResumePacket Return ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulerUnits Run RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity ' +
	      'SameQ SameTest SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveDefinitions SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTaskActiveQ ScheduledTaskData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition Sec Sech SechDistribution SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemialgebraicComponentInstances SendMail Sequence SequenceAlignment SequenceForm SequenceHold SequenceLimit Series SeriesCoefficient SeriesData SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPrecision SetProperty SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share Sharpen ShearingMatrix ShearingTransform ShenCastanMatrix Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortUpArrow Show ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiegelTheta SiegelTukeyTest Sign Signature SignedRankTest SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution Skip SliceDistribution Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDelayCompensator SmithWatermanSimilarity ' +
	      'SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SocialMediaData Socket SokalSneathDissimilarity Solve SolveAlways SolveDelayed Sort SortBy Sound SoundAndGraphics SoundNote SoundVolume Sow Space SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution Speak SpeakTextPacket SpearmanRankTest SpearmanRho Spectrogram SpectrogramArray Specularity SpellingCorrection SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackInhibit StandardDeviation StandardDeviationFilter StandardForm Standardize StandbyDistribution Star StarGraph StartAsynchronousTask StartingStepSize StartOfLine StartOfString StartScheduledTask StartupSound StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringCount StringDrop StringExpression StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPosition StringQ StringReplace StringReplaceList StringReplacePart StringReverse StringRotateLeft StringRotateRight StringSkeleton StringSplit StringTake StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleBoxOptions StyleData StyleDefinitions StyleForm StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders ' +
	      'SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subset SubsetEqual Subsets SubStar Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde SuchThat Sum SumConvergence Sunday SuperDagger SuperMinus SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceColor SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SystemDialogInput SystemException SystemHelpPath SystemInformation SystemInformationData SystemOpen SystemOptions SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemStub ' +
	      'Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeWhile Tally Tan Tanh TargetFunctions TargetUnits TautologyQ TelegraphProcess TemplateBox TemplateBoxOptions TemplateSlotSequence TemporalData Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCell TextClipboardType TextData TextForm TextJustification TextLine TextPacket TextParagraph TextRecognize TextRendering TextStyle Texture TextureCoordinateFunction TextureCoordinateScaling Therefore ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreeJSymbol Threshold Through Throw Thumbnail Thursday Ticks TicksStyle Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint Times TimesBy TimeSeriesForecast TimeSeriesInvertibility TimeUsed TimeValue TimeZone Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate ToDiscreteTimeModel ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform TopologicalSort ToRadicals ToRules ToString Total TotalHeight TotalVariationFilter TotalWidth TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField Translate TranslationTransform TransparentColor Transpose TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle TriangleWave TriangularDistribution Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean True TrueQ TruncatedDistribution TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow Tuples TuranGraph TuringMachine ' +
	      'Transparent ' +
	      'UnateQ Uncompress Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UndirectedEdge UndirectedGraph UndirectedGraphQ UndocumentedTestFEParserPacket UndocumentedTestGetSelectionPacket Unequal Unevaluated UniformDistribution UniformGraphDistribution UniformSumDistribution Uninstall Union UnionPlus Unique UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitTriangle UnitVector Unprotect UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpValues URL URLFetch URLFetchAsynchronous URLSave URLSaveAsynchronous UseGraphicsRange Using UsingFrontEnd ' +
	      'V2Get ValidationLength Value ValueBox ValueBoxOptions ValueForm ValueQ ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerifyConvergence VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoigtDistribution VonMisesDistribution ' +
	      'WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeberE Wedge Wednesday WeibullDistribution WeierstrassHalfPeriods WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WilksW WilksWTest WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult Word WordBoundary WordCharacter WordData WordSearch WordSeparators WorkingPrecision Write WriteString Wronskian ' +
	      'XMLElement XMLObject Xnor Xor ' +
	      'Yellow YuleDissimilarity ' +
	      'ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZipfDistribution ZTest ZTransform ' +
	      '$Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AssertFunction $Assumptions $AsynchronousTask $BaseDirectory $BatchInput $BatchOutput $BoxForms $ByteOrdering $Canceled $CharacterEncoding $CharacterEncodings $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $CreationDate $CurrentLink $DateStringFormat $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $Epilog $ExportFormats $Failed $FinancialDataSource $FormatType $FrontEnd $FrontEndSession $GeoLocation $HistoryLength $HomeDirectory $HTTPCookies $IgnoreEOF $ImagingDevices $ImportFormats $InitialDirectory $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $ModuleNumber $NetworkLicense $NewMessage $NewSymbol $Notebooks $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $PipeSupported $Post $Pre $PreferencesDirectory $PrePrint $PreRead $PrintForms $PrintLiteral $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $RandomState $RecursionLimit $ReleaseNumber $RootDirectory $ScheduledTask $ScriptCommandLine $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemWordLength $TemporaryDirectory $TemporaryPrefix $TextStyle $TimedOut $TimeUnit $TimeZone $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $Urgent $UserAddOnsDirectory $UserBaseDirectory $UserDocumentsDirectory $UserName $Version $VersionNumber',
	    contains: [
	      {
	        className: 'comment',
	        begin: /\(\*/, end: /\*\)/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        begin: /\{/, end: /\}/,
	        illegal: /:/
	      }
	    ]
	  };
	};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var COMMON_CONTAINS = [
	    hljs.C_NUMBER_MODE,
	    {
	      className: 'string',
	      begin: '\'', end: '\'',
	      contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
	    }
	  ];
	  var TRANSPOSE = {
	    relevance: 0,
	    contains: [
	      {
	        begin: /'['\.]*/
	      }
	    ]
	  };

	  return {
	    keywords: {
	      keyword:
	        'break case catch classdef continue else elseif end enumerated events for function ' +
	        'global if methods otherwise parfor persistent properties return spmd switch try while',
	      built_in:
	        'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan ' +
	        'atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot ' +
	        'cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog ' +
	        'realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal ' +
	        'cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli ' +
	        'besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma ' +
	        'gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms ' +
	        'nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones ' +
	        'eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ' +
	        'ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril ' +
	        'triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute ' +
	        'shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan ' +
	        'isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal ' +
	        'rosser toeplitz vander wilkinson'
	    },
	    illegal: '(//|"|#|/\\*|\\s+/\\w+)',
	    contains: [
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '$',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'params',
	            variants: [
	              {begin: '\\(', end: '\\)'},
	              {begin: '\\[', end: '\\]'}
	            ]
	          }
	        ]
	      },
	      {
	        begin: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
	        returnBegin: true,
	        relevance: 0,
	        contains: [
	          {begin: /[a-zA-Z_][a-zA-Z_0-9]*/, relevance: 0},
	          TRANSPOSE.contains[0]
	        ]
	      },
	      {
	        begin: '\\[', end: '\\]',
	        contains: COMMON_CONTAINS,
	        relevance: 0,
	        starts: TRANSPOSE
	      },
	      {
	        begin: '\\{', end: /}/,
	        contains: COMMON_CONTAINS,
	        relevance: 0,
	        starts: TRANSPOSE
	      },
	      {
	        // transpose operators at the end of a function call
	        begin: /\)/,
	        relevance: 0,
	        starts: TRANSPOSE
	      },
	      hljs.COMMENT('^\\s*\\%\\{\\s*$', '^\\s*\\%\\}\\s*$'),
	      hljs.COMMENT('\\%', '$')
	    ].concat(COMMON_CONTAINS)
	  };
	};

/***/ }),
/* 121 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = 'if then else elseif for thru do while unless step in and or not';
	  var LITERALS = 'true false unknown inf minf ind und %e %i %pi %phi %gamma';
	  var BUILTIN_FUNCTIONS =
	        ' abasep abs absint absolute_real_time acos acosh acot acoth acsc acsch activate'
	      + ' addcol add_edge add_edges addmatrices addrow add_vertex add_vertices adjacency_matrix'
	      + ' adjoin adjoint af agd airy airy_ai airy_bi airy_dai airy_dbi algsys alg_type'
	      + ' alias allroots alphacharp alphanumericp amortization %and annuity_fv'
	      + ' annuity_pv antid antidiff AntiDifference append appendfile apply apply1 apply2'
	      + ' applyb1 apropos args arit_amortization arithmetic arithsum array arrayapply'
	      + ' arrayinfo arraymake arraysetapply ascii asec asech asin asinh askinteger'
	      + ' asksign assoc assoc_legendre_p assoc_legendre_q assume assume_external_byte_order'
	      + ' asympa at atan atan2 atanh atensimp atom atvalue augcoefmatrix augmented_lagrangian_method'
	      + ' av average_degree backtrace bars barsplot barsplot_description base64 base64_decode'
	      + ' bashindices batch batchload bc2 bdvac belln benefit_cost bern bernpoly bernstein_approx'
	      + ' bernstein_expand bernstein_poly bessel bessel_i bessel_j bessel_k bessel_simplify'
	      + ' bessel_y beta beta_incomplete beta_incomplete_generalized beta_incomplete_regularized'
	      + ' bezout bfallroots bffac bf_find_root bf_fmin_cobyla bfhzeta bfloat bfloatp'
	      + ' bfpsi bfpsi0 bfzeta biconnected_components bimetric binomial bipartition'
	      + ' block blockmatrixp bode_gain bode_phase bothcoef box boxplot boxplot_description'
	      + ' break bug_report build_info|10 buildq build_sample burn cabs canform canten'
	      + ' cardinality carg cartan cartesian_product catch cauchy_matrix cbffac cdf_bernoulli'
	      + ' cdf_beta cdf_binomial cdf_cauchy cdf_chi2 cdf_continuous_uniform cdf_discrete_uniform'
	      + ' cdf_exp cdf_f cdf_gamma cdf_general_finite_discrete cdf_geometric cdf_gumbel'
	      + ' cdf_hypergeometric cdf_laplace cdf_logistic cdf_lognormal cdf_negative_binomial'
	      + ' cdf_noncentral_chi2 cdf_noncentral_student_t cdf_normal cdf_pareto cdf_poisson'
	      + ' cdf_rank_sum cdf_rayleigh cdf_signed_rank cdf_student_t cdf_weibull cdisplay'
	      + ' ceiling central_moment cequal cequalignore cf cfdisrep cfexpand cgeodesic'
	      + ' cgreaterp cgreaterpignore changename changevar chaosgame charat charfun charfun2'
	      + ' charlist charp charpoly chdir chebyshev_t chebyshev_u checkdiv check_overlaps'
	      + ' chinese cholesky christof chromatic_index chromatic_number cint circulant_graph'
	      + ' clear_edge_weight clear_rules clear_vertex_label clebsch_gordan clebsch_graph'
	      + ' clessp clesspignore close closefile cmetric coeff coefmatrix cograd col collapse'
	      + ' collectterms columnop columnspace columnswap columnvector combination combine'
	      + ' comp2pui compare compfile compile compile_file complement_graph complete_bipartite_graph'
	      + ' complete_graph complex_number_p components compose_functions concan concat'
	      + ' conjugate conmetderiv connected_components connect_vertices cons constant'
	      + ' constantp constituent constvalue cont2part content continuous_freq contortion'
	      + ' contour_plot contract contract_edge contragrad contrib_ode convert coord'
	      + ' copy copy_file copy_graph copylist copymatrix cor cos cosh cot coth cov cov1'
	      + ' covdiff covect covers crc24sum create_graph create_list csc csch csetup cspline'
	      + ' ctaylor ct_coordsys ctransform ctranspose cube_graph cuboctahedron_graph'
	      + ' cunlisp cv cycle_digraph cycle_graph cylindrical days360 dblint deactivate'
	      + ' declare declare_constvalue declare_dimensions declare_fundamental_dimensions'
	      + ' declare_fundamental_units declare_qty declare_translated declare_unit_conversion'
	      + ' declare_units declare_weights decsym defcon define define_alt_display define_variable'
	      + ' defint defmatch defrule defstruct deftaylor degree_sequence del delete deleten'
	      + ' delta demo demoivre denom depends derivdegree derivlist describe desolve'
	      + ' determinant dfloat dgauss_a dgauss_b dgeev dgemm dgeqrf dgesv dgesvd diag'
	      + ' diagmatrix diag_matrix diagmatrixp diameter diff digitcharp dimacs_export'
	      + ' dimacs_import dimension dimensionless dimensions dimensions_as_list direct'
	      + ' directory discrete_freq disjoin disjointp disolate disp dispcon dispform'
	      + ' dispfun dispJordan display disprule dispterms distrib divide divisors divsum'
	      + ' dkummer_m dkummer_u dlange dodecahedron_graph dotproduct dotsimp dpart'
	      + ' draw draw2d draw3d drawdf draw_file draw_graph dscalar echelon edge_coloring'
	      + ' edge_connectivity edges eigens_by_jacobi eigenvalues eigenvectors eighth'
	      + ' einstein eivals eivects elapsed_real_time elapsed_run_time ele2comp ele2polynome'
	      + ' ele2pui elem elementp elevation_grid elim elim_allbut eliminate eliminate_using'
	      + ' ellipse elliptic_e elliptic_ec elliptic_eu elliptic_f elliptic_kc elliptic_pi'
	      + ' ematrix empty_graph emptyp endcons entermatrix entertensor entier equal equalp'
	      + ' equiv_classes erf erfc erf_generalized erfi errcatch error errormsg errors'
	      + ' euler ev eval_string evenp every evolution evolution2d evundiff example exp'
	      + ' expand expandwrt expandwrt_factored expint expintegral_chi expintegral_ci'
	      + ' expintegral_e expintegral_e1 expintegral_ei expintegral_e_simplify expintegral_li'
	      + ' expintegral_shi expintegral_si explicit explose exponentialize express expt'
	      + ' exsec extdiff extract_linear_equations extremal_subset ezgcd %f f90 facsum'
	      + ' factcomb factor factorfacsum factorial factorout factorsum facts fast_central_elements'
	      + ' fast_linsolve fasttimes featurep fernfale fft fib fibtophi fifth filename_merge'
	      + ' file_search file_type fillarray findde find_root find_root_abs find_root_error'
	      + ' find_root_rel first fix flatten flength float floatnump floor flower_snark'
	      + ' flush flush1deriv flushd flushnd flush_output fmin_cobyla forget fortran'
	      + ' fourcos fourexpand fourier fourier_elim fourint fourintcos fourintsin foursimp'
	      + ' foursin fourth fposition frame_bracket freeof freshline fresnel_c fresnel_s'
	      + ' from_adjacency_matrix frucht_graph full_listify fullmap fullmapl fullratsimp'
	      + ' fullratsubst fullsetify funcsolve fundamental_dimensions fundamental_units'
	      + ' fundef funmake funp fv g0 g1 gamma gamma_greek gamma_incomplete gamma_incomplete_generalized'
	      + ' gamma_incomplete_regularized gauss gauss_a gauss_b gaussprob gcd gcdex gcdivide'
	      + ' gcfac gcfactor gd generalized_lambert_w genfact gen_laguerre genmatrix gensym'
	      + ' geo_amortization geo_annuity_fv geo_annuity_pv geomap geometric geometric_mean'
	      + ' geosum get getcurrentdirectory get_edge_weight getenv get_lu_factors get_output_stream_string'
	      + ' get_pixel get_plot_option get_tex_environment get_tex_environment_default'
	      + ' get_vertex_label gfactor gfactorsum ggf girth global_variances gn gnuplot_close'
	      + ' gnuplot_replot gnuplot_reset gnuplot_restart gnuplot_start go Gosper GosperSum'
	      + ' gr2d gr3d gradef gramschmidt graph6_decode graph6_encode graph6_export graph6_import'
	      + ' graph_center graph_charpoly graph_eigenvalues graph_flow graph_order graph_periphery'
	      + ' graph_product graph_size graph_union great_rhombicosidodecahedron_graph great_rhombicuboctahedron_graph'
	      + ' grid_graph grind grobner_basis grotzch_graph hamilton_cycle hamilton_path'
	      + ' hankel hankel_1 hankel_2 harmonic harmonic_mean hav heawood_graph hermite'
	      + ' hessian hgfred hilbertmap hilbert_matrix hipow histogram histogram_description'
	      + ' hodge horner hypergeometric i0 i1 %ibes ic1 ic2 ic_convert ichr1 ichr2 icosahedron_graph'
	      + ' icosidodecahedron_graph icurvature ident identfor identity idiff idim idummy'
	      + ' ieqn %if ifactors iframes ifs igcdex igeodesic_coords ilt image imagpart'
	      + ' imetric implicit implicit_derivative implicit_plot indexed_tensor indices'
	      + ' induced_subgraph inferencep inference_result infix info_display init_atensor'
	      + ' init_ctensor in_neighbors innerproduct inpart inprod inrt integerp integer_partitions'
	      + ' integrate intersect intersection intervalp intopois intosum invariant1 invariant2'
	      + ' inverse_fft inverse_jacobi_cd inverse_jacobi_cn inverse_jacobi_cs inverse_jacobi_dc'
	      + ' inverse_jacobi_dn inverse_jacobi_ds inverse_jacobi_nc inverse_jacobi_nd inverse_jacobi_ns'
	      + ' inverse_jacobi_sc inverse_jacobi_sd inverse_jacobi_sn invert invert_by_adjoint'
	      + ' invert_by_lu inv_mod irr is is_biconnected is_bipartite is_connected is_digraph'
	      + ' is_edge_in_graph is_graph is_graph_or_digraph ishow is_isomorphic isolate'
	      + ' isomorphism is_planar isqrt isreal_p is_sconnected is_tree is_vertex_in_graph'
	      + ' items_inference %j j0 j1 jacobi jacobian jacobi_cd jacobi_cn jacobi_cs jacobi_dc'
	      + ' jacobi_dn jacobi_ds jacobi_nc jacobi_nd jacobi_ns jacobi_p jacobi_sc jacobi_sd'
	      + ' jacobi_sn JF jn join jordan julia julia_set julia_sin %k kdels kdelta kill'
	      + ' killcontext kostka kron_delta kronecker_product kummer_m kummer_u kurtosis'
	      + ' kurtosis_bernoulli kurtosis_beta kurtosis_binomial kurtosis_chi2 kurtosis_continuous_uniform'
	      + ' kurtosis_discrete_uniform kurtosis_exp kurtosis_f kurtosis_gamma kurtosis_general_finite_discrete'
	      + ' kurtosis_geometric kurtosis_gumbel kurtosis_hypergeometric kurtosis_laplace'
	      + ' kurtosis_logistic kurtosis_lognormal kurtosis_negative_binomial kurtosis_noncentral_chi2'
	      + ' kurtosis_noncentral_student_t kurtosis_normal kurtosis_pareto kurtosis_poisson'
	      + ' kurtosis_rayleigh kurtosis_student_t kurtosis_weibull label labels lagrange'
	      + ' laguerre lambda lambert_w laplace laplacian_matrix last lbfgs lc2kdt lcharp'
	      + ' lc_l lcm lc_u ldefint ldisp ldisplay legendre_p legendre_q leinstein length'
	      + ' let letrules letsimp levi_civita lfreeof lgtreillis lhs li liediff limit'
	      + ' Lindstedt linear linearinterpol linear_program linear_regression line_graph'
	      + ' linsolve listarray list_correlations listify list_matrix_entries list_nc_monomials'
	      + ' listoftens listofvars listp lmax lmin load loadfile local locate_matrix_entry'
	      + ' log logcontract log_gamma lopow lorentz_gauge lowercasep lpart lratsubst'
	      + ' lreduce lriemann lsquares_estimates lsquares_estimates_approximate lsquares_estimates_exact'
	      + ' lsquares_mse lsquares_residual_mse lsquares_residuals lsum ltreillis lu_backsub'
	      + ' lucas lu_factor %m macroexpand macroexpand1 make_array makebox makefact makegamma'
	      + ' make_graph make_level_picture makelist makeOrders make_poly_continent make_poly_country'
	      + ' make_polygon make_random_state make_rgb_picture makeset make_string_input_stream'
	      + ' make_string_output_stream make_transform mandelbrot mandelbrot_set map mapatom'
	      + ' maplist matchdeclare matchfix mat_cond mat_fullunblocker mat_function mathml_display'
	      + ' mat_norm matrix matrixmap matrixp matrix_size mattrace mat_trace mat_unblocker'
	      + ' max max_clique max_degree max_flow maximize_lp max_independent_set max_matching'
	      + ' maybe md5sum mean mean_bernoulli mean_beta mean_binomial mean_chi2 mean_continuous_uniform'
	      + ' mean_deviation mean_discrete_uniform mean_exp mean_f mean_gamma mean_general_finite_discrete'
	      + ' mean_geometric mean_gumbel mean_hypergeometric mean_laplace mean_logistic'
	      + ' mean_lognormal mean_negative_binomial mean_noncentral_chi2 mean_noncentral_student_t'
	      + ' mean_normal mean_pareto mean_poisson mean_rayleigh mean_student_t mean_weibull'
	      + ' median median_deviation member mesh metricexpandall mgf1_sha1 min min_degree'
	      + ' min_edge_cut minfactorial minimalPoly minimize_lp minimum_spanning_tree minor'
	      + ' minpack_lsquares minpack_solve min_vertex_cover min_vertex_cut mkdir mnewton'
	      + ' mod mode_declare mode_identity ModeMatrix moebius mon2schur mono monomial_dimensions'
	      + ' multibernstein_poly multi_display_for_texinfo multi_elem multinomial multinomial_coeff'
	      + ' multi_orbit multiplot_mode multi_pui multsym multthru mycielski_graph nary'
	      + ' natural_unit nc_degree ncexpt ncharpoly negative_picture neighbors new newcontext'
	      + ' newdet new_graph newline newton new_variable next_prime nicedummies niceindices'
	      + ' ninth nofix nonarray noncentral_moment nonmetricity nonnegintegerp nonscalarp'
	      + ' nonzeroandfreeof notequal nounify nptetrad npv nroots nterms ntermst'
	      + ' nthroot nullity nullspace num numbered_boundaries numberp number_to_octets'
	      + ' num_distinct_partitions numerval numfactor num_partitions nusum nzeta nzetai'
	      + ' nzetar octets_to_number octets_to_oid odd_girth oddp ode2 ode_check odelin'
	      + ' oid_to_octets op opena opena_binary openr openr_binary openw openw_binary'
	      + ' operatorp opsubst optimize %or orbit orbits ordergreat ordergreatp orderless'
	      + ' orderlessp orthogonal_complement orthopoly_recur orthopoly_weight outermap'
	      + ' out_neighbors outofpois pade parabolic_cylinder_d parametric parametric_surface'
	      + ' parg parGosper parse_string parse_timedate part part2cont partfrac partition'
	      + ' partition_set partpol path_digraph path_graph pathname_directory pathname_name'
	      + ' pathname_type pdf_bernoulli pdf_beta pdf_binomial pdf_cauchy pdf_chi2 pdf_continuous_uniform'
	      + ' pdf_discrete_uniform pdf_exp pdf_f pdf_gamma pdf_general_finite_discrete'
	      + ' pdf_geometric pdf_gumbel pdf_hypergeometric pdf_laplace pdf_logistic pdf_lognormal'
	      + ' pdf_negative_binomial pdf_noncentral_chi2 pdf_noncentral_student_t pdf_normal'
	      + ' pdf_pareto pdf_poisson pdf_rank_sum pdf_rayleigh pdf_signed_rank pdf_student_t'
	      + ' pdf_weibull pearson_skewness permanent permut permutation permutations petersen_graph'
	      + ' petrov pickapart picture_equalp picturep piechart piechart_description planar_embedding'
	      + ' playback plog plot2d plot3d plotdf ploteq plsquares pochhammer points poisdiff'
	      + ' poisexpt poisint poismap poisplus poissimp poissubst poistimes poistrim polar'
	      + ' polarform polartorect polar_to_xy poly_add poly_buchberger poly_buchberger_criterion'
	      + ' poly_colon_ideal poly_content polydecomp poly_depends_p poly_elimination_ideal'
	      + ' poly_exact_divide poly_expand poly_expt poly_gcd polygon poly_grobner poly_grobner_equal'
	      + ' poly_grobner_member poly_grobner_subsetp poly_ideal_intersection poly_ideal_polysaturation'
	      + ' poly_ideal_polysaturation1 poly_ideal_saturation poly_ideal_saturation1 poly_lcm'
	      + ' poly_minimization polymod poly_multiply polynome2ele polynomialp poly_normal_form'
	      + ' poly_normalize poly_normalize_list poly_polysaturation_extension poly_primitive_part'
	      + ' poly_pseudo_divide poly_reduced_grobner poly_reduction poly_saturation_extension'
	      + ' poly_s_polynomial poly_subtract polytocompanion pop postfix potential power_mod'
	      + ' powerseries powerset prefix prev_prime primep primes principal_components'
	      + ' print printf printfile print_graph printpois printprops prodrac product properties'
	      + ' propvars psi psubst ptriangularize pui pui2comp pui2ele pui2polynome pui_direct'
	      + ' puireduc push put pv qput qrange qty quad_control quad_qag quad_qagi quad_qagp'
	      + ' quad_qags quad_qawc quad_qawf quad_qawo quad_qaws quadrilateral quantile'
	      + ' quantile_bernoulli quantile_beta quantile_binomial quantile_cauchy quantile_chi2'
	      + ' quantile_continuous_uniform quantile_discrete_uniform quantile_exp quantile_f'
	      + ' quantile_gamma quantile_general_finite_discrete quantile_geometric quantile_gumbel'
	      + ' quantile_hypergeometric quantile_laplace quantile_logistic quantile_lognormal'
	      + ' quantile_negative_binomial quantile_noncentral_chi2 quantile_noncentral_student_t'
	      + ' quantile_normal quantile_pareto quantile_poisson quantile_rayleigh quantile_student_t'
	      + ' quantile_weibull quartile_skewness quit qunit quotient racah_v racah_w radcan'
	      + ' radius random random_bernoulli random_beta random_binomial random_bipartite_graph'
	      + ' random_cauchy random_chi2 random_continuous_uniform random_digraph random_discrete_uniform'
	      + ' random_exp random_f random_gamma random_general_finite_discrete random_geometric'
	      + ' random_graph random_graph1 random_gumbel random_hypergeometric random_laplace'
	      + ' random_logistic random_lognormal random_negative_binomial random_network'
	      + ' random_noncentral_chi2 random_noncentral_student_t random_normal random_pareto'
	      + ' random_permutation random_poisson random_rayleigh random_regular_graph random_student_t'
	      + ' random_tournament random_tree random_weibull range rank rat ratcoef ratdenom'
	      + ' ratdiff ratdisrep ratexpand ratinterpol rational rationalize ratnumer ratnump'
	      + ' ratp ratsimp ratsubst ratvars ratweight read read_array read_binary_array'
	      + ' read_binary_list read_binary_matrix readbyte readchar read_hashed_array readline'
	      + ' read_list read_matrix read_nested_list readonly read_xpm real_imagpart_to_conjugate'
	      + ' realpart realroots rearray rectangle rectform rectform_log_if_constant recttopolar'
	      + ' rediff reduce_consts reduce_order region region_boundaries region_boundaries_plus'
	      + ' rem remainder remarray rembox remcomps remcon remcoord remfun remfunction'
	      + ' remlet remove remove_constvalue remove_dimensions remove_edge remove_fundamental_dimensions'
	      + ' remove_fundamental_units remove_plot_option remove_vertex rempart remrule'
	      + ' remsym remvalue rename rename_file reset reset_displays residue resolvante'
	      + ' resolvante_alternee1 resolvante_bipartite resolvante_diedrale resolvante_klein'
	      + ' resolvante_klein3 resolvante_produit_sym resolvante_unitaire resolvante_vierer'
	      + ' rest resultant return reveal reverse revert revert2 rgb2level rhs ricci riemann'
	      + ' rinvariant risch rk rmdir rncombine romberg room rootscontract round row'
	      + ' rowop rowswap rreduce run_testsuite %s save saving scalarp scaled_bessel_i'
	      + ' scaled_bessel_i0 scaled_bessel_i1 scalefactors scanmap scatterplot scatterplot_description'
	      + ' scene schur2comp sconcat scopy scsimp scurvature sdowncase sec sech second'
	      + ' sequal sequalignore set_alt_display setdifference set_draw_defaults set_edge_weight'
	      + ' setelmx setequalp setify setp set_partitions set_plot_option set_prompt set_random_state'
	      + ' set_tex_environment set_tex_environment_default setunits setup_autoload set_up_dot_simplifications'
	      + ' set_vertex_label seventh sexplode sf sha1sum sha256sum shortest_path shortest_weighted_path'
	      + ' show showcomps showratvars sierpinskiale sierpinskimap sign signum similaritytransform'
	      + ' simp_inequality simplify_sum simplode simpmetderiv simtran sin sinh sinsert'
	      + ' sinvertcase sixth skewness skewness_bernoulli skewness_beta skewness_binomial'
	      + ' skewness_chi2 skewness_continuous_uniform skewness_discrete_uniform skewness_exp'
	      + ' skewness_f skewness_gamma skewness_general_finite_discrete skewness_geometric'
	      + ' skewness_gumbel skewness_hypergeometric skewness_laplace skewness_logistic'
	      + ' skewness_lognormal skewness_negative_binomial skewness_noncentral_chi2 skewness_noncentral_student_t'
	      + ' skewness_normal skewness_pareto skewness_poisson skewness_rayleigh skewness_student_t'
	      + ' skewness_weibull slength smake small_rhombicosidodecahedron_graph small_rhombicuboctahedron_graph'
	      + ' smax smin smismatch snowmap snub_cube_graph snub_dodecahedron_graph solve'
	      + ' solve_rec solve_rec_rat some somrac sort sparse6_decode sparse6_encode sparse6_export'
	      + ' sparse6_import specint spherical spherical_bessel_j spherical_bessel_y spherical_hankel1'
	      + ' spherical_hankel2 spherical_harmonic spherical_to_xyz splice split sposition'
	      + ' sprint sqfr sqrt sqrtdenest sremove sremovefirst sreverse ssearch ssort sstatus'
	      + ' ssubst ssubstfirst staircase standardize standardize_inverse_trig starplot'
	      + ' starplot_description status std std1 std_bernoulli std_beta std_binomial'
	      + ' std_chi2 std_continuous_uniform std_discrete_uniform std_exp std_f std_gamma'
	      + ' std_general_finite_discrete std_geometric std_gumbel std_hypergeometric std_laplace'
	      + ' std_logistic std_lognormal std_negative_binomial std_noncentral_chi2 std_noncentral_student_t'
	      + ' std_normal std_pareto std_poisson std_rayleigh std_student_t std_weibull'
	      + ' stemplot stirling stirling1 stirling2 strim striml strimr string stringout'
	      + ' stringp strong_components struve_h struve_l sublis sublist sublist_indices'
	      + ' submatrix subsample subset subsetp subst substinpart subst_parallel substpart'
	      + ' substring subvar subvarp sum sumcontract summand_to_rec supcase supcontext'
	      + ' symbolp symmdifference symmetricp system take_channel take_inference tan'
	      + ' tanh taylor taylorinfo taylorp taylor_simplifier taytorat tcl_output tcontract'
	      + ' tellrat tellsimp tellsimpafter tentex tenth test_mean test_means_difference'
	      + ' test_normality test_proportion test_proportions_difference test_rank_sum'
	      + ' test_sign test_signed_rank test_variance test_variance_ratio tex tex1 tex_display'
	      + ' texput %th third throw time timedate timer timer_info tldefint tlimit todd_coxeter'
	      + ' toeplitz tokens to_lisp topological_sort to_poly to_poly_solve totaldisrep'
	      + ' totalfourier totient tpartpol trace tracematrix trace_options transform_sample'
	      + ' translate translate_file transpose treefale tree_reduce treillis treinat'
	      + ' triangle triangularize trigexpand trigrat trigreduce trigsimp trunc truncate'
	      + ' truncated_cube_graph truncated_dodecahedron_graph truncated_icosahedron_graph'
	      + ' truncated_tetrahedron_graph tr_warnings_get tube tutte_graph ueivects uforget'
	      + ' ultraspherical underlying_graph undiff union unique uniteigenvectors unitp'
	      + ' units unit_step unitvector unorder unsum untellrat untimer'
	      + ' untrace uppercasep uricci uriemann uvect vandermonde_matrix var var1 var_bernoulli'
	      + ' var_beta var_binomial var_chi2 var_continuous_uniform var_discrete_uniform'
	      + ' var_exp var_f var_gamma var_general_finite_discrete var_geometric var_gumbel'
	      + ' var_hypergeometric var_laplace var_logistic var_lognormal var_negative_binomial'
	      + ' var_noncentral_chi2 var_noncentral_student_t var_normal var_pareto var_poisson'
	      + ' var_rayleigh var_student_t var_weibull vector vectorpotential vectorsimp'
	      + ' verbify vers vertex_coloring vertex_connectivity vertex_degree vertex_distance'
	      + ' vertex_eccentricity vertex_in_degree vertex_out_degree vertices vertices_to_cycle'
	      + ' vertices_to_path %w weyl wheel_graph wiener_index wigner_3j wigner_6j'
	      + ' wigner_9j with_stdout write_binary_data writebyte write_data writefile wronskian'
	      + ' xreduce xthru %y Zeilberger zeroequiv zerofor zeromatrix zeromatrixp zeta'
	      + ' zgeev zheev zlange zn_add_table zn_carmichael_lambda zn_characteristic_factors'
	      + ' zn_determinant zn_factor_generators zn_invert_by_lu zn_log zn_mult_table'
	      + ' absboxchar activecontexts adapt_depth additive adim aform algebraic'
	      + ' algepsilon algexact aliases allbut all_dotsimp_denoms allocation allsym alphabetic'
	      + ' animation antisymmetric arrays askexp assume_pos assume_pos_pred assumescalar'
	      + ' asymbol atomgrad atrig1 axes axis_3d axis_bottom axis_left axis_right axis_top'
	      + ' azimuth background background_color backsubst berlefact bernstein_explicit'
	      + ' besselexpand beta_args_sum_to_integer beta_expand bftorat bftrunc bindtest'
	      + ' border boundaries_array box boxchar breakup %c capping cauchysum cbrange'
	      + ' cbtics center cflength cframe_flag cnonmet_flag color color_bar color_bar_tics'
	      + ' colorbox columns commutative complex cone context contexts contour contour_levels'
	      + ' cosnpiflag ctaypov ctaypt ctayswitch ctayvar ct_coords ctorsion_flag ctrgsimp'
	      + ' cube current_let_rule_package cylinder data_file_name debugmode decreasing'
	      + ' default_let_rule_package delay dependencies derivabbrev derivsubst detout'
	      + ' diagmetric diff dim dimensions dispflag display2d|10 display_format_internal'
	      + ' distribute_over doallmxops domain domxexpt domxmxops domxnctimes dontfactor'
	      + ' doscmxops doscmxplus dot0nscsimp dot0simp dot1simp dotassoc dotconstrules'
	      + ' dotdistrib dotexptsimp dotident dotscrules draw_graph_program draw_realpart'
	      + ' edge_color edge_coloring edge_partition edge_type edge_width %edispflag'
	      + ' elevation %emode endphi endtheta engineering_format_floats enhanced3d %enumer'
	      + ' epsilon_lp erfflag erf_representation errormsg error_size error_syms error_type'
	      + ' %e_to_numlog eval even evenfun evflag evfun ev_point expandwrt_denom expintexpand'
	      + ' expintrep expon expop exptdispflag exptisolate exptsubst facexpand facsum_combine'
	      + ' factlim factorflag factorial_expand factors_only fb feature features'
	      + ' file_name file_output_append file_search_demo file_search_lisp file_search_maxima|10'
	      + ' file_search_tests file_search_usage file_type_lisp file_type_maxima|10 fill_color'
	      + ' fill_density filled_func fixed_vertices flipflag float2bf font font_size'
	      + ' fortindent fortspaces fpprec fpprintprec functions gamma_expand gammalim'
	      + ' gdet genindex gensumnum GGFCFMAX GGFINFINITY globalsolve gnuplot_command'
	      + ' gnuplot_curve_styles gnuplot_curve_titles gnuplot_default_term_command gnuplot_dumb_term_command'
	      + ' gnuplot_file_args gnuplot_file_name gnuplot_out_file gnuplot_pdf_term_command'
	      + ' gnuplot_pm3d gnuplot_png_term_command gnuplot_postamble gnuplot_preamble'
	      + ' gnuplot_ps_term_command gnuplot_svg_term_command gnuplot_term gnuplot_view_args'
	      + ' Gosper_in_Zeilberger gradefs grid grid2d grind halfangles head_angle head_both'
	      + ' head_length head_type height hypergeometric_representation %iargs ibase'
	      + ' icc1 icc2 icounter idummyx ieqnprint ifb ifc1 ifc2 ifg ifgi ifr iframe_bracket_form'
	      + ' ifri igeowedge_flag ikt1 ikt2 imaginary inchar increasing infeval'
	      + ' infinity inflag infolists inm inmc1 inmc2 intanalysis integer integervalued'
	      + ' integrate_use_rootsof integration_constant integration_constant_counter interpolate_color'
	      + ' intfaclim ip_grid ip_grid_in irrational isolate_wrt_times iterations itr'
	      + ' julia_parameter %k1 %k2 keepfloat key key_pos kinvariant kt label label_alignment'
	      + ' label_orientation labels lassociative lbfgs_ncorrections lbfgs_nfeval_max'
	      + ' leftjust legend letrat let_rule_packages lfg lg lhospitallim limsubst linear'
	      + ' linear_solver linechar linel|10 linenum line_type linewidth line_width linsolve_params'
	      + ' linsolvewarn lispdisp listarith listconstvars listdummyvars lmxchar load_pathname'
	      + ' loadprint logabs logarc logcb logconcoeffp logexpand lognegint logsimp logx'
	      + ' logx_secondary logy logy_secondary logz lriem m1pbranch macroexpansion macros'
	      + ' mainvar manual_demo maperror mapprint matrix_element_add matrix_element_mult'
	      + ' matrix_element_transpose maxapplydepth maxapplyheight maxima_tempdir|10 maxima_userdir|10'
	      + ' maxnegex MAX_ORD maxposex maxpsifracdenom maxpsifracnum maxpsinegint maxpsiposint'
	      + ' maxtayorder mesh_lines_color method mod_big_prime mode_check_errorp'
	      + ' mode_checkp mode_check_warnp mod_test mod_threshold modular_linear_solver'
	      + ' modulus multiplicative multiplicities myoptions nary negdistrib negsumdispflag'
	      + ' newline newtonepsilon newtonmaxiter nextlayerfactor niceindicespref nm nmc'
	      + ' noeval nolabels nonegative_lp noninteger nonscalar noun noundisp nouns np'
	      + ' npi nticks ntrig numer numer_pbranch obase odd oddfun opacity opproperties'
	      + ' opsubst optimprefix optionset orientation origin orthopoly_returns_intervals'
	      + ' outative outchar packagefile palette partswitch pdf_file pfeformat phiresolution'
	      + ' %piargs piece pivot_count_sx pivot_max_sx plot_format plot_options plot_realpart'
	      + ' png_file pochhammer_max_index points pointsize point_size points_joined point_type'
	      + ' poislim poisson poly_coefficient_ring poly_elimination_order polyfactor poly_grobner_algorithm'
	      + ' poly_grobner_debug poly_monomial_order poly_primary_elimination_order poly_return_term_list'
	      + ' poly_secondary_elimination_order poly_top_reduction_only posfun position'
	      + ' powerdisp pred prederror primep_number_of_tests product_use_gamma program'
	      + ' programmode promote_float_to_bigfloat prompt proportional_axes props psexpand'
	      + ' ps_file radexpand radius radsubstflag rassociative ratalgdenom ratchristof'
	      + ' ratdenomdivide rateinstein ratepsilon ratfac rational ratmx ratprint ratriemann'
	      + ' ratsimpexpons ratvarswitch ratweights ratweyl ratwtlvl real realonly redraw'
	      + ' refcheck resolution restart resultant ric riem rmxchar %rnum_list rombergabs'
	      + ' rombergit rombergmin rombergtol rootsconmode rootsepsilon run_viewer same_xy'
	      + ' same_xyz savedef savefactors scalar scalarmatrixp scale scale_lp setcheck'
	      + ' setcheckbreak setval show_edge_color show_edges show_edge_type show_edge_width'
	      + ' show_id show_label showtime show_vertex_color show_vertex_size show_vertex_type'
	      + ' show_vertices show_weight simp simplified_output simplify_products simpproduct'
	      + ' simpsum sinnpiflag solvedecomposes solveexplicit solvefactors solvenullwarn'
	      + ' solveradcan solvetrigwarn space sparse sphere spring_embedding_depth sqrtdispflag'
	      + ' stardisp startphi starttheta stats_numer stringdisp structures style sublis_apply_lambda'
	      + ' subnumsimp sumexpand sumsplitfact surface surface_hide svg_file symmetric'
	      + ' tab taylordepth taylor_logexpand taylor_order_coefficients taylor_truncate_polynomials'
	      + ' tensorkill terminal testsuite_files thetaresolution timer_devalue title tlimswitch'
	      + ' tr track transcompile transform transform_xy translate_fast_arrays transparent'
	      + ' transrun tr_array_as_ref tr_bound_function_applyp tr_file_tty_messagesp tr_float_can_branch_complex'
	      + ' tr_function_call_default trigexpandplus trigexpandtimes triginverses trigsign'
	      + ' trivial_solutions tr_numer tr_optimize_max_loop tr_semicompile tr_state_vars'
	      + ' tr_warn_bad_function_calls tr_warn_fexpr tr_warn_meval tr_warn_mode'
	      + ' tr_warn_undeclared tr_warn_undefined_variable tstep ttyoff tube_extremes'
	      + ' ufg ug %unitexpand unit_vectors uric uriem use_fast_arrays user_preamble'
	      + ' usersetunits values vect_cross verbose vertex_color vertex_coloring vertex_partition'
	      + ' vertex_size vertex_type view warnings weyl width windowname windowtitle wired_surface'
	      + ' wireframe xaxis xaxis_color xaxis_secondary xaxis_type xaxis_width xlabel'
	      + ' xlabel_secondary xlength xrange xrange_secondary xtics xtics_axis xtics_rotate'
	      + ' xtics_rotate_secondary xtics_secondary xtics_secondary_axis xu_grid x_voxel'
	      + ' xy_file xyplane xy_scale yaxis yaxis_color yaxis_secondary yaxis_type yaxis_width'
	      + ' ylabel ylabel_secondary ylength yrange yrange_secondary ytics ytics_axis'
	      + ' ytics_rotate ytics_rotate_secondary ytics_secondary ytics_secondary_axis'
	      + ' yv_grid y_voxel yx_ratio zaxis zaxis_color zaxis_type zaxis_width zeroa zerob'
	      + ' zerobern zeta%pi zlabel zlabel_rotate zlength zmin zn_primroot_limit zn_primroot_pretest';
	  var SYMBOLS = '_ __ %|0 %%|0';

	  return {
	    lexemes: '[A-Za-z_%][0-9A-Za-z_%]*',
	    keywords: {
	      keyword: KEYWORDS,
	      literal: LITERALS,
	      built_in: BUILTIN_FUNCTIONS,
	      symbol: SYMBOLS,
	    },
	    contains: [
	      {
	        className: 'comment',
	        begin: '/\\*',
	        end: '\\*/',
	        contains: ['self']
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'number',
	        relevance: 0,
	        variants: [
	          {
	            // float number w/ exponent
	            // hmm, I wonder if we ought to include other exponent markers?
	            begin: '\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Ee][-+]?\\d+\\b',
	          },
	          {
	            // bigfloat number
	            begin: '\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Bb][-+]?\\d+\\b',
	            relevance: 10
	          },
	          {
	            // float number w/out exponent
	            // Doesn't seem to recognize floats which start with '.'
	            begin: '\\b(\\.\\d+|\\d+\\.\\d+)\\b',
	          },
	          {
	            // integer in base up to 36
	            // Doesn't seem to recognize integers which end with '.'
	            begin: '\\b(\\d+|0[0-9A-Za-z]+)\\.?\\b',
	          }
	        ]
	      }
	    ],
	    illegal: /@/
	  }
	};

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords:
	      'int float string vector matrix if else switch case default while do for in break ' +
	      'continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic ' +
	      'addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey ' +
	      'affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve ' +
	      'alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor ' +
	      'animDisplay animView annotate appendStringArray applicationName applyAttrPreset ' +
	      'applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx ' +
	      'artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu ' +
	      'artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand ' +
	      'assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface ' +
	      'attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu ' +
	      'attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp ' +
	      'attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery ' +
	      'autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults ' +
	      'bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership ' +
	      'bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType ' +
	      'boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu ' +
	      'buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge ' +
	      'cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch ' +
	      'catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox ' +
	      'character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp ' +
	      'checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip ' +
	      'clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore ' +
	      'closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter ' +
	      'cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color ' +
	      'colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp ' +
	      'colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem ' +
	      'componentEditor compositingInterop computePolysetVolume condition cone confirmDialog ' +
	      'connectAttr connectControl connectDynamic connectJoint connectionInfo constrain ' +
	      'constrainValue constructionHistory container containsMultibyte contextInfo control ' +
	      'convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation ' +
	      'convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache ' +
	      'cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel ' +
	      'cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver ' +
	      'cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor ' +
	      'createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer ' +
	      'createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse ' +
	      'currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx ' +
	      'curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface ' +
	      'curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox ' +
	      'defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete ' +
	      'deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes ' +
	      'delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo ' +
	      'dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable ' +
	      'disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected ' +
	      'displayColor displayCull displayLevelOfDetail displayPref displayRGBColor ' +
	      'displaySmoothness displayStats displayString displaySurface distanceDimContext ' +
	      'distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct ' +
	      'doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator ' +
	      'duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression ' +
	      'dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor ' +
	      'dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers ' +
	      'editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor ' +
	      'editorTemplate effector emit emitter enableDevice encodeString endString endsWith env ' +
	      'equivalent equivalentTol erf error eval evalDeferred evalEcho event ' +
	      'exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp ' +
	      'expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof ' +
	      'fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo ' +
	      'filetest filletCurve filter filterCurve filterExpand filterStudioImport ' +
	      'findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster ' +
	      'finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar ' +
	      'floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo ' +
	      'fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint ' +
	      'frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss ' +
	      'geometryConstraint getApplicationVersionAsFloat getAttr getClassification ' +
	      'getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes ' +
	      'getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender ' +
	      'glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl ' +
	      'gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid ' +
	      'gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap ' +
	      'HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor ' +
	      'HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached ' +
	      'HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel ' +
	      'headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey ' +
	      'hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender ' +
	      'hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox ' +
	      'iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ' +
	      'ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ' +
	      'ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform ' +
	      'insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance ' +
	      'instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp ' +
	      'interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf ' +
	      'isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect ' +
	      'itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx ' +
	      'jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner ' +
	      'keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx ' +
	      'keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx ' +
	      'keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx ' +
	      'keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor ' +
	      'layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList ' +
	      'lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep ' +
	      'listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory ' +
	      'listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation ' +
	      'listNodeTypes listPanelCategories listRelatives listSets listTransforms ' +
	      'listUnselected listerEditor loadFluid loadNewShelf loadPlugin ' +
	      'loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log ' +
	      'longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive ' +
	      'makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext ' +
	      'manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx ' +
	      'manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout ' +
	      'menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp ' +
	      'mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move ' +
	      'moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute ' +
	      'nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast ' +
	      'nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint ' +
	      'normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect ' +
	      'nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref ' +
	      'nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType ' +
	      'objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface ' +
	      'offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit ' +
	      'orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier ' +
	      'paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration ' +
	      'panelHistory paramDimContext paramDimension paramLocator parent parentConstraint ' +
	      'particle particleExists particleInstancer particleRenderInfo partition pasteKey ' +
	      'pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture ' +
	      'pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo ' +
	      'pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult ' +
	      'pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend ' +
	      'polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal ' +
	      'polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge ' +
	      'polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge ' +
	      'polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet ' +
	      'polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet ' +
	      'polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection ' +
	      'polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge ' +
	      'polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet ' +
	      'polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix ' +
	      'polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut ' +
	      'polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet ' +
	      'polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge ' +
	      'polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex ' +
	      'polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection ' +
	      'polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection ' +
	      'polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint ' +
	      'polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate ' +
	      'polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge ' +
	      'polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing ' +
	      'polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet ' +
	      'polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace ' +
	      'popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer ' +
	      'projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx ' +
	      'propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd ' +
	      'python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection ' +
	      'radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl ' +
	      'readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference ' +
	      'referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE ' +
	      'registerPluginResource rehash reloadImage removeJoint removeMultiInstance ' +
	      'removePanelCategory rename renameAttr renameSelectionList renameUI render ' +
	      'renderGlobalsNode renderInfo renderLayerButton renderLayerParent ' +
	      'renderLayerPostProcess renderLayerUnparent renderManip renderPartition ' +
	      'renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor ' +
	      'renderWindowSelectContext renderer reorder reorderDeformers requires reroot ' +
	      'resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget ' +
	      'reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx ' +
	      'rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout ' +
	      'runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage ' +
	      'saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale ' +
	      'scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor ' +
	      'sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable ' +
	      'scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt ' +
	      'searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey ' +
	      'selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType ' +
	      'selectedNodes selectionConnection separator setAttr setAttrEnumResource ' +
	      'setAttrMapping setAttrNiceNameResource setConstraintRestPosition ' +
	      'setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr ' +
	      'setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe ' +
	      'setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag ' +
	      'setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject ' +
	      'setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets ' +
	      'shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare ' +
	      'shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField ' +
	      'shortNameOf showHelp showHidden showManipCtx showSelectionInTitle ' +
	      'showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface ' +
	      'size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep ' +
	      'snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound ' +
	      'soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort ' +
	      'spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString ' +
	      'startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp ' +
	      'stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex ' +
	      'stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex ' +
	      'stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString ' +
	      'stringToStringArray strip stripPrefixFromName stroke subdAutoProjection ' +
	      'subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV ' +
	      'subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror ' +
	      'subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease ' +
	      'subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring ' +
	      'surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton ' +
	      'symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext ' +
	      'texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext ' +
	      'texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text ' +
	      'textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList ' +
	      'textToShelf textureDisplacePlane textureHairColor texturePlacementContext ' +
	      'textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath ' +
	      'toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower ' +
	      'toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper ' +
	      'trace track trackCtx transferAttributes transformCompare transformLimits translator ' +
	      'trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence ' +
	      'twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit ' +
	      'unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink ' +
	      'uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane ' +
	      'viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex ' +
	      'waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire ' +
	      'wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform',
	    illegal: '</',
	    contains: [
	      hljs.C_NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      { // eats variables
	        begin: '[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)'
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };
	};

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      'module use_module import_module include_module end_module initialise ' +
	      'mutable initialize finalize finalise interface implementation pred ' +
	      'mode func type inst solver any_pred any_func is semidet det nondet ' +
	      'multi erroneous failure cc_nondet cc_multi typeclass instance where ' +
	      'pragma promise external trace atomic or_else require_complete_switch ' +
	      'require_det require_semidet require_multi require_nondet ' +
	      'require_cc_multi require_cc_nondet require_erroneous require_failure',
	    meta:
	      // pragma
	      'inline no_inline type_spec source_file fact_table obsolete memo ' +
	      'loop_check minimal_model terminates does_not_terminate ' +
	      'check_termination promise_equivalent_clauses ' +
	      // preprocessor
	      'foreign_proc foreign_decl foreign_code foreign_type ' +
	      'foreign_import_module foreign_export_enum foreign_export ' +
	      'foreign_enum may_call_mercury will_not_call_mercury thread_safe ' +
	      'not_thread_safe maybe_thread_safe promise_pure promise_semipure ' +
	      'tabled_for_io local untrailed trailed attach_to_io_state ' +
	      'can_pass_as_mercury_type stable will_not_throw_exception ' +
	      'may_modify_trail will_not_modify_trail may_duplicate ' +
	      'may_not_duplicate affects_liveness does_not_affect_liveness ' +
	      'doesnt_affect_liveness no_sharing unknown_sharing sharing',
	    built_in:
	      'some all not if then else true fail false try catch catch_any ' +
	      'semidet_true semidet_false semidet_fail impure_true impure semipure'
	  };

	  var COMMENT = hljs.COMMENT('%', '$');

	  var NUMCODE = {
	    className: 'number',
	    begin: "0'.\\|0[box][0-9a-fA-F]*"
	  };

	  var ATOM = hljs.inherit(hljs.APOS_STRING_MODE, {relevance: 0});
	  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {relevance: 0});
	  var STRING_FMT = {
	    className: 'subst',
	    begin: '\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]',
	    relevance: 0
	  };
	  STRING.contains.push(STRING_FMT);

	  var IMPLICATION = {
	    className: 'built_in',
	    variants: [
	      {begin: '<=>'},
	      {begin: '<=', relevance: 0},
	      {begin: '=>', relevance: 0},
	      {begin: '/\\\\'},
	      {begin: '\\\\/'}
	    ]
	  };

	  var HEAD_BODY_CONJUNCTION = {
	    className: 'built_in',
	    variants: [
	      {begin: ':-\\|-->'},
	      {begin: '=', relevance: 0}
	    ]
	  };

	  return {
	    aliases: ['m', 'moo'],
	    keywords: KEYWORDS,
	    contains: [
	      IMPLICATION,
	      HEAD_BODY_CONJUNCTION,
	      COMMENT,
	      hljs.C_BLOCK_COMMENT_MODE,
	      NUMCODE,
	      hljs.NUMBER_MODE,
	      ATOM,
	      STRING,
	      {begin: /:-/} // relevance booster
	    ]
	  };
	};

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	    //local labels: %?[FB]?[AT]?\d{1,2}\w+
	  return {
	    case_insensitive: true,
	    aliases: ['mips'],
	    lexemes: '\\.?' + hljs.IDENT_RE,
	    keywords: {
	      meta:
	        //GNU preprocs
	        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ',
	      built_in:
	        '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 ' + // integer registers
	        '$16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 ' + // integer registers
	        'zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 ' + // integer register aliases
	        't0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 ' + // integer register aliases
	        'k0 k1 gp sp fp ra ' + // integer register aliases
	        '$f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 ' + // floating-point registers
	        '$f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 ' + // floating-point registers
	        'Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi ' + // Coprocessor 0 registers
	        'HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId ' + // Coprocessor 0 registers
	        'EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ' + // Coprocessor 0 registers
	        'ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt ' // Coprocessor 0 registers
	    },
	    contains: [
	      {
	        className: 'keyword',
	        begin: '\\b('+     //mnemonics
	            // 32-bit integer instructions
	            'addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|' +
	            'bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(\.hb)?|jr(\.hb)?|lbu?|lhu?|' +
	            'll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|' +
	            'multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|' +
	            'srlv?|subu?|sw[lr]?|xori?|wsbh|' +
	            // floating-point instructions
	            'abs\.[sd]|add\.[sd]|alnv.ps|bc1[ft]l?|' +
	            'c\.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et])\.[sd]|' +
	            '(ceil|floor|round|trunc)\.[lw]\.[sd]|cfc1|cvt\.d\.[lsw]|' +
	            'cvt\.l\.[dsw]|cvt\.ps\.s|cvt\.s\.[dlw]|cvt\.s\.p[lu]|cvt\.w\.[dls]|' +
	            'div\.[ds]|ldx?c1|luxc1|lwx?c1|madd\.[sd]|mfc1|mov[fntz]?\.[ds]|' +
	            'msub\.[sd]|mth?c1|mul\.[ds]|neg\.[ds]|nmadd\.[ds]|nmsub\.[ds]|' +
	            'p[lu][lu]\.ps|recip\.fmt|r?sqrt\.[ds]|sdx?c1|sub\.[ds]|suxc1|' +
	            'swx?c1|' +
	            // system control instructions
	            'break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|' +
	            'rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|' +
	            'tlti?u?|tnei?|wait|wrpgpr'+
	        ')',
	        end: '\\s'
	      },
	      hljs.COMMENT('[;#]', '$'),
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'',
	        end: '[^\\\\]\'',
	        relevance: 0
	      },
	      {
	        className: 'title',
	        begin: '\\|', end: '\\|',
	        illegal: '\\n',
	        relevance: 0
	      },
	      {
	        className: 'number',
	        variants: [
	            {begin: '0x[0-9a-f]+'}, //hex
	            {begin: '\\b-?\\d+'}           //bare number
	        ],
	        relevance: 0
	      },
	      {
	        className: 'symbol',
	        variants: [
	            {begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'}, //GNU MIPS syntax
	            {begin: '^\\s*[0-9]+:'}, // numbered local labels
	            {begin: '[0-9]+[bf]' }  // number local label reference (backwards, forwards)
	        ],
	        relevance: 0
	      }
	    ],
	    illegal: '\/'
	  };
	};

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords:
	      'environ vocabularies notations constructors definitions ' +
	      'registrations theorems schemes requirements begin end definition ' +
	      'registration cluster existence pred func defpred deffunc theorem ' +
	      'proof let take assume then thus hence ex for st holds consider ' +
	      'reconsider such that and in provided of as from be being by means ' +
	      'equals implies iff redefine define now not or attr is mode ' +
	      'suppose per cases set thesis contradiction scheme reserve struct ' +
	      'correctness compatibility coherence symmetry assymetry ' +
	      'reflexivity irreflexivity connectedness uniqueness commutativity ' +
	      'idempotence involutiveness projectivity',
	    contains: [
	      hljs.COMMENT('::', '$')
	    ]
	  };
	};

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var PERL_KEYWORDS = 'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ' +
	    'ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime ' +
	    'readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq' +
	    'fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent ' +
	    'shutdown dump chomp connect getsockname die socketpair close flock exists index shmget' +
	    'sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr ' +
	    'unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 ' +
	    'getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline ' +
	    'endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand ' +
	    'mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink ' +
	    'getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr ' +
	    'untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link ' +
	    'getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller ' +
	    'lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and ' +
	    'sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 ' +
	    'chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach ' +
	    'tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir' +
	    'ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe ' +
	    'atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when';
	  var SUBST = {
	    className: 'subst',
	    begin: '[$@]\\{', end: '\\}',
	    keywords: PERL_KEYWORDS
	  };
	  var METHOD = {
	    begin: '->{', end: '}'
	    // contains defined later
	  };
	  var VAR = {
	    variants: [
	      {begin: /\$\d/},
	      {begin: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},
	      {begin: /[\$%@][^\s\w{]/, relevance: 0}
	    ]
	  };
	  var STRING_CONTAINS = [hljs.BACKSLASH_ESCAPE, SUBST, VAR];
	  var PERL_DEFAULT_CONTAINS = [
	    VAR,
	    hljs.HASH_COMMENT_MODE,
	    hljs.COMMENT(
	      '^\\=\\w',
	      '\\=cut',
	      {
	        endsWithParent: true
	      }
	    ),
	    METHOD,
	    {
	      className: 'string',
	      contains: STRING_CONTAINS,
	      variants: [
	        {
	          begin: 'q[qwxr]?\\s*\\(', end: '\\)',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\[', end: '\\]',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\{', end: '\\}',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\|', end: '\\|',
	          relevance: 5
	        },
	        {
	          begin: 'q[qwxr]?\\s*\\<', end: '\\>',
	          relevance: 5
	        },
	        {
	          begin: 'qw\\s+q', end: 'q',
	          relevance: 5
	        },
	        {
	          begin: '\'', end: '\'',
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: '"', end: '"'
	        },
	        {
	          begin: '`', end: '`',
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: '{\\w+}',
	          contains: [],
	          relevance: 0
	        },
	        {
	          begin: '\-?\\w+\\s*\\=\\>',
	          contains: [],
	          relevance: 0
	        }
	      ]
	    },
	    {
	      className: 'number',
	      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	      relevance: 0
	    },
	    { // regexp container
	      begin: '(\\/\\/|' + hljs.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
	      keywords: 'split return print reverse grep',
	      relevance: 0,
	      contains: [
	        hljs.HASH_COMMENT_MODE,
	        {
	          className: 'regexp',
	          begin: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
	          relevance: 10
	        },
	        {
	          className: 'regexp',
	          begin: '(m|qr)?/', end: '/[a-z]*',
	          contains: [hljs.BACKSLASH_ESCAPE],
	          relevance: 0 // allows empty "//" which is a common comment delimiter in other languages
	        }
	      ]
	    },
	    {
	      className: 'function',
	      beginKeywords: 'sub', end: '(\\s*\\(.*?\\))?[;{]', excludeEnd: true,
	      relevance: 5,
	      contains: [hljs.TITLE_MODE]
	    },
	    {
	      begin: '-\\w\\b',
	      relevance: 0
	    },
	    {
	      begin: "^__DATA__$",
	      end: "^__END__$",
	      subLanguage: 'mojolicious',
	      contains: [
	        {
	            begin: "^@@.*",
	            end: "$",
	            className: "comment"
	        }
	      ]
	    }
	  ];
	  SUBST.contains = PERL_DEFAULT_CONTAINS;
	  METHOD.contains = PERL_DEFAULT_CONTAINS;

	  return {
	    aliases: ['pl', 'pm'],
	    lexemes: /[\w\.]+/,
	    keywords: PERL_KEYWORDS,
	    contains: PERL_DEFAULT_CONTAINS
	  };
	};

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    subLanguage: 'xml',
	    contains: [
	      {
	        className: 'meta',
	        begin: '^__(END|DATA)__$'
	      },
	    // mojolicious line
	      {
	        begin: "^\\s*%{1,2}={0,2}", end: '$',
	        subLanguage: 'perl'
	      },
	    // mojolicious block
	      {
	        begin: "<%{1,2}={0,2}",
	        end: "={0,1}%>",
	        subLanguage: 'perl',
	        excludeBegin: true,
	        excludeEnd: true
	      }
	    ]
	  };
	};

/***/ }),
/* 128 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var NUMBER = {
	    className: 'number', relevance: 0,
	    variants: [
	      {
	        begin: '[$][a-fA-F0-9]+'
	      },
	      hljs.NUMBER_MODE
	    ]
	  };

	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword: 'public private property continue exit extern new try catch ' +
	        'eachin not abstract final select case default const local global field ' +
	        'end if then else elseif endif while wend repeat until forever for ' +
	        'to step next return module inline throw import',

	      built_in: 'DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil ' +
	        'Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI',

	      literal: 'true false null and or shl shr mod'
	    },
	    illegal: /\/\*/,
	    contains: [
	      hljs.COMMENT('#rem', '#end'),
	      hljs.COMMENT(
	        "'",
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      {
	        className: 'function',
	        beginKeywords: 'function method', end: '[(=:]|$',
	        illegal: /\n/,
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '$',
	        contains: [
	          {
	            beginKeywords: 'extends implements'
	          },
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        className: 'built_in',
	        begin: '\\b(self|super)\\b'
	      },
	      {
	        className: 'meta',
	        begin: '\\s*#', end: '$',
	        keywords: {'meta-keyword': 'if else elseif endif end then'}
	      },
	      {
	        className: 'meta',
	        begin: '^\\s*strict\\b'
	      },
	      {
	        beginKeywords: 'alias', end: '=',
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      hljs.QUOTE_STRING_MODE,
	      NUMBER
	    ]
	  }
	};

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      // Moonscript keywords
	      'if then not for in while do return else elseif break continue switch and or ' +
	      'unless when class extends super local import export from using',
	    literal:
	      'true false nil',
	    built_in:
	      '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load ' +
	      'loadfile loadstring module next pairs pcall print rawequal rawget rawset require ' +
	      'select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug ' +
	      'io math os package string table'
	  };
	  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
	  var SUBST = {
	    className: 'subst',
	    begin: /#\{/, end: /}/,
	    keywords: KEYWORDS
	  };
	  var EXPRESSIONS = [
	    hljs.inherit(hljs.C_NUMBER_MODE,
	      {starts: {end: '(\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp
	    {
	      className: 'string',
	      variants: [
	        {
	          begin: /'/, end: /'/,
	          contains: [hljs.BACKSLASH_ESCAPE]
	        },
	        {
	          begin: /"/, end: /"/,
	          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	        }
	      ]
	    },
	    {
	      className: 'built_in',
	      begin: '@__' + hljs.IDENT_RE
	    },
	    {
	      begin: '@' + hljs.IDENT_RE // relevance booster on par with CoffeeScript
	    },
	    {
	      begin: hljs.IDENT_RE + '\\\\' + hljs.IDENT_RE // inst\method
	    }
	  ];
	  SUBST.contains = EXPRESSIONS;

	  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
	  var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
	  var PARAMS = {
	    className: 'params',
	    begin: '\\([^\\(]', returnBegin: true,
	    /* We need another contained nameless mode to not have every nested
	    pair of parens to be called "params" */
	    contains: [{
	      begin: /\(/, end: /\)/,
	      keywords: KEYWORDS,
	      contains: ['self'].concat(EXPRESSIONS)
	    }]
	  };

	  return {
	    aliases: ['moon'],
	    keywords: KEYWORDS,
	    illegal: /\/\*/,
	    contains: EXPRESSIONS.concat([
	      hljs.COMMENT('--', '$'),
	      {
	        className: 'function',  // function: -> =>
	        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE, end: '[-=]>',
	        returnBegin: true,
	        contains: [TITLE, PARAMS]
	      },
	      {
	        begin: /[\(,:=]\s*/, // anonymous function start
	        relevance: 0,
	        contains: [
	          {
	            className: 'function',
	            begin: PARAMS_RE, end: '[-=]>',
	            returnBegin: true,
	            contains: [PARAMS]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class',
	        end: '$',
	        illegal: /[:="\[\]]/,
	        contains: [
	          {
	            beginKeywords: 'extends',
	            endsWithParent: true,
	            illegal: /[:="\[\]]/,
	            contains: [TITLE]
	          },
	          TITLE
	        ]
	      },
	      {
	        className: 'name',    // table
	        begin: JS_IDENT_RE + ':', end: ':',
	        returnBegin: true, returnEnd: true,
	        relevance: 0
	      }
	    ])
	  };
	};

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    contains: [
	      {
	        beginKeywords:
	          'build create index delete drop explain infer|10 insert merge prepare select update upsert|10',
	        end: /;/, endsWithParent: true,
	        keywords: {
	          // Taken from http://developer.couchbase.com/documentation/server/current/n1ql/n1ql-language-reference/reservedwords.html
	          keyword:
	            'all alter analyze and any array as asc begin between binary boolean break bucket build by call ' +
	            'case cast cluster collate collection commit connect continue correlate cover create database ' +
	            'dataset datastore declare decrement delete derived desc describe distinct do drop each element ' +
	            'else end every except exclude execute exists explain fetch first flatten for force from ' +
	            'function grant group gsi having if ignore ilike in include increment index infer inline inner ' +
	            'insert intersect into is join key keys keyspace known last left let letting like limit lsm map ' +
	            'mapping matched materialized merge minus namespace nest not number object offset on ' +
	            'option or order outer over parse partition password path pool prepare primary private privilege ' +
	            'procedure public raw realm reduce rename return returning revoke right role rollback satisfies ' +
	            'schema select self semi set show some start statistics string system then to transaction trigger ' +
	            'truncate under union unique unknown unnest unset update upsert use user using validate value ' +
	            'valued values via view when where while with within work xor',
	          // Taken from http://developer.couchbase.com/documentation/server/4.5/n1ql/n1ql-language-reference/literals.html
	          literal:
	            'true false null missing|5',
	          // Taken from http://developer.couchbase.com/documentation/server/4.5/n1ql/n1ql-language-reference/functions.html
	          built_in:
	            'array_agg array_append array_concat array_contains array_count array_distinct array_ifnull array_length ' +
	            'array_max array_min array_position array_prepend array_put array_range array_remove array_repeat array_replace ' +
	            'array_reverse array_sort array_sum avg count max min sum greatest least ifmissing ifmissingornull ifnull ' +
	            'missingif nullif ifinf ifnan ifnanorinf naninf neginfif posinfif clock_millis clock_str date_add_millis ' +
	            'date_add_str date_diff_millis date_diff_str date_part_millis date_part_str date_trunc_millis date_trunc_str ' +
	            'duration_to_str millis str_to_millis millis_to_str millis_to_utc millis_to_zone_name now_millis now_str ' +
	            'str_to_duration str_to_utc str_to_zone_name decode_json encode_json encoded_size poly_length base64 base64_encode ' +
	            'base64_decode meta uuid abs acos asin atan atan2 ceil cos degrees e exp ln log floor pi power radians random ' +
	            'round sign sin sqrt tan trunc object_length object_names object_pairs object_inner_pairs object_values ' +
	            'object_inner_values object_add object_put object_remove object_unwrap regexp_contains regexp_like regexp_position ' +
	            'regexp_replace contains initcap length lower ltrim position repeat replace rtrim split substr title trim upper ' +
	            'isarray isatom isboolean isnumber isobject isstring type toarray toatom toboolean tonumber toobject tostring'
	        },
	        contains: [
	          {
	            className: 'string',
	            begin: '\'', end: '\'',
	            contains: [hljs.BACKSLASH_ESCAPE],
	            relevance: 0
	          },
	          {
	            className: 'string',
	            begin: '"', end: '"',
	            contains: [hljs.BACKSLASH_ESCAPE],
	            relevance: 0
	          },
	          {
	            className: 'symbol',
	            begin: '`', end: '`',
	            contains: [hljs.BACKSLASH_ESCAPE],
	            relevance: 2
	          },
	          hljs.C_NUMBER_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };
	};

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$\d+/},
	      {begin: /\$\{/, end: /}/},
	      {begin: '[\\$\\@]' + hljs.UNDERSCORE_IDENT_RE}
	    ]
	  };
	  var DEFAULT = {
	    endsWithParent: true,
	    lexemes: '[a-z/_]+',
	    keywords: {
	      literal:
	        'on off yes no true false none blocked debug info notice warn error crit ' +
	        'select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
	    },
	    relevance: 0,
	    illegal: '=>',
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        className: 'string',
	        contains: [hljs.BACKSLASH_ESCAPE, VAR],
	        variants: [
	          {begin: /"/, end: /"/},
	          {begin: /'/, end: /'/}
	        ]
	      },
	      // this swallows entire URLs to avoid detecting numbers within
	      {
	        begin: '([a-z]+):/', end: '\\s', endsWithParent: true, excludeEnd: true,
	        contains: [VAR]
	      },
	      {
	        className: 'regexp',
	        contains: [hljs.BACKSLASH_ESCAPE, VAR],
	        variants: [
	          {begin: "\\s\\^", end: "\\s|{|;", returnEnd: true},
	          // regexp locations (~, ~*)
	          {begin: "~\\*?\\s+", end: "\\s|{|;", returnEnd: true},
	          // *.example.com
	          {begin: "\\*(\\.[a-z\\-]+)+"},
	          // sub.example.*
	          {begin: "([a-z\\-]+\\.)+\\*"}
	        ]
	      },
	      // IP
	      {
	        className: 'number',
	        begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
	      },
	      // units
	      {
	        className: 'number',
	        begin: '\\b\\d+[kKmMgGdshdwy]*\\b',
	        relevance: 0
	      },
	      VAR
	    ]
	  };

	  return {
	    aliases: ['nginxconf'],
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        begin: hljs.UNDERSCORE_IDENT_RE + '\\s+{', returnBegin: true,
	        end: '{',
	        contains: [
	          {
	            className: 'section',
	            begin: hljs.UNDERSCORE_IDENT_RE
	          }
	        ],
	        relevance: 0
	      },
	      {
	        begin: hljs.UNDERSCORE_IDENT_RE + '\\s', end: ';|{', returnBegin: true,
	        contains: [
	          {
	            className: 'attribute',
	            begin: hljs.UNDERSCORE_IDENT_RE,
	            starts: DEFAULT
	          }
	        ],
	        relevance: 0
	      }
	    ],
	    illegal: '[^\\s\\}]'
	  };
	};

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['nim'],
	    keywords: {
	      keyword:
	        'addr and as asm bind block break case cast const continue converter ' +
	        'discard distinct div do elif else end enum except export finally ' +
	        'for from generic if import in include interface is isnot iterator ' +
	        'let macro method mixin mod nil not notin object of or out proc ptr ' +
	        'raise ref return shl shr static template try tuple type using var ' +
	        'when while with without xor yield',
	      literal:
	        'shared guarded stdin stdout stderr result true false',
	      built_in:
	        'int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float ' +
	        'float32 float64 bool char string cstring pointer expr stmt void ' +
	        'auto any range array openarray varargs seq set clong culong cchar ' +
	        'cschar cshort cint csize clonglong cfloat cdouble clongdouble ' +
	        'cuchar cushort cuint culonglong cstringarray semistatic'
	    },
	    contains: [ {
	        className: 'meta', // Actually pragma
	        begin: /{\./,
	        end: /\.}/,
	        relevance: 10
	      }, {
	        className: 'string',
	        begin: /[a-zA-Z]\w*"/,
	        end: /"/,
	        contains: [{begin: /""/}]
	      }, {
	        className: 'string',
	        begin: /([a-zA-Z]\w*)?"""/,
	        end: /"""/
	      },
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'type',
	        begin: /\b[A-Z]\w+\b/,
	        relevance: 0
	      }, {
	        className: 'number',
	        relevance: 0,
	        variants: [
	          {begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/},
	          {begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/},
	          {begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/},
	          {begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/}
	        ]
	      },
	      hljs.HASH_COMMENT_MODE
	    ]
	  }
	};

/***/ }),
/* 133 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var NIX_KEYWORDS = {
	    keyword:
	      'rec with let in inherit assert if else then',
	    literal:
	      'true false or and null',
	    built_in:
	      'import abort baseNameOf dirOf isNull builtins map removeAttrs throw ' +
	      'toString derivation'
	  };
	  var ANTIQUOTE = {
	    className: 'subst',
	    begin: /\$\{/,
	    end: /}/,
	    keywords: NIX_KEYWORDS
	  };
	  var ATTRS = {
	    begin: /[a-zA-Z0-9-_]+(\s*=)/, returnBegin: true,
	    relevance: 0,
	    contains: [
	      {
	        className: 'attr',
	        begin: /\S+/
	      }
	    ]
	  };
	  var STRING = {
	    className: 'string',
	    contains: [ANTIQUOTE],
	    variants: [
	      {begin: "''", end: "''"},
	      {begin: '"', end: '"'}
	    ]
	  };
	  var EXPRESSIONS = [
	    hljs.NUMBER_MODE,
	    hljs.HASH_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    STRING,
	    ATTRS
	  ];
	  ANTIQUOTE.contains = EXPRESSIONS;
	  return {
	    aliases: ["nixos"],
	    keywords: NIX_KEYWORDS,
	    contains: EXPRESSIONS
	  };
	};

/***/ }),
/* 134 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var CONSTANTS = {
	    className: 'variable',
	    begin: /\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)/
	  };

	  var DEFINES = {
	    // ${defines}
	    className: 'variable',
	    begin: /\$+{[\w\.:-]+}/
	  };

	  var VARIABLES = {
	    // $variables
	    className: 'variable',
	    begin: /\$+\w+/,
	    illegal: /\(\){}/
	  };

	  var LANGUAGES = {
	    // $(language_strings)
	    className: 'variable',
	    begin: /\$+\([\w\^\.:-]+\)/
	  };

	  var PARAMETERS = {
	    // command parameters
	    className: 'params',
	    begin: '(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)'
	  };

	  var COMPILER = {
	    // !compiler_flags
	    className: 'keyword',
	    begin: /\!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)/
	  };

	  var METACHARS = {
	    // $\n, $\r, $\t, $$
	    className: 'subst',
	    begin: /\$(\\[nrt]|\$)/
	  };

	  var PLUGINS = {
	    // plug::ins
	    className: 'class',
	    begin: /\w+\:\:\w+/
	  };

	    var STRING = {
	      className: 'string',
	      variants: [
	        {
	          begin: '"', end: '"'
	        },
	        {
	          begin: '\'', end: '\''
	        },
	        {
	          begin: '`', end: '`'
	        }
	      ],
	      illegal: /\n/,
	      contains: [
	        METACHARS,
	        CONSTANTS,
	        DEFINES,
	        VARIABLES,
	        LANGUAGES
	      ]
	  };

	  return {
	    case_insensitive: false,
	    keywords: {
	      keyword:
	      'Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileSeek FileWrite FileWriteByte FileWriteUTF16LE FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI FunctionEnd GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText IntCmp IntCmpU IntFmt IntOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PageExEnd Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionEnd SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionGroupEnd SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegStr WriteUninstaller XPStyle',
	      literal:
	      'admin all auto both bottom bzip2 colored components current custom directory false force hide highest ifdiff ifnewer instfiles lastused leave left license listonly lzma nevershow none normal notset off on open print right show silent silentlog smooth textonly top true try un.components un.custom un.directory un.instfiles un.license uninstConfirm user Win10 Win7 Win8 WinVista zlib'
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.COMMENT(
	        ';',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      {
	        className: 'function',
	        beginKeywords: 'Function PageEx Section SectionGroup', end: '$'
	      },
	      STRING,
	      COMPILER,
	      DEFINES,
	      VARIABLES,
	      LANGUAGES,
	      PARAMETERS,
	      PLUGINS,
	      hljs.NUMBER_MODE
	    ]
	  };
	};

/***/ }),
/* 135 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var API_CLASS = {
	    className: 'built_in',
	    begin: '\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+',
	  };
	  var OBJC_KEYWORDS = {
	    keyword:
	      'int float while char export sizeof typedef const struct for union ' +
	      'unsigned long volatile static bool mutable if do return goto void ' +
	      'enum else break extern asm case short default double register explicit ' +
	      'signed typename this switch continue wchar_t inline readonly assign ' +
	      'readwrite self @synchronized id typeof ' +
	      'nonatomic super unichar IBOutlet IBAction strong weak copy ' +
	      'in out inout bycopy byref oneway __strong __weak __block __autoreleasing ' +
	      '@private @protected @public @try @property @end @throw @catch @finally ' +
	      '@autoreleasepool @synthesize @dynamic @selector @optional @required ' +
	      '@encode @package @import @defs @compatibility_alias ' +
	      '__bridge __bridge_transfer __bridge_retained __bridge_retain ' +
	      '__covariant __contravariant __kindof ' +
	      '_Nonnull _Nullable _Null_unspecified ' +
	      '__FUNCTION__ __PRETTY_FUNCTION__ __attribute__ ' +
	      'getter setter retain unsafe_unretained ' +
	      'nonnull nullable null_unspecified null_resettable class instancetype ' +
	      'NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER ' +
	      'NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED ' +
	      'NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE ' +
	      'NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END ' +
	      'NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW ' +
	      'NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN',
	    literal:
	      'false true FALSE TRUE nil YES NO NULL',
	    built_in:
	      'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
	  };
	  var LEXEMES = /[a-zA-Z@][a-zA-Z0-9_]*/;
	  var CLASS_KEYWORDS = '@interface @class @protocol @implementation';
	  return {
	    aliases: ['mm', 'objc', 'obj-c'],
	    keywords: OBJC_KEYWORDS,
	    lexemes: LEXEMES,
	    illegal: '</',
	    contains: [
	      API_CLASS,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        variants: [
	          {
	            begin: '@"', end: '"',
	            illegal: '\\n',
	            contains: [hljs.BACKSLASH_ESCAPE]
	          },
	          {
	            begin: '\'', end: '[^\\\\]\'',
	            illegal: '[^\\\\][^\']'
	          }
	        ]
	      },
	      {
	        className: 'meta',
	        begin: '#',
	        end: '$',
	        contains: [
	          {
	            className: 'meta-string',
	            variants: [
	              { begin: '\"', end: '\"' },
	              { begin: '<', end: '>' }
	            ]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        begin: '(' + CLASS_KEYWORDS.split(' ').join('|') + ')\\b', end: '({|$)', excludeEnd: true,
	        keywords: CLASS_KEYWORDS, lexemes: LEXEMES,
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        begin: '\\.'+hljs.UNDERSCORE_IDENT_RE,
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  /* missing support for heredoc-like string (OCaml 4.0.2+) */
	  return {
	    aliases: ['ml'],
	    keywords: {
	      keyword:
	        'and as assert asr begin class constraint do done downto else end ' +
	        'exception external for fun function functor if in include ' +
	        'inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method ' +
	        'mod module mutable new object of open! open or private rec sig struct ' +
	        'then to try type val! val virtual when while with ' +
	        /* camlp4 */
	        'parser value',
	      built_in:
	        /* built-in types */
	        'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit ' +
	        /* (some) types in Pervasives */
	        'in_channel out_channel ref',
	      literal:
	        'true false'
	    },
	    illegal: /\/\/|>>/,
	    lexemes: '[a-z_]\\w*!?',
	    contains: [
	      {
	        className: 'literal',
	        begin: '\\[(\\|\\|)?\\]|\\(\\)',
	        relevance: 0
	      },
	      hljs.COMMENT(
	        '\\(\\*',
	        '\\*\\)',
	        {
	          contains: ['self']
	        }
	      ),
	      { /* type variable */
	        className: 'symbol',
	        begin: '\'[A-Za-z_](?!\')[\\w\']*'
	        /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
	      },
	      { /* polymorphic variant */
	        className: 'type',
	        begin: '`[A-Z][\\w\']*'
	      },
	      { /* module or constructor */
	        className: 'type',
	        begin: '\\b[A-Z][\\w\']*',
	        relevance: 0
	      },
	      { /* don't color identifiers, but safely catch all identifiers with '*/
	        begin: '[a-z_]\\w*\'[\\w\']*', relevance: 0
	      },
	      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      {
	        className: 'number',
	        begin:
	          '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
	          '0[oO][0-7_]+[Lln]?|' +
	          '0[bB][01_]+[Lln]?|' +
	          '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
	        relevance: 0
	      },
	      {
	        begin: /[-=]>/ // relevance booster
	      }
	    ]
	  }
	};

/***/ }),
/* 137 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
		var SPECIAL_VARS = {
			className: 'keyword',
			begin: '\\$(f[asn]|t|vp[rtd]|children)'
		},
		LITERALS = {
			className: 'literal',
			begin: 'false|true|PI|undef'
		},
		NUMBERS = {
			className: 'number',
			begin: '\\b\\d+(\\.\\d+)?(e-?\\d+)?', //adds 1e5, 1e-10
			relevance: 0
		},
		STRING = hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal: null}),
		PREPRO = {
			className: 'meta',
			keywords: {'meta-keyword': 'include use'},
			begin: 'include|use <',
			end: '>'
		},
		PARAMS = {
			className: 'params',
			begin: '\\(', end: '\\)',
			contains: ['self', NUMBERS, STRING, SPECIAL_VARS, LITERALS]
		},
		MODIFIERS = {
			begin: '[*!#%]',
			relevance: 0
		},
		FUNCTIONS = {
			className: 'function',
			beginKeywords: 'module function',
			end: '\\=|\\{',
			contains: [PARAMS, hljs.UNDERSCORE_TITLE_MODE]
		};

		return {
			aliases: ['scad'],
			keywords: {
				keyword: 'function module include use for intersection_for if else \\%',
				literal: 'false true PI undef',
				built_in: 'circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign'
			},
			contains: [
				hljs.C_LINE_COMMENT_MODE,
				hljs.C_BLOCK_COMMENT_MODE,
				NUMBERS,
				PREPRO,
				STRING,
				SPECIAL_VARS,
				MODIFIERS,
				FUNCTIONS
			]
		}
	};

/***/ }),
/* 138 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var OXYGENE_KEYWORDS = 'abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue '+
	    'create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false '+
	    'final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited '+
	    'inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of '+
	    'old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly '+
	    'record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple '+
	    'type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal '+
	    'register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained';
	  var CURLY_COMMENT =  hljs.COMMENT(
	    '{',
	    '}',
	    {
	      relevance: 0
	    }
	  );
	  var PAREN_COMMENT = hljs.COMMENT(
	    '\\(\\*',
	    '\\*\\)',
	    {
	      relevance: 10
	    }
	  );
	  var STRING = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    contains: [{begin: '\'\''}]
	  };
	  var CHAR_STRING = {
	    className: 'string', begin: '(#\\d+)+'
	  };
	  var FUNCTION = {
	    className: 'function',
	    beginKeywords: 'function constructor destructor procedure method', end: '[:;]',
	    keywords: 'function constructor|10 destructor|10 procedure|10 method|10',
	    contains: [
	      hljs.TITLE_MODE,
	      {
	        className: 'params',
	        begin: '\\(', end: '\\)',
	        keywords: OXYGENE_KEYWORDS,
	        contains: [STRING, CHAR_STRING]
	      },
	      CURLY_COMMENT, PAREN_COMMENT
	    ]
	  };
	  return {
	    case_insensitive: true,
	    lexemes: /\.?\w+/,
	    keywords: OXYGENE_KEYWORDS,
	    illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
	    contains: [
	      CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
	      STRING, CHAR_STRING,
	      hljs.NUMBER_MODE,
	      FUNCTION,
	      {
	        className: 'class',
	        begin: '=\\bclass\\b', end: 'end;',
	        keywords: OXYGENE_KEYWORDS,
	        contains: [
	          STRING, CHAR_STRING,
	          CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
	          FUNCTION
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 139 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var CURLY_SUBCOMMENT = hljs.COMMENT(
	    '{',
	    '}',
	    {
	      contains: ['self']
	    }
	  );
	  return {
	    subLanguage: 'xml', relevance: 0,
	    contains: [
	      hljs.COMMENT('^#', '$'),
	      hljs.COMMENT(
	        '\\^rem{',
	        '}',
	        {
	          relevance: 10,
	          contains: [
	            CURLY_SUBCOMMENT
	          ]
	        }
	      ),
	      {
	        className: 'meta',
	        begin: '^@(?:BASE|USE|CLASS|OPTIONS)$',
	        relevance: 10
	      },
	      {
	        className: 'title',
	        begin: '@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$'
	      },
	      {
	        className: 'variable',
	        begin: '\\$\\{?[\\w\\-\\.\\:]+\\}?'
	      },
	      {
	        className: 'keyword',
	        begin: '\\^[\\w\\-\\.\\:]+'
	      },
	      {
	        className: 'number',
	        begin: '\\^#[0-9a-fA-F]+'
	      },
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var MACRO = {
	    className: 'variable',
	    begin: /\$[\w\d#@][\w\d_]*/
	  };
	  var TABLE = {
	    className: 'variable',
	    begin: /<(?!\/)/, end: />/
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    begin: /"/, end: /"/
	  };

	  return {
	    aliases: ['pf.conf'],
	    lexemes: /[a-z0-9_<>-]+/,
	    keywords: {
	      built_in: /* block match pass are "actions" in pf.conf(5), the rest are
	                 * lexically similar top-level commands.
	                 */
	        'block match pass load anchor|5 antispoof|10 set table',
	      keyword:
	        'in out log quick on rdomain inet inet6 proto from port os to route' +
	        'allow-opts divert-packet divert-reply divert-to flags group icmp-type' +
	        'icmp6-type label once probability recieved-on rtable prio queue' +
	        'tos tag tagged user keep fragment for os drop' +
	        'af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin' +
	        'source-hash static-port' +
	        'dup-to reply-to route-to' +
	        'parent bandwidth default min max qlimit' +
	        'block-policy debug fingerprints hostid limit loginterface optimization' +
	        'reassemble ruleset-optimization basic none profile skip state-defaults' +
	        'state-policy timeout' +
	        'const counters persist' +
	        'no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy' +
	        'source-track global rule max-src-nodes max-src-states max-src-conn' +
	        'max-src-conn-rate overload flush' +
	        'scrub|5 max-mss min-ttl no-df|10 random-id',
	      literal:
	        'all any no-route self urpf-failed egress|5 unknown'
	    },
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.NUMBER_MODE,
	      hljs.QUOTE_STRING_MODE,
	      MACRO,
	      TABLE
	    ]
	  };
	};

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var VARIABLE = {
	    begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
	  };
	  var PREPROCESSOR = {
	    className: 'meta', begin: /<\?(php)?|\?>/
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
	    variants: [
	      {
	        begin: 'b"', end: '"'
	      },
	      {
	        begin: 'b\'', end: '\''
	      },
	      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
	    ]
	  };
	  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
	  return {
	    aliases: ['php3', 'php4', 'php5', 'php6'],
	    case_insensitive: true,
	    keywords:
	      'and include_once list abstract global private echo interface as static endswitch ' +
	      'array null if endwhile or const for endforeach self var while isset public ' +
	      'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
	      'return parent clone use __CLASS__ __LINE__ else break print eval new ' +
	      'catch __METHOD__ case exception default die require __FUNCTION__ ' +
	      'enddeclare final try switch continue endfor endif declare unset true false ' +
	      'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +
	      'yield finally',
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.COMMENT('//', '$', {contains: [PREPROCESSOR]}),
	      hljs.COMMENT(
	        '/\\*',
	        '\\*/',
	        {
	          contains: [
	            {
	              className: 'doctag',
	              begin: '@[A-Za-z]+'
	            }
	          ]
	        }
	      ),
	      hljs.COMMENT(
	        '__halt_compiler.+?;',
	        false,
	        {
	          endsWithParent: true,
	          keywords: '__halt_compiler',
	          lexemes: hljs.UNDERSCORE_IDENT_RE
	        }
	      ),
	      {
	        className: 'string',
	        begin: /<<<['"]?\w+['"]?$/, end: /^\w+;?$/,
	        contains: [
	          hljs.BACKSLASH_ESCAPE,
	          {
	            className: 'subst',
	            variants: [
	              {begin: /\$\w+/},
	              {begin: /\{\$/, end: /\}/}
	            ]
	          }
	        ]
	      },
	      PREPROCESSOR,
	      {
	        className: 'keyword', begin: /\$this\b/
	      },
	      VARIABLE,
	      {
	        // swallow composed identifiers to avoid parsing them as keywords
	        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
	        illegal: '\\$|\\[|%',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              'self',
	              VARIABLE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              STRING,
	              NUMBER
	            ]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        illegal: /[:\(\$"]/,
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        beginKeywords: 'namespace', end: ';',
	        illegal: /[\.']/,
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        beginKeywords: 'use', end: ';',
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        begin: '=>' // No markup, just a relevance booster
	      },
	      STRING,
	      NUMBER
	    ]
	  };
	};

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      'actor addressof and as be break class compile_error compile_intrinsic' +
	      'consume continue delegate digestof do else elseif embed end error' +
	      'for fun if ifdef in interface is isnt lambda let match new not object' +
	      'or primitive recover repeat return struct then trait try type until ' +
	      'use var where while with xor',
	    meta:
	      'iso val tag trn box ref',
	    literal:
	      'this false true'
	  };

	  var TRIPLE_QUOTE_STRING_MODE = {
	    className: 'string',
	    begin: '"""', end: '"""',
	    relevance: 10
	  };

	  var QUOTE_STRING_MODE = {
	    className: 'string',
	    begin: '"', end: '"',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };

	  var SINGLE_QUOTE_CHAR_MODE = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    contains: [hljs.BACKSLASH_ESCAPE],
	    relevance: 0
	  };

	  var TYPE_NAME = {
	    className: 'type',
	    begin: '\\b_?[A-Z][\\w]*',
	    relevance: 0
	  };

	  var PRIMED_NAME = {
	    begin: hljs.IDENT_RE + '\'', relevance: 0
	  };

	  var CLASS = {
	    className: 'class',
	    beginKeywords: 'class actor', end: '$',
	    contains: [
	      hljs.TITLE_MODE,
	      hljs.C_LINE_COMMENT_MODE
	    ]
	  }

	  var FUNCTION = {
	    className: 'function',
	    beginKeywords: 'new fun', end: '=>',
	    contains: [
	      hljs.TITLE_MODE,
	      {
	        begin: /\(/, end: /\)/,
	        contains: [
	          TYPE_NAME,
	          PRIMED_NAME,
	          hljs.C_NUMBER_MODE,
	          hljs.C_BLOCK_COMMENT_MODE
	        ]
	      },
	      {
	        begin: /:/, endsWithParent: true,
	        contains: [TYPE_NAME]
	      },
	      hljs.C_LINE_COMMENT_MODE
	    ]
	  }

	  return {
	    keywords: KEYWORDS,
	    contains: [
	      CLASS,
	      FUNCTION,
	      TYPE_NAME,
	      TRIPLE_QUOTE_STRING_MODE,
	      QUOTE_STRING_MODE,
	      SINGLE_QUOTE_CHAR_MODE,
	      PRIMED_NAME,
	      hljs.C_NUMBER_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };
	};

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var BACKTICK_ESCAPE = {
	    begin: '`[\\s\\S]',
	    relevance: 0
	  };
	  var VAR = {
	    className: 'variable',
	    variants: [
	      {begin: /\$[\w\d][\w\d_:]*/}
	    ]
	  };
	  var LITERAL = {
	    className: 'literal',
	    begin: /\$(null|true|false)\b/
	  };
	  var QUOTE_STRING = {
	    className: 'string',
	    variants: [
	      { begin: /"/, end: /"/ },
	      { begin: /@"/, end: /^"@/ }
	    ],
	    contains: [
	      BACKTICK_ESCAPE,
	      VAR,
	      {
	        className: 'variable',
	        begin: /\$[A-z]/, end: /[^A-z]/
	      }
	    ]
	  };
	  var APOS_STRING = {
	    className: 'string',
	    variants: [
	      { begin: /'/, end: /'/ },
	      { begin: /@'/, end: /^'@/ }
	    ]
	  };

	  var PS_HELPTAGS = {
	    className: 'doctag',
	    variants: [
	      /* no paramater help tags */ 
	      { begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/ },
	      /* one parameter help tags */
	      { begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/ }
	    ]
	  };
	  var PS_COMMENT = hljs.inherit(
	    hljs.COMMENT(null, null),
	    {
	      variants: [
	        /* single-line comment */
	        { begin: /#/, end: /$/ },
	        /* multi-line comment */
	        { begin: /<#/, end: /#>/ }
	      ],
	      contains: [PS_HELPTAGS]
	    }
	  );

	  return {
	    aliases: ['ps'],
	    lexemes: /-?[A-z\.\-]+/,
	    case_insensitive: true,
	    keywords: {
	      keyword: 'if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch',
	      built_in: 'Add-Computer Add-Content Add-History Add-JobTrigger Add-Member Add-PSSnapin Add-Type Checkpoint-Computer Clear-Content Clear-EventLog Clear-History Clear-Host Clear-Item Clear-ItemProperty Clear-Variable Compare-Object Complete-Transaction Connect-PSSession Connect-WSMan Convert-Path ConvertFrom-Csv ConvertFrom-Json ConvertFrom-SecureString ConvertFrom-StringData ConvertTo-Csv ConvertTo-Html ConvertTo-Json ConvertTo-SecureString ConvertTo-Xml Copy-Item Copy-ItemProperty Debug-Process Disable-ComputerRestore Disable-JobTrigger Disable-PSBreakpoint Disable-PSRemoting Disable-PSSessionConfiguration Disable-WSManCredSSP Disconnect-PSSession Disconnect-WSMan Disable-ScheduledJob Enable-ComputerRestore Enable-JobTrigger Enable-PSBreakpoint Enable-PSRemoting Enable-PSSessionConfiguration Enable-ScheduledJob Enable-WSManCredSSP Enter-PSSession Exit-PSSession Export-Alias Export-Clixml Export-Console Export-Counter Export-Csv Export-FormatData Export-ModuleMember Export-PSSession ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-ComputerRestorePoint Get-Content Get-ControlPanelItem Get-Counter Get-Credential Get-Culture Get-Date Get-Event Get-EventLog Get-EventSubscriber Get-ExecutionPolicy Get-FormatData Get-Host Get-HotFix Get-Help Get-History Get-IseSnippet Get-Item Get-ItemProperty Get-Job Get-JobTrigger Get-Location Get-Member Get-Module Get-PfxCertificate Get-Process Get-PSBreakpoint Get-PSCallStack Get-PSDrive Get-PSProvider Get-PSSession Get-PSSessionConfiguration Get-PSSnapin Get-Random Get-ScheduledJob Get-ScheduledJobOption Get-Service Get-TraceSource Get-Transaction Get-TypeData Get-UICulture Get-Unique Get-Variable Get-Verb Get-WinEvent Get-WmiObject Get-WSManCredSSP Get-WSManInstance Group-Object Import-Alias Import-Clixml Import-Counter Import-Csv Import-IseSnippet Import-LocalizedData Import-PSSession Import-Module Invoke-AsWorkflow Invoke-Command Invoke-Expression Invoke-History Invoke-Item Invoke-RestMethod Invoke-WebRequest Invoke-WmiMethod Invoke-WSManAction Join-Path Limit-EventLog Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Event New-EventLog New-IseSnippet New-Item New-ItemProperty New-JobTrigger New-Object New-Module New-ModuleManifest New-PSDrive New-PSSession New-PSSessionConfigurationFile New-PSSessionOption New-PSTransportOption New-PSWorkflowExecutionOption New-PSWorkflowSession New-ScheduledJobOption New-Service New-TimeSpan New-Variable New-WebServiceProxy New-WinEvent New-WSManInstance New-WSManSessionOption Out-Default Out-File Out-GridView Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Receive-Job Register-EngineEvent Register-ObjectEvent Register-PSSessionConfiguration Register-ScheduledJob Register-WmiEvent Remove-Computer Remove-Event Remove-EventLog Remove-Item Remove-ItemProperty Remove-Job Remove-JobTrigger Remove-Module Remove-PSBreakpoint Remove-PSDrive Remove-PSSession Remove-PSSnapin Remove-TypeData Remove-Variable Remove-WmiObject Remove-WSManInstance Rename-Computer Rename-Item Rename-ItemProperty Reset-ComputerMachinePassword Resolve-Path Restart-Computer Restart-Service Restore-Computer Resume-Job Resume-Service Save-Help Select-Object Select-String Select-Xml Send-MailMessage Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-JobTrigger Set-Location Set-PSBreakpoint Set-PSDebug Set-PSSessionConfiguration Set-ScheduledJob Set-ScheduledJobOption Set-Service Set-StrictMode Set-TraceSource Set-Variable Set-WmiInstance Set-WSManInstance Set-WSManQuickConfig Show-Command Show-ControlPanelItem Show-EventLog Sort-Object Split-Path Start-Job Start-Process Start-Service Start-Sleep Start-Transaction Start-Transcript Stop-Computer Stop-Job Stop-Process Stop-Service Stop-Transcript Suspend-Job Suspend-Service Tee-Object Test-ComputerSecureChannel Test-Connection Test-ModuleManifest Test-Path Test-PSSessionConfigurationFile Trace-Command Unblock-File Undo-Transaction Unregister-Event Unregister-PSSessionConfiguration Unregister-ScheduledJob Update-FormatData Update-Help Update-List Update-TypeData Use-Transaction Wait-Event Wait-Job Wait-Process Where-Object Write-Debug Write-Error Write-EventLog Write-Host Write-Output Write-Progress Write-Verbose Write-Warning Add-MDTPersistentDrive Disable-MDTMonitorService Enable-MDTMonitorService Get-MDTDeploymentShareStatistics Get-MDTMonitorData Get-MDTOperatingSystemCatalog Get-MDTPersistentDrive Import-MDTApplication Import-MDTDriver Import-MDTOperatingSystem Import-MDTPackage Import-MDTTaskSequence New-MDTDatabase Remove-MDTMonitorData Remove-MDTPersistentDrive Restore-MDTPersistentDrive Set-MDTMonitorData Test-MDTDeploymentShare Test-MDTMonitorData Update-MDTDatabaseSchema Update-MDTDeploymentShare Update-MDTLinkedDS Update-MDTMedia Update-MDTMedia Add-VamtProductKey Export-VamtData Find-VamtManagedMachine Get-VamtConfirmationId Get-VamtProduct Get-VamtProductKey Import-VamtData Initialize-VamtData Install-VamtConfirmationId Install-VamtProductActivation Install-VamtProductKey Update-VamtProduct',
	      nomarkup: '-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace'
	    },
	    contains: [
	      BACKTICK_ESCAPE,
	      hljs.NUMBER_MODE,
	      QUOTE_STRING,
	      APOS_STRING,
	      LITERAL,
	      VAR,
	      PS_COMMENT
	    ]
	  };
	};

/***/ }),
/* 144 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword: 'BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color ' +
	        'double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject ' +
	        'Object StringDict StringList Table TableRow XML ' +
	        // Java keywords
	        'false synchronized int abstract float private char boolean static null if const ' +
	        'for true while long throw strictfp finally protected import native final return void ' +
	        'enum else break transient new catch instanceof byte super volatile case assert short ' +
	        'package default double public try this switch continue throws protected public private',
	      literal: 'P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI',
	      title: 'setup draw',
	      built_in: 'displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key ' +
	        'keyCode pixels focused frameCount frameRate height width ' +
	        'size createGraphics beginDraw createShape loadShape PShape arc ellipse line point ' +
	        'quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint ' +
	        'curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex ' +
	        'endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap ' +
	        'strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased ' +
	        'mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour ' +
	        'millis minute month second year background clear colorMode fill noFill noStroke stroke alpha ' +
	        'blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY ' +
	        'screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ' +
	        'ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle ' +
	        'pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf ' +
	        'nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset ' +
	        'box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings ' +
	        'loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput ' +
	        'createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings ' +
	        'saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale ' +
	        'shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal ' +
	        'pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap ' +
	        'blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont ' +
	        'loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil ' +
	        'constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees ' +
	        'radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ }),
/* 145 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      hljs.C_NUMBER_MODE,
	      {
	        begin: '[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}', end: ':',
	        excludeEnd: true
	      },
	      {
	        begin: '(ncalls|tottime|cumtime)', end: '$',
	        keywords: 'ncalls tottime|10 cumtime|10 filename',
	        relevance: 10
	      },
	      {
	        begin: 'function calls', end: '$',
	        contains: [hljs.C_NUMBER_MODE],
	        relevance: 10
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\\(', end: '\\)$',
	        excludeBegin: true, excludeEnd: true,
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ }),
/* 146 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {

	  var ATOM = {

	    begin: /[a-z][A-Za-z0-9_]*/,
	    relevance: 0
	  };

	  var VAR = {

	    className: 'symbol',
	    variants: [
	      {begin: /[A-Z][a-zA-Z0-9_]*/},
	      {begin: /_[A-Za-z0-9_]*/},
	    ],
	    relevance: 0
	  };

	  var PARENTED = {

	    begin: /\(/,
	    end: /\)/,
	    relevance: 0
	  };

	  var LIST = {

	    begin: /\[/,
	    end: /\]/
	  };

	  var LINE_COMMENT = {

	    className: 'comment',
	    begin: /%/, end: /$/,
	    contains: [hljs.PHRASAL_WORDS_MODE]
	  };

	  var BACKTICK_STRING = {

	    className: 'string',
	    begin: /`/, end: /`/,
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };

	  var CHAR_CODE = {

	    className: 'string', // 0'a etc.
	    begin: /0\'(\\\'|.)/
	  };

	  var SPACE_CODE = {

	    className: 'string',
	    begin: /0\'\\s/ // 0'\s
	  };

	  var PRED_OP = { // relevance booster
	    begin: /:-/
	  };

	  var inner = [

	    ATOM,
	    VAR,
	    PARENTED,
	    PRED_OP,
	    LIST,
	    LINE_COMMENT,
	    hljs.C_BLOCK_COMMENT_MODE,
	    hljs.QUOTE_STRING_MODE,
	    hljs.APOS_STRING_MODE,
	    BACKTICK_STRING,
	    CHAR_CODE,
	    SPACE_CODE,
	    hljs.C_NUMBER_MODE
	  ];

	  PARENTED.contains = inner;
	  LIST.contains = inner;

	  return {
	    contains: inner.concat([
	      {begin: /\.$/} // relevance booster
	    ])
	  };
	};

/***/ }),
/* 147 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword: 'package import option optional required repeated group',
	      built_in: 'double float int32 int64 uint32 uint64 sint32 sint64 ' +
	        'fixed32 fixed64 sfixed32 sfixed64 bool string bytes',
	      literal: 'true false'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'message enum service', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      },
	      {
	        className: 'function',
	        beginKeywords: 'rpc',
	        end: /;/, excludeEnd: true,
	        keywords: 'rpc returns'
	      },
	      {
	        begin: /^\s*[A-Z_]+/,
	        end: /\s*=/, excludeEnd: true
	      }
	    ]
	  };
	};

/***/ }),
/* 148 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {

	  var PUPPET_KEYWORDS = {
	    keyword:
	    /* language keywords */
	      'and case default else elsif false if in import enherits node or true undef unless main settings $string ',
	    literal:
	    /* metaparameters */
	      'alias audit before loglevel noop require subscribe tag ' +
	    /* normal attributes */
	      'owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check ' +
	      'en_address ip_address realname command environment hour monute month monthday special target weekday '+
	      'creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore ' +
	      'links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source ' +
	      'souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid '+
	      'ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel ' +
	      'native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options ' +
	      'device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use ' +
	      'message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform ' +
	      'responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running ' +
	      'start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age ' +
	      'password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled ' +
	      'enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist ' +
	      'priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey ' +
	      'sslverify mounted',
	    built_in:
	    /* core facts */
	      'architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers ' +
	      'domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces '+
	      'ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion ' +
	      'kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease ' +
	      'lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major ' +
	      'macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease '+
	      'operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion '+
	      'rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced '+
	      'selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime '+
	      'uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version'
	  };

	  var COMMENT = hljs.COMMENT('#', '$');

	  var IDENT_RE = '([A-Za-z_]|::)(\\w|::)*';

	  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE});

	  var VARIABLE = {className: 'variable', begin: '\\$' + IDENT_RE};

	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE, VARIABLE],
	    variants: [
	      {begin: /'/, end: /'/},
	      {begin: /"/, end: /"/}
	    ]
	  };

	  return {
	    aliases: ['pp'],
	    contains: [
	      COMMENT,
	      VARIABLE,
	      STRING,
	      {
	        beginKeywords: 'class', end: '\\{|;',
	        illegal: /=/,
	        contains: [TITLE, COMMENT]
	      },
	      {
	        beginKeywords: 'define', end: /\{/,
	        contains: [
	          {
	            className: 'section', begin: hljs.IDENT_RE, endsParent: true
	          }
	        ]
	      },
	      {
	        begin: hljs.IDENT_RE + '\\s+\\{', returnBegin: true,
	        end: /\S/,
	        contains: [
	          {
	            className: 'keyword',
	            begin: hljs.IDENT_RE
	          },
	          {
	            begin: /\{/, end: /\}/,
	            keywords: PUPPET_KEYWORDS,
	            relevance: 0,
	            contains: [
	              STRING,
	              COMMENT,
	              {
	                begin:'[a-zA-Z_]+\\s*=>',
	                returnBegin: true, end: '=>',
	                contains: [
	                  {
	                    className: 'attr',
	                    begin: hljs.IDENT_RE,
	                  }
	                ]
	              },
	              {
	                className: 'number',
	                begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	                relevance: 0
	              },
	              VARIABLE
	            ]
	          }
	        ],
	        relevance: 0
	      }
	    ]
	  }
	};

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	module.exports = // Base deafult colors in PB IDE: background: #FFFFDF; foreground: #000000;

	function(hljs) {
	  var STRINGS = { // PB IDE color: #0080FF (Azure Radiance)
	    className: 'string',
	    begin: '(~)?"', end: '"',
	    illegal: '\\n'
	  };
	  var CONSTANTS = { // PB IDE color: #924B72 (Cannon Pink)
	    //  "#" + a letter or underscore + letters, digits or underscores + (optional) "$"
	    className: 'symbol',
	    begin: '#[a-zA-Z_]\\w*\\$?'
	  };

	  return {
	    aliases: ['pb', 'pbi'],
	    keywords: // PB IDE color: #006666 (Blue Stone) + Bold
	      // The following keywords list was taken and adapted from GuShH's PureBasic language file for GeSHi...
	      'And As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerEndIf CompilerEndSelect ' +
	      'CompilerError CompilerIf CompilerSelect Continue Data DataSection EndDataSection Debug DebugLevel ' +
	      'Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM ' +
	      'EnableDebugger EnableExplicit End EndEnumeration EndIf EndImport EndInterface EndMacro EndProcedure ' +
	      'EndSelect EndStructure EndStructureUnion EndWith Enumeration Extends FakeReturn For Next ForEach ' +
	      'ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface Macro ' +
	      'NewList Not Or ProcedureReturn Protected Prototype ' +
	      'PrototypeC Read ReDim Repeat Until Restore Return Select Shared Static Step Structure StructureUnion ' +
	      'Swap To Wend While With XIncludeFile XOr ' +
	      'Procedure ProcedureC ProcedureCDLL ProcedureDLL Declare DeclareC DeclareCDLL DeclareDLL',
	    contains: [
	      // COMMENTS | PB IDE color: #00AAAA (Persian Green)
	      hljs.COMMENT(';', '$', {relevance: 0}),

	      { // PROCEDURES DEFINITIONS
	        className: 'function',
	        begin: '\\b(Procedure|Declare)(C|CDLL|DLL)?\\b',
	        end: '\\(',
	        excludeEnd: true,
	        returnBegin: true,
	        contains: [
	          { // PROCEDURE KEYWORDS | PB IDE color: #006666 (Blue Stone) + Bold
	            className: 'keyword',
	            begin: '(Procedure|Declare)(C|CDLL|DLL)?',
	            excludeEnd: true
	          },
	          { // PROCEDURE RETURN TYPE SETTING | PB IDE color: #000000 (Black)
	            className: 'type',
	            begin: '\\.\\w*'
	            // end: ' ',
	          },
	          hljs.UNDERSCORE_TITLE_MODE // PROCEDURE NAME | PB IDE color: #006666 (Blue Stone)
	        ]
	      },
	      STRINGS,
	      CONSTANTS
	    ]
	  };
	};

/***/ }),
/* 150 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      'and elif is global as in if from raise for except finally print import pass return ' +
	      'exec else break not with class assert yield try while continue del or def lambda ' +
	      'async await nonlocal|10 None True False',
	    built_in:
	      'Ellipsis NotImplemented'
	  };
	  var PROMPT = {
	    className: 'meta',  begin: /^(>>>|\.\.\.) /
	  };
	  var SUBST = {
	    className: 'subst',
	    begin: /\{/, end: /\}/,
	    keywords: KEYWORDS,
	    illegal: /#/
	  };
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE],
	    variants: [
	      {
	        begin: /(u|b)?r?'''/, end: /'''/,
	        contains: [PROMPT],
	        relevance: 10
	      },
	      {
	        begin: /(u|b)?r?"""/, end: /"""/,
	        contains: [PROMPT],
	        relevance: 10
	      },
	      {
	        begin: /(fr|rf|f)'''/, end: /'''/,
	        contains: [PROMPT, SUBST]
	      },
	      {
	        begin: /(fr|rf|f)"""/, end: /"""/,
	        contains: [PROMPT, SUBST]
	      },
	      {
	        begin: /(u|r|ur)'/, end: /'/,
	        relevance: 10
	      },
	      {
	        begin: /(u|r|ur)"/, end: /"/,
	        relevance: 10
	      },
	      {
	        begin: /(b|br)'/, end: /'/
	      },
	      {
	        begin: /(b|br)"/, end: /"/
	      },
	      {
	        begin: /(fr|rf|f)'/, end: /'/,
	        contains: [SUBST]
	      },
	      {
	        begin: /(fr|rf|f)"/, end: /"/,
	        contains: [SUBST]
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE
	    ]
	  };
	  var NUMBER = {
	    className: 'number', relevance: 0,
	    variants: [
	      {begin: hljs.BINARY_NUMBER_RE + '[lLjJ]?'},
	      {begin: '\\b(0o[0-7]+)[lLjJ]?'},
	      {begin: hljs.C_NUMBER_RE + '[lLjJ]?'}
	    ]
	  };
	  var PARAMS = {
	    className: 'params',
	    begin: /\(/, end: /\)/,
	    contains: ['self', PROMPT, NUMBER, STRING]
	  };
	  SUBST.contains = [STRING, NUMBER, PROMPT];
	  return {
	    aliases: ['py', 'gyp'],
	    keywords: KEYWORDS,
	    illegal: /(<\/|->|\?)|=>/,
	    contains: [
	      PROMPT,
	      NUMBER,
	      STRING,
	      hljs.HASH_COMMENT_MODE,
	      {
	        variants: [
	          {className: 'function', beginKeywords: 'def'},
	          {className: 'class', beginKeywords: 'class'}
	        ],
	        end: /:/,
	        illegal: /[${=;\n,]/,
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          PARAMS,
	          {
	            begin: /->/, endsWithParent: true,
	            keywords: 'None'
	          }
	        ]
	      },
	      {
	        className: 'meta',
	        begin: /^[\t ]*@/, end: /$/
	      },
	      {
	        begin: /\b(print|exec)\(/ // don’t highlight keywords-turned-functions in Python 3
	      }
	    ]
	  };
	};

/***/ }),
/* 151 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var Q_KEYWORDS = {
	  keyword:
	    'do while select delete by update from',
	  literal:
	    '0b 1b',
	  built_in:
	    'neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum',
	  type:
	    '`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid'
	  };
	  return {
	  aliases:['k', 'kdb'],
	  keywords: Q_KEYWORDS,
	  lexemes: /(`?)[A-Za-z0-9_]+\b/,
	  contains: [
	  hljs.C_LINE_COMMENT_MODE,
	    hljs.QUOTE_STRING_MODE,
	    hljs.C_NUMBER_MODE
	     ]
	  };
	};

/***/ }),
/* 152 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	      keyword:
	        'in of on if for while finally var new function do return void else break catch ' +
	        'instanceof with throw case default try this switch continue typeof delete ' +
	        'let yield const export super debugger as async await import',
	      literal:
	        'true false null undefined NaN Infinity',
	      built_in:
	        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
	        'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
	        'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
	        'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
	        'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
	        'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
	        'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' +
	        'Behavior bool color coordinate date double enumeration font geocircle georectangle ' +
	        'geoshape int list matrix4x4 parent point quaternion real rect ' +
	        'size string url var variant vector2d vector3d vector4d' +
	        'Promise'
	    };

	  var QML_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9\\._]*';

	  // Isolate property statements. Ends at a :, =, ;, ,, a comment or end of line.
	  // Use property class.
	  var PROPERTY = {
	      className: 'keyword',
	      begin: '\\bproperty\\b',
	      starts: {
	        className: 'string',
	        end: '(:|=|;|,|//|/\\*|$)',
	        returnEnd: true
	      }
	  };

	  // Isolate signal statements. Ends at a ) a comment or end of line.
	  // Use property class.
	  var SIGNAL = {
	      className: 'keyword',
	      begin: '\\bsignal\\b',
	      starts: {
	        className: 'string',
	        end: '(\\(|:|=|;|,|//|/\\*|$)',
	        returnEnd: true
	      }
	  };

	  // id: is special in QML. When we see id: we want to mark the id: as attribute and
	  // emphasize the token following.
	  var ID_ID = {
	      className: 'attribute',
	      begin: '\\bid\\s*:',
	      starts: {
	        className: 'string',
	        end: QML_IDENT_RE,
	        returnEnd: false
	      }
	  };

	  // Find QML object attribute. An attribute is a QML identifier followed by :.
	  // Unfortunately it's hard to know where it ends, as it may contain scalars,
	  // objects, object definitions, or javascript. The true end is either when the parent
	  // ends or the next attribute is detected.
	  var QML_ATTRIBUTE = {
	    begin: QML_IDENT_RE + '\\s*:',
	    returnBegin: true,
	    contains: [
	      {
	        className: 'attribute',
	        begin: QML_IDENT_RE,
	        end: '\\s*:',
	        excludeEnd: true,
	        relevance: 0
	      }
	    ],
	    relevance: 0
	  };

	  // Find QML object. A QML object is a QML identifier followed by { and ends at the matching }.
	  // All we really care about is finding IDENT followed by { and just mark up the IDENT and ignore the {.
	  var QML_OBJECT = {
	    begin: QML_IDENT_RE + '\\s*{', end: '{',
	    returnBegin: true,
	    relevance: 0,
	    contains: [
	      hljs.inherit(hljs.TITLE_MODE, {begin: QML_IDENT_RE})
	    ]
	  };

	  return {
	    aliases: ['qt'],
	    case_insensitive: false,
	    keywords: KEYWORDS,
	    contains: [
	      {
	        className: 'meta',
	        begin: /^\s*['"]use (strict|asm)['"]/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      { // template string
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [
	          hljs.BACKSLASH_ESCAPE,
	          {
	            className: 'subst',
	            begin: '\\$\\{', end: '\\}'
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b(0[bB][01]+)' },
	          { begin: '\\b(0[oO][0-7]+)' },
	          { begin: hljs.C_NUMBER_RE }
	        ],
	        relevance: 0
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.REGEXP_MODE,
	          { // E4X / JSX
	            begin: /</, end: />\s*[);\]]/,
	            relevance: 0,
	            subLanguage: 'xml'
	          }
	        ],
	        relevance: 0
	      },
	      SIGNAL,
	      PROPERTY,
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /\{/, excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ]
	          }
	        ],
	        illegal: /\[|%/
	      },
	      {
	        begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
	      },
	      ID_ID,
	      QML_ATTRIBUTE,
	      QML_OBJECT
	    ],
	    illegal: /#/
	  };
	};

/***/ }),
/* 153 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*';

	  return {
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      {
	        begin: IDENT_RE,
	        lexemes: IDENT_RE,
	        keywords: {
	          keyword:
	            'function if in break next repeat else for return switch while try tryCatch ' +
	            'stop warning require library attach detach source setMethod setGeneric ' +
	            'setGroupGeneric setClass ...',
	          literal:
	            'NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 ' +
	            'NA_complex_|10'
	        },
	        relevance: 0
	      },
	      {
	        // hex value
	        className: 'number',
	        begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
	        relevance: 0
	      },
	      {
	        // explicit integer
	        className: 'number',
	        begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
	        relevance: 0
	      },
	      {
	        // number with trailing decimal
	        className: 'number',
	        begin: "\\d+\\.(?!\\d)(?:i\\b)?",
	        relevance: 0
	      },
	      {
	        // number
	        className: 'number',
	        begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
	        relevance: 0
	      },
	      {
	        // number with leading decimal
	        className: 'number',
	        begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
	        relevance: 0
	      },

	      {
	        // escaped identifier
	        begin: '`',
	        end: '`',
	        relevance: 0
	      },

	      {
	        className: 'string',
	        contains: [hljs.BACKSLASH_ESCAPE],
	        variants: [
	          {begin: '"', end: '"'},
	          {begin: "'", end: "'"}
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 154 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords:
	      'ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis ' +
	      'Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone ' +
	      'CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail ' +
	      'DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format ' +
	      'FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry ' +
	      'Hider Hyperboloid Identity Illuminate Imager Interior LightSource ' +
	      'MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte ' +
	      'MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option ' +
	      'Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples ' +
	      'PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection ' +
	      'Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ' +
	      'ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere ' +
	      'SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd ' +
	      'TransformPoints Translate TrimCurve WorldBegin WorldEnd',
	    illegal: '</',
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.C_NUMBER_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE
	    ]
	  };
	};

/***/ }),
/* 155 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var IDENTIFIER = '[a-zA-Z-_][^\\n{]+\\{';

	  var PROPERTY = {
	    className: 'attribute',
	    begin: /[a-zA-Z-_]+/, end: /\s*:/, excludeEnd: true,
	    starts: {
	      end: ';',
	      relevance: 0,
	      contains: [
	        {
	          className: 'variable',
	          begin: /\.[a-zA-Z-_]+/
	        },
	        {
	          className: 'keyword',
	          begin: /\(optional\)/
	        }
	      ]
	    }
	  };

	  return {
	    aliases: ['graph', 'instances'],
	    case_insensitive: true,
	    keywords: 'import',
	    contains: [
	      // Facet sections
	      {
	        begin: '^facet ' + IDENTIFIER,
	        end: '}',
	        keywords: 'facet',
	        contains: [
	          PROPERTY,
	          hljs.HASH_COMMENT_MODE
	        ]
	      },

	      // Instance sections
	      {
	        begin: '^\\s*instance of ' + IDENTIFIER,
	        end: '}',
	        keywords: 'name count channels instance-data instance-state instance of',
	        illegal: /\S/,
	        contains: [
	          'self',
	          PROPERTY,
	          hljs.HASH_COMMENT_MODE
	        ]
	      },

	      // Component sections
	      {
	        begin: '^' + IDENTIFIER,
	        end: '}',
	        contains: [
	          PROPERTY,
	          hljs.HASH_COMMENT_MODE
	        ]
	      },

	      // Comments
	      hljs.HASH_COMMENT_MODE
	    ]
	  };
	};

/***/ }),
/* 156 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword:
	        'float color point normal vector matrix while for if do return else break extern continue',
	      built_in:
	        'abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise ' +
	        'clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp ' +
	        'faceforward filterstep floor format fresnel incident length lightsource log match ' +
	        'max min mod noise normalize ntransform opposite option phong pnoise pow printf ' +
	        'ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp ' +
	        'setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan ' +
	        'texture textureinfo trace transform vtransform xcomp ycomp zcomp'
	    },
	    illegal: '</',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$'
	      },
	      {
	        className: 'class',
	        beginKeywords: 'surface displacement light volume imager', end: '\\('
	      },
	      {
	        beginKeywords: 'illuminate illuminance gather', end: '\\('
	      }
	    ]
	  };
	};

/***/ }),
/* 157 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	       keyword: 'BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE ' +
	         'INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 ' +
	         'INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 ' +
	         'INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 ' +
	         'INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 ' +
	         'INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 ' +
	         'INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 ' +
	         'INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 ' +
	         'INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 ' +
	         'INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 ' +
	         'INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 ' +
	         'INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 ' +
	         'INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 ' +
	         'INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 ' +
	         'INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 ' +
	         'MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER ' +
	         'OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE ' +
	         'NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH ' +
	         'IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND ' +
	         'UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ' +
	         'ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE ' +
	         'GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE ' +
	         'SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING ' +
	         'DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF ' +
	         'MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY ' +
	         'YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE ' +
	         'COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR ' +
	         'READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ' +
	         'ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE ' +
	         'EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE ' +
	         'SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL ' +
	         'COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN ' +
	         'MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING ' +
	         'FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM ' +
	         'NUMDAYS READ_DATE STAGING',
	       built_in: 'IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML ' +
	         'DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT ' +
	         'DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE ' +
	         'DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT ' +
	         'DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'literal',
	        variants: [
	          {begin: '#\\s+[a-zA-Z\\ \\.]*', relevance: 0}, // looks like #-comment
	          {begin: '#[a-zA-Z\\ \\.]+'}
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 158 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var NUM_SUFFIX = '([ui](8|16|32|64|128|size)|f(32|64))\?';
	  var KEYWORDS =
	    'alignof as be box break const continue crate do else enum extern ' +
	    'false fn for if impl in let loop match mod mut offsetof once priv ' +
	    'proc pub pure ref return self Self sizeof static struct super trait true ' +
	    'type typeof unsafe unsized use virtual while where yield move default';
	  var BUILTINS =
	    // functions
	    'drop ' +
	    // types
	    'i8 i16 i32 i64 i128 isize ' +
	    'u8 u16 u32 u64 u128 usize ' +
	    'f32 f64 ' +
	    'str char bool ' +
	    'Box Option Result String Vec ' +
	    // traits
	    'Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug ' +
	    'PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator ' +
	    'Extend IntoIterator DoubleEndedIterator ExactSizeIterator ' +
	    'SliceConcatExt ToString ' +
	    // macros
	    'assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! ' +
	    'debug_assert! debug_assert_eq! env! panic! file! format! format_args! ' +
	    'include_bin! include_str! line! local_data_key! module_path! ' +
	    'option_env! print! println! select! stringify! try! unimplemented! ' +
	    'unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!';
	  return {
	    aliases: ['rs'],
	    keywords: {
	      keyword:
	        KEYWORDS,
	      literal:
	        'true false Some None Ok Err',
	      built_in:
	        BUILTINS
	    },
	    lexemes: hljs.IDENT_RE + '!?',
	    illegal: '</',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.COMMENT('/\\*', '\\*/', {contains: ['self']}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {begin: /b?"/, illegal: null}),
	      {
	        className: 'string',
	        variants: [
	           { begin: /r(#*)".*?"\1(?!#)/ },
	           { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
	        ]
	      },
	      {
	        className: 'symbol',
	        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
	      },
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b0b([01_]+)' + NUM_SUFFIX },
	          { begin: '\\b0o([0-7_]+)' + NUM_SUFFIX },
	          { begin: '\\b0x([A-Fa-f0-9_]+)' + NUM_SUFFIX },
	          { begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' +
	                   NUM_SUFFIX
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        beginKeywords: 'fn', end: '(\\(|<)', excludeEnd: true,
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        className: 'meta',
	        begin: '#\\!?\\[', end: '\\]',
	        contains: [
	          {
	            className: 'meta-string',
	            begin: /"/, end: /"/
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'type', end: ';',
	        contains: [
	          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {endsParent: true})
	        ],
	        illegal: '\\S'
	      },
	      {
	        className: 'class',
	        beginKeywords: 'trait enum struct union', end: '{',
	        contains: [
	          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {endsParent: true})
	        ],
	        illegal: '[\\w\\d]'
	      },
	      {
	        begin: hljs.IDENT_RE + '::',
	        keywords: {built_in: BUILTINS}
	      },
	      {
	        begin: '->'
	      }
	    ]
	  };
	};

/***/ }),
/* 159 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {

	  var ANNOTATION = { className: 'meta', begin: '@[A-Za-z]+' };

	  // used in strings for escaping/interpolation/substitution
	  var SUBST = {
	    className: 'subst',
	    variants: [
	      {begin: '\\$[A-Za-z0-9_]+'},
	      {begin: '\\${', end: '}'}
	    ]
	  };

	  var STRING = {
	    className: 'string',
	    variants: [
	      {
	        begin: '"', end: '"',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        begin: '"""', end: '"""',
	        relevance: 10
	      },
	      {
	        begin: '[a-z]+"', end: '"',
	        illegal: '\\n',
	        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
	      },
	      {
	        className: 'string',
	        begin: '[a-z]+"""', end: '"""',
	        contains: [SUBST],
	        relevance: 10
	      }
	    ]

	  };

	  var SYMBOL = {
	    className: 'symbol',
	    begin: '\'\\w[\\w\\d_]*(?!\')'
	  };

	  var TYPE = {
	    className: 'type',
	    begin: '\\b[A-Z][A-Za-z0-9_]*',
	    relevance: 0
	  };

	  var NAME = {
	    className: 'title',
	    begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
	    relevance: 0
	  };

	  var CLASS = {
	    className: 'class',
	    beginKeywords: 'class object trait type',
	    end: /[:={\[\n;]/,
	    excludeEnd: true,
	    contains: [
	      {
	        beginKeywords: 'extends with',
	        relevance: 10
	      },
	      {
	        begin: /\[/,
	        end: /\]/,
	        excludeBegin: true,
	        excludeEnd: true,
	        relevance: 0,
	        contains: [TYPE]
	      },
	      {
	        className: 'params',
	        begin: /\(/,
	        end: /\)/,
	        excludeBegin: true,
	        excludeEnd: true,
	        relevance: 0,
	        contains: [TYPE]
	      },
	      NAME
	    ]
	  };

	  var METHOD = {
	    className: 'function',
	    beginKeywords: 'def',
	    end: /[:={\[(\n;]/,
	    excludeEnd: true,
	    contains: [NAME]
	  };

	  return {
	    keywords: {
	      literal: 'true false null',
	      keyword: 'type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      STRING,
	      SYMBOL,
	      TYPE,
	      METHOD,
	      CLASS,
	      hljs.C_NUMBER_MODE,
	      ANNOTATION
	    ]
	  };
	};

/***/ }),
/* 160 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var SCHEME_IDENT_RE = '[^\\(\\)\\[\\]\\{\\}",\'`;#|\\\\\\s]+';
	  var SCHEME_SIMPLE_NUMBER_RE = '(\\-|\\+)?\\d+([./]\\d+)?';
	  var SCHEME_COMPLEX_NUMBER_RE = SCHEME_SIMPLE_NUMBER_RE + '[+\\-]' + SCHEME_SIMPLE_NUMBER_RE + 'i';
	  var BUILTINS = {
	    'builtin-name':
	      'case-lambda call/cc class define-class exit-handler field import ' +
	      'inherit init-field interface let*-values let-values let/ec mixin ' +
	      'opt-lambda override protect provide public rename require ' +
	      'require-for-syntax syntax syntax-case syntax-error unit/sig unless ' +
	      'when with-syntax and begin call-with-current-continuation ' +
	      'call-with-input-file call-with-output-file case cond define ' +
	      'define-syntax delay do dynamic-wind else for-each if lambda let let* ' +
	      'let-syntax letrec letrec-syntax map or syntax-rules \' * + , ,@ - ... / ' +
	      '; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan ' +
	      'boolean? caar cadr call-with-input-file call-with-output-file ' +
	      'call-with-values car cdddar cddddr cdr ceiling char->integer ' +
	      'char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? ' +
	      'char-downcase char-lower-case? char-numeric? char-ready? char-upcase ' +
	      'char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? ' +
	      'char? close-input-port close-output-port complex? cons cos ' +
	      'current-input-port current-output-port denominator display eof-object? ' +
	      'eq? equal? eqv? eval even? exact->inexact exact? exp expt floor ' +
	      'force gcd imag-part inexact->exact inexact? input-port? integer->char ' +
	      'integer? interaction-environment lcm length list list->string ' +
	      'list->vector list-ref list-tail list? load log magnitude make-polar ' +
	      'make-rectangular make-string make-vector max member memq memv min ' +
	      'modulo negative? newline not null-environment null? number->string ' +
	      'number? numerator odd? open-input-file open-output-file output-port? ' +
	      'pair? peek-char port? positive? procedure? quasiquote quote quotient ' +
	      'rational? rationalize read read-char real-part real? remainder reverse ' +
	      'round scheme-report-environment set! set-car! set-cdr! sin sqrt string ' +
	      'string->list string->number string->symbol string-append string-ci<=? ' +
	      'string-ci<? string-ci=? string-ci>=? string-ci>? string-copy ' +
	      'string-fill! string-length string-ref string-set! string<=? string<? ' +
	      'string=? string>=? string>? string? substring symbol->string symbol? ' +
	      'tan transcript-off transcript-on truncate values vector ' +
	      'vector->list vector-fill! vector-length vector-ref vector-set! ' +
	      'with-input-from-file with-output-to-file write write-char zero?'
	  };

	  var SHEBANG = {
	    className: 'meta',
	    begin: '^#!',
	    end: '$'
	  };

	  var LITERAL = {
	    className: 'literal',
	    begin: '(#t|#f|#\\\\' + SCHEME_IDENT_RE + '|#\\\\.)'
	  };

	  var NUMBER = {
	    className: 'number',
	    variants: [
	      { begin: SCHEME_SIMPLE_NUMBER_RE, relevance: 0 },
	      { begin: SCHEME_COMPLEX_NUMBER_RE, relevance: 0 },
	      { begin: '#b[0-1]+(/[0-1]+)?' },
	      { begin: '#o[0-7]+(/[0-7]+)?' },
	      { begin: '#x[0-9a-f]+(/[0-9a-f]+)?' }
	    ]
	  };

	  var STRING = hljs.QUOTE_STRING_MODE;

	  var REGULAR_EXPRESSION = {
	    className: 'regexp',
	    begin: '#[pr]x"',
	    end: '[^\\\\]"'
	  };

	  var COMMENT_MODES = [
	    hljs.COMMENT(
	      ';',
	      '$',
	      {
	        relevance: 0
	      }
	    ),
	    hljs.COMMENT('#\\|', '\\|#')
	  ];

	  var IDENT = {
	    begin: SCHEME_IDENT_RE,
	    relevance: 0
	  };

	  var QUOTED_IDENT = {
	    className: 'symbol',
	    begin: '\'' + SCHEME_IDENT_RE
	  };

	  var BODY = {
	    endsWithParent: true,
	    relevance: 0
	  };

	  var QUOTED_LIST = {
	    variants: [
	      { begin: /'/ },
	      { begin: '`' }
	    ],
	    contains: [
	      {
	        begin: '\\(', end: '\\)',
	        contains: ['self', LITERAL, STRING, NUMBER, IDENT, QUOTED_IDENT]
	      }
	    ]
	  };

	  var NAME = {
	    className: 'name',
	    begin: SCHEME_IDENT_RE,
	    lexemes: SCHEME_IDENT_RE,
	    keywords: BUILTINS
	  };

	  var LAMBDA = {
	    begin: /lambda/, endsWithParent: true, returnBegin: true,
	    contains: [
	      NAME,
	      {
	        begin: /\(/, end: /\)/, endsParent: true,
	        contains: [IDENT],
	      }
	    ]
	  };

	  var LIST = {
	    variants: [
	      { begin: '\\(', end: '\\)' },
	      { begin: '\\[', end: '\\]' }
	    ],
	    contains: [LAMBDA, NAME, BODY]
	  };

	  BODY.contains = [LITERAL, NUMBER, STRING, IDENT, QUOTED_IDENT, QUOTED_LIST, LIST].concat(COMMENT_MODES);

	  return {
	    illegal: /\S/,
	    contains: [SHEBANG, NUMBER, STRING, QUOTED_IDENT, QUOTED_LIST, LIST].concat(COMMENT_MODES)
	  };
	};

/***/ }),
/* 161 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {

	  var COMMON_CONTAINS = [
	    hljs.C_NUMBER_MODE,
	    {
	      className: 'string',
	      begin: '\'|\"', end: '\'|\"',
	      contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
	    }
	  ];

	  return {
	    aliases: ['sci'],
	    lexemes: /%?\w+/,
	    keywords: {
	      keyword: 'abort break case clear catch continue do elseif else endfunction end for function '+
	        'global if pause return resume select try then while',
	      literal:
	        '%f %F %t %T %pi %eps %inf %nan %e %i %z %s',
	      built_in: // Scilab has more than 2000 functions. Just list the most commons
	       'abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error '+
	       'exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty '+
	       'isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log '+
	       'max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real '+
	       'round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan '+
	       'type typename warning zeros matrix'
	    },
	    illegal: '("|#|/\\*|\\s+/\\w+)',
	    contains: [
	      {
	        className: 'function',
	        beginKeywords: 'function', end: '$',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)'
	          }
	        ]
	      },
	      {
	        begin: '[a-zA-Z_][a-zA-Z_0-9]*(\'+[\\.\']*|[\\.\']+)', end: '',
	        relevance: 0
	      },
	      {
	        begin: '\\[', end: '\\]\'*[\\.\']*',
	        relevance: 0,
	        contains: COMMON_CONTAINS
	      },
	      hljs.COMMENT('//', '$')
	    ].concat(COMMON_CONTAINS)
	  };
	};

/***/ }),
/* 162 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';
	  var VARIABLE = {
	    className: 'variable',
	    begin: '(\\$' + IDENT_RE + ')\\b'
	  };
	  var HEXCOLOR = {
	    className: 'number', begin: '#[0-9A-Fa-f]+'
	  };
	  var DEF_INTERNALS = {
	    className: 'attribute',
	    begin: '[A-Z\\_\\.\\-]+', end: ':',
	    excludeEnd: true,
	    illegal: '[^\\s]',
	    starts: {
	      endsWithParent: true, excludeEnd: true,
	      contains: [
	        HEXCOLOR,
	        hljs.CSS_NUMBER_MODE,
	        hljs.QUOTE_STRING_MODE,
	        hljs.APOS_STRING_MODE,
	        hljs.C_BLOCK_COMMENT_MODE,
	        {
	          className: 'meta', begin: '!important'
	        }
	      ]
	    }
	  };
	  return {
	    case_insensitive: true,
	    illegal: '[=/|\']',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'selector-id', begin: '\\#[A-Za-z0-9_-]+',
	        relevance: 0
	      },
	      {
	        className: 'selector-class', begin: '\\.[A-Za-z0-9_-]+',
	        relevance: 0
	      },
	      {
	        className: 'selector-attr', begin: '\\[', end: '\\]',
	        illegal: '$'
	      },
	      {
	        className: 'selector-tag', // begin: IDENT_RE, end: '[,|\\s]'
	        begin: '\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b',
	        relevance: 0
	      },
	      {
	        begin: ':(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)'
	      },
	      {
	        begin: '::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)'
	      },
	      VARIABLE,
	      {
	        className: 'attribute',
	        begin: '\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b',
	        illegal: '[^\\s]'
	      },
	      {
	        begin: '\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b'
	      },
	      {
	        begin: ':', end: ';',
	        contains: [
	          VARIABLE,
	          HEXCOLOR,
	          hljs.CSS_NUMBER_MODE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          {
	            className: 'meta', begin: '!important'
	          }
	        ]
	      },
	      {
	        begin: '@', end: '[{;]',
	        keywords: 'mixin include extend for if else each while charset import debug media page content font-face namespace warn',
	        contains: [
	          VARIABLE,
	          hljs.QUOTE_STRING_MODE,
	          hljs.APOS_STRING_MODE,
	          HEXCOLOR,
	          hljs.CSS_NUMBER_MODE,
	          {
	            begin: '\\s[A-Za-z0-9_.-]+',
	            relevance: 0
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 163 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['console'],
	    contains: [
	      {
	        className: 'meta',
	        begin: '^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]',
	        starts: {
	          end: '$', subLanguage: 'bash'
	        }
	      },
	    ]
	  }
	};

/***/ }),
/* 164 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var smali_instr_low_prio = ['add', 'and', 'cmp', 'cmpg', 'cmpl', 'const', 'div', 'double', 'float', 'goto', 'if', 'int', 'long', 'move', 'mul', 'neg', 'new', 'nop', 'not', 'or', 'rem', 'return', 'shl', 'shr', 'sput', 'sub', 'throw', 'ushr', 'xor'];
	  var smali_instr_high_prio = ['aget', 'aput', 'array', 'check', 'execute', 'fill', 'filled', 'goto/16', 'goto/32', 'iget', 'instance', 'invoke', 'iput', 'monitor', 'packed', 'sget', 'sparse'];
	  var smali_keywords = ['transient', 'constructor', 'abstract', 'final', 'synthetic', 'public', 'private', 'protected', 'static', 'bridge', 'system'];
	  return {
	    aliases: ['smali'],
	    contains: [
	      {
	        className: 'string',
	        begin: '"', end: '"',
	        relevance: 0
	      },
	      hljs.COMMENT(
	        '#',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      {
	        className: 'keyword',
	        variants: [
	          {begin: '\\s*\\.end\\s[a-zA-Z0-9]*'},
	          {begin: '^[ ]*\\.[a-zA-Z]*', relevance: 0},
	          {begin: '\\s:[a-zA-Z_0-9]*', relevance: 0},
	          {begin: '\\s(' + smali_keywords.join('|') + ')'}
	        ]
	      },
	      {
	        className: 'built_in',
	        variants : [
	          {
	            begin: '\\s('+smali_instr_low_prio.join('|')+')\\s'
	          },
	          {
	            begin: '\\s('+smali_instr_low_prio.join('|')+')((\\-|/)[a-zA-Z0-9]+)+\\s',
	            relevance: 10
	          },
	          {
	            begin: '\\s('+smali_instr_high_prio.join('|')+')((\\-|/)[a-zA-Z0-9]+)*\\s',
	            relevance: 10
	          },
	        ]
	      },
	      {
	        className: 'class',
	        begin: 'L[^\(;:\n]*;',
	        relevance: 0
	      },
	      {
	        begin: '[vp][0-9]+',
	      }
	    ]
	  };
	};

/***/ }),
/* 165 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';
	  var CHAR = {
	    className: 'string',
	    begin: '\\$.{1}'
	  };
	  var SYMBOL = {
	    className: 'symbol',
	    begin: '#' + hljs.UNDERSCORE_IDENT_RE
	  };
	  return {
	    aliases: ['st'],
	    keywords: 'self super nil true false thisContext', // only 6
	    contains: [
	      hljs.COMMENT('"', '"'),
	      hljs.APOS_STRING_MODE,
	      {
	        className: 'type',
	        begin: '\\b[A-Z][A-Za-z0-9_]*',
	        relevance: 0
	      },
	      {
	        begin: VAR_IDENT_RE + ':',
	        relevance: 0
	      },
	      hljs.C_NUMBER_MODE,
	      SYMBOL,
	      CHAR,
	      {
	        // This looks more complicated than needed to avoid combinatorial
	        // explosion under V8. It effectively means `| var1 var2 ... |` with
	        // whitespace adjacent to `|` being optional.
	        begin: '\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\|',
	        returnBegin: true, end: /\|/,
	        illegal: /\S/,
	        contains: [{begin: '(\\|[ ]*)?' + VAR_IDENT_RE}]
	      },
	      {
	        begin: '\\#\\(', end: '\\)',
	        contains: [
	          hljs.APOS_STRING_MODE,
	          CHAR,
	          hljs.C_NUMBER_MODE,
	          SYMBOL
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 166 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['ml'],
	    keywords: {
	      keyword:
	        /* according to Definition of Standard ML 97  */
	        'abstype and andalso as case datatype do else end eqtype ' +
	        'exception fn fun functor handle if in include infix infixr ' +
	        'let local nonfix of op open orelse raise rec sharing sig ' +
	        'signature struct structure then type val with withtype where while',
	      built_in:
	        /* built-in types according to basis library */
	        'array bool char exn int list option order real ref string substring vector unit word',
	      literal:
	        'true false NONE SOME LESS EQUAL GREATER nil'
	    },
	    illegal: /\/\/|>>/,
	    lexemes: '[a-z_]\\w*!?',
	    contains: [
	      {
	        className: 'literal',
	        begin: /\[(\|\|)?\]|\(\)/,
	        relevance: 0
	      },
	      hljs.COMMENT(
	        '\\(\\*',
	        '\\*\\)',
	        {
	          contains: ['self']
	        }
	      ),
	      { /* type variable */
	        className: 'symbol',
	        begin: '\'[A-Za-z_](?!\')[\\w\']*'
	        /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
	      },
	      { /* polymorphic variant */
	        className: 'type',
	        begin: '`[A-Z][\\w\']*'
	      },
	      { /* module or constructor */
	        className: 'type',
	        begin: '\\b[A-Z][\\w\']*',
	        relevance: 0
	      },
	      { /* don't color identifiers, but safely catch all identifiers with '*/
	        begin: '[a-z_]\\w*\'[\\w\']*'
	      },
	      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      {
	        className: 'number',
	        begin:
	          '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
	          '0[oO][0-7_]+[Lln]?|' +
	          '0[bB][01_]+[Lln]?|' +
	          '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
	        relevance: 0
	      },
	      {
	        begin: /[-=]>/ // relevance booster
	      }
	    ]
	  };
	};

/***/ }),
/* 167 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var CPP = hljs.getLanguage('cpp').exports;

	  // In SQF, a variable start with _
	  var VARIABLE = {
	    className: 'variable',
	    begin: /\b_+[a-zA-Z_]\w*/
	  };

	  // In SQF, a function should fit myTag_fnc_myFunction pattern
	  // https://community.bistudio.com/wiki/Functions_Library_(Arma_3)#Adding_a_Function
	  var FUNCTION = {
	    className: 'title',
	    begin: /[a-zA-Z][a-zA-Z0-9]+_fnc_\w*/
	  };

	  // In SQF strings, quotes matching the start are escaped by adding a consecutive.
	  // Example of single escaped quotes: " "" " and  ' '' '.
	  var STRINGS = {
	    className: 'string',
	    variants: [
	      {
	        begin: '"',
	        end: '"',
	        contains: [{begin: '""', relevance: 0}]
	      },
	      {
	        begin: '\'',
	        end: '\'',
	        contains: [{begin: '\'\'', relevance: 0}]
	      }
	    ]
	  };

	  return {
	    aliases: ['sqf'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'case catch default do else exit exitWith for forEach from if ' +
	        'switch then throw to try waitUntil while with',
	      built_in:
	        'abs accTime acos action actionIDs actionKeys actionKeysImages actionKeysNames ' +
	        'actionKeysNamesArray actionName actionParams activateAddons activatedAddons activateKey ' +
	        'add3DENConnection add3DENEventHandler add3DENLayer addAction addBackpack addBackpackCargo ' +
	        'addBackpackCargoGlobal addBackpackGlobal addCamShake addCuratorAddons addCuratorCameraArea ' +
	        'addCuratorEditableObjects addCuratorEditingArea addCuratorPoints addEditorObject addEventHandler ' +
	        'addGoggles addGroupIcon addHandgunItem addHeadgear addItem addItemCargo addItemCargoGlobal ' +
	        'addItemPool addItemToBackpack addItemToUniform addItemToVest addLiveStats addMagazine ' +
	        'addMagazineAmmoCargo addMagazineCargo addMagazineCargoGlobal addMagazineGlobal addMagazinePool ' +
	        'addMagazines addMagazineTurret addMenu addMenuItem addMissionEventHandler addMPEventHandler ' +
	        'addMusicEventHandler addOwnedMine addPlayerScores addPrimaryWeaponItem ' +
	        'addPublicVariableEventHandler addRating addResources addScore addScoreSide addSecondaryWeaponItem ' +
	        'addSwitchableUnit addTeamMember addToRemainsCollector addUniform addVehicle addVest addWaypoint ' +
	        'addWeapon addWeaponCargo addWeaponCargoGlobal addWeaponGlobal addWeaponItem addWeaponPool ' +
	        'addWeaponTurret agent agents AGLToASL aimedAtTarget aimPos airDensityRTD airportSide ' +
	        'AISFinishHeal alive all3DENEntities allControls allCurators allCutLayers allDead allDeadMen ' +
	        'allDisplays allGroups allMapMarkers allMines allMissionObjects allow3DMode allowCrewInImmobile ' +
	        'allowCuratorLogicIgnoreAreas allowDamage allowDammage allowFileOperations allowFleeing allowGetIn ' +
	        'allowSprint allPlayers allSites allTurrets allUnits allUnitsUAV allVariables ammo and animate ' +
	        'animateDoor animateSource animationNames animationPhase animationSourcePhase animationState ' +
	        'append apply armoryPoints arrayIntersect asin ASLToAGL ASLToATL assert assignAsCargo ' +
	        'assignAsCargoIndex assignAsCommander assignAsDriver assignAsGunner assignAsTurret assignCurator ' +
	        'assignedCargo assignedCommander assignedDriver assignedGunner assignedItems assignedTarget ' +
	        'assignedTeam assignedVehicle assignedVehicleRole assignItem assignTeam assignToAirport atan atan2 ' +
	        'atg ATLToASL attachedObject attachedObjects attachedTo attachObject attachTo attackEnabled ' +
	        'backpack backpackCargo backpackContainer backpackItems backpackMagazines backpackSpaceFor ' +
	        'behaviour benchmark binocular blufor boundingBox boundingBoxReal boundingCenter breakOut breakTo ' +
	        'briefingName buildingExit buildingPos buttonAction buttonSetAction cadetMode call callExtension ' +
	        'camCommand camCommit camCommitPrepared camCommitted camConstuctionSetParams camCreate camDestroy ' +
	        'cameraEffect cameraEffectEnableHUD cameraInterest cameraOn cameraView campaignConfigFile ' +
	        'camPreload camPreloaded camPrepareBank camPrepareDir camPrepareDive camPrepareFocus camPrepareFov ' +
	        'camPrepareFovRange camPreparePos camPrepareRelPos camPrepareTarget camSetBank camSetDir ' +
	        'camSetDive camSetFocus camSetFov camSetFovRange camSetPos camSetRelPos camSetTarget camTarget ' +
	        'camUseNVG canAdd canAddItemToBackpack canAddItemToUniform canAddItemToVest ' +
	        'cancelSimpleTaskDestination canFire canMove canSlingLoad canStand canSuspend canUnloadInCombat ' +
	        'canVehicleCargo captive captiveNum cbChecked cbSetChecked ceil channelEnabled cheatsEnabled ' +
	        'checkAIFeature checkVisibility civilian className clearAllItemsFromBackpack clearBackpackCargo ' +
	        'clearBackpackCargoGlobal clearGroupIcons clearItemCargo clearItemCargoGlobal clearItemPool ' +
	        'clearMagazineCargo clearMagazineCargoGlobal clearMagazinePool clearOverlay clearRadio ' +
	        'clearWeaponCargo clearWeaponCargoGlobal clearWeaponPool clientOwner closeDialog closeDisplay ' +
	        'closeOverlay collapseObjectTree collect3DENHistory combatMode commandArtilleryFire commandChat ' +
	        'commander commandFire commandFollow commandFSM commandGetOut commandingMenu commandMove ' +
	        'commandRadio commandStop commandSuppressiveFire commandTarget commandWatch comment commitOverlay ' +
	        'compile compileFinal completedFSM composeText configClasses configFile configHierarchy configName ' +
	        'configNull configProperties configSourceAddonList configSourceMod configSourceModList ' +
	        'connectTerminalToUAV controlNull controlsGroupCtrl copyFromClipboard copyToClipboard ' +
	        'copyWaypoints cos count countEnemy countFriendly countSide countType countUnknown ' +
	        'create3DENComposition create3DENEntity createAgent createCenter createDialog createDiaryLink ' +
	        'createDiaryRecord createDiarySubject createDisplay createGearDialog createGroup ' +
	        'createGuardedPoint createLocation createMarker createMarkerLocal createMenu createMine ' +
	        'createMissionDisplay createMPCampaignDisplay createSimpleObject createSimpleTask createSite ' +
	        'createSoundSource createTask createTeam createTrigger createUnit createVehicle createVehicleCrew ' +
	        'createVehicleLocal crew ctrlActivate ctrlAddEventHandler ctrlAngle ctrlAutoScrollDelay ' +
	        'ctrlAutoScrollRewind ctrlAutoScrollSpeed ctrlChecked ctrlClassName ctrlCommit ctrlCommitted ' +
	        'ctrlCreate ctrlDelete ctrlEnable ctrlEnabled ctrlFade ctrlHTMLLoaded ctrlIDC ctrlIDD ' +
	        'ctrlMapAnimAdd ctrlMapAnimClear ctrlMapAnimCommit ctrlMapAnimDone ctrlMapCursor ctrlMapMouseOver ' +
	        'ctrlMapScale ctrlMapScreenToWorld ctrlMapWorldToScreen ctrlModel ctrlModelDirAndUp ctrlModelScale ' +
	        'ctrlParent ctrlParentControlsGroup ctrlPosition ctrlRemoveAllEventHandlers ctrlRemoveEventHandler ' +
	        'ctrlScale ctrlSetActiveColor ctrlSetAngle ctrlSetAutoScrollDelay ctrlSetAutoScrollRewind ' +
	        'ctrlSetAutoScrollSpeed ctrlSetBackgroundColor ctrlSetChecked ctrlSetEventHandler ctrlSetFade ' +
	        'ctrlSetFocus ctrlSetFont ctrlSetFontH1 ctrlSetFontH1B ctrlSetFontH2 ctrlSetFontH2B ctrlSetFontH3 ' +
	        'ctrlSetFontH3B ctrlSetFontH4 ctrlSetFontH4B ctrlSetFontH5 ctrlSetFontH5B ctrlSetFontH6 ' +
	        'ctrlSetFontH6B ctrlSetFontHeight ctrlSetFontHeightH1 ctrlSetFontHeightH2 ctrlSetFontHeightH3 ' +
	        'ctrlSetFontHeightH4 ctrlSetFontHeightH5 ctrlSetFontHeightH6 ctrlSetFontHeightSecondary ' +
	        'ctrlSetFontP ctrlSetFontPB ctrlSetFontSecondary ctrlSetForegroundColor ctrlSetModel ' +
	        'ctrlSetModelDirAndUp ctrlSetModelScale ctrlSetPosition ctrlSetScale ctrlSetStructuredText ' +
	        'ctrlSetText ctrlSetTextColor ctrlSetTooltip ctrlSetTooltipColorBox ctrlSetTooltipColorShade ' +
	        'ctrlSetTooltipColorText ctrlShow ctrlShown ctrlText ctrlTextHeight ctrlType ctrlVisible ' +
	        'curatorAddons curatorCamera curatorCameraArea curatorCameraAreaCeiling curatorCoef ' +
	        'curatorEditableObjects curatorEditingArea curatorEditingAreaType curatorMouseOver curatorPoints ' +
	        'curatorRegisteredObjects curatorSelected curatorWaypointCost current3DENOperation currentChannel ' +
	        'currentCommand currentMagazine currentMagazineDetail currentMagazineDetailTurret ' +
	        'currentMagazineTurret currentMuzzle currentNamespace currentTask currentTasks currentThrowable ' +
	        'currentVisionMode currentWaypoint currentWeapon currentWeaponMode currentWeaponTurret ' +
	        'currentZeroing cursorObject cursorTarget customChat customRadio cutFadeOut cutObj cutRsc cutText ' +
	        'damage date dateToNumber daytime deActivateKey debriefingText debugFSM debugLog deg ' +
	        'delete3DENEntities deleteAt deleteCenter deleteCollection deleteEditorObject deleteGroup ' +
	        'deleteIdentity deleteLocation deleteMarker deleteMarkerLocal deleteRange deleteResources ' +
	        'deleteSite deleteStatus deleteTeam deleteVehicle deleteVehicleCrew deleteWaypoint detach ' +
	        'detectedMines diag_activeMissionFSMs diag_activeScripts diag_activeSQFScripts ' +
	        'diag_activeSQSScripts diag_captureFrame diag_captureSlowFrame diag_codePerformance diag_drawMode ' +
	        'diag_enable diag_enabled diag_fps diag_fpsMin diag_frameNo diag_list diag_log diag_logSlowFrame ' +
	        'diag_mergeConfigFile diag_recordTurretLimits diag_tickTime diag_toggle dialog diarySubjectExists ' +
	        'didJIP didJIPOwner difficulty difficultyEnabled difficultyEnabledRTD difficultyOption direction ' +
	        'directSay disableAI disableCollisionWith disableConversation disableDebriefingStats ' +
	        'disableNVGEquipment disableRemoteSensors disableSerialization disableTIEquipment ' +
	        'disableUAVConnectability disableUserInput displayAddEventHandler displayCtrl displayNull ' +
	        'displayParent displayRemoveAllEventHandlers displayRemoveEventHandler displaySetEventHandler ' +
	        'dissolveTeam distance distance2D distanceSqr distributionRegion do3DENAction doArtilleryFire ' +
	        'doFire doFollow doFSM doGetOut doMove doorPhase doStop doSuppressiveFire doTarget doWatch ' +
	        'drawArrow drawEllipse drawIcon drawIcon3D drawLine drawLine3D drawLink drawLocation drawPolygon ' +
	        'drawRectangle driver drop east echo edit3DENMissionAttributes editObject editorSetEventHandler ' +
	        'effectiveCommander emptyPositions enableAI enableAIFeature enableAimPrecision enableAttack ' +
	        'enableAudioFeature enableCamShake enableCaustics enableChannel enableCollisionWith enableCopilot ' +
	        'enableDebriefingStats enableDiagLegend enableEndDialog enableEngineArtillery enableEnvironment ' +
	        'enableFatigue enableGunLights enableIRLasers enableMimics enablePersonTurret enableRadio ' +
	        'enableReload enableRopeAttach enableSatNormalOnDetail enableSaving enableSentences ' +
	        'enableSimulation enableSimulationGlobal enableStamina enableTeamSwitch enableUAVConnectability ' +
	        'enableUAVWaypoints enableVehicleCargo endLoadingScreen endMission engineOn enginesIsOnRTD ' +
	        'enginesRpmRTD enginesTorqueRTD entities estimatedEndServerTime estimatedTimeLeft ' +
	        'evalObjectArgument everyBackpack everyContainer exec execEditorScript execFSM execVM exp ' +
	        'expectedDestination exportJIPMessages eyeDirection eyePos face faction fadeMusic fadeRadio ' +
	        'fadeSound fadeSpeech failMission fillWeaponsFromPool find findCover findDisplay findEditorObject ' +
	        'findEmptyPosition findEmptyPositionReady findNearestEnemy finishMissionInit finite fire ' +
	        'fireAtTarget firstBackpack flag flagOwner flagSide flagTexture fleeing floor flyInHeight ' +
	        'flyInHeightASL fog fogForecast fogParams forceAddUniform forcedMap forceEnd forceMap forceRespawn ' +
	        'forceSpeed forceWalk forceWeaponFire forceWeatherChange forEachMember forEachMemberAgent ' +
	        'forEachMemberTeam format formation formationDirection formationLeader formationMembers ' +
	        'formationPosition formationTask formatText formLeader freeLook fromEditor fuel fullCrew ' +
	        'gearIDCAmmoCount gearSlotAmmoCount gearSlotData get3DENActionState get3DENAttribute get3DENCamera ' +
	        'get3DENConnections get3DENEntity get3DENEntityID get3DENGrid get3DENIconsVisible ' +
	        'get3DENLayerEntities get3DENLinesVisible get3DENMissionAttribute get3DENMouseOver get3DENSelected ' +
	        'getAimingCoef getAllHitPointsDamage getAllOwnedMines getAmmoCargo getAnimAimPrecision ' +
	        'getAnimSpeedCoef getArray getArtilleryAmmo getArtilleryComputerSettings getArtilleryETA ' +
	        'getAssignedCuratorLogic getAssignedCuratorUnit getBackpackCargo getBleedingRemaining ' +
	        'getBurningValue getCameraViewDirection getCargoIndex getCenterOfMass getClientState ' +
	        'getClientStateNumber getConnectedUAV getCustomAimingCoef getDammage getDescription getDir ' +
	        'getDirVisual getDLCs getEditorCamera getEditorMode getEditorObjectScope getElevationOffset ' +
	        'getFatigue getFriend getFSMVariable getFuelCargo getGroupIcon getGroupIconParams getGroupIcons ' +
	        'getHideFrom getHit getHitIndex getHitPointDamage getItemCargo getMagazineCargo getMarkerColor ' +
	        'getMarkerPos getMarkerSize getMarkerType getMass getMissionConfig getMissionConfigValue ' +
	        'getMissionDLCs getMissionLayerEntities getModelInfo getMousePosition getNumber getObjectArgument ' +
	        'getObjectChildren getObjectDLC getObjectMaterials getObjectProxy getObjectTextures getObjectType ' +
	        'getObjectViewDistance getOxygenRemaining getPersonUsedDLCs getPilotCameraDirection ' +
	        'getPilotCameraPosition getPilotCameraRotation getPilotCameraTarget getPlayerChannel ' +
	        'getPlayerScores getPlayerUID getPos getPosASL getPosASLVisual getPosASLW getPosATL ' +
	        'getPosATLVisual getPosVisual getPosWorld getRelDir getRelPos getRemoteSensorsDisabled ' +
	        'getRepairCargo getResolution getShadowDistance getShotParents getSlingLoad getSpeed getStamina ' +
	        'getStatValue getSuppression getTerrainHeightASL getText getUnitLoadout getUnitTrait getVariable ' +
	        'getVehicleCargo getWeaponCargo getWeaponSway getWPPos glanceAt globalChat globalRadio goggles ' +
	        'goto group groupChat groupFromNetId groupIconSelectable groupIconsVisible groupId groupOwner ' +
	        'groupRadio groupSelectedUnits groupSelectUnit grpNull gunner gusts halt handgunItems ' +
	        'handgunMagazine handgunWeapon handsHit hasInterface hasPilotCamera hasWeapon hcAllGroups ' +
	        'hcGroupParams hcLeader hcRemoveAllGroups hcRemoveGroup hcSelected hcSelectGroup hcSetGroup ' +
	        'hcShowBar hcShownBar headgear hideBody hideObject hideObjectGlobal hideSelection hint hintC ' +
	        'hintCadet hintSilent hmd hostMission htmlLoad HUDMovementLevels humidity image importAllGroups ' +
	        'importance in inArea inAreaArray incapacitatedState independent inflame inflamed ' +
	        'inGameUISetEventHandler inheritsFrom initAmbientLife inPolygon inputAction inRangeOfArtillery ' +
	        'insertEditorObject intersect is3DEN is3DENMultiplayer isAbleToBreathe isAgent isArray ' +
	        'isAutoHoverOn isAutonomous isAutotest isBleeding isBurning isClass isCollisionLightOn ' +
	        'isCopilotEnabled isDedicated isDLCAvailable isEngineOn isEqualTo isEqualType isEqualTypeAll ' +
	        'isEqualTypeAny isEqualTypeArray isEqualTypeParams isFilePatchingEnabled isFlashlightOn ' +
	        'isFlatEmpty isForcedWalk isFormationLeader isHidden isInRemainsCollector ' +
	        'isInstructorFigureEnabled isIRLaserOn isKeyActive isKindOf isLightOn isLocalized isManualFire ' +
	        'isMarkedForCollection isMultiplayer isMultiplayerSolo isNil isNull isNumber isObjectHidden ' +
	        'isObjectRTD isOnRoad isPipEnabled isPlayer isRealTime isRemoteExecuted isRemoteExecutedJIP ' +
	        'isServer isShowing3DIcons isSprintAllowed isStaminaEnabled isSteamMission ' +
	        'isStreamFriendlyUIEnabled isText isTouchingGround isTurnedOut isTutHintsEnabled isUAVConnectable ' +
	        'isUAVConnected isUniformAllowed isVehicleCargo isWalking isWeaponDeployed isWeaponRested ' +
	        'itemCargo items itemsWithMagazines join joinAs joinAsSilent joinSilent joinString kbAddDatabase ' +
	        'kbAddDatabaseTargets kbAddTopic kbHasTopic kbReact kbRemoveTopic kbTell kbWasSaid keyImage ' +
	        'keyName knowsAbout land landAt landResult language laserTarget lbAdd lbClear lbColor lbCurSel ' +
	        'lbData lbDelete lbIsSelected lbPicture lbSelection lbSetColor lbSetCurSel lbSetData lbSetPicture ' +
	        'lbSetPictureColor lbSetPictureColorDisabled lbSetPictureColorSelected lbSetSelectColor ' +
	        'lbSetSelectColorRight lbSetSelected lbSetTooltip lbSetValue lbSize lbSort lbSortByValue lbText ' +
	        'lbValue leader leaderboardDeInit leaderboardGetRows leaderboardInit leaveVehicle libraryCredits ' +
	        'libraryDisclaimers lifeState lightAttachObject lightDetachObject lightIsOn lightnings limitSpeed ' +
	        'linearConversion lineBreak lineIntersects lineIntersectsObjs lineIntersectsSurfaces ' +
	        'lineIntersectsWith linkItem list listObjects ln lnbAddArray lnbAddColumn lnbAddRow lnbClear ' +
	        'lnbColor lnbCurSelRow lnbData lnbDeleteColumn lnbDeleteRow lnbGetColumnsPosition lnbPicture ' +
	        'lnbSetColor lnbSetColumnsPos lnbSetCurSelRow lnbSetData lnbSetPicture lnbSetText lnbSetValue ' +
	        'lnbSize lnbText lnbValue load loadAbs loadBackpack loadFile loadGame loadIdentity loadMagazine ' +
	        'loadOverlay loadStatus loadUniform loadVest local localize locationNull locationPosition lock ' +
	        'lockCameraTo lockCargo lockDriver locked lockedCargo lockedDriver lockedTurret lockIdentity ' +
	        'lockTurret lockWP log logEntities logNetwork logNetworkTerminate lookAt lookAtPos magazineCargo ' +
	        'magazines magazinesAllTurrets magazinesAmmo magazinesAmmoCargo magazinesAmmoFull magazinesDetail ' +
	        'magazinesDetailBackpack magazinesDetailUniform magazinesDetailVest magazinesTurret ' +
	        'magazineTurretAmmo mapAnimAdd mapAnimClear mapAnimCommit mapAnimDone mapCenterOnCamera ' +
	        'mapGridPosition markAsFinishedOnSteam markerAlpha markerBrush markerColor markerDir markerPos ' +
	        'markerShape markerSize markerText markerType max members menuAction menuAdd menuChecked menuClear ' +
	        'menuCollapse menuData menuDelete menuEnable menuEnabled menuExpand menuHover menuPicture ' +
	        'menuSetAction menuSetCheck menuSetData menuSetPicture menuSetValue menuShortcut menuShortcutText ' +
	        'menuSize menuSort menuText menuURL menuValue min mineActive mineDetectedBy missionConfigFile ' +
	        'missionDifficulty missionName missionNamespace missionStart missionVersion mod modelToWorld ' +
	        'modelToWorldVisual modParams moonIntensity moonPhase morale move move3DENCamera moveInAny ' +
	        'moveInCargo moveInCommander moveInDriver moveInGunner moveInTurret moveObjectToEnd moveOut ' +
	        'moveTime moveTo moveToCompleted moveToFailed musicVolume name nameSound nearEntities ' +
	        'nearestBuilding nearestLocation nearestLocations nearestLocationWithDubbing nearestObject ' +
	        'nearestObjects nearestTerrainObjects nearObjects nearObjectsReady nearRoads nearSupplies ' +
	        'nearTargets needReload netId netObjNull newOverlay nextMenuItemIndex nextWeatherChange nMenuItems ' +
	        'not numberToDate objectCurators objectFromNetId objectParent objNull objStatus onBriefingGroup ' +
	        'onBriefingNotes onBriefingPlan onBriefingTeamSwitch onCommandModeChanged onDoubleClick ' +
	        'onEachFrame onGroupIconClick onGroupIconOverEnter onGroupIconOverLeave onHCGroupSelectionChanged ' +
	        'onMapSingleClick onPlayerConnected onPlayerDisconnected onPreloadFinished onPreloadStarted ' +
	        'onShowNewObject onTeamSwitch openCuratorInterface openDLCPage openMap openYoutubeVideo opfor or ' +
	        'orderGetIn overcast overcastForecast owner param params parseNumber parseText parsingNamespace ' +
	        'particlesQuality pi pickWeaponPool pitch pixelGrid pixelGridBase pixelGridNoUIScale pixelH pixelW ' +
	        'playableSlotsNumber playableUnits playAction playActionNow player playerRespawnTime playerSide ' +
	        'playersNumber playGesture playMission playMove playMoveNow playMusic playScriptedMission ' +
	        'playSound playSound3D position positionCameraToWorld posScreenToWorld posWorldToScreen ' +
	        'ppEffectAdjust ppEffectCommit ppEffectCommitted ppEffectCreate ppEffectDestroy ppEffectEnable ' +
	        'ppEffectEnabled ppEffectForceInNVG precision preloadCamera preloadObject preloadSound ' +
	        'preloadTitleObj preloadTitleRsc preprocessFile preprocessFileLineNumbers primaryWeapon ' +
	        'primaryWeaponItems primaryWeaponMagazine priority private processDiaryLink productVersion ' +
	        'profileName profileNamespace profileNameSteam progressLoadingScreen progressPosition ' +
	        'progressSetPosition publicVariable publicVariableClient publicVariableServer pushBack ' +
	        'pushBackUnique putWeaponPool queryItemsPool queryMagazinePool queryWeaponPool rad radioChannelAdd ' +
	        'radioChannelCreate radioChannelRemove radioChannelSetCallSign radioChannelSetLabel radioVolume ' +
	        'rain rainbow random rank rankId rating rectangular registeredTasks registerTask reload ' +
	        'reloadEnabled remoteControl remoteExec remoteExecCall remove3DENConnection remove3DENEventHandler ' +
	        'remove3DENLayer removeAction removeAll3DENEventHandlers removeAllActions removeAllAssignedItems ' +
	        'removeAllContainers removeAllCuratorAddons removeAllCuratorCameraAreas ' +
	        'removeAllCuratorEditingAreas removeAllEventHandlers removeAllHandgunItems removeAllItems ' +
	        'removeAllItemsWithMagazines removeAllMissionEventHandlers removeAllMPEventHandlers ' +
	        'removeAllMusicEventHandlers removeAllOwnedMines removeAllPrimaryWeaponItems removeAllWeapons ' +
	        'removeBackpack removeBackpackGlobal removeCuratorAddons removeCuratorCameraArea ' +
	        'removeCuratorEditableObjects removeCuratorEditingArea removeDrawIcon removeDrawLinks ' +
	        'removeEventHandler removeFromRemainsCollector removeGoggles removeGroupIcon removeHandgunItem ' +
	        'removeHeadgear removeItem removeItemFromBackpack removeItemFromUniform removeItemFromVest ' +
	        'removeItems removeMagazine removeMagazineGlobal removeMagazines removeMagazinesTurret ' +
	        'removeMagazineTurret removeMenuItem removeMissionEventHandler removeMPEventHandler ' +
	        'removeMusicEventHandler removeOwnedMine removePrimaryWeaponItem removeSecondaryWeaponItem ' +
	        'removeSimpleTask removeSwitchableUnit removeTeamMember removeUniform removeVest removeWeapon ' +
	        'removeWeaponGlobal removeWeaponTurret requiredVersion resetCamShake resetSubgroupDirection ' +
	        'resistance resize resources respawnVehicle restartEditorCamera reveal revealMine reverse ' +
	        'reversedMouseY roadAt roadsConnectedTo roleDescription ropeAttachedObjects ropeAttachedTo ' +
	        'ropeAttachEnabled ropeAttachTo ropeCreate ropeCut ropeDestroy ropeDetach ropeEndPosition ' +
	        'ropeLength ropes ropeUnwind ropeUnwound rotorsForcesRTD rotorsRpmRTD round runInitScript ' +
	        'safeZoneH safeZoneW safeZoneWAbs safeZoneX safeZoneXAbs safeZoneY save3DENInventory saveGame ' +
	        'saveIdentity saveJoysticks saveOverlay saveProfileNamespace saveStatus saveVar savingEnabled say ' +
	        'say2D say3D scopeName score scoreSide screenshot screenToWorld scriptDone scriptName scriptNull ' +
	        'scudState secondaryWeapon secondaryWeaponItems secondaryWeaponMagazine select selectBestPlaces ' +
	        'selectDiarySubject selectedEditorObjects selectEditorObject selectionNames selectionPosition ' +
	        'selectLeader selectMax selectMin selectNoPlayer selectPlayer selectRandom selectWeapon ' +
	        'selectWeaponTurret sendAUMessage sendSimpleCommand sendTask sendTaskResult sendUDPMessage ' +
	        'serverCommand serverCommandAvailable serverCommandExecutable serverName serverTime set ' +
	        'set3DENAttribute set3DENAttributes set3DENGrid set3DENIconsVisible set3DENLayer ' +
	        'set3DENLinesVisible set3DENMissionAttributes set3DENModelsVisible set3DENObjectType ' +
	        'set3DENSelected setAccTime setAirportSide setAmmo setAmmoCargo setAnimSpeedCoef setAperture ' +
	        'setApertureNew setArmoryPoints setAttributes setAutonomous setBehaviour setBleedingRemaining ' +
	        'setCameraInterest setCamShakeDefParams setCamShakeParams setCamUseTi setCaptive setCenterOfMass ' +
	        'setCollisionLight setCombatMode setCompassOscillation setCuratorCameraAreaCeiling setCuratorCoef ' +
	        'setCuratorEditingAreaType setCuratorWaypointCost setCurrentChannel setCurrentTask ' +
	        'setCurrentWaypoint setCustomAimCoef setDamage setDammage setDate setDebriefingText ' +
	        'setDefaultCamera setDestination setDetailMapBlendPars setDir setDirection setDrawIcon ' +
	        'setDropInterval setEditorMode setEditorObjectScope setEffectCondition setFace setFaceAnimation ' +
	        'setFatigue setFlagOwner setFlagSide setFlagTexture setFog setFormation setFormationTask ' +
	        'setFormDir setFriend setFromEditor setFSMVariable setFuel setFuelCargo setGroupIcon ' +
	        'setGroupIconParams setGroupIconsSelectable setGroupIconsVisible setGroupId setGroupIdGlobal ' +
	        'setGroupOwner setGusts setHideBehind setHit setHitIndex setHitPointDamage setHorizonParallaxCoef ' +
	        'setHUDMovementLevels setIdentity setImportance setLeader setLightAmbient setLightAttenuation ' +
	        'setLightBrightness setLightColor setLightDayLight setLightFlareMaxDistance setLightFlareSize ' +
	        'setLightIntensity setLightnings setLightUseFlare setLocalWindParams setMagazineTurretAmmo ' +
	        'setMarkerAlpha setMarkerAlphaLocal setMarkerBrush setMarkerBrushLocal setMarkerColor ' +
	        'setMarkerColorLocal setMarkerDir setMarkerDirLocal setMarkerPos setMarkerPosLocal setMarkerShape ' +
	        'setMarkerShapeLocal setMarkerSize setMarkerSizeLocal setMarkerText setMarkerTextLocal ' +
	        'setMarkerType setMarkerTypeLocal setMass setMimic setMousePosition setMusicEffect ' +
	        'setMusicEventHandler setName setNameSound setObjectArguments setObjectMaterial ' +
	        'setObjectMaterialGlobal setObjectProxy setObjectTexture setObjectTextureGlobal ' +
	        'setObjectViewDistance setOvercast setOwner setOxygenRemaining setParticleCircle setParticleClass ' +
	        'setParticleFire setParticleParams setParticleRandom setPilotCameraDirection ' +
	        'setPilotCameraRotation setPilotCameraTarget setPilotLight setPiPEffect setPitch setPlayable ' +
	        'setPlayerRespawnTime setPos setPosASL setPosASL2 setPosASLW setPosATL setPosition setPosWorld ' +
	        'setRadioMsg setRain setRainbow setRandomLip setRank setRectangular setRepairCargo ' +
	        'setShadowDistance setShotParents setSide setSimpleTaskAlwaysVisible setSimpleTaskCustomData ' +
	        'setSimpleTaskDescription setSimpleTaskDestination setSimpleTaskTarget setSimpleTaskType ' +
	        'setSimulWeatherLayers setSize setSkill setSlingLoad setSoundEffect setSpeaker setSpeech ' +
	        'setSpeedMode setStamina setStaminaScheme setStatValue setSuppression setSystemOfUnits ' +
	        'setTargetAge setTaskResult setTaskState setTerrainGrid setText setTimeMultiplier setTitleEffect ' +
	        'setTriggerActivation setTriggerArea setTriggerStatements setTriggerText setTriggerTimeout ' +
	        'setTriggerType setType setUnconscious setUnitAbility setUnitLoadout setUnitPos setUnitPosWeak ' +
	        'setUnitRank setUnitRecoilCoefficient setUnitTrait setUnloadInCombat setUserActionText setVariable ' +
	        'setVectorDir setVectorDirAndUp setVectorUp setVehicleAmmo setVehicleAmmoDef setVehicleArmor ' +
	        'setVehicleCargo setVehicleId setVehicleLock setVehiclePosition setVehicleTiPars setVehicleVarName ' +
	        'setVelocity setVelocityTransformation setViewDistance setVisibleIfTreeCollapsed setWaves ' +
	        'setWaypointBehaviour setWaypointCombatMode setWaypointCompletionRadius setWaypointDescription ' +
	        'setWaypointForceBehaviour setWaypointFormation setWaypointHousePosition setWaypointLoiterRadius ' +
	        'setWaypointLoiterType setWaypointName setWaypointPosition setWaypointScript setWaypointSpeed ' +
	        'setWaypointStatements setWaypointTimeout setWaypointType setWaypointVisible ' +
	        'setWeaponReloadingTime setWind setWindDir setWindForce setWindStr setWPPos show3DIcons showChat ' +
	        'showCinemaBorder showCommandingMenu showCompass showCuratorCompass showGPS showHUD showLegend ' +
	        'showMap shownArtilleryComputer shownChat shownCompass shownCuratorCompass showNewEditorObject ' +
	        'shownGPS shownHUD shownMap shownPad shownRadio shownScoretable shownUAVFeed shownWarrant ' +
	        'shownWatch showPad showRadio showScoretable showSubtitles showUAVFeed showWarrant showWatch ' +
	        'showWaypoint showWaypoints side sideAmbientLife sideChat sideEmpty sideEnemy sideFriendly ' +
	        'sideLogic sideRadio sideUnknown simpleTasks simulationEnabled simulCloudDensity ' +
	        'simulCloudOcclusion simulInClouds simulWeatherSync sin size sizeOf skill skillFinal skipTime ' +
	        'sleep sliderPosition sliderRange sliderSetPosition sliderSetRange sliderSetSpeed sliderSpeed ' +
	        'slingLoadAssistantShown soldierMagazines someAmmo sort soundVolume spawn speaker speed speedMode ' +
	        'splitString sqrt squadParams stance startLoadingScreen step stop stopEngineRTD stopped str ' +
	        'sunOrMoon supportInfo suppressFor surfaceIsWater surfaceNormal surfaceType swimInDepth ' +
	        'switchableUnits switchAction switchCamera switchGesture switchLight switchMove ' +
	        'synchronizedObjects synchronizedTriggers synchronizedWaypoints synchronizeObjectsAdd ' +
	        'synchronizeObjectsRemove synchronizeTrigger synchronizeWaypoint systemChat systemOfUnits tan ' +
	        'targetKnowledge targetsAggregate targetsQuery taskAlwaysVisible taskChildren taskCompleted ' +
	        'taskCustomData taskDescription taskDestination taskHint taskMarkerOffset taskNull taskParent ' +
	        'taskResult taskState taskType teamMember teamMemberNull teamName teams teamSwitch ' +
	        'teamSwitchEnabled teamType terminate terrainIntersect terrainIntersectASL text textLog ' +
	        'textLogFormat tg time timeMultiplier titleCut titleFadeOut titleObj titleRsc titleText toArray ' +
	        'toFixed toLower toString toUpper triggerActivated triggerActivation triggerArea ' +
	        'triggerAttachedVehicle triggerAttachObject triggerAttachVehicle triggerStatements triggerText ' +
	        'triggerTimeout triggerTimeoutCurrent triggerType turretLocal turretOwner turretUnit tvAdd tvClear ' +
	        'tvCollapse tvCount tvCurSel tvData tvDelete tvExpand tvPicture tvSetCurSel tvSetData tvSetPicture ' +
	        'tvSetPictureColor tvSetPictureColorDisabled tvSetPictureColorSelected tvSetPictureRight ' +
	        'tvSetPictureRightColor tvSetPictureRightColorDisabled tvSetPictureRightColorSelected tvSetText ' +
	        'tvSetTooltip tvSetValue tvSort tvSortByValue tvText tvTooltip tvValue type typeName typeOf ' +
	        'UAVControl uiNamespace uiSleep unassignCurator unassignItem unassignTeam unassignVehicle ' +
	        'underwater uniform uniformContainer uniformItems uniformMagazines unitAddons unitAimPosition ' +
	        'unitAimPositionVisual unitBackpack unitIsUAV unitPos unitReady unitRecoilCoefficient units ' +
	        'unitsBelowHeight unlinkItem unlockAchievement unregisterTask updateDrawIcon updateMenuItem ' +
	        'updateObjectTree useAISteeringComponent useAudioTimeForMoves vectorAdd vectorCos ' +
	        'vectorCrossProduct vectorDiff vectorDir vectorDirVisual vectorDistance vectorDistanceSqr ' +
	        'vectorDotProduct vectorFromTo vectorMagnitude vectorMagnitudeSqr vectorMultiply vectorNormalized ' +
	        'vectorUp vectorUpVisual vehicle vehicleCargoEnabled vehicleChat vehicleRadio vehicles ' +
	        'vehicleVarName velocity velocityModelSpace verifySignature vest vestContainer vestItems ' +
	        'vestMagazines viewDistance visibleCompass visibleGPS visibleMap visiblePosition ' +
	        'visiblePositionASL visibleScoretable visibleWatch waves waypointAttachedObject ' +
	        'waypointAttachedVehicle waypointAttachObject waypointAttachVehicle waypointBehaviour ' +
	        'waypointCombatMode waypointCompletionRadius waypointDescription waypointForceBehaviour ' +
	        'waypointFormation waypointHousePosition waypointLoiterRadius waypointLoiterType waypointName ' +
	        'waypointPosition waypoints waypointScript waypointsEnabledUAV waypointShow waypointSpeed ' +
	        'waypointStatements waypointTimeout waypointTimeoutCurrent waypointType waypointVisible ' +
	        'weaponAccessories weaponAccessoriesCargo weaponCargo weaponDirection weaponInertia weaponLowered ' +
	        'weapons weaponsItems weaponsItemsCargo weaponState weaponsTurret weightRTD west WFSideText wind',
	      literal:
	        'true false nil'
	    },
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.NUMBER_MODE,
	      VARIABLE,
	      FUNCTION,
	      STRINGS,
	      CPP.preprocessor
	    ],
	    illegal: /#/
	  };
	};

/***/ }),
/* 168 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var COMMENT_MODE = hljs.COMMENT('--', '$');
	  return {
	    case_insensitive: true,
	    illegal: /[<>{}*#]/,
	    contains: [
	      {
	        beginKeywords:
	          'begin end start commit rollback savepoint lock alter create drop rename call ' +
	          'delete do handler insert load replace select truncate update set show pragma grant ' +
	          'merge describe use explain help declare prepare execute deallocate release ' +
	          'unlock purge reset change stop analyze cache flush optimize repair kill ' +
	          'install uninstall checksum restore check backup revoke comment',
	        end: /;/, endsWithParent: true,
	        lexemes: /[\w\.]+/,
	        keywords: {
	          keyword:
	            'abort abs absolute acc acce accep accept access accessed accessible account acos action activate add ' +
	            'addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias ' +
	            'allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply ' +
	            'archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan ' +
	            'atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid ' +
	            'authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile ' +
	            'before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float ' +
	            'binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound ' +
	            'buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel ' +
	            'capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base ' +
	            'char_length character_length characters characterset charindex charset charsetform charsetid check ' +
	            'checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close ' +
	            'cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation ' +
	            'collect colu colum column column_value columns columns_updated comment commit compact compatibility ' +
	            'compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn ' +
	            'connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection ' +
	            'consider consistent constant constraint constraints constructor container content contents context ' +
	            'contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost ' +
	            'count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation ' +
	            'critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user ' +
	            'cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add ' +
	            'date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts ' +
	            'day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate ' +
	            'declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults ' +
	            'deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank ' +
	            'depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor ' +
	            'deterministic diagnostics difference dimension direct_load directory disable disable_all ' +
	            'disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div ' +
	            'do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable ' +
	            'editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt ' +
	            'end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors ' +
	            'escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding ' +
	            'execu execut execute exempt exists exit exp expire explain export export_set extended extent external ' +
	            'external_1 external_2 externally extract failed failed_login_attempts failover failure far fast ' +
	            'feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final ' +
	            'finish first first_value fixed flash_cache flashback floor flush following follows for forall force ' +
	            'form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ' +
	            'ftp full function general generated get get_format get_lock getdate getutcdate global global_name ' +
	            'globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups ' +
	            'gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex ' +
	            'hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified ' +
	            'identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment ' +
	            'index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile ' +
	            'initial initialized initially initrans inmemory inner innodb input insert install instance instantiable ' +
	            'instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat ' +
	            'is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists ' +
	            'keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase ' +
	            'lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit ' +
	            'lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate ' +
	            'locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call ' +
	            'logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime ' +
	            'managed management manual map mapping mask master master_pos_wait match matched materialized max ' +
	            'maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans ' +
	            'md5 measures median medium member memcompress memory merge microsecond mid migration min minextents ' +
	            'minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month ' +
	            'months mount move movement multiset mutex name name_const names nan national native natural nav nchar ' +
	            'nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile ' +
	            'nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile ' +
	            'nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder ' +
	            'nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck ' +
	            'noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe ' +
	            'nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ' +
	            'ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old ' +
	            'on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date ' +
	            'oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary ' +
	            'out outer outfile outline output over overflow overriding package pad parallel parallel_enable ' +
	            'parameters parent parse partial partition partitions pascal passing password password_grace_time ' +
	            'password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex ' +
	            'pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc ' +
	            'performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin ' +
	            'policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction ' +
	            'prediction_cost prediction_details prediction_probability prediction_set prepare present preserve ' +
	            'prior priority private private_sga privileges procedural procedure procedure_analyze processlist ' +
	            'profiles project prompt protection public publishingservername purge quarter query quick quiesce quota ' +
	            'quotename radians raise rand range rank raw read reads readsize rebuild record records ' +
	            'recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh ' +
	            'regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy ' +
	            'reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename ' +
	            'repair repeat replace replicate replication required reset resetlogs resize resource respect restore ' +
	            'restricted result result_cache resumable resume retention return returning returns reuse reverse revoke ' +
	            'right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows ' +
	            'rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll ' +
	            'sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select ' +
	            'self sequence sequential serializable server servererror session session_user sessions_per_user set ' +
	            'sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor ' +
	            'si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin ' +
	            'size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex ' +
	            'source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows ' +
	            'sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone ' +
	            'standby start starting startup statement static statistics stats_binomial_test stats_crosstab ' +
	            'stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep ' +
	            'stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev ' +
	            'stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate ' +
	            'subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum ' +
	            'suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate ' +
	            'sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo ' +
	            'template temporary terminated tertiary_weights test than then thread through tier ties time time_format ' +
	            'time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr ' +
	            'timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking ' +
	            'transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate ' +
	            'try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress ' +
	            'under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot ' +
	            'unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert ' +
	            'url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date ' +
	            'utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var ' +
	            'var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray ' +
	            'verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear ' +
	            'wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped ' +
	            'xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces ' +
	            'xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek',
	          literal:
	            'true false null',
	          built_in:
	            'array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number ' +
	            'numeric real record serial serial8 smallint text varchar varying void'
	        },
	        contains: [
	          {
	            className: 'string',
	            begin: '\'', end: '\'',
	            contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
	          },
	          {
	            className: 'string',
	            begin: '"', end: '"',
	            contains: [hljs.BACKSLASH_ESCAPE, {begin: '""'}]
	          },
	          {
	            className: 'string',
	            begin: '`', end: '`',
	            contains: [hljs.BACKSLASH_ESCAPE]
	          },
	          hljs.C_NUMBER_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          COMMENT_MODE
	        ]
	      },
	      hljs.C_BLOCK_COMMENT_MODE,
	      COMMENT_MODE
	    ]
	  };
	};

/***/ }),
/* 169 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        begin: hljs.UNDERSCORE_IDENT_RE,
	        lexemes: hljs.UNDERSCORE_IDENT_RE,
	        keywords: {
	          // Stan's keywords
	          name:
	            'for in while repeat until if then else',
	          // Stan's probablity distributions (less beta and gamma, as commonly
	          // used for parameter names). So far, _log and _rng variants are not
	          // included
	          symbol:
	            'bernoulli bernoulli_logit binomial binomial_logit '               +
	            'beta_binomial hypergeometric categorical categorical_logit '      +
	            'ordered_logistic neg_binomial neg_binomial_2 '                    +
	            'neg_binomial_2_log poisson poisson_log multinomial normal '       +
	            'exp_mod_normal skew_normal student_t cauchy double_exponential '  +
	            'logistic gumbel lognormal chi_square inv_chi_square '             +
	            'scaled_inv_chi_square exponential inv_gamma weibull frechet '     +
	            'rayleigh wiener pareto pareto_type_2 von_mises uniform '          +
	            'multi_normal multi_normal_prec multi_normal_cholesky multi_gp '   +
	            'multi_gp_cholesky multi_student_t gaussian_dlm_obs dirichlet '    +
	            'lkj_corr lkj_corr_cholesky wishart inv_wishart',
	          // Stan's data types
	          'selector-tag':
	            'int real vector simplex unit_vector ordered positive_ordered '    +
	            'row_vector matrix cholesky_factor_corr cholesky_factor_cov '      +
	            'corr_matrix cov_matrix',
	          // Stan's model blocks
	          title:
	            'functions model data parameters quantities transformed '          +
	            'generated',
	          literal:
	            'true false'
	        },
	        relevance: 0
	      },
	      // The below is all taken from the R language definition
	      {
	        // hex value
	        className: 'number',
	        begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
	        relevance: 0
	      },
	      {
	        // hex value
	        className: 'number',
	        begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
	        relevance: 0
	      },
	      {
	        // explicit integer
	        className: 'number',
	        begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
	        relevance: 0
	      },
	      {
	        // number with trailing decimal
	        className: 'number',
	        begin: "\\d+\\.(?!\\d)(?:i\\b)?",
	        relevance: 0
	      },
	      {
	        // number
	        className: 'number',
	        begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
	        relevance: 0
	      },
	      {
	        // number with leading decimal
	        className: 'number',
	        begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
	        relevance: 0
	      }
	    ]
	  };
	};

/***/ }),
/* 170 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['do', 'ado'],
	    case_insensitive: true,
	    keywords: 'if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d|0 datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e|0 ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate g|0 gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h|0 hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l|0 la lab labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m|0 ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize meqparse mer merg merge mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n|0 nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u|0 unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5',
	        contains: [
	      {
	        className: 'symbol',
	        begin: /`[a-zA-Z0-9_]+'/
	      },
	      {
	        className: 'variable',
	        begin: /\$\{?[a-zA-Z0-9_]+\}?/
	      },
	      {
	        className: 'string',
	        variants: [
	          {begin: '`"[^\r\n]*?"\''},
	          {begin: '"[^\r\n"]*"'}
	        ]
	      },

	      {
	        className: 'built_in',
	        variants: [
	          {
	            begin: '\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\(|$)'
	          }
	        ]
	      },

	      hljs.COMMENT('^[ \t]*\\*.*$', false),
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE
	    ]
	  };
	};

/***/ }),
/* 171 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
	  var STEP21_KEYWORDS = {
	    keyword: 'HEADER ENDSEC DATA'
	  };
	  var STEP21_START = {
	    className: 'meta',
	    begin: 'ISO-10303-21;',
	    relevance: 10
	  };
	  var STEP21_CLOSE = {
	    className: 'meta',
	    begin: 'END-ISO-10303-21;',
	    relevance: 10
	  };

	  return {
	    aliases: ['p21', 'step', 'stp'],
	    case_insensitive: true, // STEP 21 is case insensitive in theory, in practice all non-comments are capitalized.
	    lexemes: STEP21_IDENT_RE,
	    keywords: STEP21_KEYWORDS,
	    contains: [
	      STEP21_START,
	      STEP21_CLOSE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.COMMENT('/\\*\\*!', '\\*/'),
	      hljs.C_NUMBER_MODE,
	      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
	      {
	        className: 'string',
	        begin: "'", end: "'"
	      },
	      {
	        className: 'symbol',
	        variants: [
	          {
	            begin: '#', end: '\\d+',
	            illegal: '\\W'
	          }
	        ]
	      }
	    ]
	  };
	};

/***/ }),
/* 172 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {

	  var VARIABLE = {
	    className: 'variable',
	    begin: '\\$' + hljs.IDENT_RE
	  };

	  var HEX_COLOR = {
	    className: 'number',
	    begin: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})'
	  };

	  var AT_KEYWORDS = [
	    'charset',
	    'css',
	    'debug',
	    'extend',
	    'font-face',
	    'for',
	    'import',
	    'include',
	    'media',
	    'mixin',
	    'page',
	    'warn',
	    'while'
	  ];

	  var PSEUDO_SELECTORS = [
	    'after',
	    'before',
	    'first-letter',
	    'first-line',
	    'active',
	    'first-child',
	    'focus',
	    'hover',
	    'lang',
	    'link',
	    'visited'
	  ];

	  var TAGS = [
	    'a',
	    'abbr',
	    'address',
	    'article',
	    'aside',
	    'audio',
	    'b',
	    'blockquote',
	    'body',
	    'button',
	    'canvas',
	    'caption',
	    'cite',
	    'code',
	    'dd',
	    'del',
	    'details',
	    'dfn',
	    'div',
	    'dl',
	    'dt',
	    'em',
	    'fieldset',
	    'figcaption',
	    'figure',
	    'footer',
	    'form',
	    'h1',
	    'h2',
	    'h3',
	    'h4',
	    'h5',
	    'h6',
	    'header',
	    'hgroup',
	    'html',
	    'i',
	    'iframe',
	    'img',
	    'input',
	    'ins',
	    'kbd',
	    'label',
	    'legend',
	    'li',
	    'mark',
	    'menu',
	    'nav',
	    'object',
	    'ol',
	    'p',
	    'q',
	    'quote',
	    'samp',
	    'section',
	    'span',
	    'strong',
	    'summary',
	    'sup',
	    'table',
	    'tbody',
	    'td',
	    'textarea',
	    'tfoot',
	    'th',
	    'thead',
	    'time',
	    'tr',
	    'ul',
	    'var',
	    'video'
	  ];

	  var TAG_END = '[\\.\\s\\n\\[\\:,]';

	  var ATTRIBUTES = [
	    'align-content',
	    'align-items',
	    'align-self',
	    'animation',
	    'animation-delay',
	    'animation-direction',
	    'animation-duration',
	    'animation-fill-mode',
	    'animation-iteration-count',
	    'animation-name',
	    'animation-play-state',
	    'animation-timing-function',
	    'auto',
	    'backface-visibility',
	    'background',
	    'background-attachment',
	    'background-clip',
	    'background-color',
	    'background-image',
	    'background-origin',
	    'background-position',
	    'background-repeat',
	    'background-size',
	    'border',
	    'border-bottom',
	    'border-bottom-color',
	    'border-bottom-left-radius',
	    'border-bottom-right-radius',
	    'border-bottom-style',
	    'border-bottom-width',
	    'border-collapse',
	    'border-color',
	    'border-image',
	    'border-image-outset',
	    'border-image-repeat',
	    'border-image-slice',
	    'border-image-source',
	    'border-image-width',
	    'border-left',
	    'border-left-color',
	    'border-left-style',
	    'border-left-width',
	    'border-radius',
	    'border-right',
	    'border-right-color',
	    'border-right-style',
	    'border-right-width',
	    'border-spacing',
	    'border-style',
	    'border-top',
	    'border-top-color',
	    'border-top-left-radius',
	    'border-top-right-radius',
	    'border-top-style',
	    'border-top-width',
	    'border-width',
	    'bottom',
	    'box-decoration-break',
	    'box-shadow',
	    'box-sizing',
	    'break-after',
	    'break-before',
	    'break-inside',
	    'caption-side',
	    'clear',
	    'clip',
	    'clip-path',
	    'color',
	    'column-count',
	    'column-fill',
	    'column-gap',
	    'column-rule',
	    'column-rule-color',
	    'column-rule-style',
	    'column-rule-width',
	    'column-span',
	    'column-width',
	    'columns',
	    'content',
	    'counter-increment',
	    'counter-reset',
	    'cursor',
	    'direction',
	    'display',
	    'empty-cells',
	    'filter',
	    'flex',
	    'flex-basis',
	    'flex-direction',
	    'flex-flow',
	    'flex-grow',
	    'flex-shrink',
	    'flex-wrap',
	    'float',
	    'font',
	    'font-family',
	    'font-feature-settings',
	    'font-kerning',
	    'font-language-override',
	    'font-size',
	    'font-size-adjust',
	    'font-stretch',
	    'font-style',
	    'font-variant',
	    'font-variant-ligatures',
	    'font-weight',
	    'height',
	    'hyphens',
	    'icon',
	    'image-orientation',
	    'image-rendering',
	    'image-resolution',
	    'ime-mode',
	    'inherit',
	    'initial',
	    'justify-content',
	    'left',
	    'letter-spacing',
	    'line-height',
	    'list-style',
	    'list-style-image',
	    'list-style-position',
	    'list-style-type',
	    'margin',
	    'margin-bottom',
	    'margin-left',
	    'margin-right',
	    'margin-top',
	    'marks',
	    'mask',
	    'max-height',
	    'max-width',
	    'min-height',
	    'min-width',
	    'nav-down',
	    'nav-index',
	    'nav-left',
	    'nav-right',
	    'nav-up',
	    'none',
	    'normal',
	    'object-fit',
	    'object-position',
	    'opacity',
	    'order',
	    'orphans',
	    'outline',
	    'outline-color',
	    'outline-offset',
	    'outline-style',
	    'outline-width',
	    'overflow',
	    'overflow-wrap',
	    'overflow-x',
	    'overflow-y',
	    'padding',
	    'padding-bottom',
	    'padding-left',
	    'padding-right',
	    'padding-top',
	    'page-break-after',
	    'page-break-before',
	    'page-break-inside',
	    'perspective',
	    'perspective-origin',
	    'pointer-events',
	    'position',
	    'quotes',
	    'resize',
	    'right',
	    'tab-size',
	    'table-layout',
	    'text-align',
	    'text-align-last',
	    'text-decoration',
	    'text-decoration-color',
	    'text-decoration-line',
	    'text-decoration-style',
	    'text-indent',
	    'text-overflow',
	    'text-rendering',
	    'text-shadow',
	    'text-transform',
	    'text-underline-position',
	    'top',
	    'transform',
	    'transform-origin',
	    'transform-style',
	    'transition',
	    'transition-delay',
	    'transition-duration',
	    'transition-property',
	    'transition-timing-function',
	    'unicode-bidi',
	    'vertical-align',
	    'visibility',
	    'white-space',
	    'widows',
	    'width',
	    'word-break',
	    'word-spacing',
	    'word-wrap',
	    'z-index'
	  ];

	  // illegals
	  var ILLEGAL = [
	    '\\?',
	    '(\\bReturn\\b)', // monkey
	    '(\\bEnd\\b)', // monkey
	    '(\\bend\\b)', // vbscript
	    '(\\bdef\\b)', // gradle
	    ';', // a whole lot of languages
	    '#\\s', // markdown
	    '\\*\\s', // markdown
	    '===\\s', // markdown
	    '\\|',
	    '%', // prolog
	  ];

	  return {
	    aliases: ['styl'],
	    case_insensitive: false,
	    keywords: 'if else for in',
	    illegal: '(' + ILLEGAL.join('|') + ')',
	    contains: [

	      // strings
	      hljs.QUOTE_STRING_MODE,
	      hljs.APOS_STRING_MODE,

	      // comments
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,

	      // hex colors
	      HEX_COLOR,

	      // class tag
	      {
	        begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*' + TAG_END,
	        returnBegin: true,
	        contains: [
	          {className: 'selector-class', begin: '\\.[a-zA-Z][a-zA-Z0-9_-]*'}
	        ]
	      },

	      // id tag
	      {
	        begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*' + TAG_END,
	        returnBegin: true,
	        contains: [
	          {className: 'selector-id', begin: '\\#[a-zA-Z][a-zA-Z0-9_-]*'}
	        ]
	      },

	      // tags
	      {
	        begin: '\\b(' + TAGS.join('|') + ')' + TAG_END,
	        returnBegin: true,
	        contains: [
	          {className: 'selector-tag', begin: '\\b[a-zA-Z][a-zA-Z0-9_-]*'}
	        ]
	      },

	      // psuedo selectors
	      {
	        begin: '&?:?:\\b(' + PSEUDO_SELECTORS.join('|') + ')' + TAG_END
	      },

	      // @ keywords
	      {
	        begin: '\@(' + AT_KEYWORDS.join('|') + ')\\b'
	      },

	      // variables
	      VARIABLE,

	      // dimension
	      hljs.CSS_NUMBER_MODE,

	      // number
	      hljs.NUMBER_MODE,

	      // functions
	      //  - only from beginning of line + whitespace
	      {
	        className: 'function',
	        begin: '^[a-zA-Z][a-zA-Z0-9_\-]*\\(.*\\)',
	        illegal: '[\\n]',
	        returnBegin: true,
	        contains: [
	          {className: 'title', begin: '\\b[a-zA-Z][a-zA-Z0-9_\-]*'},
	          {
	            className: 'params',
	            begin: /\(/,
	            end: /\)/,
	            contains: [
	              HEX_COLOR,
	              VARIABLE,
	              hljs.APOS_STRING_MODE,
	              hljs.CSS_NUMBER_MODE,
	              hljs.NUMBER_MODE,
	              hljs.QUOTE_STRING_MODE
	            ]
	          }
	        ]
	      },

	      // attributes
	      //  - only from beginning of line + whitespace
	      //  - must have whitespace after it
	      {
	        className: 'attribute',
	        begin: '\\b(' + ATTRIBUTES.reverse().join('|') + ')\\b',
	        starts: {
	          // value container
	          end: /;|$/,
	          contains: [
	            HEX_COLOR,
	            VARIABLE,
	            hljs.APOS_STRING_MODE,
	            hljs.QUOTE_STRING_MODE,
	            hljs.CSS_NUMBER_MODE,
	            hljs.NUMBER_MODE,
	            hljs.C_BLOCK_COMMENT_MODE
	          ],
	          illegal: /\./,
	          relevance: 0
	        }
	      }
	    ]
	  };
	};

/***/ }),
/* 173 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var DETAILS = {
	    className: 'string',
	    begin: '\\[\n(multipart)?', end: '\\]\n'
	  };
	  var TIME = {
	    className: 'string',
	    begin: '\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}\.\\d+Z'
	  };
	  var PROGRESSVALUE = {
	    className: 'string',
	    begin: '(\\+|-)\\d+'
	  };
	  var KEYWORDS = {
	    className: 'keyword',
	    relevance: 10,
	    variants: [
	      { begin: '^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?' },
	      { begin: '^progress(:?)(\\s+)?(pop|push)?' },
	      { begin: '^tags:' },
	      { begin: '^time:' }
	    ],
	  };
	  return {
	    case_insensitive: true,
	    contains: [
	      DETAILS,
	      TIME,
	      PROGRESSVALUE,
	      KEYWORDS
	    ]
	  };
	};

/***/ }),
/* 174 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var SWIFT_KEYWORDS = {
	      keyword: '__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity ' +
	        'break case catch class continue convenience default defer deinit didSet do ' +
	        'dynamic dynamicType else enum extension fallthrough false final for func ' +
	        'get guard if import in indirect infix init inout internal is lazy left let ' +
	        'mutating nil none nonmutating operator optional override postfix precedence ' +
	        'prefix private protocol Protocol public repeat required rethrows return ' +
	        'right self Self set static struct subscript super switch throw throws true ' +
	        'try try! try? Type typealias unowned var weak where while willSet',
	      literal: 'true false nil',
	      built_in: 'abs advance alignof alignofValue anyGenerator assert assertionFailure ' +
	        'bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC ' +
	        'bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros ' +
	        'debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords ' +
	        'enumerate equal fatalError filter find getBridgedObjectiveCType getVaList ' +
	        'indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC ' +
	        'isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare ' +
	        'map max maxElement min minElement numericCast overlaps partition posix ' +
	        'precondition preconditionFailure print println quickSort readLine reduce reflect ' +
	        'reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split ' +
	        'startsWith stride strideof strideofValue swap toString transcode ' +
	        'underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap ' +
	        'unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer ' +
	        'withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers ' +
	        'withUnsafePointer withUnsafePointers withVaList zip'
	    };

	  var TYPE = {
	    className: 'type',
	    begin: '\\b[A-Z][\\w\u00C0-\u02B8\']*',
	    relevance: 0
	  };
	  var BLOCK_COMMENT = hljs.COMMENT(
	    '/\\*',
	    '\\*/',
	    {
	      contains: ['self']
	    }
	  );
	  var SUBST = {
	    className: 'subst',
	    begin: /\\\(/, end: '\\)',
	    keywords: SWIFT_KEYWORDS,
	    contains: [] // assigned later
	  };
	  var NUMBERS = {
	      className: 'number',
	      begin: '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
	      relevance: 0
	  };
	  var QUOTE_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
	    contains: [SUBST, hljs.BACKSLASH_ESCAPE]
	  });
	  SUBST.contains = [NUMBERS];

	  return {
	    keywords: SWIFT_KEYWORDS,
	    contains: [
	      QUOTE_STRING_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      BLOCK_COMMENT,
	      TYPE,
	      NUMBERS,
	      {
	        className: 'function',
	        beginKeywords: 'func', end: '{', excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            begin: /[A-Za-z$_][0-9A-Za-z$_]*/
	          }),
	          {
	            begin: /</, end: />/
	          },
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/, endsParent: true,
	            keywords: SWIFT_KEYWORDS,
	            contains: [
	              'self',
	              NUMBERS,
	              QUOTE_STRING_MODE,
	              hljs.C_BLOCK_COMMENT_MODE,
	              {begin: ':'} // relevance booster
	            ],
	            illegal: /["']/
	          }
	        ],
	        illegal: /\[|%/
	      },
	      {
	        className: 'class',
	        beginKeywords: 'struct protocol class extension enum',
	        keywords: SWIFT_KEYWORDS,
	        end: '\\{',
	        excludeEnd: true,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})
	        ]
	      },
	      {
	        className: 'meta', // @attributes
	        begin: '(@warn_unused_result|@exported|@lazy|@noescape|' +
	                  '@NSCopying|@NSManaged|@objc|@convention|@required|' +
	                  '@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|' +
	                  '@infix|@prefix|@postfix|@autoclosure|@testable|@available|' +
	                  '@nonobjc|@NSApplicationMain|@UIApplicationMain)'

	      },
	      {
	        beginKeywords: 'import', end: /$/,
	        contains: [hljs.C_LINE_COMMENT_MODE, BLOCK_COMMENT]
	      }
	    ]
	  };
	};

/***/ }),
/* 175 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {

	  var COMMENT = {
	    className: 'comment',
	    begin: /\$noop\(/,
	    end: /\)/,
	    contains: [{
	      begin: /\(/,
	      end: /\)/,
	      contains: ['self', {
	        begin: /\\./
	      }]
	    }],
	    relevance: 10
	  };

	  var FUNCTION = {
	    className: 'keyword',
	    begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
	    end: /\(/,
	    excludeEnd: true
	  };

	  var VARIABLE = {
	    className: 'variable',
	    begin: /%[_a-zA-Z0-9:]*/,
	    end: '%'
	  };

	  var ESCAPE_SEQUENCE = {
	    className: 'symbol',
	    begin: /\\./
	  };

	  return {
	    contains: [
	      COMMENT,
	      FUNCTION,
	      VARIABLE,
	      ESCAPE_SEQUENCE
	    ]
	  };
	};

/***/ }),
/* 176 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var LITERALS = 'true false yes no null';

	  var keyPrefix = '^[ \\-]*';
	  var keyName =  '[a-zA-Z_][\\w\\-]*';
	  var KEY = {
	    className: 'attr',
	    variants: [
	      { begin: keyPrefix + keyName + ":"},
	      { begin: keyPrefix + '"' + keyName + '"' + ":"},
	      { begin: keyPrefix + "'" + keyName + "'" + ":"}
	    ]
	  };

	  var TEMPLATE_VARIABLES = {
	    className: 'template-variable',
	    variants: [
	      { begin: '\{\{', end: '\}\}' }, // jinja templates Ansible
	      { begin: '%\{', end: '\}' } // Ruby i18n
	    ]
	  };
	  var STRING = {
	    className: 'string',
	    relevance: 0,
	    variants: [
	      {begin: /'/, end: /'/},
	      {begin: /"/, end: /"/},
	      {begin: /\S+/}
	    ],
	    contains: [
	      hljs.BACKSLASH_ESCAPE,
	      TEMPLATE_VARIABLES
	    ]
	  };

	  return {
	    case_insensitive: true,
	    aliases: ['yml', 'YAML', 'yaml'],
	    contains: [
	      KEY,
	      {
	        className: 'meta',
	        begin: '^---\s*$',
	        relevance: 10
	      },
	      { // multi line string
	        className: 'string',
	        begin: '[\\|>] *$',
	        returnEnd: true,
	        contains: STRING.contains,
	        // very simple termination: next hash key
	        end: KEY.variants[0].begin
	      },
	      { // Ruby/Rails erb
	        begin: '<%[%=-]?', end: '[%-]?%>',
	        subLanguage: 'ruby',
	        excludeBegin: true,
	        excludeEnd: true,
	        relevance: 0
	      },
	      { // data type
	        className: 'type',
	        begin: '!!' + hljs.UNDERSCORE_IDENT_RE,
	      },
	      { // fragment id &ref
	        className: 'meta',
	        begin: '&' + hljs.UNDERSCORE_IDENT_RE + '$',
	      },
	      { // fragment reference *ref
	        className: 'meta',
	        begin: '\\*' + hljs.UNDERSCORE_IDENT_RE + '$'
	      },
	      { // array listing
	        className: 'bullet',
	        begin: '^ *-',
	        relevance: 0
	      },
	      hljs.HASH_COMMENT_MODE,
	      {
	        beginKeywords: LITERALS,
	        keywords: {literal: LITERALS}
	      },
	      hljs.C_NUMBER_MODE,
	      STRING
	    ]
	  };
	};

/***/ }),
/* 177 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    contains: [
	      hljs.HASH_COMMENT_MODE,
	      // version of format and total amount of testcases
	      {
	        className: 'meta',
	        variants: [
	          { begin: '^TAP version (\\d+)$' },
	          { begin: '^1\\.\\.(\\d+)$' }
	        ],
	      },
	      // YAML block
	      {
	        begin: '(\s+)?---$', end: '\\.\\.\\.$',
	        subLanguage: 'yaml',
	        relevance: 0
	      },
		  // testcase number
	      {
	        className: 'number',
	        begin: ' (\\d+) '
	      },
		  // testcase status and description
	      {
	        className: 'symbol',
	        variants: [
	          { begin: '^ok' },
	          { begin: '^not ok' }
	        ],
	      },
	    ]
	  };
	};

/***/ }),
/* 178 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['tk'],
	    keywords: 'after append apply array auto_execok auto_import auto_load auto_mkindex ' +
	      'auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock ' +
	      'close concat continue dde dict encoding eof error eval exec exit expr fblocked ' +
	      'fconfigure fcopy file fileevent filename flush for foreach format gets glob global ' +
	      'history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list ' +
	      'llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 '+
	      'mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex '+
	      'platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename '+
	      'return safe scan seek set socket source split string subst switch tcl_endOfWord '+
	      'tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter '+
	      'tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update '+
	      'uplevel upvar variable vwait while',
	    contains: [
	      hljs.COMMENT(';[ \\t]*#', '$'),
	      hljs.COMMENT('^[ \\t]*#', '$'),
	      {
	        beginKeywords: 'proc',
	        end: '[\\{]',
	        excludeEnd: true,
	        contains: [
	          {
	            className: 'title',
	            begin: '[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
	            end: '[ \\t\\n\\r]',
	            endsWithParent: true,
	            excludeEnd: true
	          }
	        ]
	      },
	      {
	        excludeEnd: true,
	        variants: [
	          {
	            begin: '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*\\(([a-zA-Z0-9_])*\\)',
	            end: '[^a-zA-Z0-9_\\}\\$]'
	          },
	          {
	            begin: '\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
	            end: '(\\))?[^a-zA-Z0-9_\\}\\$]'
	          }
	        ]
	      },
	      {
	        className: 'string',
	        contains: [hljs.BACKSLASH_ESCAPE],
	        variants: [
	          hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	          hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
	        ]
	      },
	      {
	        className: 'number',
	        variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
	      }
	    ]
	  }
	};

/***/ }),
/* 179 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var COMMAND = {
	    className: 'tag',
	    begin: /\\/,
	    relevance: 0,
	    contains: [
	      {
	        className: 'name',
	        variants: [
	          {begin: /[a-zA-Zа-яА-я]+[*]?/},
	          {begin: /[^a-zA-Zа-яА-я0-9]/}
	        ],
	        starts: {
	          endsWithParent: true,
	          relevance: 0,
	          contains: [
	            {
	              className: 'string', // because it looks like attributes in HTML tags
	              variants: [
	                {begin: /\[/, end: /\]/},
	                {begin: /\{/, end: /\}/}
	              ]
	            },
	            {
	              begin: /\s*=\s*/, endsWithParent: true,
	              relevance: 0,
	              contains: [
	                {
	                  className: 'number',
	                  begin: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/
	                }
	              ]
	            }
	          ]
	        }
	      }
	    ]
	  };

	  return {
	    contains: [
	      COMMAND,
	      {
	        className: 'formula',
	        contains: [COMMAND],
	        relevance: 0,
	        variants: [
	          {begin: /\$\$/, end: /\$\$/},
	          {begin: /\$/, end: /\$/}
	        ]
	      },
	      hljs.COMMENT(
	        '%',
	        '$',
	        {
	          relevance: 0
	        }
	      )
	    ]
	  };
	};

/***/ }),
/* 180 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var BUILT_IN_TYPES = 'bool byte i16 i32 i64 double string binary';
	  return {
	    keywords: {
	      keyword:
	        'namespace const typedef struct enum service exception void oneway set list map required optional',
	      built_in:
	        BUILT_IN_TYPES,
	      literal:
	        'true false'
	    },
	    contains: [
	      hljs.QUOTE_STRING_MODE,
	      hljs.NUMBER_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'class',
	        beginKeywords: 'struct enum service exception', end: /\{/,
	        illegal: /\n/,
	        contains: [
	          hljs.inherit(hljs.TITLE_MODE, {
	            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
	          })
	        ]
	      },
	      {
	        begin: '\\b(set|list|map)\\s*<', end: '>',
	        keywords: BUILT_IN_TYPES,
	        contains: ['self']
	      }
	    ]
	  };
	};

/***/ }),
/* 181 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var TPID = {
	    className: 'number',
	    begin: '[1-9][0-9]*', /* no leading zeros */
	    relevance: 0
	  };
	  var TPLABEL = {
	    className: 'symbol',
	    begin: ':[^\\]]+'
	  };
	  var TPDATA = {
	    className: 'built_in',
	    begin: '(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|\
	    TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[', end: '\\]',
	    contains: [
	      'self',
	      TPID,
	      TPLABEL
	    ]
	  };
	  var TPIO = {
	    className: 'built_in',
	    begin: '(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[', end: '\\]',
	    contains: [
	      'self',
	      TPID,
	      hljs.QUOTE_STRING_MODE, /* for pos section at bottom */
	      TPLABEL
	    ]
	  };

	  return {
	    keywords: {
	      keyword:
	        'ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB ' +
	        'DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC ' +
	        'IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE ' +
	        'PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET ' +
	        'Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN ' +
	        'SUBSTR FINDSTR VOFFSET PROG ATTR MN POS',
	      literal:
	        'ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET'
	    },
	    contains: [
	      TPDATA,
	      TPIO,
	      {
	        className: 'keyword',
	        begin: '/(PROG|ATTR|MN|POS|END)\\b'
	      },
	      {
	        /* this is for cases like ,CALL */
	        className: 'keyword',
	        begin: '(CALL|RUN|POINT_LOGIC|LBL)\\b'
	      },
	      {
	        /* this is for cases like CNT100 where the default lexemes do not
	         * separate the keyword and the number */
	        className: 'keyword',
	        begin: '\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)'
	      },
	      {
	        /* to catch numbers that do not have a word boundary on the left */
	        className: 'number',
	        begin: '\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b',
	        relevance: 0
	      },
	      hljs.COMMENT('//', '[;$]'),
	      hljs.COMMENT('!', '[;$]'),
	      hljs.COMMENT('--eg:', '$'),
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        begin: '\'', end: '\''
	      },
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'variable',
	        begin: '\\$[A-Za-z0-9_]+'
	      }
	    ]
	  };
	};

/***/ }),
/* 182 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)'
	  };

	  var FUNCTION_NAMES = 'attribute block constant cycle date dump include ' +
	                  'max min parent random range source template_from_string';

	  var FUNCTIONS = {
	    beginKeywords: FUNCTION_NAMES,
	    keywords: {name: FUNCTION_NAMES},
	    relevance: 0,
	    contains: [
	      PARAMS
	    ]
	  };

	  var FILTER = {
	    begin: /\|[A-Za-z_]+:?/,
	    keywords:
	      'abs batch capitalize convert_encoding date date_modify default ' +
	      'escape first format join json_encode keys last length lower ' +
	      'merge nl2br number_format raw replace reverse round slice sort split ' +
	      'striptags title trim upper url_encode',
	    contains: [
	      FUNCTIONS
	    ]
	  };

	  var TAGS = 'autoescape block do embed extends filter flush for ' +
	    'if import include macro sandbox set spaceless use verbatim';

	  TAGS = TAGS + ' ' + TAGS.split(' ').map(function(t){return 'end' + t}).join(' ');

	  return {
	    aliases: ['craftcms'],
	    case_insensitive: true,
	    subLanguage: 'xml',
	    contains: [
	      hljs.COMMENT(/\{#/, /#}/),
	      {
	        className: 'template-tag',
	        begin: /\{%/, end: /%}/,
	        contains: [
	          {
	            className: 'name',
	            begin: /\w+/,
	            keywords: TAGS,
	            starts: {
	              endsWithParent: true,
	              contains: [FILTER, FUNCTIONS],
	              relevance: 0
	            }
	          }
	        ]
	      },
	      {
	        className: 'template-variable',
	        begin: /\{\{/, end: /}}/,
	        contains: ['self', FILTER, FUNCTIONS]
	      }
	    ]
	  };
	};

/***/ }),
/* 183 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = {
	    keyword:
	      'in if for while finally var new function do return void else break catch ' +
	      'instanceof with throw case default try this switch continue typeof delete ' +
	      'let yield const class public private protected get set super ' +
	      'static implements enum export import declare type namespace abstract ' +
	      'as from extends async await',
	    literal:
	      'true false null undefined NaN Infinity',
	    built_in:
	      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
	      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
	      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
	      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
	      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
	      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
	      'module console window document any number boolean string void Promise'
	  };

	  return {
	    aliases: ['ts'],
	    keywords: KEYWORDS,
	    contains: [
	      {
	        className: 'meta',
	        begin: /^\s*['"]use strict['"]/
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      { // template string
	        className: 'string',
	        begin: '`', end: '`',
	        contains: [
	          hljs.BACKSLASH_ESCAPE,
	          {
	            className: 'subst',
	            begin: '\\$\\{', end: '\\}'
	          }
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'number',
	        variants: [
	          { begin: '\\b(0[bB][01]+)' },
	          { begin: '\\b(0[oO][0-7]+)' },
	          { begin: hljs.C_NUMBER_RE }
	        ],
	        relevance: 0
	      },
	      { // "value" container
	        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	        keywords: 'return throw case',
	        contains: [
	          hljs.C_LINE_COMMENT_MODE,
	          hljs.C_BLOCK_COMMENT_MODE,
	          hljs.REGEXP_MODE,
	          {
	            className: 'function',
	            begin: '(\\(.*?\\)|' + hljs.IDENT_RE + ')\\s*=>', returnBegin: true,
	            end: '\\s*=>',
	            contains: [
	              {
	                className: 'params',
	                variants: [
	                  {
	                    begin: hljs.IDENT_RE
	                  },
	                  {
	                    begin: /\(\s*\)/,
	                  },
	                  {
	                    begin: /\(/, end: /\)/,
	                    excludeBegin: true, excludeEnd: true,
	                    keywords: KEYWORDS,
	                    contains: [
	                      'self',
	                      hljs.C_LINE_COMMENT_MODE,
	                      hljs.C_BLOCK_COMMENT_MODE
	                    ]
	                  }
	                ]
	              }
	            ]
	          }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'function',
	        begin: 'function', end: /[\{;]/, excludeEnd: true,
	        keywords: KEYWORDS,
	        contains: [
	          'self',
	          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            keywords: KEYWORDS,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ],
	            illegal: /["'\(]/
	          }
	        ],
	        illegal: /%/,
	        relevance: 0 // () => {} is more typical in TypeScript
	      },
	      {
	        beginKeywords: 'constructor', end: /\{/, excludeEnd: true,
	        contains: [
	          'self',
	          {
	            className: 'params',
	            begin: /\(/, end: /\)/,
	            excludeBegin: true,
	            excludeEnd: true,
	            keywords: KEYWORDS,
	            contains: [
	              hljs.C_LINE_COMMENT_MODE,
	              hljs.C_BLOCK_COMMENT_MODE
	            ],
	            illegal: /["'\(]/
	          }
	        ]
	      },
	      { // prevent references like module.id from being higlighted as module definitions
	        begin: /module\./,
	        keywords: {built_in: 'module'},
	        relevance: 0
	      },
	      {
	        beginKeywords: 'module', end: /\{/, excludeEnd: true
	      },
	      {
	        beginKeywords: 'interface', end: /\{/, excludeEnd: true,
	        keywords: 'interface extends'
	      },
	      {
	        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
	      },
	      {
	        begin: '\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots
	      },
	      {
	        className: 'meta', begin: '@[A-Za-z]+'
	      }
	    ]
	  };
	};

/***/ }),
/* 184 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    keywords: {
	      keyword:
	        // Value types
	        'char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 ' +
	        'uint16 uint32 uint64 float double bool struct enum string void ' +
	        // Reference types
	        'weak unowned owned ' +
	        // Modifiers
	        'async signal static abstract interface override virtual delegate ' +
	        // Control Structures
	        'if while do for foreach else switch case break default return try catch ' +
	        // Visibility
	        'public private protected internal ' +
	        // Other
	        'using new this get set const stdout stdin stderr var',
	      built_in:
	        'DBus GLib CCode Gee Object Gtk Posix',
	      literal:
	        'false true null'
	    },
	    contains: [
	      {
	        className: 'class',
	        beginKeywords: 'class interface namespace', end: '{', excludeEnd: true,
	        illegal: '[^,:\\n\\s\\.]',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.C_BLOCK_COMMENT_MODE,
	      {
	        className: 'string',
	        begin: '"""', end: '"""',
	        relevance: 5
	      },
	      hljs.APOS_STRING_MODE,
	      hljs.QUOTE_STRING_MODE,
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta',
	        begin: '^#', end: '$',
	        relevance: 2
	      }
	    ]
	  };
	};

/***/ }),
/* 185 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['vb'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval ' + /* a-b */
	        'call case catch class compare const continue custom declare default delegate dim distinct do ' + /* c-d */
	        'each equals else elseif end enum erase error event exit explicit finally for friend from function ' + /* e-f */
	        'get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue ' + /* g-i */
	        'join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass ' + /* j-m */
	        'namespace narrowing new next not notinheritable notoverridable ' + /* n */
	        'of off on operator option optional or order orelse overloads overridable overrides ' + /* o */
	        'paramarray partial preserve private property protected public ' + /* p */
	        'raiseevent readonly redim rem removehandler resume return ' + /* r */
	        'select set shadows shared skip static step stop structure strict sub synclock ' + /* s */
	        'take text then throw to try unicode until using when where while widening with withevents writeonly xor', /* t-x */
	      built_in:
	        'boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype ' +  /* b-c */
	        'date decimal directcast double gettype getxmlnamespace iif integer long object ' + /* d-o */
	        'sbyte short single string trycast typeof uinteger ulong ushort', /* s-u */
	      literal:
	        'true false nothing'
	    },
	    illegal: '//|{|}|endif|gosub|variant|wend', /* reserved deprecated keywords */
	    contains: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
	      hljs.COMMENT(
	        '\'',
	        '$',
	        {
	          returnBegin: true,
	          contains: [
	            {
	              className: 'doctag',
	              begin: '\'\'\'|<!--|-->',
	              contains: [hljs.PHRASAL_WORDS_MODE]
	            },
	            {
	              className: 'doctag',
	              begin: '</?', end: '>',
	              contains: [hljs.PHRASAL_WORDS_MODE]
	            }
	          ]
	        }
	      ),
	      hljs.C_NUMBER_MODE,
	      {
	        className: 'meta',
	        begin: '#', end: '$',
	        keywords: {'meta-keyword': 'if else elseif end region externalsource'}
	      }
	    ]
	  };
	};

/***/ }),
/* 186 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    aliases: ['vbs'],
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'call class const dim do loop erase execute executeglobal exit for each next function ' +
	        'if then else on error option explicit new private property let get public randomize ' +
	        'redim rem select case set stop sub while wend with end to elseif is or xor and not ' +
	        'class_initialize class_terminate default preserve in me byval byref step resume goto',
	      built_in:
	        'lcase month vartype instrrev ubound setlocale getobject rgb getref string ' +
	        'weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency ' +
	        'conversions csng timevalue second year space abs clng timeserial fixs len asc ' +
	        'isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate ' +
	        'instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex ' +
	        'chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim ' +
	        'strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion ' +
	        'scriptengine split scriptengineminorversion cint sin datepart ltrim sqr ' +
	        'scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw ' +
	        'chrw regexp server response request cstr err',
	      literal:
	        'true false null nothing empty'
	    },
	    illegal: '//',
	    contains: [
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
	      hljs.COMMENT(
	        /'/,
	        /$/,
	        {
	          relevance: 0
	        }
	      ),
	      hljs.C_NUMBER_MODE
	    ]
	  };
	};

/***/ }),
/* 187 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    subLanguage: 'xml',
	    contains: [
	      {
	        begin: '<%', end: '%>',
	        subLanguage: 'vbscript'
	      }
	    ]
	  };
	};

/***/ }),
/* 188 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var SV_KEYWORDS = {
	    keyword:
	      'accept_on alias always always_comb always_ff always_latch and assert assign ' +
	      'assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 ' +
	      'byte case casex casez cell chandle checker class clocking cmos config const ' +
	      'constraint context continue cover covergroup coverpoint cross deassign default ' +
	      'defparam design disable dist do edge else end endcase endchecker endclass ' +
	      'endclocking endconfig endfunction endgenerate endgroup endinterface endmodule ' +
	      'endpackage endprimitive endprogram endproperty endspecify endsequence endtable ' +
	      'endtask enum event eventually expect export extends extern final first_match for ' +
	      'force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 ' +
	      'if iff ifnone ignore_bins illegal_bins implements implies import incdir include ' +
	      'initial inout input inside instance int integer interconnect interface intersect ' +
	      'join join_any join_none large let liblist library local localparam logic longint ' +
	      'macromodule matches medium modport module nand negedge nettype new nexttime nmos ' +
	      'nor noshowcancelled not notif0 notif1 or output package packed parameter pmos ' +
	      'posedge primitive priority program property protected pull0 pull1 pulldown pullup ' +
	      'pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos ' +
	      'real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran ' +
	      'rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared ' +
	      'sequence shortint shortreal showcancelled signed small soft solve specify specparam ' +
	      'static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on ' +
	      'sync_reject_on table tagged task this throughout time timeprecision timeunit tran ' +
	      'tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 ' +
	      'unsigned until until_with untyped use uwire var vectored virtual void wait wait_order ' +
	      'wand weak weak0 weak1 while wildcard wire with within wor xnor xor',
	    literal:
	      'null',
	    built_in:
	      '$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale ' +
	      '$bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat ' +
	      '$realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson ' +
	      '$assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff ' +
	      '$assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk ' +
	      '$fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control ' +
	      '$coverage_get $coverage_save $set_coverage_db_name $rose $stable $past ' +
	      '$rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display ' +
	      '$coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename ' +
	      '$unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow ' +
	      '$floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning ' +
	      '$dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh ' +
	      '$tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random ' +
	      '$dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson ' +
	      '$dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array ' +
	      '$async$nand$array $async$or$array $async$nor$array $sync$and$array ' +
	      '$sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf ' +
	      '$async$and$plane $async$nand$plane $async$or$plane $async$nor$plane ' +
	      '$sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system ' +
	      '$display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo ' +
	      '$write $readmemb $readmemh $writememh $value$plusargs ' +
	      '$dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit ' +
	      '$writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb ' +
	      '$dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall ' +
	      '$dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo ' +
	      '$fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh ' +
	      '$swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb ' +
	      '$fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat ' +
	      '$sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror'
	    };
	  return {
	    aliases: ['v', 'sv', 'svh'],
	    case_insensitive: false,
	    keywords: SV_KEYWORDS, lexemes: /[\w\$]+/,
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'number',
	        contains: [hljs.BACKSLASH_ESCAPE],
	        variants: [
	          {begin: '\\b((\\d+\'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)'},
	          {begin: '\\B((\'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)'},
	          {begin: '\\b([0-9_])+', relevance: 0}
	        ]
	      },
	      /* parameters to instances */
	      {
	        className: 'variable',
	        variants: [
	          {begin: '#\\((?!parameter).+\\)'},
	          {begin: '\\.\\w+', relevance: 0},
	        ]
	      },
	      {
	        className: 'meta',
	        begin: '`', end: '$',
	        keywords: {'meta-keyword': 'define __FILE__ ' +
	          '__LINE__ begin_keywords celldefine default_nettype define ' +
	          'else elsif end_keywords endcelldefine endif ifdef ifndef ' +
	          'include line nounconnected_drive pragma resetall timescale ' +
	          'unconnected_drive undef undefineall'},
	        relevance: 0
	      }
	    ]
	  }; // return
	};

/***/ }),
/* 189 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  // Regular expression for VHDL numeric literals.

	  // Decimal literal:
	  var INTEGER_RE = '\\d(_|\\d)*';
	  var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
	  var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';
	  // Based literal:
	  var BASED_INTEGER_RE = '\\w+';
	  var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

	  var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

	  return {
	    case_insensitive: true,
	    keywords: {
	      keyword:
	        'abs access after alias all and architecture array assert assume assume_guarantee attribute ' +
	        'begin block body buffer bus case component configuration constant context cover disconnect ' +
	        'downto default else elsif end entity exit fairness file for force function generate ' +
	        'generic group guarded if impure in inertial inout is label library linkage literal ' +
	        'loop map mod nand new next nor not null of on open or others out package port ' +
	        'postponed procedure process property protected pure range record register reject ' +
	        'release rem report restrict restrict_guarantee return rol ror select sequence ' +
	        'severity shared signal sla sll sra srl strong subtype then to transport type ' +
	        'unaffected units until use variable vmode vprop vunit wait when while with xnor xor',
	      built_in:
	        'boolean bit character ' +
	        'integer time delay_length natural positive ' +
	        'string bit_vector file_open_kind file_open_status ' +
	        'std_logic std_logic_vector unsigned signed boolean_vector integer_vector ' +
	        'std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signed' +
	        'real_vector time_vector',
	      literal:
	        'false true note warning error failure ' +  // severity_level
	        'line text side width'                      // textio
	    },
	    illegal: '{',
	    contains: [
	      hljs.C_BLOCK_COMMENT_MODE,      // VHDL-2008 block commenting.
	      hljs.COMMENT('--', '$'),
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'number',
	        begin: NUMBER_RE,
	        relevance: 0
	      },
	      {
	        className: 'string',
	        begin: '\'(U|X|0|1|Z|W|L|H|-)\'',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        className: 'symbol',
	        begin: '\'[A-Za-z](_?[A-Za-z0-9])*',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      }
	    ]
	  };
	};

/***/ }),
/* 190 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    lexemes: /[!#@\w]+/,
	    keywords: {
	      keyword:
	        // express version except: ! & * < = > !! # @ @@
	        'N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope '+
	        'cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc '+
	        'ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 '+
	        'profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor '+
	        'so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew '+
	        'tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ '+
	        // full version
	        'Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload '+
	        'bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap '+
	        'cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor '+
	        'endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap '+
	        'imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview '+
	        'lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap '+
	        'nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext '+
	        'ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding '+
	        'scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace '+
	        'startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious '+'trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew '+
	        'vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank',
	      built_in: //built in func
	        'synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv ' +
	        'complete_check add getwinposx getqflist getwinposy screencol ' +
	        'clearmatches empty extend getcmdpos mzeval garbagecollect setreg ' +
	        'ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable ' +
	        'shiftwidth max sinh isdirectory synID system inputrestore winline ' +
	        'atan visualmode inputlist tabpagewinnr round getregtype mapcheck ' +
	        'hasmapto histdel argidx findfile sha256 exists toupper getcmdline ' +
	        'taglist string getmatches bufnr strftime winwidth bufexists ' +
	        'strtrans tabpagebuflist setcmdpos remote_read printf setloclist ' +
	        'getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval ' +
	        'resolve libcallnr foldclosedend reverse filter has_key bufname ' +
	        'str2float strlen setline getcharmod setbufvar index searchpos ' +
	        'shellescape undofile foldclosed setqflist buflisted strchars str2nr ' +
	        'virtcol floor remove undotree remote_expr winheight gettabwinvar ' +
	        'reltime cursor tabpagenr finddir localtime acos getloclist search ' +
	        'tanh matchend rename gettabvar strdisplaywidth type abs py3eval ' +
	        'setwinvar tolower wildmenumode log10 spellsuggest bufloaded ' +
	        'synconcealed nextnonblank server2client complete settabwinvar ' +
	        'executable input wincol setmatches getftype hlID inputsave ' +
	        'searchpair or screenrow line settabvar histadd deepcopy strpart ' +
	        'remote_peek and eval getftime submatch screenchar winsaveview ' +
	        'matchadd mkdir screenattr getfontname libcall reltimestr getfsize ' +
	        'winnr invert pow getbufline byte2line soundfold repeat fnameescape ' +
	        'tagfiles sin strwidth spellbadword trunc maparg log lispindent ' +
	        'hostname setpos globpath remote_foreground getchar synIDattr ' +
	        'fnamemodify cscope_connection stridx winbufnr indent min ' +
	        'complete_add nr2char searchpairpos inputdialog values matchlist ' +
	        'items hlexists strridx browsedir expand fmod pathshorten line2byte ' +
	        'argc count getwinvar glob foldtextresult getreg foreground cosh ' +
	        'matchdelete has char2nr simplify histget searchdecl iconv ' +
	        'winrestcmd pumvisible writefile foldlevel haslocaldir keys cos ' +
	        'matchstr foldtext histnr tan tempname getcwd byteidx getbufvar ' +
	        'islocked escape eventhandler remote_send serverlist winrestview ' +
	        'synstack pyeval prevnonblank readfile cindent filereadable changenr ' +
	        'exp'
	    },
	    illegal: /;/,
	    contains: [
	      hljs.NUMBER_MODE,
	      hljs.APOS_STRING_MODE,

	      /*
	      A double quote can start either a string or a line comment. Strings are
	      ended before the end of a line by another double quote and can contain
	      escaped double-quotes and post-escaped line breaks.

	      Also, any double quote at the beginning of a line is a comment but we
	      don't handle that properly at the moment: any double quote inside will
	      turn them into a string. Handling it properly will require a smarter
	      parser.
	      */
	      {
	        className: 'string',
	        begin: /"(\\"|\n\\|[^"\n])*"/
	      },
	      hljs.COMMENT('"', '$'),

	      {
	        className: 'variable',
	        begin: /[bwtglsav]:[\w\d_]*/
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function function!', end: '$',
	        relevance: 0,
	        contains: [
	          hljs.TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)'
	          }
	        ]
	      },
	      {
	        className: 'symbol',
	        begin: /<[\w-]+>/
	      }
	    ]
	  };
	};

/***/ }),
/* 191 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  return {
	    case_insensitive: true,
	    lexemes: '[.%]?' + hljs.IDENT_RE,
	    keywords: {
	      keyword:
	        'lock rep repe repz repne repnz xaquire xrelease bnd nobnd ' +
	        'aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63',
	      built_in:
	        // Instruction pointer
	        'ip eip rip ' +
	        // 8-bit registers
	        'al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ' +
	        // 16-bit registers
	        'ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w ' +
	        // 32-bit registers
	        'eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d ' +
	        // 64-bit registers
	        'rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 ' +
	        // Segment registers
	        'cs ds es fs gs ss ' +
	        // Floating point stack registers
	        'st st0 st1 st2 st3 st4 st5 st6 st7 ' +
	        // MMX Registers
	        'mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 ' +
	        // SSE registers
	        'xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 ' +
	        'xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ' +
	        // AVX registers
	        'ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ' +
	        'ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 ' +
	        // AVX-512F registers
	        'zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 ' +
	        'zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 ' +
	        // AVX-512F mask registers
	        'k0 k1 k2 k3 k4 k5 k6 k7 ' +
	        // Bound (MPX) register
	        'bnd0 bnd1 bnd2 bnd3 ' +
	        // Special register
	        'cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 ' +
	        // NASM altreg package
	        'r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b ' +
	        'r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d ' +
	        'r0h r1h r2h r3h ' +
	        'r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l ' +

	        'db dw dd dq dt ddq do dy dz ' +
	        'resb resw resd resq rest resdq reso resy resz ' +
	        'incbin equ times ' +
	        'byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr',

	      meta:
	        '%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif ' +
	        '%if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep ' +
	        '%endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment ' +
	        '.nolist ' +
	        '__FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ ' +
	        '__UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend ' +
	        'align alignb sectalign daz nodaz up down zero default option assume public ' +

	        'bits use16 use32 use64 default section segment absolute extern global common cpu float ' +
	        '__utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ ' +
	        '__float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ ' +
	        '__Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e ' +
	        'float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__'
	    },
	    contains: [
	      hljs.COMMENT(
	        ';',
	        '$',
	        {
	          relevance: 0
	        }
	      ),
	      {
	        className: 'number',
	        variants: [
	          // Float number and x87 BCD
	          {
	            begin: '\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|' +
	                   '(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b',
	            relevance: 0
	          },

	          // Hex number in $
	          { begin: '\\$[0-9][0-9A-Fa-f]*', relevance: 0 },

	          // Number in H,D,T,Q,O,B,Y suffix
	          { begin: '\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b' },

	          // Number in X,D,T,Q,O,B,Y prefix
	          { begin: '\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b'}
	        ]
	      },
	      // Double quote string
	      hljs.QUOTE_STRING_MODE,
	      {
	        className: 'string',
	        variants: [
	          // Single-quoted string
	          { begin: '\'', end: '[^\\\\]\'' },
	          // Backquoted string
	          { begin: '`', end: '[^\\\\]`' }
	        ],
	        relevance: 0
	      },
	      {
	        className: 'symbol',
	        variants: [
	          // Global label and local label
	          { begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)' },
	          // Macro-local label
	          { begin: '^\\s*%%[A-Za-z0-9_$#@~.?]*:' }
	        ],
	        relevance: 0
	      },
	      // Macro parameter
	      {
	        className: 'subst',
	        begin: '%[0-9]+',
	        relevance: 0
	      },
	      // Macro parameter
	      {
	        className: 'subst',
	        begin: '%!\S+',
	        relevance: 0
	      },
	      {
	        className: 'meta',
	        begin: /^\s*\.[\w_-]+/
	      }
	    ]
	  };
	};

/***/ }),
/* 192 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var BUILTIN_MODULES =
	    'ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo ' +
	    'StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts';

	  var XL_KEYWORDS = {
	    keyword:
	      'if then else do while until for loop import with is as where when by data constant ' +
	      'integer real text name boolean symbol infix prefix postfix block tree',
	    literal:
	      'true false nil',
	    built_in:
	      'in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin ' +
	      'acos atan exp expm1 log log2 log10 log1p pi at text_length text_range ' +
	      'text_find text_replace contains page slide basic_slide title_slide ' +
	      'title subtitle fade_in fade_out fade_at clear_color color line_color ' +
	      'line_width texture_wrap texture_transform texture scale_?x scale_?y ' +
	      'scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y ' +
	      'rotate_?z? rectangle circle ellipse sphere path line_to move_to ' +
	      'quad_to curve_to theme background contents locally time mouse_?x ' +
	      'mouse_?y mouse_buttons ' +
	      BUILTIN_MODULES
	  };

	  var DOUBLE_QUOTE_TEXT = {
	    className: 'string',
	    begin: '"', end: '"', illegal: '\\n'
	  };
	  var SINGLE_QUOTE_TEXT = {
	    className: 'string',
	    begin: '\'', end: '\'', illegal: '\\n'
	  };
	  var LONG_TEXT = {
	    className: 'string',
	    begin: '<<', end: '>>'
	  };
	  var BASED_NUMBER = {
	    className: 'number',
	    begin: '[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?'
	  };
	  var IMPORT = {
	    beginKeywords: 'import', end: '$',
	    keywords: XL_KEYWORDS,
	    contains: [DOUBLE_QUOTE_TEXT]
	  };
	  var FUNCTION_DEFINITION = {
	    className: 'function',
	    begin: /[a-z][^\n]*->/, returnBegin: true, end: /->/,
	    contains: [
	      hljs.inherit(hljs.TITLE_MODE, {starts: {
	        endsWithParent: true,
	        keywords: XL_KEYWORDS
	      }})
	    ]
	  };
	  return {
	    aliases: ['tao'],
	    lexemes: /[a-zA-Z][a-zA-Z0-9_?]*/,
	    keywords: XL_KEYWORDS,
	    contains: [
	    hljs.C_LINE_COMMENT_MODE,
	    hljs.C_BLOCK_COMMENT_MODE,
	    DOUBLE_QUOTE_TEXT,
	    SINGLE_QUOTE_TEXT,
	    LONG_TEXT,
	    FUNCTION_DEFINITION,
	    IMPORT,
	    BASED_NUMBER,
	    hljs.NUMBER_MODE
	    ]
	  };
	};

/***/ }),
/* 193 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var KEYWORDS = 'for let if while then else return where group by xquery encoding version' +
	    'module namespace boundary-space preserve strip default collation base-uri ordering' +
	    'copy-namespaces order declare import schema namespace function option in allowing empty' +
	    'at tumbling window sliding window start when only end when previous next stable ascending' +
	    'descending empty greatest least some every satisfies switch case typeswitch try catch and' +
	    'or to union intersect instance of treat as castable cast map array delete insert into' +
	    'replace value rename copy modify update';
	  var LITERAL = 'false true xs:string xs:integer element item xs:date xs:datetime xs:float xs:double xs:decimal QName xs:anyURI xs:long xs:int xs:short xs:byte attribute';
	  var VAR = {
	    begin: /\$[a-zA-Z0-9\-]+/
	  };

	  var NUMBER = {
	    className: 'number',
	    begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
	    relevance: 0
	  };

	  var STRING = {
	    className: 'string',
	    variants: [
	      {begin: /"/, end: /"/, contains: [{begin: /""/, relevance: 0}]},
	      {begin: /'/, end: /'/, contains: [{begin: /''/, relevance: 0}]}
	    ]
	  };

	  var ANNOTATION = {
	    className: 'meta',
	    begin: '%\\w+'
	  };

	  var COMMENT = {
	    className: 'comment',
	    begin: '\\(:', end: ':\\)',
	    relevance: 10,
	    contains: [
	      {
	        className: 'doctag', begin: '@\\w+'
	      }
	    ]
	  };

	  var METHOD = {
	    begin: '{', end: '}'
	  };

	  var CONTAINS = [
	    VAR,
	    STRING,
	    NUMBER,
	    COMMENT,
	    ANNOTATION,
	    METHOD
	  ];
	  METHOD.contains = CONTAINS;


	  return {
	    aliases: ['xpath', 'xq'],
	    case_insensitive: false,
	    lexemes: /[a-zA-Z\$][a-zA-Z0-9_:\-]*/,
	    illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
	    keywords: {
	      keyword: KEYWORDS,
	      literal: LITERAL
	    },
	    contains: CONTAINS
	  };
	};

/***/ }),
/* 194 */
/***/ (function(module, exports) {

	module.exports = function(hljs) {
	  var STRING = {
	    className: 'string',
	    contains: [hljs.BACKSLASH_ESCAPE],
	    variants: [
	      {
	        begin: 'b"', end: '"'
	      },
	      {
	        begin: 'b\'', end: '\''
	      },
	      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
	      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
	    ]
	  };
	  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
	  return {
	    aliases: ['zep'],
	    case_insensitive: true,
	    keywords:
	      'and include_once list abstract global private echo interface as static endswitch ' +
	      'array null if endwhile or const for endforeach self var let while isset public ' +
	      'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
	      'return parent clone use __CLASS__ __LINE__ else break print eval new ' +
	      'catch __METHOD__ case exception default die require __FUNCTION__ ' +
	      'enddeclare final try switch continue endfor endif declare unset true false ' +
	      'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +
	      'yield finally int uint long ulong char uchar double float bool boolean string' +
	      'likely unlikely',
	    contains: [
	      hljs.C_LINE_COMMENT_MODE,
	      hljs.HASH_COMMENT_MODE,
	      hljs.COMMENT(
	        '/\\*',
	        '\\*/',
	        {
	          contains: [
	            {
	              className: 'doctag',
	              begin: '@[A-Za-z]+'
	            }
	          ]
	        }
	      ),
	      hljs.COMMENT(
	        '__halt_compiler.+?;',
	        false,
	        {
	          endsWithParent: true,
	          keywords: '__halt_compiler',
	          lexemes: hljs.UNDERSCORE_IDENT_RE
	        }
	      ),
	      {
	        className: 'string',
	        begin: '<<<[\'"]?\\w+[\'"]?$', end: '^\\w+;',
	        contains: [hljs.BACKSLASH_ESCAPE]
	      },
	      {
	        // swallow composed identifiers to avoid parsing them as keywords
	        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
	      },
	      {
	        className: 'function',
	        beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
	        illegal: '\\$|\\[|%',
	        contains: [
	          hljs.UNDERSCORE_TITLE_MODE,
	          {
	            className: 'params',
	            begin: '\\(', end: '\\)',
	            contains: [
	              'self',
	              hljs.C_BLOCK_COMMENT_MODE,
	              STRING,
	              NUMBER
	            ]
	          }
	        ]
	      },
	      {
	        className: 'class',
	        beginKeywords: 'class interface', end: '{', excludeEnd: true,
	        illegal: /[:\(\$"]/,
	        contains: [
	          {beginKeywords: 'extends implements'},
	          hljs.UNDERSCORE_TITLE_MODE
	        ]
	      },
	      {
	        beginKeywords: 'namespace', end: ';',
	        illegal: /[\.']/,
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        beginKeywords: 'use', end: ';',
	        contains: [hljs.UNDERSCORE_TITLE_MODE]
	      },
	      {
	        begin: '=>' // No markup, just a relevance booster
	      },
	      STRING,
	      NUMBER
	    ]
	  };
	};

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddToCalendar = __webpack_require__(196);

	var _reactAddToCalendar2 = _interopRequireDefault(_reactAddToCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Default = function (_React$Component) {
	  _inherits(Default, _React$Component);

	  function Default() {
	    _classCallCheck(this, Default);

	    return _possibleConstructorReturn(this, (Default.__proto__ || Object.getPrototypeOf(Default)).apply(this, arguments));
	  }

	  _createClass(Default, [{
	    key: "render",
	    value: function render() {
	      var event = {
	        title: "Sample Event",
	        description: "This is the sample event provided as an example only",
	        location: "Portland, OR",
	        startTime: "2016-09-16T20:15:00-04:00",
	        endTime: "2016-09-16T21:45:00-04:00"
	      };

	      return _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "pre",
	          { className: "column example__code" },
	          _react2.default.createElement(
	            "code",
	            { className: "js" },
	            "let event = {",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "  title: 'Sample Event',",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "  description: 'This is the sample event provided as an example only',",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "  location: 'Portland, OR',",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "  startTime: '2016-09-16T20:15:00-04:00',",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "  endTime: '2016-09-16T21:45:00-04:00'",
	            _react2.default.createElement("br", null),
	            "};",
	            _react2.default.createElement("br", null),
	            _react2.default.createElement("br", null),
	            "/*",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "startTime and endTime can use any datetime",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "string that is acceptable by MomentJS",
	            _react2.default.createElement("br", null),
	            "*/"
	          ),
	          _react2.default.createElement(
	            "code",
	            { className: "jsx" },
	            "<AddToCalendar event={event} />"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "column" },
	          _react2.default.createElement(_reactAddToCalendar2.default, { event: event })
	        )
	      );
	    }
	  }]);

	  return Default;
	}(_react2.default.Component);

	exports.default = Default;


	Default.displayName = "Default";

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(197);

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
/* 197 */
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
	  module.exports = __webpack_require__(198)();
	}


/***/ }),
/* 198 */
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

	var emptyFunction = __webpack_require__(199);
	var invariant = __webpack_require__(200);
	var ReactPropTypesSecret = __webpack_require__(201);

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
/* 199 */
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
/* 200 */
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
/* 201 */
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


/***/ }),
/* 202 */,
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddToCalendar = __webpack_require__(196);

	var _reactAddToCalendar2 = _interopRequireDefault(_reactAddToCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChangeLabel = function (_React$Component) {
	  _inherits(ChangeLabel, _React$Component);

	  function ChangeLabel() {
	    _classCallCheck(this, ChangeLabel);

	    return _possibleConstructorReturn(this, (ChangeLabel.__proto__ || Object.getPrototypeOf(ChangeLabel)).apply(this, arguments));
	  }

	  _createClass(ChangeLabel, [{
	    key: "render",
	    value: function render() {
	      var event = {
	        title: "Sample Event",
	        description: "This is the sample event provided as an example only",
	        location: "Portland, OR",
	        startTime: "2016-09-16T20:15:00-04:00",
	        endTime: "2016-09-16T21:45:00-04:00"
	      };

	      return _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "pre",
	          { className: "column example__code" },
	          _react2.default.createElement(
	            "code",
	            { className: "jsx" },
	            "<AddToCalendar",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "event={event}",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            'buttonLabel="Put on my calendar" />'
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "column" },
	          _react2.default.createElement(_reactAddToCalendar2.default, { event: event, buttonLabel: "Put on my calendar" })
	        )
	      );
	    }
	  }]);

	  return ChangeLabel;
	}(_react2.default.Component);

	exports.default = ChangeLabel;


	ChangeLabel.displayName = "ChangeLabel";

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddToCalendar = __webpack_require__(196);

	var _reactAddToCalendar2 = _interopRequireDefault(_reactAddToCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChangeTemplate = function (_React$Component) {
	  _inherits(ChangeTemplate, _React$Component);

	  function ChangeTemplate() {
	    _classCallCheck(this, ChangeTemplate);

	    return _possibleConstructorReturn(this, (ChangeTemplate.__proto__ || Object.getPrototypeOf(ChangeTemplate)).apply(this, arguments));
	  }

	  _createClass(ChangeTemplate, [{
	    key: "render",
	    value: function render() {
	      var event = {
	        title: "Sample Event",
	        description: "This is the sample event provided as an example only",
	        location: "Portland, OR",
	        startTime: "2016-09-16T20:15:00-04:00",
	        endTime: "2016-09-16T21:45:00-04:00"
	      };

	      var icon = { "calendar-plus-o": "left" };

	      return _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "pre",
	          { className: "column example__code" },
	          _react2.default.createElement(
	            "code",
	            { className: "js" },
	            "let icon = { 'calendar-plus-o': 'left' };",
	            _react2.default.createElement("br", null),
	            _react2.default.createElement("br", null),
	            "/*",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "object property can be any Font Awesome icon",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "and value can be 'left' or 'right'",
	            _react2.default.createElement("br", null),
	            "*/",
	            _react2.default.createElement("br", null),
	            _react2.default.createElement("br", null)
	          ),
	          _react2.default.createElement(
	            "code",
	            { className: "jsx" },
	            "<AddToCalendar",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "event={event}",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "buttonTemplate={icon} />"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "column" },
	          _react2.default.createElement(_reactAddToCalendar2.default, { event: event, buttonTemplate: icon })
	        )
	      );
	    }
	  }]);

	  return ChangeTemplate;
	}(_react2.default.Component);

	exports.default = ChangeTemplate;


	ChangeTemplate.displayName = "ChangeTemplate";

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddToCalendar = __webpack_require__(196);

	var _reactAddToCalendar2 = _interopRequireDefault(_reactAddToCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextOnlyTemplate = function (_React$Component) {
	  _inherits(TextOnlyTemplate, _React$Component);

	  function TextOnlyTemplate() {
	    _classCallCheck(this, TextOnlyTemplate);

	    return _possibleConstructorReturn(this, (TextOnlyTemplate.__proto__ || Object.getPrototypeOf(TextOnlyTemplate)).apply(this, arguments));
	  }

	  _createClass(TextOnlyTemplate, [{
	    key: "render",
	    value: function render() {
	      var event = {
	        title: "Sample Event",
	        description: "This is the sample event provided as an example only",
	        location: "Portland, OR",
	        startTime: "2016-09-16T20:15:00-04:00",
	        endTime: "2016-09-16T21:45:00-04:00"
	      };

	      var icon = { textOnly: "none" };

	      return _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "pre",
	          { className: "column example__code" },
	          _react2.default.createElement(
	            "code",
	            { className: "js" },
	            "let icon = { textOnly: 'none' };",
	            _react2.default.createElement("br", null),
	            _react2.default.createElement("br", null)
	          ),
	          _react2.default.createElement(
	            "code",
	            { className: "jsx" },
	            "<AddToCalendar",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "event={event}",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "buttonTemplate={icon} />"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "column" },
	          _react2.default.createElement(_reactAddToCalendar2.default, { event: event, buttonTemplate: icon })
	        )
	      );
	    }
	  }]);

	  return TextOnlyTemplate;
	}(_react2.default.Component);

	exports.default = TextOnlyTemplate;


	TextOnlyTemplate.displayName = "TextOnlyTemplate";

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddToCalendar = __webpack_require__(196);

	var _reactAddToCalendar2 = _interopRequireDefault(_reactAddToCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextOnlyDropdown = function (_React$Component) {
	  _inherits(TextOnlyDropdown, _React$Component);

	  function TextOnlyDropdown() {
	    _classCallCheck(this, TextOnlyDropdown);

	    return _possibleConstructorReturn(this, (TextOnlyDropdown.__proto__ || Object.getPrototypeOf(TextOnlyDropdown)).apply(this, arguments));
	  }

	  _createClass(TextOnlyDropdown, [{
	    key: "render",
	    value: function render() {
	      var event = {
	        title: "Sample Event",
	        description: "This is the sample event provided as an example only",
	        location: "Portland, OR",
	        startTime: "2016-09-16T20:15:00-04:00",
	        endTime: "2016-09-16T21:45:00-04:00"
	      };

	      return _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "pre",
	          { className: "column example__code" },
	          _react2.default.createElement(
	            "code",
	            { className: "jsx" },
	            "<AddToCalendar",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "event={event}",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "displayItemIcons={false} />"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "column" },
	          _react2.default.createElement(_reactAddToCalendar2.default, { event: event, displayItemIcons: false })
	        )
	      );
	    }
	  }]);

	  return TextOnlyDropdown;
	}(_react2.default.Component);

	exports.default = TextOnlyDropdown;


	TextOnlyDropdown.displayName = "TextOnlyDropdown";

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddToCalendar = __webpack_require__(196);

	var _reactAddToCalendar2 = _interopRequireDefault(_reactAddToCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChangeDropdownOrder = function (_React$Component) {
	  _inherits(ChangeDropdownOrder, _React$Component);

	  function ChangeDropdownOrder() {
	    _classCallCheck(this, ChangeDropdownOrder);

	    return _possibleConstructorReturn(this, (ChangeDropdownOrder.__proto__ || Object.getPrototypeOf(ChangeDropdownOrder)).apply(this, arguments));
	  }

	  _createClass(ChangeDropdownOrder, [{
	    key: "render",
	    value: function render() {
	      var event = {
	        title: "Sample Event",
	        description: "This is the sample event provided as an example only",
	        location: "Portland, OR",
	        startTime: "2016-09-16T20:15:00-04:00",
	        endTime: "2016-09-16T21:45:00-04:00"
	      };

	      var items = [{ outlook: "Outlook" }, { outlookcom: "Outlook.com" }, { apple: "Apple Calendar" }, { yahoo: "Yahoo" }, { google: "Google" }];

	      return _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "pre",
	          { className: "column example__code" },
	          _react2.default.createElement(
	            "code",
	            { className: "js" },
	            "let items = [",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ outlook: 'Outlook' }",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ outlookcom: 'Outlook.com' }",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ apple: 'Apple Calendar' }",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ yahoo: 'Yahoo' }",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ google: 'Google' }",
	            _react2.default.createElement("br", null),
	            "];",
	            _react2.default.createElement("br", null),
	            _react2.default.createElement("br", null)
	          ),
	          _react2.default.createElement(
	            "code",
	            { className: "jsx" },
	            "<AddToCalendar",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "event={event}",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "listItems={items} />"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "column" },
	          _react2.default.createElement(_reactAddToCalendar2.default, { event: event, listItems: items })
	        )
	      );
	    }
	  }]);

	  return ChangeDropdownOrder;
	}(_react2.default.Component);

	exports.default = ChangeDropdownOrder;


	ChangeDropdownOrder.displayName = "Change Dropdown Order";

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddToCalendar = __webpack_require__(196);

	var _reactAddToCalendar2 = _interopRequireDefault(_reactAddToCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RemoveDropdownItem = function (_React$Component) {
	  _inherits(RemoveDropdownItem, _React$Component);

	  function RemoveDropdownItem() {
	    _classCallCheck(this, RemoveDropdownItem);

	    return _possibleConstructorReturn(this, (RemoveDropdownItem.__proto__ || Object.getPrototypeOf(RemoveDropdownItem)).apply(this, arguments));
	  }

	  _createClass(RemoveDropdownItem, [{
	    key: "render",
	    value: function render() {
	      var event = {
	        title: "Sample Event",
	        description: "This is the sample event provided as an example only",
	        location: "Portland, OR",
	        startTime: "2016-09-16T20:15:00-04:00",
	        endTime: "2016-09-16T21:45:00-04:00"
	      };

	      var items = [{ outlook: "Outlook" }, { google: "Google" }];

	      return _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "pre",
	          { className: "column example__code" },
	          _react2.default.createElement(
	            "code",
	            { className: "js" },
	            "let items = [",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ outlook: 'Outlook' }",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ google: 'Google' }",
	            _react2.default.createElement("br", null),
	            "];",
	            _react2.default.createElement("br", null),
	            _react2.default.createElement("br", null)
	          ),
	          _react2.default.createElement(
	            "code",
	            { className: "jsx" },
	            "<AddToCalendar",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "event={event}",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "listItems={items} />"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "column" },
	          _react2.default.createElement(_reactAddToCalendar2.default, { event: event, listItems: items })
	        )
	      );
	    }
	  }]);

	  return RemoveDropdownItem;
	}(_react2.default.Component);

	exports.default = RemoveDropdownItem;


	RemoveDropdownItem.displayName = "Remove Dropdown Item";

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddToCalendar = __webpack_require__(196);

	var _reactAddToCalendar2 = _interopRequireDefault(_reactAddToCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChangeDropdownLabels = function (_React$Component) {
	  _inherits(ChangeDropdownLabels, _React$Component);

	  function ChangeDropdownLabels() {
	    _classCallCheck(this, ChangeDropdownLabels);

	    return _possibleConstructorReturn(this, (ChangeDropdownLabels.__proto__ || Object.getPrototypeOf(ChangeDropdownLabels)).apply(this, arguments));
	  }

	  _createClass(ChangeDropdownLabels, [{
	    key: "render",
	    value: function render() {
	      var event = {
	        title: "Sample Event",
	        description: "This is the sample event provided as an example only",
	        location: "Portland, OR",
	        startTime: "2016-09-16T20:15:00-04:00",
	        endTime: "2016-09-16T21:45:00-04:00"
	      };

	      var items = [{ outlook: "Outlook" }, { outlookcom: "Outlook.com" }, { apple: "iCal" }, { yahoo: "Yahoo!" }, { google: "Google" }];

	      return _react2.default.createElement(
	        "div",
	        { className: "row" },
	        _react2.default.createElement(
	          "pre",
	          { className: "column example__code" },
	          _react2.default.createElement(
	            "code",
	            { className: "js" },
	            "let items = [",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ outlook: 'Outlook' }",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ outlookcom: 'Outlook.com' }",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ apple: 'iCal' }",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ yahoo: 'Yahoo!' }",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "{ google: 'Google' }",
	            _react2.default.createElement("br", null),
	            "];",
	            _react2.default.createElement("br", null),
	            _react2.default.createElement("br", null)
	          ),
	          _react2.default.createElement(
	            "code",
	            { className: "jsx" },
	            "<AddToCalendar",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "event={event}",
	            _react2.default.createElement("br", null),
	            "\xA0\xA0\xA0",
	            "listItems={items} />"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "column" },
	          _react2.default.createElement(_reactAddToCalendar2.default, { event: event, listItems: items })
	        )
	      );
	    }
	  }]);

	  return ChangeDropdownLabels;
	}(_react2.default.Component);

	exports.default = ChangeDropdownLabels;


	ChangeDropdownLabels.displayName = "Change Dropdown Labels";

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(197);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CodeExampleComponent = function (_React$Component) {
	  _inherits(CodeExampleComponent, _React$Component);

	  function CodeExampleComponent() {
	    _classCallCheck(this, CodeExampleComponent);

	    return _possibleConstructorReturn(this, (CodeExampleComponent.__proto__ || Object.getPrototypeOf(CodeExampleComponent)).apply(this, arguments));
	  }

	  _createClass(CodeExampleComponent, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        {
	          key: this.props.id,
	          id: "example-" + this.props.id,
	          className: "example" },
	        _react2.default.createElement(
	          "h2",
	          { className: "example__heading" },
	          this.props.title
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return CodeExampleComponent;
	}(_react2.default.Component);

	exports.default = CodeExampleComponent;


	CodeExampleComponent.displayName = "CodeExampleComponent";

	CodeExampleComponent.propTypes = {
	  children: _propTypes2.default.element,
	  id: _propTypes2.default.number,
	  title: _propTypes2.default.string
	};

/***/ }),
/* 211 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 212 */
211,
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddToCalendar = __webpack_require__(196);

	var _reactAddToCalendar2 = _interopRequireDefault(_reactAddToCalendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeroExample = function (_React$Component) {
	  _inherits(HeroExample, _React$Component);

	  function HeroExample() {
	    _classCallCheck(this, HeroExample);

	    return _possibleConstructorReturn(this, (HeroExample.__proto__ || Object.getPrototypeOf(HeroExample)).apply(this, arguments));
	  }

	  _createClass(HeroExample, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(_reactAddToCalendar2.default, { buttonTemplate: { "calendar-plus-o": "left" } });
	    }
	  }]);

	  return HeroExample;
	}(_react2.default.Component);

	exports.default = HeroExample;


	HeroExample.displayName = "HeroExample";

/***/ })
/******/ ])));
webpackJsonp([34,126],{191:function(e,_,t){var r=t(297);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0};a.transform=void 0;t(6)(r,a);r.locals&&(e.exports=r.locals)},297:function(e,_,t){_=e.exports=t(5)(!1),_.push([e.i,".earthui-avatar {\n  vertical-align: top;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #d7d7d7;\n}\n.earthui-avatar__img_circle {\n  border-radius: 50%;\n}\n.earthui-avatar__img_sm {\n  width: 20px;\n  height: 20px;\n}\n.earthui-avatar__img_lg {\n  width: 92px;\n  height: 92px;\n}\n.earthui-avatar__img_xl {\n  width: 112px;\n  height: 112px;\n}\n",""])},35:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),function(module){function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return _extends=Object.assign||function(e){for(var _=1;_<arguments.length;_++){var t=arguments[_];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_extends.apply(this,arguments)}function _objectWithoutProperties(e,_){if(null==e)return{};var t,r,a=_objectWithoutPropertiesLoose(e,_);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],_.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function _objectWithoutPropertiesLoose(e,_){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],_.indexOf(t)>=0||(a[t]=e[t]);return a}function _classCallCheck(e,_){if(!(e instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,_){for(var t=0;t<_.length;t++){var r=_[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,_,t){return _&&_defineProperties(e.prototype,_),t&&_defineProperties(e,t),e}function _possibleConstructorReturn(e,_){return!_||"object"!==_typeof(_)&&"function"!=typeof _?_assertThisInitialized(e):_}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,_){if("function"!=typeof _&&null!==_)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(_&&_.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),_&&_setPrototypeOf(e,_)}function _setPrototypeOf(e,_){return(_setPrototypeOf=Object.setPrototypeOf||function(e,_){return e.__proto__=_,e})(e,_)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _defineProperty(e,_,t){return _ in e?Object.defineProperty(e,_,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[_]=t,e}var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(1),__WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),__WEBPACK_IMPORTED_MODULE_1_prop_types__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_1_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__),__WEBPACK_IMPORTED_MODULE_2_classnames__=__webpack_require__(4),__WEBPACK_IMPORTED_MODULE_2_classnames___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__),__WEBPACK_IMPORTED_MODULE_3__index_less__=__webpack_require__(191),__WEBPACK_IMPORTED_MODULE_3__index_less___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__index_less__);!function(){var e=__webpack_require__(0).enterModule;e&&e(module)}();var Avatar=function(_Component){function Avatar(){var e,_;_classCallCheck(this,Avatar);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return _=_possibleConstructorReturn(this,(e=_getPrototypeOf(Avatar)).call.apply(e,[this].concat(r))),_defineProperty(_assertThisInitialized(_assertThisInitialized(_)),"_handleClick",function(e){var t=_.props.onClick;t&&t(e)}),_}return _inherits(Avatar,_Component),_createClass(Avatar,[{key:"render",value:function(){var e,_=this.props,t=_.shape,r=_.size,a=_.src,n=_.className,o=_objectWithoutProperties(_,["shape","size","src","className"]);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img",_extends({src:a,onClick:this._handleClick,className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()("".concat("earthui","-avatar"),(e={},_defineProperty(e,"".concat("earthui","-avatar__img_").concat(t),t),_defineProperty(e,"".concat("earthui","-avatar__img_").concat(r),r),e),n)},o))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Avatar}(__WEBPACK_IMPORTED_MODULE_0_react__.Component);Avatar.propTypes={className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,shape:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["square","circle"]),size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["sm","lg","xl"]),src:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,onClick:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,others:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any},Avatar.defaultProps={shape:"circle",src:""};var _default=Avatar;__webpack_exports__.default=_default,function(){var e=__webpack_require__(0).default,_=__webpack_require__(0).leaveModule;e&&(e.register(Avatar,"Avatar","/Users/sally/Documents/Kimi/Projects/my-projects/earth-ui/src/components/Avatar/index.js"),e.register(_default,"default","/Users/sally/Documents/Kimi/Projects/my-projects/earth-ui/src/components/Avatar/index.js"),_(module))}()}.call(__webpack_exports__,__webpack_require__(3)(module))}});
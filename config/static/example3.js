/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(0);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function () {
    function Common() {
        _classCallCheck(this, Common);
    }

    _createClass(Common, null, [{
        key: 'prepareStyles',

        /**准备样式，方便合并样式*/
        value: function prepareStyles(s) {
            return new Styles(s);
        }
        /**
         * classname的helper函数，合并classname,现在只支持字符串。
         * @param {*} classname 
         * @returns 合并后的classname
         */

    }, {
        key: 'classnames',
        value: function classnames() {
            var refStr = '';
            //var classNameArray = [];

            for (var _len = arguments.length, name = Array(_len), _key = 0; _key < _len; _key++) {
                name[_key] = arguments[_key];
            }

            name.forEach(function (value) {
                value.split(' ').forEach(function (classNameItem) {
                    if (classNameItem !== '') {
                        refStr += ' ' + classNameItem;
                    }
                });
            });
            return refStr;
        }
    }]);

    return Common;
}();

var Styles = function () {
    function Styles(style) {
        _classCallCheck(this, Styles);

        this.o = {};
        this.merge(style);
    }
    /**合并 */


    _createClass(Styles, [{
        key: 'merge',
        value: function merge() {
            for (var _len2 = arguments.length, s = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                s[_key2] = arguments[_key2];
            }

            for (var i = 0; i < s.length; i++) {
                var properties = s[i];
                for (var p in properties) {
                    if (typeof properties[p] != "function") {
                        this.o[p] = properties[p];
                    }
                }
            }
            return this;
        }
        /**不合并，直接返回this和加入的对象，不改变this */

    }, {
        key: 'notmerge',
        value: function notmerge() {
            // let tmp = {};
            // s.push(this.o);
            // for (var i = 0; i < s.length; i++) {
            //     let properties = s[i];
            //     for (var p in properties) {
            //         if (typeof (properties[p]) != "function") {
            //             tmp[p] = properties[p];
            //         }
            //     }
            // }
            // return tmp;

            var tmp = {};

            for (var _len3 = arguments.length, s = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                s[_key3] = arguments[_key3];
            }

            for (var i = 0; i < s.length; i++) {
                var properties = s[i];
                for (var p in properties) {
                    if (typeof properties[p] != "function") {
                        tmp[p] = properties[p];
                    }
                }
            }
            return _extends({}, this.o, tmp);
        }
    }]);

    return Styles;
}();
/**处理class样式 */


var ClassName = function () {
    function ClassName() {
        var _this = this;

        _classCallCheck(this, ClassName);

        this.o = '';

        for (var _len4 = arguments.length, s = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            s[_key4] = arguments[_key4];
        }

        s.forEach(function (value) {
            _this.merge(value);
        });
    }

    _createClass(ClassName, [{
        key: 'merge',
        value: function merge() {
            var _this2 = this;

            for (var _len5 = arguments.length, s = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                s[_key5] = arguments[_key5];
            }

            s.forEach(function (value) {
                _this2.o += ' ' + value;
            });
            return this;
        }
    }]);

    return ClassName;
}();

var styles = {
    czjz: { display: "flex", alignItems: "center" },
    czspjz: { display: "flex", alignItems: "center", justifyContent: "center" },
    spjz: { display: "flex", justifyContent: "center" },
    /**水平居中，排列方向是垂直排列，父元素如果是flex并且高度是100%的情况，如果直接spjz则会高度会充满*/
    spjzcolumn: { display: "flex", alignItems: "center", flexDirection: 'column' },
    /**绝对定位，不设置的项填写null*/
    absolute:
    /**
     * 绝对定位，不设置的项填写null
    * @param t top值
    */
    function absolute(t, r, b, l) {
        //console.log(t !== null);
        var ret = Common.prepareStyles({ position: 'absolute' });
        if (t !== null) {
            ret.merge({ top: t });
        }
        if (r !== null) {
            ret.merge({ right: r });
        }
        if (b !== null) {
            ret.merge({ bottom: b });
        }
        if (l !== null) {
            ret.merge({ left: l });
        }
        return ret.o;
    },

    create: Common.prepareStyles,
    /**去掉手指长按出现选择文字*/
    noSelect: {
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        cursor: 'pointer'
    },
    /**平移方式居中*/
    spjz1: {
        marginLeft: '50%',
        WebkitTransform: 'translate(-50%,0)',
        MsTransform: 'translate(-50%,0)',
        transform: 'translate(-50%,0)'
    },
    /**平移方式居中*/
    czjz1: {
        marginTop: '50%',
        WebkitTransform: 'translate(0,-50%)',
        MsTransform: 'translate(0,-50%)',
        transform: 'translate(0,-50%)'
    }
};
var className = {
    /**display:flex兼容写法 */
    flex: ' display-flex ',
    justifyContent: ' justify-content ',
    alignItems: ' align-items ',
    flexDirection: ' flex-direction ',
    flexDirectionColumn: ' flex-direction-column ',
    flexGrow: ' flex-grow ',
    spjz: ' display-flex justify-content ',
    spczjz: ' display-flex justify-content align-items ',
    czjz: ' display-flex align-items '
    /**
     * 设备信息
     */
};var Device = {
    /**系统名称:Android,IOS,Other*/
    OS: function () {
        //没有这个对象返回node，nonde环境用
        return 'node';
    }(),
    IsMobile: function () {
        return false;
    }()
};
/**
 * 设备信息
 */
// const Device = {
//     /**系统名称:Android,IOS,Other*/
//     OS: function () {
//         var u = navigator.userAgent;
//         if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
//             return 'Android';
//         }
//         else if (u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
//             return 'IOS';
//         }
//         else {
//             return 'Other';
//         }
//     }(),
//     IsMobile: function () {
//         if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }()
// };
var Global = { styles: styles, className: className, Device: Device };

exports.Common = Common;
exports.Global = Global;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Flex1 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Flex = Flex;
exports.Image = Image;
exports.Placeholder = Placeholder;
exports.Text = Text;
exports.Abs = Abs;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _common = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Flex(_ref) {
    var children = _ref.children,
        _ref$className = _ref.className,
        className = _ref$className === undefined ? '' : _ref$className,
        style = _ref.style,
        dom = _ref.dom,
        column = _ref.column,
        horizontal = _ref.horizontal,
        vertical = _ref.vertical,
        HW = _ref.HW,
        flex1 = _ref.flex1,
        other = _ref.other;

    var classnames = '';
    if (column) classnames += ' flex-direction-column';
    if (horizontal) classnames += ' justify-content';
    if (vertical) classnames += ' align-items';
    if (HW) classnames += ' justify-content align-items';
    if (flex1) classnames += ' flex1';
    return _react2.default.createElement(
        'div',
        _extends({ ref: dom, className: 'display-flex ' + className + classnames, style: style }, other),
        children
    );
}

var Flex1 = exports.Flex1 = function (_Component) {
    _inherits(Flex1, _Component);

    function Flex1(props) {
        _classCallCheck(this, Flex1);

        return _possibleConstructorReturn(this, (Flex1.__proto__ || Object.getPrototypeOf(Flex1)).call(this, props));
    }

    _createClass(Flex1, [{
        key: 'render',
        value: function render() {
            var classnames = '';
            if (this.props.column) classnames += ' flex-direction-column';
            if (this.props.horizontal) classnames += ' justify-content';
            if (this.props.vertical) classnames += ' align-items';
            if (this.props.HW) classnames += ' justify-content align-items';
            if (this.props.flex1) classnames += ' flex1';
            return _react2.default.createElement(
                'div',
                _extends({ ref: this.props.dom, className: _common.Common.classnames('display-flex', this.props.className || '', classnames), style: this.props.style }, this.props.other),
                this.props.children
            );
        }
    }]);

    return Flex1;
}(_react.Component);
// class FLexBase extends PureComponent {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         let { column, horizontal, vertical, children, className, style, HW, flex1, other } = this.props;
//         let classnames = '';
//         if (column) classnames += ' flex-direction-column';
//         if (horizontal) classnames += ' justify-content';
//         if (vertical) classnames += ' align-items';
//         if (HW) classnames += ' justify-content align-items';
//         if (flex1) classnames += ' flex1';
//         return (
//             <div className={Common.classnames('display-flex', className, classnames)} style={style} {...other}>
//                 {children}
//             </div>
//         );
//     }
// }


function Image(_ref2) {
    var _ref2$className = _ref2.className,
        className = _ref2$className === undefined ? '' : _ref2$className,
        style = _ref2.style,
        src = _ref2.src,
        other = _ref2.other,
        height = _ref2.height,
        width = _ref2.width;

    var styles = {};
    if (height) {
        styles.height = height;
    }
    if (width) {
        styles.width = width;
    }
    return _react2.default.createElement('img', _extends({ className: className, style: _extends({}, styles, style), src: src }, other));
}
function Placeholder() {
    return _react2.default.createElement('div', { className: 'flex1' });
}
//加入inline-block 是为了解决高度和fontSize不一致问题，style会覆盖其他
function Text(_ref3) {
    var label = _ref3.label,
        color = _ref3.color,
        fontSize = _ref3.fontSize,
        lineHeight = _ref3.lineHeight,
        style = _ref3.style,
        bold = _ref3.bold,
        className = _ref3.className;

    var addStyle = {};
    if (fontSize && !lineHeight) {
        addStyle.lineHeight = fontSize;
    }
    if (bold) {
        addStyle.fontWeight = '600';
    }
    var styles = _common.Common.prepareStyles().merge({ color: color, fontSize: fontSize, display: 'inline-block', lineHeight: lineHeight }, addStyle, style).o;
    return _react2.default.createElement(
        'span',
        { className: className, style: styles },
        label
    );
}
function Abs(_ref4) {
    var children = _ref4.children,
        _ref4$className = _ref4.className,
        className = _ref4$className === undefined ? '' : _ref4$className,
        style = _ref4.style;

    var classnames = '';
    var defaultStyles = { position: 'absolute' };
    var styles = _extends({}, defaultStyles, style);
    return _react2.default.createElement(
        'div',
        { className: _common.Common.classnames(className, classnames), style: styles },
        children
    );
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Icon = Icon;

var _common = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _iconsbase = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import * as icons from '../utils/icons';
// /**图标 */
// /**正常图标 
//  * 可设置style的样式fill:颜色，width宽度，height高度等
//  * iconName为icon名称
//  * color
//  * width
//  * height
// */
// export class Icon1 extends React.Component {
//     render() {
//         let { width, height, iconName, color } = this.props;
//         let styles = {
//             style: Global.styles.create({ fill: color, width, height }).merge(this.props.style)
//         };
//         return (
//             <svg style={styles.style.o}>
//                 <use xlinkHref={iconName}></use>
//             </svg>
//         );
//     }
// }
// export function Icon2({ width, height, iconName, color, style }) {
//     let styles = {
//         style: Global.styles.create({ fill: color, width, height }).merge(style)
//     };
//     return (
//         <svg style={styles.style.o}>
//             <use xlinkHref={iconName}></use>
//         </svg>
//     );
// }

// Icon.defaultProps = {
//     color: '#fff'
// }
// Icon.propTypes = {
//     iconName: React.PropTypes.string.isRequired,
//     width: React.PropTypes.string,
//     height: React.PropTypes.string,
//     color: React.PropTypes.string,
//     style: React.PropTypes.object,
// };
// Icon.propInfo = {
//     iconName: 'icon名称，通过import * as icons from "../src/utils/icons"引入',
//     style: '样式',
// }
// Icon.displayName = 'Icon';

function Icon(_ref) {
    var color = _ref.color,
        width = _ref.width,
        height = _ref.height,
        background = _ref.background,
        name = _ref.name;

    return _react2.default.createElement(
        'div',
        { style: { display: 'inline-block', width: width, height: height, lineHeight: height } },
        _react2.default.createElement('svg', { dangerouslySetInnerHTML: { __html: _iconsbase.icons[name].content }, width: '100%', height: '100%', fill: color, style: { background: background }, version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', x: '0px', y: '0px', viewBox: '0 0 512 512', xmlSpace: 'preserve' })
    );
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TouchableBase = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.Touchable = Touchable;
exports.TouchableFlex = TouchableFlex;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _common = __webpack_require__(1);

var _layout = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**手势gesture*/


var SL = _common.Global.styles;
var CN = _common.Global.className;
/**
 * 触摸高亮有onTap事件
 * style
 * onTap
 * onSwipeLeft
 * onSwipeRight
 * onSwipeUp
 * onSwipeDown
 * className
 * classBase:'Tappable'
 * tapLength:20
 * swiperLength:40
 * 
 * 
 * onPinch:({scale[缩放比例],distance[距离]})=>{}
 * onPinchEnd
 * pinch:{
 * maxScale:[number],minScale:[number]
 * }
 * 
 * preventDefault
 * stopPropagation
 * */

var TouchableBase = exports.TouchableBase = function (_Component) {
    _inherits(TouchableBase, _Component);

    function TouchableBase(props) {
        _classCallCheck(this, TouchableBase);

        var _this = _possibleConstructorReturn(this, (TouchableBase.__proto__ || Object.getPrototypeOf(TouchableBase)).call(this, props));

        _this._offsetX = function () {
            return _this.clientX - _this.startX;
        };

        _this._offsetY = function () {
            return _this.clientY - _this.startY;
        };

        _this.mouseDown = function (e) {
            if (_common.Global.Device.IsMobile) return;
            _this.start(e);
        };

        _this.mouseMove = function (e) {
            if (_common.Global.Device.IsMobile) return;
            _this.move(e);
        };

        _this.mouseUp = function (e) {
            if (_common.Global.Device.IsMobile) return;
            _this.end(e);
        };

        _this.touchStart = function (e) {
            if (!_common.Global.Device.IsMobile) return;
            _this.start(e);
        };

        _this.touchMove = function (e) {
            if (!_common.Global.Device.IsMobile) return;
            _this.move(e);
        };

        _this.touchEnd = function (e) {
            if (!_common.Global.Device.IsMobile) return;
            _this.end(e);
        };

        _this.start = function (e) {
            _this._emitEvent("onTouchStart", e);
            if (e.touches && e.touches.length > 1) {
                var point1 = e.touches[0];
                var point2 = e.touches[1];
                var xLen = Math.abs(point2.pageX - point1.pageX);
                var yLen = Math.abs(point2.pageY - point1.pageY);
                _this.touchDistance = _this._getDistance(xLen, yLen);

                _this.events.clear();
                _this.setState({ tapActive: false });

                _this.events.add('onPinchEnd');
            } else {
                if (e.touches) {
                    _this.startX = e.touches[0].clientX;
                    _this.startY = e.touches[0].clientY;
                } else {
                    _this.startX = e.clientX;
                    _this.startY = e.clientY;
                }

                _this.events.add('onTap');
                _this.showTapActive();
            }
        };

        _this.showTapActive = function () {
            if (_this.props.classBase !== 'none') {
                _this.setState({ tapActive: true });
            }
        };

        _this.move = function (e) {
            _this._emitEvent("onTouchMove", e);
            if (_this.props.preventDefault) {
                e.preventDefault();
                e.stopPropagation();
            }
            if (e.touches && e.touches.length > 1) {
                var xLen = Math.abs(e.touches[0].pageX - e.touches[1].pageX);
                var yLen = Math.abs(e.touches[1].pageY - e.touches[1].pageY);
                var touchDistance = _this._getDistance(xLen, yLen);
                if (_this.touchDistance) {
                    var pinchScale = touchDistance / _this.touchDistance;
                    //this.scale = pinchScale + this.previousPinchScale - 1;
                    _this.scale = pinchScale * _this.previousPinchScale;
                    if (_this.props.pinch.maxScale < _this.scale) {
                        _this._emitEvent('onPinch', { scale: _this.props.pinch.maxScale, distance: touchDistance });
                    }
                    if (_this.props.pinch.minScale > _this.scale) {
                        _this._emitEvent('onPinch', { scale: _this.props.pinch.minScale, distance: touchDistance });
                    }
                    if (_this.props.pinch.maxScale > _this.scale && _this.scale > _this.props.pinch.minScale) {
                        _this._emitEvent('onPinch', { scale: _this.scale, distance: touchDistance });
                    }

                    //this.previousPinchScale = pinchScale;
                }
            } else {
                if (e.touches) {
                    _this.clientX = e.touches[0].clientX;
                    _this.clientY = e.touches[0].clientY;
                } else {
                    _this.clientX = e.clientX;
                    _this.clientY = e.clientY;
                }
                if ((Math.abs(_this._offsetX()) > _this.props.tapLength || Math.abs(_this._offsetY()) > _this.props.tapLength) && _this.state.tapActive) {
                    _this.events.delete('onTap');
                    _this.setState({ tapActive: false });
                }
                // if (this.events.has('onTap')) {
                //     e.preventDefault();
                //      e.stopPropagation();
                // }
                if (_this._offsetX() > _this.props.swiperLength) {
                    _this.events.add('onSwipeRight');
                } else {
                    _this.events.delete('onSwipeRight');
                }
                if (_this._offsetX() < -_this.props.swiperLength) {
                    _this.events.add('onSwipeLeft');
                } else {
                    _this.events.delete('onSwipeLeft');
                }
                if (_this._offsetY() < -_this.props.swiperLength) {
                    _this.events.add('onSwipeUp');
                } else {
                    _this.events.delete('onSwipeUp');
                }
                if (_this._offsetY() > _this.props.swiperLength) {
                    _this.events.add('onSwipeDown');
                } else {
                    _this.events.delete('onSwipeDown');
                }
            }
        };

        _this.end = function (e) {
            _this._emitEvent("onTouchEnd", e);
            _this.events.forEach(function (v) {
                _this._emitEvent(v, e);
            });
            _this.events.clear();

            if (_this.scale) {
                if (_this.props.pinch.maxScale > _this.scale && _this.scale > _this.props.pinch.minScale) {
                    _this.previousPinchScale = _this.scale;
                }
            }

            _this.setState({ tapActive: false });
        };

        _this.startX = null;
        _this.startY = null;
        _this.clientX = null;
        _this.clientY = null;

        _this.previousPinchScale = 1;

        _this.events = new Set();
        _this.state = {
            //选中状态，如果classBase为"none"则不动
            tapActive: false
        };
        return _this;
    }
    /** 勾股定理计算距离*/


    _createClass(TouchableBase, [{
        key: '_getDistance',
        value: function _getDistance(xLen, yLen) {
            return Math.sqrt(xLen * xLen + yLen * yLen);
        }
    }, {
        key: 'render',
        value: function render() {
            var styles = {
                root: SL.create(SL.noSelect)
            };
            styles.root.merge(this.props.style);
            var className = this.props.className || '';
            if (this.props.classBase && this.state.tapActive) {
                className += ' ' + this.props.classBase + '-active';
            } else {
                className += ' ' + this.props.classBase + '-inactive';
            }
            var props = {
                onTouchStart: this.touchStart,
                onMouseDown: this.mouseDown,
                onMouseUp: this.mouseUp,
                onMouseMove: this.mouseMove,
                onTouchMove: this.touchMove,
                onTouchEnd: this.touchEnd
            };
            if (this.props.flex) {
                return _react2.default.createElement(
                    _layout.Flex,
                    { className: className, column: this.props.column, flex1: this.props.flex1, horizontal: this.props.horizontal,
                        HW: this.props.HW, style: this.props.style, vertical: this.props.vertical, other: props },
                    this.props.children
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    _extends({ style: styles.root.o, className: className }, props),
                    this.props.children
                );
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
        /**
         * 执行系统事件，有的时候需要加入系统的非自定义的事件
         * 有这个事件则执行没有则忽略
         */

    }, {
        key: '_emitEvent',
        value: function _emitEvent(eventType, e) {
            var eventHandler = this.props[eventType];
            if (!eventHandler) return;
            eventHandler(e);
        }
    }]);

    return TouchableBase;
}(_react.Component);

TouchableBase.defaultProps = {
    classBase: 'Tappable',
    tapLength: 20,
    swiperLength: 40,
    pinch: {
        maxScale: 10000,
        minScale: 0.001
    }
};

function Touchable(_ref) {
    var style = _ref.style,
        className = _ref.className,
        classBase = _ref.classBase,
        children = _ref.children,
        push = _ref.push;

    var props = {};
    if (style) {
        props.style = style;
    }
    if (className) {
        props.className = className;
    }
    if (classBase) {
        props.classBase = classBase;
    }
    if (push) {
        props.push = push;
    }
    return _react2.default.createElement(
        TouchableBase,
        props,
        children
    );
}
function TouchableFlex(_ref2) {
    var children = _ref2.children,
        _ref2$className = _ref2.className,
        className = _ref2$className === undefined ? '' : _ref2$className,
        style = _ref2.style,
        column = _ref2.column,
        horizontal = _ref2.horizontal,
        vertical = _ref2.vertical,
        HW = _ref2.HW,
        flex1 = _ref2.flex1,
        other = _ref2.other,
        onTap = _ref2.onTap,
        classBase = _ref2.classBase,
        push = _ref2.push;

    var props = {};
    if (onTap) {
        props.onTap = onTap;
    }
    if (style) {
        props.style = style;
    }
    if (className) {
        props.className = className;
    }
    if (classBase) {
        props.classBase = classBase;
    }
    if (push) {
        props.push = push;
    }
    if (classBase) {
        props.classBase = classBase;
    }
    if (column) {
        props.column = column;
    }
    if (horizontal) {
        props.horizontal = horizontal;
    }
    if (vertical) {
        props.vertical = vertical;
    }
    if (HW) {
        props.HW = HW;
    }
    if (flex1) {
        props.flex1 = flex1;
    }
    return _react2.default.createElement(
        TouchableBase,
        _extends({}, props, { flex: true }),
        children
    );
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = vendor1_library;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Page = exports.Image = exports.Text = exports.TouchableFlex = exports.Placeholder = exports.Abs = exports.Flex = exports.Icon = undefined;

var _icon = __webpack_require__(3);

var _layout = __webpack_require__(2);

var _touchable = __webpack_require__(4);

var _page = __webpack_require__(8);

exports.Icon = _icon.Icon;
exports.Flex = _layout.Flex;
exports.Abs = _layout.Abs;
exports.Placeholder = _layout.Placeholder;
exports.TouchableFlex = _touchable.TouchableFlex;
exports.Text = _layout.Text;
exports.Image = _layout.Image;
exports.Page = _page.Page;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var icons = exports.icons = {
    arrowUp: {
        content: '<polygon points="396.6,352 416,331.3 256,160 96,331.3 115.3,352 256,201.5 "/>'
    },
    arrowRight: {
        content: '<polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 "/>'
    },
    arrowDown: {
        content: '<polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "/>'
    },
    arrowLeft: {
        content: '<polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 "/>'
    },
    arrowBack: {
        content: '<polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/>'
    },
    arrowForward: {
        content: '<polygon points="160,128.4 192.3,96 352,256 352,256 352,256 192.3,416 160,383.6 287.3,256 "/>'
    },
    closeRound: {
        content: '<path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5\n        c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9\n        c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>'
    },
    plusRound: {
        content: '<path d="M417.4,224H288V94.6c0-16.9-14.3-30.6-32-30.6c-17.7,0-32,13.7-32,30.6V224H94.6C77.7,224,64,238.3,64,256\n        c0,17.7,13.7,32,30.6,32H224v129.4c0,16.9,14.3,30.6,32,30.6c17.7,0,32-13.7,32-30.6V288h129.4c16.9,0,30.6-14.3,30.6-32\n        C448,238.3,434.3,224,417.4,224z"/>'
    },
    arrowThinUp: {
        content: '<path d="M349.7,189.8c-3.1,3.1-8,3-11.3,0L264,123.4V408c0,4.4-3.6,8-8,8c-4.4,0-8-3.6-8-8V123.4l-74.4,66.3\n        c-3.4,2.9-8.1,3.2-11.2,0.1c-3.1-3.1-3.3-8.5-0.1-11.4c0,0,87-79.2,88-80s2.8-2.4,5.7-2.4s4.9,1.6,5.7,2.4s88,80,88,80\n        c1.5,1.5,2.3,3.6,2.3,5.7C352,186.2,351.2,188.2,349.7,189.8z"/>'
    },
    arrowThinRight: {
        content: '<path d="M322.2,349.7c-3.1-3.1-3-8,0-11.3l66.4-74.4H104c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8h284.6l-66.3-74.4\n        c-2.9-3.4-3.2-8.1-0.1-11.2c3.1-3.1,8.5-3.3,11.4-0.1c0,0,79.2,87,80,88s2.4,2.8,2.4,5.7s-1.6,4.9-2.4,5.7s-80,88-80,88\n        c-1.5,1.5-3.6,2.3-5.7,2.3C325.8,352,323.8,351.2,322.2,349.7z"/>'
    },
    arrowThinDown: {
        content: '<path d="M349.7,322.2c-3.1-3.1-8-3-11.3,0L264,388.6V104c0-4.4-3.6-8-8-8c-4.4,0-8,3.6-8,8v284.6l-74.4-66.3\n        c-3.4-2.9-8.1-3.2-11.2-0.1c-3.1,3.1-3.3,8.5-0.1,11.4c0,0,87,79.2,88,80s2.8,2.4,5.7,2.4s4.9-1.6,5.7-2.4s88-80,88-80\n        c1.5-1.5,2.3-3.6,2.3-5.7C352,325.8,351.2,323.8,349.7,322.2z"/>'
    },
    arrowThinLeft: {
        content: '<path d="M189.8,349.7c3.1-3.1,3-8,0-11.3L123.4,264H408c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4,3.2-8.1,0.1-11.2\n        c-3.1-3.1-8.5-3.3-11.4-0.1c0,0-79.2,87-80,88S96,253.1,96,256s1.6,4.9,2.4,5.7s80,88,80,88c1.5,1.5,3.6,2.3,5.7,2.3\n        C186.2,352,188.2,351.2,189.8,349.7z"/>'
    },
    circleFilled: {
        content: '<g>\n        <g>\n            <path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7\n                c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7\n                C446.7,361.1,361.1,446.7,256,446.7z"/>\n        </g>\n    </g>\n    <g>\n        <g>\n            <path d="M256,96c-88.4,0-160,71.6-160,160c0,88.4,71.6,160,160,160c88.4,0,160-71.6,160-160C416,167.6,344.4,96,256,96z"/>\n        </g>\n    </g>'
    },
    circleOutline: {
        content: '<g>\n        <g>\n            <path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7\n                c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7\n                C446.7,361.1,361.1,446.7,256,446.7z"/>\n        </g>\n    </g>'
    },
    more: {
        content: '<g>\n        <path d="M113.7,304C86.2,304,64,282.6,64,256c0-26.5,22.2-48,49.7-48c27.6,0,49.8,21.5,49.8,48C163.5,282.6,141.3,304,113.7,304z"\n            />\n        <path d="M256,304c-27.5,0-49.8-21.4-49.8-48c0-26.5,22.3-48,49.8-48c27.5,0,49.7,21.5,49.7,48C305.7,282.6,283.5,304,256,304z"/>\n        <path d="M398.2,304c-27.5,0-49.8-21.4-49.8-48c0-26.5,22.2-48,49.8-48c27.5,0,49.8,21.5,49.8,48C448,282.6,425.8,304,398.2,304z"/>\n    </g>'
    },
    moreOutline: {
        content: '<g>\n        <path d="M256,238c9.9,0,18,8.1,18,18s-8.1,18-18,18s-18-8.1-18-18S246.1,238,256,238 M256,224c-17.7,0-32,14.3-32,32s14.3,32,32,32\n            c17.7,0,32-14.3,32-32S273.7,224,256,224L256,224z"/>\n        <path d="M128.4,238c9.9,0,18,8.1,18,18s-8.1,18-18,18c-9.9,0-18-8.1-18-18S118.5,238,128.4,238 M128.4,224c-17.7,0-32,14.3-32,32\n            s14.3,32,32,32c17.7,0,32-14.3,32-32S146,224,128.4,224L128.4,224z"/>\n        <path d="M384,238c9.9,0,18,8.1,18,18s-8.1,18-18,18s-18-8.1-18-18S374.1,238,384,238 M384,224c-17.7,0-32,14.3-32,32s14.3,32,32,32\n            s32-14.3,32-32S401.7,224,384,224L384,224z"/>\n    </g>'
    },
    chatbubble: {
        content: '<path d="M256,449.4c28.9,0,56.4-5.7,81.3-15.9c0.6-0.3,1.1-0.5,1.7-0.7c0.1,0,0.2,0,0.2-0.1c3.5-1.3,7.3-2,11.2-2\n        c4.3,0,8.4,0.8,12.1,2.4l84,30.9l-22.1-88.4c0-5.3,1.5-10.3,3.9-14.6c0,0,0,0,0,0c0.8-1.3,1.6-2.6,2.5-3.7\n        c20.9-31.3,33-68.5,33-108.4C464,137.9,370.9,48,256,48C141.1,48,48,137.9,48,248.7C48,359.6,141.1,449.4,256,449.4z"/>'
    },
    chatbubbleOutline: {
        content: '<path d="M256,112c97,0,176,62,176,138.3c0,35.9-17.6,69.2-49.5,93.9c-32.8,25.4-77.4,39.3-125.5,39.3c-28.9,0-51-3-69.7-9.3\n        c-0.6-0.2-1.3-0.5-2-0.7c-0.3-0.1-0.6-0.2-0.8-0.2c-4.7-1.4-9.7-2.1-14.7-2.1c-5.6,0-11.1,0.9-16.3,2.6l0,0l-0.3,0.1\n        c-0.6,0.2-8.9,3.3-11,4.3l0,0l-39.6,17.2c13.8-43.9,13.8-44.8,13.8-47.6c0-7.1-2.2-14.1-6.3-20.2c-0.5-0.7-1-1.4-1.6-2.1\n        c-0.7-0.9-1.3-1.7-1.8-2.3c-17.4-21.9-26.6-47.1-26.6-73C80,174,159,112,256,112 M256,96C149.9,96,64,165.1,64,250.3\n        c0,30.7,11.2,59.3,30.4,83.3c0.9,0.9,2.9,3.8,3.6,4.9c0,0-1-1.6-1.1-1.9c0,0,0,0,0,0l0,0c0,0,0,0,0,0c2.3,3.3,3.6,7.1,3.6,11.2\n        c0,1.4-17.9,58-17.9,58l0,0c-1.3,4.4,2.1,8.9,7.6,10c0.8,0.2,1.6,0.2,2.4,0.2c1.3,0,2.5-0.2,3.7-0.5l1.6-0.6l50.6-22\n        c0.9-0.4,9-3.5,10-3.9c0,0,0.6-0.2,0.6-0.2c0,0-0.1,0-0.6,0.2c3.4-1.2,7.2-1.8,11.2-1.8c3.6,0,7.1,0.5,10.3,1.5c0.1,0,0.2,0,0.2,0.1\n        c0.5,0.2,1,0.3,1.5,0.5c23.1,7.9,48.4,10.3,75.1,10.3c106,0,191-64.1,191-149.3C448,165.1,362,96,256,96L256,96z"/>'
    },
    reload: {
        content: '<g id="PL_x5F_Reset_1_">\n        <path d="M256,64c105.9,0,191.7,85.7,191.9,191.5l55-52.5l9,9.1L441.6,280L375,212.1l9-9.1l51.1,52.4\n            C434.8,156.9,354.6,76.8,256,76.8c-98.8,0-179.2,80.4-179.2,179.2c0,98.8,80.4,179.2,179.2,179.2c78.6,0,145.5-51,169.5-121.6\n            l12.4,3.5C412.3,393.2,340.6,448,256,448c-106,0-192-86-192-192S150,64,256,64z"/>\n    </g>'
    },
    loop: {
        content: '<g>\n        <polygon points="489.373,256 448,297.373 405.627,256 394.813,266.813 448,320 500.687,267.313 \t"/>\n        <g>\n            <path d="M459.994,255.509c-0.002-0.577,0.013-1.157,0.007-1.733l-0.029-0.003C458.771,142.311,367.742,52,256,52\n                c-73.59,0-141.753,39.878-177.888,104.071l13.943,7.848C125.359,104.754,188.18,68,256,68\n                c103.273,0,187.355,83.708,187.985,186.836c0.038,6.882-0.281,13.83-1.017,20.831l15.912,1.674\n                c0.755-7.168,1.105-14.286,1.111-21.341H460C460,255.836,459.994,255.673,459.994,255.509z"/>\n            <path d="M419.944,348.081C386.641,407.246,323.82,444,256,444c-103.475,0-187.688-84.032-187.993-187.437\n                c-0.015-6.686,0.31-13.434,1.024-20.23l-15.912-1.674c-0.754,7.168-1.104,14.286-1.108,21.341H52c0,0.472,0.015,0.939,0.018,1.41\n                c0.006,0.975-0.006,1.952,0.015,2.924l0.022-0.003C54.369,370.825,144.962,460,256,460c73.59,0,141.753-39.878,177.888-104.071\n                L419.944,348.081z"/>\n            <g>\n                <polygon points="64,192 11.313,244.687 22.627,256 64,214.627 105.373,256 116.687,244.687 \t\t\t"/>\n            </g>\n        </g>\n    </g>'
    },
    mic: {
        content: '<g>\n        <path d="M256,353.5c43.7,0,79-37.5,79-83.5V115.5c0-46-35.3-83.5-79-83.5c-43.7,0-79,37.5-79,83.5V270\n            C177,316,212.3,353.5,256,353.5z"/>\n        <path d="M367,192v79.7c0,60.2-49.8,109.2-110,109.2c-60.2,0-110-49-110-109.2V192h-19v79.7c0,67.2,53,122.6,120,127.5V462h-73v18\n            h161v-18h-69v-62.8c66-4.9,117-60.3,117-127.5V192H367z"/>\n    </g>'
    },
    micOutline: {
        content: '<g>\n        <path d="M256,32c-43.7,0-79,37.5-79,83.5V270c0,46,35.3,83.5,79,83.5c43.7,0,79-37.5,79-83.5V115.5C335,69.5,299.7,32,256,32z\n             M319,270c0,37.2-28.3,67.5-63,67.5c-34.7,0-63-30.3-63-67.5V115.5c0-37.2,28.3-67.5,63-67.5c34.7,0,63,30.3,63,67.5V270z"/>\n        <path d="M367,192v79.7c0,60.2-49.8,109.2-110,109.2c-60.2,0-110-49-110-109.2V192h-19v79.7c0,67.2,53,122.6,120,127.5V462h-73v18\n            h161v-18h-69v-62.8c66-4.9,117-60.3,117-127.5V192H367z"/>\n    </g>'
    },
    micOff: {
        content: '<g>\n        <rect x="264.2" y="1.1" transform="matrix(0.8629 -0.5053 0.5053 0.8629 -92.0515 172.66)" width="16" height="509.8"/>\n        <path d="M256.2,353.4c12.3,0,23.8-2.9,34.2-8.2L177,152.4V270C177,316,212.4,353.4,256.2,353.4z"/>\n        <path d="M335,270V115.5c0-46-35.2-83.5-79-83.5c-25.4,0-47.8,12.6-62.3,32.2l136.9,233.3C333.5,288.9,335,279.6,335,270z"/>\n        <path d="M384,271.7V192h-17v79.7c0,21.5-6.2,41.6-17.1,58.5l9.9,17C375.1,326,384,299.9,384,271.7z"/>\n        <path d="M267,399.2c17-1.2,33-5.8,47.3-13l-9.4-16.1c-14.5,7-30.7,10.9-47.7,10.9c-60.3,0-110.1-49-110.1-109.1V192h-19v79.7\n            c0,67.2,53,122.6,120,127.4V462h-73v18h161v-18h-69V399.2z"/>\n    </g>'
    },
    search: {
        content: '<path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2\n        s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3\n        s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3\n        c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z"/>'
    },
    myBill: {
        content: '<g id="Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g>\n            <g id="Group-15" transform="translate(39.000000, 0.000000)">\n                <path d="M0,0 L435.2,0 L435.2,512 L0,512 L0,0 Z M81.6,192 L81.6,243.2 L353.6,243.2 L353.6,192 L81.6,192 Z M81.6,320 L81.6,371.2 L299.2,371.2 L299.2,320 L81.6,320 Z M81.6,64 L81.6,115.2 L353.6,115.2 L353.6,64 L81.6,64 Z" id="Combined-Shape"></path>\n            </g>\n        </g>\n    </g>'
    },
    youhuiquan: {
        content: '<g id="Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g>\n            <g transform="translate(34.000000, 0.000000)" id="Combined-Shape">\n                <path d="M435.2,281.313005 L435.2,512 L0,512 L0,281.313005 C35.8816001,278.079541 64,247.923472 64,211.2 C64,174.476528 35.8816001,144.320459 -8.8817842e-16,141.086995 L0,0 L435.2,0 L435.2,141.086995 C433.092083,140.897041 430.957374,140.8 428.8,140.8 C389.919154,140.8 358.4,172.319154 358.4,211.2 C358.4,250.080846 389.919154,281.6 428.8,281.6 C430.957374,281.6 433.092083,281.502959 435.2,281.313005 Z M115.2,140.8 L194.605992,242.943894 L115.2,242.943894 L115.2,284.535833 L197.980234,284.535833 L197.980234,324.835642 L115.2,324.835642 L115.2,366.828663 L197.980234,366.828663 L197.980234,423.328321 L239.599378,423.328321 L239.599378,366.828663 L320,366.828663 L320,324.835642 L239.599378,324.835642 L239.599378,284.535833 L320,284.535833 L320,242.943894 L239.599378,242.943894 L320,140.8 L258.413779,140.8 L217.007492,201.702469 L178.331594,140.8 L115.2,140.8 Z"></path>\n            </g>\n        </g>\n    </g>'
    },
    shezhi: {
        content: '<g id="Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g id="\u8BBE\u7F6Eicon" fill-rule="nonzero">\n            <path d="M506.434316,329.843224 L445.261777,292.942446 C448.749184,282.444604 448.749184,268.447482 448.749184,257.94964 C448.749184,247.451799 448.749184,233.454676 445.261777,222.956835 L512,184.962843 L494.085469,156.470504 L462.69881,100.482014 L445.261777,72.4877698 L379.001051,110.979856 C361.564018,96.9827338 340.639579,82.9856115 319.715139,75.9870504 L319.715139,13 C310.415388,13 299.953168,13 288.32848,13 L225.555161,13 C213.930472,13 202.305784,13 190.681095,13 L190.681095,72.4877698 C169.756655,79.4863309 148.832216,93.4834532 131.395183,107.480576 L65.1344571,70.2159083 L2.22044605e-16,177.960275 L65.1344571,222.956835 C65.1344571,233.454676 61.6470505,243.952518 61.6470505,257.94964 C61.6470505,268.447482 61.6470505,282.444604 65.1344571,292.942446 L0,329.843224 L47.6974241,415.417266 L63.0118949,442.595127 L131.395183,404.919424 C148.832216,418.916547 169.756655,432.913669 190.681095,439.91223 L190.681095,499.4 C199.980846,499.4 210.443066,499.4 222.067754,499.4 L284.841073,499.4 C296.465762,499.4 306.927982,499.4 316.227733,499.4 L316.227733,439.91223 C337.152172,432.913669 358.076612,418.916547 375.513645,404.919424 L413.875117,425.915108 L442.053233,442.595127 L490.598063,359.428777 L506.434316,329.843224 Z M256.94182,338.433094 C211.605534,338.433094 176.731468,303.440288 176.731468,257.94964 C176.731468,212.458993 211.605534,177.466187 256.94182,177.466187 C302.278106,177.466187 337.152172,212.458993 337.152172,257.94964 C337.152172,303.440288 302.278106,338.433094 256.94182,338.433094 Z" id="Shape"></path>\n        </g>\n    </g>'
    },
    jilu: {
        content: '<g id="Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g fill-rule="nonzero">\n            <g transform="translate(0.000000, 26.000000)">\n                <path d="M414.006455,81.7447433 L274.922719,281.076733 L276.204597,339.722641 L332.927687,323.699169 L472.331892,124.367178 L414.006455,81.7447433 Z M430.670866,58.0300049 L453.744665,24.7011834 L511.429164,67.644088 L488.675834,100.97291 L430.670866,58.0300049 L430.670866,58.0300049 Z M348.630689,336.517946 L259.219716,361.835032 L256.655961,271.78312 L423.300068,35.5971443 C423.484454,35.196112 423.484454,23.3387428 423.300068,0.0250366748 L0.600880196,0.0250366748 C0.600880196,14.7666308 0.600880196,31.1105721 0.600880196,49.0568606 L0.378690855,456.053046 C15.2684112,456.053046 31.6864156,456.053046 49.6327042,456.053046 L375.870592,456.053046 C394.030526,456.053046 410.374468,456.053046 424.902416,456.053046 L424.902416,228.199276 L348.630689,336.517946 Z M75.911198,86.2313154 L273.640841,86.2313154 L273.640841,132.378914 L75.911198,132.378914 L75.911198,86.2313154 Z M179.743296,363.757848 L75.911198,363.757848 L75.911198,317.610249 L179.743296,317.610249 L179.743296,363.757848 Z M221.083853,248.388851 L75.911198,248.388851 L75.911198,202.241252 L221.083853,202.241252 L221.083853,248.388851 Z" id="Combined-Shape"></path>\n            </g>\n        </g>\n    </g>'
    },
    morentouxiang: {
        content: '<defs>\n        <circle id="path-1" cx="256" cy="256" r="256"></circle>\n    </defs>\n    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="\u9ED8\u8BA4\u5934\u50CF">\n            <g id="Bitmap">\n                <mask id="mask-2" fill="white">\n                    <use xlink:href="#path-1"></use>\n                </mask>\n                <use id="Mask" fill="#FFFFFF" xlink:href="#path-1"></use>\n                <g id="\u4E2A\u4EBA" mask="url(#mask-2)" fill-rule="nonzero" fill="#CECECE">\n                    <g transform="translate(-5.752809, -5.752809)" id="Shape">\n                        <path d="M258.954194,0.31258153 C116.110371,0.31258153 0.31258153,116.111407 0.31258153,258.955231 C0.31258153,401.798018 116.110371,517.595288 258.954194,517.595288 C401.798018,517.595288 517.595807,401.797499 517.595807,258.955231 C517.595807,116.111407 401.798018,0.31258153 258.954194,0.31258153 Z M258.954194,142.566791 C301.807289,142.566791 336.546833,177.306335 336.546833,220.15943 C336.546833,263.012525 301.807289,297.75207 258.954194,297.75207 C216.101099,297.75207 181.361555,263.012525 181.361555,220.15943 C181.361555,177.306335 216.101099,142.566791 258.954194,142.566791 Z M86.8261859,415.663551 C123.011504,355.482947 183.616817,323.614727 258.953676,323.614727 C336.378298,323.614727 389.767705,357.113851 431.080646,415.665625 C294.874523,549.2343 137.755495,480.008793 86.8261859,415.663551 Z"></path>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>'
    },
    saoyisao: {
        content: ' <g id="Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g id="\u626B\u4E00\u626B-" fill-rule="nonzero">\n            <g id="\u626B\u4E00\u626B-(1)">\n                <path d="M51.8895678,52.1297998 L166.4,52.1297998 L166.4,0 L18.4888887,0 C8.2777591,0 0,8.27775912 0,18.4888888 L0,166.4 L51.8895678,166.4 L51.8895678,52.1297998 Z" id="Shape"></path>\n                <path d="M493.511111,0 L345.6,0 L345.6,51.8823834 L461.227583,51.8823834 L461.227583,166.4 L512,166.4 L512,18.4888887 C512,8.2777591 503.722241,0 493.511111,0 Z" id="Shape"></path>\n                <path d="M51.2,345.6 L0,345.6 L0,493.511111 C0,503.722241 8.27775912,512 18.4888888,512 L166.4,512 L166.4,460.524583 L51.2,460.524583 L51.2,345.6 Z" id="Shape"></path>\n                <path d="M460.8,460.872485 L345.6,460.872485 L345.6,512 L493.511111,512 C503.72224,512 511.999999,503.722241 511.999999,493.511111 L512,345.6 L460.8,345.6 L460.8,460.872485 Z" id="Shape"></path>\n                <polygon id="Shape" points="2.84391918e-14 230.4 512 230.4 512 281.6 0 281.6"></polygon>\n            </g>\n        </g>\n    </g>'
    },
    shouye: {
        content: '<g id="Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g id="\u9996\u9875icon" fill-rule="nonzero">\n            <g id="\u9996\u9875">\n                <path d="M345.6,460.8 L166.4,460.8 L166.4,461.2596 L345.6,461.2596 L345.6,460.8 Z M2,0 L510,0 C511.104569,-2.02906125e-16 512,0.8954305 512,2 L512,510 C512,511.104569 511.104569,512 510,512 L2,512 C0.8954305,512 1.3527075e-16,511.104569 0,510 L0,2 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 L2,0 Z M345.6,460.8 L460.8,460.8 L460.8,51.2 L51.2,51.2 L51.2,460.8 L166.4,460.8 L166.4,358.4 L166.4,358.4 C166.4,308.915286 206.515286,268.8 256,268.8 L256,268.8 L256,268.8 C305.484714,268.8 345.6,308.915286 345.6,358.4 L345.6,460.8 Z M256,320 C234.792266,320 217.6,337.192266 217.6,358.4 L217.6,460.8 L294.4,460.8 L294.4,358.4 C294.4,337.192266 277.207734,320 256,320 Z M166.4,166.4 L345.6,166.4 L345.6,217.6 L166.4,217.6 L166.4,166.4 Z" id="Shape"></path>\n            </g>\n        </g>\n    </g>'
    },
    wode: {
        content: '<g id="Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g id="\u6211\u7684" fill-rule="nonzero"  >\n            <path d="M256,-5.68434189e-14 C171.333333,1.61917617e-13 86.6666667,3.80678654e-13 2,5.9943969e-13 L2,5.63993297e-13 C0.8954305,5.67139367e-13 2.25063539e-15,0.8954305 5.32907052e-15,2 C1.74938767e-12,86.6666667 3.45840486e-12,171.333333 5.16742205e-12,256 C3.45840486e-12,340.666667 1.74938767e-12,425.333333 4.03704847e-14,510 L-5.77315973e-15,510 C-3.70316423e-14,511.104569 0.8954305,512 2,512 C86.6666667,512 171.333333,512 256,512 C340.666667,512 425.333333,512 510,512 L510,512 C511.104569,512 512,511.104569 512,510 C512,425.333333 512,340.666667 512,256 C512,171.333333 512,86.6666667 512,2 L512,2 C512,0.8954305 511.104569,6.13705548e-13 510,6.35491659e-13 C425.333333,3.80678654e-13 340.666667,1.61917617e-13 256,-5.68434189e-14 Z M117.697738,465.092097 C154.265202,420.225599 210.90379,410.305305 229.884362,408.842448 C239.411219,408.111019 243.439473,400.674906 243.439473,391.129763 L243.439473,332.132102 C243.441591,326.759088 241.417789,324.469071 237.321321,320.992257 C206.985321,295.227686 206.574374,261.581131 206.574374,216.835988 C206.574374,165.398274 238.979896,153.064586 262.693011,153.674374 C286.406127,154.284162 317.067986,168.605514 317.067986,220.774656 C317.067986,271.590656 307.706356,298.171686 279.052641,320.992257 C274.694478,324.458159 270.339319,326.563794 270.342115,332.132102 C270.342115,373.109706 270.342115,393.598507 270.342115,393.598507 C270.342115,393.598507 272.739242,407.815492 281.207423,408.842448 C302.455423,411.384162 380.329052,439.509523 395.628997,465.092097 C395.869509,465.092097 301.507967,465.092097 256.287395,465.092097 C208.799395,465.092097 124.665464,465.092097 117.697738,465.092097 Z M382.959503,381.015273 C372.115161,375.438354 349.205322,365.965764 320.85914,359.7694 L320.85914,350.121777 C357.234413,315.858504 370.617362,253.00841 370.617362,204.519682 C370.617362,135.31241 328.239935,102.79036 265.24648,102.79036 C200.594844,102.79036 155.373917,136.324773 155.373917,204.519682 C155.373917,227.943682 155.653088,307.864323 197.683633,350.121777 L197.683633,359.7694 C173.299633,364.080673 150.70175,370.187516 127.988364,381.015273 C104.730822,392.102435 79.0903037,418.89752 51.0668088,461.400527 L51.0668088,50.7309488 L460.997113,50.7309488 L460.997113,461.400527 C433.873754,420.61656 407.861217,393.821475 382.959503,381.015273 Z" id="Shape"></path>\n        </g>\n    </g>'
    },
    xiaoxi: {
        content: '<g id="Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g id="\u6D88\u606Ficon">\n            <g id="\u6D88\u606F" transform="translate(26.000000, 6.000000)">\n                <path d="M279.209564,428.746249 C366.917182,406.923438 428.905392,326.855949 428.905392,233.317168 C428.905392,122.18122 339.976343,32.0787743 230.263158,32.0787743 C121.181747,32.0787743 34.8169589,121.527041 34.8169589,233.317168 C34.8169589,339.109811 115.680355,426.644793 219.292583,434.040301 L223.499456,438.63471 L223.499456,453.991503 L279.209564,428.746249 L279.209564,428.746249 Z M0,233.317168 C0,104.451449 103.095659,0 230.263158,0 C357.430657,0 460.526316,104.453975 460.526316,233.317168 C460.526316,336.979309 393.229963,427.335596 297.249817,456.582962 C224.824944,488.226038 197.583083,500 195.459826,500 C191.329756,500 190.824336,498.277412 190.621177,494.58471 C190.571627,493.691844 190.600118,492.552713 190.693026,491.119328 C190.849112,488.69836 191.194729,485.374423 191.703865,481.261177 C192.340595,476.128775 193.190393,470.076986 194.134338,463.787773 C83.127874,446.071894 0,348.700229 0,233.317168 Z" id="Shape" fill-rule="nonzero"></path>\n                <rect id="Rectangle-33" x="118.421053" y="157.894737" width="223.684211" height="39.4736842" rx="19.7368421"></rect>\n                <rect id="Rectangle-33-Copy" x="118.421053" y="263.157895" width="184.210526" height="39.4736842" rx="19.7368421"></rect>\n            </g>\n        </g>\n    </g>'
    },
    xiangji: {
        content: '<g id="Symbols" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g id="phot" fill-rule="nonzero">\n            <path d="M448,95.999325 L400.001181,95.999325 L384,64.0003371 C374.572299,45.3824494 369.673566,32 351.999663,32 L159.998988,32 C142.326434,32 136.483716,47.2690698 127.999325,64.0003371 L111.998819,95.999325 L64.0006748,95.999325 C28.6542188,95.999325 0,124.653544 0,159.997976 L0,415.997301 C0,451.345106 28.6542188,479.99865 64.0006748,479.99865 L448,479.99865 C483.346456,479.99865 512,451.345106 512,415.997301 L512,159.997976 C512,124.654218 483.345781,95.999325 448,95.999325 Z M447.999325,448.001012 L64.0000002,448.001012 C46.3267722,448.001012 31.998988,433.673902 31.998988,415.997975 L31.998988,159.997976 C31.998988,142.326097 46.3260977,127.998988 64.0000002,127.998988 L127.998651,127.998988 L143.999157,95.999325 C155.312128,77.3841369 158.326267,64.0003371 175.998819,64.0003371 L335.999157,64.0003371 C353.672385,64.0003371 356.686523,77.3848115 368.000169,95.999325 L384.000001,127.998988 L448.000001,127.998988 C465.673229,127.998988 480.000338,142.326097 480.000338,159.997976 L480.000337,415.997976 C479.999662,433.673903 465.673228,448.001012 447.999325,448.001012 Z M255.999325,159.997976 C185.307088,159.997976 127.99865,217.308437 127.99865,287.997975 C127.99865,358.690887 185.307088,415.997975 255.999325,415.997975 C326.690887,415.997975 383.999325,358.691562 383.999325,287.997975 C384,217.308437 326.691563,159.997976 255.999325,159.997976 Z M255.999325,383.999662 C202.979641,383.999662 159.998313,341.019009 159.998313,287.997975 C159.998313,234.980316 202.979642,192.000337 255.999325,192.000337 C309.018335,192.000337 351.999662,234.98099 351.999662,287.997975 C351.999662,341.019009 309.018335,383.999662 255.999325,383.999662 Z" id="Shape"></path>\n        </g>\n    </g>'
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Page1 = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.Page = Page;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(2);

var _icon = __webpack_require__(3);

var _touchable = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page1 = exports.Page1 = function (_React$Component) {
    _inherits(Page1, _React$Component);

    function Page1() {
        _classCallCheck(this, Page1);

        return _possibleConstructorReturn(this, (Page1.__proto__ || Object.getPrototypeOf(Page1)).apply(this, arguments));
    }

    _createClass(Page1, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { width: '100%', overflowX: 'hidden', overflowY: 'scroll', WebkitOverflowScrolling: 'touch', willChange: 'scroll-position', position: 'absolute', bottom: '.98rem', top: 0 } },
                this.props.children
            );
        }
    }]);

    return Page1;
}(_react2.default.Component);

function Page(_ref) {
    var title = _ref.title,
        backName = _ref.backName,
        _ref$headBg = _ref.headBg,
        headBg = _ref$headBg === undefined ? '#108ee9' : _ref$headBg,
        _ref$headColor = _ref.headColor,
        headColor = _ref$headColor === undefined ? '#fff' : _ref$headColor,
        _ref$bg = _ref.bg,
        bg = _ref$bg === undefined ? '' : _ref$bg,
        style = _ref.style,
        children = _ref.children;

    var styles = _extends({ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, overflow: 'hidden' }, style);
    if (bg) {
        styles.background = bg;
    }
    /**
     * 内容距离顶部距离
     */
    var top = 0;
    var head = null;

    if (title) {
        top = '.9rem';
        head = _react2.default.createElement(
            _layout.Flex,
            { HW: true, style: { height: '.9rem', background: headBg, position: 'relative' } },
            _react2.default.createElement(_layout.Text, { label: title, fontSize: '.36rem', color: headColor, style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '80%', textAlign: 'center' } }),
            _react2.default.createElement(
                _touchable.TouchableFlex,
                { vertical: true, style: { height: '100%', position: 'absolute', left: 0, padding: '0 .3rem' } },
                _react2.default.createElement(_icon.Icon, { name: 'arrowBack', color: headColor, width: '.44rem', height: '.44rem' }),
                ' ',
                _react2.default.createElement(_layout.Text, { fontSize: '.32rem', color: headColor, label: backName })
            ),
            _react2.default.createElement(_layout.Flex, { vertical: true, style: { height: '100%', position: 'absolute', right: '.3rem' } })
        );
    }
    /**#endregion "This is the code to be collapsed" */
    return _react2.default.createElement(
        'div',
        { style: styles },
        head,
        _react2.default.createElement(
            'div',
            { style: { width: '100%', overflowX: 'hidden', overflowY: 'scroll', WebkitOverflowScrolling: 'touch', willChange: 'scroll-position', position: 'absolute', bottom: 0, top: top } },
            children
        )
    );
}

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _components = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Static2 = function (_React$Component) {
    _inherits(Static2, _React$Component);

    function Static2(props) {
        _classCallCheck(this, Static2);

        var _this = _possibleConstructorReturn(this, (Static2.__proto__ || Object.getPrototypeOf(Static2)).call(this, props));

        _this.state = {
            show: true
        };
        return _this;
    }

    _createClass(Static2, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _components.Page,
                { title: '\u5B9E\u4F8B\u9875\u9762003' },
                this.state.show ? _react2.default.createElement(
                    'div',
                    null,
                    '\u5B9E\u4F8B\u9875\u9762003'
                ) : null,
                _react2.default.createElement(
                    _components.TouchableFlex,
                    { onTap: function onTap() {
                            _this2.setState({ show: !_this2.state.show });
                        } },
                    '\u53BB\u5B9E\u4F8B\u9875\u976222'
                )
            );
        }
    }]);

    return Static2;
}(_react2.default.Component);

exports.default = Static2;

/***/ })
/******/ ]);
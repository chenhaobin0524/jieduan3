"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// state={} 这是公共数据库
function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    searchText: '',
    Gallery: {
      // 预览图片的状态
      showGallery: 'none',
      // 预览图片地址
      imgUrl: ''
    }
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  // action.type是那边设置带过来的，判断执行分支
  switch (action.type) {
    case 'SETSEARCHTEXT':
      return _objectSpread({}, state, {
        // 修改数据
        searchText: action.searchText
      });

    case 'SETGALLERY':
      return _objectSpread({}, state, {
        Gallery: action.Gallery
      });
    // 都没有时，默认返回原数据

    default:
      return state;
  }
} // 创建 Redux store 来存放应用的状态。


var store = (0, _redux.createStore)(counter); // 导出公共库

var _default = store;
exports["default"] = _default;
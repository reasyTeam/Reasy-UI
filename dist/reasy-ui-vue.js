module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (typeof window._ !== "function") {
    window._ = function (key, replacements) {
        var nkey = key,
            index,
            count = 0;
        if (!replacements) {
            return nkey;
        }
        if (replacements instanceof Array && replacements.length !== 0) {
            while ((index = nkey.indexOf('%s')) !== -1) {
                nkey = nkey.slice(0, index) + replacements[count] + nkey.slice(index + 2);
                count = count + 1 === replacements.length ? count : count + 1;
            }
        } else if (typeof replacements === "string") {
            index = nkey.indexOf('%s');
            nkey = nkey.slice(0, index) + replacements + nkey.slice(index + 2);
        }
        return nkey;
    };
}

function copyDeepData(item) {
    var newItem = void 0;
    if (Array.isArray(item)) {
        newItem = [];
        item.map(function (arr) {
            newItem.push(copyDeepData(arr));
        });
    } else if (typeof item === "function") {
        newItem = item;
    } else if (item instanceof Object) {
        newItem = {};
        for (var prop in item) {
            newItem[prop] = copyDeepData(item[prop]);
        }
    } else {
        newItem = item;
    }

    return newItem;
}

/**
 * 数组排序
 *
 * @param {object} item1       数组元素对象
 * @param {object} item2       数组元素对象
 * @param {string|array} fields      排序属性
 * @param {object} sortTypeObj  排序属性的排序方式对象
 *
 * @return {numbber} 排序结果
 */
function sortByKey(item1, item2, fields, sortTypeObj) {
    var cps = [],
        i = 0,
        j = 0,
        prop,
        value1,
        value2,
        asc; //是否升序

    // asc: 升序
    // desc: 降序 默认
    if (typeof fields === "string") {
        fields = [fields];
    }

    if (fields && fields.length > 0) {
        for (i = 0; i < fields.length; i++) {
            asc = sortTypeObj[fields[i]] == "asc"; //升序
            prop = fields[i];
            if (typeof item1[prop] == "number" || typeof item2[prop] == "number") {
                value1 = item1[prop];
                value2 = item2[prop];
            } else {
                value1 = item1[prop].toString().toUpperCase();
                value2 = item2[prop].toString().toUpperCase();
            }
            if (value1 > value2) {
                cps.push(asc ? 1 : -1);
                break; // 大于时跳出循环。
            } else if (value1 === value2) {
                cps.push(0);
            } else {
                cps.push(asc ? -1 : 1);
                break; // 小于时跳出循环。
            }
        }
    }

    for (j = 0; j < cps.length; j++) {
        if (cps[j] === 1 || cps[j] === -1) {
            return cps[j];
        }
    }
    return 0;
}

var setOptions = function setOptions(data, defaluts, noFreeze) {

    var defOpts = copyDeepData(defaluts);
    for (var prop in defOpts) {
        if (typeof data[prop] == "undefined") {
            if (typeof this.$set == "function") {
                this.$set(data, prop, defOpts[prop]);
            } else {
                data[prop] = defOpts[prop];
            }
        } else {
            var val = data[prop];
            var $get = Object.getOwnPropertyDescriptor(data, prop).get;
            if (typeof $get !== "function") {
                delete data[prop];
                this.$set(data, prop, val);
            }
        }
    }
    //不允许data增加新属性
    if (!noFreeze) {
        Object.preventExtensions(data);
    }
    return data;
};

function isDefined(val) {
    return val !== undefined && val !== null;
}

function checkSubmit(dataObj) {
    var errorMsg = "",
        checkFail = false,
        _this = this;
    for (var prop in dataObj) {
        if (_typeof(dataObj[prop]) != "object" || !isDefined(dataObj[prop].val)) {
            continue;
        }
        errorMsg = checkData.call(_this, dataObj[prop]);
        if (!errorMsg) {
            checkFail = true;
        }
    }

    if (checkFail) {
        return false;
    }
    return true;
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * 检查元素的数据合法性
 * @param {object} dataKey 元素对象
 * @param {string} [value] 元素的值
 */
function checkData(dataKey, value) {
    var val = isDefined(value) ? value : dataKey.val || "",
        errMsg = "",
        handleValid,
        _this = this;

    if (dataKey.show === false || dataKey.ignore === true || dataKey.disabled === true) {
        //忽略验证时
        return true;
    }

    if (dataKey.required) {
        if (val === "" || val.length === 0) {
            dataKey.error = _("Required");
            return false;
        }
    } else {
        //非必填时 为空则不验证
        if (val === "") {
            dataKey.error = '';
            return true;
        }
    }
    if (Array.isArray(dataKey.sortArray)) {
        var sortArr = dataKey.sortArray.filter(function (item) {
            return item.value == val;
        });
        if (sortArr.length > 0) {
            dataKey.error = '';
            return true;
        }
    }

    if (!Array.isArray(dataKey.valid)) {
        if (dataKey.valid) {
            dataKey.valid = [dataKey.valid];
        } else {
            //不存在数据验证时，直接返回
            isDefined(dataKey.error) && (dataKey.error = '');
            return true;
        }
    }

    dataKey.valid && dataKey.valid.forEach(function (item) {
        handleValid = (_this.$valid || {})[item.type];
        if (handleValid && !errMsg) {
            // edit by xc item.args可能为undefined
            item.args = item.args || [];
            if (typeof handleValid == "function") {
                errMsg = handleValid.apply(undefined, [val].concat(item.args));
            } else if (typeof handleValid.all === "function") {
                var _handleValid;

                errMsg = (_handleValid = handleValid).all.apply(_handleValid, [val].concat(item.args));
            }
        }
    });

    //数据验证
    if (errMsg) {
        dataKey.error = errMsg;
        return false;
    }

    dataKey.error = '';
    return true;
}

/**
 * 错误提示信息
 *
 * @class FormMessage
 */

var FormMessage = function () {
    /**
     *Creates an instance of FormMessage.
     * @param {*} msg
     * @param {*} showTime
     * @memberof FormMessage
     */
    function FormMessage() {
        _classCallCheck(this, FormMessage);

        this.msg = "";
        this.time = 2000;
        this.elemPool = [];
    }

    FormMessage.prototype.createElem = function createElem() {
        var elem = document.createElement("div");
        elem.className = "form-message";
        return elem;
    };

    FormMessage.prototype.getMsgContent = function getMsgContent() {
        if (this.elemPool.length > 0) {
            return this.elemPool[0].cloneNode(true);
        }

        return this.createElem();
    };

    FormMessage.prototype.getContainer = function getContainer() {
        var elem = document.getElementsByClassName("message-container")[0];

        if (!elem) {
            elem = document.createElement("div");
            elem.className = "message-container";
            document.body.appendChild(elem);
        }

        return elem;
    };

    FormMessage.prototype.setMsg = function setMsg(msg, showTime) {
        var elem = this.getMsgContent(),
            containerElem = this.getContainer(),
            _this = this;
        if ((typeof msg === "undefined" ? "undefined" : _typeof(msg)) == "object" && msg.nodeType === 1) {
            msg = msg.outerHTML;
        }
        this.msg = msg;
        this.time = showTime || 2000 + msg.length * 50;

        elem.innerHTML = this.msg;
        containerElem.appendChild(elem);
        setTimeout(function () {
            addClass(elem, "in");
        }, 10);
        setTimeout(function () {
            addClass(elem, "out");
            removeClass(elem, "in");
            setTimeout(function () {
                removeClass(elem, "out");
                _this.elemPool.push(elem);
                containerElem.removeChild(elem);
            }, 300);
        }, this.time);
    };

    return FormMessage;
}();

var formMessage = new FormMessage();

/* add by xc */
var trim = function trim(string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/* istanbul ignore next */
function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

/* istanbul ignore next */
function addClass(el, cls) {
    if (!el) return;
    var curClass = el.className;
    var classes = (cls || '').split(' ');

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName;
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/* istanbul ignore next */
function removeClass(el, cls) {
    if (!el || !cls) return;
    var classes = cls.split(' ');
    var curClass = ' ' + el.className + ' ';

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}

/**
 * 防抖和节流
 * 防抖的情况下只会调用一次， 而节流的情况会每隔一定时间调用一次函数
 */
function debounce(func, wait) {
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var timeout = void 0,
        context = void 0,
        args = void 0;
    // 延迟执行函数
    var later = function later() {
        return setTimeout(function () {
            // 延迟函数执行完毕，清空定时器
            timeout = null;
            // 延迟执行的情况下，函数会在延迟函数中执行
            // 使用到之前缓存的参数和上下文
            if (!immediate) {
                func.apply(context, args);
                context = args = null;
            }
        }, wait);
    };
    var debounced = function debounced() {
        if (!timeout) {
            timeout = later();

            for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
                params[_key] = arguments[_key];
            }

            if (immediate) {
                //立即执行
                func.apply(this, params);
            } else {
                //闭包
                context = this;
                args = params;
            }
        } else {
            clearTimeout(timeout);
            timeout = later();
        }
    };
    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };
    return debounced;
}

function isNotNullOrEmpty(val) {
    if (!!val) {
        return true;
    }

    return val !== '' && val !== undefined && val !== null;
}

exports.setOptions = setOptions;
exports.sortByKey = sortByKey;
exports.copyDeepData = copyDeepData;
exports.formMessage = formMessage;
exports.checkData = checkData;
exports.checkSubmit = checkSubmit;
exports.isDefined = isDefined;
exports.isObject = isObject;
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.debounce = debounce;
exports.isNotNullOrEmpty = isNotNullOrEmpty;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  _add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/add-event.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _libs = __webpack_require__(1);

var specialNames = ["v-input", "v-select"]; //
//
//
//
//
//
//
//
//

exports.default = {
  name: "v-group",
  props: ["css", "show", "title", "dataKey", "vname"],
  data: function data() {
    return {
      hasTitle: true
    };
  },

  computed: {
    isFocus: function isFocus() {
      return this.special && (this.dataKey.placeholder || this.$refs.formItem && this.$refs.formItem.focused || (0, _libs.isNotNullOrEmpty)(this.dataKey.val));
    },
    special: function special() {
      return this.vname && specialNames.indexOf(this.vname) > -1;
    }
  },
  methods: {
    focus: function focus() {
      this.special && this.$refs.formItem.focus && this.$refs.formItem.focus();
    }
  },
  mounted: function mounted() {
    if ((0, _libs.isDefined)(this.title)) {
      this.hasTitle = true;
    } else {
      this.hasTitle = false;
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaults = {
    css: "", //样式
    title: "",
    hasOK: true,
    hasCancel: true,
    outside: true, //点击外面是否隐藏
    autoHide: true, //保存是否自动隐藏
    okText: _("Confirm"),
    cancelText: _("Cancel"),
    show: true, //是否显示
    okCallBack: function okCallBack() {},
    cancelCallBack: function cancelCallBack() {}
};

exports.default = {
    name: "v-dialog",
    props: ["dialog"],
    data: function data() {
        return {};
    },
    created: function created() {
        //TODO: 数据转换
        this.dialog = this.setOptions(this.dialog, defaults);
    },
    mounted: function mounted() {},

    methods: {
        handlerOutSide: function handlerOutSide() {
            if (this.dialog.outside === false) {
                return;
            }
            this.handlerCancel();
        },
        handlerCancel: function handlerCancel() {
            this.dialog.show = false;
        },
        handlerOK: function handlerOK() {
            if (this.dialog.okCallBack() === false || this.dialog.autoHide === false) {
                return;
            }
            this.handlerCancel();
        }
    }
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//

var defaults = {
    required: false,
    css: "", //样式
    title: _("Note"),
    hasCancel: false,
    show: false, //是否显示
    ignore: true, //是否忽略
    okCallBack: function okCallBack() {}
};

exports.default = {
    name: "v-alert",
    props: ["alert"],
    data: function data() {
        return {};
    },
    created: function created() {
        this.alert = this.setOptions(this.alert, defaults, true);
    }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//

exports.default = {
	"name": "v-header"
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//

/**
 * 翻译组件
 * 包裹翻译的区域
 * 如遇v-if 则需要给此节点单独v-if
 */
exports.default = {
  "name": "v-elem",
  crated: function crated() {},

  props: ["show"],
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.translate();
  },

  methods: {
    translate: function translate() {
      window.B && B.translate(this.$refs.elem);
      this.$refs.elem.setAttribute("data-translated", true);
    }
  }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tableCheckbox = __webpack_require__(96);

var _tableCheckbox2 = _interopRequireDefault(_tableCheckbox);

var _libs = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var PAGE_PREV_NUM = 2; //当前页前后显示页数
var MAX_PAGE_SHOW = 2 * PAGE_PREV_NUM + 1 + 2 + 2; // 前后页 + 本身页 + 2个省略 + 首尾两页

var defaults = {
    secondColumns: [],
    columns: [
        /*
        {
            title: "无线名称",
            field: "ssid",
            width: "40%",
            search: //是否支持搜索
            sort: true/false, //是否支持排序
            format:function() {return str},
            parseHtml: true/false, // 是否是html
            componentName: string //自定义组件
        }
        */
    ], //表头配置
    show: true,
    showPage: false, //分页
    maxTableRow: 10, //每页显示多少行，超过行则出现滚动条
    pagePer: 10, //每页多少数据
    totalPage: 1, //共几页
    page: 0, //当前页  从0开始
    key: "", //关键标志
    search: false,
    placeholder: "",
    originData: [],
    selectBox: false
};

//判断是否存在
var fileterField = function fileterField(searchV, content) {
    try {
        if (content.indexOf(searchV) != -1) {
            return true;
        }
    } catch (e) {}

    return false;
};

/**
 * 表格过滤
 *
 * @param {Array} tableData 当前表格数据
 * @param {string} filterStr 查找字符串
 * @param {[string]} field   查找类型
 *
 * @return {[type]} [description]
 */
var filterTable = function filterTable(tableData, filterStr, field) {
    var newTable = [];
    tableData.forEach(function (item) {
        for (var prop in item) {
            if (field.length > 0) {
                if (field.indexOf(prop) != -1) {
                    if (fileterField(filterStr, item[prop])) {
                        newTable.push(item);
                        break;
                    }
                }
            } else {
                if (fileterField(filterStr, item[prop])) {
                    newTable.push(item);
                    break;
                }
            }
        }
    });

    return newTable;
};

exports.default = {
    name: "v-table",
    props: ["tableOptions", "callback"],
    components: {
        "table-checkbox": _tableCheckbox2.default
    },
    computed: {
        pageTips: function pageTips() {
            return _("Page %s/%s", [this.tableOptions.page + 1, this.tableOptions.totalPage]);
        },
        dataTips: function dataTips() {
            return _("A Total of %s Pieces of Data", [this.tableData.length || 0]);
        },
        guidKey: function guidKey() {
            return this.tableOptions.key || "_GUID";
        },
        supportPlaceholder: function supportPlaceholder() {
            var i = document.createElement("input");
            return "placeholder" in i;
        }
    },
    created: function created() {
        //数据合并
        this.tableOptions = this.setOptions(this.tableOptions, defaults);

        var _this = this,
            placeholderArr = [];
        this.tableOptions.columns.forEach(function (item) {
            if (typeof item.format == "function") {
                _this.formatOpt[item.field] = item.format;
            }
            if (item.search) {
                _this.searchItem.push(item.field);
                placeholderArr.push(item.title);
            }
        });
        if (this.tableOptions.placeholder) {
            //优先以用户定义为准
            this.searchText = this.tableOptions.placeholder;
        } else {
            this.searchText = placeholderArr.join("/");
        }
    },
    mounted: function mounted() {
        this.tableCallback = this.callback || function () {};
    },
    data: function data() {
        return {
            tableScroll: false,
            pageData: [], //当前页数据
            tableData: [], //当前表格数据 过滤后
            isLoadData: false,
            originData: [], //转换后的原始数据，format后的数据
            formatOpt: {},
            footer: [], //
            sortKey: null, // 排序元素
            sortType: "",
            searchValue: "", //搜索文字
            bodyHeight: "",
            noData: _("No data"),
            searchItem: [],
            searchText: "",
            checkbox: {
                sortArray: [{
                    title: ""
                }],
                values: ["1", "0"],
                events: {
                    click: this.changeSelectAll
                }
            }
        };
    },


    methods: {
        //自定义事件
        customCompFunc: function customCompFunc(params) {
            //触发父组件的自定义事件
            this.$emit("on-custom-comp", params);
        },
        goSearch: function goSearch() {
            if (this.searchValue == "") {
                this.tableData = this.originData;
            } else {
                this.tableData = filterTable(this.originData, this.searchValue, this.searchItem);
            }
            this.sortType = "";
            this.updateTable();
        },
        updateTable: function updateTable() {
            //更新总页数
            if (this.tableOptions.showPage) {
                this.tableOptions.page = 0;
                this.tableOptions.totalPage = Math.ceil(this.tableData.length / this.tableOptions.pagePer);
                this.tableOptions.totalPage <= 1 ? this.tableOptions.totalPage = 1 : "";

                //更新当前页
                if (this.tableOptions.totalPage - 1 < this.tableOptions.page) {
                    this.tableOptions.page = this.tableOptions.totalPage - 1;
                }
                this.updateFooter();
            }
            this.updateScroll();
            //当前页显示的数据
            this.pageData = this.getPageData();
            //this.tableOptions.pageData = this.pageData;

            this.$nextTick(function () {
                this.tableCallback(this.pageData); //执行表格更新的回调
            });
        },


        //更新表格的滚动条
        updateScroll: function updateScroll() {
            //计算滚动条显示
            this.$nextTick(function () {
                if ((this.$refs["table-body-tr"] || []).length === 0) {
                    this.bodyHeight = '';
                    return;
                }
                var trHeight = this.$refs["table-body-tr"][0].offsetHeight;
                if (this.tableOptions.maxTableRow < this.pageData.length) {
                    this.bodyHeight = trHeight * this.tableOptions.maxTableRow;
                    this.tableScroll = true;
                } else {
                    this.tableScroll = false;
                    this.bodyHeight = '';
                }
            });
        },


        /**
         * 更新表格的页数，处理省略的页数
         *
         */
        updateFooter: function updateFooter() {
            //更新表格的页操作
            this.footer = [];
            var footerArr = [];
            this.updateScroll();
            //不需要处理页数时
            if (this.tableOptions.totalPage < MAX_PAGE_SHOW) {
                for (var i = 0; i < this.tableOptions.totalPage; i++) {
                    this.footer.push({
                        text: i + 1,
                        value: i
                    });
                }
                return;
            }

            //获取当前页的前后2页
            for (var _i = 0; _i < this.tableOptions.totalPage; _i++) {
                if (Math.abs(this.tableOptions.page - _i) <= PAGE_PREV_NUM) {
                    footerArr.push({
                        text: _i + 1,
                        value: _i
                    });
                }
            }

            //当页数不满5页时，表明已有一方到首尾
            if (footerArr.length < PAGE_PREV_NUM * 2 + 1) {
                //当第1项是第一页
                if (footerArr[0].value === 0) {
                    //向后扩展
                    while (footerArr.length < PAGE_PREV_NUM * 2 + 1) {
                        footerArr.push({
                            text: footerArr[footerArr.length - 1].text + 1,
                            value: footerArr[footerArr.length - 1].value + 1
                        });
                    }
                } else if (footerArr[footerArr.length - 1].value === this.tableOptions.totalPage - 1) {
                    //向前扩展
                    while (footerArr.length < PAGE_PREV_NUM * 2 + 1) {
                        footerArr.unshift({
                            text: footerArr[0].text - 1,
                            value: footerArr[0].value - 1
                        });
                    }
                }
            }

            //如果页数小于3，则前面页数不能出现...，需要自动补全
            if (footerArr[0].value < 3) {
                while (footerArr[0].value != 0) {
                    footerArr.unshift({
                        text: footerArr[0].text - 1,
                        value: footerArr[0].value - 1
                    });
                }
            } else {
                //页数以1开头
                footerArr.unshift({
                    text: "...",
                    value: "prevBtn"
                });
                footerArr.unshift({
                    text: 1,
                    value: 0
                });
            }

            //如果是后3页，自动补全 不能出现...
            if (this.tableOptions.totalPage - 1 - footerArr[footerArr.length - 1].value < 3) {
                while (footerArr[footerArr.length - 1].value != this.tableOptions.totalPage - 1) {
                    footerArr.push({
                        text: footerArr[footerArr.length - 1].text + 1,
                        value: footerArr[footerArr.length - 1].value + 1
                    });
                }
            } else {
                //页数以最后页结束
                footerArr.push({
                    text: "...",
                    value: "nextBtn"
                });
                footerArr.push({
                    text: this.tableOptions.totalPage,
                    value: this.tableOptions.totalPage - 1
                });
            }
            this.footer = footerArr;
        },


        //当前个数
        getCustonIndex: function getCustonIndex(index) {
            return this.tableOptions.page * this.tableOptions.pagePer + index;
        },


        //跳转到下一页
        gotoPage: function gotoPage(nextPage) {
            var _this2 = this;

            //切换页
            if (nextPage == "prev") {
                nextPage = this.tableOptions.page - 1;
            } else if (nextPage == "next") {
                nextPage = this.tableOptions.page + 1;
            } else if (nextPage === "prevBtn" || nextPage === "nextBtn") {
                return;
            }

            //当下一页超出范围 或者下一页 == 当前页时
            if (nextPage < 0 || nextPage > this.tableOptions.totalPage - 1 || nextPage == this.tableOptions.page) {
                return;
            }
            //当前页
            this.tableOptions.page = nextPage;
            //当前页数据
            this.pageData = this.getPageData();

            //切换页面时，清除选中
            if (this.tableOptions.selectBox) {
                this.pageData.forEach(function (item) {
                    return _this2.$set(item, "selected", "0");
                });
                this.checkbox.val = "0";
            }
            this.updateFooter();
        },

        //获取当前页的数据
        getPageData: function getPageData() {
            //是否分页
            if (this.tableOptions.showPage) {
                return this.tableData.slice(this.tableOptions.page * this.tableOptions.pagePer, (this.tableOptions.page + 1) * this.tableOptions.pagePer);
            }
            return this.tableData;
        },

        //排序，以field字段排序
        sortTable: function sortTable(fieldOptions, field) {
            var _this$sortData;

            var _this = this;
            if (!fieldOptions.sort) {
                return;
            }
            //排序元素
            this.sortKey = field;

            //排序方式
            this.sortType = this.sortType == "asc" ? "desc" : "asc";

            //按照某列数据排序
            _this.tableData = _this.sortData(_this.tableData, (_this$sortData = {}, _this$sortData[_this.sortKey] = _this.sortType, _this$sortData));
            this.updateTable();
        },


        /**
         * 排序数据
         */
        sortData: function sortData(data, sortConfig) {
            var _this = this;
            data = data || [];
            return _this.sortKey ? data.sort(function (a, b) {
                return (0, _libs.sortByKey)(a, b, _this.sortKey, sortConfig);
            }) : data;
        },
        findOriginData: function findOriginData(value) {
            var _this3 = this;

            //根据key值（key必须是唯一标识） 获取原始数据
            return this.tableOptions.originData.find(function (item) {
                return item[_this3.guidKey] == value;
            });
        },
        findIndex: function findIndex(value) {
            var _this4 = this;

            //根据key值（key必须是唯一标识） 获取原始数据
            return this.tableOptions.originData.findIndex(function (item) {
                return item[_this4.guidKey] == value;
            });
        },


        /**
         * 表格数据自定义转换
         */
        formatTable: function formatTable() {
            //复制表格数据
            var tableArr = (0, _libs.copyDeepData)(this.tableOptions.originData),
                len = tableArr.length,
                newTableArr = [],
                originData = {},
                _this = this;

            for (var i = 0; i < len; i++) {
                for (var prop in _this.formatOpt) {
                    if (typeof _this.formatOpt[prop] == "function") {
                        originData = _this.findOriginData(tableArr[i][_this.guidKey]);
                        tableArr[i][prop] = _this.formatOpt[prop](tableArr[i][prop], tableArr[i], originData);
                    }
                }

                newTableArr.push(tableArr[i]);
            }
            //转换后的原始数据
            this.originData = newTableArr;
        },
        changeSelectAll: function changeSelectAll() {
            var _this5 = this;

            this.pageData.forEach(function (item) {
                //过滤禁用的
                item.hasCheckbox !== false && _this5.$set(item, "selected", _this5.checkbox.val);
            });
            var selectArr = [],
                tableKey = this.guidKey;
            this.pageData.forEach(function (item) {
                item.hasCheckbox !== false && selectArr.push(_this5.tableOptions.originData.filter(function (item1) {
                    return item1[tableKey] == item[tableKey];
                })[0]);
            });
            var params = {
                type: "selectAll",
                rowsData: this.checkbox.val == "1" ? selectArr : []
            };
            this.$emit("on-custom-comp", params);
        },
        focus: function focus() {
            this.$refs.search.focus();
        }
    },
    watch: {
        "tableOptions.originData": {
            handler: function handler(newData, oldData) {
                var _this = this;

                //解决初次定义执行表格更新问题
                if (typeof oldData === "undefined") {
                    return;
                }
                this.checkbox.val = "0";
                this.formatTable();
                this.isLoadData = true;
                this.tableData = (0, _libs.copyDeepData)(this.originData);

                this.updateTable();
            },

            deep: true
        }
    },
    destroyed: function destroyed() {}
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_table_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "table-checkbox",
    props: ["rowData", "field", "index", "tableData", "originData"],
    data: function data() {
        return {
            selected: this.rowData.selected == "1"
        };
    },

    computed: {
        hasCheckbox: function hasCheckbox() {
            return this.rowData.hasCheckbox !== false;
        }
    },
    methods: {
        changeBack: function changeBack() {
            if (!this.hasCheckbox) {
                this.rowData.selected = 0;
                return;
            }
            var selected = this.rowData.selected == "1" ? "0" : "1";
            this.$set(this.rowData, this.field, selected);
            var params = {
                type: "checkbox",
                index: this.index,
                rowData: this.rowData,
                originData: this.originData
            };
            this.$emit("on-custom-comp", params);
        }
    }
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _addEvent = __webpack_require__(2);

var _addEvent2 = _interopRequireDefault(_addEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    required: true, //是否必须输入
    css: "", //样式
    show: true, //是否显示
    ignore: false, //是否忽略
    disabled: false, //是否禁用
    maxlength: "", //最大输入长度
    type: "text", //输入框类型
    placeholder: "", //占位提示文字
    hasEye: "", //是否有小眼睛
    name: "", //名称字段
    val: "", //组件value
    error: "", //错误标志
    isNum: false, //是否输入框内允许只输入数字或浮点型
    valid: [], //数据验证
    changeCallBack: function changeCallBack() {}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "v-input",
    props: ["data-key"],
    mixins: [_addEvent2.default],
    created: function created() {
        this.dataKey = this.setOptions(this.dataKey, defaults);
        this.addEvent();
    },
    data: function data() {
        return {
            //是否支持placehodler
            supportPlaceholder: this.hasPlaceholder(),
            // 记录当前是否是活动状态
            focused: false
        };
    },


    methods: {
        changePlaceHolder: function changePlaceHolder() {
            if (this.dataKey.type == "password") {
                this.dataKey.type = "text";
            } else {
                this.dataKey.type = "password";
            }
        },
        changeValue: function changeValue() {
            var isCheckTrue = this.check(this.dataKey);
            if (!isCheckTrue) {
                return;
            }

            this.dataKey.changeCallBack(this.dataKey.val);
        },
        hasPlaceholder: function hasPlaceholder() {
            var i = document.createElement("input");
            return "placeholder" in i;
        },
        check: function check(dataObj) {
            if (typeof this.$checkData == "function") {
                return this.$checkData(dataObj);
            }

            return true;
        },
        blurEvt: function blurEvt() {
            this.focused = false;
            if (this.dataKey.isNum && this.dataKey.val) {
                //输入框只允许输入数字
                this.dataKey.val = Number(this.dataKey.val).toString();
            }
        },
        focus: function focus() {
            this.$refs.input.focus();
        }
    },
    watch: {
        "dataKey.show": {
            handler: function handler(newValue, oldValue) {
                if (!newValue) {
                    this.dataKey.error = "";
                }
            }
        },
        "dataKey.disabled": {
            handler: function handler(newValue, oldValue) {
                if (!newValue) {
                    this.dataKey.error = "";
                }
            }
        }
    },
    destroyed: function destroyed() {
        this.dataKey.error = "";
    }
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
    data: function data() {
        return {
            evtName: "",
            evtArr: [],
            evtHandlerList: []
        };
    },

    methods: {
        addEvent: function addEvent() {
            var evtnameArr = [],
                evtHandlerList = [];
            for (var prop in this.dataKey.events) {
                evtnameArr.push(prop);
                evtHandlerList.push(this.dataKey.events[prop]);
            }
            this.evtArr = evtnameArr;
            this.evtHandlerList = evtHandlerList;
            this.evtName = this.evtArr.join(";");
        }
    }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _addEvent = __webpack_require__(2);

var _addEvent2 = _interopRequireDefault(_addEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    required: true,
    css: "", //样式
    show: true, //是否显示
    ignore: false, //是否忽略
    disabled: false, //是否禁用
    val: "", //组件id
    error: "",
    name: "",
    sortArray: [
        /*{
        value: xxx,
        disabled: true
        title: ""
        }*/
    ],
    changeCallBack: function changeCallBack() {}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
    name: "v-radio",
    props: ["dataKey"],
    mixins: [_addEvent2.default],
    created: function created() {
        this.dataKey = this.setOptions(this.dataKey, defaults);
        this.addEvent();
    },
    data: function data() {
        return {
            error: "",
            radioValue: ""
        };
    },

    methods: {
        changeRadio: function changeRadio(value, item) {
            if (this.dataKey.disabled || item.disabled) {
                return;
            }
            this.dataKey.error = "";
            if (value === this.radioValue) {
                return;
            }
            this.dataKey.val = this.radioValue = value;
        }
    },
    watch: {
        "dataKey.val": {
            handler: function handler(newValue, oldValue) {
                this.radioValue = newValue;
                if (newValue !== "" && newValue !== undefined) {
                    this.dataKey.changeCallBack && this.dataKey.changeCallBack(newValue);
                }
            },

            //立即执行
            immediate: true
        }
    }
};

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _libs = __webpack_require__(1);

var _addEvent = __webpack_require__(2);

var _addEvent2 = _interopRequireDefault(_addEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaults = {
    required: true,
    css: "", //样式
    show: true, //是否显示
    ignore: false, //是否忽略
    disabled: false, //是否禁用
    hasManual: false, //是否支持自定义
    manualText: _("Customize"),
    manualValue: "-1", //选择自定义时的值
    maxlength: "", //输入框最大输入长度
    error: "", //错误
    name: "",
    defaultVal: "",
    immediate: true,
    isNum: false, //是否输入框内允许只输入数字或浮点型
    sortArray: [
        /* {
            value: xxx,
            title: xxx
        }*/
    ],
    val: "", //组件id
    valid: [], //数据验证 仅自定义时生效
    options: {}, //options 和sortArray 同时存在时优先以sortArray存在
    changeCallBack: function changeCallBack() {},
    beforeChange: function beforeChange() {} //改变之前，返回false时不会执行changeCallBack
};

var MANUAL_VALUE = "-1";

exports.default = {
    name: "v-select",
    props: ["dataKey"],
    mixins: [_addEvent2.default],
    provide: function provide() {
        return {
            manualBack: this.handlerCallBack
        };
    },
    created: function created() {
        var _this = this;

        if (!Array.isArray(this.dataKey.sortArray)) {
            this.$set(this.dataKey, "sortArray", []);
        }

        this.dataKey.sortArray.forEach(function (item, index) {
            if (!(0, _libs.isObject)(item)) {
                _this.dataKey.sortArray[index] = {
                    value: item,
                    title: item
                };
            }
        });

        //sortArray为空时，默认以dataKey.options 对象属性排序
        if (this.dataKey.sortArray.length === 0) {
            for (var prop in this.dataKey.options) {
                this.dataKey.sortArray.push({
                    title: this.dataKey.options[prop],
                    value: prop
                });
            }
        }
        //默认值
        defaults.val = (0, _libs.isDefined)(this.dataKey.defaultVal) ? this.dataKey.defaultVal : "";

        this.dataKey = this.setOptions(this.dataKey, defaults);

        var newVal = this.dataKey.val,
            valArr = this.dataKey.sortArray.filter(function (item) {
            return item.value === newVal;
        });
        if (valArr.length === 1) {
            this.isEdit = false;
        } else {
            this.dataKey.hasManual && (this.isEdit = true);
        }
        this.addEvent();
    },
    data: function data() {
        return {
            error: "",
            inputValue: "",
            isEdit: false,
            isInput: false, //是否正在输入
            dropdownShow: false,
            dropdownTop: 0,
            firstChange: false,
            lastLabel: "",
            selectLabel: "",
            //selectLabel: "",
            dataOption: {}
        };
    },

    computed: {
        pickerVisible: {
            set: function set(val) {
                this.dropdownShow = val;
            },
            get: function get() {
                return this.$isMobile && this.dropdownShow;
            }
        }
    },
    mounted: function mounted() {
        //定义body click事件
        //this.globalEvent("click", this.hide);
    },

    methods: {
        isObject: function isObject(obj) {
            return (0, _libs.isObject)(obj);
        },
        changeSelect: function changeSelect(value, label) {
            this.dropdownShow = false;

            if (value === this.dataKey.val) {
                return;
            }
            this.firstChange = true;

            if (this.dataKey.beforeChange(value) === false) {
                return;
            }

            this.dataKey.error = "";
            this.dataKey.val = value;
            this.handlerChange();
        },
        handlerChange: function handlerChange() {
            if (this.dataKey.events && this.dataKey.events.change) {
                if (typeof this.dataKey.events.change === "function") {
                    this.dataKey.events.change();
                }
            }
        },
        setValue: function setValue(val) {
            this.dataKey.val = val;
        },
        clickArrow: function clickArrow() {
            if (!this.dataKey.disabled) {
                this.dropdownShow = !this.dropdownShow;
            }
        },
        showOption: function showOption() {
            if (!this.dataKey.disabled && !this.isEdit) {
                this.dropdownShow = !this.dropdownShow;
            }
        },

        /**
         * 失去焦点时，修改KEY值
         */
        setKeyValue: function setKeyValue() {
            var val = this.$refs.input.value;
            var valArr = this.dataKey.sortArray.filter(function (item) {
                return item.title === val;
            }),
                newVal = void 0;

            newVal = val;
            if (this.dataKey.isNum) {
                newVal = Number(val).toString();
            }

            if (this.$refs.input.value === "") {
                newVal = this.lastLabel || this.dataKey.defaultVal;
                this.dataKey.error = "";
            }

            this.dataKey.val = newVal;
            this.isInput = false;
        },
        changeValue: function changeValue() {
            //this.checkData(this.dataKey, this.selectLabel);
            if (!this.isEdit) {
                return;
            }
            this.isInput = true;
            this.dropdownShow = false;
            var isCheckTrue = this.check(this.dataKey, this.$refs.input.value);
        },
        handlerCallBack: function handlerCallBack() {
            this.lastLabel = this.dataKey.val;
            this.dataKey.val = this.dataKey.manualValue;

            this.$refs.inputtext.style.display = "none";
            this.$refs.input.style.visibility = "visible";
            this.$nextTick(function () {
                this.isEdit = true;
                this.$refs.input.focus();
                this.$refs.input.scrollIntoView({ block: "center" });
                this.isInput = true;
            });
        },
        hanlderManual: function hanlderManual() {
            this.handlerCallBack();
            this.hide();
            this.dataKey.changeCallBack(this.dataKey.val);
            this.handlerChange();
        },
        hide: function hide() {
            this.$isMobile || (this.dropdownShow = false);
        },
        check: function check(dataObj, value) {
            if (typeof this.$checkData == "function") {
                return this.$checkData(dataObj, value);
            }
            return true;
        },
        focus: function focus() {
            this.showOption();
        },
        setPosition: function setPosition() {
            var dropdownHeight = this.$refs.dropdown.offsetHeight,
                inputRect = this.$refs.input.getBoundingClientRect(),
                bodyHeight = document.body.clientHeight;
            if (inputRect.bottom + dropdownHeight > bodyHeight) {
                this.dropdownTop = 0 - dropdownHeight - 8;
            } else {
                this.dropdownTop = inputRect.height;
            }
        }
    },
    destroyed: function destroyed() {
        //this.globalRemoveEvent("click", this.hide);
        this.dataKey.error = "";
    },

    watch: {
        "dataKey.val": {
            handler: function handler(newValue, oldValue) {
                if (newValue === undefined || newValue === "") {
                    return;
                }
                this.inputValue = newValue;
                if (newValue === this.dataKey.manualValue) {
                    this.inputValue = "";
                }
                var varArr = this.dataKey.sortArray.filter(function (item) {
                    return item.value === newValue;
                });
                //存在下拉列表
                if (varArr.length === 1) {
                    this.selectLabel = varArr[0].title;
                    this.$nextTick(function () {
                        this.isEdit = false;
                    });
                } else {
                    this.selectLabel = newValue;
                    //支持自定义时
                    this.dataKey.hasManual && this.$nextTick(function () {
                        this.isEdit = true;
                    });
                }
                if ((this.dataKey.immediate !== false || this.firstChange == true) &&
                //hasVal &&
                !this.isInput) {
                    this.dataKey.changeCallBack && this.dataKey.changeCallBack(newValue);
                }
            },

            //立即执行
            immediate: true
        },
        dropdownShow: {
            handler: function handler(newValue, oldValue) {
                if (newValue) {
                    //选中
                    this.$isMobile || this.$nextTick(function () {
                        this.setPosition();
                    });
                }
            }
        },
        "dataKey.show": {
            handler: function handler(newValue, oldValue) {
                if (!newValue) {
                    this.dataKey.error = "";
                }
            }
        },
        "dataKey.disabled": {
            handler: function handler(newValue, oldValue) {
                if (!newValue) {
                    this.dataKey.error = "";
                }
            }
        }
    }
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _libs = __webpack_require__(1);

var _addEvent = __webpack_require__(2);

var _addEvent2 = _interopRequireDefault(_addEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaults = {
    required: false,
    css: "", //样式
    show: true, //是否显示
    ignore: false, //是否忽略
    disabled: false, //是否禁用
    val: "", //组件id
    values: [true, false], //选中和不选中 默认用options的数据
    error: "",
    hasSelectAll: false, //是否有全选  组存在
    immediate: true,
    sortArray: [
        /*{
        title: "",
        value: "",
        disabled: ""
        }*/
    ],
    changeCallBack: function changeCallBack() {}
};

exports.default = {
    name: "v-checkbox",
    props: ["dataKey"],
    mixins: [_addEvent2.default],
    computed: {
        disabledList: function disabledList() {
            return this.dataKey.sortArray.filter(function (item) {
                return item.disabled;
            });
        }
    },
    created: function created() {
        if (this.dataKey.sortArray.length <= 1) {
            this.groups = false;
        } else {
            this.groups = true;
            defaults.val = [];
        }
        this.dataKey = this.setOptions(this.dataKey, defaults);
        this.checkedVal = (0, _libs.isDefined)(this.dataKey.sortArray[0].value) ? this.dataKey.sortArray[0].value : this.dataKey.values[0];
        this.addEvent();
    },
    data: function data() {
        return {
            firstChange: false,
            selectedAll: false,
            groups: false,
            checkedVal: ""
        };
    },

    methods: {
        changeCheckbox: function changeCheckbox(index, item) {
            var valArr = [],
                checkedVal,
                _this = this;

            if (this.dataKey.disabled === true || item.disabled) {
                return;
            }
            this.firstChange = true;
            if (!this.groups) {
                if (this.dataKey.val === this.checkedVal) {
                    this.dataKey.val = this.dataKey.values[1];
                } else {
                    this.dataKey.val = this.checkedVal;
                }
            } else {
                //组
                if (this.$refs["v-checkbox"][index].checked) {
                    //选中的时候过滤此值
                    this.dataKey.val = this.dataKey.val.filter(function (item2) {
                        return item2 !== item.value;
                    });
                } else {
                    this.dataKey.val.push(item.value);
                }
                this.$refs["v-checkbox"][index].checked = !this.$refs["v-checkbox"][index].checked;
            }
        },
        changeSelectedAll: function changeSelectedAll() {
            if (this.dataKey.disabled === true) {
                return;
            }
            this.firstChange = true;
            this.selectedAll = !this.selectedAll;
            var valArr = [];
            if (this.selectedAll) {
                this.dataKey.sortArray.forEach(function (item) {
                    if (!item.disabled) {
                        valArr.push(item.value);
                    }
                });
                this.dataKey.val = valArr;
            } else {
                this.dataKey.val = [];
            }
        },
        getChecked: function getChecked(value, index) {
            if (!this.groups) {
                if (this.dataKey.val === this.checkedVal) {
                    return true;
                }
                return false;
            }

            if (!Array.isArray(this.dataKey.val)) {
                return false;
            }

            return this.dataKey.val.indexOf(value) !== -1;
        }
    },
    watch: {
        "dataKey.val": {
            handler: function handler(newValue, oldValue) {
                var disableLen = this.disabledList.length;
                //全选
                if (newValue && newValue.length === this.dataKey.sortArray.length - disableLen) {
                    this.selectedAll = true;
                } else {
                    this.selectedAll = false;
                }
                if (this.dataKey.immediate || this.firstChange) {
                    this.dataKey.changeCallBack(newValue);
                }
            },

            //立即执行
            immediate: true
        }
    }
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "v-button",
    props: ["title", "css", "callback", "show", "disabled", "name"],
    created: function created() {},
    data: function data() {
        return {};
    },

    methods: {
        clickCallBack: function clickCallBack() {
            this.$refs.button.blur();
            if (this.disabled === true) {
                return;
            }
            if (typeof this.callback == "function") {
                this.callback(arguments);
            } else {
                this.$emit("callback");
            }
        }
    }
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "v-progress",
    props: {
        percent: {
            type: Number,
            default: 0
        },
        show: {
            type: Boolean,
            default: true
        },
        title: {
            type: String
        },
        css: {
            type: String
        },
        textAlign: {
            type: String,
            default: "center"
        },
        intervalTime: {
            type: Number
        },
        callback: {
            type: Function,
            default: function _default() {}
        },
        hasOverlay: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            progressTimer: null,
            max: 100,
            isShow: false,
            percenter: this.percent || 0
        };
    },

    methods: {
        update: function update() {
            var _this = this;
            clearTimeout(this.progressTimer);
            this.progressTimer = setTimeout(function () {
                _this.update();
            }, this.intervalTime);
            _this.setPercent();
        },
        setPercent: function setPercent() {
            if (this.percenter >= this.max) {
                clearTimeout(this.progressTimer);
                this.percenter = this.max;
                this.callback();
                return;
            }
            this.percenter = this.percenter + 1;
        }
    },
    watch: {
        show: {
            handler: function handler(newVal) {
                if (newVal) {
                    this.isShow = true;
                    this.$nextTick(function () {
                        this.percenter = this.percent || 0;
                        this.update();
                    });
                } else {

                    this.percenter = this.max;
                    this.isShow = false;
                    clearTimeout(this.progressTimer);
                }
            }
        }
    },
    destroyed: function destroyed() {
        clearTimeout(this.progressTimer);
    }
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _libs = __webpack_require__(1);

var _addEvent = __webpack_require__(2);

var _addEvent2 = _interopRequireDefault(_addEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaults = {
    css: "", //样式
    show: true, //是否显示
    disabled: false, //是否禁用
    val: "", //组件id
    immediate: true,
    name: "",
    values: [true, false],
    error: "",
    hasTips: false,
    title: "", //描述
    changeCallBack: function changeCallBack() {},
    beforeChange: function beforeChange() {}
};

exports.default = {
    name: "v-switch",
    props: ["dataKey"],
    mixins: [_addEvent2.default],
    created: function created() {
        this.dataKey = this.setOptions(this.dataKey, defaults);
        this.addEvent();
    },
    data: function data() {
        return {
            firstChange: false
        };
    },

    computed: {
        checked: function checked() {
            return this.dataKey.val === this.dataKey.values[0];
        },
        tips: function tips() {
            return this.checked ? _("Enable") : _("Disable");
        }
    },
    mounted: function mounted() {},

    methods: {
        setCheckbox: function setCheckbox() {
            if (this.dataKey.disabled) {
                return;
            }

            this.firstChange = true;
            if (this.dataKey.beforeChange() === false) {
                return;
            }

            this.dataKey.val = !this.checked ? this.dataKey.values[0] : this.dataKey.values[1];
        }
    },
    watch: {
        "dataKey.val": {
            handler: function handler(newValue, oldValue) {

                if (!(0, _libs.isDefined)(newValue) || newValue === "") {
                    this.dataKey.val = Array.isArray(this.dataKey.values) ? this.dataKey.values[1] : defaults.values[1];
                    return;
                }

                if (this.dataKey.immediate || this.firstChange) {
                    this.dataKey.changeCallBack(this.dataKey.val);
                }
            },

            immediate: true
        }
    }
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var defaults = {
    css: "",
    show: true, //是否显示
    val: "",
    min: 0,
    max: 100,
    immediate: true,
    disabled: false, //是否禁用
    changeCallBack: function changeCallBack() {}
};

exports.default = {
    name: "v-slider",
    props: ["dataKey"],
    data: function data() {
        return {
            perNum: 0, //每次最少移动
            maxWidth: 200,
            startX: 0,
            endX: 0,
            percent: 0,
            vText: 0,
            left: 0,
            lastLeft: 0,
            moveStart: false
        };
    },
    created: function created() {
        this.dataKey = this.setOptions(this.dataKey, defaults);
        this.perNum = this.maxWidth / (this.dataKey.max - this.dataKey.min);
        this.vText = this.dataKey.val;
        this.left = this.perNum * (this.dataKey.val - this.dataKey.min);
    },

    methods: {
        bindEvent: function bindEvent() {
            window.addEventListener("mousemove", this.mouseMove, false);
            window.addEventListener("mouseup", this.mouseUp, false);
        },
        mouseStart: function mouseStart(e) {
            if (this.dataKey.disabled) {
                return;
            }
            this.startX = e.pageX;
            this.lastLeft = this.left;
            this.moveStart = true;
            //document.body.addClass("no-select");
        },
        mouseMove: function mouseMove(e) {
            if (this.moveStart) {

                this.endX = e.pageX;
                this.left = this.lastLeft + this.endX - this.startX;
                if (this.left < 0) {
                    this.left = 0;
                }

                if (this.left > this.maxWidth) {
                    this.left = this.maxWidth;
                }

                this.vText = Math.round(Number(this.dataKey.min) + this.left / this.perNum);
            }
        },
        mouseUp: function mouseUp(e) {
            this.moveStart = false;
            window.removeEventListener("mousemove", this.mouseMove);
            window.removeEventListener("mouseup", this.mouseUp);
            //document.body.removeClass("no-select");
            this.dataKey.val = this.vText;
        }
    },
    watch: {
        "dataKey.val": {
            handler: function handler(newValue, oldValue) {
                this.perNum = this.maxWidth / (this.dataKey.max - this.dataKey.min);
                if (newValue < this.dataKey.min) {
                    this.vText = this.dataKey.min;
                }
                this.vText = this.dataKey.val;
                this.left = this.perNum * (this.vText - this.dataKey.min);
                if (this.dataKey.immediate) {
                    this.dataKey.changeCallBack && this.dataKey.changeCallBack(newValue);
                }
            }
        },
        immediate: true
    },
    destroyed: function destroyed() {
        window.removeEventListener("mousemove", this.mouseMove);
        window.removeEventListener("mouseup", this.mouseUp);
    }
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _manager = __webpack_require__(115);

var _manager2 = _interopRequireDefault(_manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idSeed = 1; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "v-pop",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      default: function _default() {
        return {
          css: "", //样式
          title: "",
          isAlert: false,
          buttons: [],
          closeOnClickModal: false,
          modalAppendToBody: true,
          closeDelay: 0,
          openDelay: 0
        };
      }
    }
  },
  model: {
    prop: "visible",
    event: "hide"
  },

  beforeMount: function beforeMount() {
    this._popupId = "popup-" + idSeed++;
    _manager2.default.register(this._popupId, this);
  },
  beforeDestroy: function beforeDestroy() {
    _manager2.default.deregister(this._popupId);
    _manager2.default.closeModal(this._popupId);
  },
  data: function data() {
    return {
      opened: false,
      rendered: false
    };
  },

  computed: {
    buttons: function buttons() {
      return this.option.buttons || [];
    },
    styleObject: function styleObject() {
      if (this.option.isAlert) {
        return {};
      }
      return {
        padding: (this.option.title ? 0.6 : 0.3) + "rem 0 " + (this.buttons.length * 60 + 30) / 100 + "rem"
      };
    }
  },
  watch: {
    visible: function visible(val) {
      var _this2 = this;

      if (val) {
        if (this._opening) return;
        if (!this.rendered) {
          this.rendered = true;
          this.$nextTick(function () {
            _this2.open();
          });
        } else {
          this.open();
        }
      } else {
        this.close();
      }
    }
  },

  methods: {
    open: function open() {
      var _this3 = this;

      if (!this.rendered) {
        this.rendered = true;
      }

      var props = this.option;

      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }
      clearTimeout(this._openTimer);

      var openDelay = Number(props.openDelay);
      if (openDelay > 0) {
        this._openTimer = setTimeout(function () {
          _this3._openTimer = null;
          _this3.doOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },
    doOpen: function doOpen(props) {
      if (this.opened) return;

      this._opening = true;

      var dom = this.$el;
      var zIndex = props.zIndex;

      if (zIndex) {
        _manager2.default.zIndex = zIndex;
      }

      if (this._closing) {
        _manager2.default.closeModal(this._popupId);
        this._closing = false;
      }

      _manager2.default.openModal(this._popupId, _manager2.default.nextZIndex(), this.modalAppendToBody ? undefined : dom);

      if (getComputedStyle(dom).position === "static") {
        dom.style.position = "absolute";
      }

      dom.style.zIndex = _manager2.default.nextZIndex();
      this.opened = true;

      // this.onOpen && this.onOpen();

      this.doAfterOpen();
    },
    doAfterOpen: function doAfterOpen() {
      this._opening = false;
    },
    close: function close() {
      var _this4 = this;

      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }
      clearTimeout(this._closeTimer);

      var closeDelay = Number(this.closeDelay);

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(function () {
          _this4._closeTimer = null;
          _this4.doClose();
        }, closeDelay);
      } else {
        this.doClose();
      }
    },
    doClose: function doClose() {
      this._closing = true;

      this.onClose && this.onClose();

      this.opened = false;

      this.doAfterClose();
    },
    doAfterClose: function doAfterClose() {
      _manager2.default.closeModal(this._popupId);
      this._closing = false;
    },
    proxyHandle: function proxyHandle(fun) {
      return function () {
        var outData = true;
        if (fun) {
          outData = fun() !== false;
        }
        outData && _this.hide();
      };
    },
    hide: function hide() {
      this.$emit("hide", false);
    },
    popClose: function popClose() {
      if (this.option.closeOnClickModal) {
        this.hide();
      }
    }
  }
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//

exports.default = {
  name: "v-text",
  props: ["title", "css"]
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _collapseTransition = __webpack_require__(120);

var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "v-collapse",
  props: ["title"],
  data: function data() {
    return {
      active: false
    };
  },

  components: { ElCollapseTransition: _collapseTransition2.default }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _betterScroll = __webpack_require__(123);

var _betterScroll2 = _interopRequireDefault(_betterScroll);

var _libs = __webpack_require__(1);

var _timers = __webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATA_NORMAL = "normal";
// 级联

var TEXT_TITLE = "";
var TEXT_CONFIRM = _("Confirm");
var TEXT_CANCEL = _("Cancel");

var COLOR_TITLE = "#262626";
var COLOR_CONFIRM = "#fe6600";
var COLOR_CANCEL = "#595959";

var COMFIRM_EVENT = "confirm";
var V_MODEL_EVENT = "V_MODEL_EVENT";

exports.default = {
  name: "v-picker",
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: [Boolean, String, Number],
    visible: {
      type: Boolean,
      default: false
    },
    textTitle: {
      type: String,
      default: TEXT_TITLE
    },
    textConfirm: {
      type: String,
      default: TEXT_CONFIRM
    },
    textCancel: {
      type: String,
      default: TEXT_CANCEL
    },
    colorTitle: {
      type: String,
      default: COLOR_TITLE
    },
    colorConfirm: {
      type: String,
      default: COLOR_CONFIRM
    },
    colorCancel: {
      type: String,
      default: COLOR_CANCEL
    },
    manualText: {
      type: String,
      default: ""
    }
  },
  model: {
    prop: "visible",
    event: V_MODEL_EVENT
  },
  inject: ["manualBack"],
  data: function data() {
    return {
      //   visible: false,
      wheel: null
    };
  },

  watch: {
    data: function data() {
      this._setPickerData();
    },
    visible: function visible(val) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    }
  },
  computed: {
    pickerData: function pickerData() {
      var data = (0, _libs.copyDeepData)(this.data);
      if (data.length > 0 && _typeof(data[0]) !== "object") {
        data = data.map(function (item) {
          return { title: item, value: item };
        });
      }

      // 添加自定义项
      if (this.manualText) {
        data.push({
          title: this.manualText,
          value: this.manualText
        });
      }
      return [].concat(data);
    },
    valueToIndex: function valueToIndex() {
      var data = {};
      this.pickerData.forEach(function (item, i) {
        data[item.value] = i;
      });
      return data;
    },
    anchor: function anchor() {
      var index = this.valueToIndex[this.value];
      if (index !== undefined) {
        return index;
      }
      if (this.manualText) {
        return this.pickerData.length - 1;
      }
      return 0;
    }
  },
  methods: {
    show: function show() {
      var _this = this;

      if (!this.wheel) {
        this.$nextTick(function () {
          var wheelbox = _this.$refs.wheelbox;
          _this._createWheel(wheelbox).enable();
          _this._wheelToAnchor();
        });
      } else {
        this.wheel.enable();
        this._wheelToAnchor();
      }
    },
    hide: function hide() {
      this.wheel && this.wheel.disable();
      this.$emit(V_MODEL_EVENT, false);
    },
    _createWheel: function _createWheel(wheelbox) {
      if (!this.wheel) {
        this.wheel = new _betterScroll2.default(wheelbox, {
          wheel: {
            selectedIndex: 0,
            rotate: 20
          }
        });
      } else {
        this.wheel.refresh();
      }
      return this.wheel;
    },
    _wheelToAnchor: function _wheelToAnchor(i) {
      i = i === undefined ? this.anchor : i;
      this.wheel.wheelTo(i);
    },
    _getCurrentValue: function _getCurrentValue() {
      var i = this.wheel.getSelectedIndex(),
          val = this.pickerData[i].value;

      this.value = val;
      // if (val !== this.manualText) {
      //   this.value = val;
      // }
      //  else if (this.valueToIndex[this.value] !== undefined) {
      //   this.value = "";
      // }
    },
    _setPickerData: function _setPickerData() {
      var _this2 = this;

      if (this.visible) {
        this.$nextTick(function () {
          var wheelbox = _this2.$refs.wheelbox;
          _this2._createWheel(wheelbox);
          _this2._wheelToAnchor();
        });
      }
    },
    confirm: function confirm() {
      this._getCurrentValue();
      this.hide();
      if (this.value === this.manualText) {
        this.manualBack();
      } else {
        this.$emit(COMFIRM_EVENT, this.value);
      }
    },
    cancel: function cancel() {
      this.hide();
    }
  }
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaults = {
    required: true,
    css: "", //样式
    show: true, //是否显示
    ignore: false, //是否忽略
    disabled: false, //是否禁用
    name: "",
    val: "", //组件value
    error: "", //错误标志
    column: 4, //输入框个数
    maxlength: 3,
    splitter: ".",
    allow: "0-9",
    valid: [
        /*{
            type: "ssid",
            args: [1, 2]
        }*/
    ],

    changeCallBack: function changeCallBack() {}
};

exports.default = {
    name: "v-column",
    props: ["data-key"],
    created: function created() {
        this.dataKey = this.setOptions(this.dataKey, defaults);
    },

    computed: {
        inputList: function inputList() {
            var len = this.dataKey.column,
                i = 0,
                itemArr = [];
            for (; i < len; i++) {
                itemArr.push(String(i + 1));
            }

            return itemArr;
        },
        inputVal: function inputVal() {
            return this.dataKey.val.split(this.dataKey.splitter);
        }
    },
    mounted: function mounted() {},
    data: function data() {
        return {
            isFocus: false,
            clickIndex: 0,
            eventKeyDown: false
        };
    },


    methods: {
        handlerKeyDown: function handlerKeyDown(event) {
            var val = event.target.value,
                index = Number(event.target.getAttribute("data-index")),
                keyVal = event.char || event.key,
                keyCode = event.keyCode,
                maxIndex = this.inputList.length - 1,
                position = void 0;

            if (keyCode === 8) {
                if (!this.eventKeyDown) {
                    this.eventKeyDown = true;
                    this.clickIndex = index;
                }
                position = getCursorPos(event.target); //光标位置
                if (position === 0) {
                    event.target.value = "";
                }
                this.setValue();
            } else if (keyCode == 39 || keyCode == 40) {
                //右 或者下
                position = getCursorPos(event.target); //光标位置
                if (position === event.target.value.length) {
                    if (index !== maxIndex) {
                        this.$refs.input[index + 1].focus();
                        event.preventDefault();
                        return;
                    }
                }
            } else if (keyCode == 37 || keyCode == 38) {
                position = getCursorPos(event.target); //光标位置
                if (position === 0) {
                    if (index !== 0) {
                        this.$refs.input[index - 1].focus();
                        event.preventDefault();
                        return;
                    }
                }
            }
            //回退
            if (keyCode === 8 && val === "") {
                index != 0 && this.$refs.input[index - 1].focus();
                event.preventDefault();
                return;
            }
            if (keyVal === this.dataKey.splitter) {
                event.preventDefault();
            }
        },
        handlerKeyUp: function handlerKeyUp(event) {
            var val = void 0,
                index = Number(event.target.getAttribute("data-index")),
                keyVal = event.char || event.key,
                regStr = this.dataKey.allow,
                reg = new RegExp("[" + regStr + "]", "gi"),
                illegalReg = new RegExp("[^" + regStr + "]", "gi"),
                keyupTime = new Date().getTime(),
                keyCode = event.keyCode,
                position = void 0,
                maxIndex = this.inputList.length - 1;
            if (keyCode >= 37 && keyCode <= 40) {
                //方向键
                return;
            }
            if (keyCode === 8) {
                this.eventKeyDown = false;
                if (this.clickIndex > index) {
                    for (var i = this.clickIndex; i > index; i--) {
                        this.$refs.input[i].value = "";
                    }
                }
                position = getCursorPos(event.target); //光标位置
                if (position === 0) {
                    event.target.value = "";
                }
                this.setValue();
                return;
            }

            //只取前几个数据
            val = event.target.value = event.target.value.replace(illegalReg, "").slice(0, this.dataKey.maxlength);

            //当输入值是分隔符或者是允许输入的数据时
            if (reg.test(keyVal) || keyVal === this.dataKey.splitter) {
                //非最后一个输入框
                if (index !== maxIndex) {
                    //当输入值是分隔符并且当前输入框值不是空  或者 当前值长度等于允许输入的最大长度
                    if (keyVal === this.dataKey.splitter && val !== "" || val.length === this.dataKey.maxlength) {
                        //选中下一个输入框
                        this.$refs.input[index + 1].setSelectionRange(0, -1);
                        this.$refs.input[index + 1].focus();
                    }
                }
            }

            this.setValue();
        },
        setValue: function setValue() {
            var arr = [],
                isNotNull = false;
            this.$refs.input.forEach(function (elem) {
                if (elem.value != "") {
                    isNotNull = true;
                }
                arr.push(elem.value);
            });
            this.dataKey.val = isNotNull ? arr.join(this.dataKey.splitter) : "";
            this.check(this.dataKey);
        },
        check: function check(dataObj) {
            if (typeof this.$checkData == "function") {
                return this.$checkData(dataObj);
            }

            return true;
        }
    },
    watch: {
        "dataKey.show": {
            handler: function handler(newValue, oldValue) {
                if (!newValue) {
                    this.dataKey.error = "";
                }
            }
        },
        "dataKey.disabled": {
            handler: function handler(newValue, oldValue) {
                if (!newValue) {
                    this.dataKey.error = "";
                }
            }
        }
    },
    destroyed: function destroyed() {
        this.dataKey.error = "";
    }
};


function getCursorPos(ctrl) {
    var Sel,
        doc = document,
        CaretPos = 0;
    //IE Support
    if (doc.selection) {
        ctrl.focus();
        Sel = doc.selection.createRange();
        Sel.moveStart("character", -ctrl.value.length);
        CaretPos = Sel.text.length;
    } else if (ctrl.selectionStart || parseInt(ctrl.selectionStart, 10) === 0) {
        CaretPos = ctrl.selectionStart;
    }
    return CaretPos;
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_ip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_ip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_ip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_ip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_ip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_ip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//

var defaults = {
    column: 4, //输入框个数
    maxlength: 3, //输入框最大输入长度
    splitter: ".", //分隔符
    allow: "0-9" //允许字符
};
exports.default = {
    "name": "v-ip",
    props: ["data-key"],
    created: function created() {
        this.dataKey = this.setOptions(this.dataKey, defaults, true);
    }
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_mac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_mac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_mac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_mac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_mac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_mac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//

var defaults = {
    column: 6, //输入框个数
    maxlength: 2, //输入框最大输入长度
    splitter: ":", //分隔符
    allow: "0-9a-f" //允许字符
};
exports.default = {
    "name": "v-mac",
    props: ["data-key"],
    created: function created() {
        this.dataKey = this.setOptions(this.dataKey, defaults, true);
    }
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "v-upload",
    props: {
        uploadUrl: {
            //上传url
            type: String
        },
        hasTips: {
            type: Boolean,
            default: false
        },
        css: {
            type: String
        },
        afterCallBack: {
            //上传成功后的回调
            type: Function,
            default: function _default() {}
        },
        changeCallBack: {
            //切换文件后的回调
            type: Function,
            default: function _default() {}
        },
        name: {
            //文件名
            type: String,
            default: "file"
        }
    },
    data: function data() {
        return {
            domain: "",
            fileStr: "",
            fileList: [],
            uploadList: [],
            file: {},
            targetFile: ""
        };
    },
    created: function created() {
        this.targetFile = "upload" + Math.random();
    },

    methods: {
        parseIframeResponse: function parseIframeResponse() {
            var elm = this.$refs.upload.contentWindow.document.body;
            var response = elm.innerText || elm.textContent;
            if (!response) {
                return false;
            }
            try {
                var jsonStr = JSON.parse(response);
                this.afterCallBack(jsonStr);
            } catch (err) {}
        },
        selectFile: function selectFile(e) {
            var fileArr = e.target.value.split("\\");
            this.fileStr = fileArr.slice(-1)[0];

            this.changeCallBack(e.target.value);
        },
        submit: function submit() {
            this.$refs.iform.submit();
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$refs.upload.addEventListener("load", function () {
            _this.parseIframeResponse();
        });
    }
};

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      title: "",
      isShowMessageBox: false,
      parseHtml: false,
      okText: _("Confirm"),
      cancelText: _("Cancel"),
      content: "",
      resolve: "",
      reject: "",
      hasCancel: true,
      promise: "" // 保存promise对象
    };
  },

  methods: {
    confirm: function confirm() {
      this.isShowMessageBox = false;
      this.resolve(true);
    },
    cancel: function cancel() {
      this.isShowMessageBox = false;
      if (this.hasCancel) {
        //todo: 处理没有reject的情况
        this.reject();
      }
    },
    showMsgBox: function showMsgBox() {
      var _this = this;

      this.isShowMessageBox = true;
      this.promise = new Promise(function (resolve, reject) {
        _this.resolve = resolve;
        _this.reject = reject;
      });
      // 返回promise对象
      return this.promise;
    }
  }
};

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//
//
//


exports.default = {
	data: function data() {
		return {
			parseHtml: false,
			content: "",
			left: 0,
			top: 0,
			width: 200,
			show: false,
			relativeWidth: 0,
			relativeHeight: 0
		};
	},

	methods: {
		updatePosition: function updatePosition() {

			this.$nextTick(function () {
				var clientRect = this.$refs.tooltip.getBoundingClientRect(),
				    bodyWidth = document.body.clientWidth,
				    bodyHeight = document.body.clientHeight;

				this.top = this.top + 10;
				this.left = this.left + 10;
				//当右边超出屏幕宽度时
				if (clientRect.right > bodyWidth) {
					this.left = this.left - this.$refs.tooltip.offsetWidth - 10;
				}

				//当下方超出屏幕高度时
				if (clientRect.bottom > bodyHeight) {
					//当前高度 - 自身高度 - 元素高度 - 30
					this.top = this.top - this.relativeHeight - this.$refs.tooltip.offsetWidth - 30;
				}
			});
		}
	},
	wathch: {
		"show": {
			handler: function handler(newValue, oldValue) {
				if (newValue === true) {
					this.updatePosition();
				}
			}
		}
	},
	destroyed: function destroyed() {}
};

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/group/v-group.vue?vue&type=template&id=6b9b9210&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.show !== false,
          expression: "show !== false"
        }
      ],
      class: [
        "form-group",
        _vm.vname,
        _vm.css || "",
        { special: _vm.special, disabled: _vm.dataKey && _vm.dataKey.disabled }
      ]
    },
    [
      _vm.hasTitle
        ? _c(
            "label",
            {
              class: ["form-title", { focus: _vm.isFocus }],
              on: { click: _vm.focus }
            },
            [_vm._v(_vm._s(_vm.title))]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "form-content" },
        [
          _vm.vname
            ? _c(_vm.vname, {
                ref: "formItem",
                tag: "component",
                attrs: { forId: _vm.forId, dataKey: _vm.dataKey }
              })
            : _vm._t("default")
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/group/v-group.vue?vue&type=template&id=6b9b9210&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dialog/v-dialog.vue?vue&type=template&id=62474a86&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.dialog.show ? _c("div", { staticClass: "overlay" }) : _vm._e(),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "pop-fade" } },
        [
          _vm.dialog.show
            ? _c("v-elem", { staticClass: "dialog" }, [
                _c(
                  "div",
                  { staticClass: "dialog-container", class: _vm.dialog.css },
                  [
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "clickoutside",
                            rawName: "v-clickoutside",
                            value: _vm.handlerOutSide,
                            expression: "handlerOutSide"
                          }
                        ],
                        staticClass: "dialog-content"
                      },
                      [
                        _c("div", { staticClass: "dialog-title" }, [
                          _c("span", [_vm._v(_vm._s(_vm.dialog.title))]),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "dialog-close v-icon-close",
                            on: {
                              click: function($event) {
                                return _vm.handlerCancel()
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "content" },
                          [_vm._t("default")],
                          2
                        ),
                        _vm._v(" "),
                        _vm.dialog.hasCancel !== false ||
                        _vm.dialog.hasOK !== false
                          ? _c(
                              "div",
                              { staticClass: "btn-group" },
                              [
                                _vm.dialog.hasCancel !== false
                                  ? _c("v-button", {
                                      attrs: {
                                        callback: _vm.handlerCancel,
                                        title: _vm.dialog.cancelText
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.dialog.hasOK !== false
                                  ? _c("v-button", {
                                      attrs: {
                                        callback: _vm.handlerOK,
                                        css: "btn-primary",
                                        title: _vm.dialog.okText
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e()
                      ]
                    )
                  ]
                )
              ])
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/dialog/v-dialog.vue?vue&type=template&id=62474a86&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alert/v-alert.vue?vue&type=template&id=2fe642b2&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "fade" } },
    [_c("v-dialog", { attrs: { dialog: _vm.alert } }, [_vm._t("default")], 2)],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/alert/v-alert.vue?vue&type=template&id=2fe642b2&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/header/v-header.vue?vue&type=template&id=747c9826&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/header/v-header.vue?vue&type=template&id=747c9826&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elem/v-elem.vue?vue&type=template&id=4a7b2026&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show !== false
    ? _c("div", { ref: "elem" }, [[_vm._t("default")]], 2)
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/elem/v-elem.vue?vue&type=template&id=4a7b2026&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/v-table.vue?vue&type=template&id=096f0396&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.tableOptions.show,
          expression: "tableOptions.show"
        }
      ],
      staticClass: "form-group",
      class: _vm.tableOptions.css
    },
    [
      _vm.tableOptions.search
        ? _c("div", { staticClass: "table-search" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.searchValue,
                  expression: "searchValue"
                }
              ],
              ref: "search",
              staticClass: "text form-search-input",
              attrs: { type: "text", placeholder: _vm.searchText },
              domProps: { value: _vm.searchValue },
              on: {
                keyup: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.goSearch()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.searchValue = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            !_vm.supportPlaceholder && !_vm.searchValue
              ? _c(
                  "div",
                  {
                    staticClass: "placeholder-text",
                    on: {
                      click: function($event) {
                        return _vm.focus()
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.searchText))]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("span", {
              staticClass: "v-icon-search",
              on: {
                click: function($event) {
                  return _vm.goSearch()
                }
              }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "table",
        {
          staticClass: "table table-fixed table-header",
          style: { "padding-right": _vm.tableScroll ? "17px" : "" }
        },
        [
          _c("thead", [
            _vm.tableOptions.secondColumns.length > 0
              ? _c(
                  "tr",
                  _vm._l(_vm.tableOptions.secondColumns, function(columns) {
                    return _c(
                      "th",
                      {
                        key: columns.field,
                        attrs: {
                          width: columns.width,
                          colspan: columns.colspan,
                          rowspan: columns.rowspan
                        }
                      },
                      [_vm._v(_vm._s(columns.title))]
                    )
                  }),
                  0
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "tr",
              [
                _vm.tableOptions.selectBox
                  ? _c("th", { attrs: { width: "50px" } }, [
                      _c(
                        "span",
                        { staticClass: "select-box" },
                        [
                          _c("v-checkbox", {
                            attrs: { "data-key": _vm.checkbox }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.tableOptions.columns, function(columns) {
                  return columns.title
                    ? _c(
                        "th",
                        { key: columns.field, attrs: { width: columns.width } },
                        [
                          _c(
                            "span",
                            {
                              class: { pointer: columns.sort },
                              on: {
                                click: function($event) {
                                  return _vm.sortTable(columns, columns.field)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(columns.title) +
                                  "\n                        "
                              ),
                              columns.sort
                                ? _c("span", {
                                    staticClass: "th-sort",
                                    class: {
                                      "v-icon-unsort": _vm.sortType === "",
                                      "v-icon-sort-up":
                                        _vm.sortType === "asc" &&
                                        _vm.sortKey == columns.field,
                                      "v-icon-sort-down":
                                        _vm.sortType === "desc" &&
                                        _vm.sortKey == columns.field
                                    }
                                  })
                                : _vm._e()
                            ]
                          )
                        ]
                      )
                    : _vm._e()
                })
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "table-body",
          style: {
            height: _vm.bodyHeight != "" ? _vm.bodyHeight + "px" : "auto"
          }
        },
        [
          _c("table", { ref: "table-body", staticClass: "table table-fixed" }, [
            _c(
              "tbody",
              [
                _vm._l(_vm.pageData, function(rowsData, rowsIndex) {
                  return _c(
                    "tr",
                    {
                      key: rowsData[_vm.guidKey],
                      ref: "table-body-tr",
                      refInFor: true
                    },
                    [
                      _vm.tableOptions.selectBox
                        ? _c(
                            "td",
                            {
                              staticClass: "select-box",
                              staticStyle: { width: "50px" }
                            },
                            [
                              _c("table-checkbox", {
                                tag: "component",
                                style: { width: "50px" },
                                attrs: {
                                  rowData: rowsData,
                                  originData: _vm.findOriginData(
                                    rowsData[_vm.guidKey]
                                  ),
                                  field: "selected",
                                  index: rowsIndex
                                },
                                on: { "on-custom-comp": _vm.customCompFunc }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.tableOptions.columns, function(columns) {
                        return [
                          !columns.componentName
                            ? _c(
                                "td",
                                {
                                  key: columns.field,
                                  staticClass: "fixed",
                                  style: { width: columns.width }
                                },
                                [
                                  columns.parseHtml
                                    ? _c("span", {
                                        directives: [
                                          {
                                            name: "tooltip",
                                            rawName: "v-tooltip"
                                          }
                                        ],
                                        class: columns.css,
                                        domProps: {
                                          innerHTML: _vm._s(
                                            rowsData[columns.field]
                                          )
                                        }
                                      })
                                    : _c(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "tooltip",
                                              rawName: "v-tooltip",
                                              value: rowsData[columns.field],
                                              expression:
                                                "rowsData[columns.field]"
                                            }
                                          ],
                                          key: rowsData[columns.field],
                                          class: columns.css,
                                          staticStyle: { cursor: "text" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(rowsData[columns.field])
                                          )
                                        ]
                                      )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          columns.componentName
                            ? _c(
                                "td",
                                {
                                  key: columns.field,
                                  staticClass: "fixed",
                                  class: columns.css,
                                  style: { width: columns.width }
                                },
                                [
                                  _c(columns.componentName, {
                                    tag: "component",
                                    style: { width: columns.width },
                                    attrs: {
                                      action: columns.action,
                                      rowData: rowsData,
                                      originData: _vm.findOriginData(
                                        rowsData[_vm.guidKey]
                                      ),
                                      field: columns.field,
                                      keyword: _vm.guidKey,
                                      index: rowsIndex
                                    },
                                    on: { "on-custom-comp": _vm.customCompFunc }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        ]
                      })
                    ],
                    2
                  )
                }),
                _vm._v(" "),
                _vm.pageData.length === 0 && _vm.isLoadData
                  ? _c("tr", [
                      _c(
                        "td",
                        {
                          attrs: {
                            colspan: _vm.tableOptions.selectBox
                              ? _vm.tableOptions.columns.length + 1
                              : _vm.tableOptions.columns.length
                          }
                        },
                        [
                          _c("div", { staticClass: "table-no-data" }, [
                            _vm._v(_vm._s(_vm.noData))
                          ])
                        ]
                      )
                    ])
                  : _vm._e()
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm.tableOptions.showPage && _vm.tableOptions.totalPage > 1
        ? _c("div", { staticClass: "table-footer clearfix" }, [
            _c("div", { staticClass: "footer-tips" }, [
              _c("span", [_vm._v(_vm._s(_vm.pageTips))]),
              _vm._v(" "),
              _c("span", { staticClass: "page-tips" }, [
                _vm._v(_vm._s(_vm.dataTips))
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "footer-page" },
              [
                _c(
                  "a",
                  {
                    staticClass: "table-btn",
                    class: { disabled: _vm.tableOptions.page === 0 },
                    on: {
                      click: function($event) {
                        return _vm.gotoPage("prev")
                      }
                    }
                  },
                  [_vm._v("<")]
                ),
                _vm._v(" "),
                _vm._l(_vm.footer, function(footerBtn) {
                  return _c(
                    "a",
                    {
                      key: footerBtn.value,
                      staticClass: "table-btn",
                      class: {
                        active: footerBtn.value == _vm.tableOptions.page
                      },
                      on: {
                        click: function($event) {
                          return _vm.gotoPage(footerBtn.value)
                        }
                      }
                    },
                    [_vm._v(_vm._s(footerBtn.text))]
                  )
                }),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "table-btn",
                    class: {
                      disabled:
                        _vm.tableOptions.page >= _vm.tableOptions.totalPage - 1
                    },
                    on: {
                      click: function($event) {
                        return _vm.gotoPage("next")
                      }
                    }
                  },
                  [_vm._v(">")]
                )
              ],
              2
            )
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/table/v-table.vue?vue&type=template&id=096f0396&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/v-input.vue?vue&type=template&id=916e78e4&
var render = function() {
  var _obj
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.dataKey.show,
          expression: "dataKey.show"
        }
      ],
      staticClass: "form-el-content form-input",
      class:
        ((_obj = { "error-group": _vm.dataKey.error }),
        (_obj[_vm.dataKey.css] = true),
        _obj)
    },
    [
      _vm.dataKey.type === "checkbox"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.dataKey.val,
                expression: "dataKey.val"
              },
              {
                name: "manualevent",
                rawName: "v-manualevent",
                value: _vm.evtHandlerList,
                expression: "evtHandlerList"
              }
            ],
            ref: "input",
            staticClass: "text",
            class: { "text-password": _vm.dataKey.hasEye },
            attrs: {
              maxlength: _vm.dataKey.maxlength,
              placeholder: _vm.dataKey.placeholder,
              disabled: _vm.dataKey.disabled,
              name: _vm.dataKey.name,
              "evt-name": _vm.evtName,
              type: "checkbox"
            },
            domProps: {
              checked: Array.isArray(_vm.dataKey.val)
                ? _vm._i(_vm.dataKey.val, null) > -1
                : _vm.dataKey.val
            },
            on: {
              input: function($event) {
                return _vm.changeValue()
              },
              focus: function($event) {
                _vm.focused = true
              },
              blur: function($event) {
                return _vm.blurEvt()
              },
              change: function($event) {
                var $$a = _vm.dataKey.val,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && _vm.$set(_vm.dataKey, "val", $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      _vm.$set(
                        _vm.dataKey,
                        "val",
                        $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                      )
                  }
                } else {
                  _vm.$set(_vm.dataKey, "val", $$c)
                }
              }
            }
          })
        : _vm.dataKey.type === "radio"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.dataKey.val,
                expression: "dataKey.val"
              },
              {
                name: "manualevent",
                rawName: "v-manualevent",
                value: _vm.evtHandlerList,
                expression: "evtHandlerList"
              }
            ],
            ref: "input",
            staticClass: "text",
            class: { "text-password": _vm.dataKey.hasEye },
            attrs: {
              maxlength: _vm.dataKey.maxlength,
              placeholder: _vm.dataKey.placeholder,
              disabled: _vm.dataKey.disabled,
              name: _vm.dataKey.name,
              "evt-name": _vm.evtName,
              type: "radio"
            },
            domProps: { checked: _vm._q(_vm.dataKey.val, null) },
            on: {
              input: function($event) {
                return _vm.changeValue()
              },
              focus: function($event) {
                _vm.focused = true
              },
              blur: function($event) {
                return _vm.blurEvt()
              },
              change: function($event) {
                return _vm.$set(_vm.dataKey, "val", null)
              }
            }
          })
        : _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.dataKey.val,
                expression: "dataKey.val"
              },
              {
                name: "manualevent",
                rawName: "v-manualevent",
                value: _vm.evtHandlerList,
                expression: "evtHandlerList"
              }
            ],
            ref: "input",
            staticClass: "text",
            class: { "text-password": _vm.dataKey.hasEye },
            attrs: {
              maxlength: _vm.dataKey.maxlength,
              placeholder: _vm.dataKey.placeholder,
              disabled: _vm.dataKey.disabled,
              name: _vm.dataKey.name,
              "evt-name": _vm.evtName,
              type: _vm.dataKey.type
            },
            domProps: { value: _vm.dataKey.val },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.dataKey, "val", $event.target.value)
                },
                function($event) {
                  return _vm.changeValue()
                }
              ],
              focus: function($event) {
                _vm.focused = true
              },
              blur: function($event) {
                return _vm.blurEvt()
              }
            }
          }),
      _vm._v(" "),
      !_vm.supportPlaceholder && !_vm.dataKey.val
        ? _c(
            "div",
            {
              staticClass: "placeholder-text",
              on: {
                click: function($event) {
                  return _vm.focus()
                }
              }
            },
            [_vm._v("\n        " + _vm._s(_vm.dataKey.placeholder) + "\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.dataKey.hasEye
        ? _c("div", {
            class:
              _vm.dataKey.type == "password"
                ? "v-icon-eye-close"
                : "v-icon-eye-open",
            on: {
              click: function($event) {
                return _vm.changePlaceHolder()
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.dataKey.error
        ? _c("div", { staticClass: "error-bottom text-error" }, [
            _vm._v("\n        " + _vm._s(_vm.dataKey.error) + "\n    ")
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/input/v-input.vue?vue&type=template&id=916e78e4&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/radio/v-radio.vue?vue&type=template&id=0408f9f0&
var render = function() {
  var _obj
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.dataKey.show,
          expression: "dataKey.show"
        }
      ],
      staticClass: "form-el-content",
      class:
        ((_obj = { "error-group": _vm.dataKey.error }),
        (_obj[_vm.dataKey.css] = true),
        _obj)
    },
    [
      _vm._l(_vm.dataKey.sortArray, function(item) {
        return [
          _c(
            "label",
            {
              directives: [
                {
                  name: "manualevent",
                  rawName: "v-manualevent",
                  value: _vm.evtHandlerList,
                  expression: "evtHandlerList"
                }
              ],
              key: item.value,
              class: [
                "form-radio",
                _vm.radioValue === item.value ? "checked" : ""
              ],
              attrs: { name: _vm.dataKey.name, "evt-name": _vm.evtName },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.changeRadio(item.value, item)
                }
              }
            },
            [
              _c("span", {
                staticClass: "raido-item",
                class: {
                  "v-icon-radio-checked": _vm.radioValue === item.value,
                  "v-icon-radio-unchecked": _vm.radioValue !== item.value,
                  disabled: item.disabled || _vm.dataKey.disabled
                },
                attrs: { value: item.value }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "radio-text" }, [
                _vm._v(_vm._s(item.title))
              ])
            ]
          )
        ]
      }),
      _vm._v(" "),
      _vm.dataKey.error
        ? _c("div", { staticClass: "error-bottom text-error" }, [
            _vm._v(_vm._s(_vm.dataKey.error))
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/radio/v-radio.vue?vue&type=template&id=0408f9f0&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/select/v-select.vue?vue&type=template&id=49c115f4&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.dataKey.show,
          expression: "dataKey.show"
        }
      ],
      staticClass: "form-el-content form-select",
      class: { "error-group": _vm.dataKey.error }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "clickoutside",
              rawName: "v-clickoutside",
              value: _vm.hide,
              expression: "hide"
            }
          ],
          on: {
            click: function($event) {
              $event.stopPropagation()
              return _vm.showOption($event)
            }
          }
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.inputValue,
                expression: "inputValue"
              },
              {
                name: "manualevent",
                rawName: "v-manualevent",
                value: _vm.evtHandlerList,
                expression: "evtHandlerList"
              }
            ],
            ref: "input",
            staticClass: "text",
            class: _vm.dataKey.css,
            style: { visibility: _vm.isEdit ? "visible" : "hidden" },
            attrs: {
              type: "text",
              disabled: _vm.dataKey.disabled,
              name: _vm.dataKey.name,
              maxlength: _vm.dataKey.maxlength,
              "evt-name": _vm.evtName
            },
            domProps: { value: _vm.inputValue },
            on: {
              keyup: function($event) {
                return _vm.changeValue()
              },
              blur: function($event) {
                return _vm.setKeyValue()
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.inputValue = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.isEdit,
                  expression: "!isEdit"
                }
              ],
              ref: "inputtext",
              staticClass: "input-text",
              class: {
                active: _vm.dropdownShow,
                disabled: _vm.dataKey.disabled
              }
            },
            [_vm._v(_vm._s(_vm.selectLabel))]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "select-arrow",
              class: _vm.dropdownShow ? "arrow-up" : "arrow-down",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.clickArrow($event)
                }
              }
            },
            [_c("div", { staticClass: "select-arrow-icon v-icon-arrrow-down" })]
          )
        ]
      ),
      _vm._v(" "),
      _c("transition", [
        _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value:
                  _vm.dropdownShow && !_vm.dataKey.disabled && !_vm.$isMobile,
                expression: "dropdownShow && !dataKey.disabled && !$isMobile"
              }
            ],
            ref: "dropdown",
            staticClass: "select-dropdown",
            style: { top: _vm.dropdownTop + "px" }
          },
          [
            _vm._l(_vm.dataKey.sortArray, function(item) {
              return [
                _c(
                  "li",
                  {
                    key: item.value,
                    staticClass: "select-li",
                    class: {
                      active: _vm.dataKey.val == item.value,
                      disabled: item.disabled
                    },
                    attrs: { value: item.value },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.changeSelect(item.value, item.title)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item.title))]
                )
              ]
            }),
            _vm._v(" "),
            _c(
              "li",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.dataKey.hasManual,
                    expression: "dataKey.hasManual"
                  }
                ],
                staticClass: "select-li",
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.hanlderManual()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.dataKey.manualText))]
            )
          ],
          2
        )
      ]),
      _vm._v(" "),
      _vm.dataKey.error
        ? _c("div", { staticClass: "error-bottom text-error" }, [
            _vm._v(_vm._s(_vm.dataKey.error))
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("v-picker", {
        attrs: { value: _vm.dataKey.val, data: _vm.dataKey.sortArray },
        on: { confirm: _vm.setValue },
        model: {
          value: _vm.pickerVisible,
          callback: function($$v) {
            _vm.pickerVisible = $$v
          },
          expression: "pickerVisible"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/select/v-select.vue?vue&type=template&id=49c115f4&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox/v-checkbox.vue?vue&type=template&id=42111c26&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.dataKey.show,
          expression: "dataKey.show"
        }
      ],
      staticClass: "form-el-content form-el-checkbox",
      class: { "error-group": _vm.dataKey.error }
    },
    [
      _vm.dataKey.hasSelectAll
        ? [
            _c("input", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: false,
                  expression: "false"
                }
              ],
              ref: "v-checkbox-all",
              attrs: { type: "checkbox" },
              domProps: { checked: _vm.selectedAll }
            }),
            _vm._v(" "),
            _c(
              "label",
              {
                directives: [
                  {
                    name: "manualevent",
                    rawName: "v-manualevent",
                    value: _vm.evtHandlerList,
                    expression: "evtHandlerList"
                  }
                ],
                staticClass: "form-checkbox",
                class: { disabled: _vm.dataKey.disabled },
                attrs: { name: _vm.dataKey.name, "evt-name": _vm.evtName },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.changeSelectedAll()
                  }
                }
              },
              [
                _c("span", {
                  staticClass: "checkbox-item",
                  class: _vm.selectedAll
                    ? "v-icon-checkbox-checked"
                    : "v-icon-checkbox-unchecked"
                }),
                _vm._v(" "),
                _c("span", { staticClass: "checkbox-text" }, [
                  _vm._v(_vm._s(_vm._("Select All")))
                ])
              ]
            )
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.dataKey.sortArray, function(item, index) {
        return [
          _c("input", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: false,
                expression: "false"
              }
            ],
            key: item.key,
            ref: "v-checkbox",
            refInFor: true,
            attrs: { type: "checkbox" },
            domProps: {
              value: item.value,
              checked: _vm.getChecked(item.value, index)
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              directives: [
                {
                  name: "manualevent",
                  rawName: "v-manualevent",
                  value: _vm.evtHandlerList,
                  expression: "evtHandlerList"
                }
              ],
              key: item.key,
              staticClass: "form-checkbox",
              class: { disabled: item.disabled || _vm.dataKey.disabled },
              attrs: {
                "evt-name": _vm.evtName,
                "data-index": index,
                name: _vm.dataKey.name
              },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.changeCheckbox(index, item)
                }
              }
            },
            [
              _c("span", {
                staticClass: "checkbox-item",
                class: _vm.getChecked(item.value, index)
                  ? "v-icon-checkbox-checked"
                  : "v-icon-checkbox-unchecked"
              }),
              _vm._v(" "),
              _c("span", { staticClass: "checkbox-text" }, [
                _vm._v(_vm._s(item.title))
              ])
            ]
          )
        ]
      }),
      _vm._v(" "),
      _vm.dataKey.error
        ? _c("div", { staticClass: "error-bottom text-error" }, [
            _vm._v(_vm._s(_vm.dataKey.error))
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/checkbox/v-checkbox.vue?vue&type=template&id=42111c26&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/v-button.vue?vue&type=template&id=c81d9c74&
var render = function() {
  var _obj
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show !== false
    ? _c("div", { staticClass: "button-item" }, [
        _c(
          "button",
          {
            ref: "button",
            staticClass: "btn",
            class:
              ((_obj = {}),
              (_obj[_vm.css] = _vm.css),
              (_obj["disabled"] = _vm.disabled),
              _obj),
            attrs: { name: _vm.name, type: "button" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.clickCallBack()
              }
            }
          },
          [_vm.title ? _c("span", [_vm._v(_vm._s(_vm.title))]) : _vm._e()]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/button/v-button.vue?vue&type=template&id=c81d9c74&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/progress/v-progress.vue?vue&type=template&id=8c6e1434&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isShow
    ? _c("div", [
        _vm.hasOverlay ? _c("div", { staticClass: "overlay" }) : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dialog" },
          [
            _c("div", { staticClass: "progress-content", class: _vm.css }, [
              _vm.title
                ? _c("div", { staticClass: "progress-title" }, [
                    _vm._v(_vm._s(_vm.title))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "progress-group" }, [
                _c(
                  "div",
                  {
                    staticClass: "progress-bar",
                    style: { "text-align": _vm.textAlign }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "progress-percent",
                        style: { width: _vm.percenter + "%" }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.percenter + "%") +
                            "\n                    "
                        )
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._t("default")
          ],
          2
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/progress/v-progress.vue?vue&type=template&id=8c6e1434&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/switch/v-switch.vue?vue&type=template&id=aaea17f4&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.dataKey.show,
          expression: "dataKey.show"
        }
      ],
      staticClass: "form-switch form-el-content clearfix"
    },
    [
      _c("div", {
        directives: [
          {
            name: "manualevent",
            rawName: "v-manualevent",
            value: _vm.evtHandlerList,
            expression: "evtHandlerList"
          }
        ],
        staticClass: "switch-item",
        class: _vm.checked ? "checked" : "",
        attrs: { name: _vm.dataKey.name, "evt-name": _vm.evtName },
        on: {
          click: function($event) {
            return _vm.setCheckbox()
          }
        }
      }),
      _vm._v(" "),
      _c(
        "span",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.dataKey.hasTips,
              expression: "dataKey.hasTips"
            }
          ],
          staticClass: "switch-tips"
        },
        [_vm._v(_vm._s(_vm.tips))]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/switch/v-switch.vue?vue&type=template&id=aaea17f4&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/slider/v-slider.vue?vue&type=template&id=07a992b4&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.dataKey.show,
          expression: "dataKey.show"
        }
      ],
      staticClass: "form-swicth form-el-content"
    },
    [
      _c("div", { staticClass: "form-slider", class: _vm.dataKey.css }, [
        _c(
          "div",
          {
            staticClass: "slider-content",
            style: { width: _vm.maxWidth + "px" }
          },
          [
            _c("div", {
              staticClass: "slider-percent",
              style: { width: _vm.left + "px" }
            })
          ]
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "slider-box",
          style: { left: _vm.left + "px" },
          on: {
            mouseover: function($event) {
              $event.stopPropagation()
              return _vm.bindEvent($event)
            },
            mousedown: function($event) {
              $event.stopPropagation()
              return _vm.mouseStart($event)
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "slider-number" }, [_vm._v(_vm._s(_vm.vText))])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/slider/v-slider.vue?vue&type=template&id=07a992b4&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/pop/v-pop.vue?vue&type=template&id=57d50548&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "pop-fade" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        staticClass: "pop-wrapper",
        on: { click: _vm.popClose }
      },
      [
        _c(
          "div",
          {
            staticClass: "pop-box",
            class: [_vm.option.css, _vm.option.isAlert ? "alert" : ""],
            style: _vm.styleObject,
            on: {
              click: function($event) {
                $event.stopPropagation()
              }
            }
          },
          [
            !_vm.option.isAlert
              ? _c("div", { staticClass: "pop-box-header" }, [
                  _vm.option.title
                    ? _c("div", { staticClass: "pop-box-title" }, [
                        _c("span", [_vm._v(_vm._s(_vm.option.title))])
                      ])
                    : _vm._e()
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "button",
              {
                class: ["pop-box-headerbtn", _vm.$isMobile ? "v-mobile" : ""],
                attrs: { type: "button" },
                on: { click: _vm.hide }
              },
              [_c("i", { staticClass: "pop-box-close icon-close" })]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "pop-box-content" },
              [_vm._t("default")],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "pop-box-toolbar" },
              _vm._l(_vm.buttons, function(item) {
                return _c("v-button", {
                  key: item.text,
                  class: ["pop-btn", item.theme || ""],
                  attrs: {
                    callback: _vm.proxyHandle(item.callback),
                    title: item.text
                  }
                })
              }),
              1
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/pop/v-pop.vue?vue&type=template&id=57d50548&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/text/v-text.vue?vue&type=template&id=0f8f9266&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-group form-text", class: _vm.css }, [
    _c("label", { staticClass: "form-title" }, [_vm._v(_vm._s(_vm.title))]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "form-content bold-content" },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/text/v-text.vue?vue&type=template&id=0f8f9266&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/collapse/v-collapse.vue?vue&type=template&id=7afd05e6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "v-collapse border-b form-group" },
    [
      _c(
        "div",
        {
          staticClass: "v-collapse-header",
          class: { "is-active": _vm.active },
          on: {
            click: function($event) {
              _vm.active = !_vm.active
            }
          }
        },
        [
          _vm._v("\n    " + _vm._s(_vm.title) + "\n    "),
          _c("i", {
            staticClass: "v-collapse-arrow v-icon-arrrow-down",
            class: { "is-active": _vm.active }
          })
        ]
      ),
      _vm._v(" "),
      _c("el-collapse-transition", [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.active,
                expression: "active"
              }
            ],
            staticClass: "v-collapse-item"
          },
          [
            _c(
              "div",
              { staticClass: "v-collapse-item-content" },
              [_vm._t("default")],
              2
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/collapse/v-collapse.vue?vue&type=template&id=7afd05e6&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/picker/v-picker.vue?vue&type=template&id=14598d74&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("transition", { attrs: { name: "fade" } }, [
        _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "mask",
          on: {
            click: function($event) {
              _vm.visible = false
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide" } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.visible,
                expression: "visible"
              }
            ],
            staticClass: "picker"
          },
          [
            _c("div", { staticClass: "picker-title border-b" }, [
              _c(
                "span",
                {
                  staticClass: "pt-button pt-cancel",
                  style: { color: _vm.colorCancel },
                  on: { click: _vm.cancel }
                },
                [_vm._v(_vm._s(_vm.textCancel))]
              ),
              _vm._v(" "),
              _c("h4", { style: { color: _vm.colorTitle } }, [
                _vm._v(_vm._s(_vm.textTitle))
              ]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "pt-button pt-submit",
                  style: { color: _vm.colorConfirm },
                  on: { click: _vm.confirm }
                },
                [_vm._v(_vm._s(_vm.textConfirm))]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "picker-panel" }, [
              _c("div", { staticClass: "picker-mask-top border-b" }),
              _vm._v(" "),
              _c("div", { staticClass: "picker-mask-bottom border-t" }),
              _vm._v(" "),
              _c("div", { staticClass: "picker-wheel-wrapper" }, [
                _c("div", { ref: "wheelbox", staticClass: "picker-wheel" }, [
                  _c(
                    "ul",
                    { staticClass: "wheel-scroll" },
                    _vm._l(_vm.pickerData, function(item) {
                      return _c(
                        "li",
                        { key: item.value, staticClass: "wheel-item" },
                        [_vm._v(_vm._s(item.title))]
                      )
                    }),
                    0
                  )
                ])
              ])
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/picker/v-picker.vue?vue&type=template&id=14598d74&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/column/v-column.vue?vue&type=template&id=38434b74&
var render = function() {
  var _obj
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.dataKey.show,
          expression: "dataKey.show"
        }
      ],
      staticClass: "form-el-content form-input",
      class:
        ((_obj = { "error-group": _vm.dataKey.error }),
        (_obj[_vm.dataKey.css] = true),
        _obj)
    },
    [
      _c(
        "div",
        {
          staticClass: "col-content",
          class: { disabled: _vm.dataKey.disabled, focus: _vm.isFocus },
          attrs: { name: _vm.dataKey.name }
        },
        _vm._l(_vm.inputList, function(item, index) {
          return _c(
            "span",
            {
              key: item,
              staticClass: "col-group",
              style: { width: 100 / _vm.inputList.length + "%" }
            },
            [
              _c("input", {
                ref: "input",
                refInFor: true,
                staticClass: "text",
                attrs: {
                  type: "text",
                  disabled: _vm.dataKey.disabled,
                  "data-index": index,
                  maxlength: _vm.dataKey.maxlength
                },
                domProps: { value: _vm.inputVal[index] },
                on: {
                  focus: function($event) {
                    _vm.isFocus = true
                  },
                  blur: function($event) {
                    _vm.isFocus = false
                  },
                  keydown: _vm.handlerKeyDown,
                  keyup: function($event) {
                    $event.stopPropagation()
                    return _vm.handlerKeyUp($event)
                  }
                }
              }),
              _vm._v(" "),
              index != _vm.inputList.length - 1
                ? _c("div", { staticClass: "col-splitter" }, [
                    _vm._v(_vm._s(_vm.dataKey.splitter))
                  ])
                : _vm._e()
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm.dataKey.error
        ? _c("div", { staticClass: "error-bottom text-error" }, [
            _vm._v(_vm._s(_vm.dataKey.error))
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/column/v-column.vue?vue&type=template&id=38434b74&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ip/v-ip.vue?vue&type=template&id=44b4f4e6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-column", { attrs: { "data-key": _vm.dataKey } })
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/ip/v-ip.vue?vue&type=template&id=44b4f4e6&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/mac/v-mac.vue?vue&type=template&id=55ea8ed8&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-column", { attrs: { "data-key": _vm.dataKey } })
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/mac/v-mac.vue?vue&type=template&id=55ea8ed8&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/upload/v-upload.vue?vue&type=template&id=3b0efaa6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "uploader-container" }, [
    _c(
      "form",
      {
        ref: "iform",
        staticClass: "iform",
        attrs: {
          method: "POST",
          action: _vm.uploadUrl,
          target: _vm.targetFile,
          enctype: "multipart/form-data"
        }
      },
      [
        _c("div", { staticClass: "clearfix" }, [
          _c("div", { staticClass: "file-btn-group" }, [
            _c("a", { staticClass: "btn", class: _vm.css }, [
              _c("span", { staticClass: "file-title" }, [
                _vm._v(_vm._s(_vm._("Choose a File")))
              ]),
              _vm._v(" "),
              _c("input", {
                ref: "file",
                staticClass: "file",
                attrs: { name: _vm.name, type: "file" },
                on: { change: _vm.selectFile }
              })
            ])
          ]),
          _vm._v(" "),
          _vm.fileStr && _vm.hasTips
            ? _c("div", { staticClass: "file-tips" }, [
                _c("span", { staticClass: "v-icon-file" }),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.fileStr))])
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm._t("default")
      ],
      2
    ),
    _vm._v(" "),
    _c("iframe", {
      ref: "upload",
      staticClass: "upload",
      attrs: { name: _vm.targetFile, width: "1px", height: "1px" }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/upload/v-upload.vue?vue&type=template&id=3b0efaa6&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MessageBox.vue?vue&type=template&id=26dee718&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "fade" } },
    [
      _vm.isShowMessageBox
        ? _c("v-elem", { staticClass: "dialog" }, [
            _c("div", {
              staticClass: "overlay",
              on: {
                click: function($event) {
                  _vm.isShowMessageBox = false
                }
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "dialog-container message-content" }, [
              _c("div", { staticClass: "dialog-content" }, [
                _c("div", { staticClass: "dialog-title" }, [
                  _c("span", [_vm._v(_vm._s(_vm.title))]),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "dialog-close v-icon-close",
                    on: {
                      click: function($event) {
                        _vm.isShowMessageBox = false
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "content" }, [
                  _vm.parseHtml
                    ? _c("div", {
                        domProps: { innerHTML: _vm._s(_vm.content) }
                      })
                    : _c("div", [_vm._v(_vm._s(_vm.content))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "btn-group" }, [
                  _c(
                    "button",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.hasCancel,
                          expression: "hasCancel"
                        }
                      ],
                      staticClass: "btn",
                      on: {
                        click: function($event) {
                          return _vm.cancel()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.cancelText))]
                  ),
                  _vm._v("   \n          "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: {
                        click: function($event) {
                          return _vm.confirm()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.okText))]
                  )
                ])
              ])
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/MessageBox.vue?vue&type=template&id=26dee718&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/v-tooltip.vue?vue&type=template&id=2130efcc&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", [
    _vm.parseHtml
      ? _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show && _vm.content,
              expression: "show && content"
            }
          ],
          ref: "tooltip",
          staticClass: "el-tooltip",
          style: { left: _vm.left + "px", top: _vm.top + "px" },
          domProps: { innerHTML: _vm._s(_vm.content) }
        })
      : _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.show && _vm.content,
                expression: "show && content"
              }
            ],
            ref: "tooltip",
            staticClass: "el-tooltip",
            style: {
              left: _vm.left + "px",
              top: _vm.top + "px",
              "max-width": _vm.width + "px"
            }
          },
          [_vm._v("\n\t    \t" + _vm._s(_vm.content) + "\n\t    ")]
        )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/v-tooltip.vue?vue&type=template&id=2130efcc&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/table/table-checkbox.vue?vue&type=template&id=144e39d3&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "select-box" }, [
    _c("div", { staticClass: "form-el-content form-el-checkbox" }, [
      _c(
        "label",
        { staticClass: "form-checkbox", class: { disabled: !_vm.hasCheckbox } },
        [
          _c("span", {
            staticClass: "checkbox-item",
            class:
              _vm.rowData.selected == "1"
                ? "v-icon-checkbox-checked"
                : "v-icon-checkbox-unchecked",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.changeBack($event)
              }
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "checkbox-text" })
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/table/table-checkbox.vue?vue&type=template&id=144e39d3&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),
/* 80 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__(83);

var _index = __webpack_require__(84);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(86);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(88);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(90);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(92);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(94);

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(97);

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__(99);

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__(101);

var _index18 = _interopRequireDefault(_index17);

var _index19 = __webpack_require__(103);

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__(105);

var _index22 = _interopRequireDefault(_index21);

var _index23 = __webpack_require__(107);

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__(109);

var _index26 = _interopRequireDefault(_index25);

var _index27 = __webpack_require__(111);

var _index28 = _interopRequireDefault(_index27);

var _index29 = __webpack_require__(113);

var _index30 = _interopRequireDefault(_index29);

var _index31 = __webpack_require__(116);

var _index32 = _interopRequireDefault(_index31);

var _index33 = __webpack_require__(118);

var _index34 = _interopRequireDefault(_index33);

var _index35 = __webpack_require__(121);

var _index36 = _interopRequireDefault(_index35);

var _index37 = __webpack_require__(127);

var _index38 = _interopRequireDefault(_index37);

var _index39 = __webpack_require__(129);

var _index40 = _interopRequireDefault(_index39);

var _index41 = __webpack_require__(131);

var _index42 = _interopRequireDefault(_index41);

var _index43 = __webpack_require__(133);

var _index44 = _interopRequireDefault(_index43);

var _base = __webpack_require__(135);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [_index2.default, _index4.default, _index6.default, _index8.default, _index10.default, _index12.default, _index14.default, _index16.default, _index18.default, _index20.default, _index22.default, _index24.default, _index26.default, _index28.default, _index30.default, _index32.default, _index34.default, _index36.default, _index38.default, _index40.default, _index42.default, _index44.default];
/*全局组件*/

var install = function install(Vue) {
    Vue.use(_base2.default);
    components.forEach(function (component) {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
exports.default = {
    install: install,
    Group: _index2.default,
    Dialog: _index4.default,
    Alert: _index6.default,
    Header: _index8.default,
    Page: _index10.default,
    Table: _index12.default,
    Input: _index14.default,
    Radio: _index16.default,
    Select: _index18.default,
    Checkbox: _index20.default,
    Button: _index22.default,
    Progress: _index24.default,
    Switch: _index26.default,
    Slider: _index28.default,
    Pop: _index30.default,
    Text: _index32.default,
    Picker: _index36.default,
    Collapse: _index34.default,
    Upload: _index44.default,
    Base: _base2.default
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vGroup = __webpack_require__(85);

var _vGroup2 = _interopRequireDefault(_vGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vGroup2.default.install = function (Vue) {
  Vue.component(_vGroup2.default.name, _vGroup2.default);
};

exports.default = _vGroup2.default;

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_group_vue_vue_type_template_id_6b9b9210___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _v_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_group_vue_vue_type_template_id_6b9b9210___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_group_vue_vue_type_template_id_6b9b9210___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/group/v-group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vDialog = __webpack_require__(87);

var _vDialog2 = _interopRequireDefault(_vDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vDialog2.default.install = function (Vue) {
  Vue.component(_vDialog2.default.name, _vDialog2.default);
};

exports.default = _vDialog2.default;

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_dialog_vue_vue_type_template_id_62474a86___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _v_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_dialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_dialog_vue_vue_type_template_id_62474a86___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_dialog_vue_vue_type_template_id_62474a86___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/dialog/v-dialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vAlert = __webpack_require__(89);

var _vAlert2 = _interopRequireDefault(_vAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vAlert2.default.install = function (Vue) {
  Vue.component(_vAlert2.default.name, _vAlert2.default);
};

exports.default = _vAlert2.default;

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_alert_vue_vue_type_template_id_2fe642b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _v_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_alert_vue_vue_type_template_id_2fe642b2___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_alert_vue_vue_type_template_id_2fe642b2___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/alert/v-alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vHeader = __webpack_require__(91);

var _vHeader2 = _interopRequireDefault(_vHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vHeader2.default.install = function (Vue) {
  Vue.component(_vHeader2.default.name, _vHeader2.default);
};

exports.default = _vHeader2.default;

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_header_vue_vue_type_template_id_747c9826___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _v_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_header_vue_vue_type_template_id_747c9826___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_header_vue_vue_type_template_id_747c9826___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/header/v-header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vElem = __webpack_require__(93);

var _vElem2 = _interopRequireDefault(_vElem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vElem2.default.install = function (Vue) {
  Vue.component(_vElem2.default.name, _vElem2.default);
};

exports.default = _vElem2.default;

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_elem_vue_vue_type_template_id_4a7b2026___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _v_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_elem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_elem_vue_vue_type_template_id_4a7b2026___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_elem_vue_vue_type_template_id_4a7b2026___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/elem/v-elem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vTable = __webpack_require__(95);

var _vTable2 = _interopRequireDefault(_vTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vTable2.default.install = function (Vue) {
  Vue.component(_vTable2.default.name, _vTable2.default);
};

exports.default = _vTable2.default;

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_table_vue_vue_type_template_id_096f0396___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _v_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_table_vue_vue_type_template_id_096f0396___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_table_vue_vue_type_template_id_096f0396___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/table/v-table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_checkbox_vue_vue_type_template_id_144e39d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _table_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _table_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_checkbox_vue_vue_type_template_id_144e39d3___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _table_checkbox_vue_vue_type_template_id_144e39d3___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/table/table-checkbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vInput = __webpack_require__(98);

var _vInput2 = _interopRequireDefault(_vInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vInput2.default.install = function (Vue) {
  Vue.component(_vInput2.default.name, _vInput2.default);
};

exports.default = _vInput2.default;

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_input_vue_vue_type_template_id_916e78e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_input_vue_vue_type_template_id_916e78e4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_input_vue_vue_type_template_id_916e78e4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/input/v-input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vRadio = __webpack_require__(100);

var _vRadio2 = _interopRequireDefault(_vRadio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vRadio2.default.install = function (Vue) {
  Vue.component(_vRadio2.default.name, _vRadio2.default);
};

exports.default = _vRadio2.default;

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_radio_vue_vue_type_template_id_0408f9f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _v_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_radio_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_radio_vue_vue_type_template_id_0408f9f0___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_radio_vue_vue_type_template_id_0408f9f0___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/radio/v-radio.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vSelect = __webpack_require__(102);

var _vSelect2 = _interopRequireDefault(_vSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vSelect2.default.install = function (Vue) {
  Vue.component(_vSelect2.default.name, _vSelect2.default);
};

exports.default = _vSelect2.default;

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_select_vue_vue_type_template_id_49c115f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_select_vue_vue_type_template_id_49c115f4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_select_vue_vue_type_template_id_49c115f4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/select/v-select.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vCheckbox = __webpack_require__(104);

var _vCheckbox2 = _interopRequireDefault(_vCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vCheckbox2.default.install = function (Vue) {
  Vue.component(_vCheckbox2.default.name, _vCheckbox2.default);
};

exports.default = _vCheckbox2.default;

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_checkbox_vue_vue_type_template_id_42111c26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _v_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_checkbox_vue_vue_type_template_id_42111c26___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_checkbox_vue_vue_type_template_id_42111c26___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/checkbox/v-checkbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vButton = __webpack_require__(106);

var _vButton2 = _interopRequireDefault(_vButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vButton2.default.install = function (Vue) {
  Vue.component(_vButton2.default.name, _vButton2.default);
};

exports.default = _vButton2.default;

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_button_vue_vue_type_template_id_c81d9c74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _v_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_button_vue_vue_type_template_id_c81d9c74___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_button_vue_vue_type_template_id_c81d9c74___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/button/v-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vProgress = __webpack_require__(108);

var _vProgress2 = _interopRequireDefault(_vProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vProgress2.default.install = function (Vue) {
  Vue.component(_vProgress2.default.name, _vProgress2.default);
};

exports.default = _vProgress2.default;

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_progress_vue_vue_type_template_id_8c6e1434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _v_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_progress_vue_vue_type_template_id_8c6e1434___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_progress_vue_vue_type_template_id_8c6e1434___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/progress/v-progress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vSwitch = __webpack_require__(110);

var _vSwitch2 = _interopRequireDefault(_vSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vSwitch2.default.install = function (Vue) {
  Vue.component(_vSwitch2.default.name, _vSwitch2.default);
};

exports.default = _vSwitch2.default;

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_switch_vue_vue_type_template_id_aaea17f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _v_switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_switch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_switch_vue_vue_type_template_id_aaea17f4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_switch_vue_vue_type_template_id_aaea17f4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/switch/v-switch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vSlider = __webpack_require__(112);

var _vSlider2 = _interopRequireDefault(_vSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vSlider2.default.install = function (Vue) {
  Vue.component(_vSlider2.default.name, _vSlider2.default);
};

exports.default = _vSlider2.default;

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_slider_vue_vue_type_template_id_07a992b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_slider_vue_vue_type_template_id_07a992b4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_slider_vue_vue_type_template_id_07a992b4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/slider/v-slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vPop = __webpack_require__(114);

var _vPop2 = _interopRequireDefault(_vPop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vPop2.default.install = function (Vue) {
  Vue.component(_vPop2.default.name, _vPop2.default);
};

exports.default = _vPop2.default;

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_pop_vue_vue_type_template_id_57d50548___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_pop_vue_vue_type_template_id_57d50548___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_pop_vue_vue_type_template_id_57d50548___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/pop/v-pop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _libs = __webpack_require__(1);

var hasModal = false;
var zIndex = 200;

var getModal = function getModal() {
    var modalDom = PopupManager.modalDom;
    if (modalDom) {
        hasModal = true;
    } else {
        hasModal = false;
        modalDom = document.createElement('div');
        PopupManager.modalDom = modalDom;

        modalDom.addEventListener('touchmove', function (event) {
            event.preventDefault();
            event.stopPropagation();
        });

        modalDom.addEventListener('click', function () {
            PopupManager.doOnModalClick && PopupManager.doOnModalClick();
        });
    }

    return modalDom;
};

var instances = {};

var PopupManager = {
    modalFade: true,

    getInstance: function getInstance(id) {
        return instances[id];
    },

    register: function register(id, instance) {
        if (id && instance) {
            instances[id] = instance;
        }
    },

    deregister: function deregister(id) {
        if (id) {
            instances[id] = null;
            delete instances[id];
        }
    },

    nextZIndex: function nextZIndex() {
        return PopupManager.zIndex++;
    },

    modalStack: [],

    doOnModalClick: function doOnModalClick() {
        var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topItem) return;

        var instance = PopupManager.getInstance(topItem.id);
        if (instance && instance.closeOnClickModal) {
            instance.hide();
        }
    },

    openModal: function openModal(id, zIndex, dom) {
        if (!id || zIndex === undefined) return;

        var modalStack = this.modalStack;

        for (var i = 0, j = modalStack.length; i < j; i++) {
            var item = modalStack[i];
            if (item.id === id) {
                return;
            }
        }

        var modalDom = getModal();

        (0, _libs.addClass)(modalDom, 'v-pop');
        if (!hasModal) {
            (0, _libs.addClass)(modalDom, 'v-pop-enter');
        }

        setTimeout(function () {
            (0, _libs.removeClass)(modalDom, 'v-pop-enter');
        }, 200);

        if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
            dom.parentNode.appendChild(modalDom);
        } else {
            document.body.appendChild(modalDom);
        }

        if (zIndex) {
            modalDom.style.zIndex = zIndex;
        }

        modalDom.style.display = '';

        this.modalStack.push({ id: id, zIndex: zIndex });
    },

    closeModal: function closeModal(id) {
        var modalStack = this.modalStack;
        var modalDom = getModal();

        if (modalStack.length > 0) {
            var topItem = modalStack[modalStack.length - 1];
            if (topItem.id === id) {
                modalStack.pop();
                if (modalStack.length > 0) {
                    modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
                }
            } else {
                for (var i = modalStack.length - 1; i >= 0; i--) {
                    if (modalStack[i].id === id) {
                        modalStack.splice(i, 1);
                        break;
                    }
                }
            }
        }

        if (modalStack.length === 0) {
            if (this.modalFade) {
                (0, _libs.addClass)(modalDom, 'v-pop-leave');
            }
            setTimeout(function () {
                if (modalStack.length === 0) {
                    if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
                    modalDom.style.display = 'none';
                    PopupManager.modalDom = undefined;
                }
                (0, _libs.removeClass)(modalDom, 'v-pop-leave');
            }, 200);
        }
    }
};

Object.defineProperty(PopupManager, 'zIndex', {
    configurable: true,
    get: function get() {
        return zIndex;
    },
    set: function set(value) {
        zIndex = value;
    }
});

exports.default = PopupManager;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vText = __webpack_require__(117);

var _vText2 = _interopRequireDefault(_vText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vText2.default.install = function (Vue) {
  Vue.component(_vText2.default.name, _vText2.default);
};

exports.default = _vText2.default;

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_text_vue_vue_type_template_id_0f8f9266___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _v_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_text_vue_vue_type_template_id_0f8f9266___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_text_vue_vue_type_template_id_0f8f9266___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/text/v-text.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vCollapse = __webpack_require__(119);

var _vCollapse2 = _interopRequireDefault(_vCollapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vCollapse2.default.install = function (Vue) {
  Vue.component(_vCollapse2.default.name, _vCollapse2.default);
};

exports.default = _vCollapse2.default;

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_collapse_vue_vue_type_template_id_7afd05e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _v_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_collapse_vue_vue_type_template_id_7afd05e6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_collapse_vue_vue_type_template_id_7afd05e6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/collapse/v-collapse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _libs = __webpack_require__(1);

var transitionOn = {
    beforeEnter: function beforeEnter(el) {
        (0, _libs.addClass)(el, 'collapse-transition');
        if (!el.dataset) el.dataset = {};

        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = '0';
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
    },
    enter: function enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 'px';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
            el.style.height = '';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }

        el.style.overflow = 'hidden';
    },
    afterEnter: function afterEnter(el) {
        // for safari: remove class then reset height is necessary
        (0, _libs.removeClass)(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
    },
    beforeLeave: function beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;

        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
    },
    leave: function leave(el) {
        if (el.scrollHeight !== 0) {
            // for safari: add class after set height, or it will jump to zero height suddenly, weired
            (0, _libs.addClass)(el, 'collapse-transition');
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        }
    },
    afterLeave: function afterLeave(el) {
        (0, _libs.removeClass)(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
};

exports.default = {
    name: 'ElCollapseTransition',
    functional: true,
    render: function render(createElement, context) {
        var data = {
            props: {
                name: 'collapse'
            },
            on: transitionOn
        };

        return createElement('transition', data, context.children);
    }
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vPicker = __webpack_require__(122);

var _vPicker2 = _interopRequireDefault(_vPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vPicker2.default.install = function (Vue) {
  Vue.component(_vPicker2.default.name, _vPicker2.default);
};

exports.default = _vPicker2.default;

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_picker_vue_vue_type_template_id_14598d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _v_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_picker_vue_vue_type_template_id_14598d74___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_picker_vue_vue_type_template_id_14598d74___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/picker/v-picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * better-normal-scroll v1.15.2
 * (c) 2016-2019 ustbhuangyi
 * Released under the MIT License.
 */
// As of V8 6.6, depending on the size of the array, this is anywhere
// between 1.5-10x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) {
    list[index] = list[index + 1];
  }

  list.pop();
}

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function eventMixin(BScroll) {
  BScroll.prototype.on = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    if (!this._events[type]) {
      this._events[type] = [];
    }

    this._events[type].push([fn, context]);
  };

  BScroll.prototype.once = function (type, fn) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

    function magic() {
      this.off(type, magic);

      fn.apply(context, arguments);
    }
    // To expose the corresponding function method in order to execute the off method
    magic.fn = fn;

    this.on(type, magic);
  };

  BScroll.prototype.off = function (type, fn) {
    var _events = this._events[type];
    if (!_events) {
      return;
    }

    var count = _events.length;
    while (count--) {
      if (_events[count][0] === fn || _events[count][0] && _events[count][0].fn === fn) {
        spliceOne(_events, count);
      }
    }
  };

  BScroll.prototype.trigger = function (type) {
    var events = this._events[type];
    if (!events) {
      return;
    }

    var len = events.length;
    var eventsCopy = [].concat(toConsumableArray(events));
    for (var i = 0; i < len; i++) {
      var event = eventsCopy[i];

      var _event = slicedToArray(event, 2),
          fn = _event[0],
          context = _event[1];

      if (fn) {
        fn.apply(context, [].slice.call(arguments, 1));
      }
    }
  };
}

// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isWeChatDevTools = ua && /wechatdevtools/.test(ua);
var isAndroid = ua && ua.indexOf('android') > 0;

function getNow() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +new Date();
}

function extend(target) {
  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < rest.length; i++) {
    var source = rest[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}

function isUndef(v) {
  return v === undefined || v === null;
}

function getDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}

var elementStyle = inBrowser && document.createElement('div').style;

var vendor = function () {
  if (!inBrowser) {
    return false;
  }
  // first pick up standard to fix #743
  var transformNames = {
    standard: 'transform',
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform'
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }

  return false;
}();

function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend';
    }
    return style;
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

function addEvent(el, type, fn, capture) {
  el.addEventListener(type, fn, { passive: false, capture: !!capture });
}

function removeEvent(el, type, fn, capture) {
  el.removeEventListener(type, fn, { passive: false, capture: !!capture });
}

function offset(el) {
  var left = 0;
  var top = 0;

  while (el) {
    left -= el.offsetLeft;
    top -= el.offsetTop;
    el = el.offsetParent;
  }

  return {
    left: left,
    top: top
  };
}

function offsetToBody(el) {
  var rect = el.getBoundingClientRect();

  return {
    left: -(rect.left + window.pageXOffset),
    top: -(rect.top + window.pageYOffset)
  };
}

var cssVendor = vendor && vendor !== 'standard' ? '-' + vendor.toLowerCase() + '-' : '';

var transform = prefixStyle('transform');
var transition = prefixStyle('transition');

var hasPerspective = inBrowser && prefixStyle('perspective') in elementStyle;
// fix issue #361
var hasTouch = inBrowser && ('ontouchstart' in window || isWeChatDevTools);
var hasTransform = transform !== false;
var hasTransition = inBrowser && transition in elementStyle;

var style = {
  transform: transform,
  transition: transition,
  transitionTimingFunction: prefixStyle('transitionTimingFunction'),
  transitionDuration: prefixStyle('transitionDuration'),
  transitionDelay: prefixStyle('transitionDelay'),
  transformOrigin: prefixStyle('transformOrigin'),
  transitionEnd: prefixStyle('transitionEnd')
};

var TOUCH_EVENT = 1;
var MOUSE_EVENT = 2;

var eventType = {
  touchstart: TOUCH_EVENT,
  touchmove: TOUCH_EVENT,
  touchend: TOUCH_EVENT,

  mousedown: MOUSE_EVENT,
  mousemove: MOUSE_EVENT,
  mouseup: MOUSE_EVENT
};

function getRect(el) {
  if (el instanceof window.SVGElement) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }
}

function preventDefaultException(el, exceptions) {
  for (var i in exceptions) {
    if (exceptions[i].test(el[i])) {
      return true;
    }
  }
  return false;
}

function tap(e, eventName) {
  var ev = document.createEvent('Event');
  ev.initEvent(eventName, true, true);
  ev.pageX = e.pageX;
  ev.pageY = e.pageY;
  e.target.dispatchEvent(ev);
}

function click(e) {
  var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'click';

  var eventSource = void 0;
  if (e.type === 'mouseup' || e.type === 'mousecancel') {
    eventSource = e;
  } else if (e.type === 'touchend' || e.type === 'touchcancel') {
    eventSource = e.changedTouches[0];
  }
  var posSrc = {};
  if (eventSource) {
    posSrc.screenX = eventSource.screenX || 0;
    posSrc.screenY = eventSource.screenY || 0;
    posSrc.clientX = eventSource.clientX || 0;
    posSrc.clientY = eventSource.clientY || 0;
  }
  var ev = void 0;
  var bubbles = true;
  var cancelable = true;
  if (typeof MouseEvent !== 'undefined') {
    try {
      ev = new MouseEvent(event, extend({
        bubbles: bubbles,
        cancelable: cancelable
      }, posSrc));
    } catch (e) {
      createEvent();
    }
  } else {
    createEvent();
  }

  function createEvent() {
    ev = document.createEvent('Event');
    ev.initEvent(event, bubbles, cancelable);
    extend(ev, posSrc);
  }

  // forwardedTouchEvent set to true in case of the conflict with fastclick
  ev.forwardedTouchEvent = true;
  ev._constructed = true;
  e.target.dispatchEvent(ev);
}

function dblclick(e) {
  click(e, 'dblclick');
}

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

function removeChild(el, child) {
  el.removeChild(child);
}

var DEFAULT_OPTIONS = {
  startX: 0,
  startY: 0,
  scrollX: false,
  scrollY: true,
  freeScroll: false,
  directionLockThreshold: 5,
  eventPassthrough: '',
  click: false,
  tap: false,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: true,
  bounceTime: 800,
  momentum: true,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 0.0015,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: true,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
  },
  HWCompositing: true,
  useTransition: true,
  useTransform: true,
  bindToWrapper: false,
  disableMouse: hasTouch,
  disableTouch: !hasTouch,
  observeDOM: true,
  autoBlur: true,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
   */
  wheel: false,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   speed: 400,
   *   easing: {
   *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   *     fn: function (t) {
   *       return t * (2 - t)
   *     }
   *   }
   *   listenFlick: true
   * }
   */
  snap: false,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true,
   *   interactive: false
   * }
   */
  scrollbar: false,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: false,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: false,
  /**
   * for mouse wheel
   * mouseWheel: {
   *   speed: 20,
   *   invert: false,
   *   easeTime: 300
   * }
   */
  mouseWheel: false,
  stopPropagation: false,
  /**
   * for zoom
   * zoom: {
   *   start: 1,
   *   min: 1,
   *   max: 4
   * }
   */
  zoom: false,
  /**
   * for infinity
   * infinity: {
   *   render(item, div) {
   *   },
   *   createTombstone() {
   *   },
   *   fetch(count) {
   *   }
   * }
   */
  infinity: false,
  /**
   * for double click
   * dblclick: {
   *   delay: 300
   * }
   */
  dblclick: false
};

function initMixin(BScroll) {
  BScroll.prototype._init = function (options) {
    this._handleOptions(options);

    // init private custom events
    this._events = {};

    this.x = 0;
    this.y = 0;
    this.directionX = 0;
    this.directionY = 0;

    this.setScale(1);

    this._addDOMEvents();

    this._initExtFeatures();

    this._watchTransition();

    if (this.options.observeDOM) {
      this._initDOMObserver();
    }

    if (this.options.autoBlur) {
      this._handleAutoBlur();
    }

    this.refresh();

    if (!this.options.snap) {
      this.scrollTo(this.options.startX, this.options.startY);
    }

    this.enable();
  };

  BScroll.prototype.setScale = function (scale) {
    this.lastScale = isUndef(this.scale) ? scale : this.scale;
    this.scale = scale;
  };

  BScroll.prototype._handleOptions = function (options) {
    this.options = extend({}, DEFAULT_OPTIONS, options);

    this.translateZ = this.options.HWCompositing && hasPerspective ? ' translateZ(0)' : '';

    this.options.useTransition = this.options.useTransition && hasTransition;
    this.options.useTransform = this.options.useTransform && hasTransform;

    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

    // If you want eventPassthrough I have to lock one of the axes
    this.options.scrollX = this.options.eventPassthrough === 'horizontal' ? false : this.options.scrollX;
    this.options.scrollY = this.options.eventPassthrough === 'vertical' ? false : this.options.scrollY;

    // With eventPassthrough we also need lockDirection mechanism
    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

    if (this.options.tap === true) {
      this.options.tap = 'tap';
    }
  };

  BScroll.prototype._addDOMEvents = function () {
    var eventOperation = addEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._removeDOMEvents = function () {
    var eventOperation = removeEvent;
    this._handleDOMEvents(eventOperation);
  };

  BScroll.prototype._handleDOMEvents = function (eventOperation) {
    var target = this.options.bindToWrapper ? this.wrapper : window;
    eventOperation(window, 'orientationchange', this);
    eventOperation(window, 'resize', this);

    if (this.options.click) {
      eventOperation(this.wrapper, 'click', this, true);
    }

    if (!this.options.disableMouse) {
      eventOperation(this.wrapper, 'mousedown', this);
      eventOperation(target, 'mousemove', this);
      eventOperation(target, 'mousecancel', this);
      eventOperation(target, 'mouseup', this);
    }

    if (hasTouch && !this.options.disableTouch) {
      eventOperation(this.wrapper, 'touchstart', this);
      eventOperation(target, 'touchmove', this);
      eventOperation(target, 'touchcancel', this);
      eventOperation(target, 'touchend', this);
    }

    eventOperation(this.scroller, style.transitionEnd, this);
  };

  BScroll.prototype._initExtFeatures = function () {
    if (this.options.snap) {
      this._initSnap();
    }
    if (this.options.scrollbar) {
      this._initScrollbar();
    }
    if (this.options.pullUpLoad) {
      this._initPullUp();
    }
    if (this.options.pullDownRefresh) {
      this._initPullDown();
    }
    if (this.options.wheel) {
      this._initWheel();
    }
    if (this.options.mouseWheel) {
      this._initMouseWheel();
    }
    if (this.options.zoom) {
      this._initZoom();
    }
    if (this.options.infinity) {
      this._initInfinite();
    }
  };

  BScroll.prototype._watchTransition = function () {
    if (typeof Object.defineProperty !== 'function') {
      return;
    }
    var me = this;
    var isInTransition = false;
    var key = this.options.useTransition ? 'isInTransition' : 'isAnimating';
    Object.defineProperty(this, key, {
      get: function get() {
        return isInTransition;
      },
      set: function set(newVal) {
        isInTransition = newVal;
        // fix issue #359
        var el = me.scroller.children.length ? me.scroller.children : [me.scroller];
        var pointerEvents = isInTransition && !me.pulling ? 'none' : 'auto';
        for (var i = 0; i < el.length; i++) {
          el[i].style.pointerEvents = pointerEvents;
        }
      }
    });
  };

  BScroll.prototype._handleAutoBlur = function () {
    this.on('scrollStart', function () {
      var activeElement = document.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        activeElement.blur();
      }
    });
  };

  BScroll.prototype._initDOMObserver = function () {
    var _this = this;

    if (typeof MutationObserver !== 'undefined') {
      var timer = void 0;
      var observer = new MutationObserver(function (mutations) {
        // don't do any refresh during the transition, or outside of the boundaries
        if (_this._shouldNotRefresh()) {
          return;
        }
        var immediateRefresh = false;
        var deferredRefresh = false;
        for (var i = 0; i < mutations.length; i++) {
          var mutation = mutations[i];
          if (mutation.type !== 'attributes') {
            immediateRefresh = true;
            break;
          } else {
            if (mutation.target !== _this.scroller) {
              deferredRefresh = true;
              break;
            }
          }
        }
        if (immediateRefresh) {
          _this.refresh();
        } else if (deferredRefresh) {
          // attributes changes too often
          clearTimeout(timer);
          timer = setTimeout(function () {
            if (!_this._shouldNotRefresh()) {
              _this.refresh();
            }
          }, 60);
        }
      });
      var config = {
        attributes: true,
        childList: true,
        subtree: true
      };
      observer.observe(this.scroller, config);

      this.on('destroy', function () {
        observer.disconnect();
      });
    } else {
      this._checkDOMUpdate();
    }
  };

  BScroll.prototype._shouldNotRefresh = function () {
    var outsideBoundaries = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;

    return this.isInTransition || this.stopFromTransition || outsideBoundaries;
  };

  BScroll.prototype._checkDOMUpdate = function () {
    var scrollerRect = getRect(this.scroller);
    var oldWidth = scrollerRect.width;
    var oldHeight = scrollerRect.height;

    function check() {
      if (this.destroyed) {
        return;
      }
      scrollerRect = getRect(this.scroller);
      var newWidth = scrollerRect.width;
      var newHeight = scrollerRect.height;

      if (oldWidth !== newWidth || oldHeight !== newHeight) {
        this.refresh();
      }
      oldWidth = newWidth;
      oldHeight = newHeight;

      next.call(this);
    }

    function next() {
      var _this2 = this;

      setTimeout(function () {
        check.call(_this2);
      }, 1000);
    }

    next.call(this);
  };

  BScroll.prototype.handleEvent = function (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e);
        if (this.options.zoom && e.touches && e.touches.length > 1) {
          this._zoomStart(e);
        }
        break;
      case 'touchmove':
      case 'mousemove':
        if (this.options.zoom && e.touches && e.touches.length > 1) {
          this._zoom(e);
        } else {
          this._move(e);
        }
        break;
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        if (this.scaled) {
          this._zoomEnd(e);
        } else {
          this._end(e);
        }
        break;
      case 'orientationchange':
      case 'resize':
        this._resize();
        break;
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this._transitionEnd(e);
        break;
      case 'click':
        if (this.enabled && !e._constructed) {
          if (!preventDefaultException(e.target, this.options.preventDefaultException)) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
        break;
      case 'wheel':
      case 'DOMMouseScroll':
      case 'mousewheel':
        this._onMouseWheel(e);
        break;
    }
  };

  BScroll.prototype.refresh = function () {
    var isWrapperStatic = window.getComputedStyle(this.wrapper, null).position === 'static';
    var wrapperRect = getRect(this.wrapper);
    this.wrapperWidth = wrapperRect.width;
    this.wrapperHeight = wrapperRect.height;

    var scrollerRect = getRect(this.scroller);
    this.scrollerWidth = Math.round(scrollerRect.width * this.scale);
    this.scrollerHeight = Math.round(scrollerRect.height * this.scale);

    this.relativeX = scrollerRect.left;
    this.relativeY = scrollerRect.top;

    if (isWrapperStatic) {
      this.relativeX -= wrapperRect.left;
      this.relativeY -= wrapperRect.top;
    }

    this.minScrollX = 0;
    this.minScrollY = 0;

    var wheel = this.options.wheel;
    if (wheel) {
      this.items = this.scroller.children;
      // check whether there are all disable items or not when refresh
      this._checkWheelAllDisabled();
      this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0;
      if (this.selectedIndex === undefined) {
        this.selectedIndex = wheel.selectedIndex || 0;
      }
      this.options.startY = -this.selectedIndex * this.itemHeight;

      this.maxScrollX = 0;
      this.maxScrollY = -this.itemHeight * (this.items.length - 1);
    } else {
      this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
      if (!this.options.infinity) {
        this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
      }
      if (this.maxScrollX < 0) {
        this.maxScrollX -= this.relativeX;
        this.minScrollX = -this.relativeX;
      } else if (this.scale > 1) {
        this.maxScrollX = this.maxScrollX / 2 - this.relativeX;
        this.minScrollX = this.maxScrollX;
      }
      if (this.maxScrollY < 0) {
        this.maxScrollY -= this.relativeY;
        this.minScrollY = -this.relativeY;
      } else if (this.scale > 1) {
        this.maxScrollY = this.maxScrollY / 2 - this.relativeY;
        this.minScrollY = this.maxScrollY;
      }
    }

    this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX;
    this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY;

    if (!this.hasHorizontalScroll) {
      this.maxScrollX = this.minScrollX;
      this.scrollerWidth = this.wrapperWidth;
    }

    if (!this.hasVerticalScroll) {
      this.maxScrollY = this.minScrollY;
      this.scrollerHeight = this.wrapperHeight;
    }

    this.endTime = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.wrapperOffset = offset(this.wrapper);

    this.trigger('refresh');

    !this.scaled && this.resetPosition();
  };

  BScroll.prototype.enable = function () {
    this.enabled = true;
  };

  BScroll.prototype.disable = function () {
    this.enabled = false;
  };
}

var ease = {
  // easeOutQuint
  swipe: {
    style: 'cubic-bezier(0.23, 1, 0.32, 1)',
    fn: function fn(t) {
      return 1 + --t * t * t * t * t;
    }
  },
  // easeOutQuard
  swipeBounce: {
    style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    fn: function fn(t) {
      return t * (2 - t);
    }
  },
  // easeOutQuart
  bounce: {
    style: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    fn: function fn(t) {
      return 1 - --t * t * t * t;
    }
  }
};

function momentum(current, start, time, lowerMargin, upperMargin, wrapperSize, options, scroll) {
  var distance = current - start;
  var speed = Math.abs(distance) / time;

  var deceleration = options.deceleration,
      itemHeight = options.itemHeight,
      swipeBounceTime = options.swipeBounceTime,
      wheel = options.wheel,
      swipeTime = options.swipeTime;

  var duration = swipeTime;
  var rate = wheel ? 4 : 15;

  var destination = current + speed / deceleration * (distance < 0 ? -1 : 1);

  if (wheel && itemHeight) {
    destination = scroll._findNearestValidWheel(destination).y;
  }

  if (destination < lowerMargin) {
    destination = wrapperSize ? Math.max(lowerMargin - wrapperSize / 4, lowerMargin - wrapperSize / rate * speed) : lowerMargin;
    duration = swipeBounceTime;
  } else if (destination > upperMargin) {
    destination = wrapperSize ? Math.min(upperMargin + wrapperSize / 4, upperMargin + wrapperSize / rate * speed) : upperMargin;
    duration = swipeBounceTime;
  }

  return {
    destination: Math.round(destination),
    duration: duration
  };
}

var DEFAULT_INTERVAL = 100 / 60;

function noop() {}

var requestAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
  // if all else fails, use setTimeout
  function (callback) {
    return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2); // make interval as precise as possible.
  };
}();

var cancelAnimationFrame = function () {
  if (!inBrowser) {
    /* istanbul ignore if */
    return noop;
  }
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
    window.clearTimeout(id);
  };
}();

var DIRECTION_UP = 1;
var DIRECTION_DOWN = -1;
var DIRECTION_LEFT = 1;
var DIRECTION_RIGHT = -1;

var PROBE_DEBOUNCE = 1;

var PROBE_REALTIME = 3;

function warn(msg) {
  console.error('[BScroll warn]: ' + msg);
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error('[BScroll] ' + msg);
  }
}

function coreMixin(BScroll) {
  BScroll.prototype._start = function (e) {
    var _eventType = eventType[e.type];
    if (_eventType !== TOUCH_EVENT) {
      if (e.button !== 0) {
        return;
      }
    }
    if (!this.enabled || this.destroyed || this.initiated && this.initiated !== _eventType) {
      return;
    }
    this.initiated = _eventType;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.moved = false;
    this.distX = 0;
    this.distY = 0;
    this.directionX = 0;
    this.directionY = 0;
    this.movingDirectionX = 0;
    this.movingDirectionY = 0;
    this.directionLocked = 0;

    this._transitionTime();
    this.startTime = getNow();

    if (this.options.wheel) {
      this.target = e.target;
    }

    this.stop();

    var point = e.touches ? e.touches[0] : e;

    this.startX = this.x;
    this.startY = this.y;
    this.absStartX = this.x;
    this.absStartY = this.y;
    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.trigger('beforeScrollStart');
  };

  BScroll.prototype._move = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var point = e.touches ? e.touches[0] : e;
    var deltaX = point.pageX - this.pointX;
    var deltaY = point.pageY - this.pointY;

    this.pointX = point.pageX;
    this.pointY = point.pageY;

    this.distX += deltaX;
    this.distY += deltaY;

    var absDistX = Math.abs(this.distX);
    var absDistY = Math.abs(this.distY);

    var timestamp = getNow();

    // We need to move at least momentumLimitDistance pixels for the scrolling to initiate
    if (timestamp - this.endTime > this.options.momentumLimitTime && !this.moved && absDistY < this.options.momentumLimitDistance && absDistX < this.options.momentumLimitDistance) {
      return;
    }

    // If you are scrolling in one direction lock the other
    if (!this.directionLocked && !this.options.freeScroll) {
      if (absDistX > absDistY + this.options.directionLockThreshold) {
        this.directionLocked = 'h'; // lock horizontally
      } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
        this.directionLocked = 'v'; // lock vertically
      } else {
        this.directionLocked = 'n'; // no lock
      }
    }

    if (this.directionLocked === 'h') {
      if (this.options.eventPassthrough === 'vertical') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'horizontal') {
        this.initiated = false;
        return;
      }
      deltaY = 0;
    } else if (this.directionLocked === 'v') {
      if (this.options.eventPassthrough === 'horizontal') {
        e.preventDefault();
      } else if (this.options.eventPassthrough === 'vertical') {
        this.initiated = false;
        return;
      }
      deltaX = 0;
    }

    deltaX = this.hasHorizontalScroll ? deltaX : 0;
    deltaY = this.hasVerticalScroll ? deltaY : 0;
    this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.movingDirectionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    var newX = this.x + deltaX;
    var newY = this.y + deltaY;

    var top = false;
    var bottom = false;
    var left = false;
    var right = false;
    // Slow down or stop if outside of the boundaries
    var bounce = this.options.bounce;
    if (bounce !== false) {
      top = bounce.top === undefined ? true : bounce.top;
      bottom = bounce.bottom === undefined ? true : bounce.bottom;
      left = bounce.left === undefined ? true : bounce.left;
      right = bounce.right === undefined ? true : bounce.right;
    }
    if (newX > this.minScrollX || newX < this.maxScrollX) {
      if (newX > this.minScrollX && left || newX < this.maxScrollX && right) {
        newX = this.x + deltaX / 3;
      } else {
        newX = newX > this.minScrollX ? this.minScrollX : this.maxScrollX;
      }
    }
    if (newY > this.minScrollY || newY < this.maxScrollY) {
      if (newY > this.minScrollY && top || newY < this.maxScrollY && bottom) {
        newY = this.y + deltaY / 3;
      } else {
        newY = newY > this.minScrollY ? this.minScrollY : this.maxScrollY;
      }
    }

    if (!this.moved) {
      this.moved = true;
      this.trigger('scrollStart');
    }

    this._translate(newX, newY);

    if (timestamp - this.startTime > this.options.momentumLimitTime) {
      this.startTime = timestamp;
      this.startX = this.x;
      this.startY = this.y;

      if (this.options.probeType === PROBE_DEBOUNCE) {
        this.trigger('scroll', {
          x: this.x,
          y: this.y
        });
      }
    }

    if (this.options.probeType > PROBE_DEBOUNCE) {
      this.trigger('scroll', {
        x: this.x,
        y: this.y
      });
    }

    var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

    var pX = this.pointX - scrollLeft;
    var pY = this.pointY - scrollTop;

    if (pX > document.documentElement.clientWidth - this.options.momentumLimitDistance || pX < this.options.momentumLimitDistance || pY < this.options.momentumLimitDistance || pY > document.documentElement.clientHeight - this.options.momentumLimitDistance) {
      this._end(e);
    }
  };

  BScroll.prototype._end = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }
    this.initiated = false;

    if (this.options.preventDefault && !preventDefaultException(e.target, this.options.preventDefaultException)) {
      e.preventDefault();
    }
    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.trigger('touchEnd', {
      x: this.x,
      y: this.y
    });

    this.isInTransition = false;

    // ensures that the last position is rounded
    var newX = Math.round(this.x);
    var newY = Math.round(this.y);

    var deltaX = newX - this.absStartX;
    var deltaY = newY - this.absStartY;
    this.directionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0;
    this.directionY = deltaY > 0 ? DIRECTION_DOWN : deltaY < 0 ? DIRECTION_UP : 0;

    // if configure pull down refresh, check it first
    if (this.options.pullDownRefresh && this._checkPullDown()) {
      return;
    }

    // check if it is a click operation
    if (this._checkClick(e)) {
      this.trigger('scrollCancel');
      return;
    }

    // reset if we are outside of the boundaries
    if (this.resetPosition(this.options.bounceTime, ease.bounce)) {
      return;
    }

    this._translate(newX, newY);

    this.endTime = getNow();
    var duration = this.endTime - this.startTime;
    var absDistX = Math.abs(newX - this.startX);
    var absDistY = Math.abs(newY - this.startY);

    // flick
    if (this._events.flick && duration < this.options.flickLimitTime && absDistX < this.options.flickLimitDistance && absDistY < this.options.flickLimitDistance) {
      this.trigger('flick');
      return;
    }

    var time = 0;
    // start momentum animation if needed
    if (this.options.momentum && duration < this.options.momentumLimitTime && (absDistY > this.options.momentumLimitDistance || absDistX > this.options.momentumLimitDistance)) {
      var top = false;
      var bottom = false;
      var left = false;
      var right = false;
      var bounce = this.options.bounce;
      if (bounce !== false) {
        top = bounce.top === undefined ? true : bounce.top;
        bottom = bounce.bottom === undefined ? true : bounce.bottom;
        left = bounce.left === undefined ? true : bounce.left;
        right = bounce.right === undefined ? true : bounce.right;
      }
      var wrapperWidth = this.directionX === DIRECTION_RIGHT && left || this.directionX === DIRECTION_LEFT && right ? this.wrapperWidth : 0;
      var wrapperHeight = this.directionY === DIRECTION_DOWN && top || this.directionY === DIRECTION_UP && bottom ? this.wrapperHeight : 0;
      var momentumX = this.hasHorizontalScroll ? momentum(this.x, this.startX, duration, this.maxScrollX, this.minScrollX, wrapperWidth, this.options, this) : { destination: newX, duration: 0 };
      var momentumY = this.hasVerticalScroll ? momentum(this.y, this.startY, duration, this.maxScrollY, this.minScrollY, wrapperHeight, this.options, this) : { destination: newY, duration: 0 };
      newX = momentumX.destination;
      newY = momentumY.destination;
      time = Math.max(momentumX.duration, momentumY.duration);
      this.isInTransition = true;
    } else {
      if (this.options.wheel) {
        newY = this._findNearestValidWheel(newY).y;
        time = this.options.wheel.adjustTime || 400;
      }
    }

    var easing = ease.swipe;
    if (this.options.snap) {
      var snap = this._nearestSnap(newX, newY);
      this.currentPage = snap;
      time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
      newX = snap.x;
      newY = snap.y;

      this.directionX = 0;
      this.directionY = 0;
      easing = this.options.snap.easing || ease.bounce;
    }

    if (newX !== this.x || newY !== this.y) {
      // change easing function when scroller goes out of the boundaries
      if (newX > this.minScrollX || newX < this.maxScrollX || newY > this.minScrollY || newY < this.maxScrollY) {
        easing = ease.swipeBounce;
      }
      this.scrollTo(newX, newY, time, easing);
      return;
    }

    if (this.options.wheel) {
      this.selectedIndex = this._findNearestValidWheel(this.y).index;
    }

    this.trigger('scrollEnd', {
      x: this.x,
      y: this.y
    });
  };

  BScroll.prototype._checkClick = function (e) {
    // when in the process of pulling down, it should not prevent click
    var preventClick = this.stopFromTransition && !this.pulling;
    this.stopFromTransition = false;

    // we scrolled less than 15 pixels
    if (!this.moved) {
      if (this.options.wheel) {
        if (this.target && this.target.className === this.options.wheel.wheelWrapperClass) {
          var index = this._findNearestValidWheel(this.y).index;
          var _offset = Math.round((this.pointY + offsetToBody(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
          this.target = this.items[index + _offset];
        }
        var top = offset(this.target).top;
        var left = offset(this.target).left;
        top -= this.wrapperOffset.top;
        top -= Math.round(this.target.offsetHeight / 2 - this.wrapper.offsetHeight / 2) || 0;
        left -= this.wrapperOffset.left;
        left -= Math.round(this.target.offsetWidth / 2 - this.wrapper.offsetWidth / 2) || 0;

        top = this._findNearestValidWheel(top).y;
        this.scrollTo(left, top, this.options.wheel.adjustTime || 400, ease.swipe);
        return true;
      } else {
        if (!preventClick) {
          var _dblclick = this.options.dblclick;
          var dblclickTrigged = false;
          if (_dblclick && this.lastClickTime) {
            var _dblclick$delay = _dblclick.delay,
                delay = _dblclick$delay === undefined ? 300 : _dblclick$delay;

            if (getNow() - this.lastClickTime < delay) {
              dblclickTrigged = true;
              dblclick(e);
            }
          }
          if (this.options.tap) {
            tap(e, this.options.tap);
          }

          if (this.options.click && !preventDefaultException(e.target, this.options.preventDefaultException)) {
            click(e);
          }
          this.lastClickTime = dblclickTrigged ? null : getNow();
          return true;
        }
        return false;
      }
    }
    return false;
  };

  BScroll.prototype._resize = function () {
    var _this = this;

    if (!this.enabled) {
      return;
    }
    // fix a scroll problem under Android condition
    if (isAndroid) {
      this.wrapper.scrollTop = 0;
    }
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function () {
      _this.refresh();
    }, this.options.resizePolling);
  };

  BScroll.prototype._startProbe = function () {
    cancelAnimationFrame(this.probeTimer);
    this.probeTimer = requestAnimationFrame(probe);

    var me = this;

    function probe() {
      var pos = me.getComputedPosition();
      me.trigger('scroll', pos);
      if (!me.isInTransition) {
        me.trigger('scrollEnd', pos);
        return;
      }
      me.probeTimer = requestAnimationFrame(probe);
    }
  };

  BScroll.prototype._transitionTime = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this.scrollerStyle[style.transitionDuration] = time + 'ms';

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionDuration] = time + 'ms';
      }
    }

    if (this.indicators) {
      for (var _i = 0; _i < this.indicators.length; _i++) {
        this.indicators[_i].transitionTime(time);
      }
    }
  };

  BScroll.prototype._transitionTimingFunction = function (easing) {
    this.scrollerStyle[style.transitionTimingFunction] = easing;

    if (this.options.wheel) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].style[style.transitionTimingFunction] = easing;
      }
    }

    if (this.indicators) {
      for (var _i2 = 0; _i2 < this.indicators.length; _i2++) {
        this.indicators[_i2].transitionTimingFunction(easing);
      }
    }
  };

  BScroll.prototype._transitionEnd = function (e) {
    if (e.target !== this.scroller || !this.isInTransition) {
      return;
    }

    this._transitionTime();
    var needReset = !this.pulling || this.movingDirectionY === DIRECTION_UP;
    if (needReset && !this.resetPosition(this.options.bounceTime, ease.bounce)) {
      this.isInTransition = false;
      if (this.options.probeType !== PROBE_REALTIME) {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
    }
  };

  BScroll.prototype._translate = function (x, y, scale) {
    assert(!isUndef(x) && !isUndef(y), 'Translate x or y is null or undefined.');
    if (isUndef(scale)) {
      scale = this.scale;
    }
    if (this.options.useTransform) {
      this.scrollerStyle[style.transform] = 'translate(' + x + 'px,' + y + 'px) scale(' + scale + ')' + this.translateZ;
    } else {
      x = Math.round(x);
      y = Math.round(y);
      this.scrollerStyle.left = x + 'px';
      this.scrollerStyle.top = y + 'px';
    }

    if (this.options.wheel) {
      var _options$wheel$rotate = this.options.wheel.rotate,
          rotate = _options$wheel$rotate === undefined ? 25 : _options$wheel$rotate;

      for (var i = 0; i < this.items.length; i++) {
        var deg = rotate * (y / this.itemHeight + i);
        this.items[i].style[style.transform] = 'rotateX(' + deg + 'deg)';
      }
    }

    this.x = x;
    this.y = y;
    this.setScale(scale);

    if (this.indicators) {
      for (var _i3 = 0; _i3 < this.indicators.length; _i3++) {
        this.indicators[_i3].updatePosition();
      }
    }
  };

  BScroll.prototype._animate = function (destX, destY, duration, easingFn) {
    var me = this;
    var startX = this.x;
    var startY = this.y;
    var startScale = this.lastScale;
    var destScale = this.scale;
    var startTime = getNow();
    var destTime = startTime + duration;

    function step() {
      var now = getNow();

      if (now >= destTime) {
        me.isAnimating = false;
        me._translate(destX, destY, destScale);

        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });

        if (!me.pulling && !me.resetPosition(me.options.bounceTime)) {
          me.trigger('scrollEnd', {
            x: me.x,
            y: me.y
          });
        }
        return;
      }
      now = (now - startTime) / duration;
      var easing = easingFn(now);
      var newX = (destX - startX) * easing + startX;
      var newY = (destY - startY) * easing + startY;
      var newScale = (destScale - startScale) * easing + startScale;

      me._translate(newX, newY, newScale);

      if (me.isAnimating) {
        me.animateTimer = requestAnimationFrame(step);
      }

      if (me.options.probeType === PROBE_REALTIME) {
        me.trigger('scroll', {
          x: me.x,
          y: me.y
        });
      }
    }

    this.isAnimating = true;
    cancelAnimationFrame(this.animateTimer);
    step();
  };

  BScroll.prototype.scrollBy = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;

    x = this.x + x;
    y = this.y + y;

    this.scrollTo(x, y, time, easing);
  };

  BScroll.prototype.scrollTo = function (x, y) {
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ease.bounce;
    var isSilent = arguments[4];

    if (this.options.wheel) {
      y = this._findNearestValidWheel(y).y;
    }
    if (x === this.x && y === this.y) {
      return;
    }
    this.isInTransition = this.options.useTransition && time > 0 && (this.x !== x || this.y !== y);

    if (!time || this.options.useTransition) {
      this._transitionTimingFunction(easing.style);
      this._transitionTime(time);
      this._translate(x, y);

      if (time && this.options.probeType === PROBE_REALTIME) {
        this._startProbe();
      }
      if (!time && !isSilent) {
        // don't trigger resetPosition when zoom feature is open, fix #748
        if (this.options.zoom) return;
        this.trigger('scroll', {
          x: x,
          y: y
        });
        // force reflow to put everything in position
        this._reflow = document.body.offsetHeight;
        if (!this.resetPosition(this.options.bounceTime, ease.bounce)) {
          this.trigger('scrollEnd', {
            x: x,
            y: y
          });
        }
      }

      if (this.options.wheel) {
        this.selectedIndex = this._findNearestValidWheel(y).index;
      }
    } else {
      this._animate(x, y, time, easing.fn);
    }
  };

  BScroll.prototype.scrollToElement = function (el, time, offsetX, offsetY, easing) {
    if (!el) {
      return;
    }
    el = el.nodeType ? el : this.scroller.querySelector(el);

    if (this.options.wheel && !el.classList.contains(this.options.wheel.wheelItemClass)) {
      return;
    }

    var pos = offset(el);
    pos.left -= this.wrapperOffset.left;
    pos.top -= this.wrapperOffset.top;

    // if offsetX/Y are true we center the element to the screen
    if (offsetX === true) {
      offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
    }
    if (offsetY === true) {
      offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
    }

    pos.left -= offsetX || 0;
    pos.top -= offsetY || 0;
    pos.left = pos.left > this.minScrollX ? this.minScrollX : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
    pos.top = pos.top > this.minScrollY ? this.minScrollY : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;

    if (this.options.wheel) {
      pos.top = this._findNearestValidWheel(pos.top).y;
    }

    this.scrollTo(pos.left, pos.top, time, easing);
  };

  BScroll.prototype.resetPosition = function () {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var easeing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ease.bounce;

    var x = this.x;
    var roundX = Math.round(x);
    if (!this.hasHorizontalScroll || roundX > this.minScrollX) {
      x = this.minScrollX;
    } else if (roundX < this.maxScrollX) {
      x = this.maxScrollX;
    }

    var y = this.y;
    var roundY = Math.round(y);
    if (!this.hasVerticalScroll || roundY > this.minScrollY) {
      y = this.minScrollY;
    } else if (roundY < this.maxScrollY) {
      y = this.maxScrollY;
    }

    if (x === this.x && y === this.y) {
      return false;
    }

    this.scrollTo(x, y, time, easeing);

    return true;
  };

  BScroll.prototype.getComputedPosition = function () {
    var matrix = window.getComputedStyle(this.scroller, null);
    var x = void 0;
    var y = void 0;

    if (this.options.useTransform) {
      matrix = matrix[style.transform].split(')')[0].split(', ');
      x = +(matrix[12] || matrix[4]);
      y = +(matrix[13] || matrix[5]);
    } else {
      x = +matrix.left.replace(/[^-\d.]/g, '');
      y = +matrix.top.replace(/[^-\d.]/g, '');
    }

    return {
      x: x,
      y: y
    };
  };

  BScroll.prototype.stop = function () {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = false;
      cancelAnimationFrame(this.probeTimer);
      var pos = this.getComputedPosition();
      this._translate(pos.x, pos.y);
      if (this.options.wheel) {
        this.target = this.items[this._findNearestValidWheel(pos.y).index];
      } else {
        this.trigger('scrollEnd', {
          x: this.x,
          y: this.y
        });
      }
      this.stopFromTransition = true;
    } else if (!this.options.useTransition && this.isAnimating) {
      this.isAnimating = false;
      cancelAnimationFrame(this.animateTimer);
      this.trigger('scrollEnd', {
        x: this.x,
        y: this.y
      });
      this.stopFromTransition = true;
    }
  };

  BScroll.prototype.destroy = function () {
    this.destroyed = true;
    this.trigger('destroy');
    if (this.options.useTransition) {
      cancelAnimationFrame(this.probeTimer);
    } else {
      cancelAnimationFrame(this.animateTimer);
    }
    this._removeDOMEvents();
    // remove custom events
    this._events = {};
  };
}

function snapMixin(BScroll) {
  BScroll.prototype._initSnap = function () {
    var _this = this;

    this.currentPage = {};
    var snap = this.options.snap;

    if (snap.loop) {
      var children = this.scroller.children;
      if (children.length > 1) {
        prepend(children[children.length - 1].cloneNode(true), this.scroller);
        this.scroller.appendChild(children[1].cloneNode(true));
      } else {
        // Loop does not make any sense if there is only one child.
        snap.loop = false;
      }
    }

    var el = snap.el;
    if (typeof el === 'string') {
      el = this.scroller.querySelectorAll(el);
    }

    this.on('refresh', function () {
      _this.pages = [];

      if (!_this.wrapperWidth || !_this.wrapperHeight || !_this.scrollerWidth || !_this.scrollerHeight) {
        return;
      }

      var stepX = snap.stepX || _this.wrapperWidth;
      var stepY = snap.stepY || _this.wrapperHeight;

      var x = 0;
      var y = void 0;
      var cx = void 0;
      var cy = void 0;
      var i = 0;
      var l = void 0;
      var m = 0;
      var n = void 0;
      var rect = void 0;
      if (!el) {
        cx = Math.round(stepX / 2);
        cy = Math.round(stepY / 2);

        while (x > -_this.scrollerWidth) {
          _this.pages[i] = [];
          l = 0;
          y = 0;

          while (y > -_this.scrollerHeight) {
            _this.pages[i][l] = {
              x: Math.max(x, _this.maxScrollX),
              y: Math.max(y, _this.maxScrollY),
              width: stepX,
              height: stepY,
              cx: x - cx,
              cy: y - cy
            };

            y -= stepY;
            l++;
          }

          x -= stepX;
          i++;
        }
      } else {
        l = el.length;
        n = -1;

        for (; i < l; i++) {
          rect = getRect(el[i]);
          if (i === 0 || rect.left <= getRect(el[i - 1]).left) {
            m = 0;
            n++;
          }

          if (!_this.pages[m]) {
            _this.pages[m] = [];
          }

          x = Math.max(-rect.left, _this.maxScrollX);
          y = Math.max(-rect.top, _this.maxScrollY);
          cx = x - Math.round(rect.width / 2);
          cy = y - Math.round(rect.height / 2);

          _this.pages[m][n] = {
            x: x,
            y: y,
            width: rect.width,
            height: rect.height,
            cx: cx,
            cy: cy
          };

          if (x > _this.maxScrollX) {
            m++;
          }
        }
      }

      _this._checkSnapLoop();

      var initPageX = snap._loopX ? 1 : 0;
      var initPageY = snap._loopY ? 1 : 0;
      _this._goToPage(_this.currentPage.pageX || initPageX, _this.currentPage.pageY || initPageY, 0, undefined, true);

      // Update snap threshold if needed.
      var snapThreshold = snap.threshold;
      if (snapThreshold % 1 === 0) {
        _this.snapThresholdX = snapThreshold;
        _this.snapThresholdY = snapThreshold;
      } else {
        _this.snapThresholdX = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].width * snapThreshold);
        _this.snapThresholdY = Math.round(_this.pages[_this.currentPage.pageX][_this.currentPage.pageY].height * snapThreshold);
      }
    });

    this.on('scrollEnd', function () {
      if (snap.loop) {
        if (snap._loopX) {
          if (_this.currentPage.pageX === 0) {
            _this._goToPage(_this.pages.length - 2, _this.currentPage.pageY, 0, undefined, true);
          }
          if (_this.currentPage.pageX === _this.pages.length - 1) {
            _this._goToPage(1, _this.currentPage.pageY, 0, undefined, true);
          }
        } else {
          if (_this.currentPage.pageY === 0) {
            _this._goToPage(_this.currentPage.pageX, _this.pages[0].length - 2, 0, undefined, true);
          }
          if (_this.currentPage.pageY === _this.pages[0].length - 1) {
            _this._goToPage(_this.currentPage.pageX, 1, 0, undefined, true);
          }
        }
      }
    });

    if (snap.listenFlick !== false) {
      this.on('flick', function () {
        var time = snap.speed || Math.max(Math.max(Math.min(Math.abs(_this.x - _this.startX), 1000), Math.min(Math.abs(_this.y - _this.startY), 1000)), 300);

        _this._goToPage(_this.currentPage.pageX + _this.directionX, _this.currentPage.pageY + _this.directionY, time);
      });
    }

    this.on('destroy', function () {
      if (snap.loop) {
        var _children = _this.scroller.children;
        if (_children.length > 2) {
          removeChild(_this.scroller, _children[_children.length - 1]);
          removeChild(_this.scroller, _children[0]);
        }
      }
    });
  };

  BScroll.prototype._checkSnapLoop = function () {
    var snap = this.options.snap;

    if (!snap.loop || !this.pages || !this.pages.length) {
      return;
    }

    if (this.pages.length > 1) {
      snap._loopX = true;
    }
    if (this.pages[0] && this.pages[0].length > 1) {
      snap._loopY = true;
    }
    if (snap._loopX && snap._loopY) {
      warn('Loop does not support two direction at the same time.');
    }
  };

  BScroll.prototype._nearestSnap = function (x, y) {
    if (!this.pages.length) {
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    }

    var i = 0;
    // Check if we exceeded the snap threshold
    if (Math.abs(x - this.absStartX) <= this.snapThresholdX && Math.abs(y - this.absStartY) <= this.snapThresholdY) {
      return this.currentPage;
    }

    if (x > this.minScrollX) {
      x = this.minScrollX;
    } else if (x < this.maxScrollX) {
      x = this.maxScrollX;
    }

    if (y > this.minScrollY) {
      y = this.minScrollY;
    } else if (y < this.maxScrollY) {
      y = this.maxScrollY;
    }

    var l = this.pages.length;
    for (; i < l; i++) {
      if (x >= this.pages[i][0].cx) {
        x = this.pages[i][0].x;
        break;
      }
    }

    l = this.pages[i].length;

    var m = 0;
    for (; m < l; m++) {
      if (y >= this.pages[0][m].cy) {
        y = this.pages[0][m].y;
        break;
      }
    }

    if (i === this.currentPage.pageX) {
      i += this.directionX;

      if (i < 0) {
        i = 0;
      } else if (i >= this.pages.length) {
        i = this.pages.length - 1;
      }

      x = this.pages[i][0].x;
    }

    if (m === this.currentPage.pageY) {
      m += this.directionY;

      if (m < 0) {
        m = 0;
      } else if (m >= this.pages[0].length) {
        m = this.pages[0].length - 1;
      }

      y = this.pages[0][m].y;
    }

    return {
      x: x,
      y: y,
      pageX: i,
      pageY: m
    };
  };

  BScroll.prototype._goToPage = function (x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var time = arguments[2];
    var easing = arguments[3];
    var isSilent = arguments[4];

    var snap = this.options.snap;

    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    easing = easing || snap.easing || ease.bounce;

    if (x >= this.pages.length) {
      x = this.pages.length - 1;
    } else if (x < 0) {
      x = 0;
    }

    if (!this.pages[x]) {
      return;
    }

    if (y >= this.pages[x].length) {
      y = this.pages[x].length - 1;
    } else if (y < 0) {
      y = 0;
    }

    var posX = this.pages[x][y].x;
    var posY = this.pages[x][y].y;

    time = time === undefined ? snap.speed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;

    this.currentPage = {
      x: posX,
      y: posY,
      pageX: x,
      pageY: y
    };
    this.scrollTo(posX, posY, time, easing, isSilent);
  };

  BScroll.prototype.goToPage = function (x, y, time, easing) {
    var snap = this.options.snap;
    if (!snap || !this.pages || !this.pages.length) {
      return;
    }

    if (snap.loop) {
      var len = void 0;
      if (snap._loopX) {
        len = this.pages.length - 2;
        if (x >= len) {
          x = len - 1;
        } else if (x < 0) {
          x = 0;
        }
        x += 1;
      } else {
        len = this.pages[0].length - 2;
        if (y >= len) {
          y = len - 1;
        } else if (y < 0) {
          y = 0;
        }
        y += 1;
      }
    }
    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.next = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x++;
    if (x >= this.pages.length && this.hasVerticalScroll) {
      x = 0;
      y++;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.prev = function (time, easing) {
    var snap = this.options.snap;
    if (!snap) {
      return;
    }

    var x = this.currentPage.pageX;
    var y = this.currentPage.pageY;

    x--;
    if (x < 0 && this.hasVerticalScroll) {
      x = 0;
      y--;
    }

    this._goToPage(x, y, time, easing);
  };

  BScroll.prototype.getCurrentPage = function () {
    var snap = this.options.snap;
    if (!snap) {
      return null;
    }

    if (snap.loop) {
      var currentPage = void 0;
      if (snap._loopX) {
        currentPage = extend({}, this.currentPage, {
          pageX: this.currentPage.pageX - 1
        });
      } else {
        currentPage = extend({}, this.currentPage, {
          pageY: this.currentPage.pageY - 1
        });
      }
      return currentPage;
    }
    return this.currentPage;
  };
}

function wheelMixin(BScroll) {
  BScroll.prototype.wheelTo = function () {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (this.options.wheel) {
      var y = -index * this.itemHeight;
      this.scrollTo(0, y);
    }
  };

  BScroll.prototype.getSelectedIndex = function () {
    return this.options.wheel && this.selectedIndex;
  };

  BScroll.prototype._initWheel = function () {
    var wheel = this.options.wheel;
    if (!wheel.wheelWrapperClass) {
      wheel.wheelWrapperClass = 'wheel-scroll';
    }
    if (!wheel.wheelItemClass) {
      wheel.wheelItemClass = 'wheel-item';
    }
    if (!wheel.wheelDisabledItemClass) {
      wheel.wheelDisabledItemClass = 'wheel-disabled-item';
    }
    if (wheel.selectedIndex === undefined) {
      wheel.selectedIndex = 0;
    }
  };

  BScroll.prototype._findNearestValidWheel = function (y) {
    y = y > 0 ? 0 : y < this.maxScrollY ? this.maxScrollY : y;
    var wheel = this.options.wheel;
    var currentIndex = Math.abs(Math.round(-y / this.itemHeight));
    var cacheIndex = currentIndex;
    var items = this.items;
    // Impersonation web native select
    // first, check whether there is a enable item whose index is smaller than currentIndex
    // then, check whether there is a enable item whose index is bigger than currentIndex
    // otherwise, there are all disabled items, just keep currentIndex unchange
    while (currentIndex >= 0) {
      if (items[currentIndex].className.indexOf(wheel.wheelDisabledItemClass) === -1) {
        break;
      }
      currentIndex--;
    }

    if (currentIndex < 0) {
      currentIndex = cacheIndex;
      while (currentIndex <= items.length - 1) {
        if (items[currentIndex].className.indexOf(wheel.wheelDisabledItemClass) === -1) {
          break;
        }
        currentIndex++;
      }
    }

    // keep it unchange when all the items are disabled
    if (currentIndex === items.length) {
      currentIndex = cacheIndex;
    }
    // when all the items are disabled, this.selectedIndex should always be -1
    return {
      index: this.wheelItemsAllDisabled ? -1 : currentIndex,
      y: -currentIndex * this.itemHeight
    };
  };

  BScroll.prototype._checkWheelAllDisabled = function () {
    var wheel = this.options.wheel;
    var items = this.items;
    this.wheelItemsAllDisabled = true;
    for (var i = 0; i < items.length; i++) {
      if (items[i].className.indexOf(wheel.wheelDisabledItemClass) === -1) {
        this.wheelItemsAllDisabled = false;
        break;
      }
    }
  };
}

var INDICATOR_MIN_LEN = 8;

function scrollbarMixin(BScroll) {
  BScroll.prototype._initScrollbar = function () {
    var _this = this;

    var _options$scrollbar = this.options.scrollbar,
        _options$scrollbar$fa = _options$scrollbar.fade,
        fade = _options$scrollbar$fa === undefined ? true : _options$scrollbar$fa,
        _options$scrollbar$in = _options$scrollbar.interactive,
        interactive = _options$scrollbar$in === undefined ? false : _options$scrollbar$in;

    this.indicators = [];
    var indicator = void 0;

    if (this.options.scrollX) {
      indicator = {
        el: createScrollbar('horizontal'),
        direction: 'horizontal',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);

      this.indicators.push(new Indicator(this, indicator));
    }

    if (this.options.scrollY) {
      indicator = {
        el: createScrollbar('vertical'),
        direction: 'vertical',
        fade: fade,
        interactive: interactive
      };
      this._insertScrollBar(indicator.el);
      this.indicators.push(new Indicator(this, indicator));
    }

    this.on('refresh', function () {
      for (var i = 0; i < _this.indicators.length; i++) {
        _this.indicators[i].refresh();
      }
    });

    if (fade) {
      this.on('scrollEnd', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollCancel', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade();
        }
      });

      this.on('scrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true);
        }
      });

      this.on('beforeScrollStart', function () {
        for (var i = 0; i < _this.indicators.length; i++) {
          _this.indicators[i].fade(true, true);
        }
      });
    }

    this.on('destroy', function () {
      _this._removeScrollBars();
    });
  };

  BScroll.prototype._insertScrollBar = function (scrollbar) {
    this.wrapper.appendChild(scrollbar);
  };

  BScroll.prototype._removeScrollBars = function () {
    for (var i = 0; i < this.indicators.length; i++) {
      this.indicators[i].destroy();
    }
  };
}

function createScrollbar(direction) {
  var scrollbar = document.createElement('div');
  var indicator = document.createElement('div');

  scrollbar.style.cssText = 'position:absolute;z-index:9999;pointerEvents:none';
  indicator.style.cssText = 'box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;';

  indicator.className = 'bscroll-indicator';

  if (direction === 'horizontal') {
    scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
    indicator.style.height = '100%';
    scrollbar.className = 'bscroll-horizontal-scrollbar';
  } else {
    scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
    indicator.style.width = '100%';
    scrollbar.className = 'bscroll-vertical-scrollbar';
  }

  scrollbar.style.cssText += ';overflow:hidden';
  scrollbar.appendChild(indicator);

  return scrollbar;
}

function Indicator(scroller, options) {
  this.wrapper = options.el;
  this.wrapperStyle = this.wrapper.style;
  this.indicator = this.wrapper.children[0];
  this.indicatorStyle = this.indicator.style;
  this.scroller = scroller;
  this.direction = options.direction;
  if (options.fade) {
    this.visible = 0;
    this.wrapperStyle.opacity = '0';
  } else {
    this.visible = 1;
  }

  this.sizeRatioX = 1;
  this.sizeRatioY = 1;
  this.maxPosX = 0;
  this.maxPosY = 0;
  this.x = 0;
  this.y = 0;

  if (options.interactive) {
    this._addDOMEvents();
  }
}

Indicator.prototype.handleEvent = function (e) {
  switch (e.type) {
    case 'touchstart':
    case 'mousedown':
      this._start(e);
      break;
    case 'touchmove':
    case 'mousemove':
      this._move(e);
      break;
    case 'touchend':
    case 'mouseup':
    case 'touchcancel':
    case 'mousecancel':
      this._end(e);
      break;
  }
};

Indicator.prototype.refresh = function () {
  if (this._shouldShow()) {
    this.transitionTime();
    this._calculate();
    this.updatePosition();
  }
};

Indicator.prototype.fade = function (visible, hold) {
  var _this2 = this;

  if (hold && !this.visible) {
    return;
  }

  var time = visible ? 250 : 500;

  visible = visible ? '1' : '0';

  this.wrapperStyle[style.transitionDuration] = time + 'ms';

  clearTimeout(this.fadeTimeout);
  this.fadeTimeout = setTimeout(function () {
    _this2.wrapperStyle.opacity = visible;
    _this2.visible = +visible;
  }, 0);
};

Indicator.prototype.updatePosition = function () {
  if (this.direction === 'vertical') {
    var y = Math.round(this.sizeRatioY * this.scroller.y);

    if (y < 0) {
      this.transitionTime(500);
      var height = Math.max(this.indicatorHeight + y * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = height + 'px';
      y = 0;
    } else if (y > this.maxPosY) {
      this.transitionTime(500);
      var _height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.height = _height + 'px';
      y = this.maxPosY + this.indicatorHeight - _height;
    } else {
      this.indicatorStyle.height = this.indicatorHeight + 'px';
    }
    this.y = y;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateY(' + y + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.top = y + 'px';
    }
  } else {
    var x = Math.round(this.sizeRatioX * this.scroller.x);

    if (x < 0) {
      this.transitionTime(500);
      var width = Math.max(this.indicatorWidth + x * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = width + 'px';
      x = 0;
    } else if (x > this.maxPosX) {
      this.transitionTime(500);
      var _width = Math.max(this.indicatorWidth - (x - this.maxPosX) * 3, INDICATOR_MIN_LEN);
      this.indicatorStyle.width = _width + 'px';
      x = this.maxPosX + this.indicatorWidth - _width;
    } else {
      this.indicatorStyle.width = this.indicatorWidth + 'px';
    }

    this.x = x;

    if (this.scroller.options.useTransform) {
      this.indicatorStyle[style.transform] = 'translateX(' + x + 'px)' + this.scroller.translateZ;
    } else {
      this.indicatorStyle.left = x + 'px';
    }
  }
};

Indicator.prototype.transitionTime = function () {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  this.indicatorStyle[style.transitionDuration] = time + 'ms';
};

Indicator.prototype.transitionTimingFunction = function (easing) {
  this.indicatorStyle[style.transitionTimingFunction] = easing;
};

Indicator.prototype.destroy = function () {
  this._removeDOMEvents();
  this.wrapper.parentNode.removeChild(this.wrapper);
};

Indicator.prototype._start = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  this.transitionTime();

  this.initiated = true;
  this.moved = false;
  this.lastPointX = point.pageX;
  this.lastPointY = point.pageY;

  this.startTime = getNow();

  this._handleMoveEvents(addEvent);
  this.scroller.trigger('beforeScrollStart');
};

Indicator.prototype._move = function (e) {
  var point = e.touches ? e.touches[0] : e;

  e.preventDefault();
  e.stopPropagation();

  if (!this.moved) {
    this.scroller.trigger('scrollStart');
  }

  this.moved = true;

  var deltaX = point.pageX - this.lastPointX;
  this.lastPointX = point.pageX;

  var deltaY = point.pageY - this.lastPointY;
  this.lastPointY = point.pageY;

  var newX = this.x + deltaX;
  var newY = this.y + deltaY;

  this._pos(newX, newY);
};

Indicator.prototype._end = function (e) {
  if (!this.initiated) {
    return;
  }
  this.initiated = false;

  e.preventDefault();
  e.stopPropagation();

  this._handleMoveEvents(removeEvent);

  var snapOption = this.scroller.options.snap;
  if (snapOption) {
    var speed = snapOption.speed,
        _snapOption$easing = snapOption.easing,
        easing = _snapOption$easing === undefined ? ease.bounce : _snapOption$easing;

    var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);

    var time = speed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);

    if (this.scroller.x !== snap.x || this.scroller.y !== snap.y) {
      this.scroller.directionX = 0;
      this.scroller.directionY = 0;
      this.scroller.currentPage = snap;
      this.scroller.scrollTo(snap.x, snap.y, time, easing);
    }
  }

  if (this.moved) {
    this.scroller.trigger('scrollEnd', {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};

Indicator.prototype._pos = function (x, y) {
  if (x < 0) {
    x = 0;
  } else if (x > this.maxPosX) {
    x = this.maxPosX;
  }

  if (y < 0) {
    y = 0;
  } else if (y > this.maxPosY) {
    y = this.maxPosY;
  }

  x = Math.round(x / this.sizeRatioX);
  y = Math.round(y / this.sizeRatioY);

  this.scroller.scrollTo(x, y);
  this.scroller.trigger('scroll', {
    x: this.scroller.x,
    y: this.scroller.y
  });
};

Indicator.prototype._shouldShow = function () {
  if (this.direction === 'vertical' && this.scroller.hasVerticalScroll || this.direction === 'horizontal' && this.scroller.hasHorizontalScroll) {
    this.wrapper.style.display = '';
    return true;
  }
  this.wrapper.style.display = 'none';
  return false;
};

Indicator.prototype._calculate = function () {
  if (this.direction === 'vertical') {
    var wrapperHeight = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(wrapperHeight * wrapperHeight / (this.scroller.scrollerHeight || wrapperHeight || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.height = this.indicatorHeight + 'px';

    this.maxPosY = wrapperHeight - this.indicatorHeight;

    this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var wrapperWidth = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(wrapperWidth * wrapperWidth / (this.scroller.scrollerWidth || wrapperWidth || 1)), INDICATOR_MIN_LEN);
    this.indicatorStyle.width = this.indicatorWidth + 'px';

    this.maxPosX = wrapperWidth - this.indicatorWidth;

    this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};

Indicator.prototype._addDOMEvents = function () {
  var eventOperation = addEvent;
  this._handleDOMEvents(eventOperation);
};

Indicator.prototype._removeDOMEvents = function () {
  var eventOperation = removeEvent;
  this._handleDOMEvents(eventOperation);
  this._handleMoveEvents(eventOperation);
};

Indicator.prototype._handleMoveEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(window, 'touchmove', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(window, 'mousemove', this);
  }
};

Indicator.prototype._handleDOMEvents = function (eventOperation) {
  if (!this.scroller.options.disableTouch) {
    eventOperation(this.indicator, 'touchstart', this);
    eventOperation(window, 'touchend', this);
  }
  if (!this.scroller.options.disableMouse) {
    eventOperation(this.indicator, 'mousedown', this);
    eventOperation(window, 'mouseup', this);
  }
};

function pullDownMixin(BScroll) {
  BScroll.prototype._initPullDown = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;
  };

  BScroll.prototype._checkPullDown = function () {
    var _options$pullDownRefr = this.options.pullDownRefresh,
        _options$pullDownRefr2 = _options$pullDownRefr.threshold,
        threshold = _options$pullDownRefr2 === undefined ? 90 : _options$pullDownRefr2,
        _options$pullDownRefr3 = _options$pullDownRefr.stop,
        stop = _options$pullDownRefr3 === undefined ? 40 : _options$pullDownRefr3;

    // check if a real pull down action

    if (this.directionY !== DIRECTION_DOWN || this.y < threshold) {
      return false;
    }

    if (!this.pulling) {
      this.pulling = true;
      this.trigger('pullingDown');
    }
    this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);

    return this.pulling;
  };

  BScroll.prototype.finishPullDown = function () {
    this.pulling = false;
    this.resetPosition(this.options.bounceTime, ease.bounce);
  };

  BScroll.prototype.openPullDown = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullDownRefresh = config;
    this._initPullDown();
  };

  BScroll.prototype.closePullDown = function () {
    this.options.pullDownRefresh = false;
  };

  BScroll.prototype.autoPullDownRefresh = function () {
    var _options$pullDownRefr4 = this.options.pullDownRefresh,
        _options$pullDownRefr5 = _options$pullDownRefr4.threshold,
        threshold = _options$pullDownRefr5 === undefined ? 90 : _options$pullDownRefr5,
        _options$pullDownRefr6 = _options$pullDownRefr4.stop,
        stop = _options$pullDownRefr6 === undefined ? 40 : _options$pullDownRefr6;


    if (this.pulling) {
      return;
    }
    this.pulling = true;

    this.scrollTo(this.x, threshold);
    this.trigger('pullingDown');
    this.scrollTo(this.x, stop, this.options.bounceTime, ease.bounce);
  };
}

function pullUpMixin(BScroll) {
  BScroll.prototype._initPullUp = function () {
    // must watch scroll in real time
    this.options.probeType = PROBE_REALTIME;

    this.pullupWatching = false;
    this._watchPullUp();
  };

  BScroll.prototype._watchPullUp = function () {
    if (this.pullupWatching) {
      return;
    }
    this.pullupWatching = true;
    this.on('scroll', this._checkToEnd);
  };

  BScroll.prototype._checkToEnd = function (pos) {
    var _this = this;

    var _options$pullUpLoad$t = this.options.pullUpLoad.threshold,
        threshold = _options$pullUpLoad$t === undefined ? 0 : _options$pullUpLoad$t;

    if (this.movingDirectionY === DIRECTION_UP && pos.y <= this.maxScrollY + threshold) {
      // reset pullupWatching status after scroll end.
      this.once('scrollEnd', function () {
        _this.pullupWatching = false;
      });
      this.trigger('pullingUp');
      this.off('scroll', this._checkToEnd);
    }
  };

  BScroll.prototype.finishPullUp = function () {
    var _this2 = this;

    if (this.pullupWatching) {
      this.once('scrollEnd', function () {
        _this2._watchPullUp();
      });
    } else {
      this._watchPullUp();
    }
  };

  BScroll.prototype.openPullUp = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    this.options.pullUpLoad = config;
    this._initPullUp();
  };

  BScroll.prototype.closePullUp = function () {
    this.options.pullUpLoad = false;
    if (!this.pullupWatching) {
      return;
    }
    this.pullupWatching = false;
    this.off('scroll', this._checkToEnd);
  };
}

function mouseWheelMixin(BScroll) {
  BScroll.prototype._initMouseWheel = function () {
    var _this = this;

    this._handleMouseWheelEvent(addEvent);

    this.on('destroy', function () {
      clearTimeout(_this.mouseWheelTimer);
      clearTimeout(_this.mouseWheelEndTimer);
      _this._handleMouseWheelEvent(removeEvent);
    });

    this.firstWheelOpreation = true;
  };

  BScroll.prototype._handleMouseWheelEvent = function (eventOperation) {
    eventOperation(this.wrapper, 'wheel', this);
    eventOperation(this.wrapper, 'mousewheel', this);
    eventOperation(this.wrapper, 'DOMMouseScroll', this);
  };

  BScroll.prototype._onMouseWheel = function (e) {
    var _this2 = this;

    if (!this.enabled) {
      return;
    }
    e.preventDefault();

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    if (this.firstWheelOpreation) {
      this.trigger('scrollStart');
    }
    this.firstWheelOpreation = false;

    var _options$mouseWheel = this.options.mouseWheel,
        _options$mouseWheel$s = _options$mouseWheel.speed,
        speed = _options$mouseWheel$s === undefined ? 20 : _options$mouseWheel$s,
        _options$mouseWheel$i = _options$mouseWheel.invert,
        invert = _options$mouseWheel$i === undefined ? false : _options$mouseWheel$i,
        _options$mouseWheel$e = _options$mouseWheel.easeTime,
        easeTime = _options$mouseWheel$e === undefined ? 300 : _options$mouseWheel$e;


    clearTimeout(this.mouseWheelTimer);
    this.mouseWheelTimer = setTimeout(function () {
      if (!_this2.options.snap && !easeTime) {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }
      _this2.firstWheelOpreation = true;
    }, 400);

    var wheelDeltaX = void 0;
    var wheelDeltaY = void 0;

    switch (true) {
      case 'deltaX' in e:
        if (e.deltaMode === 1) {
          wheelDeltaX = -e.deltaX * speed;
          wheelDeltaY = -e.deltaY * speed;
        } else {
          wheelDeltaX = -e.deltaX;
          wheelDeltaY = -e.deltaY;
        }
        break;
      case 'wheelDeltaX' in e:
        wheelDeltaX = e.wheelDeltaX / 120 * speed;
        wheelDeltaY = e.wheelDeltaY / 120 * speed;
        break;
      case 'wheelDelta' in e:
        wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * speed;
        break;
      case 'detail' in e:
        wheelDeltaX = wheelDeltaY = -e.detail / 3 * speed;
        break;
      default:
        return;
    }

    var direction = invert ? -1 : 1;
    wheelDeltaX *= direction;
    wheelDeltaY *= direction;

    if (!this.hasVerticalScroll) {
      wheelDeltaX = wheelDeltaY;
      wheelDeltaY = 0;
    }

    var newX = void 0;
    var newY = void 0;
    if (this.options.snap) {
      newX = this.currentPage.pageX;
      newY = this.currentPage.pageY;

      if (wheelDeltaX > 0) {
        newX--;
      } else if (wheelDeltaX < 0) {
        newX++;
      }

      if (wheelDeltaY > 0) {
        newY--;
      } else if (wheelDeltaY < 0) {
        newY++;
      }

      this._goToPage(newX, newY);
      return;
    }

    newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
    newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);

    this.movingDirectionX = this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
    this.movingDirectionY = this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;

    if (newX > this.minScrollX) {
      newX = this.minScrollX;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > this.minScrollY) {
      newY = this.minScrollY;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    var needTriggerEnd = this.y === newY;
    this.scrollTo(newX, newY, easeTime, ease.swipe);
    this.trigger('scroll', {
      x: this.x,
      y: this.y
    });
    clearTimeout(this.mouseWheelEndTimer);
    if (needTriggerEnd) {
      this.mouseWheelEndTimer = setTimeout(function () {
        _this2.trigger('scrollEnd', {
          x: _this2.x,
          y: _this2.y
        });
      }, easeTime);
    }
  };
}

function zoomMixin(BScroll) {
  BScroll.prototype._initZoom = function () {
    var _options$zoom = this.options.zoom,
        _options$zoom$start = _options$zoom.start,
        start = _options$zoom$start === undefined ? 1 : _options$zoom$start,
        _options$zoom$min = _options$zoom.min,
        min = _options$zoom$min === undefined ? 1 : _options$zoom$min,
        _options$zoom$max = _options$zoom.max,
        max = _options$zoom$max === undefined ? 4 : _options$zoom$max;

    this.scale = Math.min(Math.max(start, min), max);
    this.setScale(this.scale);
    this.scrollerStyle[style.transformOrigin] = '0 0';
  };

  BScroll.prototype._zoomTo = function (scale, originX, originY, startScale) {
    this.scaled = true;

    var lastScale = scale / (startScale || this.scale);
    this.setScale(scale);

    this.refresh();

    var newX = Math.round(this.startX - (originX - this.relativeX) * (lastScale - 1));
    var newY = Math.round(this.startY - (originY - this.relativeY) * (lastScale - 1));

    if (newX > this.minScrollX) {
      newX = this.minScrollX;
    } else if (newX < this.maxScrollX) {
      newX = this.maxScrollX;
    }

    if (newY > this.minScrollY) {
      newY = this.minScrollY;
    } else if (newY < this.maxScrollY) {
      newY = this.maxScrollY;
    }

    if (this.x !== newX || this.y !== newY) {
      this.scrollTo(newX, newY, this.options.bounceTime);
    }

    this.scaled = false;
  };

  BScroll.prototype.zoomTo = function (scale, x, y) {
    var _offsetToBody = offsetToBody(this.wrapper),
        left = _offsetToBody.left,
        top = _offsetToBody.top;

    var originX = x + left - this.x;
    var originY = y + top - this.y;
    this._zoomTo(scale, originX, originY);
  };

  BScroll.prototype._zoomStart = function (e) {
    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);

    this.startDistance = getDistance(deltaX, deltaY);
    this.startScale = this.scale;

    var _offsetToBody2 = offsetToBody(this.wrapper),
        left = _offsetToBody2.left,
        top = _offsetToBody2.top;

    this.originX = Math.abs(firstFinger.pageX + secondFinger.pageX) / 2 + left - this.x;
    this.originY = Math.abs(firstFinger.pageY + secondFinger.pageY) / 2 + top - this.y;

    this.trigger('zoomStart');
  };

  BScroll.prototype._zoom = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    var firstFinger = e.touches[0];
    var secondFinger = e.touches[1];
    var deltaX = Math.abs(firstFinger.pageX - secondFinger.pageX);
    var deltaY = Math.abs(firstFinger.pageY - secondFinger.pageY);
    var distance = getDistance(deltaX, deltaY);
    var scale = distance / this.startDistance * this.startScale;

    this.scaled = true;

    var _options$zoom2 = this.options.zoom,
        _options$zoom2$min = _options$zoom2.min,
        min = _options$zoom2$min === undefined ? 1 : _options$zoom2$min,
        _options$zoom2$max = _options$zoom2.max,
        max = _options$zoom2$max === undefined ? 4 : _options$zoom2$max;


    if (scale < min) {
      scale = 0.5 * min * Math.pow(2.0, scale / min);
    } else if (scale > max) {
      scale = 2.0 * max * Math.pow(0.5, max / scale);
    }

    var lastScale = scale / this.startScale;

    var x = this.startX - (this.originX - this.relativeX) * (lastScale - 1);
    var y = this.startY - (this.originY - this.relativeY) * (lastScale - 1);

    this.setScale(scale);

    this.scrollTo(x, y, 0);
  };

  BScroll.prototype._zoomEnd = function (e) {
    if (!this.enabled || this.destroyed || eventType[e.type] !== this.initiated) {
      return;
    }

    if (this.options.preventDefault) {
      e.preventDefault();
    }

    if (this.options.stopPropagation) {
      e.stopPropagation();
    }

    this.isInTransition = false;
    this.isAnimating = false;
    this.initiated = 0;

    var _options$zoom3 = this.options.zoom,
        _options$zoom3$min = _options$zoom3.min,
        min = _options$zoom3$min === undefined ? 1 : _options$zoom3$min,
        _options$zoom3$max = _options$zoom3.max,
        max = _options$zoom3$max === undefined ? 4 : _options$zoom3$max;


    var scale = this.scale > max ? max : this.scale < min ? min : this.scale;

    this._zoomTo(scale, this.originX, this.originY, this.startScale);

    this.trigger('zoomEnd');
  };
}

// import { ease } from '../util/ease'

// Number of items to instantiate beyond current view in the scroll direction.
var RUNWAY_ITEMS = 30;

// Number of items to instantiate beyond current view in the opposite direction.
var RUNWAY_ITEMS_OPPOSITE = 10;

// The animation interval (in ms) for fading in content from tombstones.
var ANIMATION_DURATION_MS = 200;

// The number of pixels of default additional length to allow scrolling to.
var DEFAULT_SCROLL_RUNWAY = 2000;

function infiniteMixin(BScroll) {
  BScroll.prototype._initInfinite = function () {
    this.options.probeType = 3;
    this.maxScrollY = -DEFAULT_SCROLL_RUNWAY;
    this.infiniteScroller = new InfiniteScroller(this, this.options.infinity);
  };
}

function isTombstoneNode(node) {
  if (node && node.classList) {
    return node.classList.contains('tombstone');
  }
}

function InfiniteScroller(scroller, options) {
  var _this = this;

  this.options = options;
  assert(typeof this.options.createTombstone === 'function', 'Infinite scroll need createTombstone Function to create tombstone');

  assert(typeof this.options.fetch === 'function', 'Infinite scroll need fetch Function to fetch new data.');

  assert(typeof this.options.render === 'function', 'Infinite scroll need render Function to render each item.');

  this.firstAttachedItem = 0;
  this.lastAttachedItem = 0;

  this.anchorScrollTop = 0;
  this.anchorItem = {
    index: 0,
    offset: 0
  };
  this.tombstoneHeight = 0;
  this.tombstoneWidth = 0;
  this.tombstones = [];
  this.tombstonesAnimationHandlers = [];

  this.items = [];
  this.loadedItems = 0;
  this.requestInProgress = false;
  this.hasMore = true;

  this.scroller = scroller;
  this.wrapperEl = this.scroller.wrapper;
  this.scrollerEl = this.scroller.scroller;

  this.scroller.on('resize', function () {
    _this.onResize();
  });
  this.scroller.on('destroy', function () {
    _this.destroy();
  });

  // wait scroll core init
  this._onResizeHandler = setTimeout(function () {
    _this.onResize();

    // must wait tombstoneHeight has size
    _this.scroller.on('scroll', function () {
      _this.onScroll();
    });
  });
}

InfiniteScroller.prototype.destroy = function () {
  var _this2 = this;

  // In extreme scene, destroy is triggered before _onResizeHandler
  clearTimeout(this._onResizeHandler);
  this.tombstonesAnimationHandlers.forEach(function (handler) {
    clearTimeout(handler);
  });
  this.tombstonesAnimationHandlers = null;
  this.items.forEach(function (item) {
    if (item.node) {
      _this2.scrollerEl.removeChild(item.node);
      item.node = null;
    }
  });
  this.scroller.infiniteScroller = null;
  this.scroller = null;
  this.wrapperEl = null;
  this.scrollerEl = null;
  this.items = null;
  this.tombstones = null;
};

InfiniteScroller.prototype.onScroll = function () {
  var scrollTop = -this.scroller.y;
  var delta = scrollTop - this.anchorScrollTop;
  if (scrollTop === 0) {
    this.anchorItem = {
      index: 0,
      offset: 0
    };
  } else {
    this.anchorItem = this._calculateAnchoredItem(this.anchorItem, delta);
  }

  this.anchorScrollTop = scrollTop;
  var lastScreenItem = this._calculateAnchoredItem(this.anchorItem, this.scroller.wrapperHeight);

  var start = this.anchorItem.index;
  var end = lastScreenItem.index;
  if (delta < 0) {
    start -= RUNWAY_ITEMS;
    end += RUNWAY_ITEMS_OPPOSITE;
  } else {
    start -= RUNWAY_ITEMS_OPPOSITE;
    end += RUNWAY_ITEMS;
  }
  this.fill(start, end);
  this.maybeRequestContent();
};

InfiniteScroller.prototype.onResize = function () {
  var tombstone = this.options.createTombstone();
  tombstone.style.position = 'absolute';
  this.scrollerEl.appendChild(tombstone);
  tombstone.style.display = '';
  this.tombstoneHeight = tombstone.offsetHeight;
  this.tombstoneWidth = tombstone.offsetWidth;
  this.scrollerEl.removeChild(tombstone);

  for (var i = 0; i < this.items.length; i++) {
    this.items[i].height = this.items[i].width = 0;
  }

  this.onScroll();
};

InfiniteScroller.prototype.fill = function (start, end) {
  this.firstAttachedItem = Math.max(0, start);
  if (!this.hasMore) {
    end = Math.min(end, this.items.length);
  }
  this.lastAttachedItem = end;
  this.attachContent();
};

InfiniteScroller.prototype.maybeRequestContent = function () {
  var _this3 = this;

  if (this.requestInProgress || !this.hasMore) {
    return;
  }
  var itemsNeeded = this.lastAttachedItem - this.loadedItems;
  if (itemsNeeded <= 0) {
    return;
  }
  this.requestInProgress = true;
  this.options.fetch(itemsNeeded).then(function (items) {
    _this3.requestInProgress = false;
    if (items) {
      _this3.addContent(items);
    } else {
      _this3.hasMore = false;
      var tombstoneLen = _this3._removeTombstones();
      var curPos = 0;
      if (_this3.anchorItem.index <= _this3.items.length) {
        curPos = _this3._fixScrollPosition();
        _this3._setupAnimations({}, curPos);
        _this3.scroller.resetPosition(_this3.scroller.options.bounceTime);
      } else {
        _this3.anchorItem.index -= tombstoneLen;
        curPos = _this3._fixScrollPosition();
        _this3._setupAnimations({}, curPos);
        _this3.scroller.stop();
        _this3.scroller.resetPosition();
        _this3.onScroll();
      }
    }
  });
};

InfiniteScroller.prototype.addContent = function (items) {
  for (var i = 0; i < items.length; i++) {
    if (this.items.length <= this.loadedItems) {
      this._addItem();
    }
    this.items[this.loadedItems++].data = items[i];
  }
  this.attachContent();
  this.maybeRequestContent();
};

InfiniteScroller.prototype.attachContent = function () {
  var unusedNodes = this._collectUnusedNodes();
  var tombstoneAnimations = this._createDOMNodes(unusedNodes);
  this._cleanupUnusedNodes(unusedNodes);
  this._cacheNodeSize();
  var curPos = this._fixScrollPosition();
  this._setupAnimations(tombstoneAnimations, curPos);
};

InfiniteScroller.prototype.resetMore = function () {
  this.hasMore = true;
};

InfiniteScroller.prototype._removeTombstones = function () {
  var markIndex = void 0;
  var tombstoneLen = 0;
  var itemLen = this.items.length;
  for (var i = 0; i < itemLen; i++) {
    var currentNode = this.items[i].node;
    var currentData = this.items[i].data;
    if ((!currentNode || isTombstoneNode(currentNode)) && !currentData) {
      // 0 should be excluded
      if (markIndex === void 0) {
        markIndex = i;
      }
      if (currentNode) {
        this.scrollerEl.removeChild(currentNode);
      }
    }
  }
  tombstoneLen = itemLen - markIndex;
  this.items.splice(markIndex);
  this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length);
  return tombstoneLen;
};

InfiniteScroller.prototype._collectUnusedNodes = function () {
  var unusedNodes = [];
  for (var i = 0; i < this.items.length; i++) {
    // Skip the items which should be visible.
    if (i === this.firstAttachedItem) {
      i = this.lastAttachedItem - 1;
      continue;
    }
    var currentNode = this.items[i].node;
    if (currentNode) {
      if (isTombstoneNode(currentNode)) {
        // Cache tombstones for reuse
        this.tombstones.push(currentNode);
        this.tombstones[this.tombstones.length - 1].style.display = 'none';
      } else {
        unusedNodes.push(currentNode);
      }
    }
    this.items[i].node = null;
  }
  return unusedNodes;
};

InfiniteScroller.prototype._createDOMNodes = function (unusedNodes) {
  var tombstoneAnimations = {};
  for (var i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    while (this.items.length <= i) {
      this._addItem();
    }
    var currentNode = this.items[i].node;
    var currentData = this.items[i].data;
    if (currentNode) {
      if (isTombstoneNode(currentNode) && currentData) {
        currentNode.style.zIndex = 1;
        tombstoneAnimations[i] = [currentNode, this.items[i].top - this.anchorScrollTop];
        this.items[i].node = null;
      } else {
        continue;
      }
    }
    var node = currentData ? this.options.render(currentData, unusedNodes.pop()) : this._getTombStone();
    node.style.position = 'absolute';
    this.items[i].top = -1;
    this.scrollerEl.appendChild(node);
    this.items[i].node = node;
  }
  return tombstoneAnimations;
};

InfiniteScroller.prototype._cleanupUnusedNodes = function (unusedNodes) {
  while (unusedNodes.length) {
    this.scrollerEl.removeChild(unusedNodes.pop());
  }
};

InfiniteScroller.prototype._cacheNodeSize = function () {
  for (var i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    var item = this.items[i];
    // Only cache the height if we have the real contents, not a placeholder.
    if (item.data && !item.height) {
      var isTombstone = isTombstoneNode(item.node);
      item.height = isTombstone ? this.tombstoneHeight : item.node.offsetHeight;
      item.width = isTombstone ? this.tombstoneWidth : item.node.offsetWidth;
    }
  }
};

InfiniteScroller.prototype._fixScrollPosition = function () {
  this.anchorScrollTop = 0;
  for (var _i = 0; _i < this.anchorItem.index; _i++) {
    this.anchorScrollTop += this.items[_i].height || this.tombstoneHeight;
  }
  this.anchorScrollTop += this.anchorItem.offset;

  // Position all nodes.
  var curPos = this.anchorScrollTop - this.anchorItem.offset;
  var i = this.anchorItem.index;
  while (i > this.firstAttachedItem) {
    curPos -= this.items[i - 1].height || this.tombstoneHeight;
    i--;
  }

  return curPos;
};

InfiniteScroller.prototype._setupAnimations = function (tombstoneAnimations, curPos) {
  var _this4 = this;

  for (var i in tombstoneAnimations) {
    var animation = tombstoneAnimations[i];
    this.items[i].node.style[style.transform] = 'translateY(' + (this.anchorScrollTop + animation[1]) + 'px) scale(' + this.tombstoneWidth / this.items[i].width + ', ' + this.tombstoneHeight / this.items[i].height + ')';
    // Call offsetTop on the nodes to be animated to force them to apply current transforms.
    /* eslint-disable no-unused-expressions */
    this.items[i].node.offsetTop;
    animation[0].offsetTop;
    this.items[i].node.style[style.transition] = cssVendor + 'transform ' + ANIMATION_DURATION_MS + 'ms';
  }

  for (var _i2 = this.firstAttachedItem; _i2 < this.lastAttachedItem; _i2++) {
    var _animation = tombstoneAnimations[_i2];
    if (_animation) {
      var tombstoneNode = _animation[0];
      tombstoneNode.style[style.transition] = cssVendor + 'transform ' + ANIMATION_DURATION_MS + 'ms, opacity ' + ANIMATION_DURATION_MS + 'ms';
      tombstoneNode.style[style.transform] = 'translateY(' + curPos + 'px) scale(' + this.items[_i2].width / this.tombstoneWidth + ', ' + this.items[_i2].height / this.tombstoneHeight + ')';
      tombstoneNode.style.opacity = 0;
    }
    if (curPos !== this.items[_i2].top) {
      if (!_animation) {
        this.items[_i2].node.style[style.transition] = '';
      }
      this.items[_i2].node.style[style.transform] = 'translateY(' + curPos + 'px)';
    }
    this.items[_i2].top = curPos;
    curPos += this.items[_i2].height || this.tombstoneHeight;
  }

  this.scroller.maxScrollY = -(curPos - this.scroller.wrapperHeight + (this.hasMore ? DEFAULT_SCROLL_RUNWAY : 0));

  var tombstoneAnimationsHandler = setTimeout(function () {
    for (var _i3 in tombstoneAnimations) {
      var _animation2 = tombstoneAnimations[_i3];
      _animation2[0].style.display = 'none';
      // Tombstone can be recycled now.
      _this4.tombstones.push(_animation2[0]);
    }
  }, ANIMATION_DURATION_MS);

  this.tombstonesAnimationHandlers.push(tombstoneAnimationsHandler);
};

InfiniteScroller.prototype._getTombStone = function () {
  var tombstone = this.tombstones.pop();
  if (tombstone) {
    tombstone.style.display = '';
    tombstone.style.opacity = 1;
    tombstone.style[style.transform] = '';
    tombstone.style[style.transition] = '';
    return tombstone;
  }
  return this.options.createTombstone();
};

InfiniteScroller.prototype._addItem = function () {
  this.items.push({
    data: null,
    node: null,
    height: 0,
    width: 0,
    top: 0
  });
};

InfiniteScroller.prototype._calculateAnchoredItem = function (initialAnchor, delta) {
  if (delta === 0) {
    return initialAnchor;
  }
  var i = initialAnchor.index;
  var tombstones = 0;

  delta += initialAnchor.offset;
  if (delta < 0) {
    while (delta < 0 && i > 0 && this.items[i - 1].height) {
      delta += this.items[i - 1].height;
      i--;
    }
    tombstones = Math.max(-i, Math.ceil(Math.min(delta, 0) / this.tombstoneHeight));
  } else {
    while (delta > 0 && i < this.items.length && this.items[i].height && this.items[i].height < delta) {
      delta -= this.items[i].height;
      i++;
    }
    if (i >= this.items.length || !this.items[i].height) {
      tombstones = Math.floor(Math.max(delta, 0) / this.tombstoneHeight);
    }
  }
  i += tombstones;
  delta -= tombstones * this.tombstoneHeight;

  return {
    index: i,
    offset: delta
  };
};

function BScroll(el, options) {
  this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
  if (!this.wrapper) {
    warn('Can not resolve the wrapper DOM.');
  }
  this.scroller = this.wrapper.children[0];
  if (!this.scroller) {
    warn('The wrapper need at least one child element to be scroller.');
  }
  // cache style for better performance
  this.scrollerStyle = this.scroller.style;

  this._init(options);
}

initMixin(BScroll);
coreMixin(BScroll);
eventMixin(BScroll);
snapMixin(BScroll);
wheelMixin(BScroll);
scrollbarMixin(BScroll);
pullDownMixin(BScroll);
pullUpMixin(BScroll);
mouseWheelMixin(BScroll);
zoomMixin(BScroll);
infiniteMixin(BScroll);

BScroll.Version = '1.15.2';

/* harmony default export */ __webpack_exports__["default"] = (BScroll);


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(125);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(80)))

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(80), __webpack_require__(126)))

/***/ }),
/* 126 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vColumn = __webpack_require__(128);

var _vColumn2 = _interopRequireDefault(_vColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vColumn2.default.install = function (Vue) {
  Vue.component(_vColumn2.default.name, _vColumn2.default);
};

exports.default = _vColumn2.default;

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_column_vue_vue_type_template_id_38434b74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_column_vue_vue_type_template_id_38434b74___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_column_vue_vue_type_template_id_38434b74___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/column/v-column.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vIp = __webpack_require__(130);

var _vIp2 = _interopRequireDefault(_vIp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vIp2.default.install = function (Vue) {
  Vue.component(_vIp2.default.name, _vIp2.default);
};

exports.default = _vIp2.default;

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_ip_vue_vue_type_template_id_44b4f4e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _v_ip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_ip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_ip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_ip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_ip_vue_vue_type_template_id_44b4f4e6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_ip_vue_vue_type_template_id_44b4f4e6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ip/v-ip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vMac = __webpack_require__(132);

var _vMac2 = _interopRequireDefault(_vMac);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vMac2.default.install = function (Vue) {
  Vue.component(_vMac2.default.name, _vMac2.default);
};

exports.default = _vMac2.default;

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_mac_vue_vue_type_template_id_55ea8ed8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _v_mac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_mac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_mac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_mac_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_mac_vue_vue_type_template_id_55ea8ed8___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_mac_vue_vue_type_template_id_55ea8ed8___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/mac/v-mac.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vUpload = __webpack_require__(134);

var _vUpload2 = _interopRequireDefault(_vUpload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vUpload2.default.install = function (Vue) {
  Vue.component(_vUpload2.default.name, _vUpload2.default);
};

exports.default = _vUpload2.default;

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_upload_vue_vue_type_template_id_3b0efaa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _v_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_upload_vue_vue_type_template_id_3b0efaa6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_upload_vue_vue_type_template_id_3b0efaa6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/upload/v-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _libs = __webpack_require__(1);

var _MessageBox = __webpack_require__(136);

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _directives = __webpack_require__(137);

var _directives2 = _interopRequireDefault(_directives);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
    Vue.prototype.setOptions = _libs.setOptions;
    Vue.use(_directives2.default);

    //定义数据验证
    Vue.prototype.$checkData = _libs.checkData;
    Vue.prototype.$checkAll = _libs.checkSubmit;

    /**
     * 显示弹出层
     *
     * @param {object | string} msgOptions
     * @returns
     */
    var msgBox = void 0;
    var MessageBoxInstance = Vue.extend(_MessageBox2.default);

    function showDialog(msgOptions, hasCancel) {

        var currentMsg = void 0,
            msgBoxEl = void 0;
        if (!msgBox) {
            currentMsg = new MessageBoxInstance();
            msgBoxEl = currentMsg.$mount().$el;
            document.body.appendChild(msgBoxEl);
            //msgBox = currentMsg;
        } else {
            currentMsg = msgBox;
            // Vue.extend(currentMsg, defaults);
        }

        if (typeof msgOptions === 'string') {
            currentMsg.content = msgOptions;
        } else if ((typeof msgOptions === 'undefined' ? 'undefined' : _typeof(msgOptions)) === 'object') {

            if (_typeof(msgOptions.content) == "object" && msgOptions.content.nodeType === 1) {
                msgOptions.content = msgOptions.content.outerHTML;
                msgOptions.parseHtml = true;
            }

            Object.assign(currentMsg, msgOptions);
        }

        currentMsg.hasCancel = !!hasCancel;

        return currentMsg.showMsgBox().then(function (val) {
            currentMsg = null;
            return Promise.resolve(val);
        }).catch(function (err) {
            currentMsg = null;
            return Promise.reject(err);
        });
    }

    //提示信息
    Vue.prototype.$message = function (msg, time) {
        //let formMessage = new FormMessage();
        _libs.formMessage.setMsg(msg, time);
    };

    // 在Vue的原型上添加实例方法，以全局调用
    Vue.prototype.$confirm = function (msgOptions) {

        return showDialog(msgOptions, true);
    };

    Vue.prototype.$alert = function (msgOptions) {
        return showDialog(msgOptions);
    };

    /* add by xc 添加是否是移动端标识 */
    Vue.prototype.$isMobile = /Android|webOS|iPhone|iPod|iPad|BlackBerry/ig.test(navigator.userAgent) && document.documentElement.clientWidth <= 768;
};
var Base = {};

Base.install = install;
exports.default = Base;

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageBox_vue_vue_type_template_id_26dee718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MessageBox_vue_vue_type_template_id_26dee718___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _MessageBox_vue_vue_type_template_id_26dee718___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MessageBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vTooltip = __webpack_require__(138);

var _vTooltip2 = _interopRequireDefault(_vTooltip);

var _libs = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startClick = void 0;
var seed = 0;
var nodeList = [];
var ctx = '@@clickoutsideContext';

document.addEventListener('mousedown', function (e) {
    return startClick = e;
});

document.addEventListener('mouseup', function (e) {
    nodeList.forEach(function (node) {
        if (!node.contains(e.target)) {
            //当点击元素不是当前node的子元素时
            node[ctx].documentHandler(e, startClick);
        }
    });
});

function createDocumentHandler(el, binding, vnode) {
    return function () {
        if (!vnode || !vnode.context) return;

        if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
            vnode.context[el[ctx].methodName]();
        } else {
            el[ctx].bindingFn && el[ctx].bindingFn();
        }
    };
}

var install = function install(Vue) {
    var TooltipBox = Vue.extend(_vTooltip2.default);
    var tooltipBox = new TooltipBox(),
        msgBoxEl = tooltipBox.$mount().$el;

    document.body.appendChild(msgBoxEl);
    var directiveConfig = {
        // 注册一个局部的自定义指令 v-focus
        focus: {
            // 指令的定义
            inserted: function inserted(el) {
                // 聚焦元素
                el.focus();
            }
        },
        tooltip: {
            bind: function bind(el, binding, vnode) {},
            inserted: function inserted(el, binding, vnode) {
                el.addEventListener("mouseenter", function (event) {

                    tooltipBox.parseHtml = !!this.getAttribute("parse-html");
                    if ((0, _libs.isDefined)(binding.value)) {
                        tooltipBox.content = binding.value;
                    } else {
                        if (this.querySelector("[v-tooltip]")) {
                            //自定义生成
                            tooltipBox.content = this.querySelector("[v-tooltip]").getAttribute("v-tooltip");
                        } else {
                            tooltipBox.content = binding.value || "";
                        }
                    }

                    var clientRect = event.target.getBoundingClientRect();

                    tooltipBox.left = event.pageX;
                    tooltipBox.top = clientRect.top + clientRect.height; //当前元素位置 + 当前元素高度
                    tooltipBox.relativeWidth = event.target.offsetWidth || clientRect.width;
                    tooltipBox.relativeHeight = event.target.offsetHeight || clientRect.height;
                    tooltipBox.show = true;
                    tooltipBox.updatePosition();
                });
                el.addEventListener("mouseleave", function (event) {
                    tooltipBox.show = false;
                });
            }
        },
        clickoutside: {
            bind: function bind(el, binding, vnode) {
                nodeList.push(el);
                var id = seed++;
                el[ctx] = {
                    id: id,
                    documentHandler: createDocumentHandler(el, binding, vnode),
                    methodName: binding.expression,
                    bindingFn: binding.value
                };
            },
            update: function update(el, binding, vnode) {
                el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
                el[ctx].methodName = binding.expression;
                el[ctx].bindingFn = binding.value;
            },
            unbind: function unbind(el) {
                var len = nodeList.length;

                for (var i = 0; i < len; i++) {
                    if (nodeList[i][ctx].id === el[ctx].id) {
                        nodeList.splice(i, 1);
                        break;
                    }
                }
                delete el[ctx];
            }
        },
        manualevent: {
            inserted: function inserted(el, binding) {
                var evtNameArr = el.getAttribute("evt-name").split(";"),
                    bindFn = binding.value;
                for (var i = 0; i < evtNameArr.length; i++) {
                    el.addEventListener(evtNameArr[i], bindFn[i]);
                }
            },
            unbind: function unbind(el, binding) {
                var evtNameArr = el.getAttribute("evt-name").split(";"),
                    bindFn = binding.value;
                for (var i = 0; i < evtNameArr.length; i++) {
                    el.removeEventListener(evtNameArr[i], bindFn[i]);
                }
            }
        }
    };

    for (var Vname in directiveConfig) {
        Vue.directive(Vname, directiveConfig[Vname]);
    }

    //过滤器
    Vue.filter('upperCase', function (value) {
        if (!value) return '';
        return value.toUpperCase();
    });
};

exports.default = {
    install: install
};

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_tooltip_vue_vue_type_template_id_2130efcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _v_tooltip_vue_vue_type_template_id_2130efcc___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _v_tooltip_vue_vue_type_template_id_2130efcc___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/v-tooltip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ])["default"];
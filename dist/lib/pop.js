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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 110);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vPop = __webpack_require__(111);

var _vPop2 = _interopRequireDefault(_vPop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vPop2.default.install = function (Vue) {
  Vue.component(_vPop2.default.name, _vPop2.default);
};

exports.default = _vPop2.default;

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_pop_vue_vue_type_template_id_57d50548___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _libs = __webpack_require__(3);

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

/***/ 3:
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
            prop = fields[i];
            // edit by xc 
            var option = sortTypeObj[prop];
            asc = option.sortType == "asc"; //升序
            var sortFn = option.sortFn;
            if (typeof sortFn === 'function') {
                cps.push(sortFn(item1, item2, asc));
            } else {
                cps.push(sortFunctions[sortFn] ? sortFunctions[sortFn](item1[prop], item2[prop], asc) : 0);
            }

            // if (typeof item1[prop] == "number" || typeof item2[prop] == "number") {
            //     value1 = item1[prop];
            //     value2 = item2[prop];
            // } else {
            //     value1 = item1[prop].toString().toUpperCase();
            //     value2 = item2[prop].toString().toUpperCase();
            // }
            // if (value1 > value2) {
            //     cps.push(asc ? 1 : -1);
            //     break; // 大于时跳出循环。
            // } else if (value1 === value2) {
            //     cps.push(0);
            // } else {
            //     cps.push(asc ? -1 : 1);
            //     break; // 小于时跳出循环。
            // }
        }
    }

    for (j = 0; j < cps.length; j++) {
        if (cps[j] === 1 || cps[j] === -1) {
            return cps[j];
        }
    }
    return 0;
}

function compare(data1, data2, isAsc) {
    if (data1 > data2) {
        return isAsc ? 1 : -1;
    } else if (data1 < data2) {
        return isAsc ? -1 : 1;
    }
    return 0;
}

var sortFunctions = {
    num: function num(data1, data2, isAsc) {
        data1 = Number(data1);
        data2 = Number(data2);
        if (data1 !== data1) {
            if (data2 !== data2) {
                return 0;
            }
            return 1;
        }
        return compare(data1, data2, isAsc);
    },
    string: function string(data1, data2, isAsc) {
        data1 = data1.toString().toUpperCase();
        data2 = data2.toString().toUpperCase();
        return compare(data1, data2, isAsc);
    },
    // ip，mask大小对比
    ipmask: function ipmask(data1, data2, isAsc) {
        data1 = IPToInt(data1);
        data2 = IPToInt(data2);
        return compare(data1, data2, isAsc);
    }
};

var sortFnNames = {
    default: 'string',
    names: Object.entries(sortFunctions).map(function (item) {
        return item[0];
    })
};

function IPToInt(ip) {
    var arr = ip.split('.'),
        num = +arr[3] + +arr[2] * (1 << 8) + +arr[1] * (1 << 16) + +arr[0] * (1 << 24);
    return num;
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
    }
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
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
exports.sortFnNames = sortFnNames;
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _manager = __webpack_require__(112);

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

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

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


/***/ })

/******/ })["default"];
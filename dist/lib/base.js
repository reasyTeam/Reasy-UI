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
/******/ 	return __webpack_require__(__webpack_require__.s = 132);
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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _libs = __webpack_require__(3);

var _MessageBox = __webpack_require__(133);

var _MessageBox2 = _interopRequireDefault(_MessageBox);

var _directives = __webpack_require__(134);

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

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MessageBox_vue_vue_type_template_id_26dee718___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
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

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vTooltip = __webpack_require__(135);

var _vTooltip2 = _interopRequireDefault(_vTooltip);

var _libs = __webpack_require__(3);

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

                    tooltipBox.left = event.pageX;
                    tooltipBox.top = event.pageY; //当前位置 - 目标高度
                    tooltipBox.relativeWidth = event.target.offsetWidth;
                    tooltipBox.relativeHeight = event.target.offsetHeight;
                    tooltipBox.show = true;
                    tooltipBox.updatePosition();
                    //console.log("event.relatedTarget", vnode.context);
                    //vnode.context[binding.expression](event);
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

/***/ 135:
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
            dataKey.error = _("This field is required");
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 52:
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
      okText: _("OK"),
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_tooltip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 54:
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
			var clientRect = this.$refs.tooltip.getBoundingClientRect(),
			    bodyWidth = document.body.clientWidth,
			    bodyHeight = document.body.clientHeight;

			this.top = this.top - this.$refs.tooltip.offsetHeight;
			//当右边超出屏幕宽度时
			if (clientRect.right > bodyWidth) {
				this.left = this.left - this.$refs.tooltip.offsetWidth * 2 - 10;
			}

			//当下方超出屏幕高度时
			if (clientRect.bottom > bodyHeight) {

				this.top = this.top - this.$refs.tooltip.offsetHeight;
			}
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

/***/ 73:
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

/***/ 78:
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


/***/ })

/******/ })["default"];
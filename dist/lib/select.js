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
/******/ 	return __webpack_require__(__webpack_require__.s = 98);
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

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 2:
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

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _libs = __webpack_require__(3);

var _addEvent = __webpack_require__(4);

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

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
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

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

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


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vSelect = __webpack_require__(99);

var _vSelect2 = _interopRequireDefault(_vSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vSelect2.default.install = function (Vue) {
  Vue.component(_vSelect2.default.name, _vSelect2.default);
};

exports.default = _vSelect2.default;

/***/ }),

/***/ 99:
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

/***/ })

/******/ })["default"];
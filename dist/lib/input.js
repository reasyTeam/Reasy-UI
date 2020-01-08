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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
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

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_add_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _addEvent = __webpack_require__(4);

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

/***/ 61:
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

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vInput = __webpack_require__(95);

var _vInput2 = _interopRequireDefault(_vInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vInput2.default.install = function (Vue) {
  Vue.component(_vInput2.default.name, _vInput2.default);
};

exports.default = _vInput2.default;

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_input_vue_vue_type_template_id_916e78e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _v_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
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

/***/ })

/******/ })["default"];
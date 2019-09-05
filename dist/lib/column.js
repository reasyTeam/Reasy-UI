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
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vColumn = __webpack_require__(126);

var _vColumn2 = _interopRequireDefault(_vColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vColumn2.default.install = function (Vue) {
  Vue.component(_vColumn2.default.name, _vColumn2.default);
};

exports.default = _vColumn2.default;

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v_column_vue_vue_type_template_id_38434b74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 45:
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
                keyVal = event.key,
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
                keyVal = event.key,
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

/***/ 78:
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
      class: ((_obj = { "error-group": _vm.dataKey.error }),
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


/***/ })

/******/ })["default"];
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
/******/ 	return __webpack_require__(__webpack_require__.s = 108);
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

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vSlider = __webpack_require__(109);

var _vSlider2 = _interopRequireDefault(_vSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_vSlider2.default.install = function (Vue) {
  Vue.component(_vSlider2.default.name, _vSlider2.default);
};

exports.default = _vSlider2.default;

/***/ }),

/***/ 109:
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_v_slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 34:
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

/***/ 68:
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


/***/ })

/******/ })["default"];
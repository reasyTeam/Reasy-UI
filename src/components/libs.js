export function trim(string) {
  return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
}

export function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  }
  return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
}

/**
 * @description
 * @param {Element} el
 * @param {string} cls
 * @returns
 */
export function addClass(el, cls) {
  if (!el) return;
  let curClass = el.className;
  let classes = (cls || "").split(" ");

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " " + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

export function removeClass(el, cls) {
  if (!el || !cls) return;
  let classes = cls.split(" ");
  let curClass = " " + el.className + " ";

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" " + clsName + " ", " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

export const on = (function() {
  if (document.addEventListener) {
    return function(element, event, handler, useCapture = false) {
      if (element && event && handler) {
        let eventObj = element.__event__ || {};
        if (eventObj[event] && eventObj[event].length >= 0) {
          eventObj[event].push(handler);
        } else {
          eventObj[event] = [handler];
          element.addEventListener(
            event,
            function(evt) {
              for (let fn of eventObj[event]) {
                fn(evt);
              }
            },
            useCapture
          );
        }
        element.__event__ = eventObj;
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
})();

/* istanbul ignore next */
export const off = (function() {
  if (document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        let eventObj = element.__event__ || {};
        for (let i = 0; i < (eventObj[event] || []).length; i++) {
          if (
            eventObj[event][i] === handler ||
            eventObj[event][i].toString() === handler.toString()
          ) {
            eventObj[event].splice(i, 1);
          }
        }
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent("on" + event, handler);
      }
    };
  }
})();

/**
 * @description 获取光标位置
 * @param {*} ctrl 输入框dom节点
 * @returns 光标在输入框的位置
 */
export function getCursorPos(ctrl) {
  let Sel,
    doc = document,
    CaretPos = 0;
  //IE Support
  if (doc.selection) {
    ctrl.focus();
    Sel = doc.selection.createRange();
    Sel.moveStart("character", -ctrl.value.length);
    CaretPos = Sel.text.length;
  } else if (ctrl.selectionStart || ctrl.selectionStart === 0) {
    CaretPos = ctrl.selectionStart;
  }
  return CaretPos;
}

export function setCursorPos(ctrl, pos) {
  var range;

  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  } else if (ctrl.createTextRange) {
    range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

/**
 * @description 两数相减
 * @param {Number} num1 必须为数字
 * @param {Number} num2 必须为数字
 * @returns 返回两数相减的值
 */
export function accSub(num1, num2) {
  let precision1 = getPrecision(num1),
    precision2 = getPrecision(num2),
    maxPrecision = Math.max(precision1, precision2),
    precisionFactor = Math.pow(10, maxPrecision),
    val1 = parseInt(num1 * precisionFactor, 10),
    val2 = parseInt(num2 * precisionFactor, 10);

  return (val1 - val2) / precisionFactor;
}

export function getPrecision(value) {
  if (value === undefined) return 0;
  const valueString = value.toString();
  const dotPosition = valueString.indexOf(".");
  let precision = 0;
  if (dotPosition !== -1) {
    precision = valueString.length - dotPosition - 1;
  }
  return precision;
}

/**
 * @description 解析字符串为年月日
 * @param {*} str
 * @param {*} 时间格式
 * @returns 年月日时分秒对象
 */
export function parseDate(str, fmt) {
  fmt = fmt || "YYYY-MM-DD";
  let obj = { Y: 0, M: 1, D: 0, h: 0, m: 0, s: 0 };
  fmt.replace(/([^YMDhms]*?)(([YMDhms])\3*)([^YMDhms]*?)/g, function(
    m,
    $1,
    $2,
    $3,
    $4
  ) {
    str = str.replace(
      new RegExp($1 + "(\\d{" + $2.length + "})" + $4),
      function(_m, _$1) {
        obj[$3] = parseInt(_$1);
        return "";
      }
    );
    return "";
  });
  obj.M--; // 月份是从0开始的，所以要减去1
  return {
    year: obj.Y,
    month: obj.M,
    day: obj.D,
    hour: obj.h,
    minute: obj.m,
    second: obj.s
  };
}

export function formatDate(date, fmt) {
  date = date == undefined ? new Date() : date;
  date = typeof date == "number" ? new Date(date) : date;
  fmt = fmt || "YYYY-MM-DD";

  var obj = {
    Y: date.getFullYear(), // 年份，注意必须用getFullYear
    M: date.getMonth() + 1, // 月份，注意是从0-11
    D: date.getDate(), // 日期
    h: date.getHours(), // 24小时制
    m: date.getMinutes(), // 分钟
    s: date.getSeconds() // 秒
  };

  for (var i in obj) {
    fmt = fmt.replace(new RegExp(i + "+", "g"), function(m) {
      var val = obj[i] + "";
      for (var j = 0, len = val.length; j < m.length - len; j++)
        val = "0" + val;
      return m.length == 1 ? val : val.substring(val.length - m.length);
    });
  }
  return fmt;
}

export function copyDeepData(item) {
  let newItem;
  if (Array.isArray(item)) {
    newItem = [];
    item.map(function(arr) {
      newItem.push(copyDeepData(arr));
    });
  } else if (typeof item === "function") {
    newItem = item;
  } else if (item instanceof Object) {
    newItem = {};
    for (let prop in item) {
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
export function sortByKey(item1, item2, fields, sortTypeObj) {
  let cps = [],
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

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

export function isUndefinedOrNull(a) {
  return a === undefined || a === null;
}

export function isEmpty(val) {
  const emptyArr = ["{}", "[]"];

  return (
    val === "" ||
    isUndefinedOrNull(val) ||
    emptyArr.includes(JSON.stringify(val))
  );
}

export function escapeHTML(str) {
  str = "" + str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * 检查元素的数据合法性
 * @param {object} dataKey 元素对象
 * @param {string} [value] 元素的值
 */
export function checkData(dataKey, value) {
  let val = value,
    errMsg = "";

  if (isUndefinedOrNull(val)) {
    return false;
  }
  if (dataKey.ignore || dataKey.disabled) {
    //忽略验证时
    return false;
  }

  if (dataKey.required !== false) {
    if (val === "" || val.length === 0) {
      return "此项必填";
    }
  } else {
    //非必填时 为空则不验证
    if (val === "") {
      return false;
    }
  }

  //未定义验证类型时
  if (!dataKey.valid) {
    return false;
  }
  let validList = [];
  if (!Array.isArray(dataKey.valid)) {
    validList = [dataKey.valid];
  } else {
    validList = dataKey.valid;
  }

  validList.forEach(valid => {
    //数据验证函数
    let handleValid = this.$valid[valid.type] || {};
    //验证参数
    let args = [];
    if (valid.min != undefined) {
      args.push(valid.min);
    }
    if (valid.max != undefined) {
      args.push(valid.max);
    }

    if (typeof handleValid == "function") {
      errMsg = handleValid(val, ...args);
    } else if (typeof handleValid.all === "function") {
      errMsg = handleValid.all(val, ...args);
    }
    if (errMsg) {
      errMsg = valid.msg || errMsg;
      return true;
    }
  });

  //数据验证
  if (errMsg) {
    return errMsg;
  }
  return false;
}

/**
 * 防抖
 * @param {Function} fn - 需要防抖的函数
 * @param {Number} wait - 防抖时间
 * @param {Boolean} immediate - 是否马上执行
 */
export function debounce(fn, wait, immediate) {
  let timer = null;

  return function(...args) {
    if (immediate && !timer) {
      fn.apply(this, args);
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}

/**
 * 节流
 * @param {Function} fn - 需要防抖的函数
 * @param {Number} wait - 防抖时间
 * @param {Boolean} immediate - 是否马上执行
 */
export function throttle(fn, wait, immediate) {
  let timer = null,
    callNow = immediate;

  return function(...args) {
    if (callNow) {
      fn.apply(this, args);
      callNow = false;
    }

    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}

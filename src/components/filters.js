/**
 * 组件长度和宽度处理
 * @param {String/Number} val
 */
import { isUndefinedOrNull, SIZE_TO_CSS } from "./libs";

export function size(val) {
  if (val === "") {
    return val;
  }
  if (typeof val === "string") {
    if (/^\d*$/.test(val)) {
      return `${val}px`;
    }
    return val;
  }
  if (isUndefinedOrNull(val)) {
    return;
  }
  return `${val}px`;
}

export function sizeToCss(size, pre = "") {
  return pre + (SIZE_TO_CSS[size] || SIZE_TO_CSS["M"]);
}

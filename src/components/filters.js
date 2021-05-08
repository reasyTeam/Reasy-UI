/**
 * 组件长度和宽度处理
 * @param {String/Number} val
 */
import { isUndefinedOrNull } from "./libs";
export function size(val) {
  if (typeof val === "string") {
    return val;
  }
  if (isUndefinedOrNull(val)) {
    return;
  }
  return `${val}px`;
}

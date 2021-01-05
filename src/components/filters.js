/**
 * 组件长度和宽度处理
 * @param {String/Number} val
 */
export function size(val) {
  if (typeof val === "string") {
    return val;
  }
  return `${val}px`;
}

let scorllWidth;
/**
 * 获取浏览器滚动条的宽度
 */
export function getScrollWidth() {
  if (scorllWidth) {
    return scorllWidth;
  }

  let outer = document.createElement("div");
  outer.style.width = "100px";
  outer.style.overflow = "scroll";
  outer.style.height = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-10000px";
  outer.style.zIndex = "-100";

  document.body.appendChild(outer);
  let inner = document.createElement("div");
  outer.appendChild(inner);
  scorllWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return scorllWidth;
}

/**
 * 渲染全兼容transform:translate
 * @param {String} direct 方向，x/y
 * @param {Number} distance 偏移量
 */
export function renderTranslateStyle(direct, distance) {
  const style = {};
  const translate = `translate${direct.toUpperCase()}(${distance}px)`;

  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
}

// 统一横向滚动条和垂直滚动条参数
export const PROPERTYS = {
  x: {
    scroll: "scrollLeft",
    offset: "offsetWidth",
    client: "clientX"
  },
  y: {
    scroll: "scrollTop",
    offset: "offsetHeight",
    client: "clientY"
  }
};

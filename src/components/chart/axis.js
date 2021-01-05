import { PADDING } from "./chart-lib";

/**
 * 坐标轴类
 */
export default class ChartAxis {
  constructor(options) {
    options = Object.assign(
      {},
      { offsetGridLines: true, categories: [], series: [], fontSize: 12 },
      options
    );
    this.options = options;
  }

  initOptions(options) {
    // 坐标轴字体大小
    this.fontSize = options.fontSize;
    // 坐标轴宽
    this.width = options.renderWidth;
    // 坐标轴高
    this.height = options.end;
    // X轴是否偏移，即是从原点开始还是偏移半个身位开始，用于折线图
    this.offsetGridLines = options.offsetGridLines;
    // x轴label集合
    this.xLabels = options.categories;
    // 图表系列数据
    this.series = options.series;
    // 坐标轴在svg中Y轴的起点位置
    this.startPoint = options.start;
    // 坐标轴在svg中Y轴的结束位置
    this.endPoint = options.end;
  }

  initProps() {
    // Y轴坐标的刻度数
    this.steps = 0;
    // Y轴每个刻度值的间隔
    this.stepGap = 0;
    // 全局svg辅助类
    this.svgHandle = new SvgHandle();
    // svg中字体绘制出来的高度
    this.svgHeight = this.svgHandle.getTextHeight("Tedna");
    // X轴每个刻度的宽
    this.xLabelWidth = 0;
    // X轴label实际的宽度
    this.xLabelsWidth = [];
    // x轴label不相互遮挡显示需要的旋转角度
    this.xLabelRotation = 0;
    // Y轴标签宽
    this.yLabelWidth = 0;
    // X轴在画布左侧的内边距
    this.xScalePaddingLeft = 0;
    // X轴在画布右侧的内边距
    this.xScalePaddingRight = 0;
    this.min = Number.MAX_SAFE_INTEGER;
    this.max = Number.MIN_SAFE_INTEGER;
    // y轴label集合
    this.yLabels = [];
  }

  start() {
    this.getMax();
    this.StandardY();
    this.buildYLabels();
    this.calculateXLabelRotation();
    this.fixData();
  }

  refresh(options) {
    options = Object.assign({}, this.options, options);
    this.initOptions(options);
    if (this.series.length > 0) {
      this.initProps();
    }
    this.start();
  }

  /**
   * 计算给定数据(Series[i].data)中的最大值和最小值
   */
  getMax() {
    let { max, min } = this;

    this.series.forEach(data => {
      data = data["data"];
      max = Math.max.apply(null, data.concat(max));
      min = Math.min.apply(null, data.concat(min));
    });

    this.min = min;
    this.max = max;
  }

  /**
   * Y周坐标步长和分段数计算
   */
  StandardY() {
    // 步长参照数组
    const MAGIC = [10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100];

    /**
     * 获取步长
     */
    function getStepGap(max, min, step) {
      // 先求预设步长
      let stepGap = (max - min) / (step - 1);

      if (MAGIC.indexOf(stepGap) > -1) {
        return stepGap;
      }

      // 调整步长
      // 计算指数，使stepGap结果在MAGIC数组范围内
      let exponent = Math.floor(Math.log10(stepGap) - 1);
      exponent = Math.pow(10, exponent);
      stepGap = stepGap / exponent;

      for (let i = 0; i < MAGIC.length; i++) {
        if (stepGap <= MAGIC[i]) {
          return MAGIC[i] * exponent;
        }
      }
    }

    let { max, min } = this;

    let step = this.xLabels.length > 10 ? 10 : this.xLabels.length;
    let stepGap = getStepGap(max, min, step);
    // 如果最大值或最小值在坐标轴上，则直接取坐标轴的值
    let maxi = max === 0 ? 0 : Math.ceil(max / stepGap) * stepGap;
    let mini = min === 0 ? 0 : Math.floor(min / stepGap) * stepGap;

    this.stepGap = stepGap;
    this.min = mini;
    this.max = maxi;
  }

  /**
   * 计算y轴的显示文本，和显示文本的宽度
   */
  buildYLabels() {
    // y轴显示文本
    this.yLabels = [this.min];
    let stepDecimalLength = getDecimalLength(this.stepGap);
    let temp = this.min;
    this.steps = 0;
    while (temp < this.max) {
      this.yLabels.push(
        (temp = temp + this.stepGap).toFixed(stepDecimalLength)
      );
      this.steps++;
    }
    // y轴显示文本的宽度，Y轴文本与Y轴的边距
    this.yLabelWidth = this.getLongestLength(this.yLabels) + PADDING;
  }

  /**
   * 计算x轴label不相互遮挡显示需要旋转的角度和旋转后的宽高
   */
  calculateXLabelRotation() {
    this.xLabelsWidth = this.xLabels.map(label => this.getTextLength(label));
    let { offsetGridLines, yLabelWidth, svgHeight } = this,
      // text标签的斜边的长
      firstWidth = pythagorean(this.xLabelsWidth[0], svgHeight),
      lastWidth = pythagorean(
        this.xLabelsWidth[this.xLabels.length - 1],
        svgHeight
      ),
      // 当前X轴文本的最大长度
      originalLabelWidth = pythagorean(
        Math.max.apply(null, this.xLabelsWidth),
        svgHeight
      ),
      firstRotated,
      lastRotated,
      // X轴文本标签旋转角度
      xLabelRotation = 0,
      // 旋转角度的余弦值
      cosRotation,
      sinRotation;

    // X轴在画布左侧的内边距
    this.xScalePaddingLeft = offsetGridLines
      ? yLabelWidth
      : firstWidth / 2 + PADDING > yLabelWidth
      ? firstWidth / 2 + PADDING
      : yLabelWidth;

    // X轴在画布右侧的内边距
    this.xScalePaddingRight = offsetGridLines
      ? PADDING
      : lastWidth / 2 + PADDING;
    this.xLabelWidth = this.longestlabelText = originalLabelWidth;
    // X轴每一格的宽度
    let xGridWidth = this.calculateXWidth();

    while (
      this.xLabelWidth > xGridWidth &&
      xLabelRotation < 90 &&
      xLabelRotation >= 0
    ) {
      // 根据文本的矩形对高度进行计算，夹角为旋转角度和矩形较长直角边和斜边的夹角的和
      sinRotation = sin(++xLabelRotation);
      cosRotation = cos(++xLabelRotation);
      firstRotated = cosRotation * firstWidth;
      lastRotated = cosRotation * lastWidth;

      if (!offsetGridLines) {
        firstRotated = firstRotated / 2 + PADDING;
        if (firstRotated > yLabelWidth) {
          this.xScalePaddingLeft = Math.ceil(firstRotated);
        }
        lastRotated = lastRotated / 2 + PADDING;
        if (lastRotated < this.xScalePaddingRight) {
          this.xScalePaddingRight = Math.ceil(lastRotated);
        }
      }
      this.xLabelWidth = cosRotation * originalLabelWidth;
      xGridWidth = this.calculateXWidth();
    }

    // 当X轴标签不需要旋转时，直接减去字体大小加上上下间距，否则为text长的sin(xLabelRotation)与text宽的cos(xLabelRotation)
    this.endPoint -= Math.ceil(
      xLabelRotation === 0
        ? this.fontSize + 2 * PADDING
        : this.longestlabelText * sinRotation + svgHeight * cosRotation
    );

    this.xLabelRotation = xLabelRotation;
    this.xLabelWidth = this.calculateXWidth();
  }
  /**
   * 计算X轴每一格的宽度
   */
  calculateXWidth() {
    let innerWidth =
      this.width - (this.xScalePaddingLeft + this.xScalePaddingRight);

    return innerWidth / (this.xLabels.length - (this.offsetGridLines ? 0 : 1));
  }
  /**
   * 对包含小数点的数据进行修正为整数
   */
  fixData() {
    // xy轴的坐标刻度优化
    this.xLabelWidth = Math.floor(this.xLabelWidth);
    this.xScalePaddingLeft = Math.floor(this.xScalePaddingLeft);
    this.xScalePaddingRight = Math.floor(this.xScalePaddingRight);
    this.startPoint = Math.ceil(this.startPoint);
    this.endPoint = Math.floor(this.endPoint);

    let total =
      this.xLabelWidth *
        (this.xLabels.length - (this.offsetGridLines ? 0 : 1)) +
      this.xScalePaddingLeft +
      this.xScalePaddingRight;
    let left = this.width - total;
    if (left % 2 === 0) {
      left = left / 2;
      this.xScalePaddingLeft += left;
      this.xScalePaddingRight += left;
    } else {
      left = left / 2;
      this.xScalePaddingLeft += Math.floor(left / 2);
      this.xScalePaddingRight += Math.ceil(left / 2);
    }
  }

  getAxis() {
    return {
      // 最小值
      min: this.min,
      // 值范围量
      range: this.max - this.min,
      // x轴坐标轴左上起点
      xStart: this.xScalePaddingLeft,
      // x轴坐标轴结束点
      xEnd: this.width - this.xScalePaddingRight,
      // Y轴坐标轴左上起点
      yStart: this.startPoint,
      // Y轴坐标轴结束点
      yEnd: this.endPoint,
      // x轴结束点与起点间距离
      xWidth: this.width - this.xScalePaddingLeft - this.xScalePaddingRight,
      // y轴结束点与起点间距离
      yHeight: this.endPoint - this.startPoint,
      // x轴每段长度
      xLabelWidth: this.xLabelWidth,
      // x轴终点与svg最右边距离
      offsetRight: this.xScalePaddingRight
    };
  }

  /**
   * 计算文本的最大长度
   */
  getLongestLength(textArray) {
    return Math.max.apply(
      null,
      textArray.map(text => this.getTextLength(text))
    );
  }

  /**
   * 计算文本长度
   */
  getTextLength(text) {
    return this.svgHandle.getTextWidth(text);
  }

  /**
   * 绘制坐标轴和辅助线
   */
  draw(svg) {
    let {
      yLabels,
      xLabels,
      xLabelWidth,
      width,
      fontSize,
      svgHeight,
      xLabelRotation
    } = this;
    let xStart = this.xScalePaddingLeft,
      yStart = this.startPoint,
      yEnd = this.endPoint,
      halfXLabelWidth = xLabelWidth / 2,
      // x轴刻度高
      xScaleHeight = 5;

    let innerHtml = "";

    // 绘制X轴
    innerHtml += this.drawLine(xStart, yEnd, width, yEnd);

    // 绘制X轴labels
    let offset = xStart + (this.offsetGridLines ? halfXLabelWidth : 0);
    let path = "",
      sinRotation = sin(xLabelRotation),
      cosRotation = cos(xLabelRotation);
    innerHtml += '<g name="xlabel">';
    for (let i = 0; i < xLabels.length; i++) {
      let yOffsetEnd =
        yEnd +
        cosRotation * svgHeight +
        xScaleHeight * sinRotation +
        (this.xLabelsWidth[i] * sinRotation) / 2;
      innerHtml += this.drawText(
        offset,
        xLabelRotation === 0 ? this.height : Math.floor(yOffsetEnd),
        xLabels[i],
        "middle",
        fontSize,
        "#565656",
        xLabelRotation === 0
          ? ""
          : `transform="rotate(-${xLabelRotation} ${offset},${Math.floor(
              yOffsetEnd - (cosRotation * svgHeight) / 2
            )})"`
      );
      path += `M${offset} ${yEnd} L${offset} ${yEnd + xScaleHeight}`;
      offset += xLabelWidth;
    }
    innerHtml += "</g>";
    innerHtml += this.drawPath(path);

    // 绘制Y轴
    innerHtml += this.drawLine(xStart, yStart, xStart, yEnd);

    // 绘制Y Labels 和水平分隔虚线
    let ylabelHtml = `<text name="ylabel" x="0" y="${yStart}" font-size="${fontSize}" fill="#565656" text-anchor="end">`;
    let yStep = (yEnd - yStart) / this.steps,
      yOffset = 0;
    for (let i = 0, l = yLabels.length - 1; i <= l; i++) {
      yOffset = yStart + yStep * i;
      innerHtml += this.drawLine(
        xStart,
        yOffset,
        width,
        yOffset,
        "#e9e9e9",
        "2px"
      );
      ylabelHtml += this.drawTspan(
        xStart - PADDING,
        yOffset + fontSize / 2,
        yLabels[l - i]
      );
    }
    ylabelHtml += `</text>`;
    innerHtml += ylabelHtml;

    svg.innerHTML = innerHtml;
  }

  /**
   * 绘制svg text标签
   */
  drawText(
    x,
    y,
    text,
    anchor = "end",
    fontSize = 12,
    fill = "#565656",
    style = ""
  ) {
    return `<text x="${x}" y="${y}" font-size="${fontSize}" fill="${fill}"  text-anchor="${anchor}" ${style}>${htmlFormat(
      text
    )}</text>`;
  }

  /**
   * 绘制svg tspan标签
   */
  drawTspan(x, y, text) {
    return `<tspan x="${x}" y="${y}">${text}</tspan>`;
  }

  /**
   * 绘制svg line标签
   */
  drawLine(x1, y1, x2, y2, stroke = "#e9e9e9", dashArray = "0") {
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke-width="1" stroke="${stroke}" shape-rendering="crispEdges" stroke-dasharray="${dashArray}"></line>`;
  }

  /**
   * 绘制svg path标签
   */
  drawPath(path) {
    return `<path d="${path} Z" stroke="#d9d9d9" stroke-width="1" fill="none"></path>`;
  }

  uninstall() {
    this.svgHandle.uninstall();
    this.svgHandle = null;
  }
}

/**
 * 获取小数的位数
 */
function getDecimalLength(num) {
  if (num % 1 !== 0 && isNumber(num)) {
    return num.toString().split(".")[1].length;
  }
  return 0;
}

/**
 * 勾股定理求斜边
 */
function pythagorean(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

/**
 * 正弦
 */
function sin(angel) {
  return Math.sin(toRadians(angel));
}

/**
 * 余弦
 */
function cos(angel) {
  return Math.cos(toRadians(angel));
}

/**
 * html特殊字符转义
 */
function htmlFormat(str) {
  return str.replace(/[<>&"]/g, function(c) {
    return { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c];
  });
}

/**
 * 判断是是否为有效数字或者可以被转成数字
 * @param {Number/String} n 需要判断的数据
 */
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * 角度转换：度数 -> π表示法
 * @param {Number} degrees 需要转换的角度
 */
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// 单例模式
let svgTarget = null;
// svg获取文本高宽类
export class SvgHandle {
  constructor() {
    if (svgTarget) {
      return svgTarget;
    }

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.style.position = "absolute";
    svg.style.top = "-10000px";
    svg.style.zIndex = "-1000";
    svg.style.width = "200px";
    svg.style.height = "100px";
    let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", 20);
    text.setAttribute("y", 20);
    text.setAttribute("font-size", 12);
    svg.appendChild(text);
    this.textNode = text;
    this.svgNode = svg;
    document.body.appendChild(svg);
    svgTarget = this;

    this.svgHeight = 0;
    this.getTextHeight();
  }

  setSize(fontsize) {
    this.textNode.setAttribute("font-size", fontsize);
  }

  /**
   * 获取文本的宽
   */
  getTextWidth(text = "Tenda") {
    this.textNode.textContent = text;
    return this.textNode.getBBox().width;
  }

  /**
   * 获取文本的高
   */
  getTextHeight(text = "Tenda") {
    this.textNode.textContent = text;
    this.svgHeight = this.textNode.getBBox().height;
    return this.svgHeight;
  }

  /**
   * 移除svg
   */
  uninstall() {
    if (this.svgNode && this.svgNode.parentNode) {
      this.svgNode.parentNode.removeChild(this.svgNode);
    }
    svgTarget = null;
  }
}

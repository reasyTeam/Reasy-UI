/**
 * https://easings.net/cn#
 * 用于处理动画的缓动函数
 * @param {number} pos 介于动画开始(0)到动画结束(1)之间的数字，介于0-1之间，动画进行的次数占比或进度
 * 返回值： 返回一个介于0-1之间的值，表示结果的达成度
 * 例如：dom的高H从100增加到300，在1秒内完成，为了让动画足够流畅，我们需要达到 60 帧/每秒的动画速率，分为60次，那么第t次对应的高H为
 * H = 100 + linear(t / 60) * (300 - 100) 即：初始高 + 动画进程 * 需要完成的总高度
 * Linear：线性匀速运动效果；
 * Quadratic：二次方的缓动（t^2）；
 * Cubic：三次方的缓动（t^3）；
 * Quartic：四次方的缓动（t^4）；
 * Quintic：五次方的缓动（t^5）；
 * Sinusoidal：正弦曲线的缓动（sin(t)）；
 * Exponential：指数曲线的缓动（2^t）；
 * Circular：圆形曲线的缓动（sqrt(1-t^2)）；
 * Elastic：指数衰减的正弦曲线缓动；
 * Back：超过范围的三次方缓动（(s+1)*t^3 – s*t^2）；
 * Bounce：指数衰减的反弹缓动
 */

export const linear = pos => pos;

export const easeInQuad = pos => Math.pow(pos, 2);

export const easeOutQuad = pos => -(Math.pow(pos - 1, 2) - 1);

export const easeInOutQuad = pos =>
  (pos /= 0.5) < 1 ? 0.5 * Math.pow(pos, 2) : -0.5 * ((pos -= 2) * pos - 2);

export const easeInCubic = pos => Math.pow(pos, 3);

export const easeOutCubic = pos => Math.pow(pos - 1, 3) + 1;

export const easeInOutCubic = pos =>
  (pos /= 0.5) < 1 ? 0.5 * Math.pow(pos, 3) : 0.5 * (Math.pow(pos - 2, 3) + 2);

export const easeInQuart = pos => Math.pow(pos, 4);

export const easeOutQuart = pos => -(Math.pow(pos - 1, 4) - 1);

export const easeInOutQuart = pos =>
  (pos /= 0.5) < 1
    ? 0.5 * Math.pow(pos, 4)
    : -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);

export const easeInQuint = pos => Math.pow(pos, 5);

export const easeOutQuint = pos => Math.pow(pos - 1, 5) + 1;

export const easeInOutQuint = pos =>
  (pos /= 0.5) < 1 ? 0.5 * Math.pow(pos, 5) : 0.5 * (Math.pow(pos - 2, 5) + 2);

export const easeInSine = pos => -Math.cos(pos * (Math.PI / 2)) + 1;

export const easeOutSine = pos => Math.sin(pos * (Math.PI / 2));

export const easeInOutSine = pos => -0.5 * (Math.cos(Math.PI * pos) - 1);

export const easeInExpo = pos => (pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1)));

export const easeOutExpo = pos => (pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1);

export const easeInOutExpo = pos => {
  if (pos === 0) {
    return 0;
  }

  if (pos === 1) {
    return 1;
  }

  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(2, 10 * (pos - 1));
  }

  return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
};

export const easeInCirc = pos => -(Math.sqrt(1 - pos * pos) - 1);

export const easeOutCirc = pos => Math.sqrt(1 - Math.pow(pos - 1, 2));

export const easeInOutCirc = pos =>
  (pos /= 0.5) < 1
    ? -0.5 * (Math.sqrt(1 - pos * pos) - 1)
    : 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);

export const easeInBounce = pos => 1 - easeOutBounce(1 - pos);

export const easeOutBounce = pos => {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (pos < 1 / d1) {
    return n1 * pos * pos;
  } else if (pos < 2 / d1) {
    return n1 * (pos -= 1.5 / d1) * pos + 0.75;
  } else if (pos < 2.5 / d1) {
    return n1 * (pos -= 2.25 / d1) * pos + 0.9375;
  } else {
    return n1 * (pos -= 2.625 / d1) * pos + 0.984375;
  }
};
export const easeInOutBounce = pos =>
  pos < 0.5
    ? (1 - easeOutBounce(1 - 2 * pos)) / 2
    : (1 + easeOutBounce(2 * pos - 1)) / 2;

export const easeInBack = pos => {
  const s = 1.70158;
  return pos * pos * ((s + 1) * pos - s);
};

export const easeOutBack = pos => {
  const s = 1.70158;
  return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
};

export const easeInOutBack = pos => {
  let s = 1.70158;
  if ((pos /= 0.5) < 1) {
    return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
  }
  return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
};

export const easeInElastic = pos => {
  const c4 = (2 * Math.PI) / 3;

  return pos === 0
    ? 0
    : pos === 1
    ? 1
    : -Math.pow(2, 10 * pos - 10) * Math.sin((pos * 10 - 10.75) * c4);
};

export const easeOutElastic = pos => {
  const c4 = (2 * Math.PI) / 3;

  return pos === 0
    ? 0
    : pos === 1
    ? 1
    : Math.pow(2, -10 * pos) * Math.sin((pos * 10 - 0.75) * c4) + 1;
};

export const easeInOutElastic = pos => {
  const c5 = (2 * Math.PI) / 4.5;
  return pos === 0
    ? 0
    : pos === 1
    ? 1
    : pos < 0.5
    ? -(Math.pow(2, 20 * pos - 10) * Math.sin((20 * pos - 11.125) * c5)) / 2
    : (Math.pow(2, -20 * pos + 10) * Math.sin((20 * pos - 11.125) * c5)) / 2 +
      1;
};

export const swingFromTo = pos => {
  let s = 1.70158;
  return (pos /= 0.5) < 1
    ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s))
    : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
};

export const swingFrom = pos => {
  const s = 1.70158;
  return pos * pos * ((s + 1) * pos - s);
};

export const swingTo = pos => {
  const s = 1.70158;
  return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
};

export const easeFromTo = pos =>
  (pos /= 0.5) < 1
    ? 0.5 * Math.pow(pos, 4)
    : -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);

export const easeFrom = pos => Math.pow(pos, 4);

export const easeTo = pos => Math.pow(pos, 0.25);

const easing = {
  linear,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
  easeInQuint,
  easeOutQuint,
  easeInOutQuint,
  easeInSine,
  easeOutSine,
  easeInOutSine,
  easeInExpo,
  easeOutExpo,
  easeInOutExpo,
  easeInCirc,
  easeOutCirc,
  easeInOutCirc,
  easeInBounce,
  easeOutBounce,
  easeInOutBounce,
  easeInBack,
  easeOutBack,
  easeInOutBack,
  easeInElastic,
  easeOutElastic,
  easeInOutElastic,
  swingFromTo,
  swingFrom,
  swingTo,
  easeFromTo,
  easeFrom,
  easeTo
};
const updateTime = 1000 / 60;
const animate =
  requestAnimationFrame ||
  function(cb) {
    setTimeout(cb, updateTime);
  };

/**
 * 动画函数
 * @param {number} start 起始值
 * @param {number} end 结束值
 * @param {function} cb 回调函数
 * @param {number} during 动画持续时间
 * @param {string} easingFunc 缓动函数
 */
export default function tween(
  start,
  end,
  cb,
  during = 500,
  easingFunc = "linear"
) {
  const value = end - start;
  const count = during / updateTime;

  let i = 0;

  return new Promise(resolve => {
    function step() {
      i++;
      let state = start + value * easing[easingFunc](i / count);
      cb(state);
      if (i < count) {
        animate(step);
      } else {
        resolve();
      }
    }

    step();
  });
}

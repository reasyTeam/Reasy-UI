import Vue from "vue";
import Message from "./v-message.vue";
import { isObject, isEmpty } from "../libs";

const MsgConstructor = Vue.extend(Message);
const typeList = ["success", "error", "warn", "info", "loading"];
const betweenSpace = 16;

let instance,
  zIndex = 1000,
  instances = [];

const Msg = function(...args) {
  let options = {};
  if (args.length === 1) {
    args = args[0];
    if (isObject(args)) {
      options = { ...args };
    } else {
      options = {
        content: args
      };
    }

    options.onClose = function() {
      const idx = instances.findIndex(({ id }) => id === this.id),
        removeOffsetHeight = instances[idx]
          ? instances[idx].$el.offsetHeight
          : 0;

      instances.splice(idx, 1);

      instances.forEach(({ id, $el }) => {
        if (id > this.id) {
          $el.style.top = `${parseInt($el.style.top) -
            removeOffsetHeight -
            betweenSpace}px`;
        }
      });
    };

    // 查询当前是否有相同的instance  即内容相同
    // 如果有相同则更新消失时间 即定时器
    // 没有则创建
    const index = instances.findIndex(
      ({ content }) => content === options.content
    );

    if (index > -1) {
      instance = instances[index];
      instance.clearTimer();
      instance.startTimer();
    } else {
      instance = new MsgConstructor({
        data: options
      });
      instance.$mount();
      document.body.appendChild(instance.$el);

      let { verticalOffset } = instance;
      instances.forEach(
        item => (verticalOffset += item.$el.offsetHeight + betweenSpace)
      );
      instance.verticalOffset = verticalOffset;
      instance.id = zIndex;
      instance.$el.style.zIndex = zIndex++;
      instance.show();
      instances.push(instance);
    }
    return instance;
  } else {
    Msg.info(...args);
  }
};

typeList.forEach(msgType => {
  Msg[msgType] = function(content, duration, closeCallback = () => {}) {
    const options = {
      type: msgType,
      content,
      closeCallback
    };

    if (!isEmpty(duration)) {
      options.duration = duration;
    }

    Msg(options);
  };
});

export default Msg;

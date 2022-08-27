import Vue from "vue";
import Notification from "./v-notification.vue";
import { isObject, isEmpty } from "../libs";

const NotifyConstructor = Vue.extend(Notification);
const typeList = ["success", "error", "warning", "notice"];

const betweenSpace = 16;
const _globalOptions = {};

let instance = {},
  zIndex = 1000,
  instances = {};

function handleInstance(resolve, ...args) {
  let options = {};
  if (args.length === 1) {
    args = args[0];
    if (isObject(args)) {
      Object.assign(options, _globalOptions, { ...args });
    } else {
      Object.assign(options, _globalOptions, {
        content: args
      });
    }

    let positionType =
        options.position || NotifyConstructor.extendOptions.data().position,
      currentInstance = {},
      currentInstances = [];

    if (!instance[positionType]) {
      instance[positionType] = {};
    }
    if (!instances[positionType]) {
      instances[positionType] = [];
    }
    currentInstance = instance[positionType];
    currentInstances = instances[positionType];

    options.onClose = function() {
      const idx = currentInstances.findIndex(({ id }) => id === this.id),
        removeOffsetHeight = currentInstances[idx]
          ? currentInstances[idx].$el.offsetHeight
          : 0;

      currentInstances.splice(idx, 1);

      currentInstances.forEach(({ id, $el }) => {
        const [position] = this.positionArr;
        if (id > this.id) {
          $el.style[position] = `${parseInt($el.style[position]) -
            removeOffsetHeight -
            betweenSpace}px`;
        }
      });

      resolve && resolve(currentInstance);
    };
    // 赋值name currentInstances 直接获取最后一个index 进行 +1
    let len = currentInstances.length;
    if (len > 0) {
      options.name =
        "notifi" + (~~currentInstances[len - 1].name.replace(/\D/g, "") + 1);
    } else {
      options.name = "notifi0";
    }

    currentInstance = new NotifyConstructor({
      data: options
    });
    currentInstance.$mount();
    document.body.appendChild(currentInstance.$el);

    let { verticalOffset } = currentInstance;
    currentInstances.forEach(
      item => (verticalOffset += item.$el.offsetHeight + betweenSpace)
    );
    currentInstance.verticalOffset = verticalOffset;
    currentInstance.id = zIndex;
    currentInstance.$el.style.zIndex = zIndex++;
    currentInstance.show();
    currentInstances.push(currentInstance);

    return currentInstance;
  }
}

// 返回Notify 实例
const NotifyInstace = function(...args) {
  return handleInstance(undefined, ...args);
};

// 返回 promise 关闭触发成功回调
const Notify = function(...args) {
  return new Promise(resolve => {
    handleInstance(resolve, ...args);
  });
};

typeList.forEach(msgType => {
  Notify[msgType] = function(content, duration) {
    const options = {
      status: msgType,
      content
    };

    if (!isEmpty(duration)) {
      options.duration = duration;
    }

    Notify(options);
  };
  NotifyInstace[msgType] = function(content, duration) {
    const options = {
      status: msgType,
      content
    };

    if (!isEmpty(duration)) {
      options.duration = duration;
    }

    return NotifyInstace(options);
  };
});

Notify.instance = NotifyInstace;
Notify.setOptions = function(args) {
  if (isObject(args)) {
    Object.assign(_globalOptions, args);
  }
};

export { NotifyInstace };
export default Notify;

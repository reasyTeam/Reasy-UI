import Vue from "vue";
import Notification from "./v-notification.vue";
import { isObject } from "../libs";

const NotifyConstructor = Vue.extend(Notification);
const betweenSpace = 16;

let instance = {},
  zIndex = 1000,
  instances = {};

const Nofify = function(...args) {
  return new Promise(resolve => {
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
        resolve(currentInstance);
      };

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
    }
  });
};

export default Nofify;

import Message from "./message/message.js";
import Notification from "./notification/notification.js";
//全局指令
import Derectives from "./directives";
if (window.langData === undefined) {
  window.langData = {};
}
if (typeof window._ !== "function") {
  window._ = function(key, replacements) {
    var nkey = window.langData[key],
      index,
      count = 0;

    if (nkey === undefined) {
      nkey = key.replace(/^[a-zA-Z]#[a-zA-Z][a-zA-Z][a-zA-Z]#/g, "");
      nkey = window.langData[nkey] || nkey;
    }

    if (!replacements) {
      return nkey;
    }
    if (replacements instanceof Array && replacements.length !== 0) {
      while ((index = nkey.indexOf("%s")) !== -1) {
        nkey =
          nkey.slice(0, index) + replacements[count] + nkey.slice(index + 2);
        count = count + 1 === replacements.length ? count : count + 1;
      }
    } else if (typeof replacements === "string") {
      index = nkey.indexOf("%s");
      nkey = nkey.slice(0, index) + replacements + nkey.slice(index + 2);
    }
    return nkey;
  };
}

const install = function(Vue) {
  Vue.use(Derectives);
  //触发组件的祖先事件
  Vue.prototype.$dispatch = function(componentName, name, ...arsg) {
    if (this.$options.name === componentName || this === this.$root) {
      this.$emit(name, ...arsg);
    } else {
      this.$parent.$dispatch(componentName, name, ...arsg);
    }
  };

  Vue.prototype._ = window._;

  Vue.prototype.$message = Message;
  Vue.prototype.$notify = Notification;

  Vue.prototype.$getLabelWidth = function() {
    if (this.$options.name === "v-form" || this === this.$root) {
      return this.labelWidth || "auto";
    }
    return this.$parent.$getLabelWidth();
  };
};

export default {
  install
};

import Vue from "vue";
import Dialog from "./v-dialog.vue";
import { isObject } from "../libs";

const MsgConstructor = Vue.extend(Dialog);

let instance; //单例
let _globalOptions = {}; //全部默认配置参数

/**
 * 确认提示框
 * 使用方法：this.$confirm("确认删除数据吗", "删除")
 * @param {String} content - 弹窗文本内容
 * @param {String} title - 弹窗标题
 * @param {object} options - 弹窗的props属性对象
 * @returns {Promise} 将实例传出去
 */
const confirmDialog = function(
  content = _("请确认是否删除?"),
  title = _("提示"),
  options = {}
) {
  return new Promise(resolve => {
    options = Object.assign({}, _globalOptions, options);

    //先移除弹窗
    if (instance) {
      if (options.appendToId) {
        const dom = document.getElementById(options.appendToId);
        dom && dom.removeChild(instance.$el);
      } else {
        document.body.removeChild(instance.$el);
      }
    }
    //创建弹窗
    instance = new MsgConstructor({
      propsData: {
        name: "confirm-dialog-instance",
        title: title,
        content: content,
        appendToBody: true,
        ...options
      }
    });
    instance.$mount();

    instance.$on("input", () => {
      // reject(instance);
      instance.value = false;
    });
    instance.$on("confirm", () => {
      resolve(instance);
      instance.value = false;
    });
    instance.value = true;
  });
};

confirmDialog.setOptions = function(args) {
  if (isObject(args)) {
    Object.assign(_globalOptions, args);
  }
};

export default confirmDialog;

import { isEmpty, isObject, on, off } from "../libs";
import Tooltip from "../tooltip/v-tooltip";

let startClick;
let seed = 0;
let nodeList = [];
const ctx = "@@clickoutsideContext";

const tooltipConfig = {
  // 存放多实例对象
  tooltipVms: new Map(),
  /**
   * 获取new实例时传入的参数
   * @param {DOM} el - 绑定指令的DOM元素
   */
  getOptions(el) {
    return {
      mounted() {
        this.$nextTick(() => {
          const popupsVm = this.$refs.popups;
          // 点击该parentElm元素不会执行v-clickoutside的方法
          popupsVm.parentElm = el;
          if (popupsVm.visible) {
            popupsVm.popupsDomProps = popupsVm.$refs.popups.getBoundingClientRect();
            popupsVm.referenceDomProps = el.getBoundingClientRect();
          }

          on(el, "click", popupsVm.handleClick);
          on(el, "mouseenter", popupsVm.handleMouseenter);
          on(el, "mouseleave", popupsVm.handleMouseleave);
        });
      },
      beforeDestroy() {
        const popupsVm = this.$refs.popups;

        off(el, "click", popupsVm.handleClick);
        off(el, "mouseenter", popupsVm.handleMouseenter);
        off(el, "mouseleave", popupsVm.handleMouseleave);
      }
    };
  },
  getProps(el, { value }) {
    let props = {};

    if (isEmpty(value)) {
      // 不传任何参数，取子元素字符串
      props.content = el.innerText;
    } else if (isObject(value)) {
      // 传入配置参数
      props = { ...value };
      if (!value.content) {
        // 配置参数中content为空，取子元素字符串
        props.content = el.innerText;
      }
    } else {
      // 其它情况，传入字符串
      props.content = value;
    }

    return props;
  },
  /**
   * 将props传入tooltip实例中
   * @param {DOM} el - 绑定指令的DOM元素
   * @param {Object} binding - 指令传入的参数配置
   */
  setPropsInVm(el, binding) {
    const { tooltipVms, getProps } = tooltipConfig,
      currentTooltipVm = tooltipVms.get(el),
      tooltipProps = getProps(el, binding);

    for (let key in tooltipProps) {
      currentTooltipVm[key] = tooltipProps[key];
    }
  }
};

document.addEventListener("mousedown", e => (startClick = e));
document.addEventListener("mouseup", e => {
  nodeList.forEach(node => {
    if (!node.contains(e.target)) {
      //当点击元素不是当前node的子元素时
      node[ctx].documentHandler(e, startClick);
    }
  });
});

function createDocumentHandler(el, binding, vnode) {
  return function(mouseup = {}, mousedown = {}) {
    if (
      !vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.parentElm &&
        (vnode.context.parentElm.contains(mouseup.target) ||
          vnode.context.parentElm.contains(mousedown.target)))
    )
      return;

    if (
      binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]
    ) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

const install = function(Vue) {
  let directiveConfig = {
    clickoutside: {
      bind(el, binding, vnode) {
        nodeList.push(el);
        const id = seed++;
        el[ctx] = {
          id,
          documentHandler: createDocumentHandler(el, binding, vnode),
          methodName: binding.expression,
          bindingFn: binding.value
        };
      },
      update(el, binding, vnode) {
        el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
        el[ctx].methodName = binding.expression;
        el[ctx].bindingFn = binding.value;
      },

      unbind(el) {
        let len = nodeList.length;
        if (!el[ctx]) {
          return;
        }
        for (let i = 0; i < len; i++) {
          if (nodeList[i][ctx].id === el[ctx].id) {
            nodeList.splice(i, 1);
            break;
          }
        }
        delete el[ctx];
      }
    },
    tooltip: {
      inserted(el, binding) {
        const tooltipInstance = Vue.extend(Tooltip),
          { tooltipVms, getOptions, setPropsInVm } = tooltipConfig,
          vm = new tooltipInstance(getOptions(el));

        tooltipVms.set(el, vm);

        setPropsInVm(el, binding);

        vm.$mount();
      },
      update(el, binding) {
        tooltipConfig.setPropsInVm(el, binding);
      },
      unbind(el) {
        //元素解绑时，去掉提示信息
        tooltipConfig.tooltipVms.get(el).hide();
      }
    }
  };

  for (let Vname in directiveConfig) {
    Vue.directive(Vname, directiveConfig[Vname]);
  }
  //过滤器
  Vue.filter("upperCase", function(value) {
    if (!value) return "";
    return value.toUpperCase();
  });
};

export default {
  install
};

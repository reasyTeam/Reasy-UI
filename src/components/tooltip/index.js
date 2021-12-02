import Tooltip from "./v-tooltip.vue";
import { isEmpty, isObject, on, off } from "../libs";

const tooltipConfig = {
  // 存放单例对象
  singleVm: null,
  // 存放多实例对象
  tooltipVms: new Map(),
  /**
   * 获取new实例时传入的参数
   * @param {DOM} el - 绑定指令的DOM元素
   */
  getOptions(el) {
    return {
      mounted() {
        const popupsVm = this.$refs.popups;
        // 点击该parentElm元素不会执行v-clickoutside的方法
        popupsVm.parentElm = el;
        this.$nextTick(() => {
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
    const { singleVm, tooltipVms, getProps } = tooltipConfig,
      currentTooltipVm = binding.modifiers.single
        ? singleVm
        : tooltipVms.get(el),
      tooltipProps = getProps(el, binding);

    for (let key in tooltipProps) {
      currentTooltipVm[key] = tooltipProps[key];
    }
  }
};

const install = function(Vue) {
  const tooltipComponent = Vue.extend(Tooltip);
  tooltipConfig.singleVm = new tooltipComponent();
  tooltipConfig.singleVm.enterable = false;

  let directiveConfig = {
    inserted(el, binding) {
      if (binding.modifiers.single) {
        // 单例处理
        const { singleVm, setPropsInVm } = tooltipConfig;
        !singleVm._isMounted && singleVm.$mount();

        const popupsVm = singleVm.$refs.popups;

        on(el, "mouseenter", () => {
          setPropsInVm(el, binding);
          popupsVm.parentElm = el;
          popupsVm.handleMouseenter();
        });
        on(el, "mouseleave", () => {
          popupsVm.handleMouseleave();
        });
      } else {
        const { tooltipVms, getOptions, setPropsInVm } = tooltipConfig,
          vm = new tooltipComponent(getOptions(el));

        tooltipVms.set(el, vm);

        setPropsInVm(el, binding);

        vm.$mount();
      }
    },
    update(el, binding) {
      if (!binding.modifiers.single) {
        tooltipConfig.setPropsInVm(el, binding);
      }
    },
    unbind(el, binding) {
      const { singleVm, setPropsInVm } = tooltipConfig,
        popupsVm = singleVm.$refs.popups;

      if (binding.modifiers.single) {
        off(
          el,
          "mouseenter",
          () => {
            setPropsInVm(el, binding);
            popupsVm.parentElm = el;
            popupsVm.handleMouseenter();
          },
          true
        );
        off(
          el,
          "mouseleave",
          () => {
            popupsVm.handleMouseleave();
          },
          true
        );
      } else {
        //元素解绑时，去掉提示信息
        tooltipConfig.tooltipVms.get(el).hide();
      }
    }
  };
  Vue.directive("tooltip", directiveConfig);
};

/* istanbul ignore next */
Tooltip.install = function(Vue) {
  Vue.component(Tooltip.name, Tooltip);
  install(Vue);
};

export default Tooltip;

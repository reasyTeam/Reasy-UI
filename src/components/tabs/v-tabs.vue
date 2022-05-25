<template>
  <div class="v-tabs form-group" :id="name">
    <div
      class="tab-nav"
      :class="[`tab-nav--${type}`, { 'tab-nav--disabled': disabled }]"
    >
      <div ref="tabNavActions" class="tab-nav-actions">
        <span
          class="tab-nav-item"
          :class="[
            `tab-nav--${size}`,
            {
              'tab-nav--active': item.value === currentValue,
              'tab-nav-item--disabled': item.disabled === true
            }
          ]"
          :ref="`refNavItems`"
          v-for="item in navCfgs"
          :key="item.value"
          :id="name | id(item.value)"
          @click="event => disabled || handleTabClick(item, event)"
        >
          {{ item.label }}
        </span>
      </div>
      <div
        v-if="type === 'link'"
        ref="tabActiveBorder"
        class="tab-active-border"
        :class="{ 'tab-active-border--transition': activeBorderTransition }"
      ></div>
    </div>
    <div class="tab-pane-wrapper" :id="name | id('content')">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { isEmpty } from "../libs";
import NameMixin from "../name-mixins";

export default {
  name: "v-tabs",
  mixins: [NameMixin],
  props: {
    value: String,
    type: {
      type: String,
      default: "link",
      validator(val) {
        return ["link", "card", "button", "tag"].includes(val);
      }
    },
    size: {
      type: String,
      default: "M",
      validator(val) {
        return ["S", "M", "L"].includes(val);
      }
    },
    lazy: {
      value: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    beforeLeave: Function
  },
  data() {
    return {
      panes: [],
      navCfgs: [],
      currentValue: this.value,
      activeBorderTransition: true // link类型切换是否有过渡动画  true有  false无
    };
  },
  created() {
    this.$on("tab-nav-update", () => this.calcPaneInstances(true));
  },
  mounted() {
    this.calcPaneInstances();
    this.calcNavConfig();
  },
  methods: {
    /**
     * 获取pane实例
     */
    calcPaneInstances(isForceUpdate = false) {
      const slotsDefault = this.$slots.default;
      if (slotsDefault) {
        // 取name为v-tab-pane的slot vnode
        const paneSlots = slotsDefault.filter(
          vnode =>
            vnode.tag &&
            vnode.componentOptions &&
            vnode.componentOptions.Ctor.options.name === "v-tab-pane"
        );

        // 分别取出v-tab-pane的实例
        this.panes = paneSlots.map(
          ({ componentInstance }) => componentInstance
        );

        if (isForceUpdate) {
          this.calcNavConfig();
        }
      } else if (this.panes.length !== []) {
        this.panes = [];
      }
    },

    /**
     * 通过实例获取标签栏（nav）的配置
     */
    calcNavConfig() {
      const { panes } = this;

      this.navCfgs = panes.map(({ label, value, disabled }) => ({
        label,
        value,
        disabled
      }));
    },

    /**
     * 处理tab点击事件
     * @param {Object} tab - 所点击的tab配置对象
     * @param {Object} event - 事件对象
     */
    handleTabClick(tab, event) {
      const { value, disabled } = tab;
      const tabVNode = this.panes.find(pane => pane.value === value);
      if (disabled) return;

      this.setCurrentValue(value);
      this.$emit("tab-click", tabVNode, event);
    },

    /**
     * 设置当前值
     * @param {String} value - 要设置的值
     */
    setCurrentValue(value) {
      const changeCurrentValue = () => {
        this.currentValue = value;
        this.$emit("input", value);
      };
      const { currentValue } = this;

      if (
        !isEmpty(currentValue) &&
        currentValue !== value &&
        this.beforeLeave
      ) {
        const before = this.beforeLeave(value, currentValue);
        if (before && before.then) {
          before.then(
            () => {
              changeCurrentValue();
            },
            () => {}
          );
        } else if (before !== false) {
          changeCurrentValue();
        }
      } else {
        changeCurrentValue();
      }
    },

    /**
     * type === 'link'时设置tab border样式
     */
    setTabActiveBorder(transition = true) {
      // 只有类型为link才设置选中时的border-bottom样式
      if (this.type !== "link") return;

      // tabNavActions: 标签页父级ref
      // tabActiveBorder: 标签页底部border样式，只针对type为'link'
      const { tabNavActions, tabActiveBorder, refNavItems } = this.$refs;

      if (refNavItems === undefined) return;

      this.activeBorderTransition = transition;
      this.$nextTick(() => {
        const active = refNavItems.find(item =>
            item.className.includes("tab-nav--active")
          ), // document.querySelector(".tab-nav--active")
          {
            left: activeLeft,
            width: activeWidth
          } = active.getBoundingClientRect(),
          { left: tabNavLeft } = tabNavActions.getBoundingClientRect();

        tabActiveBorder.style.width = `${activeWidth}px`;
        tabActiveBorder.style.left = `${activeLeft - tabNavLeft}px`;
      });
    }
  },
  watch: {
    currentValue() {
      this.setTabActiveBorder();
    },
    navCfgs(newValue, oldValue) {
      const cfg = newValue.find(({ value }) => this.currentValue === value);

      if (newValue.length > 0 && cfg === undefined) {
        // 没传入值，取第一个为当前值
        this.setCurrentValue(newValue[0].value);
      } else {
        // 标签数量不一致时，link类型删除过渡动画，一般用于动态显示/隐藏tab
        this.setTabActiveBorder(newValue.length === oldValue.length);
      }
    }
  }
};
</script>

<template>
  <!-- <div class="v-checkbox"> -->
  <div
    class="v-checkbox"
    :class="{ 'v-checkbox--disabled': isDisabled }"
    @click="clickCheckbox"
    :name="name"
    :data-name="_name"
    :id="name"
  >
    <span
      class="v-checkbox__icon"
      :id="name | id('icon')"
      :class="
        value === onValue
          ? 'v-checkbox__icon--active v-icon-ok'
          : hasValue
          ? 'v-checkbox__icon--active v-checkbox__process'
          : 'v-icon-check'
      "
    ></span>
    <span v-if="tooltip" v-tooltip="tooltip" class="v-checkbox__label">
      <slot></slot>
    </span>
    <span v-else-if="hasDefaultSlot" class="v-checkbox__label">
      <slot></slot>
    </span>
    <div class="v-checkbox__content" v-if="hasContentSlot">
      <slot name="content"></slot>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import FormMixin from "../form-mixins";
import NameMixin from "../name-mixins";
export default {
  name: "v-checkbox",
  mixins: [FormMixin, NameMixin],
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    },
    //是否有值，用于选项组中的的全选时
    hasValue: {
      type: Boolean,
      default: false
    },
    //选中值
    onValue: {
      type: [String, Number, Boolean],
      default: true
    },
    //未选中值
    offValue: {
      type: [String, Number, Boolean],
      default: false
    },
    //切换前执行事件，返回false时不会被选中
    beforeChange: {
      type: Function,
      default() {
        return true;
      }
    },
    changeCheck: {
      type: Boolean,
      default: true
    },
    tooltip: Object // 与v-tooltip指令配置相同
  },
  computed: {
    hasContentSlot() {
      return !!this.$slots.content || !!this.$scopedSlots.content;
    },
    hasDefaultSlot() {
      return !!this.$slots.default || !!this.$scopedSlots.default;
    }
  },
  methods: {
    clickCheckbox() {
      if (this.isDisabled) return;
      this.$emit("click", this.value);
      let result = this.beforeChange(this.value);
      if (result !== false) {
        this.$emit(
          "change",
          this.value === this.onValue ? this.offValue : this.onValue
        );
        this.changeCheck && this.checkValid(this.value);
      }
    }
  }
};
</script>

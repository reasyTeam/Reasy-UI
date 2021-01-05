<template>
  <div class="v-checkbox">
    <label
      class="v-checkbox__item"
      :class="{ 'v-checkbox__item--disabled': disabled }"
      @click="clickCheckbox"
    >
      <span
        class="v-checkbox__icon"
        :class="
          value === onValue
            ? 'v-checkbox__icon--active v-icon-checkbox-checked'
            : hasValue
            ? 'v-checkbox__icon--active v-icon-minus-square'
            : 'v-icon-checkbox'
        "
      ></span>
      <span class="v-checkbox__label">
        <slot></slot>
      </span>
    </label>
  </div>
</template>
<script>
import FormMixin from "../form-mixins";
export default {
  name: "v-checkbox",
  mixins: [FormMixin],
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: [String, Number, Boolean],
    name: String,
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
    }
  },
  methods: {
    clickCheckbox() {
      if (this.disabled) return;
      this.$emit("click", this.value);
      this.$emit(
        "change",
        this.value === this.onValue ? this.offValue : this.onValue
      );
    }
  }
};
</script>

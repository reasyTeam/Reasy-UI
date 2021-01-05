<template>
  <div class="v-radio">
    <div class="v-radio__list" :name="name">
      <label
        v-for="item in optionList"
        :key="item.value"
        @click="clickRadio(item)"
        class="v-radio__item"
        :class="{
          'v-radio__item--disabled': disabled || item.disabled
        }"
      >
        <span
          class="v-radio__icon"
          :value="item.value"
          :class="[
            item.value === value
              ? 'v-radio__icon--active v-icon-ok-plane'
              : 'v-icon-radio'
          ]"
        >
        </span>
        <span class="v-radio__label">{{ item.label }}</span>
      </label>
    </div>
    <div class="v-form-item__content__msg is-error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>
<script>
import FormMixin from "../form-mixins";
export default {
  name: "v-radio",
  mixins: [FormMixin],
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: [String, Number, Boolean],
    name: String,
    //选项
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //切换前执行事件，返回false时不会被选中
    beforeChange: {
      type: Function,
      default() {
        return true;
      }
    }
  },
  computed: {
    //选项数组
    optionList() {
      let list = [];
      this.options.forEach(item => {
        if (typeof item === "object") {
          list.push(item);
        } else {
          list.push({
            label: String(item),
            value: item,
            disabled: false
          });
        }
      });
      return list;
    }
  },
  methods: {
    clickRadio(options) {
      //禁用或选项禁用
      if (this.disabled || options.disabled) return;

      this.$emit("click", options.value);
      let result = this.beforeChange(options.value);
      if (result !== false) {
        this.$emit("change", options.value);
      }
    }
  }
};
</script>

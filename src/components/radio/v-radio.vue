<template>
  <div class="v-radio" :id="name">
    <div class="v-radio__list" :name="name">
      <label
        v-for="item in optionList"
        :key="item.value"
        @click="clickRadio(item)"
        class="v-radio__item"
        :class="{
          'v-radio__item--disabled': isDisabled || item.disabled
        }"
        :id="name | id(item.value)"
      >
        <!-- 单选图标 -->
        <span
          class="v-radio__icon"
          :value="item.value"
          :data-name="_name"
          :class="[
            item.value === value
              ? 'v-radio__icon--active v-icon-radio-checked'
              : 'v-icon-radio'
          ]"
        >
        </span>
        <!-- 单选文字 -->
        <span class="v-radio__label">{{ item.label }}</span>
        <span class="v-radio__label v-radio__label_tips" v-if="item.tips">{{
          item.tips
        }}</span>
      </label>
    </div>
    <!-- 错误信息 -->
    <!-- <div class="v-form-item__content__msg is-error" v-if="error">
      {{ error }}
    </div> -->
  </div>
</template>

<script>
import FormMixin from "../form-mixins";
import NameMixin from "../name-mixins";
export default {
  name: "v-radio",
  mixins: [FormMixin, NameMixin],
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: [String, Number, Boolean],
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
      if (this.isDisabled || options.disabled) return;

      this.$emit("click", options.value);
      let result = this.beforeChange(options.value);
      //  不相等时触发change
      if (result !== false && options.value !== this.value) {
        this.$emit("change", options.value);
        this.$dispatch("v-form", "form:change");
        this.checkValid(options.value);
      }
    }
  }
};
</script>

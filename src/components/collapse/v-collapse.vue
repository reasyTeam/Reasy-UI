<template>
  <div class="v-collapse border-b" :class="{ disabled: isDisabled }" :id="name">
    <div
      class="v-collapse__header"
      :class="{ 'is-active': isActive }"
      @click="change(!isActive)"
    >
      <slot name="title">{{ title }}</slot>
      <i
        class="v-collapse__arrow v-icon-down"
        :id="name | id('icon')"
        :class="{ 'is-active': isActive }"
      ></i>
    </div>
    <collapse-transition>
      <div class="v-collapse__item" v-show="isActive">
        <div class="v-collapse__item__content">
          <slot>{{ text }}</slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import CollapseTransition from "./collapse-transition";
import NameMixin from "../name-mixins";

export default {
  name: "v-collapse",
  mixins: [NameMixin],
  props: {
    title: String,
    actived: {
      type: Boolean,
      default: false
    },
    text: String,
    disabled: {
      type: [Boolean, String]
    }
  },
  data() {
    return {
      isActive: this.actived
    };
  },
  computed: {
    isDisabled() {
      return this.disabled === true || this.disabled === "";
    }
  },
  watch: {
    actived(value) {
      this.isActive = value;
    }
  },
  model: {
    prop: "actived",
    event: "change"
  },
  components: {
    "collapse-transition": CollapseTransition
  },
  methods: {
    change(val) {
      if (this.isDisabled) {
        return;
      }

      this.isActive = val;
      this.$emit("change", val);
    }
  }
};
</script>

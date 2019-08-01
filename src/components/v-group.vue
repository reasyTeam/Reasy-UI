<template>
  <div :class="['form-group', vname, css||'', {'special':special, disabled:(dataKey && dataKey.disabled)}]" v-show="show !== false">
    <label :class="['form-title', {'focus':isFocus}]" @click="focus" v-if="hasTitle">{{title}}</label>
    <div class="form-content">
      <component ref="formItem" :is="vname" :forId="forId" :dataKey="dataKey" v-if="vname"></component>
      <slot v-else></slot>
    </div>
  </div>
</template>
<script>
import { isDefined, isNotNullOrEmpty } from "./libs.js";
const specialNames = ["v-input", "v-select"];
export default {
  name: "v-group",
  props: ["css", "show", "title", "dataKey", "vname"],
  data() {
    return {
      hasTitle: true
    };
  },
  computed: {
    isFocus() {
      return (
        this.special &&
        (this.dataKey.placeholder ||
          (this.$refs.formItem && this.$refs.formItem.focused) ||
          isNotNullOrEmpty(this.dataKey.val))
      );
    },
    special() {
      return this.vname && specialNames.indexOf(this.vname) > -1;
    }
  },
  methods: {
    focus() {
      this.special && this.$refs.formItem.focus && this.$refs.formItem.focus();
    }
  },
  mounted() {
    if (isDefined(this.title)) {
      this.hasTitle = true;
    } else {
      this.hasTitle = false;
    }
  }
};
</script>

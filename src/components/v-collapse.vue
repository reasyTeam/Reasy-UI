<template>
  <div class="v-collapse border-b form-group">
    <div class="v-collapse-header" :class="{'is-active':active}" @click="active = !active">
      {{title}}
      <i class="v-collapse-arrow v-icon-arrrow-down" :class="{'is-active':active}"></i>
    </div>
    <el-collapse-transition>
      <div class="v-collapse-item" v-show="active">
        <div class="v-collapse-item-content">
          <slot></slot>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import ElCollapseTransition from "./util/collapse-transition";
export default {
  name: "v-collapse",
  props: ["title"],
  data() {
    return {
      active: false
    };
  },
  components: { ElCollapseTransition }
};
</script>

<template>
  <r-page>
    <v-popconfirm
      ref="popconfirm"
      class="demo1"
      icon="v-icon-ok-plane"
      title="popver title popver title popver xxxxxxx"
      position="top-center"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
      <v-button slot="reference">demo</v-button>
    </v-popconfirm>
  </r-page>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleConfirm() {
      console.log("Click confirm button");
      // this.$refs.popconfirm.show();
    },
    handleCancel() {
      console.log("Click cancel button");
    }
  }
};
</script>

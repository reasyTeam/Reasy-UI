<template>
  <r-page>
    <section class="alert-section">
      <v-alert
        class="alert-box"
        type="success"
        title="success title"
        @close="close"
      ></v-alert>
      <v-alert
        class="alert-box"
        type="warn"
        title="warn title"
        @close="close"
      ></v-alert>
      <v-alert
        class="alert-box"
        type="info"
        title="info title"
        @close="close"
      ></v-alert>
      <v-alert
        class="alert-box"
        type="error"
        title="error itle"
        @close="close"
      ></v-alert>
    </section>

    <section class="alert-section">
      <v-alert
        class="alert-box"
        type="success"
        title="success title"
        :show-details-button="true"
        :show-close="false"
        @handle-details-click="handleDetailsClick"
      ></v-alert>
      <v-alert
        class="alert-box"
        type="warn"
        title="warn title"
        :show-details-button="true"
        :show-close="false"
        @handle-details-click="handleDetailsClick"
      ></v-alert>
      <v-alert
        class="alert-box"
        type="info"
        title="info title"
        :show-details-button="true"
        :show-close="false"
        @handle-details-click="handleDetailsClick"
      ></v-alert>
      <v-alert
        class="alert-box"
        type="error"
        title="error itle"
        :show-details-button="true"
        :show-close="false"
        @handle-details-click="handleDetailsClick"
      ></v-alert>
    </section>

    <section class="alert-section">
      <v-alert
        class="alert-box"
        type="success"
        title="success title"
        icon="v-icon-ok-line"
        description="error content error content error content error content error content error content"
        @close="close"
        >error content error content error content error content error content
        error content error content error content error content error content
        error content error content error content error</v-alert
      >
      <v-alert
        class="alert-box"
        type="warn"
        title="warn title"
        icon="v-icon-remind-line"
        description="error content error content error content error content error content error content"
        @close="close"
      ></v-alert>
      <v-alert
        class="alert-box"
        type="info"
        title="info title"
        icon="v-icon-help-line"
        :show-icon="false"
        @close="close"
        >error content error content error content error content error content
        error content</v-alert
      >
      <v-alert
        class="alert-box"
        type="error"
        title="error title"
        icon="v-icon-close-line"
        @close="close"
        :align-center="true"
        >error content error content error content error content error content
        error content</v-alert
      >
    </section>
  </r-page>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleDetailsClick() {
      console.log("details btn has been click");
    },
    close() {
      console.log("alert box has been closed");
    }
  }
};
</script>
<style lang="scss">
.alert-section {
  padding: 20px 20px 40px;
  .alert-box {
    & + .alert-box {
      margin-top: 20px;
    }
  }
}
</style>

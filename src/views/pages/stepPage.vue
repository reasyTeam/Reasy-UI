<template>
  <r-page>
    <section class="steps-demo">
      <v-steps :active="active">
        <v-step
          title="step1"
          description="this is a long long long long description"
        ></v-step>
        <v-step
          title="step2"
          description="this is a long long long long description"
        ></v-step>
        <v-step
          title="step3"
          description="this is a long long long long description"
        ></v-step>
        <v-step
          title="step4"
          description="this is a long long long long description"
        ></v-step>
      </v-steps>

      <div class="next-step-btn-wrapper">
        <v-button class="next-step-btn" @click="handleButtonClick"
          >next step</v-button
        >
      </div>
    </section>

    <section class="steps-demo">
      <v-steps :align-center="false" :space="100">
        <v-step
          title="process"
          description="this is a long long long long description"
        ></v-step>
        <v-step
          status="wait"
          title="wait"
          description="this is a long long long long description"
        ></v-step>
        <v-step
          status="error"
          title="error"
          description="this is a long long long long description"
        ></v-step>
        <v-step
          status="finish"
          title="finish"
          description="this is a long long long long description"
        ></v-step>
        <v-step
          status="disabled"
          title="disabled"
          description="this is a long long long long description"
        ></v-step>
      </v-steps>
    </section>

    <section class="steps-demo">
      <v-steps>
        <v-step
          icon="v-icon-edit"
          title="edit"
          description="this is a long long long long description"
        ></v-step>
        <v-step
          icon="v-icon-image"
          title="image"
          description="this is a long long long long description"
        ></v-step>
        <v-step
          icon="v-icon-calendar"
          title="calendar"
          description="this is a long long long long description"
        ></v-step>
        <v-step
          icon="v-icon-time"
          title="time"
          description="this is a long long long long description"
        ></v-step>
      </v-steps>
    </section>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    handleButtonClick() {
      if (this.active++ >= 4) this.active = 0;
      console.log(this.active);
    }
  }
};
</script>
<style lang="scss">
.steps-demo {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid $border-color;

  .next-step-btn-wrapper {
    text-align: center;
    .next-step-btn {
      margin-top: 20px;
    }
  }
}
</style>

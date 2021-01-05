<template>
  <r-page>
    <r-h
      tag="h1"
      title="百分比图"
      desc="用于表示在一个内容中占该内容整体的百分之多少"
    >
      <v-row :gutter="4">
        <v-col :span="8">
          <v-chart-percent
            :height="200"
            :value="val"
            :colors="[
              '#6ebbff',
              '#7ee6f2',
              '#ace06f',
              '#ffcd58',
              '#b792f7',
              '#ff7348'
            ]"
            :color-value="[0.2, 0.4, 0.5, 0.7, 0.85, 1]"
          ></v-chart-percent>
        </v-col>
        <v-col :span="8">
          <v-chart-percent
            title="圆环"
            :height="200"
            :value="val1"
            :colors="['#ACE06F', '#FFCD58', '#FF7348']"
            :color-value="[0.4, 0.6, 1]"
          ></v-chart-percent>
        </v-col>
        <v-col :span="8">
          <v-chart-percent
            :height="200"
            :value="val2"
            :colors="['#ACE06F', '#FFCD58', '#FF7348']"
            :color-value="[0.4, 0.6, 1]"
          ></v-chart-percent>
        </v-col>
      </v-row>
    </r-h>
    <r-h tag="h1" title="进度条">
      <v-row :gutter="4">
        <v-col :span="24">
          <v-chart-percent
            type="line"
            :height="100"
            :value="val"
            :colors="[
              '#6ebbff',
              '#7ee6f2',
              '#ace06f',
              '#ffcd58',
              '#b792f7',
              '#ff7348'
            ]"
            :color-value="[0.2, 0.35, 0.5, 0.65, 0.8, 1]"
          ></v-chart-percent>
        </v-col>
      </v-row>
      <v-row :gutter="4">
        <v-col :span="24">
          <v-chart-percent
            title="直线"
            type="line"
            :height="100"
            :value="val3"
            :colors="['#ACE06F']"
            :color-value="[0.4, 0.7, 1]"
          ></v-chart-percent>
        </v-col>
      </v-row>
    </r-h>
  </r-page>
</template>

<script>
export default {
  data() {
    return {
      val: 0,
      val1: 0.7,
      val2: 0.55,
      val3: 0.2
    };
  },
  methods: {
    change() {
      this.interval = setInterval(() => {
        this.val += 0.05;
        if (this.val >= 1) {
          this.val = 0;
        }
      }, 1000);
    }
  },
  mounted() {
    this.change();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<template>
  <r-page>
    <r-h tag="h1" title="饼图"></r-h>
    <r-h tag="h2" title="demo">
      <v-row>
        <v-col :span="24">
          <v-chart-pie
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :height="300"
            :series="[
              15,
              25,
              45,
              75,
              35,
              55,
              15,
              55,
              15,
              55,
              25,
              35,
              15,
              45,
              25,
              15,
              78,
              18,
              28,
              38,
              25,
              33
            ]"
            :categories="[
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22
            ]"
          ></v-chart-pie>
        </v-col>
      </v-row>
    </r-h>
    <r-h tag="h2" title="demo">
      <v-row :gutter="4">
        <v-col :span="12">
          <v-chart-pie
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :height="300"
            :series="[5, 5, 5, 35, 5, 5, 5, 5, 5, 25, 5, 5, 5, 5, 5, 50]"
            :categories="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
          ></v-chart-pie>
        </v-col>
        <v-col :span="12">
          <v-chart-pie
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :height="300"
            :series="[5, 5, 15, 5, 5, 5, 25, 5, 5, 5, 35, 5, 5, 5, 25, 5]"
            :categories="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]"
          ></v-chart-pie>
        </v-col>
      </v-row>
    </r-h>
    <r-h tag="h2" title="demo">
      <v-row :gutter="4">
        <v-col :span="12">
          <v-chart-pie
            animation=""
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :height="300"
            :series="[720, 901, 634, 990, 1030]"
            :categories="['Jim', 'Lucy', 'Lily', 'Adele', 'N>ovak']"
          ></v-chart-pie>
        </v-col>
        <v-col :span="12">
          <v-chart-pie
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :height="300"
            :series="[100, 10, 10, 10, 10, 10, 10, 10, 10, 10]"
            :categories="categories"
          ></v-chart-pie>
        </v-col>
      </v-row>
    </r-h>
  </r-page>
</template>

<script>
import { CHART_DATA_SERIES_PIE, CHART_DATA_CATEGORIES_PIE } from "./chart-data";

export default {
  data() {
    return {
      series: CHART_DATA_SERIES_PIE,
      categories: CHART_DATA_CATEGORIES_PIE
    };
  }
};
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid $border-color;
  border-radius: 4px;
}

.v-row {
  margin: 4px 0;
}
</style>

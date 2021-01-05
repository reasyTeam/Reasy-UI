<template>
  <r-page>
    <r-h
      tag="h1"
      title="柱状图 v-chart-bar"
      desc="表征分类型变量 vs 数值型变量的关系。"
    >
    </r-h>
    <r-h
      tag="h2"
      title="使用"
      desc="使用图形的长度、宽度、位置、面积和颜色来比较数值的大小，通常用于展示不同分类间的数值对比。"
    >
      <v-row :gutter="4">
        <v-col :span="24">
          <v-chart-bar
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :height="400"
            :showValue="true"
            :categories="CHART_DATA_CATEGORIES_LONG"
            @click="log"
          ></v-chart-bar>
        </v-col>
      </v-row>
      <v-row :gutter="4">
        <v-col :span="9">
          <v-chart-bar
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES"
            :height="300"
            :categories="CHART_DATA_CATEGORIES"
          ></v-chart-bar>
        </v-col>
        <v-col :span="15">
          <v-chart-bar
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :height="300"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></v-chart-bar>
        </v-col>
      </v-row>
      <v-row :gutter="4">
        <v-col :span="14">
          <v-chart-bar
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES"
            :height="300"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></v-chart-bar>
        </v-col>
        <v-col :span="10">
          <v-chart-bar
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :height="300"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></v-chart-bar>
        </v-col>
      </v-row>
    </r-h>
  </r-page>
</template>

<script>
import {
  CHART_DATA_SERIES,
  CHART_DATA_CATEGORIES,
  CHART_DATA_CATEGORIES_LONG,
  CHART_DATA_SERIES1
} from "./chart-data";
export default {
  data() {
    return {
      CHART_DATA_SERIES,
      CHART_DATA_SERIES1,
      CHART_DATA_CATEGORIES,
      CHART_DATA_CATEGORIES_LONG
    };
  },
  methods: {
    log(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
.border {
  border: 1px solid $border-color;
  border-radius: 4px;
}

.v-row {
  margin: 4px 0;
}
</style>

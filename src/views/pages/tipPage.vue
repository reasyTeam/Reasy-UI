<template>
  <r-page>
    <r-h tag="h2" title="12个方向">
      <div class="position-12">
        <v-row>
          <v-col :offset="3" :span="2">
            <v-tooltip content="top left" position="top-left">
              <v-button>TL</v-button>
            </v-tooltip>
          </v-col>
          <v-col :offset="1" :span="2">
            <v-tooltip content="top center" position="top-center">
              <v-button>T</v-button>
            </v-tooltip>
          </v-col>
          <v-col :offset="1" :span="2">
            <v-tooltip content="top bottom" position="top-right">
              <v-button>TR</v-button>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row class="left-right-row">
          <v-col :offset="1" :span="2">
            <v-tooltip content="left top" position="left-top">
              <v-button>LT</v-button>
            </v-tooltip>
          </v-col>
          <v-col :offset="8" :span="2">
            <v-tooltip content="right top" position="right-top">
              <v-button>RT</v-button>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row class="left-right-row">
          <v-col :offset="1" :span="2">
            <v-tooltip content="left center" position="left-center">
              <v-button>L</v-button>
            </v-tooltip>
          </v-col>
          <v-col :offset="8" :span="2">
            <v-tooltip content="right center" position="right-center">
              <v-button>R</v-button>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row class="left-right-row">
          <v-col :offset="1" :span="2">
            <v-tooltip content="left bottom" position="left-bottom">
              <v-button>LB</v-button>
            </v-tooltip>
          </v-col>
          <v-col :offset="8" :span="2">
            <v-tooltip content="right bottom" position="right-bottom">
              <v-button>RB</v-button>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-row class="left-right-row">
          <v-col :offset="3" :span="2">
            <v-tooltip content="bottom left" position="bottom-left">
              <v-button>BL</v-button>
            </v-tooltip>
          </v-col>
          <v-col :offset="1" :span="2">
            <v-tooltip content="bottom center" position="bottom-center">
              <v-button>B</v-button>
            </v-tooltip>
          </v-col>
          <v-col :offset="1" :span="2">
            <v-tooltip content="bottom right" position="bottom-right">
              <v-button>BR</v-button>
            </v-tooltip>
          </v-col>
        </v-row>
      </div>
    </r-h>

    <v-button class="left-right-row" v-tooltip="customContent"
      >常规用法</v-button
    >
    <v-button
      class="left-right-row"
      v-tooltip="{ content: longContent, maxWidth: 200 }"
      >最大宽度</v-button
    >
    <v-button
      class="left-right-row"
      v-tooltip="{ content: customContent, enterable: false }"
      >鼠标不可移入</v-button
    >
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      customContent: "custom content",
      longContent:
        "this is a long long long long long long long long long long long content"
    };
  },
  mounted() {
    setTimeout(() => {
      this.customContent = "ok";
    }, 5000);
  }
};
</script>
<style lang="scss">
.demo {
  color: $main-active-color;
  font-size: 18px;
  font-weight: 600;
}
.left-right-row {
  margin-top: 20px;
}
</style>

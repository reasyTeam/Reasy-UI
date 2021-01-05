<template>
  <r-page>
    <r-h
      tag="h1"
      title="Loading 加载"
      desc="小的用于文本加载，默认用于卡片区域容器级加载，大的用于页面级加载。旋转速度：1.2s转一圈。合适的加载动效会有效缓解用户的焦虑。"
    ></r-h>
    <r-h tag="h2" title="基本用法" desc="一个简单加载状态。">
      <v-row :gutter="12">
        <v-col :span="12">
          <div class="loading-box">
            <v-loading :visible="true"></v-loading>
          </div>
        </v-col>
        <v-col :span="12">
          <div class="loading-box">
            <v-loading text="描述信息" :visible="true"></v-loading>
          </div>
        </v-col>
      </v-row>
    </r-h>
    <r-h tag="h2" title="has-mask" desc="是否需要遮罩">
      <v-row :gutter="12">
        <v-col :span="12">
          <div class="loading-box loading-mask">
            has-mask="true"
            <v-loading :visible="true"></v-loading>
          </div>
        </v-col>
        <v-col :span="12">
          <div class="loading-box loading-mask">
            has-mask="false"
            <v-loading :has-mask="false" :visible="true"></v-loading>
          </div>
        </v-col>
      </v-row>
    </r-h>
    <r-h tag="h2" title="background" desc="不同颜色展示。">
      <v-row :gutter="12">
        <v-col :span="8">
          <div class="loading-box">
            <v-loading background="#1890ff" :visible="true"></v-loading>
          </div>
        </v-col>
        <v-col :span="8">
          <div class="loading-box">
            <v-loading :visible="true"></v-loading>
          </div>
        </v-col>
        <v-col :span="8">
          <div class="loading-box">
            <v-loading background="#d82228" :visible="true"></v-loading>
          </div>
        </v-col>
      </v-row>
    </r-h>
    <r-h
      tag="h2"
      title="size"
      desc="小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。"
    >
      <v-row :gutter="12">
        <v-col :span="8">
          <div class="loading-box">
            <v-loading text="size: L" size="L" :visible="true"></v-loading>
          </div>
        </v-col>
        <v-col :span="8">
          <div class="loading-box">
            <v-loading text="size: M" size="M" :visible="true"></v-loading>
          </div>
        </v-col>
        <v-col :span="8">
          <div class="loading-box">
            <v-loading text="size: S" size="S" :visible="true"></v-loading>
          </div>
        </v-col>
      </v-row>
    </r-h>

    <r-h
      tag="h2"
      title="text"
      desc="描述信息文本。如果需要自定义，可以使用default slot."
    >
      <div class="loading-box">
        <v-loading text="描述信息文本" :visible="true"></v-loading>
      </div>
    </r-h>

    <r-h tag="h2" title="slot" desc="自定义文本信息，default slot.">
      <div class="loading-box">
        <v-loading :visible="true">
          <label style="color: #fff; background-color: rgb(255,0,0);">我</label>
          <label style="color: #fff; background-color: rgba(255,165,0);"
            >是</label
          >
          <label style="color: #fff; background-color: rgba(255,255,0);"
            >自</label
          >
          <label style="color: #fff; background-color: rgba(0,255,0);"
            >定</label
          >
          <label style="color: #fff; background-color: rgba(0,127,255);"
            >义</label
          >
          <label style="color: #fff; background-color: rgba(139,0,255);"
            >内</label
          >
          <label style="color: #fff; background-color: rgba(0,0,255);"
            >容</label
          >
        </v-loading>
      </div>
    </r-h>
  </r-page>
</template>

<script>
export default {};
</script>

<style lang="scss">
.loading-box {
  height: 160px;
  border-radius: 2px;
  border: 1px solid #f0f0f0;
  position: relative;
  color: #000;
}

.loading-mask {
  background-color: #000;
  color: #fff;
}
</style>

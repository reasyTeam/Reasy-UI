<template>
  <r-page>
    <r-h tag="h1" title="滚动条" desc="demo">
      <v-row :gutter="24">
        <v-col :span="12">
          <v-scroll style="border: 1px solid #eee;" :height="200">
            <div style="  width: 400px; word-break:break-word; padding:  12px;">
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll
            </div>
          </v-scroll>
        </v-col>
        <v-col :span="12">
          <v-scroll
            style="border: 1px solid #eee;"
            :height="200"
            :isBlock="false"
          >
            <div style="  width: 400px; word-break:break-word; padding:  12px;">
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll
            </div>
          </v-scroll>
        </v-col>
      </v-row>
    </r-h>

    <r-h tag="h1" title="滚动条" desc="demo">
      <v-row :gutter="24">
        <v-col :span="12">
          <v-scroll
            style="border: 1px solid #eee;"
            :height="200"
            :isBlock="false"
            :width="300"
          >
            <div style="  width: 400px; word-break:break-word; padding:  12px;">
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll
            </div>
          </v-scroll>
        </v-col>
        <v-col :span="12"
          ><v-scroll
            style="border: 1px solid #eee;"
            height="auto"
            :isBlock="false"
          >
            <div style="  width: 400px; word-break:break-word; padding:  12px;">
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
              v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
            </div>
          </v-scroll></v-col
        >
      </v-row>
    </r-h>

    <r-h tag="h1" title="滚动条" desc="demo" style="width: 300px;">
      <v-scroll style="border: 1px solid #eee;" :height="200">
        <div style="  width: 400px; word-break:break-word; padding:  12px;">
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll v-scroll
          v-scroll v-scroll
        </div>
      </v-scroll>
    </r-h>

    <r-h tag="h2" title="属性配置">
      <v-row :gutter="8">
        <v-col :span="10">
          <div>scrollToX: 100</div>
          <v-scroll style="border: 1px solid #eee;" :height="200" :toX="100">
            <div style="height: 1000px;  width: 600px">
              scrollToX="100" scrollToX="100" scrollToX="100" scrollToX="100"
              scrollToX="100" scrollToX="100" scrollToX="100" scrollToX="100"
              scrollToX="100" scrollToX="100" scrollToX="100" scrollToX="100"
              scrollToX="100" scrollToX="100" scrollToX="100"
            </div>
          </v-scroll>
        </v-col>

        <v-col :offset="2" :span="10">
          <div>scrollToY: 100</div>
          <v-scroll
            style="border: 1px solid #eee;"
            :height="200"
            :to-y="100"
            :width="200"
          >
            <div>
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100" scrollToY="100" scrollToY="100"
              scrollToY="100" scrollToY="100"
            </div>
          </v-scroll>
        </v-col>
      </v-row>
      <v-row :gutter="8">
        <v-col :span="12">
          <div>scrollToIndex: 3</div>
          <v-scroll style="border: 1px solid #eee;" :height="200" :toIndex="3">
            <ul>
              <li
                v-for="i in 20"
                :key="i"
                style="padding: 12px; border-bottom: 1px solid #eee;"
              >
                第{{ i }}个
              </li>
            </ul>
          </v-scroll>
        </v-col>
      </v-row>
    </r-h>

    <r-h tag="h2" title="overflow">
      <v-row :gutter="24">
        <v-col :span="8">
          overflow: x
          <v-scroll
            style="border: 1px solid #eee;"
            overflow="x"
            :height="200"
            ref="scroll"
          >
            <ul style="width: 400px;">
              <li
                v-for="i in 20"
                :id="'selector' + i"
                :key="i"
                style="padding: 12px; border-bottom: 1px solid #eee;"
              >
                selector#{{ i }}
              </li>
            </ul>
          </v-scroll>
        </v-col>
        <v-col :span="8">
          overflow: y
          <v-scroll
            style="border: 1px solid #eee;"
            overflow="y"
            :height="200"
            ref="scroll"
          >
            <ul>
              <li
                v-for="i in 20"
                :id="'selector' + i"
                :key="i"
                style="padding: 12px; border-bottom: 1px solid #eee;"
              >
                selector#{{ i }}
              </li>
            </ul>
          </v-scroll>
        </v-col>
        <v-col :span="8">
          overflow: hidden
          <v-scroll
            style="border: 1px solid #eee;"
            overflow="hidden"
            :height="200"
            ref="scroll"
          >
            <ul>
              <li
                v-for="i in 20"
                :id="'selector' + i"
                :key="i"
                style="padding: 12px; border-bottom: 1px solid #eee;"
              >
                selector#{{ i }}
              </li>
            </ul>
          </v-scroll>
        </v-col>
      </v-row>
    </r-h>

    <r-h tag="h2" title="Methods">
      <v-row>
        <v-col :span="12">
          <div>
            scrollTo(selector)
            <button @click.stop.prevent="toIndex('#selector8')">
              滚动到selector#8
            </button>
          </div>

          <v-scroll style="border: 1px solid #eee;" :height="200" ref="scroll">
            <ul>
              <li
                v-for="i in 20"
                :id="'selector' + i"
                :key="i"
                style="padding: 12px; border-bottom: 1px solid #eee;"
              >
                selector#{{ i }}
              </li>
            </ul>
          </v-scroll>
        </v-col>
      </v-row>
    </r-h>

    <r-h tag="h1" title="v-x-scroll">
      <v-row :gutter="12">
        <v-col :span="12">
          <v-x-scroll :count="count" :width="200">
            <ul>
              <li
                v-for="i in 20"
                :key="i"
                style="padding: 12px; border-bottom: 1px solid #eee;"
              >
                第{{ i }}个
              </li>
            </ul>
          </v-x-scroll>
          <button @click.stop.prevent="changeCount">显示{{ count }}行</button>
        </v-col>
        <v-col :span="12">
          <v-x-scroll :count="count1" :width="200">
            <ul>
              <li
                v-for="i in 6"
                :key="i"
                style="padding: 12px; border-bottom: 1px solid #eee;"
              >
                第{{ i }}个
              </li>
            </ul>
          </v-x-scroll>
          <button @click.stop.prevent="changeCount1">切换({{ count1 }})</button>
        </v-col>
      </v-row>
    </r-h>
  </r-page>
</template>

<script>
export default {
  data() {
    return {
      count: 7,
      count1: 7
    };
  },
  methods: {
    toIndex(selector) {
      this.$refs.scroll.scrollTo(selector);
    },
    changeCount() {
      this.count = ~~(Math.random() * 20);
    },
    changeCount1() {
      this.count1 = ~~(Math.random() * 20);
    }
  }
};
</script>

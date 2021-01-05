<template>
  <r-page>
    <div class="popover-page">
      <r-h tag="h2" title="12个方向">
        <div class="position-12">
          <v-row>
            <v-col :offset="3" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="top-left"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>TL</v-button>
                </template>
              </v-popover>
            </v-col>
            <v-col :offset="1" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="top-center"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>T</v-button>
                </template>
              </v-popover>
            </v-col>
            <v-col :offset="1" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="top-right"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>TR</v-button>
                </template>
              </v-popover>
            </v-col>
          </v-row>
          <v-row class="left-right-row">
            <v-col :offset="1" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="left-top"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>LT</v-button>
                </template>
              </v-popover>
            </v-col>
            <v-col :offset="8" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="right-top"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>RT</v-button>
                </template>
              </v-popover>
            </v-col>
          </v-row>
          <v-row class="left-right-row">
            <v-col :offset="1" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="left-center"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>L</v-button>
                </template>
              </v-popover>
            </v-col>
            <v-col :offset="8" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="right-center"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>R</v-button>
                </template>
              </v-popover>
            </v-col>
          </v-row>
          <v-row class="left-right-row">
            <v-col :offset="1" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="left-bottom"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>LB</v-button>
                </template>
              </v-popover>
            </v-col>
            <v-col :offset="8" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="right-bottom"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>RB</v-button>
                </template>
              </v-popover>
            </v-col>
          </v-row>
          <v-row class="left-right-row">
            <v-col :offset="3" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="bottom-left"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>BL</v-button>
                </template>
              </v-popover>
            </v-col>
            <v-col :offset="1" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="bottom-center"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>B</v-button>
                </template>
              </v-popover>
            </v-col>
            <v-col :offset="1" :span="2">
              <v-popover
                class="demo1"
                title="popver title"
                trigger="hover"
                position="bottom-right"
              >
                popover content popover content popover content

                <template #reference>
                  <v-button>BR</v-button>
                </template>
              </v-popover>
            </v-col>
          </v-row>
        </div>
      </r-h>

      <r-h tag="h2" title="other">
        <v-popover
          class="demo2"
          title="popver title"
          trigger="hover"
          position="top-center"
          width="auto"
        >
          popover content popover content popover content

          <template #reference>
            <v-button>autoWidth</v-button>
          </template>
        </v-popover>
        <v-popover
          class="demo2"
          title="popver title"
          trigger="click"
          position="top-center"
        >
          popover content
          <template #reference>
            <v-button>trigger: click</v-button>
          </template>
        </v-popover>
        <v-popover
          class="demo2"
          title="popver title"
          trigger="hover"
          position="top-center"
          transition="el-zoom-in-bottom"
        >
          popover content
          <template #reference>
            <v-button>transition</v-button>
          </template>
        </v-popover>
        <v-popover
          class="demo2"
          title="popver title"
          trigger="hover"
          position="top-center"
          :show-arrow="false"
        >
          popover content
          <template #reference>
            <v-button>hide arrow</v-button>
          </template>
        </v-popover>
        <v-popover
          class="demo2"
          title="popver title"
          trigger="hover"
          position="top-center"
          :enterable="false"
        >
          popover content
          <template #reference>
            <v-button>unenterable</v-button>
          </template>
        </v-popover>
        <v-popover
          class="demo2"
          title="popver title"
          trigger="hover"
          position="top-center"
          :open-delay="1000"
          :close-delay="1000"
        >
          popover content
          <template #reference>
            <v-button>open/close delay</v-button>
          </template>
        </v-popover>
        <section class="demo2">
          <v-popover
            class="demo2"
            title="popver title"
            trigger="hover"
            position="top-center"
            @visible-change="visibleChange"
          >
            popover content
            <template #reference>
              <v-button>visible change</v-button>
            </template>
          </v-popover>
          <span class="visible-message"
            >visible: <i :class="['visible-icon', ...iconClass]"></i
          ></span>
        </section>
      </r-h>
    </div>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      iconClass: ["v-icon-close-line", "error"]
    };
  },
  methods: {
    visibleChange(isShow) {
      this.iconClass = [
        `v-icon-${isShow ? "ok" : "close"}-line`,
        { success: isShow, error: !isShow }
      ];
    }
  }
};
</script>
<style lang="scss">
.popover-page {
  .position-12 {
    margin-top: 50px;
    margin-left: 50px;

    .left-right-row {
      margin-top: 20px;
    }
  }

  .demo2 + .demo2 {
    margin-top: 16px;
    margin-left: 16px;
  }

  .visible-message {
    margin-left: 10px;
    font-size: 12px;
    color: $title-color;
    .visible-icon {
      font-size: 16px;
      &.success {
        color: $success-color;
      }
      &.error {
        color: $error-color;
      }
    }
  }
}
</style>

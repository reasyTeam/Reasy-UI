<template>
  <div class="header-operate">
    <div class="operate-btn" @click="visibleChange" ref="operate">
      <div class="v-icon-more"></div>
    </div>
    <create-to-body width="180px" :show="dropdownShow" :style="style">
      <div
        ref="headDown"
        class="v-dropdown__menu table-operate__menu"
        :style="{ maxHeight: style.maxHeight }"
      >
        <v-scroll
          ref="headScroll"
          v-clickoutside="visibleChange"
          no-id
          overflow="y"
        >
          <div class="v-checkbox-trade v-checkbox-group">
            <v-checkbox
              no-id
              class="v-checkbox-group__item"
              v-model="isAllChecked"
              :disabled="isAllDisabled"
            >
              {{ _("All") }}
            </v-checkbox>
            <v-checkbox
              no-id
              class="v-checkbox-group__item"
              v-model="isDefaultChecked"
              :disabled="isDefaultDisabled"
            >
              {{ _("Default") }}
            </v-checkbox>
            <div class="line"></div>
            <!-- 选项 -->
            <v-checkbox-group
              v-model="value"
              :min="1"
              no-id
              :options="optionList"
            ></v-checkbox-group>
          </div>
        </v-scroll>
      </div>
    </create-to-body>
  </div>
</template>
<script>
import CreateToBody from "../create-to-body";

// 两个数组是否相等
function equal(a, b) {
  return (
    a.length === b.length &&
    a
      .slice()
      .sort()
      .toString() === b.toString()
  );
}

export default {
  components: {
    CreateToBody
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {},
    options: {},
    defaultSelected: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      dropdownShow: false,
      style: {
        maxHeight: 0,
        overflow: "auto",
        left: 0
      }
    };
  },
  computed: {
    //选项显示列表
    optionList() {
      let list = [];
      this.options.forEach(item => {
        if (typeof item === "object") {
          if (!item.hideInOperate) {
            list.push(item);
          }
        } else {
          list.push({
            label: String(item),
            value: item,
            disabled: false,
            hideInOperate: false
          });
        }
      });
      return list;
    },
    // 全部选中
    allChecked() {
      return this.options
        .map(item => {
          if (item.disabled && !this.defaultSelected.includes(item.value)) {
            this.defaultSelected.push(item.value);
          }
          return item.value;
        })
        .sort();
    },
    // 默认选中
    defaultChecked() {
      return this.defaultSelected.slice().sort();
    },
    // 最少选中
    defaultLeastChecked() {
      let list = [];
      this.optionList.forEach(item => {
        if (item.disabled) {
          list.push(item.value);
        }
      });
      if (list.length === 0 && this.defaultChecked.length > 0) {
        list = [this.defaultChecked[0]];
      }
      return list.sort();
    },
    isAllChecked: {
      get() {
        return equal(this.value, this.allChecked);
      },
      set(value) {
        this.selectAll(value);
      }
    },
    isDefaultChecked: {
      get() {
        return equal(this.value, this.defaultChecked);
      },
      set(value) {
        this.selectDefault(value);
      }
    },
    isAllDisabled() {
      let defaultStatus = equal(this.value, this.defaultChecked);
      if (this.allChecked.length == this.defaultChecked.length) {
        return defaultStatus;
      }
      return false;
    },
    isDefaultDisabled() {
      return equal(this.value, this.defaultChecked);
    }
  },
  methods: {
    selectAll(value) {
      this.value.splice(
        0,
        this.value.length,
        ...(value ? this.allChecked : this.defaultChecked)
      );
    },
    selectDefault(value) {
      this.value.splice(
        0,
        this.value.length,
        ...(value ? this.defaultChecked : this.defaultLeastChecked)
      );
    },
    visibleChange() {
      this.dropdownShow = !this.dropdownShow;
    }
  },
  watch: {
    dropdownShow(val) {
      if (val) {
        //body的高度
        let bodyHeight =
            document.documentElement.clientHeight || document.body.clientHeight,
          //横向滚动条宽度
          scrollLeft =
            (window.pageXOffset || document.documentElement.scrollLeft) +
            document.body.scrollLeft,
          //表头父元素位置
          parentRect = this.$refs.operate.getBoundingClientRect();
        //表头下拉框最大高度
        this.style.maxHeight = bodyHeight - parentRect.bottom + "px";
        this.$nextTick(() => {
          //表头下拉框位置
          let headDown = this.$refs.headDown.getBoundingClientRect();
          //表头下拉框左边距离
          this.style.left =
            scrollLeft +
            parentRect.left +
            parentRect.width -
            headDown.width +
            "px";
          //更新y轴滚动条
          this.$refs.headScroll.update();
        });
      } else {
        this.$emit("getCheckOperateData", this.value);
      }
    }
  }
};
</script>

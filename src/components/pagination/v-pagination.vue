<template>
  <div class="v-pagination" :class="{ 'v-pagination--border': border }">
    <div class="v-pagination__item" v-if="isShowTotal">
      {{ dataTips }}
    </div>
    <div class="v-pagination__item">
      <a
        class="v-pagination__button v-pagonation__icon v-icon-left"
        @click="gotoPage('prev')"
        :class="{
          'v-pagination__button--disabled': page === 1 || disabled,
          'v-pagination__button--border': border
        }"
      ></a>
      <a
        class="v-pagination__button"
        :class="{
          'v-pagination__button--active': footerBtn.value == page,
          'v-pagination__button--border':
            border &&
            footerBtn.value !== 'prevBtn' &&
            footerBtn.value !== 'nextBtn',
          'v-pagination__button--disabled': disabled,
          'v-icon-more': footerBtn.text === 'more'
        }"
        v-for="footerBtn in footer"
        :key="footerBtn.value"
        @click="gotoPage(footerBtn.value)"
      >
        <template v-if="footerBtn.text !== 'more'">{{
          footerBtn.text
        }}</template></a
      >
      <a
        class="v-pagination__button v-pagonation__icon v-icon-right"
        @click="gotoPage('next')"
        :class="{
          'v-pagination__button--disabled': page >= totalPage || disabled,
          'v-pagination__button--border': border
        }"
      ></a>
    </div>
    <div class="v-pagination__item" v-if="isShowTotalPage">
      <span>{{ _("Page %s/%s", [page, totalPage]) }}</span>
      <!-- <span>{{ "第" + page + "/" + totalPage + "页" }}</span> -->
    </div>
    <div class="v-pagination__item" v-if="isChangeSize">
      <span class="v-pagination__text">{{ _("P#erP#") }}</span>
      <v-select
        v-model="pageSizeValue"
        :size="border ? 'M' : 'S'"
        :disabled="disabled"
        class="v-pagination__select"
        :options="pageSizeOptionsFormat"
        @change="changeSize"
      ></v-select>
      <span class="v-pagination__text">{{ _("P#erP#") }}</span>
    </div>
    <div class="v-pagination__item" v-if="isInputPage">
      <span class="v-pagination__text">{{ _("Go to") }}</span>
      <v-input
        v-model="pageValue"
        :disabled="disabled"
        :size="border ? 'M' : 'S'"
        class="v-pagination__input"
        :allow="/^\d+$/"
        @change="gotoPage(pageValue)"
      ></v-input>
      <span class="v-pagination__text">{{ _("P#aGe#") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-pagination",
  model: {
    prop: "currentPage",
    event: "change"
  },
  props: {
    border: {
      type: Boolean,
      default: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: Number,
    pagerCount: {
      type: Number,
      default: 9
    },
    currentPage: Number,
    isShowTotal: {
      //是否显示总条目数
      type: Boolean,
      default: false
    },
    isShowTotalPage: {
      //是否显示总页数
      type: Boolean,
      default: false
    },
    isChangeSize: {
      //是否支持切换每页数
      type: Boolean,
      default: false
    },
    pageSizeOptions: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      }
    },
    isInputPage: {
      //是否支持手动输入页数
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    prevText: String,
    nexText: String
  },
  data() {
    return {
      page: 0,
      pageSizeValue: 10,
      pageValue: 1
    };
  },
  computed: {
    dataTips() {
      return _(`%s items in total`, [this.total || 0]);
    },
    totalPage() {
      return Math.ceil(this.total / this.pageSizeValue);
    },
    footer() {
      //获取页数组
      let footerArr = [];
      let i = 0;
      let pageIndex = Math.floor(this.pagerCount / 2);
      while (
        footerArr.length < this.pagerCount &&
        footerArr.length < this.totalPage
      ) {
        footerArr.push({
          text: this.page - pageIndex + i,
          value: this.page - pageIndex + i
        });
        i++;
      }

      //最小
      let startIndex = footerArr[0].text - 1;
      let endIndex = footerArr[footerArr.length - 1].text - this.totalPage;
      if (startIndex < 0) {
        footerArr.forEach(item => {
          item.text = item.text - startIndex;
          item.value = item.value - startIndex;
        });
      } else if (endIndex > 0) {
        footerArr.forEach(item => {
          item.text = item.text - endIndex;
          item.value = item.value - endIndex;
        });
      }

      if (this.totalPage > this.pagerCount) {
        if (this.page > this.pagerCount / 2) {
          //前面省略号
          footerArr[1] = {
            text: "more",
            value: "prevBtn"
          };
          footerArr[0] = {
            text: "1",
            value: "1"
          };
        }

        if (this.page <= this.totalPage - this.pagerCount / 2) {
          //后面省略号
          footerArr[this.pagerCount - 2] = {
            text: "more",
            value: "nextBtn"
          };
          footerArr[this.pagerCount - 1] = {
            text: this.totalPage,
            value: this.totalPage
          };
        }
      }
      return footerArr;
    },
    pageSizeOptionsFormat() {
      return this.pageSizeOptions.map(item => {
        return { label: `${item}${_("I#tem#")}`, value: item };
      });
    }
  },

  methods: {
    //跳转到下一页
    gotoPage(nextPage) {
      if (this.disabled) return;
      //切换页
      if (nextPage == "prev") {
        nextPage = this.page - 1;
        this.$emit("change-prev", nextPage);
      } else if (nextPage == "next") {
        nextPage = this.page + 1;
        this.$emit("change-next", nextPage);
      } else if (nextPage == "nextBtn") {
        nextPage = this.footer[this.footer.length - 3].value;
      } else if (nextPage == "prevBtn") {
        nextPage = this.footer[2].value;
      }

      //当下一页超出范围 或者下一页 == 当前页时
      if (+nextPage > this.totalPage) {
        nextPage = this.totalPage;
      } else if (+nextPage < 1) {
        nextPage = 1;
      }
      this.pageValue = String(nextPage);
      if (+nextPage === this.page) {
        return;
      }
      this.page = Number(nextPage);
      //当前页
      this.$emit("change-page", this.page);
    },
    changeSize(val) {
      this.$emit("change-size", val);

      if (this.totalPage < this.page) {
        this.page = 1;
        this.$emit("change-page", this.page);
      }
    }
  },
  watch: {
    currentPage: {
      handler(val) {
        this.page = val;
      },
      immediate: true
    },
    pageSize: {
      handler(pageSize) {
        this.pageSizeValue = pageSize;
      },
      immediate: true
    }
  }
};
</script>

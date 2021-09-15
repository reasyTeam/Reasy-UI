<template>
  <div class="v-list form-group" :class="computedListClass">
    <template v-if="options && options.length">
      <div
        class="v-list__meta"
        :class="computedListItemClass"
        v-for="(item, idx) in options"
        :key="item[rowKey] || idx"
        @click="$emit('click', item)"
      >
        <slot name="avatar">
          <div
            class="meta__avatar"
            v-if="item.avatar"
            :class="item.avatar | getAvatarByField('type')"
          >
            <img :src="item.avatar | getAvatarByField('src')" alt="avatar" />
          </div>
        </slot>
        <div class="meta__content">
          <slot name="title">
            <div class="meta__content-title">{{ item.title }}</div>
          </slot>
          <slot name="description">
            <div class="meta__content-desc">{{ item.description }}</div>
          </slot>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="v-list__empty-text">
        <slot name="empty-text">
          <p class="v-list__empty-text--default">{{ emptyText }}</p>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "v-list",
  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default() {
        return [
          /* 
          {
            avatar: "路径" 或 { src: "路径", type: "类型" },  // 其中类型有circle/square
            title: "标题",
            description: "其它信息"
          }
           */
        ];
      }
    },
    emptyText: {
      type: String,
      default: _("No Data")
    },
    devided: {
      type: Boolean,
      default: true
    },
    rowKey: {
      type: String,
      default: "index"
    }
  },
  computed: {
    computedListClass() {
      const classArr = [],
        optionsLen = this.options.length;

      if (this.bordered) {
        classArr.push("v-list--bordered");
      }

      if (this.devided && optionsLen) {
        classArr.push("v-list--border-bottom-none");
      }

      return classArr;
    },
    computedListItemClass() {
      const classArr = [];

      if (this.devided) {
        classArr.push("v-list__meta--devided");
      }

      return classArr;
    }
  },
  filters: {
    getAvatarByField(obj = {}, field = "src") {
      const defaultType = "circle", // 头像默认为圆形
        isObject = typeof obj === "object";

      let val = obj[field];

      if (field === "type") {
        val = isObject ? val || defaultType : defaultType;
      } else {
        val = isObject ? val : obj;
      }

      return val;
    }
  }
};
</script>

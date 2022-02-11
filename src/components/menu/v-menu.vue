<template>
  <div
    :style="{ width: menuWidth + 'px' }"
    :class="['menu', isIpcom ? 'ipcom' : 'tenda']"
  >
    <slot name="header"></slot>
    <!-- 一级菜单 -->
    <router-link
      v-for="menuFirst in routes"
      :key="menuFirst.name"
      :to="
        (isRouter && !menuFirst.meta.disabled && redirectPath(menuFirst)) || ''
      "
    >
      <div
        :class="['menu-first menu-el', menuFirstCss(menuFirst)]"
        @click="clickFirst(menuFirst)"
      >
        <slot name="menuFirst" :menuFirst="menuFirst">
          <!-- 默认一级菜单内容 -->
          <span :class="['menu-text', menuFirst.meta && menuFirst.meta.icon]">{{
            menuFirst.meta.title
          }}</span>
          <span
            v-if="menuFirst.children && menuFirst.children.length"
            :class="[
              'menu-first-suffix  v-icon-down',
              { menu__close: menuFirst.name == activeFirst && openSecEn }
            ]"
          ></span>
        </slot>
      </div>
      <!-- 二级菜单 -->
      <div
        v-show="menuFirst.children"
        :ref="`secMenu-${menuFirst.name}`"
        class="menu-sec-wrap"
      >
        <div>
          <router-link
            v-for="menuSec in menuFirst.children"
            :key="menuSec.name"
            :to="(isRouter && !menuSec.meta.disabled && menuSec.path) || ''"
            :class="['menu-sec menu-el menu-text', menuSecCss(menuSec)]"
            @click.native="clickSec(menuSec)"
          >
            <slot name="menuSecond" :menuSec="menuSec">{{
              menuSec.meta.title
            }}</slot>
          </router-link>
        </div>
      </div>
    </router-link>
    <div class="menu-footer"><slot name="footer"></slot></div>
  </div>
</template>
<script>
export default {
  name: "v-menu",
  props: {
    isIpcom: {
      type: Boolean,
      default: false
    },
    routes: Array,
    menuWidth: {
      type: Number,
      default: 225
    },
    isRouter: {
      //是否为vue-router模式
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeFirst: "", // active的一级菜单
      activeSec: "", //active的二级菜单,
      openSecEn: false //是否展开二级菜单
    };
  },
  watch: {
    $route: {
      handler(obj) {
        if (this.isRouter) {
          //使用路由模式时，支持监听路由变化来更新当前选中的一级菜单和二级菜单
          this.routes.forEach(element => {
            if (element.name == obj.name) {
              this.activeFirst = obj.name;
              this.activeSec = "";
              return;
            } else if (element.children) {
              element.children.forEach(el => {
                if (el.name == obj.name) {
                  this.activeFirst = element.name;
                  this.activeSec = el.name;
                  return;
                }
              });
            }
          });
          this.openSecEn = true; //路由切换时二级菜单展开状态重置为开
        }
      },
      immediate: true
    },

    activeFirst: {
      //展开or折叠菜单
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          if (oldVal) {
            this.$refs[`secMenu-${oldVal}`] && this.setSecHeight(oldVal, false);
            this.$emit("close", oldVal);
          }
          newVal && this.activeSec && this.setSecHeight(newVal, true);
          this.$emit("open", newVal);
        });
      },
      immediate: true
    }
  },
  methods: {
    //设置二级菜单高度
    setSecHeight(name, isShow) {
      this.$nextTick(() => {
        let dom = this.$refs[`secMenu-${name}`][0];
        dom.style.height = isShow
          ? window.getComputedStyle(dom.firstChild).height
          : 0;
      });
    },

    menuFirstCss(menuFirst) {
      if (menuFirst.name == this.activeFirst) {
        return menuFirst.children
          ? "menu-first__active"
          : "menu-first__active menu-sec__active";
      }
      if (menuFirst.meta.disabled) {
        return "menu-first__disabled";
      }
    },

    menuSecCss(menuSec) {
      return menuSec.name == this.activeSec
        ? "menu-sec__active"
        : menuSec.meta.disabled
        ? "menu-sec__disabled"
        : "";
    },

    clickFirst(menuFirst) {
      if (menuFirst.meta.disabled) {
        return;
      }
      //点击当前active的菜单
      if (menuFirst.name == this.activeFirst) {
        this.openSecEn = !this.openSecEn;
        menuFirst.children && this.setSecHeight(menuFirst.name, this.openSecEn);
      } else {
        this.activeFirst = menuFirst.name;
        this.activeSec = menuFirst.children ? menuFirst.children[0].name : "";
        this.openSecEn = true;
      }
      this.$emit("clickFirst", menuFirst);
    },

    clickSec(menuSec) {
      if (menuSec.meta.disabled) {
        return;
      }
      this.activeSec = menuSec.name;
      this.$emit("clickSec", menuSec);
    },

    //点击展开的一级菜单时，保持当前选中的二级路由不变
    redirectPath(menuFirst) {
      return menuFirst.name == this.activeFirst &&
        menuFirst.children &&
        menuFirst.children[0].name !== this.activeSec
        ? ""
        : menuFirst.path;
    },

    initSelectMenu() {
      this.activeFirst = this.routes[0].name;
      if (this.routes[0].children) {
        this.activeSec = this.routes[0].children[0].name;
        this.openSecEn = true;
      }
    }
  },
  mounted() {
    //非路由模式时设置第一个为默认选中路由
    !this.isRouter && this.initSelectMenu();
  }
};
</script>

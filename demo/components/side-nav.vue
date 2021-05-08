<template>
  <div
    class="side-nav"
    @mouseenter="isFade = false"
    :class="{ 'is-fade': isFade }"
  >
    <ul>
      <li class="nav-item" v-for="(item, key) in data" :key="key">
        <a v-if="!item.path && !item.href">
          {{ item.name }}
        </a>
        <a v-if="item.href" :href="item.href" target="_blank">
          {{ item.name }}
        </a>
        <router-link
          v-if="item.path"
          active-class="active"
          :to="base + item.path"
          exact
          v-text="item.title || item.name"
        >
        </router-link>
        <ul class="pure-menu-list sub-nav" v-if="item.children">
          <li
            class="nav-item"
            v-for="(navItem, key) in item.children"
            :key="key"
          >
            <router-link
              class=""
              active-class="active"
              :to="base + navItem.path"
              exact
              v-text="navItem.title || navItem.name"
            >
            </router-link>
          </li>
        </ul>
        <template v-if="item.groups">
          <div class="nav-group" v-for="(group, key) in item.groups" :key="key">
            <v-collapse
              :actived="true"
              :title="group.groupName"
              @change="$emit('change')"
            >
              <ul class="pure-menu-list">
                <li
                  class="nav-item"
                  v-for="(navItem, key) in group.list"
                  v-show="!navItem.disabled"
                  :key="key"
                >
                  <router-link
                    active-class="active"
                    :to="base + navItem.path"
                    exact
                    v-text="navItem.title"
                  ></router-link>
                </li>
              </ul>
            </v-collapse>
          </div>
        </template>
      </li>
    </ul>
    <!--<div id="code-sponsor-widget"></div>-->
  </div>
</template>
<script>
import vCollapse from "../../src/components/collapse/v-collapse.vue";
// import bus from '../bus';
// import compoLang from '../i18n/component.json';

export default {
  components: { vCollapse },
  props: {
    data: Array,
    base: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      highlights: [],
      navState: [],
      isSmallScreen: false,
      isFade: false
    };
  },
  watch: {
    "$route.path"() {
      this.handlePathChange();
    },
    isFade() {
      // bus.$emit('navFade', val);
    }
  },
  computed: {
    lang() {
      return this.$route.meta.lang;
    }
    // langConfig() {
    //   return compoLang.filter(config => config.lang === this.lang)[0]['nav'];
    // }
  },
  methods: {
    handleResize() {
      this.isSmallScreen = document.documentElement.clientWidth < 768;
      this.handlePathChange();
    },
    handlePathChange() {
      if (!this.isSmallScreen) {
        this.expandAllMenu();
        return;
      }
      this.$nextTick(() => {
        this.hideAllMenu();
        let activeAnchor = this.$el.querySelector("a.active");
        let ul = activeAnchor.parentNode;
        while (ul.tagName !== "UL") {
          ul = ul.parentNode;
        }
        ul.style.height = "auto";
      });
    },
    hideAllMenu() {
      [].forEach.call(this.$el.querySelectorAll(".pure-menu-list"), ul => {
        ul.style.height = "0";
      });
    },
    expandAllMenu() {
      [].forEach.call(this.$el.querySelectorAll(".pure-menu-list"), ul => {
        ul.style.height = "auto";
      });
    },
    expandMenu(event) {
      if (!this.isSmallScreen) return;
      let target = event.currentTarget;
      if (
        !target.nextElementSibling ||
        target.nextElementSibling.tagName !== "UL"
      )
        return;
      this.hideAllMenu();
      event.currentTarget.nextElementSibling.style.height = "auto";
    }
  },
  created() {
    // bus.$on('fadeNav', () => {
    //   this.isFade = true;
    // });
  },
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>
<style lang="scss">
.side-nav {
  width: 256px;
  box-sizing: border-box;
  transition: opacity 0.3s;
  border-right: 1px solid #e9e9e9;

  &.is-fade {
    transition: opacity 3s;
  }

  li {
    list-style: none;
  }

  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  > ul > .nav-item > a {
    margin-top: 15px;
  }

  > ul > .nav-item:nth-child(-n + 4) > a {
    margin-top: 0;
  }

  .nav-item {
    a {
      color: #262626;
      line-height: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: 0.15s ease-out;
      font-weight: 500;
      padding-left: 24px;

      &.active {
        color: #ff801f;
        background-color: #fff5e4;
      }
    }

    .nav-item {
      a {
        display: block;
        height: 40px;
        color: #595959;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;

        &:hover {
          color: #ff801f;
        }
        &.active {
          color: #ff801f;
          background-color: #fff5e4;
        }
      }
    }

    &.sponsors {
      & > .sub-nav {
        margin-top: -10px;
      }

      & > a {
        color: #777;
        font-weight: 300;
        font-size: 14px;
      }

      .nav-item {
        display: inline-block;

        a {
          height: auto;
          display: inline-block;
          vertical-align: middle;
          margin: 8px 12px 12px 0;

          img {
            width: 42px;
          }
        }

        &:first-child a img {
          width: 36px;
        }
      }
    }
  }

  .nav-group__title {
    font-size: 12px;
    color: #8d8d8d;
    line-height: 26px;
    margin-top: 15px;
    padding-left: 24px;
  }

  #code-sponsor-widget {
    margin: 0 0 0 -20px;
  }
}
.nav-dropdown-list {
  width: 120px;
  margin-top: -8px;
  li {
    font-size: 14px;
  }
}

.nav-group {
  .v-collapse {
    font-size: 0;
    border-color: transparent;
  }

  .v-collapse__header {
    padding-left: 24px;
  }
  .v-collapse__header,
  .v-collapse__arrow {
    height: 40px;
    line-height: 40px;
  }
  .v-collapse__arrow {
    transform: scale(0.7);
    &.is-active {
      transform: scale(0.7) rotate(180deg);
    }
  }
  .v-collapse__header.is-active {
    background-color: transparent;
  }
  .v-collapse__item {
    background-color: transparent;
    border-color: transparent;
    padding: 0;
  }
  .v-collapse__item__content {
    padding: 0;
  }
}
</style>

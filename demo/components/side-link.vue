<template>
  <nav class="side-link">
    <div class="side-link__bar">
      <span class="side-link__bar__btn" :style="style"></span>
    </div>
    <ul class="side-link__list">
      <li
        class="side-link__list__item"
        v-for="(node, i) in links"
        :key="i"
        :class="{ active: active === i }"
        @click="scroll(node.top)"
      >
        {{ node.text }}
      </li>
    </ul>
  </nav>
</template>

<script>
import ResizeObserver from "resize-observer-polyfill";
import tween from "../../src/components/easing-function";

export default {
  data() {
    return {
      links: [],
      active: 0
    };
  },
  computed: {
    style() {
      let translate = this.active * 24;
      return {
        "-webkit-transform": `translate(-100%, ${translate}px)`,
        "-ms-transform": `translate(-100%, ${translate}px)`,
        transform: `translate(-100%, ${translate}px)`
      };
    }
  },
  methods: {
    calculate() {
      let wrapper = this.wrapper;
      if (wrapper) {
        let list = Array.from(wrapper.children).filter(
          node => node.tagName === "H2" || node.tagName === "H3"
        );
        let res = [];
        list.forEach(node => {
          res.push({
            text: node.lastChild.textContent.trim(),
            top: node.offsetTop - 100
          });
        });
        this.links.splice(0, this.links.length, ...res);
      }
    },
    scroll(top) {
      let start = document.documentElement.scrollTop,
        end = top;

      tween(
        start,
        end,
        state => {
          document.documentElement.scrollTop = state;
        },
        300,
        "easeOutQuad"
      );
    },

    scrollHandler() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(() => {
        if (
          document.documentElement.scrollHeight - 50 <=
          document.documentElement.scrollTop +
            document.documentElement.offsetHeight
        ) {
          this.active = this.links.length - 1;
          return;
        }
        let top = document.documentElement.scrollTop;
        let i = 0;
        for (; i < this.links.length; i++) {
          if (this.links[i].top > top) {
            if (i > 0) {
              i--;
            }
            this.active = i;
            break;
          }
        }
      }, 50);
    }
  },
  mounted() {
    this.wrapper = document.querySelector(".reasy-doc");
    this.calculate();
    window.addEventListener("scroll", this.scrollHandler);

    const ro = new ResizeObserver(() => {
      this.calculate();
    });

    ro.observe(document.body);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandler);
  }
};
</script>

<style lang="scss">
.side-link {
  position: fixed;
  top: 120px;
  right: 24px;
  padding-left: 24px;
  background-color: #fff;

  &__bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    text-align: center;
    height: 100%;

    &:before {
      content: "";
      display: inline-block;
      height: 100%;
      width: 0;
      border-left: 1px solid #ebebeb;
    }

    &__btn {
      position: absolute;
      top: 1px;
      width: 0;
      height: 24px;
      border-left: 1px solid #ff801f;
      transition: transform 0.3s;
    }
  }

  &__list {
    list-style: none !important;
    margin: 0;
    padding: 0;
    &__item {
      height: 24px;
      font-size: 12px;
      font-weight: 400;
      color: #595959;
      line-height: 24px;
      cursor: pointer;
      transition: color 0.3s;

      &.active {
        color: #ff801f;
      }
    }
  }
}
</style>

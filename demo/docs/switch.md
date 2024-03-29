# 开关

切换两种状态，开启或关闭。
## 按需引用

```js
import { Base, Switch } from "@reasy-team/reasy-ui";

Vue.use(Switch);
Vue.use(Base);
```

## 基本用法

::: demo

```html
<v-switch name="switch" v-model="enable"></v-switch>

<script>
  export default {
    data() {
      return {
        enable: false
      };
    }
  };
</script>
```

:::

## 开关大小

::: demo

```html
<div class="input-group">
  <div>L</div>
  <v-switch size="L" name="switch-l" v-model="enable"></v-switch>
</div>
<div class="input-group">
  <div>M</div>
  <v-switch size="M" name="switch-m" v-model="enable"></v-switch>
</div>
<div class="input-group">
  <div>S</div>
  <v-switch size="S" name="switch-s" v-model="enable"></v-switch>
</div>
<script>
  export default {
    data() {
      return {
        enable: false
      };
    }
  };
</script>
```

:::

## 开启关闭值

`on-value`开启时的值，`off-value`关闭时的值

::: demo

```html
<v-switch on-value="on" name="switch-on" off-value="off" v-model="enable"></v-switch>

<script>
  export default {
    data() {
      return {
        enable: "on"
      };
    }
  };
</script>
```

:::

开启或关闭时的文字

::: demo

```html
<v-switch on-text="开启" off-text="关闭" name="switch-off" v-model="enable"></v-switch>

<script>
  export default {
    data() {
      return {
        enable: false
      };
    }
  };
</script>
```

:::

## 禁用

::: demo

```html
<div class="input-group">
  <v-switch disabled v-model="enable" name="enable1"></v-switch>
</div>

<div class="input-group">
  <v-switch disabled v-model="enable1" name="enable2"></v-switch>
</div>

<script>
  export default {
    data() {
      return {
        enable: true,
        enable1: false
      };
    }
  };
</script>
```

:::

## Props

| 参数            | 说明                                                | 类型                      | 可选值    | 默认值                   |
| --------------- | --------------------------------------------------- | ------------------------- | --------- | ------------------------ |
| value / v-model | 绑定值                                              | string / number / boolean | —         | —                        |
| no-id       | 是否不需要id，为false则以`name`作为id，除特殊情况，表单中使用必须添加id         | boolean  | - | false|
| name        | 原生属性name，同时渲染为id属性，当`no-id`为false时**必填**  | string  | - | -   |
| disabled        | 是否禁用                                            | boolean                   | —         | false                    |
| on-value        | 选中时的值                                          | string / number / boolean | —         | true                     |
| off-value       | 未选中时的值                                        | string / number / boolean | —         | false                    |
| on-text         | 选中时的文字                                        | string                    | —         | —                        |
| off-text        | 未选中时的文字                                      | string                    | —         | —                        |
| before-change   | 开关值切换前的钩子，返回 false 时，不会改变开关状态 | function(value) {}        | —         | function() {return true} |
| size            | 开关大小                                            | string                    | S / M / L | M                        |

## @Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时触发 | 改变后的值 |

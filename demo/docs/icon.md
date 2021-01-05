## Icon 图标

图标是 UI 设计中必不可少的组成部分，既定含义通常为将某个概念转换成清晰易读的图形，从而降低用户的理解成本，提升界面的美观度。


### 使用图标

直接通过使用图标类名即可，例如：

::: demo 

```html
<i class="v-icon-edit"></i>
<i class="v-icon-add"></i>
<i class="v-icon-ok"></i>
<i class="v-icon-delete"></i>
```

:::

### 默认提供的图标

所有的图标名称加上`v-icon-`前缀使用即可。

::: demo:hide

```html
<ul class="list-icons">
  <li v-for="icon in icons" :key="icon" class="list-item">
    <i :class="'v-icon-' + icon"></i>
    <div class="item-text">{{ icon }}</div>
  </li>
</ul>

<script>
export default{
  data() {
    return {
      icons: [
        "minus-square",
        "add-square",
        "edit",
        "image",
        "help-plane",
        "close-plane",
        "ok-plane",
        "remind-plane",
        "help-line",
        "close-line",
        "ok-line",
        "remind-line",
        "ok",
        "close",
        "delete",
        "up",
        "add",
        "search",
        "right",
        "down",
        "left",
        "double-right",
        "double-left",
        "time",
        "calendar",
        "upload",
        "eye-on",
        "eye-off",
        "disable"
      ]
    }
  }
}
</script>
```

:::
## 分页

### 基本用法

::: demo

```html
<v-pagination :total="100" :current-page="5"></v-pagination>
```

:::

### 简单分页

::: demo

```html
<v-pagination :border="false" :total="100" :current-page="5"></v-pagination>
```

:::

### 禁用

::: demo

```html
<v-pagination :total="100" :current-page="5" disabled></v-pagination>
```

:::

高级用法

::: demo

```html
<div>显示总页</div>
<v-pagination
  :total="100"
  is-show-total-page
  :current-page="3"
></v-pagination>
<div>显示总条数</div>
<v-pagination
  :total="100"
  is-show-total
  :current-page="4"
></v-pagination>
<div>显示完整</div>
<v-pagination
  :total="100"
  is-show-total
  is-show-total-page
  is-change-size
  is-input-page
  :border="false"
  :current-page="5"
></v-pagination>
```

:::

### v-pagination Attributes

| 参数               | 说明                         | 类型     | 可选值                          | 默认值                    |
| ------------------ | ---------------------------- | -------- | ------------------------------- | ------------------------- |
| border             | 页码是否有边框               | boolean  | —                               | true                      |
| page-size          | 每页多少条                   | number   | —                               | 10                        |
| total              | 总条目数                     | number   | —                               | —                         |
| pager-count        | 页面按钮的数量，超过时会折叠 | number   | 大于等于 5 且小于等于 13 的奇数 | 9                         |
| current-page       | 当前页                       | number   | —                               | —                         |
| is-show-total      | 是否显示总条目数             | boolean  |                                 | false                     |
| is-show-total-page | 是否显示总页目数             | boolean  |                                 | false                     |
| is-change-size     | 是否支持修改每页条数         | boolean  | —                               | false                     |
| page-size-options  | 每页显示个数选择器的选项设置 | number[] | —                               | [10, 20, 30, 40, 50, 100] |
| is-input-page      | 是否支持手动输入页面         | boolean  | —                               | false                     |
| disabled           | 是否禁用                     | boolean  | —                               | false                     |
| prev-text          | 替代图标显示的上一页文字     | string   | —                               | —                         |
| next-text          | 替代图标显示的下一页文字     | string   | —                               | —                         |

### v-pagination Events

| 事件名      | 说明                               | 参数     |
| ----------- | ---------------------------------- | -------- |
| change-size | 每页条数改变后触发                 | 每页条数 |
| change-page | 当前页改变时会触发                 | 当前页   |
| click-prev  | 用户点击上一页按钮改变当前页后触发 | 当前页   |
| click-next  | 用户点击下一页按钮改变当前页后触发 | 当前页   |

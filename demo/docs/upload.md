## 文件上传

### 基本用法

::: demo

```html
<v-upload
  action="/cgi-bin/upload"
  ref="upload"
  :on-change="changeCallBack"
  ></v-upload>
</div>
<script>
  export default {
    methods: {
      changeCallBack() {
        this.$refs.upload.submit();
      }
    }
  };
</script>

```

:::

### 图片上传

`type` 配置上传的类型，支持`picture`和`text`，默认为`text`

::: demo

```html
<v-upload
  action="/cgi-bin/upload"
  ref="upload"
  type="picture"
  :on-change="changeCallBack"
  ></v-upload>
</div>
<script>
  export default {
    methods: {
      changeCallBack() {
        this.$refs.upload.submit();
      }
    }
  };
</script>

```

:::

### 禁用

::: demo

```html
<v-upload
  action="/cgi-bin/upload"
  ref="upload"
  disabled
  :on-change="changeCallBack"
  ></v-upload>
</div>
<script>
  export default {
    methods: {
      changeCallBack() {
        this.$refs.upload.submit();
      }
    }
  };
</script>

```

:::

图片禁用

::: demo

```html
<v-upload
  action="/cgi-bin/upload"
  ref="upload"
  disabled
  type="picture"
  :on-change="changeCallBack"
  ></v-upload>
</div>
<script>
  export default {
    methods: {
      changeCallBack() {
        this.$refs.upload.submit();
      }
    }
  };
</script>

```

:::

### v-upload Attributes

| 参数           | 说明                                                              | 类型               | 可选值       | 默认值 |
| -------------- | ----------------------------------------------------------------- | ------------------ | ------------ | ------ |
| name           | 上传的文件字段名                                                  | string             | —            | file   |
| action         | 必选参数，上传的地址                                              | string             | —            | —      |
| accept         | 接受上传的文件类型，例如 .bin                                     | string             |              |        |
| disabled       | 是否禁用                                                          | boolean            | —            | false  |
| data           | 上传时附带的额外参数                                              | object             | —            | —      |
| list-type      | 文件列表的类型，文本 图片                                         | string             | text/picture | text   |
| show-file-list | 是否显示已上传文件列表                                            | boolean            | —            | false  |
| on-success     | 文件上传成功时的钩子                                              | function(response) | —            | —      |
| on-change      | 文件改变时的钩子，添加文件或修改文件                              | function(file)     | —            | —      |
| before-upload  | 上传文件之前的钩子，参数为上传的文件，<br />若返回 false 则不上传 | function(file)     | —            | —      |

## v-upload Events

| 事件名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| submit | 手动上传文件列表 | —    |

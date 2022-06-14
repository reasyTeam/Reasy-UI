## 文件上传

选择本地文件上传的组件。
### 按需引用

```js
import { Base, Upload, Button } from "@reasy-team/reasy-ui";

Vue.use(Upload);
Vue.use(Button);
Vue.use(Base);
```

### 基本用法

::: demo

```html
<v-upload
  action="/cgi-bin/upload"
  ref="upload"
  name="upload"
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

### 文件上传

`type` 配置上传的类型，支持`picture`、`file`和`text`，默认为`text`

::: demo

```html
<v-upload
  action="/cgi-bin/upload"
  ref="upload"
  name="upload1"
  type="file"
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
  :showAddText="false"
  action="/cgi-bin/upload"
  ref="upload"
  name="upload-img"
  type="picture"
  :on-change="changeCallBack"
  ></v-upload>
<v-upload
  action="/cgi-bin/upload"
  ref="upload"
  name="upload-img"
  type="picture"
  :on-change="changeCallBack"
  ></v-upload>
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
  name="upload-d"
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

#### 文件禁用

::: demo

```html
<v-upload
  action="/cgi-bin/upload"
  ref="upload"
  disabled
  type="file"
  name="upload-file"
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

#### 图片禁用

::: demo

```html
<v-upload
  action="/cgi-bin/upload"
  ref="upload"
  disabled
  type="picture"
  name="upload-img-d"
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
| no-id       | 是否不需要id，为false则以`name`作为id，除特殊情况，表单中使用必须添加id         | boolean  | - | false|
| name        | 原生属性name，同时渲染为id属性，当`no-id`为false时**必填**  | string  | - | -   |
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

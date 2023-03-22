# 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 按需引用

```js
import { Base, Table, Scroll, Loading } from "@reasy-team/reasy-ui";

Vue.use(Table);
Vue.use(Scroll);
Vue.use(Loading);
Vue.use(Base);
```

## 基本用法

::: demo

```html
<v-table name="tbale1" :data="table1">
  <v-table-col type="index" label="22222"> </v-table-col>
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
  <v-table-col prop="age1" label="template">
    <template>测试</template>
  </v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333333333333333333333333333333333333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

## 表格大小

`size`控制表格大小，行高，默认`L`

表格 - 大

::: demo

```html
<v-table name="table2" size="L" :data="table1">
  <v-table-col type="index" label="22222"> </v-table-col>
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

表格 - 中

::: demo

```html
<v-table name="table3" size="M" :data="table1">
  <v-table-col type="index" label="22222"> </v-table-col>
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

表格 - 小

::: demo

```html
<v-table name="tbale4" size="S" :data="table1">
  <v-table-col type="index" label="22222"> </v-table-col>
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

## 斑马条纹

`stripe`配置表格斑马条纹

::: demo

```html
<v-table name="tbale5" :data="table1" stripe>
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

## 边框

`border`配置带边框表格

::: demo

```html
<v-table name="tbale6" :data="table1" border>
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

`border-side` 可以单独设置某一列的边框

::: demo

```html
<v-table name="tbale30" :data="table1">
  <v-table-col prop="ssid" label="SSID" border-side> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

## 自定义数据

`v-slot`配置当前列的自定义数据，必须与`template`搭配，`v-slot`的值为当前行的数据

::: demo

```html
<v-table name="tbale7" :data="table1">
  <v-table-col type="selection"></v-table-col>
  <v-table-col prop="ssid" label="SSID">
    <template v-slot="slotProps">
      当前SSID：{{ slotProps.ssid }}
    </template>
  </v-table-col>
  <v-table-col prop="ssid1" label="修改SSID">
    <template v-slot="slotProps">
      {{show(slotProps)}}
      <v-input no-id v-model="slotProps.ssid" :width="120"></v-input>
    </template>
  </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    },
    methods:{
      show(slotProps){
        console.log(slotProps);
        console.log(this.table1);
      }
    }
  };
</script>
```

:::

## 文字过长提示

::: demo

```html
<v-table name="tbale8" :data="table1">
  <v-table-col 
    prop="ssid" 
    label="SSID" 
    is-tooltip
    :tooltip-option="{
      effect: 'light',
      position: 'top-center'
    }"
  ></v-table-col>

  <v-table-col 
    prop="password" 
    label="密码" 
    is-tooltip
    :tooltip-option="{
      effect: 'light',
      position: 'top-center'
    }"
  ></v-table-col>

  <v-table-col 
    prop="name" 
    label="名字" 
    is-tooltip
    :tooltip-option="{
      effect: 'light',
      position: 'top-center'
    }"
  ></v-table-col>
  <v-table-col 
    prop="age" 
    label="年龄" 
    is-tooltip
    :tooltip-option="{
      effect: 'light',
      position: 'top-center'
    }"
  ></v-table-col>
  <v-table-col label="操作">
    <template v-slot="slotProps">
      <span class="v-icon-edit" @click="editData(slotProps)"></span>
    </template>
  </v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1666666666666666",
            password: '2"</span>',
            name: "jack66666666666666",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    },
    methods: {
      editData(data) {
        console.log("edit data", data);
      }
    }
  };
</script>
```

:::

## 自定义表格点击事件

::: demo

```html
<v-table name="tbale9" :data="table1">
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
  <v-table-col label="操作">
    <template v-slot="slotProps">
      <span class="v-icon-edit" @click="editData(slotProps)"></span>
    </template>
  </v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    },
    methods: {
      editData(data) {
        console.log("edit data", data);
      }
    }
  };
</script>
```

:::

## 加载中

`is-loading`表格是否在加载中

::: demo

```html
<v-table name="tbale25" :data="table1" is-loading>
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

自定义 loading， 插槽 `loading`

::: demo

```html
<v-table name="tbale24" :data="table1" is-loading>
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
  <template #loading>
    <div style="color: green; text-align: center;">我是自定义加载</div>
  </template>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: []
      };
    }
  };
</script>
```

:::

## 列类型

`v-table-col`组件中的`type`配置表格当前列的类型，支持值`selection`选择，`index`索引，`expand`展开

选择表格

`type=selection`时，配置`get-disabled`属性为函数，返回 true 时表示此项不可选，参数为当前列的数据

::: demo

```html
<v-table name="tbale10"
  :data="table1"
  row-key="ssid"
  :before-select-all="beforeSelectAll"
  :selectData="selectData"
  @selection-change="selectList"
>
  <v-table-col type="selection"></v-table-col>
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ],
        selectData: []
      };
    },
    methods: {
      beforeSelectAll(val) {
        // this.selectData = this.table1.slice(0, 2);
        // console.log(val);
        return true;
      },
      selectList(list) {
        console.log(list);
      }
    }
  };
</script>
```

:::

## 默认选中数据

`select-data`为表格选中数据，类型为`Array`，必须配置`row-key`

::: demo

```html
<v-table name="tbale11" :data="table1" row-key="ssid" :select-data="[table1[2]]">
  <v-table-col type="selection"></v-table-col>
  <v-table-col is-sort prop="ssid" label="SSID"> </v-table-col>
  <v-table-col is-sort prop="password" label="密码"></v-table-col>
  <v-table-col is-sort prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

## 序号表格

`type=index`表示序号，序号从 1 开始

::: demo

```html
<v-table name="tbale12"  :data="table1">
  <v-table-col type="index" label="序号"></v-table-col>
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

## 展开表格

`type=expand`支持此列展开，插槽名称为`expand`，值为当前行的数据

::: demo

```html
<v-table name="tbale13" :data="table1">
  <v-table-col type="expand" prop="ssid" label="SSID">
    <template #expand="slotScope">
        <div>SSID: {{ slotScope.ssid }}</div>
        <div>密码: {{ slotScope.password }}</div>
        <div>名字: {{ slotScope.name }}</div>
        <div>年龄: {{ slotScope.age }}</div>
      </template>
    </v-table-col>
  </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

## 排序表格

`is-sort`表示此列支持排序，默认使用 ASCII 进行排序；如有需要其他格式的排序方式，可以使用 `sortFormat` 函数处理；

::: demo

```html
<v-table name="tbale14" :data="table1">
  <v-table-col is-sort prop="ssid" label="SSID"> </v-table-col>
  <v-table-col is-sort prop="password" label="密码"></v-table-col>
  <v-table-col is-sort prop="name" label="名字"></v-table-col>
  <v-table-col
    is-sort
    prop="age"
    label="年龄"
    :sortFormat="sortFormat"
  ></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    },
    methods: {
      sortFormat(a, b, prop, sortType) {
        return sortType == "asc" ? a[prop] - b[prop] : b[prop] - a[prop];
      }
    }
  };
</script>
```

:::

如果排序不使用组件默认的排序，可以设置 `customSort` 为 true 自定义处理排序数据

::: demo

```html
<v-table
  name="tbale31"
  :data="table1"
  :custom-sort="true"
  @custom-sort="customSort"
>
  <v-table-col is-sort prop="ssid" label="SSID"> </v-table-col>
  <v-table-col is-sort prop="password" label="密码"></v-table-col>
  <v-table-col is-sort prop="name" label="名字"></v-table-col>
  <v-table-col is-sort prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    },
    methods: {
      customSort(prop, type) {
        console.log(prop, type);
      }
    }
  };
</script>
```

:::

## 禁用

`disabled`配置表格全部禁用

::: demo

```html
<v-table name="tbale15" :data="table1" border disabled>
  <v-table-col is-sort prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col is-sort prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
  <v-table-col label="操作">
    <template v-slot="slotProps">
      <span class="v-icon-edit"></span>
    </template>
  </v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

## 搜索表格

`is-search`表示此列数据支持搜索，匹配的结果是当前列的值或者通过`format`转换后的数据，展开数据和自定义更改数据不在匹配范围内

`placeholder`配置搜索框的占位符，不配置时取支持搜索列的表头文字用`/`分隔

::: demo

```html
<v-table name="tbale16" :data="table1">
  <v-table-col is-search prop="ssid" label="SSID"> </v-table-col>
  <v-table-col is-search prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

## 表格高度

`max-row`配置表格显示多少条数据，超过条数时，出现滚动条，默认为`0`不限制

::: demo

```html
<v-table name="tbale17" :data="table1" :max-row="5">
  <v-table-col type="index" label="序号"> </v-table-col>
  <v-table-col prop="ip" label="IP地址" width="180px"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" width="180px"></v-table-col>
  <v-table-col prop="upload" label="上传速率"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传限速"></v-table-col>
  <v-table-col prop="downLimit" label="下载限速"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ip: "192.168.0.100",
            mac: "C8:3A:35:22:11:11",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.101",
            mac: "C8:3A:35:22:11:12",
            onlineTime: "100",
            hz: "5G",
            upload: "435",
            download: "134",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.102",
            mac: "C8:3A:35:22:11:13",
            onlineTime: "67567",
            hz: "2.4G",
            upload: "678",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.103",
            mac: "C8:3A:35:22:11:14",
            onlineTime: "1000",
            hz: "5G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.104",
            mac: "C8:3A:35:22:11:15",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.105",
            mac: "C8:3A:35:22:11:16",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.106",
            mac: "C8:3A:35:22:11:17",
            onlineTime: "67567",
            hz: "2.4G",
            upload: "678",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.107",
            mac: "C8:3A:35:22:11:18",
            onlineTime: "1000",
            hz: "5G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.108",
            mac: "C8:3A:35:22:11:19",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.109",
            mac: "C8:3A:35:22:11:20",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.108",
            mac: "C8:3A:35:22:11:19",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: '2"</span>',
            mac: "C8:3A:35:22:11:20",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.128",
            mac: "C8:3A:35:22:11:29",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.139",
            mac: "C8:3A:35:22:11:32",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.148",
            mac: "C8:3A:35:22:11:65",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.123",
            mac: "C8:3A:35:22:11:87",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          }
        ]
      };
    }
  };
</script>
```

:::

`custom-height`配置表格最多显示的高度，超过高度时，出现滚动条，默认为`0`不限制

::: demo

```html
<v-table name="tbale26" :data="table1" :custom-height="300">
  <v-table-col type="index" label="序号"> </v-table-col>
  <v-table-col prop="ip" label="IP地址" width="180px"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" width="180px"></v-table-col>
  <v-table-col prop="upload" label="上传速率"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传限速"></v-table-col>
  <v-table-col prop="downLimit" label="下载限速"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ip: "192.168.0.100",
            mac: "C8:3A:35:22:11:11",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.101",
            mac: "C8:3A:35:22:11:12",
            onlineTime: "100",
            hz: "5G",
            upload: "435",
            download: "134",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.102",
            mac: "C8:3A:35:22:11:13",
            onlineTime: "67567",
            hz: "2.4G",
            upload: "678",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.103",
            mac: "C8:3A:35:22:11:14",
            onlineTime: "1000",
            hz: "5G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.104",
            mac: "C8:3A:35:22:11:15",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.105",
            mac: "C8:3A:35:22:11:16",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.106",
            mac: "C8:3A:35:22:11:17",
            onlineTime: "67567",
            hz: "2.4G",
            upload: "678",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.107",
            mac: "C8:3A:35:22:11:18",
            onlineTime: "1000",
            hz: "5G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.108",
            mac: "C8:3A:35:22:11:19",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.109",
            mac: "C8:3A:35:22:11:20",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.108",
            mac: "C8:3A:35:22:11:19",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: '2"</span>',
            mac: "C8:3A:35:22:11:20",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.128",
            mac: "C8:3A:35:22:11:29",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.139",
            mac: "C8:3A:35:22:11:32",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.148",
            mac: "C8:3A:35:22:11:65",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.123",
            mac: "C8:3A:35:22:11:87",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          }
        ]
      };
    }
  };
</script>
```

:::

## 分页

`is-pagination`配置表格分页，`page-size`配置每页多少条数据，`is-change-size`配置是否支持修改每页条数，`page-size-options`配置每页条数的选择，`is-input-page`配置是否支持手动输入页数跳转

::: demo

```html
<v-table name="table-page" :data="table1" is-pagination is-change-size is-input-page :max-row="5">
  <v-table-col prop="ip" label="IP地址" width="180px"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" width="180px"></v-table-col>
  <v-table-col prop="upload" label="上传速率"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传限速"></v-table-col>
  <v-table-col prop="downLimit" label="下载限速"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ip: "192.168.0.100",
            mac: "C8:3A:35:22:11:11",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.101",
            mac: "C8:3A:35:22:11:12",
            onlineTime: "100",
            hz: "5G",
            upload: "435",
            download: "134",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.102",
            mac: "C8:3A:35:22:11:13",
            onlineTime: "67567",
            hz: "2.4G",
            upload: "678",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.103",
            mac: "C8:3A:35:22:11:14",
            onlineTime: "1000",
            hz: "5G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.104",
            mac: "C8:3A:35:22:11:15",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.105",
            mac: "C8:3A:35:22:11:16",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.106",
            mac: "C8:3A:35:22:11:17",
            onlineTime: "67567",
            hz: "2.4G",
            upload: "678",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.107",
            mac: "C8:3A:35:22:11:18",
            onlineTime: "1000",
            hz: "5G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.108",
            mac: "C8:3A:35:22:11:19",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.109",
            mac: "C8:3A:35:22:11:20",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.108",
            mac: "C8:3A:35:22:11:19",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: '2"</span>',
            mac: "C8:3A:35:22:11:20",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.128",
            mac: "C8:3A:35:22:11:29",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.139",
            mac: "C8:3A:35:22:11:32",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.148",
            mac: "C8:3A:35:22:11:65",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.123",
            mac: "C8:3A:35:22:11:87",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          }
        ]
      };
    }
  };
</script>
```

:::

## 固定列

`fixed`用于配置固定列，默认为不固定，值类型为`String`和`Boolean`，取值范围`true、false、left、right`，为 true 为`左侧固定`，false 不固定。使用列固定时需要设置每列的宽度，不然不会出现滚动条。

::: demo

```html
<p>固定列宽</p>
<v-table name="tbale18" :data="table1" is-pagination is-change-size is-input-page :max-row="5">
  <v-table-col type="selection" fixed width="50"></v-table-col>
  <v-table-col type="index" label="序号" width="80" fixed="left" align="center">
  </v-table-col>
  <v-table-col prop="ip" label="IP地址" width="180"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" width="180"></v-table-col>
  <v-table-col prop="upload" label="上传速率" width="120"></v-table-col>
  <v-table-col prop="download" label="下载速率" width="120"></v-table-col>
  <v-table-col prop="upLimit" label="上传限速" width="120"></v-table-col>
  <v-table-col prop="downLimit" label="下载限速" width="120"></v-table-col>
  <v-table-col label="操作" fixed="right" width="100">
    <template v-slot="slotProps">
      <v-button no-id type="text" icon="v-icon-edit"></v-button>
      <v-button no-id type="text" icon="v-icon-delete"></v-button>
    </template>
  </v-table-col>
</v-table>

<p>不固定列宽</p>
<v-table name="tbale19" :data="table1" is-pagination is-change-size is-input-page :max-row="5">
  <v-table-col type="selection" fixed="left"></v-table-col>
  <v-table-col type="index" label="序号" fixed> </v-table-col>
  <v-table-col prop="ip" label="IP地址"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址"></v-table-col>
  <v-table-col prop="upload" label="上传速率"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传限速"></v-table-col>
  <v-table-col prop="downLimit" label="下载限速"></v-table-col>
  <v-table-col label="操作" fixed="right">
    <template v-slot="slotProps">
      <v-button no-id type="text" icon="v-icon-edit"></v-button>
      <v-button no-id type="text" icon="v-icon-delete"></v-button>
    </template>
  </v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            id: 1,
            ip: "192.168.0.100",
            mac: "C8:3A:35:22:11:11",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 2,
            ip: "192.168.0.101",
            mac: "C8:3A:35:22:11:12",
            onlineTime: "100",
            hz: "5G",
            upload: "435",
            download: "134",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 3,
            ip: "192.168.0.102",
            mac: "C8:3A:35:22:11:13",
            onlineTime: "67567",
            hz: "2.4G",
            upload: "678",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 4,
            ip: "192.168.0.103",
            mac: "C8:3A:35:22:11:14",
            onlineTime: "1000",
            hz: "5G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 5,
            ip: "192.168.0.104",
            mac: "C8:3A:35:22:11:15",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 6,
            ip: "192.168.0.105",
            mac: "C8:3A:35:22:11:16",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 7,
            ip: "192.168.0.106",
            mac: "C8:3A:35:22:11:17",
            onlineTime: "67567",
            hz: "2.4G",
            upload: "678",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 8,
            ip: "192.168.0.107",
            mac: "C8:3A:35:22:11:18",
            onlineTime: "1000",
            hz: "5G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 9,
            ip: "192.168.0.108",
            mac: "C8:3A:35:22:11:19",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 10,
            ip: "192.168.0.109",
            mac: "C8:3A:35:22:11:20",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 11,
            ip: "192.168.0.108",
            mac: "C8:3A:35:22:11:19",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 12,
            ip: '2"</span>',
            mac: "C8:3A:35:22:11:20",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 13,
            ip: "192.168.0.128",
            mac: "C8:3A:35:22:11:29",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 14,
            ip: "192.168.0.139",
            mac: "C8:3A:35:22:11:32",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 15,
            ip: "192.168.0.148",
            mac: "C8:3A:35:22:11:65",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            id: 16,
            ip: "192.168.0.123",
            mac: "C8:3A:35:22:11:87",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          }
        ]
      };
    }
  };
</script>
```

:::

## 分页删除

::: demo

```html
<v-table name="tbale20" :data="table" is-pagination is-change-size is-input-page :max-row="5">
  <v-table-col prop="ip" label="IP地址" width="180px"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" width="180px"></v-table-col>
  <v-table-col prop="upload" label="上传速率"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传限速"></v-table-col>
  <v-table-col label="操作">
    <template>
      <span class="v-icon-delete"></span>
      <span class="v-icon-edit"></span>
    </template>
  </v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table: [
          {
            ip: "192.168.0.105",
            mac: "C8:3A:35:22:11:16",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.106",
            mac: "C8:3A:35:22:11:17",
            onlineTime: "67567",
            hz: "2.4G",
            upload: "678",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.107",
            mac: "C8:3A:35:22:11:18",
            onlineTime: "1000",
            hz: "5G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.108",
            mac: "C8:3A:35:22:11:19",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.109",
            mac: "C8:3A:35:22:11:20",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.108",
            mac: "C8:3A:35:22:11:19",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: '2"</span>',
            mac: "C8:3A:35:22:11:20",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.128",
            mac: "C8:3A:35:22:11:29",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.139",
            mac: "C8:3A:35:22:11:32",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.148",
            mac: "C8:3A:35:22:11:65",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.123",
            mac: "C8:3A:35:22:11:87",
            onlineTime: "1000",
            hz: "2.4G",
            upload: "123",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          }
        ]
      };
    },
    methods: {
      del() {
        this.table.shift();
      }
    }
  };
</script>
```

:::

## 数据为空

::: demo

```html
<v-table name="tbale21" :data="table">
  <v-table-col prop="ip" fixed="left" label="IP地址" width="180px">
  </v-table-col>
  <v-table-col prop="mac" label="MAC地址" width="180px"></v-table-col>
  <v-table-col prop="upload" label="上传速率"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传限速"></v-table-col>
</v-table>

<v-table name="tbale22" :data="table" empty-text="暂无数据">
  <v-table-col prop="ip" label="IP地址" width="180px"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" width="180px"></v-table-col>
  <v-table-col prop="upload" label="上传速率"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传限速"></v-table-col>
</v-table>

<v-table name="tbale23" :data="table" empty-text="暂无数据">
  <v-table-col prop="ip" label="IP地址" width="180px"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" width="180px"></v-table-col>
  <v-table-col prop="upload" label="上传速率"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传限速"></v-table-col>
  <template #empty>
    无数据（slot）
  </template>
</v-table>

<script>
  export default {
    data() {
      return {
        table: []
      };
    }
  };
</script>
```

:::

## 表格显示格式

`tableLayout`为 auto 设置表格宽度由内容撑开，超出则显示滚动条，默认为 fixed 固定宽度；

当表格设置为 auto 时，`maxWidth` 可以设置内容的最大宽度，注意：只在表格出现横向滚动的时候才生效，否则还是按照内容分配宽度。

::: demo

```html
<v-table name="tbale28" :data="table1" tableLayout="auto">
  <v-table-col is-sort prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码" maxWidth="100px"></v-table-col>
  <v-table-col is-sort prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
  <v-table-col label="操作">
    <template v-slot="slotProps">
      <span class="v-icon-edit"></span>
    </template>
  </v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1dwdwfgdgsgdgfdgfdgfdg",
            password: '2"</span>dsfwefwefwefwefewdwdwefwefwef',
            name: "jackfewfwegdfgdfgfdgfd",
            age: "12fewfwegfgfdgdgfgdf"
          },
          {
            ssid: "ssid2",
            password: "111111111ewqw",
            name: "jhonfwefwefvfwefwdfewdwefsdfwe",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jackfewfwevfwegwrfwefwefwewefe",
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

## 表格合并

`spanMethod`函数可以实现合并行或列，方法的参数包含了当前行号、当前列号、当前行数据、当前列对象；

该函数需要返回一个包含两个元素的数组，数组的第一个元素为合并的行数，第二个元素为合并的列数；如果返回 [0, 0] 则隐藏当前表格

::: demo

```html
<v-table name="tbale29" :data="table1" :spanMethod="spanMethod">
  <v-table-col is-sort prop="ssid" label="SSID" border-side> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col is-sort prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
  <v-table-col label="操作">
    <template v-slot="slotProps">
      <span class="v-icon-edit"></span>
    </template>
  </v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "cynthia",
            age: "12"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhonfwefwefvfwef",
            age: "13"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jackfew",
            age: "16"
          }
        ]
      };
    },
    methods: {
      spanMethod(rowIndex, columnIndex, rowData, column) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return [2, 1];
          } else {
            return [0, 0];
          }
        }
      }
    }
  };
</script>
```

::: 

## Props

| 参数                   | 说明                                                  | 类型     | 可选值    | 默认值                      |
| ---------------------- | ----------------------------------------------------- | -------- | --------- | --------------------------- |
| data                   | 表格数据                                              | Array    | —         | []                          |
| size                   | 表格大小                                              | String   | L / M / S | L                           |
| show-header            | 是否显示表头                                          | boolean  | —         | true                        |
| row-key                | 表格行的 key（选填项）                                | string   | —         |                             |
| max-row                | 表格最多显示多少行，超过时右侧显示滚动条,0 表示不限制 | number   | —         | 0                           |
| stripe                 | 是否显示斑马纹表格                                    | boolean  | —         | false                       |
| border                 | 表格 td 是否有边框                                    | boolean  |           | false                       |
| placeholder            | 搜索框占位符，为空时会取支持搜索列的表头文字以 / 连接 | string   | —         |                             |
| is-loading             | 是否在加载中                                          | boolean  | —         | false                       |
| loading-text           | loading 的文字                                        | string   | —         |                             |
| empty-text             | 表格为空时的文字                                      | string   | —         | 无数据                      |
| is-pagination          | 是否支持分页                                          | boolean  | —         | false                       |
| page-size              | 每页多少条                                            | number   | —         | 10                          |
| is-change-size         | 是否支持修改每页条数                                  | boolean  | —         | false                       |
| page-size-options      | 每页显示个数选择器的选项设置                          | number[] | —         | [10, 20, 30, 40, 50, 100]   |
| is-input-page          | 是否支持手动输入页面                                  | boolean  | —         | false                       |
| show-page-border       | 是否显示分页按钮的框                                  | boolean  |           | false                       |
| select-data            | 选中的行数据                                          | Array    |           | []                          |
| before-select-all      | 全选时切换前执行的事件，返回 false 时不会执行全选事件 | function |           | function(val) {return true} |
| is-select-all-disabled | 全选按钮是否禁用                                      | boolean  |           | false                       |
| disabled               | 表格是否禁用                                          | boolean  |           | false     
| custom-sort               | 表格是否使用自定义处理排序                                 | boolean  |           |false                    |
| custom-height               | 表格设置自定义高度                                | string  |           |0                    |
| table-layout               | 表格设置数据显示格式                             | string  |     fixed / auto      |fixed                    |
| span-method               | 表格设置数据合并函数                             | function  |           |      function(rowIndex, columnIndex, rowData, column) {return [1, 1]}             |

## @Events

| 事件名           | 说明                                                      | 参数                     |
| ---------------- | --------------------------------------------------------- | ------------------------ |
| after-update     | 更新后的表格数据                                          | 表格数据（转化后的数据） |
| click-row        | 当某一行被点击时会触发该事件                              | rowData, index           |
| selection-change | 点击全选 或者单选时执行的事件，仅在 type=selection 时生效 | 当前的选中项             |
| custom-sort      | 表格设置自定义处理排序时，点击排序触发的函数              | prop, sortType             |

## Methods

| 方法名             | 说明                           | 参数 |
| ------------------ | ------------------------------ | ---- |
| getSelected        | 获取选中的项，返回值为选中的项 | -    |
| getCurrentPageData | 获取表格当前页的数据           |      |

## Slots

| name    | 说明                                              |
| ------- | ------------------------------------------------- |
| header  | 表格 body 第一行显示的内容，从 tr 开始自定义元素  |
| loading | 自定义加载中，显示的前提是 is-loading 必须为 true |
| empty   | 自定义数据列表为空显示                            |

## v-table-col

### Props

| 参数            | 说明                                                                                                                   | 类型            | 可选值                     | 默认值 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------- | ------ |
| type            | 对应列的类型，selection 为支持多选择，index 为显示行索引，expand 为支持展开                                            | string          | selection / index / expand | —      |
| fixed           | 列固定的位置，默认不固定                                                                                               | string          | left / right               | —      |
| label           | 表头列文字                                                                                                             | string          | —                          | —      |
| prop            | 表头列属性，定义 type 的三种类型时可不填，其他情况必填                                                                 | string          | —                          | —      |
| width           | 列宽度，百分比或者 xxpx                                                                                                | string / number | —                          | —      |
| is-tooltip      | 鼠标放上去是否显示 tooltip 默认是过长显示，如不需要可在`tooltip-option`中修改配置                                      | boolean         | —                          | false  |
| tooltip-option  | tooltip的配置项参考`v-tooltip`                                                                                         | boolean         | —                          | false  |
| is-search       | 是否支持搜索                                                                                                           | boolean         | —                          | false  |
| is-sort         | 是否支持排序                                                                                                           | boolean         | —                          | false  |
| border-side         | 是否支持边框                                                                                                           | boolean         | —                          | false  |
| align           | 对齐方式                                                                                                               | string          | left / center / right      | left   |
| format          | 对此列数据自定义格式化，返回值为该列显示的数据，<br />返回数据可用于搜索<br />function(prop, rowData, index)           | Function        | —                          | —      |
| get-disabled    | 仅对**type=selection**有效，返回复选框是否禁用<br />function(rowData)                                                  | Function        |                            |        |
| before-selected | 仅对**type=selection**有效，点击 checkbox 时，返回 false 表示不会被选中，其他都会选中。 <br />function(rowData, index) | Function        |                            |        |
| sort-format | 自定义排序的格式 <br />function(rowData1, rowData2, sortProp, sortType) | Function        |                            |        |
| is-html-header  | 标题是否是自定义 html                                                                                                  | boolean         | -                          | false  |

> 注意：设置固定列后，必须同时设置`width`，否则可能出现意想不到的问题。同时 fixed 列不支持`expand`功能。

### Slots

| name    | 说明                                                        |
| ------- | ----------------------------------------------------------- |
| default | 自定义列显示信息，内容必须用 template 标签包含，使用 v-slot |
| expand  | 展开后的自定义内容，使用方法与 default 一致                 |


## table-trade
### Props

| 参数                   | 说明                                                  | 类型     | 可选值 | 默认值                      |
| ---------------------- | ----------------------------------------------------- | -------- | ------ | --------------------------- |
| data                   | 表格数据                                              | Array    | —      | []                          |
| realtime-search        | 是否为实时搜索                                        | boolean  | —      | false                       |
| head-operate           | 是否显示表头设置                                      | boolean  | —      | false                       |
| empty-value            | 数据为空的显示                                        | string   | —      | -                           |
| word-wrap              | 显示多行数据                                          | boolean  | —      | false                       |
| show-header            | 是否显示表头                                          | boolean  | —      | true                        |
| row-key                | 表格行的 key（选填项）                                | string   | —      |                             |
| max-row                | 表格最多显示多少行，超过时右侧显示滚动条,0 表示不限制 | number   | —      | 0                           |
| stripe                 | 是否显示斑马纹表格                                    | boolean  | —      | false                       |
| border                 | 表格 td 是否有边框                                    | boolean  |        | false                       |
| placeholder            | 搜索框占位符，为空时会取支持搜索列的表头文字以 / 连接 | string   | —      |                             |
| is-loading             | 是否在加载中                                          | boolean  | —      | false                       |
| loading-text           | loading 的文字                                        | string   | —      |                             |
| empty-text             | 表格为空时的文字                                      | string   | —      | 无数据                      |
| is-pagination          | 是否支持分页                                          | boolean  | —      | false                       |
| page-size              | 每页多少条                                            | number   | —      | 10                          |
| is-change-size         | 是否支持修改每页条数                                  | boolean  | —      | false                       |
| page-size-options      | 每页显示个数选择器的选项设置                          | number[] | —      | [10, 20, 30, 40, 50, 100]   |
| is-input-page          | 是否支持手动输入页面                                  | boolean  | —      | false                       |
| show-page-border       | 是否显示分页按钮的框                                  | boolean  |        | false                       |
| select-data            | 选中的行数据                                          | Array    |        | []                          |
| before-select-all      | 全选时切换前执行的事件，返回 false 时不会执行全选事件 | function |        | function(val) {return true} |
| is-select-all-disabled | 全选按钮是否禁用                                      | boolean  |        | false                       |
| disabled               | 表格是否禁用                                          | boolean  |        | false                       |

### @Events

| 事件名           | 说明                                                      | 参数                     |
| ---------------- | --------------------------------------------------------- | ------------------------ |
| after-update     | 更新后的表格数据                                          | 表格数据（转化后的数据） |
| click-row        | 当某一行被点击时会触发该事件                              | rowData, index           |
| selection-change | 点击全选 或者单选时执行的事件，仅在 type=selection 时生效 | 当前的选中项             |

### Methods

| 方法名             | 说明                           | 参数 |
| ------------------ | ------------------------------ | ---- |
| getSelected        | 获取选中的项，返回值为选中的项 | -    |
| getCurrentPageData | 获取表格当前页的数据           |      |

### Slots

| name    | 说明                                              |
| ------- | ------------------------------------------------- |
| header  | 表格 body 第一行显示的内容，从 tr 开始自定义元素  |
| loading | 自定义加载中，显示的前提是 is-loading 必须为 true |
| empty   | 自定义数据列表为空显示                            |

## v-table-col
### Props

| 参数             | 说明                                                                                                                   | 类型            | 可选值                     | 默认值 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------- | ------ |
| type             | 对应列的类型，selection 为支持多选择，index 为显示行索引，expand 为支持展开                                            | string          | selection / index / expand | —      |
| fixed            | 列固定的位置，默认不固定                                                                                               | string          | left / right               | —      |
| label            | 表头列文字                                                                                                             | string          | —                          | —      |
| prop             | 表头列属性，定义 type 的三种类型时可不填，其他情况必填                                                                 | string          | —                          | —      |
| width            | 列宽度，百分比或者 xxpx                                                                                                | string / number | —                          | —      |
| is-tooltip       | 鼠标放上去是否显示 tooltip 默认是过长显示，如不需要可在`tooltip-option`中修改配置                                      | boolean         | —                          | false  |
| tooltip-option   | tooltip 的配置项参考`v-tooltip`                                                                                        | boolean         | —                          | false  |
| is-search        | 是否支持搜索                                                                                                           | boolean         | —                          | false  |
| is-sort          | 是否支持排序                                                                                                           | boolean         | —                          | false  |
| is-default-value | 是否为默认显示列表项                                                                                                   | boolean         | —                          | true   |
| add-operate      | 列表项是否可以操作                                                                                                     | boolean         | —                          | true   |
| align            | 对齐方式                                                                                                               | string          | left / center / right      | left   |
| format           | 对此列数据自定义格式化，返回值为该列显示的数据，<br />返回数据可用于搜索<br />function(prop, rowData, index)           | Function        | —                          | —      |
| get-disabled     | 仅对**type=selection**有效，返回复选框是否禁用<br />function(rowData)                                                  | Function        |                            |        |
| before-selected  | 仅对**type=selection**有效，点击 checkbox 时，返回 false 表示不会被选中，其他都会选中。 <br />function(rowData, index) | Function        |                            |        |
| is-html-header   | 标题是否是自定义 html                                                                                                  | boolean         | -                          | false  |

> 注意：设置固定列后，必须同时设置`width`，否则可能出现意想不到的问题。同时 fixed 列不支持`expand`功能。

### Slots

| name    | 说明                                                        |
| ------- | ----------------------------------------------------------- |
| default | 自定义列显示信息，内容必须用 template 标签包含，使用 v-slot |
| expand  | 展开后的自定义内容，使用方法与 default 一致                 |

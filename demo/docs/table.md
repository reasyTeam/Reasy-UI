## 表格

### 基本用法

::: demo

```html
<v-table :data="table1">
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

### 斑马条纹

`stripe`配置表格斑马条纹

::: demo

```html
<v-table :data="table1" stripe>
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

### 边框

`border`配置带边框表格

::: demo

```html
<v-table :data="table1" border>
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

### 自定义数据

`v-slot`配置当前列的自定义数据，必须与`template`搭配，`v-slot`的值为当前行的数据

::: demo

```html
<v-table :data="table1">
  <v-table-col prop="ssid" label="SSID">
    <template v-slot="slotProps">
      当前SSID：{{ slotProps.ssid }}
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
    }
  };
</script>
```

:::

自定义表格点击事件

::: demo

```html
<v-table :data="table1">
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

### 加载中

`is-loading`表格是否在加载中

::: demo

```html
<v-table :data="table1" is-loading>
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
<v-table :data="table1" is-loading>
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

### 列类型

`v-table-col`组件中的`type`配置表格当前列的类型，支持值`selection`选择，`index`索引，`expand`展开

选择表格

`type=selection`时，配置`get-disabled`属性为函数，返回 true 时表示此项不可选，参数为当前列的数据

::: demo

```html
<v-table
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

### 默认选中数据

`select-data`为表格选中数据，类型为`Array`，必须配置`row-key`

::: demo

```html
<v-table :data="table1" row-key="ssid" :select-data="[table1[2]]">
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
        ]
      };
    }
  };
</script>
```

:::

序号表格

`type=index`表示序号，序号从 1 开始

::: demo

```html
<v-table :data="table1">
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

展开表格

`type=expand`支持此列展开，插槽名称为`expand`，值为当前行的数据

::: demo

```html
<v-table :data="table1">
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

### 排序表格

`is-sort`表示此列支持排序

::: demo

```html
<v-table :data="table1">
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
    }
  };
</script>
```

:::

### 搜索表格

`is-search`表示此列数据支持搜索，匹配的结果是当前列的值或者通过`format`转换后的数据，展开数据和自定义更改数据不在匹配范围内

`placeholder`配置搜索框的占位符，不配置时取支持搜索列的表头文字用`/`分隔

::: demo

```html
<v-table :data="table1">
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

### 表格高度

`max-row`配置表格显示多少条数据，超过条数时，出现滚动条，默认为`10`

::: demo

```html
<v-table :data="table1" :max-row="5">
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

### 分页

`is-pagination`配置表格分页，`page-size`配置每页多少条数据，`is-change-size`配置是否支持修改每页条数，`page-size-options`配置每页条数的选择，`is-input-page`配置是否支持手动输入页数跳转

::: demo

```html
<v-table :data="table1" is-pagination is-change-size is-input-page :max-row="5">
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

### v-table Attributes

| 参数              | 说明                                                  | 类型     | 可选值 | 默认值                      |
| ----------------- | ----------------------------------------------------- | -------- | ------ | --------------------------- |
| data              | 表格数据                                              | Array    | —      | []                          |
| show-header       | 是否显示表头                                          | boolean  | —      | true                        |
| row-key           | 表格行的 key（选填项）                                | string   | —      |                             |
| max-row           | 表格最多显示多少行，超过时右侧显示滚动条              | number   | —      | 10                          |
| stripe            | 是否显示斑马纹表格                                    | boolean  | —      | false                       |
| border            | 表格 td 是否有边框                                    | boolean  |        | false                       |
| placeholder       | 搜索框占位符，为空时会取支持搜索列的表头文字以 / 连接 | string   | —      |                             |
| is-loading        | 是否在加载中                                          | boolean  | —      | false                       |
| loading-text      | loading 的文字                                        | string   | —      |                             |
| empty-text        | 表格为空时的文字                                      | string   | —      | 无数据                      |
| is-pagination     | 是否支持分页                                          | boolean  | —      | false                       |
| page-size         | 每页多少条                                            | number   | —      | 10                          |
| is-change-size    | 是否支持修改每页条数                                  | boolean  | —      | false                       |
| page-size-options | 每页显示个数选择器的选项设置                          | number[] | —      | [10, 20, 30, 40, 50, 100]   |
| is-input-page     | 是否支持手动输入页面                                  | boolean  | —      | false                       |
| show-page-border  | 是否显示分页按钮的框                                  | boolean  |        | false                       |
| select-data       | 选中的行数据                                          | Array    |        | []                          |
| before-select-all | 全选时切换前执行的事件，返回 false 时不会执行全选事件 | function |        | function(val) {return true} |

### v-table Slot

| name    | 说明                                              |
| ------- | ------------------------------------------------- |
| header  | 表格 body 第一行显示的内容，从 tr 开始自定义元素  |
| loading | 自定义加载中，显示的前提是 is-loading 必须为 true |
| empty   | 自定义数据列表为空显示                            |

### v-table Methods

| 方法名             | 说明                           | 参数 |
| ------------------ | ------------------------------ | ---- |
| getSelected        | 获取选中的项，返回值为选中的项 | -    |
| getCurrentPageData | 获取表格当前页的数据           |      |

### v-table Events

| 事件名           | 说明                                                      | 参数                     |
| ---------------- | --------------------------------------------------------- | ------------------------ |
| after-update     | 更新后的表格数据                                          | 表格数据（转化后的数据） |
| click-row        | 当某一行被点击时会触发该事件                              | rowData, index           |
| selection-change | 点击全选 或者单选时执行的事件，仅在 type=selection 时生效 | 当前的选中项             |

### v-table-col Attributes

| 参数            | 说明                                                                                                                   | 类型            | 可选值                     | 默认值 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------- | ------ |
| type            | 对应列的类型，selection 为支持多选择，index 为显示行索引，expand 为支持展开                                            | string          | selection / index / expand | —      |
| label           | 表头列文字                                                                                                             | string          | —                          | —      |
| prop            | 表头列属性，定义 type 的三种类型时可不填，其他情况必填                                                                 | string          | —                          | —      |
| width           | 列宽度，百分比或者 xxpx                                                                                                | string / number | —                          | —      |
| is-tooltip      | 鼠标放上去是否显示 tooltip                                                                                             | boolean         | —                          | false  |
| is-search       | 是否支持搜索                                                                                                           | boolean         | —                          | false  |
| is-sort         | 是否支持排序                                                                                                           | boolean         | —                          | false  |
| align           | 对齐方式                                                                                                               | string          | left / center / right      | left   |
| format          | 对此列数据自定义格式化，返回值为该列显示的数据，<br />返回数据可用于搜索<br />function(prop, rowData, index)           | Function        | —                          | —      |
| get-disabled    | 仅对**type=selection**有效，返回复选框是否禁用<br />function(rowData)                                                  | Function        |                            |        |
| before-selected | 仅对**type=selection**有效，点击 checkbox 时，返回 false 表示不会被选中，其他都会选中。 <br />function(rowData, index) | Function        |                            |        |

### v-table-col slot

| name    | 说明                                                        |
| ------- | ----------------------------------------------------------- |
| default | 自定义列显示信息，内容必须用 template 标签包含，使用 v-slot |
| expand  | 展开后的自定义内容，使用方法与 default 一致                 |

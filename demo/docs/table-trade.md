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
<v-table no-id :data="table1" name="baseTable">
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
            password: "3333333333",
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

## 表格上方按钮

表格上方自定义按钮或者文字，左右两边都存在插槽；如果存在搜索，那么搜索框是在最右边

::: demo

```html
<v-table no-id :data="data" @search="search" name="buttonTable">
  <template #btnLeft>
    <v-button no-id size="S">左按钮</v-button>
  </template>
  <template #btnRight>
    <v-button no-id size="S">右按钮</v-button>
  </template>
  <v-table-col prop="ip" label="IP地址" width="150px"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" width="180px"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传速率"></v-table-col>
  <v-table-col prop="status" label="状态"></v-table-col>
  <v-table-col prop="downLimit" label="下载限速" width="150px"></v-table-col>
</v-table>
<script>
  export default {
    mounted() {
      this.data = this.table1;
    },
    methods: {
      search(searchValue, searchField) {
        console.log(
          "搜索的值为：" + searchValue + "，搜索的字段为：" + searchField
        );
        //dosomething
      }
    },
    data() {
      return {
        data: [],
        table1: [
          {
            ip: "192.168.0.100skdbgfkdfbgkdfbgkdfbgkdfbgkdfbk",
            mac: "C8:3A:35:22:11:11",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
            download:
              "12kdgfshkgjdshkgjd",
            upLimit: "1000",
            downLimit: "25"
          },
          {
            ip: "192.168.0.101",
            mac: "C8:3A:35:22:11:12",
            在线Time: "100",
            hz: "5G",
            status: "升级中",
            download: "134",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.102",
            mac: "C8:3A:35:22:11:13",
            在线Time: "67567",
            hz: "2.4G",
            status: "离线",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.103",
            mac: "C8:3A:35:22:11:14",
            在线Time: "1000",
            hz: "5G",
            status: "在线",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.104",
            mac: "C8:3A:35:22:11:15",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
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

## 表格宽度、最大宽度

表格列宽可通过`width`控制固定宽度，如果表格没有多余空白分配，可设置列的最大宽度`max-width`

::: demo

```html
<v-table no-id :data="data" @search="search" name="maxTb">
  <v-table-col prop="ip" label="IP地址" width="150px"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" width="180px"></v-table-col>
  <v-table-col prop="download" label="下载速率" max-width="120px"></v-table-col>
  <v-table-col prop="upLimit" label="上传速率"></v-table-col>
  <v-table-col prop="status" label="状态"></v-table-col>
  <v-table-col prop="downLimit" label="下载限速" width="150px"></v-table-col>
  <v-table-col prop="text" label="文本信息" width="180px"></v-table-col>
  <v-table-col prop="hyText" label="超文本信息" width="200px"></v-table-col>
</v-table>
<script>
  export default {
    mounted() {
      this.data = this.table1;
    },
    methods: {
      search(searchValue, searchField) {
        console.log(
          "搜索的值为：" + searchValue + "，搜索的字段为：" + searchField
        );
        //dosomething
      }
    },
    data() {
      return {
        data: [],
        table1: [
          {
            ip: "192.168.0.100skdbgfkdfbgkdfbgkdfbgkdfbgkdfbk",
            mac: "C8:3A:35:22:11:11",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
            download:
              "12kdgfshkgjdshkgjdfskghdkfsjhgdkjfhgdkjfhgdkjfhgdkhgskhgkjdfhgksdhgkjdhfskjgdhfskghdfskg",
            upLimit: "1000",
            downLimit: "25",
            text:'fkasjdhfkj',
            hyText:'sgdhkdfhgkjfdshkghdfkjhkfdhgskdf'
          },
          {
            ip: "192.168.0.101",
            mac: "C8:3A:35:22:11:12",
            在线Time: "100",
            hz: "5G",
            status: "升级中",
            download: "134",
            upLimit: "1000",
            downLimit: "100",
            text:'fkasjdhfkj',
            hyText:'sgdhkdfhgkjfdshkghdfkjhkfdhgskdf'
          },
          {
            ip: "192.168.0.102",
            mac: "C8:3A:35:22:11:13",
            在线Time: "67567",
            hz: "2.4G",
            status: "离线",
            download: "34",
            upLimit: "1000",
            downLimit: "100",
            text:'fkasjdhfkj',
            hyText:'sgdhkdfhgkjfdshkghdfkjhkfdhgskdf'
          },
          {
            ip: "192.168.0.103",
            mac: "C8:3A:35:22:11:14",
            在线Time: "1000",
            hz: "5G",
            status: "在线",
            download: "12",
            upLimit: "1000",
            downLimit: "100",
            text:'fkasjdhfkj',
            hyText:'sgdhkdfhgkjfdshkghdfkjhkfdhgskdf'
          },
          {
            ip: "192.168.0.104",
            mac: "C8:3A:35:22:11:15",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
            download: "12",
            upLimit: "1000",
            downLimit: "100",
            text:'fkasjdhfkj',
            hyText:'sgdhkdfhgkjfdshkghdfkjhkfdhgskdf'
          }
        ]
      };
    }
  };
</script>
```

:::

## 表格搜索

`is-search`表示此列数据支持搜索，`realtime-search`可以定义搜索为实时搜索和失焦搜索，默认为失焦搜索

::: demo

```html
<v-table no-id :data="data" @search="search" realtime-search name="searchTb">
  <v-table-col prop="ip" label="IP地址" width="150px"> </v-table-col>
  <v-table-col prop="mac" is-search label="MAC地址" width="180px"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传速率"></v-table-col>
  <v-table-col prop="status" label="状态"></v-table-col>
  <v-table-col prop="downLimit" label="下载限速" width="150px"></v-table-col>
</v-table>
<script>
  export default {
    mounted() {
      this.data = this.table1;
    },
    methods: {
      search(searchValue, searchField) {
        console.log(
          "搜索的值为：" + searchValue + "，搜索的字段为：" + searchField
        );
        //dosomething
      }
    },
    data() {
      return {
        data: [],
        table1: [
          {
            ip: "192.168.0.100",
            mac: "C8:3A:35:22:11:11",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
            download: "12",
            upLimit: "1000",
            downLimit: "25"
          },
          {
            ip: "192.168.0.101",
            mac: "C8:3A:35:22:11:12",
            在线Time: "100",
            hz: "5G",
            status: "升级中",
            download: "134",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.102",
            mac: "C8:3A:35:22:11:13",
            在线Time: "67567",
            hz: "2.4G",
            status: "离线",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.103",
            mac: "C8:3A:35:22:11:14",
            在线Time: "1000",
            hz: "5G",
            status: "在线",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.104",
            mac: "C8:3A:35:22:11:15",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
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

## 表头操作列表项

表头操作按钮可以设置显示的列表项，`head-operate`设置是否显示，默认不显示；`is-default-value`设置是否为默认显示列表项，默认显示；`add-operate`设置列表项是否可以操作，默认可以；注意：表头需要勾选默认一位；`hide-in-opreate`设置是否加入表格操作列表项内，默认值为false，注意：设置该配置项时不设置`is-default-value`

::: demo

```html
<v-table  :data="data" head-operate name="operateTb" 
:checkOperateData="checkData" @getCheckOperateData="getCheckOperateData">
  <v-table-col type="selection"></v-table-col>
  <v-table-col prop="ip" label="IP地址" :is-default-value="false"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" :add-operate="false"></v-table-col>
  <v-table-col
    prop="download"
    label="下载速率"
  ></v-table-col>
  <v-table-col
    prop="upLimit"
    :is-default-value="false"
    label="上传速率"
  ></v-table-col>

  <v-table-col prop="statu" width="148px" label="状态" hide-in-opreate></v-table-col>
</v-table>
<script>
  export default {
    mounted() {
      this.data = this.table1;
    },
    methods: {
      getCheckOperateData(data) {
        console.log('勾选数据为', data);
      }
    },
    data() {
      return {
        data: [],
        checkData: ['ip', 'mac', 'status'],
        table1: [
          {
            ip: "192.168.0.100",
            mac: "C8:3A:35:22:11:11",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
            download: "12",
            upLimit: "1000",
            downLimit: "25"
          },
          {
            ip: "192.168.0.101",
            mac: "C8:3A:35:22:11:12",
            在线Time: "100",
            hz: "5G",
            status: "升级中",
            download: "134",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.102",
            mac: "C8:3A:35:22:11:13",
            在线Time: "67567",
            hz: "2.4G",
            status: "离线",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.103",
            mac: "C8:3A:35:22:11:14",
            在线Time: "1000",
            hz: "5G",
            status: "在线",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.104",
            mac: "C8:3A:35:22:11:15",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
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

`is-pagination`配置表格分页，`page-size`配置每页多少条数据，`is-change-size`配置是否支持修改每页条数，`page-size-options`配置每页条数的选择，`is-input-page`配置是否支持手动输入页数跳转，`current-page`设置当前页数，`total-length`总共有多少条数据

::: demo

```html
<v-table
  no-id
  head-operate
  :data="data"
  :total-length="totalLength"
  @change-size="changeSize"
  @change-page="changePage"
  is-pagination
  is-change-size
  is-input-page
  :page-size="pageSize"
  :current-page="currentPage"
  name="pageTable"
>
  <v-table-col prop="ip" label="IP地址"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传速率"></v-table-col>
  <v-table-col prop="status" label="状态"></v-table-col>
  <v-table-col prop="downLimit" label="下载限速"></v-table-col>
</v-table>
<script>
  export default {
    mounted() {
      this.data = this.table1;
    },
    methods: {
      changeSize(size) {
        this.pageSize = size;
        console.log(`获取${size}条数据`);
        this.data = this.table2;
      },
      changePage(page) {
        this.currentPage = page;
        console.log(`获取第${page}页数据`);
        this.data = this.table2;
      }
    },
    data() {
      return {
        totalLength: 16,
        currentPage: 1,
        pageSize: 10,
        data: [],
        table2: [
          {
            ip: "192.168.0.100",
            mac: "C8:3A:35:22:11:11",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.101",
            mac: "C8:3A:35:22:11:12",
            在线Time: "100",
            hz: "5G",
            status: "在线",
            download: "134",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.102",
            mac: "C8:3A:35:22:11:13",
            在线Time: "67567",
            hz: "2.4G",
            status: "离线",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          }
        ],
        table1: [
          {
            ip: "192.168.0.100",
            mac: "C8:3A:35:22:11:11",
            在线Time: "1000",
            hz: "2.4G",
            status: "离线",
            download: "12",
            upLimit: "1000",
            downLimit: "25"
          },
          {
            ip: "192.168.0.101",
            mac: "C8:3A:35:22:11:12",
            在线Time: "100",
            hz: "5G",
            status: "升级中",
            download: "134",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.102",
            mac: "C8:3A:35:22:11:13",
            在线Time: "67567",
            hz: "2.4G",
            status: "离线",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.103",
            mac: "C8:3A:35:22:11:14",
            在线Time: "1000",
            hz: "5G",
            status: "在线",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.104",
            mac: "C8:3A:35:22:11:15",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
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

## 排序表格

`is-sort`表示此列支持排序 ,`defaultSortType`表示默认排序:`asc`升序，`des`降序

::: demo

```html
<v-table no-id :data="data" @sort="sortTable" name="sortTable">
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col is-sort prop="password" label="密码"></v-table-col>
  <v-table-col is-sort prop="name" label="名字"></v-table-col>
  <v-table-col
    is-sort
    prop="age"
    label="年龄"
    defaultSortType="asc"
  ></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        data: [
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
      sortTable(prop, sortType) {
        setTimeout(() => {
          let type = sortType == "asc" ? "升序" : "降序";
          console.log(`${prop}字段进行${type}排序`);
          this.data = this.data.concat([]);
        }, 1000);
      }
    }
  };
</script>
```

:::

## 空数据

表格数据为空时，`emptyValue`可以自定义设置，默认填充 `-`

::: demo

```html
<v-table no-id :data="table1" emptyValue="-" name="emptyTable">
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
            name: "",
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
            password: "",
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

## 多行数据

`word-wrap`参数设置列数据可以显示多行数据，默认为不显示多行，注意：数据需要存储为数组形式；

::: demo

```html
<v-table no-id :data="table1" name="mulTable">
  <v-table-col prop="ssid" label="SSID" word-wrap> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字" width="150px" word-wrap></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
</v-table>
<script>
  export default {
    data() {
      return {
        table1: [
          {
            ssid: ["ssid1", "ssid1"],
            password: '2"</span>',
            name: ["jack", "peter"],
            age: "12"
          },
          {
            ssid: ["ssid2"],
            password: "111111111",
            name: ["jhon"],
            age: "13"
          },
          {
            ssid: ["ssid3", "ssid1"],
            password: "2222222222",
            name: ["jack"],
            age: "15"
          },
          {
            ssid: ["ssid4"],
            password: "333333333333",
            name: ["jackssssssssssssssssssssssssssssssssssssssss", "peter"],
            age: "16"
          }
        ]
      };
    }
  };
</script>
```

:::

## 表格操作项

::: demo

```html
<v-table no-id :data="table1" name="tb123">
  <v-table-col prop="ssid" label="SSID"> </v-table-col>
  <v-table-col prop="password" label="密码"></v-table-col>
  <v-table-col prop="name" label="名字"></v-table-col>
  <v-table-col prop="age" label="年龄"></v-table-col>
  <v-table-col label="操作">
    <template v-slot="slotProps">
      <span class="v-icon-edit operate-icon" @click="editData(slotProps)"
        >编辑</span
      >
      <span class="v-icon-disable operate-icon" @click="editData(slotProps)"
        >禁用</span
      >
      <span
        class="v-icon-delete operate-icon disable"
        @click="editData(slotProps)"
        >删除</span
      >
    </template>
  </v-table-col>
</v-table>
<script>
  export default {
    methods: {
      editData() {
        //dosomething
      }
    },
    data() {
      return {
        table1: [
          {
            ssid: "ssid1",
            password: '2"</span>',
            name: "jack",
            age: "12",
            status: "online"
          },
          {
            ssid: "ssid2",
            password: "111111111",
            name: "jhon",
            age: "13",
            status: "offline"
          },
          {
            ssid: "ssid3",
            password: "2222222222",
            name: "jack",
            age: "15",
            status: "upgrade"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16",
            status: "offline"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16",
            status: "upgrade"
          },
          {
            ssid: "ssid4",
            password: "333333333333",
            name: "jack",
            age: "16",
            status: "offline"
          }
        ]
      };
    }
  };
</script>
```

:::

<!-- ## 操作按钮

新增 `is-add`设置是否显示新增按钮，`addConfig`设置新增弹窗内容
编辑 `is-edit`设置是否显示编辑按钮，`editConfig`设置编辑弹窗内容
删除 `is-delete`设置是否显示删除按钮，`deleteConfig`设置删除弹窗内容

::: demo

```html
<v-table no-id :data="table1" is-add is-edit is-delete>
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

## 表格大小

`size`控制表格大小，行高，默认`L`

表格 - 大

::: demo

```html
<v-table no-id size="L" :data="table1">
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
<v-table no-id size="M" :data="table1">
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
<v-table no-id size="S" :data="table1">
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

::: -->

## 斑马条纹

`stripe`配置表格斑马条纹

::: demo

```html
<v-table no-id :data="table1" stripe name="table96">
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
<v-table no-id :data="table1" border name="bordTb">
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

## 自定义数据

`v-slot`配置当前列的自定义数据，必须与`template`搭配，`v-slot`的值为当前行的数据

::: demo

```html
<v-table no-id :data="table1" name="tb65">
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
    methods: {
      show(slotProps) {
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
<v-table no-id :data="table1" name="fsdf">
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

<!-- ## 自定义表格点击事件

::: demo

```html
<v-table no-id :data="table1">
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

::: -->

## 加载中

`is-loading`表格是否在加载中

::: demo

```html
<v-table no-id :data="table1" is-loading name="tb548">
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
<v-table no-id :data="table1" is-loading name="tb6215">
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
<v-table
  no-id
  :data="table1"
  row-key="ssid"
  :before-select-all="beforeSelectAll"
  :selectData="selectData"
  @selection-change="selectList"
  name="tb921"
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
<v-table no-id :data="table1" row-key="ssid" :select-data="[table1[2]]" name="tb554">
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

## 刷新保持之前选中的数据

`select-data`为表格选中数据，在选中处理改变时，可以更新表格的选中数组，即可刷新时保留之前的数据

表头操作按钮可以设置显示的列表项，`head-operate`设置是否显示，默认不显示；`is-default-value`设置是否为默认显示列表项，默认显示；`add-operate`设置列表项是否可以操作，默认可以；注意：表头需要勾选默认一位；`hide-in-opreate`设置是否加入表格操作列表项内，默认值为false，注意：设置该配置项时不设置`is-default-value`

::: demo

```html
<v-button @click="refrensh">刷新</v-button>
<v-table :data="data" 
      head-operate 
      name="operateTb2" 
      :checkOperateData="checkData" 
      @getCheckOperateData="getCheckOperateData" 
      :select-data="selectedData"
      row-key="ip"
      @selection-change="selectionChange">
  <v-table-col type="selection" :get-disabled="getDisabled"></v-table-col>
  <v-table-col prop="ip" label="IP地址" :is-default-value="false"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" :add-operate="false"></v-table-col>
  <v-table-col
    prop="download"
    label="下载速率"
  ></v-table-col>
  <v-table-col
    prop="upLimit"
    :is-default-value="false"
    label="上传速率"
  ></v-table-col>
  <v-table-col prop="status" label="状态" hide-in-opreate></v-table-col>
</v-table>
<script>
  export default {
    mounted() {
      this.data = JSON.parse(JSON.stringify(this.table1));
    },
    methods: {
      getCheckOperateData(data) {
        console.log('勾选数据为', data);
      },
      getDisabled(data) {
      return data.ip > "192.168.0.103"
      },
      refrensh(){
        this.data = JSON.parse(JSON.stringify(this.table1));
      },
      selectionChange(data){
        this.selectedData = data;
      }
    },
    data() {
      return {
        selectedData:[],
        data: [],
        checkData: ['ip', 'mac', 'status'],
        table1: [
          {
            ip: "192.168.0.100",
            mac: "C8:3A:35:22:11:11",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
            download: "12",
            upLimit: "1000",
            downLimit: "25"
          },
          {
            ip: "192.168.0.101",
            mac: "C8:3A:35:22:11:12",
            在线Time: "100",
            hz: "5G",
            status: "升级中",
            download: "134",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.102",
            mac: "C8:3A:35:22:11:13",
            在线Time: "67567",
            hz: "2.4G",
            status: "离线",
            download: "34",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.103",
            mac: "C8:3A:35:22:11:14",
            在线Time: "1000",
            hz: "5G",
            status: "在线",
            download: "12",
            upLimit: "1000",
            downLimit: "100"
          },
          {
            ip: "192.168.0.104",
            mac: "C8:3A:35:22:11:15",
            在线Time: "1000",
            hz: "2.4G",
            status: "升级中",
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



## 序号表格

`type=index`表示序号，序号从 1 开始

::: demo

```html
<v-table no-id :data="table1" name="tb156">
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
<v-table no-id :data="table1" name="tb9531">
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

<!-- ## 排序表格

`is-sort`表示此列支持排序

::: demo

```html
<v-table no-id :data="table1">
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

::: -->

## 禁用

`disabled`配置表格全部禁用

::: demo

```html
<v-table no-id :data="table1" border disabled name="tb5fd">
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

<!-- ## 搜索表格

`is-search`表示此列数据支持搜索，匹配的结果是当前列的值或者通过`format`转换后的数据，展开数据和自定义更改数据不在匹配范围内

`placeholder`配置搜索框的占位符，不配置时取支持搜索列的表头文字用`/`分隔

::: demo

```html
<v-table no-id :data="table1">
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

::: -->

## 表格高度

`max-row`配置表格显示多少条数据，超过条数时，出现滚动条，默认为`0`不限制

::: demo

```html
<v-table no-id :data="table1" :max-row="5" name="sd56">
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

## 数据为空

::: demo

```html
<v-table no-id :data="table" empty-text="暂无数据" name="tb1567">
  <v-table-col prop="ip" label="IP地址" width="180px"> </v-table-col>
  <v-table-col prop="mac" label="MAC地址" width="180px"></v-table-col>
  <v-table-col prop="upload" label="上传速率"></v-table-col>
  <v-table-col prop="download" label="下载速率"></v-table-col>
  <v-table-col prop="upLimit" label="上传限速"></v-table-col>
</v-table>

<v-table no-id :data="table" empty-text="暂无数据" name="tb991616">
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

## Props

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

## v-table Slots

| name    | 说明                                              |
| ------- | ------------------------------------------------- |
| header  | 表格 body 第一行显示的内容，从 tr 开始自定义元素  |
| loading | 自定义加载中，显示的前提是 is-loading 必须为 true |
| empty   | 自定义数据列表为空显示                            |

## v-table Methods

| 方法名             | 说明                           | 参数 |
| ------------------ | ------------------------------ | ---- |
| getSelected        | 获取选中的项，返回值为选中的项 | -    |
| getCurrentPageData | 获取表格当前页的数据           |      |

## v-table @Events

| 事件名           | 说明                                                      | 参数                     |
| ---------------- | --------------------------------------------------------- | ------------------------ |
| after-update     | 更新后的表格数据                                          | 表格数据（转化后的数据） |
| click-row        | 当某一行被点击时会触发该事件                              | rowData, index           |
| selection-change | 点击全选 或者单选时执行的事件，仅在 type=selection 时生效 | 当前的选中项             |

## v-table-col Props

| 参数             | 说明                                                                                                                   | 类型            | 可选值                     | 默认值 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------- | ------ |
| type             | 对应列的类型，selection 为支持多选择，index 为显示行索引，expand 为支持展开                                            | string          | selection / index / expand | —      |
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

> 注意：设置固定列后，必须同时设置`width`，否则可能出现意想不到的问题。

## v-table-col Slots

| name    | 说明                                                        |
| ------- | ----------------------------------------------------------- |
| default | 自定义列显示信息，内容必须用 template 标签包含，使用 v-slot |
| expand  | 展开后的自定义内容，使用方法与 default 一致                 |

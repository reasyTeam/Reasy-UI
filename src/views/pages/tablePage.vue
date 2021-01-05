<template>
  <r-page>
    <r-h tag="h1" title="Table 表格" desc="">
      <r-h tag="h2" title="普通表格" desc="">
        <v-table :data="table1">
          <v-table-col prop="ssid" label="SSID">
            <template v-slot="slotProps">
              {{ slotProps.ssid }}
            </template>
          </v-table-col>
          <v-table-col prop="password" label="密码"></v-table-col>
          <v-table-col prop="name" label="名字"></v-table-col>
          <v-table-col prop="age" label="年龄"></v-table-col>
        </v-table>
      </r-h>
      <r-h tag="h2" title="斑马表格" desc="">
        <v-table :data="table1" stripe>
          <v-table-col prop="ssid" label="SSID">
            <template v-slot="slotProps">
              {{ slotProps.ssid }}
            </template>
          </v-table-col>
          <v-table-col prop="password" label="密码"></v-table-col>
          <v-table-col prop="name" label="名字"></v-table-col>
          <v-table-col prop="age" label="操作">
            <template>
              <span class="v-icon-edit pointer"></span>
              <span class="v-icon-delete pointer"></span>
            </template>
          </v-table-col>
        </v-table>
      </r-h>
      <r-h tag="h2" title="边框表格" desc="">
        <v-table :data="table1" border>
          <v-table-col label="序号" type="index"></v-table-col>
          <v-table-col prop="ssid" label="SSID">
            <template v-slot="slotProps">
              {{ slotProps.ssid }}
            </template>
          </v-table-col>
          <v-table-col prop="password" label="密码"></v-table-col>
          <v-table-col prop="name" label="名字"></v-table-col>
          <v-table-col prop="age" label="年龄"></v-table-col>
        </v-table>
      </r-h>
      <r-h tag="h2" title="选择表格" desc="">
        <v-table :data="table1">
          <v-table-col
            type="selection"
            :get-disabled="getDisabled"
          ></v-table-col>
          <v-table-col prop="ssid" label="SSID">
            <template v-slot="slotProps">
              {{ slotProps.ssid }}
            </template>
          </v-table-col>
          <v-table-col prop="password" label="密码"></v-table-col>
          <v-table-col prop="name" label="名字"></v-table-col>
          <v-table-col prop="age" label="年龄"></v-table-col>
        </v-table>
      </r-h>
      <r-h tag="h2" title="表格加载中" desc="">
        <v-table :data="table1" is-loading loading-text="正在加载">
          <v-table-col type="selection"></v-table-col>
          <v-table-col prop="ssid" label="SSID" is-sort>
            <template v-slot="slotProps">
              {{ slotProps.ssid }}
            </template>
          </v-table-col>
          <v-table-col prop="password" label="密码"></v-table-col>
          <v-table-col prop="name" label="名字"></v-table-col>
          <v-table-col prop="age" label="年龄"></v-table-col>
        </v-table>
      </r-h>
      <r-h tag="h2" title="排序表格" desc="">
        <v-table :data="table1" :max-row="2">
          <v-table-col type="selection"></v-table-col>
          <v-table-col prop="ssid" label="SSID" is-sort>
            <template v-slot="slotProps">
              {{ slotProps.ssid }}
            </template>
          </v-table-col>
          <v-table-col prop="password" label="密码"></v-table-col>
          <v-table-col prop="name" label="名字"></v-table-col>
          <v-table-col prop="age" label="年龄"></v-table-col>
        </v-table>
      </r-h>
      <r-h tag="h2" title="可展开表格" desc="">
        <v-table
          :data="table2"
          is-pagination
          is-change-size
          is-input-page
          :max-row="5"
        >
          <v-table-col
            type="expand"
            prop="ip"
            label="IP地址"
            is-sort
            width="180px"
          >
            <template #expand="slotScope">
              <div>IP地址: {{ slotScope.ip }}</div>
              <div>MAC地址: {{ slotScope.mac }}</div>
              <div>在线时长: {{ slotScope.onlineTime }}</div>
              <div>频段: {{ slotScope.hz }}</div>
              <div>上传速率: {{ slotScope.upload }}</div>
              <div>下载速率: {{ slotScope.download }}</div>
              <div>上传限速: {{ slotScope.upLimit }}</div>
              <div>下载限速: {{ slotScope.downLimit }}</div>
            </template>
          </v-table-col>
          <v-table-col
            prop="mac"
            label="MAC地址"
            is-sort
            width="180px"
          ></v-table-col>
          <v-table-col prop="upload" label="上传速率"></v-table-col>
          <v-table-col prop="download" label="下载速率"></v-table-col>
          <v-table-col prop="upLimit" label="上传限速"></v-table-col>
          <v-table-col prop="downLimit" label="下载限速"></v-table-col>
        </v-table>
      </r-h>
      <r-h tag="h2" title="支持搜索" desc="">
        <v-table
          :data="table2"
          is-pagination
          :page-size="4"
          is-change-size
          is-input-page
        >
          <v-table-col prop="ip" label="IP地址" is-sort width="180px" is-search>
          </v-table-col>
          <v-table-col
            prop="mac"
            label="MAC地址"
            is-sort
            width="180px"
            is-search
          ></v-table-col>
          <v-table-col
            prop="upload"
            label="上传速率"
            :format="formatData"
          ></v-table-col>
          <v-table-col
            prop="download"
            label="下载速率"
            :format="formatData"
          ></v-table-col>
          <v-table-col prop="upLimit" label="上传限速"></v-table-col>
          <v-table-col prop="downLimit" label="下载限速"></v-table-col>
        </v-table>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      table1: [
        {
          ssid: "ssid1",
          password: '2"</span>',
          name: "jack",
          age: "11"
        },
        {
          ssid: "ssid2",
          password: "111111111",
          name: "jhon",
          age: "11"
        },
        {
          ssid: "ssid3",
          password: "2222222222",
          name: "jack",
          age: "11"
        },
        {
          ssid: "ssid4",
          password: "333333333333",
          name: "jack",
          age: "11"
        }
      ],
      table2: [
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
  },
  methods: {
    getDisabled(rowData) {
      return rowData.ssid === "ssid2";
    },
    formatData(prop, rowData) {
      return rowData[prop] + "KB/s";
    }
  }
};
</script>

# 组件类型


[TOC]

### 安装与使用

安装

```
npm install reasy-ui-vue
```

使用

```
//引用样式
import '@reasy-team/reasy-ui-vue/dist/styles.css';
//引用文件
import ReasyUIVue from '@reasy-team/reasy-ui-vue';
Vue.use(ReasyUIVue);
```

### 按需引入

安装 babel-plugin-component 插件

	.babelrc配置
	"plugins": [
	["component", {
		"libraryName": "@reasy-team/reasy-ui-vue", //插件名称
		"styleLibraryName": "css", //插件样式目录
		"libDir": "dist/lib" //插件库路径
	  }]]
引用方式 

可以使用 Vue.use  或者Vue.component引用，但是base组件必须使用use引用。

```
import {Button, Base, Table} from "@reasy-team/reasy-ui-vue";
Vue.use(Base); //必须使用use
Vue.use(Header); //use示例
Vue.component(Table.name, Table); //全局组件示例
```

所有组件

```
Group,
Dialog,
Alert,
Header,
Page,
Table,
Input,
Radio,
Select,
Checkbox,
Button,
Progress,
Switch,
Slider,
Pop,
Text,
Picker,
Collapse,
Upload,
Base
```



### 自定义数据验证

输入框和自定义下拉框可定义数据验证函数，内部已集成数据验证，但未定义数据验证的类型。

如需定义数据验证类型，需在`Vue.prototype`上定义`$valid`属性，
值为对象，如

#### 添加验证示例

验证类型为对象方式：

	let valid = {
		num: {
			all: function(str, min, max) {
	
	            if (!(/^([-0-9])?([0-9]+)$/).test(str)) {
	                return "必须输入数字";
	            }
	
	            if (min && max) {
	                if (parseInt(str, 10) < min || parseInt(str, 10) > max) {
	                    return _("输入范围: %s - %s", [min, max]);
	                }
	            }
	        }
		}
	
	}
	Vue.prototype.$valid = valid;

验证类型为函数方式：


	//or
	
	let valid = {
	
		num: function(str, min, max) {
	
	        if (!(/^([-0-9])?([0-9]+)$/).test(str)) {
	            return "必须输入数字";
	        }
	
	        if (min && max) {
	            if (parseInt(str, 10) < min || parseInt(str, 10) > max) {
	                return _("输入范围: %s - %s", [min, max]);
	            }
	        }
		}
	
	}
	
	Vue.prototype.$valid = valid;

#### 单组件数据验证

调用Vue的全局函数 `$checkData`，参数为组件的对象

返回为当前数据是否正确，错误时返回false，并将组件对象的error属性修改为错误的信息。

##### 示例

	let dataKey = {
		error: "",
		required: true,
		val: "1a",
		maxlength: 3,
		valid: {
			type: "num",
			args: [1, 200]
		}
	}
	
	//Vue 组件内部调用
	let success = this.$checkData(dataKey);
	if(success) {
		//your code
	}

上述例子错误，dataKey.error会被赋值 自定义验证函数返回的值

#### 多组数据验证

调用Vue全局函数 `$checkAll`，

参数为多组单个组件的合集，当前仅支持对象方式，后续可以扩展成数组合集

返回值为Boolean， true表示验证通过； false表示验证错误

支持验证对象，key为数据字段，值为数据对象的配置，如：

##### 示例

	<template>
	    <div>  
	        <v-group title="发送间隔时间">
	            <v-input :data-key="formData.sendInterval"></v-input>
	            <span>s</span>
	            <span class="text-light">(范围：5-32768)</span>
	        </v-group>
	        <v-group title="TTL乘数">
	            <v-input :data-key="formData.ttlNum"></v-input>
	            <span>s</span>
	            <span class="text-light">(范围：2-10)</span>
	        </v-group>
	
	        <v-group title="发送延迟时间">
	            <v-input :data-key="formData.sendDelayTime"></v-input>
	            <span>s</span>
	            <span class="text-light">(范围：1-8192 , 发送延迟时间≤发送间隔时间/4)</span>
	        </v-group>
	        <v-group title="初始化延迟时间">
	            <v-input :data-key="formData.intDelayTime"></v-input>
	            <span>s</span>
	            <span class="text-light">(范围：1-10)</span>
	        </v-group>
	        
	        <v-group title=" ">
	            <v-button css="btn-primary" title="确定" :callback="submit"></v-button>
	        </v-group>
	
	    </div>
	</template>
	<script>
	export default {
	    data() {
	        return {
	            formData: {
	                sendInterval: {
	                    maxlength: 5,
	                    valid: {
	                        type: "num",
	                        args: [5, 32768]
	                    }
	                },
	                ttlNum: {
	                    maxlength: 2,
	                    valid: {
	                        type: "num",
	                        args: [2, 10]
	                    }
	                },
	                sendDelayTime: {
	                    maxlength: 4,
	                    valid: {
	                        type: "num",
	                        args: [1, 8192]
	                    }
	                },
	                intDelayTime: {
	                    maxlength: 2,
	                    valid: {
	                        type: "num",
	                        args: [1, 10]
	                    }
	                }
	            }
	        };
	    },
	
	    methods: {
	        submit() {
	            let checkSuccess = this.$checkAll(this.formData);
	
	            if(!checkSuccess) {
	                return;
	            }
	            //your code
	        }
	    }
	};
	</script>

 








<span id="Table表格"></span>

### Table表格

#### 配置属性

`<v-table :tableOptions="xxx" @on-custom-comp="xxxxx" :callback="xxxxxx">`

- tableOptions  Object 表格配置对象
- @on-custom-comp  Function 表格自定义数据
- callback Function 表格初始化后的回调，参数为当前页面的数据

tableOptions对象

| 参数          | 类型    | 默认值 | 意义                                                       |
| ------------- | ------- | ------ | ---------------------------------------------------------- |
| originData    | Array   | []     | 表格原始数据                                               |
| show          | Boolean | true   | 表格是否显示                                               |
| css           | String  |        | 表格自定义样式                                             |
| key           | String  |        | 表格数据的关键字，用于查找和匹配数据，每组数据的唯一标识符 |
| maxTableRow   | Number  | 10     | 表格显示多少行，超过行数时显示滚动条                       |
| showPage      | Boolean | false  | 是否支持分页显示                                           |
| pagePer       | Number  | 10     | 每页多少条                                                 |
| search        | Boolean | false  | 是否支持搜索                                               |
| placeholder   | String  |        | 搜索框的占位符，为空时会取支持搜索列的title，再以 "/" 合并 |
| selectBox     | Boolean | false  | 第一列是否是复选框                                         |
| secondColumns | Array   |        | 表格第二个title                                            |
| columns       | Array   |        | 表头信息                                                   |

#### 示例

```
<template>
	<v-table ref="table" 
			:tableOptions="tableData" 
			@on-custom-comp="customCompFunc"
			:callback="afterUpdateTable">
	</v-table>
</template>

<script>
	export default {
	    data() {
	        return {
	            tableData: {
	                key: "vlanId",
	                css: "table-group",
	                selectBox: true,
	                columns: [
	                    {
	                        title: "VLAN ID",
	                        field: "vlanId"
	                    },
	                    {
	                        title: "服务器IP",
	                        field: "serverIp",
	                        format(data) {
	                            return data.join("/");
	                        }
	                    }
	                ]
	            }
			}
		},
		mounted() {
			//此处通过ajax获取数据，然后给 this.tableData.originData赋值
			//this.tableData.originData = your data list;
		},
		methods: {
			customCompFunc(options) {
	            switch (options.type) {
	                
	                //选中单个
	                case "checkbox":
	                    this.clickSelectBox(options);
	                    break;
	                //全选
	                case "selectAll":
	                    this.clickSelectedAll(options);
	                    break;
	            }
	        },
			clickSelectBox(options) {
				//your code
			},
			clickSelectedAll(options) {
				//your code
			},
			afterUpdateTable(pageData) { //当前页面的数据

				pageData.forEach(item => {
					if(item.vlanId == "0") {
						item.hasCheckbox = false;// 禁用checkbox
					}
				})
				//表格更新后的回调
			}
		}
	}
</script>
```

- 表格操作事件处理主要是执行表格的 on-custom-comp事件，通过参数类型（type）不同处理不同的事件

#### 表头属性

##### 表头选项

columns，配置属性如下

| 参数          | 类型     | 默认值 | 意义                                                         |
| ------------- | -------- | ------ | ------------------------------------------------------------ |
| title         | String   |        | 表头文字                                                     |
| field         | String   |        | 表格字段                                                     |
| width         | String   |        | 列宽度                                                       |
| search        | Boolean  |        | 此列是否支持搜索                                             |
| sort          | Boolean  |        | 此列是否支持排序                                             |
| format        | Function |        | 数据转换函数，必须有返回值，<br />第一参数为改字段的值<br/>第二参数为此行的数据<br/>返回值为当前显示 |
| parseHtml     | Boolean  | false  | 是否显示以html显示                                           |
| componentName | String   |        | 自定义组件名称，必须为全局组件<br>其中事件处理必须触发`on-custom-comp`父组件的事件 |

##### 双列表头配置

单表头出现双列时，此处为多列的配置，此表头显示在第一列

secondColumns，配置属性如下

| 参数    | 类型   | 默认值 | 意义     |
| ------- | ------ | ------ | -------- |
| width   | String |        | 宽度     |
| colspan | Number |        | 占几列   |
| rowspan | Number |        | 占几行   |
| title   | String |        | 文字显示 |

双表头示例：

    <template>
    	<v-table ref="table" 
    			:tableOptions="tableData">
    	</v-table>
    </template>
    
    <script>
    	export default {
    	    data() {
    	        return {
    	            tableData: {
                        key: "portNum",
                        css: "table-group",
                        maxTableRow: 14,
                        columns: [
                            {
                                title: "",
                                field: "portNum",
                                width: "50px"
                            }, {
                                title: "MSTP",
                                field: "sendMstp" 
                            }, {
                                title: "RSTP",
                                field: "sendRstp"
                            }, {
                                title: "STP",
                                field: "sendStp"
                            }, {
                                title: "TCN",
                                field: "sendTcn"
                            }, {
                                title: "MSTP",
                                field: "receiveMstp" 
                            }, {
                                title: "RSTP",
                                field: "receiveRstp"
                            }, {
                                title: "STP",
                                field: "receiveStp"
                            }, {
                                title: "TCN",
                                field: "dropTcn"
                            },
                            {
                                title: "Unknown",
                                field: "dropUnknown"
                            },{
                                title: "Illegal",
                                field: "dropIllegal"
                            }
                        ],
                        secondColumns: [{
                            rowspan: 2,
                            title: "端口",
                            width: "50px"
                        },{
                            colspan: 4,
                            title: "发送"
                        },{
                            colspan: 4,
                            title: "接收"
                        },{
                            colspan: 2,
                            title: "丢弃"
                        }]
                    }
    			}
    		},
    		mounted() {
    			//此处通过ajax获取数据，然后给 this.tableData.originData赋值
    			//this.tableData.originData = your data list;
    		}
    	}
    </script>




#### 自定义组件

自定义组件中可以从父组件获取到的值为

| 参数       | 类型   | 默认值 | 意义                             |
| ---------- | ------ | ------ | -------------------------------- |
| action     | Any    |        | 自定义的字段，用于自定义组件传值 |
| rowData    | Object |        | 当前行的数据                     |
| originData | Object |        | 当前行的原始数据                 |
| field      | String |        | 当前行列的字段                   |
| keyword    | String |        | 关键字，等于表格插件的key        |
| index      | Number |        | 当前行数                         |

* 当selectBox为true时， 列表第一项为checkbox
* 点击事件必须执行表格的自定义事件 on-custom-comp，传参type值为checkbox，
  事件处理都交付于父组件的`on-custom-comp`的事件处理，表格列中自定义组件

##### 示例


		表格中colums的配置
		colums: [{
			componentName: "table-operation"
		}]
		
		// 全局自定义列组件
		Vue.component('table-operation', {
		    template:`<div>
		    	<a href="" @click.stop.prevent="update(rowData,field)">编辑</a>&nbsp;
		    	<a href="" @click.stop.prevent="deleteRow(rowData,field)">删除</a>
		    </div>`,
		    props:["rowData", "field", "index", "originData"],
		    methods:{
		        update(rowData, field){
		
		          console.log("xxxx");
		        },
		
		        deleteRow(){
		
		            // 参数根据业务场景随意构造
		            let params = {type:'delete',index: this.index};
		            this.$emit('on-custom-comp',params); //必须 触发表格的自定义事件
		
		        }
		    }
		});

callback 表格更新后的回调

* 如果表格某行需要禁用checkbox时，只需给此行数据增加 hasCheckbox

##### 事件

checkbox 中 on-custom-comp 事件中，参数为对象，其属性为

| 参数       | 类型   | 默认值 | 意义                                                         |
| ---------- | ------ | ------ | ------------------------------------------------------------ |
| type       | string |        | 事件处理的标志，复选框时 值为checkbox，全选时为selectAll<br />其他需用户自定义 |
| index      | Number |        | 当前第几个                                                   |
| rowData    | Object |        | 此行的数据（经过format转换后的数据）                         |
| originData | Object |        | 原始数据                                                     |


见下示例中的`customCompFunc`

* 

<div id="下拉框"></div>
### 下拉框

#### 配置属性

支持下拉框自定义和手动输入

| 参数           | 类型     | 默认值 | 意义                                                         |
| -------------- | -------- | ------ | ------------------------------------------------------------ |
| required       | Boolean  | true   | 是否必须输入                                                 |
| css            | String   |        | 样式                                                         |
| show           | Boolean  | true   | 是否显示                                                     |
| ignore         | Boolean  | false  | 是否忽略验证，也可用于保存时不提交此项                       |
| disabled       | Boolean  | false  | 是否禁用                                                     |
| hasManual      | Boolean  | false  | 是否支持手动输入                                             |
| manualText     | String   | 自定义 | 手动输入时，下拉列表手动输入的文字                           |
| maxlength      | Number   |        | 手动输入时最大输入长度                                       |
| error          | String   |        | 错误信息                                                     |
| name           | String   |        | 下拉框的name，用于自动化                                     |
| defaultVal     | String   |        | 下拉框的默认值                                               |
| immediate      | Boolean  | true   | 是否立即执行回调函数                                         |
| sortArray      | Array    |        | 下拉框列表                                                   |
| val            | String   |        | 下拉框值                                                     |
| valid          | Array    |        | 自定义数据时的验证类型（详情见输入框）                       |
| changeCallBack | Function |        | 值被修改后执行的回调，**参数为下拉框的值**                   |
| events         | Object   |        | 自定义事件<br />属性为事件类型，值为事件方法                 |
| beforeChange   | Function |        | 值修改之前执行的函数，返回false时不会执行changCallBack，其他则执行 |

#### 下拉选项

sortArray的两种配置

- 当  显示的文字和值一致时，可以配置为 sortArray = ["option1", "option2"]

- 另一种为 对象配置 value：下拉选项的值   title：下拉选项的文字显示

如：sortArray = [{value: "1", title: "option1"},{value: "2", title: "option2"}]

#### 示例

	<template>
		<v-select :data-key="select"></v-select>
	</template>
	<script>
	export default {
		data() {
			return {
				select: {
					val: "",
					hasManual: true,
					manualText: "手动设置",
					sortArray:[{
						title: "这是什么选项",
						value:  "1"
					},{
						title: "你在干吗",
						value:  "2"
					},{
						title: "option 3",
						value:  "3"
					}],
					valid: {
						type: "ascii"
					},
					events: {
						change: this.changeValue
					},
					changeCallBack: this.selectCallBack
				}
			}
		},
		methods: {
	        changeValue(event) {
	
	        },
			selectCallBack(selectVal) {
		
			}
		}
	}
	</script>

#### 注意事项

* 注意： 当hasManual=true时，不会立即执行changeCallBack
* beforeChange： 当返回false时，不会执行changeCallBack
* 选择手动输入时，值为 -1，后续扩展成传参

### 复选框

#### 配置属性

支持单个复选框和多个复选框，使用属性为 :data-key="xxxx"

| 参数           | 类型            | 默认值        | 意义                                                   |
| -------------- | --------------- | ------------- | ------------------------------------------------------ |
| required       | Boolean         | false         | 是否必须有值                                           |
| css            | String          |               | 样式                                                   |
| show           | Boolean         | true          | 是否显示                                               |
| ignore         | Boolean         | false         | 是否忽略验证，也可用于保存时不提交此项                 |
| disabled       | Boolean         | false         | 是否禁用，禁用所有                                     |
| val            | String or Array |               | 值                                                     |
| name           | String          |               | 组件名称                                               |
| values         | Array           | [true, false] | 选中或不选中的值  第一项为选中的值  第二项为不选中的值 |
| error          | String          |               | 错误信息                                               |
| hasSelectAll   | Boolean         | false         | 是否有全选，多项时有效                                 |
| sortArray      | Array           |               | 选项列表                                               |
| changeCallBack | Function        |               | 修改数据后的函数，参数为复选框的值                     |

#### 选项


sortArray数组字段

| 参数     | 类型    | 默认值 | 意义                                     |
| -------- | ------- | ------ | ---------------------------------------- |
| title    | String  |        | 选项的文字                               |
| value    | String  |        | 选项的值                                 |
| disabled | Boolean | false  | 是否禁用此项，当全局disabled时，全部禁用 |

#### 注意事项

* val 当选项只有一个时，值为String， 当选项多个时，返回的是选中后的值组成的数组
* hasSelectAll 是否有全选，适用于多个复选框

#### 示例

	<template>
		<v-checkbox :data-key="checkbox"></v-checkbox>
	</template>
	<script>
	export default {
		data() {
			return {
				checkbox: {
					sortArray: [{
						value: "2",
						title: "label 2"
					},{
						value: "0",
						title: "label 0",
						disabled: true
					},{
						value: "1",
						title: "label 1"
					}],
					changeCallBack(value) {
						console.log("checkbox value ",value);
					}
				}
			}
		}
	}
	
	</script>

### 单选按钮

组件示例`<v-radio :data-key="xxx"></v-radio>`

#### 配置属性

| 参数          | 类型            | 默认值 | 意义                                   |
| ------------- | --------------- | ------ | -------------------------------------- |
| required      | Boolean         | true   | 是否必须有值                           |
| css           | String          |        | 样式                                   |
| show          | Boolean         | true   | 是否显示                               |
| ignore        | Boolean         | false  | 是否忽略验证，也可用于保存时不提交此项 |
| disabled      | Boolean         | false  | 是否禁用，禁用所有                     |
| val           | String or Array |        | 值                                     |
| name          | String          |        | 组件名称                               |
| error         | String          |        | 错误信息                               |
| sortArray     | Array           |        | radio选项                              |
| changCallBack | Function        |        | 修改选项后的回调事件                   |

#### 选项

sortArray 条目的对象如下

| 参数     | 类型    | 默认值 | 意义                       |
| -------- | ------- | ------ | -------------------------- |
| value    | String  |        | 选项的值                   |
| title    | String  |        | 选项显示的文字             |
| disabled | Boolean | false  | 是否禁用此项，不是必须配置 |

#### 示例

	<template>
		<v-radio :dataKey="radio"></v-radio>
	</template>
	
	<script>
	
	export default {
		data() {
			return {
				radio: {
					sortArray: [{
						value: "2",
						title: "label 2"
					},{
						value: "0",
						title: "label 0",
						disabled: true
					},{
						value: "1",
						title: "label 1"
					}],
					changeCallBack(value) {
						console.log("radio value ",value);
					}
				}
			}
		}
	}	
	</script>

<div id="输入框"></div>
### 输入框

组件示例： `<v-input :data-key="options"></v-input>`

#### 配置属性

| 参数           | 类型            | 默认值 | 意义                                   |
| -------------- | --------------- | ------ | -------------------------------------- |
| required       | Boolean         | true   | 是否必须有值                           |
| css            | String          |        | 样式                                   |
| show           | Boolean         | true   | 是否显示                               |
| ignore         | Boolean         | false  | 是否忽略验证，也可用于保存时不提交此项 |
| disabled       | Boolean         | false  | 是否禁用，禁用所有                     |
| val            | String or Array |        | 值                                     |
| name           | String          |        | 组件名称                               |
| error          | String          |        | 错误信息                               |
| maxlength      | Number          |        | 输入框最大允许输入长度                 |
| type           | String          | text   | 输入框类型                             |
| placeholder    | String          |        | 输入框占位符                           |
| hasEye         | Boolean         | false  | 是否有小眼睛                           |
| valid          | Object or Array |        | 数据验证类型                           |
| changeCallBack | Function        |        | 数据更新后的回调函数                   |

#### 数据验证valid

| 参数 | 类型   | 默认值 | 意义         |
| ---- | ------ | ------ | ------------ |
| type | String |        | 数据验证类型 |
| args | Array  |        | 验证参数     |


valid 为单个验证时，可以为对象，如

	valid: {
		type: "num",
		args: [1,100]
	}
	
	//or
	valid: [{
		type: "num",
		args: [1,100]
	}]

#### 示例

	<template>
		<v-input :data-key="input"></v-input>
	</template>
	
	<script>
	
	export default {
		data() {
			return {
				input: {
					placeholder: "请输入用户名",
					type: "text",
					maxlength: 18,
					name: "username",
					valid: { //自定义的验证类型
						type: "user",
						args: [1, 32]
					}
				}
			}
		}
	}	
	</script>


<div id="开关"></div>
### 开关

组件示例： `<v-switch :data-key="options"></v-switch>`

#### 配置属性

| 参数           | 类型               | 默认值        | 意义                                                      |
| -------------- | ------------------ | ------------- | --------------------------------------------------------- |
| css            | String             |               | 样式                                                      |
| show           | Boolean            | true          | 是否显示                                                  |
| disabled       | Boolean            | false         | 是否禁用                                                  |
| val            | String or  Boolean |               | 值                                                        |
| immediate      | Boolean            | true          | 是否立即执行回调函数                                      |
| name           | String             |               | 组件名称                                                  |
| values         | Array              | [true, false] | 开启和关闭的值                                            |
| changeCallBack | Function           |               | 切换开关后执行的回调函数，参数开关当前值                  |
| beforeChange   | Function           |               | 切换之前执行的函数，如果返回false，则不执行changeCallBack |

#### 示例

	<template>
		<v-switch :data-key="switch"></v-switch>
	</template>
	
	<script>
	
	export default {
		data() {
			return {
				switch: {
					css: "swicth",
					name: "ssidEn",
					changeCallBack(value) {
						//your code
					}	
					
				}
			}
		}
	}	
	</script>

<div id="按钮"></div>
### 按钮

组件示例： `<v-button title="" css="" :callback="click" :show="isShow" :disabled="isDisabled" name="xxx"></v-button>`

#### 配置属性

| 参数     | 类型     | 默认值 | 意义         |
| :------- | -------- | ------ | ------------ |
| title    | String   |        | 按钮文字     |
| css      | String   |        | 按钮样式     |
| callback | Function |        | 按钮点击事件 |
| show     | Boolean  | true   | 按钮是否显示 |
| disabled | Boolean  | false  | 按钮是否禁用 |
| name     | String   |        | 按钮名称     |

#### 示例

	<template>
		<v-button title="保存" css="btn-primary" :callback="submit" :show="isShow" :disabled="isDisabled" name="xxx"></v-button>
	</template>
	
	<script>
	
	export default {
		data() {
			return {
				isShow： true,
				isDisabled: false
			}
		},
		methods: {
			submit() {
				//your code
			}
		}
	}	
	</script>

<div id="IP地址输入框"></div>
### IP地址输入框

组件示例： `<v-ip :data-key="ip"></v-ip>`

#### 配置属性

| 参数     | 类型            | 默认值 | 意义                                   |
| -------- | --------------- | ------ | -------------------------------------- |
| required | Boolean         | true   | 是否必须有值                           |
| css      | String          |        | 样式                                   |
| show     | Boolean         | true   | 是否显示                               |
| ignore   | Boolean         | false  | 是否忽略验证，也可用于保存时不提交此项 |
| disabled | Boolean         | false  | 是否禁用，禁用所有                     |
| val      | String          |        | 值                                     |
| name     | String          |        | 组件名称                               |
| error    | String          |        | 错误信息                               |
| valid    | Object or Array |        | 数据验证                               |

#### 示例


	<template>
		<v-ip :data-key="ip"></v-ip>
	</template>
	
	<script>
	
	export default {
		data() {
			return {
				ip： {
					valid: { //自定义输入验证类型
						type: "ip"
					}
				}
			}
		}
	}	
	</script>

<div id="MAC地址输入框"></div>
### MAC地址输入框

组件示例： `<v-mac:data-key="ip"></v-mac>`

#### 配置属性

| 参数     | 类型            | 默认值 | 意义                                   |
| -------- | --------------- | ------ | -------------------------------------- |
| required | Boolean         | true   | 是否必须有值                           |
| css      | String          |        | 样式                                   |
| show     | Boolean         | true   | 是否显示                               |
| ignore   | Boolean         | false  | 是否忽略验证，也可用于保存时不提交此项 |
| disabled | Boolean         | false  | 是否禁用，禁用所有                     |
| val      | String          |        | 值                                     |
| name     | String          |        | 组件名称                               |
| error    | String          |        | 错误信息                               |
| valid    | Object or Array |        | 数据验证                               |

####示例


	<template>
		<v-mac :data-key="mac"></v-mac>
	</template>
	
	<script>
	
	export default {
		data() {
			return {
				mac： {
					valid: { //自定义输入验证类型
						type: "mac"
					}
				}
			}
		}
	}	
	</script>

<div id="自定义多段输入框"></div>
### 自定义多段输入框

IP地址和MAC地址的输入框是基于此组件实现

#### 配置属性

组件标签`v-column`

| 参数      | 类型            | 默认值 | 意义                                   |
| --------- | --------------- | ------ | -------------------------------------- |
| required  | Boolean         | true   | 是否必须有值                           |
| css       | String          |        | 样式                                   |
| show      | Boolean         | true   | 是否显示                               |
| ignore    | Boolean         | false  | 是否忽略验证，也可用于保存时不提交此项 |
| disabled  | Boolean         | false  | 是否禁用，禁用所有                     |
| val       | String          |        | 值                                     |
| name      | String          |        | 组件名称                               |
| error     | String          |        | 错误信息                               |
| valid     | Object or Array |        | 数据验证                               |
| column    | Number          | 4      | 输入框个数                             |
| maxlength | Number          | 3      | 单个输入框允许输入的长度               |
| splitter  | String          | .      | 分隔符，将多个输入框的数据用分隔符合并 |
| allow     | String          | 0-9    | 允许输入的字符                         |

#### 注意事项

主要配置column、maxlength、splitter、allow字段，其中allow字段不区分大小写

### 滑块

组件示例： `<v-slider :data-key="slider"></v-slider>`

#### 配置属性

| 参数           | 类型     | 默认值 | 意义                                 |
| -------------- | -------- | ------ | ------------------------------------ |
| css            | String   |        | 样式                                 |
| show           | Boolean  | true   | 是否显示                             |
| min            | Number   | 0      | 最小值                               |
| max            | Number   | 100    | 最大值                               |
| immediate      | Boolean  | true   | 是否立即执行回调函数                 |
| disabled       | Boolean  | false  | 是否禁用                             |
| changeCallBack | Function |        | 切换值后的回调函数，参数为滑块当前值 |

#### 示例

	<template>
		<v-slider :data-key="slider"></v-slider>
	</template>
	
	<script>
	
	export default {
		data() {
			return {
				slider： {
					min: 10,
					max: 100,
					changeCallBack(value) {
						//your code 
					}
				}
			}
		}
	}	
	</script>

<div id="组"></div>
### 组

左右布局，左边文字，右边为组件

#### 配置属性

组件标签 `v-group`

| 参数  | 类型   | 默认值 | 意义       |
| ----- | ------ | ------ | ---------- |
| title | String |        | 左边文字   |
| css   | String |        | 自定义样式 |

#### 示例

组件内部的元素会显示在右侧，配合其他组件使用，如：

	<template>
		<v-group title="用户名">
			<v-input :data-key="input"></v-input>
		</v-group>
	</template>
	
	<script>
	
	export default {
		data() {
			return {
				input: {
					placeholder: "请输入用户名",
					type: "text",
					maxlength: 18,
					name: "username",
					valid: { //自定义的验证类型
						type: "user",
						args: [1, 32]
					}
				}
			}
		}
	}	
	</script>

### 提示信息

鼠标放上去后显示的文字，类似title属性

属性 `v-tooltip`，值为需要显示的信息

示例：

	<div v-tooltip="'随便显示什么'"></div>

当鼠标放到该元素上时，则显示“随便显示什么”

### 对话框

自定义弹出框内容，组件名`v-dialog`，

#### 配置属性

| 参数           | 类型     | 默认值 | 意义                 |
| -------------- | -------- | ------ | -------------------- |
| title          | String   |        | 弹出框header文字     |
| show           | Boolean  | true   | 是否显示             |
| css            | String   |        | 自定义样式           |
| hasOK          | Boolean  | true   | 是否有确定按钮       |
| hasCancel      | Boolean  | true   | 是否有取消按钮       |
| outside        | Boolean  | true   | 点击对话框外是否隐藏 |
| autoHide       | Boolean  | true   | 保存后是否自动隐藏   |
| okText         | String   | 确定   | 确定按钮文字         |
| cancelText     | String   | 取消   | 取消按钮文字         |
| okCallBack     | Function |        | 点击确定执行的事件   |
| cancelCallBack | Function |        | 点击取消执行的事件   |

#### 示例

	<template>
		<v-dialog :dialog="dialog">
			<v-group title="用户名">
				<v-input :data-key="input"></v-input>
			</v-group>
		</v-dialog>
	</template>
	
	<script>
	
	export default {
		data() {
			return {
				dialog: {
	                okCallBack: this.submit,
	                css: "port-dialog"
	            },
				input: {
					placeholder: "请输入用户名", 
					type: "text",
					maxlength: 18,
					name: "username",
					valid: { //自定义的验证类型
						type: "user",
						args: [1, 32]
					}
				}
			}
		},
		methods: {
			submit() {
				//your code
			}
		}
	}	
	</script>

<div id="消息提示"></div>
### 消息提示

	1、确认框
	this.$confirm(msg).then(function() {
		//点击确定动作	
		}).catch(function() {
		//点击取消动作
		});
		
	2、警告框
	this.$confirm(msg).then(function() {
		//点击确定动作	
		})；
	
	3、提示框
	this.$message(msg, time);

确认框和警告框的msg可以为String 或者Object

为Object时，字段如下

| 参数       | 类型          | 默认值 | 意义                  |
| ---------- | ------------- | ------ | --------------------- |
| title      | String        |        | 弹出框header文字      |
| parseHtml  | Boolean       | false  | 是否以HTML方式解析    |
| okText     | String        | 确定   | 确定按钮文字          |
| cancelText | String        | 取消   | 取消按钮文字          |
| hasCancel  | Boolean       | true   | 是否有取消按钮        |
| content    | String or Dom |        | 提示的文字或者dom节点 |

<div id="端口配置"></div>
### 端口配置

组件名称 `v-port`，支持配置属性`data-port` 和`relative-port`

#### 配置属性

`data-port`的配置属性如下

| 参数         | 类型    | 默认值 | 意义             |
| ------------ | ------- | ------ | ---------------- |
| show         | Boolean | true   | 是否显示         |
| singleVal    | boolean | false  | 是否单选         |
| portNum      | Number  | 28     | 端口个数         |
| consolePort  | Number  | 4      | 串口端口个数     |
| isClick      | Boolean | true   | 是否支持点击     |
| val          | Array   |        | 被选中的端口     |
| name         | String  |        | 端口名称         |
| disabled     | Array   |        | 禁用的端口列表   |
| legend       | Boolean | false  | 是否显示端口图例 |
| hasSelectAll | Boolean | true   | 是否显示全选按钮 |

`relative-port` 为端口组名称，显示哪些端口在同一组，此时配置时，以组为单位

属性为组名称，值为此组内的端口号（同一端口不能在两个组内）

#### 示例

	<template>
		<v-port :data-port="port" :relative-port="relativePort"></v-port>
	</template>
	
	</script>
	export default {
		data() {
			return {
				port: {
					portNum: 28,
			        consolePort: 4,
			        val: ["3"]
				},
				relativePort: {
					"ACC12": ["1", "3", "7"]
				}
			}
		}
	}	
	</script>

### 文件上传

配置属性如下

| 参数           | 类型     | 默认值 | 意义                                       |
| -------------- | -------- | ------ | ------------------------------------------ |
| uploadUrl      | String   |        | 上传的url                                  |
| hasTips        | Boolean  | false  | 是否显示文件名称                           |
| css            | String   |        | 自定义样式                                 |
| name           | String   | file   | 上传文件的name值                           |
| changeCallBack | Function |        | 选择文件后执行的事件，参数为选择的文件路径 |
| afterCallBack  | Function |        | 上传文件后的回调事件，值为上传返回值       |

* 注意： 文件上传需要手动执行文件上传组件的submit方法。

示例：

```
<template>
	<v-upload
        ref="fileUpload"
        title="软件升级"
        name="file"
        css="btn-tools"
        :uploadUrl="upgradeUrl"
        :afterCallBack="afterSubmit"
        :changeCallBack="changeFile"
        >
        <button @click="upload">升级</button>
    </v-upload>
</template>
<script>
export default {
	data() {
		return {
			upgradeUrl: "/cgi-bin/upgrade"
		};
	},
	methods: {
		afterSubmit(res) {
			
		},
		changeFile(filePath) {
             console.log(filePath);
		},
		upload() {
			//手动执行上传事件
			this.$refs.fileUpload.submit();
		}
	}
	

}
</script>
```



### 区块翻译

组件 `v-elem`，属性show，表示是否显示隐藏

此处为解决v-if下显示后，文字未翻译的问题

* 前提是项目必须引用B28n.js，并且在B28n.js 函数 `replaceTextNodeValue`中增加
	
	```
	if(element.getAttribute("data-translated")) {
		//translate siblings
		if (nextSibling) {
			replaceTextNodeValue(nextSibling);
		}
		return;
	}
	```
	
	


​	 

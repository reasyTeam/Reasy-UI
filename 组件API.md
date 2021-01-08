# v-button

## 属性 Attributes

| 参数        | 说明         | 类型    | 可选值                                                       | 默认值 |
| ----------- | ------------ | ------- | ------------------------------------------------------------ | ------ |
| type        | 类型         | string  | primary 主按钮<br />secondary 次按钮<br />info 次按钮-灰 常用按钮<br />danger 高危按钮<br />text 文字按钮 | info   |
| disabled    | 是否禁用     | boolean | —                                                            | false  |
| is-loading  | 是否在加载中 | boolean | —                                                            | false  |
| icon        | 图标类名     | string  | —                                                            | —      |
| suffix-icon | 尾部图标     | string  | —                                                            | —      |
| size        | 按钮大小     | string  | S / M / L                                                    | M      |

## 事件 Events

| 事件名 | 说明     | 参数 |
| ------ | -------- | ---- |
| click  | 按钮事件 | —    |

# v-slider 滑动条

## 属性 Attributes

| 参数                | 说明                                             | 类型     | 可选值    | 默认值 |
| ------------------- | ------------------------------------------------ | -------- | --------- | ------ |
| v-model             | 绑定值                                           | number   | —         | —      |
| name                | 滑动条name                                       | string   |           |        |
| min                 | 最小值                                           | number   | —         | 0      |
| max                 | 最大值                                           | number   | —         | 100    |
| disabled            | 是否禁用                                         | boolean  | —         | false  |
| step                | 步长                                             | number   | —         | 1      |
| size                | 输入框大小                                       | string   | S / M / L | M      |
| precision           | 精度，小于步长精度时取步长精度                   | Number   |           |        |
| show-range          | 是否显示范围提示文字                             | boolean  |           | false  |
| show-input          | 是否显示输入框                                   | boolean  | —         | false  |
| show-input-controls | 输入框是否显示加减                               | boolean  |           | false  |
| show-tooltip        | 是否显示 tooltip                                 | boolean  | —         | true   |
| format              | tooltip显示格式化, function(value){return value} | Function | —         | —      |

## 事件 Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |

# v-input 输入框

## 属性 Attributes

| 参数            | 说明                                                         | 类型            | 可选值                             | 默认值 |
| --------------- | ------------------------------------------------------------ | --------------- | ---------------------------------- | ------ |
| v-model         | 绑定值，type=number时，值类型为number，<br />其他情况类型为string | string / number | —                                  | —      |
| type            | 类型                                                         | string          | text/textarea,其他input type的类型 | —      |
| name            | 原生属性                                                     |                 | —                                  | —      |
| maxlength       | 最大输入长度                                                 | number          | —                                  | —      |
| disabled        | 是否禁用                                                     | boolean         | —                                  | false  |
| width           | 输入框长度，支持数字和字符串，如 70 或 70px 或 70%           | string / number |                                    |        |
| placeholder     | 输入框占位文字                                               | string          | —                                  | —      |
| is-clear        | 是否支持清空                                                 | boolean         | —                                  | false  |
| show-password   | 是否显示切换密码图标                                         | boolean         | —                                  | false  |
| show-word-limit | 是否显示输入字数统计                                         | boolean         | —                                  | false  |
| readonly        | 原生属性，是否只读                                           | boolean         | —                                  | false  |
| autofocus       | 是否自动聚焦                                                 | boolean         | —                                  | false  |
| size            | 输入框大小，textarea时无效                                   | string          | S / M / L                          | M      |
| icon            | 输入框头部图标                                               | string          | —                                  | —      |
| suffix-icon     | 输入框尾部图标                                               | string          | —                                  | —      |
| rows            | textarea时生效                                               | number          | —                                  | 2      |
| allow           | 输入框允许输入字符的正则表达式                               | RegExp          | —                                  | —      |

## 事件 Events

| 事件名 | 说明                                                 | 参数       |
| ------ | ---------------------------------------------------- | ---------- |
| change | 值改变时执行（失焦时），先执行失焦事件，再执行此事件 | 改变后的值 |
| input  | 输入框值改变时触发                                   | 输入框的值 |
| blur   | 输入框失焦时触发                                     | event      |
| focus  | 输入框聚焦时触发                                     | event      |
| clear  | 点击清空时触发                                       | —          |

## 方法 Methods

| 方法名        | 说明           | 参数           |
| ------------- | -------------- | -------------- |
| focus         | 输入框聚焦     |                |
| setInputValue | 设置输入框的值 | 设置输入框的值 |

# v-input-group

## 属性 Attributes

| 参数       | 说明                                               | 类型            | 可选值    | 默认值 |
| ---------- | -------------------------------------------------- | --------------- | --------- | ------ |
| v-model    | 绑定值                                             | string          | —         | —      |
| type       | 输入框组类型                                       | string          | ip / mac  | —      |
| name       | 原生属性                                           | string          | —         | —      |
| disabled   | 是否禁用                                           | boolean         | —         | false  |
| width      | 输入框长度，支持数字和字符串，如 70 或 70px 或 70% | string / number | —         | —      |
| size       | 输入框大小                                         | string          | S / M / L | M      |
| input-nums | 输入框个数（自定义类型时需要定义输入框组个数）     | number          | —         | —      |
| splitter   | 输入框的分隔符                                     | string          | —         | —      |
| maxlength  | 每个输入框最大输入长度                             | number          | —         | —      |
| allow      | 输入框允许输入的字符的正则表达式                   | RegExp          | —         | —      |

## 事件 Events

| 事件名 | 说明               | 参数       |
| ------ | ------------------ | ---------- |
| change | 值改变时执行       | 改变后的值 |
| input  | 输入框值改变时触发 | 输入框的值 |
| focus  | 输入框聚焦时触发   | —          |
| blur   | 输入框失焦时触发   | —          |

# v-input-number

## 属性 Attributes

| 参数              | 说明                                               | 类型            | 可选值    | 默认值    |
| ----------------- | -------------------------------------------------- | --------------- | --------- | --------- |
| v-model           | 绑定值                                             | number          | —         | —         |
| name              | 原生属性                                           | string          | —         | —         |
| disabled          | 是否禁用                                           | boolean         | —         | false     |
| width             | 输入框长度，支持数字和字符串，如 70 或 70px 或 70% | string / number | —         | —         |
| min               | 输入框最小值                                       | number          | —         | -Infinity |
| max               | 输入框最大值                                       | number          | —         | Infinity  |
| is-controls       | 输入框右侧是否有控制器                             | boolean         | —         | true      |
| controls-position | 控制器按钮位置                                     | string          | right     | —         |
| size              | 输入框尺寸                                         | string          | S / M / L | M         |
| step              | 步长                                               | number          | —         | 1         |
| precision         | 数值精度，小于步长精度时计算会用步长的精度         | number          | —         | —         |

## 事件 Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |

# v-select 选择器

## 属性 Attributes

| 参数           | 说明                                         | 类型                          | 可选值              | 默认值 |
| -------------- | -------------------------------------------- | ----------------------------- | ------------------- | ------ |
| v-model        | 绑定值，多选时值为数组，单选时为字符串       | string / Array                | —                   | —      |
| name           | select input 的 name 属性                    | string                        | —                   | —      |
| disabled       | 是否禁用                                     | boolean                       | —                   | false  |
| width          | 选择器宽度                                   | string / Array                | —                   | —      |
| is-clear       | 是否可以清空选项                             | boolean                       | —                   | false  |
| is-multiple    | 是否可以多选，支持多选时不能配置自定义       | boolean                       | —                   | false  |
| multiple-limit | 多选时用户最多可以选择的个数，为 0 则不限制  | number                        | —                   | 0      |
| placeholder    | 占位符                                       | string                        | —                   | 请选择 |
| size           | 输入框尺寸                                   | string                        | S / M / L           | M      |
| options        | 下拉选项数组对象，支持数据选项为对象和字符串 | Array<Object> / Array<string> | —                   | []     |
| is-manual      | 是否支持手动输入                             | boolean                       | —                   | false  |
| manual-text    | 手动输入时选项的文字                         | string                        | —                   | 自定义 |
| position       | 选项框位置，对应上 、下、 自适应             | string                        | top / bottom / auto | auto   |

**当支持手动输入时，支持输入框组件的属性**

## options

选择器选项配置，支持`Object`，`Boolean`，`Number`，`String`

- 数组选项为非对象时，显示文本和值一致

| 参数     | 说明         | 类型                      | 可选值 | 默认值 |
| -------- | ------------ | ------------------------- | ------ | ------ |
| label    | 选项文字     | string                    | —      | —      |
| value    | 选项的值     | string / number / boolean | —      | —      |
| disabled | 是否禁用此项 | boolean                   | —      | false  |

## 事件 Events

| 事件名         | 说明                                     | 参数                          |
| -------------- | ---------------------------------------- | ----------------------------- |
| change         | 值改变时执行（失焦或者选择选项后）       | 改变后的值                    |
| input          | 输入框值改变时触发                       | 输入框的值                    |
| blur           | 输入框失焦时触发，不支持手动输入时不执行 | event                         |
| focus          | 输入框聚焦时触发，不支持手动输入时不执行 | event                         |
| clear          | 点击清空时触发                           | —                             |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |

# v-timepicker 时间选择器

## 属性 Attributes

| 参数            | 说明                                                         | 类型           | 可选值   | 默认值 |
| --------------- | ------------------------------------------------------------ | -------------- | -------- | ------ |
| value / v-model | 绑定值                                                       | string         | —        | —      |
| name            | 时间框名称                                                   | string         | —        | —      |
| disabled        | 是否禁用                                                     | boolean        | —        | false  |
| width           | 时间选择器宽度                                               | string / Array | —        | —      |
| is-clear        | 是否支持清除                                                 | boolean        | —        | true   |
| is-range        | 是否支持范围选择                                             | boolean        | —        | false  |
| placeholder     | 占位内容，支持范围选择时为开始时间的占位符<br />不支持范围时为时间选择框的占位符 | string         | —        | —      |
| end-placeholder | 支持范围选择时结束时间的占位符                               | string         |          |        |
| format          | 时间格式，支持hh、mm、ss与任意字符组合，小时hh为必填项       | string         | —        | hh:mm  |
| min             | 最小时间                                                     | string         | —        | —      |
| max             | 最大时间                                                     | string         | —        | —      |
| minute-interval | 分钟间隔                                                     | number         | —        | 1      |
| second-interval | 秒间隔                                                       | number         | —        | 1      |
| size            | 输入框尺寸                                                   | string         | S/ M / L | M      |

## 事件 Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |

# v-datepicker 日期选择器

## 属性 Attributes

| 参数            | 说明                                                         | 类型           | 可选值          | 默认值     |
| --------------- | ------------------------------------------------------------ | -------------- | --------------- | ---------- |
| value / v-model | 绑定值                                                       | string         | —               | —          |
| type            | 日期时间类型，date日期  <br />datetime时间日期               | string         | date / datetime | date       |
| name            | 时间框名称                                                   | string         | —               | —          |
| disabled        | 是否禁用                                                     | boolean        | —               | false      |
| width           | 日期选择器宽度                                               | string / Array | —               | —          |
| is-clear        | 是否支持清除                                                 | boolean        | —               | true       |
| is-range        | 是否支持范围选择                                             | boolean        | —               | false      |
| placeholder     | 占位内容，支持范围选择时为开始日期的占位符<br />不支持范围时为日期选择框的占位符 | string         | —               | —          |
| end-placeholder | 支持范围选择时结束时间的占位符                               | string         |                 |            |
| format          | 日期格式，YYYY-MM-DD hh:mm:ss<br />日期格式YYYY-MM-DD可任意调整年月日的位置 <br />YYYY表示年  MM表示月 DD表示天 分隔符可自定义<br /><br />时分秒格式见`v-timepicker` | string         | —               | YYYY-MM-DD |
| min             | 最小日期，必须与日期格式对应                                 | string         | —               | 2000-01-01 |
| max             | 最大日期，必须与日期格式对应                                 | string         | —               | 2037-12-31 |
| minute-interval | 分钟间隔                                                     | number         | —               | 1          |
| second-interval | 秒间隔                                                       | number         | —               | 1          |
| size            | 输入框尺寸                                                   | string         | S / M / L       | M          |

## 事件 Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时执行 | 改变后的值 |

# v-radio 单选框

## 属性 Attributes

| 参数            | 说明                                          | 类型               | 可选值 | 默认值                   |
| --------------- | --------------------------------------------- | ------------------ | ------ | ------------------------ |
| value / v-model | 绑定值                                        | string             | —      | —                        |
| name            | radio的名称                                   | string             | —      | —                        |
| options         | 下拉选项数组对象                              | Array<Object>      | —      | []                       |
| disabled        | 是否禁用                                      | boolean            |        | false                    |
| before-change   | 切换选中前的钩子，返回false时，不会修改选中项 | function(value) {} | —      | function() {return true} |

### options属性

| 参数     | 说明         | 类型                      | 可选值 | 默认值 |
| -------- | ------------ | ------------------------- | ------ | ------ |
| label    | 选项文字     | string                    |        |        |
| value    | 选项值       | string / boolean / number |        |        |
| disabled | 选项是否禁用 | boolean                   |        | false  |

## 事件 Events

| 事件名 | 说明           | 参数       |
| ------ | -------------- | ---------- |
| change | 值改变时触发   | 改变后的值 |
| click  | 点击选项时触发 | 选项value  |

# v-checkbox 复选框

## 属性 Attributes

| 参数            | 说明           | 类型                      | 可选值 | 默认值 |
| --------------- | -------------- | ------------------------- | ------ | ------ |
| value / v-model | 绑定值         | string / number / boolean | —      | —      |
| name            | checkbox的名称 | string                    | —      | —      |
| disabled        | 是否禁用       | boolean                   | —      | false  |
| on-value        | 选中时的值     | string / number / boolean | —      | true   |
| off-value       | 未选中时的值   | string / number / boolean | —      | false  |

## 事件 Events

| 事件名 | 说明           | 参数       |
| ------ | -------------- | ---------- |
| change | 值改变时触发   | 改变后的值 |
| click  | 点击选项时触发 | 当前值     |

# v-checkbox-group 多选框组

## 属性 Attributes

| 参数            | 说明                                                         | 类型          | 可选值 | 默认值 |
| --------------- | ------------------------------------------------------------ | ------------- | ------ | ------ |
| value / v-model | 绑定值                                                       | Arrray        | —      | []     |
| name            | checkbox的名称                                               | string        | —      |        |
| disabled        | 是否禁用                                                     | boolean       | —      | false  |
| options         | 选项数组对象[{label: 显示文字，<br /> value：值，disabled: 是否禁用此项}] | Array<Object> | —      | []     |
| is-select-all   | 是否支持全选                                                 | boolean       | —      | false  |
| select-text     | 全部选中的文字描述                                           | string        | —      | 全选   |
| min             | 最小支持选项                                                 | number        | —      | 0      |
| max             | 最大支持选项，最大为选项的个数                               | number        | —      | —      |

### options

| 参数     | 说明                         | 类型                      | 可选值 | 默认值 |
| -------- | ---------------------------- | ------------------------- | ------ | ------ |
| label    | 选项框描述文字               | string                    |        |        |
| value    | 选项框值，各选项的值不能一样 | string / number / boolean |        |        |
| disabled | 该选项是否禁用               | boolean                   |        | false  |

## 事件 Events

| 事件名 | 说明           | 参数       |
| ------ | -------------- | ---------- |
| change | 值改变时触发   | 改变后的值 |
| click  | 点击选项时触发 | 选项value  |

# v-switch 开关

## 属性 Attributes

| 参数            | 说明                                              | 类型                      | 可选值    | 默认值                   |
| --------------- | ------------------------------------------------- | ------------------------- | --------- | ------------------------ |
| value / v-model | 绑定值                                            | string / number / boolean | —         | —                        |
| name            | 开关的名称                                        | string                    | —         | —                        |
| disabled        | 是否禁用                                          | boolean                   | —         | false                    |
| on-value        | 选中时的值                                        | string / number / boolean | —         | true                     |
| off-value       | 未选中时的值                                      | string / number / boolean | —         | false                    |
| on-text         | 选中时的文字                                      | string                    | —         | —                        |
| off-text        | 未选中时的文字                                    | string                    | —         | —                        |
| before-change   | 开关值切换前的钩子，返回false时，不会改变开关状态 | function(value) {}        | —         | function() {return true} |
| size            | 开关大小                                          | string                    | S / M / L | M                        |

## 事件 Events

| 事件名 | 说明         | 参数       |
| ------ | ------------ | ---------- |
| change | 值改变时触发 | 改变后的值 |

# v-upload 上传

## 属性 Attributes

| 参数           | 说明                                                         | 类型               | 可选值       | 默认值 |
| -------------- | ------------------------------------------------------------ | ------------------ | ------------ | ------ |
| name           | 上传的文件字段名                                             | string             | —            | file   |
| action         | 必选参数，上传的地址                                         | string             | —            | —      |
| accept         | 接受上传的文件类型，例如 .bin                                | string             |              |        |
| disabled       | 是否禁用                                                     | boolean            | —            | false  |
| data           | 上传时附带的额外参数                                         | object             | —            | —      |
| type           | 文件列表的类型，文本 图片                                    | string             | text/picture | text   |
| show-file-list | 是否显示已上传文件列表                                       | boolean            | —            | false  |
| on-success     | 文件上传成功时的钩子                                         | function(response) | —            | —      |
| on-change      | 文件改变时的钩子，添加文件或修改文件                         | function(file)     | —            | —      |
| before-upload  | 上传文件之前的钩子，参数为上传的文件，<br />若返回 false 则不上传 | function(file)     | —            | —      |

## 事件 Events

| 事件名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| submit | 手动上传文件列表 | —    |

# v-table 表格

## 属性 Attributes

| 参数              | 说明                                                  | 类型     | 可选值 | 默认值                    |
| ----------------- | ----------------------------------------------------- | -------- | ------ | ------------------------- |
| data              | 表格数据                                              | Array    | —      | []                        |
| show-header       | 是否显示表头                                          | boolean  | —      | true                      |
| row-key           | 表格行的key（选填项）                                 | string   | —      |                           |
| max-row           | 表格最多显示多少行，超过时右侧显示滚动条              | number   | —      | 10                        |
| stripe            | 是否显示斑马纹表格                                    | boolean  | —      | false                     |
| border            | 表格td是否有边框                                      | boolean  |        | false                     |
| placeholder       | 搜索框占位符，为空时会取支持搜索列的表头文字以 / 连接 | string   | —      |                           |
| is-loading        | 是否在加载中                                          | boolean  | —      | false                     |
| loading-text      | loading的文字                                         | string   | —      |                           |
| empty-text        | 表格为空时的文字                                      | string   | —      | 无数据                    |
| is-pagination     | 是否支持分页                                          | boolean  | —      | false                     |
| page-size         | 每页多少条                                            | number   | —      | 10                        |
| is-change-size    | 是否支持修改每页条数                                  | boolean  | —      | false                     |
| page-size-options | 每页显示个数选择器的选项设置                          | number[] | —      | [10, 20, 30, 40, 50, 100] |
| is-input-page     | 是否支持手动输入页面                                  | boolean  | —      | false                     |

## Slot

| name   | 说明                                         |
| ------ | -------------------------------------------- |
| header | 表格body第一行显示的内容，从tr开始自定义元素 |
|        |                                              |

## 方法 Methods

| 方法名             | 说明                           | 参数 |
| ------------------ | ------------------------------ | ---- |
| getSelected        | 获取选中的项，返回值为选中的项 | -    |
| getCurrentPageData | 获取表格当前页的数据           |      |

## 事件 Events

| 事件名       | 说明                         | 参数                     |
| ------------ | ---------------------------- | ------------------------ |
| after-update | 更新后的表格数据             | 表格数据（转化后的数据） |
| click-row    | 当某一行被点击时会触发该事件 | rowData, index           |

## v-table-col 属性 Attributes

| 参数            | 说明                                                         | 类型            | 可选值                     | 默认值 |
| --------------- | ------------------------------------------------------------ | --------------- | -------------------------- | ------ |
| type            | 对应列的类型，selection为支持多选择，index为显示行索引，expand为支持展开 | string          | selection / index / expand | —      |
| label           | 表头列文字                                                   | string          | —                          | —      |
| prop            | 表头列属性，定义type的三种类型时可不填，其他情况必填         | string          | —                          | —      |
| width           | 列宽度，百分比或者xxpx                                       | string / number | —                          | —      |
| is-tooltip      | 鼠标放上去是否显示tooltip                                    | boolean         | —                          | false  |
| is-search       | 是否支持搜索                                                 | boolean         | —                          | false  |
| is-sort         | 是否支持排序                                                 | boolean         | —                          | false  |
| align           | 对齐方式                                                     | string          | left /  center / right     | left   |
| format          | 对此列数据自定义格式化，返回值为该列显示的数据，<br />返回数据可用于搜索<br />function(prop, rowData, index) | Function        | —                          | —      |
| get-disabled    | 仅对**type=selection**有效，返回复选框是否禁用<br />function(rowData) | Function        |                            |        |
| before-selected | 仅对**type=selection**有效，点击checkbox时，返回false表示不会被选中，其他都会选中。 <br />function(rowData, index) | Function        |                            |        |

# v-table-col slot

| name    | 说明                                                     |
| ------- | -------------------------------------------------------- |
| default | 自定义列显示信息，内容必须用template标签包含，使用v-slot |
| expand  | 展开后的自定义内容，使用方法与default一致                |

示例

```vue
<v-table-col width="200" field="selected">
    <template v-slot="slotScope">
        <label class="pointer">
        	<span class="icon-vpn-online" :class="{'text-success': slotScope.status === '1'}"></span>
        </label>
    </template>
    
    //usage1
    <template #expand="slotScope">
        xxxx
    </template>
    
    //usage2
    <template v-slot:expand="slotScope">
        xxxx
    </template>
</v-table-col>
```



# v-pagination 分页

## 属性 Attributes

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

## 事件 Events

| 事件名      | 说明                               | 参数     |
| ----------- | ---------------------------------- | -------- |
| change-size | 每页条数改变后触发                 | 每页条数 |
| change-page | 当前页改变时会触发                 | 当前页   |
| click-prev  | 用户点击上一页按钮改变当前页后触发 | 当前页   |
| click-next  | 用户点击下一页按钮改变当前页后触发 | 当前页   |

# v-form 表单

## 属性 Attributes

| 参数           | 说明                                                         | 类型     | 可选值 | 默认值 |
| -------------- | ------------------------------------------------------------ | -------- | ------ | ------ |
| rules          | 数据验证规则                                                 | boolean  |        | {}     |
| model          | 表单数据对象                                                 | Object   | —      | {}     |
| is-label-right | 文字方向是否右对齐                                           | boolean  |        | false  |
| beforeSubmit   | 表单提交前数据验证，返回false时不会执行submit<br />function(data) {} | function |        |        |
|                |                                                              |          |        |        |

## rules 验证规则

key为 表单选项的prop，

值为验证规则，多条验证规则时，为数组

### 验证规则

| 参数 | 说明                                               | 类型             | 可选值 | 默认值 |
| ---- | -------------------------------------------------- | ---------------- | ------ | ------ |
| type | 数据验证类型                                       | string           |        |        |
| max  | 最大值或最大长度                                   | string \| number |        |        |
| min  | 最小值或最小长度                                   | string \| number |        |        |
| msg  | 错误提示信息，如果定义了，当验证错误时会提示此信息 | string           |        |        |

### 验证类型

vue 原型链绑定`$valid`支持函数和对象形式

示例

```
const valid = {
  num: function(str, min, max) {
    if (!/^([-0-9])?([0-9]+)$/.test(str)) {
      return "输入值必须为整数";
    }
    if (typeof min === "number" && typeof max === "number") {
      if (parseInt(str, 10) < min || parseInt(str, 10) > max) {
        return `有效输入范围：${min} - ${max}`;
      }
    }
  },
  ip: {
    all: function(str) {
      let ret = this.specific(str);

      if (ret) {
        return ret;
      }
    },

    specific: function(str) {
      let ipArr = str.split("."),
        ipHead = ipArr[0];
      if (Number(ipArr[0]) > 223) {
        return ipHead + " 为无效值，请输入一个1-223之间的值";
      }
    }
  }
};

vue.prototype.$valid = valid;
```



## 方法 Methods

| 方法名        | 说明             | 参数 |
| ------------- | ---------------- | ---- |
| submitForm    | 提交表单事件     |      |
| getSubmitData | 获取表单提交数据 |      |

## 事件 Events

| 事件名 | 说明                       | 参数           |
| ------ | -------------------------- | -------------- |
| submit | 表单验证完后的提交数据事件 | 提交的表单数据 |

# v-form-item 表单元素

## 属性 Attributes

| 参数        | 说明                                                         | 类型    | 可选值 | 默认值 |
| ----------- | ------------------------------------------------------------ | ------- | ------ | ------ |
| label       | 选项文字                                                     | string  |        |        |
| is-no-label | 不显示文字                                                   | boolean |        | false  |
| prop        | 选项属性，用于数据验证规则和提交数据，不填不会对数据进行验证和提交 | string  |        |        |
| required    | 是否必填                                                     | boolean |        | true   |

## 方法 Methods

| 方法名     | 说明                                           | 参数     |
| ---------- | ---------------------------------------------- | -------- |
| checkValid | 数据验证，返回是否验证成功<br />function(data) | 选项的值 |

# v-form-item slot

| name    | 说明                 |
| ------- | -------------------- |
| default | 表单元素右边显示内容 |
| label   | 表单元素左边文字内容 |

﻿# list

## List Attributes - 列表属性

| 参数       | 说明                                                | 类型           | 可选值 | 默认值   |
| ---------- | --------------------------------------------------- | -------------- | ------ | -------- |
| bordered   | 是否展示外边框                                      | boolean        | -      | false    |
| options    | 配置项，详情见下表                                  | Array\<object> | -      | []       |
| empty-text | 空数据时显示的文本内容，可使用slot="empty-text"设置 | string/slot    | -      | 暂无数据 |
| devided    | 是否展示分割线                                      | Boolean        | -      | true     |
| row-key    | v-for中key字段名称                                  | string         | -      | index    |


### options - options配置

| 参数        | 说明                                         | 类型               | 可选值 | 默认值 |
| ----------- | -------------------------------------------- | ------------------ | ------ | ------ |
| avatar      | 图标资源路径配置，不配置则不显示，详情见下表 | string/object/slot | -      | -      |
| title       | 列表子项的标题配置，不配置则不显示           | string/slot        | -      | -      |
| description | 列表子项的描述文字配置，不配置则不显示       | string/slot        | -      | -      |


avatar类型为`String`，表示avatar的资源路径，类型为`Object`，可配置头像的形状及资源路径，也可通过插槽自定义头像内容

#### Avatar Props - 头像配置

| 参数 | 说明             | 类型   | 可选值        | 默认值 |
| ---- | ---------------- | ------ | ------------- | ------ |
| type | 头像类型，即形状 | string | circle/square | circle |
| src  | 头像资源路径     | string | -             | -      |


## Events

| 事件名称 | 说明               | 参数         |
| -------- | ------------------ | ------------ |
| click    | 点击列表子项时触发 | 子项的option |


## Slot

| name        | 说明              |
| ----------- | ----------------- |
| avatar      | 头像              |
| title       | 标题              |
| description | 描述信息/详细内容 |
| empty-text  | 空数据内容        |



# tooltip

## Usage

支持组件及指令形式使用

```html
<!-- usage 1: component -->
<v-tooltip
    content="this is a tooltip"
>
    <v-button>Hover me</v-button>
</v-tooltip>

<!-- usage 2: directive -->
<div v-tooltip="this is a div">  // 不写默认值为innerText
    this is a div
</div>
```

## 属性 Attributes

| 参数        | 说明                                      | 类型    | 可选值                                                                                                                                                                                  | 默认值     |
| ----------- | ----------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| effect      | 提供的主题                                | string  | dark/light                                                                                                                                                                              | dark       |
| max-width   | 最大宽度，单位px，超出换行                | number  | -                                                                                                                                                                                       | -          |
| content     | 显示的内容                                | string  | -                                                                                                                                                                                       | -          |
| position    | tooltip出现的位置，如果不配置，位置自适应 | string  | top-left<br/>top-center<br/> top-right<br/>right-top<br/>right-center<br/>right-bottom<br/>bottom-right<br/> bottom-center<br/>bottom-left<br/>left-bottom<br/>left-center<br/>left-top | top-center |
| transition  | 定义过渡动画名，与vue过渡动画组件使用一致 | string  | -                                                                                                                                                                                       | -          |
| enterable   | 鼠标是否可以进入tooltip中                 | boolean | -                                                                                                                                                                                       | true       |
| open-delay  | 延迟出现，单位：毫秒                      | number  | -                                                                                                                                                                                       | 0          |
| close-delay | 延迟出现，单位：毫秒                      | number  | -                                                                                                                                                                                       | 0          |

> 1. maxWidth -> max-width 

## Slot

| name    | 说明                      |
| ------- | ------------------------- |
| default | 触发tooltip显示的HTML元素 |
| content | 自定义内容                |





# popover

## Usage

```html
<v-popover
    title="popover title"
>
  	this is a popver box
    <template #reference>Click me</template>
</v-popover>
```

## 属性 Attributes

| 参数        | 说明                                                     | 类型          | 可选值                                                                                                                                                                                  | 默认值     |
| ----------- | -------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| v-model     | 触发方式为手动（manual）生效                             | boolean       | -                                                                                                                                                                                       | -          |
| trigger     | 触发方式                                                 | string        | click<br/>hover<br/>  manual                                                                                                                                                            | click      |
| width       | 宽度                                                     | number/string | -                                                                                                                                                                                       | 150        |
| title       | 标题                                                     | string        | -                                                                                                                                                                                       | -          |
| position    | popover出现的位置                                        | string        | top-left<br/>top-center<br/> top-right<br/>right-top<br/>right-center<br/>right-bottom<br/>bottom-right<br/> bottom-center<br/>bottom-left<br/>left-bottom<br/>left-center<br/>left-top | top-center |
| transition  | 定义渐变动画                                             | string        | -                                                                                                                                                                                       |            |
| show-arrow  | 是否显示箭头                                             | boolean       | -                                                                                                                                                                                       | true       |
| enterable   | 鼠标是否可以进入弹出框中，仅在`trigger`等于`hover`时生效 | boolean       | -                                                                                                                                                                                       | true       |
| open-delay  | 延迟出现，单位：毫秒                                     | number        | -                                                                                                                                                                                       | 0          |
| close-delay | 延迟出现，单位：毫秒                                     | number        | -                                                                                                                                                                                       | 0          |

## Events

| 事件名称       | 说明                   | 参数                    |
| -------------- | ---------------------- | ----------------------- |
| visible-change | 菜单显示状态改变时触发 | 显示为true，隐藏为false |

## Slot

| name      | 说明                      |
| --------- | ------------------------- |
| default   | popover内嵌HTML文本       |
| reference | 触发popover显示的HTML元素 |

# dropdown

## 属性 Attributes

| 参数                   | 说明                                                         | 类型           | 可选值      | 默认值   |
| ---------------------- | ------------------------------------------------------------ | -------------- | ----------- | -------- |
| type                   | 下拉菜单类型                                                 | string         | link/button | link     |
| label                  | 下拉菜单标签名称                                             | string         | -           | 下拉菜单 |
| disabled               | 菜单是否禁用                                                 | boolean        | -           | false    |
| trigger                | 触发下拉的行为                                               | string         | hover/click | click    |
| hide-after-selected    | 选择完成后隐藏下拉选项                                       | boolean        | -           | true     |
| display-options-number | 设置可显示选项的数量，如options.length大于该值，则显示滚动条 | number         | -           | 4        |
| options                | 菜单项配置<br />                                             | Array\<object> | -           | -        |-        |


### Options Attributes

| 参数     | 说明                     | 类型                 | 可选值 | 默认值 |
| -------- | ------------------------ | -------------------- | ------ | ------ |
| text     | 显示文本                 | string/number/object | -      | -      |
| value    | 值                       | string/number/object | -      | -      |
| disabled | 禁用                     | boolean              | -      | false  |
| divided  | 显示分割线               | boolean              | -      | false  |
| icon     | 图标类名，不配置则不显示 | string               | -      | -      |


## Events

| 事件名称       | 说明                   | 参数                               |
| -------------- | ---------------------- | ---------------------------------- |
| visible-change | 菜单显示状态改变时触发 | 显示为true，隐藏为false            |
| click-item     | 点击子菜单时触发       | 当前子菜单的值string/number/object |




# tabs

## tabs Attributes

| 参数         | 说明                                                                 | 类型                                  | 可选值           | 默认值              |
| ------------ | -------------------------------------------------------------------- | ------------------------------------- | ---------------- | ------------------- |
| v-model      | 当前激活tab的key                                                     | string                                | -                | 第一个选项卡的value |
| type         | 风格类型                                                             | string                                | link/card/button | link                |
| size         | 大小                                                                 | string                                | S/M/L            | M                   |
| lazy         | tab内容加载方式。true使用v-if加载，false使用v-show              | string                                | -                | true                |
| disabled     | 是否全部禁用                                                         | boolean                               | -                | false               |
| before-leave | 切换标签之前的钩子，若返回false或者返回Promise且被reject，则阻止切换 | Function(activeValue, oldActiveValue) | -                | -                   |

## Events

| 事件名称  | 说明            | 参数                            |
| --------- | --------------- | ------------------------------- |
| tab-click | tab被选中时触发 | (被选中的标签tab实例, 事件对象) |

## tab-pane Attributes

| 参数     | 说明                                            | 类型        | 可选值 | 默认值                                                |
| -------- | ----------------------------------------------- | ----------- | ------ | ----------------------------------------------------- |
| label    | 选项卡标题                                      | string/slot | -      | -                                                     |
| disabled | 是否禁用                                        | boolean     | -      | false                                                 |
| value    | 与选项卡绑定值value对应的标识符，标识选项卡别名 | string      | -      | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为“1” |

## tabs Slot

| name    | 说明               |
| ------- | ------------------ |
| default | 一般为tab-pane组件 |

## tab-pane Slot

| name    | 说明      |
| ------- | --------- |
| default | tab内容区 |

> 建议name -> value 与其他地方保持同名
>
> 默认的slot是否需要写出来？要
>
> 考虑中间tab隐藏的场景

# steps

## steps Attributes

| 参数           | 说明                                         | 类型    | 可选值                             | 默认值  |
| -------------- | -------------------------------------------- | ------- | ---------------------------------- | ------- |
| active         | 设置当前激活步骤                             | number  | -                                  | 0       |
| space          | 每个step的间距，单位：px。不填写则自适应间距 | number  | -                                  | -       |
| process-status | 设置当前步骤的状态                           | string  | wait/process/finish/error/disabled | process |
| finish-status  | 设置结束步骤的状态                           | string  | wait/process/finish/error/disabled | finish  |
| align-center   | 文字进行居中对齐                             | boolean | -                                  | true    |

## step Attributes

| 参数        | 说明                                          | 类型        | 可选值                             | 默认值 |
| ----------- | --------------------------------------------- | ----------- | ---------------------------------- | ------ |
| title       | 标题                                          | string/slot | -                                  | -      |
| description | 描述性文字                                    | string/slot | -                                  | -      |
| icon        | icon的class类名                               | string/slot | -                                  | -      |
| status      | 设置当前步骤的状态，不设置则根据steps确定状态 | string      | wait/process/finish/error/disabled | -      |

## step Slot

| name        | 说明           |
| ----------- | -------------- |
| icon        | 自定义图标     |
| title       | 自定义标题     |
| description | 自定义描述文字 |



# dialog

## 属性 Attributes

| 参数                 | 说明                                           | 类型    | 可选值             | 默认值  |
| -------------------- | ---------------------------------------------- | ------- | ------------------ | ------- |
| v-model              | 是否显示dialog                                 | boolean | -                  | false   |
| title                | dialog的标题，也可通过具名slot传入             | -       | -                  | -       |
| width                | dialog的宽度，最小宽度为400px，最大宽度为720px | string  | -                  | -       |
| modal                | 是否需要遮罩层                                 | boolean | -                  | true    |
| close-on-click-modal | 是否可以通过点击modal关闭dialog                | boolean | -                  | true    |
| show-close           | 是否显示关闭按钮                               | boolean | -                  | true    |
| show-confirm         | 是否显示确定按钮                               | boolean | -                  | true    |
| show-cancel          | 是否显示取消按钮                               | boolean | -                  | true    |
| confirm-button-text  | 确认按钮文字                                   | string  | -                  | 确定    |
| cancel-button-text   | 取消按钮文字                                   | string  | -                  | 取消    |
| confirm-button-type  | 确认按钮类型                                   | string  | 参考button组件类型 | primary |
| cancel-button-type   | 取消按钮类型                                   | string  | 参考button组件类型 | info    |
| align-center         | 是否对头部和底部采用居中布局                   | boolean | -                  | false   |


## Events

| 事件名称    | 说明             | 参数 |
| ----------- | ---------------- | ---- |
| open        | 打开dialog触发   | -    |
| after-close | 关闭后回调       | -    |
| confirm     | 点击确定按钮触发 | -    |
| cancel      | 点击取消按钮触发 | -    |


## Slot

| name    | 说明                   |
| ------- | ---------------------- |
| default | dialog的内容           |
| title   | dialog标题区的内容     |
| footer  | dialog按钮操作区的内容 |

> 确定取消按钮的文本修改是否是通过footer去实现？加上文本修改
>
> width不设置会自适应去调整大小嘛？自适应

# notice

## Usage

```js
this.$notify({
    title: "notice title",
    content: "this is notice content",
    showConfirm: true
}).then(() => {
    // 关闭回调
});
```

## 属性 Attributes

| 参数                     | 说明                                    | 类型         | 可选值                                                  | 默认值    |
| ------------------------ | --------------------------------------- | ------------ | ------------------------------------------------------- | --------- |
| title                    | 标题                                    | string       | -                                                       | -         |
| content                  | 说明文字                                | string | -                                                       | -         |
| duration                 | 显示时间，单位：毫秒。设置为0则不会关闭 | number       | -                                                       | 4500      |
| position                 | 自定义弹出位置                          | string       | top-right<br/>top-left<br/>bottom-right<br/>bottom-left | top-right |
| show-close               | 是否显示关闭按钮                        | boolean      | -                                                       | true      |
| show-confirm             | 是否显示确定按钮                        | boolean      | -                                                       | false     |
| confirm-text             | 确定按钮文本                            | string       | -                                                       | 确定      |
| dangerouslyUseHTMLString | 把content当做html解析                   | Boolean      | -                                                       | false     |


> 事件删除
>
> 返回promise，只有成功没有失败



# popconfirm

## Usage

```js
const configs = {
    title: "",
    // ...
};

this.$popconfirm(configs)
    .then(() => {
        // 点击“确定”后的回调
    })
    .catch(() => {
        // 点击“取消”后的回调
    })
```

## Popconfirm Attributes

| 参数                | 说明                                  | 类型    | 可选值                                                                                                                                                                                  | 默认值     |
| ------------------- | ------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| title               | 标题                                  | string  | -                                                                                                                                                                                       | -          |
| icon                | Icon图标类名；<br /> 如不配置，则隐藏 | string  | -                                                                                                                                                                                       | -          |
| position            | popconfirm出现的位置                  | string  | top-left<br/>top-center<br/> top-right<br/>right-top<br/>right-center<br/>right-bottom<br/>bottom-right<br/> bottom-center<br/>bottom-left<br/>left-bottom<br/>left-center<br/>left-top | top-center |
| transition          | 定义渐变动画                          | string  | -                                                                                                                                                                                       |            |
| show-arrow          | 是否显示箭头                          | boolean | -                                                                                                                                                                                       | true       |
| open-delay          | 延迟出现，单位：毫秒                  | number  | -                                                                                                                                                                                       | 0          |
| close-delay         | 延迟出现，单位：毫秒                  | number  | -                                                                                                                                                                                       | 0          |
| clickOutsideToHide  | 点击外部隐藏弹窗                      | boolean | -                                                                                                                                                                                       | false      |
| show-confirm        | 是否显示确认按钮                      | boolean | -                                                                                                                                                                                       | true       |
| show-cancel         | 是否显示取消按钮                      | boolean | -                                                                                                                                                                                       | true       |
| confirm-button-text | 确认按钮文字                          | string  | -                                                                                                                                                                                       | 确定       |
| cancel-button-text  | 取消按钮文字                          | string  | -                                                                                                                                                                                       | 取消       |
| confirm-button-type | 确认按钮类型                          | string  | 参考button组件类型                                                                                                                                                                      | primary    |
| cancel-button-type  | 取消按钮类型                          | string  | 参考button组件类型                                                                                                                                                                      | info       |

## Events

| 事件名称 | 说明             | 参数 |
| -------- | ---------------- | ---- |
| confirm  | 点击确认按钮触发 | -    |
| cancel   | 点击确认按钮触发 | -    |


## Slot

| name      | 说明                      |
| --------- | ------------------------- |
| default   | 自定义内容                |
| reference | 触发popover显示的HTML元素 |




# alert

## 属性 Attributes

| 参数                | 说明                               | 类型    | 可选值                  | 默认值 |
| ------------------- | ---------------------------------- | ------- | ----------------------- | ------ |
| title               | 标题                               | string  | -                       | -      |
| type                | 消息类型                           | string  | success/warn/info/error | info   |
| description         | 消息详细描述，也可通过默认slot传入 | string  | -                       | -      |
| icon                | 图标类名，不传默认取响应状态的值   | String  | -                       | -      |
| show-icon           | 是否显示icon                       | Boolean | -                       | true   |
| show-close          | 是否显示关闭按钮                   | boolean | -                       | true   |
| show-details-button | 是否显示查看详情按钮               | boolean | -                       | false  |


## Events

| 事件名称             | 说明               | 参数 |
| -------------------- | ------------------ | ---- |
| close                | 关闭时触发         | -    |
| handle-details-click | 点击查看详情时触发 | -    |


## Slot

| name    | 说明                    |
| ------- | ----------------------- |
| default | description消息详细描述 |




# message

## Usage

```js
// usage1
const msg = this.$message({
    content: "this is a success message",
    type: "success"
});

// usage2
const msg = this.$message.success("this is a success message", 3000);

// usage3，type="info"
this.$message("this is a info message", 3000);
```

## Options

| 参数                     | 说明                                | 类型    | 可选值                  | 默认值 |
| ------------------------ | ----------------------------------- | ------- | ----------------------- | ------ |
| content                  | 消息内容                            | string  | -                       | -      |
| type                     | 主题                                | string  | success/warn/info/error | info   |
| showIcon                 | 是否显示icon                        | boolean | -                       | true   |
| icon                     | Icon图标类名，会覆盖type配置        | string  | -                       | -      |
| duration                 | 显示时间，单位：毫秒。设为0则不关闭 | number  | -                       | 2500   |
| dangerouslyUseHTMLString | 把content当做html解析，谨慎使用     | boolean | -                       | false  |


## 方法 Methods

| 方法名  | 说明                | 参数 |
| ------- | ------------------- | ---- |
| success | 弹出成功message框   | -    |
| error   | 弹出失败的message框 | -    |
| warn    | 弹出警告的message框 | -    |


## 执行后返回的实例方法 Methods

| 方法名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| close  | 关闭当前的message | -    |

> Close分开写


# skeleton

## Attributes

| 属性      | 说明                                | 类型           | 可选值 | 默认值 |
| --------- | ----------------------------------- | -------------- | ------ | ------ |
| active    | 是否展示动画效果                    | boolean        | -      | false  |
| avatar    | 是否显示头像占位图                  | boolean/object | -      | false  |
| css       | 自定义类名                          | string         | -      | -      |
| duration  | 显示时间，单位：毫秒。设为0则不关闭 | number         | -      | 3000   |
| loading   | 为true，显示占位图。反之显示子组件  | boolean        | -      | -      |
| paragraph | 是否显示段落占位图                  | boolean/object | -      | true   |
| title     | 是否显示段落占位图                  | boolean/object | -      | false  |


### Avatar props

| 属性 | 说明                 | 类型          | 可选值                        | 默认值 |
| ---- | -------------------- | ------------- | ----------------------------- | ------ |
| size | 设置头像占位图的大小 | number/string | 类型为string时，可选值为S/M/L | M      |
| type | 头像的形状           | string        | circle/square                 | [todo] |

### Title props

| 属性  | 说明                 | 类型          | 可选值 | 默认值 |
| ----- | -------------------- | ------------- | ------ | ------ |
| width | 设置标题占位图的宽度 | number/string | -      | -      |

### Paragraph props

| 属性       | 说明                                                         | 类型                                  | 可选值 | 默认值 |
| ---------- | ------------------------------------------------------------ | ------------------------------------- | ------ | ------ |
| rows       | 设置段落占位图的行数                                         | number/string                         | -      | -      |
| rows-space | 设置段落之间的间距，单位px                                   | number                                | -      | -      |
| width      | 设置段落占位图的宽度。若为数组，则为对应的每行宽度；反之则是最后一行的宽度 | number/string/Array<number \| string> | -      | -      |



# 栅格布局

## v-row Attributes

| 参数   | 说明              | 类型   | 可选值 | 默认值 |
| ------ | ----------------- | ------ | ------ | ------ |
| gutter | 列间隔，单位px    | number | -      | 0      |
| tag    | 自定义row元素标签 | string |        | div    |

## v-col Attribute

| 参数    | 说明                             | 类型   | 可选值 | 默认值 |
| ------- | -------------------------------- | ------ | ------ | ------ |
| span    | 栅格占据的列数(一行总共分为24列) | number | -      | 24     |
| tag     | 自定义col元素标签                | string | -      | div    |
| offset  | 栅格左侧的间隔格数               | number | -      | 0      |
| padding | 栅格内垂直方向上padding，单位px  | number | -      | 0      |

## slot

| name    | 说明     |
| ------- | -------- |
| default | 内容区域 |

> v-row和v-col内都有默认的slot承载内容



# v-container 布局容器

## 属性 Attributes

| 参数          | 说明                   | 类型          | 可选值 | 默认值 |
| ------------- | ---------------------- | ------------- | ------ | ------ |
| width         | 容器宽度               | string/number | -      | 100%   |
| aside-width   | 左侧导航宽度           | string/number | -      | 256    |
| header-height | 顶部导航栏高度，单位px | number        | -      | 64     |
| footer-height | 底部信息栏高度，单位px | number        | -      | 64     |

## Slot

| name    | 说明       |
| ------- | ---------- |
| header  | 顶部导航   |
| aside   | 左侧导航   |
| default | 内容区域   |
| footer  | 底部信息栏 |



# v-chart-line

## 属性 Attributes

| 参数       | 说明              | 类型    | 可选值          | 默认值 |
| ---------- | ----------------- | ------- | --------------- | ------ |
| colors     | 数据列颜色配置    | array   | -               | ['#FFCD58','#ACE06F',<br/>'#7EE6F2','#6EBBFF',<br/>'#FF7348','#B792F7'] |
| series     | 数据列            | array   |                 |        |
| categories | 类别，对应x轴描述 | array   | -               | -      |
| legend     | 图例              | string  | circle, square  | circle |
| animation  | 动画效果，空表示不需要动画 | string | -               | easeOutCubic |
| width      | 宽，单位px           | number  | -               | 外层容器的宽 |
| height     | 高，单位px           | number  | -               | 外层容器的高 |
| type       | 折线类型          | number  | 1: 直线 2: 曲线 | 2     |
| tip-text   | 鼠标悬浮预留提示信息，独行显示  | string | -   | -       |
| show-tip   | 鼠标悬浮显示数据  | boolean | -               | true   |
| title      | 图表标题          | string  | -               | -      |
| comment    | 图表注释          | string  | -               | -      |
| show-point | 是否显示曲线坐标点 | boolean | - | false |
| is-offset  | 是否从坐标原点后面开始绘制    | boolean  | -      | true   |

**series数据项属性**

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| name | 系列名称 | string | -      | -      |
| data | 系列数据 | array  | -      | -      |

## 事件Events

| 方法名      | 说明         | 参数             |
| ----------- | ------------ | ---------------- |
| legendClick | 图例点击事件 | 被点击的图例名称 |



# v-chart-bar

## 属性 Attributes

| 参数       | 说明              | 类型    | 可选值         | 默认值 |
| ---------- | ----------------- | ------- | -------------- | ------ |
| colors     | 数据列颜色配置    | array   | -              | ['#FFCD58','#ACE06F',<br/>'#7EE6F2','#6EBBFF',<br/>'#FF7348','#B792F7'] |
| series     | 数据列            | array   |                |        |
| categories | 类别，对应x轴描述 | array   | -              | -      |
| legend     | 图例              | string  | circle, square | circle |
| animation  | 动画效果，空表示不需要动画 | string | -              | easeOutCubic |
| width      | 宽，单位px           | number  | -              | 外层容器的宽 |
| height     | 高，单位px           | number  | -              | 外层容器的高 |
| tip-text   | 鼠标悬浮预留提示信息，独行显示  | string | -   | -       |
| show-tip   | 鼠标悬浮显示数据  | boolean | -               | true   |
| title      | 图表标题          | string  | -               | -      |
| comment    | 图表注释          | string  | -               | -      |
| show-value | 是否在柱条上显示数值 | boolean | - | false |

**series数据项属性**

| 参数 | 说明     | 类型   | 可选值 | 默认值 |
| ---- | -------- | ------ | ------ | ------ |
| name | 系列名称 | string | -      | -      |
| data | 系列数据 | array  | -      | -      |

## 事件Events

| 方法名      | 说明         | 参数                                                         |
| ----------- | ------------ | ------------------------------------------------------------ |
| click       | 柱子点击事件 | { <br />value: data.value, <br />legend: data.legend, <br />category: data.category<br />} |
| legendClick | 图例点击事件 | 被点击的图例名称                                             |



# v-chart-pie

## 属性 Attributes

| 参数       | 说明           | 类型    | 可选值          | 默认值 |
| ---------- | -------------- | ------- | --------------- | ------ |
| colors     | 数据列颜色配置 | array   | -               | ['#FFCD58','#ACE06F',<br/>'#7EE6F2','#6EBBFF',<br/>'#FF7348','#B792F7'] |
| series     | 数据列         | array   |                 |        |
| categories | 类别           | array   | -               | -      |
| legend     | 图例           | string  | circle, square  | circle |
| animation  | 动画效果，空表示不需要动画     | string | -               | easeOutCubic |
| width      | 宽，单位px        | number  | -               | 外层容器的宽 |
| height     | 高，单位px        | number  | -               | 外层容器的高 |
| tip-text   | 鼠标悬浮预留提示信息，独行显示  | string | -   | -       |
| show-tip   | 鼠标悬浮显示数据  | boolean | -               | true   |
| title      | 图表标题          | string  | -               | -      |
| comment    | 图表注释          | string  | -               | -      |



## 事件Events

| 方法名      | 说明         | 参数               |
| ----------- | ------------ | ------------------ |
| click       | 图形点击事件 | 被点击的数据和索引 |
| legendClick | 图例点击事件 | 被点击的图例       |



# v-chart-percent 

## 属性 Attributes

| 参数        | 说明             | 类型   | 可选值          | 默认值 |
| ----------- | ---------------- | ------ | --------------- | ------ |
| type        | 类型             | number | circle、line | circle      |
| title       | 标题             | string | -            | -      |
| value       | 值               | number | -               | -      |
| colors      | 区间对应的颜色值 | array  | -               | ['#ACE06F'] |
| color-value | 颜色对应的值区间 | array  | -               | [1] |
| back-color | 与colors对应的底色值 | array  | -            | ['#F5F5F5'] |
| width      | 宽，单位px        | number  | -               | 外层容器的宽 |
| height     | 高，单位px        | number  | -               | 外层容器的高 |
| stroke-width | 线条的粗细，单位px | number  | -  | 10 |
| padding     | 图形容器的内边距，单位px   | number  | -               | 20 |

## Slot

| name    | 说明           |
| ------- | -------------- |
| default | 默认显示百分比，在圆环内或者在直线上 |



# v-collapse 	

## 属性 Attributes

| 参数            | 说明     | 类型    | 可选值 | 默认值 |
| --------------- | -------- | ------- | ------ | ------ |
| title           | 标题     | string  | -      | -      |
| text            | 内容     | string  | -      | -      |
| actived/v-model | 展开状态 | boolean | -      | false  |
| disabled        | 禁用     | boolean | -      | false  |

## Slot

| name    | 说明                   |
| ------- | ---------------------- |
| default | 内容区，优先级高于text |
| title   | 标题区                 |

# v-badge 徽标数

## 属性 Attributes

| 参数     | 说明             | 类型   | 可选值                        | 默认值  |
| -------- | ---------------- | ------ | ----------------------------- | ------- |
| text     | 内容             | string | -                             | -       |
| type     | 圆点或小圆       | string | dot(圆点),tip                 | tip     |
| status   | 不同状态不同颜色 | string | success, error, warn, default | default |
| position | 圆点位置         | string | rt                            | -       |

> position: 为空，在正常的文档流中，不添加任何定位效果。

## Slot

| name    | 说明   |
| ------- | ------ |
| default | 内容区 |



# v-loading 加载中

## 属性 Attributes

| 参数       | 说明         | 类型                | 可选值 | 默认值         |
| ---------- | ------------ | ------------------- | ------ | -------------- |
| visible    | 是否显示     | boolean             | -      | false          |
| size       | 尺寸         | string              | S/M/L  | M              |
| target     | 遮罩内容     | object(HTMLElement) | -      | 默认为外层容器 |
| has-mask   | 是否有遮罩   | boolean             | -      | true           |
| text       | 显示文本     | string              | -      | -              |
| background | 旋转点背景色 | string              | -      | #ff8f00        |

> target的position不能为static，否则遮罩不生效

## slot

| name    | 说明                     |
| ------- | ------------------------ |
| default | 内容区域，优先级高于text |

# v-scroll 滚动条

| 参数          | 说明                           | 类型   | 可选值 | 默认值 |
| ------------- | ------------------------------ | ------ | ------ | ------ |
| height   | 最大高度，超出出现滚动条，必填 | number，string | 数值，inherit，auto |inherit|
| width         | 最大宽度，超出出现滚动条，必填 | number | -      | 外层容器宽度 |
| overflow      | 设置哪个方向出现滚动条 | string | x，y, auto, hidden | auto |
| is-block      | 是否是块级元素，占满一行 | boolean | - | true |
| to-x   | 滚动到X轴的具体位置，单位px | number | - | 0 |
| to-y   | 滚动到Y轴的具体位置，单位px | number | - | 0 |
| to-index | 滚动到第几个元素               | number | - | - |

> `height`为`inherit`时继承父级容器的高度，要保证外层容器可以取得高。为`auto`时表示不会出现垂直滚动条。
> 不设置`height`和`width`时，要保证外层容器可以取得高或者宽
> `to-index `默认会选中当前slot的最外层元素的第`index`个子元素，优先级高于`scroll-to-y`

## method

| 方法                 | 说明                                               | 参数                                    |
| -------------------- | -------------------------------------------------- | --------------------------------------- |
| scrollTo(selector)   | 滚动到某个`dom`元素                                | `dom`的唯一选择器，可以精确定位当前元素 |
| update()             | 滚动条内部内容修改后，需要调用该方法手动更新滚动条 | -                                       |
| scrollToX(to)        | 水平滚动条滚动到to位置                             | 滚动到的位置，单位px                    |
| scrollToY(to)        | 垂直滚动条滚动到to位置                             | 滚动到的位置，单位px                    |
| scrollToIndex(index) | 滚动到第几个元素                                   | 元素索引，从1开始                       |

## slot

| name    | 说明                                   |
| ------- | -------------------------------------- |
| default | 内容区域，只能有一个最外层元素包裹内容 |



# v-x-scroll 滚动条

| 参数     | 说明                           | 类型   | 可选值 | 默认值       |
| -------- | ------------------------------ | ------ | ------ | ------------ |
| height   | 最大高度，超出出现滚动条，必填 | number，string | 数值，inherit，auto |inherit|
| width         | 最大宽度，超出出现滚动条，必填 | number | -      | 外层容器宽度 |
| overflow      | 设置哪个方向出现滚动条 | string | x，y, auto, hidden | auto |
| is-block      | 是否是块级元素，占满一行 | boolean | - | true |
| to-x     | 滚动到X轴的具体位置，单位px    | number | -      | 0            |
| to-y     | 滚动到Y轴的具体位置，单位px    | number | -      | 0            |
| to-index | 滚动到第几个元素               | number | -      | -            |
| count    | 最多显示行数                   | number | -      | 5            |

> `height`为`inherit`时继承父级容器的高度，要保证外层容器可以取得高。为`auto`时表示不会出现垂直滚动条。
> 不设置`height`和`width`时，要保证外层容器可以取得高或者宽
> `to-index `默认会选中当前slot的最外层元素的第`index`个子元素，优先级高于`scroll-to-y`

## slot

| name    | 说明                                   |
| ------- | -------------------------------------- |
| default | 内容区域，只能有一个最外层元素包裹内容 |




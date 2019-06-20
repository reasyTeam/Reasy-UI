<template>
    <v-column :data-key="dataKey"></v-column>
</template>
<script>
let defaults = {
    column: 4, //输入框个数
    maxlength: 3, //输入框最大输入长度
    splitter: ".", //分隔符
    allow: "0-9" //允许字符
};
export default {
    "name": "v-ip",
    props: ["data-key"],
    created() {
        this.dataKey = this.setOptions(this.dataKey, defaults, true);
    }
};
</script>
>
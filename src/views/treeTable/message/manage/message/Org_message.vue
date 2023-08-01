<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/message/Org_message.js此处编写
 -->
<template>
    <view-grid ref="grid"
               :columns="columns"
               :detail="detail"
               :editFormFields="editFormFields"
               :editFormOptions="editFormOptions"
               :searchFormFields="searchFormFields"
               :searchFormOptions="searchFormOptions"
               :table="table"
               :extend="extend">
    </view-grid>
</template>
<script>

    import extend from "@/views/treeTable/extension/manage/message/Org_message.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'Id',
                footer: "Foots",
                cnName: '系统通知表',
                name: 'message/Org_message',
                url: "/Org_message/",
                sortName: "Id"
            });
            const editFormFields = ref({"State":"","Time":""});
            const editFormOptions = ref([[{"dataKey":"log","data":[],"title":"消息状态","field":"State","type":"switch"},
                               {"title":"消息时间","field":"Time","type":"month"}]]);
            const searchFormFields = ref({"Time":""});
            const searchFormOptions = ref([[{"title":"消息时间","field":"Time","type":"time"}]]);
            const columns = ref([{field:'Id',title:'序列',type:'long',sort:true,width:50,readonly:true,require:true,align:'left',sort:true},
                       {field:'State',title:'消息状态',type:'int',bind:{ key:'log',data:[]},width:110,align:'left'},
                       {field:'Message',title:'消息内容',type:'string',width:110,align:'left'},
                       {field:'Time',title:'消息时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'Type',title:'消息类型',type:'string',width:110,align:'left'},
                       {field:'Operation',title:'操作',type:'string',width:110,align:'left'}]);
            const detail = ref({
                cnName: "#detailCnName",
                table: "#detailTable",
                columns: [],
                sortName: "",
                key: ""
            });
            return {
                table,
                extend,
                editFormFields,
                editFormOptions,
                searchFormFields,
                searchFormOptions,
                columns,
                detail,
            };
        },
    });
</script>

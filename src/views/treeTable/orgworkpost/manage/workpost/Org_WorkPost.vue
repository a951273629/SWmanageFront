<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/workpost/Org_WorkPost.js此处编写
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
    import extend from "@/views/treeTable/extension/manage/workpost/Org_WorkPost.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'Id',
                footer: "Foots",
                cnName: '工作岗位管理',
                name: 'workpost/Org_WorkPost',
                url: "/Org_WorkPost/",
                sortName: "Id"
            });
            const editFormFields = ref({"State":""});
            const editFormOptions = ref([[{"dataKey":"status","data":[],"title":"岗位状态","field":"State","type":"switch"}]]);
            const searchFormFields = ref({"State":""});
            const searchFormOptions = ref([[{"dataKey":"status","data":[],"title":"岗位状态","field":"State","type":"switch"}]]);
            const columns = ref([{field:'Id',title:'序号',type:'long',sort:true,width:50,readonly:true,require:true,align:'left',sort:true},
                       {field:'PostCode',title:'岗位编码',type:'string',width:110,align:'left'},
                       {field:'PostName',title:'岗位名称',type:'string',width:110,align:'left'},
                       {field:'PostType',title:'岗位类型',type:'string',width:110,align:'left'},
                       {field:'PostDuty',title:'岗位职责',type:'string',width:110,align:'left'},
                       {field:'State',title:'岗位状态',type:'int',bind:{ key:'status',data:[]},width:80,align:'left'}]);
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

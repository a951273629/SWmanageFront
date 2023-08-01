<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/system/Org_system.js此处编写
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

    import extend from "@/views/treeTable/extension/manage/system/Org_system.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'Id',
                footer: "Foots",
                cnName: '系统人员表',
                name: 'system/Org_system',
                url: "/Org_system/",
                sortName: "Id"
            });
            const editFormFields = ref({"state":""});
            const editFormOptions = ref([[{"dataKey":"status","data":[],"title":"状态","field":"state","type":"select"}]]);
            const searchFormFields = ref({"state":""});
            const searchFormOptions = ref([[{"dataKey":"status","data":[],"title":"状态","field":"state","type":"select"}]]);
            const columns = ref([{field:'Id',title:'序号',type:'long',width:50,readonly:true,require:true,align:'left',sort:true},
                       {field:'JobNumber',title:'工号',type:'string',width:110,align:'left'},
                       {field:'UserName',title:'用户名',type:'string',width:110,align:'left'},
                       {field:'Name',title:'姓名',type:'string',width:110,align:'left'},
                       {field:'Phone',title:'手机',type:'string',width:110,align:'left'},
                       {field:'Email',title:'邮箱',type:'string',width:110,align:'left'},
                       {field:'SystemAccount',title:'系统账户',type:'string',width:110,align:'left'},
                       {field:'Organization',title:'所属组织',type:'string',width:110,align:'left'},
                       {field:'Manager',title:'负责人',type:'string',width:110,align:'left'},
                       {field:'Post',title:'任职岗位',type:'string',width:110,align:'left'},
                       {field:'state',title:'状态',type:'int',bind:{ key:'status',data:[]},width:110,align:'left'}]);
            const detail = ref({
                cnName: "系统人员表",
                table: "Org_system",
                columns: [{field:'Id',title:'序号',type:'long',width:50,readonly:true,require:true,align:'left',sort:true},
                       {field:'JobNumber',title:'工号',type:'string',width:110,align:'left'},
                       {field:'UserName',title:'用户名',type:'string',width:110,align:'left'},
                       {field:'Name',title:'姓名',type:'string',width:110,align:'left'},
                       {field:'Phone',title:'手机',type:'string',width:110,align:'left'},
                       {field:'Email',title:'邮箱',type:'string',width:110,align:'left'},
                       {field:'SystemAccount',title:'系统账户',type:'string',width:110,align:'left'},
                       {field:'Organization',title:'所属组织',type:'string',width:110,align:'left'},
                       {field:'Manager',title:'负责人',type:'string',width:110,align:'left'},
                       {field:'Post',title:'任职岗位',type:'string',width:110,align:'left'},
                       {field:'state',title:'状态',type:'int',bind:{ key:'status',data:[]},width:110,edit:{type:'select'},align:'left'}],
                sortName: "Id",
                key: "Id"
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

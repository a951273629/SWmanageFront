<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/orgmange/Org_Manage.js此处编写
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
    import extend from "@/views/treeTable/extension/manage/orgmange/Org_Manage.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'Id',
                footer: "Foots",
                cnName: '企业权限管理',
                name: 'orgmange/Org_Manage',
                url: "/Org_Manage/",
                sortName: "Id"
            });
            const editFormFields = ref({"OrgOperate":""});
            const editFormOptions = ref([[{"dataKey":"roles","data":[],"title":"","field":"OrgOperate","type":"select"}]]);
            const searchFormFields = ref({"OrgOperate":""});
            const searchFormOptions = ref([[{"dataKey":"roles","data":[],"title":"","field":"OrgOperate","type":"select"}]]);
            const columns = ref([{field:'Id',title:'Id',type:'long',sort:true,width:80,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'OrgCode',title:'OrgCode',type:'string',width:110,align:'left',sort:true},
                       {field:'OrgName',title:'OrgName',type:'string',width:110,align:'left'},
                       {field:'OrgType',title:'OrgType',type:'string',width:110,align:'left'},
                       {field:'OrgFather',title:'OrgFather',type:'long',width:80,align:'left'},
                       {field:'OrgKind',title:'OrgKind',type:'string',width:110,align:'left'},
                       {field:'OrgAttribute',title:'OrgAttribute',type:'string',width:110,align:'left'},
                       {field:'OrgManger',title:'OrgManger',type:'string',width:110,align:'left'},
                       {field:'OrgComment',title:'OrgComment',type:'string',width:110,align:'left'},
                       {field:'OrgUse',title:'OrgUse',type:'int',bind:{ key:'log',data:[]},width:80,align:'left'},
                       {field:'OrgOperate',title:'OrgOperate',type:'int',bind:{ key:'roles',data:[]},width:80,align:'left'}]);
            const detail = ref({
                cnName: "企业权限管理",
                table: "Org_Manage",
                columns: [{field:'Id',title:'Id',type:'long',sort:true,width:80,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'OrgCode',title:'OrgCode',type:'string',width:110,align:'left',sort:true},
                       {field:'OrgName',title:'OrgName',type:'string',width:110,align:'left'},
                       {field:'OrgType',title:'OrgType',type:'string',width:110,align:'left'},
                       {field:'OrgFather',title:'OrgFather',type:'long',width:80,align:'left'},
                       {field:'OrgKind',title:'OrgKind',type:'string',width:110,align:'left'},
                       {field:'OrgAttribute',title:'OrgAttribute',type:'string',width:110,align:'left'},
                       {field:'OrgManger',title:'OrgManger',type:'string',width:110,align:'left'},
                       {field:'OrgComment',title:'OrgComment',type:'string',width:110,align:'left'},
                       {field:'OrgUse',title:'OrgUse',type:'int',bind:{ key:'log',data:[]},width:80,align:'left'},
                       {field:'OrgOperate',title:'OrgOperate',type:'int',bind:{ key:'roles',data:[]},width:80,edit:{type:'select'},align:'left'}],
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

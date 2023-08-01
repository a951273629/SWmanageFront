<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/people/Org_people.js此处编写
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
    import extend from "@/views/treeTable/extension/manage/people/Org_people.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'Id',
                footer: "Foots",
                cnName: '人员权限配置',
                name: 'people/Org_people',
                url: "/Org_people/",
                sortName: "Id"
            });
            const editFormFields = ref({"Id":""});
            const editFormOptions = ref([[{"title":"序号","required":true,"field":"Id","disabled":true}]]);
            const searchFormFields = ref({"Id":""});
            const searchFormOptions = ref([[{"title":"序号","field":"Id"}]]);
            const columns = ref([{field:'Id',title:'序号',type:'long',sort:true,width:110,readonly:true,require:true,align:'left',sort:true},
                       {field:'JobNumber',title:'工号',type:'string',width:110,align:'left'},
                       {field:'Username',title:'用户名',type:'string',width:110,align:'left'},
                       {field:'Name',title:'姓名',type:'string',width:110,align:'left'},
                       {field:'Phone',title:'电话',type:'string',width:110,align:'left'},
                       {field:'Email',title:'邮件',type:'string',width:110,align:'left'},
                       {field:'SystemAccount',title:'系统账户',type:'string',width:110,align:'left'},
                       {field:'DepartMent',title:'部门',type:'string',width:110,align:'left'},
                       {field:'Manager',title:'管理人员',type:'string',width:110,align:'left'},
                       {field:'Position',title:'职位',type:'string',width:110,align:'left'},
                       {field:'Salary',title:'薪水',type:'string',width:110,align:'left'},
                       {field:'State',title:'状态',type:'int',bind:{ key:'enable',data:[]},width:110,align:'left'}]);
            const detail = ref({
                cnName: "人员权限配置",
                table: "Org_people",
                columns: [{field:'Id',title:'Id',type:'long',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'JobNumber',title:'JobNumber',type:'string',width:110,align:'left',sort:true},
                       {field:'Username',title:'Username',type:'string',width:110,align:'left'},
                       {field:'Name',title:'Name',type:'string',width:110,align:'left'},
                       {field:'Phone',title:'Phone',type:'string',width:110,align:'left'},
                       {field:'Email',title:'Email',type:'string',width:110,align:'left'},
                       {field:'SystemAccount',title:'SystemAccount',type:'string',width:110,align:'left'},
                       {field:'DepartMent',title:'DepartMent',type:'string',width:110,align:'left'},
                       {field:'Manager',title:'Manager',type:'string',width:110,align:'left'},
                       {field:'Position',title:'Position',type:'string',width:110,align:'left'},
                       {field:'Salary',title:'Salary',type:'string',width:110,align:'left'},
                       {field:'State',title:'State',type:'int',width:110,align:'left'}],
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

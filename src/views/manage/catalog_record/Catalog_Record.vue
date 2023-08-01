<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/catalog_record/Catalog_Record.js此处编写
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
    import extend from "@/extension/manage/catalog_record/Catalog_Record.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'ID',
                footer: "Foots",
                cnName: '编码日志记录',
                name: 'catalog_record/Catalog_Record',
                url: "/Catalog_Record/",
                sortName: "ID"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({"ItemId":"","ItemName":"","ItemVersion":"","SerialNumber":[null,null],"CreatedTime":"","CreatedBy":"","ModifiedDate":""});
            const searchFormOptions = ref([[{"title":"当前物料名称","field":"ItemName","type":"text"}],[{"title":"物料ID","field":"ItemId","type":"text"}],[{"title":"产品物料的版本","field":"ItemVersion","type":"text"}],[{"title":"编码流水号","field":"SerialNumber","type":"range"}],[{"title":"创建时间","field":"CreatedTime","type":"datetime"}],[{"dataKey":"roles","data":[],"title":"创建者","field":"CreatedBy","type":"select"}],[{"title":"修改时间","field":"ModifiedDate","type":"datetime"}]]);
            const columns = ref([{field:'ID',title:'主键',type:'int',sort:true,width:30,readonly:true,require:true,align:'left',sort:true},
                       {field:'ItemId',title:'物料ID',type:'int',width:30,align:'left'},
                       {field:'ItemName',title:'当前物料名称',type:'string',link:true,width:110,align:'left'},
                       {field:'ItemVersion',title:'产品物料的版本',type:'int',width:110,align:'left'},
                       {field:'PartNumber',title:'完整的物料编码 ，1-AA.BB-000001',type:'string',width:110,align:'left'},
                       {field:'CompletedTypeCode',title:'完整的物料分类,如 一级 二级 三级   1-AA.BB',type:'string',width:110,align:'left'},
                       {field:'SerialNumber',title:'编码流水号',type:'int',width:110,align:'left'},
                       {field:'CreatedTime',title:'创建时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'CreatedBy',title:'创建者',type:'string',bind:{ key:'roles',data:[]},width:110,align:'left'},
                       {field:'ModifiedDate',title:'修改时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'ModifiedBy',title:'修改者',type:'string',width:110,align:'left'},
                       {field:'Remark',title:'备注',type:'string',width:110,align:'left'}]);
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

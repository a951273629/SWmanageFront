<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/prod_materialmessage/Prod_MaterialMessage.js此处编写
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
    import extend from "@/extension/manage/prod_materialmessage/Prod_MaterialMessage.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'ID',
                footer: "Foots",
                cnName: '物料信息档案',
                name: 'prod_materialmessage/Prod_MaterialMessage',
                url: "/Prod_MaterialMessage/",
                sortName: "ID"
            });
            const editFormFields = ref({"Name":"","Classify":"","Regular":"","Unit":"","Type":"","Source":"","Status":""});
            const editFormOptions = ref([[{"title":"物料名称","field":"Name"}],
                              [{"dataKey":"物料分类","data":[],"title":"物料分类","field":"Classify","type":"select"}],
                              [{"dataKey":"物料规格","data":[],"title":"物料规则","field":"Regular","type":"select"}],
                              [{"dataKey":"产品单位","data":[],"title":"物料单位","field":"Unit","type":"select"}],
                              [{"dataKey":"物料类型","data":[],"title":"物料类型","field":"Type","type":"select"}],
                              [{"dataKey":"物料来源","data":[],"title":"物料来源","field":"Source","type":"select"}],
                              [{"dataKey":"status","data":[],"title":"状态","field":"Status","type":"switch"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'ID',title:'序号',type:'long',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'Code',title:'物料编码',type:'string',width:110,align:'left',sort:true},
                       {field:'Name',title:'物料名称',type:'string',width:110,align:'left'},
                       {field:'Classify',title:'物料分类',type:'string',bind:{ key:'物料分类',data:[]},width:110,align:'left'},
                       {field:'Regular',title:'物料规则',type:'string',bind:{ key:'物料规格',data:[]},width:110,align:'left'},
                       {field:'Unit',title:'物料单位',type:'string',bind:{ key:'产品单位',data:[]},width:110,align:'left'},
                       {field:'Type',title:'物料类型',type:'string',bind:{ key:'物料类型',data:[]},width:110,align:'left'},
                       {field:'Source',title:'物料来源',type:'string',bind:{ key:'物料来源',data:[]},width:110,align:'left'},
                       {field:'Status',title:'状态',type:'int',bind:{ key:'status',data:[]},width:110,align:'left'},
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

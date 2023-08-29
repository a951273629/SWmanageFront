<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/prod_productionmessage/Prod_ProductionMessage.js此处编写
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
    import extend from "@/extension/manage/prod_productionmessage/Prod_ProductionMessage.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'Id',
                footer: "Foots",
                cnName: '产品信息档案',
                name: 'prod_productionmessage/Prod_ProductionMessage',
                url: "/Prod_ProductionMessage/",
                sortName: "Id"
            });
            const editFormFields = ref({"Name":"","Brand":"","Kind":"","Model":"","Type":"","Unit":"","Connection":"","State":""});
            const editFormOptions = ref([[{"title":"产品名称","field":"Name","type":"text"}],
                              [{"title":"产品品牌","field":"Brand","type":"text"}],
                              [{"dataKey":"产品分类","data":[],"title":"产品分类","field":"Kind","type":"select"}],
                              [{"dataKey":"产品型号","data":[],"title":"产品型号","field":"Model","type":"select"}],
                              [{"dataKey":"产品类型","data":[],"title":"产品类型","field":"Type","type":"select"}],
                              [{"dataKey":"产品单位","data":[],"title":"产品单位","field":"Unit","type":"select"}],
                              [{"title":"关联物料","field":"Connection","type":"text"}],
                              [{"dataKey":"status","data":[],"title":"启用","field":"State","type":"switch"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'Id',title:'序号',type:'long',sort:true,width:50,readonly:true,require:true,align:'left',sort:true},
                       {field:'Code',title:'产品编码',type:'string',width:110,align:'left'},
                       {field:'Name',title:'产品名称',type:'string',width:110,align:'left'},
                       {field:'Brand',title:'产品品牌',type:'string',width:110,align:'left'},
                       {field:'Kind',title:'产品分类',type:'string',bind:{ key:'产品分类',data:[]},width:110,align:'left'},
                       {field:'Model',title:'产品型号',type:'string',bind:{ key:'产品型号',data:[]},width:110,align:'left'},
                       {field:'Type',title:'产品类型',type:'string',bind:{ key:'产品类型',data:[]},width:110,align:'left'},
                       {field:'Unit',title:'产品单位',type:'string',bind:{ key:'产品单位',data:[]},width:110,align:'left'},
                       {field:'Connection',title:'关联物料',type:'string',width:110,align:'left'},
                       {field:'State',title:'启用',type:'int',bind:{ key:'status',data:[]},width:110,align:'left'},
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

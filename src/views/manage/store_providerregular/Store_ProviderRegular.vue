<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/store_providerregular/Store_ProviderRegular.js此处编写
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
    import extend from "@/extension/manage/store_providerregular/Store_ProviderRegular.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'Id',
                footer: "Foots",
                cnName: '供应商条码规则',
                name: 'store_providerregular/Store_ProviderRegular',
                url: "/Store_ProviderRegular/",
                sortName: "Id"
            });
            const editFormFields = ref({"Code_Regular":"","Provider_Name":"","Provider_Code":"","System_Code":"","Material_Name":"","Specification_Model":"","Provider_BarCode":"","Remark":"","State":""});
            const editFormOptions = ref([[{"title":"物料条码规则编码","field":"Code_Regular"}],
                              [{"title":"供应商名称","field":"Provider_Name"}],
                              [{"title":"供应商物料编码","field":"Provider_Code"}],
                              [{"title":"系统物料编码","field":"System_Code"}],
                              [{"title":"物料名称","field":"Material_Name"}],
                              [{"title":"规格型号","field":"Specification_Model"}],
                              [{"title":"供应商条码位数","field":"Provider_BarCode"}],
                              [{"title":"备注","field":"Remark"}],
                              [{"dataKey":"status","data":[],"title":"状态","field":"State","type":"switch"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'Id',title:'序号',type:'long',sort:true,width:40,require:true,align:'left',sort:true},
                       {field:'Code_Regular',title:'物料条码规则编码',type:'string',width:110,align:'left'},
                       {field:'Provider_Name',title:'供应商名称',type:'string',link:true,width:110,align:'left'},
                       {field:'Provider_Code',title:'供应商物料编码',type:'string',width:110,align:'left'},
                       {field:'System_Code',title:'系统物料编码',type:'string',width:110,align:'left'},
                       {field:'Material_Name',title:'物料名称',type:'string',width:110,align:'left'},
                       {field:'Specification_Model',title:'规格型号',type:'string',width:110,align:'left'},
                       {field:'Provider_BarCode',title:'供应商条码位数',type:'string',width:110,align:'left'},
                       {field:'Remark',title:'备注',type:'string',width:110,align:'left'},
                       {field:'State',title:'状态',type:'int',bind:{ key:'status',data:[]},width:110,align:'left'},
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

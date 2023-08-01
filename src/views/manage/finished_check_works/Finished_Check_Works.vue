<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/finished_check_works/Finished_Check_Works.js此处编写
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
    import extend from "@/extension/manage/finished_check_works/Finished_Check_Works.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'WorksId',
                footer: "Foots",
                cnName: '产成品检验作业',
                name: 'finished_check_works/Finished_Check_Works',
                url: "/Finished_Check_Works/",
                sortName: "Id"
            });
            const editFormFields = ref({"State":"","Material_Code":"","Material_Name":"","Material_Type":"","Material_Classify":"","Material_Unit":"","Check_Template":"","Material_Count":"","Check_Regular":"","Sample_Count":"","Badness_Count":"","Badness_Ratio":"","Check_Time":"","Checker":"","Check_Result":"","Exception_Method":""});
            const editFormOptions = ref([[{"dataKey":"status","data":[],"title":"状态","field":"State","type":"switch"},
                               {"title":"物料编码","field":"Material_Code"},
                               {"title":"物料名称","field":"Material_Name"},
                               {"title":"物料类型","field":"Material_Type"},
                               {"title":"物料分类","field":"Material_Classify"},
                               {"title":"物料单位","field":"Material_Unit"},
                               {"title":"校验模板","field":"Check_Template"},
                               {"title":"物料数量","field":"Material_Count","type":"number"},
                               {"dataKey":"ordertype","data":[],"title":"校验规则","field":"Check_Regular","type":"select"},
                               {"title":"抽样数据","field":"Sample_Count","type":"number"},
                               {"title":"不良数量","field":"Badness_Count","type":"number"},
                               {"title":"不良率","field":"Badness_Ratio","type":"number"},
                               {"title":"检查时间","field":"Check_Time","type":"datetime"},
                               {"dataKey":"roles","data":[],"title":"检查人员","field":"Checker","type":"select"},
                               {"title":"检查结果","field":"Check_Result"},
                               {"dataKey":"异常方式数据源","data":[],"title":"异常方式","field":"Exception_Method","type":"select"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'TicketId',title:'关联Id',type:'long',width:30,align:'left',sort:true},
                       {field:'State',title:'状态',type:'int',bind:{ key:'status',data:[]},width:50,align:'left'},
                       {field:'Material_Code',title:'物料编码',type:'string',width:110,align:'left'},
                       {field:'Material_Name',title:'物料名称',type:'string',width:110,align:'left'},
                       {field:'Material_Type',title:'物料类型',type:'string',width:110,align:'left'},
                       {field:'Material_Classify',title:'物料分类',type:'string',width:110,align:'left'},
                       {field:'Material_Unit',title:'物料单位',type:'string',width:110,align:'left'},
                       {field:'Check_Template',title:'校验模板',type:'string',width:110,align:'left'},
                       {field:'Material_Count',title:'物料数量',type:'long',width:110,align:'left'},
                       {field:'Check_Regular',title:'校验规则',type:'string',bind:{ key:'ordertype',data:[]},width:110,align:'left'},
                       {field:'Sample_Count',title:'抽样数据',type:'long',width:50,align:'left'},
                       {field:'Badness_Count',title:'不良数量',type:'long',width:50,align:'left'},
                       {field:'Badness_Ratio',title:'不良率',type:'int',width:50,align:'left'},
                       {field:'Check_Time',title:'检查时间',type:'datetime',width:120,align:'left',sort:true},
                       {field:'Checker',title:'检查人员',type:'string',bind:{ key:'roles',data:[]},width:110,align:'left'},
                       {field:'Check_Result',title:'检查结果',type:'string',width:110,align:'left'},
                       {field:'Exception_Method',title:'异常方式',type:'string',bind:{ key:'异常方式数据源',data:[]},width:110,align:'left'},
                       {field:'Operation',title:'操作',type:'string',width:110,align:'left'},
                       {field:'WorksId',title:'作业Id',type:'long',width:80,hidden:true,readonly:true,require:true,align:'left'}]);
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

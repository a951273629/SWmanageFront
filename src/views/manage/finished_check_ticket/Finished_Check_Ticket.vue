<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/finished_check_ticket/Finished_Check_Ticket.js此处编写
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
    import extend from "@/extension/manage/finished_check_ticket/Finished_Check_Ticket.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'TicketId',
                footer: "Foots",
                cnName: '产成品检验单',
                name: 'finished_check_ticket/Finished_Check_Ticket',
                url: "/Finished_Check_Ticket/",
                sortName: "Id"
            });
            const editFormFields = ref({"State":"","Check_Number":"","Check_Type":"","Product_Number":"","Product_Batch":"","Check_Time":"","Remark":"","Creator":"","Create_Time":""});
            const editFormOptions = ref([[{"title":"状态","field":"State","type":"switch"}],
                              [{"title":"检验单号","field":"Check_Number","type":"text"}],
                              [{"dataKey":"roles","data":[],"title":"检验类型","field":"Check_Type","type":"select"}],
                              [{"title":"生产订单号","field":"Product_Number"}],
                              [{"title":"生产批次","field":"Product_Batch"}],
                              [{"title":"计划校验时间","field":"Check_Time","type":"datetime"}],
                              [{"title":"备注","field":"Remark"}],
                              [{"dataKey":"roles","data":[],"title":"创建者","field":"Creator","type":"select"}],
                              [{"title":"创建时间","field":"Create_Time","type":"datetime"}]]);
            const searchFormFields = ref({"Check_Time":"","Create_Time":""});
            const searchFormOptions = ref([[{"title":"计划校验时间","field":"Check_Time","type":"datetime"}],[{"title":"创建时间","field":"Create_Time","type":"datetime"}]]);
            const columns = ref([{field:'State',title:'状态',type:'int',width:50,align:'left',sort:true},
                       {field:'Check_Number',title:'检验单号',type:'string',link:true,width:110,align:'left'},
                       {field:'Check_Type',title:'检验类型',type:'string',bind:{ key:'roles',data:[]},width:110,align:'left'},
                       {field:'Product_Number',title:'生产订单号',type:'string',width:110,align:'left'},
                       {field:'Product_Batch',title:'生产批次',type:'string',width:110,align:'left'},
                       {field:'Check_Time',title:'计划校验时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'Remark',title:'备注',type:'string',width:110,align:'left'},
                       {field:'Creator',title:'创建者',type:'string',bind:{ key:'roles',data:[]},width:100,align:'left'},
                       {field:'Create_Time',title:'创建时间',type:'datetime',width:150,align:'left',sort:true},
                       {field:'Operation',title:'操作',type:'string',width:110,align:'left'},
                       {field:'TicketId',title:'产成品Id',type:'long',width:80,hidden:true,readonly:true,require:true,align:'left'}]);
            const detail = ref({
                cnName: "产成品检验作业",
                table: "Finished_Check_Works",
                columns: [{field:'State',title:'状态',type:'int',bind:{ key:'status',data:[]},width:30,edit:{type:'switch'},align:'left',sort:true},
                       {field:'Material_Code',title:'物料编码',type:'string',width:110,edit:{type:''},align:'left'},
                       {field:'Material_Name',title:'物料名称',type:'string',width:110,edit:{type:''},align:'left'},
                       {field:'Material_Type',title:'物料类型',type:'string',width:110,edit:{type:''},align:'left'},
                       {field:'Material_Classify',title:'物料分类',type:'string',width:110,edit:{type:''},align:'left'},
                       {field:'Material_Unit',title:'物料单位',type:'string',width:110,edit:{type:''},align:'left'},
                       {field:'Check_Template',title:'校验模板',type:'string',width:110,edit:{type:''},align:'left'},
                       {field:'Material_Count',title:'物料数量',type:'long',width:110,edit:{type:'number'},align:'left'},
                       {field:'Check_Regular',title:'校验规则',type:'string',bind:{ key:'ordertype',data:[]},width:110,edit:{type:'select'},align:'left'},
                       {field:'Sample_Count',title:'抽样数据',type:'long',width:50,edit:{type:'number'},align:'left'},
                       {field:'Badness_Count',title:'不良数量',type:'long',width:50,edit:{type:'number'},align:'left'},
                       {field:'Badness_Ratio',title:'不良率',type:'int',width:50,edit:{type:'number'},align:'left'},
                       {field:'Check_Time',title:'检查时间',type:'datetime',width:120,edit:{type:'datetime'},align:'left',sort:true},
                       {field:'Checker',title:'检查人员',type:'string',bind:{ key:'roles',data:[]},width:110,edit:{type:'select'},align:'left'},
                       {field:'Check_Result',title:'检查结果',type:'string',width:110,edit:{type:''},align:'left'},
                       {field:'Exception_Method',title:'异常方式',type:'string',bind:{ key:'异常方式数据源',data:[]},width:110,edit:{type:'select'},align:'left'},
                       {field:'Operation',title:'操作',type:'string',width:110,align:'left'},
                       {field:'WorksId',title:'WorksId',type:'long',width:80,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'TicketId',title:'关联的外键',type:'long',width:80,align:'left'}],
                sortName: "Id",
                key: "WorksId"
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

<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/manage/catalogtree/CatalogTree.js此处编写
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
    import extend from "@/extension/manage/catalogtree/CatalogTree.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'ID',
                footer: "Foots",
                cnName: '编码器页面',
                name: 'catalogtree/CatalogTree',
                url: "/CatalogTree/",
                sortName: "Id"
            });
            const editFormFields = ref({"ParentID":[],"CatalogTypeName":"","CatalogTypeCode":"","Remark":"","InitialSerialNumber":"","LastSerialNumber":"","SeparatorCode":"","RuleTypeCode":"","CreatedBy":"","ModifiedBy":"","Version":""});
            const editFormOptions = ref([[{"dataKey":"编码器级联规则","data":[],"title":"父级分类","field":"ParentID","type":"cascader"}],
                              [{"title":"物料分类名称","field":"CatalogTypeName"}],
                              [{"title":"类型编码","field":"CatalogTypeCode"}],
                              [{"title":"备注","field":"Remark"}],
                              [{"title":"编码申请起始流水号","field":"InitialSerialNumber","type":"number"}],
                              [{"title":"当前编码流水号","field":"LastSerialNumber","type":"number"}],
                              [{"dataKey":"分隔符","data":[],"title":"分隔符","field":"SeparatorCode","type":"select"}],
                              [{"dataKey":"物料规则","data":[],"title":"物料分类规则","field":"RuleTypeCode","type":"select"}],
                              [{"dataKey":"roles","data":[],"title":"创建者","field":"CreatedBy","type":"select"}],
                              [{"dataKey":"roles","data":[],"title":"修改者","field":"ModifiedBy","type":"select"}],
                              [{"title":"产品物料版本","field":"Version","type":"number"}]]);
            const searchFormFields = ref({"ParentID":[]});
            const searchFormOptions = ref([[{"dataKey":"编码器级联规则","data":[],"title":"父级分类","field":"ParentID","type":"cascader"}]]);
            const columns = ref([{field:'ID',title:'ID',type:'int',sort:true,width:30,readonly:true,require:true,align:'left',sort:true},
                       {field:'ParentID',title:'父级分类',type:'int',bind:{ key:'编码器级联规则',data:[]},width:60,align:'left'},
                       {field:'CatalogTypeName',title:'物料分类名称',type:'string',link:true,width:80,align:'left'},
                       {field:'CatalogTypeCode',title:'类型编码',type:'string',width:80,align:'left'},
                       {field:'SeparatorCode',title:'分隔符',type:'string',bind:{ key:'分隔符',data:[]},width:50,align:'left'},
                       {field:'InitialSerialNumber',title:'编码申请起始流水号',type:'int',width:100,align:'left'},
                       {field:'LastSerialNumber',title:'当前编码流水号',type:'int',width:100,align:'left'},
                       {field:'Version',title:'产品物料版本',type:'int',width:80,align:'left'},
                       {field:'Remark',title:'备注',type:'string',width:100,align:'left'},
                       {field:'RuleTypeCode',title:'物料分类规则',type:'string',bind:{ key:'物料规则',data:[]},width:100,align:'left'},
                       {field:'CreatedTime',title:'创建时间',type:'datetime',width:100,align:'left',sort:true},
                       {field:'CreatedBy',title:'创建者',type:'string',bind:{ key:'roles',data:[]},width:80,align:'left'},
                       {field:'ModifiedTime',title:'修改时间',type:'datetime',width:100,align:'left',sort:true},
                       {field:'ModifiedBy',title:'修改者',type:'string',bind:{ key:'roles',data:[]},width:80,align:'left'}]);
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

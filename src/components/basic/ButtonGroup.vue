<template>
        <div class="button-group">
            <el-button type="primary" @click="box" >全选</el-button>
            <el-button type="primary" @click="test">反选</el-button>
            <el-button type="danger" >批量删除</el-button>
        </div>
  </template>
  
<script>
import { ElMessage } from 'element-plus'
  export default {
    props:{

    },
    methods:{
        box(){
            ElMessage({message:"弹出一个框框",type:'success'});
        },
        async test(){
            var _result = await this.http.post("/api/Org_Manage/GetPageData", {
              
            }, true).then(result => {
              console.log("1、异步请求前")  
            })
            onsole.log(_result)
        }
        
    },
    data() {
      return {


      };
    }
  };
  </script>
  <style scoped >
  .button-group{
    position: absolute;
    bottom: 0.8%;
    left: 2%;
  }
  </style>
  
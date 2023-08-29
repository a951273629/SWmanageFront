<template >
	<div class="apply">
		<el-button type="primary" class="apply-button" @click="applyCode">申请编码</el-button>
		<el-input placeholder="这里显示申请的编码" v-model="input" :disabled="true" class="apply-input">
		</el-input>
	</div>
	<Encoder :model1="model1" ref="childRef"></Encoder>
</template>
<script>
	import Encoder from "../catalogtree/Encoder.vue"
	import { ElMessage } from "element-plus";
	export default {
        data(){
            return{
                input:"",
				model1:false
				// applyCode:function(){},
            }
        },
		components:{
			Encoder
		},
		mounted(){
			this.$nextTick(()=>{
				// console.log(JSON.stringify(this.$refs));
			})
		},
		methods:{
			applyCode(){
				// this.model1=true;
				this.$refs.childRef.open_encoder();
				// console.log(JSON.stringify(this));
			}
		}
	};
</script>
<style lang="less" scoped>
	.apply{
		position: relative;
		margin-top: 3%;
		left: 5%;
		
		// width: 500px;
		.apply-button{
			display: inline-block;
			margin-right: 5%;
			width: 12%;
		}
		.apply-input{
			width: 300px;
			margin-right: 3%;
			display: inline-block;
		}
	}
</style>

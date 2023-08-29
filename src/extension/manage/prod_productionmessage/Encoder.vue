<template>
	<vol-box
		:lazy="true"
		v-model="model1"
		title="编码器"
		:padding="0"
		:onModelClose="onModelClose"
	>
		<div style="height: 280px;width:800px;">
			<div class="block">
				<span class="demonstration">选择物料分级:</span>
				<el-cascader
					class="cascade"
					v-model="submit.value"
					:options="options"
					:props="optionProps"
					@change="handleChange"
				></el-cascader>
			</div>
			<div class="remark-div">
				<span class="demonstration">请输入备注:</span>
				<el-input
					class="input-number"
					placeholder="备注说明"
					v-model="submit.message"
				>
				</el-input>
			</div>
			<div class="number-div">
				<span class="demonstration">当前流水号:</span>
				<el-input
					class="input-number"
					placeholder="当前流水号"
					v-model="inputNumber"
					:disabled="true"
				>
				</el-input>
			</div>
			<el-button type="primary" @click="encode" class="apply-code"
				>申请编码
			</el-button>
		</div>
	</vol-box>
</template>
<script>
	import VolBox from "@/components/basic/VolBox.vue";
	import { ElMessage } from "element-plus";
	import http from "@/api/http.js";
	// import EventBus from '@/uitils/eventBus';
	import { ref, defineComponent } from "vue";
	export default {
		components: {
			VolBox
		},
		// props:["model1"],
		data() {
			return {
				model1: false,
				submit: {
					value: [],
					message: ""
				},

				optionProps: {
					children: "children",
					label: "catalogTypeName",
					value: "id"
				},
				options: [],
				// 流水号
				inputNumber: null,
				// 编码器生成的 编码
				codeString: "",
				// 申请编码返回的对象
				result: {}
			};
		},
		// computed: {
		// 	model1() {
		// 		return this.$store.state.modelBoole;
		// 		// 或者 return this.$store.getter.count2
		// 	}
		// },
		// ...mapState({
		// 	//箭头函数方便简介推荐使用
		// 	model1: (state) => state.modelBoole
		// }),
		methods: {
			open_encoder() {
				console.log("调用了");
				this.model1 = true;
			},
			async encode() {
				this.$emit("parentCall", ($parent) => {
					console.log($parent.$refs.table);
				});
				console.log(this.submit.value.length);
				if (this.submit.value.length == 0) {
					this.$Message.error("没有选择任何数据,请选择后再申请编码");
					return;
				}

				this.result = await http.post(
					"/api/CatalogTree/GetCode",
					this.submit
				);
				this.codeString = this.result.partNumber;
				this.$parent.input = this.codeString;
				this.$Message.success(`生成的编码为:${this.codeString}`);
				this.inputNumber++;

				this.$store.commit("setRecord", this.result);
			},
			// 选中一条数据时 校验一下
			async handleChange(value) {
				let result = await http.post(
					"/api/CatalogTree/GetRuleTypeCode",
					{ Id: value[value.length - 1] }
				);
				console.log(result, value);
				if (result.ruleTypeCode === "3") {
					this.$Message.error(
						"当前项是一个单位或者其他，不能参与编码，请选择其他项。"
					);
					this.submit.value = [];
					return;
				}
				ElMessage({
					message: "当前可以申请编码",
					type: "success"
				});
				// console.log(value[value.length-1]);
				// 用最后一位参与编码的ID查询流水号反写到页面
				this.inputNumber = await http.post(
					"api/CatalogTree/GetSerialNumber",
					{ Id: value[value.length - 1] }
				);
			}
		},
		// 全局事件总线弹出框
		created() {
			// this.$on('popBox', (modelBoole=true) => {
			// 	this.model1 = modelBoole;
			// });
		},
		async mounted() {
			// 页面加载时获取数据
			var CatalogTree = await http.get(
				"api/CatalogTree/GetAll",
				"",
				true
			);
			this.options = CatalogTree;
		},
		beforeDestroy() {
			console.log("页面销毁了");
			this.model1 = false;
		}
	};
</script>
<style lang="less" scoped>
	// .el-cascader-panel{
	// 	width: 800px;
	// }
	.block {
		width: 70%;
		margin-left: 20%;
		margin-top: 5%;
		position: relative;
		.cascade {
			width: 70%;
			position: absolute;
			top: 0%;
		}
		.demonstration {
			display: inline-block;
			margin-top: 3%;
			margin-right: 2%;
		}
	}
	.number-div {
		width: 70%;
		margin-top: 3.5%;
		margin-left: 20%;
		position: relative;
		.input-number {
			margin-left: 4.5%;
			width: 39.3%;
			position: absolute;
		}
		.demonstration {
			display: inline-block;
			margin-top: 1%;
			// margin-right: 2%;
		}
	}
	.apply-code {
		margin-top: 3%;
		margin-left: 21%;
		width: 38%;
	}
	.remark-div {
		width: 70%;
		margin-top: 2%;
		margin-left: 20%;
		position: relative;
		.demonstration {
			display: inline-block;
			margin-top: 2%;
			margin-right: 2%;
		}
		.input-number {
			margin-top: 1%;
			margin-left: 2.7%;
			width: 39.3%;
			position: absolute;
		}
	}
</style>

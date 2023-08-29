/*****************************************************************************************
 **  Author:jxx 2022
 **  QQ:283591387
 **完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
 **常用示例见：http://v2.volcore.xyz/document/vueDev
 **后台操作见：http://v2.volcore.xyz/document/netCoreDev
 *****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import { h, resolveComponent } from "vue";
import { ElMessage } from "element-plus";
import Encoder from "./Encoder.vue";
import http from "@/api/http.js";
// import { Date } from "core-js/es6";
import base from '@/uitils/common'
let extension = {
	components: {
		//查询界面扩展组件
		gridHeader: Encoder,
		gridBody: "",
		gridFooter: "",
		//新建、编辑弹出框扩展组件
		modelHeader: "",
		modelBody: "",
		modelFooter: ""
	},
	tableAction: "", //指定某张表的权限(这里填写表名,默认不用填写)
	buttons: { view: [], box: [], detail: [] }, //扩展的按钮
	methods: {
		//下面这些方法可以保留也可以删除
		onInit() {
			//框架初始化配置前，
			//示例：在按钮的最前面添加一个按钮
			//   this.buttons.unshift({  //也可以用push或者splice方法来修改buttons数组
			//     name: '按钮', //按钮名称
			//     icon: 'el-icon-document', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
			//     type: 'primary', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
			//     onClick: function () {
			//       this.$Message.success('点击了按钮');
			//     }
			//   });
			//示例：设置修改新建、编辑弹出框字段标签的长度
			// this.boxOptions.labelWidth = 150;

			this.buttons.unshift({
				//也可以用push或者splice方法来修改buttons数组
				name: "编码器", //按钮名称
				icon: "el-icon-document", //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
				type: "primary", //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
				onClick: function() {
					// this.$Message.success('点击了按钮');
					this.$refs.gridHeader.open_encoder();
					// this.$refs.Encoder.open_encoder();
				}
			});


			// 获取显示的长度的页面组件
			let NumberLength=this.getOption("SerialNumberLength")

			NumberLength.click =()=>{
				ElMessage.success("input框数值变动了");
			}
			// 默认不显示
			NumberLength.disabled =true;

			// 获取物料规则显示的字段
			let ruleType = this.getOption("RuleTypeCode");
			

			ruleType.onChange = (val, option)=>{
				// val等于2 表示选中的是子级
				if(val ==="2"){
					NumberLength.disabled =false;
					return;
				}
				NumberLength.disabled =true;
			}
			// 监听输入
			NumberLength.onKeyPress = ($event,val) => {
				// console.log(JSON.stringify(this.editFormFields.SerialNumberLength));
				if(this.editFormFields.SerialNumberLength<2){
					ElMessage.error("流水号最小不能小于10");
					setTimeout(()=>{
						this.editFormFields.SerialNumberLength=2;
					},0)
					return;
				}
				if(this.editFormFields.SerialNumberLength>12){
					ElMessage.error("流水号最大不能超过12位");
					setTimeout(()=>{
						this.editFormFields.SerialNumberLength=12;
					},0)
					return;
				}
				let Number =10**(this.editFormFields.SerialNumberLength-1);
				this.editFormFields.InitialSerialNumber =Number
				this.editFormFields.LastSerialNumber=Number
			  }
			// 获取物料编码参与编码的字段
			let CatalogCode = this.getOption("CatalogTypeCode");
			CatalogCode.blur= async ()=>{
				// !取反判空
				if(!this.editFormFields.CatalogTypeCode){
					// ElMessage.error("编码字段不可以为空，请输入一个编码");
					return;
				}
				let message ="子编码";
				let IDs =this.editFormFields.ParentID;
				//如果没有选择父级 那么父级就为根节点
				if(!IDs||IDs.length===0){
					message="根编码"
					IDs=[0];
				}
				let param ={
					id:IDs[IDs.length-1],
					catalogTypeCode:this.editFormFields.CatalogTypeCode
				}
				// ElMessage.success(JSON.stringify())
				let result=await http.post("/api/CatalogTree/IsSameTypeCode",param);
				if(result){
					// 重复编码清空
					ElMessage.error("当前编码重复不可用");
					this.editFormFields.CatalogTypeCode="";
					return
				}
				ElMessage.success(`当前编码可以使用:${message}`)
			}
		

			// CatalogCode.onKeyPress =()=>{
			// 	ElMessage.success("按下了某键");
			// }

		},
		onInited() {
			// 获取行数据
			// console.log(this.$refs.table.rowData);
			//框架初始化配置后
			//如果要配置明细表,在此方法操作
			//this.detailOptions.columns.forEach(column=>{ });
			// console.log(JSON.stringify(this.editFormFields));
		},
		searchBefore(param) {
			//界面查询前,可以给param.wheres添加查询参数
			//返回false，则不会执行查询
			return true;
		},
		searchAfter(result) {
			//查询后，result返回的查询数据,可以在显示到表格前处理表格的值
			return true;
		},
		addBefore(formData) {
			//新建保存前formData为对象，包括明细表，可以给给表单设置值，自己输出看formData的值
			console.log("保存前",formData);

			return true;
		},
		updateBefore(formData) {
			//编辑保存前formData为对象，包括明细表、删除行的Id
			return true;
		},
		// 编辑保存后
		updateAfter(result) {
			//编辑保存后result返回的状态及表单对象
			// ElMessage.success({ title: this.detailOptions.cnName + '编辑完成后：', desc: '返回的数据' + JSON.stringify(result) });
			location.reload();
			return true;
		},
		addAfter(result) {
			//新建保存后result返回的状态及表单对象
			location.reload();
			return true;
		},
		delAfter(result) {
			//查询界面的表删除后
			location.reload();
		},
		rowClick({ row, column, event }) {
			//查询界面点击行事件
			// this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
		},
		modelOpenAfter(row) {

			// setTimeout(()=>{
			// 	this.$refs.form.$refs.CatalogTypeCode[0].blur =()=>{
			// 		ElMessage.success("失去焦点");
			// 	}
			// },300)
			// setTimeout(()=>{
			// 	this.$refs.form.$refs.CatalogTypeCode[0].onKeyPress =()=>{
			// 		ElMessage.success("按下了某键");
			// 	}
			// },100)

			//获取当前弹出框是新建还是编辑状态
			let isEDIT = this.currentAction == this.const.EDIT;
			//新增状态 设置默认值
			if (!isEDIT) {
			   
				this.editFormFields.CreatedTime= this.base.getDate(true);
				this.editFormFields.ModifiedTime= this.base.getDate(true);
				
				this.editFormFields.Remark="新增物料";
				this.editFormFields.InitialSerialNumber=100000;
				this.editFormFields.LastSerialNumber=100000;
				this.editFormFields.SeparatorCode="-";
				this.editFormFields.RuleTypeCode="1";
				this.editFormFields.CreatedBy=1;
				this.editFormFields.ModifiedBy=1;
				this.editFormFields.Version=1;
				this.editFormFields.SerialNumberLength =6
				// console.log("formRules:",JSON.stringify(this.formRules));
				console.log("this.editFormFields",JSON.stringify(this.editFormFields));

			}
			// 获取物料编码参与编码的字段
			let CatalogCode = this.getOption("CatalogTypeCode");

			// CatalogCode.Onblur = 
			//点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
			//(1)判断是编辑还是新建操作： this.currentAction=='Add';
			//(2)给弹出框设置默认值
			//(3)this.editFormFields.字段='xxx';
			//如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
			//看不懂就把输出看：console.log(this.editFormOptions)
		},
		getOption(field) {
			let option;
			this.editFormOptions.forEach(x => {
			  x.forEach(item => {
				if (item.field == field) {
				  option = item;
				}
			  })
			})
			return option;
		},
	}
};
export default extension;

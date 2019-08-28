	<template>
		<div>
			<van-nav-bar
			  title="我的圈子"
			  :fixed='true'
			  left-text="返回"
			    left-arrow
			    @click-left="onClickLeft"
			/>
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<div class="tips" v-for="(item,i) in list">
				<div class="tips1" >
					 <img :src="item.imgs" class="imgs"/>
					<span class="tips2">{{item.cname}}</span>
				</div>
				<span class="tips3">{{item.pinglun}}</span>
			</div>
			</van-pull-refresh>
		</div>
		
	</template>
	
	<script>
		import '../data/prolist';
		import axios from 'axios'
		export default{
			name:'Wqz',
			data(){
				return{
					title:"我的圈子",
					list:'',
						isLoading: false
				}
			},
			methods:{
				onClickLeft(){
					this.$router.go(-1)
				},
				 onRefresh() {
			      setTimeout(() => {	
		         	   this.$toast('刷新成功');
		               this.isLoading = false;		        
				}, 2000);
		    }
				
			},
			mounted(){
				axios({
						url:'http://www.baidu.com/prolist'
					}).then((data)=>{
						//console.log(data.data.list);
						var data = data.data.list;
						this.list=data
					})

			}
		}
	</script>
	
	<style scoped="">
		*{
			margin:0;
			padding:0
		}
		.tips{
			margin-top:59px;
			flex-wrap: wrap;
			border-bottom: 20px solid #ccc;
		}
		.tips1{
			display: flex;
			align-items: center;
		}
		.imgs{
			width:50px;
			height:50px;
			border-radius: 50%;
			margin-left:10px
		}
		
		.tips2{
			font-size:16px;
			margin-left:10px;
		}
		.tips3{
			display: block;
			width:300px;	
			font-size:16px;
			margin:5px 10px 30px 10px;
			
		}
		
	</style>
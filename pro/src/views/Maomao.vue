<template>
	<div>
		<van-nav-bar
			  title="猫猫"
			  :fixed='true'
			  left-text="返回"
			    left-arrow
			    @click-left="onClickLeft"
			/>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">	
		<div class="tips" v-for="(item,i) in list4">
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
		name:'Maomao',
		data(){
			return{
				title:"猫猫",
				list4:[],
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
						url:'http://www.baidu.com/prolist4'
				}).then((data4)=>{
						var data = data4.data.list;
						this.list4=data
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
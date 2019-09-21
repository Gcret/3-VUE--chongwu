<template>
	<div class="heads">
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<van-swipe :autoplay="3000" indicator-color="white">
			  <van-swipe-item v-for="img in data"><img class="tu" :src="img.banner_img_url"/></van-swipe-item>
			 
			</van-swipe>
		
			
		<div class="con">
			<van-button type="primary" to="/fujin">附近</van-button>
			<van-button type="primary" to="/shangcheng">商城</van-button>
		</div>
		<div class="succ">
			<h2>买狗狗</h2>
			<van-card
				v-for="(item,i) in list"
				:key="i"
			  :price="item.pprice*0.9"
			  :desc="item.pdesc"  
			  :title="item.pname"
			  :thumb="item.pimg"
			  @click="detail(item.pid)"
		/>
		</div>
		<hr />
		<div>
			<h2>买猫猫</h2>
			<van-card
				v-for="(item,i) in list1"
				:key="i"
			  :price="item.pprice*0.9"
			  :desc="item.pdesc"  
			  :title="item.pname"
			  :thumb="item.pimg"
			 @click="detail(item.pid)"
			/>
		</div>
		</van-pull-refresh>
	</div>
</template>

<script>
	
	
	import api from '../api/api_pro';
	import axios from 'axios';
	export default{
		name:'Home',
		data(){
			return{
				title:'首页',
				list:[],
				list1:[],
				isLoading: false,
				data:[]
			}
		},
		mounted(){
			this.$emit('toparent',this.title)

			var params={uid:200003}
			api.getProduct(params).then((data)=>{
				//console.log(data.data)
				this.list=data.data
			});
			var params={uid:200001}
			api.getProduct(params).then((data)=>{
				//console.log(data.data)
				this.list1=data.data
			});
			axios.get('http://jx.xuzhixiang.top/ap/api/bannerlist.php',
			{
				params:{
					uid:200011
					}
				}).then(data=>{
					console.log(data)
				this.data=data.data.data
			})
			
		},
		methods:{
			detail(id){
				//console.log(id)
				this.$router.push('/detail/'+id)
			},
			 onRefresh() {
			      setTimeout(() => {
			        this.$toast('刷新成功');
			        this.isLoading = false;
			    
			      }, 2000);
			    }
		}
	}
</script>

<style scoped="">
	.tu{
		width:100vw;
		height:200px;
		
	}
	
</style>
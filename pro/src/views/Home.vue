<template>
	<div class="heads">
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<van-swipe :autoplay="3000" indicator-color="white">
			  <van-swipe-item><img class="tu" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566401484485&di=870e65bc2fa66b3ac04562b80441690a&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D2371755679%2C11488868%26fm%3D214%26gp%3D0.jpg"/></van-swipe-item>
			  <van-swipe-item><img class="tu" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566401484206&di=87dd3757060959d96866c50655f73ddd&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201306%2F30%2F20130630122708_LvjNA.thumb.700_0.jpeg"/></van-swipe-item>
			  <van-swipe-item><img class="tu" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566401722143&di=5d6ef65ed3d56c943e01dd177376f68d&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3914015300%2C147106442%26fm%3D214%26gp%3D0.jpg"/></van-swipe-item>
			  <van-swipe-item><img class="tu" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566401721672&di=7128718a86ed2197282e6563c9130cf4&imgtype=0&src=http%3A%2F%2Ftravel.people.com.cn%2FNMediaFile%2F2015%2F0819%2FMAIN201508190855000460440099719.jpg"/></van-swipe-item>
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
	export default{
		name:'Home',
		data(){
			return{
				title:'首页',
				list:[],
				list1:[],
				isLoading: false
			}
		},
		mounted(){
			this.$emit('toparent',this.title)

			var params={uid:200000}
			api.getProduct(params).then((data)=>{
				//console.log(data.data)
				this.list=data.data
			});
			var params={uid:200001}
			api.getProduct(params).then((data)=>{
				//console.log(data.data)
				this.list1=data.data
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
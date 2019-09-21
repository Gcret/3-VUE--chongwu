<template>
	<div class="nav9">
		<h2>萌宠</h2>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		<div class="headers">
			<div class="nav" v-for='(item,i) in list' @click="detail(item.pid)">
				<img :src="item.pimg" class="imgs"/>
				<p class="nav1">{{item.pname}}</p>
				<p class="nav2">{{item.pdesc}}</p>
				<p class="nav3">￥ {{item.pprice*0.9}}</p>
			</div>
		</div>
		
		</van-pull-refresh>
		
		
	</div>
</template>

<script>
	
	import api from '../api/api_pro'
	export default{
		name:'Friends',
		data(){
			return{
				title:'购宠',
				list:[],
				 isLoading: false
			}
		},
		mounted(){
			this.$emit('toparent',this.title)
			
			let params = {uid:200004}
			api.getProduct(params).then((data)=>{
				//console.log(data.data)
				this.list=data.data
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
	*{
		margin:0;
		padding:0
	}
	.nav9{
		background:#ccc
	}
	h2{
		font-size: 18px;
		margin-left:10px
	}
	.nav{
		width:140px;
		height:250px;
		background:#fff;
		margin:5px 10px 5px 10px;
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.headers{
		display:flex;
		justify-content: space-between;
		flex-wrap: wrap;	
	}
	.imgs{
		margin-top:10px;
		margin-left:5px;
		width:130px;
		height:175px;
	
	}
	p{
		margin-left:10px
	}
	.nav1{
		width:150px;
		font-size:14px;
		color:#000;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.nav2{
		width:150px;
		color:#ccc;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.nav3{
		width:150px;
		font-size:16px;
		color:#f00
	}
	
</style>
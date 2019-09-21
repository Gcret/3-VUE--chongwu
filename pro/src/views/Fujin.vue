<template>
	<div>
		<van-nav-bar
		  title="附近"
		  :fixed='true'
		  left-text="返回"
		    left-arrow
		    @click-left="onClickLeft"
		/>
		
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
		name:'Fujin',
		data(){
			return{
				title:'附近',
				list:[],
				isLoading: false
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
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
		},
		mounted(){
			this.$emit('toparent',this.title)
			
			let params = {uid:200002}
			api.getProduct(params).then((data)=>{
				//console.log(data.data)
				this.list=data.data
			})
		}
		
	}
</script>

<style scoped="">
	*{
		margin:0;
		padding:0
	}
	.headers{
		display:flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top:46px	
		
	}
	.nav{
		width:140px;
		height:200px;
		background:#fff;
		margin:10px 10px 5px 10px;
		display:flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.imgs{
		margin-top:10px;
		margin-left:5px;
		width:130px;
		height:130px;
	}
	p{
		margin-left:5px
	}
	.nav1{
		width:135px;
		height:16px;
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
		color:#f00;
	}
	
</style>
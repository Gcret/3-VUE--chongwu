<template>
	<div class='shez'>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="con">
		<div class="wuo">
			<div class="wuo1"></div>
			<span class="dengl">欢迎：{{username}}</span>	
		</div>
		
		<div class="dizhi" @click="tap()">
			&nbsp;&nbsp;我的地址
		</div>
		
		
		
		<van-button round type="warning" size="large" class="box8" @click="setting()">退出登录</van-button>
	</van-pull-refresh>	
	</div>
	
</template>

<script>
	export default{
		name:'Setting',
		data(){
			return{
				title:'我的',
				username:'',
				isLoading: false
			}
		},
		methods:{
			setting(){
				this.$router.push('/login')
			},
			onRefresh() {
			      setTimeout(() => {
		         	   this.$toast('刷新成功');
		               this.isLoading = false;		        
				}, 2000);
		    },
		    tap(){
		    	this.$router.push('/dizhi')
		    }
		},
		mounted(){
			this.$emit('toparent',this.title)	
			let userinfo = localStorage.getItem('username')
				//console.log(userinfo)
				if(userinfo){
					this.username=userinfo;
					//console.log(this.username)
				}
		}
	}
</script>

<style scoped="">
	*{
		margin:0;
		padding:0
	}
	.con{
		height:80vh
	}
	.shez{
		background:#ccc;
		height: 100vh;
	}
	.wuo{
		width:300px;
		height:100px;
		background:#fff;
		margin-top:20px;
		margin-left:10px;
		display:flex;
		justify-content: flex-start;
		align-items: center;
	}
	.wuo1{
		width:50px;
		height:50px;
		background:#ccc;
		margin-left:30px
	}
	.dengl{
		margin-left:20px;
		font-size: 16px;
		color:#000
	}
	.shez .box8{
		margin-top:10px;
		color:#fff
	}
	.dizhi{
		width:100vw;
		height:35px;
		background:#fff;
		margin-top:10px;
		font-size:16px;
		line-height:35px;
	}
</style>
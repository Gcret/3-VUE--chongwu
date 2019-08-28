<template>
	<div>
		<van-nav-bar
		  :title="title"
		  :fixed='true'
		/>
		<div class="container">
			<router-view @toparent='getTitle'></router-view>
		</div>
		<van-tabbar v-model="active">
		  <van-tabbar-item icon="stop-circle" to='/home'>首页</van-tabbar-item>
		  <van-tabbar-item icon="location" to='/search'>社区</van-tabbar-item>
		  <van-tabbar-item icon="cart-circle" to='/friends'>购宠</van-tabbar-item>
		  <van-tabbar-item icon="setting" to='/setting'>我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default{
		name:'Index',
		data(){
			return{
				active:0,
				title:'首页'
			}
		},
		methods:{
			getTitle(msg){
				this.title=msg
			}
		}
	}
</script>

<style scoped="">
	.container{
		margin-top:46px;
		margin-bottom:50px
	}
</style>
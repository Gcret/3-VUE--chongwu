<template>
	<div>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="con1">
			
		<div class="con">
			<van-button icon="star-o" type="primary" to="/wqz">我的圈子</van-button>
			<van-button icon="star-o" type="primary" to="/qqz">更多圈子</van-button>
		</div>
		<div class="gou1" @click="tap()">
				<div class="gou2">
					<img class="imgs" src="http://www.dogmr.com/uploads/allimg/150205/1-15020510463c05.JPG" />
				</div>
				<div class='gou3'>
					<p class="gou4">求助问答</p>
					<p class="gou5">问医生 找专家 科学养宠更轻松</p>
				</div>
		</div>
		<div class="gou1" @click="tap1()">
				<div class="gou2">
					<img class="imgs" src="http://n.sinaimg.cn/sinacn09/721/w940h581/20180521/a610-haturft5628435.jpg" />
				</div>
				<div class='gou3'>
					<p class="gou4">狗狗</p>
					<p class="gou5">我家有个汪星人</p>
				</div>
		</div>
		<div class="gou1" @click="tap2()">
				<div class="gou2">
					<img class="imgs" src="http://n.sinaimg.cn/sinacn20113/210/w650h360/20181204/6ae3-hpinryc2695806.jpg" />
				</div>
				<div class='gou3'>
					<p class="gou4">猫猫</p>
					<p class="gou5">铲屎官</p>
				</div>
		</div>
		
		</van-pull-refresh>
	</div>
</template>

<script>
	export default{
		name:'Search',
		data(){
			return{
				title:'社区',
				isLoading: false
			}
		},
		mounted(){
			this.$emit('toparent',this.title)
		},
		methods:{
			tap(){
				this.$router.push('/quzhu')
			},
			tap1(){
				this.$router.push('/gougou')
			},
			tap2(){
				this.$router.push('/maomao')
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
	.con1{
		height:80vh
	}
	.con{
		display:flex;
		flex-direction: row;
		justify-content:center;
	
	}
	.imgs{
		width:50px;
		height:50px;
	
	}
	.gou1{
		display: flex;
		justify-content: flex-start;
		margin-top:10px;	
	}
	.gou3{
		display: flex;
		margin-left:15px;
		flex-direction: column;
		justify-content: center;
	}
	.gou4{
		font-size:14px;
		color:#000;
		line-height:18px
	}
	.gou5{
		font-size:16px;
		color:#ccc
	}
</style>
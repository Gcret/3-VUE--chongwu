<template>
	<div>
	
		<van-nav-bar
		  title="详情"
		  :fixed='true'
		   left-text="返回"
		    left-arrow
		    @click-left="onClickLeft"
		/>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		<div class="container1">
			<img :src="detail.pimg" class="imgs1"/>
			<p class="box5">{{detail.pname}}</p>
			<div class="jieshao">
				<span class="jieshao1">黄色</span>
				<span class="jieshao1">1个月22天</span>
			</div>
			<p class="box7"><span class="box8">价格:</span><br>现实优惠： ￥ {{detail.pprice*0.9}}<br><span class="yuan">原价： ￥{{detail.pprice}}</span></p>
			<p class="box6">介绍：<br>{{detail.pdesc}}</p>
			
			<div class="jiaoy">
				<p class="jiaoy1">担保交易</p>
				<p class="jiaoy1">此交易平台为您的交易全程提供保障</p>
				<p class="jiaoy2">监控商家 一宠一拍 30天保障 先行赔付</p>
			</div>
			
		</div>
		
		<van-goods-action>
		  
			<van-button round type="danger" @click="showPopup" class="btn">
			  	立即购买	
			</van-button>
				 
		</van-goods-action>
		
		<van-popup v-model="show"   
			position="bottom"
  			:style="{ height: '25%' }">
  			
  		<div>
  			<van-card
  					
				  :price="detail.pprice*0.9"
				  :title="detail.pname"
				  :thumb="detail.pimg"
				>
				  <div slot="footer" >
				    <van-button class="container2" size="mini" @click="Hidden()">取消</van-button>
				    <van-button class="container2" size="mini" @click="tap1()">确认</van-button>
				  </div>
				</van-card>
		</div>
		
		</van-popup>
		
		
		
		</van-pull-refresh>
	</div>
	
</template>

<script>
	import api from '../api/api_pro'
	export default{
		name:'Detail',
		data(){
			return{
				detail:'',
				show: false,
				isLoading: false
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
		    showPopup() {
		      this.show = true;
		    },
		     onRefresh() {
		      setTimeout(() => {
		        this.$toast('刷新成功');
		        this.isLoading = false;
		      }, 2000);
		    },
		    Hidden(){
		    	this.show=false
		    },
		    tap1(){
		    	this.$toast('狗狗已购买 已通知商家')	
		    	this.show=false
		    }
		},
		mounted(){
			let params={id:this.$route.params.id}
			api.getDetail(params).then((data)=>{	
				//console.log(data.data)
				this.detail=data.data
			})
		}
	}
</script>

<style scoped="">
	*{
		margin:0;
		padding:0
	}
	.container1{
		margin-top:46px;
		margin-bottom: 54px;
	}
	.container2{
		background:#ccc
	}
	.imgs1{
		width:100vw;
		height:300px;
	}
	.box5{
		margin-left:10px;
		font-size:18px
	}
	.box6{
		padding:10px 10px;
		font-size: 14px;
		color:#3c7a03;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		
	}
	.box7{
		padding:5px 10px;
		font-size:16px;
		color:#f00;
		border-bottom: 1px solid #ccc;
	}
	.yuan{
		font-size:14px;
		color:#ccc;
		text-decoration: line-through;
	}
	.box8{
		color:#000
	}
	.jiaoy{
		padding:10px 10px
	}
	.jiaoy1{
		font-size:14px;
		margin:5px 0
	}
	.jiaoy2{
		font-size:14px;
		color:#3c7a03
	}
	.imgs2{
	
		display: block;
		margin-left:10px;
		width:50px;
		height:50px
	}
	.jieshao{
		margin:10px 0;
	}
	.jieshao1{
		
		background:#ccc;
		font-size:14px;
		margin-left:5px;
		border-radius: 10px;
		color:#fff;
		padding:5px
	}
	.van-card__title{
		margin:10px 0 5px 10px
	}
	.van-card__price{
		margin-left:10px
	}
	.btn{
		padding: 5px 10px;
		text-align: center;
		line-height:30px;
		margin-left:240px
	}
</style>
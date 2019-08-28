<template>
	<div class="zong">
		
		<van-nav-bar
		  title="注册"
		  :fixed='true'
		/>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		<div class = 'con1'>
			<van-cell-group>
			  <van-field
			    v-model="username"
			    required
			    clearable
			    label="用户名"
			   	:error-message="tishi"	
			    right-icon="question-o"
			    placeholder="请输入账号"
			    @click-right-icon="$toast('请输入账号')"
			  />
			
			  <van-field
			    v-model="password"
			    type="password"
			    label="密码"
			    placeholder="请输入密码"
			    required
			  />
			</van-cell-group>
			<van-button round type="primary" size="large" class="box3" @click="register()">注册</van-button>
			<router-link to="/login" class="box4">注册成功请登录</router-link>
		</div>
		</van-pull-refresh>
	</div>
</template>

<script>
import api from '../api/api_pro';	
export default{
		name:'Register',
		data(){
			return{
				username:'',
				password:'',
				tishi:'',
				isLoading: false
			}
		},
		methods:{
				
			register(){
				
				if(this.username !== ""){
					var reg =/^[a-zA-Z0-9_-]{4,16}$/;
					if(!reg.test(this.username)){
						this.tishi=("请输入4-16位字母、数字的账号");
						
					}else{
						var params={username:this.username,password:this.password}
				api.getReg(params).then((data)=>{
							//console.log(data)
							if(this.username==""){
								this.tishi=('账号不能为空')
							}else{
								if(data.code == 0){
									this.tishi=(data.msg)
								}else{
									this.tishi=(data.msg);
									//this.$router.push('/login')
								}
							}
						})	
					}
					
				}
				
				
				
				
				
						
					
				},
				 onRefresh() {
				      setTimeout(() => {
			         	   this.$toast('刷新成功');
			                   this.isLoading = false;		        
					}, 2000);
			    }
				
				
				
			},
			
		
	}
	
	
</script>

<style scoped="">
	
	.con1{
		margin-top:46px;
		height:80vh
	}
	.box3{
		margin-top:10px
	}
	.box4{
		margin-top:5px;
		font-size:16px;
	}
</style>
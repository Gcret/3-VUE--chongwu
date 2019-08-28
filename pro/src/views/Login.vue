<template>
	<div>
		<van-nav-bar
		  title="登录"
		  :fixed='true'
		/>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="con1">
		<div class = 'con'>
			<van-cell-group>
			  <van-field
			    v-model="username"
			    required
			    clearable
			    label="用户名"
			    :error-message="tishi"
			    right-icon="question-o"
			    placeholder="请输入用户名"
			    @click-right-icon="$toast('question')"
			  />
			
			  <van-field
			    v-model="password"
			    type="password"
			    label="密码"
			    :error-message="tishi1"
			    placeholder="请输入密码"
			    required
			  />
			</van-cell-group>
			<van-button round type="primary" size="large" class="box" @click="login()">登录</van-button>
			<router-link to="/register" class="box2">没有登录请注册</router-link>
		</div>
		</van-pull-refresh>
	</div>
</template>

<script>
	import api from '../api/api_pro';
	export default{
		name:'Login',
		data(){
			return{
				username:'',
				password:'',
				tishi:'',
				tishi1:"",
				 isLoading: false
			}
		},
		methods:{
			login(){
				if(this.username !== ""){
					var reg =/^[a-zA-Z0-9_-]{4,16}$/;
					
					if(!reg.test(this.username)){
						this.tishi=("请输入4-16位字母、数字的账号");
						
					}else{
						
						var params = {username:this.username,password:this.password}
						api.getLogin(params).then((data)=>{
							//console.log(data)
							if(this.username==''){
								this.tishi=('账号不能为空')
							}else{
								if(data.code == 0){
									this.tishi=(data.msg)
								}else{
									this.tishi=(data.msg)
									localStorage.setItem('username',this.username)
									this.$router.push('/home')
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
			
		}
	}
</script>

<style scoped="">
	.con1{
		height:80vh
	}
	.con{
		margin-top:46px
	}
	.box{
		margin-top:10px
	}
	.box2{
		margin-top:5px;
		font-size:16px;
	}
</style>
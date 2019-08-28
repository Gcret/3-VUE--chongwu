<template>
	<div>
		
			<van-nav-bar
			  title="地址编辑"
			  :fixed='true'
			  left-text="返回"
			    left-arrow
			    @click-left="onClickLeft"
			/>
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="con">
			<van-address-edit
					class="con1"
				  :area-list="areaList"
				  show-postal
				  show-delete
				  show-set-default
				  show-search-result
				  :search-result="searchResult"
				  @save="onSave"
				  @delete="onDelete"
				  @change-detail="onChangeDetail"
				/>
		
		
		
		</van-pull-refresh>	
	</div>
</template>

<script>
	export default{
		name:'Dizhi',
		data(){
			return{
				title:"地址编辑",
				isLoading: false,
				 areaList,
      			searchResult: []
			}
		},
		methods:{
			onRefresh() {
			      setTimeout(() => {
		         	   this.$toast('刷新成功');
		               this.isLoading = false;		        
				}, 2000);
		    },
		    
		     onSave() {
				      Toast('save');
				    },
				    onClickLeft(){
				    	this.$router.go(-1)
				    },
				    onDelete() {
				      Toast('delete');
				    },
				    onChangeDetail(val) {
				      if (val) {
				        this.searchResult = [{
				          name: '黄龙万科中心',
				          address: '杭州市西湖区'
				        }];
				      } else {
				        this.searchResult = [];
				      }
				    }
				  }
		    
		    
		}
	
</script>

<style scoped="">
	.con{
		height:80vh
	}
	.con1{
		margin-top:46px
	}
</style>
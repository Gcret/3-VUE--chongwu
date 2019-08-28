import Vue from 'vue'
import Router from 'vue-router'
//解决router-link点击相同路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//路由
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


Vue.use(Router)

const router = new Router({
  routes: [
    {
	  	path:'/',
	  	redirect:'/login'
	  },
   {
	   	path:'/login',
	   	name:'login',
	   	component:()=>import('../views/Login'),
	   	meta:{
	   		title:'登录'
	   	}
   },
    {
	   	path:'/register',
	   	name:'register',
	   	component:()=>import('../views/Register'),
	   	meta:{
	   		title:'注册'
	   	}
   },
     {
   	path:'/index',
   	redirect:'/home',
   	name:'index',
   	component:()=>import('../views/Index'),
   	children:[
		   	{
		   		path:'/home',
		   		name:'home',
		   		component:()=>import('../views/Home'),
			   	meta:{
			   		title:'首页'
			   	}
		   	},
		   	{
		   		path:'/friends',
		   		name:'friends',
		   		component:()=>import('../views/Friends'),
			   	meta:{
			   		title:'购宠'
			   	}
		   	},
		   	{
		   		path:'/search',
		   		name:'search',
		   		component:()=>import('../views/Search'),
				   	meta:{
				   		title:'社区'
				   	}
		   	},
		   	{
		   		path:'/setting',
		   		name:'setting',
		   		component:()=>import('../views/Setting'),
				   	meta:{
				   		title:'我的'
				   	}
		   	},
   	]
   },
 
    {
	   	path:'/detail/:id',
	   	name:'detail',
	   	component:()=>import('../views/Detail'),
	   	meta:{
	   		title:'详情'
	   	}
   },
   {
	   	path:'/fujin',
	   	name:'fujin',
	   	component:()=>import('../views/Fujin'),
	   	meta:{
	   		title:'附近'
	   	}
   },
   {
	   	path:'/shangcheng',
	   	name:'shangcheng',
	   	component:()=>import('../views/Shangcheng'),
	   	meta:{
	   		title:'商城'
	   	}
   },
   {
	   	path:'/wqz',
	   	name:'wqz',
	   	component:()=>import('../views/Wqz'),
	   	meta:{
	   		title:'我的圈子'
	   	}
   },
   {
	   	path:'/qqz',
	   	name:'qqz',
	   	component:()=>import('../views/Qqz'),
	   	meta:{
	   		title:'更多圈子'
	   	}
   },
   {
	   	path:'/quzhu',
	   	name:'quzhu',
	   	component:()=>import('../views/Quzhu'),
	   	meta:{
	   		title:'求助问答'
	   	}
   },
     {
	   	path:'/gougou',
	   	name:'gougou',
	   	component:()=>import('../views/Gougou'),
	   	meta:{
	   		title:'狗狗'
	   	}
   },
    {
	   	path:'/maomao',
	   	name:'maomao',
	   	component:()=>import('../views/Maomao'),
	   	meta:{
	   		title:'猫猫'
	   	}
   },
   {
	   	path:'/dizhi',
	   	name:'dizhi',
	   	component:()=>import('../views/Dizhi'),
	   	meta:{
	   		title:'地址编辑'
	   	}
   }


    
    
    
  ]
})




router.beforeEach((to,from,next)=>{
	NProgress.start()
	if(to.meta.title){
		document.title=to.meta.title
	}
	next()
})
router.afterEach(()=>{
	NProgress.done()
})
export default router;
import * as API from './index'

export default{
	getProduct:params=>{
		return API.GET('/productlist.php',params)
	},
	getDetail:params=>{
		return API.GET('/detail.php',params)
	},
	getReg:params=>{
		return API.GET('/reg.php',params)
	},
	getLogin:params=>{
		return API.GET('/login.php',params)
	}
}

import axios from 'axios'

export function request(config){
			const instance = axios.create({
				baseURL:'http://152.136.185.210:7878/api/m5',
				timeout:10000,
			})
		// //请求拦截
		// instance.interceptors.request.use(config=>{
		// 	console.log(config)
		// 	return config //必须把config参数return出去
		// },err=>{
		// 	console.log(err)
			instance.interceptors.response.use(res=>{//res参数为服务器响应的结果
				return res.data //过滤掉结果中的其他属性，只返回data属性
			},err=>{//响应失败时调用
				console.log(err)
			})
			
			return instance(config)//返回给调用者，是一个promise对象
}
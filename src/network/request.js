import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL:'http://152.136.185.210:8000/api/n3',
        timeout: 8000
    })
    // 请求拦截
	instance.interceptors.request.use(config =>{
        // console.log(config)
        return config
    },err =>{
        // console.log(err)
    })
    // 响应拦截
    instance.interceptors.response.use(res =>{
        return res.data
    },err =>{
        console.log(err)
    })
    // 发送真正的网络请求
    return instance(config)
}
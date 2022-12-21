import axios from "axios"

const request = axios.create({
    baseURL: "http://xue.cnkdl.cn:23683",
    timeout: 30000,
})

// 请求拦截器
request.interceptors.request.use(config => {

    return config
},err => {
    return Promise.reject(err)
})

// 响应拦截器
request.interceptors.response.use(res => {

    return res.data
},err => {
    return Promise.reject(err)
})


export default request
import axios from "axios"
import nprogress from "nprogress"
import  "nprogress/nprogress.css"

const requests = axios.create({
    //配置对象
    baseURL: "/api",
    timeout: 5000,
})

//请求拦截器

requests.interceptors.request.use((config) => {
    //包含了请求头header

    //进度条开始动
    nprogress.start()
    return config
})

requests.interceptors.response.use((res) => {

    //进度条结束
    nprogress.done()                                                                                                        
    return res.data
}, (error) => {
    return Promise.reject(new Error("失败!"))
})


export default requests
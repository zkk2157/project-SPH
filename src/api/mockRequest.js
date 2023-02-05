import axios from "axios"
import nprogress from "nprogress"
import  "nprogress/nprogress.css"

const mockRequests = axios.create({
    //配置对象
    baseURL: "/mock",
    timeout: 5000,
})

//请求拦截器

mockRequests.interceptors.request.use((config) => {
    //包含了请求头header

    //进度条开始动
    nprogress.start()
    return config
})

mockRequests.interceptors.response.use((res) => {

    //进度条结束
    nprogress.done()                                                                                                        
    return res.data
}, (error) => {
    return Promise.reject(new Error("失败!"))
})


export default mockRequests
import requests from "@/api/request.js"
import mockRequests from "@/api/mockRequest"

//三级联动接口
//  /api/product/getBaseCategoryList  get请求,无参数

export const reqCategoryList = ()=>{
    //发请求
    return requests({url:"/product/getBaseCategoryList",method:"get"})
}

export const reqGetBannerList = ()=>{

    return mockRequests.get("/banner")
}
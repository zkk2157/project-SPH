import requests from "@/api/request.js"
import mockRequests from "@/api/mockRequest.js"

//三级联动接口
//  /api/product/getBaseCategoryList  get请求,无参数

export const reqCategoryList = () => {
    //发请求
    return requests({ url: "/product/getBaseCategoryList", method: "get" })
}

export const reqGetBannerList = () => {

    return mockRequests.get("/banner")
}

//获取floor 
export const reqFloorList = () => {

    return mockRequests.get("/floor")
}

export const reqGetSearchInfo = (params) => {

    return requests({ url: "/list", method: "post", data: params })
}
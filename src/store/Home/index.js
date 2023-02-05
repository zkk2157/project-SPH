import { reqCategoryList, reqCategoryList } from "@/api"
const state = {
    categoryList: [],
    //轮播图数据
    bannerList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    }
}
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        //       console.log(result)
        if (result.code === 200) {
            commit("CATEGORYLIST", result.data)
        }
    },

    async reqGetBannerList({ commit }) {
        let result = await this.reqGetBannerList()
        if (result.code === 200) {
            commit("GETBANNERLIST", result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
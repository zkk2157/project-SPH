import { reqGetSearchInfo } from "@/api"
const state = {
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    //获取search模块的数据
    async getSearchList({ commit }, params = {}) {

        let result = await reqGetSearchInfo(params)

        if (result.code === 200) {
            commit("GETSEARCHLIST", result.data)
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
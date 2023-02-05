import Vue from "vue"
import Vuex from "vuex"

//使用
Vue.use(Vuex)

import home from "./Home"
import search from "./Search"

export default new Vuex.Store({

    modules: {
        home,
        search
    }
})
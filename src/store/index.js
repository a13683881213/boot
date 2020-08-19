import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

import actions from './action'
Vue.use(Vuex)


const state = {
    username: '',
    name1: '',
    img: '',
    carcount: 0,
    mubiao: 0
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
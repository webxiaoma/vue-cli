import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    namespaced: true,
    state: {
     
    },
    modules: {
        
    },
    actions: {
     
    },
    mutations: {
    
    },
    strict: false,
    plugins: debug ? [createLogger()] : []
})
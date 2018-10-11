import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    getters,
    actions,
    state:{
        area:{}
    },
    mutations:{
        GetArea(state,areadate){
            this.state.area = areadate;
        }
    },
    // plugins: [createPersistedState({storage: window.sessionStorage})]
})
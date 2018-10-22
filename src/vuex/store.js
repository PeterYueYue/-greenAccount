import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
	getters,
	actions,
	state: {
		area: {
			areaName: window.sessionStorage.getItem('areaName') || '全市',
			id: window.sessionStorage.getItem('areaId') || '310000000000',
		}
	},
	mutations: {
		GetArea(state, area){
			this.state.area = area;
		}
	},
	// plugins: [createPersistedState({storage: window.sessionStorage})]
})
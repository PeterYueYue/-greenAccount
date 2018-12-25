import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    getters,
    actions,
    state:{
        area:{
            brName:'全市',
            id:'310000000000'
        },
        user_islogin:false,
        token:'',
        resUuid:'',
        username:'',
        expire:'',
        userdetail:{},
        isloginPage:0
    },
    mutations:{
        GetArea(state,areadate){
            this.state.area = areadate;
        },
        GetToken(state,data){
            this.state.username=data.userName;
            this.state.user_islogin=data.islogin;
            this.state.token = data.token;
        },
        GetResUuid(state,data){
            this.state.resUuid=data.resUuid
        },
        GetUserdetail(state,data){
            this.state.userdetail=data
        },
        GetDetailsid(state,data){
            this.state.id=data.id
        },
        GetPage(state,data){
            this.state.isloginPage=data
        }
    },
    // plugins: [createPersistedState({storage: window.sessionStorage})]
})
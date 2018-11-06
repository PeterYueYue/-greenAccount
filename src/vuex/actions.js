import * as types from './mutation-types'


// ---------------------------------------------
export var chooseArea = ({commit}, data) => {
    commit(types.GetArea, data);
  }
  export var getToken = ({commit}, data) => {
    commit(types.GetToken, data);
  }
  export var getResUuid = ({commit}, data) => {
    commit(types.GetResUuid, data);
  }
  export var getUserdetail = ({commit}, data) => {
    commit(types.GetUserdetail, data);
  }
  export var getDetailsid = ({commit}, data) => {
    commit(types.GetDetailsid, data);
  }

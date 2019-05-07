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
  export var getPage = ({commit}, data) => {
    commit(types.GetPage, data);
  }
  export var gethomemask = ({commit}, data) => {
    commit(types.GetHomemask, data);
  }
  export var getapproveStatus = ({commit}, data) => {
    commit(types.GetApproveStatus, data);
  }
  export var getusercode = ({commit}, data) => {
    commit(types.GetUsercode, data);
  }
  

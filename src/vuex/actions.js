import * as types from './mutation-types'


// ---------------------------------------------
export var chooseArea = ({commit}, data) => {
    commit(types.GetArea, data);
  }
import * as types from './mutation-types'


// ---------------------------------------------
export const chooseArea = ({commit}, data) => {
	commit(types.GetArea, data);
}
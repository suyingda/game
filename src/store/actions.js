

import * as types from  './types.js'
export default {
	increment:({commit})=>{
		commit(types.INCREMENT)
	},
	ab:({commit},bool)=>{
		commit(types.ABCOUNT,bool)
	}
}

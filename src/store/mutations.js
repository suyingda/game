import { INCREMENT,ABCOUNT } from './types.js'
import getters from './getters.js'

const state= {
	count:20,
	abcount:true
}
const mutations={
	[INCREMENT](state){
		state.count++
	},
	[ABCOUNT](state,bool){
		state.abcount  =bool  
	}
}

export default{
	state,
	mutations,
	getters
}
import {
	CHANGE_SEARCH_FIELD,
	REQUEST_PLATFORMS_PENDING,
	REQUEST_PLATFORMS_SUCCESS,
	REQUEST_PLATFORMS_FAILED
}from '../actions/actions.js'

const initialStateSearch={
	searchField:''
}

export const searchPlatforms=(state=initialStateSearch,action={})=>{
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchField:action.payload});
		default:
			return state;
	}
}

const initialStatePlatforms= {
	isPending:false,
	platforms:[],
	error:''
}

export const requestPlatforms=(state=initialStatePlatforms,action={})=>{
	switch(action.type){
		case REQUEST_PLATFORMS_PENDING:
			return Object.assign({},state,{isPending:true})
		case REQUEST_PLATFORMS_SUCCESS:
			return Object.assign({},state,{platforms:action.payload, isPending:false})
		case REQUEST_PLATFORMS_FAILED:
			return Object.assign({},state,{error:action.payload, isPending:false})
		default:
			return state;
	}
}
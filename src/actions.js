import {
	CHANGE_SEARCH_FIELD,
	REQUEST_PLATFORMS_PENDING,
	REQUEST_PLATFORMS_SUCCESS,
	REQUEST_PLATFORMS_FAILED
}from './constants.js'

export const setSearchField=(text)=>({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestPlatforms=()=>(dispatch)=>{
	// this.setState({platforms:platforms});
		// loading platforms value from database
	dispatch({type:REQUEST_PLATFORMS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(data=>dispatch({type:REQUEST_PLATFORMS_SUCCESS,payload:data}))
		.catch(error=>dispatch({type:REQUEST_PLATFORMS_FAILED,payload:error}))
}
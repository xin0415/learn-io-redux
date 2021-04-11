export const CHANGE_SEARCH_FIELD='CHANGE_SEARCH_FIELD'

export const REQUEST_PLATFORMS_PENDING='REQUEST_PLATFORMS_PENDING';
export const REQUEST_PLATFORMS_SUCCESS='REQUEST_PLATFORMS_SUCCESS';
export const REQUEST_PLATFORMS_FAILED='REQUEST_PLATFORMS_FAILED';

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
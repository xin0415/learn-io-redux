import React,{Component} from 'react';
import {connect} from 'react-redux';
import PlatformList from '../components/PlatformList';
import SearchBox from '../components/SearchBox';
// import {platforms} from '../platforms';
import './App.css'
import {setSearchField,requestPlatforms} from '../actions'

const mapStateToProps=(state)=>{
	return {
		searchField:state.searchPlatforms.searchField,
		platforms:state.requestPlatforms.platforms,
		isPending:state.requestPlatforms.isPending,
		error:state.requestPlatforms.error
	}
}
const mapDispatchToProps=(dispatch)=>{
	return {
		onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
		onRequestPlatform:()=>dispatch(requestPlatforms())
	}
}


class App extends Component{
	
	componentDidMount(){
		// this.setState({platforms:platforms});
		// loading platforms value from database
		this.props.onRequestPlatform();
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(response=> response.json())
		// 	.then(platforms=>this.setState({platforms:platforms}));
	}

	render(){
		// const{platforms}=this.state;
		const {searchField,onSearchChange,platforms,isPending}=this.props;
		const filteredPlatforms=platforms.filter(platform=>{
			return platform.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
			<h1>Loading</h1> :
			<div className='appStyle'>
				<h1>Learn-io</h1>
				<SearchBox searchChange={onSearchChange}/>
	  			<PlatformList platforms={filteredPlatforms}/>
	  		</div>
	}
	
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
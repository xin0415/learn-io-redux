import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import App from './containers/App';
import{searchPlatforms,requestPlatforms} from './reducers/reducers';

const logger=createLogger();
const rootReducer=combineReducers({searchPlatforms,requestPlatforms});
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

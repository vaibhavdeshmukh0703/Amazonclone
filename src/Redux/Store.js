import {combineReducer,createStore,applyMiddleware} from 'react-redux';
import axios from 'axios';
import thunk from 'redux-thunk';

let loginState ={
    loginUser:{},
}

const loginReducer =(state=loginState,action)=> {
 const stateCopy = JSON.parse(JSON.stringify(state));
 switch(action.type){

     default:
         console.log(action.payload);
         return stateCopy;
 
 }   
}

const rootReducer =({ loginReducer});

const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;

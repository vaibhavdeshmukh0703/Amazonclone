import React,{createContext,useContext,useReducer} from 'react';

// Prepare Data larye

export const StateContext = createContext();

//wrap our data and provide the data larye

export const StateProvider =({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = ()=>{ useContext(StateContext)};
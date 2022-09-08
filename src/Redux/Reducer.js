export const initialState = {
    basket:[]
}

export const reducer =(state=initialState,action)=>{
    const stateCopy = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'Add_TO_Basket':
            return{
                ...state,
                basket:[...state.basket,action.payload]
            };
        default:
            return stateCopy;
    }
}
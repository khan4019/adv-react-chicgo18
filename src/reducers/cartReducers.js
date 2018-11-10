
const cartReducers = (state=[], action) =>{
    switch (action.type) {
        case 'TOGGLE_TO_CART':
            const id = action.id;
            if(state.includes(id)){
                return state.filter(curr => curr !==id);
            }
            else {
                return [...state, id];
            }
    
        default:
            return state;
    }
}

export default cartReducers;

const productReducers = (state =[], action) =>{
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return state;
        case 'PRODUCTS_LOADED':
            return action.products;
        default:
            return state;
    }
}

export default productReducers;
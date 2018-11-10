
import {combineReducers} from 'redux'
import cartReducers from './cartReducers';
import productReducers from './productReducers';

const rootReducers = combineReducers({
    cart: cartReducers,
    products:productReducers
})

export default rootReducers;
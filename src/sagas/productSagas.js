
import {put, all, call, fork} from 'redux-saga/effects'
import data from '../data/productData.json';
import { loadProductAction, productsLoadedAction } from '../actions/productActions';

const fetchProductData = () => {
    return data;
}

function* loadProductSaga(){
    yield put(loadProductAction());
    const products = yield call(fetchProductData);
    yield put(productsLoadedAction(products));
}

export default function* root(){
    yield all([fork(loadProductSaga)]);
}
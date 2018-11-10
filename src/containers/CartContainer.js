import React from 'react';
import Cart from '../components/Cart';
import { connect } from 'react-redux';

const mapStateToProps = state =>({
    products: state.products.filter(pd => state.cart.includes(pd.id))
})

const CartWithProps = ({products}) =>(
    <Cart products={products}></Cart>
)

const CartContainer = connect(
    mapStateToProps
)(CartWithProps);

export default CartContainer;
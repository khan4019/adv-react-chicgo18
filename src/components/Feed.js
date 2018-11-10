import React, { Component } from 'react';
import data from '../data/productData.json';
import Post from './Post';
import Header from './Header';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state ={
            products:[],
            cart:[]
        }
    }
    componentDidMount() {
        this.setState({products:data});
    }

    toggleToCart = id =>{
        const cart = this.state.cart;
        let newCart;
        if(cart.includes(id)){
            newCart = cart.filter(curr => curr !== id);
        }
        else{
            newCart = [...cart, id]
        }
        this.setState({cart:newCart});
    }
    
    render() {
        console.log(this.props);
        const cart = this.state.cart;
        return (
            <>
            <Header cart={cart}></Header>
            <div className="feed">
                <h1>This is Feed</h1>
                {
                    this.state.products.map(product=>
                        <Post
                            key={product.id}
                            product={product}
                            toggleToCart ={this.toggleToCart}
                        >{product.name}</Post>
                        )
                }
            </div>
            </>
        );
    }
}

export default Feed;
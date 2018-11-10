import React, { Component } from 'react';
import data from '../data/productData.json';
import Post from './Post';
import Header from './Header';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state ={
            products:[]
        }
    }
    componentDidMount() {
        this.setState({products:data});
    }
    
    render() {
        console.log(this.props);
        const {cart, toggleToCart} = this.props;
        return (
            <div className="feed">
                <h1>This is Feed</h1>
                {
                    this.state.products.map(product=>
                        <Post
                            key={product.id}
                            product={product}
                            liked={cart.includes(product.id)}
                            toggleToCart ={toggleToCart}
                        >{product.name}</Post>
                        )
                }
            </div>
        );
    }
}

export default Feed;
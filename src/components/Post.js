import React, { Component } from 'react';
const imgStyle = {
    width:'300px'
}
class Post extends Component {
    
    render() {
        const {toggleToCart, product, liked} = this.props;
        const tgClass = liked? 'heart-filled': 'heart-empty';
        const heartClass = `sprite icon ${tgClass}`;
        
        return (
            <div className="post">
                <img
                    style={imgStyle} 
                    src={this.props.product.url} 
                    alt=""/>
                <div className="icon-container">
                    <div 
                        className={heartClass}
                        onClick={
                            () =>{
                                toggleToCart(product.id)
                            }
                            }
                        ></div>
                    <div className="sprite icon comment"></div>
                </div>
            </div>
        );
    }
}

export default Post;
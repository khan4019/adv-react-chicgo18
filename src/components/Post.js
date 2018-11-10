import React, { Component } from 'react';
const imgStyle = {
    width:'300px'
}
class Post extends Component {
    constructor(props) {
        super(props);
        this.state={
            liked:false
        }
    }
    
    toggleLiked = () =>{
        this.setState({liked:!this.state.liked})
    }
    
    render() {
        const tgClass = this.state.liked? 'heart-filled': 'heart-empty';
        const heartClass = `sprite icon ${tgClass}`;
        const {toggleToCart, product} = this.props;
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
                                this.toggleLiked();
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
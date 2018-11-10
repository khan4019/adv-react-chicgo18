import React, { Component } from 'react';
const imgStyle = {
    width:'300px'
}
class Post extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="post">
                <img
                    style={imgStyle} 
                    src={this.props.product.url} 
                    alt=""/>
                <div className="icon-container">
                    <div className="sprite icon heart-empty"></div>
                    <div className="sprite icon comment"></div>
                </div>
            </div>
        );
    }
}

export default Post;
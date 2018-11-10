import React from 'react';

const Header = ({cart}) => {
    return (
        <div className="header">
            <div className="icon-container">
                <div className="sprite icon logo-icon"></div>
                <div className="divider"></div>
                <div className="sprite icon logo-name"></div>

                <div className="sprite icon heart-empty"></div>
                <sup>{cart.length}</sup>
                <div className="sprite icon profile"></div>
            </div>
        </div>
    );
};

Header.defaultProps = {
    cart:[]
}

export default Header;
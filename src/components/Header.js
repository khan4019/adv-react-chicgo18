import React from 'react';
import PropTypes from 'prop-types';

const Header = ({cart}) => {
    const tglClass = cart.length ? 'heart-filled': 'heart-empty';
    const heartClass = `sprite icon ${tglClass}`;
    const sizeStyle={
        display:cart.length ? 'inline': 'none',
        color:'#e94949',
        fontWeight:700
    }
    return (
        <div className="header">
            <div className="icon-container">
                <div className="sprite icon logo-icon"></div>
                <div className="divider"></div>
                <div className="sprite icon logo-name"></div>

                <div className={heartClass}></div>
                <sup style={sizeStyle}>{cart.length}</sup>
                <div className="sprite icon profile"></div>
            </div>
        </div>
    );
};

Header.defaultProps = {
    cart:[]
}

Header.propTypes = {
    cart:PropTypes.array
}

export default Header;
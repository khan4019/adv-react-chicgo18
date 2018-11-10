import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
                <Link to="/">
                    <div className="sprite icon logo-icon"></div>
                </Link>
                <div className="divider"></div>
                <div className="sprite icon logo-name"></div>
                <Link to="/cart">
                    <div className={heartClass}></div>
                </Link>
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
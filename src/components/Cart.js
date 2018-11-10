import React from 'react';

const Cart = ({products}) => {
    return (
        <div>
            <h1>This is Cart</h1>
            {
                products.map(product=>
                    <img 
                        style={{width:'300px'}}
                        src={product.url} alt=""/>
                    )
            }
        </div>
    );
};

export default Cart;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    const cart = props.cart;
   console.log(props);
    return (
        
        <div>
            <span className="cart-icon">
          <FontAwesomeIcon icon={faCartPlus} /> {cart.length}

        </span>
       
        </div>
    );
};

export default Cart;
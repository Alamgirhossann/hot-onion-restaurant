import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    const count = props.count;
   
    return (
        
        <div>
            <span className="cart-icon">
          <FontAwesomeIcon icon={faCartPlus} /> {count}
        </span> 
        </div>
    );
};

export default Cart;
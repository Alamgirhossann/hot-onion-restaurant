import React from 'react';
import './Cart.css'


const Cart = (props) => {
    
    const cart = props.cart;  
    console.log(cart);

    let total= 0;
    for (let i = 0; i <cart.length; i++) {
        const product =cart[i];
        total = total + product.price * product.quantity;
    }

    let DeliveryFee =0;
    if(total > 35){
        DeliveryFee = 0;
    }
    else if(total > 0){
        DeliveryFee=2.99;
    }
    else if (total > 15){
        DeliveryFee= 3.99
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + DeliveryFee + Number(tax)).toFixed(2);
    const productPrice = (total).toFixed(2)

    
    return (
        
            <div className="summary">
                    <div className="section-name">
                        <h4> Ordered Item:</h4>
                        <h4>Subtotal: </h4>
                        <h4>tax: </h4>
                        <h4>Delivery Fee: </h4>
                        <h4>Total: </h4>
                    </div>
                    <div className="amount">
                        <h4>{cart.length}</h4>
                        <h4>${productPrice}</h4>
                        <h4>${tax}</h4>
                        <h4>${DeliveryFee}</h4>
                        <h4>${grandTotal}</h4>
                    </div>
            </div>
       
    );
};

export default Cart;
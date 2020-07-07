import React from 'react';


const CartItem = (props) => {
  const cart = props.cart;

  let total = 0;
  for (let i = 0; i < cart; i++) {
    const product = cart[i];
    total = total + product.price * product.quantity;
}
let shipping =0;
if(total > 35){
    shipping = 0;
}
else if(total > 0){
    shipping=5.99;
}
else if (total > 15){
    shipping= 3.99
}
const tax = (total / 10).toFixed(2);
const grandTotal = (total + shipping + Number(tax)).toFixed(2);

      
  
    return (
        <div>
            <p>sub total{cart}</p>
    <p>tax{tax}</p>
    <p>delivery fee{shipping}</p>
    <p>total{grandTotal}</p>
        </div>
    );
};

export default CartItem;
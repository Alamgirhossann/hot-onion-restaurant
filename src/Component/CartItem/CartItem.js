import React, { useState, } from 'react';
import './CartItem.css'
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';



const CartItem = (props) => {
        const cart = props.cart;
        console.log(cart);
        const {name, imageUrl, quantity, price, id} = props.product;  
       
        const [quantityCount, setQuantityCount] = useState(quantity);

    const handleAdd = product => {
        const currentFood = cart.find(food => product === food.id);
        const currentQuantity = quantityCount + 1;
        setQuantityCount(currentQuantity);
        currentFood.quantity = currentQuantity;
        console.log(currentFood);
        addToDatabaseCart(product, currentQuantity);
        getDatabaseCart();
        
    }

    const handleSub = product => {
        if(quantityCount> 0) {
            const currentFood = cart.find(food => product === food.id);
            const currentQuantity = quantityCount - 1;
            setQuantityCount(currentQuantity);
            currentFood.quantity = currentQuantity;
            addToDatabaseCart(product, currentQuantity);
            getDatabaseCart();
        }

        if(quantityCount===0 || quantityCount ===1) {
            removeFromDatabaseCart(product);
        }
    }

    

    return (
        <div>
          {
            <div className="container cartItem-contai ">
                <div class="row ">

                    <div class="col-sm-4">
                        <img style={{height:'120px'}} src={imageUrl} alt=""/>
                    </div>

                    <div class="col-sm-4">
                        <p>{name}</p>
                        <p>${price}</p>
                    </div>

                    <div class="col-sm-4 " id='quantityBtn'>
                        <button onClick={()=>handleSub(id)} id='quantityBtn' >-</button>
                        <span>{quantity}</span>
                        <button onClick={()=> handleAdd(id)} id='quantityBtn' >+</button>
                    </div>
                </div>
            </div>
          }

        </div>
    );
};
export default CartItem;
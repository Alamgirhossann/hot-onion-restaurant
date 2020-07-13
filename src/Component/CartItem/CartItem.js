import React, { useState, } from 'react';
import './CartItem.css'
import Foods from '../../duplicateData/Foods';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';

const CartItem = (props) => {

        const {name, imageUrl, price, id} =props.product;  
       
        const [quantityCount, setQuantityCount]= useState(1);
        
        const handleAdd = clickedId => {
            const currentFood = Foods.find(food => clickedId === food.id);
            const currentQuantity = quantityCount + 1
            setQuantityCount(currentQuantity);
           
            console.log(currentFood);
            addToDatabaseCart(clickedId, currentQuantity);
            getDatabaseCart();
        }
    
        const handleSub = clickedId => {
            if(quantityCount> 0) {
                const currentFood = Foods.find(food => clickedId === food.id);
                const currentQuantity = quantityCount - 1;
                setQuantityCount(currentQuantity);
                
                console.log(currentFood);
                addToDatabaseCart(clickedId, currentQuantity);
                getDatabaseCart();
            }
    
            if(quantityCount===0 || quantityCount ===1) {
                removeFromDatabaseCart(clickedId);
            }
        }


    return (
        <div>
          {
            <div>
                <div>
                    <p>{name}</p>
                    <img style={{height:'100px', width:'100px'}} src={imageUrl} alt=""/>
                    <p>{price}</p>
                </div>
                <div className="product-detail-qty">
                  <button onClick={()=> handleSub(id)} >-</button>
                  <span>{quantityCount}</span>
                  <button onClick={()=> handleAdd(id)}>+</button>
                </div>
            </div>
          }
         
        </div>
    );
};
export default CartItem;
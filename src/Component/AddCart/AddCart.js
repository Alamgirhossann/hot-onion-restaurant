import React from 'react';
import './AddCart.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Foods from '../../duplicateData/Foods';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';


const AddCart = (props) => {
  
    const{id} = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity]= useState(1);

    const handleAddQuantity =()=>{
        setQuantity(quantity+1)
    };

    const handleRemoveQuantity=()=>{
        if(quantity === 0){
            return 0
        }
        setQuantity(quantity-1)
    };
    
        useEffect(() => {
            const tempArray = [];
           Foods.find((x) => {
                return x.items.forEach((j) => tempArray.push(j));
            });
            const targetProduct = tempArray.find(
                (itemID) => itemID.id.toString() === id.toString()
            );
            setProduct(targetProduct);
        }, [id]);
    
        const handleAddToCart =(product)=>{
            const toBeAddedId = product.id;
            const exist = props.cart.find((item)=>item.id === toBeAddedId);
          
           let count = 1;
           let newCart;
           if(exist){
               count = exist.quantity + quantity;
               exist.quantity = count;
               const others = props.cart.filter(pd => pd.id !== toBeAddedId)
               newCart = [...others, exist]
           }
           else{
               product.quantity = quantity;
               newCart = [...props.cart, product]
           }
           props.setCart(newCart);
           addToDatabaseCart(product.id, quantity);
           
       }

        const { name, imageUrl, description, price } = product;

                return (
                    <div className="product-details-page">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-detail-content">
                                        <h1>{name}</h1>
                                        <p>{description}</p>
                                        <div className="product-detail-price">
                                            <h2>
                                                $ <span>{price}</span>
                                            </h2>
                                            <div className="product-detail-qty">
                                                <button onClick={handleRemoveQuantity} >-</button>
                                                <span>{quantity}</span>
                                                <button onClick={handleAddQuantity}>+</button>
                                            </div>
                                        </div>
                                        <div className="add-cart">
                                           <button onClick={()=> handleAddToCart(product)}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product-detail-thumbnail">
                                        <img src={imageUrl} alt="" />
                                    </div>
                                </div>
                           
                            </div>
                            
                        </div>
                    </div>
                );
            };


export default AddCart;
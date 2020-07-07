import React from 'react';
import './AddCart.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Foods from '../../duplicateData/Foods';
import Cart from '../Cart/Cart';


const AddCart = (props) => {
   console.log(props);
    const{id} = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity]= useState(1);
   console.log(quantity);

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
    
        const handleAddToCart =()=>{
            const exist=props.cart.find((item)=>item.id === id);
            console.log(exist);
            if(exist){
               exist.quantity = exist.quantity + quantity
             const index =  props.cart.map(item => item.id).indexOf(id);
                console.log(index);
               props.cart[index]= exist;
              console.log(props.cart);
               
            }
            else{
                props.setCart([...props.cart, {id, quantity}])
            }

        
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
                                           <button onClick={handleAddToCart}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product-detail-thumbnail">
                                        <img src={imageUrl} alt="" />
                                    </div>
                                </div>
                                <Cart cart={props.cart}></Cart>
                            </div>
                            
                        </div>
                    </div>
                );
            };


export default AddCart;
import React from 'react';
import './AddCart.css'
import { useAuth } from '../useAuth/useAuth';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Foods from '../../duplicateData/Foods';
import { auth } from 'firebase';



const AddCart = ({ cart, addToCart, minusItem }) => {
   
    const{id} = useParams();
    const [product, setProduct] = useState([]);
    
        //GET TARGET ITEM
        useEffect(() => {
            const tempArray = [];
           Foods.map((x) => {
                return x.items.forEach((j) => tempArray.push(j));
            });
            const targetProduct = tempArray.find(
                (itemID) => itemID.id.toString() === id.toString()
            );
            setProduct(targetProduct);
        }, [id]);
    
        //  const updateQty = cart.find((x) => x.id.toString() === id.toString());
    
        const { name, imageUrl, description, price } = product;
        const auth = useAuth();
   

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
                                            {/* <div className="product-detail-qty">
                                                <button
                                                    onClick={() => minusItem(product)}
                                                    disabled={!updateQty ? true : false}>
                                                    -
                                                </button>
                                                <span>
                                                    {updateQty && updateQty.quantity ? updateQty.quantity : 0}
                                                </span>
                                                <button onClick={() => addToCart(product)}>+</button>
                                            </div> */}
                                        </div>
                                        <div className="add-cart">
                                            { auth.user ?
                                                <button><a href="/deliveryDetail">Add to Cart</a></button>
                                                :<button><a href="/login">Add to Cart</a></button>
                                            }
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
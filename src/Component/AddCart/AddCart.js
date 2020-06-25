import React from 'react';
import './AddCart.css'
import { useAuth } from '../useAuth/useAuth';
import { useParams } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import foods from '../../duplicateData/foods';


const AddCart = () => {
    const{productKey} = useParams();
    const product = foods.find(pd => pd.key === productKey);
    const auth = useAuth();
   

    return (
        <div>
            <div>
                
                <p>{product.name}</p>
                <p>{product.id}</p>
                <p>{product.category}</p>
                <p>{product.made}</p>
                <p>{product.price}</p>
                    { auth.user ?
                        <button><a href="deliveryDetail">Add Cart</a></button>
                        :<button ><a href="login">Add Cart</a></button>

                    }
            </div>
            <div>

            </div>
                
                   
               
          
        </div>
    );
};

export default AddCart;
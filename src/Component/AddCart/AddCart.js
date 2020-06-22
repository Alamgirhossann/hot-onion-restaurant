import React from 'react';
import './AddCart.css'
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { auth } from 'firebase';
import { useAuth } from '../useAuth/useAuth';
const AddCart = () => {
    const auth = useAuth();
    return (
        <div>
            <h5>this is cart</h5>
                
                    { auth.user ?
                        <button><a href="deliveryDetail">Add Cart</a></button>
                        :<button ><a href="login">Add Cart</a></button>

                    }
               
          
        </div>
    );
};

export default AddCart;
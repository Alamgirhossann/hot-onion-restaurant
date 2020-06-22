import React from 'react';
import './DeliveryDetail.css';
import { Link } from 'react-router-dom';

const DeliveryDetail = () => {
    return (
        
            <div className='main-container'>
                <div className='delivery-container'>
                <h4>Edit Delivery Detail</h4>
                <div className='input-container'>
                    <input className='inputBox' type="text" placeholder=''/>
                    <input className='inputBox' type="text"placeholder=''/>
                    <input className='inputBox' type="text"placeholder=''/>
                    <input className='inputBox' type="text"placeholder=''/>
                    <input className='inputBox' type="text"placeholder=''/>
                    <button className='inputBox'>Save and Continue</button>
                </div>
                <div className='review-Cart'>
                    <h4>From gulshan 102 rod</h4>
                    <Link to='/map'>
                        <button>Place Order</button>
                    </Link>
                </div>
            </div>
            </div>
       
    );
};

export default DeliveryDetail;
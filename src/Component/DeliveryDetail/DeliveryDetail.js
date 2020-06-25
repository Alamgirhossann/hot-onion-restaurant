import React from 'react';
import './DeliveryDetail.css';
import { Link } from 'react-router-dom';

const DeliveryDetail = () => {
    return (
        
        
            <div className='delivery-container'>
                
                <div className='input-container'>
                    <h4>Edit Delivery Detail</h4>
                    <input className='inputBox' type="text" placeholder='Deliver to door'/>
                    <input className='inputBox' type="text"placeholder='107 Rd No 8'/>
                    <input className='inputBox' type="text"placeholder='Flat,suite or floor'/>
                    <input className='inputBox' type="text"placeholder='Business Name'/>
                    <input className='inputBox' type="text"placeholder='Add delivery instructor'/>
                    <button className='inputBox delivery-btn'>Save and Continue</button>
                </div>
                <div className='review-Cart'>
                    <h4>From gulshan 102 road</h4>
                    <Link to='/map'>
                        <button className='delivery-btn'>Place Order</button>
                    </Link>
                </div>
            </div>
        
       
    );
};

export default DeliveryDetail;
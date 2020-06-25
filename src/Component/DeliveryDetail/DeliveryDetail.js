import React from 'react';
import './DeliveryDetail.css';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const DeliveryDetail = () => {
    return (
        
        
            <div className='delivery-container'>
                
                <div className='input-container'>
                    <h4>Edit Delivery Detail</h4>
                    <input className='inputBox' type="text" name='Name' placeholder='Deliver to door'/>
                    <input className='inputBox' type="text" name='roadNo' placeholder='107 Rd No 8'/>
                    <input className='inputBox' type="text" name='houseName/No' placeholder='Flat,suite or floor'/>
                    <input className='inputBox' type="text" name='city' placeholder='City'/>
                    <input className='inputBox' type="text" name='instructor' placeholder='Add delivery instructor'/>
                    <input className='inputBox delivery-btn' type='submit' value='Save and Continue'/>
                </div>
                <div className='review-Cart'>
                    <h4>From gulshan 102 road</h4>
                    <Cart></Cart>
                    <Link to='/map'>
                        <button className='delivery-btn'>Place Order</button>
                    </Link>
                </div>
            </div>
        
       
    );
};

export default DeliveryDetail;
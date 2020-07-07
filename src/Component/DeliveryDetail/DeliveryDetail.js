import React from 'react';
import './DeliveryDetail.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CartItem from '../CartItem/CartItem';

const DeliveryDetail = () => {
    const [address, setAddress] = useState({
        name: "",
        roadNo: "",
        houseName: "",
		city: "",
		instructor: ""
		
	});
	const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
		};
	

	const handleSubmit = (e) => {
        e.preventDefault();
        console.log('i am saved');
	};
    return (
        
            <div className='delivery-container'>
                
                <div className='input-container'>
                    <h4>Edit Delivery Detail</h4>
                   <form onSubmit={handleSubmit}>
                    <input className='inputBox' type="text" name='Name' onChange={handleChange} placeholder='Deliver to door'/>
                    <input className='inputBox' type="text" name='roadNo' onChange={handleChange} placeholder='107 Rd No 8'/>
                    <input className='inputBox' type="text" name='houseName/No' onChange={handleChange} placeholder='Flat,suite or floor'/>
                    <input className='inputBox' type="text" name='city' onChange={handleChange} placeholder='City'/>
                    <input className='inputBox' type="text" name='instructor' onChange={handleChange} placeholder='Add delivery instructor'/>
                    <input className='inputBox delivery-btn' type='submit' value='Save and Continue'/>
                   </form>
                </div>
                <div className='review-Cart'>
                    <h4>From gulshan 102 road</h4>
                    <CartItem></CartItem>
                    <Link to='/map'>
                        <button className='delivery-btn'>Place Order</button>
                    </Link>
                </div>
            </div>
        
       
    );
};

export default DeliveryDetail;
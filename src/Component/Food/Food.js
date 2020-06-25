import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css';
import { useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import foods from '../../duplicateData/foods';

const Food = () => {
    const first6 = foods.slice(0, 6);
    const [product, setProduct] = useState(first6);
    const [cart, setCart] = useState([]);

        
        const handleAddProduct = (product) => {
        console.log("product added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
     
    return (
        <div className='link'>
            <div >
                <Link className='foodLink' to='/breakfast'>Breakfast</Link>
                <Link className='foodLink' to='/lunch'>Lunch</Link>
                <Link className='foodLink' to='/dinner'>Dinner</Link>
            </div>
            <div>
                {
                    product.map(pd => <Breakfast 
                        product = {pd}
                        handleAddProduct = {handleAddProduct}
                        ></Breakfast>)
                }
            </div>
        </div>
    );
};

export default Food;
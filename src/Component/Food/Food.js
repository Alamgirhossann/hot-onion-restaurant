import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css';
import duplicateData from '../../duplicateData/foods';
import { useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
const Food = () => {
    const first6 = duplicateData.slice(0, 6);
    const [product, setProduct] = useState(first6);
    return (
        <div className='link'>
            <div >
                <Link className='foodLink' to='/breakfast'>Breakfast</Link>
                <Link className='foodLink' to='/lunch'>Lunch</Link>
                <Link className='foodLink' to='/dinner'>Dinner</Link>
            </div>
            <div>
                {
                    product.map(pd => <Breakfast product={pd}></Breakfast>)
                }
            </div>
        </div>
    );
};

export default Food;
import React from 'react';
import duplicateData from '../duplicateData/Breakfast';
import { useState } from 'react';
import BreakfastProduct from '../BreakfastProduct/BreakfastProduct';

const BreakfastShop = () => {
    const first6 = duplicateData.slice(0,6);
    const [products, setProducts] = useState(first6);
    return (
        <div>
            <h1>this is products</h1>
            <h3>{products.length}</h3>
           
                {
                    products.map(pd => <BreakfastProduct products={pd}></BreakfastProduct> )
                }
            
        </div>
    );
};

export default BreakfastShop;
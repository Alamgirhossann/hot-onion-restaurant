import React from 'react';

const BreakfastProduct = (props) => {
    console.log(props.products);
    return (
        <div>
            <div>
                <img src={props.products.image} alt=""/>
            </div>
            <div>
                <h4>{props.products.name}</h4>
            </div>
   
           
        </div>
    );
};

export default BreakfastProduct;
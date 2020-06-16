import React from 'react';

const BreakfastProduct = (props) => {
    const {name , price, image, category} = props.products;
    return (
        <div>
            <div>
                {image && <img src={require(`../Image/Breakfast/${image}`)} alt=""/>}
                <h4>{name}</h4>
                    
            </div>
            <div>
                <h4>{price}</h4>
            </div>
   
           
        </div>
    );
};

export default BreakfastProduct;
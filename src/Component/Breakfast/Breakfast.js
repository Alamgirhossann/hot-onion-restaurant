import React from 'react';
import './Breakfast.css'
import { Link } from 'react-router-dom';
const Breakfast = (props) => {
    const {id, name , price, image, category, make} = props.product;
    return (
        <div className='breakfastItem'>
            <div >
               <Link to='/addCart'>
                    <img className='image' src={require(`../../Image/Breakfast/breakfast2.png`)} alt=""/>
                    <h4>{name}</h4>
                    <p>{price}</p>
               </Link>
            </div>
        </div>
    );
};

export default Breakfast;
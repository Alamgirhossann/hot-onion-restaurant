import React from 'react';
import './Breakfast.css'
import { Link } from 'react-router-dom';


const Breakfast = (props) => {
    const { name , price, key } = props.product;

    return (
        <div className='breakfastItem'>
            <div >
               
                    <img className='image' src={require(`../../Image/Breakfast/breakfast2.png`)} alt=""/>
                    <h4>{name}</h4>
                    <p>{price}</p>
                    <Link to='/addCart'><button>Detail</button></Link>
              
            </div>
        </div>
    );
};

export default Breakfast;
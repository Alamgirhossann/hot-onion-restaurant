import React from 'react';
import './Products.css'
import { Link } from 'react-router-dom';


const Products = (props) => {
    console.log(props.product);
    const { id, name, imageUrl, price, title } = props.product;

	return (
		<div className="product">
			<div className="product-thumbnail">
				<Link to={`/addCart/${id}`}>
					<img src={imageUrl} alt="" />
				</Link>
				
			</div>
			
				<div className="product-info">
					<h5 className="name"><Link to={`/addCart/${id}`}>{name}</Link></h5>
					<p className="title">{title}</p>
					<h3 className="price">$ {price}</h3>
				</div>
			
		</div>
	);
};


export default Products;
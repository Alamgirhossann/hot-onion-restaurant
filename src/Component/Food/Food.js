import React from 'react';
import './Food.css';
import { useState } from 'react';
import Foods from '../../duplicateData/Foods';
import { useEffect } from 'react';
import Products from '../Products/Products';
import { Link } from 'react-router-dom';

const Food = () => {
	
    const [data , setData] = useState([]);
    const [activeEle, setActiveEle]= useState("breakfast");

    const catHandle = (categoryName) => {
        const getFilterData = Foods.find((cat) => cat.title === categoryName);
        setData([...getFilterData.items]);
        setActiveEle(categoryName);

    };

    useEffect(() => {
		setData([...Foods[0].items]);
	}, []);
    
     
    return (
		<div className="products-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="products-cat-title">
							<ul>
								<li onClick={() => catHandle("breakfast")}>
									<span
										className={`${activeEle === "breakfast" ? "active" : " "}`}>
										Breakfast
									</span>
								</li>
								<li onClick={() => catHandle("lunch")}>
									<span className={`${activeEle === "lunch" ? "active" : " "}`}>
										Lunch
									</span>
								</li>
								<li onClick={() => catHandle("dinner")}>
									<span
										className={`${activeEle === "dinner" ? "active" : " "}`}>
										Dinner
									</span>
								</li>
							</ul>
						</div>
						<div className="products">
							<div className="row">
                                {
                                data.map(pd => 
								<div className="col-md-4">
                                    <Products product = {pd}/>
                                </div>
                                )}
							</div>
						</div>
						<div className="checkout-btn-box">
							<Link
								to="/deliveryDetail">
								<span>Checkout Your Food</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Food;
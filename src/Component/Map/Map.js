import React from 'react';
import map from '../../Image/map.jpg';
import bike from '../../Image/Group 1151.png';
import rider from '../../Image/Group 1152.png';
import './Map.css'

const Map = () => {
    return (
        <div className='main-container'>
            <div className='map-container'>
                <img src={map} alt=""/>
            </div>
            <div className='info-container'>
                <img src={bike} alt=""/>
                <div>
                    <h5>Your Location</h5>
                    <p>107 Rd No 8</p>
                    <br/>
                    <h5>Shop Address</h5>
                    <p>Gulsha Plazza Restaura GPR</p>
                    
                    <div className='rider-info'>
                       <div className='rider-img'>
                        <img src={rider} alt=""/>
                       </div>
                        <div className='rider-name'>
                        <h5>Alamgir</h5>
                        <p>Your Rider</p>
                        </div>
                        
                    </div>
                    <button id='contact-btn'>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Map;
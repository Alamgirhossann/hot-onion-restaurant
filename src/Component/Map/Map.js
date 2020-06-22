import React from 'react';
import map from '../../Image/map.jpg';
import bike from '../../Image/Group 1151.png';
const Map = () => {
    return (
        <div>
            <div>
                <img src={map} alt=""/>
            </div>
            <div>
                <img src={bike} alt=""/>
                <button>Contact</button>
            </div>
        </div>
    );
};

export default Map;
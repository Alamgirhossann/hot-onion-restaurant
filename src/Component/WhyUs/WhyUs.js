import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from  '../../Image/adult-blur-blurred-background-687824.png';
import image1 from  '../../Image/chef-cook-food-33614.png';
import image2 from '../../Image/architecture-building-city-2047397.png';
import icon from '../../ICON/Group 204.png';
import icon1 from '../../ICON/Group 1133.png';
import icon2 from '../../ICON/Group 245.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const WhyUs = () => {
    return (
       <div>
           <div>
                <h1>Why you choose us</h1>
                <p>Barton waited twenty always repair in within we do. <br/> An delighted offending curiosity is at dashwood. <br/> Boy prosperous increasing surrounded.</p>
           </div>
           <div class="card-group">
                <div class="card">
                    <img src={image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title"> <img src={icon} alt=""/> Fast Delivery</h5>
                    <p class="card-text">Keep your system in sync with automated web hook based notifications each time link is paid and how we dream about out future.</p>
                    <br/>
                    <a href="/aboutUs">See more <FontAwesomeIcon icon= {faArrowCircleRight}/></a>
                    </div>
                </div>
                <div class="card">
                    <img src={image1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title"><img src={icon1} alt=""/> A Good Auto Responder</h5>
                    <p class="card-text">Keep your system in sync with automated web hook based notifications each time link is paid and how we dream about out future.</p>
                    <br/>
                    <a href="/aboutUs">See more <FontAwesomeIcon icon= {faArrowCircleRight}/></a>
                    </div>
                </div>
            <div class="card">
                    <img src={image2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title"><img src={icon2} alt=""/> Home Delivery</h5>
                    <p class="card-text">Keep your system in sync with automated web hook based notifications each time link is paid and how we dream about out future.</p>
                    <br/>
                    <a href="/aboutUs">See more <FontAwesomeIcon icon= {faArrowCircleRight}/></a>
                   
                    </div>
               
        </div>
        </div>
       </div>
    );
};

export default WhyUs;
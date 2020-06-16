import React from 'react';
import logo from '../logo/logo2.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div class="container">
                <div class="row ">
                    <div class="col-sm-6 logo">
                        <a href="#"><img src={logo} alt=""/></a>
                    </div>
                    <div class="col-sm-3 footerTopContent">
                        <p>About Online food</p>
                        <p>Read Our Blog</p>
                        <p>Sign Up to deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div class="col-sm-3 footerTopContent">
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurant near me</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
           <div className="container">
           <div class="row">
                    <div class="col-sm-6">
                        <p>copyright 2020 online food</p>
                    </div>
                    <div class="col-sm-2">
                        <p>Privacy Policy</p>
                    </div>
                    <div class="col-sm-2">
                        <p>Terms of Use</p>
                    </div>
                    <div class="col-sm-2">
                        <p>pricing</p>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Footer;
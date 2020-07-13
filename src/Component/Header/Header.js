import React from 'react';
import logo from '../../logo/logo2.png';
import './Header.css';
import { useAuth } from '../useAuth/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    const cart = props.cart;
    const auth = useAuth();
    return (
       
        <div className=' header fixed-top'>
                <div className="row w-100 header2">
                    <div className="col-sm-9  ">
                        <a href="/home"><img className='logo' src={logo} alt=""/></a>
                    </div>
                    <div className="col-sm-3 signBtn">
                        <FontAwesomeIcon icon={faCartPlus} />  
                        <span style={{color:'red', fontWeight:'bold'}} > 
                         {cart.length}
                        </span>
                            {
                                auth.user ?    <a  href = '/Login'>Logout</a>
                                : <a href = '/Login'>Login</a>
                            }
                        <a id='signUp-btn' href="/signUp">SignUp</a>
                    </div>
                </div>
                
            </div>
       
    );
};

export default Header;
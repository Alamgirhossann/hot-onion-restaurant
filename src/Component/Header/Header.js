import React from 'react';
import logo from '../../logo/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import { useAuth } from '../useAuth/useAuth';

const Header = () => {
    
    const auth = useAuth();
    return (
       
        <div className=' header'>
                <div className="row w-100 header2">
                    <div className="col-sm-9  ">
                        <a href="/home"><img className='logo' src={logo} alt=""/></a>
                    </div>
                    <div className="col-sm-3 signBtn">
                        <button><FontAwesomeIcon icon={faCartPlus}/></button>
                    
                            {
                                auth.user ?    <a href = '/Login'>Logout</a>
                                : <a href = '/Login'>Login</a>
                            }
                        <a href="/signUp">Sign up</a>
                    </div>
                </div>
                
            </div>
       
    );
};

export default Header;
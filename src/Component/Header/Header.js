import React from 'react';
import logo from '../../logo/logo2.png';
import './Header.css';
import { useAuth } from '../useAuth/useAuth';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Header = () => {
    const [count, setCount] =useState(0);
    
    const auth = useAuth();
    return (
       
        <div className=' header fixed-top'>
                <div className="row w-100 header2">
                    <div className="col-sm-9  ">
                        <a href="/home"><img className='logo' src={logo} alt=""/></a>
                    </div>
                    <div className="col-sm-3 signBtn">
                            <div>
                                <Cart count={count}></Cart>
                            </div>
                    
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
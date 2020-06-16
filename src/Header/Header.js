import React from 'react';
import logo from '../logo/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import firebaseConfig from '../firebaseConfig';
import "firebase/auth";
import * as firebase from "firebase/app";
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';





const Header = () => {
    return (
        <div>
            <div className=' header'>
                <div className="row w-100 header2">
                    <div className="col-sm-6 logo ">
                        <a href="#"><img src={logo} alt=""/></a>
                    </div>
                    <div className="col-sm-6 signBtn">
                        <button><FontAwesomeIcon icon={faCartArrowDown}/></button>
                    
                     <a href="/login">Sign In</a>
                   
                        
                        <button>Sign Up</button>
                    </div>
                </div>
                
            </div>
                <div className='header-bg'>
                   <div className='search-opt'>
                   <h1>Best food waiting for your belly</h1>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                   </div>
                </div>
        </div>
    );
};

export default Header;
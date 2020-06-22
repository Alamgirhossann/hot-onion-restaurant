import React from 'react';
import './Login.css'
import Auth from '../useAuth/useAuth';


const Login = () => {
    const auth = Auth();
    const handleSigIn = () =>{
        auth.signInWithGoogle()
        .then(res =>{
            window.location.pathname = '/deliveryDetail';
        })
    } 
    const handleSignOut = ()=>{
        auth.signOut()
        .then(res=>{
            window.location.pathname = '/';
        })
    }
    return (
        <div className='login'>
            <h2 className='login-header'>Log In to Red Onion Restaurant</h2>
            <div className='loginBtn'>
                {  
                    auth.user ? <button onClick={handleSignOut}>Logout</button> :
                    <button onClick={handleSigIn}>Login With Google</button>
                }
            </div>
           <br/>
            <p className='crtAccountBtn'><a  href="/signUp">Create an account</a></p>
           
        </div>
    );
};

export default Login;
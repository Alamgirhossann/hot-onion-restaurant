import React from 'react';
import './LogIn.css'
import firebaseConfig from '../firebaseConfig';
import "firebase/auth";
import * as firebase from "firebase/app";


firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

const signIn = ()=>{
    firebase.auth().signInWithEmailAndPassword(provider)
    .then(result=> {
       window.location.pathname = '/login'
      }).catch(error=> {
       
        console.log(error.code); 
        console.log(error.message); 
      });
}
const LogIn = () => {
    return (
        <div className='login'>
            <h2 className='login-header'>Log In to Red Onion Restaurant</h2>
           <form className='form-organize'>
                <input type="text" name='email' placeholder='Your Email' />
                <br/>
                <input type="password" name='password' placeholder='Your password' />
                <br/>
                <button onClick={signIn} type='submit'>SignIn</button>
                
           </form>
           <br/>
           <p className='crt-account'>Create an account</p>
           
        </div>
    );
};

export default LogIn;
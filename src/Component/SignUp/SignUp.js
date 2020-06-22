import React from 'react';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className='signUp'>
            <h2>Sign Up for Red Onion Restaurant</h2>
            <form className='form-organize'>
                <input type="text" name='name' placeholder='Your Name' required='Name is required' />
                <br/>
                <input type="text" name='email' placeholder='Your Email' required='Email is required' />
                <br/>
                <input type="password" name='password' placeholder='Your password' required='Password is required'/>
                <br/>
                <input type="password" name='confirm password' placeholder='Confirm your password' required='Confirm password is required' />
                <br/>
                <button type='submit'>SignUp</button>
            </form>
            <br/>
            <p className='haveAccount'><a href='/login'>Already have an account</a></p>
        </div>
    );
};

export default SignUp;
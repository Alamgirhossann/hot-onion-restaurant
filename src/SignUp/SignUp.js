import React from 'react';

const SignUp = () => {
    return (
        <div className='login'>
            <h2>Sign Up for Red Onion Restaurant</h2>
            <form className='form-organize'>
                <input type="text" name='name' placeholder='Your Name'/>
                <br/>
                <input type="text" name='email' placeholder='Your Email' />
                <br/>
                <input type="password" name='password' placeholder='Your password' />
                <br/>
                <input type="password" name='confirm password' placeholder='Confirm your password' />
                <br/>
                <button type='submit'>SignUp</button>
            </form>
            <br/>
            <p>Already have an account</p>
        </div>
    );
};

export default SignUp;
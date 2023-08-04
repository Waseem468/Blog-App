import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landing.css';
import LoginForm from './LoginForm';

const LoginPage = () => {
    return (
        <div className='Landing-container'>
            <div className='left-section'>
                <h1>Discover the Power of Words: Express Yourself with Our Blog App!</h1>
                <Link to={'/register'}>
                    <button className='userRegister'>User Register</button>
                </Link>

            </div>
            <div className='right-section'>
                <LoginForm />
            </div>     
        </div>
    )
}

export default LoginPage

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css"


const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = (event) => {
        navigate('/login')
    }
    const handleRegister=event=>{
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary mb-4'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' /> 
                <input type="text" name="email" id="" placeholder='Email' required/> 
                <input type="text" name="password" id="" placeholder='Password' required />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account ? <Link to='/login' onClick={navigateLogin}  className='text-danger pe-auto text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;
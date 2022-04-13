import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {

    const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const navigateLogin = (event) => {
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary mb-4'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="text" name="email" id="" placeholder='Email' required />
                <input type="text" name="password" id="" placeholder='Password' required />
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account ? <Link to='/login' onClick={navigateLogin} className='text-danger pe-auto text-decoration-none'>Please Login</Link></p>
            <SocialLogin/>
        </div>
    );
};

export default Register;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css"
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
// import { async } from '@firebase/util';


const Register = () => {

    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword,loading, user, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const navigateLogin = (event) => {
        navigate('/login')
    }
    if(loading || updating){
        return <Loading/>
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree=event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home')
    }
    return (
        <div className='register-form'>
            <h2 className='text-center text-primary mb-4'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="text" name="email" id="" placeholder='Email' required />
                <input type="text" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2' : "ps-2 text-danger"} htmlFor="terms">Accept Genius Car Terms and Condition</label> */}
                <label className={`ps-2 ${agree ? '' : "text-danger"}`} htmlFor="terms">Accept Genius Car Terms and Condition</label>
                <input
                    disabled={!agree}
                    className='btn btn-primary mt-2 w-50 mx-auto'
                    type="submit"
                    value="Register" />
            </form>
            <p className='text-center'>Already have an account ? <Link to='/login' onClick={navigateLogin} className='text-primary pe-auto text-decoration-none'>Please Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Register;
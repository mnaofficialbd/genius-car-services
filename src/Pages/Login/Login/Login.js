import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        sending,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading />
    }

    if (user) {
        navigate(from, { replace: true })
    }
    if (error) { errorElement = <p className='text-danger'>Error: {error?.message}</p> }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = (event) => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Send Email')
        }
        else {
            toast('Please enter your email address')
        }
    }

    return (
        <div className='container w-50 mx-auto border m-2 p-2 rounded'>
            <PageTitle title="Login"></PageTitle>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mb-3 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='text-center'>New to Genius Car ? <Link to='/register' onClick={navigateRegister} className='text-primary pe-auto text-decoration-none'>Please Register</Link></p>
            <p className='text-center'>Forget Password ? <button onClick={resetPassword} className='text-primary pe-auto text-decoration-none btn btn-link'>Reset Password</button></p>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;
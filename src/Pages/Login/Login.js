import React, { useContext, useReducer, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { ButtonGroup, Button, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import toast from 'react-hot-toast';
import './Login.css';


const Login = () => {
    const { user, setLoading, signIn, googleProviderLogin, githubProviderLogin } = useContext(AuthContext);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log("User Data : ", user);
                form.reset();
                setError('');
                // if (user.emailVerified) {
                navigate(from, { replace: true });
                // } else {
                //     toast.error('Your email is not verified.');
                // }
            })
            .catch(error => {
                setError(error.message)
                console.log("Error : ", error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const userData = result.user;
                setError('');
                navigate(from, { replace: true });
                console.log("Google User Data : ", userData);
            })
            .catch(error => console.error("Google Provider Error : ", error))
    }

    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const userData = result.user;
                setError('');
                navigate(from, { replace: true });
                console.log("Github User Data : ", userData);
            })
            .catch(error => console.error("Github Provider Error : ", error))
    }

    return (
        <div className='container p-5'>

            <h3 className=' text-center fw-bold text-primary'>Login Form</h3>

            <Form onSubmit={handleOnSubmit}>
                <Form.Text className=" text-danger text-center ">
                    {error}
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button className="" variant="primary " type="submit">
                    Login
                </Button>
                <p className=' text-primary'>If you are not yet registered <Link to="/register" >go to Register</Link></p>
            </Form>

            <div className=' mt-2 text-center'>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} variant='outline-primary' className=' mb-1'><FaGoogle /> Login With Google</Button>
                    <Button onClick={handleGithubSignIn} variant='outline-secondary'><FaGithub /> Login With Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Login;
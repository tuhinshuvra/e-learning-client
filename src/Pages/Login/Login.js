import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../Authentication/AuthProvider';
import './Login.css';

const Login = () => {
    const { user, googleProviderLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const userData = result.user;
                console.log("Google User Data:", userData);
            })
            .catch(error => {
                console.error("Google Provider Error:", error);
            })

    }
    return (
        <div>
            <h5>This is {user?.displayName}</h5>
            <h2>This is login page</h2>
            <Button onClick={handleGoogleSignIn}>Google SignIn</Button> <br />
            <Button className=' mt-1'>Github SignIn</Button> <br />
            <Button className=' mt-1'>SignIn With Email and Password</Button>

        </div>
    );
};

export default Login; <h2>This is login page</h2>
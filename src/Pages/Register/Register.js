import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import toast from 'react-hot-toast';
import './Register.css';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;

        createUser(email, password)
            .then(result => {
                console.log("User Data:", result.user);
                setError('');
                form.reset();
                // handleUpdateUserProfile(name, photoURL);
                // handleEmailVerification();
                // toast.success('Please verify your email address.');
            })
            .catch(error => {
                console.log("Error : ", error)
                setError(error.message)
            })

    }

    const handleTermsAndCondition = (event) => {
        setAccepted(event.target.checked);
    }

    // const handleUpdateUserProfile = (name, photoURL) => {
    //     const profile = {
    //         displayName: name,
    //         photoURL: photoURL
    //     }
    //     updateUserProfile(profile)
    //         .then(() => { })
    //         .catch(error => console.log("Error:", error))
    // }

    // const handleEmailVerification = () => {
    //     verifyEmail()
    //         .then(() => { })
    //         .catch(error => console.log(error))

    // }

    return (
        <div className='container p-5'>
            <h3 className=' text-center fw-bold text-primary'>Registration Form</h3>

            <Form onSubmit={handleOnSubmit} >
                <Form.Text className="text-danger text-center">
                    {error}
                </Form.Text>

                <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter full name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhotoUrl">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name='photoUrl' type="text" placeholder="Enter Your Photo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirm' type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type='checkbox'
                        onClick={handleTermsAndCondition}
                        label={<>Accept <Link to="/terms"> Terms and Conditions</Link> </>}
                    ></Form.Check>
                </Form.Group>

                <Button className="" variant="primary " type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div >
    );
};

export default Register;
import React, { useContext, useRef, useState } from 'react';
import './UserProfile.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Authentication/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = event => {
        setName(event.target.value);
    }


    return (
        <div>
            <h2 className='text-center fw-bold text-secondary'>{user.displayName} Profile</h2>
            <Form onSubmit={handleSubmit} >
                <Form.Text className=" text-danger text-center ">
                </Form.Text>

                <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={handleNameChange} defaultValue={name} name='name' type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} name='email' type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhotoUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} name='phtoUrl' type="text" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Button className="" variant="primary " type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UserProfile;
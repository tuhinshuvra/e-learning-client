import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import './CheckOut.css';

const CheckOut = () => {
    const { user, logOut } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const { selected } = useContext(AuthContext);
    console.log("Selected : ", selected);

    useEffect(() => {
        fetch('https://brain-food-server.vercel.app/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])

    let courseName;

    if (selected == '01') {
        courseName = 'JavaScript'
    }
    else if (selected == '02') {
        courseName = 'ReactJS'
    }
    else if (selected == '03') {
        courseName = 'MongDB'
    }
    else if (selected == '04') {
        courseName = 'Java'
    }
    else if (selected == '05') {
        courseName = 'MySQL'
    }
    else if (selected == '06') {
        courseName = 'Python'
    }
    else if (selected == '07') {
        courseName = 'PHP'
    }
    else if (selected == '08') {
        courseName = 'Go'
    }




    return (
        <div>
            <Card className=' m-lg-5 p-lg-3 mt-sm-3 ' >
                <CardHeader className=' text-center fw-bold text-success mt-2'>
                    <h3 >Mr/Ms. {user?.displayName} Welcome to checkout</h3>
                </CardHeader>
                <Card.Text className=' text-center fw-bold mt-lg-3'>
                    Yours Selected Course ID - {selected}, Name : {courseName} Learning
                </Card.Text>
                <Link to="/"> <button className='btn btn-success'>Check Out</button> </Link>
            </Card>
        </div>
    );
};

export default CheckOut;
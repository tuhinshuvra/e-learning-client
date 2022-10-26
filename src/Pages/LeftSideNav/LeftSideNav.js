import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://brain-food-server.vercel.app/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h5 className='fw-bold text-lg-center mt-lg-5 mb-lg-3'>All Courses</h5>
            {courses.map(course =>
                <p key={course.id}>
                    <Link className='text-decoration-none fw-bold shadow-lg ' to={`/courses/${course.id}`} >{course.name} Learning </Link>
                </p>
            )}
        </div>
    );
};

export default LeftSideNav;
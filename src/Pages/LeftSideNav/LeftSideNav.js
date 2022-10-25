import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h5>All Courses</h5>
            {courses.map(course =>
                <p key={course.id}>
                    <Link to={`/courses/${course.id}`} >{course.name}</Link>
                </p>
            )}
        </div>
    );
};

export default LeftSideNav;
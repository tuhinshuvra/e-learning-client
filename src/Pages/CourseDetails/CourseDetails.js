import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';

const CourseDetails = () => {
    const { selected, selectedCourse } = useContext(AuthContext);
    const course = useLoaderData();
    const { id, name, img, details, rating } = course;

    const handleSelectdCourse = () => {
        selectedCourse(id);
    }

    return (
        <div>
            <h2 className=' mt-4 fw-bolder text-center'>{name} Course Details</h2>
            <img src={img} alt="" />
            <p>{details}</p>
            <Link onClick={handleSelectdCourse} className=' btn btn-info ' to={`/checkout`} >Get premium access </Link>
        </div>
    );
};

export default CourseDetails;
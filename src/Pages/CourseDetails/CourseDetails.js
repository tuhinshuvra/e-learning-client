import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, name, img, details, rating } = course;
    return (
        <div>
            <h2>This course details {name}</h2>
            <img src={img} alt="" />
            <p>{details}</p>
        </div>
    );
};

export default CourseDetails;
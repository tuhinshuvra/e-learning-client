import React from 'react';
import './CourseSummary.css';

const CourseSummary = ({ course }) => {
    const { id, name, img, details, rating } = course;
    return (
        <div>
            <h2>Course Summary</h2>
            <h5>{name}</h5>
            <img src={img} alt="" />
            <p> {details}</p>
        </div>
    );
};

export default CourseSummary;
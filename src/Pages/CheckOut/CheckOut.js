import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import './CheckOut.css';

const CheckOut = () => {
    const [courses, setCourses] = useState([]);
    const { selected } = useContext(AuthContext);
    // console.log("Selected : ", selected);

    useEffect(() => {
        fetch('https://brain-food-server.vercel.app/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])

    const selectedCourse = courses.find(crouse => crouse.id === selected)
    // const { details } = selectedCourse;
    console.log("selectedCourse : ", selectedCourse);

    return (
        <div>
            <h2>This is checkout page </h2>
            <p>Yours Selected Course ID - {selected}</p>
            {/* <p>{details}</p> */}
        </div>
    );
};

export default CheckOut;
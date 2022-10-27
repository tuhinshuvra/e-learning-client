import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Authentication/AuthProvider';
import './CheckOut.css';

const CheckOut = () => {
    const [courses, setCourses] = useState([]);
    const { selected } = useContext(AuthContext);
    console.log("Selected : ", selected);

    useEffect(() => {
        fetch('https://brain-food-server.vercel.app/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])





    return (
        <div>
            <h2>This is checkout page </h2>
            <p>Yours Selected Course ID - {selected}</p>
            {/* <p>{name}</p> */}
        </div>
    );
};

export default CheckOut;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Courses/CourseSummary';
import './Home.css';

const Home = () => {
    const allCourse = useLoaderData();
    console.log("All Course : ", allCourse);
    return (
        <div>
            <h2 className=' display-6 text-center fw-bold mt-3 mb-3 '>All Brain Boost Courses</h2>
            <div className="all-course">
                {allCourse.map(course =>
                    <CourseSummary
                        key={course.id}
                        course={course}
                    ></CourseSummary>
                )}
            </div>
        </div>
    );
};

export default Home;
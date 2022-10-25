import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../Courses/CourseSummary';
import './Home.css';

const Home = () => {
    const allCourse = useLoaderData();
    console.log("All Course : ", allCourse);
    return (
        <div>
            <h2>Brain Food Home {allCourse.length}</h2>
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
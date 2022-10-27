import React, { useContext } from 'react';
import Pdf from "react-to-pdf";
import { Button, Card, CardImg } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import './CourseDetails.css';

const ref = React.createRef();

const CourseDetails = () => {
    const { selected, selectedCourse } = useContext(AuthContext);
    const course = useLoaderData();
    const { id, name, img, details, rating } = course;

    const handleSelectdCourse = () => {
        selectedCourse(id);
    }

    return (
        <div>
            <Card ref={ref} className=' mt-3'>
                <Card.Header className=' d-flex justify-content-between'>
                    <Card.Title className=' details_title fw-bolder' >{name} Course Details </Card.Title>

                    <Pdf targetRef={ref} filename="courseDetails.pdf">
                        {({ toPdf }) => <Button style={{ height: "40px" }} variant='primary' onClick={toPdf}>Generate Pdf</Button>}
                    </Pdf>

                </Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <CardImg src={img} alt=""></CardImg>
                    <Card.Text className=' mt-3'>
                        {details}
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <Link onClick={handleSelectdCourse} className=' btn btn-primary mt-3  fw-bold' to={`/checkout`} >Get premium access </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CourseDetails;
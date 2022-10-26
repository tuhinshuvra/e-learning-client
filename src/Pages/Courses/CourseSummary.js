import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseSummary.css';

const CourseSummary = ({ course }) => {
    const { id, name, img, details, rating } = course;
    const detailsLength = details.length;
    console.log("detailsLength:", detailsLength);
    return (
        <div>
            {/* <h2>Course Summary</h2> */}
            <Container>
                <Row>
                    <Col>
                        <Card className=' mb-5'>
                            <Card.Img style={{ height: '200px' }} variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {
                                        details.length > 70 ?
                                            <>{details.slice(0, 70) + '...'} <Link to={`/courses/${id}`}>Details</Link> </>
                                            :
                                            <> {details}</>
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default CourseSummary;
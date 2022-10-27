import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import LeftSideNav from '../Pages/LeftSideNav/LeftSideNav';
// import ReactToPdf from '../Pages/ReactToPdf/ReactToPdf';
import './Main.css';


const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            {/* <ReactToPdf></ReactToPdf> */}
            <Container>
                <Row>
                    <Col lg='2' className=' d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='10'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../logo/brain_boost_course_logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className=''>
            <div className=' text-center'>

                <footer className="py-5">
                    <div className=" d-flex">
                        <div className="col-4 col-md-2 mb-3">
                            <h5 className='fw-bold'>Top Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
                                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Courses</Link></li>
                                <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0 text-muted">FAQ</Link></li>
                                <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0 text-muted">Blog</Link></li>
                            </ul>
                        </div>

                        <div className="col-4 col-md-2 mb-3">
                            <h5 className='fw-bold'>All Course</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/courses/01" className="nav-link p-0 text-muted">JavaScript Course</Link></li>
                                <li className="nav-item mb-2"><Link to="/courses/02" className="nav-link p-0 text-muted">ReactJS Course</Link></li>
                                <li className="nav-item mb-2"><Link to="/courses/03" className="nav-link p-0 text-muted">MongoDB Course</Link></li>
                                <li className="nav-item mb-2"><Link to="/courses/04" className="nav-link p-0 text-muted">Java Course</Link></li>
                            </ul>
                        </div>
                        <div className="col-4 col-md-2 mb-3">
                            <h5 className='fw-bold'>All Course</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><Link to="/courses/01" className="nav-link p-0 text-muted">MySQL Course</Link></li>
                                <li className="nav-item mb-2"><Link to="/courses/02" className="nav-link p-0 text-muted">Python Course</Link></li>
                                <li className="nav-item mb-2"><Link to="/courses/03" className="nav-link p-0 text-muted">PHP Course</Link></li>
                                <li className="nav-item mb-2"><Link to="/courses/04" className="nav-link p-0 text-muted">Go Lan Course</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">

                            <Link to="/" ><Image style={{ width: "70px" }} src={Logo} alt='' ></Image></Link>
                            <div className='d-flex flex-column'>
                                <h5 className=' text-success fw-bold'>Thanks for visiting our website</h5>
                                <Link className=' text-decoration-none fw-bolder text-dark' to="/register">Register</Link>
                                <Link className=' text-decoration-none fw-bolder text-dark' to="/login" >Login</Link>
                            </div>
                        </div>
                    </div>

                    <div className=" ">
                        <hr />
                        <p className='text-center fw-bold'>Copyright @ 2022. All right reserved by Tuhin Shuvra</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import ReactSwitch from 'react-switch';
import { FaUser } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext, ThemeContext } from '../Authentication/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Logo from '../../logo/brain_boost_course_logo.png';
import './Header.css';


function Header() {
    const { user, logOut } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => { console.log("Error : ", error); })
    }

    // const displayUserName = () => {
    //     user.displayName;
    // }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className=' text-decoration-none fw-bolder text-light' to='/'>
                    <Image className=' me-2' style={{ width: "55px" }} src={Logo} alt=""></Image>
                    <Navbar.Brand>  BrainBoost Course  </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link> */}
                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        <NavDropdown className=' d-lg-none ' title="All Course" id="collasible-nav-dropdown">
                            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Nav className=' d-lg-none'> <LeftSideNav></LeftSideNav></Nav>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <div className='switch me-2'>
                            <label>{theme === 'light' ? "Light Mode" : "Dark Mode"}</label>
                            <ReactSwitch
                                onChange={toggleTheme} checked={theme === "light"}
                            ></ReactSwitch>
                        </div>
                    </Nav>
                    <Nav>
                        <Link className=' text-decoration-none text-light fw-bolder me-2 d-none d-lg-block' to="/">All Course</Link>
                        <Link className=' text-decoration-none text-light fw-bolder me-2' to="/blog" >Blog</Link>
                        <Link className=' text-decoration-none text-light fw-bolder me-2' to="/faq" >FAQ</Link>
                        {/* <Nav className=' d-lg-none'> <LeftSideNav></LeftSideNav></Nav> */}
                        <Nav className=' text-light'>
                            {user?.uid ?
                                <div>
                                    {user?.displayName} {"  "}
                                    {user?.email}
                                    <Button onClick={handleLogOut} className=' btn btn-sm btn-danger ms-2'>Logout</Button>
                                    {
                                        user?.photoURL ?
                                            <Link to="/profile"> <Image onMouseOver={user?.displayName} roundedCircle style={{ width: '30px' }} src={user?.photoURL}></Image></Link>
                                            :
                                            <Link to="/profile"> <FaUser onMouseOver={user?.displayName} className='ms-2'></FaUser></Link>
                                    }
                                </div>
                                :
                                <>
                                    <Link className=' text-decoration-none text-light fw-bolder me-2' to="/register" >Register</Link>
                                    <Link className=' text-decoration-none text-light fw-bolder' to="/login">Login</Link>
                                </>
                            }
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import './Header.css';


function Header() {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => { console.log("Error : ", error); })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand> <Link className=' text-decoration-none fw-bolder text-light' to='/'>BrainFood Course </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link className=' text-decoration-none text-light fw-bolder me-2' to="/blog" >Blog</Link>
                        <Nav>
                            {user?.uid ?
                                <div>
                                    {user?.displayName}
                                    {user?.email}
                                    <Button onClick={handleLogOut} className=' btn btn-sm btn-danger ms-2'>Logout</Button>
                                    {
                                        user?.photoURL ?
                                            <Link to="/profile"> <Image roundedCircle style={{ width: '30px' }} src={user?.photoURL}></Image></Link>
                                            :
                                            <FaUser className='ms-2'></FaUser>
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
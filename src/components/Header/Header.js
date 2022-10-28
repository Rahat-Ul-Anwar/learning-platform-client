 
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import { useContext } from 'react';
 
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
 

 
 

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.displayName);

    const handleGoogleSignOut = () => {
      
        logOut()
            .then(() => { })
            .catch(error => {
                console.error('error', error);
        })
  }

    

 return (
        <div>
          <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                 <Navbar.Brand href="#home">
                     
                     <Image src={logo}
                         style={{ height: '30px', width: "50px" }}
                         className='me-1'
                     ></Image>
                     <Link className="text-decoration-none text-danger" to='/'>CS Learning</Link>
                 </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link className='me-3 text-white text-decoration-none' to='/'>Home </Link>
                    <Link className='me-3 text-white text-decoration-none' to='/faq'>FAQ </Link>
                    <Link className='me-3 text-white text-decoration-none' to='/courses'>Courses </Link>
                    <Link className='me-3 text-white text-decoration-none' to='/blog'>Blog </Link>
                 
                </Nav>
                <Nav>
                         <Nav.Link href="#deets">
                         {
                                    user?.uid ? 
                                        <>
                                        <span>{user?.displayName}</span>
                                            <Button onClick={handleGoogleSignOut} variant="info" className='ms-2'>Log out</Button>
                                        </>
                                       
                                        :
                                        <>
                                            <Link to='/login'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                             
                                        </>
                                    
                                }
                         
                         
                         </Nav.Link>
                         <Nav.Link eventKey={2} href="#memes">
                         {user?.photoURL ?
                                    <Image style={{height: "30px"}} roundedCircle src={user?.photoURL}></Image>
                                    : <FaUserAlt></FaUserAlt>
                                }
                         
                         
                         </Nav.Link>
                         <Nav.Link eventKey={2} href="#memes">
                         <BootstrapSwitchButton checked={true} onstyle="danger" size="sm"/>
                         
                         </Nav.Link>
                </Nav>
                           
                </Navbar.Collapse>
            </Container>
        </Navbar>
       </div>
    );
};

export default Header;
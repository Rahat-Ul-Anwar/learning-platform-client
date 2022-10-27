 
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

 
 

const Header = () => {

    

 return (
        <div>
          <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                 <Navbar.Brand href="#home">
                     
                     <Image src={logo}
                         style={{ height: '30px', width: "50px" }}
                         className='me-1'
                     ></Image>
                     <Link className="text-white text-decoration-none" to='/'>CS Learning</Link>
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
                    <Nav.Link href="#deets">deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">meems</Nav.Link>
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
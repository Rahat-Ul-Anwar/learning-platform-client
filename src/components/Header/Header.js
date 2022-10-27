 
// import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
 
 

const Header = () => {

 return (
        <div>
          <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><Link to='/'>CS Learning</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link className='me-3' to='/'>Home </Link>
                    <Link className='me-3' to='/faq'>FAQ </Link>
                    <Link className='me-3' to='/courses'>Courses </Link>
                    <Link className='me-3' to='/blog'>Blog </Link>
                 
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">meems</Nav.Link>
                </Nav>
                           
                </Navbar.Collapse>
            </Container>
        </Navbar>
       </div>
    );
};

export default Header;
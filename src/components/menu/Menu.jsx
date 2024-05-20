import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'
import './Menu.css';
 function Menu() {
  return (
   <>
<Navbar expand="lg" className='naw'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo}alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" star mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/feature">Feature</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Button className="bttn"variant="outline-light"><a href="/contact">Contact Us</a></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}
export default Menu;
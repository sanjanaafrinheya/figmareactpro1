
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png'
import { PiFacebookLogoBold,PiTwitterLogoLight, PiInstagramLogoDuotone  } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
 function Footer() {
  return (
<section id="footer">
 <Container>
  <Row>
    <Col lg={4}>
      <div className="footer">
 <img src={logo} alt="" />
     <p>We are always open to discuss your project and improve your online presence </p>
      </div>
       <div className="footer-contact">
        <Container>
          <Row>
        <Col lg={6}>
          <h5>E-mail me at</h5>
          <p><a href="#">contact@website.com</a></p>
        </Col>
        <Col lg={6}>
          <h5>Call us</h5>
          <p><a href="#">0927 627728525</a></p>
        </Col>
        </Row>
        </Container>
       </div>
    </Col>
    <Col lg={{span:4,offset:3}}>
      <div className="footer-right">
      <h3>Lets Talk!</h3>
      <p>We are always open to discuss your project and improve your online presence and help you with your ui/ux challenges</p>
      <div className="footer-icon">
         <a href="#"><PiFacebookLogoBold /></a>
         <a href="#"><PiTwitterLogoLight /></a>
         <a href="#"><PiInstagramLogoDuotone /></a>
         <a href="#"><SlSocialLinkedin /></a>
      </div>
      </div>
    
    </Col>
   
  </Row>
 </Container>
 <div className="footer-leg">
  <Container className='miniso'>
    <Row>
      <Col lg={6}>
        <p>Copyright2022,Finsweet.com</p>
      </Col>
      <Col lg={6}>
       <div className="footer-menu">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/feature">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/privacy">Privacy policy</Nav.Link>
          </Nav>

       </div>
      </Col>
    </Row>
  </Container>
 </div>
</section>
  )
}
export default Footer;
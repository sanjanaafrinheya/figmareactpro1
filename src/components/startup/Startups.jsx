import { FaArrowRightLong } from "react-icons/fa6";

import hand from '../../assets/hand.jpeg'
import { Col, Container, Row } from 'react-bootstrap';
import "../../assets/hand.jpeg"
import './Startups.css'
const Startups = () => {
  return (
    <section id="startup">
    <Container>
        <Row>
            <Col lg={6} className="startup-left">

            <div >
              <h3>Building stellar websites for early startups</h3>

              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>
            
            </Col>
            <Col lg={6} className="startup-right">
            <div >
              <h3>Send inquiry</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <input  className="input-me1"type="text" placeholder='Your Name' />
              <input className="input-me2"type="email" placeholder='Email'/>
              <input className="input-me3" type="text" placeholder='Place your figma design url'/>
              <div className="btn"><a href="#">Send an Inquiry</a></div>
              <div className="touch"><a href="#">Get in touch with us <FaArrowRightLong /></a></div>
            </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Startups;
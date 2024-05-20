import React from 'react'
import gummy from '../../assets/Cover.png'
import { Col, Container, Row } from 'react-bootstrap'
import './Feensweet.css'
const Feensweet = () => {
  return (
    <section id="moyna">

   
   <Container>
    <Row className='tuku'>
        <Col lg={6}>
            <h4>Web design and development</h4>
            <h3>Finsweet Design case studies</h3>
            <p className='tintin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        </Col>
    </Row>
    <Row className='vawvaw'>
        <Col lg={12}>
                  <div className="venu-dar">
            <img src={gummy} alt="" />
            </div>
        </Col>
        <Col lg={4}>
            <h4>Client</h4>
            <h5>facebook.com</h5>
        </Col >
        <Col lg={4}>
            <h4>Service</h4>
            <h5>Provide Design</h5>
        </Col >
        <Col lg={4}>
            <h4>Deliverable</h4>
            <h5>UI Screens, UX Flow & Prototype</h5>
        </Col >
        <div className="border"></div>

    </Row>
  
   </Container>
   </section>
  )
}

export default Feensweet
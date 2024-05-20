import React from 'react'
import "./Contact.css"
import { Col, Container, Row } from 'react-bootstrap'
const Contact = () => {
  return (
    <section id="contact">
<Container>
    <Row className='veni'>
        <Col lg={6}>
            <h3 className='tomas'>Contact Us</h3>
            <p className='jerry'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </Col>
    </Row>
    <Row>
      <Col lg={6}>
      <label for="fname">Name</label><br/>
    <input className="start-now"type="text" placeholder="Enter Your Name" />
      </Col>
      <Col lg={6}>
      <label for="fname">Email</label><br/>
    <input className="end-now"type="text" placeholder="Enter Your Email" />
      </Col>
      <Col lg={6}>
      <label for="fname">Subject</label><br/>
    <input   className="start-now" type="text" placeholder="Enter Your Name" />
      </Col>
      <Col lg={6}>
      <label for="fname">Provide Context</label><br/>
    <input className="end-now" type="text" placeholder="Select subject" />
      </Col>
      <Col lg={12}>
      <label for="fname">Massage</label><br/>
      <input className="mymy"type="textarea"  placeholder="Write your question here" />

      </Col>

   
    </Row>
</Container>

    </section>
  )
}

export default Contact
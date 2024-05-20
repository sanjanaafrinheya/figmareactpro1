import jacket from '../../assets/bluejacket.png'

import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap'
import './Focus.css'
const Focus = () => {
  return (
 <section id="focus">
<Container className='contain-color'>
  <Row className='pt-5'>
    <Col lg={6}>
    <h4>Who we are</h4>
    <h3>Goal focussed</h3>
    <p className='hurt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Col>
    <Col lg={6}>
      <h3>Continuous improvement</h3>
      <p className='hurt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Col>
    <Col lg={12} className='jacket'>
      <img src={jacket} alt="" />
    </Col>
  </Row>
</Container>
 </section>
  )
}

export default Focus
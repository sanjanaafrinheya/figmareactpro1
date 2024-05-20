import bann from '../../assets/banner.png'
import { FaArrowRightLong } from "react-icons/fa6";

import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
 function Banner() {
  return (
  <section id="banner">
    <Container>
        <Row>
            <Col lg={5}>
                <h2>Building stellar websites for early startups</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
View our work</p>
<div className="button-part d-flex">
<div className="view-work"><a href="#">View our work</a></div><div className="btn-2"><a href="#">View Pricing <FaArrowRightLong /></a> </div>
</div>

            </Col>
            <Col lg={6}className='jkgjk'>
                <img src={bann} alt="" />
            </Col>
        </Row>
    </Container>

  </section>
  )
}

    export default Banner;
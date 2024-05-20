import { GoDotFill } from "react-icons/go";

import {Col, Container, Row } from 'react-bootstrap'
import './Conception.css'
import Concepreusable from "../reusable/conceptionreusable/Concepreusable";
const Conception = () => {
  return (
  <section id="conception">
  <Container>
    <Row className="down">
        <Col lg={6}>
            <h2 className="follow">The process we follow</h2>
        </Col>
    </Row>
    <Row>
        <Concepreusable icon={<GoDotFill />} title="Planning"para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
        <Concepreusable icon={<GoDotFill />} title="Conception"para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
        <Concepreusable icon={<GoDotFill />} title="Design"para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
        <Concepreusable icon={<GoDotFill />} title="Development"para="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."/>
        
    </Row>

  </Container>
  </section>
  )
}

export default Conception
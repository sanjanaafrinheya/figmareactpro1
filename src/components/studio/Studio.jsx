import React from 'react'
import './Studio.css'
import { Col, Container, Row } from 'react-bootstrap'
import bunny from '../../assets/bunny.jpeg'
const Studio = () => {
  return (
    <section id="studio">
    <Container>
        <Row className='justy'>
            <Col lg={6}>
                <h3>A UX Case Study on Creating a Studious Environment for Students</h3>
             <p>Posted on 27th January 2021</p>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <div className="paw">
                <img src={bunny} alt="" />
                </div>
            </Col>
        </Row>
        <Row className='deer' >
            <Col lg={8}>
            
            <p className='kitty'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
            </Col>
            <a href="/readblog">Read more</a>
        </Row>

    </Container>
    </section>
  )
}

export default Studio
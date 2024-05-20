import React from 'react'
import { Col,Row, Container } from 'react-bootstrap'
import { TbMarquee } from 'react-icons/tb'

const Together = () => {
  return (
    <section id="together">

   
    <Container>
        <Row>
            <Col lg={1}>
           <h4>Keywords</h4>
            </Col>
            <Col lg={11}>
                <div className="fronty">

            </div>
            </Col>
        </Row>
        <Row className='tharma'> 
        <Col lg={6}>
          <div className="spikey">
            <h2>Let's build something great together</h2>
            <p class="moyemore">Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
            <button class="btn2"><a href="/contact">Contact Us </a></button>
            </div>
        </Col>

        </Row>
    </Container>
    </section>
  )
}

export default Together
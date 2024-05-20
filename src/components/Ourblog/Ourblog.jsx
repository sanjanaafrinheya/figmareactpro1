import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Blogreusable from '../reusable/Blogreusable'
import onee from '../../assets/1one.jpeg'
import two from '../../assets/2two.jpeg'
import three from '../../assets/3three.jpeg'
import four from '../../assets/4four.jpeg'
import five from '../../assets/5five.jpeg'
import six from '../../assets/6six.jpeg'
const Ourblog = () => {
  return (
    <Container>
        <Row>
            <Col lg={6}>
                <h2>Our Blog</h2>
            </Col>
        </Row>
        <Row>
            
        <Blogreusable image={onee} title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text=" See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
                    
        <Blogreusable image={two} title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text=" See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
                    
        <Blogreusable image={three} title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text=" See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
                    
        <Blogreusable image={four} title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text=" See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
                    
        <Blogreusable image={five} title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text=" See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
                    
        <Blogreusable image={six} title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text=" See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
        </Row>
    </Container>
  )
}

export default Ourblog
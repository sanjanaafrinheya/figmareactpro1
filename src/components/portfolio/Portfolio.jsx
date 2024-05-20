import React from 'react'
import { MdFacebook } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import cab from '../../assets/Cover.png'
import { FaArrowRightLong } from "react-icons/fa6";
import cab2 from '../../assets/Cover2.png'
import cab3 from '../../assets/Cover3.png'
import cab4 from '../../assets/cover4.png'
import cab5 from '../../assets/Cover5.png'
import cab6 from '../../assets/Cover6.png'

import './Portfolio.css'
import { Col,Row, Container } from 'react-bootstrap'
import Portreusable from '../reusable/portreusable/Portreusable';
const Portfolio = () => {
  return (
    <section id="portf">

   
    <Container >
        <Row className='dark'>
            <Col lg={6} >
                <div className="donkey">
                <h4>What we created</h4>
                <h3>Our Work Portfolio</h3>
                <p className='usaka'>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                <div className="icon-port">
              <a href="#"><MdFacebook /></a>
              <a href="#"><IoLogoTwitter /></a>
                <a href="#"><FaInstagramSquare /></a>
              <a href="#"><FaLinkedin /></a>
                </div>
                </div>
            </Col>
        </Row>
     
            <Col lg={12} md={6} sm={12}>
      

            <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
        
      <Tab eventKey="home" title="All">
      <Row>
    <Portreusable image={cab} title="Template 1" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="View portfolio"icon={<FaArrowRightLong />}/>
    <Portreusable image={cab2} title="Template 2" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="View Portfolio"icon={<FaArrowRightLong />}/>
    <Portreusable image={cab3} title="Template 3" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="Read case study"icon={<FaArrowRightLong />}/>
    <Portreusable image={cab4} title="Template 4" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="Read case study"icon={<FaArrowRightLong />}/>
    <Portreusable image={cab5} title="Template 5" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="Read case study"icon={<FaArrowRightLong />}/>
    <Portreusable image={cab6} title="Template 6" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="Read case study"icon={<FaArrowRightLong />}/>
    </Row>
      </Tab>
      <Tab eventKey="profile" title="UI Design">
        <Row>
        <Portreusable image={cab4} title="Template 4" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="Read case study"icon={<FaArrowRightLong />}/>
    <Portreusable image={cab5} title="Template 5" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="Read case study"icon={<FaArrowRightLong />}/>
        </Row>
      </Tab>
      <Tab eventKey="longer-tab" title="Webflow Design">
        <Row>
        <Portreusable image={cab4} title="Template 4" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="Read case study"icon={<FaArrowRightLong />}/>
    <Portreusable image={cab5} title="Template 5" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="Read case study"icon={<FaArrowRightLong />}/>
        </Row>
      </Tab>
      <Tab eventKey="contact" title="Figma Design">
       <Row>
       {<FaArrowRightLong />}
    <Portreusable image={cab4} title="Template 4" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="Read case study"icon={<FaArrowRightLong />}/>
    <Portreusable image={cab5} title="Template 5" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="Read case study"icon={<FaArrowRightLong />}/>
    <Portreusable image={cab6} title="Template 6" details="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. "link ="Read case study"icon={<FaArrowRightLong />}/>
       </Row>
      </Tab>
    </Tabs>
            </Col>

        
    </Container>
    </section>
  )
}

export default Portfolio
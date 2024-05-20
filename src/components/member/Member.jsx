import { Container,Row,Col } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import spider from '../../assets/spiderman.png'
import negi from '../../assets/negro.png'
import bts from '../../assets/bts.png'
import dari from '../../assets/dariwala.png'

import './Member.css'
import Memberreusable from '../reusable/memberreusable/Memberreusable';

const Member = () => {
  return (
    <section id="lastpart">
        <Container>
            <Row className='mem'>
                <Col lg={6}>
                    <h2>Meet our team</h2>
                </Col>
            </Row>
            <Row>
                <Memberreusable image={dari} icon1={<FaFacebook />}icon2={< FaTwitter />}icon3= {<SiLinkedin />}name="John Smith"desi="CEO"/>
                <Memberreusable image={spider} icon1={<FaFacebook />}icon2={< FaTwitter />}icon3= {<SiLinkedin />}name="Simon Adams"desi="CEO"/>
                <Memberreusable image={negi} icon1={<FaFacebook />}icon2={< FaTwitter />}icon3= {<SiLinkedin />}name="Paul Jones"desi="Design Lead"/>
                <Memberreusable image={bts} icon1={<FaFacebook />}icon2={< FaTwitter />}icon3= {<SiLinkedin />}name="Sara Hardin"desi="Project Manager"/>
 
 

            </Row>
        </Container>
    </section>
  )
}
 
export default Member
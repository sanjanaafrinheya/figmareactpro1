import './Mission.css'
import sofa from '../../assets/sitter.png'

import { Col, Container, Row } from 'react-bootstrap'
import Aboutimgreusable from '../reusable/aboutimgreusable/Aboutimgreusable'
const Mission = () => {
  return (
    <section id="horror">
   <Container>
    <Row>
        
        <Aboutimgreusable image={sofa} title="Use Client-first" dtitle="Top agencies and freelancers around the world use 
Client-first " para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." />

    
    </Row>
   </Container>
   </section>
    
   

  )
}

export default Mission
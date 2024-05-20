import { Container, Row } from "react-bootstrap"
import Leftimgreusable from "../reusable/leftimgreusable/Leftimgreusable"
import finger from '../../assets/finger.png'
import './Delivery.css'
const Delivery = () => {
  return (
    <section id="delivery">
   <Container>
    <Row>
        <Leftimgreusable image={finger} title="Quick Delivery" dtitle="Guranteed 1 week delivery for standard five pager website" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
    </Row>
   </Container>
   </section>
  )
}

export default Delivery
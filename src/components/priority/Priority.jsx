import { Container, Row } from "react-bootstrap"
import Aboutimgreusable from "../reusable/aboutimgreusable/Aboutimgreusable"
import './Priority.css'
import light from '../../assets/light.png'
const Priority = () => {
  return (
    <section id="priority">
    <Container>
        <Row>
            
        <Aboutimgreusable image={light} title="24/7 Support" dtitle="Working with us, you will be getting 24/7 priority support" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
        </Row>
    </Container>
    </section>
  )
}

export default Priority
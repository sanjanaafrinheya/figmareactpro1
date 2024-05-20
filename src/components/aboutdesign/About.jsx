import { Container, Row } from "react-bootstrap"
import group from "../../assets/group.png"
import './About.css'
import Aboutimgreusable from "../reusable/aboutimgreusable/Aboutimgreusable"

const About = () => {
  return (
    <section id="budgie">

    <Container>
       <Row>
      
        <Aboutimgreusable image={group} title="About us" dtitle="Our designs solve problems" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
       </Row>
    </Container>
    </section>
  )
}

export default About
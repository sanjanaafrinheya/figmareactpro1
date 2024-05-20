import kali from '../../assets/kali.png'
import { Container,Row } from 'react-bootstrap'
import Aboutimgreusable from '../reusable/aboutimgreusable/Aboutimgreusable'
import dholu from "../../assets/dhulo.png"
import Leftimgreusable from '../reusable/leftimgreusable/Leftimgreusable'
import './Inspire.css'
const Inspire = () => {
  return (
<section id="inspire">
  <>
  
  <Container>
    <Row>
    <Aboutimgreusable image={dholu} title="Our Mission " dtitle="Inspire, Innovate, Share" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

    <Leftimgreusable image= {kali} title="Free Revision Rounds" dtitle="Get free Revisions and one week of free maintenance" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
    </Row>
  </Container>
  
  </>
</section>
  )
}

export default Inspire
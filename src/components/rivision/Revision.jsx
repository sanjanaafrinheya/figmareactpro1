import './Revision.css'
import Leftimgreusable from '../reusable/leftimgreusable/Leftimgreusable'
import { Container, Row } from 'react-bootstrap'
import books from '../../assets/book.png';
const Revision = () => {
  return (
  <section id="revision">

  
    <Container>
        <Row>
            <Leftimgreusable image= {books} title="Free Revision Rounds" dtitle="Get free Revisions and one week of free maintenance" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."/>
        </Row>
    </Container>
    </section>
  )
}

export default Revision
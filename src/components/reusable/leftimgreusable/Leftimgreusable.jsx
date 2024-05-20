
import { Col,Container,Row } from 'react-bootstrap'
import './Leftimgreusable.css'
const Leftimgreusable = (props) => {
  return (
    <>
    <section id="lefty">
      <Container>

      <Row>
     <Col lg={5} sm={12}>
      <div className="left-img">
                <img src={props.image} alt="" />
                </div>
            </Col>
            <Col lg={7} sm={12}>
              <div className="revision-text">
                <h4>{props.title}</h4>
                <h2>{ props.dtitle}</h2>
                <p>{props.para}</p>
                </div>
            </Col>
            </Row>
            </Container>
            </section>
    </>
  )
}

export default Leftimgreusable
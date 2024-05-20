
import { Col,Row, Container} from "react-bootstrap"
import './Aboutimgreusable.css'
const Aboutimgreusable = (props) => {
  return (
   
    <>
    <section id="aboutimg">
  
    <Container>
<Row>
  
    <Col lg={7}>
    <div className="about-text">
       <h4>{props.title}</h4>
       <h2>{props.dtitle}</h2>
       <p>{props.para}</p>
    </div>
   </Col>
   <Col lg={5}>
       <div className="kgyjk">
       <img src={props.image}alt="" />
       </div>
   </Col >
   </Row>
   </Container>
       
   </section>

   </>
   
  )
}

export default Aboutimgreusable
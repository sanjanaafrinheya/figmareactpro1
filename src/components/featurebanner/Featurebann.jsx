import banner from "../../assets/featurebann.svg"
import { Col, Container, Row } from "react-bootstrap"
import "./Featurebann.css"
const Featurebann = () => {
  return (
   <section id="fea-bann">
    <Container>
        <Row>
            <Col lg={6} sm={12}>
                <h2>All the features you need</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>View Pricing</button>
            </Col>
            <Col lg={6} sm={12}>
                 <div className="fea-bann-img">
                    <img src={banner} alt="" />
                 </div>

            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Featurebann
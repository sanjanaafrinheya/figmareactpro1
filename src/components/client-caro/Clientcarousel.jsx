import caro from '../../assets/caro.png'
import { Col, Container, Row } from 'react-bootstrap';
import './Clientcarousel.css'
import Slider from "react-slick";
const Clientcarousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
 <section id="carousel"> 
 <Container>
    <Row>
        <Col lg={4} sm={12}>
            <div className="caro-left">
            <h3>What our clients say about us</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
            </div>
        </Col>
        <Col lg={8}>
            <Slider {...settings}>
            <div className="caro-me">
            <h4 className='wadi'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
            <div className="caro-img d-flex">
                <div className="image">
                    <img src={caro} alt="" />
                </div>
                <div className="text">
                    <h5>Jenny Wilson</h5>
                    <p className='hamza'>Vice President</p>
                    </div>
            </div>
            </div>
            <div className="caro-me">
            <h4 className='wadi'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
            <div className="caro-img d-flex">
                <div className="image">
                    <img src={caro} alt="" />
                </div>
                <div className="text">
                    <h5>Jenny Wilson</h5>
                    <p className='hamza'>Vice President</p>
                    </div>
            </div>
            </div>
            <div className="caro-me">
            <h4 className='wadi'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h4>
            <div className="caro-img d-flex">
                <div className="image">
                    <img src={caro} alt="" />
                </div>
                <div className="text">
                    <h5>Jenny Wilson</h5>
                    <p className='hamza'>Vice President</p>
                    </div>
            </div>
            </div>
            </Slider>
        </Col>
    </Row>
 </Container>

 </section>
  )
}

export default Clientcarousel;
import { FaArrowRightLong } from "react-icons/fa6";
import icon from '../../assets/icon.png'
import { Col, Container, Row } from "react-bootstrap";
import  "./Work.css"

 function Work() {
    let sanjana = [
        {
            image:"01",
            title: "Strategy",
        },
        {
            image:"02",
            title: "Wirefarming",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nemo.",
        },
        {
            image:"03",
            title: "Design",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nemo.",
        },
        {
            image:"04",
            title: "Development",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nemo.",
        },
        
    ]
  
  return (
    <Container>
        <Row className="work">
            <Col lg={4}>
                <h3>How We Work</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eius dolorum non.</p>
                <div className="git"><a href="#">Get in touch with us <FaArrowRightLong /></a></div>
            </Col>
            <Col lg={8}>
                <Row>
                    {sanjana.map((item,index)=>(
   <Col lg={6}  sm={12}key={index}>
   <div className="icon">
    <h3>{item.image}</h3>
   </div>
   <h4>{item.title}</h4> 
   <p>{item.para}</p>   
    </Col>
                    ))}
                
             
               
                </Row>
            </Col>
        </Row>
    </Container>
   
  )
}

    export default Work;

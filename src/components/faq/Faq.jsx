import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Row } from "react-bootstrap"
import "./Faq.css"
export const Faq = () => {
let accordian = [
    {
    number:"01",
    title:"how much time does it take?",
    para:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur ",
    },
    {
        number:"02",
        title:"What is your class naming convention?",
        para:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur ",
        },
        {
            number:"03",
            title:"how do you communicate?",
            para:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur ",
            },
            {
                number:"04",
                title:"I have a bigger project . Can you handle it?",
                para:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur ",
                },
                {
                    number:"05",
                    title:" What is your class naming convention?",
                    para:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur ",
                    },
]


  return (
   <section id="faq">
    <Container>
        <Row>
            <Col lg={6} sm={12}>
                <div className="faq-left">
                    <h3>Frequently asked questions</h3>
                    <h4>contact us for more info</h4>
                </div>
            </Col>
            <Col lg={6} sm={12}>
           {accordian.map((item,index)=>(
                            <div className="guest">
                            <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header ><span>{item.number}</span> {item.title}</Accordion.Header>
                              <Accordion.Body>
                               {item.para}
                              </Accordion.Body>
                            </Accordion.Item>
                            
                          </Accordion>
                          </div>
           ))}
               <div className="faq-right">

               </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

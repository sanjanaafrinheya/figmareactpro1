import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { VscTriangleRight } from "react-icons/vsc";

import { Col, Container, Row } from "react-bootstrap"
import "./Plan.css"
const Plan = () => {
  return (
    <section id="pricing">
   <Container>
    <Row>
        <Col lg={4} sm={12}>
        <Card className='pop' >
      <Card.Body>
        <Card.Text >
            <p class="law">$299</p>
          <p class="kado">Per Design</p>
          <h4 className='shema'>Landing Page </h4>
          <p className='hasib'>When you’re ready to go beyond prototyping in Figma, </p>
          <ul>
            <li> <VscTriangleRight classname="laddu"/> All limited links</li>
            <li> <VscTriangleRight /> Own analytics platform</li>
            <li> <VscTriangleRight />Chat support</li>
            <li> <VscTriangleRight /> Optimize hashtags</li>
            <li> <VscTriangleRight /> Unlimited users</li>
          </ul>
        </Card.Text>
        <Button className='butam'>Get Started</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col lg={4} sm={12}>
        <Card className='pop' >
      <Card.Body>
        <Card.Text >
            <p class="lawn">$399</p>
          <p class="kadon">Multi Design</p>
          <h4 className='sheman'>Website Page </h4>
          <p className='hasibn'>When you’reWhen you’re ready to go beyond prototyping in Figma, Webflow’s ready to help. </p>
          <ul>
            <li> <VscTriangleRight classname="laddu"/> All limited links</li>
            <li> <VscTriangleRight /> Own analytics platform</li>
            <li> <VscTriangleRight />Chat support</li>
            <li> <VscTriangleRight /> Optimize hashtags</li>
            <li> <VscTriangleRight /> Unlimited users</li>
          </ul>
        </Card.Text>
        <Button className='butam'>Get Started</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col lg={4} sm={12}>
        <Card className='pop' >
      <Card.Body>
        <Card.Text >
            <p class="law2">$499+</p>
          <p class="kado">Per Design</p>
          <h4 className='shema2'>Complex project </h4>
          <p className='hasib2'>When you’re ready to go beyond prototyping in Figma,  </p>
          <ul>
            <li> <VscTriangleRight  className='laddu'/> All limited links</li>
            <li> <VscTriangleRight  className='laddu' /> Own analytics platform</li>
            <li> <VscTriangleRight  classname='laddu' />Chat support</li>
            <li> <VscTriangleRight  /> Optimize hashtags</li>
            <li> <VscTriangleRight /> Unlimited users</li>
            <li> <VscTriangleRight /> Assist and Help</li>

          </ul>
        </Card.Text>
        <Button className='butam2'>Contact Us</Button>
      </Card.Body>
    </Card>
        </Col>
    </Row>
   </Container>
   </section>
  )
}

export default Plan
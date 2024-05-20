import './Blogreusable.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import women from "../../assets/women.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { Col } from 'react-bootstrap';
const Blogreusable = (props) => {
  return (
    <>
         <Col lg={4}>
      <div className="card-cus">
      <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className='hok'>{props.title}</Card.Text>
        <Button>Read More <FaArrowRightLong /></Button>
      </Card.Body>
    </Card>
      </div>
        </Col>
    </>
  )
}

export default Blogreusable
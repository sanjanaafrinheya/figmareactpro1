
import { Col } from 'react-bootstrap';

const Featurereusable = (props) => {
  return (
  <>
  <Col lg={4} >
    <div className="feature">
        <div className="feature-icon">
          {props.icon}
        </div>
        <h3>{props.title}</h3>
        <p>{props.para}</p>
    </div>
  </Col>
  </>
  )
}
export default Featurereusable;
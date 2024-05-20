import {  Col, Container, Row } from "react-bootstrap";


import './Benifit.css'
import Fpagereusable from "../reusable/Fpagereusable";
import Logoreusable from "../reusable/Logoreusable";
 const Benifit = () => {
  return (
    <section id="benifit">
<Container>
   <Row>

   <Fpagereusable/>
   <div className="mymatha mt-5"> </div>
   <Logoreusable/> 
  
    </Row>
</Container>
    </section>
  )
}
export default Benifit;
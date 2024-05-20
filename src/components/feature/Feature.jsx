import { Col, Container, Row } from "react-bootstrap";
import "./Feature.css";
import Featurereusable from "../reusable/Featurereusable";
import { HiUserGroup } from "react-icons/hi";
import { GiBiplane } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { BsFillStopwatchFill } from "react-icons/bs";
import { BsChatRightText } from "react-icons/bs";


import { FaCheck } from "react-icons/fa6";

 function Feature() {
  return (
    <section id="featur">
  <Container >
    <Row>
        <Col lg={12} sm={12}>
            <h4 className="number1">Features </h4>
            <h2 className="number2">Design that solve problems,One product at a time</h2>
        </Col>
        <Featurereusable icon={<HiUserGroup />} title="Use client First" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  "/>
        <Featurereusable  icon={<FaCheck/>}title="Two Free Revision Round "para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.  "/>
        <Featurereusable icon={<GiBiplane />}title="Template Customization"para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
        <Featurereusable icon={<BsChatRightText />} title="24/7 hours support" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
        <Featurereusable icon={<BsFillStopwatchFill />}title="Quick Delivery " para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
        <Featurereusable icon={<GrNotes />} title="Hands-on approach" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
    </Row>
  </Container>
  </section>
  )
}
export default Feature;

import React from 'react'
import { Col } from 'react-bootstrap'

const Memberreusable = (props) => {
  return (
    <>
    <Col lg={3}>
                  <div className="main_head">
                  <div className="main">
      <img src={props.image} alt="" />
      <div className="overly">
        <div className="icont">
        <a href="#">{props.icon1}</a>
                       <a href="#">{props.icon2}</a>
                         <a href="#">{props.icon3}</a>
        </div>
      </div>
    </div>
    <div className="text">
      <h4>{props.name}</h4>
      <h5>{props.desi}</h5>
    </div>
                  </div>
                </Col>
    </>
  )
}

export default Memberreusable
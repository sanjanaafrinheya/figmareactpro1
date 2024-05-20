import React from 'react'
import { Col } from 'react-bootstrap'
import './Concepreusable.css'
const Concepreusable = (props) => {
  return (
   <>
   <Col lg={3}>
            <div className="concep">
                <div className="concep-icon">
                 { props.icon}
                </div>
                <div className="concep-line">
                </div>
            </div>
            <div className="concep-text">
            <h4 className='main'>{props.title}</h4>
                <p >{props.para}</p>
            </div>
        </Col>
   </>
  )
}

export default Concepreusable
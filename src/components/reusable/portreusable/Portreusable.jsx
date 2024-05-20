import React from 'react'
import { Col ,Row} from 'react-bootstrap'
import './Portreusable.css'

const Portreusable = (props) => {
  return (
   <>
      
      <Col lg={6}>
        <div >
        <div className="port-img">
       <img src={props.image} alt="" />
       </div>
       <h4>{props.title}</h4>
       <p className="usaka">{props.details}</p>
       <a  className="oke"href="/feenwit">{props.link}{props.icon}</a>
       </div>
       </Col>
    
   </>
  )
}

export default Portreusable
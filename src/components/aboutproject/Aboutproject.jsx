import React from 'react'
import cover7 from '../../assets/Cover7.png'
import './Aboutproject.css'
import { Container, Row,Col } from 'react-bootstrap'
const Aboutproject = () => {
  return (
  <Container>
    <Row>
        <Col lg={10}>
            <h3>About the project</h3>
            <p className='halk'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul className='duke'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
            </ul>
            <div className="last-pic"> 
    
           <img src={cover7} alt="" />
           </div>
           <h3>How we do it</h3>
           <p className='halk'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           <ul className='duke'>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
           </ul>

        </Col>
    </Row>
  </Container>
  )
}

export default Aboutproject
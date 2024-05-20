import React from 'react'
import './Readblog.css'
import { Col, Container, Row } from 'react-bootstrap'
import bunny from '../../assets/bunny.jpeg'
import handinhand from '../../assets/handinhand.jpg'
const Readblog = () => {
  return (
    <section id="readblog">
    <Container>
        <Row className='ramm'>
            <Col lg={8}className='carpet' >
                <h3 >A UX Case Study on Creating a Studious Environment for Students</h3>
                
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <div className="bunny-img">
                <img src={bunny} alt="" />
                </div>
            </Col>
        </Row>
        <Row className='trail'>
            <Col lg={8} sm={12}className='shamm'>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<h4>Ut enim ad minim veniam, quis nostrud.
</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<ul className='jodu'>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
</ul>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>

        </Row>
        <Row>
            <Col lg={12}>
                <div className="hand">
                <img src={handinhand} alt="" />
                </div>
            </Col>
        </Row>
        <Row className='trofy'>
            <Col lg={8}>
                <h3>Ut enim ad minim veniam, quis nostrud.
</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Readblog
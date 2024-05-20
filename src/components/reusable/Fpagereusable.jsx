import { Col } from 'react-bootstrap'

import { GrNotes } from "react-icons/gr";
import { GiBiplane } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";

const Fpagereusable = () => {
    return (
        <>

            <Col lg={12} sm={12} className='text-center pt-5'>
                <h2 className='robot'>The benefits of working with our team</h2>
            </Col>
            <Col lg={4}>
                <div className="headd">
                    <i><GrNotes /></i>
                    <h4>Customize with ease</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
            </Col>
            <Col lg={4}>
                <div className="headd">
                    <i><GiBiplane /></i>
                    <h4>Perfectly Responsive</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
            </Col>
            <Col lg={4}>
                <div className="headd">
                    <i><HiUserGroup /></i>
                    <h4>Friendly Support</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
            </Col>


        </>
    )
}

export default Fpagereusable
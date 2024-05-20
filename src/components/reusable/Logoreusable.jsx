import one from '../../assets/logo1.png'
import two from '../../assets/Flogo2.png'
import three from '../../assets/flogo3.png'
import four from '../../assets/logo4.png'
import five from '../../assets/fLogo5.png'
import { Col } from 'react-bootstrap'
const Logoreusable = () => {
  return (
 <>

<Col lg={2} sm={12}>
                <h3>100.000+</h3>
                <h6>Figma Users</h6>
            </Col>
            <Col lg={10} sm={12} className='pb-5'>
                <div className="kajol">
                    <img src={one} alt="" />
                    <img src={two} alt="" />
                    <img src={three} alt="" />
                    <img src={four} alt="" />
                    <img src={five} alt="" />
                </div>
            </Col>
 </>
  )
}

export default Logoreusable
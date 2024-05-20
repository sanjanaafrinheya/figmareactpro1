
import { Container, Row } from 'react-bootstrap'


import './Team.css'
import Featurereusable from '../reusable/Featurereusable'
import Fpagereusable from '../reusable/Fpagereusable'
import Logoreusable from '../reusable/Logoreusable'
const Team = () => {
  return (
    <section id="team">
        <Container>
            <Row>
         <Logoreusable/>       
        <Fpagereusable/>
      
          
       
   </Row>
        </Container>
       
        


    </section>
  )
}

export default Team
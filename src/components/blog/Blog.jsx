import pc from "../../assets/pc.png"
import men from "../../assets/men.png"
import women from "../../assets/women.png"
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css'
import Blogreusable from '../reusable/Blogreusable';

const Blog = () => {
  return (
    <section id="blog">
<Container>
    <Row>
        <Col lg={12}>
            <h2>Our Blog</h2>
        </Col>
   <Blogreusable image={men} title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text=" See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" />
   <Blogreusable image={women} title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text=" See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"/>
   <Blogreusable image={pc} title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text=" See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"/>

    </Row>
</Container>
    </section>
  )
}
export default Blog;
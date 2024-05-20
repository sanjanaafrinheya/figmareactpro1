
import Menu from "../../components/menu/Menu";
import Banner from '../../components/banner/Banner';
import Work from '../../components/work/Work';
import Feature from '../../components/feature/Feature';
import {Faq} from '../../components/faq/Faq';
import Blog from '../../components/blog/Blog';
import Footer from '../../components/footer/Footer';
import Startups from "../startup/Startups";
import Projects from "../projects/Projects";
import Clientcarousel from "../client-caro/Clientcarousel";
const Home = () => {
  return (
    <>

    <Banner/>
    <Work/>
    <Projects/>
    <Feature/>
    <Clientcarousel/>
    <Faq/>
    <Startups/>
    <Blog/>
  


    </>
    
  )
}

export default Home
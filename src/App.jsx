import { LuLayout } from "react-icons/lu"
import Footer from "./components/footer/Footer"
import Aboutpage from "./components/pages/Aboutpage"
import Home from "./components/pages/Home"
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Leyout from "./components/rootlayout/Leyout"
import Feature from "./components/feature/Feature"
import Featurepage from "./components/pages/Featurepage"
import Pricingpage from "./components/pages/Pricingpage"
import Faqpage from "./components/pages/Faqpage"
import Blogpage from "./components/pages/Blogpage"
import Contactpage from "./components/pages/Contactpage"
import Privacypage from "./components/pages/Privacypage"
import Readblogpage from "./components/pages/Readblogpage"
import Feenswitpage from "./components/pages/Feenswitpage"


const router = createBrowserRouter(createRoutesFromElements(
<Route element={<Leyout/>}>
  <Route path ="/"element= {<Home/>}></Route>
  <Route path ="/about" element= {<Aboutpage/>}></Route>
  <Route path ="/feature" element= {<Featurepage/>}></Route>
  <Route path ="/pricing" element= {<Pricingpage/>}></Route>
  <Route path ="/faq" element= {<Faqpage/>}></Route>
  <Route path ="/blog" element= {<Blogpage/>}></Route>
  <Route path ="/contact" element= {<Contactpage/>}></Route>
  <Route path ="/privacy" element= {<Privacypage/>}></Route>
  <Route path ="/readblog" element= {<Readblogpage/>}></Route>
  <Route path ="/feenwit" element= {<Feenswitpage/>}></Route>
  
  
</Route>
))

function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

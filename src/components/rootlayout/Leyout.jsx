
import { Outlet } from 'react-router-dom'

import Footer from '../footer/Footer'
import Menu from '../menu/Menu'

const Leyout = () => {
  return (
    <>
   <Menu/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default Leyout
import Delivery from "../delivery/Delivery"
import { Faq } from "../faq/Faq"
import Featurebann from "../featurebanner/Featurebann"
import Mission from "../mission/Mission"
import Plan from "../plans/Plan"
import Priority from "../priority/Priority"
import Revision from "../rivision/Revision"
import Team from "../team/Team"


const Featurepage = () => {
  return (
    <>
   <Featurebann/>
   <Team/>
   <Mission/>
   <Revision/>
   <Priority/>
   <Delivery/>
   <Faq/>
   </>
  )
}

export default Featurepage
import FetchData from "../fetchData";
import { Link } from "react-router-dom";
import PartnerList from "./partnerList";
import { Stack, Button } from "react-bootstrap";
import Url from '../../url';

const Partners = () => {

  const url = Url();

    const {data:partners} = FetchData(`${url}/partners`); 
  
    const partnerList1 = partners && <PartnerList partners={partners.filter((partner)=>partner.type === "Restauration")} />
    const partnerList2 = partners && <PartnerList partners={partners.filter((partner)=>partner.type === "Sponsor")} />
    const partnerList3 = partners && <PartnerList partners={partners.filter((partner)=>partner.type === "Media")} />
    
    return ( 

  <div className="partner-preview">
      <Stack className="ulpartner">
        <h1 className="text">Restauration</h1>
        {partnerList1}
        <h1 className="text">Sponsor</h1>
        {partnerList2}
        <h1 className="text">Media</h1>
        {partnerList3}
      </Stack>
      
    <Button className="btnretour"><Link className="nav-link" to="/">retour</Link></Button>
  </div>
  
     );
}
 
export default Partners;
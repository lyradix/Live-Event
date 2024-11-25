import { useState } from "react";
import { Link } from "react-router-dom";

const MainPartners = ({partners,frontPage,partner, id, partner1, title, link}) => {

    return ( 

        <div className="partners">
          <div className="partner-preview" >                
            {partners.slice(0,8).map((partner) => (
           <button  className='btnPartner' key = {partner.id}>
            <a href={partner.link} rel="noreferrer" target="_blank"> 
                <img className="imgPartnerFront" src={`image-${partner.id}.png`} alt="annonceurs"></img></a>
           </button>
            ))}    
            </div>
        </div>
     );
}
 
export default MainPartners;
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import FetchData from "./fetchData";
import { Link } from "react-router-dom";

const PartnerList = ({partners, partner,partner1, title}) => {

    // const {id} = useParams();
    // const {data:partner} = FetchData('http://localhost:8000/partners/' + id );

    return ( 
      
    <div className="partner-preview">
      
   
          {partners.map((partner) => (
            <div key = {partner.id}>
           <button  className='btnPartnerList' >
            <a href={partner.link} rel="noreferrer" target="_blank">
            <img className="imgPartner" src={`image-${partner.id}.png`} alt="annonceurs"></img></a>
           </button>
           </div>
            ))}          

    </div>
  
     );
}
 
export default PartnerList;
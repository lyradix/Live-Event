

const PartnerList = ({partners, partner,partner1, title, partnerId}) => {

    // const {id} = useParams();
    // const {data:partner} = FetchData('http://localhost:8000/' + id );

    console.log(partners.partnerId);

    return ( 
      
    <div className="partner-preview">
      
   
          {partners.map((partner) => (
            <div key = {partner.partnerId}>
           <button  className='btnPartnerList' >
            <a href={partner.link} rel="noreferrer" target="_blank">
            <img className="imgPartner" src={`image-${partner.partnerId}.png`} alt="annonceurs"></img></a>
           </button>
           </div>
            ))}          

    </div>
  
     );
}
 
export default PartnerList;
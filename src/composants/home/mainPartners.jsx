

const MainPartners = ({partners,frontPage,partner, id, partner1, title, link, partnerId}) => {

    return ( 

        <div className="partners">
          <div className="partnerBox" >                
            {partners.slice(0,8).map((partner) => (
           <button  className='btnPartner' key = {partner.id}>
            <a href={partner.link} rel="noreferrer" target="_blank"> 
                <img className="imgPartnerFront" 
                src={`https://cornflowerblue-otter-463564.hostingersite.com/images/${partner.image}`} 
                alt="annonceurs">
            </img>
            </a>
           </button>
            ))}    
            </div>
        </div>
     );
}
 
export default MainPartners;
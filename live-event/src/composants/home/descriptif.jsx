const Descriptif = ({info, descriptif}) => {
    return ( 
        <div>
        {info.map((info) => ( 
         <p className="descripText">{info.descriptif}</p>
 ))}
 </div>
     );
}
 //test//
export default Descriptif;
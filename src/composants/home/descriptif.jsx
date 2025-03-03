const Descriptif = ({info, Descriptif}) => {
    return ( 
        <div>
        {info.map((info) => ( 
         <p className="descripText">{info.Descriptif}</p>
 ))}
 </div>
     );
}
 //test//
export default Descriptif;
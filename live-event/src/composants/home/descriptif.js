const Descriptif = ({info, Descriptif}) => {
    return ( 
        <div>
        {info.map((info) => ( 
         <p className="descripText">{info.Descriptif}</p>
 ))}
 </div>
     );
}
 
export default Descriptif;
import { useState } from "react";
const InfoList = ({info,info2,venir,id,title,info1, Descriptif}) => {

 
console.log(info.info2)
    return ( 
        <div>
               {info.map((info) => ( 
                <li>{info.Descriptif}</li>
        ))}
        </div>
     );
}
 
export default InfoList;
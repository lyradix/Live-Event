const InfoList = ({info,info2,venir,id,title,info1, descriptif}) => {

 
console.log(info.info2)
    return ( 
        <div>
               {info.map((info) => ( 
                <li>{info.descriptif}</li>
        ))}
        </div>
     );
}
 
export default InfoList;
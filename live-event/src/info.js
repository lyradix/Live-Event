import { Link } from "react-router-dom";
import { useState } from "react";
import FetchData from "./fetchData";
import InfoList from "./infoList";


const Info = () => {

    const {data:info} = FetchData('http://localhost:8000/info'); 
    const [descripinfo, setdescripinfo] = useState(null);
    const [descripinfo2, setdescripinfo2] = useState(null);
    const infoList = info && <InfoList info={info} />
    const infoList1 = info && <InfoList info={info.filter((info)=>info.type === "déroulement")} />
    const infoList2 = info && <InfoList info={info.filter((info)=>info.type === "Venir")} />
    // const infoList1 = info && <InfoList info={info.filter((infolist) => info.priority === "1")} />
    
    console.log(info)

    return ( 

        <div className="information">
            <ul className="ulInfo">
            <li className="liInfo"><button className="btnInfo" onClick={()=>{setdescripinfo(!descripinfo)}}>Le déroulement<button>+</button></button>
            <h6 className={descripinfo?"open":""}>
                <li>{infoList1}</li>
                </h6>
            </li>
      
            <li className="liInfo"><button className="btnInfo" onClick={()=>{setdescripinfo2(!descripinfo2)}}>Venir<button>+</button></button>
            <h6 className={descripinfo2?"open":""}>
                <li>{infoList2}</li>
                </h6>
            </li>
            </ul>   
          <button className="btnretour"><Link className="nav-link" to="/">retour</Link></button>
        </div>
     );
}
 
export default Info;
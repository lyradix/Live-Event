import { Link } from "react-router-dom";
import { useState } from "react";
import FetchData from "../fetchData";
import InfoList from "./infoList";
import { Button } from "react-bootstrap";


const Info = () => {

    const {data:info} = FetchData('https://bisque-dotterel-606944.hostingersite.com/info'); 
    const [descripinfo, setdescripinfo] = useState(null);
    const [descripinfo2, setdescripinfo2] = useState(null);
    const [descripinfo3, setdescripinfo3] = useState(null);
    const [descripinfo4, setdescripinfo4] = useState(null);
    const [descripinfo5, setdescripinfo5] = useState(null);
    const [descripinfo6, setdescripinfo6] = useState(null);


    const infoList1 = info && <InfoList info={info.filter((info)=>info.type === "d\u00e9roulement")} />
    const infoList2 = info && <InfoList info={info.filter((info)=>info.type === "Venir")} />
    const infoList3 = info && <InfoList info={info.filter((info)=>info.type === "surPLace")} />
    const infoList4 = info && <InfoList info={info.filter((info)=>info.type === "Interdits")} />
    const infoList5 = info && <InfoList info={info.filter((info)=>info.type === "handi")} />
    const infoList6 = info && <InfoList info={info.filter((info)=>info.type === "revente")} />
    // const infoList1 = info && <InfoList info={info.filter((infolist) => info.priority === "1")} />

    
    console.log(info)

    return ( 

        <div className="information">
            <ul className="ulInfo">
            <li className="liInfo"><button className="btnInfo" onClick={()=>{setdescripinfo(!descripinfo)}}>Le déroulement
                <button className="btnPlus">+</button></button>
            <h6 className={descripinfo?"open":""}>
                <li>{infoList1}</li>
                </h6>
            </li>
      
            <li className="liInfo"><button className="btnInfo" onClick={()=>{setdescripinfo2(!descripinfo2)}}>Venir
                <button className="btnPlus">+</button></button>
            <h6 className={descripinfo2?"open":""}>
                <li>{infoList2}</li>
                </h6>
            </li>

            <li className="liInfo"><button className="btnInfo" onClick={()=>{setdescripinfo3(!descripinfo3)}}>Sur place
                <button className="btnPlus">+</button></button>
            <h6 className={descripinfo3?"open":""}>
                <li>{infoList3}</li>
                </h6>
            </li>

            <li className="liInfo"><button className="btnInfo" onClick={()=>{setdescripinfo4(!descripinfo4)}}>Les interdits
                <button className="btnPlus">+</button></button>
            <h6 className={descripinfo4?"open":""}>
                <li>{infoList4}</li>
                </h6>
            </li>
            <li className="liInfo"><button className="btnInfo" onClick={()=>{setdescripinfo5(!descripinfo5)}}>Accéssibilité
                <button className="btnPlus">+</button></button>
            <h6 className={descripinfo5?"open":""}>
                <li>{infoList5}</li>
                </h6>
            </li>
            <li className="liInfo"><button className="btnInfo" onClick={()=>{setdescripinfo6(!descripinfo6)}}>Revente de billets
                <button className="btnPlus">+</button></button>
            <h6 className={descripinfo6?"open":""}>
                <li>{infoList6}</li>
                </h6>
            </li>
            </ul>   
            <div className="btnBox">
            <Button className="btnretour"><Link className="nav-link" to="/">retour</Link></Button>
            </div>
        </div>
     );
}
 
export default Info;
import React from 'react';
import { Link } from 'react-router-dom';
import profilimg from '../../image/profil.png';


const SideProfil = () => {
    return ( 
       
                   
                    <div className="sidebarMenuProfile" >
                    <div className='profilimg' >
                        <img alt="profil" src={profilimg} style={{ width: "50px", height: "50px", cursor: "pointer" }}>
                        </img>
                    </div>
                    <li><Link to="/login" className="navliProfil">s'identifier</Link></li> 
                    <li className="navliProfil">Deconnexion</li>                                 
            </div>
        
     );
}
 
export default SideProfil;
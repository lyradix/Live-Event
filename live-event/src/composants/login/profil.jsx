import React from 'react';
import { Link } from 'react-router-dom';

const Profil = () => {
    return ( 
            <div>
                <ul className="dropdownMenu">
                     <li className="navli"><Link to="/login" className="dropDownItem" >s'identifier</Link></li> 
                    <li className="navli">Deconnexion</li>            
               </ul>                
            </div>
     );
}
 
export default Profil;
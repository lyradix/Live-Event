import React from 'react';
import { Link } from 'react-router-dom';

const Profil = () => {
     const handleLogout = () => {
          sessionStorage.removeItem('isOnline'); 
          window.location.href = '/'; // Redirection vers la page d'accueil
      };
    return ( 
            <div>
                <ul className="dropdownMenu">
                     <li className="navli"><Link to="/login" className="dropDownItem" >s'identifier</Link></li> 
                    <li className="navli" onClick={handleLogout}>Deconnexion</li>            
               </ul>                
            </div>
     );
}
 
export default Profil;
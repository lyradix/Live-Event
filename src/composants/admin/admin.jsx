import React from 'react';
import FetchData from "../fetchData";
import { Link } from 'react-router-dom';
import Url from '../../url';


const Admin = () => {
    // Fetch concert data
    const url = <Url/>;
    const { data: concert, pending: concertPending, error: concertError } = FetchData(`${url}/concert`);

    // Fetch user data
    const { data: users, pending: usersPending, error: usersError } = FetchData('https://cornflowerblue-otter-463564.hostingersite.com/users');

    console.log("ConcertForm component rendered");

    return (
        <div>
            <h1 className="text">Administration</h1>

            {/* Concert Section */}
            <section>
                <h2 className="text">Concerts</h2>
                {concertPending && <div className="text">Chargement des concerts...</div>}
                {concertError && <div className="text">Erreur: {concertError}</div>}
                {concert && <div className="text">Nombre de concerts: {concert.length}</div>}

                {concert && (
                    <ul className="wrapbox">
                       
                        {concert.map((concert, nom, starTime) => (
                            <li key={concert.id}>
                                <div className="boxconcert">
                                <Link to={`/concertform/${concert.id}`} key={concert.id}>
                                    <p>date: {concert.startTime.substring(0, 10)}</p>
                                    <p>heure: {concert.startTime.substring(11, 16)}</p>
                                    <p>Nom: {concert.nom}</p>
                                    </Link>
                                </div>
                            </li>
                        ))}
                 
                    </ul>
                )}
            </section>

            {/* User Section */}
            <section>
                <h2 className="text">Formulaire</h2>
               
            
            </section>
        </div>
    );
};

export default Admin;
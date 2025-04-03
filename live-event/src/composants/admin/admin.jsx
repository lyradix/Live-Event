import React from 'react';
import FetchData from "../fetchData";

const Admin = () => {
    // Fetch concert data
    const { data: concert, pending: concertPending, error: concertError } = FetchData('http://localhost:8000/concert');

    // Fetch user data
    const { data: users, pending: usersPending, error: usersError } = FetchData('http://localhost:8000/users');

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
                        {concert.map((concert) => (
                            <li key={concert.id}>
                                <div className="boxconcert">
                                    <p>date: {concert.startTime.substring(0, 10)}</p>
                                    <p>heure: {concert.startTime.substring(11, 16)}</p>
                                    <p>Nom: {concert.nom}</p>
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
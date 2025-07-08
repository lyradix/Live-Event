import { useParams } from "react-router-dom";
import FetchData from "../fetchData";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import fbLogo from '../../image/fb.png';
import iLogo from '../../image/i.png';
import xLogo from '../../image/x.png';

const ArtistDetails = () => {
    const { id } = useParams(); // Get the artist ID from the URL
    const { data: concert, pending, error } = FetchData(`http://localhost:8000/concerts/${id}`); // Fetch artist details

    console.log("ArtistDetails component rendered");
    return (
        <div className="artistDetails">

            {/* Show loading message while data is being fetched */}
            {pending && <p className="text">Chargement des détails...</p>}

            {/* Show error message if there is an error */}
            {error && <p className="text">Erreur: {error}</p>}

            {/* Show artist details if data is available */}
            {concert && (
                <article>
                    <h2 className="text">{concert.nom}</h2>
                    <p className="artistDetailtext">{concert.description}</p>
                    <p className="descripText">Source: {concert.source}</p>
                    <p className="descripText">Chanson connue: {concert.famousSong}</p>

                    {/* Social Media Links */}
                    <Stack className="logo" direction="horizontal" gap={3}>
                        <li>
                            <a href={concert.facebook} target="_blank" rel="noopener noreferrer">
                                <img className="logoNetwork" src={fbLogo} alt="Facebook logo" />
                            </a>
                        </li>
                        <li>
                            <a href={concert.instagram} target="_blank" rel="noopener noreferrer">
                                <img className="logoNetwork" src={iLogo} alt="Instagram logo" />
                            </a>
                        </li>
                        <li>
                            <a href={concert.twitter} target="_blank" rel="noopener noreferrer">
                                <img className="logoNetwork" src={xLogo} alt="Twitter logo" />
                            </a>
                        </li>
                    </Stack>

                    {/* Optional: Artist Image */}
                    {concert.image && (
                        <img
                            className=""
                            src={`image-${concert.id}.jpg`}
                            alt={concert.name}
                            height="600px"
                            width="380px"
                        />
                    )}
                </article>
            )}

            {/* Back Button */}
            <Button className="btnretour" >
                <Link className="nav-link" to="/Programmation">Retour</Link>
            </Button>
        </div>
    );
};

export default ArtistDetails;
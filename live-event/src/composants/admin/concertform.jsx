import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ConcertForm = () => {
    console.log("ConcertForm component rendered");
    const { id } = useParams(); // Get the concert ID from the URL
    const [concert, setConcert] = useState(null); // State to store concert details
    const [date, setDate] = useState(""); // State for the date input
    const [hourStart, setHourStart] = useState(""); // State for the hour input
    const [hourEnd, setHourEnd] = useState(""); // State for the end hour input
    const [scene, setScene] = useState(""); // State for the selected scene
    const [scenes, setScenes] = useState([]); // State to store available scenes
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch concert details and available scenes
    useEffect(() => {
        const fetchConcertAndScenes = async () => {
            try {
                console.log("Fetching concert details...");
                const concertResponse = await axios.get(`http://localhost:8000/concert/${id}`);
                console.log("Concert API Response:", concertResponse.data);
                setConcert(concertResponse.data);
                setScene(concertResponse.data.sceneFK.id); // Set the current scene ID
                setDate(concertResponse.data.startTime.substring(0, 10)); // Extract date
                setHourStart(concertResponse.data.startTime.substring(11, 16)); // Extract start hour
                setHourEnd(concertResponse.data.endTime.substring(11, 16)); // Extract end hour

                console.log("Fetching available scenes...");
                const scenesResponse = await axios.get("http://localhost:8000/scenes");
                console.log("Scenes API Response:", scenesResponse.data);
                setScenes(scenesResponse.data);

                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to fetch concert or scene details.");
                setLoading(false);
            }
        };

        fetchConcertAndScenes();
    }, [id]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("les mis à jours sont en cours...");
            const response = await axios.put(`http://localhost:8000/updateconcert`, {
                id, // Send the concert ID
                startTime: `${date}T${hourStart}:00`, // Combine date and start hour into ISO format
                endTime: `${date}T${hourEnd}:00`, // Combine date and end hour into ISO format
                sceneFK: scene, // Send the selected scene ID
            });

            console.log("API Response:", response.data); // Log the API response
            alert("Les détails du concert ont été mis à jour avec succès !");
        } catch (err) {
            console.error("Error updating concert details:", err.response?.data || err.message);
            setError(err.response?.data?.error || "Une erreur s'est produite");
        }
    };

    if (loading) {
        console.log("Loading...");
        return <p className="text">Chargement...</p>;
    }
    if (error) {
        console.log("Error:", error);
        return <p className="text">{error}</p>;
    }
    console.log("Concert data:", concert);

    return (
        <div className="concert-form">
            <h2>Modifier les détails du concert</h2>
            <h3>{concert.nom}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="scene">Lieu:</label>
                    <select
                        id="scene"
                        value={scene}
                        onChange={(e) => setScene(e.target.value)} // Update scene state on change
                        required
                    >
                        <option value="" disabled>
                            Sélectionnez un lieu
                        </option>
                        {scenes.map((sceneOption) => (
                            <option key={sceneOption.id} value={sceneOption.id}>
                                {sceneOption.nom}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="hourStart">Heure de début:</label>
                    <input
                        type="time"
                        id="hourStart"
                        value={hourStart}
                        onChange={(e) => setHourStart(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="hourEnd">Heure de fin:</label>
                    <input
                        type="time"
                        id="hourEnd"
                        value={hourEnd}
                        onChange={(e) => setHourEnd(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Modifier</button>
            </form>
        </div>
    );
};

export default ConcertForm;
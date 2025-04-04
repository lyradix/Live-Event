import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ConcertForm = () => {
    const { id } = useParams(); // Get the concert ID from the URL
    const [concert, setConcert] = useState(null); // State to store concert details
    const [date, setDate] = useState(""); // State for the date input
    const [hour, setHour] = useState(""); // State for the hour input
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchConcert = async () => {
            try {
                console.log("Fetching concert details...");
                const response = await axios.get(`http://localhost:8000/concert/${id}`);
                console.log("API Response:", response.data);
                setConcert(response.data);
                setDate(response.data.startTime.substring(0, 10)); // Extract date
                setHour(response.data.startTime.substring(11, 16)); // Extract hour
                setLoading(false);
            } catch (err) {
                console.error("Error fetching concert details:", err);
                setError("Failed to fetch concert details.");
                setLoading(false);
            }
        };

        fetchConcert();
    }, [id]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/concert/${id}`, {
                startTime: `${date}T${hour}:00`, // Combine date and hour into ISO format
            });
            alert("Concert details updated successfully!");
        } catch (err) {
            setError("Failed to update concert details.");
        }
    };

    if (loading) {
        console.log("Loading...");
        return <p>Loading concert details...</p>;
    }
    if (error) {
        console.log("Error:", error);
        return <p>{error}</p>;
    }
    console.log("Concert data:", concert);

    return (
        <div className="concert-form">
            <h2>Modifier les détails du concert</h2>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="hour">Heure:</label>
                    <input
                        type="time"
                        id="hour"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Modifier</button>
            </form>
        </div>
    );
};

export default ConcertForm;
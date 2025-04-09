import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    // Fetch data on component mount
    useEffect(() => {
        fetchData(url);
    }, [url]);

    // Fetch data from the server
    const fetchData = async (url) => {
        setPending(true);
        setError(null);
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            console.log('Using token for GET request:', token); // Debugging

            const response = await axios.get(url, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                },
            });

            console.log('Response from GET request:', response.data); // Debugging
            setData(response.data); // Update the data state with the server's response
            setError(null);
        } catch (err) {
            console.error('Error fetching data:', err); // Debugging
            console.error('Error details:', err.response); // Log the full response
            setError(err.response?.data?.message || "Impossible de charger la page");
        } finally {
            setPending(false);
        }
    };

    // Post data to the server
    const postData = async (url, payload) => {
        setPending(true);
        setError(null);
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage

            const response = await axios.post(url, payload, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                },
            });

            setData(response.data); // Update the data state with the server's response
            setError(null);
        } catch (err) {
            if (err.response) {
                // Server-side error
                console.error('Server error:', err.response.data);
                setError(err.response.data.message || "Erreur côté serveur");
            } else {
                // Network or client-side error
                console.error('Network error:', err.message);
                setError("Erreur réseau ou côté client");
            }
        } finally {
            setPending(false);
        }
    };

    return { data, pending, error, postData };
};

export default FetchData;
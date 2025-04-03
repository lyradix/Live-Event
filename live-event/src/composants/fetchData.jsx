import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            setPending(true);
            try {
                const response = await axios.get(url, {
                    headers: {
                        Accept: "application/json", // Ensure the server returns JSON
                    },
                });
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.response?.data?.message || "Impossible de charger la page");
            } finally {
                setPending(false);
            }
        };

        fetchData();
    }, [url]);

    // Post data to the server
    const postData = async (url, payload) => {
        setPending(true);
        setError(null);
        try {
            const response = await axios.post(url, payload, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                
            });
            setData(response.data); // Update the data state with the server's response
            setError(null);
        } catch (err) {
            setError(err.response?.data?.message || "Failed to post data");
        } finally {
            setPending(false);
        }
    };

    return { data, pending, error, postData };
};

export default FetchData;
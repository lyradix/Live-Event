import { useState, useEffect } from "react";


const FetchData = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        setTimeout(() => {
            // go and fetch the json data in the localhost
            fetch(url).then(res => {
                if (!res.ok) {
                    throw Error('Impossible de charger la page');
                }
                return res.json();
            }).then((data) => {
                setData(data);
                setPending(false);
                setError(null);
            }).catch(err => {
                setPending(false);
                setError(err.message);
            });
        });
    }, [url]);

    const postData = async (url, payload) => {
        setPending(true);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error('Failed to post data');
            }
            const result = await response.json();
            setData(result);
            setPending(false);
            setError(null);
        } catch (err) {
            setPending(false);
            setError(err.message);
        }
    };

    return { data, pending, error, postData };
};

export default FetchData;
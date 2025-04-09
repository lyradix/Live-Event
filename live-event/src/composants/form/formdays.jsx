import React, { useEffect, useState } from 'react';
import FetchData from '../fetchData';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Formdays = () => {
    const { data, pending, error, postData } = FetchData('http://localhost:8000/getdays');
    const [formData, setFormData] = useState({ samedi: false }); // Initialize with default value

    const handleSubmit = (e) => {
        e.preventDefault();
        postData('http://localhost:8000/postdays', formData); // Send formData to the server
    };

    const navigate = useNavigate();

    useEffect(() => {
        console.log(data); // Debugging: Log the server response
    }, [data]);

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked, // Update the checkbox value in formData
        }));
    };

    return (
        <div className="days">
            <form className="form" onSubmit={handleSubmit}>
                <div className="boxForm">
                    <div className="box">
                    <label className="text">Quand êtes vous présent sur le site?</label>
                    </div>
                    <div className="box">
                    <label className="text">Vendredi</label>
                    <input
                        type="checkbox"
                        className="checkbox"
                        name="vendredi" // Name matches the key in formData
                        checked={formData.vendredi} // Bind to formData state
                        onChange={handleCheckboxChange} // Handle checkbox toggle
                    />
                    </div>
                    <div className="box">
                    <label className="text">Samedi</label>
                    <input
                        type="checkbox"
                        className="checkbox"
                        name="samedi" // Name matches the key in formData
                        checked={formData.samedi} // Bind to formData state
                        onChange={handleCheckboxChange} // Handle checkbox toggle
                    />
                    </div>
                    <div className="box">
                    <label className="text">Dimanche</label>
                    <input
                        type="checkbox"
                        className="checkbox"
                        name="dimanche" // Name matches the key in formData
                        checked={formData.dimanche} // Bind to formData state
                        onChange={handleCheckboxChange} // Handle checkbox toggle
                    />
                    </div>
                </div>
                <div className="boxForm">
                    <Button type="submit">
                        Soumettre
                    </Button>
                </div>
            </form>
            {pending && <p className="text">En chargement...</p>}
            {error && <p className="text">Erreur: {error}</p>}
            {data && <p className="text">Données envoyées avec succès!</p>}
        </div>
    );
};

export default Formdays;
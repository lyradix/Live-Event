import React, { useEffect, useState } from 'react';
import FetchData from '../fetchData';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Formdays = () => {
    const { data, pending, error } = FetchData('http://localhost:8000/formdays');
    const [formData, setFormData] = useState({
        vendredi: false,
        samedi: false,
        dimanche: false,
    }); // Initialize with default value

    // Function to submit chosen days
    const submitChosenDays = async (selectedDays) => {
        const token = localStorage.getItem('token');
        console.log('Using token for POST request:', token);

        try {
            const response = await axios.post('http://localhost:8000/choosedays', { days: selectedDays }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            console.log('Response from server:', response.data);
            alert(response.data.message);
        } catch (err) {
            console.error('Error submitting chosen days:', err.response?.data || err.message);
            alert(err.response?.data?.error || 'Failed to update days');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting formData:', formData); // Debugging

        // Extract selected days from formData
        const selectedDays = Object.keys(formData).filter((day) => formData[day]);
        console.log('Selected days:', selectedDays); // Debugging

        // Call the submitChosenDays function
        submitChosenDays(selectedDays);
    };

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
                        <label className="text">Quels jours souhaitez vous être présent ?</label>
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
            {data && <p className="text">Données récupérées avec succès!</p>}
        </div>
    );
};

export default Formdays;
import React, { useState, useEffect } from 'react';
import FetchData from '../fetchData';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { data, pending, error, postData } = FetchData('http://localhost:8000/register');
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userMessage, setUserMessage] = useState(null); // Track user-friendly messages
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserMessage(null); // Reset user message
        if (formData.password !== confirmPassword) {
            setUserMessage("Les mots de passe ne correspondent pas");
            return;
        }
        postData('http://localhost:8000/register', formData);
    };

    // Handle server response after form submission
    useEffect(() => {
        console.log("Data updated:", data); // Debugging: Log the data state
        if (data && typeof data.success !== 'undefined') {
            if (data.success) {
                setUserMessage("Vous êtes bien enregistré");
                setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
            } else {
                setUserMessage(data.message || "Une erreur est survenue lors de l'enregistrement");
            }
        }
    }, [data, navigate]);

    return (
        <div className="sign-up">
            <form className="box" onSubmit={handleSubmit}>
                <div className="boxForm">
                    <label className="text">Email:</label>
                    <input
                        type="text"
                        required
                        value={formData.email || ''}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <label className="text">Mot de passe:</label>
                    <input
                        type="password"
                        required
                        value={formData.password || ''}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <label className="text">Confirmer Mot de Passe:</label>
                    <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="boxForm">
                    <Button type="submit">
                        Soumettre
                    </Button>
                    <Button className="btnretour">
                        <Link className="nav-link" to="/login">Retour</Link>
                    </Button>
                </div>
            </form>
            {pending && <p className="text">En chargement...</p>}
            {userMessage && <p className="text">{userMessage}</p>}
        </div>
    );
};

export default SignUp;
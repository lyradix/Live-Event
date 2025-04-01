import React, { useState } from 'react';
import FetchData from '../fetchData';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { data, pending, error, postData } = FetchData('http://localhost:8000/register');
    const [formData, setFormData] = useState({});
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        postData('http://localhost:8000/register', formData);
    };

    const navigate = useNavigate();
    if (data) {
        navigate('/login');
        alert('Vous êtes enregistré')
    }

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
                    <Button className="btnretour" type="submit">
                        Soumettre</Button>
                    <Button className="btnretour">
                        <Link className="nav-link" to="/login">retour</Link>
                    </Button>
                </div>
            </form>
            {pending && <p>en chargement...</p>}
            {error && <p>{error}</p>}
            {data && <p>Vous êtes bien enregistré</p>}
        </div>
    );
};

export default SignUp;
import React, { useState } from 'react';
import FetchData from '../fetchData'; // Adjust the import path if necessary
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const { data, pending, error, postData } = FetchData('https://bisque-dotterel-606944.hostingersite.com/login');
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        postData('https://bisque-dotterel-606944.hostingersite.com/login', formData);
    };

    const navigate = useNavigate();
    if (data) {
        navigate('/');
    }

    return (
        <div className="login">
            <form className="box" onSubmit={handleSubmit}>
                <div className="boxForm">
                    <label className="text">Email:</label>
                    <input
                        type="text"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <label className="text">Mot de passe:</label>
                    <input
                        type="password"
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <div className="boxForm">
                    <Button className="btnretour" type="submit">
                    <Link className="nav-link" to="/"> S'identifier</Link>
                  </Button>
                    <Button className="btnretour">
                        <Link className="nav-link" to="/signUp">S'enregistrer</Link>
                    </Button>
                </div>
            </form>
            {pending && <p>en chargement...</p>}
            {error && <p>{error}</p>}
            {data && <p>Connexion réussie</p>}
        </div>
    );
};

export default LogIn;
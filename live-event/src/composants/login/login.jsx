import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState(null);
    const navigate = useNavigate();

    const postData = async (url, payload) => {
        setPending(true);
        setError(null);
        try {
            console.log('Sending POST request to:', url); // Debugging
            console.log('Payload:', payload); // Debugging

            const response = await axios.post(url, payload, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            setData(response.data); // Update the data state with the server's response
            setError(null);
        } catch (err) {
            console.error('Error posting data:', err.response?.data || err.message); // Debugging
            setError(err.response?.data?.message || "Failed to post data");
        } finally {
            setPending(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginError(null); // Reset login error

        // Transform formData to match the server's expected structure
        const payload = {
            _username: formData.email,
            _password: formData.password,
        };

        console.log('Submitting payload:', payload); // Debugging
        postData('http://localhost:8000/login', payload);
    };

    useEffect(() => {
        if (data && typeof data.success !== 'undefined') {
            if (data.success) {
                // If login is successful
                toast.success('Connexion réussie !');
                navigate('/formdays');
            } else {
                // If login fails
                setLoginError(data.message || 'Identifiants incorrects');
                toast.error(data.message || 'Identifiants incorrects');
            }
        }
    }, [data, navigate]);

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
                      S'identifier
                    </Button>
                    <Button className="btnretour">
                        <Link className="nav-link" to="/signUp">S'enregistrer</Link>
                    </Button>
                </div>
            </form>
            {pending && <p className="text">En chargement...</p>}
            {loginError && <p className="text">{loginError}</p>}
            {error && <p className="text">{error}</p>}
        </div>
    );
};

export default LogIn;
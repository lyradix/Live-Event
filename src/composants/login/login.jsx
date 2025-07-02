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
            return response.data;
        } catch (err) {
            console.error('Error posting data:', err); // Debugging
            console.error('Error details:', err.response); // Log the full response
            setError(err.response?.data?.message || "Impossible de charger la page");
            throw err;
        } finally {
            setPending(false);
            
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginError(null); // Reset login error

        const payload = {
            email: formData.email,
            password: formData.password,
        };

        console.log('Submitting payload:', payload); // Debugging

        postData('https://cornflowerblue-otter-463564.hostingersite.com/login', payload)
            .then((response) => {
                if (response.token) {
                    // Store the token in localStorage
                    localStorage.setItem('token', response.token);
                    toast.success('Connexion réussie !');
                    console.log('Navigating to /formdays');
                    navigate('/formdays');
                } else {
                    setLoginError('Invalid response from server');
                }
            })
            .catch((err) => {
                console.error('Login error:', err);
                setLoginError(err.message || 'Une erreur s\'est produite');
            });
    };

    useEffect(() => {
        console.log('Login response data:', data); // Debugging
        if (data && typeof data.success !== 'undefined') {
            if (data.success) {
                toast.success('Connexion réussie !');
                console.log('Navigating to /formdays');
                navigate('/formdays');
            } else {
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
                    <Button type="submit">
                      S'identifier
                    </Button>
                    <Button >
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
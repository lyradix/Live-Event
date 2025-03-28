import { useState, useEffect } from 'react';
import FetchData from '../fetchData'; // Adjust the import path if necessary
import { Button } from "react-bootstrap";

function Status(props) {
    const [isOnline, setIsOnline] = useState(null); // Track login status
    const { pending, error, postData } = FetchData('https://bisque-dotterel-606944.hostingersite.com/login');

    // Notify the user when they are logged in
    useEffect(() => {
        if (isOnline) {
            alert("You are now logged in!"); // Popup notification
        }
    }, [isOnline]); // Runs whenever `isOnline` changes

    // Check session on component mount
    useEffect(() => {
        const sessionStatus = sessionStorage.getItem('isOnline');
        if (sessionStatus === 'true') {
            setIsOnline(true); // Restore session state
        }
    }, []); // Runs only once on component mount

    const handleLogin = async () => {
        try {
            const payload = { username: 'user', password: 'password' }; // Replace with actual credentials
            await postData('https://bisque-dotterel-606944.hostingersite.com/login', payload);
            setIsOnline(true); // Set login status
            sessionStorage.setItem('isOnline', 'true'); // Save session state
        } catch (err) {
            console.error("Login failed:", err);
        }
    };

    const handleLogout = () => {
        setIsOnline(false); // Set login status to offline
        sessionStorage.removeItem('isOnline'); // Clear session state
    };

    return (
        <div>
            <h1>{isOnline ? "Online" : "Offline"}</h1>
            <Button onClick={handleLogin} disabled={isOnline}>
                Login
            </Button>
            <Button onClick={handleLogout} disabled={!isOnline}>
                Logout
            </Button>
            {pending && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
}

export default Status;
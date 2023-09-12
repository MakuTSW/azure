import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        getMessageFromServer();
    }, []); // Empty dependency array to fetch data once on component mount

    async function getMessageFromServer() {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/message');
            setMessage(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className="App">
            <h2>Hello world</h2>
            <h3>Message from server app: {message}</h3>
        </div>
    );
}

export default App;

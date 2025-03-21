import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/register/', {
                username,
                email,
                password,
            });
            setMessage('Registro exitoso. Por favor, inicia sesión.');
            navigate('/login');  // Redirigir al usuario a la página de inicio de sesión
        } catch (error) {
            setMessage(error.response?.data?.error || "Error al registrar el usuario.");
        }
    };

    return (
        <div className="mx-auto justify-content-center d-flex flex-column align-items-center w-50">
            <h2>Registro</h2>
            <input
                type="text"
                className="form-control"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" onClick={handleRegister}>Registrarse</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
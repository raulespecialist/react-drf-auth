import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                username,
                password,
            });
            localStorage.setItem('token', response.data.token);  // Guardar el token en localStorage
            setIsAuthenticated(true);  // Marcar al usuario como autenticado

            // Redirigir según la respuesta de la API
            if (response.data.redirect_to === 'verify-otp') {
                navigate('/verify-otp');  // Redirigir a la página de verificación de OTP
            } else {
                navigate('/qr');  // Redirigir a la página de configuración del QR
            }
        } catch (error) {
            setMessage(error.response?.data?.error || "Error al iniciar sesión.");
        }
    };

    return (
        <div className="mx-auto justify-content-center d-flex flex-column align-items-center w-50">
            <h2>Iniciar Sesión</h2>
            <input
                type="text"
                className="form-control"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Iniciar Sesión</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
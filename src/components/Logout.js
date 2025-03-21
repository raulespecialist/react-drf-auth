import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();

    const handleLogout = async () => {
        try {
            await axios.post(
                'http://localhost:8000/api/logout/',
                {},
                {
                    headers: { Authorization: `Token ${localStorage.getItem('token')}` }
                }
            );
            localStorage.removeItem('token');  // Eliminar el token del localStorage
            setIsAuthenticated(false); 
            navigate('/login');  // Redirigir al usuario a la página de inicio de sesión
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <div className="container-centered">
            <h2>Cerrar Sesión</h2>
            <button type="submit" className="btn btn-primary" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default Logout;
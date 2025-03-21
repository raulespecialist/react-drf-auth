import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const VerifyOTP = () => {
    const [otp, setOTP] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { setIsOTPVerified } = useAuth();

    const handleVerifyOTP = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8000/api/verify-otp/',
                { otp },
                {
                    headers: { Authorization: `Token ${localStorage.getItem('token')}` }
                }
            );
            setMessage(response.data.message);
            setIsOTPVerified(true);  // Marcar el OTP como verificado
            navigate('/dashboard');  // Redirigir al usuario a la página principal
            
        } catch (error) {
            setMessage(error.response?.data?.error || "Error al verificar el OTP.");
        }
    };

    return (
        <div className="mx-auto justify-content-center d-flex flex-column align-items-center w-50">
            <h2>Verificar Código OTP</h2>
            <input
                type="text"
                className="form-control"
                placeholder="Ingresa el código OTP"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
            />
            <button type="submit" className="btn btn-primary" onClick={handleVerifyOTP}>Verificar</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default VerifyOTP;
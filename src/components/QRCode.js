import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QRCode = () => {
    const [qrCode, setQRCode] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchQRCode = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/generate-qr/', {
                    headers: { Authorization: `Token ${localStorage.getItem('token')}` }
                });
                setQRCode(response.data.qr_code);
            } catch (error) {
                setMessage(error.response?.data?.error || "Error al generar el código QR.");
            }
        };

        fetchQRCode();
    }, []);

    return (
        <div>
            <h2>Configura Google Authenticator</h2>
            {qrCode && <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />}
            {message && <p>{message}</p>}
        </div>
    );
};

export default QRCode;
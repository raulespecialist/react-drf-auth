import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import QRCode from './components/QRCode';
import VerifyOTP from './components/VerifyOTP';
import Logout from './components/Logout';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootswatch/dist/minty/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
          <Navbar />  {/* Barra de navegación */}
            <Routes>
                <Route path="/logout" element={<Logout />} />  {/* Ruta de cierre de sesión */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/qr" element={<QRCode />} />
                    <Route path="/verify-otp" element={<VerifyOTP />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Login />} />  {/* Ruta por defecto */}
            </Routes>
        </Router>
    );
}

export default App;
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);  // Estado de autenticación
    const [isOTPVerified, setIsOTPVerified] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, 
        isOTPVerified, setIsOTPVerified }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
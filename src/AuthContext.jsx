import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // null means loading
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Check authentication status on initial load
    useEffect(() => {
        fetch("http://10.0.0.165:5000/auth/protected", { 
            credentials: "include", 
            method: "GET", 
            headers: { 
                "Content-Type": "application/json", 
                "Authorization": "Bearer " + localStorage.getItem("token") 
            } 
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 200) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            })
            .catch(() => setIsAuthenticated(false));
    }, []);

    // Login function to handle user authentication
    const login = async (username, password) => {
        try {
            const response = await fetch("http://10.0.0.165:5000/auth/login", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.status === 200) {
                localStorage.setItem("token", data.token);
                setIsAuthenticated(true);
                navigate("/landing-page-2");
            } else {
                setError("Failed to login");
                setIsAuthenticated(false);
            }
        } catch (error) {
            setError("Failed to login");
            setIsAuthenticated(false);
        }
    };

    // Logout function to handle user logout
    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        navigate("/"); // Redirect to home page after logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, error, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

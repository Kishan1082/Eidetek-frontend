import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated === null) return <p>Loading...</p>; // Show a loading state while checking auth

    return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;

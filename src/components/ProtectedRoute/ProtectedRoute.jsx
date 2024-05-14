import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [spinLoading, setSpinLoading] = useState(true);

    useEffect(() => {
        if (!loading) {
            setSpinLoading(false);
        }
    }, [loading]);

    if (spinLoading) {
        return <PacmanLoader color="#3d251e" size={20} />;
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />;
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;

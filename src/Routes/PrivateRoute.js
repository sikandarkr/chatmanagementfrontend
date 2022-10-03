import React from 'react';
import {isLoggedIn} from '../Utils/utils'
import { Navigate } from 'react-router-dom';
function PrivateRoute({ children }) {
    if (!isLoggedIn) {
        return <Navigate to="/login"  />
    }
    return children;
}

export default PrivateRoute;

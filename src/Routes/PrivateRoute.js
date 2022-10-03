import React from 'react';
import { Route,Navigate } from 'react-router-dom'
import {isLoggedIn} from '../Utils/utils'
const PrivateRoute = ({ path, ...props }) => {
    // const { loginStatus } = useAuth();
  
    return isLoggedIn ? (
      <Route {...props} path={path} />
    ) : (
      <Navigate to="/login" state={{ from: path }} replace />
    );
  };
  export default PrivateRoute;
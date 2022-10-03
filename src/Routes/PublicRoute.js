import React from 'react';
import { Route,Redirect,Navigate } from 'react-router-dom'
import {isLoggedIn} from '../Utils/utils'
export default function PrivateRoute({ children }) {
    if (isLoggedIn()) {
        return children;
    }
    return <Navigate to='/login' />
  }
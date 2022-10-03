import React from 'react';
import { Route,Redirect,Navigate } from 'react-router-dom'
import {isLoggedIn} from '../Utils/utils'
// const PublicRoute = ({component :Component,isRestricted,...rest}) =>{
//     return(
//         <Route {...rest} render={props=>(
//             (isLoggedIn() && isRestricted) ?
//                 <Navigate to="/home"  /> :
//                 <Component {...props} />
//         )} />
//     )
// }
// export default PublicRoute

export default function PrivateRoute({ children }) {
    if (isLoggedIn()) {
        return children;
    }
    return <Navigate to='/login' />
  }
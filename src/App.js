import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation ,BrowserRouter as Router} from 'react-router-dom';
import Home from '../src/Pages/Home';
import Login from '../src/Pages/Login';
import Register from "./Pages/Register";
import PrivateRoute from '../src/Routes/PrivateRoute';
import PublicRoute from "./Routes/PublicRoute";
import TopNav from '../src/Component/Common/TopNav';
import './App.css';
import "antd/dist/antd.css";



function App() {
    return (
        <div >
            <TopNav/>
                <Router>
                    <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Router>
        </div>
    );
}

export default App;

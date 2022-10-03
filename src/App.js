
import { Routes, Route, Navigate, useNavigate, useLocation ,BrowserRouter as Router} from 'react-router-dom';
import Home from '../src/Pages/Home';
import Login from '../src/Pages/Login';
import Register from "./Pages/Register";
import PrivateRoute from '../src/Routes/PrivateRoute';
import PublicRoute from "./Routes/PublicRoute";

import "antd/dist/antd.css";
function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    // history.navigate = useNavigate();
    // history.location = useLocation();

    return (
        <div className="app-container bg-light">
            <div className="container pt-4 pb-4">
                <Router>
                    <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/"
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
        </div>
    );
}

export default App;

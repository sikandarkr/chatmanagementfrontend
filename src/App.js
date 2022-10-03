import { Routes, Route ,BrowserRouter as Router} from "react-router-dom";
import Home from '../src/Pages/Home';
import Login from '../src/Pages/Login';
import Register from "./Pages/Register";
import PrivateRoute from '../src/Routes/PrivateRoute';
import PublicRoute from "./Routes/PublicRoute";
import "antd/dist/antd.css";

import { TimePicker } from 'antd';
import './App.css';

function App() {
 return  <div className="App">
          <Router>
              <Routes>
                  {/* <Route path="/home" element={<Home/>}>
                  </Route> */}
                 
                     <Route exact path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                     <Route exact path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                 
                  {/* <PublicRoute restricted={false} element={<Login/>} path="/login" exact /> */}
                  {/* <Route path="/login" element={<Login />}>
                  </Route> */}
                  {/* <PrivateRoute element={<Home />} path="/home" exact /> */}
                  {/* <Route path="/register" element={<Register />}>
                  </Route> */}
              </Routes>
          </Router>
    </div>
}

export default App;


{/* <PublicRoute restricted={false} component={Home} path="/" exact />
<PublicRoute restricted={true} component={SignIn} path="/signin" exact />
<PrivateRoute component={Dashboard} path="/dashboard" exact /> */}
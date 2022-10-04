import logo from './logo.svg';
import "antd/dist/antd.css";
import { TimePicker } from 'antd';
import SearchBar from  './Component/common/SearchBar'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar";
import Home from './pages/Home';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/Signup';
import SignIn from './pages/Signin';

function App() {
  return (
    <div> 
    <SearchBar/>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>

    </div>
   

      
     
  );
}

export default App;

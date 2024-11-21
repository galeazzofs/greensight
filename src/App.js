import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm"
import DashMap from "./pages/DashMap";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ControlScreen from "./pages/ControlScreen";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/> 
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/dashmap" element={<DashMap/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/controlscreen" element={<ControlScreen/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
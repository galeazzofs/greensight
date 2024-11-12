import React from "react";
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm"
import DashMap from "./pages/DashMap";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/> 
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/dashmap" element={<DashMap/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
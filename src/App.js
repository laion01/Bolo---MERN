import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// layouts
import Auth from "layouts/Auth.js";
import Work from "layouts/Work.js";
import Dashboard from "features/main/dashboard.js"

// views without layouts
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* add routes with layouts */}
        <Route path="/auth" element={ <Auth/>} />
        <Route path="/work/*" element={ <Work/>} />
        {/* add routes without layouts */}
        <Route path="/" exact element={<Dashboard/>} />
        {/* add redirect for first page */}
        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
      </Routes>
  </BrowserRouter>
  );
}

export default App;

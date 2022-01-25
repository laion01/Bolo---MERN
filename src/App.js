import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// layouts
import Auth from "layouts/Auth.js";
import Work from "layouts/Work.js";
import Admin from "layouts/Admin.js";
import Dashboard from "features/main/dashboard.js"

import { attemptGetUser } from "./app/thunks/user";
// views without layouts
import './App.css';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(attemptGetUser())
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return loading ? (
      <p>Loading</p>
    ) : (
    <BrowserRouter>
      <Routes>
        {/* add routes with layouts */}
        <Route path="/auth/*" element={ <Auth/>} />
        <Route path="/work/*" element={ <Work/>} />
        <Route path="/admin/*" element={ <Admin/>} />
        {/* add routes without layouts */}
        <Route path="/" exact element={<Dashboard/>} />
        {/* add redirect for first page */}
        {<Route path="*" element={<Navigate to="/work"/>} />}
      </Routes>
  </BrowserRouter>
  );
}

export default App;

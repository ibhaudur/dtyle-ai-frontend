import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import React from "react";
import "./assets/style.css";
import Header from "./layout/Header";
import Dashboard from "./pages/Dashboard";
import CameraFeed from "./pages/CameraFeed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Header />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/camera-feed" element={<CameraFeed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

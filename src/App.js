import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from "./components/WelcomePage.js";
import RegisterPage from "./components/RegisterPage.js";
import LoginPage from "./components/LoginPage.js";
import { UserProvider } from './contexts/UserContext.js';
import { ToastContainer } from 'react-toastify';
import DashboardPage from "./components/DashboardPage.js";


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/create-account" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer /> {/* Render ToastContainer here */}
    </UserProvider>
  );
}

export default App;

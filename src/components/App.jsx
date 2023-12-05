import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from 'Layout/Layout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

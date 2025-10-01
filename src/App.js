import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="BYS-Legality/privacy" element={<PrivacyPolicy />} />
        <Route path="BYS-Legality/terms" element={<Terms />} />
        <Route path="*" element={<Navigate to="BYS-Legality/privacy" />} />
      </Routes>
    </>
  );
}

export default App;

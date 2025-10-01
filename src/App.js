import React from 'react';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Header from './components/Header';
import './style.css';

function getPageComponent(page) {
  switch (page) {
    case 'privacy':
      return <PrivacyPolicy />;
    case 'tos':
      return <Terms />;
    default:
      return <PrivacyPolicy />;
  }
}

function App() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page') || 'privacy';

  return (
    <>
      <Header />
      {getPageComponent(page)}
    </>
  );
}

export default App;
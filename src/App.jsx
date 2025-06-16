import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="app-container">
      <header>
        <Link to="/"><h1>Aplikasi Catatan</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

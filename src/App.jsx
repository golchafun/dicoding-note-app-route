import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AddNotePage from './pages/AddNotePage';

function App() {
  return (
    <div className="app-container">
      <header>
        <Link to="/"><h1>Aplikasi Catatan</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/newnotes" element={<AddNotePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

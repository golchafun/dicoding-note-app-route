import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import Navigation from './components/Navigation';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUserLogged();
      if (data) {
        setAuthedUser(data);
      }
      setInitializing(false);
    };

    fetchUser();
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div className="app-container">
        <header>

          <h1><Link to="/">Aplikasi Catatan</Link></h1>
  
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
  };

  return (
    <div className="app-container">
      <header>
        <h1><Link to="/">Aplikasi Catatan</Link></h1>
        <Navigation logout={onLogout} name={authedUser.name}/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

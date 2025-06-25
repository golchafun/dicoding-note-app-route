import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import { useState } from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const [authedUser, setAuthedUser] = useState(null); 

  const onLoginSuccess = async ({accessToken}) => {
    putAccessToken(accessToken);
    const {data} = await getUserLogged();
    setAuthedUser(data);
  }

  if(authedUser === null){
    return(
      <div className="app-container">
      <header>
        <Link to="/"><h1>Aplikasi Catatan</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
          <Route path='/register' element={<RegisterPage />}/>
        </Routes>
      </main>
    </div>
    );
  }

  return (
    <div className="app-container">
      <header>
        <Link to="/"><h1>Aplikasi Catatan</h1></Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

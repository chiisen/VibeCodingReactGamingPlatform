import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './components/LandingPage/LandingPage';
import GameStudio from './components/GameStudio/GameStudio';
import GameGallery from './components/GameGallery/GameGallery';
import GamePlayer from './components/GamePlayer/GamePlayer';
import UserProfile from './components/UserProfile/UserProfile';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/studio" element={<GameStudio />} />
            <Route path="/studio/:gameId" element={<GameStudio />} />
            <Route path="/gallery" element={<GameGallery />} />
            <Route path="/play/:gameId" element={<GamePlayer />} />
            <Route path="/profile/:userId" element={<UserProfile />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </main>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;

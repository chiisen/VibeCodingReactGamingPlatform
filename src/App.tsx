import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './components/LandingPage/LandingPage.tsx';
import GameStudio from './components/GameStudio/GameStudio.tsx';
import GameGallery from './components/GameGallery/GameGallery.tsx';
import GamePlayer from './components/GamePlayer/GamePlayer.tsx';
import UserProfile from './components/UserProfile/UserProfile.tsx';
import Navbar from './components/common/Navbar.tsx';
import { I18nProvider } from './i18n.tsx';

function App() {
  return (
    <I18nProvider>
      <Router future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}>
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
    </I18nProvider>
  );
}

export default App;

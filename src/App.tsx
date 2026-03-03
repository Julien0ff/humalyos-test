import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Missions from './pages/Missions';
import History from './pages/History';
import Team from './pages/Team';
import Donations from './pages/Donations';
import Login from './pages/Login';
import Portal from './pages/Portal';
import Join from './pages/Join';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background text-secondary">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/histoire" element={<History />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/dons" element={<Donations />} />
            <Route path="/login" element={<Login />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/rejoindre" element={<Join />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="/confidentialite" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

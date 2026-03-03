import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Missions', path: '/missions' },
    { name: 'Notre Histoire', path: '/histoire' },
    { name: 'L\'Équipe', path: '/equipe' },
    { name: 'Nous Rejoindre', path: '/rejoindre' },
    { name: 'Faire un don', path: '/dons' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img src="/assets/logo.png" alt="Humalyos Logo" className="h-14 w-14 mr-3 transition-transform group-hover:scale-110" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-primary leading-none tracking-tighter">HUMALYOS</span>
                <span className="text-[10px] font-bold text-secondary tracking-[0.2em] uppercase">Antenne Nationale</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all ${
                  isActive(link.path) 
                  ? 'text-secondary bg-slate-50' 
                  : 'text-primary hover:bg-slate-50 hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-8 w-[2px] bg-slate-200 mx-4"></div>
            <Link
              to="/login"
              className={`flex items-center px-6 py-2.5 rounded-full text-sm font-black uppercase transition-all shadow-lg hover:shadow-secondary/20 ${
                isActive('/login')
                ? 'bg-primary text-white'
                : 'bg-secondary text-white hover:bg-primary'
              }`}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Connexion
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-bold uppercase ${
                  isActive(link.path)
                  ? 'text-secondary bg-slate-50'
                  : 'text-primary hover:bg-slate-50 hover:text-secondary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className={`flex items-center m-2 px-4 py-3 rounded-md text-base font-black uppercase ${
                isActive('/login')
                ? 'bg-primary text-white'
                : 'bg-secondary text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Espace Membre
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

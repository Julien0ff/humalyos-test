import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 relative">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="src/assets/logo.png" alt="Humalyos Logo" className="h-16 w-16 mr-4" />
              <div className="flex flex-col">
                <h2 className="text-3xl font-black text-white tracking-tighter leading-none">HUMALYOS</h2>
                <span className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase mt-1">Antenne Nationale</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 max-w-md text-lg leading-relaxed font-medium">
              Protection des droits, aide sociale et sécurité numérique. 
              Une organisation engagée pour la sécurité de tous les citoyens.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.linkedin.com/company/an-humalyos/" className="bg-white/10 p-3 rounded-full hover:bg-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/an_humalyos?igsh=a2c2aW5zMDRweHdi" className="bg-white/10 p-3 rounded-full hover:bg-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black text-accent mb-8 uppercase tracking-[0.2em]">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-300 hover:text-white font-bold transition-colors uppercase text-sm">Accueil</Link></li>
              <li><Link to="/missions" className="text-slate-300 hover:text-white font-bold transition-colors uppercase text-sm">Missions</Link></li>
              <li><Link to="/histoire" className="text-slate-300 hover:text-white font-bold transition-colors uppercase text-sm">Notre Histoire</Link></li>
              <li><Link to="/equipe" className="text-slate-300 hover:text-white font-bold transition-colors uppercase text-sm">L'Équipe</Link></li>
              <li><Link to="/dons" className="text-slate-300 hover:text-white font-bold transition-colors uppercase text-sm text-secondary">Faire un don</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-black text-accent mb-8 uppercase tracking-[0.2em]">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-secondary flex-shrink-0" />
                <span className="text-slate-300 font-bold text-sm">La Chapelle Saint Luc, AUBE, France</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-4 text-secondary flex-shrink-0" />
                <span className="text-slate-300 font-bold text-sm">Aucun numéro de téléphone n'est actuellement disponible.</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-secondary flex-shrink-0" />
                <span className="text-slate-300 font-bold text-sm">contact@humalyos.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © 2026 HUMALYOS - ASSOCIATION LOI 1901. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex space-x-8">
            <Link to="/mentions-legales" className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Mentions Légales</Link>
            <Link to="/confidentialite" className="text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

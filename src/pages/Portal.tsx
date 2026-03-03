import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Calendar, Shield, FileText, Settings, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';

interface MemberData {
  P_PRENOM: string;
  P_NOM: string;
  P_CODE: string;
  role: string;
}

const Portal = () => {
  const [user, setUser] = useState<MemberData | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('humalyos_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      // Pour la démo, on simule un utilisateur si aucun n'est trouvé
      const demoUser = {
        P_PRENOM: "Membre",
        P_NOM: "Humalyos",
        P_CODE: "H-2024-001",
        role: "Bénévole"
      };
      setUser(demoUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('humalyos_user');
    window.location.href = '/login';
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Tableau de bord", active: true },
    { icon: <Users size={20} />, label: "Membres & Unités" },
    { icon: <Calendar size={20} />, label: "Planning & Interventions" },
    { icon: <Shield size={20} />, label: "Mes Formations" },
    { icon: <FileText size={20} />, label: "Documents" },
    { icon: <Settings size={20} />, label: "Paramètres" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white hidden md:flex flex-col fixed h-full">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-primary font-bold">
              H
            </div>
            <span className="font-bold text-xl tracking-tight">PORTAIL</span>
          </div>
          
          <nav className="space-y-1">
            {menuItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active 
                    ? 'bg-secondary text-white' 
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-slate-300 hover:bg-red-500/20 hover:text-red-400 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-primary uppercase tracking-tight">
              Bienvenue, <span className="text-secondary">{user?.P_PRENOM}</span> 👋
            </h1>
            <p className="text-slate-500 font-medium">Instance eBrigade : Groupement Ma Belle France</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="font-bold text-primary">{user?.P_PRENOM} {user?.P_NOM}</p>
              <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">{user?.P_CODE}</p>
            </div>
            <div className="w-12 h-12 bg-secondary rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-xl">
              {user?.P_PRENOM[0]}
            </div>
          </div>
        </header>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Missions en cours", value: "12", color: "border-secondary" },
            { label: "Heures de bénévolat", value: "148h", color: "border-accent" },
            { label: "Prochaine formation", value: "15/02", color: "border-primary" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white p-6 rounded-2xl shadow-sm border-l-8 ${stat.color}`}
            >
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-primary">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity / News */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-primary uppercase tracking-tight mb-6">Dernières actualités</h2>
            <div className="space-y-6">
              {[
                { date: "Hier", text: "Nouveaux équipements logistiques disponibles à l'unité ECHO." },
                { date: "29 Jan", text: "Mise à jour des protocoles de sécurité numérique pour l'unité Cyber." },
                { date: "25 Jan", text: "Campagne de don Tipeee : objectif atteint à 85% !" },
              ].map((news, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-xs font-bold text-secondary uppercase whitespace-nowrap pt-1">{news.date}</span>
                  <p className="text-slate-600 leading-snug">{news.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-primary uppercase tracking-tight mb-6">Accès rapides eBrigade</h2>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.ebrigade.online/groupementmabellefrance/index.php" target="_blank" className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-secondary transition-colors group">
                <p className="font-bold text-primary group-hover:text-secondary mb-1">Espace Officiel</p>
                <p className="text-xs text-slate-400 leading-tight">Accéder à l'interface complète eBrigade</p>
              </a>
              <a href="#" className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-secondary transition-colors group">
                <p className="font-bold text-primary group-hover:text-secondary mb-1">Ma Carte</p>
                <p className="text-xs text-slate-400 leading-tight">Visualiser ma carte de membre numérique</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portal;

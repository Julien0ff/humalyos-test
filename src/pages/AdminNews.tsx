import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Save, LayoutDashboard, LogOut, Loader2 } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  category: string;
}

const PASSWORD_KEY = 'humalyos-admin-session';
const ADMIN_PASSWORD = 'humalyos-admin-2024';

const AdminNews = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Form state
  const [newItem, setNewItem] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    content: '',
    category: 'Mission',
    image: ''
  });

  useEffect(() => {
    const session = sessionStorage.getItem(PASSWORD_KEY);
    if (session === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchNews();
    }
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/news');
      const data = await res.json();
      setNews(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(PASSWORD_KEY, ADMIN_PASSWORD);
      fetchNews();
      setError('');
    } else {
      setError('Mot de passe incorrect');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(PASSWORD_KEY);
    setIsAuthenticated(false);
  };

  const handleAddNews = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const updatedNews = [
      { ...newItem, id: Date.now().toString() },
      ...news
    ];

    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ auth: ADMIN_PASSWORD, news: updatedNews })
      });
      if (res.ok) {
        setNews(updatedNews);
        setNewItem({
          title: '',
          date: new Date().toISOString().split('T')[0],
          content: '',
          category: 'Mission',
          image: ''
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Supprimer cette actualité ?')) return;
    
    const updatedNews = news.filter(n => n.id !== id);
    try {
      await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ auth: ADMIN_PASSWORD, news: updatedNews })
      });
      setNews(updatedNews);
    } catch (err) {
      console.error(err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LayoutDashboard className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-primary font-poppins">ADMINISTRATION</h1>
            <p className="text-slate-500">Accès réservé - Gestion des actualités</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Mot de passe</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none font-medium"
                placeholder="••••••••"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm font-bold ml-1">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-accent transition-all shadow-lg"
            >
              Se connecter
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <h1 className="text-lg font-bold text-primary font-poppins uppercase tracking-tight">Console Admin</h1>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center px-4 py-2 text-slate-500 hover:text-red-500 font-bold text-sm uppercase tracking-wider transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-32">
              <h2 className="text-xl font-bold text-primary mb-8 font-poppins uppercase tracking-tight">Ajouter une Actu</h2>
              <form onSubmit={handleAddNews} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Titre</label>
                  <input 
                    value={newItem.title}
                    onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-accent outline-none font-medium"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Date</label>
                    <input 
                      type="date"
                      value={newItem.date}
                      onChange={(e) => setNewItem({...newItem, date: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-accent outline-none font-medium"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Catégorie</label>
                    <select 
                      value={newItem.category}
                      onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-accent outline-none font-medium"
                    >
                      <option>Mission</option>
                      <option>Événement</option>
                      <option>Annonce</option>
                      <option>Formation</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">URL Image (optionnel)</label>
                  <input 
                    value={newItem.image}
                    onChange={(e) => setNewItem({...newItem, image: e.target.value})}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-accent outline-none font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Contenu</label>
                  <textarea 
                    rows={6}
                    value={newItem.content}
                    onChange={(e) => setNewItem({...newItem, content: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-accent outline-none font-medium resize-none"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  disabled={saving}
                  className="w-full bg-accent text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                  Publier l'Actu
                </button>
              </form>
            </div>
          </div>

          {/* List Section */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-primary mb-8 font-poppins uppercase tracking-tight">Liste des News</h2>
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="w-10 h-10 animate-spin text-accent" />
              </div>
            ) : (
              <div className="space-y-4">
                {news.map(item => (
                  <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between group">
                    <div className="flex items-center gap-6">
                      {item.image && (
                        <img src={item.image} alt="" className="w-16 h-16 rounded-xl object-cover bg-slate-50" />
                      )}
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/5 px-2 py-0.5 rounded-full">
                            {item.category}
                          </span>
                          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                            {new Date(item.date).toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                        <h3 className="font-bold text-primary">{item.title}</h3>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                {news.length === 0 && (
                  <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                    <p className="text-slate-400 font-medium">Aucun article publié.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminNews;

import { LogIn, Loader2, User, Lock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { eBrigadeApi } from '../services/ebrigade';

const Login = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const result = await eBrigadeApi.login(formData.identifier, formData.password);
      
      if (result.success) {
        // Sauvegarde des données utilisateur réelles provenant de l'API
        const userData = {
          P_PRENOM: result.data?.firstName || "Membre",
          P_NOM: result.data?.lastName || "Humalyos",
          P_CODE: formData.identifier,
          role: result.data?.role || "Membre Actif"
        };
        localStorage.setItem('humalyos_user', JSON.stringify(userData));
        
        setStatus('success');
        setTimeout(() => {
          navigate('/portal');
        }, 500);
      } else {
        setStatus('error');
        setErrorMessage(result.message);
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage("Une erreur imprévue est survenue.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 relative overflow-hidden border border-slate-100"
      >
        {/* Décoration de marque */}
        <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>

        <div className="text-center mb-10 relative">
          <div className="bg-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20 transform -rotate-6">
            <LogIn className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-black text-primary uppercase tracking-tighter">Portail Interne</h2>
          <p className="text-slate-500 mt-2 font-medium">Connexion via les identifiants <span className="text-secondary font-bold">eBrigade</span></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {status === 'error' && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl flex items-center gap-3 text-sm font-bold"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              {errorMessage}
            </motion.div>
          )}

          {/* Identifier / Email */}
          <div className="relative">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 mb-1 block">Identifiant ou E-mail</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="identifier"
                required
                placeholder="Identifiant ou email"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all font-bold text-primary placeholder:text-slate-300"
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 mb-1 block">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-secondary/10 focus:border-secondary outline-none transition-all font-bold text-primary placeholder:text-slate-300"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={status === 'loading'}
            className={`w-full py-5 rounded-[1.25rem] font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all flex items-center justify-center gap-3 mt-4
              ${status === 'loading' ? 'bg-slate-100 text-slate-400 cursor-wait' : 
                'bg-primary text-white hover:bg-secondary hover:-translate-y-1 active:scale-[0.98] shadow-primary/20'}`}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Authentification...
              </>
            ) : (
              'Se connecter au portail'
            )}
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-slate-50 text-center">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
            Accès sécurisé Humalyos • Données synchronisées via eBrigade API
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

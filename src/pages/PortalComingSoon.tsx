import { motion } from 'framer-motion';
import { Construction, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortalComingSoon = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 relative overflow-hidden border border-slate-100 text-center"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -ml-16 -mb-16"></div>

        <div className="relative">
          <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <Construction className="w-12 h-12 text-primary" />
          </div>
          
          <h2 className="text-3xl font-black text-primary uppercase tracking-tighter mb-4">
            Portail Interne
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-bold">En développement</span>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Le portail interne HUMALYOS est actuellement en cours de développement. 
            Bientôt, vous pourrez accéder à votre espace membre, suivre vos formations, 
            consulter le planning des interventions et gérer vos informations.
          </p>

          <div className="bg-slate-50 p-6 rounded-2xl mb-8">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
              Pour toute question, contactez-nous
            </p>
            <a 
              href="mailto:contact@humalyos.fr" 
              className="inline-flex items-center gap-2 text-secondary font-bold hover:underline"
            >
              <Mail className="w-5 h-5" />
              contact@humalyos.fr
            </a>
          </div>

          <Link 
            to="/" 
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-black uppercase tracking-wider hover:bg-secondary transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PortalComingSoon;

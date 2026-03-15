import { ExternalLink, Heart, Coffee, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Donations = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Heart className="w-20 h-20 mx-auto mb-8 text-accent animate-pulse fill-accent" />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 uppercase tracking-tighter font-poppins text-white">
              SOUTENIR <span className="text-accent">HUMALYOS</span>
            </h1>
            <p className="text-xl font-bold text-slate-300 max-w-2xl mx-auto uppercase tracking-widest font-poppins">
              Votre engagement financier est notre force d'action sur le terrain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-slate-100">
                <h2 className="text-3xl font-bold text-primary mb-8 uppercase tracking-tighter font-poppins">Pourquoi donner ?</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary uppercase text-sm tracking-wider mb-2 font-poppins">Indépendance</h4>
                      <p className="text-slate-500 font-medium">Garantir notre liberté d'action et d'intervention.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <Coffee className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary uppercase text-sm tracking-wider mb-2 font-poppins">Proximité</h4>
                      <p className="text-slate-500 font-medium">Financer l'aide directe aux personnes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12 md:p-16 bg-slate-50/50">
                <div className="bg-white p-8 rounded-2xl shadow-inner border border-slate-100">
                  <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-tight text-center font-poppins">Faire un don sécurisé</h3>
                  <p className="text-slate-500 text-center mb-10 font-medium italic">
                    "Chaque don, même modeste, contribue directement à nos missions de protection."
                  </p>
                  <a 
                    href="https://fr.tipeee.com/antenne-nationale-humalyos/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-accent text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-lg font-poppins"
                  >
                    DONNER SUR TIPEEE
                    <ExternalLink className="ml-3 w-5 h-5" />
                  </a>
                  <p className="text-[10px] text-slate-400 text-center mt-6 font-bold uppercase tracking-widest font-poppins">
                    Paiement 100% sécurisé via la plateforme Tipeee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-8 font-poppins">Transparence & Confiance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="font-bold text-accent mb-2 font-poppins">Sécurisé</h3>
              <p className="text-gray-600">Transactions 100% sécurisées via Tipeee.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donations;

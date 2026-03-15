import { ArrowRight, Shield, Heart, Cpu, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import secourisme from '../assets/secourisme.png';

const Home = () => {
  const stats = [
    { label: 'Bénévoles', value: '36', icon: <Users className="w-6 h-6" /> },
    { label: 'Missions réalisées par an', value: '120', icon: <Zap className="w-6 h-6" /> },
    { label: 'Personnes aidées par an', value: '100', icon: <Heart className="w-6 h-6" /> },
  ];

  const featuredMissions = [
    {
      title: "Défense des droits",
      desc: "Protection des personnes et défense des droits fondamentaux.",
      icon: <Shield className="w-7 h-7 text-secondary" />,
    },
    {
      title: "Aide Sociale",
      desc: "Accompagnement psychologique et soutien aux plus démunis.",
      icon: <Heart className="w-7 h-7 text-secondary" />,
    },
    {
      title: "Sécurité Numérique",
      desc: "Prévention et intervention face aux menaces cyber.",
      icon: <Cpu className="w-7 h-7 text-secondary" />,
    },
  ];

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center bg-primary overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-primary via-transparent to-primary z-10"></div>
          <img 
            src={secourisme} 
            alt="Secourisme" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="h-[2px] w-12 bg-secondary"></span>
              <span className="text-secondary font-black uppercase tracking-[0.3em] text-sm">Protection & Solidarité</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-8 uppercase tracking-tighter">
              L'URGENCE <br />
              AU SERVICE DE <br />
              <span className="text-accent">L'HUMAIN.</span>
            </h1>
            
            <p className="text-lg text-slate-300 font-medium mb-10 leading-relaxed">
              Humalyos intervient sur tous les fronts : protection des droits, aide sociale et sécurité numérique.
              Notre devise : Pro bono civico (pour le bien civique)
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/missions" 
                className="inline-flex items-center justify-center bg-secondary text-white px-8 py-4 rounded-full font-black uppercase tracking-wider hover:bg-white hover:text-primary transition-all shadow-xl"
              >
                NOS MISSIONS
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/dons" 
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-black uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                FAIRE UN DON
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom diagonal divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120L0 0L1200 120Z" className="fill-background"></path>
          </svg>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-white py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-black text-primary">24/7</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Disponibilité</span>
            </div>
            <div className="flex flex-col items-center text-center border-l border-slate-100">
              <span className="text-3xl font-black text-primary">100%</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Engagement</span>
            </div>
            <div className="flex flex-col items-center text-center border-l border-slate-100">
              <span className="text-3xl font-black text-primary">FRANCE</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Couverture</span>
            </div>
            <div className="flex flex-col items-center text-center border-l border-slate-100">
              <span className="text-3xl font-black text-primary">ASSO</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Loi 1901</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center p-8 bg-background rounded-2xl text-center"
              >
                <div className="p-3 bg-white rounded-full shadow-sm text-primary mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Missions Highlight */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Nos Domaines d'Intervention</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous intervenons sur plusieurs fronts pour assurer une protection globale et un accompagnement de qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMissions.map((mission, index) => (
              <div 
                key={index} 
                className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary/30 rounded-t-2xl"></div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary/15 transition-colors">
                    {mission.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-primary uppercase tracking-tight mb-2">
                      {mission.title}
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed mb-6">
                      {mission.desc}
                    </p>
                    <Link 
                      to="/missions" 
                      className="inline-flex items-center text-sm font-black text-secondary uppercase tracking-widest hover:text-primary transition-colors"
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Rejoignez l'aventure Humalyos</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Que vous souhaitiez devenir bénévole, partenaire ou nous soutenir financièrement, chaque action compte.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all">
              Devenir Bénévole
            </button>
            <Link to="/dons" className="bg-accent text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all">
              Faire un Don
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

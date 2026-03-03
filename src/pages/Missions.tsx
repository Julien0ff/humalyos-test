import { Shield, Heart, Cpu, Zap, GraduationCap, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Missions = () => {
  const missionList = [
    {
      title: "Défense des droits et protection des personnes",
      icon: <Shield className="w-12 h-12" />,
      description: "Nous luttons pour le respect des droits fondamentaux et assurons une protection active des populations vulnérables.",
      details: [
        "Défendre les droits fondamentaux",
        "Promouvoir la justice et les valeurs démocratiques",
        "Protéger les personnes vulnérables",
        "Lutte contre toutes formes de harcèlement (moral, sexuel, scolaire, professionnel)"
      ]
    },
    {
      title: "Aide sociale, psychologique et accompagnement",
      icon: <Heart className="w-12 h-12" />,
      description: "Soutenir les personnes en détresse et accompagner psychologiquement les personnes en difficulté.",
      details: [
        "Soutenir les personnes en détresse",
        "Accompagner psychologiquement les personnes en difficulté",
        "Mettre en place des plateformes d’écoute et d’aide en ligne",
        "Prévenir les addictions",
        "Sensibiliser à la santé mentale et lutter contre les tabous"
      ]
    },
    {
      title: "Sécurité numérique",
      icon: <Cpu className="w-12 h-12" />,
      description: "Prévenir la cybercriminalité et protéger vos données personnelles dans l'espace numérique.",
      details: [
        "Prévenir la cybercriminalité",
        "Protéger les données personnelles",
        "Sensibiliser aux bonnes pratiques numériques"
      ]
    },
    {
      title: "Interventions d’urgence",
      icon: <Zap className="w-12 h-12" />,
      description: "Réactivité et soutien logistique lors de crises majeures ou d'incidents locaux.",
      details: [
        "Éclairer les mairies d'incidents lors d'évènements de crises",
        "Gérer temporairement des centres d’hébergement",
        "Transporter les personnes sinistrées",
        "Transport et protection des biens essentiels",
        "Distribuer du matériel pour les populations sinistrés"
      ]
    },
    {
      title: "Formation & prévention",
      icon: <GraduationCap className="w-12 h-12" />,
      description: "Éduquer et informer le public sur la prévention globale et les risques divers.",
      details: [
        "Prévenir les risques domestiques, naturels et technologiques",
        "Éduquer et informer le public sur la prévention globale",
        "Former les bénévoles à intervenir"
      ]
    },
    {
      title: "Solidarité et actions citoyennes",
      icon: <Users className="w-12 h-12" />,
      description: "Promouvoir la solidarité nationale et locale par des actions d'entraide concrètes.",
      details: [
        "Promouvoir la solidarité nationale et locale",
        "Mise en place d’actions d’entraide",
        "Participer à la cohésion sociale"
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
              NOS <span className="text-accent">MISSIONS</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed border-l-4 border-secondary pl-6">
              Une expertise pluridisciplinaire au service de la protection des droits, 
              de l'aide sociale et de la sécurité numérique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missions Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionList.map((mission, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="text-secondary bg-slate-50 p-6 rounded-2xl h-fit">
                    {mission.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tight">{mission.title}</h3>
                    <p className="text-slate-500 mb-8 font-medium leading-relaxed">{mission.description}</p>
                    <ul className="space-y-3">
                      {mission.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm font-bold text-slate-400 uppercase tracking-wide">
                          <CheckCircle2 className="w-4 h-4 mr-3 text-secondary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Vous souhaitez en savoir plus sur nos actions ?</h2>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all">
            Nous contacter
          </button>
        </div>
      </section>
    </div>
  );
};

export default Missions;

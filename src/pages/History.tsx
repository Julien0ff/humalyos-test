import { motion } from 'framer-motion';
import { Calendar, Award, Users, Shield, Rocket, Handshake, Landmark, RotateCcw } from 'lucide-react';

const History = () => {
  const events = [
    {
      date: "Novembre 2022",
      title: "La Genèse du Groupement",
      description: "L'idée de création du groupement prend forme : un endroit dédié à l'aide des victimes de cybercriminalité, de harcèlement et au soutien psychologique.",
      icon: <Rocket className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      date: "25 Août 2023",
      title: "Démarches Administratives",
      description: "Envoi du dossier de création de l'association à la préfecture de l'Aube.",
      icon: <Landmark className="w-6 h-6" />,
      color: "bg-slate-500"
    },
    {
      date: "28 Août 2023",
      title: "Naissance Officielle",
      description: "Validation de la création de l'association sous le nom de 'Groupement Ma Belle France'.",
      icon: <Award className="w-6 h-6" />,
      color: "bg-secondary"
    },
    {
      date: "26 Janvier 2025",
      title: "Affiliation Fédérale",
      description: "Le groupement devient une association adhérente à la fédération 'Groupe Associatif Ma Belle France'.",
      icon: <Handshake className="w-6 h-6" />,
      color: "bg-primary"
    },
    {
      date: "Mars 2025",
      title: "Accord Logistique",
      description: "Signature d'un accord avec la fédération pour la gestion mutualisée de la logistique du groupement.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-blue-600"
    },
    {
      date: "Juin 2025",
      title: "Déploiement des Unités",
      description: "Toutes les unités du groupement sont créées et entrent en phase de développement actif.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-secondary"
    },
    {
      date: "30 Août 2025",
      title: "Mutation Structurelle",
      description: "Lors d'une assemblée générale extraordinaire, il est voté que toutes les antennes départementales et régionales devront devenir des associations autonomes.",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-primary"
    },
    {
      date: "29 Novembre 2025",
      title: "Antenne Nationale Humalyos",
      description: "Assemblée générale extraordinaire actant le changement de nom officiel pour devenir l'Antenne Nationale Humalyos.",
      icon: <RotateCcw className="w-6 h-6" />,
      color: "bg-accent text-primary"
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
              NOTRE <span className="text-accent">HISTOIRE</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed border-l-4 border-secondary pl-6">
              De l'idée originelle à l'Antenne Nationale Humalyos : découvrez les étapes clés de notre engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-translate-x-1/2"></div>

            <div className="space-y-16">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white bg-secondary shadow-lg z-10 -translate-x-1/2 transition-transform group-hover:scale-125"></div>

                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl ${event.color} text-white shadow-sm`}>
                          {event.icon}
                        </div>
                        <span className="text-secondary font-black uppercase tracking-widest text-sm">{event.date}</span>
                      </div>
                      <h3 className="text-2xl font-black text-primary mb-3 uppercase tracking-tight">{event.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;

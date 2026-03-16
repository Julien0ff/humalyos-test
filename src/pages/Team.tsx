import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, ExternalLink, UserPlus, X, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { eBrigadeApi } from '../services/ebrigade';
import pierrickImg from '../assets/Pierrick.jpg';
import sachaImg from '../assets/Sacha.jpg';
import wahidImg from '../assets/Wahid.jpg';
import romainImg from '../assets/Romain.jpg';
import kilianImg from '../assets/Kilian.jpg';
import julienImg from '../assets/Julien.jpg';
import gabinImg from '../assets/Gabin.jpg';
import chrisImg from '../assets/Chris.jpg';
import jeanImg from '../assets/Jean.jpg';
import dylanImg from '../assets/Dylan.jpg';
import lenaImg from '../assets/Lena.png'; // Ajoutez votre fichier Lena.jpg dans le dossier src/assets/

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      // Préparation des données pour eBrigade selon le format attendu
      // P_CODE est requis par l'API selon le feedback utilisateur
      const eBrigadeData = {
        users: [{
          P_PRENOM: formData.firstName,
          P_NOM: formData.lastName,
          P_EMAIL: formData.email,
          P_TEL_PORTABLE: formData.phone,
          P_CODE: `WEB-${Date.now()}`, // Génération d'un code temporaire
          P_STATUT: '1', // Statut par défaut (souvent 1 pour actif ou à valider)
          COMMENTAIRE: formData.message
        }]
      };

      const result = await eBrigadeApi.importPeople(eBrigadeData);

      if (result.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus('idle');
          setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        }, 2000);
      } else {
        throw new Error(result.message || 'Erreur lors de l\'envoi');
      }
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(err.message || 'Une erreur est survenue');
    }
  };
  const sections = [
    {
      title: "Présidence",
      members: [
        {
          name: "Pierrick Cornuat",
          role: "Président de l'antenne Nationale",
          email: "pierrick.cornuat@humalyos.fr",
          linkedin: "https://www.linkedin.com/in/pierrick-cornuat-43081131a/",
          image: pierrickImg,
          bio: "Direction stratégique et représentation de l'antenne nationale."
        },
        {
          name: "Sacha Majcherczak",
          role: "Vice Président, Coordinateur unité psychologique & Responsable Zone NORD",
          email: "sacha.majcherczak@humalyos.fr",
          image: sachaImg,
          bio: "Expertise psychologique et coordination de la zone Nord."
        },
        {
          name: "Wahid Habbar",
          role: "Vice président, Responsable régional Normandie",
          email: "wahid.habbar@humalyos.fr",
          image: wahidImg,
          bio: "Développement et coordination de la région Normandie."
        }
      ]
    },
    {
      title: "Bureau",
      members: [
        {
          name: "Romain Rodriguez",
          role: "Secrétaire général, Assistant/conseiller juridique, Responsable Zone EST & Responsable groupes de paroles",
          email: "romain.rodriguez@humalyos.fr",
          linkedin: "https://www.linkedin.com/in/romain-rodriguez-102015380/",
          image: romainImg,
          bio: "Gestion administrative et coordination des groupes de parole."
        },
        {
          name: "Kilian Didelet",
          role: "Trésorier, Responsable départemental de la Loire",
          email: "kilian.didelet@humalyos.fr",
          image: kilianImg,
          bio: "Gestion financière et déploiement dans la Loire."
        }
      ]
    },
    {
      title: "Responsable Des Unités",
      members: [
        {
          name: "Julien Vrignaud",
          role: "Responsable Unité Harcèlement & Préventions, Responsable Grand Est",
          email: "julien.vrignaud@solreca-group.fr",
          image: julienImg,
          bio: "Lutte contre le harcèlement et prévention en région Grand Est."
        },
        {
          name: "Gabin Hugerot",
          role: "Responsable Unité Harcèlement & Préventions",
          email: "gabin.hugerot@humalyos.fr",
          image: gabinImg,
          bio: "Expertise en dispositifs de prévention du harcèlement."
        },
        {
          name: "Christophe Plane",
          role: "Responsable Unité Cyber, Responsable Zone SUD & PACA",
          email: "christophe.plane@humalyos.fr",
          linkedin: "https://www.linkedin.com/in/christophe-plane-a571942a4/",
          image: chrisImg,
          bio: "Protection numérique et coordination de la zone Sud."
        },
        {
          name: "Jean Alain Adli",
          role: "Responsable ECHO (Evacuation, Coordination, Hébergement, Organisation), Dept Haut Rhin",
          email: "jeanadli3@gmail.com",
          image: jeanImg,
          bio: "Coordination des secours d'urgence et hébergement."
        },
        {
          name: "Léna Riccardi",
          role: "Responsable de l'unité psychologique",
          email: "lena.riccardi@humalyos.fr",
          image: lenaImg,
          bio: "Soutien et coordination de l'unité d'accompagnement psychologique."
        }
      ]
    },
    {
      title: "Responsable de Zone",
      members: [
        {
          name: "Dylan Plaire Hatie",
          role: "Responsable de la zone EST",
          email: "dylan.plaire-hatie@humalyos.fr",
          image: dylanImg,
          bio: "Coordination opérationnelle de la zone Est."
        }
      ]
    }
  ];

  const recruitmentPositions = [
    "Responsable Logistique",
    "Responsable des formations",
    "Responsable des activités",
    "Responsable des unités"
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tighter font-poppins text-white">
              L'ÉQUIPE <span className="text-accent">HUMALYOS</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed border-l-4 border-accent pl-6">
              Une organisation structurée au service de l'intérêt général.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Sections */}
      {sections.map((section, sIndex) => (
        <section key={sIndex} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-3xl font-black text-primary uppercase tracking-tight font-poppins">{section.title}</h2>
              <div className="h-1 flex-grow bg-slate-100 rounded-full">
                <div className="h-full w-24 bg-accent rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
                >
                  <div className="h-64 overflow-hidden relative bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="flex space-x-3">
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-full text-primary hover:bg-accent hover:text-white transition-all shadow-lg">
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="p-2.5 bg-white rounded-full text-primary hover:bg-accent hover:text-white transition-all shadow-lg">
                            <Mail className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-primary uppercase tracking-tight leading-tight font-poppins">{member.name}</h3>
                      <p className="text-accent font-bold text-xs uppercase tracking-widest mt-1 min-h-[2rem] leading-relaxed font-poppins">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">Humalyos France</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-200" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bureau Exécutif / Recrutement */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-primary uppercase tracking-tighter mb-4 font-poppins">Bureau Exécutif</h2>
            <p className="text-lg text-slate-500 font-medium mb-12">Rejoignez notre équipe dirigeante. Postes à promouvoir :</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recruitmentPositions.map((position, index) => (
                <a href="/rejoindre" key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-accent transition-colors group block">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                    <UserPlus className="w-6 h-6 text-slate-400 group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="font-bold text-primary uppercase text-sm tracking-wide font-poppins">{position}</h4>
                  <div className="mt-4 inline-block text-[10px] font-bold text-accent uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Postuler →
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-16">
              <a
                href="/rejoindre"
                className="inline-flex items-center bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent transition-all shadow-xl hover:shadow-accent/20 font-poppins"
              >
                Nous rejoindre
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>

              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-primary uppercase tracking-tighter font-poppins">Devenir membre</h2>
                    <p className="text-slate-500 font-medium mt-1">Rejoignez l'Antenne Nationale Humalyos</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-400" />
                  </button>
                </div>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-2 uppercase">Candidature Envoyée !</h3>
                    <p className="text-slate-500 font-medium">Votre demande a été transmise à notre équipe via eBrigade.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleJoinSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-black text-primary uppercase tracking-widest mb-1.5 ml-1">Prénom</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none"
                          placeholder="Jean"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5 ml-1 font-poppins">Nom</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none"
                          placeholder="Dupont"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5 ml-1 font-poppins">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none"
                        placeholder="jean.dupont@exemple.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5 ml-1 font-poppins">Téléphone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none"
                        placeholder="06 12 34 56 78"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-1.5 ml-1 font-poppins">Message / Motivations</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none resize-none"
                        placeholder="Pourquoi souhaitez-vous nous rejoindre ?"
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg hover:bg-accent transition-all flex items-center justify-center gap-3 disabled:bg-slate-200 font-poppins"
                    >
                      {submitStatus === 'loading' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;

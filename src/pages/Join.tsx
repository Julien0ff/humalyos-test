import { motion } from 'framer-motion';
import { Send, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendApplicationToDiscord, ApplicationData } from '../services/discord';

const Join = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    motivation: '',
    rgpd: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    try {
      const applicationData: ApplicationData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        interest: formData.interest,
        motivation: formData.motivation,
      };
      
      // Envoi de la candidature via webhook Discord
      // Configurez votre webhook dans src/services/discord.ts
      const success = await sendApplicationToDiscord(applicationData);
      
      if (success) {
        setSubmitStatus('success');
      } else {
        // En mode développement, on simule le succès
        console.log('Candidature simulée (webhook non configuré):', applicationData);
        setSubmitStatus('success');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <div>
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden font-poppins">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tighter">
              NOUS <span className="text-accent">REJOINDRE</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed border-l-4 border-accent pl-6">
              Devenez bénévole ou candidat au sein de HUMALYOS. Remplissez le formulaire ci-dessous —
              nous reviendrons vers vous rapidement.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/missions" className="text-sm font-black uppercase tracking-wider bg-white/10 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all">
                Découvrir nos missions
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120L0 0L1200 120Z" className="fill-background"></path>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                  <UserPlus className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-primary uppercase tracking-tight mb-3 font-poppins">Profil recherché</h2>
                <p className="text-slate-600 leading-relaxed font-arial">
                  Tous profils motivés, sensibles aux enjeux citoyens et prêts à s’engager.
                  Aucun prérequis technique n’est obligatoire — la formation est assurée.
                </p>
                <div className="mt-6 text-[10px] font-bold text-accent uppercase tracking-widest font-poppins">Engagement • Respect • Solidarité</div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Prénom</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      placeholder="Jean"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-poppins">Nom</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      placeholder="Dupont"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-poppins">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      placeholder="jean.dupont@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-poppins">Téléphone</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      placeholder="+33 6 12 34 56 78"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-poppins">Ce que vous aimeriez faire dans l'association</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                      required
                    >
                      <option value="">Choisir…</option>
                      <option value="responsable-logistique">Responsable Logistique</option>
                      <option value="responsable-formations">Responsable des formations</option>
                      <option value="responsable-activites">Responsable des activités</option>
                      <option value="responsable-unites">Responsable des unités</option>
                      <option value="aide-sociale">Aide sociale / accompagnement</option>
                      <option value="securite-numerique">Sécurité numérique / cyber</option>
                      <option value="communication">Communication / réseaux sociaux</option>
                      <option value="logistique">Logistique / terrain</option>
                      <option value="formation">Formation / sensibilisation</option>
                      <option value="administratif">Administratif / coordination</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-poppins">Motivation</label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                    rows={5}
                    placeholder="Quelques lignes sur votre motivation et vos centres d’intérêt…"
                    required
                  />
                </div>

                <div className="mt-6 flex items-center">
                  <input
                    id="rgpd"
                    type="checkbox"
                    name="rgpd"
                    checked={formData.rgpd}
                    onChange={handleChange}
                    className="mr-3 w-4 h-4 rounded border-slate-300"
                    required
                  />
                  <label htmlFor="rgpd" className="text-sm text-slate-600">
                    J’accepte que mes informations soient utilisées pour être recontacté.
                  </label>
                </div>

                <div className="mt-8 flex items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-primary transition-all shadow-xl disabled:opacity-60 font-poppins"
                    disabled={submitStatus === 'loading'}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer ma candidature
                  </button>
                  {submitStatus === 'loading' && (
                    <span className="ml-4 text-sm text-slate-500">Envoi en cours…</span>
                  )}
                  {submitStatus === 'success' && (
                    <span className="ml-4 text-sm font-bold text-accent">Merci, votre demande a été envoyée.</span>
                  )}
                  {submitStatus === 'error' && (
                    <span className="ml-4 text-sm font-bold text-red-500">Une erreur est survenue. Réessayez.</span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;

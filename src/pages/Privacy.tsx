import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div>
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                POLITIQUE DE <span className="text-accent">CONFIDENTIALITÉ</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 font-medium leading-relaxed border-l-4 border-secondary pl-6">
              Comment nous protégeons et utilisons vos données personnelles.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120L0 0L1200 120Z" className="fill-background"></path>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                La présente politique de confidentialité décrit comment l'association HUMALYOS collecte, utilise et protège 
                vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) 
                et à la loi Informatique et Libertés du 6 janvier 1978.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">2. Responsable du traitement</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le responsable du traitement des données personnelles est :
              </p>
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <p className="font-bold text-primary mb-2">HUMALYOS</p>
                <p className="text-slate-600 mb-1">Association loi 1901</p>
                <p className="text-slate-600 mb-1">Email : contact@humalyos.fr</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">3. Données collectées</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Nous collectons les données suivantes :
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Formulaire de contact / Rejoindre :</strong> prénom, nom, adresse email, téléphone, motivation, domaine d'intérêt</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Dons :</strong> données nécessaires au traitement du don (transactions sécurisées)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées (via cookies analytics)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">4. Finalités du traitement</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Vos données sont utilisées pour :
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600">Répondre à vos demandes de contact</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600">Traiter votre candidature de bénévolat</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600">Émettre des reçus fiscaux pour les dons</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600">Améliorer notre site et notre communication</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">5. Base légale</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le traitement de vos données repose sur :
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Votre consentement</strong> (formulaire de contact, inscription)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>L'exécution d'un contrat</strong> (traitement des dons)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Notre intérêt légitime</strong> (amélioration du site, statistiques anonymisées)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">6. Destinataires</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Vos données peuvent être transmises aux tiers suivants :
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600">Équipe autorisée de HUMALYOS (pour traiter votre demande)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600">Prestataires techniques (hébergement, outils d'emailing)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600">Autorités compétentes (sur demande légale)</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Vos données ne sont jamais vendues à des tiers.</strong>
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">7. Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Ce site utilise des cookies pour :
              </p>
              <ul className="list-none space-y-3 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600">Mesurer l'audience (Google Analytics - données anonymisées)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600">Améliorer votre expérience de navigation</span>
                </li>
              </ul>
              <p className="text-slate-600">
                Vous pouvez accepter ou refuser les cookies via les paramètres de votre navigateur.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">8. Durée de conservation</h2>
              <p className="text-slate-600 leading-relaxed">
                Vos données sont conservées pour la durée nécessaire aux finalités du traitement :
              </p>
              <ul className="list-none space-y-3 mt-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Candidatures :</strong> 2 ans après le dernier contact</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Dons :</strong> 10 ans (obligations légales fiscales)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Données analytics :</strong> 13 mois (anonymisées)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">9. Vos droits</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Droit d'accès :</strong> obtenir la confirmation du traitement de vos données et en recevoir une copie</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Droit à l'effacement :</strong> demander la suppression de vos données</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-600"><strong>Droit de limitation :</strong> demander la suspension du traitement</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                Pour exercer ces droits, contactez-nous à : <Link to="mailto:contact@humalyos.fr" className="text-secondary font-bold">contact@humalyos.fr</Link>
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">10. Réclamation</h2>
              <p className="text-slate-600 leading-relaxed">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de la CNIL 
                (Commission Nationale de l'Informatique et des Libertés) via le site <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold underline">www.cnil.fr</a> 
                ou par courrier : CNIL, 3 Place de Fontenoy, 75007 Paris.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">11. Sécurité</h2>
              <p className="text-slate-600 leading-relaxed">
                Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre 
                tout accès non autorisé, modification, divulgation ou destruction. Les données sont stockées sur des serveurs 
                sécurisés et les transactions sont chiffrées via le protocole HTTPS.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">12. Modification</h2>
              <p className="text-slate-600 leading-relaxed">
                Cette politique de confidentialité peut être modifiée à tout moment. En cas de modification substantielle, 
                nous vous en informerons via le site.
              </p>
              <p className="text-slate-600 mt-4">
                <strong>Dernière mise à jour : Mars 2026</strong>
              </p>
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-slate-600 text-center">
                Pour toute question concernant cette politique de confidentialité, contactez-nous à l'adresse : 
                <Link to="mailto:contact@humalyos.fr" className="text-secondary font-bold ml-1">
                  contact@humalyos.fr
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

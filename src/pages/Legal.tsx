import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const Legal = () => {
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
                <Scale className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                MENTIONS <span className="text-accent">LÉGALES</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 font-medium leading-relaxed border-l-4 border-secondary pl-6">
              Les informations légales concernant l'association HUMALYOS et ce site internet.
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
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">1. Éditeur du site</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le site web accessible à l'adresse <strong>humalyos.fr</strong> est édité par :
              </p>
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <p className="font-bold text-primary mb-2">HUMALYOS</p>
                <p className="text-slate-600 mb-1">Association loi 1901</p>
                <p className="text-slate-600 mb-1">Siège social : La Chapelle Saint Luc, AUBE, France</p>
                <p className="text-slate-600 mb-1">RNA : W103008787</p>
                <p className="text-slate-600">Email : contact@humalyos.fr</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">2. Directeur de la publication</h2>
              <p className="text-slate-600 leading-relaxed">
                Le directeur de la publication est <strong>Pierrick Cornuat</strong>, Président de l'association HUMALYOS.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">3. Hébergement</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le site est hébergé par :
              </p>
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <p className="font-bold text-primary mb-2">BroCloud</p>
                <p className="text-slate-600 mb-1">France</p>
                <p className="text-slate-600">Site : brocloud.fr</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">4. Propriété intellectuelle</h2>
              <p className="text-slate-600 leading-relaxed">
                L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) 
                est protégé par le droit d'auteur et le droit de la propriété intellectuelle. 
                Toute reproduction, représentation, modification, publication, transmission, ou dénaturation, 
                totale ou partielle du site ou de ses contenus, sans autorisation écrite préalable de l'association HUMALYOS, 
                est interdite et constitue une contrefaçon.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">5. Responsabilité</h2>
              <p className="text-slate-600 leading-relaxed">
                Les informations fournies sur le site le sont à titre purement informatif. 
                HUMALYOS s'efforce d'assurer l'exactitude des informations présentes sur ce site, 
                mais ne peut garantir l'absence d'erreurs ou d'omissions. 
                L'association se réserve le droit de modifier ou corriger le contenu à tout moment sans préavis.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">6. Liens hypertextes</h2>
              <p className="text-slate-600 leading-relaxed">
                Le site peut contenir des liens vers d'autres sites internet. 
                HUMALYOS n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tight mb-4">7. Droit applicable</h2>
              <p className="text-slate-600 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-slate-600 text-center">
                Pour toute question concernant ces mentions légales, contactez-nous à l'adresse : 
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

export default Legal;

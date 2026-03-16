import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  category: string;
}

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tighter font-poppins">
              NOS <span className="text-accent">ACTUALITÉS</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed border-l-4 border-accent pl-6">
              Retrouvez toutes les dernières informations sur nos actions, nos missions et la vie du groupement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-accent mx-auto"></div>
            </div>
          ) : news.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <Newspaper className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">Aucune actualité pour le moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full"
                >
                  {item.image && (
                    <div className="h-48 overflow-hidden bg-slate-100">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center text-slate-400 text-xs font-medium">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(item.date).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 leading-tight font-poppins group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 mb-8 line-clamp-3 font-medium">
                      {item.content}
                    </p>
                    <div className="mt-auto pt-6 border-t border-slate-50">
                      <button className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group/btn">
                        Lire la suite
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';

import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const newsFilePath = path.join(__dirname, 'data', 'news.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// API Actualités
app.get('/api/news', (req, res) => {
  fs.readFile(newsFilePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Erreur lecture news' });
    res.json(JSON.parse(data));
  });
});

app.post('/api/news', (req, res) => {
  // Simple check - à améliorer avec un vrai Auth plus tard si besoin
  const { auth, news } = req.body;
  if (auth !== 'humalyos-admin-2024') return res.status(403).json({ error: 'Non autorisé' });
  
  fs.writeFile(newsFilePath, JSON.stringify(news, null, 2), (err) => {
    if (err) return res.status(500).json({ error: 'Erreur écriture news' });
    res.json({ success: true });
  });
});

// Configuration du Proxy pour l'API eBrigade (comme dans vite.config.ts)
app.use('/ebrigade-api', createProxyMiddleware({
  target: 'https://ebrigade.online/groupementmabellefrance/api',
  changeOrigin: true,
  pathRewrite: {
    '^/ebrigade-api': '',
  },
}));

// On sert les fichiers statiques du dossier 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Pour toutes les autres routes (React Router), on renvoie l'index.html de production
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

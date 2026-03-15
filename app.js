import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createProxyMiddleware } from 'http-proxy-middleware';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

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

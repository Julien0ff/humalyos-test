import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

console.log('--- Démarrage du serveur Humalyos ---');
console.log('Dossier courant :', __dirname);

// Servir les fichiers de production
app.use(express.static(path.join(__dirname, 'dist')));

// Rediriger toutes les requêtes vers l'index de production
app.get('*', (req, res) => {
  console.log(`Requête reçue : ${req.url}`);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

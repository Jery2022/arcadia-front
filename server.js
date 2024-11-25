import express from 'express';
import { createConnection } from 'mysql';
import { fileURLToPath } from 'url';
import path from 'path';
import  config  from './scripts/config.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Définir __dirname pour les modules ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Définir le middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Configurer la connexion à la base de données MariaDB
const db = createConnection({
  host: config.DB_Host,
  user: config.DB_User,
  password: config.DB_Password,
  port: config.DB_Port, 
  database: config.DB_Name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

/***
 * 
 * Les principales routes de l'application
 * 
 ***/

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//route pour la page about
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});


//route pour la page services
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'services.html'));
});

//route pour la page habitats
app.get('/habitats', (req, res) => {
  res.sendFile(path.join(__dirname, 'habitats.html'));
});

//route pour la page galerie
app.get('/galerie', (req, res) => {
  res.sendFile(path.join(__dirname, 'galerie.html'));
});

//route pour la page contact
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Route pour la page login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});




/*
// Route pour obtenir et afficher les images
app.get('/', (req, res) => {
  db.query('SELECT url FROM images;', (err, rows) => {
    if (err) {
      res.status(500).send('Database error');
      return;
    }
    let imagesHtml = rows.map(row => `<img src="${row.url}" alt="Image">`).join('');
    res.sendFile(path.join(__dirname, 'index.html'), 'utf8', (err, html) => {
      if (err) {
        res.status(500).send('Error reading index.html');
        return;
      }
      res.send(html.replace('<!-- Placeholder for images -->', imagesHtml));
    });
  });
});

*/

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



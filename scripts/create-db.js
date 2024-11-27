import { createConnection } from 'mysql';
import config from './config.js';

const connection = createConnection({
  host: config.DB_Host,
  user: config.DB_User,
  password: config.DB_Password,
  port: config.DB_Port  
});

// Connexion à la base de données
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');

  // Création de la base de données
  connection.query('CREATE DATABASE IF NOT EXISTS jery_zoo_arcadia;', err => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }
    console.log('Database created');

    // Utilisation de la base de données
    connection.query('USE jery_zoo_arcadia;', err => {
      if (err) {
        console.error('Error switching to database:', err);
        return;
      }
      console.log('Switched to database jery_zoo_arcadia');

      // Fermez la connexion après avoir terminé
      connection.end(err => {
        if (err) {
          console.error('Error closing the connection:', err);
        } else {
          console.log('Connection closed');
        }
      });
    });
  });
});



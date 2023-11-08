const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Utilisez une base de données en mémoire pour cet exemple
const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());

// Créez une table pour stocker les disponibilités de la maison
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS houseAvailability (date TEXT, isUnavailable BOOLEAN)');
});

app.get('/house_rental', (req, res) => {
  // Récupérez les disponibilités de la maison depuis la base de données SQLite
  db.all('SELECT * FROM houseAvailability', (err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erreur lors de la récupération des disponibilités' });
    }

    const houseAvailability = {};
    rows.forEach((row) => {
      houseAvailability[row.date] = row.isUnavailable;
    });

    res.json(houseAvailability);
  });
});

app.post('/update_availability', (req, res) => {
  const { dates, isUnavailable } = req.body;

  // Mettez à jour les disponibilités dans la base de données SQLite
  const stmt = db.prepare('INSERT OR REPLACE INTO houseAvailability (date, isUnavailable) VALUES (?, ?)');
  dates.forEach((date) => {
    stmt.run(date, isUnavailable);
  });
  stmt.finalize();

  res.json({ success: true, isUnavailable });
});

app.post('/delete_availability', (req, res) => {
  const { date } = req.body;

  // Supprimez une disponibilité de la maison de la base de données SQLite
  db.run('DELETE FROM houseAvailability WHERE date = ?', date, (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erreur lors de la suppression de la disponibilité' });
    }
    res.json({ success: true });
  });
});

app.post('/delete_all_availability', (req, res) => {
  // Marquez toutes les dates comme disponibles dans la base de données SQLite
  db.run('UPDATE houseAvailability SET isUnavailable = ?', false, (err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erreur lors de la mise à jour de la disponibilité' });
    }
    res.json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

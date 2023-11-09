const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

app.use(cors());
app.use(express.json());

// Chargez les données de disponibilité depuis le fichier JSON
let houseAvailability = {};

// Exemple : Marquer plusieurs dates comme disponibles
// const datesDisponibles = ['2023-11-15', '2023-11-16', '2023-11-17'];
// datesDisponibles.forEach((date) => {
//   houseAvailability[date] = true; // Dates marquées comme disponibles
// });

// Exemple : Marquer plusieurs dates comme indisponibles
// const datesIndisponibles = ['2023-12-01', '2023-12-02', '2023-12-03'];
// datesIndisponibles.forEach((date) => {
//   houseAvailability[date] = false; // Dates marquées comme indisponibles
// });

// Endpoint pour mettre à jour la disponibilité
app.post('/update_availability', (req, res) => {
  const { dates, isUnavailable } = req.body;
  dates.forEach((date) => {
    houseAvailability[date] = isUnavailable;
  });

  res.json({ success: true, isUnavailable });
});

app.get('/house_rental', (req, res) => {
  res.json(houseAvailability);
});

app.post('/delete_availability', (req, res) => {
  const { date } = req.body;
  if (houseAvailability[date] !== undefined) {
    delete houseAvailability[date];
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, message: 'La date n\'existe pas' });
  }
});

app.post('/delete_all_availability', (req, res) => {
  for (const date in houseAvailability) {
    houseAvailability[date] = false; // Marquer toutes les dates comme disponibles
  }

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});

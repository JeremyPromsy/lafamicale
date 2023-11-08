import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import { updateHouseAvailability, deleteAllHouseAvailability } from '../api';

const HouseRentalCalendarBackend = () => {
  const [houseAvailability, setHouseAvailability] = useState({});
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9000/house_rental');
      const data = response.data;
      setHouseAvailability(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données du calendrier :', error);
    }
  };

  const handleDateClick = (date) => {
    if (houseAvailability[date.toISOString().slice(0, 10)]) {
      setSelectedDates(selectedDates.filter((d) => d !== date));
    } else {
      setSelectedDates([...selectedDates, date.toISOString().slice(0, 10)]);
    }
  };

  const handleToggleHouseAvailability = async (isUnavailable) => {
    try {
      if (isUnavailable) {
        await updateHouseAvailability(selectedDates, isUnavailable);
      } else {
        await deleteAllHouseAvailability(); // Utiliser la fonction de suppression de toutes les disponibilités
      }
      fetchData();
      setSelectedDates([]);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la disponibilité :', error);
    }
  };

  return (
    <div>
      <h2>Calendrier de location (Backend)</h2>
      <div className="calendar">
        <Calendar
          onClickDay={handleDateClick}
          tileClassName={({ date }) => (houseAvailability[date.toISOString().slice(0, 10)] ? 'unavailable' : 'available')}
        />
      </div>
      <div className="availability-buttons">
        <button onClick={() => handleToggleHouseAvailability(true)}>Rendre indisponible</button>
        <button onClick={() => handleToggleHouseAvailability(false)}>Tout rendre disponible</button>
      </div>
    </div>
  );
};

export default HouseRentalCalendarBackend;

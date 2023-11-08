import "../styles/location.css"
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

const HouseRentalCalendarFrontend = () => {
  const [houseAvailability, setHouseAvailability] = useState({});

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

  return (
    <div>
      <h2>Calendrier de location</h2>
      <div className="calendar">
        <Calendar
          tileClassName={({ date }) => (houseAvailability[date.toISOString().slice(0, 10)] ? 'unavailable' : 'available')}
        />
      </div>
    </div>
  );
};

export default HouseRentalCalendarFrontend;

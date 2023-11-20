import "../styles/location.css";
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';

const HouseRentalCalendarFrontend = () => {
  const [houseAvailability, setHouseAvailability] = useState({});
 
  const generateDates = (startDate, endDate) => {
    const dates = [];
    let currentDate = new Date(startDate);
    endDate = new Date(endDate);

    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().slice(0, 10));
      currentDate.setDate(currentDate.getDate()+1);
    }

    return dates;
  };


// Remplacez ces dates par les dates que vous voulez verrouiller
// Attention J-1, pour les dates seules, par rapport au vraies dates, si on veut ouvrir le 3, il faut écrire le 2 (exemple)
// Entre parenthèses pour vérouiller des péridodes et generate Dates
  const lockedDates = [
    ...generateDates('2023-11-15', '2023-11-18'),
    ...generateDates('2024-08-1', '2024-09-1'), 
    '2024-01-01',
    '2024-02-02'
  ]; 

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
          tileClassName={({ date }) => {
            if (lockedDates.includes(date.toISOString().slice(0, 10))) {
              return 'locked';
            }
            return houseAvailability[date.toISOString().slice(0, 10)] ? 'unavailable' : 'available';
          }}
        />
      </div>
      <p>Les dates afficheées en vertes sont les dates où la maison est disponible.</p>
    </div>
  );
};

export default HouseRentalCalendarFrontend;

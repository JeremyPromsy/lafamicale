import axios from 'axios';

export const updateHouseAvailability = async (selectedDates, isHouseUnavailable) => {
  try {
    const formattedDates = selectedDates.map((date) => date.toISOString().slice(0, 10));
    await axios.post('http://localhost:9000/update_availability', {
      dates: formattedDates,
      isUnavailable: isHouseUnavailable,
    });
    return true; // Mise à jour réussie
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la disponibilité :', error);
    return false; // Erreur lors de la mise à jour
  }
};

export const deleteHouseAvailability = async (date) => {
  try {
    await axios.post('http://localhost:9000/delete_availability', { date });
    return true; // Suppression réussie
  } catch (error) {
    console.error('Erreur lors de la suppression de la disponibilité :', error);
    return false; // Erreur lors de la suppression
  }
};

export const deleteAllHouseAvailability = async () => {
  try {
    await axios.post('http://localhost:9000/delete_all_availability');
    return true; // Suppression de toutes les disponibilités réussie
  } catch (error) {
    console.error('Erreur lors de la suppression de toutes les disponibilités :', error);
    return false; // Erreur lors de la suppression
  }
};

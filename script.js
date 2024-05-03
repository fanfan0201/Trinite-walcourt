// Définition des dates de fin pour chaque compte à rebours (en millisecondes)
const endTime1 = new Date('2024-05-24T17:00:00').getTime();
const endTime2 = new Date('2024-05-25T15:00:00').getTime();
const endTime3 = new Date('2024-05-26T09:00:00').getTime();

// Fonction pour mettre à jour les compteurs à rebours chaque seconde
function updateCountdown(endTime, elementId, titleElementId, timeElementId, title) {
  const now = new Date().getTime();
  const distance = endTime - now;

  // Calculer le temps restant
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Afficher le compte à rebours
  document.getElementById(titleElementId).textContent = title;
  document.getElementById(timeElementId).textContent = `${days}j ${hours}h ${minutes}m ${seconds}s`;

  // Si le compte à rebours est terminé, afficher un message
  if (distance < 0) {
    document.getElementById(timeElementId).textContent = "EXPIRÉ";
  }
}

// Mettre à jour les compteurs à rebours chaque seconde
setInterval(() => {
  updateCountdown(endTime1, 'countdown1', 'countdown-name1', 'countdown-time1', 'Ouverture de la Trinité');
  updateCountdown(endTime2, 'countdown2', 'countdown-name2', 'countdown-time2', 'Samedi de la Trinité');
  updateCountdown(endTime3, 'countdown3', 'countdown-name3', 'countdown-time3', 'Dimanche de la Trinité');
}, 1000);

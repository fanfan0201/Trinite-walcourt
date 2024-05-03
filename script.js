// Fonction pour mettre à jour les compteurs à rebours chaque seconde
function updateCountdown(endTime, elementId) {
  const now = new Date().getTime();
  const distance = endTime - now;

  // Calculer le temps restant
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Afficher le temps restant
  const countdownElement = document.getElementById(elementId);
  countdownElement.textContent = `${days}j ${hours}h ${minutes}m ${seconds}s`;

  // Si le compte à rebours est terminé, afficher un message
  if (distance < 0) {
    countdownElement.textContent = "EXPIRÉ";
  }
}

// Mettre à jour les compteurs à rebours chaque seconde
setInterval(() => {
  updateCountdown(endTime1, 'countdown-time1');
  updateCountdown(endTime2, 'countdown-time2');
  updateCountdown(endTime3, 'countdown-time3');
}, 1000);

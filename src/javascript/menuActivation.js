// Sélectionner les éléments
const hamburgerIcon = document.getElementById('hamburger-icon');
const overlay = document.getElementById('overlay');

// Fonction pour afficher/masquer le menu
function toggleMenu() {
    // Basculer les classes actives pour l'affichage du menu
    hamburgerIcon.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Écouter l'événement de clic sur l'icône hamburger
hamburgerIcon.addEventListener('click', toggleMenu);

// Optionnel : fermer le menu au clic sur un lien de l'overlay
const overlayLinks = overlay.querySelectorAll('a');
overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerIcon.classList.remove('active');
        overlay.classList.remove('active');
    });
});

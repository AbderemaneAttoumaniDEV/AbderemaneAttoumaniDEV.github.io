// Animation transition entre pages
// Sélectionne les liens pour lesquels tu veux l'animation de changement de page
const pageLinks = document.querySelectorAll('.aproposMenu, .contactMenu');

// Ajoute un écouteur de clic pour chaque lien
pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche la navigation instantanée

        // Ajoute la classe d'animation
        document.body.classList.add('overlay-fade-in');

        // Attends la fin de l'animation pour naviguer vers la nouvelle page
        setTimeout(() => {
            window.location.href = link.href;
        }, 500); // La durée doit être identique à celle définie dans le CSS
    });
});

// Animation transition bouton projet dans l'index
// Sélectionne le lien et assure le défilement vers l'ancre
// document.querySelector('.projetMenu').addEventListener('click', (e) => {
//     e.preventDefault();
    
//     // Récupère la section des projets
//     const targetSection = document.querySelector('#projects');
    
//     // Si la section est trouvée, effectue un smooth scroll vers elle
//     if (targetSection) {
//         targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments
    const menuButton = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeButton = document.getElementById('close-icon');
    const headerText = document.getElementById('header-text');
    const menuLinks = menu.querySelectorAll('a'); // Tous les liens dans le menu
    const body = document.body;
    const progressBar = document.getElementById('progress-bar'); // Barre de progression

    // Afficher le menu
    menuButton.addEventListener('click', () => {
        menu.classList.remove('hidden');
        menu.classList.add('opacity-100', 'translate-y-0');
        closeButton.classList.remove('hidden');
        headerText.classList.add('relative', 'z-20'); // Assure-toi que la div reste visible
        body.classList.add('overflow-hidden'); // Bloquer le défilement
        progressBar.style.display = 'none'; // Masquer la barre de progression
    });

    // Fermer le menu
    closeButton.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('opacity-100', 'translate-y-0');
        closeButton.classList.add('hidden');
        headerText.classList.remove('relative', 'z-20'); // Remettre la div à sa position d'origine
        body.classList.remove('overflow-hidden'); // Débloquer le défilement
        progressBar.style.display = 'block'; // Réafficher la barre de progression
    });

    // Lorsqu'un lien du menu est cliqué, fermer le menu
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.add("hidden");
            hamburgerIcon.classList.remove("hidden");
            closeButton.classList.add("hidden");
            body.classList.remove("overflow-hidden");
            progressBar.style.display = 'block'; // Réafficher la barre de progression
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const closeBtn = document.getElementById("close-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const body = document.body;

    // Ouvrir le menu
    hamburgerBtn.addEventListener("click", function () {
        mobileMenu.classList.remove("hidden");  // Affiche le menu
        closeBtn.classList.remove("hidden");  // Affiche le menu
        body.classList.add("overflow-hidden"); // Empêche le scroll de la page
    });

    // Fermer le menu
    closeBtn.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");  // Cache le menu
        closeBtn.classList.add("hidden");  // Cache le menu
        body.classList.remove("overflow-hidden"); // Rétablit le scroll de la page
    });
});

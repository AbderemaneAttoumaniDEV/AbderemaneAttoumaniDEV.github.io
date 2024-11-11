window.addEventListener('scroll', function() {
    const image = document.querySelector('.rightImage');
    const scrollPosition = window.scrollY; // Position de défilement vertical
    const windowHeight = window.innerHeight; // Hauteur de la fenêtre

    // Calcule l'opacité en fonction de la position de défilement
    const opacity = 1 - (scrollPosition / (windowHeight / 1.5)); // A Ajustez si besoin
    image.style.opacity = Math.max(opacity, 0); // Pour que l'opacité ne descend pas en dessous de 0
});
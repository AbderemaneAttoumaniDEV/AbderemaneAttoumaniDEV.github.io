document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-element"); // Sélectionner les éléments à animer

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajouter la classe visible si l'élément est dans le champ de vision
                entry.target.classList.add("visible");
                // Optionnel : Arrêter l'observation une fois que l'élément est visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Détecter si au moins 10% de l'élément est visible
    });

    elements.forEach(el => observer.observe(el)); // Observer chaque élément
});

let lastScrollY = window.scrollY; // Initialiser la position du scroll

document.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY; // Position actuelle du scroll
    const elements = document.querySelectorAll(".scroll-element"); // Sélectionner les éléments à animer

    elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top + window.scrollY; // Position de l'élément
        const windowHeight = window.innerHeight;

        if (currentScrollY > lastScrollY) {
            // Scroll vers le bas
            if (elementTop < currentScrollY + windowHeight) {
                el.classList.add("visible"); // Ajout de la classe si l'élément entre dans la vue
                el.classList.remove("hidden-up");
            } else {
                el.classList.add("hidden-up");
            }
        } else {
            // Scroll vers le haut
            if (elementTop + el.offsetHeight > currentScrollY) {
                el.classList.add("visible");
                el.classList.remove("hidden-down");
            } else {
                el.classList.add("hidden-down");
            }
        }
    });

    lastScrollY = currentScrollY; // Mettre à jour la position du scroll
});

const backToTopButton = document.getElementById('back-to-top');
const progressBar = document.getElementById('progress-bar');

// Fonction pour afficher/masquer le bouton "Retour en haut"
window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        backToTopButton.classList.remove('hidden');
        backToTopButton.classList.add('flex');
    } else {
        backToTopButton.classList.add('hidden');
        backToTopButton.classList.remove('flex');
    }

    // Mise à jour de la barre de progression
    const scrollPosition = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
});

// Fonction de défilement vers le haut 
function smoothScrollToTop(duration) {
    const startPosition = window.scrollY; // Position actuelle
    const distance = -startPosition; // Distance à parcourir (en haut = 0)
    const startTime = performance.now();

    function animationStep(currentTime) {
        const elapsedTime = currentTime - startTime; // Temps écoulé
        const progress = Math.min(elapsedTime / duration, 1); // Progrès dans l'animation (entre 0 et 1)
        const ease = easeInOutQuad(progress); // Fonction d'easing pour rendre l'animation fluide
        window.scrollTo(0, startPosition + distance * ease); // Mise à jour de la position

        if (progress < 1) {
            requestAnimationFrame(animationStep); // Continuer l'animation
        }
    }

    // Fonction d'easing pour un mouvement fluide
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    requestAnimationFrame(animationStep); // Début de l'animation
}

// Ajouter l'événement clic
backToTopButton.addEventListener('click', () => {
    smoothScrollToTop(1000); // 1000ms = 1 seconde pour le défilement
});

// Fonction pour détecter si un élément est visible dans le viewport
const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
};

// Ajout d'animations aux sections lors du défilement
const animateOnScroll = () => {
    scrollElements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('opacity-100', 'translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-10');
        }
    });
};

// Initialisation des animations et écoute des événements de scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', () => {
    animateOnScroll();
    animateStats(); // Lancement des animations de stats au chargement
});
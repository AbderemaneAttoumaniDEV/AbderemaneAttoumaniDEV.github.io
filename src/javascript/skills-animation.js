document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne toutes les barres de compétence
    const skillBars = document.querySelectorAll('.skill-bar');
    const progressBar = document.getElementById('progress-bar'); // Barre de progression
    
    // Fonction pour vérifier si un élément est dans le champ de vision
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 && 
            rect.left >= 0 && 
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    };

    // Fonction pour animer les barres de compétence
    const animateSkills = () => {
        skillBars.forEach(skillBar => {
            // Vérifie si l'élément est dans le champ de vision
            if (isInViewport(skillBar) && !skillBar.classList.contains('visible')) {
                // Ajouter la classe 'visible' pour déclencher l'animation
                skillBar.classList.add('visible');
                
                // Récupérer la largeur de la barre définie dans le style inline
                const progressBar = skillBar.querySelector('.bg-teal-500');
                const progressWidth = progressBar.style.width;  // Exemple: '95%'
                
                // Appliquer l'animation de la barre
                progressBar.style.animation = `progress 2s ease-out forwards`;
                progressBar.style.setProperty('--progress-width', progressWidth);  // Assigner la largeur dynamique
            }
        });
    };

    // Appeler la fonction pour vérifier les éléments visibles dès le chargement
    animateSkills();

    // Ajouter un listener de scroll pour animer lors du défilement
    window.addEventListener('scroll', function() {
        animateSkills();
    });
});

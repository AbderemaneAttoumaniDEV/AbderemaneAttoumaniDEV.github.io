// Sélection des éléments
    const aboutSection = document.getElementById('about-section');
    const aboutLink = document.querySelector('nav ul li:nth-child(1) a'); // Sélection du lien "About"
    
    const skillsSection = document.getElementById('skills-section');
    const skillsLink = document.querySelector('nav ul li:nth-child(2) a'); // Sélection du lien "Skills"

    const projetSection = document.getElementById('projet-section');
    const projetLink = document.querySelector('nav ul li:nth-child(3) a'); // Sélection du lien "Projet"

    // Masquer la section Skills au démarrage
    aboutSection.classList.add('visible');
    skillsSection.classList.add('hidden');
    projetSection.classList.add('hidden');

    // Gestion de l'affichage de la section Skills
    skillsLink.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le lien d'actualiser la page

        // Vérifier si la section Skills est cachée
        if (skillsSection.classList.contains('hidden')) {
            // Masquer la section About
            aboutSection.classList.remove('visible');
            aboutSection.classList.add('hidden');
            // Masquer la section Projets
            projetSection.classList.remove('visible');
            projetSection.classList.add('hidden');

            // Afficher la section Skills
            skillsSection.classList.remove('hidden');
            skillsSection.classList.add('visible');
        }
    });

    // Gestion de l'affichage de la section About
    aboutLink.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le lien d'actualiser la page

        // Vérifier si la section About est cachée
        if (aboutSection.classList.contains('hidden')) {
            // Masquer la section About
            skillsSection.classList.remove('visible');
            skillsSection.classList.add('hidden');
            // Masquer la section Projets
            projetSection.classList.remove('visible');
            projetSection.classList.add('hidden');

            // Afficher la section Skills
            aboutSection.classList.remove('hidden');
            aboutSection.classList.add('visible');
        }
    });

    // Gestion de l'affichage de la section Projet
    projetLink.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le lien d'actualiser la page

        // Vérifier si la section Projet est cachée
        if (projetSection.classList.contains('hidden')) {
            // Masquer la section About
            skillsSection.classList.remove('visible');
            skillsSection.classList.add('hidden');
            // Masquer la section Projet
            aboutSection.classList.remove('visible');
            aboutSection.classList.add('hidden');

            // Afficher la section Projet
            projetSection.classList.remove('hidden');
            projetSection.classList.add('visible');
        }
    });
document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById('contact-form');
        const honeypot = document.getElementById('honeypot');
        const submitButton = document.getElementById('submit-button');

        // Désactive le bouton d'envoi au chargement
        submitButton.disabled = true;

        // Active le bouton uniquement lorsque tous les champs sont valides
        form.addEventListener('input', () => {
            submitButton.disabled = !form.checkValidity();
        });

        // Validation supplémentaire avant l'envoi
        form.addEventListener('submit', (event) => {
            if (honeypot.value !== '') {
                // Si le honeypot est rempli, annule la soumission
                event.preventDefault();
                alert('Détection de bot !');
            }
        });

    });

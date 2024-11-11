document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const confirmationMessage = document.getElementById("confirmation-message");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher la soumission classique du formulaire

        const formData = new FormData(form);

        // Réinitialiser les messages d'erreur ou de confirmation à chaque soumission
        confirmationMessage.style.display = "none";
        errorMessage.style.display = "none";

        // Envoyer les données via Fetch API
        fetch(form.action, {
            method: form.method,
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                // Si la réponse est correcte, afficher le message de confirmation
                confirmationMessage.style.display = "block";
                form.reset(); // Réinitialiser le formulaire après l'envoi
            } else {
                // Si la réponse n'est pas correcte, afficher le message d'erreur
                throw new Error("Une erreur s'est produite lors de l'envoi du message.");
            }
        })
        .catch(error => {
            // En cas d'erreur, afficher le message d'erreur
            console.error("Erreur lors de l'envoi du message :", error);
            errorMessage.style.display = "block";
        });
    });
});

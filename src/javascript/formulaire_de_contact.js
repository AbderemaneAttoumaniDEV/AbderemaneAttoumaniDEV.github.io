// Parties de l'adresse e-mail
const emailPart1 = "attoumani";
const emailPart2 = "abderemane";
const emailPart3 = "gmail.com";

// Fonction pour assembler l'email
function assembleEmail() {
    return `${emailPart1}.${emailPart2}@${emailPart3}`;
}

// Écouteur de soumission de formulaire
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Obtenir les valeurs des champs
    const name = document.getElementById('name').value;
    const userEmail = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Adresse e-mail du destinataire assemblée
    const recipientEmail = assembleEmail();

    // Envoyer les données vers le serveur en utilisant fetch
    fetch('src/javascript/send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            userEmail: userEmail,
            service: service,
            message: message,
            recipientEmail: recipientEmail
        })
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Affiche le message de succès ou d'erreur
        document.getElementById('contactForm').reset(); // Réinitialise le formulaire
    })
    .catch(error => {
        alert("Erreur d'envoi. Veuillez réessayer.");
        console.error('Erreur:', error);
    });
});

<?php
// Autoriser les requêtes Cross-Origin pour développement local
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

// Récupérer les données JSON envoyées par fetch
$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    // Récupérer les données du formulaire
    $name = $data['name'];
    $userEmail = $data['userEmail'];
    $service = $data['service'];
    $messageContent = $data['message'];
    $recipientEmail = $data['recipientEmail'];

    // Créer le contenu de l'e-mail
    $subject = "Nouveau message de contact: $service";
    $message = "Nom: $name\n";
    $message .= "Adresse e-mail: $userEmail\n";
    $message .= "Service: $service\n\n";
    $message .= "Message:\n$messageContent\n";

    // En-têtes de l'e-mail
    $headers = "From: $userEmail\r\n";
    $headers .= "Reply-To: $userEmail\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8";

    // Envoyer l'e-mail
    if (mail($recipientEmail, $subject, $message, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Erreur : votre message n'a pas pu être envoyé. Veuillez réessayer.";
    }
} else {
    echo "Erreur : les données de formulaire sont manquantes.";
}
?>

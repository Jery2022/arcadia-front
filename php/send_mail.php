<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération et validation des données
    $name = htmlspecialchars(trim($_POST['name']));
    $objet = htmlspecialchars(trim($_POST['objet']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Vérification des champs
    if (empty($name) || empty($subject) || empty($email) || empty($message)) {
        die("Tous les champs doivent être remplis !");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Adresse e-mail invalide !");
    }

    // Envoi de l'e-mail
    $to = "jewomba@gmail.com"; // adresse e-mail de l'administrateur
    $subject = "Objet: $objet";
    $body = "Nom: $name\nE-mail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Échec de l'envoi du message.";
    }
} else {
    die("Méthode de requête non valide.");
}
?>

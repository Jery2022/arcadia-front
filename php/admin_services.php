<?php
session_start(); // Ouverture d'une session utilisateur
include 'config.php';

// Je vérifie si l'utilisateur est authentifié
if (!isset($_SESSION['user_id'])) {
    header("Location: ../login.html");
    exit();
}

// Je crée une fonction qui me filtre les données d'entrée pour m'éviter l'insertion de script
function filter_input_data($data) {
    return htmlspecialchars(trim($data));
}

try {
    // Créer la connexion PDO
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Définir le mode d'erreur PDO sur Exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Préparer les requêtes pour éviter des injections SQL
    $stmt_add = $conn->prepare("INSERT INTO services (name, description) VALUES (:name, :description)");
    $stmt_update = $conn->prepare("UPDATE services SET name=:name, description=:description WHERE id=:id");
    $stmt_delete = $conn->prepare("DELETE FROM services WHERE id=:id");

    // Ajouter un service à la BDD
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['add'])) {
        $name = filter_input_data($_POST['name']);
        $description = filter_input_data($_POST['description']);

        $stmt_add->bindParam(':name', $name);
        $stmt_add->bindParam(':description', $description);
        if ($stmt_add->execute()) {
            echo "Nouveau service ajouté avec succès.";
        } else {
            echo "Erreur: " . $stmt_add->errorInfo()[2];
        }
    }

    // Mettre à jour un service de la BDD
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['update'])) {
        $id = filter_input_data($_POST['id']);
        $name = filter_input_data($_POST['name']);
        $description = filter_input_data($_POST['description']);

        // Vérifier que l'ID est un entier
        if (filter_var($id, FILTER_VALIDATE_INT)) {
            $stmt_update->bindParam(':name', $name);
            $stmt_update->bindParam(':description', $description);
            $stmt_update->bindParam(':id', $id);
            if ($stmt_update->execute()) {
                echo "Service mis à jour avec succès.";
            } else {
                echo "Erreur: " . $stmt_update->errorInfo()[2];
            }
        } else {
            echo "ID invalide.";
        }
    }

    // Supprimer un service de la BDD
    if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['delete'])) {
        $id = filter_input_data($_POST['id']);

        // Vérifier que l'ID est un entier
        if (filter_var($id, FILTER_VALIDATE_INT)) {
            $stmt_delete->bindParam(':id', $id);
            if ($stmt_delete->execute()) {
                echo "Service supprimé avec succès.";
            } else {
                echo "Erreur: " . $stmt_delete->errorInfo()[2];
            }
        } else {
            echo "ID invalide.";
        }
    }

} catch(PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>

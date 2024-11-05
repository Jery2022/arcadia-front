<?php
$servername = "mysql-ejyr.alwaysdata.net";
$username = "ejyr_admin_arcad";
$password = "Arcadia2010#";
$dbname = "ejyr_zoo_arcadia";

try {
    // Créer la connexion PDO
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Définir le mode d'erreur PDO sur Exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie";
} catch(PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
}
?>


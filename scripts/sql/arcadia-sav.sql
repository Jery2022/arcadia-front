USE jery_zoo_arcadia;

      CREATE TABLE role(
        role_id INT AUTO_INCREMENT,
        label VARCHAR(50) NOT NULL,
        PRIMARY KEY(role_id),
        UNIQUE(label)
      );
      
      CREATE TABLE race(
        race_id INT AUTO_INCREMENT,
        label VARCHAR(50) NOT NULL,
        PRIMARY KEY(race_id)
      );
      
       CREATE TABLE image_habitat(
        image_id INT AUTO_INCREMENT,
        habitat_id INT NOT NULL, 
        image1_path VARCHAR(255), 
        image2_path VARCHAR(255), 
        image3_path VARCHAR(255),  
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY(image_id)
      );
      
       CREATE TABLE service(
        service_id INT AUTO_INCREMENT,
        nom VARCHAR(50) NOT NULL,
        description_serv VARCHAR(100),
        PRIMARY KEY(service_id),
        UNIQUE(nom)
      );
      
       CREATE TABLE avis(
        avis_id INT AUTO_INCREMENT,
        pseudo VARCHAR(50) NOT NULL,
        commentaire VARCHAR(255),
        IsVisible BOOLEAN NOT NULL,
        PRIMARY KEY(avis_id),
        UNIQUE(pseudo)
      );
      
        CREATE TABLE image_animal(
        image_animal_id INT AUTO_INCREMENT,
        animal_id INT NOT NULL,
        image1_path VARCHAR(255), 
        image2_path VARCHAR(255), 
        image3_path VARCHAR(255),
        PRIMARY KEY(image_animal_id)
      );
      
       CREATE TABLE aliment(
        aliment_id INT AUTO_INCREMENT,
        label_aliment VARCHAR(100),
        PRIMARY KEY(aliment_id),
        UNIQUE(label_aliment)
      );
      
      CREATE TABLE utilisateur(
        username_id INT AUTO_INCREMENT,
        password VARCHAR(255) NOT NULL,
        nom VARCHAR(100) NOT NULL,
        prenom VARCHAR(100) NOT NULL,
        role_id INT NOT NULL,
        PRIMARY KEY(username_id),
        FOREIGN KEY(role_id) REFERENCES role(role_id)
      );
      
       CREATE TABLE habitat(
        habitat_id INT AUTO_INCREMENT,
        nom VARCHAR(100) NOT NULL,
        description VARCHAR(255) NOT NULL,
        commentaire_habitat VARCHAR(255),
        image_id INT NOT NULL,
        PRIMARY KEY(habitat_id),
        UNIQUE(nom),
        FOREIGN KEY(image_id) REFERENCES image_habitat(image_id)
      );   
      
     CREATE TABLE animal(
        animal_id INT AUTO_INCREMENT,
        etat VARCHAR(50) NOT NULL,
        surnom VARCHAR(50) NOT NULL,
        image_animal_id INT NOT NULL,
        habitat_id INT NOT NULL,
        race_id INT NOT NULL,
        PRIMARY KEY(animal_id),
        UNIQUE(surnom),
        FOREIGN KEY(image_animal_id) REFERENCES image_animal(image_animal_id),
        FOREIGN KEY(habitat_id) REFERENCES habitat(habitat_id),
        FOREIGN KEY(race_id) REFERENCES race(race_id)
      ); 
      
      CREATE TABLE rapport_veterinaire(
        rapport_verinaire_id INT AUTO_INCREMENT,
        date_rapport_veto DATE NOT NULL,
        detail VARCHAR(255),
        animal_id INT NOT NULL,
        username_id INT NOT NULL,
        PRIMARY KEY(rapport_verinaire_id),
        FOREIGN KEY(animal_id) REFERENCES animal(animal_id),
        FOREIGN KEY(username_id) REFERENCES utilisateur(username_id)
      );

 CREATE TABLE consomme(
        animal_id INT AUTO_INCREMENT,
        aliment_id INT,
        PRIMARY KEY(animal_id, aliment_id),
        FOREIGN KEY(animal_id) REFERENCES animal(animal_id),
        FOREIGN KEY(aliment_id) REFERENCES aliment(aliment_id)
      );
      
     CREATE TABLE fournie(
        username_id INT AUTO_INCREMENT,
        aliment_id INT,
        PRIMARY KEY(username_id, aliment_id),
        FOREIGN KEY(username_id) REFERENCES utilisateur(username_id),
        FOREIGN KEY(aliment_id) REFERENCES aliment(aliment_id)
      );   
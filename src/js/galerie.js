// galerie.js

let currentPage = 1; // Page actuelle
const itemsPerPage = 6; // Nombre d'éléments par page
let filteredAnimals = []; // Liste des animaux filtrés
let sortOrder = 'asc'; // Ordre de tri (ascendant ou descendant)

// Exemple de tableau d'animaux
const animals = [
    { nickname: 'Médor', race: 'Chien', image: 'src/images/animals/image-lions-2.jpeg', habitat: 'Enclos', score: 58, category: 'Mammifere', description: 'Le chien est un mammifère domestique de la category des canidés. Il est le meilleur ami de l\'homme.' },
    { nickname: 'Titi', race: 'Lion', image: 'src/images/animals/image-lions-1.jpeg', habitat: 'Savane', score: 71, category: 'Mammifere', description: 'Le lion est un mammifère carnivore de la category des félidés. Il vit en meute dans les savanes.' },
    { nickname: 'Loulou', race: 'Panthere', image: 'src/images/animals/image-panda-1.jpeg', habitat: 'Enclos', score: 68, category: 'Mammifere', description: 'La panthère est un mammifère carnivore de la category des félidés. Elle vit dans les forêts tropicales.' },
    { nickname: 'Pati', race: 'Panda', image: 'src/images/animals/image-panda-1.jpeg', habitat: 'Enclos', score: 57, category: 'Mammifere', description: 'Le panda est un mammifère herbivore de la category des ursidés. Il vit dans les forêts de bambous.' },
    { nickname: 'Tong', race: 'Dauphin', image: 'src/images/animals/image-dauphin-1.png', habitat: 'Aquatique', score: 45, category: 'Mammifere', description: 'Le dauphin est un mammifère marin de la category des delphinidés. Il vit dans les océans.' },
    { nickname: 'Bari', race: 'Elephant', image: 'src/images/animals/image-elephants-1.png', habitat: 'Savane', score: 15, category: 'Mammifere', description: 'L\'éléphant est un mammifère herbivore de la category des éléphantidés. Il est le plus grand animal terrestre.' },
    { nickname: 'Robin', race: 'Tigre', image: 'src/images/animals/image-tigre-2.jpeg', habitat: 'Savane', score: 21, category: 'Mammifere', description: 'Le tigre est un mammifère carnivore de la category des félidés. C\'est le plus grand des félins.' },
    { nickname: 'Matou', race: 'Zebre', image: 'src/images/animals/image-zebres-1.png', habitat: 'Savane', score: 34 , category: 'Mammifere', description: 'Le zèbre est un mammifère herbivore de la category des équidés. Il est reconnaissable à son pelage rayé.' },
    { nickname: 'Poireau', race: 'Crocodile', image: 'src/images/animals/image-elephants-1.png', habitat: 'Marais', score: 61, category: 'Reptile', description: 'Le crocodile est un reptile carnivore de la category des crocodilidés. Il vit dans les régions tropicales.' },
    { nickname: 'Binera', race: 'Pingouin', image: 'src/images/animals/image-ours.png', habitat: 'Aquatique', score: 24, category: 'Oiseaux', description: 'Le pingouin est un oiseau marin de la category des sphéniscidés. Il vit dans l\'hémisphère sud.' },
    { nickname: 'Croc-blanc', race: 'Loup', image: 'src/images/animals/image-ours.png', habitat: 'Foret', score: 76, category: 'Mammifere', description: 'Le loup est un mammifère carnivore de la category des canidés. Il vit en meute dans les forêts.' },
    { nickname: 'Chanteuse des marais', race: 'Grenouille', image: 'src/images/animals/image-elephants-1.png', habitat: 'Marais', score: 55, category: 'Amphibien', description: 'La grenouille est un amphibien carnivore de la category des ranidés. Elle vit dans les zones humides.' },
    { nickname: 'Rozo', race: 'Bouquetin', image: 'src/images/animals/image-elephants-1.png', habitat: 'Montagne', score: 32, category: 'Mammifere', description: 'Le bouquetin est un mammifère herbivore de la category des bovidés. Il vit dans les montagnes.' },
    { nickname: 'La-fouine', race: 'Marmotte', image: 'src/images/animals/image-panda-1.jpeg', habitat: 'Montagne', score: 41, category: 'Mammifere', description: 'La marmotte est un mammifère herbivore de la category des sciuridés. Elle vit dans les montagnes.' },
    { nickname: 'Vostros', race: 'Vautour', image: 'src/images/animals/image-vautours-1.jpg', habitat: 'Montagne', score: 38, category: 'Oiseaux', description: 'Le vautour est un oiseau charognard de la category des accipitridés. Il vit dans les montagnes.' },
    { nickname: 'Zira', race: 'Antilope', image: 'src/images/animals/image-panda-1.jpeg', habitat: 'Plaine', score: 49, category: 'Mammifere', description: 'L\'antilope est un mammifère herbivore de la category des bovidés. Elle vit dans les plaines.' },
    { nickname: 'Ableti', race: 'Coyote', image: 'src/images/animals/image-panda-1.jpeg', habitat: 'Plaine', score: 19, category: 'Mammifere', description: 'Le coyote est un mammifère carnivore de la category des canidés. Il vit dans les plaines.' },
    { nickname: 'Albatros', race: 'Faucon', image: 'src/images/animals/image-panda-1.jpeg', habitat: 'Plaine', score: 41, category: 'Oiseaux', description: 'Le faucon est un oiseau de proie de la category des falconidés. Il vit dans les plaines.' },
    { nickname: 'Tilupe', race: 'Pirhanas', image: 'src/images/animals/image-dauphin-1.png', habitat: 'Plaine', score: 41, category: 'Poisson', description: 'Le piranha est un poisson carnivore de la category des characidés. Il vit dans les rivières.' },
];

const animalImages = [
    {nickname: 'Robin', 
        photos : [
        {   imame1: 'src/images/animals/image-lions-1.jpeg', 
            image2: 'src/images/animals/image-lions-3.jpeg', 
            image3: 'src/images/animals/image-lions-2.jpeg', }]},
    {nickname: 'Médor',
        photos: [
        {   image1: 'src/images/animals/image-lions-2.jpeg',
            image2: 'src/images/animals/image-lions-1.jpeg',
            image3: 'src/images/animals/image-lions-3.jpeg', }]},
  
    {nickname: 'Titi',  
        photos: [
        {   image1: 'src/images/animals/image-lions-1.jpeg',
            image2: 'src/images/animals/image-lions-2.jpeg',
            image3: 'src/images/animals/image-lions-3.jpeg', }]},
   
    {nickname: 'Loulou',
        photos: [
        {   image1: 'src/images/animals/image-panda-1.jpeg',
            image2: 'src/images/animals/image-panda-2.jpeg',
            image3: 'src/images/animals/image-panda-3.jpeg', }]},
    {nickname: 'Pati',
        photos: [
        {   image1: 'src/images/animals/image-panda-1.jpeg',
            image2: 'src/images/animals/image-panda-2.jpeg',
            image3: 'src/images/animals/image-panda-3.jpeg', }]},
];
  
// Fonction pour afficher les cartes d'animaux
function displayCards() {
    const container = document.getElementById('myContainer');
    container.innerHTML = ''; // Réinitialiser le conteneur

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = filteredAnimals.slice(startIndex, endIndex);

    itemsToDisplay.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'm-3 d-flex flex-column justify-content-between';
        card.innerHTML = `
                <div class="card shadow-sm">
                    <img src="${animal.image}" alt="${animal.nickname}" style="width:100%">
                    <div class="card-body">
                        <h4>${animal.nickname}</h4>
                        <p>Type d'habitat : ${animal.habitat}</p>
                        <p>Race : ${animal.race}</p>
                        <p class="card-text">${animal.description}</p>
                     <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary" 
                                   data-bs-toggle="modal" data-bs-target="#photosAnimalModal" 
                                   onclick="showImagesAnimal('${animal.nickname}')">Voir l'album</button>
                            </div>
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary" 
                                   data-bs-toggle="modal" data-bs-target="#commentaireModal" 
                                   onclick="alert()">Commenter</button>
                            </div>
                            <div class="d-flex justify-content-center align-items-center">
                                <small class="text-body-secondary"><p>Visites : ${animal.score}</p></small></div>
                     </div>
                    </div>
                </div>
                <!-- Début de la Modal -->
                <div class="modal fade" id="photosAnimalModal" tabindex="-1" aria-labelledby="photosAnimalModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content" >
                            <div class="modal-header custom-modal-header">
                                <h1 class="modal-title fs-5" id="photosAnimalModalLabel"></h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body" id="modalBody">                              
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn " data-bs-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Fin de la Modal -->  
        `;
        container.appendChild(card);
    });

    setupPagination();
}

// Fonction pour filtrer les animaux par catégorie
function filterSelection(category) {
    // Réinitialiser la classe active pour tous les boutons
    const buttons = document.querySelectorAll('.myBtnContainer .filter-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Appliquer la classe active au bouton cliqué
    const activeButton = document.querySelector(`.myBtnContainer .filter-btn[onclick="filterSelection('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    filteredAnimals = animals.filter(animal => {
        return category === 'all' || animal.category === category;
    });
    currentPage = 1; // Réinitialiser à la première page
    displayCards();
}


// Fonction pour trier les animaux par ordre croissant ou décroissant
function sortAnimals() {
    const sortValue = document.getElementById('sort').value;
    filteredAnimals.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[sortValue] < b[sortValue] ? -1 : 1;
        } else {
            return a[sortValue] > b[sortValue] ? -1 : 1;
        }
    });
    displayCards();
}

// Fonction pour basculer l'ordre de tri
function toggleSortOrder() {
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    sortAnimals(); // Re-trier après avoir changé l'ordre
}

// Fonction de recherche dynamique
function search() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();

    filteredAnimals = animals.filter(animal => {
        return animal.nickname.toLowerCase().includes(filter);
    });

    currentPage = 1; // Réinitialiser à la première page
    displayCards();
}

// Fonction pour configurer la pagination
function setupPagination() {
    const paginationContainer = document.getElementById('myContainer');
    const pageCount = document.getElementById('page-count');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    const totalPages = Math.ceil(filteredAnimals.length / itemsPerPage);
    pageCount.textContent = `Page ${currentPage} sur ${totalPages}`;

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            displayCards();
        }
    };

    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayCards();
        }
    };
}

// Écouteurs d'événements
document.getElementById('search').addEventListener('input', search);
document.getElementById('sort').addEventListener('change', sortAnimals);
document.getElementById('sort-order-toggle').addEventListener('click', toggleSortOrder); // Écouteur pour le bouton de tri

// Afficher tous les animaux au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    filteredAnimals = [...animals]; // Initialiser avec tous les animaux
    displayCards(); // Afficher les cartes
    filterSelection('all'); // Afficher tous les éléments par défaut
});


// Fonction pour afficher les images en fonction du nickname
function showImagesAnimal(nickname) {
    const modalTitle = document.getElementById('photosAnimalModalLabel');
    const container = document.getElementById('modalBody');
    modalTitle.textContent = 'Affichage des images de ' + nickname; // Afficher le nickname dans le titre
    container.innerHTML = ''; // Réinitialiser le conteneur

    // Trouver l'objet correspondant au nickname
    const animal = animalImages.find(animal => animal.nickname === nickname);

    // Vérifier si l'animal existe
    if (animal && animal.photos.length > 0) {
        const photos = animal.photos[0]; // On prend le premier ensemble de photos

        // Créer des éléments d'image pour chaque animal
        for (const [key, value] of Object.entries(photos)) {

            const containerPhotos = document.createElement('div');
            containerPhotos.className = 'd-flex justify-content-center flex-wrap';
           
            const imgElement = document.createElement('img');
            imgElement.src = value;
            imgElement.alt = `${nickname} - ${key}`; // Texte alternatif
            imgElement.title = `${nickname} - ${key}`; // Afficher le nom au survol
            imgElement.style.width = '200px'; // Ajuster la taille de l'image
            imgElement.style.margin = '10px'; // Espacement entre les images

          containerPhotos.appendChild(imgElement);
          container.appendChild(containerPhotos);

        }
    } else {
        // Si aucune image n'est trouvée, afficher un message
        const message = document.createElement('p');
        message.textContent = 'Aucune image trouvée pour "'+ `${nickname}`+'".';
        container.appendChild(message);
    }
}  
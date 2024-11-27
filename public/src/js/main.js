// Mes fonctionnalités interactives


// Code pour le menu burger
document.addEventListener('DOMContentLoaded', function() {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('#navbarNav');

  navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
  });
});

// Code pour pour afficher la page apropos à partir du bouton "En savoir plus"
function afficherPageApropos() {
            window.location.href = "../../public/about.html"; // Remplacez par l'URL de votre page
          }

// code pour afficher en accordéon des informations sur les services
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active-accordion");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/***  
 * Code pour la validation de formulaire de contact 
 ***/

(() => { 

  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

 })() 




/***  
 * Code pour la validation de formulaire de Login 
 ***/

function validateEmail() {

  const container = document.getElementById('emailContainer');
  const validFeedback = document.getElementById('valideFeedBack');  
  const email = document.forms["loginForm"]["email"].value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const card = document.createElement('div');

  validFeedback.innerHTML = ''; // Réinitialiser le conteneur
  
}


// Code pour les statistiques interactives
document.addEventListener('DOMContentLoaded', function() {
    // Code pour les statistiques interactives
  });


/*** 
 *  Code pour la validation de formulaire de contact 
 ***/
function validateFormContact() {
  
  const forms = document.querySelectorAll('.contactForm');
  forms.addEventListener('submit', event => {
    event.preventDefault();
    event.stopPropagation();
    alert();
  console.log(forms.length);
  });
/*
  const name = document.forms["contactForm"]["name"].value;
  const objet = document.forms["contactForm"]["objet"].value;
  const email = document.forms["contactForm"]["email"].value;
  const message = document.forms["contactForm"]["message"].value;

  if (name === "" || objet === ""|| email === "" || message === "") {
      alert("Tous les champs doivent être remplis !");
      return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(email)) {
      alert("Veuillez entrer une adresse e-mail valide !");
      return false;
  }

  return true;*/
}

// Code pour changer dynamiquement le focus du menu actif lorsque l'on clique sur le lien d'un élément de menu

// Sélectionner tous les liens du menu
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Ajouter un écouteur d'événements pour chaque lien
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();

        // Supprimer la classe 'active' de tous les éléments de menu
        navLinks.forEach(item => item.parentElement.classList.remove('active'));
        
        // Ajouter la classe 'active' à l'élément de menu cliqué
        this.parentElement.classList.add('active');

        // Optionnel : rediriger vers la page liée après un court délai
        setTimeout(() => {
            window.location.href = this.href;
        }, 200); // Délai de 200 ms pour permettre à l'animation de se produire
    });
});



  /* Créer une carte dynamiquement pour chaque élément du 
  tableau data   */ 
  
    // Jeux de données pour créer les cartes
    const data = [
      { name: 'Savane Alsa', type: 'Savane', image: '../src/assets/images/habitats/habitat-savane-2.jpeg', description: "Cet habitat est caractérisé par des prairies ouvertes et des arbres épars, où l'on peut trouver des animaux comme les lions, les éléphants et les girafes. Les enclos sont souvent conçus pour simuler les vastes espaces de la savane africaine" },
      { name: 'Marais d\'Annel', type: 'Marais', image: '../src/assets/images/habitats/habitais-marais-3.jpeg', description: "L'habitat aquatique est idéal pour les animaux amphibies et aquatiques, tels que les grenouilles, les crocodiles et certaines espèces d'oiseaux. Il se caractérise par des zones humides avec des étangs et des rivières pour reproduire ces écosystèmes." },
      { name: 'Forêt Darnien', type: 'Jungle', image: '../src/assets/images/habitats/habitat-foret-1.jpeg', description: " Les habitats de jungle imitent les forêts tropicales denses, offrant un environnement riche en végétation. On y trouve des espèces comme les singes, les oiseaux tropicaux et les reptiles, qui bénéficient de la couverture végétale et des structures verticales" },
      { name: 'Montagne', type: 'Montagne', image: '../src/assets/images/habitats/habitat-cage-aigles.jpeg', description: "Le zoo inclue des habitats montagneux, où l'on peut observer des animaux adaptés à des altitudes élevées, comme les chèvres de montagne et les léopards des neiges" },
      { name: 'Batiment Cantini', type: 'Cage', image: '../src/assets/images/habitats/habitat-cage.jpeg', description: "Le zoo inclue des habitats montagneux, où l'on peut observer des animaux adaptés à des altitudes élevées, comme les chèvres de montagne et les léopards des neiges" },
      { name: 'Espace Aubervilier', type: 'Enclos', image: '../src/assets/images/habitats/habitat-enclot-1.jpeg', description: "L'enclos du zoo présente un espace vaste et verdoyant, entouré de clôtures naturelles pour imiter l'habitat d'origine des animaux. Des rochers, des arbres et des zones d'ombre offrent refuge et stimulation. On y trouve souvent des lions, zèbres, signes, flamants." },
      { name: 'Etang Chambort', type: 'Aquatique', image: '../src/assets/images/habitats/habitat-marais-1.jpeg', description: "Le marais du zoo est un écosystème fascinant, où l'eau douce s'entrelace avec des espaces verdoyants. Des plantes aquatiques, comme des nénuphars et des joncs, poussent le long des rives, créant un habitat idéal. Les visiteurs peuvent y observer des cigognes, grenouilles, tortues, crocodiles" },
      { name: 'Chambord', type: 'Plaine', image: '../src/assets/images/habitats/habitat-savane-1.jpeg', description: "L'habitat de plaine se caractérise par de vastes étendues de terrain plat, souvent recouvertes de prairies, de champs et de zones herbeuses. Les animaux qui y vivent, comme les zèbres, coyotes, antiloppes, faucons, gazèlle et les antilopes, ont besoin d'espace pour se déplacer et se nourrir" },
      { name: 'Aquaruim Rigobert', type: 'Aquatique', image: '../src/assets/images/habitats/habitat-marais-1.jpeg', description: "L'habitat de plaine se caractérise par de vastes étendues de terrain plat, souvent recouvertes de prairies, de champs et de zones herbeuses. Les animaux qui y vivent, comme les zèbres, coyotes, antiloppes, faucons, gazèlle et les antilopes, ont besoin d'espace pour se déplacer et se nourrir" },
  ];

  const animalsDatas = [
    { nickname: 'Médor', race: 'Chien', image: '../src/assets/images/animals/image-lions-2.jpeg', habitat: 'Enclos', score: 58, famille: 'Mammifères' },
    { nickname: 'Titi', race: 'Lion', image: '.../src/assets/images/animals/image-lions-1.jpeg', habitat: 'Savane', score: 71, famille: 'Mammifères' },
    { nickname: 'Loulou', race: 'Panthere', image: '../src/assets/images/animals/image-panda-1.jpeg', habitat: 'Enclos', score: 68, famille: 'Mammifères' },
    { nickname: 'Pati', race: 'Panda', image: '../src/assets/images/animals/image-panda-1.jpeg', habitat: 'Enclos', score: 57, famille: 'Mammifères' },
    { nickname: 'Tong', race: 'Dauphin', image: '../src/assets/images/animals/image-dauphin-1.png', habitat: 'Aquatique', score: 45, famille: 'Mammifères' },
    { nickname: 'Bari', race: 'Elephant', image: '../src/assets/images/animals/image-elephants-1.png', habitat: 'Savane', score: 15, famille: 'Mammifères' },
    { nickname: 'Robin', race: 'Tigre', image: '../src/assets/images/animals/image-tigre-2.jpeg', habitat: 'Jungle', score: 21, famille: 'Mammifères' },
    { nickname: 'Matou', race: 'Zebre', image: '../src/assets/images/animals/image-zebres-1.png', habitat: 'Savane', score: 34 , famille: 'Mammifères'},
    { nickname: 'Poireau', race: 'Crocodile', image: '../src/assets/images/animals/image-elephants-1.png', habitat: 'Marais', score: 61, famille: 'Reptiles' },
    { nickname: 'Binera', race: 'Pingouin', image: '../src/assets/images/animals/image-ours.png', habitat: 'Aquatique', score: 24, famille: 'Oiseaux' },
    { nickname: 'Croc-blanc', race: 'Loup', image: '../src/assets/images/animals/image-ours.png', habitat: 'Foret', score: 76, famille: 'Mammifères' },
    { nickname: 'Chanteuse des marais', race: 'Grenouille', image: '../src/assets/images/animals/image-elephants-1.png', habitat: 'Marais', score: 55, famille: 'Amphibiens' },
    { nickname: 'Rozo', race: 'Bouquetin', image: '../src/assets/images/animals/image-elephants-1.png', habitat: 'Montagne', score: 32, famille: 'Mammifères' },
    { nickname: 'La-fouine', race: 'Marmotte', image: '../src/assets/images/animals/image-panda-1.jpeg', habitat: 'Montagne', score: 41, famille: 'Mammifères' },
    { nickname: 'Vostros', race: 'Vautour', image: '../src/assets/images/animals/image-vautours-1.jpg', habitat: 'Montagne', score: 38, famille: 'Oiseaux' },
    { nickname: 'Zira', race: 'Antilope', image: '../src/assets/images/animals/image-panda-1.jpeg', habitat: 'Plaine', score: 49, famille: 'Mammifères' },
    { nickname: 'Ableti', race: 'Coyote', image: '../src/assets/images/animals/image-panda-1.jpeg', habitat: 'Plaine', score: 19, famille: 'Mammifères' },
    { nickname: 'Albatros', race: 'Faucon', image: '../src/assets/images/animals/image-panda-1.jpeg', habitat: 'Plaine', score: 41, famille: 'Oiseaux' },
    { nickname: 'Balard', race: 'Tigre', image: '../src/assets/images/animals/image-tigre-1.jpeg', habitat: 'Jungle', score: 41, famille: 'Poisson' },
    { nickname: 'Papou', race: 'Perroquet', image: '../src/assets/images/animals/image-perroquet-1.jpeg', habitat: 'Cage', score: 71, famille: 'Oiseaux' },
    { nickname: 'Blamas', race: 'Perroquet', image: '../src/assets/images/animals/image-perroquet-1.jpeg', habitat: 'Cage', score: 87, famille: 'Oiseaux' },
];
  
let currentPage = 1;
const itemsPerPage = 6;
const totalPages = Math.ceil(data.length / itemsPerPage); //ajout
const pageCountElement = document.getElementById('page-count');
const paginationContainer = document.getElementById('pagination-container'); 

function displayCards(cards) {
    const container = document.getElementById('card-container');
    container.innerHTML = ''; // Réinitialiser le conteneur

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedCards = cards.slice(startIndex, endIndex);

    paginatedCards.forEach(item => {
        const card = document.createElement('div');
        card.className = `card-habitat ${item.type}`;
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="container">
                <h4><b>${item.name}</b></h4>
                <p class="nameType">${item.type}</p>
                <p>${item.description}</p>
            </div>
            <!-- Début de la section Modal -->
            <button type="button" class="trigger-button" data-bs-toggle="modal" data-bs-target="#animalsModal" onclick="showProductDetails('${item.type}')">
              Voire les animaux
            </button>
            <!-- Modal -->
              <div class="modal fade" id="animalsModal" tabindex="-1" aria-labelledby="animalsModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title fs-5" id="animalsModalLabel"></h5>
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body" >
                    <div class="container-fluid" id="modal-body-content">
                    </div>
                  </div>
                  <div class="modal-footer">
                     <button type="button" class="trigger-button" data-bs-dismiss="modal">Fermer</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Fin de la section Modal -->
        `;
        container.appendChild(card);
    });
    updatePagination(data.length);
}

function updatePagination(totalItems) {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * itemsPerPage >= totalItems;
    pageCountElement.textContent = `Page ${currentPage} / ${totalPages}`;

}

function filterAndSort() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const sortValue = document.getElementById('sort').value;

    let filteredData = data.filter(item => 
        item.name.toLowerCase().includes(searchValue) || 
        item.type.toLowerCase().includes(searchValue)
    );

    if (filteredData.length === 0) {
        const container = document.getElementById('card-container');
        container.innerHTML = '<span>Aucun résultat trouvé !</span>';
        paginationContainer.classList.remove('pagination-container');
        paginationContainer.classList.add('pagination-container-hidden');
    } else {
        paginationContainer.classList.remove('pagination-container-hidden');
        paginationContainer.classList.add("pagination-container");
        if (sortValue === 'name') {
            filteredData.sort((a, b) => a.name.localeCompare(b.name));
        
        } else if (sortValue === 'type') {
            filteredData.sort((a, b) => a.type.localeCompare(b.type));
        
        }  

        //currentPage = 1; // Réinitialiser à la première page
        displayCards(filteredData);
    }
}

document.getElementById('search').addEventListener('input', filterAndSort);
document.getElementById('sort').addEventListener('change', filterAndSort);

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        filterAndSort();
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        filterAndSort();
}
});


function showProductDetails(title) {
  const modalTitle = document.getElementById('animalsModalLabel');
  const modalBodyContent = document.getElementById('modal-body-content');
  modalTitle.textContent = title;
  modalBodyContent.innerHTML = '';

  const animals = animalsDatas.filter(animal => animal.habitat === title);
 
  animals.forEach(animal => {
    const containerDiv = document.createElement('div');
    containerDiv.className = 'row';

    const photoDiv = document.createElement('div');
    photoDiv.className = 'col-12 col-md-12';

    const img = document.createElement('img');
    img.src = animal.image;
    img.className = 'photo';
    img.alt = animal.nickname;

    const nicknameDiv = document.createElement('div');
    nicknameDiv.className = 'nickname';
    nicknameDiv.innerText = animal.nickname;

    photoDiv.appendChild(img);
    photoDiv.appendChild(nicknameDiv);
    containerDiv.appendChild(photoDiv);
    modalBodyContent.appendChild(containerDiv);
  }); 
}


// Afficher les cartes initialement
displayCards(data);
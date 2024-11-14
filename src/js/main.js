// Mes fonctionnalités interactives


// Code pour le menu burger
document.addEventListener('DOMContentLoaded', function() {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var navbarCollapse = document.querySelector('#navbarNav');

  navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
  });
});


// Code pour les statistiques interactives
document.addEventListener('DOMContentLoaded', function() {
    // Code pour les statistiques interactives
  });


// Bouton de retour en haut de la page
let mybutton = document.getElementById("topPage");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;  
  document.documentElement.scrollTop = 0; }


// Code pour la validation de formulaire de contact
function validateForm() {
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

  return true;
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
      { name: 'Savane africaine', type: 'savane', image: 'savane.jpg', description: '...' },
      { name: 'Savane africaine', type: 'savane', image: 'savane.jpg', description: '...' },
      { name: 'Savane africaine', type: 'savane', image: 'savane.jpg', description: '...' },
      { name: 'Marais d\'Annel', type: 'marais', image: 'marais.jpg', description: '...' },
      { name: 'Marais d\'Annel', type: 'marais', image: 'marais.jpg', description: '...' },
      { name: 'Marais d\'Annel', type: 'marais', image: 'marais.jpg', description: '...' },
      { name: 'Forêt amazonienne', type: 'foret', image: 'foret.jpg', description: '...' },
      { name: 'Montagne', type: 'montagne', image: 'montagne.jpg', description: '...' },
      { name: 'Montagne', type: 'montagne', image: 'montagne.jpg', description: '...' },
      { name: 'Montagne', type: 'montagne', image: 'montagne.jpg', description: '...' },
      { name: 'Forêt amazonienne', type: 'foret', image: 'foret.jpg', description: '...' },
      { name: 'Batiment A', type: 'cage', image: 'cage.jpg', description: '...' },
      { name: 'Batiment B', type: 'enclot', image: 'enclot.jpg', description: '...' },
      { name: 'Piscine 1', type: 'aquatique', image: 'piscine-1.jpg', description: '...' },
      { name: 'Piscine 2', type: 'aquatique', image: 'piscine-2.jpg', description: '...' },
      // ... ajoutez d'autres cartes ici
  ];

  const animalsDatas = [
    { prenom: 'Médor', race: 'chien', image: 'chien.jpg', habitat: 'enclot' },
    { prenom: 'Titi', race: 'lion', image: 'lion-savane.jpg', habitat: 'savane' },
    { prenom: 'Loulou', race: 'caniche', image: 'caniche.jpg', habitat: 'enclot' },
    { prenom: 'Pati', race: 'ours', image: 'ours-brun.jpg', habita: 'foret' },
    { prenom: 'Tong', race: 'dauphin', image: 'dauphin.jpg', habita: 'aquatique' },
    { prenom: 'Bari', race: 'elephant', image: 'elephant.jpg', habita: 'savane' },
    { prenom: 'Robin', race: 'tigre', image: 'tigre.jpg', habita: 'savane' },
    { prenom: 'Matou', race: 'zebre', image: 'zebre.jpg', habitat: 'savane' },
    { prenom: 'Poireau', race: 'crocodile', image: 'crocodile-marais.jpg', habitat: 'marais' },
    { prenom: 'Binera', race: 'montagne', image: 'montagne.jpg', habitat: '...' },
    { prenom: 'Croc-blanc', type: 'foret', image: 'foret.jpg', habitat: '...' },
    { prenom: 'Chanteuse des marais', type: 'grenouille', image: 'grenouille-marais.jpg', habitat: 'marais' },
    { prenom: 'Albatros', type: 'heron', image: 'heron-marais.jpg', habitat: 'marais' },
    // ... ajoutez d'autres cartes ici
];
  
let currentPage = 1;
const itemsPerPage = 8;
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
                <p>${item.type}</p>
                <p>${item.description}</p>
            </div>
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
        //return;
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

// Afficher les cartes initialement
displayCards(data);
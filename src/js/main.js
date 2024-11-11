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


// Code pour le filtre de l'affichage des animaux dans la page galerie

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
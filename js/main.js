// Mes fonctionnalités interactives

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
document.getElementById("currentyear").innerHTML = new Date(document.lastModified)

// making variables
const hamburguer = document.querySelector('.hamburguer');

hamburguer.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
}
const navMenu = document.querySelector('#nav_menu');
// function to use the hamburguer
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  nav_menu.classList.toggle('active');

});
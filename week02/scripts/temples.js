document.getElementById("currentyear").innerHTML = new Date(document.lastModified)

// script.js
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Optional: Close menu when a menu item is clicked
const menuItems = document.querySelectorAll('.menu li');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});
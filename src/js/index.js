"use strict";
const vaseelement = document.getElementsByClassName("menu1");
const menuBTN = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
// for humburger menu close and open 
if (menuBTN && menu) {
    menuBTN.addEventListener('click', () => {
        menuBTN.classList.toggle('open');
        menu.classList.toggle('open');
    });
}
document.onclick = (event) => {
    if (menu && menuBTN && !menu.contains(event.target) && !menuBTN.contains(event.target)) {
        menuBTN.classList.remove('open');
        menu.classList.remove('open');
    }
};

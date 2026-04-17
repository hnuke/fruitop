const hamburguer = document.querySelector('.hamburguer');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
let menuOpen = false;

hamburguer.addEventListener('click', () => {
    if (menuOpen == false) {
        navLinks.style.display = "flex";
        nav.style.display = "flex"
        menuOpen = true;
    }
    else if (menuOpen == true){
        navLinks.style.display = "none";
        nav.style.display = "none";
        menuOpen = false;
    }
});
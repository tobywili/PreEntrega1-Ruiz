// JavaScript para manejar el menú hamburguesa
document.getElementById("hamburger").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
});
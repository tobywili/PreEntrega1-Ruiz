document.addEventListener("DOMContentLoaded"), function () 
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Agrega o quita la clase 'active'
    });
    
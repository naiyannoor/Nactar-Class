const toggleMenu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

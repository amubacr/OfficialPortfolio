const toggleMenu = document.querySelector(".narea-toggle input");
const nav = document.querySelector(".narea-nav");

toggleMenu.addEventListener("click", function () {
    nav.classList.toggle("tog");
})
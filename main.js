const overlay = document.getElementById('overlay');
const navMenu = document.getElementById("nav-menu");
const openMenu = document.getElementById("open-menu");
const darkLogo = document.getElementById("dark-logo");
const mockups = document.getElementById('mockups');


openMenu.addEventListener("click", () =>{
    openMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle("active");
    darkLogo.classList.toggle('centered');
    mockups.classList.toggle('active');
});
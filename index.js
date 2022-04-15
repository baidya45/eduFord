let menuBar = document.querySelector(".menu-bar");
let navLinks = document.querySelector(".nav-links");

function navToggle(){

    
}
menuBar.addEventListener("click",()=>{
    navLinks.classList.toggle('active')
    menuBar.classList.toggle('menubartoggle')
});
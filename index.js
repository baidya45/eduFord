let menuBar = document.querySelector(".menu-bar");
let navLinks = document.querySelector(".nav-links");
let nav = document.querySelector('nav');



    
window.addEventListener('scroll',()=>{
    if(window.pageYOffset>650){
        nav.classList.add('black');
    }
    else{
        nav.classList.remove('black');
    }
})
menuBar.addEventListener("click",()=>{
    navLinks.classList.toggle('active')
    menuBar.classList.toggle('menubartoggle')
});


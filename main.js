const menuEamil = document.querySelector(".navbar-email");
const desktopMenu =document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu =  document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEamil.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("clikc",toggleCarritoAside);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle(".inactive")
    };

function toggleMobileMenu (){
    mobileMenu.classList.toggle(".inactive")
    };

function toggleCarritoAside(){
    aside.classList.toggle(".inactive")
    console.log()
};  
let hamburger = document.getElementById("hamburger");
let closeNav = document.getElementById("close-nav");
let mobileNav = document.getElementById("nav-modal");
hamburger.addEventListener('click', openNavigation);
closeNav.addEventListener('click', closeNavigation);

function openNavigation() {
    // mobileNav.style.display = "block";
    // console.log("open");
    mobileNav.classList.add("open-nav-animation");
    mobileNav.classList.remove("close-nav-animation");
    mobileNav.classList.remove("display-none");
}

function closeNavigation() {
    // mobileNav.style.display = "none";
    // console.log("close");
    mobileNav.classList.add("close-nav-animation");
    mobileNav.classList.remove("open-nav-animation");

}


var hamburger = document.querySelector("#hamburger");
var closeNav = document.querySelector("#close-nav");
var mobileNav = document.querySelector("#nav-modal");

function openNavigation() {
    var mobileNav = document.querySelector("#nav-modal");

    mobileNav.classList.add("open-nav-animation");
    mobileNav.classList.remove("close-nav-animation");
    mobileNav.classList.remove("display-none");
}

function closeNavigation() {
    var mobileNav = document.querySelector("#nav-modal");
    mobileNav.classList.add("close-nav-animation");
    mobileNav.classList.remove("open-nav-animation");

}

document.addEventListener("click", (e) => {
    if(e.target && e.target.id == "hamburger") {
        console.log("hit");
        openNavigation();
    }
});

document.addEventListener("click", (e) => {
    if(e.target && e.target.id == "close-nav") {
        console.log("hit");
        closeNavigation();
    }
});




// export { hamburger, closeNav, mobileNav, openNavigation, closeNavigation };

console.log(hamburger);


import { createCrewTemplate, setCurrent } from "./crewTemplate.js";

// Get data from JSON file
let xhr = new XMLHttpRequest();
xhr.open("GET", "/data.json");

xhr.onload = function() {
    if(xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        renderHTML(data);
    }
}

xhr.send();


function renderHTML(data) {
    createCrewTemplate(data);
}

// Adding horizontal scroll between crew pages

let crewImages = document.querySelector("#crew-images");
let crewDescriptions = document.querySelector("#crew-description");
let crewNav = document.querySelectorAll(".crew-nav");
var startingX;
var startingLeft;


crewImages.addEventListener("touchstart", (e) => {
    startingX = e.touches[0].clientX;
    console.log("startingX: " + startingX);
    startingLeft = crewImages.offsetLeft;
    console.log("startingLeft: " + startingLeft);
});

crewDescriptions.addEventListener("touchstart", (e) => {
    startingX = e.touches[0].clientX;
    console.log("startingX: " + startingX);
    startingLeft = crewDescriptions.offsetLeft;
    console.log("startingLeft: " + startingLeft);
});
crewImages.addEventListener("touchmove", (e) => {
    var touch = e.touches[0];
    var change = startingX - touch.clientX;
    console.log("change: " + change);
    crewImages.style.left = '-' + (change - startingLeft) + 'px';
    crewDescriptions.style.left = '-' + (change - startingLeft) + 'px';
    e.preventDefault();
})

crewDescriptions.addEventListener("touchmove", (e) => {
    var touch = e.touches[0];
    var change = startingX - touch.clientX;
    console.log("change: " + change);
    crewImages.style.left = '-' + (change - startingLeft) + 'px';
    crewDescriptions.style.left = '-' + (change - startingLeft) + 'px';
    e.preventDefault();
})
crewImages.addEventListener("touchend", (e) => {
    updateScreen(e)
});

crewDescriptions.addEventListener("touchend", (e) => {
    updateScreen(e)
})

// functionality of second nav buttons

var secondNav = document.querySelectorAll(".second-nav-items a");
console.log(secondNav);
for(let i = 0; i < 4; ++i) {
    secondNav[i].addEventListener("click", (e) => {
        crewImages.style.transition = 'all .3s';
        crewDescriptions.style.transition = 'all .3s';
        setLeft(i);
        setCurrent(crewNav, i);
        e.preventDefault();

    });
}
// secondNav[1].addEventListener("click", (e) => {
//     crewImages.style.left = "-100vw";
//     crewDescriptions.style.left = "-100vw";
//     e.preventDefault();
// })



function updateScreen(e) {
    let change = startingX - e.changedTouches[0].clientX;
    let threshold = screen.width / 3;
    let width = screen.width;

    // if the screen isn't moved that much, stay on current page
    if(change < threshold && startingLeft == 0) {
        crewImages.style.left = 0;
        crewDescriptions.style.left = 0;
        setCurrent(crewNav, 0);
    } else if(change < threshold && change > -threshold && startingLeft == -width) {
        crewImages.style.left = "-100vw";
        crewDescriptions.style.left = "-100vw";        
        setCurrent(crewNav, 1);

    } else if(change < threshold && change > -threshold && startingLeft == -(2 * width)) {
        crewImages.style.left = "-200vw";
        crewDescriptions.style.left = "-200vw";
        setCurrent(crewNav, 2);

    } else if(change > -threshold && startingLeft == -(3 * width)) {
        crewImages.style.left = "-300vw";
        crewDescriptions.style.left = "-300vw";
        setCurrent(crewNav, 3);

    } 
    // if the screen is moved enough, move to next or previous page
    else if(change >= threshold && startingLeft == 0) {
        crewImages.style.transition = 'all .3s';
        crewImages.style.left = "-100vw";
        crewDescriptions.style.transition = 'all .3s';
        crewDescriptions.style.left = "-100vw";
        setCurrent(crewNav, 1);

    } else if(change >= threshold && startingLeft == -width) {
        crewImages.style.transition = 'all .3s';
        crewImages.style.left = "-200vw";
        crewDescriptions.style.transition = 'all .3s';
        crewDescriptions.style.left = "-200vw";
        setCurrent(crewNav, 2);

    } else if(change >= threshold && startingLeft == -(2 * width)) {
        crewImages.style.transition = 'all .3s';
        crewImages.style.left = "-300vw";
        crewDescriptions.style.transition = 'all .3s';
        crewDescriptions.style.left = "-300vw";
        setCurrent(crewNav, 3);

    } else if(change <= -threshold && startingLeft == -width) {
        crewImages.style.transition = 'all .3s';
        crewImages.style.left = 0;
        crewDescriptions.style.transition = 'all .3s';
        crewDescriptions.style.left = 0;
        setCurrent(crewNav, 0);

    } else if(change <= -threshold && startingLeft == -(2 * width)) {
        crewImages.style.transition = 'all .3s';
        crewImages.style.left = "-100vw";
        crewDescriptions.style.transition = 'all .3s';
        crewDescriptions.style.left = "-100vw";
        setCurrent(crewNav, 1);

    } else if(change <= -threshold && startingLeft == -(3 * width)) {
        crewImages.style.transition = 'all .3s';
        crewImages.style.left = "-200vw";
        crewDescriptions.style.transition = 'all .3s';
        crewDescriptions.style.left = "-200vw";
        setCurrent(crewNav, 2);

    } 
    // If something goes wrong, auto move to the nearest page
    else if(startingLeft <= 0 && startingLeft > -width) {
        crewImages.style.left = 0;
        crewDescriptions.style.left = 0;
        setCurrent(crewNav, 0);

    } else if(startingLeft <= -width && startingLeft > -(2 * width)) {
        crewImages.style.left = "-100vw";
        crewDescriptions.style.left = "-100vw";
        setCurrent(crewNav, 1);

    } else if(startingLeft <= -(2 * width) && startingLeft > -(3 * width)) {
        crewImages.style.left = "-200vw";
        crewDescriptions.style.left = "-200vw";
        setCurrent(crewNav, 2);

    }
}

function setLeft(index) {
    console.log(-(index * screen.width));    
    crewDescriptions.style.left = -(index * screen.width) + "px";
    crewImages.style.left = -(index * screen.width) + "px";
}
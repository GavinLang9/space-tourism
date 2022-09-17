import { createCrewTemplate, setCurrent } from "./crewTemplate.js";
let xhr = new XMLHttpRequest();
xhr.open("GET", "../data.json");

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


let crewImages = document.querySelector("#crew-images");
let crewDescriptions = document.querySelector("#crew-description");

var startingX;
var startingLeft;
crewImages.addEventListener("touchstart", (e) => {
    startingX = e.touches[0].clientX;
    console.log("startingX: " + startingX);
    startingLeft = crewImages.offsetLeft;
    console.log("startingLeft: " + startingLeft);
});

crewImages.addEventListener("touchmove", (e) => {
    var touch = e.touches[0];
    var change = startingX - touch.clientX;
    console.log("change: " + change);
    // if(change < 0) {
    //     return;
    // }
    crewImages.style.left = '-' + (change - startingLeft) + 'px';
    e.preventDefault();
})

crewImages.addEventListener("touchend", (e) => {
    var change = startingX - e.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if(change < threshold && startingLeft < (screen.width / 2)) {
        crewImages.style.left = 0;
    } else if(change >= threshold && startingLeft == 0) {
        crewImages.style.transition = 'all .3s';
        crewImages.style.left = "-100vw";
    }
})
import { createDestinationTemplate } from "./destinationTemplate.js";
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
    let body = document.querySelector("body");
    body.innerHTML += createDestinationTemplate(data, 3);
    
}




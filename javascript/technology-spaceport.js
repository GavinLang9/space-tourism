import { createTechnologyTemplate } from "./technology-template.js";

var xhr = new XMLHttpRequest();
xhr.open("GET", "data.json");

xhr.onload = function() {
    if(xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        renderHTML(data, 1);
    }
}

xhr.send();

function renderHTML(data, index) {
    createTechnologyTemplate(data, index);
}
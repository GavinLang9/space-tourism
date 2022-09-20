import { setCurrent } from "./destinationTemplate.js";

function createTechnologyTemplate(data, index) {
    let currentObj = data.technology[index];
    let techImage = document.querySelector("#technology-image");
    let techName = document.querySelector("#name");
    let techDescription = document.querySelector("#description");
    let techNav = document.querySelectorAll(".technology-nav");
    setCurrent(techNav, index);


    techImage.setAttribute("src", currentObj.images.landscape);
    techImage.setAttribute("alt", currentObj.name);

    techName.innerHTML = currentObj.name;
    techDescription.innerHTML = currentObj.description;

    


}

export {createTechnologyTemplate}
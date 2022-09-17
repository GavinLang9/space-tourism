
function setCurrent(navItems, index) {
  navItems.forEach(navItem => {
    navItem.classList.remove("current");
  });
  navItems[index].classList.add("current");
}

function createDestinationTemplate(data, index) {
    let currentObj = data.destinations[index];
    let planetImage = document.querySelector("#planet");
    let planetName = document.querySelector("#planet-name");
    let planetDescription = document.querySelector("#planet-description");
    let distance = document.querySelector("#distance");
    let travel = document.querySelector("#travel");
    let destinationNaV = document.querySelectorAll(".destination-nav");
    setCurrent(destinationNaV, index);


    planetImage.setAttribute("src", currentObj.images.png);
    planetImage.setAttribute("alt", currentObj.name);

    planetName.innerHTML = currentObj.name;
    planetDescription.innerHTML = currentObj.description;

    distance.innerHTML = currentObj.distance;
    travel.innerHTML = currentObj.travel;


}


export { createDestinationTemplate, setCurrent };
function setCurrent(navItems, index) {
  navItems.forEach(navItem => {
    navItem.classList.remove("current");
  });
  navItems[index].classList.add("current");
}

function createCrewTemplate(data) {
  let index = 0;
  let crewImage = document.querySelectorAll(".crew-member");
  let crewNav = document.querySelectorAll(".crew-nav");
  let roles = document.querySelectorAll(".role");
  let names = document.querySelectorAll(".name");
  let bios = document.querySelectorAll(".bio");
  let obj = data.crew;

  for(let i = 0; i < 4; ++i) {
    
    crewImage[i].setAttribute("src", obj[i].images.png);
    crewImage[i].setAttribute("alt", obj[i].name);

    roles[i].innerHTML = obj[i].role;
    names[i].innerHTML = obj[i].name;
    bios[i].innerHTML = obj[i].bio;
  }
  setCurrent(crewNav, index);

}


export { createCrewTemplate, setCurrent };
function createCrewTemplate(data, index) {

    return `
    <main>
    <header>
      <h5>02</h5>
      <h5>Meet Your Crew</h5>
    </header>
    <img id="crew-member" src="${data.crew[index].images.png}" alt="${data.destinations[index].name}">
    <hr>
    <ol class="second-nav-items">
      <a href="./crew-commander.html"><li ${current1(index)}><h5></h5></li></a>
      <a href="./crew-specialist.html"><li ${current2(index)}><h5></h5></li></a>
      <a href="./crew-pilot.html"><li ${current3(index)}><h5></h5></li></a>
      <a href="./crew-engineer.html"><li ${current4(index)}><h5></h5></li></a>
    </ol>
    <h4>${data.crew[index].role}</h4>
    <h3>${data.crew[index].name}</h3>
    <p>${data.crew[index].bio}</p>

  </main>`;
}

function current1(index) {
  if(index == 0) {
    return "class='current'";
  } 
}

function current2(index) {
  if(index == 1) {
    return "class='current'";
  } 
}
function current3(index) {
  if(index == 2) {
    return "class='current'";
  } 
}
function current4(index) {
  if(index == 3) {
    return "class='current'";
  } 
}
export { createCrewTemplate };
function createDestinationTemplate(data, index) {
   let main = document.createElement("main");
   let header = document.createElement("header");
   let number = document.createElement("h5");
   number.textContent = "01";
   header.appendChild(number);
   main.appendChild(header);
   return main;
     `
  <main>
    <header>
      <h5>01</h5>
      <h5>Pick Your Destination</h5>
    </header>
    <img id="planet" src="${data.destinations[index].images.png}" alt="${data.destinations[index].name}">
    <ol class="second-nav-items">
      <a href="./destination-moon.html"><li ${current1(index)}><h5>Moon</h5></li></a>
      <a href="./destination-mars.html"><li ${current2(index)}><h5>Mars</h5></li></a>
      <a href="./destination-europa.html"><li ${current3(index)}><h5>Europa</h5></li></a>
      <a href="./destination-titan.html"><li ${current4(index)}><h5>Titan</h5></li></a>
    </ol>
    <h1>${data.destinations[index].name}</h1>
    <p>${data.destinations[index].description}</p>
      <hr>
    <div class="stat">
      <H2 class="subheader2">Avg. distance</H2>
      <H1 class="subheader1">${data.destinations[index].distance}</H1>
    </div>
    <div class="stat">
      <H2 class="subheader2">Est. Travel Time</H2>
      <H1 class="subheader1">${data.destinations[index].travel}</H1>
    </div>

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
export { createDestinationTemplate };
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
    body.innerHTML = 
    `<nav>  
    <a href="index.html"><svg id="logo" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg></a>
    <svg id="hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
    <aside id="nav-modal">
      <svg id="close-nav"xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
        <ol class="nav-items">
          <li>
            <h5 class="number">00</h5>
            <h5>Home</h5>
          </li>     
          <li>
            <h5 class="number">01</h5>
            <h5>Destination</h5>
          </li> 
          <li>
            <h5 class="number">02</h5>
            <h5>Crew</h5>
          </li> 
          <li>
            <h5 class="number">03</h5>
            <h5>Technology</h5>
          </li>      
        </ol> 
    </aside>
  </nav>
  <main>
    <header>
      <h5>01</h5>
      <h5>Pick Your Destination</h5>
    </header>
    <img id="planet" src="${data.destinations[0].images.png}" alt="${data.destinations[0].name}">
    <ol class="second-nav-items">
      <a href="./destination-moon.html"><li class="current"><h5>Moon</h5></li></a>
      <a href="./destination-mars.html"><li><h5>Mars</h5></li></a>
      <a href="./destination-europa.html"><li><h5>Europa</h5></li></a>
      <a href="./destination-titan.html"><li><h5>Titan</h5></li></a>
    </ol>
    <h1>${data.destinations[0].name}</h1>
    <p>${data.destinations[0].description}</p>
      <hr>
    <div class="stat">
      <H2 class="subheader2">Avg. distance</H2>
      <H1 class="subheader1">384,400 km</H1>
    </div>
    <div class="stat">
      <H2 class="subheader2">Est. Travel Time</H2>
      <H1 class="subheader1">3 days</H1>
    </div>

  </main>`
}
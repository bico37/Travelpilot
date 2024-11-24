/// <reference path="./data/cars-data.js"/>

function rangeSlide(value) {
  document.getElementById('rangeValue').innerHTML = `${value}€`;
}



let contentString = ""
let filters = {
  place: "",
  passengers: 0,
  type: "",
  price: 0,
}

// Load Content
// All
loadWhenOpen()
function loadWhenOpen() {
  loadNav()
  loadContent()
  document.getElementById("output").innerHTML = `<p id="errorMessage">Search for your desired car</p>`
}

// Nav
function loadNav() {
  document.getElementById("loadNav").innerHTML = `
    <div class="nav-overall">
        <div class="nav-header">
          <div class="nav-header-main" id="backToStart">
            <img
              class="nav-header-main-logo"
              loading="lazy"
              alt=""
              src="../img/nav/logo/icon-logo.png"
            />

            <h1 class="nav-header-main-headl">TravelPilot</h1>
          </div>
          <img
            class="nav-header-circle"
            loading="lazy"
            alt=""
            src="../img/nav/vector/19406396.png"
          />
        </div>
        <div class="nav-subpage-yourTrip">
          <b class="nav-subpage-text-yourTrip" id="yourTripText">Your Trip</b>
        </div>
        <div class="nav-subpage-hotels">
          <b class="nav-subpage-text-hotels" id="hotelsText">Hotels</b>
        </div>
        <div class="nav-subpage-flights">
          <b class="nav-subpage-text-flights" id="flightsText">Flights</b>
        </div>
        <div class="nav-subpage-cars">
          <b class="nav-subpage-text-cars" id="carsText">Cars</b>
        </div>
        <div class="nav-subpage-activities">
          <b class="nav-subpage-text-activities" id="activitiesText">Activities</b>
        </div>
        <div class="nav-login">
          <button class="nav-login-sub-components">
            <div class="nav-login-divcursorpointer">
              <div class="nav-login-navigation-label">
                <div class="nav-login-text" onclick="setLogin()">Login</div>
              </div>
            </div>
          </button>
        </div>
    </div>
    
    <div id="loginMessage"><p>Logged in</p></div>
    `;

    
}
// Login
function checkLoggedIn() {
  // Überprüfen, ob das "loggedIn" Element im LocalStorage existiert und auf "true" gesetzt ist
  return localStorage.getItem("2BHITM_SEMSPROJEKT_logIn") === "true";
}

// Funktion zum Setzen des Anmeldestatus im LocalStorage und Umschalten des Status
function setLogin() {
  const loggedIn = checkLoggedIn();
  // Umschalten des Anmeldestatus
  localStorage.setItem("2BHITM_SEMSPROJEKT_logIn", (!loggedIn).toString());
  // Anmeldestatus Nachricht anzeigen
  loginMessage();
  // Anmeldestatus im HTML aktualisieren
  updateLoginText();
}

// Funktion zum Anzeigen einer Nachricht basierend auf dem Anmeldestatus
function loginMessage() {
    let loginMessage = document.querySelector('#loginMessage');
    if (checkLoggedIn()) {
        loginMessage.textContent = '❌Logged out';
        } else {
        loginMessage.textContent = '✅Logged in';
    }
     // Hinzufügen oder Entfernen der Klasse "show" für die Animation
     loginMessage.classList.add('show');
     setTimeout(() => {
         loginMessage.classList.remove('show');
     }, 1500); // Timeout für die Animation
}

// Funktion zum Aktualisieren des Anmeldestatus im HTML
function updateLoginText() {
    let loginText = document.querySelector('.nav-login-text');
    if (checkLoggedIn()) {
        loginText.textContent = 'Login';
    } else {
        loginText.textContent = 'Logout';
    }
}

// Beim Seitenaufruf den Anmeldestatus im HTML aktualisieren
updateLoginText();

// Content
function loadContent() {
  loadInput()
  loadOutputFild()
  document.getElementById('loadContent').innerHTML = contentString;
  contentString = ""
}

// Content - Input
function loadInput() {
  contentString += `
    <div class="all-layout">
        <div class="input-all">
            <div class="input-fields">
                <form>
                    <div class="input1">
                        <input type="text" name="name" class="question" id="placeInput" required autocomplete="off" placeholder="Paris, New York" oninput="input(event)"/>
                        <label for="nme"><span class="text">Which city are you booking for?</span></label>
                    </div>
                    <div class="input2">
                        <input type="number" name="name" class="question" id="passengersInput" required autocomplete="off" min="1" max="7" placeholder="2, 4" oninput="input(event)"/>
                        <label for="nme"><span class="text">How many seats should the car have?</span></label>
                    </div>
                    <div class="input4">
                        <input type="text" name="name" class="question" id="typeInput" required autocomplete="off" placeholder="SUV, Cabrio" oninput="input(event)"/>
                        <label for="nme"><span class="text">What's your preferred car type?</span></label>
                    </div>
                    <div class="input3">
                        <p>Price per Day</p>
                        <div class="input-range">
                          <input class="range" id="priceInput" type="range" name="" value="0" min="0" max="1000" oninput="rangeSlide(this.value); input(event);">
                          <span id="rangeValue">0€</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `
}

// Get the Input of the User
let debounceTimer;
function input(event) {
  // Clear the previous timeout to prevent multiple API calls
  clearTimeout(debounceTimer);

  // Set a new timeout to wait for the user to stop typing
  debounceTimer = setTimeout(() => {
    console.log("Wert geändert: " + event.target.value);

    // Get the user input for place and stars
    let placeInput = document.getElementById("placeInput").value;
    let passengersInput = document.getElementById("passengersInput").value;
    let typeInput = document.getElementById("typeInput").value;
    let priceInput = document.getElementById("priceInput").value;

    filters.place = placeInput;
    filters.passengers = passengersInput ? parseInt(passengersInput) : 0;
    filters.type = typeInput;
    filters.price = priceInput ? parseFloat(priceInput) : 0;

    console.log(filters);

    if (placeInput.length > 0) {
      loadCars();
    } else {
      document.getElementById("output").innerHTML = `<p id="errorMessage">Please search for a city</p>`
    }

  }, 500); // 500 milliseconds = 0.5 seconds
}




// Content - Output
function loadOutputFild() {
  contentString += `
    <div class="output-all">
        <div class="output-all-boxes" id="output">
              
        </div>
    </div>
    `

}

//Ausg Cars
function loadCars() {
  let carsString = ""

  for (let i = 0; i < allCars.length; i++) {
    let car = allCars[i];
    let matches = true;

    if (filters.passengers && car.capacity != filters.passengers) {
      matches = false;
    }

    if (filters.type && car.category && !car.category.toLowerCase().includes(filters.type.toLowerCase())) {
      matches = false;
    }

    if (filters.price) {
      let priceRange = filters.price * 0.2; // 20% der Filterpreis
      let minPrice = filters.price - priceRange;
      let maxPrice = filters.price + priceRange;
      console.log(minPrice + " - " + maxPrice);

      if (car.pricePerDay < minPrice || car.pricePerDay > maxPrice) {
        matches = false;
      }

    } 

    if (matches) {
      console.log("Added" + allCars[i]);
      carsString += `
        <div class="singleBox">
            <div class="singleBox-img">
                <img src="${car.image}" alt="${car.name}" >
            </div>
            <div class="singleBox-info">
                <div class="singleBox-1row">
                    <p class="singleBox-name">${car.name}</p>
                    <div class="singleBox-icon">
                        <img src="../img/cars/persons-icon.png" alt="">
                        <p>${car.capacity}</p>
                    </div>
                </div>
                <div class="singleBox-2row">
                    <p class="singleBox-price">${car.pricePerDay}€<span class="price-span">/day</span></p>
                    <button class="button-18" onclick="AddCarToTrip(${i})" role="button">Add</button>
                </div>
            </div>     
        </div>`;
    }
  }

  document.getElementById('output').innerHTML = carsString;

}



function AddCarToTrip(id) {
  let car = allCars[id];

  let storedCars = JSON.parse(localStorage.getItem('2BHITM_SEMSPROJEKT_cars')) || [];
  storedCars.push(car);
  localStorage.setItem('2BHITM_SEMSPROJEKT_cars', JSON.stringify(storedCars));
  
  addedToTripMessage();
}


// Added to Trip Message
function addedToTripMessage() {
  let loginMessage = document.querySelector('#loginMessage');

  loginMessage.textContent = '🔵 Added to Trip';

   // Hinzufügen oder Entfernen der Klasse "show" für die Animation
   loginMessage.classList.add('show');
   setTimeout(() => {
       loginMessage.classList.remove('show');
   }, 1500); // Timeout für die Animation
}
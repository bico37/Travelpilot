/// <reference path="./data/flights-data.js"/>

function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = `${value}€`;
}

let contentString = "";
let filters = {
  place: "",
  departure: "",
  price: 0
}

// Load Content
// All
loadWhenOpen();
function loadWhenOpen() {
  loadNav();
  loadContent();
  document.getElementById("output").innerHTML = `<p id="errorMessage">Search for your desired flight</p>`;
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
  loadInput();
  loadOutputFild();
  document.getElementById("loadContent").innerHTML = contentString;
  contentString = "";
}

// Content - Input
function loadInput() {
  contentString += `
    <div class="all-layout">
        <div class="input-all">
            <div class="input-fields">
                <form>
                    <div class="input1">
                      <input type="text" name="name" class="question" id="departureInput" required autocomplete="off" placeholder="Vienna, Munich" oninput="input(event)"/>
                      <label for="nme"><span class="text">Where are you departing from?</span></label>
                    </div>
                    <div class="input2">
                      <input type="text" name="name" class="question" id="placeInput" required autocomplete="off" placeholder="Madrid, London" oninput="input(event)"/>
                      <label for="nme"><span class="text">Where would you like to fly?</span></label>
                    </div>
                    <div class="input3">
                      <p>Price?</p>
                      <div class="input-range">
                      <input class="range" id="priceInput" type="range" name="" value="0" min="0" max="1000" oninput="rangeSlide(this.value); input(event);">
                      <span id="rangeValue">0€</span>
                      </div>
                    </div>
                </form>
            </div>
        </div>
    `;
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
    let placeInput = document.getElementById("placeInput");
    let departureInput = document.getElementById("departureInput");
    let priceInput = document.getElementById("priceInput");

    filters.place = placeInput ? placeInput.value : '';
    filters.departure = departureInput ? departureInput.value : '';
    filters.price = priceInput && priceInput.value ? parseFloat(priceInput.value) : ''


    if (filters.place != "" || filters.departure != "" || priceInput >= 0) {
      loadFlights();
      console.log(filters.place + " " + filters.departure + " " + filters.price);
    } else {
      document.getElementById("output").innerHTML = `<p id="errorMessage">Please type in an destination</p>`
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
    `;
}


// Ausgabe der Flüge
function loadFlights() {
  let flightsString = "";

  for (let i = 0; i < flights.length; i++) {
    for (let j = 0; j < flights[i].length; j++) {
      let flight = flights[i][j];

      let matchesPlace = true;
      let matchesDeparture = true;
      let matchesPrice = true;

      if (filters.place) {
        matchesPlace = flight.arrival.toLowerCase().includes(filters.place.toLowerCase());
      }

      if (filters.departure) {
        matchesDeparture = flight.departure.toLowerCase().includes(filters.departure.toLowerCase());
      }

      if (filters.price) {
        let priceRange = filters.price * 0.2; // 20% der Filterpreis
        let minPrice = filters.price - priceRange;
        let maxPrice = filters.price + priceRange;
        console.log(minPrice + " - " + filters.price + " - " + maxPrice);

        if (flight.price < minPrice || flight.price > maxPrice) {
          matchesPrice = false;
        }
      }

      console.log(matchesPlace, matchesDeparture, matchesPrice);
      // Only display flights that match all active filters
      if ((!filters.place || matchesPlace) &&
        (!filters.departure || matchesDeparture) &&
        (filters.price === 0 || matchesPrice)) {

        flightsString += `
            <div class="singleBox">
                <div class="singleBox-img">
                    <img src="${flights[i][j].airline.image}" alt="" >
                </div>
                <div class="singleBox-info">
                    <div class="singleBox-1row">
                        <p class="singleBox-name">${flights[i][j].departure} - ${flights[i][j].arrival}</p>
                        <div class="singleBox-location">
                            <img src="../img/flights/time icon.png" alt="">
                            <p>${flights[i][j].flighttime}</p>
                        </div>
                    </div>
                    <div class="singleBox-2row">
                        <p class="singleBox-price">${flights[i][j].price}€</p>
                        <!-- Button mit onclick-Handler hinzugefügt -->
                        <button class="button-18" onclick="addFlightToTrip(${i},${j})" role="button">Add</button>
                    </div>
                </div>
            </div>`;
      }

    }
  }

  document.getElementById('output').innerHTML = flightsString;
}


// Funktion, um einen Flug zum Trip hinzuzufügen -> chatgpt
function addFlightToTrip(i, j) {
  const flight = flights[i][j];

  // Zuerst alle vorhandenen Flüge aus dem Local Storage abrufen
  let storedFlights = JSON.parse(localStorage.getItem('2BHITM_SEMSPROJEKT_flights')) || [];

  // Den neuen Flug zum Array hinzufügen
  storedFlights.push(flight);

  // Das aktualisierte Array als JSON-String im Local Storage speichern
  localStorage.setItem('2BHITM_SEMSPROJEKT_flights', JSON.stringify(storedFlights));
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
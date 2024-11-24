// <reference path="./data/hotels-data.js"/>
/// <reference path="./data/hotel-data.js"/>

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = `${value}€` ;
}


let contentString = ""
let filters = {
  place: "",
  stars: 0,
  price: 0
}

// Load Content
// All
loadWhenOpen()
function loadWhenOpen() {
    loadNav()
    loadContent()
    document.getElementById("output").innerHTML = `<p id="errorMessage">Search for your a Hotel</p>`
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
                  <input type="text" name="name" class="question" id="inputPlace" required autocomplete="off" placeholder="Berlin, Barcelona, Austria" oninput="input(event)"/>
                  <label for="nme"><span class="text">Where do you want to find a Hotel?</span></label>
                </div>
                <div class="input2">
                  <input type="number" name="name" class="question" id="inputStars" required autocomplete="off" min="0" max="5" placeholder="1, 2, 3, 4, 5" oninput="input(event)"/>
                  <label for="nme"><span class="text">How many Stars?</span></label>
                </div>
                <div class="input3">
                <p>How much should it Cost?</p>
                <div class="input-range">
                          <input class="range" id="inputPrice" type="range" name="" value="0" min="0" max="2000" oninput="rangeSlide(this.value); input(event);">
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

        // Get the user input for place, stars, and price
        let placeInput = document.getElementById("inputPlace");
        let starInput = document.getElementById("inputStars");
        let priceInput = document.getElementById("inputPrice");

        filters.place = placeInput ? placeInput.value : '';
        filters.stars = starInput && starInput.value ? parseFloat(starInput.value) : '';
        filters.price = priceInput && priceInput.value ? parseFloat(priceInput.value) : '';

        // Check if any of the filters have a valid value
        if (filters.place !== "") {
            loadHotels();
            console.log(filters.place + " " + filters.stars + " " + filters.price);
        } else {
            // Clear the output if no valid input is provided
            document.getElementById("output").innerHTML = `<p id="errorMessage">Search for a location</p>`
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


// Ausgabe Hotels
function loadHotels() {
  let hotelString = "";

  for (let i = 0; i < hotels.length; i++) {
      for (let j = 0; j < hotels[i].length; j++) {
          let hotel = hotels[i][j];
          let matches = true;

          // Filter für den Ort
          if (filters.place && filters.place !== "") {
            let locationString = hotel.location.toLowerCase();
            if (!locationString.includes(filters.place.toLowerCase())) {
                matches = false;
            }
           }

          // Filter für die Sternebewertung
          if (filters.stars && filters.stars !== "" && hotel.starRating != filters.stars) {
            matches = false;
          }

          // Filter für den Preis
          if (filters.price && filters.price !== "") {
            let averagePrice = (hotel.price.min + hotel.price.max) / 2;
            let priceRange = averagePrice * 0.2; // 20% Schwankungsbreite
            if (averagePrice < filters.price - priceRange || averagePrice > filters.price + priceRange) {
                matches = false;
            }
          }

          // Wenn das Hotel den Filtern entspricht, füge es zum hotelString hinzu
          if (matches) {
              hotelString += `
                  <div class="output-all-boxes-singleBox">
                      <div class="singleBox-img">
                          <img src="../img/data/hotels/${hotel.image}.jpg" alt="">
                      </div>
                      <div class="singleBox-info">
                          <div class="singleBox-1row">
                              <p class="singleBox-name">${hotel.name}</p>
                              <div class="singleBox-stars">
                                  ${loadStars(hotel.starRating)}
                              </div>
                              <div class="singleBox-location">
                                  <img src="../img/outputBox/location.png" alt="">
                                  <p>${hotel.location}</p>
                              </div>
                          </div>
                          <div class="singleBox-2row">
                              <p class="singleBox-description">${hotel.description}</p>
                          </div>
                          <div class="singleBox-3row">
                              <p class="singleBox-price">${hotel.price.min} - ${hotel.price.max} €<span class="price-span">/night</span></p>
                              <button class="button-18" onclick="AddHotelToTrip(${i}, ${j})" role="button">Add</button>
                          </div>
                      </div>
                  </div>`;
          }
      }
  }

  document.getElementById("output").innerHTML = hotelString;
}

function loadStars(id) {
  starString = ""
  for (let i = 0; i < id; i++) {
    starString += `<img src="../img/outputBox/star.png" alt="">`
  }
  return starString;
}


function AddHotelToTrip(i, j){
  let hotel = hotels[i][j];

  let storedHotels = JSON.parse(localStorage.getItem('2BHITM_SEMSPROJEKT_hotels')) || [];
  storedHotels.push(hotel);
  localStorage.setItem('2BHITM_SEMSPROJEKT_hotels', JSON.stringify(storedHotels));

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
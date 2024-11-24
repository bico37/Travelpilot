var windowHeight = window.innerHeight;
console.log("Die Höhe des Browserfensters beträgt: " + windowHeight + " Pixel");

let overviewString =  ""

// window.onload = loadWhenOpen;

// Load Content
// All
loadWhenOpen()
function loadWhenOpen() {
    loadNav()
    loadTrips()
    document.getElementById('loadContent').innerHTML += overviewString;
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
// Content Trips
function loadTrips(){
    loadCreatedSide()
    // loadSelectedTripOverview()
}
// Create new & headline, layout
function loadCreatedSide(){
  overviewString += `
  <p class="headline">Plan your Trips for free:</p>
  <div class="layout">
    <div class="allTrips">
      <div class="allTrips-createNew">
        <img class="allTrips-plusVector" src="../img/yourTrip/plus-vector.png" alt="">
        <p class="allTrips-Text" onclick="createNewTrip()">Plan new Trip</p>
      </div>

      <div class="allTrips-created" id="loadCreatedTrips">
          ${loadCreatedTrips()}
      </div>
      
  </div>
  <div id="loadDetailInfo">
      </div>`;
}

// See selected Details
function loadSelectedTripOverview(id){
  let detailString = ""
  let createdTrips = JSON.parse(localStorage.getItem('2BHITM_SEMSPROJEKT_allTrips')) || [];

  let selectedTrip = createdTrips[id]
  console.log(selectedTrip)


  detailString = `
    <div class="tripOverview">
        <div class="tripOverview-nameInput">
          <p class="tripOverview-text">${selectedTrip.name}</p>
          <img class="tripOverview-nameEdit" src="../img/yourTrip/editText-icon.png" alt="">
        </div>


        <div class="tripOverview-img">
          <div class="tripOverview-fileChoose">
            <p>Choose a image for your Trip</p>
            <input type="file" class="tripOverview-fileInput" name="" id=""></input>
          </div>
          <div class="tripOverview-outputImg">
            ${loadTripImg()}
          </div>
        </div>

        <div class="tripOverview-totalsCoastOverview">
          <div class="tripOverview-totalBookings">
            ${loadOverviewDetails()}
          </div>
        </div>
    </div>`

    document.getElementById('loadDetailInfo').innerHTML = detailString; // Hier wird der detailString dem Element 'loadContent' im HTML hinzugefügt
}

function loadCreatedTrips() {
  let createdTripsString = ""

  const createdTrips = JSON.parse(localStorage.getItem('2BHITM_SEMSPROJEKT_allTrips')) || [];

  createdTrips.forEach((trip, index) => {
    createdTripsString += `
    <div class="singleTrip-design" id="trip${index + 1}" onclick="loadSelectedTripOverview(${index})">
      <p class="trip-text">${trip.name}</p>
    </div>`;
  });

  console.log(createdTrips)
  return createdTripsString;
}
// 
// Details of Trip
// 

// Load img of the trip
function loadTripImg() {
    return `<img src="../img/yourTrip/paris.jpg" alt="">`
}

// Load details
function loadOverviewDetails(id) {


 `
    <div class="tripOverview-type">
        <p class="tripOverview-typeText">Total Hotels:</p>
        <p class="tripOverview-typePrice">400€</p>
    </div>
    <div class="tripOverview-type">
        <p class="tripOverview-typeText">Total Flights:</p>
        <p class="tripOverview-typePrice">400€</p>
    </div>
    <div class="tripOverview-type">
        <p class="tripOverview-typeText">Total Cars:</p>
        <p class="tripOverview-typePrice">400€</p>
    </div>
    <div class="tripOverview-type">
        <p class="tripOverview-typeText">Total Activities:</p>
        <p class="tripOverview-typePrice">400€</p>
    </div>

    <div class="tripOverview-totalPrice">
        <p class="tripOverview-typeText">Total Price</p>
        <p class="tripOverview-typePrice">1600€</p>
    </div>`
}

// Crate new Trip
function createNewTrip() {
  let allTrips = JSON.parse(localStorage.getItem('2BHITM_SEMSPROJEKT_allTrips')) || [];

  // Zufällige Werte für die Box-Eigenschaften generieren (nur als Beispiel)
  let name = "Box " + (allTrips.length + 1);
  let image = "bild.jpg"; // Hier kannst du den Bildpfad angeben
  let hotelsCosts = 0;
  let carsCosts = 0;
  let flightsCosts = 0;
  let activitiesCosts = 0;
  let totalCosts = 0;

  // Neues Objekt für den Trip erstellen
  let trip = {
    name: name,
    image: image,
    hotelsCosts: hotelsCosts,
    carsCosts: carsCosts,
    flightsCosts: flightsCosts,
    activitiesCosts: activitiesCosts,
    totalCosts: totalCosts
  };

  // Das neue Trip-Objekt zum Array hinzufügen
  allTrips.push(trip);

  // Das aktualisierte Array der Trips im Local Storage speichern
  localStorage.setItem('2BHITM_SEMSPROJEKT_allTrips', JSON.stringify(allTrips));

  // Lade und zeige die aktualisierten Trips an
  // loadCreatedTrips();
  location.reload()
}

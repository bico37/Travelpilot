/// <reference path="./data/hotel-data.js"/>
let contentString = "";

// Load Content
// All
loadWhenOpen();
loadNav();
function loadWhenOpen() {
  loadContent();
  loadTextForRecHotel();
  loadRecommendedHotels(); 

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
  loadGridSide1();
  loadGridSide2();
  document.getElementById("ausg-content").innerHTML = contentString;
  contentString = ""
}

// Left side
function loadGridSide1() {
  contentString += `
    <div class="currentTrip-grid">
      <div class="currentTrip-grid1">
        ${loadTripName()}
        <div class="currentTrip-recommended">
          <div id="loadTextForRec"></div>
          <div class="currenTrip-recommendedHotels" id="loadRecHotels">

          </div>
        </div>
      </div>
    `;
}

function loadTripName() {
  let tripName = "";
  tripName = `
    <div class="currentTrip-name">
        
        <input type="text" id="inputPlace" placeholder="Paris 2024" oninput="updatePlaceholder()">
    </div>`;

  return tripName;
}

// Update placeholder
function updatePlaceholder() {
  let inputField = document.getElementById("inputPlace");
  let currentValue = inputField.value.trim();

  // Speicher den aktuellen Wert im localStorage
  localStorage.setItem("2BHITM_SEMSPROJEKT_Trip-Name", currentValue);

  if (currentValue === "") {
    inputField.placeholder = "Paris 2024";
  } else {
    inputField.placeholder = currentValue;
  }

  // load recommendet hotels
  loadTextForRecHotel();
  loadRecommendedHotels()
}

function loadPlaceholder() {
  let inputField = document.getElementById("inputPlace");
  let savedValue = localStorage.getItem("2BHITM_SEMSPROJEKT_Trip-Name");

  if (savedValue && savedValue !== "") {
    inputField.value = savedValue;
    inputField.placeholder = savedValue;
  } else {
    inputField.placeholder = "Paris 2024";
  }
  
}

window.onload = loadPlaceholder;

// Left side
function loadTextForRecHotel() {
  document.getElementById("loadTextForRec").innerHTML = `<p>Recommended Hotels for ${getFirstPartOfTripName()}</p>`;
}

// get first part of trip name
function getFirstPartOfTripName() {
  let tripName = localStorage.getItem("2BHITM_SEMSPROJEKT_Trip-Name");

  if (!tripName) {
    tripName = "Paris";
  }

  // Sonderzeichen und Zahlen entfernen
  let cleanedName = tripName.replace(/[^a-zA-Z ]/g, "");

  // Mehrere Leerzeichen auf ein einzelnes reduzieren
  cleanedName = cleanedName.replace(/\s+/g, " ").trim();

  return cleanedName;
}

function loadRecommendedHotels() {
  let recommendedHotelsString = "";
  let place = getFirstPartOfTripName();
  let stars = 5
  // let price = 500

  // console.log(place + " " + stars + " " + price);
  for (let i = 0; i < hotels.length; i++) {
    for (let j = 0; j < hotels[i].length; j++) {
        let hotel = hotels[i][j];
        let matches = true;

        // Filter für den Ort
        if (place && place !== "") {
          let locationString = hotel.location.toLowerCase();
          if (!locationString.includes(place.toLowerCase())) {
              matches = false;
          }
      }

        // Filter für die Sternebewertung
        if (stars && stars !== "" && hotel.starRating != stars) {
          matches = false;
        }

        // // Filter für den Preis
        // if (price && price !== "") {
        //   let priceRange = price * 0.2; // 20% Schwankungsbreite
        //   if (price < price - priceRange || price > price + priceRange) {
        //       matches = false;
        //   }
        // }

        // Wenn das Hotel den Filtern entspricht, füge es zum hotelString hinzu
        if (matches) {
          console.log("hotel found");
          recommendedHotelsString += `
          <div class="output-all-rec-boxes-singleBox">
              <div class="singleBox-img">
                  <img src="../img/data/hotels/${hotel.image}.jpg" alt="">
              </div>
              <div class="singleBox-info">
                  <div class="singleBox-1row">
                      <p class="singleBox-rec-name">${hotel.name}</p>
                      <div class="singleBox-stars">
                          <img src="../img/outputBox/star.png" alt="">
                          <img src="../img/outputBox/star.png" alt="">
                          <img src="../img/outputBox/star.png" alt="">
                          <img src="../img/outputBox/star.png" alt="">
                          <img src="../img/outputBox/star.png" alt="">
                      </div>
                  </div>
                      <div class="singleBox-rec-location">
                          <img src="../img/outputBox/location.png" alt="">
                          <p>${hotel.location}</p>
                      </div>
                  <div class="singleBox-2row">
                      <p class="singleBox-rec-price">${hotel.price.min} - ${hotel.price.max} €<span class="price-rec-span">/night</span></p>
                      <button class="button-18" onclick="AddHotelToTrip(${i}, ${j})" role="button">Add</button>
                  </div>
              </div>
          </div>`;
        }
  }

  // if(recommendedHotelsString == "") {
  //   recommendedHotelsString = `<p id="error-message">Sorry, no recommended hotels found</p>`;
  // }
}

  document.getElementById("loadRecHotels").innerHTML = recommendedHotelsString;
}

// Add the recommended to trip list
function AddHotelToTrip(i, j){
  let hotel = hotels[i][j];

  let storedHotels = JSON.parse(localStorage.getItem('2BHITM_SEMSPROJEKT_hotels')) || [];
  storedHotels.push(hotel);
  localStorage.setItem('2BHITM_SEMSPROJEKT_hotels', JSON.stringify(storedHotels));

  
  addedToTripMessage();
  loadWhenOpen()
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


// **********
//right side
function loadGridSide2() {
  contentString += `
    <div class="trip-alls">
        <div class="currentTrip-grid2">
            ${loadYourTripInfos()}
        </div>
    </div>
</div>
    `;
}

function loadYourTripInfos() {
  return (
    loadYourTripHotels() +
    loadYourTripCars() +
    loadYourTripFlights() +
    loadYourTripActivities()
  );
}

//Hotels
function loadYourTripHotels() {
  let allHotelsString = "";
  allHotelsString = `
    <div class="trip-hotels">
        <p>Hotels:</p>
        <div class="trip-hotels-ausg">
            ${getHotels()}
        </div>
    </div>`;

  return allHotelsString;
}

function getHotels() {
  let hotels = "";
  const savedHotels =
    JSON.parse(localStorage.getItem("2BHITM_SEMSPROJEKT_hotels")) || [];

  // Für jeden gespeicherten Flug HTML-Code generieren
  savedHotels.forEach((hotel, index) => {
    hotels += `
        <div class="hotel-ausg-box">
        <div class="hotel-ausg-box-grid">
            <div class="hotel-ausg-box-grid1">
                <img src="../img/data/hotels/${hotel.image}.jpg" alt="">
            </div>
            <div class="hotel-ausg-box-grid2">
                <div class="hotel-grid2-1row">
                    <p>${hotel.name}</p>
                    <div class="hotel-grid2-1row-stars">${loadStars(
                      hotel.starRating
                    )}</div>
                </div>
                <div class="hotel-grid2-2row">
                    <p class="hotel-price">${hotel.price.min} - ${hotel.price.max}€<span class="hotel-price-span">/night</span></p>
                    <div class="hotel-location">
                        <img src="../img/outputBox/location.png" alt="">
                        <p>${hotel.location}</p>
                    </div>
                </div>
                <div class="singleBox-2row">
                    <p class="singleBox-description">${hotel.description}</p>
                </div>
                <div class="hotel-grid2-3row">
                    <button class="remove-button-18" onclick="removeHotels(${index})" role="button">Remove</button>
                </div>
            </div>
        </div>
    </div>
    `;
  });

  return hotels;
}

function loadStars(index) {
  let starString = "";
  for (let i = 0; i < index; i++) {
    starString += `<img src="../img/outputBox/star.png" alt="">`;
  }

  return starString;
}

// Funktion zum Entfernen eines Hotels aus der Liste und dem Local Storage -> chat gpt
function removeHotels(index) {
  // Gespeicherte Flugdaten aus dem Local Storage abrufen
  let savedHotels =
    JSON.parse(localStorage.getItem("2BHITM_SEMSPROJEKT_hotels")) || [];

  // Den Flug mit dem angegebenen Index aus dem Array entfernen
  savedHotels.splice(index, 1);

  // Das aktualisierte Array als JSON-String im Local Storage speichern
  localStorage.setItem(
    "2BHITM_SEMSPROJEKT_hotels",
    JSON.stringify(savedHotels)
  );

  // Die Anzeige der Hotels aktualisieren
  document.querySelector(".trip-hotels-ausg").innerHTML = getHotels();

    // Removed from Trip Message
    RemovedFromTripMessage();
}

//Cars
function loadYourTripCars() {
  let allCarsString = "";
  allCarsString = `
    <div class="trip-cars">
        <p>Cars:</p>
        <div class="trip-cars-ausg">
             ${getCars()}   
        </div>
    </div>`;

  return allCarsString;
}

function getCars() {
  let cars = "";
  // Gespeicherte Flugdaten aus dem Local Storage abrufen
  const savedCars =
    JSON.parse(localStorage.getItem("2BHITM_SEMSPROJEKT_cars")) || [];

  // Für jeden gespeicherten Flug HTML-Code generieren
  savedCars.forEach((car, index) => {
    cars += `
    <div class="cars-ausg-box">
        <div class="cars-ausg-box-grid">
            <div class="cars-ausg-box-grid1">
                <img src="${car.image}" alt="">
            </div>
            <div class="cars-ausg-box-grid2">
                <div class="cars-grid2-1row">
                    <p>${car.name}</p>
                </div>
                <div class="cars-grid2-2row">
                    <p class="cars-price">${car.pricePerDay}€<span class="cars-price-span">/day</span></p>
                    <div class="cars-km">
                        <img src="../img/cars/persons-icon.png" alt="">
                        <p>${car.capacity}</p>
                    </div>
                </div>
                <div class="cars-grid2-3row">
                    <button class="remove-button-18" onclick="removeCars(${index})" role="button">Remove</button>
                </div>
            </div>
        </div>
    </div>
    `;
  });

  return cars;
}

// Funktion zum Entfernen eines Fluges aus der Liste und dem Local Storage
function removeCars(index) {
  // Gespeicherte Flugdaten aus dem Local Storage abrufen
  let savedCars =
    JSON.parse(localStorage.getItem("2BHITM_SEMSPROJEKT_cars")) || [];

  // Den Flug mit dem angegebenen Index aus dem Array entfernen
  savedCars.splice(index, 1);

  // Das aktualisierte Array als JSON-String im Local Storage speichern
  localStorage.setItem("2BHITM_SEMSPROJEKT_cars", JSON.stringify(savedCars));

  // Die Anzeige der Flüge aktualisieren
  document.querySelector(".trip-cars-ausg").innerHTML = getCars();

  // Removed from Trip Message
  RemovedFromTripMessage();
}

//Flights
function loadYourTripFlights() {
  let allFlightsString = "";
  allFlightsString = `
    <div class="trip-flights">
        <p>Flights:</p>
        <div class="trip-flights-ausg">
            ${getFlights()}
        </div>
    </div>`;

  return allFlightsString;
}

function getFlights() {
  let flights = "";

  // Gespeicherte Flugdaten aus dem Local Storage abrufen
  const savedFlights =
    JSON.parse(localStorage.getItem("2BHITM_SEMSPROJEKT_flights")) || [];

  // Für jeden gespeicherten Flug HTML-Code generieren
  savedFlights.forEach((flight, index) => {
    flights += `
        <div class="flights-ausg-box">
            <div class="flights-ausg-box-grid">
                <div class="flights-ausg-box-grid1">
                    <img src="${flight.airline.image}" alt="">
                </div>
                <div class="flights-ausg-box-grid2">
                    <div class="flights-grid2-1row">
                        <p>${flight.departure} - ${flight.arrival}</p>
                        <div class="flights-grid2-1row-dep">
                            <img src="../img/flights/time icon.png" alt="">
                            <p>${flight.flighttime}</p>
                        </div>
                    </div>
                    <div class="flights-grid2-2row">
                        <p class="flights-price">${flight.price}€<span class="flights-price-span">/flight</span></p>
                    </div>
                    <div class="flights-grid2-3row">
                        <button class="remove-button-18" role="button" onclick="removeFlight(${index})">Remove</button>
                    </div>
                </div>
            </div>
        </div>`;
  });

  return flights;
}

// Funktion zum Entfernen eines Fluges aus der Liste und dem Local Storage -> chat gpt
function removeFlight(index) {
  // Gespeicherte Flugdaten aus dem Local Storage abrufen
  let savedFlights =
    JSON.parse(localStorage.getItem("2BHITM_SEMSPROJEKT_flights")) || [];

  // Den Flug mit dem angegebenen Index aus dem Array entfernen
  savedFlights.splice(index, 1);

  // Das aktualisierte Array als JSON-String im Local Storage speichern
  localStorage.setItem(
    "2BHITM_SEMSPROJEKT_flights",
    JSON.stringify(savedFlights)
  );

  // Die Anzeige der Flüge aktualisieren
  document.querySelector(".trip-flights-ausg").innerHTML = getFlights();

    // Removed from Trip Message
    RemovedFromTripMessage();
}

//Activities
function loadYourTripActivities() {
  let allActivitiesString = "";
  allActivitiesString = `
    <div class="trip-activities">
        <p>Activities:</p>
        <div class="trip-activities-ausg">
            ${getActivities()}       
        </div>
    </div>`;

  return allActivitiesString;
}

function getActivities() {
  let activities = "";

  // Gespeicherte Flugdaten aus dem Local Storage abrufen
  const savedActivites =
    JSON.parse(localStorage.getItem("2BHITM_SEMSPROJEKT_activitie")) || [];

  savedActivites.forEach((activitie, index) => {
    let kinds = activitie.properties.kinds
      .replace(/_/g, " ")
      .replace(/,/g, ", ");
    console.log(activitie);
    activities += `
        <div class="singleBox">
          <div class="singleBox-info">
            <div class="singleBox-1row">
              <p class="singleBox-name">${activitie.properties.name}</p>
              <div class="singleBox-icon">
                <img src="../img/outputBox/star.png" alt="">
                  <p>${activitie.properties.rate} / 7</p>
                </div>
              </div>
              <div class="singleBox-2row">
                <p class="singleBox-price">${kinds}</p>
              </div>
              <div class="singleBox-3row">
                <button class="button-18" onclick="removeActivitie(${index})" role="button">Remove</button>
              </div>
            </div>    
          </div>`;
  });
  return activities;
}

// Remove Activitie
function removeActivitie(index) {
  let savedActivites = JSON.parse(
    localStorage.getItem("2BHITM_SEMSPROJEKT_activitie")
  );

  savedActivites.splice(index, 1);

  localStorage.setItem(
    "2BHITM_SEMSPROJEKT_activitie",
    JSON.stringify(savedActivites)
  );

  document.querySelector(".trip-activities-ausg").innerHTML = getActivities();

  // Removed from Trip Message
  RemovedFromTripMessage();
}


// Removed from Trip Message
function RemovedFromTripMessage() {
  let loginMessage = document.querySelector('#loginMessage');

  loginMessage.textContent = '🔴 Removed from Trip';

   // Hinzufügen oder Entfernen der Klasse "show" für die Animation
   loginMessage.classList.add('show');
   setTimeout(() => {
       loginMessage.classList.remove('show');
   }, 1500); // Timeout für die Animation
}
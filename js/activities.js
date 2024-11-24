function rangeSlide(value) {
  document.getElementById('rangeValue').innerHTML = `${value}€`;
}



let contentString = ""
let highRatedPlaces = []
let starRating

// Load Content
// All
loadWhenOpen()
function loadWhenOpen() {
  loadNav()
  loadContent()
  document.getElementById("output").innerHTML = `<p id="errorMessage">Search for your desired activity</p>`
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
  let loggedIn = checkLoggedIn();
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


function loadContent() {
  loadInput()
  loadOutputFild()
  // Update the content
  document.getElementById('loadContent').innerHTML = contentString;
  contentString = "";

}

// Content - Input
function loadInput() {
  contentString += `
<h1 style="color: red; font-family: 'Lucida Sans', sans-serif;">Not Working!! Missing API Keys </h1>
    <div class="all-layout">
      <div class="input-all">
        <div class="input-fields">
          <form>
            <div class="input1">
              <input type="text" name="place" class="question" id="inputPlace" required autocomplete="off" placeholder="Paris, New York" oninput="input(event)"/>
              <label for="inputPlace"><span class="text">Where would you like to book the activity?</span></label>
            </div>
            <div class="input2">
              <input type="number" name="stars" class="question" id="inputStars" required autocomplete="off" min="1" max="7" placeholder="1 - 7" oninput="input(event)"/>
              <label for="inputStars"><span class="text">How many Stars?</span></label>
            </div>
          </form>
        </div>
      </div>`;
  // <div class="input3">
  //   <p>Price of activity</p>
  //   <div class="input-range">
  //     <Input class="range" type="range" name="" value="0" min="0" max="1000" onChange="rangeSlide(this.value)" onmousemove="rangeSlide(this.value)"></Input>
  //     <span id="rangeValue">0€</span>
  //   </div>
  // </div>
  // 
  // <div class="input2">
  //   <input type="number" name="name" class="question" id="nme" required autocomplete="off" min="0" max="50" placeholder="2, 4"/>
  //   <label for="nme"><span class="text">How many people will be participating?</span></label>
  // </div>
}



// Get the Input of the User

/**
 * This function handles the user input and triggers the necessary actions.
 * It debounces the input to avoid excessive API calls.
 *
 * @param {Event} event - The event object that triggered the function.
 * @returns {void}
 */
let debounceTimer;
function input(event) {
  // Clear the previous timeout to prevent multiple API calls
  clearTimeout(debounceTimer);

  // Set a new timeout to wait for the user to stop typing
  debounceTimer = setTimeout(() => {
    console.log("Wert geändert: " + event.target.value);

    // Get the user input for place and stars
    let placeInput = document.getElementById("inputPlace").value;
    let starInput = document.getElementById("inputStars").value;

    // If the user did not select a star rating, default to 7
    if (starInput == 0) {
      starRating = 7;
    } else {
      // Convert the star input to a number
      starRating = parseInt(starInput);
    }

    // If the user has entered a place, fetch the geographical coordinates
    if (placeInput.length > 0) {
      geoCode(placeInput);
    } else {
      document.getElementById("output").innerHTML = `<p id="errorMessage">Please type in a Place</p>`
    }
  }, 500); // 500 milliseconds = 0.5 seconds
}


// Content - Output
async function loadOutputFild() {
  contentString += `
    <div class="output-all">
        <div class="output-all-boxes" id="output">
              
        </div>
    </div>`
}



/**
 * This function is used to get the geographical coordinates (latitude and longitude) of a given location.
 *
 * @param {string} ort - The name of the location for which the coordinates are to be fetched.
 * @param {string} apiKey - The API key for the Google Cloud Geocoding API.
 *
 * @returns {Promise<string>} - A Promise that resolves to a string containing the coordinates if successful,
 * or an empty string if an error occurs.
 */
async function geoCode(input) {
  // let ort = "Linz"; // Replace with the desired location
  let apiKey = "API_KEY"; // Replace with your Google Cloud API key

  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${apiKey}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (data.status === "OK") {
      let latitude = data.results[0].geometry.location.lat;
      let longitude = data.results[0].geometry.location.lng;
      // console.log(`Die Koordinaten von ${ort} sind: (${latitude}, ${longitude})`);
      return await apiTest(latitude, longitude); // Wait for the result of apiTest
    } else {
      console.log("Fehler bei der Geocoding-Anfrage:", data.status);
      return "";
    }
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
    return "";
  }
}

/**
 * This function is used to fetch high-rated activities from the OpenTripMap API based on the given geographical coordinates.
 *
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 *
 * @returns {Promise<string>} - A Promise that resolves to a string containing the HTML markup for the output boxes,
 * or an empty string if an error occurs.
 */
async function apiTest(lat, lon) {
  let activitiesString = "";

  // Define the API key and radius for the OpenTripMap API
  let apiKey = "API_KEY";
  let radius = 1000;

  // letruct the URL for the OpenTripMap API
  let url = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&apikey=${apiKey}`;

  try {
    // Fetch the data from the OpenTripMap API
    let response = await fetch(url);
    let data = await response.json();

    // Filter the high-rated places from the fetched data
    highRatedPlaces = data.features.filter((place) => {
      let name = place.properties.name;
      let startsOrEndsWithNumber = /^\d|(\d$)/;
      return (
        place.properties.rate == starRating &&
        name !== "" &&
        !startsOrEndsWithNumber.test(name)
      );
    });

    // Generate the HTML markup for the output boxes
    for (let i = 0; i < highRatedPlaces.length; i++) {
      let name = highRatedPlaces[i].properties.name;
      let rate = highRatedPlaces[i].properties.rate;
      let kinds = highRatedPlaces[i].properties.kinds.replace(/_/g, " ").replace(/,/g, ", ");

      activitiesString += `
        <div class="singleBox">
          <div class="singleBox-info">
            <div class="singleBox-1row">
              <p class="singleBox-name">${name}</p>
              <div class="singleBox-icon">
                <img src="../img/outputBox/star.png" alt="">
                  <p>${rate} / 7</p>
                </div>
              </div>
              <div class="singleBox-2row">
                <p class="singleBox-price">${kinds}</p>
              </div>
              <div class="singleBox-3row">
                <button class="button-18" onclick="AddActivitieToTrip(${i})" role="button">Add</button>
              </div>
            </div>    
          </div>`;

      console.log(`${i + 1}. ${name} (${rate}) ${kinds}`);
    }

    console.log(highRatedPlaces);

    // Return the generated HTML markup
    document.getElementById('output').innerHTML = activitiesString;
    // return activitiesString;
  } catch (error) {
    // Log any errors that occur during the fetch and return an empty string
    console.error("Error:", error);
    return "";
  }
}

// Add Activite to Trip
function AddActivitieToTrip(id) {
  let activitie = highRatedPlaces[id];

  let storedActivites = JSON.parse(localStorage.getItem('2BHITM_SEMSPROJEKT_activitie')) || [];
  storedActivites.push(activitie);
  localStorage.setItem('2BHITM_SEMSPROJEKT_activitie', JSON.stringify(storedActivites));

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
var windowHeight = window.innerHeight;
console.log("Die Höhe des Browserfensters beträgt: " + windowHeight + " Pixel");

// Load Content
// All
loadWhenOpen();
function loadWhenOpen() {
  loadNav();
  loadSections();
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
              src="./img/nav/logo/icon-logo.png"
            />

            <h1 class="nav-header-main-headl">TravelPilot</h1>
          </div>
          <img
            class="nav-header-circle"
            loading="lazy"
            alt=""
            src="./img/nav/vector/19406396.png"
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
  let loginMessage = document.querySelector("#loginMessage");
  if (checkLoggedIn()) {
    loginMessage.textContent = "❌Logged out";
  } else {
    loginMessage.textContent = "✅Logged in";
  }
  // Hinzufügen oder Entfernen der Klasse "show" für die Animation
  loginMessage.classList.add("show");
  setTimeout(() => {
    loginMessage.classList.remove("show");
  }, 1500); // Timeout für die Animation
}

// Funktion zum Aktualisieren des Anmeldestatus im HTML
function updateLoginText() {
  let loginText = document.querySelector(".nav-login-text");
  if (checkLoggedIn()) {
    loginText.textContent = "Login";
  } else {
    loginText.textContent = "Logout";
  }
}

// Beim Seitenaufruf den Anmeldestatus im HTML aktualisieren
updateLoginText();

// Sections
function loadSections() {
  loadSection1();
  document.getElementById(
    "loadSection1-2"
  ).innerHTML = `<i class="section1-2-text">Why you should use Travelpilot</i>`;
  loadSection2();
  document.getElementById(
    "loadSection2-3"
  ).innerHTML = `<i class="section2-3-text">What are the Advantages</i>`;
  loadSection3();
  document.getElementById(
    "scrollBackToTop"
  ).innerHTML = `<p class="section-BackToTop-Text" id="scrollToTop">Back to Top</p>`;
  loadFooter();
}
function loadSection1() {
  document.getElementById("loadSection1").innerHTML = `
    <div class="section1-grid">
        <div class="section1-grid1">
          <h1 class="section1-headline">Travel Pilot</h1>
          <h3 class="section1-slogen">Every Adventure Starts with a Plan</h3>
          <button class="button" id="startFree">Get Started Free</button>
        </div>
        <div class="section1-grid2">
          <div class="section1-img"></div>
        </div>
    </div>`;
  // <button class="section1-rectangle-parent">
  //       <div class="section1-get-started-free">Get Started Free</div>
  //       </button>
}
function loadSection2() {
  document.getElementById("loadSection2").innerHTML = `
    <div class="section2-usageboxes">
        <div class="section-2-usagebox-1">
        <div class="section2-usagebox-content">
            <img class="section-2-usagebox-img" src="./img/start/section2-usagebox-1.jpg" alt=""/>
            <p class="section-2-usagebox-headline">Diverse Choises</p>
            <p class="section-2-usagebox-text">
            Discover a diverse selection of hotels, rental cars and activities
            that are perfectly tailored to your individual preferences and
            requirements
            </p>
        </div>
        </div>
        <div class="section-2-usagebox-2">
        <div class="section2-usagebox-content">
            <img class="section-2-usagebox-img" src="./img/start/section2-usagebox-2.jpg" alt=""/>
            <p class="section-2-usagebox-headline">Easy Trip Planning</p>
            <p class="section-2-usagebox-text">
                Use TravelPilot to effortlessly plan your trips, saving time and money while ensuring unforgettable experiences on your journeys
            </p>
        </div>
        </div>
        <div class="section-2-usagebox-3">
        <div class="section2-usagebox-content">
            <img class="section-2-usagebox-img" src="./img/start/section2-usagebox-3.jpg" alt=""/>
            <p class="section-2-usagebox-headline">Simple and Smooth Organization</p>
            <p class="section-2-usagebox-text">
                Plan your entire trip effortlessly by easily adding hotels, flights and activities to your itinerary
            </p>
        </div>
        </div>
    </div>`;
}
function loadSection3() {
  document.getElementById("loadSection3").innerHTML = `
    <div class="section-3-advantages">
        <p class="section-3-headlines">With Travelpilot</p>
        <p class="section-3-text">
            <li class="section-3-liP">Time-saving</li>
            <li class="section-3-liP">Personalizion</li>
            <li class="section-3-liP">Cost Control</li>
            <li class="section-3-liP">Planning certainty</li>
            <li class="section-3-liP">Flexibility</li>
        </p>
    </div>

    <div class="section-3-disadvantages">
        <p class="section-3-headlines">Without TravelPilot</p>
        <p class="section-3-text">
            <li class="section-3-liN">Time-consuming</li>
            <li class="section-3-liN">Lack of overview</li>
            <li class="section-3-liN">Risk of Overspending</li>
            <li class="section-3-liN">Uncertainly in Planning</li>
            <li class="section-3-liN">Lack of overseight</li>
        </p>
    </div>`;
}

//Footer
function loadFooter() {
  document.getElementById("loadFooter").innerHTML = `
    <div class="footer-layout">
        <div class="footer-col1">
          <li class="footer-nav-headline" style="cursor: pointer;">Home</li>
          <li class="footer-nav-subpage" style="cursor: pointer;" id="FyourTrip">Your Trip</li>
          <li class="footer-nav-subpage" style="cursor: pointer;" id="Fhotels">Hotels</li>
          <li class="footer-nav-subpage" style="cursor: pointer;" id="Fflights">Flights</li>
          <li class="footer-nav-subpage" style="cursor: pointer;" id="Fcars">Cars</li>
          <li class="footer-nav-subpage" style="cursor: pointer;" id="Factivities">Activities</li>
        </div>
        <div class="footer-col2">
          <li class="footer-nav-headline" style="cursor: pointer;" onclick="setLogin()">Login</li>
        </div>
        <div class="footer-col3">
          <li class="footer-nav-headline" style="cursor: pointer;">Support</li>
        </div>
        <div class="footer-col4">
            <li class="footer-nav-headline">Contract Me</li>
            <li class="footer-nav-impressum">Limesstraße 12/14</li>
            <li class="footer-nav-impressum">4060, Leonding</li>
            <li class="footer-nav-impressum">bergmairerik@gmail.com</li>
            <li class="footer-nav-impressum">+43 660 0000000</li>
          </div>
      </div>`;
}

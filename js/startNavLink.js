let currentPage;
function setCurrentPage() {
  currentPage = window.location.pathname.split("/").pop();

  localStorage.setItem("currentPage", currentPage);
}
setCurrentPage();


// ---------------- Start ---------------------
document.getElementById("startFree").addEventListener("click", function () {
    window.location.href = "./html/yourTrip-2nd.html"; // Absoluter Pfad
});

// NAV
document.getElementById("backToStart").addEventListener("click", function () {
    window.location.href = "./index.html"; // Absoluter Pfad
});
document.getElementById("yourTripText").addEventListener("click", function () {
    window.location.href = "./html/yourTrip-2nd.html"; // Absoluter Pfad
});
document.getElementById("hotelsText").addEventListener("click", function () {
    window.location.href = "./html/hotel.html"; // Absoluter Pfad
});
document.getElementById("flightsText").addEventListener("click", function () {
    window.location.href = "./html/flights.html"; // Absoluter Pfad
});
document.getElementById("carsText").addEventListener("click", function () {
    window.location.href = "./html/cars.html"; // Absoluter Pfad
});
document.getElementById("activitiesText").addEventListener("click", function () {
    window.location.href = "./html/activities.html"; // Absoluter Pfad
});

// Back To Top
let mybutton = document.getElementById("scrollToTop");
mybutton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Footer Links
document.getElementById("FyourTrip").addEventListener("click", function () {
    window.location.href = "./html/yourTrip-2nd.html"; // Absoluter Pfad
});
document.getElementById("Fhotels").addEventListener("click", function () {
    window.location.href = "./html/hotel.html"; // Absoluter Pfad
});
document.getElementById("Fflights").addEventListener("click", function () {
    window.location.href = "./html/flights.html"; // Absoluter Pfad
});
document.getElementById("Fcars").addEventListener("click", function () {
    window.location.href = "./html/cars.html"; // Absoluter Pfad
});
document.getElementById("Factivities").addEventListener("click", function () {
    window.location.href = "./html/activities.html"; // Absoluter Pfad
});

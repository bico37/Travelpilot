// Current Page
let currentPage;
function setCurrentPage() {
  currentPage = window.location.pathname.split("/").pop();

  localStorage.setItem("currentPage", currentPage);
}
setCurrentPage();

// NAV
document.getElementById("backToStart").addEventListener("click", function () {
  // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
  window.location.href = "../index.html";
});
document.getElementById("yourTripText").addEventListener("click", function () {
  // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
  window.location.href = "./yourTrip-2nd.html";
});
document.getElementById("hotelsText").addEventListener("click", function () {
  // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
  window.location.href = "./hotel.html";
});
document.getElementById("flightsText").addEventListener("click", function () {
  // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
  window.location.href = "./flights.html";
});
document.getElementById("carsText").addEventListener("click", function () {
  // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
  window.location.href = "./cars.html";
});
document
  .getElementById("activitiesText")
  .addEventListener("click", function () {
    // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
    window.location.href = "./activities.html";
  });

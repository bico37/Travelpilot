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


// Anpassung der Links für die startseite
if (currentPage === "index.html") {
  // ---------------- Start ---------------------
  document.getElementById("startFree").addEventListener("click", function () {
    // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
    window.location.href = "./html/yourTrip-2nd.html";
  });

  // NAV
  document.getElementById("backToStart").addEventListener("click", function () {
    // Link zur Startseite
    window.location.href = "./index.html"; // bleibt gleich
  });
  document
    .getElementById("yourTripText")
    .addEventListener("click", function () {
      // Link zu yourTrip-2nd im html-Ordner
      window.location.href = "./html/yourTrip-2nd.html"; // geändert
    });
  document.getElementById("hotelsText").addEventListener("click", function () {
    // Link zu hotel im html-Ordner
    window.location.href = "./html/hotel.html"; // geändert
  });
  document.getElementById("flightsText").addEventListener("click", function () {
    // Link zu flights im html-Ordner
    window.location.href = "./html/flights.html"; // geändert
  });
  document.getElementById("carsText").addEventListener("click", function () {
    // Link zu cars im html-Ordner
    window.location.href = "./html/cars.html"; // geändert
  });
  document
    .getElementById("activitiesText")
    .addEventListener("click", function () {
      // Link zu activities im html-Ordner
      window.location.href = "./html/activities.html"; // geändert
    });

  //Back To Top
  let mybutton = document.getElementById("scrollToTop");
  mybutton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Footer Links
  document.getElementById("FyourTrip").addEventListener("click", function () {
    // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
    window.location.href = "./html/yourTrip-2nd.html";
  });
  document.getElementById("Fhotels").addEventListener("click", function () {
    // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
    window.location.href = "./html/hotel.html";
  });
  document.getElementById("Fflights").addEventListener("click", function () {
    // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
    window.location.href = "./html/flights.html";
  });
  document.getElementById("Fcars").addEventListener("click", function () {
    // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
    window.location.href = "./html/cars.html";
  });
  document.getElementById("Factivities").addEventListener("click", function () {
    // Hier kommt der Code, der ausgeführt werden soll, wenn das Element geklickt wird
    window.location.href = "./html/activities.html";
  });
}

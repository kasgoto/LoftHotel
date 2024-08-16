// Nav icon
const navBtn = document.querySelector(".nav-icon-btn")
const navIcon = document.querySelector(".nav-icon")
// Header top row
const headerTopRow = document.querySelector(".header__top-row")

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active")
  headerTopRow.classList.toggle("header__top-row--mobile")
  document.body.classList.toggle("no-scroll")
}

// Phone mask
mask("[data-tel-input]")

const phoneInputs = document.querySelectorAll("[data-tel-input]")
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = ""
  })
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = ""
  })
})

// OpenStreetMaps
var element = document.getElementById("osm-map")

// // Height has to be set. You can do this in CSS too.
// element.style = 'height:300px;';

// Create Leaflet map on map element.
var map = L.map(element)

// Add OSM tile layer to the Leaflet map.
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map)

// Target's GPS coordinates.
var target = L.latLng("59.943543", "30.338928")

// Set map's center to target with zoom 14.
map.setView(target, 16)

// Place a marker on the same location.
L.marker(target).addTo(map)

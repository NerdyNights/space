"strict";
const home = document.querySelector(".home0");
const destination = document.querySelector(".destination01");
const crew = document.querySelector(".crew02");

// /////////////////////////////////

const displayHome = document.getElementById("home");
const displayDestination = document.getElementById("destination");
const backgroundImage = document.querySelector("main");
////////////////for destination links
const mars = document.querySelector(".mars");
const moon = document.querySelector(".moon");
const europa = document.querySelector(".europa");
const titan = document.querySelector(".titan");
////////////////////////
const planetMoon = document.querySelector(".planet-moon");
const planetMoonRight = document.querySelector(".right-side-destination");
const planetMoonDescription = document.querySelector(
  ".description-destination"
);
const planetMars = document.querySelector(".planet-mars");
const planetMarsDescription = document.querySelector(
  ".description-destination-mars"
);
const planetEuropa = document.querySelector(".planet-europa");
const planetEuropaDescription = document.querySelector(
  ".description-destination-europa"
);
const planetTitan = document.querySelector(".planet-titan");
const planetTitanDescription = document.querySelector(
  ".description-destination-titan"
);

////////////////////////
// functions for description link elements

// section moon
const hideMoonInfo = function () {
  planetMoon.classList.add("hidden");

  planetMoonDescription.classList.add("hidden");
};
const showMoonInfo = function () {
  planetMoon.classList.remove("hidden");
  planetMoonDescription.classList.remove("hidden");
};

// sections mars//
const hideMarsInfo = function () {
  planetMars.classList.add("hidden");
  planetMarsDescription.classList.add("hidden");
};

const showMarsInfo = function () {
  planetMars.classList.remove("hidden");
  planetMarsDescription.classList.remove("hidden");
};
// section europa
const showEuropaInfo = function () {
  planetEuropa.classList.remove("hidden");
  planetEuropaDescription.classList.remove("hidden");
};
const hideEuropaInfo = function () {
  planetEuropa.classList.add("hidden");
  planetEuropaDescription.classList.add("hidden");
};
// section titan
const showTitanInfo = function () {
  planetTitan.classList.remove("hidden");
  planetTitanDescription.classList.remove("hidden");
};
const hideTitanInfo = function () {
  planetTitan.classList.add("hidden");
  planetTitanDescription.classList.add("hidden");
};

////// inside destination links
mars.addEventListener("click", function (e) {
  e.preventDefault();
  hideMoonInfo();
  hideEuropaInfo();
  hideTitanInfo();
  showMarsInfo();
});
moon.addEventListener("click", function (e) {
  e.preventDefault();

  hideMarsInfo();
  hideEuropaInfo();
  hideTitanInfo();
  showMoonInfo();
});
europa.addEventListener("click", function (e) {
  e.preventDefault();
  hideMoonInfo();
  hideMarsInfo();
  hideTitanInfo();
  showEuropaInfo();
});
titan.addEventListener("click", function (e) {
  e.preventDefault();
  hideMoonInfo();
  hideMarsInfo();
  hideEuropaInfo();
  showTitanInfo();
});
///////////////////////

// nav-bar links

destination.addEventListener("click", function (e) {
  e.preventDefault();
  displayHome.classList.add("hidden");

  backgroundImage.style.backgroundImage =
    "url(./images/background-destination-desktop.jpg)";
  planetMoon.classList.remove("hidden");
  planetMoonRight.classList.remove("hidden");
  planetMoonDescription.classList.remove("hidden");
});
home.addEventListener("click", function (e) {
  e.preventDefault();

  displayHome.classList.remove("hidden");
  backgroundImage.style.backgroundImage =
    "url(./images/background-home-desktop.jpg)";
  planetMoonRight.classList.add("hidden");
  hideMoonInfo();
  hideMarsInfo();
  hideEuropaInfo();
  hideTitanInfo();
});
crew.addEventListener("click", function (e) {
  e.preventDefault();
  displayHome.classList.add("hidden");
  displayDestination.classList.add("hidden");
  backgroundImage.style.backgroundImage =
    "url(./images/background-crew-desktop.jpg)";
  hideMoonInfo();
  hideMarsInfo();
  hideEuropaInfo();
  hideTitanInfo();
  planetMoonRight.classList.add("hidden");
});

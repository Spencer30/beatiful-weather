// create your variables for all your html elements that have id's.. document.getElementById('abc')
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const citiesList = document.getElementById("citiesList");
const cityName = document.getElementById("cityName");
// create a function that saves the search to local storage .. addEventListener(click, function)

// create a function that displays all the saved cities from local storage .. hint = displayScores from your quiz prooject

// create a function that will display a value onto the page ... variable.textContext = value

// create a function that will fetch data from an api and save it into a global variable

// create a function that will that will loop through the weather data and display the forecast

// create a function that determines the icon to display baased on the weather

searchBtn.addEventListener("click", handleSearch);

function handleSearch() {
  const value = searchInput.value;
  localStorage.setItem(value, value);
  const element = document.createElement("button");
  element.textContent = value;
  addButtonClasses(element);
  citiesList.prepend(element);
  searchInput.value = "";
}

function displaySavedCities() {
  const length = localStorage.length;
  for (let i = 0; i < length; i++) {
    const key = localStorage.key(i);
    // const value = Number(localStorage[key]);
    const element = document.createElement("button");
    element.textContent = key;
    element.id = key;
    element.addEventListener("click", handleSavedClicked);
    addButtonClasses(element);
    citiesList.appendChild(element);
  }
}

function addButtonClasses(element) {
  // adds bootstrap classes to button element
  element.classList.add("btn");
  element.classList.add("btn-secondary");
  element.classList.add("w-100");
  element.classList.add("my-3");
}

function handleSavedClicked(e) {
  const city = e.target.id;
  cityName.textContent = city;
  fetchWeather(city);
}

function fetchWeather(city) {}

// call functions that need to called on page load here
displaySavedCities();

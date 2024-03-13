function updateWeather(response) {
  console.log(response.data);
}

function searchCity(city) {}
let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(updateWeather);
console.log(apiUrl);
axios.get(apiUrl).then(updateWeather);

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

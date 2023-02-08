import { createElement } from "./createElement.js";
import { getCityByCoordinates } from "./getCityByCoordinates.js";
import { getWeather } from "./getWeather.js";
import { wrapper } from "./globalVariables.js";
import { renderChangeCity } from "./renderChangeCity.js";

export async function renderWeather(latitude, longitude) {
  wrapper.innerHTML = "";
  const degree = createElement("p", "main__degree");
  const description = createElement("p", "main__weather-description");
  const degreeStat = createElement("p", "main__degree-stat");
  const changeCity = createElement("input", "main__change-city");
  changeCity.type = "button";
  changeCity.value = "Change city";
  changeCity.addEventListener("click", renderChangeCity);
  const weather = await getWeather(latitude, longitude);
  const city = await getCityByCoordinates(latitude, longitude);
  console.log(weather);
  degree.innerHTML = `${Math.round(weather.main.temp)}°`;
  description.innerHTML = `${city}`;
  degreeStat.innerHTML = `${Math.round(weather.main.temp_max)}°/${Math.round(
    weather.main.temp_min
  )}° Feels like ${Math.round(weather.main.feels_like)}°`;
  wrapper.prepend(degree, description, degreeStat, changeCity);
}

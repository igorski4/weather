import { getCoordinatesByIP } from "./getCoordinatesByIP.js";
import { renderWeather } from "./renderWeather.js";
import { renderChangeCity } from "./renderChangeCity.js";

window.navigator.geolocation.getCurrentPosition(
  function (position) {
    renderWeather(position.coords.latitude, position.coords.longitude);
  },
  async function () {
    try {
      const coordinates = await getCoordinatesByIP();
      renderWeather(coordinates.location.lat, coordinates.location.lng);
    } catch (err) {
      renderChangeCity();
    }
  }
);

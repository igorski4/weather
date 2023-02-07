import { renderWeather } from "./renderWeather.js";
import { getCoordinatesByCity } from "./getCoordinatesByCity.js";
import { renderError } from "./renderError.js";

export async function handlerInputCity() {
  const city = document.querySelector(".main__input").value;
  if (!city) renderError();
  else {
    const responseCoordinates = await getCoordinatesByCity(city);
    if (responseCoordinates.cod === 200)
      renderWeather(
        responseCoordinates.coord.lat,
        responseCoordinates.coord.lon
      );
    else renderError();
  }
}

import { createParagraph } from "./createParagraph.js";
import { getCity } from "./getCity.js";
import { getWeather } from "./getWeather.js";

const wrapper = document.querySelector(".main__wrapper");

window.navigator.geolocation.getCurrentPosition(async function (position) {
  const { latitude, longitude } = position.coords;
  const degree = createParagraph("main__degree");
  const description = createParagraph("main__weather-description");
  const weather = await getWeather(latitude, longitude);
  const city = await getCity(latitude, longitude);
  degree.innerHTML = `${Math.round(weather.main.temp)}`;
  description.innerHTML = `Windy in ${city}`;
  wrapper.prepend(degree, description);
});

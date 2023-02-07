export async function getWeather(latitude, longitude) {
  const responseWeather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6da82014a187decb6452694efa70ff9d&units=metric`
  );
  return await responseWeather.json();
}

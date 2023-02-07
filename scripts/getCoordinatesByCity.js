export async function getCoordinatesByCity(city) {
  console.log(city);
  const responseCoordinates = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6da82014a187decb6452694efa70ff9d&units=metric`
  );
  return await responseCoordinates.json();
}

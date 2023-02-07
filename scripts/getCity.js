export async function getCity(latitude, longitude) {
  const responseCity = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=6da82014a187decb6452694efa70ff9d`
  );
  const city = await responseCity.json();
  return city[0].local_names.ru;
}

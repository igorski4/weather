export async function getCoordinatesByIP() {
  const responseCoordinates = await fetch("http://ip-api.com/json");
  return await responseCoordinates.json();
}

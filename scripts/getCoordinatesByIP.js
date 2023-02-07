export async function getCoordinatesByIP() {
  const responseCoordinates = await fetch("https://ip-api.com/json");
  return await responseCoordinates.json();
}

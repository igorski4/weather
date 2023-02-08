export async function getCoordinatesByIP() {
  const responseCoordinates = await fetch(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_PQRJff7PXmwDdYfv6IFWi9tXoErLs"
  );
  return await responseCoordinates.json();
}

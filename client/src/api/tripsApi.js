const BASE_URL = "http://localhost:4001";

export async function fetchTrips(keyword = "") {
  const res = await fetch(
    `${BASE_URL}/trips?keywords=${keyword}`
  );
  const json = await res.json();
  return json.data;
}

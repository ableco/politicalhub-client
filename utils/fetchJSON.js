export default async function fetchJSON(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

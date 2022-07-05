/**
 * Implements a data fetcher using browser fetch api
 * @param {string} url The URL to request; may include query string
 * @param {any} payload Optional payload to POST with the request.
 * @param {boolean}isHeaderRequired to set true or false if header required or not.
 */
export default function dataFetcher(
  url,
  bearerToken,
  payload = "",
  method = "GET",
  isHeaderRequired = true
) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "No-Store",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers":
      "Origin, Content-Type,  X-Requested-With, Accept",
    Pragma: "no-cache",
    ...(bearerToken && { Authorization: `Bearer ${bearerToken}` }),
  };

  const options = {
    mode: "cors",
    method,
    ...(isHeaderRequired && { headers: { ...headers } }),
    ...(payload && { body: JSON.stringify(payload) }),
  };

  return fetch(url, options);
}

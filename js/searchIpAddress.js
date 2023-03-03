import { apiKey } from "./apiKey.js";
import { updatePage } from "./updatePage.js";

export async function searchIpAddress(searchedIpAddress) {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${searchedIpAddress}`;
    const fetchResponse = await fetch(url);
    const response = await fetchResponse.json();

    return updatePage(response);
}
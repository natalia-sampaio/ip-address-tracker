import { searchIpAddress } from './searchIpAddress.js';

export async function getUserIpAddress() {
    const url = `https://api.ipify.org/?format=json`;
    const fetchResponse = await fetch(url);
    const response = await fetchResponse.json();
    const popupMessage = "This is your current ip address."
    return searchIpAddress(response.ip, popupMessage);
}
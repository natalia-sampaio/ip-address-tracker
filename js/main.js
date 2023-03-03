import { apiKey } from "./apiKey.js";

async function getUserIpAddress() {
    const url = `https://api.ipify.org/?format=json`;
    const fetchResponse = await fetch(url);
    const response = await fetchResponse.json();

    return searchIpAddress(response.ip);
}

async function searchIpAddress(searchedIpAddress) {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${searchedIpAddress}`;
    const fetchResponse = await fetch(url);
    const response = await fetchResponse.json();
    
    return updatePage(response);
}

function updatePage(address) {
    const ipAddress = address.ip;

    const lat = address.location.lat;
    const lng = address.location.lng;
    const coordinates = [lat, lng];

    generateMap(coordinates, ipAddress);

    const country = address.location.country;
    const region = address.location.region;
    const city = address.location.city;
    const postalCode = address.location.postalCode;

    const timezone = address.location.timezone;

    const isp = address.isp;

    updateCardInfo(ipAddress, country, city, region, postalCode, timezone, isp);
}

function generateMap(coordinates, ipAddress) {
    var map = L.map('map').setView(coordinates, 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    var customIcon = L.icon({
        iconUrl: './images/icon-location.svg',
        
        iconSize: [46, 56], // size of the icon
        iconAnchor: [22, 57], // point of the icon which will correspond to marker's location
        popupAnchor: [2, -57] // point from which the popup should open relative to the iconAnchor
    });
    
    L.marker(coordinates, { icon: customIcon }).addTo(map)
    .bindPopup(ipAddress)
    .openPopup();
}

function updateCardInfo(ipAddress, country, city, region, postalCode, timezone, isp) {
    const ipAddressSlot = document.getElementById('ip-address');
    ipAddressSlot.innerHTML = `${ipAddress}`;

    const locationSlot = document.getElementById('location');
    locationSlot.innerHTML = `${region}, ${city} - ${country}, ${postalCode}`;

    const timezoneSlot = document.getElementById('timezone');
    timezoneSlot.innerHTML = `UTC ${timezone}`;

    const ispSlot = document.getElementById('isp');
    ispSlot.innerHTML = `${isp}`;
}

getUserIpAddress();
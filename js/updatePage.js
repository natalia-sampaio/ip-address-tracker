import { generateMap } from "./generateMap.js";
import { updateKeyInfo } from "./updateKeyInfo.js";

export function updatePage(response) {
    const ipAddress = response.ip;

    const lat = response.location.lat;
    const lng = response.location.lng;
    const coordinates = [lat, lng];

    generateMap(coordinates, ipAddress);

    const country = response.location.country;
    const region = response.location.region;
    const city = response.location.city;
    const postalCode = response.location.postalCode;

    const timezone = response.location.timezone;

    const isp = response.isp;

    updateKeyInfo(ipAddress, country, city, region, postalCode, timezone, isp);
}

import { generateMap } from "./generateMap.js";
import { updateCardInfo } from "./updateCardInfo.js";

export function updatePage(address) {
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
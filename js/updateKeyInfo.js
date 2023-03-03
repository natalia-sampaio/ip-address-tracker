export function updateKeyInfo(ipAddress, country, city, region, postalCode, timezone, isp) {
    const ipAddressSlot = document.getElementById('ip-address');
    ipAddressSlot.innerHTML = `${ipAddress}`;

    const locationSlot = document.getElementById('location');
    locationSlot.innerHTML = `${region}, ${city} - ${country}, ${postalCode}`;

    const timezoneSlot = document.getElementById('timezone');
    timezoneSlot.innerHTML = `${timezone}`;

    const ispSlot = document.getElementById('isp');
    ispSlot.innerHTML = `${isp}`;
}
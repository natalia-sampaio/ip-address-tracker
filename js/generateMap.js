var map = null;

export function generateMap(coordinates, popupMessage) {
    if (map !== undefined && map !== null) {
        map.remove();
    }
    map = L.map('map').setView(coordinates, 13);

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
        .bindPopup(popupMessage)
        .openPopup();
}
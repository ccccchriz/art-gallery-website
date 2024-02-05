let map = L.map("map").setView([41.481498, -71.310356], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 3,
  maxZoom: 17,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let markerIcon = L.icon({
  iconUrl: "assets/icon-location.svg",

  iconSize: [66, 88],
  iconAnchor: [33, 88],
  popupAnchor: [0, -55],
});

let marker = L.marker([41.481398, -71.310306], {
  icon: markerIcon,
  alt: "Modern Art Gallery Location",
})
  .addTo(map)
  .bindPopup("Modern Art Gallery Location");

var map = L.map ('main_map').setView([4.7423553,-74.1126982],16)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([4.7423553,-74.1126982]).addTo(map);
L.marker([4.8023553,-74.1126982]).addTo(map);
L.marker([4.7623553,-74.1126982]).addTo(map);

var tile_url = 'map-layer/{z}/map_{x}_{y}.png';

var map = L.map('mapid', {
    maxZoom: 5,
    minZoom: 1,
    crs: L.CRS.Simple
}).setView([0,0], 2);
        //65409x32839
var southWest = map.unproject([0, 24576], map.getMaxZoom());
var northEast = map.unproject([39936, 0], map.getMaxZoom());
map.setMaxBounds(new L.LatLngBounds(southWest, northEast));
L.tileLayer(tile_url, {
    attribution: 'Map data somethinglovely.net',
    tileSize: 256,
    maxZoom: 5
}).addTo(map);

var lat, lng;

//Eventlistener
map.addEventListener('mousemove', function(ev) {
    lat = ev.latlng.lat;
    lng = ev.latlng.lng;
});

//rmb
document.getElementById("mapid").addEventListener("contextmenu", function (event) {
    // Prevent the browser's context menu from appearing
    event.preventDefault();
    return false; // To disable default popup.
});

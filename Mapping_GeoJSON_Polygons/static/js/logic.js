
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/street-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmFyaW5kZXIxNTA4IiwiYSI6ImNrNTF1MmFzYjEwcXYzbm81aWt5NnZleGIifQ.HTJbPR72IQxnXYAwNBl57A', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id:'mapbox.streets',
	accessToken: API_KEY
});

// We create the Satellite Streets view tile layer that will be an option for our map.
let SatelliteStreets =  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/street-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmFyaW5kZXIxNTA4IiwiYSI6ImNrNTF1MmFzYjEwcXYzbm81aWt5NnZleGIifQ.HTJbPR72IQxnXYAwNBl57A', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets" :SatelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [43.7, -79.3],
zoom: 11,
	layers: [streets]
});
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
// Accessing the airport GeoJSON  URL

// Accessing the Toronto airline routes GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/Barinderkaur15/Mapping_Earthquakes/master/torontoNeighborhoods.json";
// Create a style for the lines.
let myStyle = {
	color: "#ffffa1",
	weight: 2
}
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style:myStyle,
  onEachFeature : function(feature,layer){
    layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>")
  }
}).addTo(map);
});
// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.

// //Set Lat and Long
// Lat = 36.1733
// Long = -120.1794

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);
// var map = L.map('mapid').setView([Lat, Long], 13);


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

//streets.addTo(map);

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//access url airport information
let airportData = "https://raw.githubusercontent.com/raineytracyn/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json"
let torontoData = "https://raw.githubusercontent.com/raineytracyn/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/Mapping_GeoJSON_Linestrings/torontoRoutes.json"
let torontoHoods  = "https://raw.githubusercontent.com/raineytracyn/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json"
// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}


// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
})


















// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     console.log(feature);
//     layer.bindPopup("<h2>City:" + feature.properties.city + "<h2> <hr> <h3>Airport Name:" + feature.properties.name + "</h3>");
//   }
// }).addTo(map);






// // Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);





// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/raineytracyn/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     //maxZoom: 5,
//     accessToken: API_KEY
// });

// console.log("working")
// .addTo (map); 
 
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // Get data from cities.js
// let GeoJSON = sanFranAirport;

// // Loop through the cities array and create one marker for each city.
// GeoJSON.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//       radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });


//   //Add Circles
// L.circle([Lat, Long], {
//     radius: 5000
//  }).addTo(map);

// //Add polygon
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);

// //Add Popup
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// //Use popup as layer
// var popup = L.popup()
//     .setLatLng([51.5, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(mymap);

// //Dealing with Events
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// mymap.on('click', onMapClick);

// //dealing with events -- use popup instead of alert
// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);
// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.

//Set Lat and Long
Lat = 34.0522
Long = -118.2437

var map = L.map('mapid').setView([Lat, Long], 13);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 4,
    accessToken: API_KEY
});

// console.log("working")
// .addTo (map); 
 
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Get data from cities.js
let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//    });

cityData.forEach(function(city) {
    console.log(city)
    L.marker(city.location).addTo(map);
});


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
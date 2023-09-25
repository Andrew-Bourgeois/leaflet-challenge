/*
    1. Get the data set
        * Go to the USGS GeoJSON Feed
        * Choose a data set (ex: all earthquakes from teh past 7 days)
        * Use the url from the dataset JSON to pull in the data for visualization
    2. Import and visualize the data
        * Using Leaflet create a map which plots all the earthquakes from dataset based on lat, long
        * data markers should reflec tteh magnitude of earthquake by the size of marker, and the depth of earthquake by the color.
            - Meaning larger magnitudes should be bigger markers, and deeper earthquakes should be darker in color
        *HINT: depth of the earth can be found as the third coordinate for each earthquicke
       * Include popups which provide additional informaiton about earthquake when marker is clicked
       * Create a legend which provides context for map data
    
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
*/

queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the queryUrl/
d3.json(queryUrl).then(function (data) {
    // createFeatures function on data.features object from the response
    createFeatures(data.features);
});

// create the function createFeatures()
function createFeatures(earthquakeData) {

    // define a function to run once for each feature in the features array
    // Give each featuer a popup which describes addditional features about the earthquake when clicked
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${feature.properties.mag}</p><p>Depth: ${feature.geometry.coordinates[2]} miles</p>`);
    }
}
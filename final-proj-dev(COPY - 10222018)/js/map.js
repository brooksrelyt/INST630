var map = L.map('map').setView([38.9936, -76.9538], 14);
      mapLink = 
          '<a href="http://openstreetmap.org">OpenStreetMap</a>';
      L.tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; ' + mapLink + ' Contributors',
          maxZoom: 18,
          }).addTo(map);
      
/* Initialize the SVG layer */
map._initPathRoot()    

// We simply pick up the SVG from the map object
var svg = d3.select("#map").select("svg"),
g = svg.append("g");

d3.json("../data/circles.json", function(collection) {
  // Add a LatLng object to each item in the dataset 
  collection.objects.forEach(function(d) {
    d.LatLng = new L.LatLng(d.circle.coordinates[0],
                d.circle.coordinates[1])
  })
  
  var feature = g.selectAll("circle")
    .data(collection.objects)
    .enter().append("circle")
    .style("stroke", "black")  
    .style("opacity", .6) 
    .style("fill", "red")
    .attr("r", 20);  
  
  map.on("viewreset", update);
  update();

  function update() {
    feature.attr("transform", 
    function(d) { 
      return "translate("+ 
        map.latLngToLayerPoint(d.LatLng).x +","+ 
        map.latLngToLayerPoint(d.LatLng).y +")";
      }
    )
  }
})  


let map;
let marker;

async function initMap() {
    var { Map } = await google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: 12.8406, lng: 80.1534 },
      zoom: 15,
    });

  // Listen for any clicks on the map.
  map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  });
}

initMap()

function placeMarkerAndPanTo(latLng, map) {
  // If the marker already exists, change its location
  if (marker) {
    marker.setPosition(latLng);
  } else {
    // Create a new marker if one does not exist
    marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
  // Pan the map to the new marker position
  map.panTo(latLng);

  // Update the latitude and longitude values
  document.getElementById('latitude').value = latLng.lat().toFixed(6);
  document.getElementById('longitude').value = latLng.lng().toFixed(6);
}
// Assuming google.maps is already loaded in the global scope
let map;

export function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 13.0827, lng: 80.2707 },
    zoom: 10,
  });

  // Example markers
  addMarker({ lat: 13.0827, lng: 80.2707 });
  addMarker({ lat: 12.8406, lng: 80.1534 });
  addMarker({ lat: 12.9915, lng: 80.2337 });
}

export function addMarker(coords) {
  return new google.maps.Marker({
    position: coords,
    map: map,
    // icon: 'ping.png',
  });
}

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 12.8406, lng: 80.1534 },
    zoom: 15,
  });

}
export function addMarker(lat,lng) {
  var marker = new google.maps.Marker({
    position: {lat,lng},
    map: map,
    // icon: 'ping.png',
  });
}

export function hello(text){
  console.log(text);
}

initMap();




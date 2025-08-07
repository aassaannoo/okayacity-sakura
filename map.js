function initMap() {
  const okayaLocation = { lat: 36.0645, lng: 138.0494 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: okayaLocation,
  });

  const spots = [
    { name: "横河川沿い", position: { lat: 36.076767, lng: 138.056551 } },
    { name: "切目公園", position: { lat: 36.084367, lng: 138.068240 } },
    { name: "横河川沿いの公園", position: { lat: 36.081476, lng: 138.052967 } },
    { name: "宗平寺公園", position: { lat: 36.074464, lng: 138.057893 } },
    { name: "出早公園", position: { lat: 36.091109, lng: 138.051206 } }
  ];

  const spotname = new google.maps.InfoWindow();

  spots.forEach(spot => {
    const marker = new google.maps.Marker({
      position: spot.position,
      map: map,
      title: spot.name,
    });

    marker.addListener("click", () => {
      spotname.setContent(`<strong>${spot.name}</strong>`);
      spotname.open(map, marker);
    });
  });
}
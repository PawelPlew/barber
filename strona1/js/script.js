// Inicjalizacja Mapy Google
function initMap() {
    // Adres barber shopu
    const address = "Zwoleń, Krakowska 15a";

    // Tworzenie mapy z domyślnym środkiem (przed geokodowaniem)
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Powiększenie mapy
        center: { lat: 51.3449, lng: 21.5914 }, // Domyślnie Zwoleń
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{ "color": "#202c3e" }]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{ "gamma": 0.01 }, { "lightness": 20 }, { "color": "#ffffff" }]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#131a26" }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{ "color": "#2b3643" }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#152733" }]
            }
        ]
    });

    // Geokoder Google Maps do konwersji adresu na współrzędne
    const geocoder = new google.maps.Geocoder();

    // Geokodowanie adresu
    geocoder.geocode({ address: address }, function (results, status) {
        if (status === "OK") {
            // Przypisanie środka mapy do znalezionego adresu
            map.setCenter(results[0].geometry.location);

            // Dodanie markera w miejscu adresu
            const marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: "Barbers Two - Zwoleń, Krakowska 15a",
            });
        } else {
            console.error("Geocode nie powiodło się z powodu: " + status);
        }
    });
}

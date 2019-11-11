

function initMap() {
    // The location of Uluru
    var uluru = {lat: 49.200970, lng: -122.913324};
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 21, center: uluru, mapTypeId: 'satellite'});
    var infoWindow = new google.maps.InfoWindow({ map: map });
    // The marker, positioned at Uluru
   // var marker = new google.maps.Marker({position: uluru, map: map});
    var findPlace = new google.maps.places.PlacesService(map);
        findPlace.nearbySearch({
            location : uluru,
            radius : 300,
            type : ['restaurant']
        }, processResult);

    function processResult(results, status)
    {

        if (status == google.maps.places.PlacesServiceStatus.OK)
        {
            for (var i = 0; i < results.length; i++)
            {
                placeMarker(results[i])
            }
        }
    }

    function placeMarker(place)
    {
        var loc = place.geometry.location;
        var marker = new google.maps.Marker({
            position : loc,
            map : map
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent(place.name);
            infoWindow.open(map, this);
        });
    }
}


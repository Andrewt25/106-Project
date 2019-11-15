var map, infoWindow;
function initMap() {
    findLocation();
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        mapTypeId: 'satellite'
    });
    
    infoWindow = new google.maps.InfoWindow;
    //FIND NEARBY RESTAURANT

}

function findRestaurant(centerPos) {
    console.log(centerPos);
    var findPlace = new google.maps.places.PlacesService(map);
    findPlace.nearbySearch({
        location : centerPos,
        radius : 300,
        type : ['restaurant']
    }, processResult);
}

function findLocation() {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
            findRestaurant(pos);
            
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });

    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function processResult(results, status) {

    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            placeMarker(results[i])
        }
    }   
}

function placeMarker(place) {
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

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

/*
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

*/
var location = {

    // Application Constructor
    initialize: function () {
        navigator.geolocation.getCurrentPosition(location.onSuccess, location.onError);
    },

    onSuccess: function (position) {
        'use strict';
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var latLng = new google.maps.LatLng(latitude, longitude);

        var mapOptions = {
            center: latLng,
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('geolocation'), mapOptions);
    },

    onError: function (error) {
        'use strict';
        alert(error.code);
    }
};
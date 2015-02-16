

  function initialize() {
    var mapOptions = {
      // Boundaries of Seattle
      center: { lat:   47.609901, lng:  -122.333674},
      zoom: 13
    };

    // Specific marker on random location within boundaries
    var myLatlng = new google.maps.LatLng(47.612412,-122.336565);
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!",
      icon:  {
        fillColor : blue;
      }
      });
      // To add the marker to the map, call setMap();
      marker.setMap(map);

    }
  google.maps.event.addDomListener(window, 'load', initialize);
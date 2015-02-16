
  function initialize() {
    var geocoder;
    var map;
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(47.663999, -122.309785);
    var mapOptions = {
      zoom: 13,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }


  function codeAddress() {
    console.log("got this far");
    var add = document.getElementById("add").value;
    geocoder.geocode( {'address': add}, function(results, status) {
          console.log("and then i got this far");
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    })
  }



/*<body onload="initialize()">
 <div id="map-canvas" style="width: 320px; height: 480px;"></div>
  <div>
    <input id="address" type="textbox" value="Sydney, NSW">
    <input type="button" value="Encode" onclick="codeAddress()">
  </div>
</body>*/

function initialize() {
  // LatLng needs to be generalized
  var myLatlng = new google.maps.LatLng(47.612412,-122.336565); 
  var mapOptions = {
    zoom: 13,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
// text within the info window
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Millionair Club Charity</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Millionair Club Charity</b> is <b>open to all</b> ' +
      'for <b>breakfast</b> Mondays thru Friday from 6:15 am to 7:00 am.'
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Millionair Club Charity'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

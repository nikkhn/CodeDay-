window.onload = function() {
	var xmlhttp = new XMLHttpRequest();
	var url = "https://data.seattle.gov/resource/hmzu-x5ed.json";
	
	//reads json file  
	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    var myArr = JSON.parse(xmlhttp.responseText);
	    readAddress(myArr);
	    codeAddress();
	    }
	}

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	var map = initialize();
	
	function initialize() {
 		var myLatlng = new google.maps.LatLng(47.612412,-122.336565); 
 		var mapOptions = {
 			zoom: 13,
   			center: myLatlng
   		}
  		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  		return map;	
 	};

	var addresses = [];
	var name = [];
	var meal = [];
	var people = [];
	var dayTime = [];

	//adds addresses into the array
	function readAddress(myArr) {
		for (j = 0; j < myArr.length; j++) {
			addresses[j] = myArr[j].location;
			name[j] = myArr[j].name_of_program;
			meal = myArr[j].meal_served;
			people = myArr[j].people_served;
			dayTime = myArr[j].day_time;
		}

		//debug console code
		for (k = 0; k < addresses.length; k++) {
			console.log(addresses[k]);

		}

	}

	var geocoder;
    function codeAddress() {

    geocoder = new google.maps.Geocoder();
    var lat = [];

    for (g = 0; g < addresses.length; g++) {
    	var address = addresses[g];
      	getCoordinates(address, function(coords) {
      		var myLatlng = new google.maps.LatLng(coords.k, coords.D);
    		//creating marker
    		var marker = new google.maps.Marker({
		    	position: myLatlng,
		      	title:"Hello World!"
		      	});
		      // To add the marker to the map, call setMap();
		      	marker.setMap(map);

			var contentString = '<div id="content">'+
			    '<div id="siteNotice">'+
			    '</div>'+
			    '<h1 id="firstHeading" class="firstHeading">name[g]</h1>'+
			    '<div id="bodyContent">'+
			    '<p><b>Millionair Club Charity</b> is <b>open to all</b> ' +
			    'for <b>breakfast</b> Mondays thru Friday from 6:15 am to 7:00 am.'
			    '</div>'+
			    '</div>';
			//create info windows
			var infowindow = new google.maps.InfoWindow({
			    content: contentString
			});
			//setting info windows on markers
			var marker = new google.maps.Marker({
			    position: myLatlng,
			    map: map,
			    title: 'Millionair Club Charity'
			  });
			
			google.maps.event.addListener(marker, 'click', function() {
			    infowindow.open(map,marker);
			});		     
		})
    }
    console.log("got out of for loop");

    for (h = 0; h < lat.length; h++) {
    	console.log("lat for loop");
    	console.log(lat[h]);

    }
};


    function getCoordinates (address, callback) {
    	var coordinates;
    	geocoder.geocode({ address: address}, function (results, status) {

    		if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
    			console.log("address: " + address + "produced zero results");
    		}

    		console.log("Status is " + status);

    		if (status == google.maps.GeocoderStatus.OK) {
	    		coordinates = results[0].geometry.location;
	    		callback(coordinates);
	    	} 
    	})
    }

	google.maps.event.addDomListener(window, 'load', initialize);
};

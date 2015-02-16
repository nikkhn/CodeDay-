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
 			zoom: 14,
   			center: myLatlng
   		}
  		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  		//transit layer
  		var transitLayer = new google.maps.TransitLayer();
  		transitLayer.setMap(map);




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
			meal[j] = myArr[j].meal_served;
			people[j] = myArr[j].people_served;
			dayTime[j] = myArr[j].day_time;
		}

	}

	var geocoder;
    
    function codeAddress() {
    geocoder = new google.maps.Geocoder();

    //for (g = 0; g < addresses.length; g++) {
    	var address = addresses[0];
    	var programName = name[0];
    	var peopleServed = people[0];
    	var mealServed = meal[0];
    	var day = dayTime[0];   

    	var open = false;
    	var windowOpen = null;


    	//millionaire club
      	getCoordinates(addresses[0], function(coords) {
      		var myLatlng = new google.maps.LatLng(coords.k, coords.D);

			var marker = new google.maps.Marker({map: map, position: myLatlng});
			marker.setMap(map)

			marker.info = new google.maps.InfoWindow({
			  content: '<div id="content">'+
			    '<div id="siteNotice">'+
			    '</div>'+
			    '<h1 id="firstHeading" class="firstHeading">' + name[0] + '</h1>'+
			    '<div id="bodyContent">'+
			    '<p><b>' + name[0] + '</b> is <b>' + people[0]+ '</b> ' +
			    'for <b>' + meal[0] + ' </b> on ' + dayTime[0] +
			    '</div>'+
			    '</div>'
			});

			google.maps.event.addListener(marker, 'click', function() {
				if (open) {
					windowOpen.close();
				}
				open = true;
				windowOpen = marker.info;
			  	marker.info.open(map, marker);

			});	     
		})
    //}

    //South park charity
    getCoordinates(addresses[1], function(coords) {
      		var myLatlng = new google.maps.LatLng(coords.k, coords.D);

			var marker = new google.maps.Marker({map: map, position: myLatlng});
			marker.setMap(map)

			marker.info = new google.maps.InfoWindow({
			  content: '<div id="content">'+
			    '<div id="siteNotice">'+
			    '</div>'+
			    '<h1 id="firstHeading" class="firstHeading">' + name[1] + '</h1>'+
			    '<div id="bodyContent">'+
			    '<p><b>' + name[1] + '</b> is <b>' + people[1]+ '</b> ' +
			    'for <b>' + meal[1] + ' </b> on ' + dayTime[1] +
			    '</div>'+
			    '</div>'
			});

			google.maps.event.addListener(marker, 'click', function() {
				if (open) {
					windowOpen.close();
				}
				open = true;
				windowOpen = marker.info;
			  marker.info.open(map, marker);
			});	     
		})

    //
    getCoordinates(addresses[2], function(coords) {
      		var myLatlng = new google.maps.LatLng(coords.k, coords.D);

			var marker = new google.maps.Marker({map: map, position: myLatlng});
			marker.setMap(map)

			marker.info = new google.maps.InfoWindow({
			  content: '<div id="content">'+
			    '<div id="siteNotice">'+
			    '</div>'+
			    '<h1 id="firstHeading" class="firstHeading">' + name[2] + '</h1>'+
			    '<div id="bodyContent">'+
			    '<p><b>' + name[2] + '</b> is <b>' + people[2]+ '</b> ' +
			    'for <b>' + meal[2] + ' </b> on ' + dayTime[2] +
			    '</div>'+
			    '</div>'
			});

			google.maps.event.addListener(marker, 'click', function() {
				if (open) {
					windowOpen.close();
				}
				open = true;
				windowOpen = marker.info;
			  marker.info.open(map, marker);
			});	     
		})

    getCoordinates(addresses[3], function(coords) {
      		var myLatlng = new google.maps.LatLng(coords.k, coords.D);

			var marker = new google.maps.Marker({map: map, position: myLatlng});
			marker.setMap(map)

			marker.info = new google.maps.InfoWindow({
			  content: '<div id="content">'+
			    '<div id="siteNotice">'+
			    '</div>'+
			    '<h1 id="firstHeading" class="firstHeading">' + name[3] + '</h1>'+
			    '<div id="bodyContent">'+
			    '<p><b>' + name[3] + '</b> is <b>' + people[3]+ '</b> ' +
			    'for <b>' + meal[3] + ' </b> on ' + dayTime[3] +
			    '</div>'+
			    '</div>'
			});

			google.maps.event.addListener(marker, 'click', function() {
				if (open) {
					windowOpen.close();
				}
				open = true;
				windowOpen = marker.info;
			  marker.info.open(map, marker);
			});	     
		})

    getCoordinates(addresses[4], function(coords) {
      		var myLatlng = new google.maps.LatLng(coords.k, coords.D);

			var marker = new google.maps.Marker({map: map, position: myLatlng});
			marker.setMap(map)

			marker.info = new google.maps.InfoWindow({
			  content: '<div id="content">'+
			    '<div id="siteNotice">'+
			    '</div>'+
			    '<h1 id="firstHeading" class="firstHeading">' + name[1] + '</h1>'+
			    '<div id="bodyContent">'+
			    '<p><b>' + name[4] + '</b> is <b>' + people[4]+ '</b> ' +
			    'for <b>' + meal[4] + ' </b> on ' + dayTime[4] +
			    '</div>'+
			    '</div>'
			});

			google.maps.event.addListener(marker, 'click', function() {
				if (open) {
					windowOpen.close();
				}
				open = true;
				windowOpen = marker.info;
			  marker.info.open(map, marker);
			});	     
		})
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
window.onload = function() {
	alert("whatup");
	var xmlhttp = new XMLHttpRequest();
	var url = "https://data.seattle.gov/resource/hmzu-x5ed.json";
	//alert(url);

	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    var myArr = JSON.parse(xmlhttp.responseText);
	    readAddress(myArr);
	    codeAddress();
	    }
	}

	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	var addresses = [];

	function readAddress(myArr) {
		for (j = 0; j < myArr.length; j++) {
			addresses[j] = myArr[j].location;
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
      		console.log(coords);
      		lat[g] = coords[0];

      	})
    }
    console.log("got out of for loop");

    for (h = 0; h < lat.length; h++) {
    	console.log("lat for loop");
    	console.log(lat[h]);

    }


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

};
  }



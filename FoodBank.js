window.onload = function() {
	alert("whatup");
	var xmlhttp = new XMLHttpRequest();
	var url = "https://data.seattle.gov/resource/hmzu-x5ed.json";
	//alert(url);

	xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    var myArr = JSON.parse(xmlhttp.responseText);
	    myFunction(myArr);
	    }
	}

	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function myFunction(myArr) {
		for (i = 0; i < myArr.length; i++) {
			if (myArr[i].meal_served === ("Breakfast")) {
			console.log(myArr[i].name_of_program);
			}
		}
	}
};




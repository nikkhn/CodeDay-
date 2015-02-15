window.onload=function(){

	var meals = "self.location='https://data.seattle.gov/resource/hmzu-x5ed.json?Meal_Served=Breakfast"

	var obj = JSON.parse(meals);

	function myFunction(obj)
		{
	    for (var i = 0; i < obj.length; i++){
	    	alert(obj[i]);
	    }
	}
};